import Head from 'next/head'
import { FC } from 'react'
import CONFIG from '../config.json'
interface IHeaderProps {
  title?: string
  description?: string
  imageURL?: string
}

const Helmet: FC<IHeaderProps> = ({ title = '', description = '', imageURL = '' }) => {

  return (
    <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <link rel="icon" href="/favicon.ico" />
        <meta property="og:title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageURL} />
        <meta property="twitter:title" content={title} />
        <meta property="og:site_name" content={title} />
        <meta property="twitter:description" content={description} />
        {/* <meta property="og:video" content="video.mp4" />
        <meta property="og:video:type" content="video/mp4" />
        <meta property="og:video:width" content="1920" />
        <meta property="og:video:height" content="1920" /> */}
        <meta name="twitter:site" content={`@${CONFIG.TWITTER_HANDLE_WITHOUT_AT_SIGN}`} />
        <meta name="twitter:creator" content={`@${CONFIG.TWITTER_HANDLE_WITHOUT_AT_SIGN}`} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
  )
}

export default Helmet
