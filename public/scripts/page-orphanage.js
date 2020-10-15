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
	popupAnchor: [170,2]
});

//create and popup marker
L.marker([-27.222633,-49.6455874], {icon})
.addTo(map)

// Gallery images

function selectImage(event){
	const button = event.currentTarget

	//remover todas as classes actives
	const buttons = document.querySelectorAll(".images button")
	buttons.forEach(removeActiveClass)

	//functions

	function removeActiveClass(button){
		button.classList.remove("active")
	}

	//selecionar a image
	const image = button.children[0]
	const imageContainer = document.querySelector('.orphanage-datails > img')
	//atualizar conteiner de image
	imageContainer.src = image.src
	//add a classe .active para o btn clicado
	button.classList.add("active")

}