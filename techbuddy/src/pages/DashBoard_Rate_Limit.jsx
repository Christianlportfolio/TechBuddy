
import React, {useEffect, useState} from "react";
import { Table } from 'semantic-ui-react'

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
                //return <li key={index}>{item}</li>
                return (
                    <div>
                        <Table singleLine>              
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell key={index}>{item}</Table.Cell>
                                </Table.Row>
                            </Table.Body>
                        </Table>
                    </div>
                )
                
            })}
        </div>
    );
};

  export default RateLimit;