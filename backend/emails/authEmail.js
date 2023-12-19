import { createTrasnporter } from '../configs/nodemailer.config.js'
import dotenv from 'dotenv'

dotenv.config()

const sendEmailVerification = async (email, token) => {
  const transporter = createTrasnporter(
    process.env.MAIL_HOST,
    process.env.MAIL_PORT,
    process.env.MAIL_USER,
    process.env.MAIL_PASS
  )

  await transporter.sendMail({
    from: 'alpiryk@gmail.com',
    to: email,
    subject: 'Portfolio Andres Eduardo - Verify your email',
    html: `<h1>Verify your email</h1>
    <p><a href="${process.env.FRONTEND_URL}/verify-account/${token}">Click here</a> to verify your email</p>
    `
  })
}

const sendEmailForgotPassword = async (email, token) => {
    const transporter = createTrasnporter(
      process.env.MAIL_HOST,
      process.env.MAIL_PORT,
      process.env.MAIL_USER,
      process.env.MAIL_PASS
    )
  
    await transporter.sendMail({
      from: 'alpiryk@gmail.com',
      to: email,
      subject: 'Portfolio Andres Eduardo - Reset your password',
      html: `<h1>Reset your password</h1>
      <p><a href="${process.env.FRONTEND_URL}/reset-password/${token}">Click here</a> to reset your password</p>
      `
    })
  }

export {
  sendEmailVerification,
  sendEmailForgotPassword
}
