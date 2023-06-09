import {Post} from "./Post";
import {Product} from "./Product";

export interface User {
    id: string;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
    posts?: Post[];
    products?: Product[];
}
