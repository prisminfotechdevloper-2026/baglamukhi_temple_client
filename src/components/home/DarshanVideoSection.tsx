import DarshanVideoInteractiveLeaf from "./DarshanVideoInteractiveLeaf";
import DarshanVideoHeaderLeaf from "./DarshanVideoHeaderLeaf";
import DarshanVideoChannelLeaf from "./DarshanVideoChannelLeaf";

export default function DarshanVideoSection() {
  return (
    <section
      id="darshan-video-reels"
      aria-label="माँ बगलामुखी दिव्य हवन एवं दर्शन वीडियो"
      className="relative w-full border-b border-[#EBD8B4] bg-gradient-to-b from-[#FFFDF8] via-[#FFF9EE] to-[#FFF4E0] py-12 sm:py-16"
    >
      {/* soft amber glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/4 h-96 w-96 -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* ============ BILINGUAL SECTION HEADER ============ */}
        <DarshanVideoHeaderLeaf />

        {/* ============ TABS + PLAYER + PLAYLIST ============ */}
        <DarshanVideoInteractiveLeaf />

        {/* ============ BILINGUAL CHANNEL BAR ============ */}
        <DarshanVideoChannelLeaf />
      </div>
    </section>
  );
}