import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'

interface LectureProps {
  name: string
  time: string
}

export function Lecture({ name, time }: LectureProps) {
  return (
    <Dialog>
      <DialogTrigger className="flex justify-between text-balance text-start flex-wrap w-full gap-2 bg-primary/20 rounded-sm p-1">
        <p className="font-bold">{name}</p>
        <p className="text-muted-foreground">{time}</p>
      </DialogTrigger>

      <DialogContent className="max-w-[350px] rounded-md">
        <DialogHeader className="space-y-4 items-center">
          {/* <Avatar className="size-32">
            <AvatarImage src={src} className="bg-cover" alt="@shadcn" />
            <AvatarFallback />
          </Avatar> */}
          <DialogTitle className="leading-7">{name}</DialogTitle>
          <DialogDescription>{time}</DialogDescription>
        </DialogHeader>

        {/* <p>{curriculum}</p> */}
      </DialogContent>
    </Dialog>
  )
}
