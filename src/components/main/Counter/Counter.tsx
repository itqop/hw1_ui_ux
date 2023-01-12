import React from "react";
import {createComponent, useUnit} from "effector-react";
import {$counter, counterApi} from "../../../models/counter/counter.store";
import { Styled } from "./Counter-styled";

export const Counter = createComponent($counter, (_, counterValue) => {

    const {increment: handleIncrementCounter, decrement: handleDecrementCounter} = useUnit(counterApi);
	function getRandomColor() {
  		var letters = '0123456789ABCDEF';
  		var color = '#';
  		for (var i = 0; i < 6; i++) {
    		color += letters[Math.floor(Math.random() * 16)];
  		}
  	return color;
	}
function ii(){
Styled.CardCounterButtonsIncrement.componentStyle.rules[2] = getRandomColor();
return handleIncrementCounter;};
function ii1(){
Styled.CardCounterButtonsDecrement.componentStyle.rules[2] = getRandomColor();
return handleDecrementCounter;};
    return (
        <Styled.Wrapper>
            <Styled.Card>
                <Styled.CardTitle>
                    Счетчик
                </Styled.CardTitle>
                <Styled.CardCounterValue>
                    {counterValue}
                </Styled.CardCounterValue>
                <Styled.CardCounterButtonsWrapper>
                    <Styled.CardCounterButtonsDecrement onClick={ii1()}/>
                    <Styled.CardCounterButtonsIncrement onClick={ii()}/>
                </Styled.CardCounterButtonsWrapper>
            </Styled.Card>
        </Styled.Wrapper>
    )

})