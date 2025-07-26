import NextImage from "next/image";

const Image = ({
  src,
  alt,
  w,
  h,
  aspectRatio,
  style,
  ml,
  mr,
  noLazy = false,
  className,
}: {
  src: string;
  alt: string;
  w?: number | string;
  h?: number | string;
  aspectRatio?: number;
  style?: any;
  ml?: number | string;
  mr?: number | string;
  noLazy?: boolean;
  className?: string;
}) => {
  return (
    <div
      style={{
        ...style,
        position: "relative",
        width: w,
        height: h,
        aspectRatio: aspectRatio,
        marginLeft: ml,
        marginRight: mr,
        overflow: "hidden",
      }}
    >
      <NextImage
        src={src}
        alt={alt}
        fill
        className={className}
        objectFit="cover"
        loading={noLazy ? "eager" : "lazy"}
      />
    </div>
  );
};

export default Image;
