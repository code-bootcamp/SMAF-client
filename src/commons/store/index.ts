import { atom } from "recoil";
export const aaa = atom({
  key: "aaa",
  default: true,
});

export const accessTokenState = atom({
  key: "accessTokenState",
  default: "",
});

export const isInfo = atom({
  key: "isInfo",
  default: false,
});

export const visitedPageState = atom({
  key: "visitedPageState",
  default: "/",
});

export const userInfoState = atom({
  key: "userInfoState",
  default: {
    email: "",
    name: "",
  },
});

export const gpsInfo = atom({
  key: "gpsInfo",
  default: { La: 0, Ma: 0 },
});

export const Address = atom({
  key: "Address",
  default: "",
});

export const TodayItemList = atom({
  key: "TodayItemList",
  default: false,
});

// 달력 날짜 값
export const dateValue = atom({
  key: "dateValue",
  default: new Date(),
});

// 데이피커 startDate
export const fromValues = atom({
  key: "fromValue",
  default: "",
});

// 데이피커 endDate
export const toValues = atom({
  key: "toValue",
  default: "",
});

export const triger = atom({
  key: "triger",
  default: false,
});
