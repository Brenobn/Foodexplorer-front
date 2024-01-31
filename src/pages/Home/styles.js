import styled from "styled-components";

export const Container = styled.div`
  max-width: 42.8rem;
  height: 157.1rem;

  margin: 0 auto;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;

export const Outdoor = styled.div`
  width: 37.6rem;
  height: 12.0rem;
  border-radius: 0.3rem;
  background: linear-gradient(180deg, #091E26 0%, #00131C 100%);
  margin: 0 auto;
  margin-top: 4.4rem;
  position: relative;

  > img {
    width: 19.1rem;
    height: 14.9rem;
    opacity: 0.8;
    position: absolute;

    left: -2.5rem;
    bottom: 0.1rem;
  }
`;

export const OutdoorTitle = styled.h2`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem;
  font-weight: 600;

  padding-top: 3.6rem;
  padding-left: 16.7rem;
`;

export const OutdoorParagraph = styled.p`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: 'Poppins', sans-serif;
  font-size: 1.2rem;
  font-weight: 400;

  padding: 0.3rem 1.4rem 2.2rem 17.0rem;

`;

export const Section = styled.h3`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: 'Poppins', sans-serif;
  font-size: 1.8rem;
  font-weight: 500;

  margin: 6.2rem 30.0rem 2.4rem 2.4rem;
`;

export const DishesContainer = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 1.6rem;
`;