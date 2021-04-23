import React, {ButtonHTMLAttributes, DetailedHTMLProps, InputHTMLAttributes} from "react";
import styled from "styled-components/macro";
import {StyledComponentProps} from "styled-components";

type DefaultInputT = DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>;

export const InputFile: React.FC<DefaultInputT> = (props) => {

    const {
        type
    } = props

    return (
        <>
            <StyledInput type='file' id='input-file-btn' {...props} hidden/>
            <StyledLabel htmlFor='input-file-btn'>Upload your avatar</StyledLabel>
        </>
    )
}

const StyledInput = styled.input<StyledComponentProps<any, any, any, any>>`
  height: 20px;
`

const StyledLabel = styled.label`
  display: inline-block;
  border: none;
  cursor: pointer;
  background-color: ${({theme}) => theme.color.primary.main};
  color: ${({theme}) => theme.color.white};
  padding: 0.5rem 1rem;

  box-shadow: ${({theme}) => theme.shadow['1']};

  font-family: ${({theme}) => theme.font.family.default}; 
  font-size: ${({theme}) => theme.font.size.default};

  transition: all .1s ease-in-out;

  &:hover {
    background-color: ${({theme}) => theme.color.primary.dark};
    transform: translateY(-0.1em);
    box-shadow: ${({theme}) => theme.shadow['4']};
  }

  &:active {
    background-color: ${({theme}) => theme.color.primary.light};
    transform: translateY(0);
    box-shadow: ${({theme}) => theme.shadow['1']};
  }
`
