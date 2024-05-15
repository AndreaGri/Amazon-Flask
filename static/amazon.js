function getProduct(id) {
    id = parseInt(id);
    console.log(id);
    fetch('https://3245-andreagri-amazonflask-nq45bwwr0x4.ws-eu111.gitpod.io/prod', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                'identifair': id
            })
        })
        .then(response => response.json())
        .then(data => {
            console.log({'d': data});
            document.getElementsByClassName('row').style.display='none'
            document.getElementById('prod').style.display='block'

        })
        
}
