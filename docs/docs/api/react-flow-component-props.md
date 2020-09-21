---
id: react-flow-component-props
title: React Flow Component Prop Types
sidebar_label: Prop Types
---

### Basic Props
- `elements`: array of [nodes](#nodes) and [edges](#edges) *(required)*
- `style`: css properties
- `className`: additional class name

### Flow View
- `minZoom`: default: `0.5`
- `maxZoom`: default: `2`
- `defaultZoom`: default: `1`
- `defaultPosition`: default: `[0, 0]`
- `snapToGrid`: default: `false`
- `snapGrid`: [x, y] array - default: `[16, 16]`
- `onlyRenderVisibleNodes`: default: `true`
- `translateExtent`: [default `[[-∞, -∞], [+∞, +∞]]`](https://github.com/d3/d3-zoom#zoom_translateExtent)

### Event Handlers
- `onElementClick(event, element)`: called when user clicks node or edge
- `onElementsRemove(elements)`: called when user removes node or edge
- `onNodeDragStart(event, node)`: node drag start
- `onNodeDragStop(event, node)`: node drag stop
- `onNodeMouseEnter(event, node)`: node mouse enter
- `onNodeMouseMove(event, node)`: node mouse move
- `onNodeMouseLeave(event, node)`: node mouse leave
- `onNodeContextMenu(event, node)`: node context menu
- `onConnect({ source, target })`: called when user connects two nodes
- `onConnectStart(event, { nodeId, handleType })`: called when user starts to drag connection line
- `onConnectStop(event)`: called when user stops to drag connection line
- `onConnectEnd(event)`: called after user stops or connects nodes
- `onLoad(reactFlowInstance)`: called after flow is initialized
- `onMove(flowTransform)`: called when user is panning or zooming
- `onMoveStart(flowTransform)`: called when user starts panning or zooming
- `onMoveEnd(flowTransform)`: called when user ends panning or zooming
- `onSelectionChange(elements)`: called when user selects one or multiple elements
- `onSelectionDragStart(event, nodes)`: called when user starts to drag a selection
- `onSelectionDrag(event, nodes)`: called when user drags a selection
- `onSelectionDragStop(event, nodes)`: called when user stops to drag a selection
- `onSelectionContextMenu(event, nodes)`: called when user does a right-click on a selection
- `onPaneClick(event)`: called when user clicks directly on the canvas
- `onPaneContextMenu(event)`: called when user does a right-click on the canvas
- `onPaneScroll(event)`: called when user scrolls pane (only works when `zoomOnScroll` is set to `false)

### Interaction
- `nodesDraggable`: default: `true`. This applies to all nodes. You can also change the behavior of a specific node with the `draggable` node option
- `nodesConnectable`: default: `true`. This applies to all nodes. You can also change the behavior of a specific node with the `connectable` node option
- `elementsSelectable`: default: `true`. This applies to all elements. You can also change the behavior of a specific node with the `selectable` node option
- `zoomOnScroll`: default: `true`
- `zoomOnDoubleClick`: default: `true`
- `selectNodesOnDrag`: default: `true`
- `paneMoveable`: default: `true` - If set to `false`, panning and zooming is disabled

### Element Customization
- `nodeTypes`: object with [node types](#node-types--custom-nodes)
- `edgeTypes`: object with [edge types](#edge-types--custom-edges)
- `arrowHeadColor`: default: `#bbb`

### Connection Line Options
- `connectionLineType`: connection line type = `default` (bezier), `straight`, `step`, `smoothstep`
- `connectionLineStyle`: connection style as svg attributes
- `connectionLineComponent`: [custom connection line component](/example/src/CustomConnectionLine/index.js)

### Keys
- `deleteKeyCode`: default: `8` (delete)
- `selectionKeyCode`: default: `16` (shift)
