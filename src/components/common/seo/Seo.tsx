import Head from 'next/head'

interface seoInterface {
  pagetitle: string
  pageDescription: string
  pagePath: string
  pageImg: string
  pageImgWidth: string
  pageImgHeight: string
}

export const Seo: React.FC<seoInterface> = ({
  pagetitle,
  pageDescription,
  pagePath,
  pageImg,
  pageImgWidth,
  pageImgHeight,
}) => {
  const defaultTitle = 'sansai'
  const defaultDescription = 'sansai'

  const title = pagetitle ? `${pagetitle} | ${defaultTitle}` : defaultTitle
  const description = pageDescription ? `${pageDescription} | ${defaultDescription}` : defaultDescription
  const url = pagePath
  const imgUrl = pageImg
  const imgWidth = pageImgWidth ? pageImgWidth : 1280
  const imgHeight = pageImgHeight ? pageImgHeight : 640

  return (
    <Head>
      <title>{title}</title>
      <meta name="viewport" content="width=device-width,initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={imgUrl} />
      <meta property="og:image:width" content={String(imgWidth)} />
      <meta property="og:image:height" content={String(imgHeight)} />
      <link rel="preconnect" href="https://fonts.gstatic.com" />
      <link rel="canonical" href={url} />
    </Head>
  )
}
