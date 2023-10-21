import React from "react";
import "./App.css";

function App() {
  const [draggedElement, setDraggedElement] =
    React.useState<HTMLDivElement | null>(null);

  const onDragStart = (e: React.DragEvent<HTMLDivElement>) => {
    e.dataTransfer.effectAllowed = "move";
    const target = e.target as HTMLDivElement;
    target.classList.add("dragging");
    setDraggedElement(target);
  };

  const onDragEnter = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const onDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const target = e.target as HTMLDivElement;

    if (target.classList.contains("board-column")) {
      target.append(draggedElement as HTMLDivElement);
    }
  };

  const onDragEnd = (e: React.DragEvent<HTMLDivElement>) => {
    const target = e.target as HTMLDivElement;
    target.classList.remove("dragging");
  };

  return (
    <>
      <div className="flex flex-auto space-x-4 h-full">
        <div
          data-column-title="To Do"
          onDrop={onDrop}
          onDragEnter={onDragEnter}
          onDragOver={onDragOver}
          className="board-column h-full w-1/2 border-dashed border-2 border-violet-300 rounded-2xl  items-center flex py-4 px-4 flex-col gap-y-5 bg-neutral-950"
        >
          <div
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            className="board-item w-full h-48 bg-indigo-400 flex items-center justify-center transition duration-150 ease-in-out rounded select-none  "
          >
            Item 1
          </div>
          <div
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            className="board-item w-full h-48 bg-rose-300 flex items-center justify-center transition duration-150 ease-in-out rounded  select-none"
          >
            Item 2
          </div>
          <div
            draggable
            onDragStart={onDragStart}
            onDragEnd={onDragEnd}
            className="board-item w-full h-48 bg-emerald-300 flex items-center justify-center transition duration-150 ease-in-out rounded select-none "
          >
            Item 3
          </div>
        </div>
        <div
          data-column-title="In progress"
          onDrop={onDrop}
          onDragEnter={onDragEnter}
          onDragOver={onDragOver}
          className="board-column h-full w-1/2 border-dashed border-2 border-violet-300 rounded-2xl  items-center flex py-4 px-4 flex-col gap-y-5 bg-neutral-950"
        ></div>
        <div
          data-column-title="Done"
          onDrop={onDrop}
          onDragEnter={onDragEnter}
          onDragOver={onDragOver}
          className="board-column h-full w-1/2 border-dashed border-2 border-violet-300 rounded-2xl  items-center flex py-4 px-4 flex-col gap-y-5 bg-neutral-950"
        ></div>
      </div>
    </>
  );
}

export default App;
