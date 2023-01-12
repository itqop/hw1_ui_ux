import {EmptyPageTitle, EmptyPageWrapper} from "../../styles/common-styled";

export const NotFound404 = () => {
    return (
        <EmptyPageWrapper>
            <EmptyPageTitle isError>
                Страница не найдена
            </EmptyPageTitle>
        </EmptyPageWrapper>
    )
}