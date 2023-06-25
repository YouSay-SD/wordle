/* eslint-disable no-case-declarations */
/* eslint-disable no-undef */
import { SlotProps, StatusProps } from '@/components/atoms/Slot/Slot.interface'
import { types } from './types'
import { STATUS } from '@/constants/status'

export const initialState = {
  slots: []
}

export const gameReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.VALIDATE_SLOTS:
      const slotsValidated: SlotProps[] = state.slots.map((slot: SlotProps):SlotProps => {
        const isClose = action.payload.wordMaped.find((letter: string) => letter === slot.value)
        const isSuccess = action.payload.wordMaped[slot.position - 1] === slot.value
        let status = STATUS.FILLED
        if (isClose) status = STATUS.CLOSE
        if (isSuccess) status = STATUS.SUCCESS

        return {
          ...slot,
          status: slot.status === STATUS.EMPTY ? STATUS.EMPTY : status as StatusProps
        }
      })

      return slotsValidated

    case types.ADD_SLOT:
      const slotsUpdated: SlotProps[] = state.slots.map((slot: SlotProps):SlotProps => {
        return slot.index === action.payload.indexPosition
          ? {
              ...slot,
              value: action.payload.key,
              status: STATUS.FILLED as StatusProps
            }
          : { ...slot }
      })
      return {
        ...state,
        slots: [...slotsUpdated]
      }

    case types.REMOVE_SLOT:
      const slotsRemoved = state.slots.map((slot: SlotProps) => {
        const indexValidation = (action.payload.indexPosition - 1)

        return slot.index === indexValidation
          ? {
              ...slot,
              value: '',
              status: STATUS.EMPTY as StatusProps
            }
          : { ...slot }
      })
      return {
        ...state,
        slots: [...slotsRemoved]
      }

    default:
      return state
  }
}
