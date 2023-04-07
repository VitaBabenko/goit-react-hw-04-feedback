import PropTypes from "prop-types";
import { List, Btn } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return <List>
        {options.map((option) => {
            return <li key={option}>
                <Btn type="button" onClick={() => {onLeaveFeedback(option)}}>{option}</Btn>
            </li>
        })}
    </List>
}

FeedbackOptions.propTypes = {
    options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    onLeaveFeedback: PropTypes.func.isRequired
}