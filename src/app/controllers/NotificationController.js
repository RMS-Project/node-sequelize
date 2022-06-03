import User from '../models/User';
import Notifications from '../schema/Notifications';

class NotificationController {
	async index( req, res ) {

		const checkIsCollaborator = await User.findOne({
			where: {
				id: req.userId,
				provider: true
			}
		})

		if(!checkIsCollaborator){
			return res.status(401).json({
				error: 'Notificação disponível apenas para colaboradores'
			})
		}

		// find - Retorna mais de um registro.
		const notifications = await Notifications.find({
			user: req.userId
		}).sort('createdAt').limit(20)

		return res.json({ notifications })
	}
}

export default new NotificationController();

18:00