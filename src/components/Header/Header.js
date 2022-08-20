import Link from 'next/link';
import React from 'react';
// Styled-components: the components with styles
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
// Icons
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons, Span } from './HeaderStyles';

const Header = () => (
  <Container>
    {/* Logo */}
    <Div1>
      <Link href="/">
        <a style={{ display: "flex", alignItems: "center", color: "white", marginBottom: "16px" }}>
          <DiCssdeck size="3rem" />
          <Span>Portfolio</Span>
        </a>
      </Link>
    </Div1>
    {/* Nav */}
    <Div2>
      <li>
        <Link href="#projects">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#technologies">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#About">
          <NavLink>About</NavLink>
        </Link>
      </li>
    </Div2>
    {/* Social Icons */}
    <Div3>
      <SocialIcons href='http://www.github.com/'>
        <AiFillGithub size="3rem"/>
      </SocialIcons>
      <SocialIcons href='http://www.linkedin.com/'>
        <AiFillLinkedin size="3rem"/>
      </SocialIcons>
      <SocialIcons href='http://www.instagram.com/'>
        <AiFillInstagram size="3rem"/>
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
