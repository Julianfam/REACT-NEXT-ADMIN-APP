import { useState } from "react";
const usePagination = (limit, currentOffset, total) => {
  const [offset, setOffset] = useState(currentOffset);

  const handleNext = () => {
    if (offset < total) {
      setOffset(offset + limit);
    }
  };
  const handlePrev = () => {
    if (offset > 0) {
      setOffset(offset - limit);
    }
  };
  
   const newOffset = offset;

  return (
     newOffset,
    handleNext,
    handlePrev
  )
}

export default usePagination;