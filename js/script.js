
const cardSpace = document.querySelector("#post-place");
let postArray = [];
const btnRegen = document.querySelector("#regen");

axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then(resp => {

    
    postArray = resp.data;
    console.log(postArray);

    postArray.forEach((curPost) =>{
        cardSpace.innerHTML += 
        `
            <div class="col-12 col-md-6 col-lg-4 text-center">
                        <div class="post-card mt-5">
                            <img src="./img/pin.svg" alt="pin" id="pin">
                            <img src=${curPost.thumbnailUrl} alt="asdnojkl">
                            <p class="p-5">
                                ${curPost.title}
                            </p>
                        </div>
                    </div>
        `
    });

});

btnRegen.addEventListener("click", () => {
    cardSpace.innerHTML = ""
    postArray = []

    axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then(resp =>{
        postArray = resp.data;

        postArray.forEach((curPost) =>{
            cardSpace.innerHTML += 
            `
                <div class="col-12 col-md-6 col-lg-4 text-center">
                            <div class="post-card mt-5">
                                <img src="./img/pin.svg" alt="pin" id="pin">
                                <img src=${curPost.thumbnailUrl} alt="asdnojkl">
                                <p class="p-5">
                                    ${curPost.title}
                                </p>
                            </div>
                        </div>
            `
        });
    })
})




