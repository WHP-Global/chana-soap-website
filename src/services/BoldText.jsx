export const BoldText = ({ text = "" }) => {
  const parts = text?.split(" – ") || [""];
  return (
    <p className="mt-1">
      <strong>{parts[0]}</strong> {parts[1] && "-"} {parts[1] || ""}
    </p>
  );
};

export const BoldTextBySlash = ({ text = "", isHaveList }) => {
  const parts = text?.split(" – ") || [""];
  const formatText = (str) => {
    return str
      .split(/(\/.*?\/)/g)
      .map((part, index) =>
        part.startsWith("/") && part.endsWith("/") ? (
          <strong key={index}>{part.slice(1, -1)}</strong>
        ) : (
          part
        )
      );
  };

  return (
    <>
      {isHaveList ? (
        <>
          {formatText(parts[0])} {parts[1] && "-"}{" "}
          {parts[1] ? formatText(parts[1]) : ""}
        </>
      ) : (
        <div>
          {formatText(parts[0])} {parts[1] && "-"}{" "}
          {parts[1] ? formatText(parts[1]) : ""}
        </div>
      )}
    </>
  );
};
