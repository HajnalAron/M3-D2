//Only working with a cors workaround

function musicPage(){
fetch("https://deezerdevs-deezer.p.rapidapi.com/search?q=eminem", {
 	"method": "GET",
 	"headers": {
 		"x-rapidapi-key": "6a6d399535msh94e6c026a6844cdp1dd69cjsn5ac8a74f3bf5",
 		"x-rapidapi-host": "deezerdevs-deezer.p.rapidapi.com"
 	}
 })
 .then(response => {
     console.log(response)
 	return response.json();
 })
 .then(music => {
    makeMusicCards(music.data)
 	getMusic(music.next)
 })
 .catch(err => {
 	console.error(err);
 });

function getMusic(newData){
    fetch(newData)
    .then(response => {
        console.log(response)
        return response.json();
    })
    .then(music => {
        makeMusicCards(music.data)
        getMusic(music.next)
    })
    .catch(err => {
        console.error(err);
    });
}
function makeMusicCards(data){
    const row = document.querySelector(".row")
    for(let i = 0; i<25; i++)
        row.innerHTML +=`
        <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-3">
        <div
            class="card px-3"
            style="width: 18rem"
            >
            <img src="${data[i].album.cover_big}" class="card-img-top" alt="..." />
            <div class="card-body">
                <h5 class="card-title">${data[i].title_short}</h5>
            </div>

            </div>
        </div>
        `
}
}