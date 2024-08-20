import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'
import { ScrollArea } from './ui/scroll-area'

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

      <DialogContent className="max-w-[350px] rounded-md h-4/5">
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
        <ScrollArea>
          <p>{curriculum}</p>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  )
}
