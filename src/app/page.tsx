import { Terminal } from "xterm";


export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div><p>heading</p></div>
      <div id="terminal"></div>
    </main>
  );
}
