export default function Index() {
  return (
    <div className="flex flex-col-reverse md:flex-row items-center md:items-start justify-center font-main text-zinc-100 text-xl">
      <img
        src="/chibi_no_bg.png"
        alt="Chibi drawing of Lily, very cute"
        className="max-h-128"
      />
      <div className="w-1/2 space-y-4">
        <h1>
          Hello! My name is Lily Eisner. I'm a trans woman and a lesbian, and mainly I'm a developer that focuses on front
          end experiences. 
        </h1>
        <p>
          I'm also a writer and like to make games! Here you can find some of that writing, some projects I've done, and keep up with more as they come.
        </p>
      </div>
    </div>
  );
}
