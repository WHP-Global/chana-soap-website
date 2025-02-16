export const BoldText = ({ text = "" }) => {
  const parts = text?.split(" – ") || [""];
  return (
    <p className="mt-1">
      <strong>{parts[0]}</strong> {parts[1] && "-"} {parts[1] || ""}
    </p>
  );
};
