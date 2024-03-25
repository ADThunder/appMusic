import Albums from "@/components/albums/Albums";
import Blog from "@/components/blog/Blog";
import Events from "@/components/events/Events";
import Hero from "@/components/Hero";
import NewsLetter from "@/components/NewsLetter";
import Player from "@/components/Player";

export default function Home() {
  return (
    <main>
      <Hero />
      <Player />
      <Events />
      <Albums />
      <Blog />
      <NewsLetter />
      {/* <div className="h-[4000px]"></div> */}
    </main>
  );
}
