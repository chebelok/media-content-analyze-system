const { Router } = require('express');
const express = require('express');
const connection = require('./connection');

const router = new express.Router();

const sqlScript = {
    getAllAccess: 'SELECT * FROM access',
    getAccessByID: `SELECT * FROM access WHERE id = ?`,
    createAccess: `INSERT INTO access(id, task_id, role_id, user_id) VALUES (?, ?, ?, ?)`,
    updateAccessInfo: `UPDATE access SET task_id = ?, role_id = ?, user_id = ? WHERE id = ?`,
    deleteAccess: `DELETE FROM access WHERE id = ?`
};

router.get('/', (req, res) => {
    connection.query(sqlScript.getAllAccess, (err, resuslt) => {
        if (err) {
            return res.status(500).json({
                message: 'Something went wrong'
            });
        }
        res.status(200).send(resuslt)
    })
})
    .get('/:id', (req, res) => {
        const accId = req.params.id;
        connection.query(sqlScript.getAccessByID, accId, (err, [result])=> {
            if (err) {
                return res.status(500).json({
                    message: 'Something went wrong, no such id'
                });
            }
            if(!result){
                return res.status(404).json({
                    message: 'no access request with this id'
                });
            }
            res.status(200).send(result)
        });
    })
    .post('/:id', (req, res) => {
        const {task_id, role_id, user_id} = req.body;
        const poId = req.params.id;
        if(!(task_id && role_id && user_id)) {
            res.status(404).json({
                message: 'All fields must be filled'
            });
            return;
        }
        connection.query(sqlScript.createAccess, [poId, task_id, role_id, user_id], (err) => {
            if(err){
                return res.status(500).json({
                    message: 'Something went wrong'
                });
            }
            res.status(200).send(`Access with id ${poId} was added`)

        })

    })
    .put('/:id', (req, res) =>{
        const {task_id, role_id, user_id} = req.body;
        const paId = req.params.id;
        connection.query(sqlScript.updateAccessInfo, [task_id, role_id, user_id, paId], (err, result) => {
            if(err || !result.affectedRows){
                return res.status(500).json({
                    message: 'Something went wrong'
                })
            }
            res.status(200).send(result)
        })
    })
    .delete('/:id', (req, res) => {
        const daId = req.params.id;
        connection.query(sqlScript.deleteAccess, daId, (err) =>{
            if(err){
                return res.status(500).json({
                    message: 'Something went wrong'
                });
            }
            res.status(200).send(`Access with id ${daId} was deleted`)
        })
    })

module.exports = router;