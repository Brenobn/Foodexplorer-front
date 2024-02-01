import styled from "styled-components";

export const Container = styled.div`
  width: 42.8rem;
  height: 92.6rem;

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
`;

export const LinkToCreateAccount = styled.a`
  color: ${({ theme }) => theme.COLORS.SIMPLE_WHITE};
  text-align: center;
  text-decoration: none;

  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
`;

export const PageContainer = styled.div`
  display: flex;
  padding: 15.8rem 4.7rem 23.5rem 6.5rem;
  flex-direction: column;
  align-items: center;
  gap: 7.3rem;
`;

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3.2rem;

  width: 31.6rem;
`;