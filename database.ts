//planning on move this codebase to mongoDB
export const database = [
	{
		category: 'Javascript',
		categoryId: 1,
		question: 'What is closure?',
		hints: 'lexical Environment',
		ans: 'closure: inner function has access to outer variables through lexical environment. There are two things inside lexical environment, one is environment record, which is a object stores all the local variable, the other is a reference to the outer lexical environment.',
	},
	{
		category: 'Javascript',
		categoryId: 1,
		question: 'What is eventLoop?',
		hints: 'callStack, callbackQueue, microTask, macroTask',
		ans: 'eventLoop allows single threaded language such as Javascript to handle asynchronous.',
	},
	{
		category: 'Javascript',
		categoryId: 1,
		question: 'What do we need event delegation? e.stopPropagation vs e.preventDefault? ',
		hints: 'bubbling, capturing',
		ans: 'it saves memory by only setting eventlistener at the parents, and eventlistener can be triggered by event bubbling',
	},
	{
		category: 'Javascript',
		categoryId: 1,
		question: 'let, const and var?',
		hints: 'function scope, block scope, IIFE',
		ans: "var can be re-declared, while const and var can't; var/ function will be hoisted and assign its value, const and let will be hoisted while in its scope, but they are only accessible after execution that line",
	},
	{
		category: 'Javascript',
		categoryId: 1,
		question: 'call, apply, bind?',
		hints: 'calls the function with a given this value and arguments provided individually.',
		ans: 'call(accepts individual), apply(accepts array) will execute immediately, while bind accepts an array and it also can be executed later',
	},

	{
		category: 'Javascript',
		categoryId: 1,
		question: 'arrow function vs function?',
		hints: '1. this 指向上一層. 2. Do not have arguments 3.  Can’t be called with new 4. don’t have super',
		ans: 'call(accepts individual), apply(accepts array) will execute immediately, while bind accepts an array and it also can be executed later',
	},

	{
		category: 'Javascript',
		categoryId: 1,
		question: 'prototype?',
		hints: 'prototype inheritance',
		ans: 'null',
	},
]
