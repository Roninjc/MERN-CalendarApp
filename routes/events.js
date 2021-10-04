/*
    Rutas de eventos
    host + /api/events
*/
const { Router } = require('express');
const { check } = require('express-validator');
const { getEvents, createEvent, updateEvent, deleteEvent } = require('../controllers/events');
const { validateFields } = require('../middlewares/validate-fields');
const { validateJWT } = require('../middlewares/validate-jwt');

const router = Router();

router.get( '/', validateJWT, getEvents );

router.post(
    '/',
    validateJWT,
    createEvent
);

router.put(
    '/:id',
    validateJWT,
    updateEvent    
);

router.delete( '/:id', validateJWT, deleteEvent)


module.exports = router;
