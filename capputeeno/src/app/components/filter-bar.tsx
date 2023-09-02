"use client"

import { styled } from "styled-components";
import { FilterByType } from "./filter-bar-type";

const FilterContainer = styled.div`
    display: flex;
    width: 100%;
    align-items: start;
`

export function FilterBar() {
    return (
        <FilterContainer>
            <FilterByType />
        </FilterContainer>
    )
}