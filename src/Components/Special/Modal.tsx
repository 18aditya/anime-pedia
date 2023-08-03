/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import { AiOutlineClose } from "react-icons/ai";

interface ModalModel {
  children: React.ReactNode;
  modalState: Boolean;
  setModalState: React.Dispatch<React.SetStateAction<Boolean>>;
}
const Modal = ({ children,modalState,setModalState }: ModalModel) => {
  
  return (
    <>
      <div
        css={css`
          display: ${modalState ? "flex" : "none"};
          position: absolute;
          opacity: 0.5;
          background-color: grey;
          min-width: 100vw;
          height: 1000000px;
        `}
        onClick={() => setModalState(false)}
      ></div>
      <div
        css={css`
          display: ${modalState ? "flex" : "none"};
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          background-color: white;
          min-width: 150px;
          min-height: 150px;
          padding: 14px;
          border-radius: 8px;
          flex-direction: column;
          gap: 7px;
          animation: ${slideInAnimation} 0.3s forwards;
        `}
      >
        <div
          css={css`
            width: 100%;
            display: flex;
            justify-content: end;
          `}
        >
          <AiOutlineClose onClick={() => setModalState(false)} />
        </div>
        {children}
      </div>
    </>
  );
};

const slideInAnimation = keyframes`
  from {
    transform: translate(-50%, -100%);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%);
    opacity: 1;
  }
`;

export default Modal;