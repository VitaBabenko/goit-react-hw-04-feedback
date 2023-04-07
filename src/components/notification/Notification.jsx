import PropTypes from "prop-types";
import { Title } from './Notification.styled';

export const Notification = ({ message }) => {
    return <div>
        <Title>Statistics</Title>
        <p>{message}</p>
    </div>
}

Notification.propTypes = {
    message: PropTypes.string.isRequired
}