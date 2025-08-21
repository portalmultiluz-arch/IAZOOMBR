
import React, { useState } from 'react';
import Header from './components/Header.tsx';
import Hero from './components/Hero.tsx';
import About from './components/About.tsx';
import Services from './components/Services.tsx';
import BusinessSectors from './components/BusinessSectors.tsx';
import Testimonials from './components/Testimonials.tsx';
import CTA from './components/CTA.tsx';
import Contact from './components/Contact.tsx';
import Footer from './components/Footer.tsx';
import TalkingAvatar from './components/TalkingAvatar.tsx';

const App: React.FC = () => {
  const [imageUrl, setImageUrl] = useState("https://placehold.co/600x400/222222/00FF9C/png?text=Inova%C3%A7%C3%A3o+%26+IA");
  const [videoUrl, setVideoUrl] = useState("https://www.youtube.com/watch?v=dQw4w9WgXcQ");

  return (
    <div className="bg-primary text-light font-sans">
      <Header />
      <main>
        <Hero />
        <About imageUrl={imageUrl} videoUrl={videoUrl} />
        <Services />
        <BusinessSectors />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer 
        imageUrl={imageUrl}
        videoUrl={videoUrl}
        setImageUrl={setImageUrl}
        setVideoUrl={setVideoUrl}
      />
      <TalkingAvatar />
    </div>
  );
};

export default App;