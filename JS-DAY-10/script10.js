// function handleClick() {
//     const button = document.getElementById("btn");
//     button.textContent = "Clicked"
// }



// function handleClick(){
//     document.querySelector("h1").style.color="red"
//     const button = document.getElementById("btn");
//     button.textContent = "Color Changed"
// }


// Q3

function handleClick(){
    // create h2 tag
    const subHead = document.createElement("h2").textContent="New Sub heading"
    // create image 
    const image=document.createElement("img")

    image.setAttribute("src","https://dynamic-media-cdn.tripadvisor.com/media/photo-o/0c/bb/a3/97/predator-ride-in-the.jpg?w=900&h=500&s=1")

    image.setAttribute("alt","sample Image");

    // append both h2 and image inside content div
    document.getElementById("content").append(subHead)
    document.getElementById("content").append(image)
}


