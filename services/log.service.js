import chalk from 'chalk';
import dedent from 'dedent-js';

const printError = (error) => {
    console.log(chalk.bgRed(' ERROR ') + ' ' + error);
}

const printSuccess = (message) => {
    console.log(chalk.bgGreen(' SUCCESS ') + ' ' + message);
}

const printHelp = () => {
    console.log(
        dedent`${chalk.bgCyan(' HELP ')} 
        Without parameters - print weather
        -s [CITY] for change city
        -h for help
        -t [API_KEY] for save token
        `
    );
}

const printWeather = (res, icon) => {
    console.log(
        dedent`${chalk.bgYellow(' WEATHER ')} weather in the city ${res.name}
        ${icon} ${res.weather[0].description}
        temperature: ${res.main.temp} feel like ${res.main.feels_like}
        humidity: ${res.main.humidity}%
        wind speed: ${res.wind.speed}
        `
    );
}

export { printError, printSuccess, printHelp, printWeather }