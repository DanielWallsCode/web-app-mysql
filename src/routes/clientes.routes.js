import { Router } from "express";
import { obtenerClientes, crearCliente,eliminarCliente,actualizarCliente,redirigirCliente } from "../controllers/clientes.controllers.js";

export const router = Router();

router.post('/crear', crearCliente);

router.get('/', obtenerClientes);

router.get('/borrar/:id', eliminarCliente);

router.get('/actualizar/:id', redirigirCliente);

router.post('/actualizar/:id', actualizarCliente);