export default function RootLoading() {
  return (
    <div
      role="status"
      aria-live="polite"
      aria-label="Loading..."
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#FFF8E7]/95"
    >
      {/* Simple Clean Circular Loading Spinner */}
      <div className="h-11 w-11 rounded-full border-[3.5px] border-amber-200 border-t-[#D89B18] animate-spin" />

      {/* Simple Text */}
      <p className="mt-4 text-sm sm:text-base font-medium text-stone-700 tracking-wide">
        Loading...
      </p>
    </div>
  );
}
