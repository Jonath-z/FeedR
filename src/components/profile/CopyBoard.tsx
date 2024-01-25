import React, { useRef, useEffect } from "react";
import ClipboardJS from "clipboard";

interface CopyBoardProps {
  textToCopy: string;
}

const CopyBoard: React.FC<CopyBoardProps> = ({ textToCopy }) => {
  const copyButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (copyButtonRef.current) {
      const clipboard = new ClipboardJS(copyButtonRef.current, {
        text: function () {
          return textToCopy;
        },
      });

      clipboard.on("success", function (e) {
        console.info("Text copied:", e.text);
      });

      clipboard.on("error", function (e) {
        console.error("Unable to copy text");
      });

      return () => clipboard.destroy();
    }
  }, [textToCopy]);

  return (
    <div className="mr-2">
      <span className="bg-gray-200 py-1 px-2 text-gray-600">{textToCopy}</span>
      <button ref={copyButtonRef} className="bg-white-500 text-white p-2 rounded transition duration-500 ease-in-out hover:bg-blue-700">
        Copy
      </button>
    </div>
  );
};

export default CopyBoard;
