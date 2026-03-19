"use client";
import { Chart } from "chart.js/auto";
import { useEffect, useRef } from "react";

export default function ChartCanvas() {
  const canvasEl = useRef(null);

  useEffect(() => {
    if (canvasEl.current !== null) {
      const ctx = canvasEl.current;

      const myTest = new Chart(ctx, {
        type: "bar",
        data: {
          labels: ["폐차", "국내매매", "해외수출"],
          datasets: [
            {
              data: [200, 800, 1000],
              backgroundColor: [
                "rgb(108, 117, 125)",
                "rgb(108, 117, 125)",
                "rgb(249 66 57)",
              ], //배경색상
            },
          ],
        },
        options: {
          plugins: {
            legend: {
              display: false,
            },
          },
        },
      });

      return function cleanup() {
        myTest.destroy();
      };
    }
  });

  return (
    <>
      <canvas ref={canvasEl} />
    </>
  );
}
