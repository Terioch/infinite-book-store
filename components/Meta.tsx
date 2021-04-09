import React from "react";
import Head from "next/head";

interface Props {
  title: string;
  description?: string;
  keywords?: string;
}

const Meta: React.FC<Props> = ({ title, description, keywords }) => {
  return (
    <Head>
      <meta name ="viewport" content="width=device-width, initial-scale=1" />
      <meta name="keywords" content={keywords} />
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <title>{title}</title>
    </Head>
  );
}

export default Meta;