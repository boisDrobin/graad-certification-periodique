(function () {
  "use strict";

  const professionSelect = document.getElementById("professionSelect");
  const specialitySelect = document.getElementById("specialitySelect");
  const pageTitle = document.getElementById("pageTitle");
  const pageSubtitle = document.getElementById("pageSubtitle");
  const heroIcon = document.getElementById("heroIcon");

  const blocksSection = document.getElementById("blocksSection");
  const blocksGrid = document.getElementById("blocksGrid");

  const resultSection = document.getElementById("resultSection");
  const resultBox = document.getElementById("resultBox");
  const resultTitle = document.getElementById("resultTitle");
  const resultText = document.getElementById("resultText");
  const summaryGrid = document.getElementById("summaryGrid");

  const globalValidated = document.getElementById("globalValidated");
  const globalTotalBlocks = document.getElementById("globalTotalBlocks");
  const globalProgressFill = document.getElementById("globalProgressFill");

  const resetChecksBtn = document.getElementById("resetChecksBtn");
  const expandAllBtn = document.getElementById("expandAllBtn");

  let currentProfession = null;
  let currentProfile = null;

  init();

  function init() {
    if (!window.CERTIFICATION_DATA) {
      console.warn("CERTIFICATION_DATA est introuvable.");
      return;
    }

    if (!Array.isArray(window.CERTIFICATION_DATA.professions)) {
      console.warn("CERTIFICATION_DATA.professions est introuvable ou invalide.");
      return;
    }

    populateProfessions();
    bindEvents();
  }

  function bindEvents() {
    professionSelect.addEventListener("change", handleProfessionChange);
    specialitySelect.addEventListener("change", handleProfileChange);
    resetChecksBtn.addEventListener("click", resetCurrentChecks);
    expandAllBtn.addEventListener("click", toggleAllCards);
  }

  function populateProfessions() {
    professionSelect.innerHTML = `<option value="">-- Choisir --</option>`;

    window.CERTIFICATION_DATA.professions.forEach((profession) => {
      const option = document.createElement("option");
      option.value = profession.id;
      option.textContent = profession.label;
      professionSelect.appendChild(option);
    });
  }

  function handleProfessionChange() {
    const professionId = professionSelect.value;
    currentProfession = findProfessionById(professionId);
    currentProfile = null;

    specialitySelect.innerHTML = "";

    if (!currentProfession) {
      specialitySelect.disabled = true;
      specialitySelect.innerHTML = `<option value="">-- Choisir d'abord une profession --</option>`;
      resetInterface();
      return;
    }

    const profiles = getProfessionProfiles(currentProfession);

    specialitySelect.disabled = false;
    specialitySelect.innerHTML = `<option value="">-- Choisir une fonction / spécialité --</option>`;

    profiles.forEach((profile) => {
      const option = document.createElement("option");
      option.value = profile.id;
      option.textContent = profile.label;
      specialitySelect.appendChild(option);
    });

    resetInterface();
  }

  function handleProfileChange() {
    const profileId = specialitySelect.value;

    if (!currentProfession || !profileId) {
      currentProfile = null;
      resetInterface();
      return;
    }

    currentProfile = findProfileById(currentProfession, profileId);

    if (!currentProfile) {
      resetInterface();
      return;
    }

    applyTheme(currentProfile.theme || {});
    pageTitle.textContent = currentProfile.fullTitle || "Certification Périodique";
    pageSubtitle.textContent = currentProfile.subtitle || "";
    heroIcon.textContent = currentProfile.icon || "🩺";

    renderBlocks(currentProfile);
    updateResults();

    blocksSection.classList.remove("hidden");
    resultSection.classList.remove("hidden");
  }

  function resetInterface() {
    pageTitle.textContent = "Certification Périodique";
    pageSubtitle.textContent =
      "Sélectionnez votre profession puis votre fonction / spécialité pour afficher le bon référentiel.";
    heroIcon.textContent = "🩺";

    blocksGrid.innerHTML = "";
    summaryGrid.innerHTML = "";
    blocksSection.classList.add("hidden");
    resultSection.classList.add("hidden");

    globalValidated.textContent = "0";
    globalTotalBlocks.textContent = "0";
    globalProgressFill.style.width = "0%";
  }

  function applyTheme(theme) {
    if (theme.primary) {
      document.documentElement.style.setProperty("--primary", theme.primary);
    }
    if (theme.primary2) {
      document.documentElement.style.setProperty("--primary-2", theme.primary2);
    }
    if (theme.accent) {
      document.documentElement.style.setProperty("--accent", theme.accent);
    }
  }

  function renderBlocks(profile) {
    const blocks = Array.isArray(profile.blocks) ? profile.blocks : [];
    blocksGrid.innerHTML = "";

    blocks.forEach((block) => {
      const stats = getBlockStats(block);
      const status = getBlockStatus(block, stats);

      const details = document.createElement("details");
      details.className = "block-card";

      if (block.openByDefault) {
        details.open = true;
      }

      details.innerHTML = `
        <summary class="block-card__summary block-card__summary--${escapeHtml(block.colorClass || "bloc1")}">
          <div class="block-card__title-row">
            <h3 class="block-card__title">${escapeHtml(block.label)}</h3>
            <div class="block-card__counter" id="${escapeHtml(block.id)}-counter">
              ${escapeHtml(stats.displayText)}
            </div>
          </div>

          <div class="block-card__rule">
            <strong>${escapeHtml(block.shortLabel || "")}</strong><br>
            ${escapeHtml(block.ruleText || "")}
          </div>

          <span class="block-card__chevron">⌄</span>
        </summary>

        <div class="block-card__body">
          <div class="block-status ${escapeHtml(status.className)}" id="${escapeHtml(block.id)}-status">
            ${escapeHtml(status.label)}
          </div>

          <div class="block-actions-toolbar">
            <div class="block-actions-count">
              ${(block.actions || []).length} action(s) visibles
            </div>

            ${
              Array.isArray(block.allReferentialActions) && block.allReferentialActions.length
                ? `
                  <button
                    class="btn btn--ghost btn--tiny js-toggle-referential"
                    type="button"
                    data-block-id="${escapeHtml(block.id)}"
                  >
                    Voir toutes les actions du référentiel
                  </button>
                `
                : ""
            }
          </div>

          ${
            Array.isArray(block.allReferentialActions) && block.allReferentialActions.length
              ? `
                <div class="block-all-actions" id="${escapeHtml(block.id)}-referential">
                  <h4>Toutes les actions du référentiel affichées pour ce bloc</h4>
                  <ul>
                    ${block.allReferentialActions
                      .map((item) => `<li>${escapeHtml(item)}</li>`)
                      .join("")}
                  </ul>
                </div>
              `
              : ""
          }

          <div class="actions-list">
            ${(block.actions || [])
              .map((action) => {
                const checked = isActionChecked(profile.id, block.id, action.id);

                return `
                  <label class="action-item">
                    <input
                      type="checkbox"
                      data-profile="${escapeHtml(profile.id)}"
                      data-block="${escapeHtml(block.id)}"
                      data-action="${escapeHtml(action.id)}"
                      ${checked ? "checked" : ""}
                    />
                    <span class="action-item__texts">
                      <span class="action-item__title">${escapeHtml(action.label)}</span>
                      <span class="action-item__hint">${escapeHtml(action.hint || "")}</span>
                    </span>
                  </label>
                `;
              })
              .join("")}
          </div>
        </div>
      `;

      blocksGrid.appendChild(details);
    });

    blocksGrid.querySelectorAll('input[type="checkbox"]').forEach((checkbox) => {
      checkbox.addEventListener("change", handleCheckboxChange);
    });

    blocksGrid.querySelectorAll(".js-toggle-referential").forEach((button) => {
      button.addEventListener("click", handleToggleReferential);
    });
  }

  function updateResults() {
    if (!currentProfile) return;

    const blocks = Array.isArray(currentProfile.blocks) ? currentProfile.blocks : [];
    const summary = blocks.map((block) => {
      const stats = getBlockStats(block);
      const status = getBlockStatus(block, stats);
      return { block, stats, status };
    });

    const validatedCount = summary.filter((item) => item.status.isValid).length;
    const totalBlocks = summary.length;

    globalValidated.textContent = String(validatedCount);
    globalTotalBlocks.textContent = String(totalBlocks);
    globalProgressFill.style.width = totalBlocks
      ? `${(validatedCount / totalBlocks) * 100}%`
      : "0%";

    summary.forEach(({ block, stats, status }) => {
      const counterEl = document.getElementById(`${block.id}-counter`);
      const statusEl = document.getElementById(`${block.id}-status`);

      if (counterEl) {
        counterEl.textContent = stats.displayText;
      }

      if (statusEl) {
        statusEl.className = `block-status ${status.className}`;
        statusEl.textContent = status.label;
      }
    });

    renderResult(summary);
    renderSummary(summary);
  }

  function renderResult(summary) {
    const allValid = summary.length > 0 && summary.every((item) => item.status.isValid);
    resultBox.className = "result-box";

    if (allValid) {
      resultBox.classList.add("result-box--success");
      resultTitle.textContent = "Bravo 🎉";
      resultText.textContent =
        "Votre sélection actuelle atteint le minimum requis pour tous les blocs de ce profil.";
      return;
    }

    resultBox.classList.add("result-box--warning");
    resultTitle.textContent = "Parcours en cours";

    const missingText = summary
      .filter((item) => !item.status.isValid)
      .map((item) => `${item.block.label} : ${item.status.details}`)
      .join(" • ");

    resultText.textContent =
      "Il vous manque encore des actions pour compléter votre parcours. " + missingText;
  }

  function renderSummary(summary) {
    summaryGrid.innerHTML = summary
      .map(({ block, stats, status }) => {
        return `
          <div class="summary-card summary-card--${escapeHtml(block.colorClass || "bloc1")}">
            <div class="summary-card__title">${escapeHtml(block.label)}</div>
            <div class="summary-card__line"><strong>${escapeHtml(block.shortLabel || "")}</strong></div>
            <div class="summary-card__line">${escapeHtml(stats.displayText)}</div>
            <div class="summary-card__line">${escapeHtml(status.label)}</div>
          </div>
        `;
      })
      .join("");
  }

  function handleCheckboxChange(event) {
    const checkbox = event.target;
    const profileId = checkbox.dataset.profile;
    const blockId = checkbox.dataset.block;
    const actionId = checkbox.dataset.action;

    setActionChecked(profileId, blockId, actionId, checkbox.checked);
    updateResults();
  }

  function handleToggleReferential(event) {
    const button = event.currentTarget;
    const blockId = button.dataset.blockId;
    const panel = document.getElementById(`${blockId}-referential`);

    if (!panel) return;

    panel.classList.toggle("is-visible");
    button.textContent = panel.classList.contains("is-visible")
      ? "Masquer les actions du référentiel"
      : "Voir toutes les actions du référentiel";
  }

  function toggleAllCards() {
    const cards = Array.from(blocksGrid.querySelectorAll(".block-card"));
    if (!cards.length) return;

    const allOpen = cards.every((card) => card.open);
    cards.forEach((card) => {
      card.open = !allOpen;
    });
  }

  function getBlockStats(block) {
    const actions = Array.isArray(block.actions) ? block.actions : [];
    const checkedActions = actions.filter((action) =>
      isActionChecked(currentProfile.id, block.id, action.id)
    );

    if (block.validationMode === "compound") {
      const dpcMin = Number(block.requirements?.dpcMin || 0);
      const extraMin = Number(block.requirements?.extraMin || 0);

      const dpcCount = checkedActions.filter((action) => action.group === "dpc").length;
      const extraCount = checkedActions.filter((action) => action.group === "extra").length;

      return {
        checkedActions,
        dpcCount,
        extraCount,
        displayText: `${dpcCount}/${dpcMin} DPC + ${extraCount}/${extraMin} autre`
      };
    }

    const min = Number(block.requirements?.min || 0);
    return {
      checkedActions,
      checkedCount: checkedActions.length,
      displayText: `${checkedActions.length}/${min} actions`
    };
  }

  function getBlockStatus(block, stats) {
    if (block.validationMode === "compound") {
      const dpcMin = Number(block.requirements?.dpcMin || 0);
      const extraMin = Number(block.requirements?.extraMin || 0);

      const dpcDone = stats.dpcCount >= dpcMin;
      const extraDone = stats.extraCount >= extraMin;

      if (dpcDone && extraDone) {
        return {
          isValid: true,
          label: "Bloc validé",
          className: "block-status--done",
          details: "complet"
        };
      }

      if (stats.dpcCount > 0 || stats.extraCount > 0) {
        const missingDpc = Math.max(0, dpcMin - stats.dpcCount);
        const missingExtra = Math.max(0, extraMin - stats.extraCount);

        return {
          isValid: false,
          label: "Bloc en cours",
          className: "block-status--progress",
          details: `il manque ${missingDpc} action(s) DPC et ${missingExtra} autre action`
        };
      }

      return {
        isValid: false,
        label: "Bloc non validé",
        className: "block-status--todo",
        details: `il manque ${dpcMin} action(s) DPC et ${extraMin} autre action`
      };
    }

    const min = Number(block.requirements?.min || 0);
    const checkedCount = Number(stats.checkedCount || 0);

    if (checkedCount >= min) {
      return {
        isValid: true,
        label: "Bloc validé",
        className: "block-status--done",
        details: "complet"
      };
    }

    if (checkedCount > 0) {
      return {
        isValid: false,
        label: "Bloc en cours",
        className: "block-status--progress",
        details: `il manque ${min - checkedCount} action(s)`
      };
    }

    return {
      isValid: false,
      label: "Bloc non validé",
      className: "block-status--todo",
      details: `il manque ${min} action(s)`
    };
  }

  function resetCurrentChecks() {
    if (!currentProfile) return;

    localStorage.removeItem(getStorageKey(currentProfile.id));
    renderBlocks(currentProfile);
    updateResults();
  }

  function getStorageKey(profileId) {
    return `certification-periodique:${profileId}`;
  }

  function getStoredState(profileId) {
    try {
      return JSON.parse(localStorage.getItem(getStorageKey(profileId))) || {};
    } catch (error) {
      return {};
    }
  }

  function setStoredState(profileId, state) {
    localStorage.setItem(getStorageKey(profileId), JSON.stringify(state));
  }

  function isActionChecked(profileId, blockId, actionId) {
    const state = getStoredState(profileId);
    return Boolean(state?.[blockId]?.[actionId]);
  }

  function setActionChecked(profileId, blockId, actionId, checked) {
    const state = getStoredState(profileId);

    if (!state[blockId]) {
      state[blockId] = {};
    }

    state[blockId][actionId] = checked;
    setStoredState(profileId, state);
  }

  function findProfessionById(professionId) {
    return window.CERTIFICATION_DATA.professions.find(
      (profession) => profession.id === professionId
    ) || null;
  }

  function getProfessionProfiles(profession) {
    return Array.isArray(profession?.profiles) ? profession.profiles : [];
  }

  function findProfileById(profession, profileId) {
    return getProfessionProfiles(profession).find(
      (profile) => profile.id === profileId
    ) || null;
  }

  function escapeHtml(value) {
    return String(value)
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#039;");
  }
})();