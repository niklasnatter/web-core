import Grid from '@mui/material/Grid'
import InputAdornment from '@mui/material/InputAdornment'
import SearchIcon from '@/public/images/common/search.svg'
import type { ReactElement } from 'react'
import TextField from '@mui/material/TextField'
import SvgIcon from '@mui/material/SvgIcon'

import PageHeader from '@/components/common/PageHeader'

type Props = {
  searchQuery: string
  onSearchQueryChange: (searchQuery: string) => void
}

const SafeAppsHeader = ({ searchQuery, onSearchQueryChange }: Props): ReactElement => {
  return (
    <PageHeader
      title="Safe Apps"
      subtitle="Explore endless possibilities to manage your assets"
      action={
        <Grid container sx={{ pb: 2 }}>
          <Grid item xs={12} sm={12} md={6} xl={4.5}>
            <TextField
              placeholder="Search"
              variant="filled"
              hiddenLabel
              value={searchQuery}
              onChange={(e) => {
                onSearchQueryChange(e.target.value)
              }}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SvgIcon component={SearchIcon} inheritViewBox color="border" />
                  </InputAdornment>
                ),
                disableUnderline: true,
              }}
              fullWidth
              size="small"
            />
          </Grid>
        </Grid>
      }
    />
  )
}

export { SafeAppsHeader }
