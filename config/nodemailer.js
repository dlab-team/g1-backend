import dotenv from 'dotenv'
import nodemailer from 'nodemailer'


dotenv.config();


const transporter = nodemailer.createTransport({
    host: "MAIL_HOST",
    port: MAIL_PORT,
    secure: true,
    auth: {
        user: "MAIL_USER",
        pass: "MAIL_PASSWORD"
    },

})

transporter.verify().then(() => console.log("gmail enviado con exito!")).catch((error) => console.error(error))


module.exports = transporter