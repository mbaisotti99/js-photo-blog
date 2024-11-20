
const cardSpace = document.querySelector("#post-place");
let postArray = [];
const btnRegen = document.querySelector("#regen");



const overlayElem = document.querySelector(".overlay");

const xElem = document.querySelector(".x");



axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then(resp => {


    postArray = resp.data;
    console.log(postArray);

    postArray.forEach((curPost) => {

        cardSpace.innerHTML +=
            `
            <div class="col-12 col-md-6 col-lg-4 text-center">
                        <div class="post-card mt-5">
                            <img src="./img/pin.svg" alt="pin" id="pin">
                            <img src=${curPost.thumbnailUrl} alt="asdnojkl" class="post-img" data-img-id="${curPost.id}">
                            <p class="p-5">
                                ${curPost.title}
                            </p>
                        </div>
                    </div>
        `
    });

    const postImgElem = document.querySelectorAll(".post-img");
    postImgElem.forEach((curImg) =>{
        
        curImg.addEventListener("click", () => {
            overlayElem.classList.remove("d-none")
            overlayElem.classList.add("d-block")
            let postCardElem = document.querySelector(".post-card")
            postCardElem.style.zIndex = "1";

            // console.log(curImg.dataset.imgId);
            // curImgId = curImg.dataset.imgId;
            const modalImgElem = document.querySelector(".modalImg")
            modalImgElem.src = curImg.src;
            // console.log("click");
            
            // overlayElem.style.display = "block";
        })

    })

});

btnRegen.addEventListener("click", () => {
    cardSpace.innerHTML = ""
    postArray = []

    axios.get("https://jsonplaceholder.typicode.com/photos?_limit=6").then(resp => {
        postArray = resp.data;

        postArray.forEach((curPost) => {
            cardSpace.innerHTML +=
                `
                <div class="col-12 col-md-6 col-lg-4 text-center">
                            <div class="post-card mt-5">
                                <img src="./img/pin.svg" alt="pin" id="pin">
                                <img src=${curPost.thumbnailUrl} alt="asdnojkl" class="post-img">
                                <p class="p-5">
                                    ${curPost.title}
                                </p>
                            </div>
                        </div>
            `
        });

    })
})

xElem.addEventListener("click", () => {
    overlayElem.classList.remove("d-block")
    overlayElem.classList.add("d-none")
})

overlayElem.addEventListener("click", () =>{
    overlayElem.classList.remove("d-block")
    overlayElem.classList.add("d-none")
})

