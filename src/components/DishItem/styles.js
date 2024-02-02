import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: fit-content;
  width: fit-content;
  padding: 0.8rem 1.4rem;
  align-items: center;
  gap: 0.8rem;

  border-radius: 0.8rem;
  border: ${({ theme, isNew }) => isNew ? `2px dashed ${theme.COLORS.GRAY_100}` : "none"};
  background: ${({ theme, isNew }) => isNew ? "transparent" : theme.COLORS.GRAY_200};

  > button {
    display: flex;
    border: none;
    background: none;

    > svg {
      color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_100 : theme.COLORS.SIMPLE_WHITE};
    }
  }

  > button:hover {
    cursor: pointer;
  }

  > input {
    height: 3.2rem;
    width: 11.8rem;
    padding: 1.0rem 1.6rem;
    color: ${({ theme }) => theme.COLORS.SIMPLE_WHITE};
    background: transparent;
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }
`;