import { markerModel as Marker } from '../models/markerModel';

const express = require('express');

const router = express.Router();

// test
router.get('/test', async(req, res)=> {
    try {
        const mark = new Marker({
            title: "test1",
            loc: {
                type: "Point",
                coordinates: [51.388297, 5.449480]
            }
        });

        await mark.save();
        console.log(mark);
        res.status(200).json("test");
    }
    catch (err) {
        console.error(err);
        res.send(err);
    }

});

router.get('/', async(req, res)=> {
    try {
        const markers = await Marker.geoNear({type: "Point", coordinates: [51.38692, 5.446118]}, {
            spherical: true,
            maxDistance: 1000
        });

        // await mark.save();
        // console.log(mark);
        res.status(200).json(markers);
    }
    catch (err) {
        console.error(err);
        res.send(err);
    }

});


export default router;