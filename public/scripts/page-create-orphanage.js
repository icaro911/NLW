const options = {
	dragging: false,
	touchZoom: false,
	doubleClickZoom: false,
	scrollWheelZoom: false,
	zoomControl: false,
}

//create map

const map = L.map("mapid", options).setView([-27.222633,-49.6455874], 16);

//create and add tileLayer

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(map);

//create icon

const icon = L.icon({
	iconUrl:"./public/images/map-marker.svg",
	iconSize: [58,68],
	iconAnchor: [29,68],
});


let marker;


// Create and add marker

map.on('click',(event) => {
	const lat = event.latlng.lat;
	const lng = event.latlng.lng;

	document.querySelector('[name=lat]').value = lat;
	document.querySelector('[name=lng]').value = lng;
 
	//remove icon
	marker && map.removeLayer(marker)

	//add icon layer
	marker = L.marker([lat,lng], { icon })
	.addTo(map)
})


//add photo field

function addPhotoField(){
	//pegar o container de fotos. #images
	const container = document.querySelector('#images');
	//duplicar .new-upload
	const fieldsContainer = document.querySelectorAll(".new-upload")
	//realizar o clone da ultima imagem add.
	const newFieldContainer = fieldsContainer[fieldsContainer.length - 1].cloneNode(true) 

	//verificar se o campo está vazio, se sim, nao add ao container de imagens.
	const input = newFieldContainer.children[0]

	if(input.value == ""){
		return
	}

	//limpar o campo antes de add
	input.value = ""

	// add o clone ao container de #images.
	container.appendChild(newFieldContainer)
}



// clicar no x e deletar o texto do images

function deleteField(event){
	const span = event.currentTarget

	const fieldsContainer = document.querySelectorAll(".new-upload")

	if(fieldsContainer.length <= 1){
		// limpar o valor do campo
		span.parentNode.children[0].value="";
		return
	}
	//deletar o campoi
	span.parentNode.remove();
}


//troca do sim e não.

function toggleSelect(event) {
	//retirar a classe active dos botões
	document.querySelectorAll('.button-select button')
	.forEach( function(button) {
		button.classList.remove('active')
	})
	//colocar a classe active

	const button =  event.currentTarget
	button.classList.add("active")
	//atualizar o input hidden com o valor selecionado
	const input= document.querySelector('[name=open_on_weekends]')
	
	input.value = button.dataset.value
	//verifivar se sim ou não

}