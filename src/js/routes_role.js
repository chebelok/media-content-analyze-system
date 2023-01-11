const { Router } = require('express');
const express = require('express');
const connection = require('./connection');

const router = new express.Router();

const sqlScript = {
    getAllRoles: 'SELECT * FROM role',
    getRoleByID: `SELECT * FROM role WHERE id = ?`,
    createRole: `INSERT INTO role(id, name, description) VALUES (?, ?, ?)`,
    updateRoleInfo: `UPDATE role SET name = ?, description = ? WHERE id = ?`,
    deleteRole: `DELETE FROM role WHERE id = ?`
};

router.get('/', (req, res) => {
    connection.query(sqlScript.getAllRoles, (err, resuslt) => {
        if (err) {
            return res.status(500).json({
                message: 'Something went wrong'
            });
        }
        res.status(200).send(resuslt)
    })
})
    .get('/:id', (req, res) => {
        const roleId = req.params.id;
        connection.query(sqlScript.getRoleByID, roleId, (err, [result])=> {
            if (err) {
                return res.status(500).json({
                    message: 'Something went wrong, no such id'
                });
            }
            if(!result){
                return res.status(404).json({
                    message: 'no roles with this id'
                });
            }
            res.status(200).send(result)
        })
    })
    .post('/:id', (req, res) => {
        const {name, description} = req.body;
        const postId = req.params.id;
        if(!(name && description)) {
            res.status(404).json({
                message: 'All fields must be filled'
            });
            return;
        }
        connection.query(sqlScript.createRole, [postId, name, description], (err) => {
            if(err){
                return res.status(500).json({
                    message: 'Something went wrong'
                });
            }
            res.status(200).send(`Role with id ${postId} was added`)

        })

    })
    .delete('/:id', (req, res) => {
        const deleteId = req.params.id;
        connection.query(sqlScript.deleteRole, deleteId, (err) =>{
            if(err){
                return res.status(500).json({
                    message: 'Something went wrong'
                });
            }
            res.status(200).send(`Role with id ${deleteId} was deleted`)
        })
    })
    .put('/:id', (req, res) =>{
        const {name, description} = req.body;
        const putId = req.params.id;
        connection.query(sqlScript.updateRoleInfo, [name, description, putId], (err, result) => {
            if(err || !result.affectedRows){
                return res.status(500).json({
                    message: 'Something went wrong'
                })
            }
            res.status(200).send(result)
        })
    })

module.exports = router; 