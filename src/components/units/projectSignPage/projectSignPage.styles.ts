import styled from "@emotion/styled";
import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";
import { breakPoints } from "../../../commons/styles/media";
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export const Wrapper = styled.div`
    width: 198rem;
    padding: 10rem 30rem 0rem 30rem;
    @media ${breakPoints.mobile} {
        width: 36rem;
        padding: 0rem 2rem 6rem 2rem;
    }
`;

export const Title = styled.h1`
    padding: 5rem 0 10rem 0;
    text-align: center;
    font-weight: 700;
    font-size: 3.6rem;
    @media ${breakPoints.mobile} {
        width: 32rem;
        padding: 5rem 0 5rem 0;
        font-size: 1.8rem;
        font-weight: 700;
    }
`;
export const LabelBox = styled.div`
    display: flex;
    width: 240px;
`;
export const Label = styled.span`
    font-size: 2.8rem;
    font-weight: 700;
    @media ${breakPoints.mobile} {
        padding-bottom: 1rem;
        font-size: 1.6rem;
        font-weight: 600;
    }
`;

export const RQuill = styled(ReactQuill)`
    height: 84%;
    @media ${breakPoints.mobile} {
        height: 74%;
    }
    .ql-editor {
        padding: 1rem;
        min-height: 320px;
        font-size: 2rem;
        line-height: 1.5;
        @media ${breakPoints.mobile} {
            font-size: 1.2rem;
        }
    }
`;
export const Block = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 4rem;
    @media ${breakPoints.mobile} {
        width: 32rem;
        display: flex;
        flex-direction: column;
    }
`;

export const InputBox = styled.div`
    display: flex;
    flex-direction: column;
    padding-left: 18rem;
    font-size: 2rem;
    @media ${breakPoints.mobile} {
        width: 32rem;
        padding-left: 0;
    }
`;

export const Must = styled.span`
    font-size: 1.8rem;
`;

export const Inputs = styled.div``;
export const Input = styled.input`
    width: 88rem;
    height: 6rem;
    padding: 1rem;
    border-radius: 0.8rem;
    border: 0.2rem solid #dbdbdb;
    outline: none;
    @media ${breakPoints.mobile} {
        width: 32rem;
        height: 4.8rem;
        padding: 0;
        font-size: 1.3rem;
        padding: 1rem;
    }
`;

export const ImgAddBtn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 11rem;
    height: 3.8rem;
    border: none;
    border-radius: 1.2rem;
    background-color: white;
    cursor: pointer;
`;

export const ImgTitle = styled.div`
    display: flex;
    width: 221px;
    @media ${breakPoints.mobile} {
        width: 32rem;
        font-size: 1.8rem;
    }
`;

export const FileImg = styled.img`
    width: 1.333rem;
    height: 1.667rem;
    margin-right: 0.5rem;
`;
export const ImgLabelBox = styled.div`
    @media ${breakPoints.mobile} {
        width: 32rem;
    }
`;

export const AddImg = styled.div`
    display: flex;
    justify-content: space-between;
`;
export const Img = styled.img`
    width: 32rem;
    height: 16rem;
    background: #c4c4c4;
    border-radius: 0.8rem;
    @media ${breakPoints.mobile} {
        width: 32rem;
        height: 16rem;
        margin-top: 1rem;
    }
`;
export const ImgPreviewBox = styled.div`
    width: 88rem;
    display: flex;
    align-items: flex-end;
`;
export const ImgPreview = styled.div`
    width: 32rem;
    height: 16rem;
    background: #c4c4c4;
    border-radius: 0.8rem;
    @media ${breakPoints.mobile} {
        width: 32rem;
        height: 16rem;
        margin-top: 1rem;
    }
`;
export const ImgInfo = styled.div`
    padding-left: 2rem;
    @media ${breakPoints.mobile} {
        display: none;
    }
`;

export const DateInputBox = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 18rem;
    font-size: 2rem;
    @media ${breakPoints.mobile} {
        width: 32rem;
        padding-left: 0;
    }
`;

export const StartEndDay = styled.div`
    display: flex;
    @media ${breakPoints.mobile} {
        padding-left: 0rem;
    }
