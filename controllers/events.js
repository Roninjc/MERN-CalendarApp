const { response } = require('express');


const getEvents = ( req, res = response, next ) => {

    res.status(200).json({
        ok: true,
        msg: 'getEvents'
    });
};

const createEvent = ( req, res = response, next ) => {

    console.log(req.body);
    
    res.status(200).json({
        ok:true,
        msg: 'createEvent'
    });
};

const updateEvent = ( req, res = response, next ) => {

    res.status(200).json({
        ok: true,
        msg: 'updateEvent'
    });
};

const deleteEvent = ( req, res = response, next ) => {

    res.status(200).json({
        ok: true,
        msg: 'deleteEvent'
    });
};



module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}
