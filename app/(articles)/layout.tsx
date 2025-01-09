import { CtaBanner } from "@/components/app/ctaBanner";
import Link from "next/link";
export default function ArticleLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <div className="py-8 px-4 max-w-4xl mx-auto">{children}</div>
      <p className="py-5 text-center text-sm">
        More Questions?{" "}
        <Link
          className="hover:underline italic"
          href="mailto:info@multiverseimmigration.ca"
        >
          Contact Us
        </Link>
      </p>
      <CtaBanner href="/evaluation" />
    </>
  );
}
