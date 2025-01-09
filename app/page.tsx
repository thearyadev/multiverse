import { CtaBanner } from "@/components/app/ctaBanner";
import { Hero } from "@/components/app/hero";
import { IconCard } from "@/components/app/icon-card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Link from "next/link";
import {
  Briefcase,
  Book,
  Store,
  ArchiveRestore,
  Users,
  ArrowRightIcon,
} from "lucide-react";

const pathways = [
  {
    name: "Work Permit",
    description:
      "Obtain expert guidance on the application process and requirements to secure your work permit efficiently.",
    imageSrc: "/pathways/work.jpg",
    href: "/work",
    icon: Briefcase,
  },
  {
    name: "Study Permit",
    description:
      "Receive tailored support to meet the necessary criteria for obtaining a study permit and pursuing your educational aspirations.",
    imageSrc: "/pathways/study.jpg",
    href: "/study",
    icon: Book,
  },
  {
    name: "Business Immigration",
    description:
      "Explore strategic consulting services for entrepreneurs looking to establish or expand their business internationally.",
    imageSrc: "/pathways/business.jpeg",
    href: "/business",
    icon: Store,
  },
  {
    name: "Start-Up Visa",
    description:
      "Get specialized assistance in applying for a Start-Up Visa to launch an innovative business in Canada or other destinations.",
    imageSrc: "/pathways/start-up.jpg",
    href: "/startup",
    icon: ArchiveRestore,
  },
  {
    name: "Family Sponsorship",
    description:
      "Understand the process and requirements for sponsoring family members to join you in the country, ensuring family reunification.",
    imageSrc: "/pathways/family.jpg",
    href: "/family",
    icon: Users,
  },
  {
    name: "Express Entry",
    description:
      "Learn about the Express Entry system and how to maximize your chances of receiving an invitation to apply for permanent residency.",
    imageSrc: "/pathways/express.jpg",
    href: "/express",
    icon: ArrowRightIcon,
  },
];
export default function Index() {
  return (
    <>
      <Hero src="/hero.jpeg" />
      <CtaBanner href="/evaluation" />

      <div className="py-12">
        <h1 className="text-4xl lg:text-6xl font-thin text-center">
          Immigration Pathways
        </h1>
        <div className=" py-8 flex justify-center">
          <hr className=" border-gray-300 w-10/12" />
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-14 px-5">
          {pathways.map((pathway) => (
            <IconCard
              key={pathway.name}
              icon={pathway.icon}
              title={pathway.name}
              description={pathway.description}
              buttonText="Learn More"
              href={pathway.href}
              imageSrc={pathway.imageSrc}
            />
          ))}
        </div>
      </div>

      <div className=" py-8 flex justify-center">
        <hr className=" border-gray-300 w-10/12" />
      </div>

      <div className="py-12 flex justify-center">
        <div className="w-5/6 md:w-3/4 lg:w-1/2 xl:1-1/3 2xl:w-1/3">
          <h2 className="text-2xl font-semibold text-center">
            Frequently Asked Questions
          </h2>
          <Accordion type="multiple">
            <AccordionItem value="item-1">
              <AccordionTrigger>
                What are the immigration programs can I apply for?
              </AccordionTrigger>
              <AccordionContent>
                You may be able to immigrate to Canada under several programs.
                They may be broadly categorized under Federal Programs and
                Provincial Nominee Programs. Under the Federal Express Entry
                Pathway, you can immigrate under the Federal Skilled Worker,
                Federal Skilled Trade & Canadian Experience Class. You may also
                immigrate as a student on a Study Permit or as a worker on a
                Work Permit, Caregiver Pilot Program, Self-Employed and Start-up
                Visa Program. In addition to the Federal Programs, you may also
                qualify under the Provincial Nominees Programs, which vary from
                province to province.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                How long does it take to process my application?
              </AccordionTrigger>
              <AccordionContent>
                Processing time depends on several factors like the application
                type, country of application as well as how the application was
                done, i.e., online or paper. Visit{" "}
                <a
                  className="text-blue-500 underline"
                  target="_blank"
                  href="https://ircc.canada.ca/english/information/fees/fees.asp"
                >
                  ircc.canada.ca
                </a>{" "}
                for more information.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>What are processing fees?</AccordionTrigger>
              <AccordionContent>
                Most applications include processing fees. Exact processing fees
                may vary depending on the type of the application, among other
                factors. Visit{" "}
                <a
                  className="text-blue-500 underline"
                  target="_blank"
                  href="https://www.canada.ca/en/immigration-refugees-citizenship/services/application/check-processing-times.html"
                >
                  canada.ca
                </a>{" "}
                for more information.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                How can I hire a foreign worker?
              </AccordionTrigger>
              <AccordionContent>
                Canadian employers can hire foreign workers to fill temporary
                jobs when qualified Canadians are not available under The
                Temporary Foreign Worker (TFW) Program. This program is
                regulated through the Immigration and Refugee Protection Act and
                the Immigration and Refugee Protection Regulations and is
                administered in partnership with Immigration, Refugees and
                Citizenship Canada (IRCC) and the Canada Border Services Agency
                (CBSA). Learn more{" "}
                <a href="/employers" className="text-blue-500 underline">
                  here
                </a>
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <p className="pt-5 text-center text-sm">
            More Questions?{" "}
            <Link
              className="hover:underline italic"
              href="mailto:info@multiverseimmigration.ca"
            >
              Contact Us
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

// <ProgramCard
//   programName="Work Permit"
//   programDiscription="Navigate the complexities of obtaining a work permit with our comprehensive support and resources."
//   programImageSrc="/vacation.png"
//   programLink="/work"
// />
// <ProgramCard
//   programName="Study Permit"
//   programDiscription="Personalized assistance for securing study permits, helping you achieve your educational dreams."
//   programImageSrc="/vacation.png"
//   programLink="/study"
// />
// <ProgramCard
//   programName="Business Immigration"
//   programDiscription="Consulting for businesses owners looking to expand their operations internationally."
//   programImageSrc="/vacation.png"
//   programLink="/business"
// />
// <ProgramCard
//   programName="Work Permit"
//   programDiscription="Navigate the complexities of obtaining a work permit with our comprehensive support and resources."
//   programImageSrc="/vacation.png"
//   programLink="/work"
// />
// <ProgramCard
//   programName="Study Permit"
//   programDiscription="Personalized assistance for securing study permits, helping you achieve your educational dreams."
//   programImageSrc="/vacation.png"
//   programLink="/study"
// />
// <ProgramCard
//   programName="Business Immigration"
//   programDiscription="Consulting for businesses owners looking to expand their operations internationally."
//   programImageSrc="/vacation.png"
//   programLink="/business"
// />
