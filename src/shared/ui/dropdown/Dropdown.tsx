"use client";
import { useEffect, useRef, useState } from "react";
import { SelectBird } from "../select-bird/SelectBird";
import styles from "./Dropdown.module.scss";

type DropdownProps = {
  options: OptionsSelectType[];
  onSelect: (value: OptionsSelectType) => void;
  width: number;
  selected: OptionsSelectType | null;
  label: string;
};

const Dropdown = ({
  onSelect,
  options,
  width,
  selected,
  label,
}: DropdownProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  const handleOptionClick = (option: OptionsSelectType) => {
    onSelect(option);
    setIsOpen(false);
  };

  const handleToggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  const handleChechClickOutside = (e: MouseEvent) => {
    if (ref.current && !ref.current.contains(e.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    window.document.addEventListener("click", handleChechClickOutside);
    return () => {
      window.document.removeEventListener("click", handleChechClickOutside);
    };
  }, [isOpen]);

  return (
    <div ref={ref} style={{ width }} className={styles.dropdown}>
      <div
        onClick={handleToggleDropdown}
        className={
          isOpen
            ? `${styles.dropdown_selected} ${styles.dropdown_selected__active}`
            : styles.dropdown_selected
        }
      >
        <div className={styles.value_container}>
          <span className={styles.dropdown_selected__value}>
            {label}: {selected && selected.label}
          </span>
        </div>
        <SelectBird active={isOpen} />
      </div>
      {isOpen && (
        <div className={styles.dropdown_menu__container}>
          <ul className={styles.dropdown_menu}>
            {options.map((option) => (
              <li
                className={
                  selected?.id === option.id
                    ? `${styles.dropdown_menu__li} ${styles.dropdown_menu__active}`
                    : styles.dropdown_menu__li
                }
                key={option.value}
                onClick={() => handleOptionClick(option)}
              >
                <span className={styles.dropdown_menu__item}>
                  {option.label}
                </span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export { Dropdown };
