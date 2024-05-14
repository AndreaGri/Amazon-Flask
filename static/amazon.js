function getProduct(id){
    var id=parseInt(id)
    console.log(id)
    fetch('https://3245-andreagri-amazonflask-1q5tl582h3m.ws-eu111.gitpod.io/prod', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({'identifair': id})})
        console.log(JSON.stringify(id))
        .then((response) => response.json())
        .then(Data =>
            console.log(Data),
            document.getElementById('prod').innerHTML= Data,
            document.getElementById('prod').style.display='block'


        )
}