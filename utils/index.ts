function setLocalStorage(dataName: string, dataBase) {
	window.localStorage.setItem(dataName, JSON.stringify(...dataBase))
}

function getLocalStorage(dataName: string) {
	const retrievedData = window.localStorage.getItem(dataName)
	if (!retrievedData) {
		return console.log(`No data for name ${dataName}`)
	}
	console.log('JSON.parse(retrievedData)', JSON.parse(retrievedData))
	return [...JSON.parse(retrievedData)]
}

export { setLocalStorage, getLocalStorage }
