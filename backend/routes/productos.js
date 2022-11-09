const Producto = require('../models/producto');

const router = require('express').Router();


//Obtener todos los productos
router.get('/', async (req,res)=> {


    const productos = await Producto.findAll()

    res.json(productos);
});


//Obtener un solo producto por id

router.get('/:id', async (req,res)=> {
    const id = req.params.id

    const producto = await Producto.findByPk(id);

    if (producto) {
    res.json(producto);
    } else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}` 
        });
        
    }

});


router.post('/', async (req,res)=> {
    const id = req.body.id
    const name = req.body.name
    const description = req.body.description
    const price = req.body.price
    const stock = req.body.stock

    
    try {
        if(!name || !description || !price || !stock){
    
            return res.status(400).json({
             message: "Rellene todos los campos"
           });
           }
       
           const producto = await Producto.create({
               name, description, price, stock})
       
           res.json(producto);
    } catch (error) {

        console.log(error);
        res.json({
            msg: `'Ups... ha ocurrido un error comuniquese con el soporte`
        })
    }





});


router.delete('/:id', async(req,res) => {
 const id = req.params.id;

 const producto = await Producto.findByPk(id);

 if(! producto) {
    res.status(404).json({
        msg: `No existe un producto con el id ${id}` 
    })
 } else {

    await producto.destroy();
    res.json({
        msg: `El producto con la id ${id} ha sido eliminado`
    })


 }

});


router.put('/:id', async(req,res) => {
    const { body } = req;
    const { id } = req.params;

    const producto = await Producto.findByPk(id);

  try {

    if(!producto) {
        res.status(404).json({
         msg: `No existe un producto con el id ${id}` 
        })
    } else {

    await producto.update(body);
    
    res.json({
        msg: 'Producto actualizado correctamente'
    })

    }
  } catch (error) {
    
    console.log(error);
    res.json({
        msg: `'Ups... ha ocurrido un error comuniquese con el soporte`
    });

  }

});


module.exports = router;