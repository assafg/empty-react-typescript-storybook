import React from 'react';
import useResource from '../../hooks/useResource';

interface Record {
    id: string;
    name: string;
}

interface ResourceListProps {
    resource: string;
}

const ResourceList = ({ resource }: ResourceListProps) => {
    const records: Record[] = useResource(resource);

    return (
        <ul>
            {records.map((record) => (
                <li key={record.id}>{record.name}</li>
            ))}
        </ul>
    );
};

export default ResourceList;
