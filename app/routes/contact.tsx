import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return { title: "Contact - Lily Eisner" };
};
export default function Contact() {
  return (
    <div className="text-center w-full">
      <p className="text-4xl mb-6">Contact</p>
      <div className="flex space-x-6 justify-center text-2xl">
        <a
          href="http://twitter.com/lilypadnebula"
          className="text-magenta underline"
        >
          Twitter
        </a>
        <a
          href="http://github.com/lilypadnebula"
          className="text-magenta underline"
        >
          GitHub
        </a>
        <p>
          Email: lilypadnebula
          <span className="hidden">
            This is to prevent spam bots from copy pasting my email
          </span>
          @gmail.com
        </p>
      </div>
    </div>
  );
}
