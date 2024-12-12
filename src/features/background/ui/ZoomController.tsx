"use client";

import { ControlButton } from "@/shared/components/ControlButton";
import { memo, useCallback, useEffect, useState } from "react";
import { useBackgroundStore } from "../hooks";

const scaleOptions = [2, 1.25, 1, 0.75, 0.5];

export const ZoomController = memo(function ZoomController() {
  const zoomScale = useBackgroundStore((state) => state.transform.zoomScale);
  const setTransform = useBackgroundStore((state) => state.setTransform);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [zoomScale]);

  const handleOptionClick = useCallback(
    (option: number) => {
      setTransform((prevTransform) => ({
        ...prevTransform,
        zoomScale: option,
      }));
      setIsOpen(false);
    },
    [setTransform]
  );

  return (
    <div
      className="relative text-black dark:text-white"
      data-testid="zoom-controller"
    >
      <ControlButton
        title="zoom scale"
        id="zoom-button"
        aria-expanded={isOpen}
        aria-haspopup="true"
        onClick={() => setIsOpen((prev) => !prev)}
        data-testid="zoom-button"
      >
        <span data-testid="zoom-scale">{Math.round(zoomScale * 100)}%</span>
      </ControlButton>
      {isOpen && (
        <div
          className="absolute -right-1.5 top-5 z-50 my-2"
          data-testid="zoom-options"
        >
          {scaleOptions.map((option) => (
            <div
              key={option}
              className="m-1 w-full cursor-pointer rounded-full border border-neutral-200 bg-white p-1.5 text-center text-xs hover:bg-neutral-50 dark:border-neutral-700 dark:bg-black dark:hover:bg-zinc-900"
              onClick={() => handleOptionClick(option)}
              data-testid="zoom-option"
            >
              {Math.round(option * 100)}%
            </div>
          ))}
        </div>
      )}
    </div>
  );
});
