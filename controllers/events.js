const { response } = require('express');
const Event = require('../models/Evento');


const getEvents = async ( req, res = response, next ) => {

    const events = await Event.find()
        .populate('user', 'name');

    res.status(200).json({
        ok: true,
        events
    });
};

const createEvent = async ( req, res = response, next ) => {

    const event = new Event( req.body );

    try {

        event.user = req.uid;

        const eventSaved = await event.save();

        res.status(201).json({
            ok: true,
            event: eventSaved
        })
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Ta kontakt med administratoren'
        });
    }

};

const updateEvent = async ( req, res = response, next ) => {

    const eventId = req.params.id;
    const uid = req.uid;

    try {

        const event = await Event.findById( eventId );

        if ( !event ) {
            return res.status(404).json({
                ok: false,
                msg: 'Det er ingen hendelse med den IDen'
            });
        }

        if ( event.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'Du har ikke rettigheter til å redigere denne hendelsen'
            });
        }

        const newEvent = {
            ...req.body,
            user: uid
        }

        const updatedEvent = await Event.findByIdAndUpdate( eventId, newEvent, { new: true } );

        res.status(200).json({
            ok: true,
            event: updatedEvent
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Ta kontakt med administratoren'
        });
    }

};

const deleteEvent = async ( req, res = response, next ) => {

    const eventId = req.params.id;
    const uid = req.uid;

    try {

        const event = await Event.findById( eventId );

        if ( !event ) {
            return res.status(404).json({
                ok: false,
                msg: 'Det er ingen hendelse med den IDen'
            });
        }

        if ( event.user.toString() !== uid ) {
            return res.status(401).json({
                ok: false,
                msg: 'Du har ikke rettigheter til å slette denne hendelsen'
            });
        }

        const deletedEvent = await Event.findByIdAndDelete( eventId );

        res.status(200).json({
            ok: true,
            event: deletedEvent
        });
        
    } catch (error) {
        console.log(error);
        res.status(500).json({
            ok: false,
            msg: 'Ta kontakt med administratoren'
        });
    }

};



module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}
