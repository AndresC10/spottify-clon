import { useEffect, useState } from "react";
import { Pause, Play } from "./Player";
import { usePlayerStore } from "@/store/playerStore";

export function CardPlayButton({ id, size = "small" }) {
  const {
    currentMusic,
    setActualPlaylist,
    isPlaying,
    setIsPlaying,
    setCurrentMusic,
    previousSong,
    setPreviousSong,
    actualPlaylist,
  } = usePlayerStore((state) => state);

  const [isPlayingPlaylist, setIsPlayingPlaylist] = useState(false);
  const isSamePlaylist = id == previousSong?.playlist.albumId;

  useEffect(() => {
    setIsPlayingPlaylist(isPlaying && actualPlaylist === id);
    console.log(isPlaying);
  }, [isPlaying, actualPlaylist]);

  const handleClick = () => {
    if (!currentMusic.song || currentMusic.song.albumId != id) {
      fetch(`/api/get-info-playlist.json?id=${id}`)
        .then((res) => res.json())
        .then((data) => {
          const { songs, playlist } = data;

          setIsPlaying(true);
          setCurrentMusic({ songs, playlist, song: songs[0] });
          setPreviousSong({ songs, playlist, song: songs[0] });
          setActualPlaylist(id);
        });
      return;
    }

    setIsPlaying(!isPlaying);
    console.log(currentMusic.song.albumId != id);
    return;
  };

  const iconClassName = size === "small" ? "w-4 h-4" : "w-5 h-5";

  return (
    <button
      onClick={handleClick}
      className="card-play-button rounded-full bg-green-500 p-4 hover:scale-105 transition hover:bg-green-400"
    >
      {isPlayingPlaylist ? (
        <Pause className={iconClassName} />
      ) : (
        <Play className={iconClassName} />
      )}
    </button>
  );
}
