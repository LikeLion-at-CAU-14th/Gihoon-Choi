import { privateAxios } from "./privateAxios";

export const getMyPage = async () => {
    return privateAxios.get("/accounts/mypage");
};