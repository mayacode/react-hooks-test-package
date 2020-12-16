const { useState } = require("react");

function useOpen(initialState = false) {
  const [opened, setOpened] = useState(!!initialState);

  function setOpen() {
    setOpened(true);
  }

  function setClose() {
    setOpened(false);
  }

  function toggleOpen() {
    setOpened(!opened);
  }

  return {
    opened,
    setOpen,
    setClose,
    toggleOpen,
  }
}

module.exports = {
  useOpen,
}
