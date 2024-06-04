import { updateOptionsVisibility } from "../../utils";

export function setupDropdown(inputId, dropdownId, checkBoxId) {
    const inputBox = document.getElementById(inputId);
    const dropdown = document.getElementById(dropdownId);


    inputBox?.addEventListener('click', function() {
        dropdown.style.display = 'block';
        updateOptionsVisibility(inputId, dropdownId);
    });

    inputBox?.addEventListener('input', function(event) {
        updateOptionsVisibility(inputId, dropdownId);
    });

    document.addEventListener('click', function(event) {
        if (!dropdown.contains(event.target) && event.target !== inputBox) {
            dropdown.style.display = 'none';
        }
    });

    dropdown.addEventListener('click', async function(event) {
        const selectedOption = event.target;
        if (selectedOption.tagName === 'LI') {
            const value = selectedOption.getAttribute('value');
            if (value) {
                inputBox.value = value;
                dropdown.style.display = 'none';

                addCheckbox(value, selectedOption.textContent);
                inputBox.value=''
            }
        }
    });
    function addCheckbox(value, text) {
        const checkboxContainer = document.createElement('div');
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.value = value;
        checkbox.id = `checkbox-${value}`;
        checkbox.checked = true; // Ensure the checkbox is checked

        const label = document.createElement('label');
        label.htmlFor = checkbox.id;
        label.textContent = text;

        checkboxContainer.appendChild(checkbox);
        checkboxContainer.appendChild(label);
        const checkboxList= document.getElementById(checkBoxId)
        checkboxList.appendChild(checkboxContainer);

        


        // Add event listener to remove the checkbox when unchecked
        checkbox.addEventListener('change', function() {
            if (!checkbox.checked) {
                checkboxContainer.remove();
            }
        });
    }

}
