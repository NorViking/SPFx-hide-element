const style = document.createElement('style');
style.innerHTML = `
  .OneUpCommandBar {
    visibility: hidden !important;
  }


  div#ModalFocusTrapZone3.ms-Dialog-main.main-42 {
  background-color: #ffffff !important;
  }

  [data-automation-id="copilot-header"] {
    display: none !important;
  }  

  .OneUpModal_df49a5a0 div.OneUpRootAnimation_df49a5a0.OneUpEntranceV2_df49a5a0 {
    visibility: hidden !important;
  }
  .OneUpModal_df49a5a0 .OneUpRootDarkBackground_df49a5a0 {
    background: #FFFFFF !important;
  }    
`;
document.head.appendChild(style);
