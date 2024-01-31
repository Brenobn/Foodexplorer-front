import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: 42.8rem;
  height: 7.7rem;
  padding: 0.4rem 0.2rem;
  justify-content: center;
  align-items: center;
  gap: 0.8rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const FooterLogo = styled.h5`
  display: inline-flex;
  gap: 0.6rem;
  color: ${({ theme }) => theme.COLORS.GRAY};
  font-family: 'Roboto', sans-serif;
  font-size: 1.5rem;
  font-weight: 700;

  img {
    width: 2.2rem;
    height: 1.8rem;
    fill: ${({ theme }) => theme.COLORS.GRAY};
  }
`;

export const FooterParagraph = styled.p`
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: right;
  font-family: 'DM Sans', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;
`;