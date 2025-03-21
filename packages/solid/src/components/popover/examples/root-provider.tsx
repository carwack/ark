import { Popover, usePopover } from '@ark-ui/solid/popover'
import { ChevronRightIcon } from 'lucide-solid'

export const RootProvider = () => {
  const popover = usePopover()

  return (
    <>
      <button onClick={() => popover().setOpen(true)}>Popover is {popover().open ? 'open' : 'closed'}</button>

      <Popover.RootProvider value={popover}>
        <Popover.Trigger>
          Click Me
          <Popover.Indicator>
            <ChevronRightIcon />
          </Popover.Indicator>
        </Popover.Trigger>
        <Popover.Positioner>
          <Popover.Content>
            <Popover.Title>Title</Popover.Title>
            <Popover.Description>Description</Popover.Description>
          </Popover.Content>
        </Popover.Positioner>
      </Popover.RootProvider>
    </>
  )
}
