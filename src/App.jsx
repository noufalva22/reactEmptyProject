
import Banner from './Components/Banner/Banner';
import Navrbar from './Components/Navbar/Navrbar';
import RowPost from './Components/RowPost/RowPost';
import './app.scss';
import {
  originals, action,
  romance, documentaries,
  comedyMovies,animations,
  adventure,history
} from './urls'

function App() {
  return (
    <div className="App">
      <Navrbar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals" />
      <RowPost url={action} title="Action Movies" isSmall />
      <RowPost url={romance} title="Romantic Movies" />
      <RowPost url={documentaries} title="Documentaries" isSmall />
      <RowPost url={comedyMovies} title="Comedy Movies" />
      <RowPost url={animations} title="Animation Movies" />
      <RowPost url={adventure} title="Adventure"  isSmall/>
      <RowPost url={history} title="Historic Movies" />
    </div>
  );
}

export default App;
