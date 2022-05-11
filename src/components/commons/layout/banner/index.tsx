import Slider from "react-slick";
import * as S from "./layoutStyle";
import TodayItems from "../../../units/market/todayItem/todayItem.container";

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

export default function LayoutBanner() {
  return (
    <>
      <S.Wrapper>
        <Slider {...settings}>
          <S.Slick1>
            <S.SlickD>Carousel Design</S.SlickD>
            <S.SlickD2>Carousel Design not yet</S.SlickD2>
            <S.SlickD2>preparing Slick111</S.SlickD2>
          </S.Slick1>
          <S.Slick1>
            <S.SlickD>Carousel Design</S.SlickD>
            <S.SlickD2>Carousel Design not yet</S.SlickD2>
            <S.SlickD2>preparing Slick222</S.SlickD2>
          </S.Slick1>
          <S.Slick1>
            <S.SlickD>Carousel Design</S.SlickD>
            <S.SlickD2>Carousel Design not yet</S.SlickD2>
            <S.SlickD2>preparing Slick333</S.SlickD2>
          </S.Slick1>
          <S.Slick1>
            <S.SlickD>Carousel Design</S.SlickD>
            <S.SlickD2>Carousel Design not yet</S.SlickD2>
            <S.SlickD2>preparing Slick444</S.SlickD2>
          </S.Slick1>
          <S.Slick1>
            <S.SlickD>Carousel Design</S.SlickD>
            <S.SlickD2>Carousel Design not yet</S.SlickD2>
            <S.SlickD2>preparing Slick555</S.SlickD2>
          </S.Slick1>
          <S.Slick1>
            <S.SlickD>Carousel Design</S.SlickD>
            <S.SlickD2>Carousel Design not yet</S.SlickD2>
            <S.SlickD2>preparing Slick666</S.SlickD2>
          </S.Slick1>
        </Slider>
        <TodayItems />
      </S.Wrapper>
    </>
  );
}
