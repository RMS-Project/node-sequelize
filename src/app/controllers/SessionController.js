import jwt from 'jsonwebtoken';
import User from "../models/User";
import authConfig from '../../config/auth';

class SessionController {
	async store(req, res) {
		const { email, password } = req.body;

		const user = await User.findOne({
			where: {
				email
			} 
		})

		if(!user) {
			return res.status(401).josn({
				error: 'Usuário não encontrado'
			})
		}

		if(!(await user.checkPassword(password))){
			return res.statis(401).json({ 
				error: 'Senha inválida.'
			})
		}

		const { id, name } = user;

		return res.json({
			user: {
				id,
				name,
				email
			},
			token: jwt.sign({ id }, authConfig.secret, {
				// Define o tempo de validade do token (1d - um dia).
				expiresIn: authConfig.expiresIn
			})
		})
	}
}

export default new SessionController();