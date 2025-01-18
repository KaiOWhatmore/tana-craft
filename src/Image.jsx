import React, { useState } from "react";
import clsx from "clsx";

export const Image = ({ css, skeleton = true, src, alt, ...props }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isSkeleton, setIsSkeleton] = useState(skeleton);

  return (
    <div
      style={{
        position: "relative",
        inlineSize: "100%",
        overflow: "hidden",
      }}
      className={clsx({ skeleton: isSkeleton })}
    >
      {/* Skeleton Loader */}
      {isSkeleton && (
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "var(--gray-4)",
            backgroundImage: `linear-gradient(
              90deg,
              rgba(255, 255, 255, 0) 0%,
              rgba(255, 255, 255, 0.2) 20%,
              rgba(255, 255, 255, 0.5) 60%,
              rgba(255, 255, 255, 0)
            )`,
            animation: "shimmer 2s infinite",
          }}
        ></div>
      )}

      {/* Image */}
      <div
        style={{
          transition: "opacity 200ms ease",
          opacity: isLoaded ? 1 : 0,
          ...css,
        }}
        data-loaded={isLoaded}
        onTransitionEnd={(event) =>
          event.propertyName === "opacity" && setIsSkeleton(false)
        }
      >
        <img
          src={src}
          alt={alt}
          style={{
            display: "block",
            width: "100%",
            height: "auto",
          }}
          onLoad={() => setIsLoaded(true)}
          {...props}
        />
      </div>
    </div>
  );
};
