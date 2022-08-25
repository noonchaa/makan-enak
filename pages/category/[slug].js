import Card from "../../components/card"
import Container from "../../components/container"
import Layout from "../../components/layout"
import Navbar from "../../components/navbar"

export const getStaticPaths = async () => {
    const path = []
    const res = await fetch('https://masak-apa-tomorisakura.vercel.app/api/category/recipes')
    const resPath = await res.json()
    const slug = resPath.results.map(item => { params: item['key'] })
    path.concat(slug)

    return {
        paths: path,
        fallback: true
    }
}

export const getStaticProps = async ({ params }) => {
    const { slug } = params
    const res = await fetch('https://masak-apa-tomorisakura.vercel.app/api/category/recipes/' + slug)
    const masak = await res.json()
    const resCategory = await fetch('https://masak-apa-tomorisakura.vercel.app/api/category/recipes')
    const category = await resCategory.json()

    return {
        props: {
            masak: masak ? masak.results : [],
            category: category ? category.results : [],
            slug: slug
        },
        revalidate: 10
    }
}

const Category = ({ masak, category, slug }) => {
    return (
        <Layout title={slug?.replace('-', ' ')}>
            <Navbar links={category} />
            <Container>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 xl:gap-6 p-3 lg:p-4 xl:p-6'>
                    {masak?.map((item, index) => (
                        <Card content={item} key={index} />
                    ))}
                </div>
            </Container>
        </Layout>
    )
}

export default Category