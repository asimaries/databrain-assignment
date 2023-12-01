export function FormWrapper({ title, children }: FormWrapperProps) {
  return (
    <>
      <h2
        className="text-center mb-2 text-2xl font-bold"

        // style={{ textAlign: "center", margin: 0, marginBottom: "2rem" }}
      >
        {title}
      </h2>
      <div className="flex flex-col">{children}</div>
    </>
  );
}
