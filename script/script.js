// Get DOM references for the unit selectors and input fields
let unitSelectors = document.querySelector("#first_selector_section");
let unitSelectorsResult = document.querySelector("#second_selector_section");
const fromInput = document.querySelector("#from_input");
const resultInput = document.querySelector("#result_input");
const converterButton = document.querySelector(".btn");

/* Temperature Conversion Section */
const temperatureConverter = document.getElementById("temperature_converter");

// Event listener for the temperature converter section
temperatureConverter.addEventListener("click", () => {
  
  // Change the heading when temperature conversion is selected
  const temperatureConverterChange = document.querySelector("h1");
  fromInput.value = " ";  // Reset input field
  resultInput.value = " ";  // Reset result field
  temperatureConverterChange.innerHTML = "Temperature Converter";  // Update header
  
  // Populate unitSelectors with temperature options
  unitSelectors.innerHTML = `
  <option value="Celsius" class="temperatureUnit">Celsius</option>
  <option value="Kelvin" class="temperatureUnit">Kelvin</option>
  <option value="Fahrenhait" class="temperatureUnit">Fahrenhait</option>
  `;
  
  // Populate unitSelectorsResult with temperature options
  unitSelectorsResult.innerHTML = `
  <option value="Celsius" class="temperatureUnitResult">Celsius</option>
  <option value="Kelvin" class="temperatureUnitResult">Kelvin</option>
  <option value="Fahrenhait" class="temperatureUnitResult">Fahrenhait</option>
  `;
  
  // Function to perform the temperature conversion based on selected units
  function updateConversion() {
    const inputValue = parseFloat(fromInput.value);
    const inputUnit = document.querySelector("#first_selector_section").value;
    const resultUnit = document.querySelector("#second_selector_section").value;
    
    // Check units and apply appropriate conversion formula
    if (inputUnit === resultUnit) { 
      resultInput.value = inputValue;
    } else if (inputUnit === "Celsius" && resultUnit === "Kelvin") {
      resultInput.value = inputValue + 273.15
    } else if (inputUnit === "Celsius" && resultUnit === "Fahrenhait") {
      resultInput.value = (inputValue * (9/5)) + 32
    } else if (inputUnit === "Kelvin" && resultUnit === "Celsius") {
      resultInput.value = inputValue - 273.15
    } else if (inputUnit === "Kelvin" && resultUnit === "Fahrenhait") {
      resultInput.value = (inputValue * (9/5)) - 459.67
    } else if (inputUnit === "Fahrenhait" && resultUnit === "Celsius") {
      resultInput.value = (inputValue - 32) * (5/9)
    } else if (inputUnit === "Fahrenhait" && resultUnit === "Kelvin") {
      resultInput.value = (inputValue + 459.67) * (5/9)
    }
  }
  
  // Attach the conversion function to the converter button's click event
  converterButton.addEventListener("click", () => {
    updateConversion();
  });
  
});

/* Time Conversion Section */
const timeConverter = document.getElementById("time_converter");

