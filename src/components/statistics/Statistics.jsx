import PropTypes from 'prop-types';
import {StatisticsSection, StatisticList, StatisticItem , Label, Percentage, Title} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <Title>{title}</Title>}

      <StatisticList>
        {stats.map(stat => {
          return (
            <StatisticItem key={stat.id}>
              <Label>{stat.label}</Label>
              <Percentage>{stat.percentage} %</Percentage>
            </StatisticItem>
          );
        })}
      </StatisticList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
