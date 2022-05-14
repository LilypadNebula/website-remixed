import { useLoaderData, useCatch, Link } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { GraphQLClient } from "graphql-request";
import { marked } from "marked";
import type { MetaFunction } from "@remix-run/node";

const graphcms = new GraphQLClient(
  "https://api-us-east-1.graphcms.com/v2/cl2fdhzyj15jf01z66i2qd3oo/master"
);

export const loader: LoaderFunction = async ({ params }) => {
  const result = await graphcms.request(
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
  if (result.post == null) {
    throw new Response("Post not found", { status: 404 });
  }
  const { content, title } = result.post;
  const html = marked(content);

  return json({ title, html });
};

export const meta: MetaFunction = ({ data }) => {
  if (data == undefined) return { title: "Error" };
  return { title: `${data.title} - Lily Eisner` };
};

export default function PostSlug() {
  const { title, html } = useLoaderData<{
    title: string;
    html: string;
  }>();
  return (
    <div className="font-main text-zinc-100 w-full flex flex-col items-center">
      <p className="text-4xl border-b border-white mb-8">{title}</p>
      <div
        dangerouslySetInnerHTML={{ __html: html }}
        className="w-2/3 flex flex-col blog-container"
      ></div>
    </div>
  );
}

export function CatchBoundary() {
  const caught = useCatch();
  if (caught.status === 404) {
    return (
      <div className="text-zinc-100">
        <p className="text-4xl mb-6">Post Not Found</p>
        <Link to="/blog">
          There doesn't appear to be a post here, click here to see all posts
        </Link>
      </div>
    );
  } else throw new Error(`Error occured: ${caught.status}`);
}
