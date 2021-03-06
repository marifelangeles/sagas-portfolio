const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

module.exports = router;

router.get('/', (req, res) => {
    const queryText = 'SELECT * FROM "tags";'
    pool.query(queryText)
        .then(result => {
            res.send(result.rows);
        }).catch(error => {
            console.log('error with GET /tag', error);
        });
});