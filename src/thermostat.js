'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
  this.PowerSavingMode = "On";
};

Thermostat.prototype.getCurrentTemperature = function () {
  return this.temperature;
};

Thermostat.prototype.increaseTemperature = function() {
  if (this.isMaximumTemperature()) {
    return;
  }
  this.temperature += 1
  return (this.temperature);
};

Thermostat.prototype.decreaseTemperature = function() {
  if (this.isMinimumTemperature()) {
    return;
  }
  this.temperature -= 1
  return (this.temperature);
};

Thermostat.prototype.isMinimumTemperature = function() {
  return this.temperature === this.MINIMUM_TEMPERATURE;
};

Thermostat.prototype.getPowerSavingMode = function() {
  return (this.PowerSavingMode);
};

Thermostat.prototype.offPowerSavingMode = function() {
  this.PowerSavingMode = "Off";
  return (this.PowerSavingMode);
};

Thermostat.prototype.onPowerSavingMode = function() {
  this.PowerSavingMode = "On";
  return (this.PowerSavingMode);
};

Thermostat.prototype.isMaximumTemperature = function() {
  if (this.PowerSavingMode === "On") {
    this.MAXIMUM_TEMPERATURE = 25
  } else {
    this.MAXIMUM_TEMPERATURE = 32
  }
  return this.temperature === this.MAXIMUM_TEMPERATURE;
};
