import Footer from '@/components/Footer'
import Contact from '@/components/Heropage/Contact';
import Design from '@/components/Heropage/Design';
import Hero from '@/components/Heropage/Hero';
import Over from '@/components/Heropage/Over';
import Stuff from '@/components/Heropage/Stuff';
import Nav from '@/components/Nav'
import React from 'react'

const page = () => {
  return (
    <div>
      <Hero />
      <Design/>
      <Over/>
      <Stuff/>
      <Contact/>
      <Footer />
    </div>
  );
}

export default page
