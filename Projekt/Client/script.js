const url = "http://localhost:3000/godis";

window.addEventListener("load", fetchData);

function fetchData() {
    fetch(url)
.then((result) => result.json())
.then((godis) => {
    if(godis.length > 0) {
        console.log(godis);
    let html = `<ul class="w-3/4 my-3 mx-auto flex flex-wrap gap-2 justify-center">`;
        godis.forEach(godis => {
            html += `
            <li
                class="bg-${(godis.color).toLowerCase()} basis-1/4 text-gray-500 p-2 rounded-md border-2 border-${(godis.color).toLowerCase()} flex flex-col justify-between">
                <h3>${godis.godisName}</h3>
                <p>Pris: ${godis.price}</p>
                <p>Färg: ${godis.color}</p>
                <div>
                    <button class="border border-${(godis.color).toLowerCase()} hover:bg-white/100 rounded-md bg-white/50 p-1 text-sm mt-2" onclick="setGodis(${godis.id})">
                        Ändra
                    </button>
                    <button class="border border-${(godis.color).toLowerCase()} hover:bg-white/100 rounded-md bg-white/50 p-1 text-sm mt-2" onclick="deleteGodis(${godis.id})">
                        Ta bort
                    </button>
                </div>
        </li>`;
        });
        html += `</ul>`;

        const listContainer = document.getElementById("listContainer");
        listContainer.innerHTML = "";
        listContainer.insertAdjacentHTML("beforeend", html);
    }
});
};

function setGodis(id) {
    console.log("Befintliga", id);
    fetch(`${url}/${id}`)
    .then(result => result.json())
    .then(godis => {
        console.log(godis);
        godisForm.godisName.value = godis.godisName;
        godisForm.color.value = godis.color;
        godisForm.price.value = godis.price;

        localStorage.setItem("currentId", godis.id);
    });
};

function deleteGodis(id) {
    console.log("Ta bort", id);
    fetch(`${url}/${id}`, { method: "DELETE" }).then(result => fetchData());
};

console.log(godisForm);
godisForm.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
    e.preventDefault();
    const serverGodisObject = {
        godisName: "",
        color: "",
        price: "",
    };
    serverGodisObject.godisName = godisForm.godisName.value;
    serverGodisObject.color = godisForm.color.value;
    serverGodisObject.price = godisForm.price.value;

    const id = localStorage.getItem("currentId");
    if(id) {
        serverGodisObject.id = id;
    }

    /*console.log(serverUserObject);*/
    const request = new Request(url, {
        method: serverGodisObject.id ? "PUT" : "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(serverGodisObject)
    });

    fetch(request).then(response => {
        /*console.log(response);*/
        fetchData();

        localStorage.removeItem("currentId");
        godisForm.reset();
    });
};