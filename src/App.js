import "./styles.css";
import { useState } from "react";
import { NhostClient } from "@nhost/nhost-js";

export default function App() {
  const [files, setFiles] = useState([]);
  const onChange = async (e) => {
    const files = e.target.files;

    const nhost = new NhostClient({
      backendUrl: "https://ilomfyseqqwhpqpspjrv.nhost.run"
    });

    const res = await nhost.storage.upload({ file: files[0] });
    console.log(res, "res");
  };
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <input multiple type="file" onChange={onChange} />
    </div>
  );
}
