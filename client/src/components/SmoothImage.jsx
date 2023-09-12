import React, {useEffect, useState} from 'react';

const SmoothImage = function({className, src, index, onClick}) {
  const [mod, setMod] = useState('hidden');

  const styles = {
    visible: {
      visibility: 'visible',
      opacity: '1',
      transition: 'opacity 0.25s'
    },
    hidden: {
      visibility: 'hidden',
      opacity: '0',
      transition: 'visibility 0s 1s, opacity 1s linear'
    }
  };

  return (
    <img
      className={className}
      src={src}
      style={styles[mod]}
      index={index}
      onClick={onClick}
      onLoad={()=>{setMod('visible')}}
      loading='lazy'
      alt={src}
    />
  );
};



export default SmoothImage;