import { Checkbox } from '@ark-ui/solid/checkbox'
import { CheckIcon, MinusIcon } from 'lucide-solid'

export const Indeterminate = () => (
  <Checkbox.Root defaultChecked="indeterminate">
    <Checkbox.Label>Checkbox</Checkbox.Label>
    <Checkbox.Control>
      <Checkbox.Indicator>
        <CheckIcon />
      </Checkbox.Indicator>
      <Checkbox.Indicator indeterminate>
        <MinusIcon />
      </Checkbox.Indicator>
    </Checkbox.Control>
    <Checkbox.HiddenInput />
  </Checkbox.Root>
)
