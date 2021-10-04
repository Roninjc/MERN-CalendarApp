/*
    Rutas de usuario / auth
    host + /api/auth
*/
const { Router, response } = require('express');
const { check } = require('express-validator');
const { validateFields } = require('../middlewares/validate-fields');
const { createUser, loginUser, revalidateToken } = require('../controllers/auth');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();


router.post(
    '/new',
    [
        check('name', 'Navnet er nødvendig').not().isEmpty(),
        check('email', 'E-posten er nødvendig').isEmail(),
        check('password', 'Passordet må inneholde minst 6 tegn').isLength({ min: 6 }),
        validateFields
    ],
    createUser
);

router.post(
    '/',
    [
        check('email', 'E-posten er nødvendig').isEmail(),
        check('password', 'Passordet må inneholde minst 6 tegn').isLength({ min: 6 }),
        validateFields
    ],
    loginUser
);

router.get('/renew', validateJWT, revalidateToken );


module.exports = router;
