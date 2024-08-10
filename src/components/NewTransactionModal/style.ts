import * as Dialog from "@radix-ui/react-dialog";
import * as RadioGroup from "@radix-ui/react-radio-group";
import styled from "styled-components";

export const OverlayStyled = styled(Dialog.Overlay)`
  background: ${({ theme }) => theme["gray-900"]}BB;
  position: fixed;
  inset: 0;
`;

export const NewTransactionModalContainer = styled(Dialog.Content)`
  background: ${({ theme }) => theme["gray-800"]};
  min-width: 51.2rem;
  padding: 4rem 4.8rem;
  border-radius: 0.6rem;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  form {
    margin-top: 3.2rem;
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    input {
      border-radius: 0.6rem;
      border: 0;
      background: ${({ theme }) => theme["gray-900"]};
      color: ${({ theme }) => theme["gray-300"]};
      padding: 1.6rem;

      &::placeholder {
        color: ${({ theme }) => theme["gray-500"]};
      }
    }

    button[type="submit"] {
      height: 5.2rem;
      border: 0;
      background: ${({ theme }) => theme["green-500"]};
      color: ${({ theme }) => theme["white"]};
      font-weight: bold;
      padding: 0 2rem;
      border-radius: 0.6rem;
      margin-top: 2.4rem;
      cursor: pointer;

      &:hover {
        background: ${({ theme }) => theme["green-700"]};
        transition: background 200ms;
      }
    }
  }
`;

export const ButtonClose = styled(Dialog.Close)`
  position: absolute;
  background: transparent;
  border: 0;
  top: 2.4rem;
  right: 2.4rem;
  line-height: 0;
  cursor: pointer;
  color: ${({ theme }) => theme["gray-500"]};
`;

export const TransactionType = styled(RadioGroup.Root)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.6rem;
  margin-top: 0.8rem;
`;

type TransactionTypeButtonProps = {
  variant: "income" | "outcome";
};

export const TransactionTypeButton = styled(RadioGroup.Item)<TransactionTypeButtonProps>`
  background: ${({ theme }) => theme["gray-700"]};
  padding: 1.6rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.8rem;
  border: 0;
  border-radius: 0.6rem;
  cursor: pointer;
  color: ${({ theme }) => theme["gray-300"]};

  & svg {
    color: ${({ variant, theme }) =>
      variant == "income" ? theme["green-300"] : theme["red-300"]};
  }

  &[data-state="checked"] {
    color: ${({ theme }) => theme["white"]};
    background: ${({ variant, theme }) =>
      variant == "income" ? theme["green-500"] : theme["red-500"]};

    svg {
      color: ${({ theme }) => theme["white"]};
    }
  }

  &[data-state="unchecked"]:hover {
    background: ${({ theme }) => theme["gray-600"]};
    transition: background 200ms;
  }
`;
