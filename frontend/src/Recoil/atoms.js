import { atom } from "recoil";

export const allGroupsAtom = atom({
    key: "allGroupsAtom",
    default: []
});

export const allTasksAtom = atom({
    key: "allTasksAtom",
    default: [{
        Id: "", 
        Title: "", 
        Members: [{id: "", Email: ""}]
    
    }]
});