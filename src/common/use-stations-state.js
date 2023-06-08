import { useContext, useEffect, useState } from 'react';
import { StationsContext } from './StationsContext';
import { sortByPopularity, filterStations } from './utilities'

const useStationsState = () => {
    const allStations = useContext(StationsContext);
    const [filteredStations, setFilteredStations] = useState(null);
    const [activeFilter, setActiveFilter] = useState('');
    const [stationNowPlaying, setStationNowPlaying] = useState('');

    useEffect(() => {
        setFilteredStations(allStations);
    }, [allStations]);

    const clickStation = (stationId) => {
        setStationNowPlaying(stationId);
    };

    const clickFilter = filter => {
        console.log('activeFilter = ' + activeFilter); // returns empty string
        if (filter === activeFilter) {
            return;
        } else if (filter === 'popular') {
            setActiveFilter(filter);
            setFilteredStations(sortByPopularity(allStations));
        } else {
            setActiveFilter(filter);
            setFilteredStations(filterStations(allStations, filter));
        }
    };

    return {
        filteredStations,
        activeFilter,
        stationNowPlaying,
        clickStation,
        clickFilter
    };
};

export default useStationsState;
