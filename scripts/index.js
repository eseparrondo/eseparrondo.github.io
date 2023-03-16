var json = [];
var pala  = [];
var defi = [];
var lon;

$.ajax({
  url: "https://raw.githubusercontent.com/ssvivian/WebstersDictionary/master/dictionary.json",
  async: false,
  cache: false,
  dataType: "json",
  processData: true,
})
.done(//obtencion de los arrays de palabras y definiciones para su posterior empleo
  function(data){
    lon = data.length;
    //console.log(data);
    for (let i = 0; i < data.length; i++) {
            pala.push(data[i].word);  
            defi.push(data[i].definitions);
        }
        
  }
)
//console.log(pala);
//console.log(defi);
console.log(lon);
//definicion del tope de numeros que se pueden generar aleatoriamente
var tope = Math.floor(Math.random()*lon);
  console.log(tope);

var word = document.getElementById('palabra');
word.innerHTML = pala[tope];
console.log(word.innerHTML);
/*pendiente de implementar
  //recogemos el svg que va a hacer de fondo
var fondo = document.getElementById('fondo');

//creamos el array de los simbolos que van a simular la cascada
var casca = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',];
var dimensiones = fondo.getBoundingClientRect();
var avance = [];
function generateMatrix() {
    const width = dimensiones.width;
	const height = dimensiones.height;
	for (let x = 0; x < width; x += 50) {
    avance[x] = [];
        console.log('generao');
		for (let y = 0; y < height; y += 50) {
			const char = casca[Math.floor(Math.random() * casca.length)];
			const text = document.createElementNS('http://www.w3.org/2000/svg', 'text');
			text.setAttribute('x', x);
			text.setAttribute('y', y);
			text.setAttribute('fill', '#00ff2b');
			text.textContent = char;
			fondo.appendChild(text);
            avance[x][y] = {
                text,
                timer: 0,
            };
		}
	}
}

setInterval(() => {
	generateMatrix();
}, 60);

setInterval(() => {
    document.getElementById("fondo").innerHTML = '';    
}, 120);
*/

//incorporando splitjs
Split(['.a','.b','.c'],{
  gutterSize:5,
  sizes:[30,60,30],
  minSize:[10,10,10],
  //direction: "vertical"
});

/*Split(['.d','.e'],{
  gutterSize:5,
  sizes: [30,70],
  direction: "vertical"
});

Split(['.f','.g'],{
  gutterSize:5,
  sizes: [30,70],
  direction: "vertical"
});

Split(['.h','.i'],{
  gutterSize:5,
  sizes: [30,70],
  direction: "vertical"
});*/
