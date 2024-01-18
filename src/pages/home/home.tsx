import { Banner } from "@components/banner/banner";
import { Newsletter } from "@components/newsletter/newsletter";
import { ExplorePlaces } from "@compositions/explore-places/explore-places";

function Home() {
  return (
    <div>
      <Banner />
      <ExplorePlaces />
      <Newsletter />
    </div>
  );
}

export default Home;
