function asTabs(node) {
  let tabs = [];

  // Create the buttons
  for (let child of node.children) {
    let button = document.createElement("button");

    button.textContent = child.getAttribute("data-tabname");

    tabs.push(button);
    node.insertBefore(button, node.firstChild);
  }

  // Select the first tab initially
  function selectTab(index) {
    for (let i = 0; i < node.children.length; i++) {
      node.children[i].style.display = "none";
    }

    // Show the selected content
    node.children[index + tabs.length].style.display = "";

    // Update button styles
    for (let i = 0; i < tabs.length; i++) {
      tabs[i].style.background = i === index ? "teal" : "lightgray";
      tabs[i].style.color = i === index ? "white" : "black";
    }
  }

  // Add click events
  tabs.forEach((button, index) => {
    button.addEventListener("click", () => {
      selectTab(index);
    });
  });

  selectTab(0);
}

asTabs(document.querySelector("#tabs"));