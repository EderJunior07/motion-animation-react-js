import { useTransform, useViewportScroll } from 'framer-motion';
import { ReactNode } from 'react';

import { Container } from './styles';



function Header() {
  const {scrollYProgress} = useViewportScroll()

  const headerY = useTransform(scrollYProgress, [0.06, 0.09], ["0%", "-100%"])

  return (
    <Container style={{y: headerY}}/>
  );
};

export default Header;
