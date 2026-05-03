import { useEffect, useRef, useState } from "react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";

export default function UseRef() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [value, setValue] = useState("");
  const prevValueRef = useRef<string>('')

  useEffect(() => {
    prevValueRef.current = value;
  })

  return (
    <div>
      <Input
        ref={inputRef}
        type="text"
        onChange={setValue}
        value={value}
      />
      <Button
        value="Фокус на инпут"
        onClick={() => inputRef.current?.focus()}
      />
      <p>Текущее значение: {value || "(пусто)"}</p>
      <p>Предыдущее: {prevValueRef.current || "(пусто)"}</p> {/* пока не понял как по простому убрать ошибку */}
    </div>
  );
}
