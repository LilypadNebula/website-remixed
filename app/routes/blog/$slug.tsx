import { useLoaderData } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { GraphQLClient } from "graphql-request";
import { marked } from "marked";
import type { MetaFunction } from "@remix-run/node";

const graphcms = new GraphQLClient(
  "https://api-us-east-1.graphcms.com/v2/cl2fdhzyj15jf01z66i2qd3oo/master"
);

export const loader: LoaderFunction = async ({ params }) => {
  const {
    post: { title, content },
  } = await graphcms.request(
    `
    query PostBySlug($slug: String!){
      post(where: {slug: $slug}) {
        id
        title
        content
      }
    }
    `,
    { slug: params.slug }
  );

  const html = marked(content);

  return json({ title, html });
};

export const meta: MetaFunction = ({ data }) => {
  return { title: `${data.title} - Lily Eisner` };
};

export default function PostSlug() {
  const { title, html } = useLoaderData<{
    title: string;
    html: string;
  }>();
  return (
    <div className="font-main text-zinc-100">
      <p className="text-4xl">{title}</p>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </div>
  );
}
