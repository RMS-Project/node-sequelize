import * as Yup from 'yup';
import { startOfHour, parseISO, isBefore } from 'date-fns';

import Appointment from '../models/Appointment';

class AppointmentController {
  // Visualizar os atendimentos.
  async index(req, res) {

    const appointments = await Appointment.findAll({
      where: { 
        user_id: req.userId,
        canceled_at: null 
      },
      order: ['date'],
      attributes: ['id', 'date'],
      include: [
        {
          model: User,
          as: 'collaborator',
          attributes: [ 'id', 'name' ],
          include: [
            {
              model: File,
              as: 'photo',
              attributes: [ 'id', 'path' ,'url']
            }
          ]
        }
      ]
    })

    return res.json(appointments)
  }
  
  async store(req, res) {

    const schema = Yup.object().shape({
      // Recebendo os dados i informando que são obrigatórios.
      collaborator_id: Yup.number().required(),
      date: Yup.date().requited()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        err: 'Inválido'
      })
    }

    // Desestruturar da body collaborator_id e date
    const { collaborator_id, date }= req.body;

    const isCollaborator = await User.findOne({
      where: { id: collaborator_id, provider: true }
    })

    if(!isCollaborator) {
      return rs.status(401).json({ 
        error: 'Colaborador não localizado' 
      })
    }

    // Verificação do agendamento do horário.
    const startHour = startOfHour(parseISO(date));

    if( isBefore(startHour, new Date())){
      return res.status(400).json({
        erro: 'Horário não disponível'
      })
    }

    const checkAvailability = await Appointment.findOne({
      where: {
        collaborator_id,
        canceled_at: null,
        date: startHour
      }
    })

    if(checkAvailability) {
      return res.status(400).json({
        erro: 'Horário não disponível,para este colaborador'
      })
    }

    const appointment = await Appointment.create({
      user_id: req.userId,
      collaborator_id,
      date: startHour
    })

    return res.json({
      appointment
    })
  }
}

export default new AppointmentController();