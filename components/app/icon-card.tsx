import { LucideIcon } from 'lucide-react'
import Image from 'next/image'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

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
    <Card className="flex flex-col items-center text-center">
      <CardHeader className="relative w-full h-52 p-0 overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={title} 
          fill 
          style={{objectFit: 'cover'}}
          className="transition-transform duration-300 ease-in-out hover:scale-105 rounded-t-lg"
        />
      </CardHeader>
      <CardContent className="pt-6">
        <div className="rounded-full bg-primary/10 p-4 mb-4 inline-block">
          <Icon className="h-8 w-8 text-primary" />
        </div>
        <CardTitle className="text-xl mb-2">{title}</CardTitle>
        <CardDescription className="mb-4">{description}</CardDescription>
        <Button asChild>
          <a href={href}>{buttonText}</a>
        </Button>
      </CardContent>
    </Card>
  )
}


