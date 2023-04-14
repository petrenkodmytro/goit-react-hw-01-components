import styled from 'styled-components';

export const Table = styled.table`
  margin: 50px;
  width: 400px;
  text-align: center;
  border-collapse: collapse;
  box-shadow: 3px 5px 7px -1px rgba(48, 154, 246, 0.23);
`;

export const TabHead = styled.thead`
  background-color: ${props => {
    return props.theme.colors.accent;
  }};
  color: #484444;
  text-transform: uppercase;
`;

export const Th = styled.th`
  padding: 10px;
  border: 1px solid rgb(227, 227, 227);
`;

export const TabBody = styled.tbody`
  background-color: ${props => {
    return props.theme.colors.main;
  }};
`;

export const Td = styled.td`
  padding: 10px;
  border: 1px solid rgb(227, 227, 227);
  color: black;
`;

export const Type = styled(Td)`
  text-transform: capitalize;
`;

export const Tr = styled.tr`
  :nth-child(2n) {
    background-color: white;
  }
`;
