import type { MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  NavLink,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/app.css";

export const meta: MetaFunction = () => {
  return {
    title: "Lily Eisner",
    charSet: "utf-8",
    viewport: "width=device-width,initial-scale=1",
  };
};

export function links() {
  return [
    { rel: "stylesheet", href: styles },
    { rel: "shortcut icon", href: "favicon.png", type: "image/x-icon" },
  ];
}

function Wrapper({
  children,
  title,
}: {
  children: React.ReactNode;
  title?: string;
}) {
  return (
    <html lang="en">
      <head>
        {title && <title>{title}</title>}
        <Meta />
        <Links />
      </head>
      <body className="bg-zinc-700">
        <nav className="flex p-8 items-center space-x-8 text-2xl font-heading text-zinc-100">
          <img
            src="/big_logo.png"
            alt="Pink circle logo with Lily Eisner in dark text"
            className="h-28 w-28"
          />
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-magenta" : undefined
            }
            end
          >
            Home
          </NavLink>
          <NavLink
            to="blog"
            className={({ isActive }) =>
              isActive ? "text-magenta" : undefined
            }
            prefetch="intent"
          >
            Blog
          </NavLink>
          <NavLink
            to="projects"
            className={({ isActive }) =>
              isActive ? "text-magenta" : undefined
            }
            prefetch="intent"
          >
            Projects
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive ? "text-magenta" : undefined
            }
            prefetch="intent"
          >
            Contact Me
          </NavLink>
        </nav>
        <div className="flex justify-center">{children}</div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}

export default function App() {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
}

export function ErrorBoundary({ error }: { error: Error }) {
  return (
    <Wrapper title={`Error! - ${error.name}`}>
      <div className="text-zinc-100 text-center">
        <p className="text-3xl mb-6">An error occured</p>
        <p>
          Something unexpected happened, sorry! Please try again later, and if
          this continues to show up, let Lily know so she can fix it
        </p>
        <p className="text-lg underline mt-6">Error Details</p>
        <p>
          <pre>{error.message}</pre>
        </p>
      </div>
    </Wrapper>
  );
}
