import React, { useState, useRef, useEffect } from "react";
import SkeletonWrapper from "@riyazurrazak/react-skeleton";

function Image({ src, alt, className, style }) {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [reload, setReload] = useState(0);
  const img = useRef(null);

  useEffect(() => {
    if (img.current.complete === true) setImageLoaded(true);
  }, []);

  return (
    <>
      <SkeletonWrapper
        isLoading={!imageLoaded}
        width="100%"
        height="200px"
        wave
      >
        <div></div>
      </SkeletonWrapper>
      <img
        key={reload}
        ref={img}
        onLoad={() => setImageLoaded(true)}
        onError={() => setReload(Math.random())}
        alt={alt}
        style={{ display: imageLoaded ? "block" : "none", ...style }}
        className={className}
        src={src}
      />
    </>
  );
}

export default React.memo(Image);
