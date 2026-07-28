const modules = import.meta.glob('../images/*.{png,jpg,jpeg,PNG,JPG}', {
	eager: true,
	import: 'default',
})

export function getImage(filename) {
	const path = `../images/${filename}`
	const img = modules[path]
	if (!img) {
		console.warn('Image not found:', filename)
		return ''
	}
	return img
}
