import React from "react";
import { FixedSizeList as List } from "react-window";
import ListItem from "./ListItem";

const VirtualizedList = ({ data, selectedIds, toggleSelect, outerRef }) => {
  const Row = ({ index, style }) => (
    <div style={{ ...style, width: "100%" }}>
      <ListItem
        item={data[index]}
        isSelected={selectedIds.includes(data[index].id)}
        toggleSelect={toggleSelect}
      />
    </div>
  );

  return (
    <List
      height={600}
      itemCount={data.length}
      itemSize={125}
      width="100%"
      outerRef={outerRef}
      overscanCount={5}
    >
      {Row}
    </List>
  );
};

export default VirtualizedList;