// Declare the module that TypeScript is complaining about
declare module 'tailwindcss/lib/util/flattenColorPalette' {
    // Specify the function signature (it takes a theme object and returns a record of string values)
    const flattenColorPalette: (themeColors) => Record<string, string>;
  
    // Export the function so that it can be used elsewhere in your project
    export default flattenColorPalette;
  }
  