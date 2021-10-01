import styled from 'styled-components';

export const InputText = (props) => <StyledText type="text" className="input-text" {...props} />;
export const InputSlider = (props) => (
  <StyledSlider>
    <input type="range" {...props} />
  </StyledSlider>
);
export const InputCheckbox = (props) => (
  <StyledCheckbox>
    <input type="checkbox" {...props} />
    <span className="slider round" />
  </StyledCheckbox>
);

const StyledText = styled.input`
  border: 1px solid #ddd;
  border-radius: 2px;
  padding: 3px 10px;
  line-height: 1.5;
`;
const StyledSlider = styled.div`
  width: 100%;
  margin-top: 15px;
  margin-bottom: 5px;

  input {
    -webkit-appearance: none;
    width: 100%;
    height: 15px;
    border-radius: 5px;
    background: #d3d3d3;
    outline: none;
    opacity: 0.7;
    -webkit-transition: 0.1s;
    transition: opacity 0.1s;
  }

  input:hover {
    opacity: 1; /* Fully shown on mouse-over */
  }

  input::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #04aa6d;
    cursor: pointer;
  }

  input::-moz-range-thumb {
    width: 25px;
    height: 25px;
    border-radius: 50%;
    background: #04aa6d;
    cursor: pointer;
  }
`;
const StyledCheckbox = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;

  input {
    opacity: 0;
    width: 0;
    height: 0;
  }

  .slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    border-radius: 34px;
  }

  .slider:before {
    position: absolute;
    content: '';
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: 0.2s;
    transition: 0.2s;
    border-radius: 50%;
  }

  input:checked + .slider {
    background-color: #2196f3;
  }

  input:focus + .slider {
    box-shadow: 0 0 1px #2196f3;
  }

  input:checked + .slider:before {
    -webkit-transform: translateX(26px);
    -ms-transform: translateX(26px);
    transform: translateX(26px);
  }
`;
