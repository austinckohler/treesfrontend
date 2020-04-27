const params = window.location.search 
const searchParams = new URLSearchParams(params)
const id = searchParams.get('id')
console.log(id)

fetch(`http://localhost:3000/trees/${id}`)
    .then(response => response.json())
    .then(tree => showTreeInfo(tree))

    function showTreeInfo(tree){
        const h2 = document.createElement("h2")
        const p = document.createElement("p")
        h2.innerText = `common name` + tree.name
        p.innerText = `scientific name: ${tree.scientic_name}`
        document.body.append(h2, p)
    }