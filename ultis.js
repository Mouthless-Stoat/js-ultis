const randInt = (min, max) => {
	return Math.floor(Math.random() * (max - min + 1)) + min
}

const randomChoice = (list) => {
	return list[Math.floor(Math.random() * list.length)]
}

const randomChoices = (list, num) => {
	let out = []
	let already = []
	for (let choice = 0; choice < num; choice++) {
		let n
		while (true) {
			n = Math.floor(Math.random() * list.length)
			if (already.includes(n)) continue
			break
		}
		out.push(list[n])
		already.push(n)
		if (list.length <= already.length) return out
	}
	return out
}

const drawList = (list, num) => {
	let out = []
	for (let choice = 0; choice < num; choice++) {
		if (list.length < 1) return out
		let e = Math.floor(Math.random() * list.length)
		out.push(list[e])
		list.splice(e, 1)
	}
	return out
}

const shuffleList = (list) => {
	for (let i = list.length - 1; i > 0; i--) {
		const j = Math.floor(Math.random() * (i + 1))
		;[list[i], list[j]] = [list[j], list[i]]
	}
	return list
}

const countDup = (list) => {
	const listNoDup = new Set(list)
	var out = {}
	for (const i of listNoDup) {
		out[i] = list.filter((c) => c.toLowerCase() === i.toLowerCase()).length
	}
	return out
}

const listDiff = (list1, list2) => list1.filter((x) => !list2.includes(x))
const listInter = (list1, list2) => list1.filter((x) => list2.includes(x))

const clamp = (num, min, max) => Math.min(Math.max(num, min), max)

const sleep = (ms) => {
	return new Promise((resolve) => {
		setTimeout(resolve, ms)
	})
}

//stackoverflow.com/questions/67720548/generate-unique-combinations-in-javascript-from-n-objects-with-r-samples
function combinations(a, c) {
	let index = []
	let n = a.length

	for (let j = 0; j < c; j++) index[j] = j
	index[c] = n

	let ok = true
	let result = []

	while (ok) {
		let comb = []
		for (let j = 0; j < c; j++) comb[j] = a[index[j]]
		result.push(comb)

		ok = false

		for (let j = c; j > 0; j--) {
			if (index[j - 1] < index[j] - 1) {
				index[j - 1]++
				for (let k = j; k < c; k++) index[k] = index[k - 1] + 1
				ok = true
				break
			}
		}
	}

	return result
}

function toPercent(num) {
	return (num * 100).toFixed(1)
}

function average(...numList) {
	return numList.reduce((acc, val) => acc + val, 0) / numList.length
}

function deepCopy(obj) {
	return JSON.parse(JSON.stringify(obj))
}

function randStr(len = 7) {
	return (Math.random() + 1).toString(36).slice(2, 2 + len)
}
module.exports = {
	randInt,
	randomChoice,
	randomChoices,
	drawList,
	shuffleList,
	countDup,
	listDiff,
	listInter,
	clamp,
	sleep,
	combinations,
	toPercent,
	average,
	deepCopy,
	randStr
}
