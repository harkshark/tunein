import { Fragment } from "react";
import Tags from "../Tags/Tags";

const NowPlaying = ({station}) => {
	
    const displayNowPlaying = (station) => {
      return (
          <Fragment>
            <p><strong>{station.name}</strong> ({station.popularity}/5.0)</p>
          <Tags tags={station.tags} />
          <p>{station.description}</p>
          <audio controls src={station.streamUrl}></audio>
          </Fragment>
      );
    };
    
      return (
        <div>
          <h2>Now playing</h2>
        <div>{ station?.length ? displayNowPlaying(station[0]) : <p>Nothing</p> }</div>
        </div>
    )
};

export default NowPlaying;
