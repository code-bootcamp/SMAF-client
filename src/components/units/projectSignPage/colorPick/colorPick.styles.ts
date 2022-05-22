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
     border: 3px solid #FFFFFF;
     box-shadow: 0rem 0rem 1rem rgba(0, 0, 0, .12);;
   }

`

export const Circle=styled.div`
    width: 4.8rem; 
    height:4.8rem;
    border-radius: 3rem;
`