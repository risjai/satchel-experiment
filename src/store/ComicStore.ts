export interface ComicStore {
    comicBooks: {
        [id: number]: Comic;
    }
    selectedComicId: number | null;

}

export interface Comic {
    name: string;
    comicId: number
}

export const sampleComicData: ComicStore = {
    comicBooks: {
        1: {
            name: "Archie",
            comicId: 123
        },
        2: {
            name: "Rick and Morty",
            comicId: 453
        }
    },
    selectedComicId: 1
}