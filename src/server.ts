import express, {Express} from 'express';
import router from './routes/router';
import morgan from 'morgan';
import cors from 'cors';
import {protect} from "./modules/auth";
import {createNewUser, signInUser} from "./handlers/user";






const app:Express = express();
app.use(cors());
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: true}));



app.get('/', (req, res) => {
    res.status(200);
    res.send('Hello World!');

});

app.use('/api', protect, router);
app.post('/user' , createNewUser)
app.post('/signin' , signInUser)



export default app;