#! /usr/bin/env node

import inquirer from "inquirer";

const result = await inquirer.prompt([{message: "Enter first number", type:"number",
name:"firstNumber"},
{message: "Enter Second number", type:"number",
name:"SecondNumber"},{message:"select one of the operator to perform action", type:"list",
name:"operator", choices:["Addition", "Subtraction", "Multiplication","Division"],},
]);

if(result.operator ==="Addition"){
    console.log(result.firstNumber + result.SecondNumber);}


else if (result.operator ==="Subtraction"){
    console.log(result.firstNumber - result.SecondNumber);}
    else if (result.operator ==="Multiplication"){
        console.log(result.firstNumber * result.SecondNumber);}

        else if (result.operator ==="Division"){
            console.log(result.firstNumber / result.SecondNumber);}
    
    else {console.log("please select valid operator");}       
        
