// 1. Grab references to the Form & Inputs
const boxForm = document.getElementById("boxForm");
const widthInput = document.getElementById("contentWidth");
const heightInput = document.getElementById("contentHeight");
const paddingInput = document.getElementById("boxPadding");
const borderInput = document.getElementById("boxBorder");
const marginInput = document.getElementById("boxMargin");

// 2. Grab references to the Visual Layers
const marginLayer = document.getElementById("marginLayer");
const borderLayer = document.getElementById("borderLayer");
const paddingLayer = document.getElementById("paddingLayer");
const contentLayer = document.getElementById("contentLayer");
const dimensionBadge = document.getElementById("dimensionBadge");

// 3. Grab references to Table Output Cells
const metricContentW = document.getElementById("metricContentW");
const metricContentH = document.getElementById("metricContentH");
const metricPaddingW = document.getElementById("metricPaddingW");
const metricPaddingH = document.getElementById("metricPaddingH");
const metricBorderW = document.getElementById("metricBorderW");
const metricBorderH = document.getElementById("metricBorderH");
const metricMarginW = document.getElementById("metricMarginW");
const metricMarginH = document.getElementById("metricMarginH");
const metricTotalW = document.getElementById("metricTotalW");
const metricTotalH = document.getElementById("metricTotalH");

// 4. Update Function
function updateBoxModel() {
  // Read current numeric values from inputs
  const rawWidth = parseFloat(widthInput.value) || 0;
  const rawHeight = parseFloat(heightInput.value) || 0;
  const paddingVal = parseFloat(paddingInput.value) || 0;
  const borderVal = parseFloat(borderInput.value) || 0;
  const marginVal = parseFloat(marginInput.value) || 0;

  // Determine active box-sizing mode from the radio group
  const boxSizingMode = document.querySelector('input[name="boxSizing"]:checked').value;

  let actualContentW = rawWidth;
  let actualContentH = rawHeight;

  // Math calculation according to the active box model
  if (boxSizingMode === "border-box") {
    // In border-box, width includes padding and border
    // Content shrinks to fit whatever space remains
    actualContentW = Math.max(0, rawWidth - (paddingVal * 2) - (borderVal * 2));
    actualContentH = Math.max(0, rawHeight - (paddingVal * 2) - (borderVal * 2));
  }

  // Calculate totals
  const totalVisibleW = actualContentW + (paddingVal * 2) + (borderVal * 2);
  const totalVisibleH = actualContentH + (paddingVal * 2) + (borderVal * 2);

  const totalOccupiedW = totalVisibleW + (marginVal * 2);
  const totalOccupiedH = totalVisibleH + (marginVal * 2);

  // Apply visual styling dynamically to layers
  contentLayer.style.width = `${actualContentW}px`;
  contentLayer.style.height = `${actualContentH}px`;

  paddingLayer.style.padding = `${paddingVal}px`;

  borderLayer.style.borderWidth = `${borderVal}px`;

  marginLayer.style.padding = `${marginVal}px`; // We simulate margin's space using the outer layer padding

  // Update center badge text
  dimensionBadge.textContent = `${Math.round(actualContentW)} × ${Math.round(actualContentH)}`;

  // Update table cells
  metricContentW.textContent = Math.round(actualContentW);
  metricContentH.textContent = Math.round(actualContentH);

  metricPaddingW.textContent = paddingVal * 2;
  metricPaddingH.textContent = paddingVal * 2;

  metricBorderW.textContent = borderVal * 2;
  metricBorderH.textContent = borderVal * 2;

  metricMarginW.textContent = marginVal * 2;
  metricMarginH.textContent = marginVal * 2;

  metricTotalW.textContent = Math.round(totalOccupiedW);
  metricTotalH.textContent = Math.round(totalOccupiedH);
}

// 5. Attach Event Listeners
// Fires in real-time whenever inputs or radio options change
boxForm.addEventListener("input", updateBoxModel);

// Initial calculation on page load
updateBoxModel();