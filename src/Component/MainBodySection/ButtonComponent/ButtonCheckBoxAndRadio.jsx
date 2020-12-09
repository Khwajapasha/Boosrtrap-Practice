import React, { useState } from "react";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
export const ButtonCheckBoxAndRadio = () => {
  const [checked, setChecked] = useState(false);
  const [radioValue, setRadioValue] = useState("1");

  const radios = [
    { name: "Active", value: "1" },
    { name: "Radio", value: "2" },
    { name: "Radio", value: "3" },
    { name: "Radio", value: "4" },
    { name: "Radio", value: "5" },
  ];

  return (
    <div>
      <div>
        <br />
        === Button Type CheckBox ===
        <br />
        <br />
        <ButtonGroup toggle className="mb-2">
          <ToggleButton
            type="checkbox"
            variant="secondary"
            checked={checked}
            value="1"
            onChange={(e) => setChecked(e.currentTarget.checked)}
          >
            Checked
          </ToggleButton>
        </ButtonGroup>
      </div>
      <div>
        <br />
        === Dynamic Loading Of Radio Button ===
        <br /> <br />
        <ButtonGroup toggle>
          {radios.map((radio, idx) => (
            <ToggleButton
              key={idx}
              type="radio"
              variant="secondary"
              name="radio"
              value={radio.value}
              checked={radioValue === radio.value}
              onChange={(e) => setRadioValue(e.currentTarget.value)}
            >
              {radio.name}
            </ToggleButton>
          ))}
        </ButtonGroup>
      </div>
    </div>
  );
};
