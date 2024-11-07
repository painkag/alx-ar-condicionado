// src/components/whatsAppFloating/whatsAppFloat.js

import React from 'react';

export const FloatingWhatsAppButton = () => {
  const handleClick = () => {
    // Substitua pelo número de telefone desejado e mensagem padrão
    const phoneNumber = '5514997686244';
    const message = encodeURIComponent('Olá! Vim pelo site e gostaria de mais informações.');
    
    window.open(`https://wa.me/${phoneNumber}?text=${message}`, '_blank');
  };

  return (
    <div className="whatsapp-float" onClick={handleClick}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="WhatsApp Icon" />
    </div>
  );
};
