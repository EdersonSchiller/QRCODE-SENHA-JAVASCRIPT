import chalk from "chalk";

const promptQrcode = [
    {
        name: "link",
        description: chalk.yellow('Digite o link para gerar o QRCode: ')
    },

    {
        name: "type",
        description: chalk.yellow('Escolha entre o tipo de QRcode (1 - NORMAL ou 2 - TERMINAL): '),

        pattern: /^[1-2]+$/,
        messege: chalk.red.bold('Digite apenas 1 ou 2'),
        required: true,
    }, 
];

export default promptQrcode;