import { atom } from "recoil";

export const isFocus = atom({
  key: "isFocus",
  default: "input1",
});

export const titleState = atom({
  key: "titleState",
  default: "",
});

export const bodyState = atom({
  key: "bodyState",
  default: "",
});

export const tagsState = atom({
  key: "tagsState",
  default: [],
});

export const tagState = atom({
  key: "tagState",
  default: "",
});
