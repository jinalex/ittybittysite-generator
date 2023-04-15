import { Footer } from "./footer";
import Image from "next/image";

export function Home() {
  const date = new Date().toISOString();
  return (
    <>
      <main>
        <h1>itty.bitty.site generator</h1>
        <p className="description">
          ChatGPT Plugin that generates{" "}
          <a href="https://itty.bitty.site">itty.bitty.site</a> URLs
        </p>
        <div className="instructions-container">
          <h2>Installation Instructions</h2>
          <div className="instruction">{`1. Select the Plugins model and scroll to the bottom of the plugins dropdown. Choose 'Plugin store'.`}</div>
          <Image
            className="installation"
            src="/installation-dropdown.png"
            alt="Open plugin store"
            width={600}
            height={340}
          />
          <div className="instruction">{`2. Select 'Install an unverified plugin'`}</div>
          <Image
            className="installation"
            src="/installation-unverified.png"
            alt="Open plugin store"
            width={600}
            height={340}
          />
          <div className="instruction">{`3. Type in "ittybittysite-generator.vercel.app" when prompted`}</div>
          <Image
            className="installation"
            src="/installation-popup.png"
            alt="Installation Instructions"
            width={620}
            height={336}
          />
        </div>
      </main>

      <Footer />
    </>
  );
}
