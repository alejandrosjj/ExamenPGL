const Empleado = require('../models/empleado');

const router = require('express').Router();


//Obtener todos los empleados
router.get('/', async (req,res)=> {


    const empleados = await Empleado.findAll()

    res.json(empleados);
    
});


//Obtener un solo empleado por id

router.get('/:id', async (req,res)=> {
    const id = req.params.id

    const empleado = await Empleado.findByPk(id);

    if (empleado) {
    res.json(empleado);
    } else {
        res.status(404).json({
            msg: `No existe un producto con el id ${id}` 
        });
        
    }

});


router.post('/', async (req,res)=> {
    const id = req.body.id
    const name = req.body.name
    const apellido1 = req.body.apellido1
    const apellido2 = req.body.apellido2
    const rango = req.body.rango
    const sueldo = req.body.sueldo
    const telefono = req.body.telefono

    
    try {
        if(!name || !apellido1 || !apellido2 || !rango || !sueldo || !telefono){
    
            return res.status(400).json({
             message: "Rellene todos los campos"
           });
           }
       
           const empleado = await Empleado.create({
               name, apellido1, apellido2, rango, sueldo, telefono})
       
           res.json(empleado);
    } catch (error) {

        console.log(error);
        res.json({
            msg: `'Ups... ha ocurrido un error comuniquese con el soporte`
        })
    }





});


router.delete('/:id', async(req,res) => {
 const id = req.params.id;


 const empleado = await Empleado.findByPk(id);

 if(! empleado) {
    res.status(404).json({
        msg: `No hay ningún empleado con el id ${id}` 
    })
 } else {

    await empleado.destroy();
    res.json({
        msg: `Has despedido a ${id}`
    })


 }

});


router.put('/:id', async(req,res) => {
    const { body } = req;
    const { id } = req.params;

    const empleado = await Empleado.findByPk(id);

  try {

    if(!empleado) {
        res.status(404).json({
         msg: `No existe un producto con el id ${id}` 
        })
    } else {

    await empleado.update(body);
    
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