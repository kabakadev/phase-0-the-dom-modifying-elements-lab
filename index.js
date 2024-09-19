// Write your code here!
const removeMain = document.querySelector('main#main')
removeMain.remove()

const newHeader = document.createElement('h1')
newHeader.id = 'victory'
newHeader.textContent = "Ian Kabaka is the champion"
document.body.append(newHeader)