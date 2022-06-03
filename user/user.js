const getLocalStorage = () => JSON.parse(localStorage.getItem('db_user'))

readUser = getLocalStorage()

document.getElementById('p').innerHTML = `${readUser.name}`