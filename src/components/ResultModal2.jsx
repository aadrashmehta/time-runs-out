// Used forwards refs to allow parent components to control the dialog
// Used for older React versions that do not support passing refs as regular props

import { forwardRef } from "react";
 
const ResultModal = forwardRef(function ResultModal({result, targetTime }, ref) {
  return (
    <dialog className="result-modal" ref={ref}>
      <h2>You {result}</h2>
      <p>The target time was <strong>{targetTime} seconds.</strong></p>
      <p>You stopped the time with <strong>X seconds left.</strong></p>
      <form method="dialog">
        <button>Close</button>
      </form>
    </dialog>
  );
});

export default ResultModal;