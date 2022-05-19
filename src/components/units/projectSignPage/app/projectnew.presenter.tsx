import * as S from './projectnew.styles'
import DayPick from '../daypicker/daypicker'
import {useEffect, useRef} from 'react'

export default function ProjectNewUI(){
    const firstInput = useRef(null);
    const secondElement = useRef(null)
    const thirdElement = useRef(null)
    const fourthElement = useRef(null)
    const fifthElement = useRef(null)

    useEffect(()=>{    
        firstInput.current.focus();
    },[])

    const onClickSecond = () => {
        if(secondElement.current) {
            secondElement.current.focus()
        }
    }

    const onClickThird = () => {
        if(thirdElement.current) {
            thirdElement.current.focus()
        }
    }
    
    const onClickFourth = () => {
        if(fourthElement.current) {
            fourthElement.current.focus()
        }
    }

    const onClickFifth = () => {
        if(fifthElement.current) {
            fifthElement.current.focus()
        }
    }

    return(
        <S.Wrapper>
            <S.Container>
                <S.Title>새로운 프로젝트 만들기</S.Title>
                <S.LabelBox>
                    <S.Label>프로젝트명</S.Label><S.Must>*</S.Must>
                 </S.LabelBox>
                 <S.Input type="text" placeholder="제목을 입력해주세요." ref={firstInput}/>
                 <S.NextBtn onClick={onClickSecond}>다음</S.NextBtn>
            </S.Container>
            <S.Container>
                <S.Title>새로운 프로젝트 만들기</S.Title>
                <S.LabelBox>
                    <S.Label>어떤 프로젝트를 진행하시나요?</S.Label>
                 </S.LabelBox>
                 <S.Input type="text" ref={secondElement} placeholder="간단한 설명을 입력해주세요." />
                 <S.NextBtn onClick={onClickThird}>다음</S.NextBtn>
            </S.Container>
            <S.Container>
                <S.Title>새로운 프로젝트 만들기</S.Title>
                <S.LabelBox>
                    <S.Label>팀 혹은 프로젝트를 대표할 사진이 있나요?</S.Label>
                 </S.LabelBox>
                 <S.ImgBox><S.Plus tabIndex="-1" ref={thirdElement}>+</S.Plus></S.ImgBox>
                 <S.NextBtn onClick={onClickFourth}>다음</S.NextBtn>
            </S.Container>
            <S.Container>
                <S.Title>새로운 프로젝트 만들기</S.Title>
                <S.LabelBox>
                    <S.Label tabIndex="-1" ref={fourthElement} >프로젝트 시작일과 마감일을 언제인가요?</S.Label>
                 </S.LabelBox>
                 {/* <S.Input type="text" placeholder="YYYY-MM-DD 여긴라이브러리" /> */}
                 <DayPick/>
                 <S.NextBtn onClick={onClickFifth}>다음</S.NextBtn>
            </S.Container>
            <S.Container>
                <S.Title>새로운 프로젝트 만들기</S.Title>
                <S.LabelBox>
                    <S.Label>프로젝트 장소는 어디인가요?</S.Label>
                 </S.LabelBox>
                 <S.Input type="text" ref={fifthElement} placeholder="도로명주소를 검색해주세요." />
                 <S.Map></S.Map>
                 <S.NextBtn>다음</S.NextBtn>
            </S.Container>
        </S.Wrapper>
    )
}