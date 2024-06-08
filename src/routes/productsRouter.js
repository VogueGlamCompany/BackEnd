const { Router } = require("express");


const productsRouter = Router();

productsRouter.get("/", (req, res) => {
    res.send('¡Hola Mundo!');
  });


module.exports = productsRouter;