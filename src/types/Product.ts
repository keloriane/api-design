import {User} from "./User";
import {Update} from "./Updates";

export interface Product {
    id: string;
    name: string;
    price: number;
    description: string;
    createdAt: Date;
}
