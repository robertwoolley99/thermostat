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

  it('has a minimum temperature of 10 degrees', function() {
    for (var i = 0; i < 11; i++) {
      thermo.decreaseTemperature();
    }
    expect(thermo.getCurrentTemperature()).toEqual(10);
  });

  it('has a power saving mode which default to On when spawned', function() {
    expect(thermo.getPowerSavingMode()).toEqual("On");
  });

  it('can turn power saving mode off.', function() {
    expect(thermo.offPowerSavingMode()).toEqual("Off");
  });

  it('can turn power saving mode on.', function() {
    thermo.offPowerSavingMode();
    expect(thermo.onPowerSavingMode()).toEqual("On");
  })
  it('has a maximum temperature of 25 degrees with powersaving on', function() {
    for (var i = 0; i < 6; i++) {
      thermo.increaseTemperature();
    }
    expect(thermo.getCurrentTemperature()).toEqual(25);
  });


});
