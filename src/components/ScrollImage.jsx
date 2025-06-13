import React, { useEffect, useState, useRef } from 'react';
import Lottie from 'lottie-react';

const ScrollAnimation = () => {
  const [animationData, setAnimationData] = useState(null);
  const lottieRef = useRef(null);

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    fetch(
      'https://cdn.prod.website-files.com/652e625ed083f8127673075c/65f4035dfe103371c32da246_red%20line.mp4.lottie.json'
    )
      .then((res) => res.json())
      .then((data) => setAnimationData(data))
      .catch((err) => console.error('Failed to load Lottie animation', err));
  }, []);

  useEffect(() => {
    if (!animationData) return;

    let ticking = false;

    const handleScroll = () => {
      if (!lottieRef.current) return;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          const scrollTop = window.scrollY;
          const maxScroll = document.body.scrollHeight - window.innerHeight;
          const scrollProgress = Math.min(scrollTop / maxScroll, 1);

          const totalFrames = animationData.op || 100;
          const frame = scrollProgress * totalFrames;

          lottieRef.current.goToAndStop(frame, true);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [animationData]);

  return (
    <div
      className="w-full flex justify-center items-center overflow-hidden"
      style={{ maxHeight: '300px', backgroundColor: '#BB2200' }}
    >
      {animationData && (
        <Lottie
          lottieRef={lottieRef}
          animationData={animationData}
          loop={false}
          autoplay={false}
          style={{
            width: '100%',
            maxHeight: '300px',
            objectFit: 'contain',
            mixBlendMode: isMobile ? 'normal' : 'screen',
            opacity: isMobile ? 1 : 0.9,
          }}
        />
      )}
    </div>
  );
};

export default ScrollAnimation;
