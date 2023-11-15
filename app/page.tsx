import ControlPanel from "./ControlPanel";
import View from "./View";

export default function Home() {
  return (
    <main className="flex w-screen h-screen items-center justify-between overflow-hidden">
      <ControlPanel />
      <View />
    </main>
  )
}
