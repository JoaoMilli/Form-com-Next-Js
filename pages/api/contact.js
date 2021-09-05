export default function (req, res) {
    require('dotenv').config()
    let nodemailer = require('nodemailer')
    const transporter = nodemailer.createTransport({
        port: 465,
        host: "smtp.gmail.com",
        auth: {
            user: 'joaomillidummy@gmail.com',
            pass: process.env.password,
        },
        secure: true,
    });

    const mailData = {
        from: 'joaomillidummy@gmail.com',
        to: 'pedromilli123@gmail.com',
        subject: `Mensagem de ${req.body.nome}`,
        text: "Enviado por: " + req.body.email,
        html: `<p>Nome: ${req.body.nome}</p><p>Email: ${req.body.email}</p><p>Cargo: ${req.body.cargo}</p><p>Cidade: ${req.body.cidade}</p><p>Bio: ${req.body.bio}</p>`
    }

    transporter.sendMail(mailData, function (err, info) {
        if(err)
          console.log(err)
        else
          console.log(info)
    })

    console.log(req.body)
    res.send('success')
}