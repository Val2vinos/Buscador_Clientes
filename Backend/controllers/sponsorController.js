'use strict';

const sponsorData = require('../data/sponsors');

const getSponsors = async (req,res,next) => {
    try {
        const sponsors = await sponsorData.getSponsors();
        res.send(sponsors);
    } catch (error) {
        res.status(400).send(error.message);
    }
}

module.exports = {
    getSponsors,
}