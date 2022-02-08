import Hero from "../components/hero/hero.components";
import Gif from "../components/gif/gif.component";
import Platform from "../components/platform/platform.component";
import Posts from "../components/posts/posts.component";
import SimpleSlider from "../components/slider/slider.component";
import OurJourney from "../components/our-journey/our-journey.components";
import News from "../components/news/news";

function OurStory() {
  return (
    <div className="App">
      <Hero />
      <Gif />
      <Platform />
      <OurJourney />
      <News />
      <Posts />
      <SimpleSlider />
    </div>
  );
}

export default OurStory;
