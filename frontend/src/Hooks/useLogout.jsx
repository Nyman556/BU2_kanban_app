import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";

function useLogout() {
	const [cookies, removeCookie] = useCookies(["AccessToken"]);
	const navigate = useNavigate();
	const logout = () => {
		removeCookie("AccessToken");
		navigate("/");
		window.location.reload();
	};
	return logout;
}

export default useLogout;
