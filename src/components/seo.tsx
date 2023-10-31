import React from 'react';
import { useStaticQuery, graphql } from 'gatsby';

interface SEOProps {
  description?: string;
  lang?: string;
  meta?: Array<
    | { name: string; content: string; property?: undefined }
    | { property: string; content: string; name?: undefined }
  >;
  title: string;
}

const SEO = ({ description = '', lang = 'en', meta = [], title }: SEOProps) => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
          }
        }
      }
    `,
  );

  const metaDescription = description || site.siteMetadata.description;
  const defaultTitle = site.siteMetadata?.title;

  return (
    <>
      <html lang={lang} />
      <title>Keaton Sentak | {title}</title>
      {defaultTitle ? <title>{`${defaultTitle} | ${title}`}</title> : null}
      <meta name='description' content={metaDescription} />
      <meta property='og:title' content={title} />
      <meta property='og:description' content={metaDescription} />
      <meta property='og:type' content='website' />
      {meta.map((m, index) => (
        <meta key={index} {...m} />
      ))}
    </>
  );
};

export default SEO;
