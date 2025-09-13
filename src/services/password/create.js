import handle from './handle.js';
import chalk from "chalk";


async function createPassword() {
    console.log(chalk.green.bold("Criando senha..."));
    const password = await handle();
    console.log(password);
}

export default createPassword