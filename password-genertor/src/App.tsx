import React, { useCallback, useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import './App.css';

const App: React.FC = () => {
  const [isNumber, setIsNumber] = useState(false);
  const [isChar, setIsChar] = useState(false);
  const [isLowerCase, setIsLowerCase] = useState(false);
  const [isUpperCase, setIsUpperCase] = useState(false);
  const [passLength, setPassLength] = useState<number>(8);
  const [password, setPassword] = useState('');
  const passwordRef = useRef<HTMLInputElement>(null);

  const copyPasswordHandle = () => {
    if (passwordRef?.current) {
      window.navigator.clipboard.writeText(password)
        .then(() => {
          toast.success('Password Copied Successfully');
          passwordRef?.current?.select();
        }).catch(err => {
          toast.error(err);
        });
    }
  };

  const passwordGenerator = useCallback(() => {
    let charSet = "";
    let numbers = "0123456789";
    let chars = "!@#$%^&*()*+,-./";
    let lowerCase = "abcdefghijklmnopqrstuvwxyz";
    let upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    if (isNumber) charSet += numbers;
    if (isChar) charSet += chars;
    if (isLowerCase) charSet += lowerCase;
    if (isUpperCase) charSet += upperCase;

    if (!isNumber && !isChar && !isLowerCase && !isUpperCase) {
      charSet = numbers + chars + lowerCase + upperCase;
    }

    if (charSet.length === 0) {
      charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    }

    let pass = '';
    for (let i = 0; i < passLength; i++) {
      const randomIndex = Math.floor(Math.random() * charSet.length);
      pass += charSet.charAt(randomIndex);
    }

    setPassword(pass);
  }, [isNumber, isChar, isLowerCase, isUpperCase, passLength]);



  useEffect(() => {
    passwordGenerator();
  }, [isNumber, isChar, isLowerCase, isUpperCase, passLength]);

  return (
    <div className="container">
      <div className="password-input">
        <input type="text" placeholder="Password" className="inputField"
          readOnly value={password} ref={passwordRef} />
        <button className="copyButton" onClick={copyPasswordHandle}>Copy</button>
      </div>
      <div className="input-container">
        <div className="check-box">
          <input
            type="range"
            id="length"
            min={8}
            max={30}
            value={passLength}
            onChange={(e) => setPassLength(Number(e.target.value))}
          />
          <label htmlFor="length">{passLength} Digit</label>
        </div>
        <div className="check-box">
          <input
            type="checkbox"
            className="check"
            id="numbers"
            checked={isNumber}
            onChange={() => setIsNumber(prev => !prev)}
          />
          <label htmlFor="numbers">Numbers</label>
        </div>
        <div className="check-box">
          <input
            type="checkbox"
            className="check"
            id="chars"
            checked={isChar}
            onChange={() => setIsChar(prev => !prev)}
          />
          <label htmlFor="chars">Contain Symbols</label>
        </div>
        <div className="check-box">
          <input
            type="checkbox"
            className="check"
            id="lower"
            checked={isLowerCase}
            onChange={() => setIsLowerCase(prev => !prev)}
          />
          <label htmlFor="lower">Container Lower Case</label>
        </div>
        <div className="check-box">
          <input
            type="checkbox"
            className="check"
            id="uppercase"
            checked={isUpperCase}
            onChange={() => setIsUpperCase(prev => !prev)}
          />
          <label htmlFor="uppercase">Uppercase</label>
        </div>
      </div>
    </div>
  );
};

export default App;
