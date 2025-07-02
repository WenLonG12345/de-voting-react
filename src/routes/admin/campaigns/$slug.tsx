import { createFileRoute, useNavigate } from '@tanstack/react-router'
import { IconArrowLeft } from '@tabler/icons-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Main } from '@/components/layout/main'
import CampaignBrandingTab from '@/features/campaigns/tabs/CampaignBrandingTab'
import CampaignConfigTab from '@/features/campaigns/tabs/CampaignConfigTab'
import CampaignInfoTab from '@/features/campaigns/tabs/CampaignInfoTab'
import CampaignLayoutTab from '@/features/campaigns/tabs/CampaignLayoutTab'
import CampaignRulesTab from '@/features/campaigns/tabs/CampaignRulesTab'
import { Button } from '@/components/ui/button'

export const Route = createFileRoute('/admin/campaigns/$slug')({
  component: RouteComponent,
})

function RouteComponent() {
  const { slug } = Route.useParams()
  const navigate = useNavigate()

  return (
    <Main>
      <div className='flex items-center justify-between'>
        <h1 className='flex items-center gap-2 text-2xl font-bold tracking-tight'>
          <IconArrowLeft
            onClick={() => navigate({ to: '/admin/campaigns' })}
            className='cursor-pointer'
          />
          {slug}
        </h1>

        <Button>Submit</Button>
      </div>

      <Tabs defaultValue='branding' className='mt-3 w-full'>
        <TabsList>
          <TabsTrigger value='branding'>Branding</TabsTrigger>
          <TabsTrigger value='info'>Info</TabsTrigger>
          <TabsTrigger value='config'>Config</TabsTrigger>
          <TabsTrigger value='rules'>Rules</TabsTrigger>
          <TabsTrigger value='layout'>Layout Editor</TabsTrigger>
        </TabsList>

        <TabsContent value='branding'>
          <CampaignBrandingTab />
        </TabsContent>
        <TabsContent value='info'>
          <CampaignInfoTab />
        </TabsContent>
        <TabsContent value='config'>
          <CampaignConfigTab />
        </TabsContent>
        <TabsContent value='rules'>
          <CampaignRulesTab />
        </TabsContent>
        <TabsContent value='layout'>
          <CampaignLayoutTab />
        </TabsContent>
      </Tabs>
    </Main>
  )
}
