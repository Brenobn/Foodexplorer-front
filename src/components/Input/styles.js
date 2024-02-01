import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  display: grid;
  position: relative;

  > label {
    color: ${({ theme }) => theme.COLORS.LIGHT_GRAY};

    font-family: 'Roboto', sans-serif;
    font-size: 1.6rem;
    font-weight: 400;
    pointer-events: none;
    margin-bottom: 0.8rem;
  }
`;

export const BoxInput = styled.div`
  display: flex;
  width: 100%;

  align-items: center;
  justify-content: center;
  border-radius: 0.5rem;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  > input {
    appearance: none;
    height: 4.8rem;
    width: 100%;

    padding: 1.2rem 1.4rem;

    color: ${({ theme }) => theme.COLORS.SIMPLE_WHITE};
    background: transparent;
    border: 0;

    &:placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  > svg {
    margin-left: 1.4rem;
  }
`;