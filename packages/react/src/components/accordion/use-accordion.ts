import * as accordion from '@zag-js/accordion'
import { type PropTypes, normalizeProps, useMachine } from '@zag-js/react'
import { useId } from 'react'
import { useEnvironmentContext, useLocaleContext } from '../../providers'
import type { Optional } from '../../types'
import { useEvent } from '../../utils/use-event'

export interface UseAccordionProps extends Optional<Omit<accordion.Context, 'dir' | 'getRootNode'>, 'id'> {
  /**
   * The initial value of the accordion when it is first rendered.
   * Use when you do not need to control the state of the accordion.
   */
  defaultValue?: accordion.Context['value']
}

export interface UseAccordionReturn extends accordion.Api<PropTypes> {}

export const useAccordion = (props: UseAccordionProps = {}): UseAccordionReturn => {
  const { getRootNode } = useEnvironmentContext()
  const { dir } = useLocaleContext()

  const initialContext: accordion.Context = {
    id: useId(),
    dir,
    getRootNode,
    value: props.defaultValue,
    ...props,
  }

  const context: accordion.Context = {
    ...initialContext,
    value: props.value,
    onFocusChange: useEvent(props.onFocusChange),
    onValueChange: useEvent(props.onValueChange),
  }

  const [state, send] = useMachine(accordion.machine(initialContext), { context })
  return accordion.connect(state, send, normalizeProps)
}
