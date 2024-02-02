import styled from "styled-components";

export const Container = styled.div`
  width: 42.8rem;
  height: 116.8rem;
  margin: 0 auto;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
`;

export const PageContainer = styled.div`
  display: flex;
  width: 36.4rem;
  flex-direction: column;
  align-items: center;
  gap: 2.4rem;
  margin: 0 auto;
`;

export const LinkToGoBack = styled.a`
  display: inline-flex;
  align-items: center;
  justify-content: flex-start;
  padding: .0rem 28.0rem 1.1rem .0rem;

  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: 'Poppins', sans-serif;
  font-size: 2.4rem;
  font-weight: 500;
  text-decoration: none;
`;

export const Title = styled.h1`
  display: flex;
  align-self: flex-start;
  color: ${({ theme }) => theme.COLORS.WHITE};
  font-family: 'Poppins', sans-serif;
  font-size: 3.2rem;
  font-weight: 500;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > button {
    background: ${({ theme }) => theme.COLORS.LIGHT_RED};
  }
`;

export const DishItemContainer = styled.div`
  display: inline-flex;
  height: 4.8rem;
  padding: 0.4rem 0.8rem;
  align-items: center;
  gap: 1.6rem;

  border-radius: 0.8rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
`;

export const Textarea = styled.textarea`
  display: flex;
  height: 17.2rem;
  padding: 1.4rem;
  align-items: flex-start;
  gap: 1.4rem;
  align-self: stretch;

  border-radius: 0.8rem;
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
`;

export const Paragraph = styled.p`
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  font-family: 'Roboto', sans-serif;
  font-size: 1.6rem;
  font-weight: 400;
`;

export const Text = styled.h6`
  color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};
  font-family: 'Roboto';
  font-size: 1.6rem;
  font-weight: 400;
`;

export const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 3.2rem;

  > button:nth-child(1) {
    background: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  }
`;