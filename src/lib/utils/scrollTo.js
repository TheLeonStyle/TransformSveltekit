import { goto } from '$app/navigation';

// Скролл до блока
export const scrollTo = (id) => {
	const isHome = window.location.pathname === '/';

	if (isHome) {
		scrollToElement(id);
	} else {
		goto('/').then(() => {
			// Ждём небольшую задержку для гарантированного рендера
			setTimeout(() => scrollToElement(id), 200);
		});
	}
};

// Функция прокрутки к элементу
const scrollToElement = (id) => {
	const element = document.getElementById(id);
	if (element) {
		element.scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		});
	}
};
