const boxes = [
	{
		name: 'cat',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'crow',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dog',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dove',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'dragon',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'horse',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'hippo',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'fish',
		prefix: 'fa-',
		type: 'animal',
		family: 'fas',
		color: 'orange'
	},
	{
		name: 'carrot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'apple-alt',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'lemon',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'pepper-hot',
		prefix: 'fa-',
		type: 'vegetable',
		family: 'fas',
		color: 'green'
	},
	{
		name: 'user-astronaut',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-graduate',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-ninja',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	},
	{
		name: 'user-secret',
		prefix: 'fa-',
		type: 'user',
		family: 'fas',
		color: 'blue'
	}
];

// Milestone 1
// Partendo dalla struttura dati fornita, visualizzare in pagina un box per ogni icona, in cui è presente il nome dell'icona e l'icona stessa.

const main = document.querySelector(".main");
// boxes.forEach((element) => {
//     main.innerHTML += `
//         <div class="box">
// 		<i class="fas fa-${element.name}" style="color:${element.color}"></i>
// 		${element.name}
//         </div>
//     `;
// });

// Milestone 2
// Ciascuna icona ha una proprietà "color": utilizzare questa proprietà per visualizzare le icone del colore corrispondente.
const filter = document.getElementById("filter");
 const all = document.querySelector(".all");
 const animal = document.querySelector(".animal");
 const vegetable = document.querySelector(".vegetable");
 const user = document.querySelector(".user");

 filter.addEventListener('change', function () {
	 console.log(filter.value);
	  if (filter.value == animal.value) {
		main.innerHTML = " ";

		let colorOrange = boxes.filter((element) => {
			return element.color == "orange";
		});

		colorOrange.forEach((element) => {
			main.innerHTML += `
				<div class="box">
				<i class="fas fa-${element.name}" style="color:${element.color}"></i>
				${element.name}
				</div>
			`;
		});
	  } else if (filter.value == vegetable.value) {
		main.innerHTML = " ";

		let colorGreen = boxes.filter((element) => {
			return element.color == "green";
		});

		colorGreen.forEach((element) => {
			main.innerHTML += `
				<div class="box">
				<i class="fas fa-${element.name}" style="color:${element.color}"></i>
				${element.name}
				</div>
			`;
		});
	  } else if (filter.value == user.value) {
		main.innerHTML = " ";

		let colorBlue = boxes.filter((element) => {
			return element.color == "blue";
		});

		colorBlue.forEach((element) => {
			main.innerHTML += `
				<div class="box">
				<i class="fas fa-${element.name}" style="color:${element.color}"></i>
				${element.name}
				</div>
			`;
		});
	  } else {
		main.innerHTML = " ";

		   boxes.forEach((element) => {
			main.innerHTML += `
         	<div class="box">
			<i class="fas fa-${element.name}" style="color:${element.color}"></i>
			${element.name}
        	</div>
     	`;
	});
	  }
	
  });




// Milestone 3
// Aggiungere alla pagina una select in cui le options corrispondono ai vari tipi di icone (animal, vegetable, user). Quando l'utente seleziona un tipo dalla select, visualizzare solamente le icone corrispondenti.
