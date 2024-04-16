#! /usr/bin/env node
import inquirer from "inquirer";
//Declare a constant "answers" aand assign it to the result of inquirer.prompt funtion
const answers = await inquirer.prompt([
    {
        name: "Sentence",
        type: "input",
        message: "Enter your sentence to count the word"
    }
]);
const words = answers.Sentence.trim().split(" ");
// Print the array of words to the console
console.log(words);
// print the word
console.log(`Your sentence word count is ${words.length}`);
