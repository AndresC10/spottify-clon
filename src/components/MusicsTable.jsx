import { CardPlayButton } from "@/components/CardPlayButton";
import { TableItem } from "@/components/TableItem";

import { usePlayerStore } from "@/store/playerStore";

export function MusicsTable({ songs = [], playlistId }) {
  return (
    <div className="bg-zinc-900/30 mt-6 flex-1 p-6 blur-100">
      <div className="flex gap-1 items-center">
        <div>
          <CardPlayButton id={playlistId} size="large" />
        </div>

        <div className="ml-4"></div>
        <button
          type="button"
          className="text-green-500 hover:scale-105 rounded-full flex items-center justify-center h-12 w-12"
        >
          <svg viewBox="0 0 24 24" className="h-8 w-8" astro-icon="mdi:heart">
            <path
              fill="currentColor"
              d="m12 21.35-1.45-1.32C5.4 15.36 2 12.27 2 8.5 2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53L12 21.35z"
            ></path>
          </svg>
        </button>
        <button
          type="button"
          className="text-gray-400 hover:text-gray-300 rounded-full flex items-center justify-center h-12 w-12"
        >
          <svg viewBox="0 0 24 24" className="h-8 w-8" astro-icon="tabler:dots">
            <g
              fill="none"
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              className="icon-tabler"
            >
              <circle cx="5" cy="12" r="1"></circle>
              <circle cx="12" cy="12" r="1"></circle>
              <circle cx="19" cy="12" r="1"></circle>
            </g>
          </svg>
        </button>
      </div>

      <table className="table-auto text-left min-w-full divide-y divide-gray-500/20 mt-8">
        <thead className="">
          <tr className="text-zinc-400 text-sm">
            <th className="px-4 py-2 font-light">#</th>
            <th className="px-4 py-2 font-light">Título</th>
            <th className="px-4 py-2 font-light">Álbum</th>
            <th className="px-4 py-2 font-light"></th>
          </tr>
        </thead>

        <tbody>
          <tr className="h-[16px]"></tr>
          {songs.map((song, index) => (
            <TableItem song={song} index={index} playlistId={playlistId} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
