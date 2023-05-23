import { useState } from 'react';
import useFetch from './common/use-fetch';
import { sortByPopularity, filterStations } from './common/utilities';
import Filters from './components/Filters/Filters';
import StationsList from './components/StationsList/StationsList';
import NowPlaying from './components/NowPlaying/NowPlaying';
import './App.scss';

const TUNEIN_API = 'https://s3-us-west-1.amazonaws.com/cdn-web.tunein.com/stations.json';

function App() {
  const { allStations } = useFetch(TUNEIN_API);
  const [filteredStations, setFilteredStations] = useState(null);
  const [activeFilter, setActiveFilter] = useState('');
  const [stationNowPlaying, setStationNowPlaying] = useState('');
  
  const clickStation = station => {
    setStationNowPlaying(station);
  }
  
  const clickFilter = filter => {
    if (filter === 'popular') {
    		setActiveFilter(filter);
        setFilteredStations(sortByPopularity(allStations));
      } else {
      	setActiveFilter(filter);
        setFilteredStations(filterStations(allStations, filter));
      }
  }
  
  // Find and return the station object
  const getStation = (filter) => allStations?.filter(station => station.id === stationNowPlaying);

  return (
  	<div className="app">
      <div>
        <h2>Find stations</h2>
        <Filters active={activeFilter} handleClick={clickFilter} />
        <StationsList
          stations={filteredStations || allStations}
          handleClickStation={clickStation} />
      </div>
      <NowPlaying station={getStation(stationNowPlaying)} />
  	</div>
  );
}

export default App;
