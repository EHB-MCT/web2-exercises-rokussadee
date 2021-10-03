"use sctrict"


window.onload = function() {
    
    
    const msgContainer = document.getElementById('message')
    const form = document.getElementById('form')
    const inputList = Array.from(document.getElementsByTagName('input'));

    
    console.log('loaded')
    
    form.addEventListener('submit', submit)
    
    function submit(e) {
        e.preventDefault();
        let data = {
            name: document.getElementById('name').value,
            email: document.getElementById('email').value,
            order: document.getElementById('order').value
        }

        msgDisplay(data);
    }

    
    function msgDisplay(data) {

        if (data.name == '' || data.email == '' || data.order == '') {
            msgContainer.innerHTML = `
            <p>Please enter your data in the required fields.</p>
            `

            inputList.forEach(e => {
                e.classList.add('border-red-600');
            });
        } else {
            msgContainer.innerHTML = `
            <p>Hey <span class="nameClass">${data.name}</span>, you ordered a <span class="nameClass">${data.order}</span> via <span class="nameClass">${data.email}</span></p>
            `
            inputList.forEach(e => {
                e.classList.remove('border-red-600');
            });
        }
    }
}