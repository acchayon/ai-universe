const loadData = () =>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => displayData(data.data.tools))
    
}

const displayData = allData => {
    // console.log(allData);
    toggleLoader(true);

    
    const cardContainer = document.getElementById('card-container');
    
    allData.forEach(data => {
        console.log(data)
        const makeDiv = document.createElement('div');
        makeDiv.classList.add('col');
        makeDiv.innerHTML= `
        <div class="card h-100">
            <img src="${data.image}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Features</h5>
                <p class="card-text">
                    1.${data.features[0]} <br>
                    2.${data.features[1]} <br>
                    3.${data.features[2]}
                </p>
            </div>
            <hr>
            <div class="d-flex justify-content-between">
            <div>
            <h4 class="card-title px-3">${data.name}</h4>
            <p class="mx-3"><i class="fa-solid fa-calendar-days"></i> 11/01/2022<p>
            </div>
            <button onclick="loadDetails('${data.id}')" type="button" class="btn btn-outline-success m-3" data-bs-toggle="modal" data-bs-target="#exampleModal">&rightarrow;</button>
            </div>
        </div>
        `;
        
        cardContainer.appendChild(makeDiv); 
        
    })

    

    toggleLoader(false)
    
}





const loadDetails = id => {
    fetch(`https://openapi.programming-hero.com/api/ai/tool/${id}`)
    .then( res => res.json())
    .then(data => showDetails(data.data))
}

const showDetails = hub =>{
    console.log(hub);
    const modalData = document.getElementById('exampleModalLabel');
    modalData.innerText= hub.description;

    const seeCard = document.getElementById('card');
    seeCard.innerHTML = `
    <img src="${hub.image_link[0]}" class="card-img-top position-relative" alt="...">
    <button type="button" class="btn btn-danger w-50 rounded-pill position-absolute top-0 end-0">
    ${hub.accuracy.score * 100 ? hub.accuracy.score * 100 : 'no accuracy'}% Accuracy</button>
    <h5>${hub.input_output_examples[0].input ? hub.input_output_examples[0].input : 'No Question'}</h5>
    <p>${hub.input_output_examples[0].output ? hub.input_output_examples[0].output : 'No! Not Yet! Take a break!!!'}</p>
    `;

    const price1 = document.getElementById('price-1');
    price1.innerHTML= `${hub.pricing[0].price ? hub.pricing[0].price : 'Free Of Cost'} <br> ${hub.pricing[0].plan}`
    const price2 = document.getElementById('price-2');
    price2.innerHTML= `${hub.pricing[1].price ? hub.pricing[1].price : 'Free Of Cost'} <br> ${hub.pricing[1].plan}`
    const price3 = document.getElementById('price-3');
    price3.innerHTML= `${hub.pricing[2].price} <br> ${hub.pricing[2].plan}`

    const feature1 = document.getElementById('f-1');
    feature1.innerText= `${hub.features[1].feature_name ? hub.features[1].feature_name : 'No Data Found'} :`;
    const feature2 = document.getElementById('f-2');
    feature2.innerText= `${hub.features[2].feature_name ? hub.features[2].feature_name : 'No Data Found'}`;
    const feature3 = document.getElementById('f-3');
    feature3.innerText= `${hub.features[3].feature_name ? hub.features[3].feature_name : 'No Data Found' }`;

    const integration1 = document.getElementById('i-1');
    integration1.innerText=`${hub.integrations[0] ? hub.integrations[0] : 'No data Found' }`;
    const integration2 = document.getElementById('i-2');
    integration2.innerText=`${hub.integrations[1] ? hub.integrations[1] : 'No Data Found'}`;
    const integration3 = document.getElementById('i-3');
    integration3.innerText=`${hub.integrations[2] ? hub.integrations[2] : 'No Data Found'}`;
    

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