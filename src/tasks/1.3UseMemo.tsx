import { useMemo, useState } from "react";
import { Button } from "../components/Button";

function getSum(numbers: number[]): number {
  console.log("дорогая операция создана");
  return numbers.reduce((acc, n) => acc + n, 0);
}

function generateNumbers(count: number): number[] {
  return Array.from(
    { length: count },
    () => Math.floor(Math.random() * 100) + 1,
  );
}

export default function UseMemo() {
  const [count, setCount] = useState(0); // просто состояние не связанное с массивом чисел
  const [numbers, setNumbers] = useState(generateNumbers(5));

  const sum = useMemo(() => getSum(numbers), [numbers]);

  return (
    <div className="text-xl">
      <p>Сумма 5 случайных чисел: {sum}</p>
      <Button onClick={() => setNumbers(generateNumbers(5))} value="Взять другие числа" />
      <Button onClick={() => setCount(count + 1)} value={`count ${count}`} />
    </div>
  );
}
