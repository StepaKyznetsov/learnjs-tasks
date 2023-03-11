async function getUsers(names) {

    let users = []

    for(let name of names){
        let response = await fetch(`https://api.github.com/users/${name}`)

        if(response.ok) {
            let result = await response.json();
            users.push(result);
        }
    }
    return users
}