document.querySelector('#form-message').addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.querySelector('#message-name').value;
    const email = document.querySelector('#message-email').value;
    const phone = document.querySelector('#message-phone').value;
    const content = document.querySelector('#message-content').value;

    const today = new Date();
    const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
    const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    const datetime = date+' '+time;

    const messageObj = ({ user_id: 1, name, email, phone, datetime, content })

    async function postMessage(url, obj) {
        const response = await fetch(url, {
            method: 'POST', // *GET, POST, PUT, DELETE, etc.
            headers: {
            'Content-Type': 'application/json'
            },
            body: JSON.stringify(obj) // body data type must match "Content-Type" header
        })
        return response.json(); // parses JSON response into native JavaScript objects
    }

    postMessage('http://localhost:3000/api/v1/messages', messageObj)
    .then(data => {
        console.log(data); // JSON data parsed by `data.json()` call
    });
})