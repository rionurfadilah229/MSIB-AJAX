let data_clans_tag = document.getElementById("data_clans");

fetch("https://narutodb.xyz/api/clan")
    .then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    })
    .then(data => {
        console.log(data); 
        data.clans.forEach(clan => {
            let characterHTML = clan.characters.map(character => {
                let image = character.images[0] || "https://via.placeholder.com/150"; 
                return `
                    <div class="d-flex align-items-center mb-2">
                        <img src="${image}" alt="${character.name}" class="img-thumbnail me-2" style="width: 50px; height: 50px;">
                        <span>${character.name}</span>
                    </div>
                `;
            }).join("");

            data_clans_tag.innerHTML += 
            `<tr>
                <td>${clan.name}</td>
                <td>${characterHTML || "Tidak ada karakter"}</td>
            </tr>`;
        });
    })
    .catch(error => {
        console.error("Error fetching data:", error);
        data_clans_tag.innerHTML = `<tr><td colspan="2">Gagal memuat data: ${error.message}</td></tr>`;
    });
