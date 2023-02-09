const countriesAPI = 'https://restcountries.com/v2/all'
const catsAPI = 'https://api.thecatapi.com/v1/breeds'


const fetchData = async () =>{
    try{
        const response = await fetch(countriesAPI)
        const countries = await response.json()
        return countries
    } catch (err){
        console.error(err)
    }
}

const fetchCats = async () => {
    try{
        const response = await fetch(catsAPI)
        const data = await response.json()
        return data
    } catch (err){
        console.error(err)
    }
}

// fetchCats().then(() => {
// console.log(catNames.map(({name}) => (
//     {name}
// )))
// });

// fetchCats().then(() => {
//     console.log(catNames);
// })

fetchCats().then((data) => {
    const meanTotal = data.map(({weight: { metric }}) => {
            const meanValues = metric
                .split(" - ")
                .map((x) => parseInt(x))
                .reduce((acc, cur) => (acc + cur)/2)
            return meanValues})
        .reduce((acc, cur) => (acc + cur)) / data.length
    //console.log("Mean weight:", Math.floor(meanTotal * 10)/10)
})

fetchData().then((data) => {
    const nameSize = data.map(({name, area}) => ({name, area}))
    const sortedBySize = nameSize.sort((a, b) => {
        return b.area - a.area
    })
    topTen = sortedBySize.slice(0, 10)
})

fetchData().then((data) =>{
    const languages = new Set([].concat(...data
        .map(({languages}) => languages)
        .map((x) => x.map((y) => (y.name)))))

    console.log(languages.size)
})