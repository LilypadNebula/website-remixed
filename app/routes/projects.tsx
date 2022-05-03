import type { MetaFunction } from "@remix-run/node";
import type { LoaderFunction } from "@remix-run/node";
import graphcms from "~/data";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";

interface Project {
  title: string;
  description: string;
  mainUrl: string;
  mainUrlDisplayText: string;
  secondaryUrl: string;
  secondaryUrlDisplayText: string;
}

export const loader: LoaderFunction = async ({ params }) => {
  const results = await graphcms.request(`
  { projects {
    title
  	description
    mainUrl
    mainUrlDisplayText
    secondaryUrl
    secondaryUrlDisplayText
  }}
    `);

  return json(results.projects);
};

export const meta: MetaFunction = () => {
  return { title: "Projects - Lily Eisner" };
};

export default function Projects() {
  const projects = useLoaderData<Project[]>();
  return (
    <div className="font-main text-zinc-100 w-full flex justify-around">
      {projects.map((project) => (
        <div
          key={project.title}
          className="rounded-md border w-1/4 pb-6 text-center"
        >
          <p className="font-heading text-3xl border-b border-magenta">
            {project.title}
          </p>
          <p className="mb-4 p-4">{project.description}</p>
          <a
            href={project.mainUrl}
            className="bg-magenta rounded p-2 text-zinc-700 font-medium"
          >
            {project.mainUrlDisplayText}
          </a>
        </div>
      ))}
    </div>
  );
}
