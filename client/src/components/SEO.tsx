import { Helmet } from "react-helmet-async";

interface SEOProps {
  title: string;
  description: string;
  path?: string;
  image?: string;
}

export default function SEO({ title, description, path = "/", image }: SEOProps) {
  const siteUrl = "https://verilabs.ai";
  const fullUrl = `${siteUrl}${path}`;
  const fullTitle = title === "VeriLabs – AI Venture Studio" ? title : `${title} | VeriLabs`;
  const ogImage = image || `${siteUrl}/og-image.png`;

  return (
    <Helmet>
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      
      {/* Open Graph */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="VeriLabs" />
      <meta property="og:image" content={ogImage} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      
      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:site" content="@verilabs_ai" />
      <meta name="twitter:image" content={ogImage} />
    </Helmet>
  );
}
