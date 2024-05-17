const DELAY_BEFORE_UNMUTING = 4500;

function toggleMuteButton() {
  document.querySelector("[class*=muteBtn]").click();
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

let isMute = false;

const observer = new MutationObserver(async function (
  mutations,
  mutationInstance
) {
  const adTag = document.querySelector("[class*=adTag]");

  if (adTag) {
    isMute = true;
    toggleMuteButton();
  } else if (isMute) {
    isMute = false;

    await sleep(DELAY_BEFORE_UNMUTING);

    toggleMuteButton();
  }
});

observer.observe(document.body, {
  childList: true,
  subtree: true,
});
