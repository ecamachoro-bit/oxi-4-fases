(() => {
  const { fases, documentos, novedades, cambios, calendario, zips, tam_zip } = DATOS;
  const $ = (s) => document.querySelector(s);
  const NS = "http://www.w3.org/2000/svg";
  const RUTA = { regular: "Regular", emergencia: "Emergencia 2026" };
  const nombreFase = (id) => ({ F0: "Apoyo de ProInversión", N: "Norma" }[id] || fases.find((f) => f.id === id).nombre);
  const numFase = (id) => (id.startsWith("F") && id !== "F0" ? id.slice(1) + ". " : "");
  let ruta = "regular", faseActiva = "F1";

  $("#zip-regular").href = zips.regular;
  $("#zip-regular").textContent += ` · ${tam_zip.regular} MB`;
  $("#zip-emergencia").href = zips.emergencia;
  $("#zip-emergencia").textContent += ` · ${tam_zip.emergencia} MB`;

  /* ---------- Tooltip ---------- */
  const tip = $("#tooltip");
  const mostrar = (ev, html) => {
    tip.innerHTML = html; tip.hidden = false;
    tip.style.left = Math.min(ev.clientX + 14, innerWidth - tip.offsetWidth - 8) + "px";
    tip.style.top = Math.min(ev.clientY + 14, innerHeight - tip.offsetHeight - 8) + "px";
  };
  const ocultar = () => (tip.hidden = true);

  /* ---------- Fases ---------- */
  const docsDe = (r, f) => documentos.filter((d) => d.juego === r && d.fase === f);
  function pintarFases() {
    $("#ayuda-ruta").textContent = ruta === "regular"
      ? "Para cualquier inversión o servicio. Haz clic en una fase para ver sus documentos."
      : "Régimen temporal del D.U. N° 010-2026 para IOARR de emergencia y servicios ante El Niño 2026-2027. Haz clic en una fase para ver sus documentos.";
    $("#fases").innerHTML = fases.map((f, i) => {
      const n = docsDe(ruta, f.id).length;
      const hitos = ruta === "regular" ? f.hitos_regular : f.hitos_emergencia;
      return `<li><button type="button" class="fase" data-fase="${f.id}" aria-pressed="${f.id === faseActiva}" style="--c:var(--f${i + 1})">
        <span class="num">${i + 1}</span>
        <span class="nom">${f.nombre}</span>
        <span class="preg">${f.pregunta}</span>
        <ul class="hitos">${hitos.map((h) => `<li>${h}</li>`).join("")}</ul>
        <span class="cnt">${n} documentos ›</span></button></li>`;
    }).join("");
    document.querySelectorAll(".fase").forEach((b) => b.addEventListener("click", () => { faseActiva = b.dataset.fase; pintarFases(); }));
    pintarDetalle();
  }
  function pintarDetalle() {
    const i = fases.findIndex((f) => f.id === faseActiva), f = fases[i];
    const docs = docsDe(ruta, f.id);
    const grupos = [...new Set(docs.map((d) => d.momento))];
    const extra = ruta === "regular" && faseActiva === "F1"
      ? `<p class="sub">En cualquier fase, la entidad puede pedir apoyo a ProInversión con un convenio de asesoría o de encargo (anexos 36 y 37).</p>` : "";
    const det = $("#detalle");
    det.style.setProperty("--c", `var(--f${i + 1})`);
    det.innerHTML = `<h3>Fase ${i + 1}. ${f.nombre}</h3>
      <p>${ruta === "regular" ? f.regular : f.emergencia}</p>${extra}
      <div class="grupos">${grupos.map((g) => `<div class="grupo"><h4>${g}</h4><ul>${docs.filter((d) => d.momento === g).map((d) =>
        `<li><a href="${d.enlace}" target="_blank" rel="noopener">${d.titulo}</a><span>Anexo ${d.n} · ${d.elabora} · ${d.formato}</span></li>`).join("")}</ul></div>`).join("")}</div>`;
  }
  document.querySelectorAll("[data-ruta]").forEach((b) => b.addEventListener("click", () => {
    ruta = b.dataset.ruta;
    document.querySelectorAll("[data-ruta]").forEach((x) => x.setAttribute("aria-pressed", String(x === b)));
    pintarFases();
  }));

  /* ---------- Comparación de plazos ---------- */
  function comparacion() {
    const W = 1060, izq = 190, der = 90, alto = 46, H = 2 * 70 + 40;
    const totales = { regular: calendario.regular.reduce((s, p) => s + p.dias, 0), emergencia: calendario.emergencia.reduce((s, p) => s + p.dias, 0) };
    const x = (v) => izq + (v / totales.regular) * (W - izq - der);
    let h = "";
    for (let v = 0; v <= totales.regular; v += 7) h += `<line class="rejilla-l" x1="${x(v)}" x2="${x(v)}" y1="0" y2="${H - 30}"/><text class="eje" x="${x(v)}" y="${H - 12}" text-anchor="middle">${v}</text>`;
    h += `<text class="eje" x="${W - der + 10}" y="${H - 12}">días hábiles</text>`;
    ["regular", "emergencia"].forEach((r, k) => {
      const y = 20 + k * 70;
      h += `<text x="${izq - 12}" y="${y + alto / 2 + 5}" text-anchor="end" class="etq-ruta">${r === "regular" ? "Ruta regular" : "Emergencia 2026"}</text>`;
      let ini = 0;
      calendario[r].forEach((p, j) => {
        const x0 = x(ini) + (j ? 1 : 0), x1 = x(ini + p.dias) - 1;
        h += `<rect class="tramo ${r}" data-r="${r}" data-j="${j}" data-ini="${ini}" x="${x0}" y="${y}" width="${Math.max(2, x1 - x0)}" height="${alto}" rx="4"/>`;
        ini += p.dias;
      });
      h += `<text x="${x(ini) + 10}" y="${y + alto / 2 + 7}" class="total">${ini}</text>`;
    });
    const svg = document.createElementNS(NS, "svg");
    svg.setAttribute("viewBox", `0 0 ${W} ${H}`);
    svg.setAttribute("role", "img");
    svg.setAttribute("aria-label", `Ruta regular: ${totales.regular} días hábiles; ruta de emergencia: ${totales.emergencia} días hábiles.`);
    svg.innerHTML = h;
    svg.querySelectorAll(".tramo").forEach((t) => {
      const p = calendario[t.dataset.r][+t.dataset.j], ini = +t.dataset.ini;
      t.addEventListener("mousemove", (ev) => mostrar(ev, `<b>${p.paso}</b>${RUTA[t.dataset.r]} · ${p.dias} días hábiles<br>Del día ${ini} al día ${ini + p.dias}`));
      t.addEventListener("mouseleave", ocultar);
    });
    $("#g-comparacion").replaceChildren(svg);
  }

  /* ---------- Novedades ---------- */
  $("#linea-tiempo").innerHTML = novedades.map((n) => `<li><span class="fecha">${n.fecha}</span><b>${n.norma}</b><span>${n.texto}</span></li>`).join("");
  $("#cambios").innerHTML = cambios.map((c) => `<div class="cambio"><b>${c.t}</b><span>${c.d}</span></div>`).join("");

  /* ---------- Catálogo ---------- */
  const fJ = $("#f-juego"), fF = $("#f-fase"), fE = $("#f-elabora"), fT = $("#f-texto");
  [...fases.map((f) => f.id), "F0", "N"].forEach((id) => fF.add(new Option(numFase(id) + nombreFase(id), id)));
  [...new Set(documentos.map((d) => d.elabora))].sort((a, b) => a.localeCompare(b, "es")).forEach((v) => fE.add(new Option(v, v)));
  const norm = (s) => s.normalize("NFD").replace(/[̀-ͯ]/g, "").toLowerCase();
  function tabla() {
    const t = norm(fT.value.trim());
    const docs = documentos.filter((d) => (!fJ.value || d.juego === fJ.value) && (!fF.value || d.fase === fF.value) &&
      (!fE.value || d.elabora === fE.value) && (!t || norm(`${d.titulo} ${d.uso} ${d.momento}`).includes(t)));
    $("#resumen-filtro").textContent = `${docs.length} de ${documentos.length} documentos.`;
    $("#tabla tbody").innerHTML = docs.map((d) => `<tr>
      <td><span class="ruta ${d.juego}">${RUTA[d.juego]}</span></td><td class="num">${d.n || "RD"}</td>
      <td><b>${d.titulo}</b></td><td>${numFase(d.fase)}${nombreFase(d.fase)}</td><td>${d.elabora}</td><td>${d.uso}</td>
      <td>${d.formato}</td><td><a href="${d.enlace}" target="_blank" rel="noopener">Abrir</a></td></tr>`).join("")
      || `<tr><td colspan="8">Ningún documento coincide con los filtros.</td></tr>`;
  }
  [fJ, fF, fE].forEach((el) => el.addEventListener("change", tabla));
  fT.addEventListener("input", tabla);
  $("#f-limpiar").addEventListener("click", () => { fJ.value = fF.value = fE.value = fT.value = ""; tabla(); });

  pintarFases();
  comparacion();
  tabla();
})();
