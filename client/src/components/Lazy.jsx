import React, {Suspense} from 'react';

const Lazy = function({Component, fallback}) {
  return (
    <Suspense fallback={fallback || <div/>}>
      <Component />
    </Suspense>
  )
};

export default Lazy;