// Event listener for the time converter section
timeConverter.addEventListener("click", ()=>{
  // Reset the input and result fields
  fromInput.value = " ";
  resultInput.value = " ";

  // Change the heading when time conversion is selected
  const timeConverterChange = document.querySelector("h1");
  timeConverterChange.innerHTML = "Time Converter";
  
  // Populate unitSelectors with time options
  unitSelectors.innerHTML = `
  <option value="Second" class="timeUnit">Second</option>
  <option value="Milisecond" class="timeUnit">Milisecond</option>
  <option value="Microsecond" class="timeUnit">Microsecond</option>
  <option value="Nanosecond" class="timeUnit">Nanosecond</option>
  <option value="Picosecond" class="timeUnit">Picosecond</option>
  <option value="Minute" class="timeUnit">Minute</option>
  <option value="Hour" class="timeUnit">Hour</option>
  <option value="Day" class="timeUnit">Day</option>
  <option value="Week" class="timeUnit">Week</option>
  <option value="Month" class="timeUnit">Month</option>
  <option value="Year" class="timeUnit">Year</option>
  `;
  unitSelectorsResult.innerHTML = `
  <option value="Second" class="timeUnitResult">Second</option>
  <option value="Milisecond" class="timeUnitResult">Milisecond</option>
  <option value="Microsecond" class="timeUnitResult">Microsecond</option>
  <option value="Nanosecond" class="timeUnitResult">Nanosecond</option>
  <option value="Picosecond" class="timeUnitResult">Picosecond</option>
  <option value="Minute" class="timeUnitResult">Minute</option>
  <option value="Hour" class="timeUnitResult">Hour</option>
  <option value="Day" class="timeUnitResult">Day</option>
  <option value="Week" class="timeUnitResult">Week</option>
  <option value="Month" class="timeUnitResult">Month</option>
  <option value="Year" class="timeUnitResult">Year</option>
  `;
  
  // Function to perform the time conversion based on selected units
  function updateConversion() {
    const inputValue = parseFloat(fromInput.value);
    const inputUnit = document.querySelector("#first_selector_section").value;
    const resultUnit = document.querySelector("#second_selector_section").value;
    
    // Conversion logic
    if (inputUnit === resultUnit) {
      resultInput.value = inputValue;
    } else if (inputUnit === "Second" && resultUnit === "Milisecond") {
      resultInput.value = inputValue * 1000;
    } else if (inputUnit === "Second" && resultUnit === "Microsecond") {
      resultInput.value = inputValue * 1000000;
    } else if (inputUnit === "Second" && resultUnit === "Nanosecond") {
      resultInput.value = inputValue * 1000000000;
    } else if (inputUnit === "Second" && resultUnit === "Picosecond") {
      resultInput.value = inputValue * 1000000000000;
    } else if (inputUnit === "Second" && resultUnit === "Minute") {
      resultInput.value = inputValue / 60;
    } else if (inputUnit === "Second" && resultUnit === "Hour") {
      resultInput.value = inputValue / 3600;
    } else if (inputUnit === "Second" && resultUnit === "Day") {
      resultInput.value = inputValue / 86400;
    } else if (inputUnit === "Second" && resultUnit === "Week") {
      resultInput.value = inputValue / 604800;
    } else if (inputUnit === "Second" && resultUnit === "Month") {
      resultInput.value = inputValue / 2592000;
    } else if (inputUnit === "Second" && resultUnit === "Year") {
      resultInput.value = inputValue / 31536000;
    } else if (inputUnit === "Milisecond" && resultUnit === "Second") {
      resultInput.value = inputValue / 1000;
    } else if (inputUnit === "Milisecond" && resultUnit === "Microsecond") {
      resultInput.value = inputValue * 1000;
    } else if (inputUnit === "Milisecond" && resultUnit === "Nanosecond") {
      resultInput.value = inputValue * 1000000;
    } else if (inputUnit === "Milisecond" && resultUnit === "Picosecond") {
      resultInput.value = inputValue * 1000000000;
    } else if (inputUnit === "Milisecond" && resultUnit === "Minute") {
      resultInput.value = inputValue / 60000;
    } else if (inputUnit === "Milisecond" && resultUnit === "Hour") {
      resultInput.value = inputValue / 3600000;
    } else if (inputUnit === "Milisecond" && resultUnit === "Day") {
      resultInput.value = inputValue / 86400000;
    } else if (inputUnit === "Milisecond" && resultUnit === "Week") {
      resultInput.value = inputValue / 604800000;
    } else if (inputUnit === "Milisecond" && resultUnit === "Month") {
      resultInput.value = inputValue / 2592000000;
    } else if (inputUnit === "Microsecond" && resultUnit === "Second") {
      resultInput.value = inputValue / 1000000;
    } else if (inputUnit === "Microsecond" && resultUnit === "Milisecond"){
      resultInput.value = inputValue / 1000;
    } else if (inputUnit === "Microsecond" && resultUnit === "Nanosecond") {
      resultInput.value = inputValue * 1000;
    } else if (inputUnit === "Microsecond" && resultUnit === "Picosecond") {
      resultInput.value = inputValue * 1000000;
    } else if (inputUnit === "Microsecond" && resultUnit === "Minute") {
      resultInput.value = inputValue / 60000000;
    } else if (inputUnit === "Microsecond" && resultUnit === "Hour") {
      resultInput.value = inputValue / 3600000000;
    } else if (inputUnit === "Microsecond" && resultUnit === "Day") {
      resultInput.value = inputValue / 86400000000;
    } else if (inputUnit === "Microsecond" && resultUnit === "Week") {
      resultInput.value = inputValue / 604800000000;
    } else if (inputUnit === "Microsecond" && resultUnit === "Month") {
      resultInput.value = inputValue / 2592000000000;
    } else if (inputUnit === "Microsecond" && resultUnit === "Year") {
      resultInput.value = inputValue / 31536000000000;
    } else if (inputUnit === "Milisecond" && resultUnit === "Second") {
      resultInput.value = inputValue / 1000;
    } else if (inputUnit === "Milisecond" && resultUnit === "Microsecond") {
      resultInput.value = inputValue * 1000;
    } else if (inputUnit === "Milisecond" && resultUnit === "Nanosecond") {
      resultInput.value = inputValue * 1000000;
    } else if (inputUnit === "Milisecond" && resultUnit === "Picosecond") {
      resultInput.value = inputValue * 1000000000;
    } else if (inputUnit === "Milisecond" && resultUnit === "Minute") {
      resultInput.value = inputValue / 60000;
    } else if (inputUnit === "Milisecond" && resultUnit === "Hour") {
      resultInput.value = inputValue / 3600000;
    } else if (inputUnit === "Milisecond" && resultUnit === "Day") {
      resultInput.value = inputValue / 86400000;
    } else if (inputUnit === "Milisecond" && resultUnit === "Week") {
      resultInput.value = inputValue / 604800000;
    } else if (inputUnit === "Milisecond" && resultUnit === "Month") {
      resultInput.value = inputValue / 2592000000;
    } else if (inputUnit === "Milisecond" && resultUnit === "Year") {
      resultInput.value = inputValue / 31536000000;
    } else if (inputUnit === "Nanosecond" && resultUnit === "Second") {
      resultInput.value = inputValue / 1000000000;
    } else if (inputUnit === "Nanosecond" && resultUnit === "Microsecond") {
      resultInput.value = inputValue / 1000;
    } else if (inputUnit === "Nanosecond" && resultUnit === "Milisecond") {
      resultInput.value = inputValue / 1000000;
    } else if (inputUnit === "Nanosecond" && resultUnit === "Picosecond") {
      resultInput.value = inputValue * 1000;
    } else if (inputUnit === "Nanosecond" && resultUnit === "Minute") {
        resultInput.value = inputValue / (60 * 1000000000);
    } else if (inputUnit === "Nanosecond" && resultUnit === "Hour") {
      resultInput.value = inputValue / (3600 * 1000000000);
    } else if (inputUnit === "Nanosecond" && resultUnit === "Day") {
      resultInput.value = inputValue / (86400 * 1000000000);
    } else if (inputUnit === "Nanosecond" && resultUnit === "Week") {
      resultInput.value = inputValue / (604800 * 1000000000);
    } else if (inputUnit === "Nanosecond" && resultUnit === "Month") {
      resultInput.value = inputValue / (2592000 * 1000000000);
    } else if (inputUnit === "Nanosecond" && resultUnit === "Year") {
      resultInput.value = inputValue / (31536000000 * 1000000000);
    } else if (inputUnit === "Picosecond" && resultUnit === "Nanosecond") {
      resultInput.value = inputValue / 1000;
    } else if (inputUnit === "Picosecond" && resultUnit === "Minute") {
      resultInput.value = inputValue / (60 * 1000000000000);
    } else if (inputUnit === "Picosecond" && resultUnit === "Hour") {
      resultInput.value = inputValue / (3600 * 1000000000000);
    } else if (inputUnit === "Picosecond" && resultUnit === "Day") {
      resultInput.value = inputValue / (86400 * 1000000000000);
    } else if (inputUnit === "Picosecond" && resultUnit === "Week") {
      resultInput.value = inputValue / (604800 * 1000000000000);
    } else if (inputUnit === "Picosecond" && resultUnit === "Month") {
      resultInput.value = inputValue / (2592000 * 1000000000000);
    } else if (inputUnit === "Picosecond" && resultUnit === "Year") {
      resultInput.value = inputValue / (31536000000 * 1000000000000);
    } else if (inputUnit === "Minute" && resultUnit === "Second") {
      resultInput.value = inputValue * 60;
    } else if (inputUnit === "Minute" && resultUnit === "Milisecond") {
        resultInput.value = inputValue * 60000;
    } else if (inputUnit === "Minute" && resultUnit === "Microsecond") {
        resultInput.value = inputValue * 60000000;
    } else if (inputUnit === "Minute" && resultUnit === "Nanosecond") {
        resultInput.value = inputValue * 60000000000;
    } else if (inputUnit === "Minute" && resultUnit === "Picosecond") {
        resultInput.value = inputValue * 60000000000000;
    } else if (inputUnit === "Minute" && resultUnit === "Hour") {
        resultInput.value = inputValue / 60;
    } else if (inputUnit === "Minute" && resultUnit === "Day") {
        resultInput.value = inputValue / 1440;
    } else if (inputUnit === "Minute" && resultUnit === "Week") {
        resultInput.value = inputValue / 10080;
    } else if (inputUnit === "Minute" && resultUnit === "Month") {
        resultInput.value = inputValue / 43800;
    } else if (inputUnit === "Minute" && resultUnit === "Year") {
        resultInput.value = inputValue / 525600;
    } else if (inputUnit === "Hour" && resultUnit === "Second") {
        resultInput.value = inputValue * 3600;
    } else if (inputUnit === "Hour" && resultUnit === "Milisecond") {
        resultInput.value = inputValue * 3600000;
    } else if (inputUnit === "Hour" && resultUnit === "Microsecond") {
        resultInput.value = inputValue * 3600000000;
    } else if (inputUnit === "Hour" && resultUnit === "Nanosecond") {
        resultInput.value = inputValue * 3600000000000;
    } else if (inputUnit === "Hour" && resultUnit === "Picosecond") {
        resultInput.value = inputValue * 3600000000000000;
    } else if (inputUnit === "Hour" && resultUnit === "Minute") {
        resultInput.value = inputValue * 60;
    } else if (inputUnit === "Hour" && resultUnit === "Day") {
        resultInput.value = inputValue / 24;
    } else if (inputUnit === "Hour" && resultUnit === "Week") {
        resultInput.value = inputValue / 168;
    } else if (inputUnit === "Hour" && resultUnit === "Month") {
        resultInput.value = inputValue / 730;
    } else if (inputUnit === "Hour" && resultUnit === "Year") {
        resultInput.value = inputValue / 8760;
    } else if (inputUnit === "Day" && resultUnit === "Second") {
        resultInput.value = inputValue * 86400;
    } else if (inputUnit === "Day" && resultUnit === "Milisecond") {
        resultInput.value = inputValue * 86400000;
    } else if (inputUnit === "Day" && resultUnit === "Microsecond") {
        resultInput.value = inputValue * 86400000000;
    } else if (inputUnit === "Day" && resultUnit === "Nanosecond") {
        resultInput.value = inputValue * 86400000000000;
    } else if (inputUnit === "Day" && resultUnit === "Picosecond") {
        resultInput.value = inputValue * 86400000000000000;
    } else if (inputUnit === "Day" && resultUnit === "Minute") {
       resultInput.value = inputValue * 1440;
    } else if (inputUnit === "Day" && resultUnit === "Hour") {
       resultInput.value = inputValue * 24;
    } else if (inputUnit === "Day" && resultUnit === "Minute") {
       resultInput.value = inputValue * 1440;
    } else if (inputUnit === "Day" && resultUnit === "Second") {
       resultInput.value = inputValue * 86400;
    } else if (inputUnit === "Day" && resultUnit === "Milisecond") {
       resultInput.value = inputValue * 86400000;
    } else if (inputUnit === "Day" && resultUnit === "Microsecond") {
       resultInput.value = inputValue * 86400000000;
    } else if (inputUnit === "Day" && resultUnit === "Nanosecond") {
       resultInput.value = inputValue * 86400000000000;
    } else if (inputUnit === "Day" && resultUnit === "Week") {
       resultInput.value = inputValue / 7;
    } else if (inputUnit === "Day" && resultUnit === "Month") {
       resultInput.value = inputValue / 30.44;
    } else if (inputUnit === "Day" && resultUnit === "Year") {
       resultInput.value = inputValue / 365.24;
    } else if (inputUnit === "Week" && resultUnit === "Day") {
       resultInput.value = inputValue * 7;
    } else if (inputUnit === "Month" && resultUnit === "Day") {
       resultInput.value = inputValue * 30.44;
    } else if (inputUnit === "Month" && resultUnit === "Year") {
       resultInput.value = inputValue / 12;
    } else if (inputUnit === "Year" && resultUnit === "Day") {
       resultInput.value = inputValue * 365.24;
    } else if (inputUnit === "Year" && resultUnit === "Month") {
       resultInput.value = inputValue * 12;
      }
    }
    
    //Attach the conversion function to the converter button's click event
    converterButton.addEventListener("click", () => {
      updateConversion()
    });
    
  });
    
