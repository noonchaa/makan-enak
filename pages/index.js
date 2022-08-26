import { useState } from 'react'
import Card from '../components/card'
import Container from '../components/container'
import Layout from '../components/layout'
import Navbar from '../components/navbar'

export async function getStaticProps(context) {
  const resMasak = await fetch('https://masak-apa.tomorisakura.vercel.app/api/recipes/1')
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
  const [resep, setResep] = useState([])
  const [page, setPage] = useState(1)
  const [loading, setLoading] = useState('Selanjutnya')

  const getResep = async () => {
    setPage(page++)
    setLoading('..Loading..')
    const res = await fetch('https://masak-apa-tomorisakura.vercel.app/api/recipes/'+page).catch(() => {
      setLoading('Resep Habis')
    })
    const data = await res.json()
    setResep(resep.concat(data.results))
    setLoading('Selanjutnya')
  }

  return (
    <Layout>
      <Navbar links={category} />
      <Container>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4 xl:gap-6 p-3 lg:p-4 xl:p-6'>
          {masak?.map((item, index) => (
            <Card content={item} key={index} />
          ))}
          {resep.map((item,index) => (
            <Card content={item} key={index}/>
          ))}
        </div>
        <div className='p-3 text-right'>
          <button disabled={loading == 'Resep Habis' ? true : false} onClick={() => getResep()} className="px-4 py-2 font-medium tracking-wide text-black dark:text-white capitalize transition-colors duration-200 transform bg-white dark:bg-gray-900 dark:hover:bg-gray-800 rounded-md hover:bg-gray-100 focus:outline-none focus:ring focus:ring-gray-800 focus:ring-opacity-80">
            {loading}
          </button>
        </div>
      </Container>
    </Layout>
  )
}
