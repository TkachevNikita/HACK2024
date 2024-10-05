import { ICommand } from "@pages/private/Comands";
import { atom } from "recoil";

export const commandsState = atom<ICommand | undefined>({
    key: 'commandsState', 
    default: undefined
});

export const selectedCommandState = atom({
    key: 'selectedCommandState', 
    default: 0
});