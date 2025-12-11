module.exports = {
	content: ['./src/**/*.{js,jsx}'],
	theme: {
		extend: {
			keyframes: {
				parallax: {
					'0%': { transform: 'scale(1.1) translateY(0px)' },
					'100%': { transform: 'scale(1.1) translateY(-20px)' },
				},
				fadeSlide: {
					'0%': { opacity: 0, transform: 'translateY(20px)' },
					'100%': { opacity: 1, transform: 'translateY(0px)' },
				},
			},
			animation: {
				parallax: 'parallax 10s linear infinite alternate',
				fadeSlide: 'fadeSlide 1.2s ease-out',
			},
		},
	},
	plugins: [],
};
