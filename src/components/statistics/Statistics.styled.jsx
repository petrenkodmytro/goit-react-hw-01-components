import styled from 'styled-components';

// функція для рандомного кольору статистики
function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export const StatisticsSection = styled.section`
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin: 50px auto;
  width: 360px;
  background-color: ${props => {
    return props.theme.colors.main; // из темы передаем цвет с помощью функции
  }};
  box-shadow: 3px 5px 7px -1px rgba(48, 154, 246, 0.23);
`;

export const Title = styled.h2`
  margin-top: 20px;
  margin-bottom: 30px;
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

export const StatisticList = styled.ul`
  display: flex;
  align-items: center;
`;

export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding: 5px;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.section`
  font-size: 20px;
`;

export const Percentage = styled.section`
  font-size: 18px;
  font-weight: 500;
`;
