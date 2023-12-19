import nodemailer from 'nodemailer'
import dotenv from 'dotenv'

dotenv.config()

export const createTrasnporter = (host, port, user, pass) => {
    const trasnporter = nodemailer.createTransport({
        host,
        port,
        auth: {
            user,
            pass
        },
    })
    return trasnporter   
}
