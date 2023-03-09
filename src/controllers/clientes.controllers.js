import { response } from 'express';
import {pool} from '../db.js';

export const obtenerClientes = async(req,res) => {
    try {

        const [rows] =  await pool.query('SELECT * FROM clientes');
        res.render('clientes.ejs',{data:rows});

    } catch (error) {
        return res.status(500).json({
            msg: 'Algo ha salido mal :('
        })
    }
} 


export const crearCliente = async(req,res = response) => {
    try {
    
    const {name,lastname,address,phone} = req.body
    const [rows] =  await pool.query('INSERT INTO clientes (name,lastname,address,phone) VALUES(?,?,?,?)',[name,lastname,address,phone]);
    console.log(rows);
    res.redirect('/');

    } catch (error) {
       return res.status(500).json({
        msg: 'Algo salio Mal :('
       })
    }
}


export const eliminarCliente = async(req,res = response) => {
    try {
    
        const {id} = req.params;
        const [result] = await pool.query('DELETE FROM clientes WHERE id = ?',[id]);

        console.log(result);
        res.redirect('/')
    
    } catch (error) {
       return res.status(500).json({
        msg: 'Algo salio Mal :('
       })
    }
}


export const redirigirCliente = async(req,res = response) => {
   
        const {id} = req.params;
        const [result] = await pool.query('SELECT * FROM clientes WHERE id = ?',[id]);

        res.render('clientes_update.ejs',{data: result[0]})
}

export const actualizarCliente = async(req,res = response) => {
   
    const {id} = req.params;
    const {name,lastname,address,phone} = req.body;

    const [result] = await pool.query('UPDATE clientes SET name = ?, lastname = ?, address = ?, phone = ? WHERE id = ?',[name,lastname,address,phone,id]);

    res.redirect('/');
}

