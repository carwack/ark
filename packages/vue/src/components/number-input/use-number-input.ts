import * as numberInput from '@zag-js/number-input'
import { type PropTypes, normalizeProps, useMachine } from '@zag-js/vue'
import { type ComputedRef, computed, useId } from 'vue'
import { DEFAULT_LOCALE, useEnvironmentContext, useLocaleContext } from '../../providers'
import type { EmitFn, Optional } from '../../types'
import { cleanProps } from '../../utils'
import { useFieldContext } from '../field'
import type { RootEmits } from './number-input.types'

export interface UseNumberInputProps extends Optional<Omit<numberInput.Props, 'dir' | 'getRootNode'>, 'id'> {
  /**
   * The v-model value of the number input
   */
  modelValue?: numberInput.Props['value']
}

export interface UseNumberInputReturn extends ComputedRef<numberInput.Api<PropTypes>> {}

export const useNumberInput = (props: UseNumberInputProps = {}, emit?: EmitFn<RootEmits>): UseNumberInputReturn => {
  const id = useId()
  const env = useEnvironmentContext()
  const locale = useLocaleContext(DEFAULT_LOCALE)
  const field = useFieldContext()

  const context = computed<numberInput.Props>(() => ({
    id,
    ids: {
      label: field?.value.ids.label,
      input: field?.value.ids.control,
    },
    disabled: field?.value.disabled,
    readOnly: field?.value.readOnly,
    required: field?.value.required,
    invalid: field?.value.invalid,
    dir: locale.value.dir,
    locale: locale.value.locale,
    value: props.modelValue,
    getRootNode: env?.value.getRootNode,
    ...cleanProps(props),
    onValueChange: (details) => {
      emit?.('valueChange', details)
      emit?.('update:modelValue', details.value)
      props.onValueChange?.(details)
    },
    onFocusChange: (details) => {
      emit?.('focusChange', details)
      props.onFocusChange?.(details)
    },
    onValueInvalid: (details) => {
      emit?.('valueInvalid', details)
      props.onValueInvalid?.(details)
    },
  }))

  const service = useMachine(numberInput.machine, context)
  return computed(() => numberInput.connect(service, normalizeProps))
}
