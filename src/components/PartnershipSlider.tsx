import React, { useEffect, useRef } from 'react';

const PartnershipSlider: React.FC = () => {
  const sliderRef = useRef<HTMLDivElement>(null);
  
  // Reemplaza estas con tus imágenes reales
  const partnerships = [
    { id: 1, logo: '/img/partners/MagicSquare.png', alt: 'MagicSquare' },
    { id: 2, logo: '/img/partners/Intract.png', alt: 'Intract' },
    { id: 3, logo: '/img/partners/TaskOn.png', alt: 'TaskOn' },
    { id: 4, logo: '/img/partners/SoonChain.png', alt: 'Soonchain' },
    { id: 5, logo: '/img/partners/JumboBlockchain.png', alt: 'Jumbo Blockchain' },
    { id: 6, logo: '/img/partners/PlenaFinance.png', alt: 'Plena Finance' },
    { id: 7, logo: '/img/partners/Hotcoin.png', alt: 'Hotcoin' },
    { id: 8, logo: '/img/partners/Bitgert.png', alt: 'Bitgert' },
    { id: 9, logo: '/img/partners/EvilKongs.png', alt: 'EvilKongs' },
    { id: 10, logo: '/img/partners/Fishcake.png', alt: 'Fishcake' },
    { id: 11, logo: '/img/partners/EpopGirls.png', alt: 'Epop Girls' },
    { id: 12, logo: '/img/partners/QuestN.png', alt: 'QuestN' },
    { id: 13, logo: '/img/partners/Tlacololeros.png', alt: 'Tlacololeros' },
  ];

  useEffect(() => {
    const slider = sliderRef.current;
    if (!slider) return;

    let animationFrameId: number;
    let position = 0;
    const speed = 1; // Ajusta la velocidad según necesites

    const animate = () => {
      position -= speed;
      
      // Cuando un logo sale completamente de la vista, lo movemos al final
      if (position <= -slider.scrollWidth / 2) {
        position = 0;
      }
      
      slider.style.transform = `translateX(${position}px)`;
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  // Estilos integrados
  const styles = {
    sliderContainer: {
      width: '100%',
      overflow: 'hidden',
      position: 'relative' as const,
      margin: '0 auto',
    },
    sliderTrack: {
      display: 'flex',
      width: 'max-content',
      willChange: 'transform' as const,
    },
    sliderItem: {
      flex: '0 0 auto',
      width: '200px',
      height: '100px',
      margin: '0 20px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    partnerLogo: {
      maxWidth: '100%',
      maxHeight: '100%',
      objectFit: 'contain' as const,
    }
  };

  return (
    <div style={styles.sliderContainer}>
      <div style={styles.sliderTrack} ref={sliderRef}>
        {/* Duplicamos los logos para el efecto infinito */}
        {[...partnerships, ...partnerships].map((partner, index) => (
          <div key={`${partner.id}-${index}`} style={styles.sliderItem}>
            <img 
              src={partner.logo} 
              alt={partner.alt}
              style={styles.partnerLogo}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default PartnershipSlider;
