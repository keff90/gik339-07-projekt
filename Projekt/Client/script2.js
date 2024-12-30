const url = "http://localhost:3000/godis";

fetch(url)
.then((response) => response.json())
.then((godis) => {
    console.log(godis)
    const ul = document.createElement("ul");
    ul.classList.add("class-list");

    godis.forEach(godis => {
        const li = document.createElement("li");
        li.classList.add("class-item");

        /*li.setAttribute("data-id", godis.id);*/

        li.innerHTML = `
        <p>Godissort: ${godisName}</p>
        <p>Färg: ${color}</p>
        <p>Pris: ${price}</p>
        `;

        li.style.backgroundColor = godis.color;
        ul.appendChild(li);
    });
    
    document.body.appendChild(ul);
});