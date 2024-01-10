import { create } from "zustand";

export const usePlayerStore = create((set) => ({
  isPlaying: false,
  currentMusic: { playlist: null, song: null, songs: [] },
  volume: 1,
  currentTime: 0,
  previousSong: null,
  setVolume: (volume) => set({ volume }),
  setIsPlaying: (isPlaying) => set({ isPlaying }),
  setCurrentMusic: (currentMusic) => set({ currentMusic }),
  setCurrentTime: (currentTime) => set({ currentTime }),
  setPreviousSong: (previousSong) => set({ previousSong }),
}));
