'use strict';

$(document).ready(function(){
  var thermostat = new Thermostat();
  $.get('http://api.openweathermap.org/data/2.5/weather?q=London&appid=496f91ea770ed15dd1eb081af5f2b279&units=metric', function(data) {
    $('#current-temperature').text(data.main.temp)
  })
    updateTemperature();
  $('#temperature-up').on('click', function(){
    thermostat.increaseTemperature();
    updateTemperature();
  })
  $('#temperature-down').on('click', function() {
    thermostat.decreaseTemperature();
    updateTemperature();
  })
  $('#temperature-reset').on('click', function() {
    thermostat.reset();
    updateTemperature();
  })
  $('#powersaving-on').on('click', function() {
    thermostat.onPowerSavingMode();
    $('#power-saving-status').text('on');
    updateTemperature();
  })
  $('#powersaving-off').on('click', function(){
    thermostat.offPowerSavingMode();
    $('#power-saving-status').text('off');
    updateTemperature();
  })

  function updateTemperature() {
    $('#temperature').text(thermostat.temperature)
    $('#temperature').attr('class', thermostat.getUsage());
  }
})