/* Length Conversion Section */
const lengthConverter = document.getElementById("length_converter");

// Event listener for the length converter section
lengthConverter.addEventListener("click", ()=>{

  // Change the heading when length conversion is selected
  const lengthConverterChange = document.querySelector("h1");
  lengthConverterChange.innerHTML = "Lenght Converter";
  
  // Reset input fields
  fromInput.value = " ";
  resultInput.value = " ";
    
  // Populate unitSelectors with length options
  unitSelectors.innerHTML = `
    <option value="Meter" class="lengthUnit">Meter</option>
    <option value="Kilometer" class="lengthUnit">Kilometer</option>
    <option value="Centimeter" class="lengthUnit">Centimeter</option>
    <option value="Micrometer" class="lengthUnit">Micrometer</option>
    <option value="Nanometer" class="lengthUnit">Nanometer</option>
    <option value="Mile" class="lengthUnit">Mile</option>
    <option value="Yard" class="lengthUnit">Yard</option>
    <option value="Foot" class="lengthUnit">Foot</option>
    <option value="Inch" class="lengthUnit">Inch</option>
    `;

  // Populate unitSelectorsResult with length options
  unitSelectorsResult.innerHTML = `
    <option value="Meter" class="lengthUnitResult">Meter</option>
    <option value="Kilometer" class="lengthUnitResult">Kilometer</option>
    <option value="Centimeter" class="lengthUnitResult">Centimeter</option>
    <option value="Micrometer" class="lengthUnitResult">Micrometer</option>
    <option value="Nanometer" class="lengthUnitResult">Nanometer</option>
    <option value="Mile" class="lengthUnitResult">Mile</option>
    <option value="Yard" class="lengthUnitResult">Yard</option>
    <option value="Foot" class="lengthUnitResult">Foot</option>
    <option value="Inch" class="lengthUnitResult">Inch</option>
    `;

  // Function to perform length conversion based on selected units
  function updateConversion() {
    const inputValue = parseFloat(fromInput.value);
    const inputUnit = document.querySelector("#first_selector_section").value;
    const resultUnit = document.querySelector("#second_selector_section").value;

    // Conversion logic
      if (inputUnit === resultUnit) {
        resultInput.value = inputValue;
      } else if (inputUnit === "Meter" && resultUnit === "Kilometer") {
        resultInput.value = inputValue / 1000;
      } else if (inputUnit === "Meter" && resultUnit === "Centimeter") {
        resultInput.value = inputValue * 100;
      } else if (inputUnit === "Meter" && resultUnit === "Micrometer") {
        resultInput.value = inputValue * 0.000001;
      } else if (inputUnit === "Meter" && resultUnit === "Nanometer") {
        resultInput.value = inputValue * 0.000000001;
      } else if (inputUnit === "Meter" && resultUnit === "Mile") {
        resultInput.value = inputValue / 1609.344;
      } else if (inputUnit === "Meter" && resultUnit === "Yard") {
        resultInput.value = inputValue * 1.0936132983;
      } else if (inputUnit === "Meter" && resultUnit === "Foot") {
        resultInput.value = inputValue * 3.280839895;
      } else if (inputUnit === "Meter" && resultUnit === "Inch") {
        resultInput.value = inputValue * 39.37007874;
      } else if (inputUnit === "Kilometer" && resultUnit === "Meter") {
        resultInput.value = inputValue * 1000;
      } else if (inputUnit === "Kilometer" && resultUnit === "Centimeter") {
        resultInput.value = inputValue * 100000;
      } else if (inputUnit === "Kilometer" && resultUnit === "Micrometer") {
        resultInput.value = inputValue * 0.000000001;
      } else if (inputUnit === "Kilometer" && resultUnit === "Nanometer") {
        resultInput.value = inputValue * 0.000000000001;
      } else if (inputUnit === "Kilometer" && resultUnit === "Mile") {
        resultInput.value = inputValue / 1.609344;
      } else if (inputUnit === "Kilometer" && resultUnit === "Yard") {
        resultInput.value = inputValue * 1093.6132983;
      } else if (inputUnit === "Kilometer" && resultUnit === "Foot") {
        resultInput.value = inputValue * 3280.839895;
      } else if (inputUnit === "Kilometer" && resultUnit === "Inch") {
        resultInput.value = inputValue * 39370.07874;
      } else if (inputUnit === "Centimeter" && resultUnit === "Meter") {
        resultInput.value = inputValue / 100;
      } else if (inputUnit === "Centimeter" && resultUnit === "Kilometer") {
        resultInput.value = inputValue / 100000;
      } else if (inputUnit === "Centimeter" && resultUnit === "Micrometer") {
        resultInput.value = inputValue * 10000;
      } else if (inputUnit === "Centimeter" && resultUnit === "Nanometer") {
        resultInput.value = inputValue * 0.0000001;
      } else if (inputUnit === "Centimeter" && resultUnit === "Mile") {
        resultInput.value = inputValue * 0.0000062137;
      } else if (inputUnit === "Centimeter" && resultUnit === "Yard") {
        resultInput.value = inputValue * 0.010936;
      } else if (inputUnit === "Centimeter" && resultUnit === "Foot") {
        resultInput.value = inputValue * 0.032808;
      } else if (inputUnit === "Centimeter" && resultUnit === "Inch") {
        resultInput.value = inputValue * 0.39370;
      } else if (inputUnit === "Micrometer" && resultUnit === "Meter") {
        resultInput.value = inputValue * 0.000001;
      } else if (inputUnit === "Micrometer" && resultUnit === "Kilometer") {
        resultInput.value = inputValue * 0.000000001;
      } else if (inputUnit === "Micrometer" && resultUnit === "Centimeter") {
        resultInput.value = inputValue * 0.0001;
      } else if (inputUnit === "Micrometer" && resultUnit === "Nanometer") {
        resultInput.value = inputValue * 1000;
      } else if (inputUnit === "Micrometer" && resultUnit === "Mile") {
        resultInput.value = inputValue * 0.00000062137;
      } else if (inputUnit === "Micrometer" && resultUnit === "Yard") {
        resultInput.value = inputValue * 0.0000010936;
      } else if (inputUnit === "Micrometer" && resultUnit === "Foot") {
        resultInput.value = inputValue * 0.0000032808;
      } else if (inputUnit === "Micrometer" && resultUnit === "Inch") {
        resultInput.value = inputValue * 0.00003937;
      } else if (inputUnit === "Nanometer" && resultUnit === "Meter") {
        resultInput.value = inputValue * 0.000000001;
      } else if (inputUnit === "Nanometer" && resultUnit === "Kilometer") {
        resultInput.value = inputValue * 0.000000000001;
      } else if (inputUnit === "Nanometer" && resultUnit === "Centimeter") {
        resultInput.value = inputValue * 0.0000001;
      } else if (inputUnit === "Nanometer" && resultUnit === "Micrometer") {
        resultInput.value = inputValue * 0.001;
      } else if (inputUnit === "Nanometer" && resultUnit === "Mile") {
        resultInput.value = inputValue * 0.00000000062137;
      } else if (inputUnit === "Nanometer" && resultUnit === "Yard") {
        resultInput.value = inputValue * 0.0000000010936;
      } else if (inputUnit === "Nanometer" && resultUnit === "Foot") {
        resultInput.value = inputValue * 0.0000000032808;
      } else if (inputUnit === "Nanometer" && resultUnit === "Inch") {
        resultInput.value = inputValue * 0.00000003937;
      } else if (inputUnit === "Mile" && resultUnit === "Meter") {
        resultInput.value = inputValue * 1609.344;
      } else if (inputUnit === "Mile" && resultUnit === "Kilometer") {
        resultInput.value = inputValue * 1.609344;
      } else if (inputUnit === "Mile" && resultUnit === "Centimeter") {
        resultInput.value = inputValue * 160934.4;
      } else if (inputUnit === "Mile" && resultUnit === "Micrometer") {
        resultInput.value = inputValue * 1609344000;
      } else if (inputUnit === "Mile" && resultUnit === "Nanometer") {
        resultInput.value = inputValue * 1609344000000;
      } else if (inputUnit === "Mile" && resultUnit === "Yard") {
        resultInput.value = inputValue * 1760;
      } else if (inputUnit === "Mile" && resultUnit === "Foot") {
        resultInput.value = inputValue * 5280;
      } else if (inputUnit === "Mile" && resultUnit === "Inch") {
        resultInput.value = inputValue * 63360;
      } else if (inputUnit === "Yard" && resultUnit === "Meter") {
        resultInput.value = inputValue * 0.9144;
      } else if (inputUnit === "Yard" && resultUnit === "Kilometer") {
        resultInput.value = inputValue * 0.0009144;
      } else if (inputUnit === "Yard" && resultUnit === "Centimeter") {
        resultInput.value = inputValue * 91.44;
      } else if (inputUnit === "Yard" && resultUnit === "Micrometer") {
        resultInput.value = inputValue * 91440000;
      } else if (inputUnit === "Yard" && resultUnit === "Nanometer") {
        resultInput.value = inputValue * 914400000000;
      } else if (inputUnit === "Yard" && resultUnit === "Mile") {
        resultInput.value = inputValue / 1760;
      } else if (inputUnit === "Yard" && resultUnit === "Foot") {
        resultInput.value = inputValue * 3;
      } else if (inputUnit === "Yard" && resultUnit === "Inch") {
        resultInput.value = inputValue * 36;
      }
    }
    
    // Attach the conversion function to the converter button's click event
    converterButton.addEventListener("click", () => {
      updateConversion()
    });
    
    
  });

