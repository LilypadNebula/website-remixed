export default function Index() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-center font-main text-zinc-100 text-xl">
      <img
        src="/chibi_no_bg.png"
        alt="Chibi drawing of Lily, very cute"
        className="max-h-128"
      />
      <div className="w-1/2 space-y-4">
        <p>
          Hello! My name is Lily Eisner. I'm a developer that focuses on front
          end experiences. I'm also a writer and like to make games!
        </p>
        <p>
          I'm a trans woman and a lesbian. If either of those things offends
          you, I have an alternate website for you{" "}
          <a
            href="https://gprivate.com/5yd24"
            className="text-magenta underline"
          >
            here!
          </a>
        </p>
      </div>
    </div>
  );
}
