// Define selectors and styles
const selectors = {
  commandBar: "#OneUpCommandBar",
  chatPanel: "#chat-odsp-app > div > div > div.fui-FluentProvider.fui-FluentProvider1.fluentProvider_65d24f7f.___jdtuxv0.f19n0e5.fxugw4r.f1o700av.fk6fouc.fkhj508.figsok6.f1i3iumi > div.___gpfa810.f1whvlc6.f22iagw.fxldao9.f4d9j23.f122n59.f9u43aa",
  modalZone: "#ModalFocusTrapZone3",
  copilotContainer: "#SUITENAV_COPILOT_container"
};

const styles = {
  hidden: "none",
  modalBackground: "#FFFFFF"
};

// Utility function to safely hide an element
function hideElement(selector: string): void {
  const el = document.querySelector(selector) as HTMLElement | null;
  if (el) {
    el.style.display = styles.hidden;
  }
}

// Hide static elements immediately
hideElement(selectors.commandBar);
hideElement('img[alt="Copilot Studio logo"]');
hideElement('[aria-label="Close this banner"]');

// Hide elements based on exact text content
document.querySelectorAll<HTMLElement>('*').forEach(el => {
  if (el.textContent.trim() === 'Customized in Copilot Studio') {
    el.style.display = styles.hidden;
  }
});

// MutationObserver to handle dynamic elements
const observer = new MutationObserver(() => {
  const chatPanel = document.querySelector(selectors.chatPanel) as HTMLElement | null;
  if (chatPanel) {
    chatPanel.style.display = styles.hidden;
    observer.disconnect();
  }

  const copilotContainer = document.querySelector(selectors.copilotContainer) as HTMLElement | null;
  if (copilotContainer) {
    copilotContainer.style.display = styles.hidden;
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});

// Change modal background color
const modalZone = document.querySelector(selectors.modalZone) as HTMLElement | null;
if (modalZone) {
  modalZone.style.background = styles.modalBackground;
}