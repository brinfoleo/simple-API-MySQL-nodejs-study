const express=require('express');
const controllerProduto=require('./controllers/produtoController');

const routers=express.Router();
routers.get('/List',controllerProduto.List);
routers.post('/Create',controllerProduto.Create);
routers.post('/Update',controllerProduto.Update);
routers.get('/GetOne',controllerProduto.GetOne);
routers.delete('/Delete',controllerProduto.Delete);

module.exports=routers;