import { forwardRef } from "react";

const Input = forwardRef(({ title, textArea = false, ...props }, ref) => {
  return (
    <p>
      <label
        htmlFor={title}
        className="block uppercase font-medium text-stone-700 text-lg mb-1"
      >
        {title}
      </label>
      {!textArea && (
        <input
          ref={ref}
          name={title}
          id={title}
          {...props}
          className="w-full bg-stone-300 rounded-sm border-b-2 border-stone-700 text-stone-900 p-1"
          required
        />
      )}
      {textArea && (
        <textarea
          ref={ref}
          id={title}
          name={title}
          className="w-full bg-stone-300 rounded-sm border-b-2 border-stone-700 text-stone-900 h-20 p-1"
          required
        ></textarea>
      )}
    </p>
  );
});

export default Input;
