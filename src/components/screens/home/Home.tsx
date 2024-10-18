"use client";

import { getRandomColor, initialGridElements } from "@/utils/contants";
import { FC, useState } from "react";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import SortableItem from "@/components/shared/SortableItem";

const HomeScreen: FC = () => {
  const [gridElements, setGridElements] = useState(initialGridElements);
  const [colors, setColors] = useState<string[]>([]);

  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor)
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;

    if (active.id !== over.id) {
      setGridElements((items) => {
        const oldIndex = items.findIndex((item) => item.id === active.id);
        const newIndex = items.findIndex((item) => item.id === over.id);
        const newOrder = arrayMove(items, oldIndex, newIndex);

        setColors(newOrder.map(() => getRandomColor()));

        return newOrder;
      });
    }
  };

  return (
    <section className="pt-4">
      <div className="container px-lg-5">
        <DndContext
          sensors={sensors}
          collisionDetection={closestCenter}
          onDragEnd={handleDragEnd}
        >
          <SortableContext
            items={gridElements}
            strategy={verticalListSortingStrategy}
          >
            <div className="row gx-lg-5">
              {gridElements.map((feature, index) => (
                <div key={feature.id} className="col-lg-6 col-xxl-4 mb-5">
                  <SortableItem
                    feature={feature}
                    color={colors[index] || "#0d6efd"}
                  />
                </div>
              ))}
            </div>
          </SortableContext>
        </DndContext>
      </div>
    </section>
  );
};

export default HomeScreen;
