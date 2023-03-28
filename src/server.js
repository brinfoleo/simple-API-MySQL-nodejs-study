const express=require('express');
const api=express();
const routers=require('./router');

api.use(express.json());
api.use(routers);
api.listen(4200);