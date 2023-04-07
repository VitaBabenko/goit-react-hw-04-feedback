import PropTypes from "prop-types";
import { SectionDiv, Title } from './Section.styled';

export const Section = ({ title, children }) => {
    return <SectionDiv>
        <Title>{title}</Title>
        {children}
    </SectionDiv>
}

Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.arrayOf(PropTypes.element.isRequired).isRequired
}