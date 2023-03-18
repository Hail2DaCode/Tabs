import React from 'react';
import styled from 'styled-components';

const StyledBtn = styled.button`
    background-color: ${props=> props.bgColor};
    type="button";
    width: 10%;
    padding: 20px;
    color: whitesmoke;
    font-size: 16pt;
    animation-name: ${props=>props.animation || ""};
    animation-duration: ${props=>props.duration || ""};
`;
export default StyledBtn;

