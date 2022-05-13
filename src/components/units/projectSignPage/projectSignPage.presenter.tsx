import * as S from "./projectSignPage.styles";
export default function ProjectSignPageUI() {
  return (
      <S.Wrapper>
        <S.Title>새로운 프로젝트 만들기</S.Title>
        <S.Inputs>
          <S.Block>
            <S.LabelBox>
              <S.Label>프로젝트명</S.Label><S.Must>*</S.Must>
          </S.LabelBox>
          <S.InputBox>
            <S.Input type="text" />
            <S.Error>기호는 포함할 수 없습니다.</S.Error>
          </S.InputBox> 
          </S.Block>
          <S.Block> 
            <S.LabelBox>
              <S.Label>프로젝트 한줄소개</S.Label><S.Must>*</S.Must>
            </S.LabelBox>
          <S.InputBox>
            <S.Input type="text" />
            <S.Error>기호는 포함할 수 없습니다.</S.Error>
          </S.InputBox>
          </S.Block>
          <S.Block>
          <S.LabelBox>  
            <S.Label>프로젝트 설명</S.Label><S.Must>*</S.Must>
          </S.LabelBox>
          <S.InputBox>
            <S.Input type="text" />
            <S.Error>기호는 포함할 수 없습니다.</S.Error>
          </S.InputBox>
          </S.Block>  
        </S.Inputs> 
        <S.LabelBox>     
          <S.Label>대표이미지</S.Label><S.Must>*</S.Must>
        </S.LabelBox>
          <S.AddImg>
            <S.ImgAddBtn>
              <S.FileImg src="/images/file.png" />
              <span>파일찾기</span>
            </S.ImgAddBtn>
            <S.ImgPreviewBox>
              <S.ImgPreview></S.ImgPreview>
              <S.ImgInfo>등록할 수 있는 사진의 크기는 150*150픽셀 이상, 최대용량은 20MB미만 입니다.</S.ImgInfo>
            </S.ImgPreviewBox>
          </S.AddImg>
         <S.DateBox>
          <S.LabelBox>  
            <S.Label>프로젝트 기간</S.Label><S.Must>*</S.Must>
          </S.LabelBox>  
          <S.InputBox>
            <S.StartEndDay>
              <S.Date>시작일</S.Date>
              <S.DateInput />
            </S.StartEndDay>
            <S.StartEndDay>
              <S.Date>종료일</S.Date>
              <S.DateInput />
            </S.StartEndDay>
          </S.InputBox>
          </S.DateBox>
            <S.Block>  
              <S.LabelBox> 
                <S.Label>장소</S.Label>
              </S.LabelBox> 
              <S.InputBox>
                <S.MapInput type="text" placeholder="도로명 주소로 검색"/>
              </S.InputBox>
            </S.Block>
            <S.MapBox>
              <S.Map></S.Map>  
            </S.MapBox>
          <S.BlockMember>
            <S.LabelBox>
              <S.Label>팀원추가</S.Label>
            </S.LabelBox>
            <S.InputBox>
              <S.MemberAddInput type="text" placeholder="아이디 검색"/>
            </S.InputBox>
          </S.BlockMember>  
          <S.Btn>
            <S.SubmitBtn>프로젝트 만들기</S.SubmitBtn>
          </S.Btn>
      </S.Wrapper>
  );
}













