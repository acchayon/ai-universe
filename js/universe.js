const loadData = () =>{
    fetch('https://openapi.programming-hero.com/api/ai/tools')
    .then(res => res.json())
    .then(data => displayData(data.data))
}

const displayData = allData => {
    // console.log(allData);
    const cardContainer = document.getElementById('card-container');
    allData.tools.forEach(data => {
        console.log(data)
        const makeDiv = document.createElement('div');
        makeDiv.classList.add('col');
        makeDiv.innerHTML= `
        <div class="card h-100">
            <img src="..." class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">Card title</h5>
                <p class="card-text">This is a longer card with supporting text below as a natural lead-in
                    to additional content. This content is a little bit longer.</p>
            </div>
        </div>
        `;
        cardContainer.appendChild(makeDiv); 
    })
}

loadData()