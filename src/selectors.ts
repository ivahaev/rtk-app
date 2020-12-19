import { Store } from './types'

export const getCheckboxState = (name: string) => (state: Store) => !!state.checkboxes[name]
