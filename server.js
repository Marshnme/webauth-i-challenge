const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const session = require('express-session');
const KnexSessionStorage = require('connect-session-knex')(session);

const loginRouter = require('./routers/loginRouter/loginRouter');
const regRouter = require('./routers/regRouter/regRouter');
const userRouter = require('./routers/userRouter/userRouter');
const knexConnection = require('./data/dbConfig');
const server = express();

const config = {
    name:'random',
    secret: process.env.COOKIE_SECRET || 'orange',
    cookie: {
        maxAge: 1000 * 60 * 60,
        secure: process.env.NODE_ENV ==='development' ? false : true,
        httpOnly: true,
    },
    resave: false,
    saveUninitialized : true,
    store: new KnexSessionStorage({
        knex: knexConnection,
        clearInterval: 1000 * 60 * 10,
        tablename: 'user_sessions',
        sidfieldname: 'id',
        createtable: true 
    })
};


server.use(express.json());
server.use(helmet());
server.use(cors());
server.use(session(config))

server.use('/login', loginRouter);
server.use('/reg', regRouter);
server.use('/users', userRouter);




module.exports = server;