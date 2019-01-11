function createPickrs() {
  const bgPickr = new Pickr({
    // Selector or element which will be replaced with the actual color-picker.
    // Can be a HTMLElement.
    el: ".bgPickr",

    // Using the 'el' Element as button, won't replace it with the pickr-button.
    // If true, appendToBody will also be automatically true.
    useAsButton: false,

    // Start state. If true 'disabled' will be added to the button's classlist.
    disabled: false,

    // If set to false it would directly apply the selected color on the button and preview.
    comparison: true,

    // Default color
    default: State.Colors.background,

    // Default color representation.
    // Valid options are `HEX`, `RGBA`, `HSVA`, `HSLA` and `CMYK`.
    defaultRepresentation: "HEX",

    // Option to keep the color picker always visible. You can still hide / show it via
    // 'pickr.hide()' and 'pickr.show()'. The save button keeps his functionality, so if
    // you click it, it will fire the onSave event.
    showAlways: false,

    // If the color picker should have the body element as it's parent.
    appendToBody: false,

    // Close pickr with this specific key.
    // Default is 'Escape'. Can be the event key or code.
    closeWithKey: "Escape",

    // Defines the position of the color-picker. Available options are
    // top, left and middle relativ to the picker button.
    // If clipping occurs, the color picker will automatically choose his position.
    position: "middle",

    // Enables the ability to change numbers in an input field with the scroll-wheel.
    // To use it set the cursor on a position where a number is and scroll, use ctrl to make steps of five
    adjustableNumbers: true,

    // Show or hide specific components.
    // By default only the palette (and the save button) is visible.
    components: {
      preview: false, // Left side color comparison
      opacity: false, // Opacity slider
      hue: true, // Hue slider

      // Bottom interaction bar, theoretically you could use 'true' as propery.
      // But this would also hide the save-button.
      interaction: {
        hex: true, // hex option  (hexadecimal representation of the rgba value)
        rgba: false, // rgba option (red green blue and alpha)
        hsla: false, // hsla option (hue saturation lightness and alpha)
        hsva: false, // hsva option (hue saturation value and alpha)
        cmyk: false, // cmyk option (cyan mangenta yellow key )

        input: true, // input / output element
        clear: false, // Button which provides the ability to select no color,
        save: true // Save button
      }
    },

    // Button strings, brings the possibility to use a language other than English.
    strings: {
      save: "Apply", // Default for save button
      clear: "Clear" // Default for clear button
    },

    // User has changed the color
    onChange(hsva, instance) {
      hsva; // HSVa color object, if cleared null
      instance; // Current Pickr instance
    },

    // User has clicked the save button
    onSave(hsva, instance) {
      var hex = hsva.toHEX().toString();
      State.Colors.background = hex;
      manipulateImage();
    }
  });

  const txtPickr = new Pickr({
    // Selector or element which will be replaced with the actual color-picker.
    // Can be a HTMLElement.
    el: ".txtPickr",

    // Using the 'el' Element as button, won't replace it with the pickr-button.
    // If true, appendToBody will also be automatically true.
    useAsButton: false,

    // Start state. If true 'disabled' will be added to the button's classlist.
    disabled: false,

    // If set to false it would directly apply the selected color on the button and preview.
    comparison: true,

    // Default color
    default: State.Colors.text,

    // Default color representation.
    // Valid options are `HEX`, `RGBA`, `HSVA`, `HSLA` and `CMYK`.
    defaultRepresentation: "HEX",

    // Option to keep the color picker always visible. You can still hide / show it via
    // 'pickr.hide()' and 'pickr.show()'. The save button keeps his functionality, so if
    // you click it, it will fire the onSave event.
    showAlways: false,

    // If the color picker should have the body element as it's parent.
    appendToBody: false,

    // Close pickr with this specific key.
    // Default is 'Escape'. Can be the event key or code.
    closeWithKey: "Escape",

    // Defines the position of the color-picker. Available options are
    // top, left and middle relativ to the picker button.
    // If clipping occurs, the color picker will automatically choose his position.
    position: "middle",

    // Enables the ability to change numbers in an input field with the scroll-wheel.
    // To use it set the cursor on a position where a number is and scroll, use ctrl to make steps of five
    adjustableNumbers: true,

    // Show or hide specific components.
    // By default only the palette (and the save button) is visible.
    components: {
      preview: false, // Left side color comparison
      opacity: false, // Opacity slider
      hue: true, // Hue slider

      // Bottom interaction bar, theoretically you could use 'true' as propery.
      // But this would also hide the save-button.
      interaction: {
        hex: true, // hex option  (hexadecimal representation of the rgba value)
        rgba: false, // rgba option (red green blue and alpha)
        hsla: false, // hsla option (hue saturation lightness and alpha)
        hsva: false, // hsva option (hue saturation value and alpha)
        cmyk: false, // cmyk option (cyan mangenta yellow key )

        input: true, // input / output element
        clear: false, // Button which provides the ability to select no color,
        save: true // Save button
      }
    },

    // Button strings, brings the possibility to use a language other than English.
    strings: {
      save: "Apply", // Default for save button
      clear: "Clear" // Default for clear button
    },

    // User has changed the color
    onChange(hsva, instance) {
      var hex = hsva.toHEX().toString();
      State.Colors.text = hex;
    },

    // User has clicked the save button
    onSave(hsva, instance) {
      var hex = hsva.toHEX().toString();
      State.Colors.text = hex;
    }
  });

  const imgPickr = new Pickr({
    // Selector or element which will be replaced with the actual color-picker.
    // Can be a HTMLElement.
    el: ".imgPickr",

    // Using the 'el' Element as button, won't replace it with the pickr-button.
    // If true, appendToBody will also be automatically true.
    useAsButton: false,

    // Start state. If true 'disabled' will be added to the button's classlist.
    disabled: false,

    // If set to false it would directly apply the selected color on the button and preview.
    comparison: true,

    // Default color
    default: State.Colors.image,

    // Default color representation.
    // Valid options are `HEX`, `RGBA`, `HSVA`, `HSLA` and `CMYK`.
    defaultRepresentation: "HEX",

    // Option to keep the color picker always visible. You can still hide / show it via
    // 'pickr.hide()' and 'pickr.show()'. The save button keeps his functionality, so if
    // you click it, it will fire the onSave event.
    showAlways: false,

    // If the color picker should have the body element as it's parent.
    appendToBody: false,

    // Close pickr with this specific key.
    // Default is 'Escape'. Can be the event key or code.
    closeWithKey: "Escape",

    // Defines the position of the color-picker. Available options are
    // top, left and middle relativ to the picker button.
    // If clipping occurs, the color picker will automatically choose his position.
    position: "middle",

    // Enables the ability to change numbers in an input field with the scroll-wheel.
    // To use it set the cursor on a position where a number is and scroll, use ctrl to make steps of five
    adjustableNumbers: true,

    // Show or hide specific components.
    // By default only the palette (and the save button) is visible.
    components: {
      preview: false, // Left side color comparison
      opacity: false, // Opacity slider
      hue: true, // Hue slider

      // Bottom interaction bar, theoretically you could use 'true' as propery.
      // But this would also hide the save-button.
      interaction: {
        hex: true, // hex option  (hexadecimal representation of the rgba value)
        rgba: false, // rgba option (red green blue and alpha)
        hsla: false, // hsla option (hue saturation lightness and alpha)
        hsva: false, // hsva option (hue saturation value and alpha)
        cmyk: false, // cmyk option (cyan mangenta yellow key )

        input: true, // input / output element
        clear: false, // Button which provides the ability to select no color,
        save: true // Save button
      }
    },

    // Button strings, brings the possibility to use a language other than English.
    strings: {
      save: "Apply", // Default for save button
      clear: "Clear" // Default for clear button
    },

    // User has changed the color
    onChange(hsva, instance) {},

    // User has clicked the save button
    onSave(hsva, instance) {
      var hex = hsva.toHEX().toString();
      State.Colors.image = hex;
      manipulateImage();
    }
  });
}
