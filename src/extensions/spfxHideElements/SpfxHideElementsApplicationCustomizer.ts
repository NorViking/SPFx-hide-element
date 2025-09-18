// Define selectors and styles as variables
const selectors = {
  commandBar: "#OneUpCommandBar",
  chatPanel:
    "#chat-odsp-app > div > div > div.fui-FluentProvider.fui-FluentProvider1.fluentProvider_65d24f7f.___jdtuxv0.f19n0e5.fxugw4r.f1o700av.fk6fouc.fkhj508.figsok6.f1i3iumi > div.___gpfa810.f1whvlc6.f22iagw.fxldao9.f4d9j23.f122n59.f9u43aa",
  modalZone: "#ModalFocusTrapZone3"
};

const styles = {
  hidden: "none",
  modalBackground: "#FFFFFF"
};

// Hide the OneUpCommandBar
const commandBar = document.querySelector<HTMLElement>(selectors.commandBar);
if (commandBar) {
  commandBar.style.display = styles.hidden;
}

// Hide the chat panel with MutationObserver
const observer = new MutationObserver(() => {
  const chatPanel = document.querySelector<HTMLElement>(selectors.chatPanel);
  if (chatPanel) {
    chatPanel.style.display = styles.hidden;
    observer.disconnect();
  }
});
observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Change background color of modal
const modalZone = document.querySelector<HTMLElement>(selectors.modalZone);
if (modalZone) {
  modalZone.style.background = styles.modalBackground;
}
