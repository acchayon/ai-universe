const loadData = () =>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => displayData(data.data))
    
}

const displayData = allData => {
    // console.log(allData);
    toggleLoader(true)
    const cardContainer = document.getElementById('card-container');
    // allData = allData.slice(0,3)
    allData.tools.forEach(data => {
        console.log(data)
        const makeDiv = document.createElement('div');
        makeDiv.classList.add('col');
        makeDiv.innerHTML= `
        <div class="card h-100">
            <img src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Features</h5>
                <p class="card-text">
                </p>
            </div>
            <hr>
            <div class="d-flex justify-content-between">
            <h4 class="card-title px-3">${data.name}</h4>
            <button type="button" class="btn">&rightarrow;</button>
            </div>
        </div>
        `;
        cardContainer.appendChild(makeDiv); 
    })
    toggleLoader(false)
    
}


const toggleLoader = isLoading => {
    const spinLoader = document.getElementById('loader');
    if(isLoading === 0){
        spinLoader.classList.remove('d-none');
    }
    else{
        spinLoader.classList.add('d-none');
    }
}

loadData()