function setLocalStorage(dataName: string, category) {
	console.log('category123123', category)
	window.localStorage.setItem(dataName, JSON.stringify(category))
}

function getLocalStorage(dataName: string) {
	const retrievedData = window.localStorage.getItem(dataName)
	if (!retrievedData) {
		return console.log(`No data for name ${dataName}`)
	}
	console.log('retrievedData', retrievedData)
	console.log('JSON.parse(retrievedData)', JSON.parse(retrievedData))
	return [JSON.parse(retrievedData)]
}

export { setLocalStorage, getLocalStorage }
