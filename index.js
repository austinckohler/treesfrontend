console.log("hi")

fetch("http://localhost:3000/trees")
    .then(response => response.json())
    .then(trees => displayTreeData(trees))

    function displayTreeData(trees){
      trees.forEach(tree => {
          const h2 = document.createElement("h3")
          h2.innerHTML = `<a href="show.html?id=${tree.id}" >${tree.name}</a>`
          document.body.appendChild(h2)
      });
    }
