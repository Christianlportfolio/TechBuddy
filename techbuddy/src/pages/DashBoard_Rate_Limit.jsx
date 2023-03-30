
import React, {useEffect, useState} from "react";

const RateLimit = () => {

    const [rateLimitLog, setRateLimitLog] = useState([]);
    useEffect(() => {
        fetch('https://localhost:5001/api/cybersecurity/ratelimitlog')
        .then((res) => res.json())
        .then((data) => setRateLimitLog(data));
    }, []);

    return (
        <div>
            {rateLimitLog.map((item, index) => {
                if (item == "no_logs") {
                    return <p key={index}>&#9989; Ingen API rate limit log</p>;
                }
                return <li key={index}>{item}</li>
                
            })}
        </div>
    );
};

  export default RateLimit;