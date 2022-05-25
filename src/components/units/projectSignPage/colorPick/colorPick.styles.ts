import styled from "@emotion/styled";

export const Wrapper=styled.div`
    display: flex;
    
    /* 체크박스 인풋 숨김 */
    .checkbox input {
        display: none;
    }
    /* 원 사이 간격 */
    .checkbox {
        margin-right: 2.5rem;
    }

    /* 체크 되었을때 */
    .checkbox input:checked + .checkbox_color {
        width: 5rem; 
        height: 5rem;
        border: 4px solid #FFFFFF;
        border-radius: 50%;
        box-shadow: 0rem 0rem 1rem rgba(0, 0, 0, .12);;
    }

`

export const Circle=styled.div`
    width: 4.8rem; 
    height:4.8rem;
    border-radius: 50%;
`