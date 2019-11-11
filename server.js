const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const loginRouter = require('./routers/loginRouter/loginRouter');
const regRouter = require('./routers/regRouter/regRouter');
const userRouter = require('./routers/userRouter/userRouter');
const server = express();

server.use(express.json());
server.use(helmet());
server.use(cors());


server.use('/login', loginRouter);
server.use('/reg', regRouter);
server.use('/users', userRouter);




module.exports = server;