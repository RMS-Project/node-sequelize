import User from '../models/User'
import File from '../models/File'

class CollaboratorController {
	async index( req, res ) {

		// Filtra as informações que desejo passar para o frontend.
		const collborator = await User.findAll({
			where: { provider: true },
			attribute: ['id', 'name', 'email', 'photo_id'],
			include: [{
				model: File,
				as: 'photo',
				attribute: ['name', 'path', 'url']
			}]
		})

		return res.json(collborator) 
	}
}

export default new CollaboratorController();