// Отримуємо елементи з html в змінні
const image = document.querySelector('.slider-image');
const leftBtn = document.querySelector('.left-btn');
const rightBtn = document.querySelector('.right-btn');
const bottomNavbar = document.querySelector('.wrapper-line');

let count = 0;
// Масив зображень
const images = [
	'https://thumbs.dreamstime.com/b/beautiful-rain-forest-ang-ka-nature-trail-doi-inthanon-national-park-thailand-36703721.jpg',
	'https://media.istockphoto.com/id/1371339413/photo/co-working-team-meeting-concept-businessman-using-smart-phone-and-digital-tablet-and-laptop.jpg?b=1&s=170667a&w=0&k=20&c=GnW36mPEYr3TRpPZNLtT75u8v2HOczvRxGckWUN3hVg=',
	'https://media.istockphoto.com/id/1358013032/photo/web-development-concept.jpg?b=1&s=170667a&w=0&k=20&c=aAR7goX4e7jDiUfx1SNA7lD04WldUv6okpifv80xGcw=',
	'https://www.kaspersky.com/content/en-global/images/repository/isc/2020/deep-web-cover.jpg',
	'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQZlB4ADHGgwY6oWxZBklqmGQlkWUuePS8W9g&usqp=CAU',
	'https://media.istockphoto.com/id/1221435509/photo/website-creative-plan-development-with-drawn-sketch-in-the-design-studio.jpg?s=612x612&w=0&k=20&c=gyfl0jEUI26Wwx62l-02nKwr8myg2xWx5zhBJvmbcRY=',
	'https://res.cloudinary.com/highereducation/images/w_1024,h_683,c_scale/f_auto,q_auto/v1669994566/BestColleges.com/web-developer-vs-software-engineer-man-with-laptop/web-developer-vs-software-engineer-man-with-laptop-1024x683.jpg',
];

// На ліву кнопку додаємо подію натиснення, яка буде зменшувати наш count та змінювати зображення
leftBtn.addEventListener('click', function () {
	count--;
	if (count < 0) {
		count = 0;
	}
	image.src = images[count];
});

// На праву кнопку додаємо подію натиснення, яка буде збільшувати наш count та змінювати зображення
rightBtn.addEventListener('click', function () {
	count++;
	if (count >= images.length) {
		count = images.length - 1;
	}
	image.src = images[count];
});

// Навігація під слайдером
bottomNavbar.addEventListener('click', function (e) {
	if (e.target.classList[0] === 'line-1') {
		image.src = images[0];
	} else if (e.target.classList[0] === 'line-2') {
		let middleValue = Math.floor(images.length / 2 - 1);
		image.src = images[middleValue];
	} else {
		image.src = images[images.length - 1];
	}
});



