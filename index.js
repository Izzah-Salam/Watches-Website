const wrapper = document.querySelector(".sliderWrapper");
const menuItem = document.querySelectorAll("#menu");

menuItem.forEach((items, index) => {
	items.addEventListener("click", () => {
		wrapper.style.transform = `translateX(${-100 * index}vw)`;
	});
});

wrapper.style.transform = "translateX(-100vw)";

const productBtn = document.querySelectorAll("#ProductButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productBtn.forEach((item) => {
	item.addEventListener("click", () => {
		payment.style.display = "flex";
	});
});

close.addEventListener("click", () => {
	payment.style.display = "none";
});

// let openShoping = document.querySelector(".shopping");
// let closeShoping = document.querySelector(".CloseShoping");
// let listCard = document.querySelector(".listCard");
// let Total = document.querySelector(".CardTotal");
// let quantity = document.querySelector(".quantity");
// let body = document.querySelector("body");
// let text = document.querySelectorAll(".text");

// openShoping.addEventListener("click", () => {
// 	body.classList.add("active");
// });

// closeShoping.addEventListener("click", () => {
// 	body.classList.remove("active");
// });

// text.forEach((item) => {
// 	item.addEventListener("click", () => {
// 		console.log("add to cart");
// 	});
// });

// const cartItem = [
// 	{
// 		img: "./img/trend1.jpg",
// 		sav: "Save Rs.6,001",
// 		pric: "Declane 1.0 SV",
// 		originalPrice: "Rs.13000",
// 		NowPrice: "Rs.6,999",
// 	},
// ];

// function rednerCards() {
// 	const elements = document.querySelector(".Gallery");

// 	cartItem.forEach((item) => {
// 		const { img, sav, pric, originalPrice, NowPrice } = item;
// 		let HtmlVar = `<div class="trendingProduct">
// 				<div class="imgItem">
// 					<img src="${img}">
// 					<div class="cart">
// 						<div class="title text">Add to Cart</div>
// 					</div>

// 					<p class="sav">${sav}</p>
// 				</div>

// 				<p class="pric">${pric}</p>
// 				<div class="price">
// 					<span class="originalPrice">${originalPrice}</span>
// 					<span class="NowPrice">${NowPrice}</span>
// 				</div>`;

// 		elements.insertAdjacentHTML("beforeend", HtmlVar);
// 		const childs = elements.querySelectorAll(".trendingProduct");
// 	});
// }

// window.addEventListener("load", rednerCards);
