import Image from "next/image";

export function Hero({ src }: { src: string }) {
  return (
    <Image
      className="object-cover w-full h-3/6 md:h-[800px]"
      src={src}
      alt="Hero"
      width={1920}
      height={800}
    />
  );
}
