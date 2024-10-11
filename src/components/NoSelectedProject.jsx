import PrimaryButton from "./re_usable components/PrimaryButton.jsx";
import SecondaryHeader from "./re_usable components/SecondaryHeader.jsx";

import logo from "/logo.png";

export default function NoSelectedProject({ handleClick, styling }) {
  return (
    <section className={`${styling} w-full`} id="main">
      <img src={logo} alt="a pen on a paper" className="w-32 h-32" />
      <SecondaryHeader>No Project Selected</SecondaryHeader>
      <p className="text-lg font-medium text-stone-600 opacity-50">
        Select a project or get started with a new one
      </p>
      <PrimaryButton marginTop="mt-4" onClick={handleClick}>
        Create new project
      </PrimaryButton>
    </section>
  );
}
