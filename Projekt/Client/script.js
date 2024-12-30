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
                    <button class="border border-${(godis.color).toLowerCase()} hover:bg-white/100 rounded-md bg-white/50 p-1 text-sm mt-2">
                        Ändra
                    </button>
                    <button class="border border-${(godis.color).toLowerCase()} hover:bg-white/100 rounded-md bg-white/50 p-1 text-sm mt-2">
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

console.log(userForm);
userForm.addEventListener("submit", handleSubmit)

function handleSubmit(e) {
    e.preventDefault();
    const serverUserObject = {
        godisName: "",
        color: "",
        price: "",
    };
    serverUserObject.godisName = userForm.godisName.value;
    serverUserObject.color = userForm.color.value;
    serverUserObject.price = userForm.price.value;

    console.log(serverUserObject);
    const request = new Request(url, {
        method: "POST",
        headers: {
            "content-type": "application/json"
        },
        body: JSON.stringify(serverUserObject)
    });

    fetch(request).then(response => {
        console.log(response);
        userForm.reset();
    });
};