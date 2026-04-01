(function () {
  "use strict";

  if (!window.CERTIFICATION_DATA) {
    window.CERTIFICATION_DATA = {
      professions: []
    };
  }

  if (!Array.isArray(window.CERTIFICATION_DATA.professions)) {
    window.CERTIFICATION_DATA.professions = [];
  }
})();