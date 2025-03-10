import type { ItemProps } from '@zag-js/radio-group'
import { createContext } from '../../utils/create-context'

export const [SegmentGroupItemPropsProvider, useSegmentGroupItemPropsContext] = createContext<ItemProps>({
  hookName: 'useSegmentGroupItemPropsContext',
  providerName: '<SegmentGroupItemPropsProvider />',
})
