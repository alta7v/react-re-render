import { useState, useCallback, useMemo } from "react";
import { ChildArea } from "./ChildArea";
import "./styles.css";

export default function App() {
  console.log("app");
  const [text, setText] = useState("");
  const [open, setOpen] = useState(false);

  const onChangeText = (e) => setText(e.target.value);

  const onClickOpen = () => setOpen(!open); // 無名クラスの再生成

  const onClickClose = useCallback(() => setOpen(false), [setOpen]); // 無名クラスの再生成

  const temp = useMemo(() => 1 + 33, []);
  console.log(temp);

  return (
    <div className="App">
      <input value={text} onChange={onChangeText} />
      <br />
      <br />
      <button onClick={onClickOpen}>表示</button>
      <ChildArea open={open} onClickClose={onClickClose} />
    </div>
  );
}

/*
更新タイミング
stateが更新されたコンポーネントは再レンダリングされる
propsが更新されたコンポーネントは再レンダリングされる
再レンダリングされたコンポーネント配下の子要素は再レンダリングされる
*/

/*
useState 変数 関数 の 定義
memo コンポーネントを

useEffect 変数を
useCallBack 関数を

useMemo   変数を

*/
