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

function shuffleArray(array) {
	for (let i = array.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[array[i], array[j]] = [array[j], array[i]]
	}
}

export { setLocalStorage, getLocalStorage, shuffleArray }
