class HttpError extends Error {
  constructor(response) {
    super(`${response.status} for ${response.url}`)
    this.name = 'HttpError'
    this.response = response
  }
}

async function loadJson(url) {
  let response = await fetch(url)
  if (response.status == 200) {
    return response.json()
  } else {
    throw new HttpError(response)
  }
}

async function demoGithubUser() {

  let user
  while(true) {
    let name = prompt("Введите логин?", "iliakan")

    try {
      user = await loadJson(`https://api.github.com/users/${name}`)
      break
    } catch(e) {
      if (e instanceof HttpError && e.response.status == 404) {
        alert("Такого пользователя не существует, пожалуйста, повторите ввод.")
		return demoGithubUser()
      } else {
        throw e
      }
    }
  }

  alert(`Полное имя: ${user.name}.`)
  return user
}

demoGithubUser()