import { useSetRecoilState } from "recoil";
import { IToDo, toDoState } from "./atoms";

function ToDo({ text, category, id }: IToDo) {
  const setToDos = useSetRecoilState(toDoState);
  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    // console.log("i wanna to " + event.currentTarget.name);
    const {
      currentTarget: { name },
    } = event;
    setToDos((oldToDos) => {
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id);
      const oldToDo = oldToDos[targetIndex];
      const newToDo = { text, id, category: name as any };
      /* category는 "TO_DO" "DOING" "DONE" 중 하나여야 하는데,
        newToDo의 category는 그냥 string 이라서 타입스트립트 경고 뜸
        당장 문제를 회피하기 위해서 as any를 쓰나, button의 name을 가져오면
        이런 문제가 발생하기때문에 니꼬쌤은 이전 방식(인자 전달 onClick 함수)을 선호하심
      */

      //   console.log(oldToDo, newToDo);
      // console.log("replace the todo in the index ",targetIndex,"with",newToDo);

      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ];
    });
  };

  return (
    <li>
      <span>{text}</span>
      {category !== "DOING" && (
        <button name="DOING" onClick={onClick}>
          Doing
        </button>
      )}
      {category !== "TO_DO" && (
        <button name="TO_DO" onClick={onClick}>
          To Do
        </button>
      )}
      {category !== "DONE" && (
        <button name="DONE" onClick={onClick}>
          Done
        </button>
      )}
    </li>
  );
}

export default ToDo;
