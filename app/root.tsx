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
      <body>
        <div>
          <nav>
            <NavLink to="home">Home</NavLink>
            <NavLink to="blog">Blog</NavLink>
            <NavLink to="contact">Contact Me</NavLink>
          </nav>
        </div>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
