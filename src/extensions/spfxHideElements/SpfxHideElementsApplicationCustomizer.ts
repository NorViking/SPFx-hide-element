// Hide the OneUpCommandBar
const commandBar = document.querySelector<HTMLElement>("#OneUpCommandBar");
if (commandBar) {
  commandBar.style.display = "none";
}

// Hide the chat panel
const chatPanel = document.querySelector<HTMLElement>(
  "#chat-odsp-app > div > div > div.fui-FluentProvider.fui-FluentProvider1.fluentProvider_65d24f7f.___jdtuxv0.f19n0e5.fxugw4r.f1o700av.fk6fouc.fkhj508.figsok6.f1i3iumi > div.___gpfa810.f1whvlc6.f22iagw.fxldao9.f4d9j23.f122n59.f9u43aa"
);
if (chatPanel) {
  chatPanel.style.display = "none";
}

// Change background color of modal
const modalZone = document.querySelector<HTMLElement>("#ModalFocusTrapZone3");
if (modalZone) {
  modalZone.style.background = "#FFFFFF";
}
