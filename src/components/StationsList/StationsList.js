const StationsList = ({stations, handleClickStation}) => {
    const displayStations = (stations) => {
        return stations.map(station => (
        <div
          key={station.id}
          className="station"
          onClick={() => handleClickStation(station?.id)}>
          <p><strong>{station.name}</strong></p>
          <img src={station.imgUrl} alt="Station" />
        </div>
      )
    )};
    
    return stations ? <div className="stations">{ displayStations(stations) }</div> : <div>Not available</div>;
};

export default StationsList;
