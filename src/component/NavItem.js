import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  position: sticky;
  top: 80px; /* Adjust if header height changes */
  left: 0;
  width: 100%;
  height: 88px;
  display: flex;
  align-items: center;
  padding: 15px 20px;
  gap: 10px;
  justify-content: space-around;
  background-color: rgba(0, 0, 0, 0.4);
  opacity: 1;
  z-index: 2;
`;

const NavLink = styled(Link)`
  padding: 10px 20px;
  font-size: 1rem;
  font-weight: bold;
  color: ${({ isActive }) => (isActive ? '#ffffff' : '#ff2121')};
  background-color: ${({ isActive }) => (isActive ? '#000000' : 'transparent')};
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease, color 0.3s ease;
`;

const NavItem = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  return (
    <NavWrapper>
      <NavLink to="/music" isActive={currentPath === '/music'}>Music</NavLink>
      <NavLink to="/about" isActive={currentPath === '/about'}>About</NavLink>
      <NavLink to="/events" isActive={currentPath === '/events'}>Events</NavLink>
      <NavLink to="/shop" isActive={currentPath === '/shop'}>Shop</NavLink>
      <NavLink to="/gallery" isActive={currentPath === '/gallery'}>Gallery</NavLink>
    </NavWrapper>
  );
};

export default NavItem;
