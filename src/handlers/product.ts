import {Request , Response} from "express";
import prisma from "../db";
import {Product} from "../types/Product";

export const createNewProduct = async (req: Request, res: Response, userId:string, ): Promise<void> => {
    try {
        const { name, price, createdAt,  }: Product = req.body;

        const product = await prisma.product.create({
            data: {
                name,
                price,
                createdAt,
                userId: userId,
                belongsTo:{}

            },
        });

        res.status(201).json({ product });
        res.json(product);

    } catch (error) {
        console.error("Error creating new product:", error);
        res.status(500).json({ error: "Failed to create new product." });
    }
}

