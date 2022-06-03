const getLocalStorage = () => JSON.parse(localStorage.getItem('db_user')) || []
const setLocalStorage = (dbUser) => localStorage.setItem('db_user', JSON.stringify(dbUser))


const createUser = (user) => {
    const dbUser = getLocalStorage()
    dbUser.push(user)
    setLocalStorage(dbUser)
}

const saveUser = () => {
    const readUser = getLocalStorage()

    for(i = 0; i < readUser.length; i++){
    }
    let userId = i

    const userSignUp = {
        id: userId,
        name: document.getElementById('username-signup').value,
        password: document.getElementById('password-signup').value,
        image: document.getElementById('image-signup').value
    }

    createUser(userSignUp)
    
}


const setLocalStorageIndex = (user) => localStorage.setItem('index', JSON.stringify(user))


const loginUser = () => {
    const userName = document.getElementById('username-login').value
    const userPassword = document.getElementById('password-login').value

    const readUser = getLocalStorage()

    for(i = 0; i < readUser.length; i++){
        if(userName == readUser[i].name && userPassword == readUser[i].password){
            setLocalStorageIndex(i)
            
            location = './user/user.html'
        }
    }
}



document.getElementById('signButton').addEventListener('click', saveUser)
document.getElementById('loginButton').addEventListener('click', loginUser)