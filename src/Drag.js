// App.js
import React from 'react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemTypes = {
  BOX: 'box',
};

const DraggableBox = ({ id, text }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.BOX,
    item: { id },
    collect: (monitor) => ({
      isDragging: !!monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      style={{
        opacity: isDragging ? 0.5 : 1,
        padding: '8px',
        margin: '4px',
        backgroundColor: 'lightblue',
        cursor: 'move',
      }}
    >
      {text}
    </div>
  );
};

const DropArea = ({ onDrop }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemTypes.BOX,
    drop: (item) => onDrop(item),
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      style={{
        height: '200px',
        width: '100%',
        margin: '16px 0',
        backgroundColor: isOver ? 'lightgreen' : 'lightgray',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {isOver ? 'Release to drop' : 'Drag a box here'}
    </div>
  );
};

const App = () => {
  const handleDrop = (item) => {
    alert(`Dropped box with id: ${item.id}`);
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div style={{ padding: '20px' }}>
        <h3>Drag and Drop Example</h3>
        <DraggableBox id={1} text="Draggable Box 1" />
        <DraggableBox id={2} text="Draggable Box 2" />
        <DropArea onDrop={handleDrop} />
      </div>
    </DndProvider>
  );
};

export default App;
