import File from '../models/File';

class FileController {
	async store( req, res ) {

		// Recebe os campos e altena no nome para ficar igual ao 
		// do banco de dados.

		const { originalname: name, filename: path } = req.file;

		const file = await File.create({
			name,
			path
		})

		return res.json( file )
	}
}

/* new - Poelo fato de estar tratando como classe. */
export default new FileController()