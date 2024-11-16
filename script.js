let data_users_tag = document.getElementById("data_users");

fetch("https://randomuser.me/api/?results=10")
    .then(Response => Response.json())
    .then(data => {
        data.results.forEach(users => {
            data_users_tag.innerHTML += 
            `<tr>
                <td>
                    <div class="row">
                        <div class="col-md-2">
                            <img src="${users.picture.large}" class="img-fluid">
                        </div>
                        <div class="col-md-10">
                            <h3>${users.name.first} ${users.name.last}</h3>
                            <p class="text-muted">
                            ${users.location.street.name} ${users.location.street.number}
                                <br>
                                ${users.email}
                                <br>
                                ${users.phone}
                            </p>
                        </div>
                    </div>
                </td>
                <td>
                    <button class="btn btn-info">Detail</button>
                    <button class="btn btn-warning">Edit</button>
                    <button class="btn btn-danger">Deleted</button>
                </td>
            </tr>`;
        });
    })


// // let data_users_tag = document.getElementById("data_users");

// // data_users_tag.innerHTML = `<tr>
// //     <td>Jared</td>
// //     <td>Jl. Cruyff</td>
// //     <td>jared22@gmail.com</td>
// //     <td>085111234751</td>
// // </tr>`;

// //data_users_tag.innerHTML += `<tr>
// //    <td>Godts</td>
// //    <td>Jl. Cruyff</td>
// //    <td>godts12@gmail.com</td>
// //    <td>085111234751</td>
// //</tr>`;

// // for (let i = 0; i < 10; i++) {
// //     data_users_tag.innerHTML += `<tr>
// //     <td>Godts</td>
// //     <td>Jl. Cruyff</td>
// //     <td>godts12@gmail.com</td>
// //     <td>085111234751</td>
// // </tr>`;
// // } 

