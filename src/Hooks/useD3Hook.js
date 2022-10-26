import React from 'react';
import * as d3 from 'd3';

export const useD3Hook = (renderFunction, dependencies) => {
    const ref = React.useRef();

    React.useEffect(() => {
        renderFunction(d3.select(ref.current));
        return () => {};
      }, dependencies);
    return ref;
}

