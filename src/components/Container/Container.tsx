import { ReactNode } from "react";

export default function Container({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  return (
    <div
      style={{
        marginLeft: 128,
        marginTop: 64,
        position: "absolute",
        width: "calc(100% - 128px)",
        padding: "16px ",
      }}
    >
      {children}
    </div>
  );
}
