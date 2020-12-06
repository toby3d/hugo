window.addEventListener('load', () => {
  if (document.monetization) {
    let started = document.querySelectorAll('.monetization.monetization_state_start');
    let pending = document.querySelectorAll('.monetization.monetization_state_progress');
    let stopped = document.querySelectorAll('.monetization.monetization_state_stop');

    stopped.forEach((el) => el.toggleAttribute('hidden'));
    pending.forEach((el) => el.toggleAttribute('hidden'));
    document.monetization.addEventListener('monetizationstart', () => {
      pending.forEach((el) => el.toggleAttribute('hidden'));
      started.forEach((el) => el.toggleAttribute('hidden'));
    });
  }
});
