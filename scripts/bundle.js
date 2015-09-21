(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';
var Quarterback = function Quarterback(name, team) {
  this.name = name;
  this.team = team;
  this.attempts = 0;
  this.completions = 0;
  this.yards = 0;
  this.touchdowns = 0;
  this.interceptions = 0;
  this.sacks = 0;
  this.longestCompletion = 0;
  this.completionPercentage = function () {
    return this.completions / this.attempts;
  };
  this.yardsPerAttempt = function () {
    return this.yards / this.attempts;
  };
  this.addAttempt = function (type, yards) {
    if (type === 'complete') {
      this.completions++;
      this.yards += yards;
      this.attempts++;
      if (yards > this.longestCompletion) {
        this.longestCompletion = yards;
      }
    } else if (type === 'incomplete') {
      this.incomplete++;
      this.attempts++;
    } else if (type === 'touchdown') {
      this.touchdown++;
      this.yards += yards;
      this.attempts++;
    } else if (type === 'interception') {
      this.interception++;
      this.attempts++;
    } else if (type === 'sack') {
      this.sack++;
      this.yards += yards;
      this.attempts++;;
    };
  };
};

var Rushing = function Rushing(name, team) {
  this.name = name;
  this.team = team;
  this.attempts = 0;
  this.yards = 0;
  this.over20 = 0;
  this.touchdowns = 0;
  this.firstDowns = 0;
  this.fumbles = 0;
  this.longestRush = 0;
  this.yardsPerAttempt = function () {
    return this.yards / this.attempts;
  };
  this.addAttempt = function (type, yards) {
    if (type === 'fumble') {
      this.attempts++;
      this.fumbles++;
      this.yards += yards;
    } else if (type === 'first down') {
      this.firstDowns++;
      this.attempts++;
      this.yards += yards;
    } else if (type === 'touchdown') {
      this.touchdowns++;
      this.attempts++;
      this.yards += yards;
      if (yards > this.longestRush) {
        this.longestRush = yards;
      }
      if (yards > 20) {
        this.over20++;
      }
    }
  };
};

var Kicking = function Kicking(name, team) {
  this.name = name;
  this.team = team;
  this.attempts = 0;
  this.made = 0;
  this.longestFieldGoal = 0;
  this.fieldGoalPercentage = function () {
    return this.attempts / this.made;
  };
  this.addAttempt = function (type, yards) {
    if (type === 'made') {
      this.made++;
      this.attempts++;
      if (yards > this.longestFieldGoal) {
        this.longestFieldGoal = yards;
      }
    } else if (type === 'missed') {
      this.attempts++;
    }
  };
};

var timHodge = new Quarterback('Tim Hodge', 'Eagles');
var aaronMitch = new Quarterback('Aaron Mitch', 'Lizards');

var bobMulligan = new Rushing('Bob Mulligan', 'Eagles');
var karlHatchin = new Rushing('Karl Hatchin', 'Lizards');

var johnDesigner = new Kicking('John Designer', 'Eagles');
var michealWoobs = new Kicking('Micheal Woobs', 'Lizards');

},{}]},{},[1])


//# sourceMappingURL=bundle.js.map