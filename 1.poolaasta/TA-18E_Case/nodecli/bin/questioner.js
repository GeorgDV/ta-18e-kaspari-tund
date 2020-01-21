#!/usr/bin/env node
const inquirer = require('inquirer');
const boxen = require('boxen');

let options = {
    padding: 1,
    margin: 1,
    borderColor: "#FFFFFF"

}

console.log("Hello and welcome to questioner. I would like to ask you some questions...")


inquirer
  .prompt([
    {
        name: 'name',
        message: 'What is your name?',
    },
    {
        type: 'list',
        name: 'gender',
        message: 'What is your gender?',
        choices: ['Male', 'Female', 'My gender is not on the list :('],
    },
    {
        name: 'age',
        message: 'What is your age?',
        validate: function(value) {
          if (isNaN(value)) {
              return "Please enter a valid number.."
          }
          return true;
        }
    },
    {
        name: 'animal',
        message: 'What is your favourite animal?',
    },
    {
        type: 'list',
        name: 'sign',
        message: 'What is your zodiac sign?',
        choices: ['Aquarius', 'Pisces', 'Aries', 'Taurus',
                  'Gemini', 'Cancer', 'Leo', 'Virgo', 'Libra',
                  'Scropio', 'Sagittarius', 'Capricorn'],
    },
    {
        name: 'color',
        message: 'What are your favourite colors?',
    },
    {
        type: 'confirm',
        name: 'hand',
        message: 'Are you right handed?',
    }
  ])
  .then(answers => {
    let answersList = "Name: " + answers.name + "\nGender: " + answers.gender + "\nAge: " + answers.age + "\nFavourite animal: " + answers.animal + "\nZodiac sign: " + answers.sign + "\nColors: " + answers.color + "\nRight-handed: " + answers.hand;
    let answersBox = boxen(answersList, options);
    console.log("Here is your personalized answers card.. :)");
    console.log(answersBox);
    /*
    console.log('Name:', answers.name);
    console.log('Gender:', answers.gender);
    console.log('Age:', answers.age);
    console.log('Favourite animal:', answers.animal);
    console.log('Zodiac sign:', answers.sign);
    console.log('Color:', answers.color);
    console.log('Right-handed:', answers.hand);
    */

  });
