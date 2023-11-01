export function slideInFromLeft(delay, duration) {
	return {
		hidden: { x: -100, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				delay: delay,
				duration: duration,
			},
		},
	};
}

export function slideInFromRight(delay, duration) {
	return {
		hidden: { x: 100, opacity: 0 },
		visible: {
			x: 0,
			opacity: 1,
			transition: {
				delay: delay,
				duration: duration,
			},
		},
	};
}

export function slideInFromTop(delay, duration) {
	return {
		hidden: { y: -100, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				delay: delay,
				duration: duration,
			},
		},
	};
}
export function slideInFromBottom(delay, duration) {
	return {
		hidden: { y: 100, opacity: 0 },
		visible: {
			y: 0,
			opacity: 1,
			transition: {
				delay: delay,
				duration: duration,
			},
		},
	};
}