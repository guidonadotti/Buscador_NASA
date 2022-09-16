var tarjeta=`http://images-assets.nasa.gov/image/${localStorage.getItem("tarjeta")}/${localStorage.getItem("tarjeta")}~orig.jpg`
let informacion=JSON.parse(localStorage.getItem("informacion"))

document.addEventListener("DOMContentLoaded",() => {
        document.getElementById("container").innerHTML=`<img src="${tarjeta}" alt="" srcset=""><br>`
        document.getElementsByClassName("container")[0].innerHTML=`<p>${informacion[0].description}</p>`       
    })


