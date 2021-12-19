import type { GetServerSidePropsContext, InferGetServerSidePropsType } from "next";
import BlockContent from '@sanity/block-content-to-react';

import sanity from '../sanity'
import Layout from "../components/layout";

export default function About({ title, subTitle, aboutBody, aboutTitle }: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return (
    <Layout title={title} subTitle={subTitle}>
      <h2>{aboutTitle}</h2>
      <BlockContent blocks={aboutBody}/>
    </Layout>
  )
}

export type Data = {
  image?: string | null;
  title?: string | null;
  subTitle?: string | null;
  aboutBody?: any;
  aboutTitle?: string | null;
}
export async function getServerSideProps(context: GetServerSidePropsContext) {
  const query = `{
    "configuration": *[_id in ["global_configuration", "drafts.global_configuration"]] | order(_updatedAt desc) [0],
    "about": *[_id in ["global_about", "drafts.global_about"]] | order(_updatedAt desc) [0],
  }`
  const res = await sanity.fetch(query)
  console.log(JSON.stringify(res, null, 2))

  return {
    props: {
      aboutBody: res?.about?.body,
      aboutTitle: res?.about?.title,
      image: null,
      title: res?.configuration?.header?.title || null,
      subTitle: res?.configuration?.header?.subtitle || null,
    },
  }
}
