///https://randomuser.me/api


const generateAUser = function() {
    fetch('https://randomuser.me/api')
        .then((response => response.json()))
        .then(userdata => makeUserCards(userdata.results[0]))

}

function makeUserCards(userdata){
    const row = document.querySelector(".row")
        row.innerHTML +=`
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-3">
        <div
            class="card px-3"
            style="width: 18rem"
            >
            <img src="${userdata.picture.large}" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${userdata.name.first + " " + userdata.name.last}</h5>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">${userdata.location.country}</li>
                <li class="list-group-item">${userdata.location.city}</li>
                <li class="list-group-item">${userdata.location.street.name}</li>
            </ul>
            </div>
        </div>
        `
}