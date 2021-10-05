/*
    Rutas de eventos
    host + /api/events
*/
const { Router } = require('express');
const { check } = require('express-validator');

const { isDate } = require('../helpers/isDate');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

// Todas las rutas pasan por el middleware validateJWT
router.use( validateJWT );


// Obtener eventos
router.get( '/', getEvents );

// Crear evento
router.post(
    '/',
    [
        check('title', 'Tittelen er obligatorisk').not().isEmpty(),
        check('start', 'Startdato er obligatorisk').custom( isDate ),
        check('end', 'Sluttdato er obligatorisk').custom( isDate ),
        validateFields
    ],
    createEvent
);

// Actualizar evento
router.put(
    '/:id',
    [
        check('title', 'Tittelen er obligatorisk').not().isEmpty(),
        check('start', 'Startdato er obligatorisk').custom( isDate ),
        check('end', 'Sluttdato er obligatorisk').custom( isDate ),
        validateFields
    ],
    updateEvent    
);

// Borrar evento
router.delete( '/:id', deleteEvent)


module.exports = router;
