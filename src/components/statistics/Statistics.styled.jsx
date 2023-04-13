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
  padding: 20px;
  width: 360px;
  background-color: ${props => {
    return props.theme.colors.main; // из темы передаем цвет с помощью функции
  }};
`;

export const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

export const StatisticList = styled.ul`
  display: flex;
  align-items: center;
  gap: 8px;
`;

export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center;
  justify-content: center;
  width: 100%;
  background-color: ${getRandomHexColor};
`;

export const Label = styled.section`
  font-size: 20px;
`;

export const Percentage = styled.section`
  font-size: 18px;
  font-weight: 500;
`;
