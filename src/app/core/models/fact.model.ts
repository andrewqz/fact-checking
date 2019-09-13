export interface Author {
    id: 0;
    name: string;
    score: number;
    createdDate: Date;
    lastModifiedDate: Date;
}

export interface Keyword {
    id: number;
    facts: any[];
    word: string;
    createdDate: Date;
    lastModifiedDate: Date;
}

export interface Host {
    id: number;
    name: string;
    score: number;
    url: string;
    createdDate: Date;
    lastModifiedDate: Date;
}

export interface Source {
    host: Host;
    id: number;
    url: string;
    createdDate: Date;
    lastModifiedDate: Date;
}

export interface Fact {
    id: number;
    author: Author;
    title: string;
    content: string;
    image: string;
    source: Source;
    keywords: Keyword[];
    createdDate: Date;
    lastModifiedDate: Date;
}
