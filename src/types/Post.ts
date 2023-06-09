import {User} from "./User";

export interface Post {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    author: User;
    authorId: string;
}