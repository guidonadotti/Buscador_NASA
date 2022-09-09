let getJSONData = function(url) {
    let result = {};

    return fetch(url)
    .then(function(response) {
         if (response.ok) {
            return response.json();
        } else {
            throw Error(response.statusText);
        }
    })
    .then(function(response) {
        result.status = 'ok';
        result.data = response;
   
        return result;
    })
    .catch(function(error) {
        result.status = 'error';
        result.data = error;

        return result;
    });
}

function mostrarResultados(){
    let busqueda = document.getElementById("inputBuscar").value;
        let JSON = `https://images-api.nasa.gov/search?q=${busqueda}`;
        document.getElementById("contenedor").innerHTML = "";
        getJSONData(JSON).then(respuesta => {
            respuesta = respuesta.data;
            for (elemento of respuesta.collection.items) {
                document.getElementById("contenedor").innerHTML += `
                <div class="col-4">
                    <div class="card shadow-sm">
                        <img class="bd-placeholder-img card-img-top" width="100%" height="225" src="${elemento.links[0].href}"</img>
                        <div class="card-body">
                            <h5>${elemento.data[0].title}</h5>
                            <p class="card-text">${elemento.data[0].description}</p>
                            <small class="text-muted">${elemento.data[0].date_created}</small>
                        </div>
                    </div>
                </div>
                `
            }
        })
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("btnBuscar").addEventListener("click", () => {
        mostrarResultados();
    });
    document.getElementById("inputBuscar").addEventListener("keydown",(tecla) => {
        if(tecla.key=="Enter"){
            mostrarResultados();
        };
    })
});