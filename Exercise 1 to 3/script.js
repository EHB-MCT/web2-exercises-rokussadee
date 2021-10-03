"use sctrict"


window.onload = function() {
    
    const msgContainer = document.getElementById('message')
    const form = document.getElementById('form')
    const dishesContainer = document.getElementById('order');

    let dishes = [];
    dishes.push({
        id: 1,
        name: 'Burger and french fries',
        price: '18'
    });
    dishes.push({
        id: 2,
        name: 'Spaghetti Bolognaise',
        price: '16'
    });
    dishes.push({
        id: 3,
        name: 'Vol au Vent',
        price: '19'
    });

    dishes.forEach((dish) => {
        let htmlString = `<input type="radio" name="options" class="radio" id="${dish.id}" value="${dish.name}"> <label for="${dish.id}">${dish.name}, ${dish.price}</label>`;
        dishesContainer.insertAdjacentHTML('beforeend', htmlString);
    });

    const inputList = Array.from(document.getElementsByTagName('input'));

    let radioList = Array.from(document.getElementsByClassName('radio'))
    console.log(radioList);
    
    console.log('loaded')
    
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        inputList.forEach(input => {
                    
            if (input.value == null || input.value == '') {
                input.classList.remove('border-green-600');
                input.classList.add('border-red-600');
            } else {
                input.classList.remove('border-red-600');
                input.classList.add('border-green-600');
            }
        });
        if (document.getElementById('name').value == '' || document.getElementById('email').value == '' || document.querySelector('input[type="radio"]:checked') == undefined) {
            msgContainer.innerHTML = `
            <p>Please enter your data in the <span class="missingClass">missing</span> fields.</p>
            `;
        } else {
            let data = {
                name: document.getElementById('name').value,
                email: document.getElementById('email').value,
                order: document.querySelector('input[type="radio"]:checked').value
            }

            submit(data);
        }
    })
    
    function submit(data) {

        let orderDetails = {
            name: data.name,
            email: data.email,
            order: data.order
        }

        printOrder(orderDetails);
    }

    
    function printOrder(data) {
        msgContainer.innerHTML = `
        <p>The order for the customer <span class="nameClass">${data.name}</span> is the following: <span class="nameClass">${data.order}</span>. The customer may be notified by email: <span class="nameClass">${data.email}</span></p>
        `
    }
}