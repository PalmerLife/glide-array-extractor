window.function = function(index, text1, text2, text3, text4, text5, text6, text7, text8) {
  const idx = parseInt(index.value, 10);
  if (isNaN(idx)) {
    throw new Error("The index must be a valid number.");
  }

  // Create an array from the provided text inputs
  const texts = [text1?.value, text2?.value, text3?.value, text4?.value, text5?.value, text6?.value, text7?.value, text8?.value].filter(Boolean);

  if (idx < 0 || idx >= texts.length) {
    throw new Error("Index out of bounds.");
  }

  // Return the string at the given index
  return texts[idx];
};