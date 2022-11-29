function setLocalStorage(dataName: string, category) {
	window.localStorage.setItem(dataName, JSON.stringify(category))
}

function getLocalStorage(dataName: string) {
	const retrievedData = window.localStorage.getItem(dataName)
	if (!retrievedData) {
		return console.log(`No data for name ${dataName}`)
	}
	return JSON.parse(retrievedData)
}

export { setLocalStorage, getLocalStorage }
