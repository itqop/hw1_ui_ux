import React, {FC, memo} from "react";
import {Styled} from "./Header-syled";
import {Styled1} from "../NavigationBar/NavigationBar-styled";
import {PageButton} from "./PageButton/PageButton";
import {NavigationRoutes} from "../NavigationRoutes/NavigationRoutes.types";
import useCurrentPath from "../../../hooks/useCurrentPath";

export const Header: FC = memo(() => {
const currentPath = useCurrentPath()
    return (
        <Styled.Wrapper>
            <Styled.Title>
                БВТ1901      	
            </Styled.Title>
            
            <Styled.Name>
                Калентьев Леон      	
            </Styled.Name>

            
        </Styled.Wrapper>
     
    )
})