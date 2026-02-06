import type React from "react";
import { Helmet } from "react-helmet-async";

type SEOHelmetProps = {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
};

export const SEO = ({
  title,
  description,
  keywords,
  image,
  url,
}: SEOHelmetProps): React.ReactElement => {
  return (
    <Helmet>
      <title>{title}</title>

      <meta
        name="description"
        content={description}
      />

      {keywords && (
        <meta
          name="keywords"
          content={keywords}
        />
      )}

      <meta
        property="og:title"
        content={title}
      />

      <meta
        property="og:description"
        content={description}
      />

      {image && (
        <meta
          property="og:image"
          content={image}
        />
      )}

      {url && (
        <meta
          property="og:url"
          content={url}
        />
      )}

      <meta
        property="og:type"
        content="website"
      />

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      {image && (
        <meta
          name="twitter:image"
          content={image}
        />
      )}
    </Helmet>
  );
};
