// Add your code here

function submitData(userName, userEmail) {
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json",
        },
        body: JSON.stringify({
            name: userName,
            email: userEmail,
        })
    }
    return fetch('http://localhost:3000/users', configObj)
    .then(res => res.json())
    .then(data => {
        console.log(data.id);
        
        const p = document.createElement('p');
        document.body.innerHTML = data.id;
        
    })
    .catch(error => {
        alert('Oh no, it\'s not working!');
        console.log(error.message);
        document.body.innerHTML = error.message;
    })
}

