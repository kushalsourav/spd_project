import { useCallback, useState } from "react"

const useClose = () => {
    const [state, setState] = useState(false);

    let close = useCallback(() => setState(state => !state), [])

    return[state, close];
};

export default useClose;