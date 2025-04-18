export interface Image {
    src: string;
    id: number;
    alt: string;
}

export interface BlogTypes {
    id: string;
    src: string;
    images: Image[];
    name: string;
    postBy: string;
    role: string;
    category: string;
    dateAdded: string;
    description: string;
}
