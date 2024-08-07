import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForms";
import {
  Container,
  PriceHighlight,
  TransactionsContainer,
  TransactionsTable,
} from "./style";

export function Transactions() {
  return (
    <Container>
      <Header />
      <Summary />

      <TransactionsContainer>
        <SearchForm />

        <TransactionsTable>
          <tbody>
            <tr>
              <td width={"50%"}>Desenvolvimento de Site</td>
              <td>
                <PriceHighlight variant="income">R$ 12.234,00</PriceHighlight>
              </td>
              <td>Venda</td>
              <td>12/12/2024</td>
            </tr>

            <tr>
              <td width={"50%"}>Hamburguer</td>
              <td>
                <PriceHighlight>- R$ 34,00</PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>12/12/2024</td>
            </tr>

            <tr>
              <td width={"50%"}>Desenvolvimento de Site</td>
              <td>R$ 12.234,00</td>
              <td>Venda</td>
              <td>12/12/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </Container>
  );
}
