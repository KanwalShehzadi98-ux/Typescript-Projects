/* first install 
    tsc --init
    npm -init -y
    npm i @types/node -D

Then go to rconfig.json
    target = "es2022"
    module = "NodeNext"
    moduleResolution = "NodeNext"
    outDir = "./bin"
    package.json => "type":"module" 

Create .gitignore 
Inside it write node_modules

now in terminal install
    npm i inquirer
    npm i @types/inquirer
    npm i chalk */

//=============================================================================================
//                      SIMPLE CALCULATOR USING INQUIRER AND CHALK
//=============================================================================================

import inquirer from "inquirer";
import chalk from "chalk";

const answers : {
    number1 : number,
    number2 : number
    operator : string
} = await inquirer.prompt([
    {
        type : "number",
        name : "number1",
        message : chalk.green("Enter First Number:")
    },
    {
        type : "number",
        name : "number2",
        message : chalk.green("Enter Second Number:")
    },
    {
        type : "list",
        name : "operator",
        choices : ["+","-","*","/"],
        message : chalk.blueBright("Enter Operator:")
    }
]);

const {number1,number2,operator} = answers;

if(number1 && number2 && operator){
    if(operator === "+"){
        console.log(chalk.blue("Result is : " + (number1 + number2)));
    }
    else if(operator === "-"){
        console.log(chalk.blue("Result is : " + (number1 - number2)));
    }
    else if(operator === "*"){
        console.log(chalk.blue("Result is : " + (number1 * number2)));
    }
    else if(operator === "/"){
        if (number2 === 0){
            console.log(chalk.yellow("Divide by Zero Exception will Occur."));
        }
        else{
            console.log(chalk.blue("Result is : " + (number1 / number2)));
        }
    }
}
else{
    console.log(chalk.red("Enter Correct Operator"));
}