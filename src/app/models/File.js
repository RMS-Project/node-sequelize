import Sequelize, { Model } from 'sequelize';

class File extends Model {
	static int(sequelize) {
		super.init(
			{
				name: Sequelize.STRING,
				path: Sequelize.STRING,
				url: {
					type: Sequelize.VIRTUAL,
					get() {
						return `http://loclahost:3333/files/${this.path}`
					}
				}
			},
			{
				sequelize,
			}
		);

		return this;
	}

}

export default File;