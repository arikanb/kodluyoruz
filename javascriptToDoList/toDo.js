function addTask() {
    const inputValue = taskInput.value;
    if (inputValue.trim() === "") {
      showToast("error", "Listeye boş ekleme yapamazsınız!");
    } else {
      const listItem = document.createElement("li");
      listItem.textContent = inputValue;
      taskList.appendChild(listItem);
      showToast("success", "Listeye eklendi!");
      taskInput.value = "";
    }
  }
  
  addButton.addEventListener("click", addTask);
  
  function showToast(type, message) {
    const toast = document.querySelector(".toast." + type);
    toast.classList.remove("hide");
    toast.querySelector(".toast-body").textContent = message;
  
    setTimeout(function () {
      toast.classList.add("hide");
    }, 4000);
  }
  