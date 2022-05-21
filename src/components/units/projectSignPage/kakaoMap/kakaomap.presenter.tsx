import styled from '@emotion/styled';

const BlockLo=styled.div`
display: flex;
`

export default function KakaoMapUI(props){

  return(
        <BlockLo>
            <div id="map" style={{ width: "88rem", height: "46rem", borderRadius:"0.8rem" }}></div>
        </BlockLo>
  )
}