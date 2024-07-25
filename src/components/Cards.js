import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const initialItems = [
  "Interview preparation with JavaScript 2.0",
  "Aptitude - Averages, Mixtures & Allegation",
  "Aptitude - Simple & Compound Interest",
  "Aptitude - Partnership",
  "Aptitude - Time & Work",
];

const Cards = () => {
  const [items, setItems] = useState(initialItems);

  const handleOnDragEnd = (result) => {
    if (!result.destination) return;

    const reorderedItems = Array.from(items);
    const [removed] = reorderedItems.splice(result.source.index, 1);
    reorderedItems.splice(result.destination.index, 1, removed);

    setItems(reorderedItems);
  };

  return (
    <div className="bg-blue-400 min-h-screen flex flex-col items-center justify-center">
      <h1 className="text-6xl text-white mb-8">Chai aur Code</h1>
      <div className="bg-white p-8 rounded shadow-lg w-full max-w-md">
        <h1 className="font-bold mb-4">Manage Bundle</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <Droppable droppableId="cards">
            {(provided) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                {items.map((item, index) => (
                  <Draggable key={item} draggableId={item} index={index}>
                    {(provided) => (
                      <div
                        className="bg-gray-300 p-4 mb-2 rounded shadow"
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                      >
                        {item}
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default Cards;
