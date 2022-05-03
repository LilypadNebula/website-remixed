import { useLoaderData, Link } from "@remix-run/react";
import type { LoaderFunction } from "@remix-run/node";
import { json } from "@remix-run/node";
import type { MetaFunction } from "@remix-run/node";
import graphcms from "~/data";

export const meta: MetaFunction = () => {
  return { title: "Blog - Lily Eisner" };
};

export const loader: LoaderFunction = async ({ params }) => {
  const results = await graphcms.request(`
    {
      posts {
        id
        slug
        title
        createdAt
      }
    }
    `);

  return json(results.posts);
};

export default function Blog() {
  const results =
    useLoaderData<
      { id: string; slug: string; title: string; createdAt: string }[]
    >();
  return (
    <div className="font-main text-zinc-100 w-full flex flex-col items-center">
      <p className="text-4xl mb-6">Blog</p>
      {results.map((post) => {
        const created = new Date(post.createdAt).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });
        return (
          <Link
            key={post.id}
            to={post.slug}
            className="flex justify-between w-1/2 text-2xl border-b border-white hover:border-magenta p-2"
            prefetch="intent"
          >
            <p>{post.title}</p>
            <p>{created}</p>
          </Link>
        );
      })}
    </div>
  );
}
