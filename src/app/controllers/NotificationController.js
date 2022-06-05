import { json } from 'express/lib/response';
import User from '../models/User';
import Notifications from '../schema/Notifications';

class NotificationController {
	async index( req, res ) {

		// Buscar um dado de user para verificar se existe o cadastro do colaborador.
		const checkIsCollaborator = await User.findOne({
			where: {
				id: req.userId,
				provider: true
			}
		})

		// Caso não seja verificado emite notificação.
		if(!checkIsCollaborator){
			return res.status(401).json({
				error: 'Notificação disponível apenas para colaboradores'
			})
		}

		// find - Retorna mais de um registro.
		// Retornando todas as notificações referentes ao usuário.
		const notifications = await Notifications.find({
			user: req.userId
		}).sort({ createdAt: 'desc' }).limit(20)
		// sort - Ordenação decrescente por data, exibindo até 20 notificações por página.

		return res.json( notifications )
	}

	async update( req, res) {
		const notifications = await Notifications.findByIdAndUpdate(
			req.params.id,
			{ read: true },
			{ new: true }
		)

		return res.json( notifications );
	}
}

export default new NotificationController();