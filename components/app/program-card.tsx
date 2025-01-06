import {
  Card,
  CardContent,
} from "@/components/ui/card";
import Image from "next/image";

type ProgramCardProps = {
  programName: string;
  programDiscription: string;
  programImageSrc: string;
  programLink: string;
};

export function ProgramCard(props: ProgramCardProps) {
  return (
    <Card className="border-none shadow-none rounded-md max-w-[500px]"> 
      <CardContent className="p-0">
        <Image
          src={props.programImageSrc}
          alt={props.programName}
          width={300}
          height={300}
          className="object-cover rounded-md w-full "
        />
      </CardContent>
      <div className="p-2 pt-3">
        <h2 className="text-lg font-semibold">{props.programName}</h2>
        <p className="text-sm text-gray-500 break-words">{props.programDiscription}</p> 
      </div>
    </Card>
  );
}
