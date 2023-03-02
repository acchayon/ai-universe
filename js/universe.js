const loadData = () =>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => displayData(data))
}

const displayData = allData => {
    console.log(allData);
}

loadData()