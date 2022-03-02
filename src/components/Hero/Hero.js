import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <Section row nopadding>
  <LeftSection>
  <SectionTitle main center>
  Welcome to <br />
  My Personal Portfolio
  </SectionTitle>
  <SectionText>
  <font color="#f0033">The Perpose of this site is to show  my personal work and my projects as a Computer Science student at Ionian University</font>
  </SectionText>
 
</LeftSection>
</Section>

);

export default Hero;
