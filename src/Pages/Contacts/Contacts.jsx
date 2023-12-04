import { useEffect } from "react";
import Contact from "../../Component/Contact/Contact";

const Contacts = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])
    return (
        <div>
            <Contact></Contact>
        </div>
    );
};

export default Contacts;