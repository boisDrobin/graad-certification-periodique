window.renderUtils = {
  buildProfessionSelector({ professionData, state, professionGrid, onSelect }) {
    professionGrid.innerHTML = "";

    Object.entries(professionData).forEach(([key, item]) => {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `profession-btn ${state.professionKey === key ? "active" : ""}`;

      btn.innerHTML = `
        <strong>${item.label}</strong>
        <small>${item.cycle}</small>
        <small>${item.requiredPerBlock} action(s) minimum par bloc dans cette démo</small>
      `;

      btn.addEventListener("click", () => onSelect(key));
      professionGrid.appendChild(btn);
    });
  },

  renderMeta({ profession, professionHeadline, metaGrid, professionNote }) {
    professionHeadline.textContent = `Profession sélectionnée : ${profession.label}`;

    metaGrid.innerHTML = `
      <div class="meta-box">
        <div class="label">Période de certification</div>
        <div class="value">${profession.cycle}</div>
      </div>
      <div class="meta-box">
        <div class="label">Objectif visuel dans cette démo</div>
        <div class="value">${profession.requiredPerBlock} action(s) par bloc</div>
      </div>
      <div class="meta-box">
        <div class="label">Vision simple</div>
        <div class="value">4 blocs à équilibrer</div>
      </div>
    `;

    professionNote.textContent = `${profession.objective} ${profession.firstCycle} ${profession.note}`;
  },

  renderBlocks({ profession, selected, blocksContainer, onToggle }) {
    blocksContainer.innerHTML = "";

    profession.blocks.forEach((block) => {
      const card = document.createElement("section");
      card.className = "block-card";

      const subpartsHtml = block.subparts
        .map((subpart) => {
          const actionsHtml = subpart.actions
            .map(
              (action) => `
                <label class="action-row">
                  <input
                    type="checkbox"
                    data-action-id="${action.id}"
                    ${selected.has(action.id) ? "checked" : ""}
                  />
                  <div>
                    <div class="action-title">${action.title}</div>
                    <div class="action-example">${action.example}</div>
                  </div>
                  <div class="action-tag">${action.tag}</div>
                </label>
              `
            )
            .join("");

          return `
            <article class="subpart">
              <div class="subpart-head">
                <div>
                  <strong>${subpart.title}</strong>
                  <span>${subpart.description}</span>
                </div>
              </div>
              <div class="actions">${actionsHtml}</div>
            </article>
          `;
        })
        .join("");

      card.innerHTML = `
        <div class="block-head" style="background:${block.color}">
          <div>
            <h3>${block.name}</h3>
            <p>${block.description}</p>
          </div>
          <div class="pill">Minimum visé : ${profession.requiredPerBlock}</div>
        </div>
        <div class="block-body">
          <div class="subparts">${subpartsHtml}</div>
        </div>
      `;

      blocksContainer.appendChild(card);
    });

    blocksContainer
      .querySelectorAll('input[type="checkbox"]')
      .forEach((checkbox) => {
        checkbox.addEventListener("change", (event) => {
          onToggle(event.target.dataset.actionId, event.target.checked);
        });
      });
  },

  renderCart({ profession, selectionsByBlock, elements }) {
    const {
      cartCard,
      statusBadge,
      cartSubtitle,
      progressBar,
      progressText,
      cartBlocks,
      checklist
    } = elements;

    const totalNeeded = profession.blocks.length * profession.requiredPerBlock;

    const currentSelectedCount = selectionsByBlock.reduce(
      (sum, entry) => sum + entry.selectedActions.length,
      0
    );

    const cappedProgressCount = selectionsByBlock.reduce(
      (sum, entry) =>
        sum + Math.min(entry.selectedActions.length, profession.requiredPerBlock),
      0
    );

    const progressPercent = Math.round((cappedProgressCount / totalNeeded) * 100);

    const fullyComplete = selectionsByBlock.every(
      (entry) => entry.selectedActions.length >= profession.requiredPerBlock
    );

    const started = currentSelectedCount > 0;

    const almostThere =
      !fullyComplete &&
      selectionsByBlock.filter(
        (entry) => entry.selectedActions.length >= profession.requiredPerBlock
      ).length >= 2;

    cartCard.classList.remove("pending", "warning", "complete");

    if (fullyComplete) {
      cartCard.classList.add("complete");
      statusBadge.textContent = "Panier complet";
    } else if (almostThere) {
      cartCard.classList.add("warning");
      statusBadge.textContent = "Presque prêt";
    } else {
      cartCard.classList.add("pending");
      statusBadge.textContent = started ? "En cours" : "À démarrer";
    }

    cartSubtitle.textContent = `${profession.label} · ${profession.cycle} · objectif de la démo : ${profession.requiredPerBlock} action(s) par bloc`;
    progressBar.style.width = `${progressPercent}%`;
    progressText.textContent = `${currentSelectedCount} action(s) cochée(s) · progression utile : ${cappedProgressCount}/${totalNeeded}`;

    cartBlocks.innerHTML = selectionsByBlock
      .map((entry) => {
        const missing = Math.max(
          0,
          profession.requiredPerBlock - entry.selectedActions.length
        );

        const qtyText =
          entry.selectedActions.length >= profession.requiredPerBlock
            ? `${entry.selectedActions.length}/${profession.requiredPerBlock} ✅`
            : `${entry.selectedActions.length}/${profession.requiredPerBlock} · manque ${missing}`;

        const itemsHtml = entry.selectedActions.length
          ? entry.selectedActions
              .map((item) => `<div class="chip">${item.title}</div>`)
              .join("")
          : '<div class="chip empty">Aucune action sélectionnée pour ce bloc</div>';

        return `
          <div class="cart-block">
            <div class="cart-block-top">
              <div class="cart-block-title">${entry.block.name}</div>
              <div class="cart-qty">${qtyText}</div>
            </div>
            <div class="cart-items">${itemsHtml}</div>
          </div>
        `;
      })
      .join("");

    const checklistItems = selectionsByBlock.map((entry) => {
      const ok = entry.selectedActions.length >= profession.requiredPerBlock;
      const missing = Math.max(
        0,
        profession.requiredPerBlock - entry.selectedActions.length
      );

      return {
        status: ok ? "ok" : entry.selectedActions.length > 0 ? "warn" : "pending",
        text: ok
          ? `${entry.block.name} est rempli pour le scénario de cette démo.`
          : `${entry.block.name} : il manque encore ${missing} action(s) à sélectionner.`
      };
    });

    checklistItems.unshift({
      status: fullyComplete ? "ok" : started ? "warn" : "pending",
      text: fullyComplete
        ? "Le panier est complet : les 4 blocs atteignent l’objectif minimum affiché."
        : "Le panier n’est pas encore complet : il faut équilibrer les sélections sur tous les blocs."
    });

    checklist.innerHTML = checklistItems
      .map(
        (item) => `
          <div class="check-item">
            <div class="dot ${item.status}"></div>
            <div>${item.text}</div>
          </div>
        `
      )
      .join("");
  }
};