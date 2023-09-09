import Image from "next/image";

type Props = {
  src: string;
  width?: string | number;
  height?: string | number;
  priority?: boolean;
  borderRadius?: number | string;
  alt: string;
  className?: string;
};

const ImageMain = ({
  className,
  src,
  height,
  width,
  priority,
  borderRadius,
  alt,
}: Props) => {
  return (
    <div
      className={className ? className : ""}
      style={{
        height,
        width,
        position: "relative",
        borderRadius,
        overflow: "hidden",
      }}
    >
      <Image src={src} alt={alt} priority={priority} fill sizes="width:100%" />
    </div>
  );
};

export { ImageMain };
