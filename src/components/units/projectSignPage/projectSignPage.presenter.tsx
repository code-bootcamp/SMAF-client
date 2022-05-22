import * as S from "./projectSignPage.styles";
import DayPick from '../../commons/daypicker/daypicker'
import KakaoMapPage from './kakaoMap/kakaomap.container'
import { Modal } from 'antd';
import DaumPostcode from 'react-daum-postcode';
import ColorPick from "./colorPick/colorPick.container";
import Uploads01 from "../../commons/uploads/Upload01.container";
import {v4 as uuidv4} from 'uuid'

export default function ProjectSignPageUI(props){
  return (
      <S.Wrapper>
        <form onSubmit={props.handleSubmit(props.onClickSubmit)} >
        <S.Title>새로운 프로젝트 만들기</S.Title>
        <S.Inputs>
          <S.Block>
            <S.LabelBox>
              <S.Label>프로젝트명</S.Label><S.Must>*</S.Must>
          </S.LabelBox>
          <S.InputBox>
            <S.Input type="text" 
                      placeholder="프로젝트 이름을 입력해주세요."
                      {...props.register("projectName")} />
            <S.Error>{props.formState.errors.projectName?.message}</S.Error>
          </S.InputBox> 
          </S.Block>
          <S.Block> 
            <S.LabelBox>
              <S.Label>프로젝트 한줄소개</S.Label><S.Must>*</S.Must>
            </S.LabelBox>
          <S.InputBox>
            <S.Input type="text" 
                     placeholder="프로젝트를 한줄로 소개해주세요."
                     {...props.register("remarks")} />
            <S.Error>{props.formState.errors.remarks?.message}</S.Error>
          </S.InputBox>
          </S.Block>
          <S.Block>
          <S.LabelBox>  
            <S.Label>프로젝트 설명</S.Label><S.Must>*</S.Must>
          </S.LabelBox>
          <S.InputBox>
            <div style={{width : "88rem", height:"30rem", backgroundColor:"white", borderRadius:"0.8rem"}}>
            <props.ReactQuill 
              style ={{height:"84%"}}
              onChange={props.onChangeContents}  
              value={props.getValues("contents") || ""}/>
            </div>
          </S.InputBox>
          </S.Block>  
        </S.Inputs> 
        <S.Block>
          <S.ImgLabelBox>    
            <S.ImgTitle>
              <S.Label>대표이미지</S.Label><S.Must>*</S.Must>
            </S.ImgTitle> 
              <input type="file" style={{display:"none"}} onChange={props.onChangeFile} ref={props.fileRef}/>
              <S.ImgAddBtn onClick={props.onClickImg}>
                <S.FileImg src="/images/file.png"/><span>파일찾기</span>
              </S.ImgAddBtn>
          </S.ImgLabelBox>
            <S.AddImg>
              <S.ImgPreviewBox>
                <S.ImgPreview>
                  {props.fileUrls.map((el, index) => (
                            <Uploads01
                              type="button"
                              key={uuidv4()}
                              index={index}
                              fileUrl={el}
                              onChangeFileUrls={props.onChangeFileUrls}
                            />
                             ))}
                </S.ImgPreview>
                <S.ImgInfo>등록할 수 있는 사진의 크기는 150*150픽셀 이상, <br />최대용량은 20MB미만 입니다.</S.ImgInfo>
              </S.ImgPreviewBox>
            </S.AddImg>
          </S.Block>
          <S.Block> 
              <S.ImgTitle>
              <S.Label>프로젝트 색상</S.Label><S.Must>*</S.Must>
              </S.ImgTitle>
              <S.Color>
                <ColorPick color={props.color} setColor={props.setColor}/>
              </S.Color>
          </S.Block>
         <S.DateBox>
          <S.LabelBox>  
            <S.Label>프로젝트 기간</S.Label><S.Must>*</S.Must>
          </S.LabelBox> 
          <S.InputBox>  
            <S.StartEndDay>          
              <S.Date>시작일</S.Date>            
              <S.EndDate>종료일</S.EndDate>
            </S.StartEndDay>   
              <S.DayPicker>
                <DayPick />
              </S.DayPicker>
          </S.InputBox>
          </S.DateBox>
            <S.Block>  
              <S.LabelBox> 
                <S.Label>장소</S.Label>
              </S.LabelBox>               
              {/* 주소모달 */}
                {props.isOpen && (
                  <Modal title="주소를 검색해주세요" 
                    visible={true} onOk={props.handleOk}  
                    onCancel={props.handleCancel}>
                <DaumPostcode onComplete={props.handleComplete}/>
                </Modal>
              )}
              <S.InputBox>
                <S.MapInput id="address" type="text" 
                            placeholder="도로명 주소로 검색" 
                            onClick={props.showModal}
                            value={props.address}
                            />
                <S.Input id="addressDetail" type="text" 
                         placeholder="상세주소를 입력해주세요."
                         onChange={props.onChangeAddressDetail}/>
              </S.InputBox>
            </S.Block>
            <S.MapBox>
              <S.Map>
                <KakaoMapPage 
                  address={props.address}
                  addressDetail={props.addressDetail} 
                  zipcode={props.zipcode}/>  
              </S.Map>  
            </S.MapBox>
          <S.Btn>
            <S.SubmitBtn>프로젝트 만들기</S.SubmitBtn>
          </S.Btn>
          </form>
      </S.Wrapper>
  );
}













