// Express-routrar för CRUD-operationer
const express = require('express');
const router = express.Router();

module.exports = (pool) => {
    router.get('/projects', async (req, res) => {
        const result = await pool.query('SELECT * FROM projects');
        res.json(result.rows);
    });
    
    router.post('/projects', async (req, res) => {
        const { title, description } = req.body;
        const query = 'INSERT INTO projects(title, description) VALUES($1, $2) RETURNING *';
        const result = await pool.query(query, [title, description]);
        res.status(201).json(result.rows[0]);
    });
    
    return router;
};