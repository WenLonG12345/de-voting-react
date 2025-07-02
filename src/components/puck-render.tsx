import type { Data } from '@measured/puck'
import { Render } from '@measured/puck'
import { puckConfig } from '../../puck.config';

export function PuckRender({ data }: { data: Data }) {
  return <Render config={puckConfig} data={data} />
}
