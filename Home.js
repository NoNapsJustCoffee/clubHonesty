function selectMember(memberId) {
  const memberTabs = document.querySelectorAll('.memberHeaderTab');
  
  memberTabs.forEach(tab => {
    if (tab.id === memberId) {
      tab.classList.add('tabActive');
    } else {
      tab.classList.remove('tabActive');
    }
  });

    const sections = document.querySelectorAll('.memberTextSection');
  
  sections.forEach(div => {
    if (div.id === memberId) {
      div.classList.add('active');
    } else {
      div.classList.remove('active');
    }
  });
}
function enterYourself() {
  const inputContainer = document.querySelector('.inputContainer');
  inputContainer.style.display = 'flex';
}
function updateHonesty(name, honesty) {
  const members = document.querySelectorAll('.Honesty');
  members.forEach(member => {
    if (member.id === name) {
      member.textContent = honesty;
      const inputContainer = document.querySelector('.inputContainer');
      inputContainer.style.display = 'none';
      document.querySelector('#honestySubmitHonesty').value = '';
      document.querySelector('#honestySubmitName').value = '';
    }
    else {
      console.log("Member not found");
    }
  });
  
}