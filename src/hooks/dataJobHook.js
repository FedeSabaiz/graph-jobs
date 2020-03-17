import {useState} from 'react';

const dataJobHook = () => {
    const [result, setResult] = useState({});
    return [result, setResult];
};
 
export default dataJobHook;