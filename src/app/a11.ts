import { create } from "zustand";

export const useA11yStore = create((set) => ({
  a11yMode: false,
  toggleA11yMode: () =>
    set((state) => {
      const newState = !state.a11yMode;
      localStorage.setItem("a11yMode", JSON.stringify(newState));
      return { a11yMode: newState };
    }),
  initA11y: () => {
    const saved = JSON.parse(localStorage.getItem("a11yMode"));
    if (saved) set({ a11yMode: saved });
  },
}));
