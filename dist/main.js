import inquirer from 'inquirer';
const currency = {
    USD: 1,
    INR: 75,
    GBP: 0.71,
    EUR: 0.91,
    PKR: 280,
};
const userAmount = await inquirer.prompt([
    {
        name: 'from',
        message: 'Enter from Currency',
        type: 'list',
        choices: ['USD', 'INR', 'GBP', 'EUR', 'PKR']
    },
    {
        name: 'to',
        message: 'Enter to Currency',
        type: 'list',
        choices: ['USD', 'INR', 'GBP', 'EUR', 'PKR']
    },
    {
        name: 'amount',
        type: 'number',
        message: 'Enter your amount'
    }
]);
const fromAmount = currency[userAmount.from];
const toAmount = currency[userAmount.to];
const amountFromUser = userAmount.amount;
const baseAmount = amountFromUser / fromAmount;
const convertedCurrency = baseAmount * toAmount;
console.log(convertedCurrency);
