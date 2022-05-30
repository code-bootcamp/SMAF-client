import styled from "@emotion/styled";
import { breakPoints } from "../../../../commons/styles/media";

const BlockLo = styled.div`
    display: flex;
    @media ${breakPoints.mobile} {
        width: 32rem;
        display: flex;
        flex-direction: column;
    }
`;
const MapBox = styled.div`
    width: 88rem;
    height: 46rem;
    border-radius: 0.8rem;

    @media ${breakPoints.mobile} {
        width: 32rem;
        height: 18rem;
    }
`;

export default function KakaoMapUI(props: any) {
    return (
        <BlockLo>
            <MapBox id="map"></MapBox>
        </BlockLo>
    );
}
