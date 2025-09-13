import chalk from "chalk"

const mainPrompt = [
    {
        name: "select",
        description: chalk.green.bold("Escolha a Opção: (1 - QRCODE ou 2 - PASSWORD)"),
        pattern: /^[1-2]+$/,
        message: chalk.red.bold("Escolha uma opção válida (1 ou 2)"),
        required: true,
    }

]

export default mainPrompt
