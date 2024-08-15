import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'

interface SpeakerProps {
  name: string
  description: string
  src: string
  curriculum: string
}
export function Speaker({ name, description, src, curriculum }: SpeakerProps) {
  return (
    <Dialog>
      <DialogTrigger className="flex flex-col items-center space-y-3">
        <Avatar className="size-32">
          <AvatarImage src={src} className="bg-cover" alt="@shadcn" />
          <AvatarFallback />
        </Avatar>
        <p>{name}</p>
      </DialogTrigger>

      <DialogContent className="max-w-[350px] rounded-md">
        <DialogHeader className="space-y-4 items-center">
          <Avatar className="size-32">
            <AvatarImage src={src} className="bg-cover" alt="@shadcn" />
            <AvatarFallback />
          </Avatar>
          <div className="text-center">
            <DialogTitle>{name}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </div>
        </DialogHeader>

        <p>{curriculum}</p>
      </DialogContent>
    </Dialog>
  )
}
