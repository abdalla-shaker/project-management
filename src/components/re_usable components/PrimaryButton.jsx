export default function PrimaryButton({
  additionalClasses = "",
  textColor = "text-stone-400",
  hoverColor = "hover:text-stone-200",
  marginTop = "",
  children,
  ...props
}) {
  return (
    <button
      className={`bg-stone-700 py-3 px-5 rounded-md font-medium transition-colors ${additionalClasses} ${textColor} ${hoverColor} ${marginTop}`}
      {...props}
    >
      {children}
    </button>
  );
}