/* Volume Conversion Section */
const volumeConverter = document.getElementById("volume_converter");

  // Event listener for the volume converter section
  volumeConverter.addEventListener("click", ()=>{

  // Change the heading when volume conversion is selected
  let volumeConverterChange = document.querySelector("h1");
  volumeConverterChange.innerHTML = "Volume Converter";
  
  // Reset input fields
  fromInput.value = " ";
  resultInput.value = " ";
  
  // Populate unitSelectors with volume options
  unitSelectors.innerHTML = `
    <option value="Cubic Meter" class="volumeUnit">Cubic Meter</option>
    <option value="Cubic Kilometer" class="volumeUnit">Cubic Kilometer</option>
    <option value="Cubic Centimeter" class="volumeUnit">Cubic Centimeter</option>
    <option value="Cubic Mile" class="volumeUnit">Cubic Mile</option>
    <option value="Cubic Yard" class="volumeUnit">Cubic Yard</option>
    <option value="US Gallon" class="volumeUnit">US Gallon</option>
    <option value="US Pint" class="volumeUnit">US Pint</option>
    <option value="US Cup" class="volumeUnit">US Cup</option>
    `;
  
  // Populate unitSelectorsResult with volume options 
  unitSelectorsResult.innerHTML = `
    <option value="Cubic Meter" class="volumeUnit">Cubic Meter</option>
    <option value="Cubic Kilometer" class="volumeUnit">Cubic Kilometer</option>
    <option value="Cubic Centimeter" class="volumeUnit">Cubic Centimeter</option>
    <option value="Cubic Mile" class="volumeUnit">Cubic Mile</option>
    <option value="Cubic Yard" class="volumeUnit">Cubic Yard</option>
    <option value="US Gallon" class="volumeUnit">US Gallon</option>
    <option value="US Pint" class="volumeUnit">US Pint</option>
    <option value="US Cup" class="volumeUnit">US Cup</option>
    `;
    
    // Function to perform volume conversion based on selected units
    function updateConversion() {
      const inputValue = parseFloat(fromInput.value);
      const inputUnit = document.querySelector("#first_selector_section").value;
      const resultUnit = document.querySelector("#second_selector_section").value;
      
      // Conversion logic
      if (inputUnit === resultUnit) {
        resultInput.value = inputValue;
      } else if (inputUnit === "Cubic Meter" && resultUnit === "Cubic Kilometer") {
        resultInput.value = inputValue / 1000000000;
      } else if (inputUnit === "Cubic Meter" && resultUnit === "Cubic Centimeter") {
        resultInput.value = inputValue * 1000000;
      } else if (inputUnit === "Cubic Meter" && resultUnit === "Cubic Mile") {
        resultInput.value = inputValue / 4168181825.44;
      } else if (inputUnit === "Cubic Meter" && resultUnit === "Cubic Yard") {
        resultInput.value = inputValue * 1.30795;
      } else if (inputUnit === "Cubic Meter" && resultUnit === "US Gallon") {
        resultInput.value = inputValue * 264.172;
      } else if (inputUnit === "Cubic Meter" && resultUnit === "US Quart") {
        resultInput.value = inputValue * 1056.69;
      } else if (inputUnit === "Cubic Meter" && resultUnit === "US Pint") {
        resultInput.value = inputValue * 2113.38;
      } else if (inputUnit === "Cubic Meter" && resultUnit === "US Cup") {
        resultInput.value = inputValue * 4226.75;
      } else if (inputUnit === "Cubic Kilometer" && resultUnit === "Cubic Meter") {
        resultInput.value = inputValue * 1000000000;
      } else if (inputUnit === "Cubic Kilometer" && resultUnit === "Cubic Centimeter") {
        resultInput.value = inputValue * 1000000000000000;
      } else if (inputUnit === "Cubic Kilometer" && resultUnit === "Cubic Mile") {
        resultInput.value = inputValue * 0.239912;
      } else if (inputUnit === "Cubic Kilometer" && resultUnit === "Cubic Yard") {
        resultInput.value = inputValue * 1307950621.7776;
      } else if (inputUnit === "Cubic Kilometer" && resultUnit === "US Gallon") {
        resultInput.value = inputValue * 264172052.35815;
      } else if (inputUnit === "Cubic Kilometer" && resultUnit === "US Quart") {
        resultInput.value = inputValue * 1056688209.4326;
      } else if (inputUnit === "Cubic Kilometer" && resultUnit === "US Pint") {
        resultInput.value = inputValue * 2113376418.8653;
      } else if (inputUnit === "Cubic Kilometer" && resultUnit === "US Cup") {
        resultInput.value = inputValue * 4226752837.7307;
      } else if (inputUnit === "Cubic Centimeter" && resultUnit === "Cubic Meter") {
        resultInput.value = inputValue / 1000000;
      } else if (inputUnit === "Cubic Centimeter" && resultUnit === "Cubic Kilometer") {
        resultInput.value = inputValue / 1000000000000000;
      } else if (inputUnit === "Cubic Centimeter" && resultUnit === "Cubic Mile") {
        resultInput.value = inputValue / 4168181825440;
      } else if (inputUnit === "Cubic Centimeter" && resultUnit === "Cubic Yard") {
        resultInput.value = inputValue / 764554.85798;
      } else if (inputUnit === "Cubic Centimeter" && resultUnit === "US Gallon") {
        resultInput.value = inputValue / 3785.41178;
      } else if (inputUnit === "Cubic Centimeter" && resultUnit === "US Quart") {
      resultInput.value = inputValue / 946.352945;
      } else if (inputUnit === "Cubic Centimeter" && resultUnit === "US Pint") {
      resultInput.value = inputValue / 473.176473;
      } else if (inputUnit === "Cubic Centimeter" && resultUnit === "US Cup") {
      resultInput.value = inputValue / 236.588237;
      } else if (inputUnit === "Cubic Mile" && resultUnit === "Cubic Meter") {
      resultInput.value = inputValue * 4168181825.4;
      } else if (inputUnit === "Cubic Mile" && resultUnit === "Cubic Kilometer") {
      resultInput.value = inputValue * 4.1681818254;
      } else if (inputUnit === "Cubic Mile" && resultUnit === "Cubic Centimeter") {
      resultInput.value = inputValue * 2.39912816e+16;
      } else if (inputUnit === "Cubic Mile" && resultUnit === "Cubic Yard") {
      resultInput.value = inputValue * 5451776000;
      } else if (inputUnit === "Cubic Mile" && resultUnit === "US Gallon") {
      resultInput.value = inputValue * 1.10151741285e+13;
      } else if (inputUnit === "Cubic Mile" && resultUnit === "US Quart") {
      resultInput.value = inputValue * 4.4060696514e+13;
      } else if (inputUnit === "Cubic Mile" && resultUnit === "US Pint") {
      resultInput.value = inputValue * 8.8121393029e+13;
      } else if (inputUnit === "Cubic Mile" && resultUnit === "US Cup") {
      resultInput.value = inputValue * 1.7624278606e+14;
      } else if (inputUnit === "Cubic Yard" && resultUnit === "Cubic Meter") {
      resultInput.value = inputValue / 1.30795;
      } else if (inputUnit === "Cubic Yard" && resultUnit === "Cubic Kilometer") {
      resultInput.value = inputValue / 1.30795e+9;
      } else if (inputUnit === "Cubic Yard" && resultUnit === "Cubic Centimeter") {
      resultInput.value = inputValue * 764554.85798;
      } else if (inputUnit === "Cubic Yard" && resultUnit === "Cubic Mile") {
      resultInput.value = inputValue / 5451776000;
      } else if (inputUnit === "Cubic Yard" && resultUnit === "US Gallon") {
      resultInput.value = inputValue * 201.97402597;
      } else if (inputUnit === "Cubic Yard" && resultUnit === "US Quart") {
      resultInput.value = inputValue * 807.89610386;
      } else if (inputUnit === "Cubic Yard" && resultUnit === "US Pint") {
      resultInput.value = inputValue * 1615.7922077;
      } else if (inputUnit === "Cubic Yard" && resultUnit === "US Cup") {
      resultInput.value = inputValue * 3231.5844154;
      } else if (inputUnit === "US Gallon" && resultUnit === "Cubic Meter") {
      resultInput.value = inputValue /0.2641720523581484;
      } else if (inputUnit === "US Gallon" && resultUnit === "Cubic Kilometer") {
      resultInput.value = inputValue / 264172052.3581484;
      } else if (inputUnit === "US Gallon" && resultUnit === "Cubic Centimeter") {
      resultInput.value = inputValue * 3785.411784;
      } else if (inputUnit === "US Gallon" && resultUnit === "Cubic Mile") {
      resultInput.value = inputValue / 4.16818183e+12;
      } else if (inputUnit === "US Gallon" && resultUnit === "Cubic Yard") {
      resultInput.value = inputValue / 201.97402597;
      } else if (inputUnit === "US Gallon" && resultUnit === "US Quart") {
      resultInput.value = inputValue * 4;
      } else if (inputUnit === "US Gallon" && resultUnit === "US Pint") {
      resultInput.value = inputValue * 8;
      } else if (inputUnit === "US Gallon" && resultUnit === "US Cup") {
      resultInput.value = inputValue * 16;
      } else if (inputUnit === "US Quart" && resultUnit === "Cubic Meter") {
      resultInput.value = inputValue / 1056.6882049662;
      } else if (inputUnit === "US Quart" && resultUnit === "Cubic Kilometer") {
      resultInput.value = inputValue / 1.0566882049662e+9;
      } else if (inputUnit === "US Quart" && resultUnit === "Cubic Centimeter") {
      resultInput.value = inputValue * 946.352946;
      } else if (inputUnit === "US Quart" && resultUnit === "Cubic Mile") {
      resultInput.value = inputValue / 1.667272727e+12;
      } else if (inputUnit === "US Quart" && resultUnit === "Cubic Yard") {
      resultInput.value = inputValue / 51.490164;
      } else if (inputUnit === "US Quart" && resultUnit === "US Gallon") {
      resultInput.value = inputValue / 4;
      } else if (inputUnit === "US Quart" && resultUnit === "US Pint") {
      resultInput.value = inputValue * 2;
      } else if (inputUnit === "US Quart" && resultUnit === "US Cup") {
      resultInput.value = inputValue * 4;
      } else if (inputUnit === "US Pint" && resultUnit === "Cubic Meter") {
      resultInput.value = inputValue / 2113.3764099325;
      } else if (inputUnit === "US Pint" && resultUnit === "Cubic Kilometer") {
      resultInput.value = inputValue / 2.1133764099325e+9;
      } else if (inputUnit === "US Pint" && resultUnit === "Cubic Centimeter") {
      resultInput.value = inputValue * 473.176473;
      } else if (inputUnit === "US Pint" && resultUnit === "Cubic Mile") {
      resultInput.value = inputValue / 3.334545455e+12;
      } else if (inputUnit === "US Pint" && resultUnit === "Cubic Yard") {
      resultInput.value = inputValue / 25.745082;
      } else if (inputUnit === "US Pint" && resultUnit === "US Gallon") {
      resultInput.value = inputValue / 8;
      } else if (inputUnit === "US Pint" && resultUnit === "US Quart") {
      resultInput.value = inputValue / 2;
      } else if (inputUnit === "US Pint" && resultUnit === "US Cup") {
      resultInput.value = inputValue * 2;
      } else if (inputUnit === "US Cup" && resultUnit === "Cubic Meter") {
      resultInput.value = inputValue / 4226.7528377;
      } else if (inputUnit === "US Cup" && resultUnit === "Cubic Kilometer") {
      resultInput.value = inputValue / 4.2267528377e+15;
      } else if (inputUnit === "US Cup" && resultUnit === "Cubic Centimeter") {
      resultInput.value = inputValue * 236.5882365;
      } else if (inputUnit === "US Cup" && resultUnit === "Cubic Mile") {
      resultInput.value = inputValue / 1.1011031984e+19;
      } else if (inputUnit === "US Cup" && resultUnit === "Cubic Yard") {
      resultInput.value = inputValue / 344.53101778;
      } else if (inputUnit === "US Cup" && resultUnit === "US Gallon") {
      resultInput.value = inputValue / 16;
      } else if (inputUnit === "US Cup" && resultUnit === "US Quart") {
      resultInput.value = inputValue / 4;
      } else if (inputUnit === "US Cup" && resultUnit === "US Pint") {
      resultInput.value = inputValue / 2;
    }
}

// Attach the conversion function to the converter button's click event
converterButton.addEventListener("click", () => {
  updateConversion()
});


});

