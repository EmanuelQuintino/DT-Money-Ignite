import styled from "styled-components";

export const Container = styled.div``;

export const TransactionsContainer = styled.main`
  width: 100%;
  max-width: 112rem;
  margin: 6.4rem auto 0;
  padding: 0 2.4rem;
`;

export const TransactionsTable = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.4rem;
  margin-top: 2.4rem;

  td {
    padding: 2rem 3.2rem;
    background: ${({ theme }) => theme["gray-700"]};

    &:first-child {
      border-radius: 6px 0 0 6px;
    }

    &:last-child {
      border-radius: 0 6px 6px 0;
    }
  }
`;

type PriceHighlightProps = {
  variant?: "income" | "outcome";
};

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${({ variant, theme }) =>
    variant == "income" ? theme["green-300"] : theme["red-300"]};
`;
