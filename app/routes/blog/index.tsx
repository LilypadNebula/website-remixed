import { useLoaderData, Link } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import { GraphQLClient } from "graphql-request";
import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return { title: "Blog Posts - Lily Eisner" };
};

const graphcms = new GraphQLClient(
  "https://api-us-east-1.graphcms.com/v2/cl2fdhzyj15jf01z66i2qd3oo/master"
);

export const loader: LoaderFunction = async ({ params }) => {
  const results = await graphcms.request(`
    {
      posts {
        id
        slug
        title
      }
    }
    `);

  return json(results.posts);
};

export default function Blog() {
  const results =
    useLoaderData<{ id: string; slug: string; title: string }[]>();
  return (
    <div className="font-main text-zinc-100">
      <p>Blog Posts</p>
      {results.map((post) => (
        <Link key={post.id} to={post.slug}>
          {post.title}
        </Link>
      ))}
    </div>
  );
}
