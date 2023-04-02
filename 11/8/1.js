async function loadJson(url) {
	try{
		let response = await fetch(url)

		if (response.status == 200)return response.json()
        else throw new Error(response.status)

    } catch(e){
		console.log(e)
	}
}