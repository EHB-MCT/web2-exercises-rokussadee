"use strict"

let mysteryNumber = 0;

window.onload = function() {
    generateNumber();
    document.getElementById('guessBtn').addEventListener('click', function(e) {
        e.preventDefault();
        //get data from input
        // compare number
        let input = document.getElementById('input').value
        compareNumber(input).then(
            result => addMessage(result, 'Succes'),
            error => addMessage(error, 'Failure')
        )
    });
}

function generateNumber() {
    mysteryNumber = Math.floor(Math.random()*21);
    console.log(mysteryNumber)
}

function addMessage(message, state) {
    document.getElementById('messageContainer').innerHTML = `
        <div class="msgBox ${state == 'Succes' ? 'resultMsg' : 'errorMsg'}"> 
            <p>${message}</p>
        </div> 
    `
}

function compareNumber(number) {
    return new Promise (function(resolve, reject) {
        if (number < mysteryNumber) {
            reject('guess higher')
        } else if (number > mysteryNumber) {
            reject('guess lower')
        } else {
            resolve('correct')
        }
    })
}