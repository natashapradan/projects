'use strict';

const fs = require('fs');

let animals = JSON.parse(fs.readFileSync('db.json')).animals;
let questions = JSON.parse(fs.readFileSync('db.json')).questions;
let result = questions.map(a => a.question);
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const question = (str) => new Promise(resolve => rl.question(str, resolve));

const steps = {
    start: async () => {
      return steps.askAnimal();
    },
    askAnimal: async () => {
      const askAnimal = await question('Is your animal ' + result[0] + '? Please type y/n: ');
      if (askAnimal === 'y') { console.log('Yep, got it!'); return steps.itIsBig();}
      if (askAnimal === 'n') { console.log('Ok, I see!'); return steps.itIsSmall(); }
    },
    itIsBig: async () => {
      let bigAnimals = []
      for (let i = 0; i < animals.length; i++) {
        if (animals[i].big === true) { bigAnimals.push(animals[i]) }
      }
      const askAnimal = await question('Is it ' + result[1] + '? Please type y/n: ');
      if (askAnimal === 'n') {
        let notFluffyBigAnimals = []
        for (let i = 0; i < bigAnimals.length; i++) { if (bigAnimals[i].fluffy === false) { notFluffyBigAnimals.push(bigAnimals[i]) } }
        const confirmation = await question('Is it ' + notFluffyBigAnimals[0].name + '? Please type y/n: ');
        if (confirmation === 'y') { console.log('Hurray!') }
        if (confirmation === 'n') {
          const confirmationTwo = await question('Is it ' + notFluffyBigAnimals[1].name + '? Please type y/n: ');
          if (confirmationTwo === 'y') { console.log('Hurray!') }
          if (confirmationTwo === 'n') { console.log('How dare you mess with me!') }
        }
      }
      else if (askAnimal === 'y') {
        let fluffyBigAnimals = []
        for (let i = 0; i < bigAnimals.length; i++) { if (bigAnimals[i].fluffy === true) { fluffyBigAnimals.push(bigAnimals[i]) } }
        const confirmation = await question('Is it ' + fluffyBigAnimals[0].name + '? Please type y/n: ');
        if (confirmation === 'y') { console.log('Hurray!') }
        if (confirmation === 'n') {
          const confirmationTwo = await question('Is it ' + fluffyBigAnimals[1].name + '? Please type y/n: ');
          if (confirmationTwo === 'y') { console.log('Hurray!') }
          if (confirmationTwo === 'n') { console.log('How dare you mess with me!') }
        }
      }
    },
    itIsSmall: async () => {
      let smallAnimals = []
      for (let i = 0; i < animals.length; i++) { if (animals[i].big === false) { smallAnimals.push(animals[i]) } }
      const askAnimal = await question('Is it ' + result[2] + '? Please type y/n: ');
      if (askAnimal === 'y') {
        let carnivoreSmallAnimals = []
        for (let i = 0; i < smallAnimals.length; i++) { if (smallAnimals[i].carnivore === true) { carnivoreSmallAnimals.push(smallAnimals[i]) } }
        const confirmation = await question('Is it ' + carnivoreSmallAnimals[0].name + '? Please type y/n: ');
        if (confirmation === 'y') { console.log('Hurray!') }
        if (confirmation === 'n') {
          const confirmationTwo = await question('Is it ' + carnivoreSmallAnimals[1].name + '? Please type y/n: ');
          if (confirmationTwo === 'y') { console.log('Hurray!') }
          if (confirmationTwo === 'n') { console.log('How dare you mess with me!') }
        }
      }
      else if (askAnimal === 'n') {
        let notCarnivoreSmallAnimals = []
        for (let i = 0; i < smallAnimals.length; i++) { if (smallAnimals[i].carnivore === false) { notCarnivoreSmallAnimals.push(smallAnimals[i]) } }
        const confirmation = await question('Is it ' + notCarnivoreSmallAnimals[0].name + '? Please type y/n: ');
        if (confirmation === 'y') { console.log('Hurray!') }
        if (confirmation === 'n') {
          const confirmationTwo = await question('Is it ' + notCarnivoreSmallAnimals[1].name + '? Please type y/n: ');
          if (confirmationTwo === 'y') { console.log('Hurray!') }
          if (confirmationTwo === 'n') { console.log('How dare you mess with me!') }
        }
      }
    }
  }
;

steps.start();
