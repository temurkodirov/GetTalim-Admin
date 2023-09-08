import {getCookie} from "@/helpers/CookieHelper";

export  function  getToken()
{
    return getCookie("access_token");
}