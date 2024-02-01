import styled from "styled-components";

export const Container = styled.div`
  width: 42.8rem;
  height: 91.8rem;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  > img {
    display: flex;
    width: 26.4rem;
    height: 26.4rem;
    justify-content: center;
    align-items: center;
  }
`;

export const WayBack = styled.a`
  display: flex;
  padding-right: 21.4rem;
  align-items: center;
  align-self: stretch;
  margin-top: 2.0rem;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: 'Poppins', sans-serif;
  font-size: 2.4rem;
  font-weight: 500;
  text-decoration: none;
`;

export const DishName = styled.h2`
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: 'Poppins', sans-serif;
  font-size: 2.7rem;
  font-weight: 500;
`;

export const DishDescription = styled.p`
  color: ${({ theme }) => theme.COLORS.WHITE};
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
  padding-bottom: 2.4rem;
`;

export const DishContainer = styled.div`
  display: inline-flex;
  width: 42.8rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1.6rem;
`;

export const DishData = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
`;

export const AddOrRemoveContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1.6rem;
  width: 31.6rem;
  height: 3.7rem;
  justify-content: center;
  padding-top: 4.8rem;
  padding-bottom: 8.4rem;

  > div :nth-child(1) {
    width: 2.7rem;
    height: 2.7rem;
  }

  > div :nth-child(2) {
    font-size: 1.8rem;
    font-weight: 500;
  }

  > div :nth-child(3) {
    width: 2.7rem;
    height: 2.7rem;
  }
`;

export const ButtonToAddItem = styled.button`
  display: flex;
  padding: 0.8rem 1.6rem;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;

  border-radius: 0.3rem;
  border: none;
  background: ${({ theme }) => theme.COLORS.RED};
  color: ${({ theme }) => theme.COLORS.SIMPLE_WHITE};
  text-align: center;
  font-family: 'Poppins', sans-serif;
  font-size: 0.9rem;
  font-weight: 500;
`;

export const IngredientsContainer = styled.div`
  display: flex;
  width: 31.6rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;
`;