const state = {
  professionKey: "medecin",
  selected: new Set()
};

const professionGrid = document.getElementById("professionGrid");
const blocksContainer = document.getElementById("blocksContainer");
const metaGrid = document.getElementById("metaGrid");
const professionHeadline = document.getElementById("professionHeadline");
const professionNote = document.getElementById("professionNote");

const cartCard = document.getElementById("cartCard");
const statusBadge = document.getElementById("statusBadge");
const cartSubtitle = document.getElementById("cartSubtitle");
const progressBar = document.getElementById("progressBar");
const progressText = document.getElementById("progressText");
const cartBlocks = document.getElementById("cartBlocks");
const checklist = document.getElementById("checklist");

const resetBtn = document.getElementById("resetBtn");

function getProfession() {
  return window.professionData[state.professionKey];
}

function getSelectionsByBlock() {
  const profession = getProfession();

  return profession.blocks.map((block) => {
    const actions = block.subparts.flatMap((subpart) => subpart.actions);
    const selectedActions = actions.filter((action) => state.selected.has(action.id));

    return {
      block,
      actions,
      selectedActions
    };
  });
}

function handleProfessionSelect(key) {
  state.professionKey = key;
  state.selected = new Set();
  renderAll();
}

function handleToggleAction(actionId, isChecked) {
  if (isChecked) {
    state.selected.add(actionId);
  } else {
    state.selected.delete(actionId);
  }

  renderCartOnly();
}

function renderCartOnly() {
  const profession = getProfession();
  const selectionsByBlock = getSelectionsByBlock();

  window.renderUtils.renderCart({
    profession,
    selectionsByBlock,
    elements: {
      cartCard,
      statusBadge,
      cartSubtitle,
      progressBar,
      progressText,
      cartBlocks,
      checklist
    }
  });
}

function renderAll() {
  const profession = getProfession();

  window.renderUtils.buildProfessionSelector({
    professionData: window.professionData,
    state,
    professionGrid,
    onSelect: handleProfessionSelect
  });

  window.renderUtils.renderMeta({
    profession,
    professionHeadline,
    metaGrid,
    professionNote
  });

  window.renderUtils.renderBlocks({
    profession,
    selected: state.selected,
    blocksContainer,
    onToggle: handleToggleAction
  });

  renderCartOnly();
}

resetBtn.addEventListener("click", () => {
  state.selected = new Set();
  renderAll();
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

renderAll();