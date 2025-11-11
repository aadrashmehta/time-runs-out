// export default function ResultModal({result, targetTime, ref}) {
//   return (
//     <dialog className="result-modal" ref={ref}>
//       <h2>You {result}</h2>
//       <p>The target time was <strong>{targetTime} seconds.</strong></p>
//       <p>You stopped the time with <strong>X seconds left.</strong></p>
//       <form method="dialog">
//         <button>Close</button>
//       </form>
//     </dialog>
//   );
// }

// Used forwards refs to allow parent components to control the dialog
// Used for older React versions that do not support passing refs as regular props

import { useRef, forwardRef, useImperativeHandle } from "react";
import { createPortal } from "react-dom"; // For rendering outside main app DOM tree

const ResultModal = forwardRef(function ResultModal({targetTime, remainingTime, onReset }, ref) {
  const dialog = useRef();
  const formattedRemainingTime = (remainingTime / 1000).toFixed(2);
  const userLost = remainingTime <= 0;
  const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      }
    };
  });

  // Render the modal into the 'modal' div outside the main app content
  return createPortal(
    <dialog className="result-modal" ref={dialog} onClose={onReset}>
      {userLost && <h2>You Lost</h2> }
      {!userLost && <h2>Your Score {score}</h2>}
      <p>The target time was <strong>{targetTime} seconds.</strong></p>
      <p>You stopped the time with <strong>{formattedRemainingTime} seconds left.</strong></p>
      <form method="dialog">
        <button onClick={onReset}>Close</button>
      </form>
    </dialog>,
    document.getElementById('modal')
  );
});

export default ResultModal;