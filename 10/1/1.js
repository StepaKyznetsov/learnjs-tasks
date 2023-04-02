const f = () => {
	try{
		doSomething()
		return
	} catch(e){
		alert(e)
	} finally {
		doSomethingFinally()
	}
}

f();