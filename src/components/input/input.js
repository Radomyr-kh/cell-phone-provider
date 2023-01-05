import React, {useState, useRef, useEffect} from 'react';
import './input.css';

const Input = () => {
  const [operatorName, setOperatorName] = useState('');
  const [isComplete, setisComplete] = useState(false);

  const inputReference = useRef();
  const inputTwoReference = useRef();

  useEffect(() => {
    inputReference.current.focus();
  }, []);

  const inputHandler = (e) => {
    let codeValue = e.target.value.replaceAll(/\D/gi, '');
    console.log(codeValue);

    // let inputCode = inputReference.current.value;
    let inputCode = inputReference.current.value.replaceAll(/\D/gi, '');
    // let inputCodeTwo = inputTwoReference.current.value;
    let inputCodeTwo = inputTwoReference.current.value.replaceAll(/\D/gi, '');

    console.log(inputCode);

    if (inputCode.length === 2) {
      switch (+inputCode) {
        case 67:
        case 68:
        case 96:
        case 97:
        case 98:
          setOperatorName('Kyivstar');
          break;
        case 50:
        case 66:
        case 95:
        case 99:
          setOperatorName('Vodafone');
          break;
        case 63:
        case 73:
        case 93:
          setOperatorName('Lifecell');
          break;
        case 91:
          setOperatorName('3mob');
          break;
        case 92:
          setOperatorName('People.net');
          break;
        case 89:
        case 94:
          setOperatorName('intertelecom');
          break;
        default:
          setOperatorName('Unknown');
      }

      inputTwoReference.current.focus();
      inputCodeTwo.length === 7 ? setisComplete(true) : setisComplete(false);
    } else {
      setOperatorName('');
      setisComplete(false);
    }
  };

  return (
    <div>
      <span data-testid='operator-name'>{operatorName}</span>
      <span>+38 0</span>
      <input
        type='text'
        data-testid='operator-input'
        //   pattern='[0-9]+'
        maxLength={2}
        ref={inputReference}
        onInput={inputHandler}
      />
      <span data-testid='check-icon'>{isComplete ? ' ✔️ ' : ' - '}</span>
      <input
        type='text'
        data-testid='phone-input'
        //   pattern='[0-9]+'
        maxLength={7}
        ref={inputTwoReference}
        onInput={inputHandler}
      />
    </div>
  );
};

export default Input;
