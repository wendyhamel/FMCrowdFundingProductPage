tailwind.config = {
	theme: {
		fontFamily: {
			'sans': ['Commissioner', 'sans-serif'],
		},
		extend: {
			colors: {
				'cyan': 'hsl(176, 50%, 47%)',
				'dark-cyan': 'hsl(176, 72%, 28%)',
				'gray': 'hsl(0, 0%, 48%)',
			},
			fontSize: {
				'3.5xl': ['2rem', {lineHeight: '2.5rem'}],
			}
		}
	}
}