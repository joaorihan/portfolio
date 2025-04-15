import React, { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    setErrorMessage('');

    try {
      const response = await fetch('http://localhost:3001/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Erro ao enviar mensagem. Tente novamente.');
      }
    } catch (error) {
      console.error('Erro:', error);
      setStatus('error');
      setErrorMessage('Erro de conexão. Verifique se o servidor está rodando.');
    }
  };

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Nome</label>
        <input
          type="text"
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="email">Email</label>
        <input
          type="email"
          id="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>

      <div className="form-group">
        <label htmlFor="message">Mensagem</label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
        />
      </div>

      <button 
        type="submit" 
        className="submit-button"
        disabled={status === 'sending'}
      >
        {status === 'sending' ? (
          'Enviando...'
        ) : (
          <>
            <FaPaperPlane className="submit-icon" />
            Enviar Mensagem
          </>
        )}
      </button>

      {status === 'success' && (
        <p className="success-message">Mensagem enviada com sucesso!</p>
      )}
      {status === 'error' && (
        <p className="error-message">{errorMessage}</p>
      )}
    </form>
  );
}

export default ContactForm; 