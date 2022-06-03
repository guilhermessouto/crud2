const main = document.getElementById('main')


const getLocalStorage = () => JSON.parse(localStorage.getItem('db_user')) || []
//------------//
const getLocalStorageIndex = () => JSON.parse(localStorage.getItem('index')) 

const readUser = getLocalStorage()
const index = getLocalStorageIndex()

readUser.forEach(e => {
    if(index == e.id){
        const userEl = document.createElement('div')
        userEl.classList.add('card_user')
        userEl.innerHTML = `
            <img src="${e.image}" alt="${e.name}">
            <h1>${e.name}</h1>
        `
        
        main.appendChild(userEl)
    } 
})