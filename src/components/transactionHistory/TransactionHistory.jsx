import PropTypes from 'prop-types';
import {
  TabBody,
  TabHead,
  Table,
  Td,
  Th,
  Tr,
  Type,
} from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
  return (
    <Table>
      <TabHead>
        <tr>
          <Th>Type</Th>
          <Th>Amount</Th>
          <Th>Currency</Th>
        </tr>
      </TabHead>

      <TabBody>
        {items.map(({ id, type, amount, currency }) => (
          <Tr key={id}>
            <Type>{type}</Type>
            <Td>{amount}</Td>
            <Td>{currency}</Td>
          </Tr>
        ))}
      </TabBody>
    </Table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ).isRequired,
};
