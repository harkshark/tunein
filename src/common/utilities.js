// Utilities for sort/filter
function sortByPopularity (stations) {
    return stations.sort((a,b) => {
      if (a.popularity < b.popularity) return 1;
      if (a.popularity > b.popularity) return -1;
      return 0;
    });
  }

  function filterStations (stations, filter) {
    return stations.filter(station => station.tags.includes(filter));
  }

  export { sortByPopularity, filterStations };
