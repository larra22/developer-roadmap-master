// dropdown.tsx
import { h, type FunctionalComponent } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import { Fragment } from 'preact'; // Import the Fragment component

interface Props {
  lista: string[];
}

export const Dropdown: FunctionalComponent<Props> = ({ lista }) => {
  const [filteredOptions, setFilteredOptions] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState('');
  setFilteredOptions(lista);

  useEffect(() => {

    
    setFilteredOptions(lista);
  }, [lista]); // Update filteredOptions when lista changes

  const handleInputChange = (e: Event) => {
    const inputValue = (e.target as HTMLInputElement).value;
    setInputValue(inputValue);
    filterOptions(inputValue);
  };

  const filterOptions = (inputValue: string) => {
    const filtered = lista.filter(option =>
      option.toLowerCase().includes(inputValue.toLowerCase())
    );
    setFilteredOptions(filtered);
  };

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onInput={handleInputChange}
        placeholder="Type to filter..."
      />
      <select aria-label="Select option">
        {console.log(lista)}
        {filteredOptions.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
