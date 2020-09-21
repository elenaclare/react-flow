import React, { useState, useEffect } from 'react';
import ReactFlow, { removeElements, addEdge, Background } from 'react-flow-renderer';

import ConnectionLine from './ConnectionLine';

const initialElements = [{ id: '1', type: 'input', data: { label: 'Node 1' }, position: { x: 250, y: 5 } }];

const ConnectionLineFlow = () => {
  const [elements, setElements] = useState(initialElements);
  const onElementsRemove = (elementsToRemove) => setElements((els) => removeElements(elementsToRemove, els));
  const onConnect = (params) => setElements((els) => addEdge(params, els));

  useEffect(() => {
    return () => setElements([]);
  }, []);

  return (
    <ReactFlow
      elements={elements}
      connectionLineComponent={ConnectionLine}
      onElementsRemove={onElementsRemove}
      onConnect={onConnect}
    >
      <Background variant="lines" />
    </ReactFlow>
  );
};

export default ConnectionLineFlow;
