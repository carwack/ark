import { Accordion, type UseAccordionProps, useAccordion } from '@ark-ui/solid/accordion'
import { ChevronDownIcon } from 'lucide-solid'
import { Index, createMemo, createSignal } from 'solid-js'

export const RootProvider = () => {
  const [value, setValue] = createSignal(['React'])
  const accordionProps = createMemo<UseAccordionProps>(() => ({
    multiple: true,
    value: value(),
    onValueChange: (e) => setValue(e.value),
  }))
  const accordion = useAccordion(accordionProps)

  return (
    <>
      <button onClick={() => accordion().setValue(['Vue'])}>Set to Vue</button>

      <Accordion.RootProvider value={accordion}>
        <Index each={['React', 'Solid', 'Vue']}>
          {(item) => (
            <Accordion.Item value={item()}>
              <Accordion.ItemTrigger>
                What is {item()}?
                <Accordion.ItemIndicator>
                  <ChevronDownIcon />
                </Accordion.ItemIndicator>
              </Accordion.ItemTrigger>
              <Accordion.ItemContent>
                {item()} is a JavaScript library for building user interfaces.
              </Accordion.ItemContent>
            </Accordion.Item>
          )}
        </Index>
      </Accordion.RootProvider>
    </>
  )
}
