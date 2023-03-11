import PropTypes from "prop-types";
import { Title, List, Item } from './Statistics.styled';

export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return <div>
        <Title>Statistics</Title>
        <List>
            <Item>Good: {good}</Item>
            <Item>Neutral: {neutral}</Item>
            <Item>Bad: {bad}</Item>
            <Item>Total: {total}</Item>
            <Item>Positive feedback: {Number(positivePercentage)}%</Item>
        </List>
    </div>
};

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    positivePercentage: PropTypes.string.isRequired
}
