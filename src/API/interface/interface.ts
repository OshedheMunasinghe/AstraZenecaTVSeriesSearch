export interface Serie {
    id: number,
    name: string,
    language: string,
    genre: Genre,
    image: Image,
    summary: string,
}

export interface  Genre{
    genre: string[]
}

export interface Image{
    medium: string,
    original: string,
}
