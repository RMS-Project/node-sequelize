import Sequelize, { Model } from 'sequelize';
import bcrybt from 'bcryptjs'

class User extends Model {
	static int(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				email: Sequelize.STRING,
				password: Sequelize.VIRTUAL,
				password_hash: Sequelize.STRING,
				provider: Sequelize.BOOLEAN,
			},
			{
				sequelize,
			}
		);

		this.addHook('beforeSave', async user => {
			if (user.password) {
				user.password_hash = await bcrybt.hash(user.password, 10);
			}
		})

		return this;
	}

	// Caso a senha e o password_hash forem iguais retorna "true".
	checkPassword(password) {
		return bcrybt.compare( password, this.password_hash )
	}
}

export default User;