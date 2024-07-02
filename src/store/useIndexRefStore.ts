import { RefObject } from "react";
import { create } from "zustand";

type IndexRefStore = {
  aboutRef: RefObject<HTMLDivElement> | null;
  setAboutRef: (ref: RefObject<HTMLDivElement>) => void;
  whyUsRef: RefObject<HTMLDivElement> | null;
  setWhyUsRef: (ref: RefObject<HTMLDivElement>) => void;
  teamRef: RefObject<HTMLDivElement> | null;
  setTeamRef: (ref: RefObject<HTMLDivElement>) => void;
  contactUsRef: RefObject<HTMLDivElement> | null;
  setContactUsRef: (ref: RefObject<HTMLDivElement>) => void;
};

export const useIndexRefStore = create<IndexRefStore>((set) => ({
  aboutRef: null,
  setAboutRef: (aboutRef) => set({ aboutRef }),
  whyUsRef: null,
  setWhyUsRef: (whyUsRef) => set({ whyUsRef }),
  teamRef: null,
  setTeamRef: (teamRef) => set({ teamRef }),
  contactUsRef: null,
  setContactUsRef: (contactUsRef) => set({ contactUsRef }),
}));
