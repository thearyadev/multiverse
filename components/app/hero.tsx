import Image from "next/image";
import { BackgroundBeams } from "../ui/background-beams";

export function Hero({ src }: { src: string }) {
  return (
    <div className=" w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center ">
      <Image
        className="object-cover w-full h-3/6 md:h-[800px]"
        src={src}
        alt="Hero"
        width={1920}
        height={800}
      />
      <BackgroundBeams />
    </div>
  );
}


