import ReactDOM from "react-dom/client";

import { Dialog } from "@components/dialog/dialog";

interface Dialog {
  title: string;
  message?: string;
}
export function useDialog() {
  return (props: Dialog) => dialog(props);
}

function dialog({ title, message }: Dialog): Promise<boolean> {
  const id = "portal-dialog";

  let shadow = document.getElementById(id);

  if (!shadow) {
    shadow = document.createElement("div");
    shadow.setAttribute("id", id);

    document.body.appendChild(shadow);
  }

  return new Promise((resolve) => {
    const handleResolver = (value: boolean) => {
      resolve(value);
      document.getElementById(id)?.remove();
    };

    const root = ReactDOM.createRoot(shadow as Element);
    root.render(
      <Dialog title={title} message={message} resolver={handleResolver} />,
    );
  });
}
