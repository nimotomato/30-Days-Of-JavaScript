const noOfCountries = countries_data.length

const round = (value) => {
    return Number(Math.round(value+'e'+2)+'e-'+2);
   }   

//** LANGUAGE DATA */

// get how number of countries a language is spoken in
const noOfSpeakingCountries = countries_data
    .map((country) => (
        country.languages
    ))
    .reduce((acc, cur) => acc.concat(cur), [])
    .reduce((dict, lang) => {
        dict[lang] = (dict[lang] || 0) +1;
        return dict;}, {})

// Get ten most spoken languages
const sortedData = Object.entries(noOfSpeakingCountries)
    .sort((a, b) => b[1] - a[1])
    .slice(0, 10)
    .map(([language, number]) => ({ language, number }));

// Get what percentage the number is of the 10 total and create languageData for graph
const languageTotal = sortedData.reduce((acc, cur) => acc + cur.number, 0);
const languageData = sortedData.map((country) => {
    country.percentage = round(country.number / languageTotal);
    return country;
})

//** POPULATION DATA */
// Get population per country
const countryPopulations = countries_data
    .map((country) => (
        {name: country.name,
        population: country.population}
    ));

// Get top ten populated countries
const topPopulations = countryPopulations
    .sort((a, b) => {
        return b.population - a.population
    })
    .slice(0, 10)

// Get world population
const worldPopulation = {
    name: 'World',
    percentage: 1,
    population: countries_data
    .reduce((acc, cur) => acc + cur.population, 0)
}

// Get population data for graph
const populationData = topPopulations.map((country) => {
    country.percentage = round(country.population / worldPopulation.population);
    console.log(country.percentage)
    return country;
})
populationData.unshift(worldPopulation)
