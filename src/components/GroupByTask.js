// src/components/GroupByTask.js
import React, { useEffect } from "react";

function GroupByTask() {
  useEffect(() => {
    Array.prototype.groupBy = function (keySelector) {
      const result = {};
      for (let item of this) {
        const key = keySelector(item);
        if (!result[key]) {
          result[key] = [];
        }
        result[key].push(item);
      }
      return result;
    };

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const evenOdd = numbers.groupBy((x) => (x % 2 === 0 ? "Even" : "Odd"));
    const firstDigit = numbers.groupBy((x) => String(x)[0]);

    console.log("Even/Odd Grouping:", evenOdd);
    console.log("First Digit Grouping:", firstDigit);
  }, []);

  return (
    <div>
      <h2>GroupBy Task</h2>
      <p>Check your console for output of groupBy()</p>
    </div>
  );
}

export default GroupByTask;
