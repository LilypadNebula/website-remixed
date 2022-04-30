import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return { title: "Projects - Lily Eisner" };
};

export default function Projects() {
  return <p>Projects Page</p>;
}
