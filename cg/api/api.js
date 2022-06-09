body = document.querySelector('body');
const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Host': 'crossword-maker.p.rapidapi.com',
		'X-RapidAPI-Key': 'b345b06c1emshcd872a66643f3d9p1534d8jsn78bf841a6f27'
	},
	body: '{"qFields":["question1","question2"],"aFields":["Answer1","ansWer2"],"note":"example note"}'
};
//let corpo = document.querySelector(body);
fetch('https://crossword-maker.p.rapidapi.com/crosswords/create-crossword', options)
	.then(response => response.json())
	.then(response => console.log(response))
	
	.catch(err => console.error(err));
	 