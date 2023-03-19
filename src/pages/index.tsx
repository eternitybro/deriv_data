/* eslint-disable react/jsx-no-comment-textnodes */
import type { NextPage } from 'next'
import Hero from '../components/Hero'
import Helmet from '../components/Helmet'
import Header from '../components/Header'
import UpdateTokenURI from '../components/UpdateTokenURI'

const Home: NextPage = () => {
  const title = 'DERIVADATA'
  const description = ''
  const image = ''

  return (
    <div className="">
      <Helmet
        title={title}
        description={description}
        imageURL={image} />

      <Header />

      <main className="flex h-screen w-screen justify-center items-center p-8">
        <Hero />
        <div className=" min-h-[300px] relative p-4 border border-white md:w-2/3 transition">
          <UpdateTokenURI />
        </div>
      </main>
    </div>
  )
}

export default Home
