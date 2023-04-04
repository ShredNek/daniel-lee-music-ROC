import { useState, useEffect } from "react";
import axios from "axios";

export default function Guinea() {
  interface UserName {
    first: "";
    last: "";
  }

  interface AllUserInfo {
    name: UserName;
    picture: { thumbnail: "" };
  }

  let [randomInfoUserJSON, setRandomInfoUserJSON] = useState<any>();
  let [randomUserInfo, setRandomUserInfo] = useState<any>([]);
  let [counter, setCounter] = useState(0);

  const handleCounterClick = () => {
    setCounter(counter + 1);
  };

  const fetchRandomData = () => {
    axios.get("https://randomuser.me/api?page=${2}").then((res: any) => {
      setRandomInfoUserJSON(JSON.stringify(res.data.results, null, 2));
      setRandomUserInfo(res.data.results);
    });
  };

  const getUserName = (results: AllUserInfo) => {
    const {
      name: { first, last },
    } = results;
    return `${first} ${last}`;
  };

  useEffect(() => {
    fetchRandomData();
  }, []);

  console.log(typeof randomUserInfo);

  return (
    <div className="flex flex-col">
      <h1 className="m-auto">COUNTER</h1>
      <div className="m-auto flex flex-col">
        <button onClick={handleCounterClick} className="m-auto">
          Increase Counter
        </button>
        <h2 className="m-auto">{counter}</h2>
      </div>
      <h1 className="m-auto">Processed DATA</h1>
      {randomUserInfo.map((userInfo: any, idx: number) => (
        <div className="m-auto flex flex-col">
          <img alt="user" src={userInfo.picture.thumbnail}></img>
          <p id={idx.toString()}>{getUserName(userInfo)}</p>
        </div>
      ))}
      <h1 className="m-auto">RAW DATA</h1>
      <div className="m-auto flex flex-col">
        <pre className=" text-sm">{randomInfoUserJSON}</pre>
      </div>
    </div>
  );
}
