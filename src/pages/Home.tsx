
import MainLayout from "../layouts/MainLayout";

export default function Home() {

  return (
   <MainLayout>
    <div className="row p-5">
      <h3>Welcome to mini blog with reactsync !</h3>
      <p>In this blog, we try to use "useChanel" to synchronize data between component</p>
      <i>
        <p>ReactSync - your frontend friend !

        Plug & Play: Just two components needed: and your child components.
Targeted Updates: Only components subscribed to a key update.
Declarative Sync: Components declare which state they sync with.
Lifecycle Safe: Auto-registration and cleanup on mount/unmount.
High DX: Zero-store, no boilerplate, no manual subscriptions.
Performance Ready: Designed for 1,000+ components with minimal overhead.
</p>
      </i>
      <b>Detail: https://www.npmjs.com/package/@bangcao2020/reactsync</b>
    </div>
   </MainLayout>
  )
}
