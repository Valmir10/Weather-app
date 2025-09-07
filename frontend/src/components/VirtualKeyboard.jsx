import React, { useEffect, useRef } from "react";
import Keyboard from "simple-keyboard";
import "simple-keyboard/build/css/index.css";

const VirtualKeyboard = ({ value = "", onChange, onEnter }) => {
  const keyboardRef = useRef(null);

  useEffect(() => {
    if (!keyboardRef.current) {
      keyboardRef.current = new Keyboard({
        onChange: (input) => {
          onChange && onChange(input);
        },
        onKeyPress: (button) => {
          if (button === "{enter}") {
            const currentInput = keyboardRef.current.getInput();
            onEnter && onEnter(currentInput);
          }
        },
        layout: {
          default: [
            "1 2 3 4 5 6 7 8 9 0",
            "q w e r t y u i o p",
            "a s d f g h j k l",
            "z x c v b n m",
            "{space} {backspace} {enter}",
          ],
        },
      });

      keyboardRef.current.setInput(value);
    }

    return () => {
      if (keyboardRef.current) {
        keyboardRef.current.destroy();
        keyboardRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    if (keyboardRef.current && value !== keyboardRef.current.getInput()) {
      keyboardRef.current.setInput(value);
    }
  }, [value]);

  return (
    <div
      className="virtual-keyboard-container"
      data-testid="keyboard-container"
    >
      <div className="simple-keyboard"></div>
    </div>
  );
};

export default VirtualKeyboard;
