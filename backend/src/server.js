const express = require('express');
const cors = require('cors');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3001;

app.use(cors());
app.use(express.json());

// Configuração do transporter do Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
});

// Verificar conexão com o Gmail
transporter.verify((error, success) => {
  if (error) {
    console.error('Erro na conexão com o Gmail:', error);
  } else {
    console.log('Servidor de email pronto para enviar mensagens');
  }
});

app.post('/api/send-email', async (req, res) => {
  const { name, email, message } = req.body;

  console.log('Recebendo solicitação de envio de email:', { name, email });

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Todos os campos são obrigatórios' });
  }

  try {
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: process.env.EMAIL_USER,
      subject: `Nova mensagem de contato de ${name}`,
      text: `
        Nome: ${name}
        Email: ${email}
        Mensagem: ${message}
      `
    };

    console.log('Enviando email com as opções:', mailOptions);

    await transporter.sendMail(mailOptions);
    console.log('Email enviado com sucesso');
    res.status(200).json({ message: 'Email enviado com sucesso!' });
  } catch (error) {
    console.error('Erro detalhado ao enviar email:', error);
    res.status(500).json({ 
      error: 'Erro ao enviar email',
      details: error.message 
    });
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
}); 