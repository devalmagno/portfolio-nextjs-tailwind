import { db } from "@/lib/firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import { cache } from "react";

export interface IProject {
    id: string;
    title: string;
    source: string;
    description: string;
    images: string[];
    skillsUsed: string[]
    platforms: string[]
    isFavorite: boolean;
}

export const getProjects = cache(async () => {
    const projectsRef = collection(db, "projects");
    const data = await getDocs(projectsRef);
    const projectList = data.docs.map(doc => ({
        ...doc.data(),
        id: doc.id
    } as IProject));

    return projectList;
});