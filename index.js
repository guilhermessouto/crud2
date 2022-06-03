
const getLocalStorage = () => JSON.parse(localStorage.getItem('db_user')) || []
const setLocalStorage = (dbUser) => localStorage.setItem('db_user', JSON.stringify(dbUser))


const readUser = getLocalStorage()


const createUser = (user) => {
    const dbUser = getLocalStorage()
    dbUser.push(user)
    setLocalStorage(dbUser)
}

const saveUser = () => {
    const userSignUp = {
        name: document.getElementById('username-signup').value,
        password: document.getElementById('password-signup').value
    }

    createUser(userSignUp)
}


const loginUser = () => {
    let userName = document.getElementById('username-login').value
    let userPassword = document.getElementById('password-login').value

    for(i = 0; i < readUser.length; i++){
        if(userName == readUser[i].name && userPassword == readUser[i].password){
            location = `./user/user.html/`
        }
    }
}



document.getElementById('signButton').addEventListener('click', saveUser)

document.getElementById('loginButton').addEventListener('click', loginUser)