import { FC, useState } from "react";
import { useSortable } from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

interface SortableItemProps {
  feature: {
    id: number;
    icon: string;
    title: string;
    text: string;
  };
  color: string;
}

const SortableItem: FC<SortableItemProps> = ({ feature, color }) => {
  const {
    attributes,
    listeners,
    setNodeRef,
    transform,
    transition,
    isDragging,
  } = useSortable({ id: feature.id });

  const [isGrabbed, setIsGrabbed] = useState(false);

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  const handleMouseDown = () => {
    setIsGrabbed(true);
  };

  const handleMouseUp = () => {
    setIsGrabbed(false);
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      className={
        isDragging
          ? "cursor-grabbing"
          : isGrabbed
          ? "cursor-grab"
          : "cursor-pointer"
      }
    >
      <div className="card bg-light border-0 h-100">
        <div
          className="feature rounded-3 mb-4 mt-n4 mx-auto"
          style={{ backgroundColor: color, padding: "1rem" }}
        >
          <i className={`bi ${feature.icon}`} style={{ color: "#fff" }}></i>
        </div>
        <div className="card-body text-center p-4 p-lg-5 pt-0 pt-lg-0">
          <h2 className="fs-4 fw-bold">{feature.title}</h2>
          <p className="mb-0">{feature.text}</p>
        </div>
      </div>
    </div>
  );
};

export default SortableItem;
