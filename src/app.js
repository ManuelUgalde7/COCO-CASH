const express =require("express");
const app = express();


app.listen(3010,()=> 
console.log("listo COCOCASH"));

app.get("/", (req,res)=> {
    res.send("Bienvenido a Coco Cash")});

const routerCuentas = require("./routes/router.Cuentas");
app.use("/Cuenta",routerCuentas);

const routerTransfer = require("./routes/router.transacciones");
app.use("/transacciones", routerTransfer);

const routerUsuario= require("./routes/router.User");
app.use("/usuario", routerUsuario);
