import {
  NavLink,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "remix";
import type { MetaFunction } from "remix";
import styles from "./styles/app.css";

export const meta: MetaFunction = () => {
  return { title: "Lily Eisner" };
};

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <link rel="shortcut icon" href="favicon.png" type="image/x-icon" />
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
          >
            Blog
          </NavLink>
          <NavLink
            to="projects"
            className={({ isActive }) =>
              isActive ? "text-magenta" : undefined
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="contact"
            className={({ isActive }) =>
              isActive ? "text-magenta" : undefined
            }
          >
            Contact Me
          </NavLink>
        </nav>
        <div className="p-8">
          <Outlet />
        </div>
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
