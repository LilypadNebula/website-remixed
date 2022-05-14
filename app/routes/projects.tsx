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

export const loader: LoaderFunction = async () => {
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
      
      <div className="flex flex-col w-full">
        <h1 className="mx-auto text-4xl mb-6">My Projects</h1>
        <div className="flex justify-around">
          {projects.map((project) => (
            <div
              key={project.title}
              className="rounded-md border w-1/4 pb-6 text-center"
            >
              <p className="font-heading text-3xl border-b border-fuchsia-400">
                {project.title}
              </p>
              <p className="mb-4 p-4">{project.description}</p>
              <a
                href={project.mainUrl}
                className="bg-fuchsia-400 rounded p-2 text-zinc-900 font-medium"
              >
                {project.mainUrlDisplayText}
              </a>
            </div>
          ))}
        </div>
      </div>
  );
}
