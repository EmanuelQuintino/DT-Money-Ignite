import styled from "styled-components";

export const SearchFormContainer = styled.form`
  display: flex;
  gap: 1.6rem;

  input {
    flex: 1;
    border-radius: 0.6rem;
    border: 0;
    background: ${({ theme }) => theme["gray-900"]};
    color: ${({ theme }) => theme["gray-300"]};
    padding: 1.6rem;

    &::placeholder {
      color: ${({ theme }) => theme["gray-500"]};
    }
  }

  button {
    display: flex;
    align-items: center;
    gap: 1.2rem;
    padding: 1.6rem;
    background: transparent;
    border: 1px solid ${({ theme }) => theme["green-300"]};
    color: ${({ theme }) => theme["green-300"]};
    font-weight: bold;
    border-radius: 0.6rem;

    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &:not(:disabled):hover {
      cursor: pointer;
      background: ${({ theme }) => theme["green-500"]};
      border: 1px solid ${({ theme }) => theme["green-500"]};
      color: ${({ theme }) => theme["white"]};
      transition: background 200ms, border 200ms, color 200ms;
    }
  }
`;
