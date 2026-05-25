import Image from "next/image";
import { images } from "@/lib/images";

interface Props {
  className?: string;
  spin?: "cw" | "ccw" | false;
}

export function SealBackdrop({ className = "", spin = false }: Props) {
  const spinClass = spin === "cw" ? "yantra-spin" : spin === "ccw" ? "yantra-spin-rev" : "";
  return (
    <Image
      src={images.sakYantSeal}
      alt=""
      aria-hidden
      width={1024}
      height={1024}
      className={`pointer-events-none select-none object-contain seal-watermark ${spinClass} ${className}`}
    />
  );
}
