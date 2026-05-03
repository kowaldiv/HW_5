import { useNavigate } from "react-router-dom";
import { Button } from "./Button";

const tasks = [
  {
    label: "1.1 useContext",
    link: "/1.1",
  },
  {
    label: "1.2 useCallBack",
    link: "/1.2",
  },
  {
    label: "1.3 useMemo",
    link: "/1.3",
  },
  {
    label: "1.4 useRef",
    link: "/1.4",
  },
  {
    label: "1.5 useReducer",
    link: "/1.5",
  },
  {
    label: "1.6 React.memo",
    link: "/1.6",
  },
  {
    label: "1.7 Бонус",
    link: "/1.7",
  },
  {
    label: "2.1 Bad Form",
    link: "/2.1",
  },
  {
    label: "2.2 RHF + Zod",
    link: "/2.2",
  },
  {
    label: "2.3 Formic + Yup",
    link: "/2.3",
  },
];

export function Header() {
  const navigate = useNavigate();
  
  return (
    <header className="shadow-[0px_4px_8px_0px_rgba(34,60,80,0.2)] p-4 flex gap-4 flex-wrap">
      {tasks.map(task => {
        return (
          <Button onClick={() => navigate(task.link)} value={task.label} />
        )
      })}
    </header>
  );
}
