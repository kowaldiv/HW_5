import { memo, useCallback, useState } from "react";
import { Button } from "../components/Button";

const Child = memo(({ onButtonClick }: { onButtonClick: () => void }) => {
  console.log("Child rendered");
  return (
    <div>
      <p>Child</p>
      <Button value="Увеличить число" onClick={onButtonClick} />
    </div>
  );
});

export default function UseCallBack() {
  const [count, setCount] = useState(0);

  // Мемоизированный вариант
  const handleMemo = useCallback(() => {
    setCount((c) => c + 1);
  }, []);

  // Немемоизированный (просто функция)
  const handlePlain = () => {
    setCount((c) => c + 1);
  };

  return (
    <div>
      <p>{count}</p>
      <Child onButtonClick={handleMemo} />
      <Child onButtonClick={handlePlain} />
    </div>
  );
}
