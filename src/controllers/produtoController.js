const modelProduto = require('../models/produto');

module.exports =
{
    async List(req, res) {
        try {
            const produtos = await modelProduto.findAll();
            return res.json(produtos);
        } catch (error) {
            return console.log('Error List: ', error);
        }
    },
    async Create(req, res) {
        try {
            const produtos = await modelProduto.create(
                {
                    id: req.body.id,
                    Descricao: req.body.Descricao,
                    DataCriacao: req.body.DataCriacao,
                    DataAtualizacaoid: null
                }
            );
            return res.json(produtos);

        } catch (error) {
            return console.log('Error Create: ', error);
        }
    },
    async Update(req, res) {
        try {
            const prod = await modelProduto.findByPk(req.body.id);
            if (prod) {
                prod.Descricao = req.body.Descricao;
                prod.DataAtualizacao = new Date;
                await prod.save();


            }
            return res.json(prod);
        } catch (error) {
            return console.log('Error Update: ', error);
        }
    },
    async GetOne(req, res) {
        try {
            const prod = await modelProduto.findByPk(req.body.id);
            return res.json(prod);
        } catch (error) {
            return console.log('Error Update: ', error);
        }
    },
    async Delete(req, res) {
        console.log("Delete....");
        try {
            const prod = await modelProduto.findByPk(req.body.id);
            await prod.destroy();
            return res.json(prod);
        } catch (error) {
            return console.log('Error Delete: ', error);
        }
    }


}