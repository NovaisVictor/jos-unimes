import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from './ui/dialog'

interface LectureProps {
  name: string
  time: string
  palestrante: string
}

export function Lecture({ name, time, palestrante }: LectureProps) {
  return (
    <Dialog>
      <DialogTrigger className="flex justify-between text-balance text-start flex-wrap w-full gap-2 bg-primary/10 rounded-sm p-3">
        <p className="font-bold">{name}</p>
        <p className="text-muted-foreground">{time}</p>
      </DialogTrigger>

      <DialogContent className="max-w-[350px] rounded-md">
        <DialogHeader className="space-y-4 items-center">
          <DialogTitle className="leading-7">{name}</DialogTitle>
        </DialogHeader>
        <p>
          palestrante: <span className="font-bold">{palestrante}</span>
        </p>
        <DialogFooter>ás {time}</DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
