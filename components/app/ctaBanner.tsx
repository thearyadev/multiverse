import { ChevronRightIcon } from "@radix-ui/react-icons";
export function CtaBanner({ href }: { href: string }) {
  return (
    <div className="bg-yellow-500 py-4">
      <a
        href={href}
        className="text-white flex w-full justify-center items-center hover:underline"
      >
        <p className="text-lg text-white font-bold">Request a Free Evalution</p>

        <ChevronRightIcon className="h-6 w-6 text-white" />
      </a>
    </div>
  );
}
