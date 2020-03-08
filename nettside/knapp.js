const btn = document.getElementById("theButton");
const inspotext = document.getElementById("inspotext");
let i = 0;

const quotes = [
	"hello handsome!", 
	"looking good!",
	"you are loved",
	"with great power comes straight responsibility"
];

function getQuote() {
	inspotext.innerHTML = quotes[i];
	i += 1;
	if (i == quotes.length) {
		i = 0;
	}
}
