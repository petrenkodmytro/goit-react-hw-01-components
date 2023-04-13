import styled from 'styled-components';

export const Friend = styled.div`
  display: flex;
  align-items: center;
  justify-content: start;
  gap: 10px;
  width: 300px;
  padding: 15px;
  /* border: solid 1px; */
  border-radius: 15px;
  background-color: ${props => {
    return props.theme.colors.main; // из темы передаем цвет с помощью функции
  }};
`;

export const Status = styled.span`
  width: 20px;
  height: 20px;
  margin-right: 20px;
  border-radius: 50%;
  background-color: ${p => {
    // console.log(p.status)
    if (p.status) {
      return 'green';
    }
    return 'red';
  }};
`;

export const Avatar = styled.img`
  width: 70px;
  margin-right: 30px;
  padding: 5px;
  border-radius: 50%;
  background-color: ${props => {
    return props.theme.colors.accent; // из темы передаем цвет с помощью функции
  }};
`;

export const Name = styled.p`
  color: #3a3636;
  font-size: 24px;
  font-weight: 700;
`;
