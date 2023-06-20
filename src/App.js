// import "./styles.css";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/bootstrap.css";

export default function App() {
  const [phone, setPhone] = useState("");
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <PhoneInput
        country={"eg"}
        enableSearch={true}
        value={phone}
        onChange={(phone) => setPhone(phone)}
      />
    </div>
  );
}
