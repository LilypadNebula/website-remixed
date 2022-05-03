import { useLoaderData, Link } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/node";
import graphcms from "~/data";

export const meta: MetaFunction = () => {
  return { title: "Blog Posts - Lily Eisner" };
};

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
