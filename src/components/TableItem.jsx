import { usePlayerStore } from "@/store/playerStore";

export function TableItem({ song, index, playlistId }) {
  const {
    currentMusic,
    isPlaying,
    setIsPlaying,
    setCurrentMusic,
    previousSong,
    setPreviousSong,
  } = usePlayerStore((state) => state);

  const isSamePlaylist = playlistId == previousSong?.playlist.albumId;
  const position = index + 1;

  const handleClick = () => {
    console.log(currentMusic.song);
    if (!currentMusic.song) {
      fetch(`/api/get-info-playlist.json?id=${playlistId}`)
        .then((res) => res.json())
        .then((data) => {
          const { songs, playlist } = data;
          setIsPlaying(true);
          setCurrentMusic({ songs, playlist, song: songs[index] });
        });
      return;
    }
    if (
      currentMusic?.playlist.id == playlistId &&
      currentMusic?.song.id == position
    ) {
      console.log("change");
      setIsPlaying(!isPlaying);
      return;
    }
    fetch(`/api/get-info-playlist.json?id=${playlistId}`)
      .then((res) => res.json())
      .then((data) => {
        const { songs, playlist } = data;
        console.log(playlist.id);
        setIsPlaying(true);
        setCurrentMusic({ songs, playlist, song: songs[index] });
      });
    return;
  };

  return (
    <tr
      key={index}
      className="border-spacing-0 text-gray-300 text-sm font-light hover:bg-white/10 overflow-hidden transition duration-300"
      onClick={handleClick}
    >
      <td className="px-4 py-2 rounded-tl-lg rounded-bl-lg w-5">{index + 1}</td>
      <td className="px-4 py-2 flex gap-3">
        <picture className="">
          <img src={song.image} alt={song.title} className="w-11 h-11" />
        </picture>
        <div className="flex flex-col">
          <h3 className="text-white text-base font-normal">{song.title}</h3>
          <span>{song.artists.join(", ")}</span>
        </div>
      </td>
      <td className="px-4 py-2">{song.album}</td>
      <td className="px-4 py-2 rounded-tr-lg rounded-br-lg">{song.duration}</td>
    </tr>
  );
}
