import styled from 'styled-components';

export const Container = styled.div`
  width: 320px;
  margin-top: 20px;
  border-radius: 15px;
  background-color: ${props => {
    return props.theme.colors.main; // из темы передаем цвет с помощью функции
  }};
  box-shadow: 3px 5px 7px -1px rgba(48, 154, 246, 0.23);
`;

export const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  padding: 30px;
`;

export const Avatar = styled.img`
  width: 200px;
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

export const Tag = styled.p`
  color: #803131;
  font-size: 18px;
  font-style: italic;
`;

export const Location = styled.p`
  color: #6b8ce1;
  font-size: 18px;
  font-weight: 500;
`;

export const ListStats = styled.ul`
  display: flex;
  border-top: 1px solid rgb(158, 152, 152);
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
  background-color: ${props => {
    return props.theme.colors.accent; // из темы передаем цвет с помощью функции
  }};
`;

export const StatItem = styled.li`
  display: flex;
  padding: 10px;
  width: 100%;
  text-align: center;
  flex-direction: column;
  gap: 5px;
  :not(:last-child) {
    border-right: 1px solid rgb(158, 152, 152);
  }
`;

export const Label = styled.span`
  font-weight: 500;
`;

export const Quantity = styled.span`
  color: #3163df;
  text-shadow: 1px 1px 1px #fff;
`;
