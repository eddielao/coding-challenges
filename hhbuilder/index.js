// Your code goes here

let add_button, all_remove_buttons, submit_button;
let elements = document.querySelector('form').elements;

// To store all persons in the household
let household = {};
let person = {};
let count = 0;

// To hold all persons in the household
let list = document.createElement('UL');
// To hold error message
let error = document.createElement('DIV');

add_button = document.querySelector('.add');
all_remove_buttons = document.querySelectorAll('button');
submit_button = document.querySelector("button[type=submit]");

// Appends node before class builder
function appendToBody(node) {
  document.body.insertBefore(node, document.body.childNodes[2]);
}

// Clears all input fields
function clearFields() {
  elements.age.value = "";
  elements.rel.value = "";
  elements.smoker.checked = false;
}

// Extracts the 3 input field values into the person object
function extractValues() {
  person['age'] = elements.age.value;
  person['rel'] = elements.rel.value;
  person['smoker'] = elements.smoker.checked;
}

// Validates data entry (age is required and > 0, relationship is required)
// Displays error for age <= 0 or relationship not selected
function invalidEntries() {
  let age = elements.age.value;
  let rel = elements.rel.value;

  if (age <= 0) {
    error.innerHTML = 'Age must be greater than 0.';
    appendToBody(error);
    return true;
  } else if (rel === "") {
    error.innerHTML = 'Please select a relationship.';
    appendToBody(error);
    return true;
  } else {
    error.innerHTML = "";
    return false;
  }
}

// Adds current person to household if age and relationship validated
// Displays the household list in the HTML as it is modified
add_button.onclick = function(event) {
  event.preventDefault();
  // debugger;

  if (invalidEntries()) {
    return; // Exit out of function if entries fail validation
  }

  extractValues();

  count += 1;

  let remove_button = [];
  remove_button[count-1] = document.createElement('BUTTON');
  remove_button[count-1].innerHTML = 'remove';
  remove_button[count-1].id = count;
  remove_button[count-1].onclick = function() {
    delete household[this.id];
    list.removeChild(document.getElementById(`Person${this.id}`));
  };

  household[count] = Object.assign({}, person);

  // Codes below build necessary LI and text to be displayed on top
  let node = document.createElement('LI');
  node.id = `Person${count}`;
  let textnode = document.createTextNode(
    `${person.rel},
    age ${person.age},
    smoker: ${person.smoker}`
  );
  node.appendChild(textnode);
  node.appendChild(remove_button[count-1]);
  list.appendChild(node);

  appendToBody(list);
  clearFields();
};

// Serializes the household as JSON upon form submission as a fake trip to the server
submit_button.onclick = function(event) {
  event.preventDefault();

  // Displays the debug element
  let debug_el = document.querySelector('.debug');
  debug_el.style.display = 'block';
  debug_el.innerHTML = JSON.stringify(household);
};
