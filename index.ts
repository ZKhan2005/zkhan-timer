#! /usr/bin/env node
import inquirer from 'inquirer';
import chalk from 'chalk';
import { differenceInSeconds } from 'date-fns';

    const res = await inquirer.prompt({
        type: 'input',
        name: 'userInput',
        message:chalk.bold.green('*********** Please Enter The Amount Of Seconds **************'), 
    
        validate: (input) => {
            if (isNaN(input)) {
                return chalk.yellowBright("##################  Please Enter a Valid Number  #################");
            } else if (input > 60) {
                return chalk.bgBlue.bold("=================  Seconds Must Be Less Than or Equal to 60  =================");
            } else {
                return true;
            }
        }
    });

    const input = parseInt(res.userInput, 10);
 function startTime(val:number ) {
    const IntTime= new Date().setSeconds(new Date().getSeconds() + val);
    const intervalTime = new Date(IntTime);
    setInterval(() => {
        const currentTime = new Date();
        const timeDiff = differenceInSeconds(intervalTime, currentTime);

        if (timeDiff <= 0) {
            console.log(chalk.bgRedBright.bold("********************   Timer Has Expired   ********************"));
            process.exit();
        }

        const min = Math.floor((timeDiff% (3600*24))/3600);
        const sec = Math.floor(timeDiff% 60);
        console.log(`${min.toString().padStart(2, "0")}:${sec.toString().padStart(2, "0")}`)
    }, 1000);
}

startTime(input);
   
