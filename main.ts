#! /usr/bin/env node 

import inquirer from "inquirer";
import chalk from "chalk";

let todoList: string [] = [];
let conditions = true;
console.log(chalk.bold.rgb(37, 150, 190)(`\n \t\t <<<<===========================================>>>>\t`));
console.log(chalk.bold.rgb(37, 150, 190)(`<<<=========>>> ${chalk.bold.hex('#eab676')("Welcome to \"CodeWithAyesha\" - Todo List Application")}  <<<=========>>>`));
console.log(chalk.bold.rgb(37, 150, 190)(`\t\t <<<<===========================================>>>>\t`));



let main = async () => {
    while(conditions){
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: chalk.yellow("Select an option you want to do:)"),
                choices: ["Add Task", "Delete Task", "Update Task", "View Todo-List", "Exit"],
            }
        ]);
        if(option.choice === "Add Task"){
            await addTask()
        }
        else if(option.choice === "Delete Task"){
            await deleteTask()
        }
        else if(option.choice === "Update Task"){
            await updateTask()
        }
        else if(option.choice === "View Todo-List"){
            await viewTask()
        }
        else if(option.choice === "Exit"){
            conditions = false;
        }
        
        
    }
}

//function to add new task to the list; 

let addTask = async () => {
    let newTask = await inquirer.prompt([
        {
            name: "task",
            type: "input",
            message: chalk.magenta("Enter your new task :"),
        }
    ]);
    todoList.push(newTask.task);
    console.log(`\n ${newTask.task}  task added successfully in Todo-List`);
}

//funtion to view all todo - task;

let viewTask = () => {
    console.log("\n Your Todo-List: \n");
    todoList.forEach((task, index) => {
        console.log(` ${index + 1}: ${task}`)
    })
}

//Function to delete task from list;

let deleteTask = async () => {
    await viewTask()
    let taskIndex = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.magenta("Enter the 'index no.' of the task you want to delete"),
        }
    ]);
    let deletedTask = todoList.splice(taskIndex.index - 1 ,1);
    console.log(`\n ${deletedTask} this task is deleted successfully from the Todo-List\n`);
}

//Function to update a task;
let updateTask = async () => {
    await viewTask()
    let update_task_index = await inquirer.prompt([
        {
            name: "index",
            type: "number",
            message: chalk.magenta("Enter the index number of the task you want to update:")
        },
        {
            name: "new_task",
            type: "input",
            message: "Now Enter the new task name:"
        }
    ]);
    todoList[update_task_index.index - 1] = update_task_index.new_task
    console.log(`\n Task at index no. ${update_task_index - 1} updated successfully[for updated list Check option: "View Todo-List]`);
}

main();
