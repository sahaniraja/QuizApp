const ErrorMessage = ({ children }) => {
  return (
    <div
      style={{
        width: "100%",
        padding: 10,
        textAlign: "center",
        textTransform: "capitalize",
        color: "white",
        backgroundColor: "orangered",
        borderRadius: 4
      }}
    >
      {children}
    </div>
  );
};
export default ErrorMessage;
