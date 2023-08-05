import db from '../../database/models/index.js'

const {appointment} =db

const createAppoitment= async (req, res) => {
  try {
      const {name, email, date_appo, addi_info} = req.body
        const newAppointment = await appointment.create({
            name,
            email,
            date_appo,
            addi_info
          });
          if(!newAppointment){

          return res.status(400).json({
            ok: false,
            message: 'Sorry, Appointment not received',
          });
          }

          return res.status(200).json({
            ok: true,
            message: 'Appointment successfully received',
          });

    } catch (error) {
      return res.status(500).json({
        message: error.message,
      });
    }
}

export default createAppoitment;