/* Weight Conversion Section */
const weightConverter = document.getElementById("weight_converter");

// Event listener for the weight converter section
weightConverter.addEventListener("click", ()=>{

  // Change the heading when weight conversion is selected
  let weightConverterChange = document.querySelector("h1");
  weightConverterChange.innerHTML = "Weight Converter";

  // Reset input fields
  fromInput.value = " ";
  resultInput.value = " ";
  
  // Populate unitSelectors with weight options
  unitSelectors.innerHTML = `
    <option value="Kilogram" class="weightUnit">Kilogram</option>
    <option value="Gram" class="weightUnit">Gram</option>
    <option value="Miligram" class="weightUnit">Miligram</option>
    <option value="Metric Ton" class="weightUnit">Metric Ton</option>
    <option value="Long Ton" class="weightUnit">Long Ton</option>
    <option value="Short Ton" class="weightUnit">Short Ton</option>
    <option value="Pound" class="weightUnit">Pound</option>
    <option value="Ounce" class="weightUnit">Ounce</option>
    <option value="Carat" class="weightUnit">Carat</option>
    `;

  // Populate unitSelectorsResult with weight options
  unitSelectorsResult.innerHTML = `
  <option value="Kilogram" class="weightUnitResult">Kilogram</option>
  <option value="Gram" class="weightUnitResult">Gram</option>
  <option value="Miligram" class="weightUnitResult">Miligram</option>
  <option value="Metric Ton" class="weightUnitResult">Metric Ton</option>
  <option value="Long Ton" class="weightUnitResult">Long Ton</option>
  <option value="Short Ton" class="weightUnitResult">Short Ton</option>
  <option value="Pound" class="weightUnitResult">Pound</option>
  <option value="Ounce" class="weightUnitResult">Ounce</option>
  <option value="Carat" class="weightUnitResult">Carat</option>
  `;
  
  // Function to perform weight conversion based on selected units
  function updateConversion() {
    const inputValue = parseFloat(fromInput.value);
    const inputUnit = document.querySelector("#first_selector_section").value;
    const resultUnit = document.querySelector("#second_selector_section").value;

    // Conversion logic
    if (inputUnit === resultUnit) {
      resultInput.value = inputValue;
    } else if (inputUnit === "Kilogram" && resultUnit === "Gram") {
      resultInput.value = inputValue * 1000;
    } else if (inputUnit === "Kilogram" && resultUnit === "Miligram") {
      resultInput.value = inputValue * 1000000;
    } else if (inputUnit === "Kilogram" && resultUnit === "Metric Ton") {
      resultInput.value = inputValue / 1000;
    } else if (inputUnit === "Kilogram" && resultUnit === "Long Ton") {
      resultInput.value = inputValue / 1016.04;
    } else if (inputUnit === "Kilogram" && resultUnit === "Short Ton") {
      resultInput.value = inputValue / 907.185;
    } else if (inputUnit === "Kilogram" && resultUnit === "Pound") {
      resultInput.value = inputValue * 2.205;
    } else if (inputUnit === "Kilogram" && resultUnit === "Ounce") {
      resultInput.value = inputValue * 35.274;
    } else if (inputUnit === "Kilogram" && resultUnit === "Carat") {
      resultInput.value = inputValue * 5000;
    } else if (inputUnit === "Gram" && resultUnit === "Kilogram") {
      resultInput.value = inputValue / 1000;
    } else if (inputUnit === "Gram" && resultUnit === "Miligram") {
      resultInput.value = inputValue * 1000;
    } else if (inputUnit === "Gram" && resultUnit === "Metric Ton") {
      resultInput.value = inputValue / 1000000;
    } else if (inputUnit === "Gram" && resultUnit === "Long Ton") {
      resultInput.value = inputValue / 1016040;
    } else if (inputUnit === "Gram" && resultUnit === "Short Ton") {
      resultInput.value = inputValue / 907185;
    } else if (inputUnit === "Gram" && resultUnit === "Pound") {
      resultInput.value = inputValue / 453.592;
    } else if (inputUnit === "Gram" && resultUnit === "Ounce") {
      resultInput.value = inputValue / 28.35;
    } else if (inputUnit === "Gram" && resultUnit === "Carat") {
      resultInput.value = inputValue / 0.2;
    } else if (inputUnit === "Miligram" && resultUnit === "Kilogram") {
      resultInput.value = inputValue / 1000000;
    } else if (inputUnit === "Miligram" && resultUnit === "Gram") {
      resultInput.value = inputValue / 1000;
    } else if (inputUnit === "Miligram" && resultUnit === "Metric Ton") {
      resultInput.value = inputValue / 1000000000;
    } else if (inputUnit === "Miligram" && resultUnit === "Long Ton") {
      resultInput.value = inputValue / 1016040000;
    } else if (inputUnit === "Miligram" && resultUnit === "Short Ton") {
      resultInput.value = inputValue / 907185000;
    } else if (inputUnit === "Miligram" && resultUnit === "Pound") {
      resultInput.value = inputValue / 453592;
    } else if (inputUnit === "Miligram" && resultUnit === "Ounce") {
      resultInput.value = inputValue / 28350;
    } else if (inputUnit === "Miligram" && resultUnit === "Carrat") {
      resultInput.value = inputValue / 200;
    } else if (inputUnit === "Kilometer" && resultUnit === "Meter") {
    resultInput.value = inputValue * 1000;
    } else if (inputUnit === "Kilometer" && resultUnit === "Centimeter") {
    resultInput.value = inputValue * 100000;
    } else if (inputUnit === "Kilometer" && resultUnit === "Milimeter") {
    resultInput.value = inputValue * 1000000;
    } else if (inputUnit === "Kilometer" && resultUnit === "Mile") {
    resultInput.value = inputValue / 1.609;
    } else if (inputUnit === "Kilometer" && resultUnit === "Yard") {
    resultInput.value = inputValue * 1094;
    } else if (inputUnit === "Kilometer" && resultUnit === "Foot") {
    resultInput.value = inputValue * 3281;
    } else if (inputUnit === "Kilometer" && resultUnit === "Inch") {
    resultInput.value = inputValue * 39370;
    } else if (inputUnit === "Meter" && resultUnit === "Kilometer") {
    resultInput.value = inputValue / 1000;
    } else if (inputUnit === "Meter" && resultUnit === "Centimeter") {
    resultInput.value = inputValue * 100;
    } else if (inputUnit === "Meter" && resultUnit === "Milimeter") {
    resultInput.value = inputValue * 1000;
    } else if (inputUnit === "Meter" && resultUnit === "Mile") {
    resultInput.value = inputValue / 1609;
    } else if (inputUnit === "Meter" && resultUnit === "Yard") {
    resultInput.value = inputValue * 1.094;
    } else if (inputUnit === "Meter" && resultUnit === "Foot") {
    resultInput.value = inputValue * 3.281;
    } else if (inputUnit === "Meter" && resultUnit === "Inch") {
    resultInput.value = inputValue * 39.37;
    } else if (inputUnit === "Centimeter" && resultUnit === "Kilometer") {
    resultInput.value = inputValue / 100000;
    } else if (inputUnit === "Centimeter" && resultUnit === "Meter") {
    resultInput.value = inputValue / 100;
    } else if (inputUnit === "Centimeter" && resultUnit === "Milimeter") {
    resultInput.value = inputValue * 10;
    } else if (inputUnit === "Centimeter" && resultUnit === "Mile") {
    resultInput.value = inputValue / 160934;
    } else if (inputUnit === "Centimeter" && resultUnit === "Yard") {
    resultInput.value = inputValue / 91.44;
    } else if (inputUnit === "Centimeter" && resultUnit === "Foot") {
    resultInput.value = inputValue / 30.48;
    } else if (inputUnit === "Centimeter" && resultUnit === "Inch") {
    resultInput.value = inputValue / 2.54;
    } else if (inputUnit === "Milimeter" && resultUnit === "Kilometer") {
    resultInput.value = inputValue / 1000000;
    } else if (inputUnit === "Milimeter" && resultUnit === "Meter") {
    resultInput.value = inputValue / 1000;
    } else if (inputUnit === "Milimeter" && resultUnit === "Centimeter") {
    resultInput.value = inputValue /10;
    } else if (inputUnit === "Milimeter" && resultUnit === "Kilometer") {
    resultInput.value = inputValue / 1000000;
    } else if (inputUnit === "Mile" && resultUnit === "Kilometer") {
    resultInput.value = inputValue * 1.60934;
    } else if (inputUnit === "Mile" && resultUnit === "Meter") {
    resultInput.value = inputValue * 1609.34;
    } else if (inputUnit === "Mile" && resultUnit === "Centimeter") {
    resultInput.value = inputValue * 160934;
    } else if (inputUnit === "Mile" && resultUnit === "Milimeter") {
    resultInput.value = inputValue * 1609340;
    } else if (inputUnit === "Yard" && resultUnit === "Foot") {
    resultInput.value = inputValue * 3;
    } else if (inputUnit === "Yard" && resultUnit === "Inch") {
    resultInput.value = inputValue * 36;
    } else if (inputUnit === "Yard" && resultUnit === "Meter") {
    resultInput.value = inputValue / 1.09361;
    } else if (inputUnit === "Foot" && resultUnit === "Yard") {
    resultInput.value = inputValue / 3;
    } else if (inputUnit === "Foot" && resultUnit === "Inch") {
    resultInput.value = inputValue * 12;
    } else if (inputUnit === "Foot" && resultUnit === "Meter") {
    resultInput.value = inputValue / 3.28084;
    } else if (inputUnit === "Inch" && resultUnit === "Yard") {
    resultInput.value = inputValue / 36;
    } else if (inputUnit === "Inch" && resultUnit === "Foot") {
    resultInput.value = inputValue / 12;
    } else if (inputUnit === "Inch" && resultUnit === "Meter") {
    resultInput.value = inputValue / 39.3701;
  }
}

// Attach the conversion function to the converter button's click event
converterButton.addEventListener("click", () => {
  updateConversion()
});


});

