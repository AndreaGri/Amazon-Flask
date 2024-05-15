function getProduct(id){
    var id=parseInt(id)
    console.log(id)
    fetch('https://3245-andreagri-amazonflask-kymymcrf6yf.ws-eu111.gitpod.io/prod', {method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({'identifair': id})})
    .then(Response => Response.json())
    .then(
        (data) => {
            console.log({'d' : data})

        }
    )
        
}