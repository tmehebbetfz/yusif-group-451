import { 
	createBtn, 
	resetBtn, 
	titleInp, 
	descInp 
} from './dom-elements.js'

import { resetForm, ls } from './utils.js'

createBtn.addEventListener('click', () => {
	createTask()
})

resetBtn.addEventListener('click', () => {
	resetForm()
})

function createTask() {
	const id = Math.round(Math.random() * 10000)
	const title = titleInp.value
	const desc = descInp.value

	const newTask = {
		id: id,
		title: title,
		description: desc,
	}

	const key = 'task_' + id
	const value = JSON.stringify(newTask)

	ls.setItem(key, value)

	resetForm()

	alert('Task created successfully!')
}