'use strict';


describe ('thermostat', function() {

  var thermo;
  
  beforeEach(function() {
    thermo = new Thermostat()
  });

  it('starts at 20 degrees when created', function() {
    expect(thermo.temperature).toEqual(20);

  });
});