


function getProduct(id){
    var id=id
    console.log(id)
    fetch('https://3245-andreagri-amazonflask-h49wtq4q2q0.ws-eu111.gitpod.io/prod', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(id)})
}