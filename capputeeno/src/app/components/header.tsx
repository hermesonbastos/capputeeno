"use client" //diretiva que rederiza o componente do lado do cliente por conta de recursos do styled components que não podem ser utilizados do lado do servidor

import { styled } from "styled-components"
import { Saira_Stencil_One } from "next/font/google";
import { PrimaryInputWithSearchIcon } from "./primary-input";
import { CartControl } from "./cart-control";

const sairaStencil = Saira_Stencil_One({
    weight: ['400'],
    subsets: ['latin']
})

interface HeaderProps {

}

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }
`

const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
`

export function Header(props: HeaderProps) {
    return(
        <TagHeader>
            <Logo className={sairaStencil.className}>capputeeno</Logo>
            <div>
                <PrimaryInputWithSearchIcon placeholder="Procurando por algo específico?"></PrimaryInputWithSearchIcon>
                <CartControl />
            </div>
        </TagHeader>
    )
}