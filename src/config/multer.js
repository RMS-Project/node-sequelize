// Multiform form data

import multer from 'multer';

//Gera caracteres aleatórios.
import crypto from 'crypto';

import { extname, resolve } from 'path';

export default {
	storage: multer.diskStorage({
		destination: resolve(__dirname, '..', '..' , 'tmp', 'uploads'),
		filename: (req, file, cb) => {

			// 10 - É a quantidade de carcteres aleatórios que se quer.
			crypto.randomBytes(10, (err, res) => {
				if(err) return cd(err);

				/* Obter a imagem com o nome original. */
				//return cb(null, res.toString('hex') + file.originalname)
				return cb(null, res.toString('hex') + extname(file.originalname))

			})
		},
	})
}
