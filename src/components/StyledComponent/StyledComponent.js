import React from "react";
import {StyledButton, Container, Row, Column} from './Styles';

const StyledComponent = () => {
    return(
        <Container>
            <Row>
                <Column size={1}>
                    <StyledButton color="red">This is 1</StyledButton>
                </Column>
                <Column size={2}>
                    <StyledButton color="yellow">This is 1</StyledButton>
                </Column>
                <Column size={1}>
                    <StyledButton color="green" className={'btn btn-primary'}>This is 1</StyledButton>
                </Column>
            </Row>
        </Container>
    );
}

export default StyledComponent;
