import { LucideIcon } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

interface IconCardProps {
  icon: LucideIcon
  title: string
  description: string
  buttonText: string
  href: string
  imageSrc: string
}

export function IconCard({ icon: Icon, title, description, buttonText, href, imageSrc }: IconCardProps) {
  return (
    <Link href={href}>
      <Card className="flex flex-col items-center text-center group hover:shadow-lg transition-shadow duration-300 ease-in-out rounded-t-lg">
        <CardHeader className="relative w-full h-52 p-0 overflow-hidden rounded-t-lg">
          <Image
            src={imageSrc}
            alt={title}
            fill
            style={{ objectFit: 'cover' }}
            className="transition-transform duration-300 ease-in-out group-hover:scale-105 rounded-t-lg"
          />
        </CardHeader>
        <CardContent className="pt-6">
          <div className="rounded-full bg-primary/10 p-4 mb-4 inline-block">
            <Icon className="h-8 w-8 text-yellow-700" />
          </div>
          <CardTitle className="text-xl mb-2">{title}</CardTitle>
          <CardDescription className="mb-4">{description}</CardDescription>
          <Button>
            {buttonText}
          </Button>
        </CardContent>
      </Card>
    </Link>
  )
}


