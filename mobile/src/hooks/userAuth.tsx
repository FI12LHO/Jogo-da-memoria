import { useContext } from "react";

import { AuthContext, AuthContextDataProps } from "../context/AuthContextProvider";

export function userAuth(): AuthContextDataProps {
    const context = useContext(AuthContext);

    return context;
}