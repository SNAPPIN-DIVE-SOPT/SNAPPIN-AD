export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <div className="bg-black-1 mx-auto h-dvh max-w-[45rem] shadow-[0_0_10px_4px_rgba(0,0,0,0.04)]">
      <div id="app-scroll" className="scrollbar-hide h-full overflow-y-auto">
        {children}
      </div>
    </div>
  );
}
