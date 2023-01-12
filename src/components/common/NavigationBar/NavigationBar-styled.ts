import styled from "styled-components";
import {deviceNavigation} from "../../../styles/devices";

const pageButtonsVerticalGap = 15;
const pageButtonsHorizontalGap = 20;

const Wrapper = styled.nav`
    display: grid;
    grid-template-columns: 25% 1fr 25%;
    grid-column-gap: ${pageButtonsHorizontalGap}px;
    grid-row-gap: 0;
    padding: 0 20px 0 20px;
  
    ${deviceNavigation.tablet} {
        grid-template-columns: 1fr 1fr;
        grid-column-gap: ${pageButtonsHorizontalGap}px;
        grid-row-gap: ${pageButtonsVerticalGap}px;
    }
  
    ${deviceNavigation.mobile} {
        grid-template-columns: 1fr;
        grid-column-gap: 0;
        grid-row-gap: ${pageButtonsVerticalGap}px;
    }
`

export const Styled = {
    Wrapper,
}