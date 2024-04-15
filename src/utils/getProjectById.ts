import { db } from "@/lib/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { cache } from "react";
import { IProject } from "./getProjects";

export const getProjectById = cache(async (id: string) => {
    const projectRef = doc(db, "projects", id);
    const document = await getDoc(projectRef);
    const project = {
        ...document.data(),
        id,
    } as IProject;

    return project;
});