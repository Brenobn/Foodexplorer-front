import styled from "styled-components";

export const Container = styled.div`
  width: 42.8rem;
  height: 90.0rem;
  margin: 0 auto;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;

export const HeaderContainer = styled.header`
  height: 11.4rem;
  margin-bottom: 3.6rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const HeaderText = styled.h1`
  display: inline-flex;
  gap: 1.6rem;
  align-items: center;
  color: ${({ theme }) => theme.COLORS.SIMPLE_WHITE};
  font-family: 'Roboto', sans-serif;
  font-size: 2.1rem;
  font-weight: 400;

  padding: 5.6rem 2.8rem 2.4rem 2.8rem;
`;

export const LinkContainer = styled.div`
  display: flex;
  width: 37.2rem;
  padding: 1.0rem;
  align-items: flex-start;
  gap: 1.0rem;

  border-bottom: 1px solid #192227;
`;

export const WayToGoOut = styled.a`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: 'Poppins', sans-serif;
  font-size: 2.4rem;
  font-weight: 300;
  text-decoration: none;
`;

export const MenuContainer = styled.div`
  display: flex;
  width: 37.2rem;
  height: 67.7rem;
  flex-direction: column;
  align-items: flex-start;
  margin: auto;
  gap: 3.6rem;
`;