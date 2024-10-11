import { useRef } from "react";

import Modal from "./Modal.jsx";

import PrimaryButton from "./re_usable components/PrimaryButton.jsx";
import SecondaryButton from "./re_usable components/SecondaryButton.jsx";
import SecondaryHeader from "./re_usable components/SecondaryHeader.jsx";
import Input from "./re_usable components/Input.jsx";

export default function SelectProject({ styling, closeCreateProject, onAdd }) {
  const modal = useRef();

  const title = useRef();
  const description = useRef();
  const date = useRef();

  const handleSave = () => {
    const enteredTitle = title.current.value;
    const enteredDescription = description.current.value;
    const enteredDate = date.current.value;

    if (
      enteredTitle.trim() === "" ||
      enteredDescription.trim() === "" ||
      enteredDate.trim() === ""
    ) {
      modal.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDescription,
      date: enteredDate,
    });
  };

  return (
    <>
      <Modal ref={modal}>
        <SecondaryHeader>invalid inputs</SecondaryHeader>
      </Modal>
      <section className={`${styling} w-1/3`} id="select-a-project">
        <div className="w-full flex justify-end" id="button-group">
          <SecondaryButton
            hoverColor="hover:text-stone-500"
            onClick={() => {
              closeCreateProject();
            }}
          >
            cancel
          </SecondaryButton>
          <PrimaryButton
            textColor="text-stone-100"
            hoverColor="hover:text-stone-400"
            onClick={() => {
              handleSave();
              closeCreateProject();
            }}
          >
            Save
          </PrimaryButton>
        </div>
        <div className="w-full flex flex-col gap-3">
          <Input title="title" type="text" ref={title} />
          <Input title="description" textArea={true} ref={description} />
          <Input title="due date" type="date" ref={date} />
        </div>
      </section>
    </>
  );
}
