/*
*
*
*       Complete the API routing below
*
*
*/

'use strict';

var expect = require('chai').expect;
var ConvertHandler = require('../controllers/convertHandler.js');

module.exports = function (app) {
  
  var convertHandler = new ConvertHandler();

  app.route('/api/convert')
    .get(function (req, res){
      var input = req.query.input;
      var initNum = convertHandler.getNum(input);
      console.log(initNum);
      var initUnit = convertHandler.getUnit(input);
      console.log(initUnit);
      var toString = '';
      var returnNum = '';
      var returnUnit = '';
      if (initNum !== 'invalid number' && initUnit !== 'invalid unit') {
        returnNum = convertHandler.convert(initNum, initUnit);
        console.log(returnNum);
        returnUnit = convertHandler.getReturnUnit(initUnit);
        console.log(returnUnit);
        toString = convertHandler.getString(initNum, initUnit, returnNum, returnUnit);
        console.log(toString);
        res.json({"initNum":initNum,"initUnit":initUnit,"returnNum":returnNum,"returnUnit":returnUnit,"string":toString});
      } else {
        if (initNum === 'invalid number' && initUnit === 'invalid unit') {
          toString = 'invalid number and unit';
          res.json({"string":toString});
        } else if (initNum === 'invalid number') {
          toString = initNum;
          res.json({"string":toString});
        } else if (initUnit === 'invalid unit') {
          toString = initUnit;
          res.json({"string":toString});       
        }
      }
      
    });
    
};
