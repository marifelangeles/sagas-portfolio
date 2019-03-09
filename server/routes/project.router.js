const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// const bodyParser = require('body-parser');

// const project = ['project1,', 'project2'];

router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "projects";`;
    pool.query(queryText)
        .then(result => {
            console.log('result from GET', result.rows);
            res.send(result.rows);
        }).catch(error => {
            console.log('error with GET /project', error);
            res.sendStatus(500);
        });
});

module.exports = router;
