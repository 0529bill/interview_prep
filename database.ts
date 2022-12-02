//planning on move this codebase to mongoDB
export const database = [
	{
		category: 'Javascript',
		categoryId: 1,
		question: 'What is closure?',
		hints: 'lexical Environment',
		answer: 'closure: inner function has access to outer variables through lexical environment. There are two things inside lexical environment, one is environment record, which is a object stores all the local variable, the other is a reference to the outer lexical environment.',
	},
	{
		category: 'Javascript',
		categoryId: 1,
		question: 'What is eventLoop?',
		hints: 'callStack, callbackQueue, microTask, macroTask',
		answer: 'eventLoop allows single threaded language such as Javascript to handle asynchronous.',
	},
	{
		category: 'Javascript',
		categoryId: 1,
		question: 'What do we need event delegation? e.stopPropagation vs e.preventDefault? ',
		hints: 'bubbling, capturing',
		answer: 'it saves memory by only setting eventlistener at the parents, and eventlistener can be triggered by event bubbling',
	},
	{
		category: 'Javascript',
		categoryId: 1,
		question: 'let, const and var?',
		hints: 'function scope, block scope, IIFE',
		answer: "var can be re-declared, while const and var can't; var/ function will be hoisted and assign its value, const and let will be hoisted while in its scope, but they are only accessible after execution that line",
	},
	{
		category: 'Javascript',
		categoryId: 1,
		question: 'call, apply, bind?',
		hints: 'calls the function with a given this value and arguments provided individually.',
		answer: 'call(accepts individual), apply(accepts array) will execute immediately, while bind accepts an array and it also can be executed later',
	},

	{
		category: 'Javascript',
		categoryId: 1,
		question: 'arrow function vs function?',
		hints: '1. this 指向上一層. 2. Do not have arguments 3.  Can’t be called with new 4. don’t have super',
		answer: 'call(accepts individual), apply(accepts array) will execute immediately, while bind accepts an array and it also can be executed later',
	},

	{
		category: 'Javascript',
		categoryId: 1,
		question: 'prototype?',
		hints: 'prototype inheritance',
		answer: 'Every object has a inner object called prototype, it allows us to "inherit" or gain access to its parents method. By having prototype inheritance, developer can inherit methods from upper prototype thus can reduce amount of code to write.',
	},

	{
		category: 'Javascript',
		categoryId: 1,
		question: 'Functional programming?',
		hints: 'Pure function, Immutability, higher-order function, Currying, no side Effects',
		answer: '',
	},
]
