'use strict'
const _CONST = require('../config/constant')
var self = module.exports = {
    test: (req, res) => {
        return res.status(200).json({status: _CONST.SUCCESS, elements: 'Hello Anh Em'})
    },
    home: async (req, res) => {
        return res.render('home.ejs')
    }
}