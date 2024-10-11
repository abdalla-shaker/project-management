import { forwardRef, useRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom";
import PrimaryButton from "./re_usable components/PrimaryButton";

const Modal = forwardRef(function Modal({ children }, ref) {
  const dialogModal = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialogModal.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialogModal}
      className="backdrop:bg-stone-900/90 rounded-md shadow-md p-4"
    >
      {children}
      <form method="dialog" className="mt-4 text-center">
        <PrimaryButton>Cancel</PrimaryButton>
      </form>
    </dialog>,
    document.getElementById("modal-root")
  );
});

export default Modal;
