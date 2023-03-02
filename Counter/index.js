const out = document.querySelector('#out');

// Функція counter, яка запускає інтервал який збільшує значення count кожні 500мс
function counter(clear) {
	let count = 0;
	const test = setInterval(() => {
		count++;
		out.textContent = count;
	}, 500);
}

let currentValue = 0;
// Подія scroll виконується кожен раз при скролі window
window.addEventListener('scroll', function () {
	const elementRect = out.getBoundingClientRect();
	// Зі змінної elementRect беремо значення top і bottom. top порівнюємо з висотою window а bottom >= 0
	if (elementRect.top <= window.innerHeight && elementRect.bottom >= 0) {
		currentValue++;
		// Умова щоб виклик функції не повторювався при повторному скролі і значення рахувало коректно
		if (currentValue > 0 && currentValue <= 1) {
			counter();
		}
	}
});
