import { createTrasnporter } from '../configs/nodemailer.config.js'
import dotenv from 'dotenv'

dotenv.config()

const sendEmailContact = async (name, email, message) => {
  const transporter = createTrasnporter(
    process.env.MAIL_HOST,
    process.env.MAIL_PORT,
    process.env.MAIL_USER,
    process.env.MAIL_PASS
  )

  await transporter.sendMail({
    from: email,
    to: 'alpiryk@gmail.com',
    subject: 'Message from Portfolio Andres Eduardo',
    html: `<h1>I am ${name}</h1>
    <h2>This is my mesasge</h2>
    <p>${message}</p>
    `
  })
}

export { sendEmailContact }