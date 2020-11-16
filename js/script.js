let canvas = document.getElementById("cobra"); 
let context =canvas.getContext("2d");
let box = 32;
let cobra = [];
cobra[0] = {
	x: 8 * box,
	y: 8 * box

}
let direcao = "right";

function criarBG() {
	context.fillStyle = "lightgreen";
	context.fillRect(0, 0, 16 * box, 16 * box);
}

function criarCobrinha() {
	for (i=0; i < cobra.length; i++) {
		context.fillStyle ="green";
		context.fillRect(cobra[i].x, cobra[i].y, box, box);
	}
}

function iniciarJogo() {
	criarBG();
	criarCobrinha();

	let cobraX = cobra[0].x;
	let cobraY = cobra[0].y;

	if(direcao == "right") cobraX += box;
	if(direcao == "left") cobraX -= box;
	if(direcao == "up") cobraY -= box;
	if(direcao == "down") cobraY += box;

	cobra.pop();

	let newHead = {
		x: cobraX,
		y: cobraY
	}

	cobra.unshif(newHead);
}
let jogo = setInterval(iniciarJogo, 100);

