


fetch('https://jsonplaceholder.typicode.com/todos')

.then(response => response.json())
.then(json => console.log(json))

fetch('https://jsonplaceholder.typicode.com/todos')
.then(res => res.json())
.then(data => {
	let list = data.map(post => {
		return post.title
	})
	console.log(list)
}) 

fetch('https://jsonplaceholder.typicode.com/todos?id=1')

.then(res => res.json())
.then(data => console.log(data))

fetch('https://jsonplaceholder.typicode.com/todos/?id=2')

.then(res => res.json())
.then(data => {
	let listA = data.map(post => {
		return post.title	
	})
	let listB = data.map(post => {
		return post.completed
	})
	console.log(listA)
	console.log(listB)
}) 

fetch('https://jsonplaceholder.typicode.com/todos', {
	method: 'POST',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		userId: 99,
		title: 'New Todo List',
		completed: true
	})
})
.then(res => res.json())
.then(data => console.log(data))

fetch('https://jsonplaceholder.typicode.com/todos/1', {
	method: 'PUT',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		Title: 'Updated Todo List',
		Description: 'something something',
		Status: 'completed',
		dateCompleted: 'April 1, 2021',
		userId: 1
	})
})
.then(res => res.json())
.then(data => console.log(data))

fetch('https://jsonplaceholder.typicode.com/todos/1', {
	method: 'PATCH',
	headers: {
		'Content-Type': 'application/json'
	},
	body: JSON.stringify({
		title: 'Updated Todo List',
		completed: true,
		dateCompleted: 'April 1, 2021'		
	})
})
.then(res => res.json())
.then(data => console.log(data))

fetch('https://jsonplaceholder.typicode.com/todos/2', {
	method: 'DELETE'	
})
.then(res => res.json())
.then(data => console.log(data))