import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return { title: "Contact - Lily Eisner" };
};
export default function Contact() {
  return <p>Contact Page</p>;
}