`;
export const Date = styled.div`
    padding-bottom: 1rem;
    font-size: 2.4rem;
    @media ${breakPoints.mobile} {
        font-size: 1.4rem;
    }
`;
export const EndDate = styled.div`
    padding: 0 0 2rem 20rem;
    font-size: 2.4rem;
    @media ${breakPoints.mobile} {
        padding: 0 0 1rem 13.5rem;
        font-size: 1.4rem;
    }
`;
export const DayPicker = styled.div`
    @media ${breakPoints.mobile} {
        padding-left: 0rem;
    }
`;

export const InputDayBox = styled.div`
    display: flex;
    flex-direction: row;
    /* padding-left: 18rem; */
    font-size: 2rem;
    @media ${breakPoints.mobile} {
        width: 32rem;
        padding-left: 0;
    }
`;

export const DayBox = styled.div`
    background: #e5e5e5;
    opacity: 0;
    width: 40.5rem;
`;

export const DateBox = styled.div`
    padding: 3rem 0 3rem 0;
    display: flex;
    justify-content: space-between;
    @media ${breakPoints.mobile} {
        display: flex;
        flex-direction: column;
    }
`;
export const DateInput = styled.input`
    width: 22rem;
    height: 4.8rem;
    background: #ffffff;
    border: 0.2rem solid #dbdbdb;
    border-radius: 0.8rem;
`;
export const Map = styled.div`
    width: 88rem;
    height: 45.4rem;
    background: #c4c4c4;
    border-radius: 0.8rem;
    @media ${breakPoints.mobile} {
        width: 32rem;
        height: 1.8rem;
        padding: 0;
        font-size: 1.3rem;
    }
`;

export const MapBox = styled.div`
    display: flex;
    justify-content: end;
    @media ${breakPoints.mobile} {
        display: flex;
        flex-direction: column;
    }
`;
export const MapInput = styled.input`
    width: 88rem;
    height: 6.4rem;
    padding: 1rem;
    margin-bottom: 1rem;
    border: 0.2rem solid #dbdbdb;
    border-radius: 0.8rem;
    background-image: url(/images/search.png);
    background-repeat: no-repeat;
    background-size: 2.2rem;
    background-position: 84rem center;
    @media ${breakPoints.mobile} {
        width: 32rem;
        height: 4.8rem;
        padding: 0;
        font-size: 1.3rem;
        padding: 1rem;
    }
`;
export const MemberAddInput = styled.input`
    width: 40rem;
    height: 6.4rem;
    padding: 1rem;
    margin-left: 19.5rem;
    border: 0.1rem solid #dbdbdb;
    border-radius: 0.8rem;
    background-image: url(/images/search.png);
    background-repeat: no-repeat;
    background-size: 2.2rem;
    background-position: 36rem center;
`;
export const BlockMember = styled.div`
    display: flex;
    padding: 1rem;
    margin-top: 4rem;
`;
export const SubmitBtn = styled.button`
    width: 42.3rem;
    height: 9rem;
    background: #333333;
    color: white;
    font-size: 2.8rem;
    border-radius: 1.2rem;
    cursor: pointer;
    outline: none;
    border: none;
    :hover {
        background: #6b6bff;
    }
    @media ${breakPoints.mobile} {
        width: 32rem;
        height: 4.8rem;
        margin-top: 12rem;
        margin-left: -1.2rem;
        font-size: 1.4rem;
    }
`;
export const Btn = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    padding-top: 10rem;
    padding-bottom: 10rem;
    @media ${breakPoints.mobile} {
        padding-bottom: 0rem;
    }
`;
export const Error = styled.div`
  padding: 1rem 0 0 2rem;
  font-size: 1.8rem;
  color: #dc0000;
  @media ${breakPoints.mobile} {
    padding-left: 0.3rem;
    font-size: 12px;
    line-height: 17px;
  }
`;
export const Color = styled.div`
    padding-left: 13rem;
    @media ${breakPoints.mobile} {
        width: 32rem;
        padding-left: 0;
    }
`;

export const QuillDiv = styled.div`
    width: 88rem;
    height: 30rem;
    background-color: white;
    border-radius: 0.8rem;
    @media ${breakPoints.mobile} {
        width: 32rem;
        height: 30rem;
        background-color: white;
        border-radius: 0.8rem;
    }
`;