/* Area Conversion Section */
const areaConverter = document.getElementById("area_converter");

// Event listener for the area converter section
areaConverter.addEventListener("click", ()=>{

  // Change the heading when area conversion is selected
  const areaConverterChange = document.querySelector("h1");
  areaConverterChange.innerHTML = "Area Converter";

  // Reset input fields
  fromInput.value = " ";
  resultInput.value = " ";

  // Populate unitSelectors with area options
  unitSelectors.innerHTML = `
    <option value="Square Meter" class="areaUnit">Square Meter</option>
    <option value="Square Kilometer" class="areaUnit">Square Kilometer</option>
    <option value="Square Centimeter" class="areaUnit">Square Centimeter</option>
    <option value="Square Millimeter" class="areaUnit">Square Millimeter</option>
    <option value="Square Micrometer" class="areaUnit">Square Micrometer</option>
    <option value="Hectare" class="areaUnit">Hectare</option>
    <option value="Square Mile" class="areaUnit">Square Mile</option>
    <option value="Square Yard" class="areaUnit">Square Yard</option>
    <option value="Square Foot" class="areaUnit">Square Foot</option>
    <option value="Square Inch" class="areaUnit">Square Inch</option>
    <option value="Acre" class="areaUnit">Acre</option>
    `;

  // Populate unitSelectorsResult with area options
  unitSelectorsResult.innerHTML = `
  <option value="Square Meter" class="areaUnitResult">Square Meter</option>
  <option value="Square Kilometer" class="areaUnitResult">Square Kilometer</option>
  <option value="Square Centimeter" class="areaUnitResult">Square Centimeter</option>
  <option value="Square Millimeter" class="areaUnitResult">Square Millimeter</option>
  <option value="Square Micrometer" class="areaUnitResult">Square Micrometer</option>
  <option value="Hectare" class="areaUnitResult">Hectare</option>
  <option value="Square Mile" class="areaUnitResult">Square Mile</option>
  <option value="Square Yard" class="areaUnitResult">Square Yard</option>
  <option value="Square Foot" class="areaUnitResult">Square Foot</option>
  <option value="Square Inch" class="areaUnitResult">Square Inch</option>
  <option value="Acre" class="areaUnitResult">Acre</option>
  `;
  
  // Function to perform area conversion based on selected units
  function updateConversion() {
    const inputValue = parseFloat(fromInput.value);
    const inputUnit = document.querySelector("#first_selector_section").value;
    const resultUnit = document.querySelector("#second_selector_section").value;
    
    // Conversion logic
    if (inputUnit === resultUnit) {
      resultInput.value = inputValue;
  } else if (inputUnit === "Square Meter" && resultUnit === "Square Kilometer") {
      resultInput.value = inputValue / 1000000;
  } else if (inputUnit === "Square Meter" && resultUnit === "Square Centimeter") {
      resultInput.value = inputValue * 10000;
  } else if (inputUnit === "Square Meter" && resultUnit === "Square Millimeter") {
      resultInput.value = inputValue * 1000000;
  } else if (inputUnit === "Square Meter" && resultUnit === "Square Micrometer") {
      resultInput.value = inputValue * 1000000000000;
  } else if (inputUnit === "Square Meter" && resultUnit === "Hectare") {
      resultInput.value = inputValue / 10000;
  } else if (inputUnit === "Square Meter" && resultUnit === "Square Mile") {
      resultInput.value = inputValue / 2590000;
  } else if (inputUnit === "Square Meter" && resultUnit === "Square Yard") {
      resultInput.value = inputValue * 1.196;
  } else if (inputUnit === "Square Meter" && resultUnit === "Square Foot") {
      resultInput.value = inputValue * 10.764;
  } else if (inputUnit === "Square Meter" && resultUnit === "Square Inch") {
      resultInput.value = inputValue * 1550;
  } else if (inputUnit === "Square Meter" && resultUnit === "Acre") {
      resultInput.value = inputValue / 4047;
  } else if (inputUnit === "Square Kilometer" && resultUnit === "Square Meter") {
      resultInput.value = inputValue * 1000000;
  } else if (inputUnit === "Square Kilometer" && resultUnit === "Square Centimeter") {
      resultInput.value = inputValue * 10000000000;
  } else if (inputUnit === "Square Kilometer" && resultUnit === "Square Millimeter") {
      resultInput.value = inputValue * 1000000000000;
  } else if (inputUnit === "Square Kilometer" && resultUnit === "Square Micrometer") {
      resultInput.value = inputValue * 1000000000000000000;
  } else if (inputUnit === "Square Kilometer" && resultUnit === "Hectare") {
      resultInput.value = inputValue * 100;
  } else if (inputUnit === "Square Kilometer" && resultUnit === "Square Mile") {
      resultInput.value = inputValue / 2.59;
  } else if (inputUnit === "Square Kilometer" && resultUnit === "Square Yard") {
      resultInput.value = inputValue * 1196000;
  } else if (inputUnit === "Square Kilometer" && resultUnit === "Square Foot") {
      resultInput.value = inputValue * 10763910.417;
  } else if (inputUnit === "Square Kilometer" && resultUnit === "Square Inch") {
      resultInput.value = inputValue * 1550003100.006;
  } else if (inputUnit === "Square Centimeter" && resultUnit === "Square Meter") {
      resultInput.value = inputValue / 10000;
  } else if (inputUnit === "Square Centimeter" && resultUnit === "Square Kilometer") {
      resultInput.value = inputValue / 10000000000;
  } else if (inputUnit === "Square Centimeter" && resultUnit === "Square Millimeter") {
      resultInput.value = inputValue * 100;
  } else if (inputUnit === "Square Micrometer" && resultUnit === "Square Millimeter") {
    resultInput.value = inputValue / 1000000;
  } else if (inputUnit === "Hectare" && resultUnit === "Square Meter") {
    resultInput.value = inputValue * 10000;
  } else if (inputUnit === "Hectare" && resultUnit === "Square Kilometer") {
    resultInput.value = inputValue / 100;
  } else if (inputUnit === "Hectare" && resultUnit === "Acre") {
    resultInput.value = inputValue * 2.47105;
  } else if (inputUnit === "Square Mile" && resultUnit === "Square Meter") {
    resultInput.value = inputValue * 2589988.11;
  } else if (inputUnit === "Square Mile" && resultUnit === "Square Kilometer") {
    resultInput.value = inputValue * 2.58999;
  } else if (inputUnit === "Square Mile" && resultUnit === "Acre") {
    resultInput.value = inputValue * 640;
  } else if (inputUnit === "Square Yard" && resultUnit === "Square Foot") {
    resultInput.value = inputValue * 9;
  } else if (inputUnit === "Square Yard" && resultUnit === "Square Inch") {
    resultInput.value = inputValue * 1296;
  } else if (inputUnit === "Square Yard" && resultUnit === "Square Meter") {
    resultInput.value = inputValue / 1.19599;
  } else if (inputUnit === "Square Foot" && resultUnit === "Square Inch") {
    resultInput.value = inputValue * 144;
  } else if (inputUnit === "Square Foot" && resultUnit === "Square Meter") {
    resultInput.value = inputValue / 10.7639;
  } else if (inputUnit === "Acre" && resultUnit === "Square Meter") {
    resultInput.value = inputValue * 4046.86;
  } else if (inputUnit === "Acre" && resultUnit === "Square Foot") {
    resultInput.value = inputValue * 43560;
  } else if (inputUnit === "Acre" && resultUnit === "Hectare") {
    resultInput.value = inputValue / 2.47105;

  }
}

// Attach the conversion function to the converter button's click event
converterButton.addEventListener("click", () => {
  updateConversion()
});


});