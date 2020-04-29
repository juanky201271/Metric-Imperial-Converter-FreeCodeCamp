/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  
  this.getNum = function(input) {
    var result = input.trim().split(/[\D]*$/)[0];
    //console.log(result);
    if (result.toString() === '') {
      return 1;
    }
    if (/([\d]+[.]*[\d]*[/]{1}){2,}/g.test(result)) {
      return 'invalid number';
    }
    result = Number(eval(result));
    if (result.toString() === 'NaN') {
      return 'invalid number';
    }
    return result.toFixed(5);
  };
  
  this.getUnit = function(input) {
    var result = input.trim().match(/[\D]*$/)[0];
    if (result.trim().toLowerCase() !== 'kg' && 
        result.trim().toLowerCase() !== 'lbs' && 
        result.trim().toLowerCase() !== 'l' && 
        result.trim().toLowerCase() !== 'gal' && 
        result.trim().toLowerCase() !== 'km' && 
        result.trim().toLowerCase() !== 'mi') {
      result = 'invalid unit';
    }
    return result;
  };
  
  this.getReturnUnit = function(initUnit) {
    var result;
    switch (String(initUnit).trim().toLowerCase()) {
      case 'kg':
        result = 'lbs';
        break;
      case 'lbs':
        result = 'kg';
        break;
      case 'l':
        result = 'gal';
        break;
      case 'gal':
        result = 'l';
        break;
      case 'km':
        result = 'mi';
        break;
      case 'mi':
        result = 'km';
        break;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    var result;
    switch (String(unit).trim().toLowerCase()) {
      case 'kg':
        result = 'kilograms';
        break;
      case 'lbs':
        result = 'pounds';
        break;
      case 'l':
        result = 'liters';
        break;
      case 'gal':
        result = 'gallons';
        break;
      case 'km':
        result = 'kilometers';
        break;
      case 'mi':
        result = 'miles';
        break;
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    var result;
    switch (String(initUnit).trim().toLowerCase()) {
      case 'kg':
        result = initNum / lbsToKg;
        break;
      case 'lbs':
        result = initNum * lbsToKg;
        break;
      case 'l':
        result = initNum / galToL;
        break;
      case 'gal':
        result = initNum * galToL;
        break;
      case 'km':
        result = initNum / miToKm;
        break;
      case 'mi':
        result = initNum * miToKm;
        break;
    }
    console.log(result.toFixed(5));
    return result.toFixed(5);
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    var result = initNum + ' ' + this.spellOutUnit(initUnit) + ' converts to ' + returnNum + ' ' +  this.spellOutUnit(returnUnit);
    return result;
  };
  
}

module.exports = ConvertHandler;
