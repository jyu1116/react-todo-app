import { useRecoilValue } from "recoil";
import CreateToDo from "./CreateToDo";
import { toDoSelector, toDoState } from "./atoms";
import ToDo from "./ToDo";

function ToDoList() {
  // useRecoilValue : 값만 반환해주고 modifier 함수는 반환하지 않음
  const toDos = useRecoilValue(toDoState);

  // console.log(toDos);
  /*
    1) find to do based on id [2] (array안에 있는 object의 index를 찾는 방법만 알면 됨)
    2) 
  */

  const selectorOutput = useRecoilValue(toDoSelector);
  console.log(selectorOutput);

  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <CreateToDo />
      <ul>
        {toDos.map((toDo) => (
          <ToDo key={toDo.id} {...toDo} />
          //<ToDo text={toDo.text} category={toDo.category} id={toDo.id} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
