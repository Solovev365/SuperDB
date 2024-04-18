"use strict"
const outputEl = document.querySelector('#list-Create')
const inputEl = document.querySelector('#input')
let url = "https://jsonplaceholder.typicode.com/users"
let dateUsers = []


async function loadDate() {
    try {
        outputEl.innerHTML = 'Загрузка'
        const date = await fetch(url)
        const users = await date.json()
        dateUsers = users
        renderOutput(users)
    } catch (err) {
        outputEl.innerHTML = 'Что-то пошло не по плану! Работаем над этим, зайдите позже.'
    } finally {
        console.log('У тебя всё получилось, ты большой молодец!')
    }
}

inputEl.addEventListener('input', inputFilter)

function inputFilter(event) {
    const eventValue = event.target.value.toUpperCase()
    const filteredUsers = dateUsers.filter((dateUser) => {
        return dateUser.name.toUpperCase().includes(eventValue)
    })
    renderOutput(filteredUsers)
}

loadDate()

function renderOutput(users = []) {
    outputEl.innerHTML = ''
    if (users.length == 0) {
        outputEl.innerHTML = 'Никого нет'
    } else {
        const user = users.map(htmlOutput).join('')
        outputEl.insertAdjacentHTML('beforeend', user)
    }

}


function htmlOutput(user) {
    return `<li>
    <span class="job-text">
         ${user.name}
    </span>
    </li>`
}