import { Request, Response } from "express";
import prisma from "../db";
import {comparePassword, createJWT, hashPassword} from "../modules/auth";
import {User} from "../types/User";

export const createNewUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { username, email, password, updatedAt }: User = req.body;
        const hashedPassword: string = await hashPassword(password);

        const user = await prisma.user.create({
            data: {
                username,
                password: hashedPassword,
                email,
                updatedAt,

            },
        });

        const token = createJWT(user);
        res.status(201).json({ token });
        res.json(user);

    } catch (error) {
        console.error("Error creating new user:", error);
        res.status(500).json({ error: "Failed to create new user." });
    }
};

export const signInUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { email, password }: User = req.body;

        const user = await prisma.user.findUnique({
            where: { email },
        });

        if (!user) {
            res.status(404).json({ error: "User not found." });
            return;
        }

        const passwordValid: boolean = await comparePassword(password, user.password); //async because of how bcrypt works

        if (!passwordValid) {
            res.status(401).json({ error: "Incorrect password." });
            return;
        }

        const token = createJWT(user);
        res.status(200).json({ token });
    } catch (error) {
        console.error("Error signing in user:", error);
        res.status(500).json({ error: "Failed to sign in user." });
    }
}