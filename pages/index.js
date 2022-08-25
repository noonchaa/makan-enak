import Card from '../components/card'
import Container from '../components/container'
import Layout from '../components/layout'
import Navbar from '../components/navbar'

export async function getStaticProps(context) {
  const resMasak = await fetch('https://masak-apa.tomorisakura.vercel.app/api/recipes')
  const masak = await resMasak.json()
  const resCategory = await fetch('https://masak-apa-tomorisakura.vercel.app/api/category/recipes')
  const category = await resCategory.json()

  return {
    props: {
      masak: masak ? masak.results : [],
      category: category ? category.results : []
    },
    revalidate: 10
  }
}

export default function Home({ masak, category }) {
  console.log(masak)

  return (
    <Layout>
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
