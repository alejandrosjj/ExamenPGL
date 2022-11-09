const express = require ("express");
const cors = require ("cors");
const routerProductos = require("./routes/productos");
const routerEmpleados = require("./routes/empleados");
const db = require("./src/db/database");
const app = express();
const port = process.env.port || 3000;



(async () => {
    

    try {
        await db.authenticate();
        await db.sync();
        console.log("Se ha conectado correctamente")
    } catch(error) {
        throw new Error(error)
    }
})()


//middleware

app.use(express.json()); // Recibir información
app.use(cors());

app.use("/api/productos", routerProductos);
app.use("/api/empleados", routerEmpleados);

app.listen(port, () => {
    console.log("Servidor corriendo en el puerto:", port);
});