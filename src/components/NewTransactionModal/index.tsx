import * as Dialog from "@radix-ui/react-dialog";
import {
  ButtonClose,
  NewTransactionModalContainer,
  OverlayStyled,
  TransactionType,
  TransactionTypeButton,
} from "./style";
import { ArrowCircleDown, ArrowCircleUp, X } from "phosphor-react";

export function NewTransactionModal() {
  return (
    <Dialog.Portal>
      <OverlayStyled />
      <NewTransactionModalContainer>
        <Dialog.Title>Nova transação</Dialog.Title>

        <ButtonClose>
          <X />
        </ButtonClose>

        <form>
          <input type="text" placeholder="Descrição" required />
          <input type="number" placeholder="Preço" required />
          <input type="text" placeholder="Categoria" required />

          <TransactionType>
            <TransactionTypeButton variant="income" value="income">
              <ArrowCircleUp size={24} />
              Entrada
            </TransactionTypeButton>

            <TransactionTypeButton variant="outcome" value="outcome">
              <ArrowCircleDown size={24} />
              Saída
            </TransactionTypeButton>
          </TransactionType>

          <button type="submit">Cadastrar</button>
        </form>
      </NewTransactionModalContainer>
    </Dialog.Portal>
  );
}
