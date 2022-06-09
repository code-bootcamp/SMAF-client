import * as S from "./projectSignPage.styles";
import DayPick from "../../commons/daypicker/daypicker";
import KakaoMapPage from "./kakaoMap/kakaomap.container";
import DaumPostcode from "react-daum-postcode";
import ColorPick from "./colorPick/colorPick.container";
import { useEffect } from "react";
import Alert from "../../commons/modal/alert/alert";
import ErrorAlert from "../../commons/modal/errorModal/alert";
import { IProjectSignPresenterProps } from "./projectSignPage.types";
import { Modal } from "antd";

export default function ProjectSignPageUI(props: IProjectSignPresenterProps) {
  // react-quill contents 값 넣어주기
  useEffect(() => {
    props.reset({ contents: props.data?.fetchProject.projectDetailIntro });
  }, [props.data?.fetchProject.projectDetailIntro]);

  return (
    <>
      {props.alertModal && (
        <Alert
          onClickExit={
            props.go
              ? props.onClickExitSubmitModal
              : props.onClickExitUpdateModal
          }
          contents={props.modalContents}
        />
      )}
      {props.errorAlertModal && (
        <ErrorAlert
          onClickExit={props.onClickExitErrorModal}
          contents={props.modalContents}
        />
      )}
      <S.Wrapper>
        <form
          onSubmit={props.handleSubmit(
            props.isEdit ? props.onClickUpdate : props.onClickSubmit
          )}
        >
          <S.Title>
            {props.isEdit ? "프로젝트 수정하기" : "새로운 프로젝트 만들기"}
          </S.Title>
          <S.Inputs>
            <S.Block>
              <S.LabelBox>
                <S.Label>프로젝트명</S.Label>
                <S.Must>*</S.Must>
              </S.LabelBox>
              <S.InputBox>
                <S.Input
                  type="text"
                  placeholder="프로젝트 이름을 입력해주세요."
                  {...props.register("projectName")}
                  defaultValue={props.data?.fetchProject.projectName}
                />
                <S.Error>{props.formState.errors.projectName?.message}</S.Error>
              </S.InputBox>
            </S.Block>
            <S.Block>
              <S.LabelBox>
                <S.Label>프로젝트 한줄소개</S.Label>
                <S.Must>*</S.Must>
              </S.LabelBox>
              <S.InputBox>
                <S.Input
                  type="text"
                  placeholder="프로젝트를 한줄로 소개해주세요."
                  {...props.register("remarks")}
                  defaultValue={props.data?.fetchProject.projectIntro}
                />
                <S.Error>{props.formState.errors.remarks?.message}</S.Error>
              </S.InputBox>
            </S.Block>
            <S.Block>
              <S.LabelBox>
                <S.Label>프로젝트 설명</S.Label>
                <S.Must>*</S.Must>
              </S.LabelBox>
              <S.InputBox>
                <S.QuillDiv>
                  <S.RQuill
                    onChange={props.onChangeContents}
                    value={props.getValues("contents") || ""}
                  />
                </S.QuillDiv>
              </S.InputBox>
            </S.Block>
          </S.Inputs>
          <S.Block>
            <S.ImgLabelBox>
              <S.ImgTitle>
                <S.Label>대표이미지</S.Label>
                <S.Must>*</S.Must>
              </S.ImgTitle>
              <input
                type="file"
                style={{ display: "none" }}
                onChange={props.onChangeFile}
                ref={props.fileRef}
              />
              <S.ImgAddBtn onClick={props.onClickUpload}>
                <S.FileImg src="/images/file.png" />
                <span>파일찾기</span>
              </S.ImgAddBtn>
            </S.ImgLabelBox>
            <S.AddImg>
              <S.ImgPreviewBox>
                {props.urls ? (
                  <S.Img
                    src={props.urls}
                    defaultValue={
                      props.data?.fetchProject?.projectImageURL || ""
                    }
                  />
                ) : (
                  <S.ImgPreview></S.ImgPreview>
                )}
                <S.ImgInfo>
                  등록할 수 있는 사진의 크기는 150*150픽셀 이상, <br />
                  최대용량은 20MB미만 입니다.
                </S.ImgInfo>
              </S.ImgPreviewBox>
            </S.AddImg>
          </S.Block>
          <S.Block>
            <S.ImgTitle>
              <S.Label>프로젝트 색상</S.Label>
              <S.Must>*</S.Must>
            </S.ImgTitle>
            <S.Color>
              <ColorPick
                color={props.color}
                setColor={props.setColor}
                data={props.data}
              />
            </S.Color>
          </S.Block>

          <S.DateBox>
            <S.LabelBox>
              <S.Label>프로젝트 기간</S.Label>
              <S.Must>*</S.Must>
            </S.LabelBox>

            <S.InputDayBox>
              <div>
                <S.StartEndDay>
                  <S.Date>시작일</S.Date>
                  <S.EndDate>종료일</S.EndDate>
                </S.StartEndDay>
                <S.DayPicker>
                  <DayPick data={props.data} />
                </S.DayPicker>
              </div>
              <S.DayBox>dd</S.DayBox>
            </S.InputDayBox>
          </S.DateBox>

          <S.Block>
            <S.LabelBox>
              <S.Label>장소</S.Label>
            </S.LabelBox>
            {/* 주소모달 */}
            {props.isOpen && (
              <Modal
                title="주소를 검색해주세요"
                visible={true}
                onOk={props.handleOk}
                onCancel={props.handleCancel}
              >
                <DaumPostcode onComplete={props.handleComplete} />
              </Modal>
            )}
            <S.InputBox>
              <S.MapInput
                id="address"
                type="text"
                placeholder="도로명 주소로 검색"
                onClick={props.showModal}
                value={
                  props.address || props.data?.fetchProject.address?.address
                }
              />
              <S.Input
                id="addressDetail"
                type="text"
                placeholder="상세주소를 입력해주세요."
                {...props.register("detailAddress")}
              />
            </S.InputBox>
          </S.Block>
          <S.MapBox>
            <S.Map>
              <KakaoMapPage address={props.address} data={props.data} />
            </S.Map>
          </S.MapBox>
          <S.Btn>
            <S.SubmitBtn>
              {props.isEdit ? "프로젝트 수정하기" : "프로젝트 만들기"}
            </S.SubmitBtn>
          </S.Btn>
        </form>
      </S.Wrapper>
    </>
  );
}
