import Sequelize, { Model } from 'sequelize';

class Appointment extends Model {
	static int(sequelize) {
		super.init(
			{
				date: Sequelize.DATE,
				canceled_at: Sequelize.DATE,
			},
			{
				sequelize,
			}
		);

		return this;
	}

	static associate(models) {
		// Pertence á - existe outros métodos além de belongsTo tem o hasOne 
		// foreignLKey - Chave estrangeira.

		// as: - Quando se faz o uso de dois elementos da mesma tabela,o
		// Sequelize obrigatoriamente deve-se fazer uma alteração no nome dele.
		this.belongsTo( models.User, { foreignKey: 'user_id', as: 'user'})
		this.belongsTo( models.User, { foreignKey: 'collaborator_id', as: 'collaborator'})
	}
}

export default Appointment;