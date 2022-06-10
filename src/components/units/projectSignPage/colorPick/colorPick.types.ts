import { Query } from './../../../../commons/types/generated/types';
import { SetStateAction, Dispatch } from 'react';

export interface IColorPickProps {
    setColor: Dispatch<SetStateAction<string | undefined>>;
    data: Pick<Query, "fetchProject"> | undefined
}