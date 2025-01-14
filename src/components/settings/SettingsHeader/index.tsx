import type { ReactElement } from 'react'

import NavTabs from '@/components/common/NavTabs'
import PageHeader from '@/components/common/PageHeader'
import { settingsNavItems } from '@/components/sidebar/SidebarNavigation/config'

const SettingsHeader = (): ReactElement => {
  return (
    <PageHeader
      title="Settings"
      subtitle="Customize and manage your Safe"
      action={<NavTabs tabs={settingsNavItems} />}
    />
  )
}

export default SettingsHeader
