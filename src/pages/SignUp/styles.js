import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;

  margin: 0 auto;

  background: ${({ theme }) => theme.COLORS.BAKCGROUND_900};
`;

export const Logo = styled.h1`
  color: ${({ theme }) => theme.COLORS.SIMPLE_WHITE};
  font-family: 'Roboto', sans-serif;
  font-size: 3.7rem;
  font-weight: 700;

  display: inline-flex;
  align-items: center;
  gap: 1.0rem;

  > img {
    width: 4.3rem;
    height: 4.3rem;
  }

  @media(min-width: 1024px) {
    font-size: 4.2vw;
    margin-bottom: 10.0rem;

    > img {
      width: 4.7vw;
      height: 4.7vw;
    }
  }
`;

export const LinkToCreateAccount = styled.a`
  color: ${({ theme }) => theme.COLORS.SIMPLE_WHITE};
  text-align: center;
  text-decoration: none;

  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
`;

export const Main = styled.div`
  display: flex;
  padding: 15.8rem 4.7rem 23.5rem 6.5rem;
  flex-direction: column;
  align-items: center;
  gap: 7.3rem;

  @media(min-width: 1024px) {
    flex-direction: row;
    gap: 20.0rem;
    max-width: fit-content;
  }
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  width: 31.6rem;

  @media(min-width: 1024px) {
    max-width: 48.0vw;
  }
`;

export const Title = styled.h2`
  color: ${({ theme }) => theme.COLORS.SIMPLE_WHITE};
  text-align: center;

  font-family: 'Poppins', sans-serif;
  font-size: 3.2vw;
  font-weight: 500;

  @media(max-width: 1024px) {
    display: none;
    font-size: 3.2vw;
  }
`;  