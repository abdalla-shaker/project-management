export default function SecondaryButton({
  additionalClasses = "",
  textColor = "text-stone-700",
  hoverColor = "hover:text-stone-200",
  bgHoverColor = "",
  fontWeight = "font-medium",
  children,
  ...props
}) {
  return (
    <button
      className={`py-3 px-5 rounded-md ${fontWeight} transition-all	 ${additionalClasses} ${textColor} ${hoverColor} ${bgHoverColor}`}
      {...props}
    >
      {children}
    </button>
  );
}
