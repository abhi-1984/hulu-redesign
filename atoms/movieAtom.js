import { atom } from "recoil";

export const movieState = atom({
  key: "movieState",
  default: null,
});

export const dialogState = atom({
  key: "dialogState",
  default: false,
});

export const movieIdState = atom({
  key: "movieIdState",
  default: null,
});
