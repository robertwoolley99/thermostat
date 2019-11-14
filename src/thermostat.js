'use strict';

function Thermostat() {
  this.MINIMUM_TEMPERATURE = 10;
  this.temperature = 20;
  this.PowerSavingMode = "On";
  this.MAX_LIMIT_PSM_ON = 25;
  this.MAX_LIMIT_PSM_OFF = 32;
  this.DEFAULT_TEMP = 20;
};

Thermostat.prototype.getCurrentTemperature = function () {
  return (this.temperature);
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
    this.MAXIMUM_TEMPERATURE = this.MAX_LIMIT_PSM_ON
  } else {
    this.MAXIMUM_TEMPERATURE = this.MAX_LIMIT_PSM_OFF
  }
  return this.temperature === this.MAXIMUM_TEMPERATURE;
};

Thermostat.prototype.reset = function() {
  this.temperature = this.DEFAULT_TEMP
  return (this.temperature);
};

Thermostat.prototype.getUsage = function(){
  if (this.temperature > 24) {
    return ("high-usage");
  } else if (this.temperature < 18) {
    return ("low-usage");
  } else {
    return ("medium-usage");
  }
};
