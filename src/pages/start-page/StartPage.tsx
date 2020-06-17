import React, { ReactElement } from 'react';
import { Counter } from '../../components/counter/Counter';

interface Props {}

export default function StartPage(_: Props): ReactElement {
    return (
        <div>
            <Counter />
        </div>
    );
}
