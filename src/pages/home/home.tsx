import { Banner } from '@components/banner/banner';
import { ExplorePlaces } from '@compositions/explore-places/explore-places';
import { Newsletter } from '@components/newsletter/newsletter';

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
