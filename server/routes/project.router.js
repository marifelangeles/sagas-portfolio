const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();
// const bodyParser = require('body-parser');


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

router.post('/', (req, res) => {
    const queryText = `INSERT INTO "projects" ("name", "description", "thumbnail", "website", "github", "date_completed", "tag_id") 
    VALUES ($1, $2, $3, $4, $5, $6, $7);`;
    const newProject = req.body;
    const queryValues = [
        newProject.name,
        newProject.description,
        newProject.thumbnail,
        newProject.website,
        newProject.github,
        newProject.date_completed,
        newProject.tag_id
    ]
    pool.query(queryText, queryValues)
        .then(() => {
            res.sendStatus(200);
        }).catch(error => {
            console.log('error with POST /project', error);
            res.sendStatus(500);
        });
});

router.delete('/:id', (req, res) => {
    const queryText = `DELETE FROM "projects" WHERE "id" = $1;`;
    const queryValues = [req.params.id];
    pool.query(queryText, queryValues)
        .then(() => {
            console.log('back from delete');
            res.sendStatus(200);
        }).catch(error => {
            console.log('error with DELETE /project/id', error);
            res.sendStatus(500);
        });
});

module.exports = router;
