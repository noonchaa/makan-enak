import Card from "../../components/card"
import Container from "../../components/container"
import Detail from "../../components/detail"
import Layout from "../../components/layout"
import Navbar from "../../components/navbar"

export const getStaticPaths = async () => {
    const path = []
    const res = await fetch('https://masak-apa-tomorisakura.vercel.app/api/recipes/1')
    const resPath = await res.json()
    const slug = resPath.results.map(item => { params: item['key'] })
    path.concat(slug)

    return {
        paths: path,
        fallback: true
    }
}

export const getStaticProps = async ({ params }) => {
    const randNumb = Math.floor(Math.random() * 10) + 1
    const { slug } = params
    const res = await fetch('https://masak-apa-tomorisakura.vercel.app/api/recipe/' + slug)
    const resep = await res.json()
    const resCategory = await fetch('https://masak-apa-tomorisakura.vercel.app/api/category/recipes')
    const category = await resCategory.json()
    const resMasak = await fetch('https://masak-apa-tomorisakura.vercel.app/api/recipes/'+randNumb)
    const masak = await resMasak.json()

    return {
        props: {
            resep: resep ? resep.results : [],
            category: category ? category.results : [],
            masak: masak ? masak.results : [],
        },
        revalidate: 60
    }
}

const Resep = ({ category, resep ,masak}) => {

    return (
        <Layout title={resep?.title} desc={resep?.desc}>
            <Navbar links={category} />
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3 p-3">
                    <div className="lg:col-span-2">
                        <Detail resep={resep?resep:null}/>
                    </div>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 xl:gap-6 p-3 lg:p-4 xl:p-6'>
                    {masak?.slice(0,6).map((item, index) => (
                        <Card content={item} key={index} />
                    ))}
                </div>
            </Container>
        </Layout>
    )
}

export default Resep