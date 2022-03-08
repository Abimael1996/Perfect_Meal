const searchBtn = document.querySelector("#searchBtn");
const searchInput = document.querySelector("#form1");

const searchClient = async () => {
    const search = searchInput.value;
    try {
        const clientRes = await fetch("/api/client");
        const clients = await clientRes.json();
        if (clientRes.ok) {
            let found = false;
            for (const client of clients) {
                if (client.first_name.toLowerCase().trim() === search.toLowerCase().trim() ||
                    client.first_name.toLowerCase().trim() + client.last_name.toLowerCase().trim() === search.split(" ").join("").toLowerCase()) {
                    found = true;
                    window.location.replace(`/client/${client.id}`);
                }
            }
            if (!found) {
                alert(`Client "${search}" does not exist.\n\nSearch by first name or by first and last name`);
            }
        }
    } catch (err) {
        alert(`Client ${search} does not exist.`)
    }
}
searchBtn.addEventListener("click", searchClient);
searchInput.addEventListener("keypress", (e) => {
    if(e.key === "Enter") {
        searchClient();
    }
});


