export interface NewsModel{
    hits: NewsObjectModel[];
    nbHits: number;
    page: number;
    hitsPerPage: number;
    exhaustiveNbHits: boolean;
    query: string;
    params: string;
    processingTimeMS: number;
}

export interface NewsObjectModel {
    created_at: Date;
    title: string;
    url: string;
    author: string;
    points: number;
    story_text: string;
    comment_text: string;
    num_comments: number;
    story_id: number;
    story_title: string;
    story_url: string;
    parent_id: number;
    created_at_i: Date;
    relevancy_score: number;
    _tags: string[];
    objectID: string;
    _highlightResult: {
        title: {
            value: string;
            matchLevel: string;
            matchedWords: any[];
        },
        url: {
            value: string;
            matchLevel: string;
            matchedWords: any[];
        },
        author: {
            value: string;
            matchLevel: string;
            matchedWords: any[];
        }
    }
}