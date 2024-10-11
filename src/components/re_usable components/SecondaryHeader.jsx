export default function SecondaryHeader({
  customFontSize = "text-2xl",
  children,
  ...props
}) {
  return (
    <h2 className={`${customFontSize} font-bold text-stone-600`} {...props}>
      {children}
    </h2>
  );
}
