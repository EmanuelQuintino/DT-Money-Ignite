import * as Dialog from "@radix-ui/react-dialog";
import { ButtonClose, NewTransactionModalContainer, OverlayStyled } from "./style";
import { X } from "phosphor-react";

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

          <button type="submit">Cadastrar</button>
        </form>
      </NewTransactionModalContainer>
    </Dialog.Portal>
  );
}
