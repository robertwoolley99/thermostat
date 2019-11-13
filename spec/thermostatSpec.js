'use strict';


describe ('thermostat', function() {

  var thermo;
  
  beforeEach(function() {
    thermo = new Thermostat()
  });

  it('starts at 20 degrees when created', function() {
    expect(thermo.getCurrentTemperature()).toEqual(20);

  });

  it('increases the temperature by one degree when told to', function() {
    expect(thermo.increaseTemperature()).toEqual(21);

  });

  it('decreases the temperature by one degree when told to', function() {
    expect(thermo.decreaseTemperature()).toEqual(19);

  });

});