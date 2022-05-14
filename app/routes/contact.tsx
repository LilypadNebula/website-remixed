import type { MetaFunction } from "@remix-run/node";

export const meta: MetaFunction = () => {
  return { title: "Contact - Lily Eisner" };
};
export default function Contact() {
  return (
    <div className="text-center w-full">
      <h1 className="text-4xl mb-6">Contact</h1>
      <div className="flex flex-col items-center space-y-4 justify-center text-2xl">
        <a
          href="http://twitter.com/lilypadnebula"
          className="text-fuchsia-400 underline"
        >
          Twitter
        </a>
        <a
          href="http://github.com/lilypadnebula"
          className="text-fuchsia-400 underline"
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
