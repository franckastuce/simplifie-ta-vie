import React, { useContext } from "react";

export const AuthenticatedRoute = ({ path, component }) => {
    const { isAuthenticated } = useContext(Auth)
    return isAuthenticated ? (
        <Route exact path={path} component={component} />
    ) : (
        <Redirect to="/"
    )
}