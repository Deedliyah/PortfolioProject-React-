
import { useState, useEffect } from "react";
import { useSession } from "next-auth/client";
import RegisterPage from "./rejestracja";

export default function Secret() {
    const [session, loading] = useSession();
    const [content, setContent] = useState();

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("/api/secret");
            const json = await res.json();

            if (json.content) {
                setContent(json.content);
            }
        };
        fetchData();
    }, [session]);

    if (typeof window !== "undefined" && loading) return null;

    if (!session) {
        return (
            <RegisterPage />
        )
    }
    return (
        <>
            {content}
        </>
    );
}


const GiveAwayPage = () => {
    return (
        <div>
            <h1>TU SIĘ BEDZIE ODDAWAĆ</h1>
        </div>
    )
}

export { GiveAwayPage }
