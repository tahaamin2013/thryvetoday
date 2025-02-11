import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { MessagesSquare, User } from 'lucide-react'

interface SupportCardProps {
  icon: "messages-square" | "user"
  title: string
  description: string
  buttonText: string
  onClick: () => void
}

export function SupportCard({
  icon,
  title,
  description,
  buttonText,
  onClick
}: SupportCardProps) {
  const Icon = icon === "messages-square" ? MessagesSquare : User

  return (
    <Card className="bg-background dark:bg-gray-950 flex flex-col w-full justify-between p-2 rounded-3xl border border-border">
      <CardHeader className="space-y-1">
        <Icon className="h-5 w-5 mb-1 text-primary" />
        <h2 className="text-2xl font-medium text-foreground">{title}</h2>
        <p className="text-muted-foreground w-64">{description}</p>
      </CardHeader>
      <CardContent>
        <Button
          onClick={onClick}
          variant="secondary"
          className="rounded-xl w-full hover:bg-secondary/80"
        >
          {buttonText}
        </Button>
      </CardContent>
    </Card>
  )
}
