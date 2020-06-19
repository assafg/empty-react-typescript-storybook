import { useEffect } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { recordsSlice } from '../redux/slices';

const useRecords = (resource) => {
    const dispatch = useDispatch();
    const records = useSelector((state) => state.records);

    useEffect(() => {
        (async (resource) => {
            const response = await axios.get(
                `https://jsonplaceholder.typicode.com/${resource}`
            );
            dispatch(recordsSlice.actions.fetched({ data: response.data }));
        })(resource);
    }, [resource, dispatch]);

    return records;
};

export default useRecords;
