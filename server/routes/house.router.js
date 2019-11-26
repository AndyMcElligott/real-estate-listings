const router = require('express').Router();
const pool = require('../modules/pool');

router.get('/', (req, res)=>{
    let queryText = `SELECT * FROM "listings"`;
    if(req.query.type){
        let type = req.query.type;
        queryText += ` WHERE "type"='${(type==='rent') ? 'rent' : 'sale'}';`
    } else {
        queryText += ';';
    }
    console.log(queryText);
    pool.query(queryText)
        .then((result)=>{
            res.send(result.rows);
        }).catch(error=>{
            console.log('ERROR GETTING listings ---> ', error);
            res.sendStatus(500);
    });
});

module.exports = router;