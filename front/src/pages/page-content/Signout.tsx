// React imports
import { FC, useEffect } from "react";

// Other imports
import { useAuth } from "../../context/AuthProvider.context";


const Signout: FC = () => {
    const { logout } = useAuth();

    const handleSignOut = () => logout();

    useEffect(() => {
        handleSignOut();
        // eslint-disable-next-line
    }, []);

    return (
        <>
            Loggin out...
        </>
    );
}

export default Signout;