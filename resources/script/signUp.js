
const form = document.getElementById("form");

form.addEventListener("submit", handleSubmit);
function handleSubmit(event) {
    event.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    const jsonData = JSON.stringify(data);
    console.log(data);

    fetch("http://102.36.176.228:4445/auth/signup", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: jsonData,
    })
        .then((response) => response.json())
        .then((result) => {
            console.log(result);
        })
        .catch((err) => console.log(err));
};