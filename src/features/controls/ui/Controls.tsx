import { BoardController } from "./BoardController";
import { NameController } from "./NameController";
import { ZoomController } from "./ZoomController";

export function Controls() {
  return (
    <>
      <div className="fixed left-0 top-0 z-50 m-4 flex flex-row gap-1 rounded-2xl border border-neutral-200 bg-white py-2 pl-3 pr-4 text-xs drop-shadow-2xl dark:border-zinc-700 dark:bg-black">
        <BoardController />
        <NameController />
      </div>
      <div className="fixed right-0 top-0 z-50 m-4 flex flex-row gap-2 rounded-2xl border border-neutral-200 bg-white px-2 py-2 text-xs drop-shadow-2xl dark:border-zinc-700 dark:bg-black">
        <ZoomController />
      </div>
    </>
  );
}
