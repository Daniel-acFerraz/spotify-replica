import React from "react";
import SongItem from "./SongItem";
import { useState } from "react";

const SongList = ({ songsArray }) => {
  let [items, setItems] = useState(5);

  return (
    <div className="song-list">
      {songsArray
        .filter((currentSongObj, index) => index < items)
        .map((currentSongObj, index) => (
          <SongItem {...currentSongObj} index={index} key={index} />
        ))}
      <p
        className="song-list__see-more"
        onClick={() => {
          setItems(items + 5);
        }}
      >
        Ver Mais
      </p>
    </div>
  );
};

export default SongList;
