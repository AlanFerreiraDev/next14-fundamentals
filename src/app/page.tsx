import { Suspense } from 'react'

import { GitHubProfile, LongWaitComponent } from './components'

export default async function Home() {
  return (
    <div>
      <h1>Home</h1>
      <Suspense fallback={<p>Carregando LongWaitComponent</p>}>
        <LongWaitComponent />
      </Suspense>

      <Suspense fallback={<p>Carregando GitHubProfile</p>}>
        <GitHubProfile />
      </Suspense>
    </div>
  )
}
