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
      posts(orderBy: publishedAt_DESC) {
        publishedAt
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
    useLoaderData<
      { id: string; slug: string; title: string; publishedAt: string }[]
    >();
  return (
    <div className="font-main text-zinc-100 w-full flex flex-col items-center">
      <h1 className="text-4xl mb-6">Blog</h1>
      {results.map((post) => {
        const created = new Date(post.publishedAt).toLocaleDateString("en-US", {
          month: "short",
          day: "numeric",
          year: "numeric",
        });
        return (
          <Link
            key={post.id}
            to={post.slug}
            className="flex justify-between w-2/3 md:w-1/2 text-2xl border-b border-white hover:border-fuchsia-400 p-2"
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
