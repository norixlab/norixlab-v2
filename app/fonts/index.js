import { Play, Poppins } from 'next/font/google'

export const play = Play({
	subsets: ['latin'],
	weight: ['400', '700'],
	display: 'swap',
})

export const poppins = Poppins({
	subsets: ['latin'],

	weight: ['400', '500', '600', '700'],
	display: 'swap',
})