// TODO define missing components.

import type {ThemeOptions} from '@mui/material'

import {MuiAutocomplete} from './overrides/mui-autocomplete'
import {MuiCssBaseline} from './overrides/mui-baseline'
import {MuiButton} from './overrides/mui-button'
import {MuiButtonBase} from './overrides/mui-button-base'
import {MuiCheckbox} from './overrides/mui-checkbox'
import {MuiChip} from './overrides/mui-chip'
import {MuiContainer} from './overrides/mui-container'
import {MuiDialog} from './overrides/mui-dialog'
import {MuiDivider} from './overrides/mui-divider'
import {MuiFab} from './overrides/mui-fab'
import {MuiFilledInput} from './overrides/mui-filled-input'
import {MuiIconButton} from './overrides/mui-icon-button'
import {MuiInputBase} from './overrides/mui-input-base'
import {MuiInputLabel} from './overrides/mui-input-label'
import {MuiLinearProgress} from './overrides/mui-linear-progress'
import {MuiListItemIcon} from './overrides/mui-list-item-icon'
import {MuiMenuItem} from './overrides/mui-menu-item'
import {MuiOutlinedInput} from './overrides/mui-outlined-input'
import {MuiPaper} from './overrides/mui-paper'
import {MuiPopover} from './overrides/mui-popover'
import {MuiPopper} from './overrides/mui-popper'
import {MuiRadio} from './overrides/mui-radio'
import {MuiSelect} from './overrides/mui-select'
import {MuiSlider} from './overrides/mui-slider'
import {MuiTab} from './overrides/mui-tab'
import {MuiTableCell} from './overrides/mui-table-cell'
import {MuiTableRow} from './overrides/mui-table-row'
import {MuiTableSortLabel} from './overrides/mui-table-sort-label'
import {MuiToggleButton} from './overrides/mui-toggle-button'
import {muiPalette} from './palette'
import {muiShadows} from './shadows'
import {muiTypography} from './typography'

export const verusThemeOptions: ThemeOptions = {
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
  direction: 'ltr',
  palette: muiPalette,
  typography: muiTypography,
  shadows: muiShadows,
  components: {
    MuiContainer,
    MuiCssBaseline,
    MuiChip,
    MuiToggleButton,
    MuiButtonBase,
    MuiAutocomplete,
    MuiTableCell,
    MuiSlider,
    MuiTableRow,
    MuiDialog,
    MuiDivider,
    MuiButton,
    MuiCheckbox,
    MuiFab,
    MuiFilledInput,
    MuiIconButton,
    MuiInputBase,
    MuiInputLabel,
    MuiMenuItem,
    MuiLinearProgress,
    MuiListItemIcon,
    MuiOutlinedInput,
    MuiTab,
    MuiTableSortLabel,
    MuiSelect,
    MuiPopover,
    MuiPopper,
    MuiPaper,
    MuiRadio,
    // MuiDateRangeCalendar: {
    //   styleOverrides: {
    //     monthContainer: {
    //       '&:not(:last-of-type)': {
    //         borderRight: `1px solid ${primaryColors[400]}`,
    //       },
    //     },
    //   },
    // },
    // MuiDateRangePickerDay: {
    //   styleOverrides: {
    //     rangeIntervalDayHighlight: {
    //       backgroundColor: primaryColors[500],
    //     },
    //     hiddenDayFiller: {
    //       background: 'transparent',
    //     },
    //     day: {
    //       '&.Mui-selected': {
    //         backgroundColor: secondaryColors[200],
    //       },
    //     },
    //   },
    // },
    // MuiDayCalendar: {
    //   styleOverrides: {
    //     weekDayLabel: {
    //       color: primaryColors[200],
    //     },
    //   },
    // },
    // MuiPickersArrowSwitcher: {
    //   styleOverrides: {
    //     root: {
    //       '& .MuiTypography-root.MuiTypography-subtitle1': {
    //         fontWeight: 400,
    //         letterSpacing: '0.15px',
    //       },
    //     },
    //     button: {
    //       color: primaryColors[50],
    //     },
    //   },
    // }
  },
}
