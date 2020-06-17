import { useState, useEffect } from 'react';
import axios from 'axios';

const useRecords = (resource) => {
    const [records, setRecords] = useState([]);
    useEffect(() => {
        (async (resource) => {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/${resource}`
            );

            setRecords(response.data);
        })(resource);
    }, [resource]);

    return records;
};

export default useRecords;
