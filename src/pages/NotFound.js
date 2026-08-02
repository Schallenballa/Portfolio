import {useEffect} from "react";
import {Helmet} from "react-helmet";

const NotFound = () => {
    useEffect(() => {
        const meta = document.createElement("meta");
        meta.name = "prerender-status-code";
        meta.content = "404";
        document.head.appendChild(meta);

        return () => {
            document.head.removeChild(meta);
        };
    }, []);
    return (
        <>
            <Helmet>
                <title>Page Not Found | Zachary Schallenberger</title>
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <div>
                <h2>404 - Page Not Found</h2>
                <p>The page you are looking for does not exist.</p>
            </div>
        </>
        )
}

export default NotFound;
