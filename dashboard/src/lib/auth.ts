import Cookies from "js-cookie";

export let isRedirecting = false;

export function handleUnauthorized() {
    if (isRedirecting) return;
    isRedirecting = true;
    Cookies.remove("auth_token");
    window.location.href = "/sign-in";
}
