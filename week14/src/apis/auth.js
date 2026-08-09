import {publicAxios} from "./publicAxios";

//회원가입 api 요청 함수
export const signup = async (id, pw, name, age) => {
    const {data}=await publicAxios.post("/accounts/signup/", {id, pw, name, age});
    return data;
};

//로그인 api 요청 함수
export const login=async (id, pw) => {
    const {data}=await publicAxios.post("/accounts/login/", {id, pw});
    return data;
};