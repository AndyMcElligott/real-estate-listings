const router = require('express').Router();
const pool = require('../modules/pool');

router.delete('/:id', (req, res) => {
    let id = req.params.id;
    console.log('Delete route called with id of', id);
    let queryString = `DELETE FROM "listings" WHERE "id"=$1;`;
    pool.query(queryString, [id]).then(result => {
        res.sendStatus(200);
    }).catch(error => {
        console.log('ERROR DELETING house-------->', error);
        res.sendStatus(500);
    })
});



module.exports = router;