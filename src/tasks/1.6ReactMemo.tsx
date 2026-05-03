import React, { useCallback, useState } from "react";
import { Button } from "../components/Button";

const MemoChild = React.memo(function Child({
  onClick,
}: {
  onClick: () => void;
}) {
  console.log("MemoChild rendered");
  return <Button onClick={onClick}>MemoChild</Button>;
});

export default function ReactMemo() {
  const [count, setCount] = useState(0);

  const useCallBackFunc = useCallback(() => {
    console.log("Клик с useCallBack");
  }, []);

  const defaultFunc = () => {
    console.log("Клик с без useCallBack");
  };

  return (
    <div>
      <div>
        <p>Перерендеров: {count}</p>
        <Button onClick={() => setCount(count + 1)} value="Перерендерить родителя" />
      </div>
      <MemoChild onClick={useCallBackFunc} />
      <MemoChild onClick={defaultFunc} />
    </div>
  );
}
