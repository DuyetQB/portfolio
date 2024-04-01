import Link from "next/link";
import Image from "next/image";
import React from "react";

type AvatarProps = {
  size?:'small' | 'middle'
}

export default function Avatar(props:AvatarProps) {
  const { size } = props;

  return (
    <div className={`${size ==="small" ? 'w-[36px] h-[36px]' : 'w-[64px] h-[64px]'}  relative rounded-full z-100 h-10 w-10 rounded-full bg-white/90 p-0.5 shadow-lg shadow-zinc-800/5 ring-1 ring-zinc-900/5 backdrop-blur dark:bg-zinc-800/90 dark:ring-white/10`}>
      <Link href="/" legacyBehavior>
        <a>
          <Image
            className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert rounded-full"
            src="/assets/images/photo-me.png"
            alt="image me"
            layout="fill"
            objectFit="cover"
            priority
          />
        </a>
      </Link>
    </div>
  );
}
