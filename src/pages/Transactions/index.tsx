import { Header } from '../../components/Header'
import { Summary } from '../../components/Summary'
import {
  PriceHighligth,
  TransactionsContainer,
  TransactionsTable,
} from './styles'

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighligth variant="income">R$ 12.000</PriceHighligth>
              </td>
              <td>Venda</td>
              <td>13/03/2024</td>
            </tr>
            <tr>
              <td width="50%">Desenvolvimento de site</td>
              <td>
                <PriceHighligth variant="outcome">R$ 12.000</PriceHighligth>
              </td>
              <td>Venda</td>
              <td>13/03/2024</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}