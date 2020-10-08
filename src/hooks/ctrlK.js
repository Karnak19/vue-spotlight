const { onMounted, onUnmounted } = require("vue");

/**
 *
 * @param {boolean} activeRef
 */
const ctrlK = (activeRef) => {
  onMounted(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "k" && e.ctrlKey) {
        e.preventDefault();
        activeRef.value = true;
      }
    });
  });

  onUnmounted(() => {
    window.addEventListener("keydown", (e) => {
      if (e.key === "k" && e.ctrlKey) {
        e.preventDefault();
        activeRef.value = true;
      }
    });
  });
};

export default ctrlK;
