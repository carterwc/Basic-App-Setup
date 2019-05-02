const express = require('express');
const router = express.Router();
const { createUser } = require('../services/userServices');

/* ------------------------- */
/*       AUTH ROUTES         */
/* ------------------------- */

// Create New User
router.post('/', (req, res) => {
    const { body } = req;
    console.log(body, 'Whats req body!?');
    createUser(body)
    .then( result => {
        console.log(result, 'What is result?');
        return res.json(result);
    })
    .catch( error => {
        res.send(error);
    });
});

// post /login to set up log in
// put / update user if needed (change name etc)

module.exports = router;