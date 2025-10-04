import React from 'react';

function Brands() {
  // URLs de logos de marcas (puedes reemplazarlas por las que tú quieras)
  const brandLogos = [
    'https://mir-s3-cdn-cf.behance.net/projects/404/99c0b7189634971.Y3JvcCwxMzgwLDEwODAsMjcwLDA.png',
    'https://mir-s3-cdn-cf.behance.net/projects/404/4e895d117750991.Y3JvcCw5NTMsNzQ1LDIyMSwyNQ.png',
    'https://about.me/cdn-cgi/image/q=80,dpr=1,f=auto,fit=cover,w=1200,h=630,gravity=0.379x0.249/https://assets.about.me/background/users/n/a/t/natpaw_1555326235_713.jpg',
    'https://i0.wp.com/td2branding.com/wp-content/uploads/2018/08/Gif-Before-After-Maskota.gif?fit=1280%2C640&ssl=1',
    'https://t3.ftcdn.net/jpg/05/52/19/26/360_F_552192613_1gcoRi4z2sfyheakGj6S67wAgJ19zo6g.jpg',
  ];

  return (
    <section className="brands-section">
      <div className="container">
        <h3>Trabajamos con las mejores marcas</h3>
        <div className="brand-logos">
          {brandLogos.map((logo, index) => (
            <img key={index} src={logo} alt={`Logo de Marca ${index + 1}`} className="brand-logo" />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Brands;