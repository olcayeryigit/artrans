import React from 'react';

const Logo = ({ src, width, height, alt = "Logo" }) => {
  const styles = {
    width: width || 'auto', // Genişlik belirtilmezse otomatik alır
    height: height || 'auto', // Yükseklik belirtilmezse otomatik alır
    display: 'block', // Görseli düzgün hizalamak için
  };

  return <img src={src} alt={alt} style={styles} />;
};

export default Logo;
