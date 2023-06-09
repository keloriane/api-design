import jwt from 'jsonwebtoken';
import {User} from "../types/User";
import * as bcrypt from 'bcryptjs';


export const comparePassword = ( password:string , hash:string) => {
    return bcrypt.compare(password, hash);
}


export const hashPassword = (password:string) => {
    return bcrypt.hash(password, 10);
}


export const createJWT = (user: User): string => {
    const token = jwt.sign(
        {
            id: user.id,
            username: user.username,
        },
        process.env.JWT_SECRET || '',
        {
            expiresIn: '1h',

        }
    );
    return token;
}


export const protect = (req: any, res: any, next: any) => {
    const bearer = req.headers.authorization;
    if (!bearer || !bearer.startsWith('Bearer ')) {
        return res.status(401).json({message:'Unauthorized'});
    }

    const [, token] = bearer.split(' ');
    if (!token) {
        return res.status(401).json({message:'no valid token'});
    }

    try {

        req.user = jwt.verify(token, process.env.JWT_SECRET || '');
        next();
    } catch (error) {
        console.error('nope')
        return res.status(401).json({message:'no valid token'});
    }
}