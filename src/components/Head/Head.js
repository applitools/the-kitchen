import NextHead from 'next/head';

import pkg from '../../../package.json';
import theKitchenSocial from '@images/the-kitchen-social.jpg';

const Head = ({ children, title, ...rest }) => {
  const { description, homepage } = pkg;
  const siteName = pkg.title;
  const ogImage = `${homepage}${theKitchenSocial}`;
  let pageTitle;

  if ( typeof title === 'string' ) {
    pageTitle = `${title} | ${siteName}`;
  } else {
    pageTitle = siteName;
  }

  return (
    <NextHead {...rest}>
      <title>{ pageTitle }</title>
      <meta name="description" content={description} />
      <meta property="og:title" content={pageTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={homepage} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteName} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:secure_url" content={ogImage} />
      <meta property="og:image:width" content="2024" />
      <meta property="og:image:height" content="1012" />
      <meta property="og:image:alt" content={siteName} />
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:image" content={ogImage} />
      <meta property="twitter:site" content="@applitools" />
      <meta property="twitter:creator" content="@applitools" />

      <link rel="icon" href="/favicon.ico" />

      { children }
    </NextHead>
  )
}

export default Head;