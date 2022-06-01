import Routes from 'express'

const routes = new Routes();

routes.get('/', (req, res) => {
	return res.json({
		message: 'Okay'
	})
})


export default routes