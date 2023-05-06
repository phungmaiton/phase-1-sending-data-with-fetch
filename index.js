// Add your code here

const submitData = (name, email) => {

    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(
            {
                "name": name,
                "email": email,
            }
        )  
  })
    .then(resp => resp.json())
    .then(object => {
        let id = object.id;
        let body = document.querySelector('body');
        body.append(id);
    })
    .catch(error => {
        let message = error;
        let body = document.querySelector('body');
        body.append(message);
    })
}