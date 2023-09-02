import { styled } from "styled-components";
import { SearchIcon } from "./search-icon";
import { InputHTMLAttributes } from "react";

export const PrimaryInput = styled.input`
    width: 352px;
    padding: 10px 16px;

    border-radius: 8px;
    border: none;

    background-color: var(--bg-secondary);

    color: var(---text-dark);
    font-family: inherit;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 22px;
`
const InputContainer = styled.div`
    position: relative; // permite que o posicionamento do SVG SearchIcon seja definido perfeitamente
    width: 352px;

    svg {
        position: absolute; // permite o ajuste livre do SVG dentro da caixa
        right: 20px;
        top: 50%; // faz com que o SVG parta exatamente do centro Y desconsiderando o tamanho
        transform: translateY(-50%); // compensa o tamanho do SVG
    }
`

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {} // permite que o componente receba as propriedades padrão do HTML originais, como é o caso da utilização do placeholder

export function PrimaryInputWithSearchIcon(props: InputProps) {
    return (
        <InputContainer>
            <PrimaryInput {...props} /> {/* permite aplicar ao componente todas as propriedades recebidas */}
            <SearchIcon />
        </InputContainer>
    )
}