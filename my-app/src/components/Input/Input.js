import styled from "styled-components";
import { Label } from "../Label/Label";

const StyledInput = styled.input`
    width: 200px;
    height: 40px;
    border: solid black 2px;
`;

const StyledLabel = styled(Label) `
    color: dark-grey;
`;

export const Input = () => {
    return (
        <>
        <StyledLabel />
        <StyledInput type="text" />
        </>
    );
};