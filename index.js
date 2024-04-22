import inquirer from "inquirer";
const awnser = await inquirer.prompt([
    { message: "Enter first number", type: "number", name: "firstNumber" },
    { message: "Enter second number", type: "number", name: "secondNumber" },
    {
        message: "select the operator to perform operation",
        type: "list",
        name: "operator",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);
if (awnser.operator === "Addition") {
    console.log(awnser.firstNumber + awnser.secondNumber);
}
if (awnser.operator === "Subtraction") {
    console.log(awnser.firstNumber - awnser.secondNumber);
}
if (awnser.operator === "Multiplication") {
    console.log(awnser.firstNumber * awnser.secondNumber);
}
if (awnser.operator === "Division") {
    console.log(awnser.firstNumber / awnser.secondNumber);
}
else {
    console.log("please select valid operators");
}
