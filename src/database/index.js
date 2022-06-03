import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import User from '../app/models/User';
import File from '../app/models/File'
import databaseConfig from '../config/database';
import Appointment from '../app/models/Appointment';

const models = [User, File, Appointment];

class Database {
	constructor() {
		this.init();
		this.mongoose;
	}

	init() {
		this.connection = new Sequelize(databaseConfig);
		
		models
			.map( model => model.init(this.connection))
			.map( model => model.associate && model.associate(this.connection.models));	
	}

	mongo() {
		this.monogoConnecton = mongoose.connect({
			'<string de conexão mogodb>',
			{ useNewUrlParser: true, useFindAndModify: true }
		})
	}
}

export default new Database();