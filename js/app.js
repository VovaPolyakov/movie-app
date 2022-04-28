
let input = document.querySelector('.input-films');
let search = document.querySelector('.search-icon')
let row = document.querySelector('.films-row')



search.addEventListener('click',function(event){
    let inputVal = input.value
    fetch(`http://www.omdbapi.com/?s=${inputVal}&page=1&apikey=57c54aca`)
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        for(let i = 0; i< 10 ; i++){
            console.log(data.Search[i])
        }
        class Film{
            constructor(title,img,rating){
                this.title = title;
                this.img = img;
            }
            createBlock(){
                return `

                <div class="film">
                    <div class="film-img">
                        <img src="${this.img}">
                    </div>
                    <div class="film-text-row">
                        <div class="film-title">
                            <p>${this.title}</p>
                        </div>

                    </div>
                </div>
    
                `
            }
            render(){
                row.innerHTML += this.createBlock();
            }
        }
        for(let i = 0;i<9;i++){
            let films = new Film(data.Search[i].Title,data.Search[i].Poster,data.Search[i].Rating);
            films.createBlock();
            films.render();
        }

    });

    
})