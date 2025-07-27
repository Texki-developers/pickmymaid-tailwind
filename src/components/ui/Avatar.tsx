// components/Avatar.tsx
import Image from 'next/image';
import clsx from 'clsx';

type AvatarProps = {
  src?: string;
  alt?: string;
  size?: number; // size in pixels (default: 40)
  className?: string;
};

export default function Avatar({ src, alt = "User Avatar", size = 40, className }: AvatarProps) {
  return (
    <div
      className={clsx(
        'rounded-full overflow-hidden bg-gray-200 flex items-center justify-center',
        className
      )}
      style={{ width: size, height: size }}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          width={size}
          height={size}
          className="object-cover w-full h-full"
        />
      ) : (
        <span className="text-sm text-gray-500">{alt?.[0] ?? '?'}</span>
      )}
    </div>
  );
}
