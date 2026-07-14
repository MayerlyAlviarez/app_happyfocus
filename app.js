/* Happy Focus 20/80 · V3 — app principal
   Creado para Mayerly Alviarez. Preact + htm (sin build). */
import { html, render, Component } from "https://unpkg.com/htm@3.1.1/preact/standalone.module.js";

const CONFIG = {
  purchaseLink: "https://shop.beacons.ai/mayerlyalviarez/a112edf2-6cf7-46f5-af31-95323dd69196",
  appLink: "https://mayerlyalviarez.github.io/app_happyfocus/",
  accent: "#8e441f"
};

const PACKS = {
  habito: { label: "Hábito & Constancia", desc: "Construye el músculo de aparecer cada semana.", weeks: [
    { t: "El primer paso", a: "Bloquea 1 hora esta semana solo para tu foco del 20%.", c: "Un hábito nace de aparecer, no de la perfección." },
    { t: "Mismo día, misma hora", a: "Repite tu bloque de enfoque el mismo día y hora que la semana pasada.", c: "Lo que se repite, se vuelve identidad." },
    { t: "Reduce la fricción", a: "Deja todo listo la noche anterior para empezar sin excusas.", c: "Hacerlo fácil es hacerlo posible." },
    { t: "Una sola cosa", a: "Elige UNA acción crítica y termínala antes de abrir otra.", c: "Terminar pesa más que empezar diez veces." },
    { t: "Mide tu racha", a: "Marca cada semana que cumpliste tu bloque de enfoque.", c: "Ver el avance alimenta las ganas." },
    { t: "Mitad del camino", a: "Revisa si tu 20% sigue siendo el correcto y ajústalo.", c: "Enfocarte también es soltar lo que ya no suma." },
    { t: "Protege tu energía", a: "Dile que no a una distracción que suele robarte el foco.", c: "Cada no enfocado es un sí a tu proyecto." },
    { t: "Celebra lo pequeño", a: "Reconoce un avance concreto de estas semanas.", c: "Celebrar sostiene el hábito." },
    { t: "Vuelve sin culpa", a: "Si fallaste una semana, retoma hoy sin reproches.", c: "La constancia no es no caer, es volver." },
    { t: "Comparte tu avance", a: "Cuéntale a alguien qué has logrado con tu foco.", c: "Lo dicho en voz alta se vuelve compromiso." },
    { t: "Afina el cierre", a: "Define qué falta para dar por terminada tu prioridad.", c: "Un final claro acerca el final real." },
    { t: "Cierra y agradece", a: "Cierra tu ciclo y anota qué cambió en ti.", c: "Terminar es el hábito que más te transforma." }
  ]},
  plena: { label: "Atención Plena", desc: "Avanza desde la calma y la presencia.", weeks: [
    { t: "Empieza presente", a: "Antes de tu bloque, respira tres veces y suelta el ruido.", c: "La calma es el primer acto de enfoque." },
    { t: "Una tarea, plena atención", a: "Trabaja tu 20% sin pestañas ni notificaciones abiertas.", c: "La atención dividida no transforma nada." },
    { t: "Escucha tu por qué", a: "Recuerda por qué este proyecto te importa de verdad.", c: "El propósito sostiene el foco." },
    { t: "Haz menos, mejor", a: "Quita una tarea de tu semana en vez de añadir otra.", c: "Menos, hecho con presencia, rinde más." },
    { t: "Observa sin juzgar", a: "Nota qué te distrae, sin pelearte contigo.", c: "Lo que observas con calma, lo puedes cambiar." },
    { t: "Pausa consciente", a: "A mitad del bloque, detente un minuto y vuelve al presente.", c: "El presente es donde ocurre el avance." },
    { t: "Suelta lo urgente", a: "Aplaza algo urgente pero no importante por tu prioridad real.", c: "No todo lo que apura merece tu atención." },
    { t: "Gratitud activa", a: "Agradece un recurso que ya tienes para avanzar.", c: "La gratitud abre claridad." },
    { t: "Regresa al centro", a: "Si te dispersaste, vuelve a tu única prioridad de hoy.", c: "Volver al centro también es avanzar." },
    { t: "Habita el proceso", a: "Disfruta el hacer, no solo el resultado.", c: "Lo que disfrutas, lo sostienes." },
    { t: "Claridad antes del cierre", a: "Define en una frase qué significa terminar esto.", c: "La claridad calma la mente." },
    { t: "Cierra en paz", a: "Cierra el ciclo y honra el camino recorrido.", c: "Terminar en plenitud es el verdadero logro." }
  ]},
  impulso: { label: "Impulso & Logro", desc: "Momentum y resultados que celebras.", weeks: [
    { t: "Arranca con fuerza", a: "Da el primer golpe a tu acción más importante hoy.", c: "El impulso nace del primer movimiento." },
    { t: "Gana momentum", a: "Encadena tu segundo avance antes de que se enfríe.", c: "El momentum se cuida, no se improvisa." },
    { t: "Apunta al resultado", a: "Define cómo se ve 'logrado' en tu prioridad.", c: "Una meta clara acelera el avance." },
    { t: "Acción de alto impacto", a: "Haz la tarea que más mueve la aguja, aunque incomode.", c: "El 20% incómodo trae el 80% del resultado." },
    { t: "Quita el freno", a: "Elimina un obstáculo concreto que te frena.", c: "Avanzar es también despejar el camino." },
    { t: "Chequeo de medio ciclo", a: "Mide cuánto avanzaste y ajusta tu apuesta.", c: "Lo que se mide, se logra." },
    { t: "Pide refuerzo", a: "Pide ayuda a alguien que te acerque a la meta.", c: "Pedir es estrategia, no debilidad." },
    { t: "Capitaliza tus logros", a: "Convierte un avance en el trampolín del siguiente.", c: "Cada logro es combustible." },
    { t: "Acelera el cierre", a: "Recorta lo que sobra y ve directo a terminar.", c: "Terminar es tu mayor ventaja." },
    { t: "Muestra resultados", a: "Comparte un resultado tangible de tu enfoque.", c: "Mostrar tu avance multiplica tu impulso." },
    { t: "Último empujón", a: "Lista lo que falta y agéndalo esta semana.", c: "El cierre se planea, no se espera." },
    { t: "Logro cumplido", a: "Cierra tu prioridad y reconoce tu logro.", c: "Terminar lo importante es ganar." }
  ]}
};

const STEP_LABELS = ["Bienvenida", "Pilares", "Ideas", "Prioriza", "Tu 20%", "Plan 12 semanas", "Mi avance"];
const MOODS = [["flujo", "En flujo"], ["energia", "Con energía"], ["neutral", "Neutral"], ["cansada", "Con cansancio"], ["bloqueada", "En bloqueo"]];

function showAppShell() {
  document.getElementById("landing").hidden = true;
  document.getElementById("app").hidden = false;
}

class App extends Component {
  constructor() {
    super();
    const today = new Date().toISOString().slice(0, 10);
    this.cred = { usuario: "", codigo: "" };
    this._saveTimer = null;
    this._celebrateTimer = null;
    this.pid = 0; this.tid = 0; this.sid = 0;
    this._wantAvance = (() => { try { return /mi-avance|seguimiento|avance/i.test((location.hash || "") + (location.search || "")); } catch (e) { return false; } })();
    const mk = (name) => ({ id: ++this.pid, name });
    this.state = {
      screen: "login",
      step: 0,
      loggingIn: false,
      loginError: "",
      demoName: "", demoEmail: "", demoLeadError: "", demoStarting: false,
      access: null,
      alias: "",
      fechaInicio: today,
      pillars: [mk("Personal"), mk("Familiar"), mk("Trabajo"), mk("Emprendimiento")],
      tasks: [],
      newPillarName: "",
      newTaskName: "",
      newTaskPillar: null,
      pasoDrafts: {},
      celebrate: "",
      critical: [],
      seguimiento: {},
      plan3: {},
      pack: "impulso",
      hora: "09:00",
      notice: "",
      showMissing: false,
      saveState: "",
      segSave: "",
      viewWeek: 0,
      avanceMode: "week",
      recapMonth: 1,
      draft: { animo: "", accion: "", exploro: "", recursos: "", limitaciones: "", logro: "", seguira: "" },
      autoStatus: "",
      bloques: {},
      iaInput: "",
      iaBusy: false,
      iaMsg: "",
      iaErr: "",
      iaKey: (() => { try { return localStorage.getItem("hf_ia_key") || ""; } catch (e) { return ""; } })(),
      showIaCfg: false
    };
    this.bid = 0;
    this.DEMO = { usuario: "demo", codigo: "FOCUS20" };
  }

  componentDidMount() {
    window.__hf = this;
    try { document.documentElement.lang = "es"; } catch (e) {}
    if (!window.HFDB) window.addEventListener("hfdb-ready", () => this.forceUpdate(), { once: true });
    try {
      window.addEventListener("visibilitychange", () => { if (document.visibilityState === "hidden") this._saveNow(); });
      window.addEventListener("pagehide", () => { try { this._saveLocal(); } catch (e) {} });
    } catch (e) {}
    window.HFAPP = {
      go: (where) => {
        if (where === "demo") this.setState({ screen: "demoLead", loginError: "", demoLeadError: "" });
        else this.setState({ screen: "login", loginError: "" });
      }
    };
    if (window.HF && window.HF._pending) { const w = window.HF._pending; window.HF._pending = null; window.HFAPP.go(w); }
    this._autoResume();
  }

  /* ---------- persistencia local + sesión ---------- */
  _planKey(u) { return "hf_plan_" + (u || "anon"); }
  _loadLocal(u) { try { return JSON.parse(localStorage.getItem(this._planKey(u)) || "null"); } catch (e) { return null; } }
  _saveLocal() {
    try {
      const u = this.state.access ? this.state.access.usuario : "";
      if (!u) return;
      localStorage.setItem(this._planKey(u), JSON.stringify(this.planData()));
    } catch (e) {}
  }
  _saveSession(s) { try { localStorage.setItem("hf_session", JSON.stringify(s)); } catch (e) {} }
  _clearSession() { try { localStorage.removeItem("hf_session"); } catch (e) {} }
  _whenDB() {
    return new Promise((res) => {
      if (window.HFDB) return res();
      let done = false; const cb = () => { if (done) return; done = true; res(); };
      window.addEventListener("hfdb-ready", cb, { once: true });
      setTimeout(cb, 6000);
    });
  }
  _newer(a, b) {
    if (!a) return b || null; if (!b) return a;
    const ta = Date.parse(a.actualizado || 0) || 0, tb = Date.parse(b.actualizado || 0) || 0;
    return tb > ta ? b : a;
  }
  _maxPasoId(tasks) { let m = 0; (tasks || []).forEach(t => (t.pasos || []).forEach(p => { m = Math.max(m, p.id || 0); })); return m; }
  _applyPlan(next, plan) {
    if (!plan) return next;
    if (Array.isArray(plan.pillars) && plan.pillars.length) { this.pid = Math.max(...plan.pillars.map(p => p.id || 0)); next.pillars = plan.pillars; }
    if (Array.isArray(plan.tasks)) {
      this.tid = plan.tasks.reduce((m, t) => Math.max(m, t.id || 0), 0);
      this.sid = this._maxPasoId(plan.tasks);
      next.tasks = plan.tasks;
    }
    if (plan.alias) next.alias = plan.alias;
    if (plan.fechaInicio) next.fechaInicio = plan.fechaInicio;
    if (plan.pack) next.pack = plan.pack;
    if (plan.hora) next.hora = plan.hora;
    if (plan.seguimiento && typeof plan.seguimiento === "object") next.seguimiento = plan.seguimiento;
    if (plan.plan3 && typeof plan.plan3 === "object") next.plan3 = plan.plan3;
    if (plan.bloques && typeof plan.bloques === "object") {
      next.bloques = plan.bloques;
      let mb = 0; Object.keys(plan.bloques).forEach(k => (plan.bloques[k] || []).forEach(b => { mb = Math.max(mb, b.id || 0); }));
      this.bid = mb;
    }
    if (typeof plan.step === "number") next.step = Math.max(0, Math.min(6, plan.step));
    // Limpia tareas "huérfanas" (de pilares que ya no existen): eran invisibles en pantalla
    // pero el validador de Prioriza las contaba y bloqueaba el avance (ej. "6 de 8 puntuadas").
    const plList = next.pillars || this.state.pillars || [];
    const tRaw = next.tasks || this.state.tasks || [];
    const tClean = tRaw.filter(t => plList.some(p => p.id === t.pillarId));
    if (tClean.length !== tRaw.length) next.tasks = tClean;
    const tlist = next.tasks || this.state.tasks || [];
    if (Array.isArray(plan.critical) && plan.critical.length) { next.critical = plan.critical.map(id => tlist.find(t => t.id === id)).filter(Boolean); }
    if ((!next.critical || !next.critical.length) && tlist.some(t => t.priority)) { next.critical = this._filterCritical(next.pillars || this.state.pillars, tlist); }
    return next;
  }
  _autoCommitDraft() {
    const st = this.state;
    if (st.step !== 6) return;
    const demo = !!(st.access && st.access.demo);
    const cw = this.currentWeek();
    const editable = demo || (st.viewWeek || cw) === cw;
    if (!editable || !this._segHasContent(st.draft)) return;
    const target = demo ? Math.max(1, Math.min(12, st.viewWeek || cw)) : cw;
    const seguimiento = Object.assign({}, st.seguimiento);
    seguimiento[target] = Object.assign({}, st.draft, { savedAt: new Date().toISOString() });
    this.state.seguimiento = seguimiento;
  }
  _flushSave() {
    this._autoCommitDraft();
    this._saveLocal();
    const st = this.state;
    const u = st.access ? st.access.usuario : "";
    // Miembros guardan en planes/<usuario>; las demos en planes/demo-<correo> (así conservas los datos de cada lead).
    if (u && u !== "demo" && window.HFDB && window.HFDB.ok) {
      window.HFDB.savePlan(u, this.planData())
        .then(() => this.setState({ autoStatus: "saved" }))
        .catch((e) => { console.warn(e); this.setState({ autoStatus: "local" }); });
    } else {
      this.setState({ autoStatus: st.access ? "local" : "" });
    }
  }
  _touch() {
    if (this.state.autoStatus !== "saving") this.setState({ autoStatus: "saving" });
    clearTimeout(this._saveTimer);
    this._saveTimer = setTimeout(() => this._flushSave(), 700);
  }
  _saveNow() { clearTimeout(this._saveTimer); this._flushSave(); }
  _autoResume() {
    let sess = null;
    try { sess = JSON.parse(localStorage.getItem("hf_session") || "null"); } catch (e) {}
    if (!sess || !sess.usuario) return;
    const u = sess.usuario;
    const local = this._loadLocal(u);
    showAppShell();
    if (sess.demo) {
      // Sesión demo antigua (compartía datos entre personas): se limpia y se pide el lead de nuevo.
      if (!sess.lead || u === "demo") {
        try { localStorage.removeItem(this._planKey("demo")); } catch (e) {}
        this._clearSession();
        this.setState({ screen: "demoLead" });
        return;
      }
      const seed = this._demoSeedState();
      const next = Object.assign({ screen: "app", step: 0, access: { usuario: u, nombre: sess.lead.nombre || "Invitado", email: sess.lead.email || "", demo: true }, alias: sess.lead.nombre || "Invitado", demoEmail: sess.lead.email || "", autoStatus: "demo" }, seed);
      this._applyPlan(next, local); // solo el plan de ESTA persona (clave por lead)
      this.setState(next);
      this._resumeDemoRemote(u);
      return;
    }
    const next = { screen: "app", step: 0, access: Object.assign({ usuario: u }, sess.access || {}, { demo: false }), autoStatus: local ? "local" : "" };
    this._applyPlan(next, local);
    if (!next.alias) next.alias = (sess.access && sess.access.nombre) || u;
    this.setState(next);
    this._resumeRemote(u, sess);
  }
  async _resumeRemote(u, sess) {
    await this._whenDB();
    if (!window.HFDB || !window.HFDB.ok) return;
    let res = null;
    try { res = await window.HFDB.checkAccess(u, (sess && sess.codigo) || ""); } catch (e) { return; }
    if (!res || res.status !== "ok") { this.logout(); return; }
    const acc = res.access;
    const today = new Date().toISOString().slice(0, 10);
    if (acc.activo === false || (acc.vence && String(acc.vence) < today)) { this.logout(); return; }
    let plan = null; try { plan = await window.HFDB.loadPlan(u); } catch (e) {}
    const local = this._loadLocal(u);
    const chosen = this._newer(plan, local);
    const next = { access: Object.assign({ usuario: u }, acc, { demo: false }), autoStatus: "saved" };
    this._applyPlan(next, chosen);
    if (!next.alias) next.alias = acc.nombre || u;
    this.setState(next);
    if (chosen === local && local) setTimeout(() => this._flushSave(), 60);
  }

  /* ---------- auth ---------- */
  async doLogin() {
    const u = (this.cred.usuario || "").trim().toLowerCase();
    const c = (this.cred.codigo || "").trim();
    if (!u || !c) { this.setState({ loginError: "Ingresa tu usuario y tu código." }); return; }
    this.setState({ loggingIn: true, loginError: "" });
    const today = new Date().toISOString().slice(0, 10);

    if (u === this.DEMO.usuario && c === this.DEMO.codigo) {
      this.setState({ screen: "demoLead", loggingIn: false, loginError: "", demoLeadError: "" });
      window.scrollTo({ top: 0 });
      return;
    }
    if (!window.HFDB || !window.HFDB.ok) {
      this.setState({ loggingIn: false, loginError: "No se pudo conectar con la base de datos. Revisa tu internet y vuelve a intentar." });
      return;
    }
    let res = null;
    try { res = await window.HFDB.checkAccess(u, c); } catch (e) { res = { status: "error", message: String(e) }; }
    res = res || { status: "no-user" };
    const proj = window.HFDB.projectId || "tu proyecto";

    if (res.status === "error") {
      const perm = res.code === "permission-denied" || /insufficient permissions|permission/i.test(res.message || "");
      this.setState({ loggingIn: false, loginError: perm
        ? ("La base de datos rechazó la lectura: falta publicar las Reglas de seguridad en el proyecto " + proj + ".")
        : "No se pudo leer la base de datos. Revisa tu conexión e inténtalo otra vez." });
      return;
    }
    if (res.status === "no-user") {
      this.setState({ loggingIn: false, loginError: "No encontré el usuario “" + u + "”. Revisa que esté escrito igual que en tu correo de bienvenida." });
      return;
    }
    if (res.status === "bad-code") {
      this.setState({ loggingIn: false, loginError: "El usuario existe, pero el código no coincide. Cópialo tal cual lo recibiste." });
      return;
    }
    const acc = res.access;
    if (acc.activo === false) { this.setState({ loggingIn: false, loginError: "Tu acceso está inactivo. Escríbeme para reactivarlo." }); return; }
    if (acc.vence && String(acc.vence) < today) { this.setState({ loggingIn: false, loginError: "Tu membresía venció. Renueva para continuar." }); return; }

    this._saveSession({ usuario: u, codigo: c, access: { nombre: acc.nombre, vence: acc.vence }, demo: false });
    let plan = null;
    try { plan = await window.HFDB.loadPlan(u); } catch (e) { console.warn(e); }
    const local = this._loadLocal(u);
    const chosen = this._newer(plan, local);
    const next = { screen: "app", step: 0, loggingIn: false, loginError: "", access: { usuario: u, ...acc }, autoStatus: "saved" };
    this._applyPlan(next, chosen);
    if (!next.alias) next.alias = acc.nombre || acc.usuario || "";
    if (chosen === local && local) setTimeout(() => this._flushSave(), 80);
    if (this._wantAvance && next.critical && next.critical.length) {
      next.step = 6;
      const cwk = this._currentWeekFrom(next.fechaInicio || this.state.fechaInicio);
      next.viewWeek = cwk;
      next.draft = this._blankDraft((next.seguimiento || {})[cwk]);
    }
    this.setState(next);
    window.scrollTo({ top: 0 });
  }
  _saveLead(lead) {
    try { const key = "hf_demo_leads"; const arr = JSON.parse(localStorage.getItem(key) || "[]"); arr.push(lead); localStorage.setItem(key, JSON.stringify(arr)); } catch (e) {}
    try { if (window.HFDB && window.HFDB.ok && window.HFDB.saveLead) window.HFDB.saveLead(lead).catch(() => {}); } catch (e) {}
  }
  _demoSeedState() {
    this.pid = 0; this.tid = 0; this.sid = 0;
    const trabajo = { id: ++this.pid, name: "Trabajo" };
    const names = ["Optimizar el proceso de reportes semanales con IA", "Optimizar proceso de cobros y flujo de caja", "Conseguir un nuevo empleo donde gane 25% más"];
    const tasks = names.map(n => ({ id: ++this.tid, pillarId: trabajo.id, name: n, priority: null, actual: "", deseada: "", avance: "", recursos: "", ayuda: "", limitaciones: "", pasos: [] }));
    return { pillars: [trabajo], tasks, newTaskPillar: trabajo.id, critical: [], seguimiento: {}, plan3: {} };
  }
  _demoIdFromEmail(email) {
    const slug = String(email || "").trim().toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
    return "demo-" + (slug || ("invitado-" + Date.now()));
  }
  async _resumeDemoRemote(u) {
    // Si esta misma persona guardó su demo en Firebase (p. ej. desde otro dispositivo), la recupera.
    try {
      await this._whenDB();
      if (!window.HFDB || !window.HFDB.ok) return;
      let plan = null; try { plan = await window.HFDB.loadPlan(u); } catch (e) {}
      const local = this._loadLocal(u);
      const chosen = this._newer(plan, local);
      if (!chosen) return;
      const next = {};
      this._applyPlan(next, chosen);
      this.setState(next);
    } catch (e) {}
  }
  async submitDemoLead() {
    const nombre = (this.state.demoName || "").trim();
    const email = (this.state.demoEmail || "").trim();
    if (!nombre) { this.setState({ demoLeadError: "Escribe tu nombre para comenzar." }); return; }
    if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) { this.setState({ demoLeadError: "Escribe un correo válido para enviarte tu acceso." }); return; }
    if (this.state.demoStarting) return;
    this.setState({ demoStarting: true, demoLeadError: "" });
    const lead = { nombre, email, ts: new Date().toISOString() };
    this._saveLead(lead);
    // Cada persona tiene su propia demo (clave única por correo): nunca ve los datos de otra.
    const demoId = this._demoIdFromEmail(email);
    try { localStorage.removeItem(this._planKey("demo")); } catch (e) {} // limpia la demo compartida antigua
    const seed = this._demoSeedState();
    const next = Object.assign({ screen: "app", step: 0, loggingIn: false, loginError: "", demoLeadError: "", demoStarting: false, access: { usuario: demoId, nombre, email, demo: true }, alias: nombre, demoEmail: email, autoStatus: "demo" }, seed);
    // Si ESTA persona ya probó la demo antes, retoma su propio avance (nunca el de otra).
    let previo = this._loadLocal(demoId);
    try {
      await this._whenDB();
      if (window.HFDB && window.HFDB.ok) {
        const remoto = await window.HFDB.loadPlan(demoId);
        previo = this._newer(remoto, previo);
      }
    } catch (e) {}
    if (previo) this._applyPlan(next, previo);
    this._saveSession({ usuario: demoId, demo: true, lead });
    this.setState(next);
    setTimeout(() => { try { this._flushSave(); } catch (e) {} }, 0);
    window.scrollTo({ top: 0 });
  }
  logout() {
    const wasDemo = !!(this.state.access && this.state.access.demo);
    const demoU = wasDemo && this.state.access ? this.state.access.usuario : "";
    if (wasDemo) this._saveNow(); // deja la demo de esta persona guardada en Firebase antes de salir
    this._clearSession();
    clearTimeout(this._saveTimer);
    this.cred = { usuario: "", codigo: "" };
    if (wasDemo) {
      try { localStorage.removeItem(this._planKey("demo")); } catch (e) {}
      try { if (demoU) localStorage.removeItem(this._planKey(demoU)); } catch (e) {}
    }
    this.setState({ screen: "login", step: 0, loginError: "", demoLeadError: "", access: null, autoStatus: "" });
    if (window.HF) window.HF.backToLanding();
  }

  /* ---------- pilares ---------- */
  addPillar() {
    const name = (this.state.newPillarName || "").trim();
    if (!name || this.state.pillars.length >= 5) return;
    this.setState({ newPillarName: "", pillars: [...this.state.pillars, { id: ++this.pid, name }] });
    this._touch();
  }
  removePillar(id) {
    if (this.state.pillars.length <= 3) return;
    this.setState({ pillars: this.state.pillars.filter(p => p.id !== id), tasks: this.state.tasks.filter(t => t.pillarId !== id) });
    this._touch();
  }
  renamePillar(id, v) {
    this.setState({ pillars: this.state.pillars.map(p => p.id === id ? { ...p, name: v } : p) });
    this._touch();
  }

  /* ---------- ideas / tareas ---------- */
  addTask() {
    const name = (this.state.newTaskName || "").trim();
    if (!name) { this.setState({ notice: "Escribe tu idea antes de agregarla." }); return; }
    const first = (this.state.pillars[0] || {}).id;
    const pillarId = this.state.newTaskPillar != null ? this.state.newTaskPillar : first;
    if (pillarId == null) { this.setState({ notice: "Primero crea al menos un pilar." }); return; }
    const count = this.state.tasks.filter(t => t.pillarId === pillarId).length;
    if (count >= 10) { this.setState({ notice: "Llegaste al máximo de 10 ideas en ese pilar." }); return; }
    this.setState({ notice: "", newTaskName: "", tasks: [...this.state.tasks, { id: ++this.tid, pillarId, name, priority: null, actual: "", deseada: "", avance: "", recursos: "", ayuda: "", limitaciones: "", pasos: [] }] });
    this._touch();
  }
  removeTask(id) { this.setState({ tasks: this.state.tasks.filter(t => t.id !== id) }); this._touch(); }
  setPrio(id, raw) {
    const v = raw === "" ? null : (parseInt(raw, 10) || null);
    this.setState(prev => {
      const tasks = prev.tasks.map(t => t.id === id ? { ...t, priority: v } : t);
      const vis = tasks.filter(t => prev.pillars.some(p => p.id === t.pillarId));
      const completo = vis.length > 0 && vis.every(t => !!t.priority);
      return completo ? { tasks, notice: "", showMissing: false } : { tasks };
    });
    this._touch();
  }
  setField(id, f, v) {
    this.setState(prev => ({ tasks: prev.tasks.map(t => t.id === id ? { ...t, [f]: v } : t), critical: prev.critical.map(t => t.id === id ? { ...t, [f]: v } : t) }));
    this._touch();
  }

  /* ---------- micro-pasos ---------- */
  setPasoDraft(taskId, v) { this.setState({ pasoDrafts: Object.assign({}, this.state.pasoDrafts, { [taskId]: v }) }); }
  addPaso(taskId) {
    const name = ((this.state.pasoDrafts || {})[taskId] || "").trim();
    if (!name) return;
    const t = this.state.tasks.find(x => x.id === taskId);
    if (!t) return;
    if ((t.pasos || []).length >= 7) { this.setState({ notice: "Máximo 7 pasos por acción. Pequeño no significa muchos: significa alcanzable." }); return; }
    const paso = { id: ++this.sid, name, done: false, doneAt: "" };
    const upd = (x) => x.id === taskId ? { ...x, pasos: [...(x.pasos || []), paso] } : x;
    this.setState({ notice: "", tasks: this.state.tasks.map(upd), critical: this.state.critical.map(upd), pasoDrafts: Object.assign({}, this.state.pasoDrafts, { [taskId]: "" }) });
    this._touch();
  }
  togglePaso(taskId, pasoId) {
    let celebrated = false;
    const upd = (x) => {
      if (x.id !== taskId) return x;
      return { ...x, pasos: (x.pasos || []).map(p => {
        if (p.id !== pasoId) return p;
        const done = !p.done;
        if (done) celebrated = true;
        return { ...p, done, doneAt: done ? new Date().toISOString() : "" };
      }) };
    };
    const next = { tasks: this.state.tasks.map(upd), critical: this.state.critical.map(upd) };
    if (celebrated) {
      next.celebrate = taskId + ":" + pasoId;
      clearTimeout(this._celebrateTimer);
      this._celebrateTimer = setTimeout(() => this.setState({ celebrate: "" }), 950);
    }
    this.setState(next);
    this._touch();
  }
  removePaso(taskId, pasoId) {
    const upd = (x) => x.id === taskId ? { ...x, pasos: (x.pasos || []).filter(p => p.id !== pasoId) } : x;
    this.setState({ tasks: this.state.tasks.map(upd), critical: this.state.critical.map(upd) });
    this._touch();
  }

  /* ---------- evidencias / confianza ---------- */
  statsConfianza() {
    const tasks = this.state.tasks || [];
    let done = 0, total = 0;
    tasks.forEach(t => (t.pasos || []).forEach(p => { total++; if (p.done) done++; }));
    const seg = this.state.seguimiento || {};
    const weeks = Array.from({ length: 12 }, (_, i) => i + 1).filter(n => this._segHasContent(seg[n])).length;
    const cw = this.currentWeek();
    let racha = 0;
    let start = this._segHasContent(seg[cw]) ? cw : cw - 1;
    for (let n = start; n >= 1; n--) { if (this._segHasContent(seg[n])) racha++; else break; }
    return { done, total, weeks, racha };
  }

  /* ---------- flujo ---------- */
  _filterCritical(pillars, tasks) {
    const crit = [];
    (pillars || []).forEach(p => {
      const pt = (tasks || []).filter(t => t.pillarId === p.id);
      if (!pt.length) return;
      pt.sort((a, b) => (a.priority || 99) - (b.priority || 99));
      const limit = Math.max(1, Math.ceil(pt.length * 0.20));
      pt.slice(0, limit).forEach(t => crit.push(t));
    });
    return crit;
  }
  process() {
    const crit = this._filterCritical(this.state.pillars, this.state.tasks);
    this.setState({ critical: crit });
    this._touch();
    return crit.length > 0;
  }
  goNext() {
    const s = this.state.step;
    if (s === 2 && this.state.tasks.length === 0) { this.setState({ notice: "Suelta al menos una idea y asígnala a un pilar para continuar." }); return; }
    if (s === 3) {
      // Solo cuentan las actividades visibles (con pilar existente); purga cualquier huérfana.
      const visibles = this.state.tasks.filter(t => this.state.pillars.some(p => p.id === t.pillarId));
      if (visibles.length !== this.state.tasks.length) this.state.tasks = visibles;
      const faltan = visibles.filter(t => !t.priority).length;
      if (faltan > 0) {
        this.setState({
          notice: faltan === 1
            ? "Te falta 1 actividad por puntuar: cada actividad de cada pilar necesita su número. Está marcada arriba en color tierra."
            : "Te faltan " + faltan + " actividades por puntuar: cada actividad de cada pilar necesita su número. Están marcadas arriba en color tierra.",
          showMissing: true
        });
        setTimeout(() => { const el = document.querySelector('[data-missing="1"]'); if (el) el.scrollIntoView({ behavior: "smooth", block: "center" }); }, 80);
        return;
      }
      if (!this.process()) { this.setState({ notice: "No se pudo filtrar. Revisa tus actividades." }); return; }
    }
    const target = Math.min(6, s + 1);
    const extra = { notice: "", showMissing: false, step: target };
    if (target === 6) { const cwk = this.currentWeek(); extra.viewWeek = cwk; extra.avanceMode = "week"; extra.draft = this._blankDraft((this.state.seguimiento || {})[cwk]); }
    this.setState(extra);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  goBack() { this.setState({ notice: "", showMissing: false, step: Math.max(0, this.state.step - 1) }); window.scrollTo({ top: 0, behavior: "smooth" }); }
  goStep(n) {
    const unlocked = !!(this.state.critical && this.state.critical.length > 0);
    if (n <= this.state.step || unlocked) {
      const extra = { notice: "", step: n };
      if (n === 6) { const cwk = this.currentWeek(); extra.viewWeek = cwk; extra.avanceMode = "week"; extra.draft = this._blankDraft((this.state.seguimiento || {})[cwk]); }
      this.setState(extra);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  /* ---------- calendario / guardado ---------- */
  planData() {
    return {
      usuario: this.state.access ? this.state.access.usuario : "",
      esDemo: !!(this.state.access && this.state.access.demo),
      nombre: (this.state.access && this.state.access.nombre) || "",
      email: (this.state.access && this.state.access.email) || "",
      alias: this.state.alias || "",
      fechaInicio: this.state.fechaInicio,
      pillars: this.state.pillars,
      tasks: this.state.tasks,
      critical: this.state.critical.map(t => t.id),
      seguimiento: this.state.seguimiento || {},
      pack: this.state.pack,
      hora: this.state.hora,
      step: this.state.step,
      plan3: this.state.plan3 || {},
      bloques: this.state.bloques || {},
      actualizado: new Date().toISOString()
    };
  }
  async doSave() {
    const u = this.state.access ? this.state.access.usuario : "";
    this._saveLocal();
    if (this.state.access && this.state.access.demo) {
      try {
        if (window.HFDB && window.HFDB.ok && u && u !== "demo") {
          await window.HFDB.savePlan(u, this.planData());
          this.setState({ saveState: "ok", autoStatus: "saved" });
          return;
        }
      } catch (e) { console.warn(e); }
      this.setState({ saveState: "demo" });
      return;
    }
    this.setState({ saveState: "saving" });
    try {
      if (!window.HFDB || !window.HFDB.ok) throw new Error("offline");
      await window.HFDB.savePlan(u, this.planData());
      this.setState({ saveState: "ok", autoStatus: "saved" });
    } catch (e) { console.warn(e); this.setState({ saveState: "err" }); }
  }
  _icsEsc(s) { return String(s).replace(/\\/g, "\\\\").replace(/;/g, "\\;").replace(/,/g, "\\,").replace(/\n/g, "\\n"); }
  _fmt(d) { const p = n => String(n).padStart(2, "0"); return `${d.getFullYear()}${p(d.getMonth() + 1)}${p(d.getDate())}T${p(d.getHours())}${p(d.getMinutes())}00`; }
  weekDate(i) {
    const hm = (this.state.hora || "09:00").split(":");
    const d = new Date(this.state.fechaInicio + "T00:00:00");
    d.setDate(d.getDate() + i * 7);
    d.setHours(parseInt(hm[0]) || 9, parseInt(hm[1]) || 0, 0, 0);
    return d;
  }
  downloadIcs() {
    const pack = PACKS[this.state.pack] || PACKS.plena;
    const alias = this.state.alias || "tú";
    const critList = this.state.critical.map(t => {
      const p = this.state.pillars.find(x => x.id === t.pillarId);
      return "- " + t.name + (p ? " (" + p.name + ")" : "");
    }).join("\n");
    const appLink = (CONFIG.appLink || "").trim();
    const segUrl = appLink ? (appLink + (appLink.indexOf("#") >= 0 ? "" : "#mi-avance")) : "";
    const segLine = segUrl
      ? ("✦ Registra tu semana (1 min): " + segUrl)
      : "✦ Abre tu app Happy Focus y entra a “Mi avance” para registrar tu semana.";
    let ics = "BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Mayerly Alviarez//Happy Focus 20-80//ES\r\nCALSCALE:GREGORIAN\r\nMETHOD:PUBLISH\r\n";
    const stamp = this._fmt(new Date());
    for (let i = 0; i < 12; i++) {
      const w = pack.weeks[i];
      const d = this.weekDate(i);
      const end = new Date(d.getTime() + 30 * 60000);
      const desc = `Semana ${i + 1}/12 — ${w.t}\n\n✦ Tu acción consciente: ${w.a}\n✦ Recuerda: ${w.c}\n\nTu 20% de foco:\n${critList || "(define tus prioridades en la app)"}\n\n${segLine}\n\nTu porqué, ${alias}: tu 20% no es hacer menos, es a lo que le pones enfoque pleno y acción. Ahí empieza tu entrenamiento y es lo que crea el 80% de tu transformación. Deja de ver y empieza a accionar: hoy honras tu prioridad.\n\n— Mayerly Alviarez · Happy Focus 20/80`;
      ics += "BEGIN:VEVENT\r\n";
      ics += `UID:hf-sem${i + 1}-${Date.now()}-${i}@happyfocus\r\n`;
      ics += `DTSTAMP:${stamp}\r\n`;
      ics += `DTSTART:${this._fmt(d)}\r\n`;
      ics += `DTEND:${this._fmt(end)}\r\n`;
      ics += `SUMMARY:${this._icsEsc("Happy Focus · Semana " + (i + 1) + "/12 — " + w.t)}\r\n`;
      ics += `DESCRIPTION:${this._icsEsc(desc)}\r\n`;
      if (segUrl) ics += `URL:${segUrl}\r\n`;
      ics += "BEGIN:VALARM\r\nACTION:DISPLAY\r\nDESCRIPTION:" + this._icsEsc("Mañana: " + w.t + " ✦ Happy Focus") + "\r\nTRIGGER:-P1D\r\nEND:VALARM\r\n";
      ics += "BEGIN:VALARM\r\nACTION:DISPLAY\r\nDESCRIPTION:" + this._icsEsc(w.t + " ✦ " + w.a) + "\r\nTRIGGER:-PT10M\r\nEND:VALARM\r\n";
      ics += "END:VEVENT\r\n";
    }
    ics += "END:VCALENDAR";
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "Happy-Focus-12-semanas.ics";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
    this.setState({ saveState: this.state.saveState === "ok" ? "ok-ics" : "ics" });
  }

  async downloadPillarsImage() {
    try { if (document.fonts && document.fonts.ready) await document.fonts.ready; } catch (e) {}
    const critIds = new Set((this.state.critical || []).map(t => t.id));
    const groups = this.state.pillars.map(p => ({
      name: p.name,
      tasks: this.state.tasks.filter(t => t.pillarId === p.id).slice()
        .sort((a, b) => (a.priority || 99) - (b.priority || 99))
        .map(t => ({ name: t.name, crit: critIds.has(t.id) }))
    })).filter(g => g.tasks.length);
    if (!groups.length) { this.setState({ saveState: "noimg" }); return; }

    const W = 1120, PAD = 60, scale = 2;
    const ink = "#100f0d", cream = "#faf6f5", cocoa = "#68301e", terra = "#8e441f", yellow = "#ffce3a";
    const contentW = W - PAD * 2;
    const mc = document.createElement("canvas").getContext("2d");
    const wrap = (text, font, maxW) => {
      mc.font = font; const words = String(text).split(/\s+/); const lines = []; let line = "";
      for (const w of words) { const t = line ? line + " " + w : w; if (mc.measureText(t).width > maxW && line) { lines.push(line); line = w; } else line = t; }
      if (line) lines.push(line); return lines.length ? lines : [""];
    };
    const fSub = "300 22px 'Poppins',sans-serif", fTask = "500 21px 'Poppins',sans-serif";
    const msg = "Puedes tener todas tus metas presentes. Tu foco está en el 20% que genera el 80% de tus resultados.";
    const subLines = wrap(msg, fSub, contentW - 30);
    const taskMaxW = contentW - 100;
    const blocks = groups.map(g => ({
      name: g.name,
      tasks: g.tasks.map(t => { const lines = wrap(t.name, fTask, taskMaxW); return { name: t.name, crit: t.crit, lines, h: Math.max(54, lines.length * 27 + 24) }; })
    }));

    const headerH = 156, gap1 = 32, subH = subLines.length * 32 + 16, gap2 = 18, legendH = 44, gap3 = 28, gap4 = 10, footerH = 244;
    let bodyH = 0;
    blocks.forEach(b => { bodyH += 52; b.tasks.forEach(t => { bodyH += t.h + 10; }); bodyH += 18; });
    const totalH = PAD + headerH + gap1 + subH + gap2 + legendH + gap3 + bodyH + gap4 + footerH + PAD;

    const canvas = document.createElement("canvas");
    canvas.width = W * scale; canvas.height = Math.round(totalH) * scale;
    const ctx = canvas.getContext("2d");
    ctx.scale(scale, scale);
    ctx.textBaseline = "alphabetic";
    const RR = (x, y, w, h, r) => { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); };

    ctx.fillStyle = cream; ctx.fillRect(0, 0, W, totalH);
    let y = PAD;
    ctx.fillStyle = ink; RR(PAD, y, contentW, headerH, 20); ctx.fill();
    ctx.save(); ctx.beginPath(); RR(PAD, y, contentW, headerH, 20); ctx.clip();
    ctx.strokeStyle = "rgba(223,211,189,0.22)"; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.arc(PAD + contentW - 70, y + headerH - 6, 130, Math.PI, Math.PI * 2); ctx.stroke();
    ctx.strokeStyle = "rgba(142,68,31,0.8)"; ctx.beginPath(); ctx.arc(PAD + contentW - 70, y + headerH - 6, 64, Math.PI, Math.PI * 2); ctx.stroke();
    ctx.restore();
    ctx.fillStyle = terra; ctx.font = "600 15px 'Poppins',sans-serif";
    ctx.fillText("HAPPY FOCUS 20/80", PAD + 36, y + 48);
    ctx.fillStyle = cream; ctx.font = "400 44px 'Marcellus',Georgia,serif";
    ctx.fillText("Mis pilares", PAD + 36, y + 98);
    const who = (this.state.alias || "").trim();
    ctx.fillStyle = "rgba(223,211,189,0.7)"; ctx.font = "300 19px 'Poppins',sans-serif";
    ctx.fillText(who ? ("El 20% que transforma a " + who) : "El 20% que transforma tu trimestre", PAD + 36, y + 130);
    y += headerH + gap1;

    ctx.fillStyle = "rgba(16,15,13,0.74)"; ctx.font = fSub;
    subLines.forEach((ln, i) => ctx.fillText(ln, PAD, y + 22 + i * 32));
    y += subH + gap2;

    ctx.font = "600 16px 'Poppins',sans-serif";
    ctx.fillStyle = yellow; RR(PAD, y + 4, 26, 26, 7); ctx.fill();
    ctx.fillStyle = terra; ctx.font = "700 16px 'Poppins',sans-serif"; ctx.fillText("✦", PAD + 8, y + 23);
    ctx.fillStyle = "rgba(16,15,13,0.78)"; ctx.font = "600 16px 'Poppins',sans-serif"; ctx.fillText("Tu 20% de foco", PAD + 40, y + 23);
    const lw = ctx.measureText("Tu 20% de foco").width;
    const gx = PAD + 40 + lw + 36;
    ctx.fillStyle = "#e7ddce"; RR(gx, y + 4, 26, 26, 7); ctx.fill();
    ctx.fillStyle = "rgba(16,15,13,0.5)"; ctx.fillText("El resto, presente", gx + 40, y + 23);
    y += legendH + gap3;

    blocks.forEach(b => {
      ctx.save(); ctx.fillStyle = terra; ctx.translate(PAD + 8, y + 12); ctx.rotate(Math.PI / 4); ctx.fillRect(-6, -6, 12, 12); ctx.restore();
      ctx.fillStyle = cocoa; ctx.font = "400 27px 'Marcellus',Georgia,serif";
      ctx.fillText(b.name, PAD + 30, y + 24);
      y += 52;
      b.tasks.forEach(t => {
        ctx.fillStyle = t.crit ? yellow : "#f1e9df"; RR(PAD, y, contentW, t.h, 12); ctx.fill();
        if (t.crit) { ctx.fillStyle = terra; ctx.font = "700 20px 'Poppins',sans-serif"; ctx.fillText("✦", PAD + 22, y + t.h / 2 + 7); }
        else { ctx.fillStyle = "rgba(16,15,13,0.28)"; ctx.beginPath(); ctx.arc(PAD + 28, y + t.h / 2, 4, 0, Math.PI * 2); ctx.fill(); }
        ctx.fillStyle = t.crit ? ink : "rgba(16,15,13,0.5)";
        ctx.font = (t.crit ? "600 21px " : "400 21px ") + "'Poppins',sans-serif";
        const th = t.lines.length * 27; const startY = y + (t.h - th) / 2 + 21;
        t.lines.forEach((ln, i) => ctx.fillText(ln, PAD + 54, startY + i * 27));
        if (t.crit) { ctx.fillStyle = terra; ctx.font = "700 13px 'Poppins',sans-serif"; const tg = "20%"; ctx.fillText(tg, PAD + contentW - ctx.measureText(tg).width - 22, y + t.h / 2 + 5); }
        y += t.h + 10;
      });
      y += 18;
    });
    y += gap4;

    const sand = "#dfd3bd";
    ctx.fillStyle = ink; RR(PAD, y, contentW, footerH, 20); ctx.fill();
    ctx.fillStyle = terra; ctx.font = "600 14px 'Poppins',sans-serif";
    ctx.fillText("TU ECOSISTEMA DE CONFIANZA · LAS 3 FASES", PAD + 36, y + 42);
    const phases = [["Fase 1", "Exploración + Acción"], ["Fase 2", "Iterar · Evaluar · Medir"], ["Fase 3", "Internalización"]];
    const innerL = PAD + 36, innerW = contentW - 72, segW = innerW / 3, cy = y + 116;
    ctx.strokeStyle = "rgba(223,211,189,0.3)"; ctx.lineWidth = 2;
    ctx.beginPath(); ctx.moveTo(innerL + segW * 0.5, cy); ctx.lineTo(innerL + segW * 2.5, cy); ctx.stroke();
    ctx.textAlign = "center";
    phases.forEach((p, i) => {
      const cx = innerL + segW * (i + 0.5);
      ctx.fillStyle = i === 0 ? "#c75a2a" : (i === 1 ? terra : "#7a3417");
      ctx.beginPath(); ctx.arc(cx, cy, 27, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = cream; ctx.font = "700 18px 'Poppins',sans-serif"; ctx.fillText(String(i + 1), cx, cy + 7);
      ctx.fillStyle = sand; ctx.font = "600 16px 'Poppins',sans-serif"; ctx.fillText(p[0], cx, cy + 56);
      ctx.fillStyle = "rgba(223,211,189,0.62)"; ctx.font = "300 14px 'Poppins',sans-serif";
      wrap(p[1], "300 14px 'Poppins',sans-serif", segW - 24).forEach((ln, j) => ctx.fillText(ln, cx, cy + 80 + j * 18));
    });
    ctx.fillStyle = "rgba(223,211,189,0.72)"; ctx.font = "300 15px 'Poppins',sans-serif";
    ctx.fillText("Es un proceso, no un resultado: iterar, evaluar, medir y reajustar es parte del camino.", PAD + contentW / 2, y + footerH - 24);
    ctx.textAlign = "left";

    canvas.toBlob((blob) => {
      if (!blob) { this.setState({ saveState: "err" }); return; }
      const a = document.createElement("a");
      a.href = URL.createObjectURL(blob);
      a.download = "Mis-pilares-Happy-Focus.png";
      document.body.appendChild(a); a.click();
      setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(a.href); }, 1000);
      this.setState({ saveState: "img" });
    }, "image/png");
  }

  async downloadMasterActions() {
    try { if (document.fonts && document.fonts.ready) await document.fonts.ready; } catch (e) {}
    const crit = (this.state.critical || []).slice();
    if (!crit.length) { this.setState({ saveState: "noimg" }); return; }
    const pillarName = (id) => { const p = (this.state.pillars || []).find(pp => pp.id === id); return p ? p.name : ""; };
    const items = crit.map(t => ({ name: t.name, pillar: pillarName(t.pillarId) }));

    const W = 1080, PAD = 72, scale = 2;
    const ink = "#100f0d", cream = "#faf6f5", terra = "#8e441f", sand = "#dfd3bd";
    const contentW = W - PAD * 2;
    const mc = document.createElement("canvas").getContext("2d");
    const wrap = (text, font, maxW) => { mc.font = font; const words = String(text).split(/\s+/); const lines = []; let line = ""; for (const w of words) { const t = line ? line + " " + w : w; if (mc.measureText(t).width > maxW && line) { lines.push(line); line = w; } else line = t; } if (line) lines.push(line); return lines.length ? lines : [""]; };
    const fName = "600 30px 'Poppins',sans-serif";
    const blocks = items.map((it) => { const lines = wrap(it.name, fName, contentW - 150); return { name: it.name, pillar: it.pillar, lines, h: Math.max(96, lines.length * 38 + 60) }; });

    const headerH = 200, gap = 26, footerH = 92;
    let bodyH = 0; blocks.forEach(b => bodyH += b.h + 16);
    const totalH = PAD + headerH + gap + bodyH + gap + footerH + PAD;

    const canvas = document.createElement("canvas");
    canvas.width = W * scale; canvas.height = Math.round(totalH) * scale;
    const ctx = canvas.getContext("2d"); ctx.scale(scale, scale); ctx.textBaseline = "alphabetic";
    const RR = (x, y, w, h, r) => { ctx.beginPath(); ctx.moveTo(x + r, y); ctx.arcTo(x + w, y, x + w, y + h, r); ctx.arcTo(x + w, y + h, x, y + h, r); ctx.arcTo(x, y + h, x, y, r); ctx.arcTo(x, y, x + w, y, r); ctx.closePath(); };

    ctx.fillStyle = ink; ctx.fillRect(0, 0, W, totalH);
    const g = ctx.createRadialGradient(W / 2, 170, 20, W / 2, 170, 520); g.addColorStop(0, "rgba(142,68,31,0.22)"); g.addColorStop(1, "rgba(16,15,13,0)"); ctx.fillStyle = g; ctx.fillRect(0, 0, W, 430);
    let y = PAD + 20;
    ctx.save(); ctx.strokeStyle = "rgba(223,211,189,0.16)"; ctx.lineWidth = 2; ctx.beginPath(); ctx.arc(W - PAD - 30, y + 46, 120, Math.PI, Math.PI * 2); ctx.stroke(); ctx.strokeStyle = terra; ctx.beginPath(); ctx.arc(W - PAD - 30, y + 46, 60, Math.PI, Math.PI * 2); ctx.stroke(); ctx.restore();
    ctx.fillStyle = terra; ctx.font = "600 17px 'Poppins',sans-serif"; try { ctx.letterSpacing = "3px"; } catch (e) {}
    ctx.fillText("HAPPY FOCUS · MI 20%", PAD, y + 18); try { ctx.letterSpacing = "0px"; } catch (e) {}
    ctx.fillStyle = cream; ctx.font = "400 60px 'Marcellus',Georgia,serif"; ctx.fillText("Mis acciones maestras", PAD, y + 84);
    const who = (this.state.alias || "").trim();
    ctx.fillStyle = "rgba(223,211,189,0.72)"; ctx.font = "300 23px 'Poppins',sans-serif";
    ctx.fillText(who ? ("El foco de " + who + " este trimestre") : "El foco que crea el 80% de tu transformación", PAD, y + 126);
    y = PAD + headerH + gap;

    blocks.forEach((b, i) => {
      ctx.fillStyle = "rgba(223,211,189,0.06)"; RR(PAD, y, contentW, b.h, 18); ctx.fill();
      ctx.strokeStyle = "rgba(223,211,189,0.14)"; ctx.lineWidth = 1.5; RR(PAD, y, contentW, b.h, 18); ctx.stroke();
      ctx.fillStyle = terra; ctx.beginPath(); ctx.arc(PAD + 46, y + b.h / 2, 26, 0, Math.PI * 2); ctx.fill();
      ctx.fillStyle = cream; ctx.font = "700 26px 'Poppins',sans-serif"; ctx.textAlign = "center"; ctx.fillText(String(i + 1), PAD + 46, y + b.h / 2 + 9); ctx.textAlign = "left";
      if (b.pillar) { ctx.fillStyle = sand; ctx.font = "600 15px 'Poppins',sans-serif"; try { ctx.letterSpacing = "1.5px"; } catch (e) {} ctx.fillText(b.pillar.toUpperCase(), PAD + 96, y + 38); try { ctx.letterSpacing = "0px"; } catch (e) {} }
      ctx.fillStyle = cream; ctx.font = fName;
      b.lines.forEach((ln, j) => ctx.fillText(ln, PAD + 96, y + (b.pillar ? 74 : 60) + j * 38));
      y += b.h + 16;
    });
    y += gap;
    ctx.fillStyle = "rgba(223,211,189,0.6)"; ctx.font = "300 20px 'Poppins',sans-serif"; ctx.textAlign = "center";
    ctx.fillText("Deja de ver y empieza a accionar. · by Mayerly Alviarez", W / 2, y + 34); ctx.textAlign = "left";

    canvas.toBlob((blob) => {
      if (!blob) { this.setState({ saveState: "err" }); return; }
      const a = document.createElement("a"); a.href = URL.createObjectURL(blob);
      a.download = "Mis-acciones-maestras-Happy-Focus.png";
      document.body.appendChild(a); a.click();
      setTimeout(() => { document.body.removeChild(a); URL.revokeObjectURL(a.href); }, 1000);
      this.setState({ saveState: "img" });
    }, "image/png");
  }

  onPlan3(week, field, value) {
    const plan3 = Object.assign({}, this.state.plan3);
    plan3[week] = Object.assign({}, plan3[week], { [field]: value });
    this.setState({ plan3 });
    this._touch();
  }

  /* ---------- bloques de enfoque (20% → calendario) ---------- */
  _bloqueDate(week, dia, hora) {
    const d = new Date(this.state.fechaInicio + "T00:00:00");
    d.setDate(d.getDate() + (week - 1) * 7 + (parseInt(dia, 10) || 0));
    const hm = (hora || "09:00").split(":");
    d.setHours(parseInt(hm[0]) || 9, parseInt(hm[1]) || 0, 0, 0);
    return d;
  }
  gcalUrl(b, week) {
    const start = this._bloqueDate(week, b.dia, b.hora);
    const end = new Date(start.getTime() + (b.dur || 60) * 60000);
    const dates = this._fmt(start) + "/" + this._fmt(end);
    const text = encodeURIComponent("✦ " + b.titulo + " · Happy Focus 20%");
    const details = encodeURIComponent((b.motivo ? b.motivo + "\n\n" : "") + "Bloque de enfoque de tu 20% · Happy Focus 20/80\nRegistra tu avance: " + CONFIG.appLink + "#mi-avance");
    return "https://calendar.google.com/calendar/render?action=TEMPLATE&text=" + text + "&dates=" + dates + "&details=" + details;
  }
  _pendPasos() {
    const out = [];
    (this.state.critical || []).forEach(t => {
      const live = this.state.tasks.find(x => x.id === t.id) || t;
      (live.pasos || []).forEach(p => { if (!p.done) out.push({ t: live, p }); });
    });
    return out;
  }
  _bloquesBase(input) {
    const st = this.state;
    const cw = this.currentWeek();
    const hora = st.hora || "09:00";
    const out = [];
    if (input) out.push({ titulo: input.slice(0, 90), motivo: "Lo que tú definiste como avance de esta semana. Empieza por aquí.", dia: 1, hora, dur: 60 });
    this._pendPasos().slice(0, 2).forEach((x, i) => out.push({ titulo: x.p.name.slice(0, 90), motivo: "Paso pequeño de: " + x.t.name, dia: i === 0 ? 2 : 4, hora, dur: 45 }));
    const wk = (PACKS[st.pack] || PACKS.plena).weeks[cw - 1];
    if (wk && out.length < 4) out.push({ titulo: wk.a.slice(0, 90), motivo: wk.c, dia: 5, hora, dur: 30 });
    if (!out.length && (st.critical || []).length) out.push({ titulo: "Avanzar en: " + st.critical[0].name.slice(0, 70), motivo: "Tu acción maestra número 1.", dia: 1, hora, dur: 60 });
    return out.slice(0, 4);
  }
  _commitBloques(week, list, msg, err) {
    const bloques = Object.assign({}, this.state.bloques);
    bloques[week] = list.map(b => ({ id: ++this.bid, ...b }));
    this.setState({ bloques, iaMsg: msg || "", iaErr: err || "", iaBusy: false });
    this._touch();
  }
  async generarBloques() {
    const st = this.state;
    const week = Math.max(1, Math.min(12, st.viewWeek || this.currentWeek()));
    const input = (st.iaInput || "").trim();
    const base = this._bloquesBase(input);
    if (!st.iaKey) {
      this._commitBloques(week, base, "Bloques creados con tu método. Ajusta día y hora, y mándalos a tu calendario. (Conecta tu IA para afinarlos aún más.)");
      return;
    }
    this.setState({ iaBusy: true, iaErr: "", iaMsg: "" });
    try {
      const crit = (st.critical || []).map(t => {
        const live = st.tasks.find(x => x.id === t.id) || t;
        const pend = (live.pasos || []).filter(p => !p.done).map(p => p.name);
        return "- " + live.name +
          (live.deseada ? " | meta: " + live.deseada : "") +
          (live.avance ? " | avance se ve así: " + live.avance : "") +
          (live.limitaciones ? " | limitación: " + live.limitaciones : "") +
          (pend.length ? " | pasos pendientes: " + pend.join("; ") : "");
      }).join("\n");
      const prev = (st.seguimiento || {})[week - 1];
      const wk = (PACKS[st.pack] || PACKS.plena).weeks[this.currentWeek() - 1];
      const ctx = "Semana " + week + " de 12 del trimestre de " + (st.alias || "la persona") + ".\n" +
        "Su 20% (acciones maestras):\n" + (crit || "(sin definir)") + "\n" +
        (prev && prev.seguira ? "La semana pasada dijo que seguiría: " + prev.seguira + "\n" : "") +
        (wk ? "Tema de la semana según su plan: " + wk.t + " — " + wk.a + "\n" : "") +
        "Hora preferida para sus bloques: " + (st.hora || "09:00") + ".\n\n" +
        "Lo que la persona considera que debe hacer esta semana para avanzar y conseguir un resultado:\n\"" + (input || "(no escribió nada: proponlo tú desde su contexto)") + "\"";
      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: {
          "content-type": "application/json",
          "x-api-key": st.iaKey,
          "anthropic-version": "2023-06-01",
          "anthropic-dangerous-direct-browser-access": "true"
        },
        body: JSON.stringify({
          model: "claude-haiku-4-5-20251001",
          max_tokens: 900,
          system: "Eres el coach del método Happy Focus 20/80 de Mayerly Alviarez. Tono: claro, directo, cálido, sin victimismo ni frases de motivación vacía. Tu trabajo: convertir el contexto de la persona en 3 o 4 BLOQUES DE ENFOQUE para su semana — citas concretas consigo misma, tan pequeñas y específicas que empezar deje de dar miedo. Reglas: cada bloque produce un resultado tangible (no 'trabajar en', sino 'terminar/enviar/publicar/decidir'); reparte los bloques en días distintos; usa la hora preferida como referencia. Responde SOLO con JSON válido, sin texto adicional, con esta forma exacta: {\"mensaje\":\"1-2 frases cálidas y directas para la persona\",\"bloques\":[{\"titulo\":\"acción concreta (máx 80 caracteres)\",\"motivo\":\"por qué este bloque mueve su 20% (máx 120 caracteres)\",\"dia\":0-6 (0=el día en que inicia su semana),\"hora\":\"HH:MM\",\"duracion\":minutos}]}",
          messages: [{ role: "user", content: ctx }]
        })
      });
      if (!res.ok) { const eb = await res.text(); throw new Error("HTTP " + res.status + (res.status === 401 ? " (revisa tu clave)" : "") + " " + eb.slice(0, 80)); }
      const data = await res.json();
      const txt = (data.content || []).map(c => c.text || "").join("");
      const json = JSON.parse(txt.slice(txt.indexOf("{"), txt.lastIndexOf("}") + 1));
      const list = (json.bloques || []).slice(0, 4).map(b => ({
        titulo: String(b.titulo || "").slice(0, 90) || "Bloque de enfoque",
        motivo: String(b.motivo || "").slice(0, 140),
        dia: Math.max(0, Math.min(6, parseInt(b.dia, 10) || 0)),
        hora: /^\d{1,2}:\d{2}$/.test(b.hora || "") ? b.hora : (st.hora || "09:00"),
        dur: Math.max(15, Math.min(180, parseInt(b.duracion, 10) || 60))
      }));
      this._commitBloques(week, list.length ? list : base, json.mensaje || "Aquí están tus bloques. Ajusta lo que necesites y mándalos a tu calendario.");
    } catch (e) {
      console.warn("IA:", e);
      this._commitBloques(week, base, "", "No se pudo conectar con la IA (" + (e.message || e) + "). Creé tus bloques con tu método — funcionan igual.");
    }
  }
  setBloque(week, id, field, v) {
    this.setState(prev => {
      const bloques = Object.assign({}, prev.bloques);
      bloques[week] = (bloques[week] || []).map(b => b.id === id ? { ...b, [field]: (field === "dur" ? parseInt(v, 10) || 60 : field === "dia" ? parseInt(v, 10) || 0 : v) } : b);
      return { bloques };
    });
    this._touch();
  }
  removeBloque(week, id) {
    this.setState(prev => {
      const bloques = Object.assign({}, prev.bloques);
      bloques[week] = (bloques[week] || []).filter(b => b.id !== id);
      return { bloques };
    });
    this._touch();
  }
  addBloqueManual(week) {
    this.setState(prev => {
      const bloques = Object.assign({}, prev.bloques);
      bloques[week] = [...(bloques[week] || []), { id: ++this.bid, titulo: "", motivo: "", dia: 1, hora: prev.hora || "09:00", dur: 60 }];
      return { bloques };
    });
    this._touch();
  }
  saveIaKey(v) {
    const k = (v || "").trim();
    try { if (k) localStorage.setItem("hf_ia_key", k); else localStorage.removeItem("hf_ia_key"); } catch (e) {}
    this.setState({ iaKey: k, showIaCfg: false, iaMsg: k ? "IA conectada. Tus próximos bloques se afinarán con ella." : "IA desconectada. Tus bloques se crean con el método." });
  }
  downloadBloquesIcs(week) {
    const list = (this.state.bloques || {})[week] || [];
    if (!list.length) return;
    let ics = "BEGIN:VCALENDAR\r\nVERSION:2.0\r\nPRODID:-//Mayerly Alviarez//Happy Focus Bloques//ES\r\nCALSCALE:GREGORIAN\r\nMETHOD:PUBLISH\r\n";
    const stamp = this._fmt(new Date());
    list.forEach((b, i) => {
      if (!b.titulo) return;
      const d = this._bloqueDate(week, b.dia, b.hora);
      const end = new Date(d.getTime() + (b.dur || 60) * 60000);
      ics += "BEGIN:VEVENT\r\n";
      ics += "UID:hf-blq-" + week + "-" + b.id + "-" + Date.now() + "@happyfocus\r\n";
      ics += "DTSTAMP:" + stamp + "\r\n";
      ics += "DTSTART:" + this._fmt(d) + "\r\n";
      ics += "DTEND:" + this._fmt(end) + "\r\n";
      ics += "SUMMARY:" + this._icsEsc("✦ " + b.titulo + " · Happy Focus 20%") + "\r\n";
      ics += "DESCRIPTION:" + this._icsEsc((b.motivo ? b.motivo + "\n\n" : "") + "Bloque de enfoque de tu 20% · Happy Focus 20/80") + "\r\n";
      ics += "BEGIN:VALARM\r\nACTION:DISPLAY\r\nDESCRIPTION:" + this._icsEsc("En 10 min: " + b.titulo + " ✦ Happy Focus") + "\r\nTRIGGER:-PT10M\r\nEND:VALARM\r\n";
      ics += "END:VEVENT\r\n";
    });
    ics += "END:VCALENDAR";
    const blob = new Blob([ics], { type: "text/calendar;charset=utf-8" });
    const a = document.createElement("a");
    a.href = URL.createObjectURL(blob);
    a.download = "Happy-Focus-bloques-semana-" + week + ".ics";
    document.body.appendChild(a); a.click(); document.body.removeChild(a);
  }

  /* ---------- seguimiento ---------- */
  _blankDraft(obj) { return Object.assign({ animo: "", accion: "", exploro: "", recursos: "", limitaciones: "", logro: "", seguira: "" }, obj || {}); }
  _currentWeekFrom(iso) {
    try {
      const s = new Date((iso || "") + "T00:00:00");
      if (isNaN(s.getTime())) return 1;
      const n = new Date(); s.setHours(0, 0, 0, 0); n.setHours(0, 0, 0, 0);
      const wk = Math.floor((n - s) / (7 * 86400000)) + 1;
      return Math.max(1, Math.min(12, wk));
    } catch (e) { return 1; }
  }
  currentWeek() { return this._currentWeekFrom(this.state.fechaInicio); }
  moodLabel(k) { const m = { flujo: "En flujo", energia: "Con energía", neutral: "Neutral", cansada: "Con cansancio", bloqueada: "En bloqueo" }; return m[k] || ""; }
  _segHasContent(e) { return !!e && ["accion", "exploro", "recursos", "limitaciones", "logro", "seguira", "animo"].some(k => (e[k] || "").toString().trim()); }
  onSegField(field, v) { this.setState({ draft: Object.assign({}, this.state.draft, { [field]: v }), segSave: "" }); this._touch(); }
  setAnimo(k) { this.setState({ draft: Object.assign({}, this.state.draft, { animo: k }), segSave: "" }); this._touch(); }
  viewWeekGo(n) {
    const st = this.state; const demo = !!(st.access && st.access.demo);
    const extra = { viewWeek: n, avanceMode: "week", segSave: "" };
    if (demo || n === this.currentWeek()) extra.draft = this._blankDraft((st.seguimiento || {})[n]);
    this.setState(extra);
  }
  openRecap(m) { this.setState({ avanceMode: "recap", recapMonth: m, segSave: "" }); window.scrollTo({ top: 0, behavior: "smooth" }); }
  openRecapAll() { this.setState({ avanceMode: "recap", recapMonth: "all", segSave: "" }); window.scrollTo({ top: 0, behavior: "smooth" }); }
  closeRecap() { const cw = this.currentWeek(); this.setState({ avanceMode: "week", viewWeek: cw, draft: this._blankDraft((this.state.seguimiento || {})[cw]), segSave: "" }); }
  planDataWith(seg) { const d = this.planData(); d.seguimiento = seg || (this.state.seguimiento || {}); return d; }
  saveWeekEntry() {
    const st = this.state; const demo = !!(st.access && st.access.demo);
    const target = demo ? Math.max(1, Math.min(12, st.viewWeek || this.currentWeek())) : this.currentWeek();
    const entry = Object.assign({}, st.draft, { savedAt: new Date().toISOString() });
    const seguimiento = Object.assign({}, st.seguimiento); seguimiento[target] = entry;
    this.state.seguimiento = seguimiento;
    this.setState({ seguimiento, segSave: "saving", autoStatus: "saved" });
    this._saveLocal();
    if (demo) { setTimeout(() => this.setState({ segSave: "demo-ok" }), 250); return; }
    const u = st.access ? st.access.usuario : "";
    (async () => {
      try { if (!window.HFDB || !window.HFDB.ok) throw new Error("offline"); await window.HFDB.savePlan(u, this.planDataWith(seguimiento)); this.setState({ segSave: "ok" }); }
      catch (e) { console.warn(e); this.setState({ segSave: "err" }); }
    })();
  }

  /* =====================================================
     RENDER
  ===================================================== */
  render() {
    const st = this.state;
    if (st.screen === "login") return this.rLogin();
    if (st.screen === "demoLead") return this.rDemoLead();
    return this.rApp();
  }

  rAuthShell(children) {
    return html`
      <div class="screen-dark">
        <div style="position:absolute;top:-160px;right:-120px;width:520px;height:520px;border-radius:50%;border:1px solid rgba(223,211,189,.08)"></div>
        <div style="position:absolute;bottom:-220px;left:-160px;width:620px;height:620px;border-radius:50%;border:1px solid rgba(223,211,189,.06)"></div>
        <div class="auth-box">${children}</div>
        <div style="position:fixed;right:14px;bottom:11px;z-index:40;pointer-events:none;font-size:.66rem;color:rgba(223,211,189,.45)">V3-2026 by Mayerly Alviarez</div>
      </div>`;
  }

  rLogin() {
    const st = this.state;
    return this.rAuthShell(html`
      <div style="display:flex;flex-direction:column;align-items:center;text-align:center;margin-bottom:30px">
        <img src="assets/logo-iso.png" alt="Isotipo Happy Focus" style="height:62px;width:auto;opacity:.95;margin-bottom:22px" />
        <img src="assets/marca-clara.png" alt="Mayerly Alviarez" style="height:30px;width:auto;opacity:.92" />
        <div style="margin-top:26px;height:1px;width:46px;background:var(--terra)"></div>
        <div style="font-family:'Marcellus',serif;color:var(--sand);font-size:1.55rem;margin-top:24px;line-height:1.25">Happy Focus <span style="color:var(--terra)">20/80</span></div>
        <p style="color:rgba(223,211,189,.62);font-size:.92rem;font-weight:300;line-height:1.6;max-width:340px;margin:14px auto 0">Tu espacio para terminar lo que empiezas: tus pilares, tu 20% y tus avances de cada semana, en un solo lugar.</p>
      </div>
      <div class="auth-card">
        <span class="eyebrow" style="margin-bottom:18px">Acceso de miembros</span>
        <div class="field" style="margin-top:16px">
          <label for="hf-user">Usuario</label>
          <input id="hf-user" type="text" autocomplete="username" placeholder="Tu usuario" onInput=${e => { this.cred.usuario = e.target.value; }} onKeyDown=${e => { if (e.key === "Enter") this.doLogin(); }} />
        </div>
        <div class="field">
          <label for="hf-code">Código de acceso</label>
          <input id="hf-code" type="password" autocomplete="current-password" placeholder="Tu código" onInput=${e => { this.cred.codigo = e.target.value; }} onKeyDown=${e => { if (e.key === "Enter") this.doLogin(); }} />
        </div>
        ${st.loginError && html`<div class="msg-err"><span>✦</span><span>${st.loginError}</span></div>`}
        <button class="btn block" style="margin-top:18px" onClick=${() => this.doLogin()} disabled=${st.loggingIn}>${st.loggingIn ? "Entrando…" : "Entrar a mi foco"}</button>
        <div style="text-align:center;margin-top:18px;font-size:.8rem;color:rgba(16,15,13,.5);font-weight:300">¿Aún no tienes acceso? <a href=${CONFIG.purchaseLink} target="_blank" rel="noopener" style="font-weight:500;text-decoration:none;border-bottom:1px solid rgba(142,68,31,.35)">Obtén tu membresía · $2.99/mes</a></div>
      </div>
      <div style="display:flex;justify-content:space-between;align-items:center;margin-top:18px">
        <a onClick=${() => window.HF.backToLanding()} style="cursor:pointer;font-size:.8rem;color:rgba(223,211,189,.55);font-weight:300">← Conocer el método</a>
        <a onClick=${() => this.setState({ screen: "demoLead" })} style="cursor:pointer;font-size:.8rem;color:rgba(223,211,189,.7);font-weight:400;border-bottom:1px solid rgba(223,211,189,.25)">Probar la demo gratis →</a>
      </div>`);
  }

  rDemoLead() {
    const st = this.state;
    return this.rAuthShell(html`
      <div style="display:flex;flex-direction:column;align-items:center;text-align:center;margin-bottom:26px">
        <img src="assets/logo-iso.png" alt="Isotipo Happy Focus" style="height:54px;width:auto;opacity:.95;margin-bottom:20px" />
        <span class="eyebrow">Sesión demo · gratis</span>
        <h2 style="color:var(--paper);font-size:1.9rem;margin:18px 0 0">Prueba Happy Focus</h2>
        <p style="color:rgba(223,211,189,.7);font-size:.94rem;font-weight:300;line-height:1.6;max-width:350px;margin:12px auto 0">Déjame tu nombre y correo para personalizar tu demo y enviarte el acceso completo cuando estés listo.</p>
      </div>
      <div class="auth-card">
        <div class="field">
          <label for="hf-dname">Tu nombre</label>
          <input id="hf-dname" type="text" placeholder="¿Cómo te llamas?" value=${st.demoName} onInput=${e => this.setState({ demoName: e.target.value })} onKeyDown=${e => { if (e.key === "Enter") this.submitDemoLead(); }} />
        </div>
        <div class="field">
          <label for="hf-demail">Tu correo</label>
          <input id="hf-demail" type="email" placeholder="tucorreo@ejemplo.com" value=${st.demoEmail} onInput=${e => this.setState({ demoEmail: e.target.value })} onKeyDown=${e => { if (e.key === "Enter") this.submitDemoLead(); }} />
        </div>
        ${st.demoLeadError && html`<div class="msg-err"><span>✦</span><span>${st.demoLeadError}</span></div>`}
        <button class="btn block" style="margin-top:18px" onClick=${() => this.submitDemoLead()}>${st.demoStarting ? "Preparando tu demo…" : "Comenzar mi demo →"}</button>
        <div style="text-align:center;margin-top:14px" class="hint">Tus datos se guardan de forma privada. Sin spam.</div>
      </div>
      <div style="text-align:center;margin-top:16px"><a onClick=${() => this.setState({ screen: "login", demoLeadError: "" })} style="cursor:pointer;font-size:.8rem;color:rgba(223,211,189,.55);font-weight:300">← Volver al acceso</a></div>`);
  }

  /* ---------- app ---------- */
  rApp() {
    const st = this.state;
    const demo = !!(st.access && st.access.demo);
    const alias = st.alias || (st.access && (st.access.nombre || st.access.usuario)) || "";
    const autoTxt = { saving: "Guardando…", saved: "Guardado ✓", local: "Guardado aquí" }[st.autoStatus] || "";
    const autoColor = { saving: "#c08a2e", saved: "#1f7a4d", local: "#8e441f", demo: "#8e441f" }[st.autoStatus] || "rgba(16,15,13,.2)";
    const unlocked = !!(st.critical && st.critical.length > 0);

    return html`
      <div style="min-height:100vh;display:flex;flex-direction:column">
        <div class="topbar">
          <img src="assets/marca-oscura.png" alt="Mayerly Alviarez" style="height:20px;width:auto" />
          <div class="stepper hfscroll">
            ${STEP_LABELS.map((label, i) => html`
              <div key=${i} class=${"step-it" + (i === st.step ? " active" : "") + (i < st.step ? " done" : "")}
                   style=${(i > st.step && !unlocked) ? "opacity:.55" : ""}
                   onClick=${() => this.goStep(i)}>
                <div class="step-dot">${String(i + 1).padStart(2, "0")}</div>
                <div class="step-lbl">${label}</div>
              </div>`)}
          </div>
          <div style="display:flex;align-items:center;gap:14px">
            <div style="text-align:right;line-height:1.15">
              <div style="font-size:.82rem;font-weight:500;color:var(--cocoa)">${alias || "Miembro"}</div>
              <div style="font-size:.66rem;color:rgba(16,15,13,.45);display:flex;align-items:center;gap:6px;justify-content:flex-end">
                <span style=${"width:7px;height:7px;border-radius:50%;flex-shrink:0;background:" + autoColor}></span>
                ${(demo ? "Modo demo" : "Miembro activo") + (autoTxt ? " · " + autoTxt : "")}
              </div>
            </div>
            <button title="Salir" onClick=${() => this.logout()} style="background:none;border:1px solid var(--line);color:var(--cocoa);width:34px;height:34px;border-radius:9px;cursor:pointer;font-size:.9rem">⏻</button>
          </div>
        </div>
        <main class="app-main">
          ${st.step === 0 && this.rBienvenida()}
          ${st.step === 1 && this.rPilares()}
          ${st.step === 2 && this.rIdeas()}
          ${st.step === 3 && this.rPrioriza()}
          ${st.step === 4 && this.rFoco()}
          ${st.step === 5 && (demo ? this.rPaywall("Tu calendario de 12 semanas", "Planifica tus 3 primeras semanas, entiende las 4 fases del método y recibe recordatorios con acción y motivación en tu celular. Esta sección se activa con tu membresía.") : this.rPlan())}
          ${st.step === 6 && (demo ? this.rPaywall("Tu bitácora semanal", "Registra cada semana, marca tus micro-pasos, mira crecer tus evidencias de confianza y tus recaps mensuales. Esta sección se activa con tu membresía.") : this.rAvance())}
          ${st.notice && html`<div class="notice">✦ ${st.notice}</div>`}
          ${st.step < 6 && html`
            <div class="navrow">
              ${st.step > 0 ? html`<button class="btn ghost" onClick=${() => this.goBack()}>← Atrás</button>` : html`<span></span>`}
              <button class="btn" onClick=${() => this.goNext()}>${st.step === 3 ? "Filtrar mi 20% →" : (st.step === 5 ? "Ir a mi avance →" : "Siguiente →")}</button>
            </div>`}
        </main>
      </div>`;
  }

  rPaywall(title, text) {
    return html`
      <div class="fade">
        <div class="paywall">
          <span class="eyebrow">Versión completa</span>
          <h2 style="font-size:1.7rem;margin:16px 0 0">${title}</h2>
          <p style="font-size:.95rem;font-weight:300;color:rgba(16,15,13,.6);line-height:1.6;max-width:520px;margin:14px auto 0">${text}</p>
          <a class="btn" style="margin-top:22px" href=${CONFIG.purchaseLink} target="_blank" rel="noopener">Activar mi membresía · $2.99/mes</a>
        </div>
      </div>`;
  }

  rConfStrip() {
    const s = this.statsConfianza();
    if (!s.total && !s.weeks) return "";
    const pct = Math.min(100, Math.round(((s.done + s.weeks * 2) / Math.max(1, s.total + 24)) * 100));
    return html`
      <div class="conf-panel" style="margin:22px 0 0">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap">
          <div>
            <div style="font-size:.72rem;letter-spacing:.14em;text-transform:uppercase;color:var(--terra);font-weight:600">Tu confianza en construcción</div>
            <div style="font-family:'Marcellus',serif;font-size:1.3rem;color:var(--paper);margin-top:4px">Evidencias de que cumples lo que te propones</div>
          </div>
        </div>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(130px,1fr));gap:12px;margin-top:18px">
          <div class="conf-stat"><div class="n">${s.done}</div><div class="l">pasos pequeños completados</div></div>
          <div class="conf-stat"><div class="n">${s.weeks}</div><div class="l">semanas registradas de 12</div></div>
          <div class="conf-stat"><div class="n">${s.racha}</div><div class="l">semanas seguidas apareciendo</div></div>
        </div>
        <div class="conf-bar"><div style=${"width:" + pct + "%"}></div></div>
        <div style="font-size:.78rem;color:rgba(223,211,189,.55);font-weight:300;margin-top:10px">Cada promesa cumplida, por pequeña que sea, es un ladrillo. Así se reconstruye la confianza: con pruebas, no con frases.</div>
      </div>`;
  }

  rBienvenida() {
    const st = this.state;
    const demo = !!(st.access && st.access.demo);
    const alias = st.alias || "";
    return html`
      <div class="fade">
        <div class="hero-card">
          <div style="position:absolute;top:-90px;right:-60px;opacity:.5">
            <svg width="260" height="150" viewBox="0 0 260 150" fill="none"><path d="M14 142 A116 116 0 0 1 246 142" stroke="#dfd3bd" stroke-width="1" opacity=".35"/><path d="M48 142 A82 82 0 0 1 212 142" stroke="#dfd3bd" stroke-width="1" opacity=".5"/><path d="M82 142 A48 48 0 0 1 178 142" stroke="#dfd3bd" stroke-width="1" opacity=".7"/><path d="M112 142 A18 18 0 0 1 148 142" stroke="#8e441f" stroke-width="1.4"/></svg>
          </div>
          <div style="position:relative;max-width:640px">
            <span class="eyebrow" style="margin-bottom:18px">${demo ? "Sesión DEMO · versión de prueba" : "Tu trimestre de acción · 12 semanas"}</span>
            <h1 style="margin-top:16px">${alias ? "Hola, " + alias : "Empecemos tu enfoque"}</h1>
            <p style="margin:18px 0 0">Tienes ideas, metas y ganas — pero todo vive en tu cabeza y nada termina de avanzar. Aquí paras de dar vueltas: reúnes tus pilares y tus metas en un solo lugar y eliges tu <b>20%</b>, lo que de verdad mueve tu vida. Luego lo divides en <b>pasos pequeños</b> — pequeños, pero avances — y cada uno que cumples se vuelve <b>evidencia de que sí terminas lo que empiezas</b>. Deja de ver y empieza a accionar.</p>
          </div>
        </div>
        ${this.rConfStrip()}
        <div class="grid c3" style="margin-top:22px">
          <div class="tile"><div class="mini-num">01</div><h3>Vacía tu mente</h3><p>Saca de tu cabeza todo lo que traes; el filtro 80/20 revela lo que de verdad importa.</p></div>
          <div class="tile"><div class="mini-num">02</div><h3>Analiza y divide</h3><p>Audita cada acción clave: dónde estás, a dónde vas, qué te sostiene — y pártela en pasos que sí puedes cumplir.</p></div>
          <div class="tile"><div class="mini-num">03</div><h3>Acciona 12 semanas</h3><p>Cada semana, un recordatorio con acción y motivación llega solo a tu celular. Tú registras tu avance en 1 minuto.</p></div>
        </div>
        <div class="card" style="margin-top:22px">
          <div class="grid c2" style="margin-top:0">
            <div class="field" style="margin:0">
              <label for="hf-alias">¿Cómo quieres que te llamemos?</label>
              <input id="hf-alias" type="text" placeholder="Tu nombre o apodo" value=${st.alias} onInput=${e => { this.setState({ alias: e.target.value }); this._touch(); }} />
            </div>
            <div class="field" style="margin:0">
              <label for="hf-fecha">Fecha de inicio del trimestre</label>
              <input id="hf-fecha" type="date" value=${st.fechaInicio} onInput=${e => { this.setState({ fechaInicio: e.target.value }); this._touch(); }} />
            </div>
          </div>
        </div>
      </div>`;
  }

  rPilares() {
    const st = this.state;
    const demo = !!(st.access && st.access.demo);
    const locked = st.pillars.length <= 3;
    return html`
      <div class="fade">
        <div class="step-head">
          <span class="eyebrow ghost">Paso 2 · Pilares</span>
          <h2 style="margin-top:14px">Tus pilares de esencia</h2>
          <p>Tus pilares son las <b>3 a 5 áreas que sostienen tu vida</b>. No son categorías de una agenda: son lo que te importa de verdad. Nómbralos con tus palabras.</p>
        </div>
        <div style="display:grid;gap:12px;max-width:560px">
          ${st.pillars.map(p => html`
            <div key=${p.id} style="display:flex;gap:10px;align-items:center">
              <span style="width:10px;height:10px;background:var(--terra);transform:rotate(45deg);flex-shrink:0"></span>
              <input type="text" value=${p.name} onInput=${e => this.renamePillar(p.id, e.target.value)}
                style="flex:1;padding:13px 14px;border:1px solid var(--line);border-radius:11px;font-size:.95rem;background:#fff;color:var(--ink);outline:none" />
              <button title="Quitar pilar" onClick=${() => this.removePillar(p.id)} disabled=${locked}
                style=${"background:rgba(142,68,31,.08);border:none;color:var(--terra);width:28px;height:28px;border-radius:50%;cursor:pointer;font-size:.95rem;line-height:1;" + (locked ? "opacity:.35;cursor:not-allowed" : "")}>×</button>
            </div>`)}
        </div>
        ${(!demo && st.pillars.length < 5) && html`
          <div style="display:flex;gap:10px;max-width:560px;margin-top:16px">
            <input type="text" placeholder="Agregar otro pilar (máx. 5)" value=${st.newPillarName}
              onInput=${e => this.setState({ newPillarName: e.target.value })}
              onKeyDown=${e => { if (e.key === "Enter") this.addPillar(); }}
              style="flex:1;padding:13px 14px;border:1px dashed rgba(142,68,31,.35);border-radius:11px;font-size:.95rem;background:transparent;color:var(--ink);outline:none" />
            <button class="btn ghost" onClick=${() => this.addPillar()}>＋ Agregar</button>
          </div>`}
        <p class="hint" style="margin-top:14px">Mínimo 3 pilares. Si un área no sostiene tu vida, no es un pilar: es una tarea.</p>
      </div>`;
  }

  rIdeas() {
    const st = this.state;
    const selPid = st.newTaskPillar != null ? st.newTaskPillar : ((st.pillars[0] || {}).id);
    const selName = (st.pillars.find(p => p.id === selPid) || {}).name || "un pilar";
    const groups = st.pillars.map(p => ({ p, tasks: st.tasks.filter(t => t.pillarId === p.id) }));
    return html`
      <div class="fade">
        <div class="step-head">
          <span class="eyebrow ghost">Paso 3 · Ideas</span>
          <h2 style="margin-top:14px">Suelta tus ideas</h2>
          <p>Este es tu espacio para <b>vaciar la mente</b>: metas, pendientes, sueños, proyectos. Todo lo que da vueltas en tu cabeza, aquí. Sin juzgar si es grande o pequeño.</p>
        </div>
        <div class="card">
          <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:14px">
            ${st.pillars.map(p => html`<button key=${p.id} class=${"chip" + (p.id === selPid ? " on" : "")} onClick=${() => this.setState({ newTaskPillar: p.id, notice: "" })}>${p.name}</button>`)}
          </div>
          <div style="display:flex;gap:10px;flex-wrap:wrap">
            <input type="text" placeholder="Escribe una idea o meta…" value=${st.newTaskName}
              onInput=${e => this.setState({ newTaskName: e.target.value })}
              onKeyDown=${e => { if (e.key === "Enter") this.addTask(); }}
              style="flex:1;min-width:220px;padding:13px 14px;border:1px solid var(--line);border-radius:11px;font-size:.95rem;background:#fff;color:var(--ink);outline:none" />
            <button class="btn" onClick=${() => this.addTask()}>＋ Agregar a ${selName}</button>
          </div>
        </div>
        <div class="grid c2" style="margin-top:22px">
          ${groups.map(g => html`
            <div key=${g.p.id} class="card" style="padding:20px">
              <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px">
                <div style="display:flex;align-items:center;gap:9px"><span style="width:9px;height:9px;background:var(--terra);transform:rotate(45deg)"></span><b style="font-family:'Marcellus',serif;font-weight:400;font-size:1.1rem;color:var(--cocoa)">${g.p.name}</b></div>
                <span class="hint">${g.tasks.length}/10</span>
              </div>
              ${g.tasks.length === 0
                ? html`<div class="hint" style="padding:10px 0">Vacío por ahora…</div>`
                : g.tasks.map(t => html`
                  <div key=${t.id} style="display:flex;gap:10px;align-items:center;padding:9px 12px;border:1px solid var(--line);border-radius:10px;margin-bottom:8px;background:#fff">
                    <span style="flex:1;font-size:.9rem">${t.name}</span>
                    <button title="Quitar" onClick=${() => this.removeTask(t.id)} style="background:none;border:none;color:rgba(16,15,13,.3);cursor:pointer;font-size:1rem">×</button>
                  </div>`)}
            </div>`)}
        </div>
      </div>`;
  }

  rPrioriza() {
    const st = this.state;
    const groups = st.pillars.map(p => ({ p, tasks: st.tasks.filter(t => t.pillarId === p.id) })).filter(g => g.tasks.length);
    const visibles = st.tasks.filter(t => st.pillars.some(p => p.id === t.pillarId));
    const total = visibles.length;
    const hechas = visibles.filter(t => !!t.priority).length;
    const listo = total > 0 && hechas === total;
    const pct = total ? Math.round((hechas / total) * 100) : 0;
    return html`
      <div class="fade">
        <div class="step-head">
          <span class="eyebrow ghost">Paso 4 · Prioriza</span>
          <h2 style="margin-top:14px">Puntúa cada actividad, pilar por pilar</h2>
          <p>Dale un número a <b>cada una</b> de tus actividades dentro de su pilar: el <b>1</b> es lo que más feliz te haría lograr. Aquí todavía <b>no eliges una sola prioridad ni mezclas pilares</b> — eso lo hace el filtro 20/80 en el siguiente paso. Tu único trabajo ahora: que <b>ninguna actividad quede sin número</b>.</p>
        </div>

        <div class="card" style="padding:16px 20px;margin-bottom:18px">
          <div style=${"font-size:.88rem;font-weight:600;color:" + (listo ? "var(--ok)" : "var(--cocoa)")}>
            ${listo ? "✓ Todas puntuadas — ya puedes pulsar “Filtrar mi 20% →”" : ("Has puntuado " + hechas + " de " + total + " actividades")}
          </div>
          <div style="height:7px;border-radius:6px;background:rgba(104,48,30,.12);margin-top:9px;overflow:hidden">
            <div style=${"height:100%;width:" + pct + "%;background:" + (listo ? "var(--ok)" : "var(--terra)") + ";border-radius:6px;transition:width .35s ease"}></div>
          </div>
          ${!listo && html`<div class="hint" style="margin-top:9px;font-size:.78rem">Las actividades con borde punteado color tierra aún esperan su número.</div>`}
        </div>

        ${groups.length === 0 && html`<div class="card"><span class="hint">Sin actividades. Vuelve al paso anterior y suelta tus ideas.</span></div>`}
        ${groups.map(g => {
          const punt = g.tasks.filter(t => !!t.priority).length;
          const completo = punt === g.tasks.length;
          return html`
          <div key=${g.p.id} class="card" style="margin-bottom:16px;padding:20px">
            <div style="display:flex;align-items:center;justify-content:space-between;gap:10px;flex-wrap:wrap;margin-bottom:12px">
              <div style="display:flex;align-items:center;gap:9px"><span style="width:9px;height:9px;background:var(--terra);transform:rotate(45deg)"></span><b style="font-family:'Marcellus',serif;font-weight:400;font-size:1.1rem;color:var(--cocoa)">${g.p.name}</b></div>
              <span class="pill-tag" style=${completo ? "background:rgba(31,122,77,.1);color:var(--ok)" : "background:rgba(142,68,31,.1);color:var(--terra)"}>${completo ? "✓ Pilar listo" : punt + "/" + g.tasks.length + " puntuadas"}</span>
            </div>
            ${g.tasks.map(t => {
              const falta = !t.priority;
              const borde = falta
                ? ("border:1.5px dashed rgba(142,68,31," + (st.showMissing ? ".85" : ".45") + ");background:rgba(142,68,31,.05)")
                : "border:1px solid var(--line);background:#fff";
              return html`
              <div key=${t.id} data-missing=${falta ? "1" : "0"} style=${"display:flex;gap:12px;align-items:center;padding:10px 12px;border-radius:10px;margin-bottom:8px;transition:border-color .2s,background .2s;" + borde}>
                <select value=${t.priority == null ? "" : String(t.priority)} onChange=${e => this.setPrio(t.id, e.target.value)}
                  style=${"padding:9px 10px;border-radius:9px;background:#fff;color:var(--ink);font-size:.88rem;outline:none;border:1px solid " + (falta ? "rgba(142,68,31,.5)" : "var(--line)")}>
                  <option value="">Nº</option>
                  ${g.tasks.map((_, i) => html`<option value=${String(i + 1)}>${i + 1}</option>`)}
                </select>
                <span style="flex:1;font-size:.9rem">${t.name}</span>
                ${falta
                  ? html`<span style="font-size:.72rem;color:var(--terra);font-weight:500;white-space:nowrap">sin puntuar</span>`
                  : html`<span style="color:var(--ok);font-size:.9rem">✓</span>`}
              </div>`;
            })}
          </div>`;
        })}
      </div>`;
  }

  rPasos(t, editable) {
    const st = this.state;
    const pasos = t.pasos || [];
    const doneCount = pasos.filter(p => p.done).length;
    return html`
      <div style="margin-top:18px;border-top:1px dashed var(--line);padding-top:16px">
        <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:10px">
          <div style="font-size:.84rem;font-weight:600;color:var(--cocoa)">✦ Divide en pasos pequeños <span class="hint" style="font-weight:300">(2 a 7 · tan pequeños que no puedas fallar)</span></div>
          ${pasos.length > 0 && html`<span class="pill-tag" style="background:rgba(31,122,77,.1);color:var(--ok)">${doneCount}/${pasos.length} avances</span>`}
        </div>
        <div style="display:grid;gap:8px">
          ${pasos.map(p => html`
            <div key=${p.id} class=${"paso" + (p.done ? " done" : "") + (st.celebrate === t.id + ":" + p.id ? " just" : "")}>
              <button class="paso-check" aria-label=${p.done ? "Desmarcar paso" : "Marcar paso como avance"} onClick=${() => editable && this.togglePaso(t.id, p.id)}>✓</button>
              <span class="paso-name">${p.name}</span>
              ${editable && html`<button class="paso-del" title="Quitar paso" onClick=${() => this.removePaso(t.id, p.id)}>×</button>`}
              ${st.celebrate === t.id + ":" + p.id && html`<span class="burst">✦ +1 avance</span>`}
            </div>`)}
        </div>
        ${editable && pasos.length < 7 && html`
          <div style="display:flex;gap:8px;margin-top:10px">
            <input type="text" placeholder=${pasos.length === 0 ? "Primer paso pequeño… ej: escribir el borrador del correo" : "Otro paso pequeño…"}
              value=${(st.pasoDrafts || {})[t.id] || ""}
              onInput=${e => this.setPasoDraft(t.id, e.target.value)}
              onKeyDown=${e => { if (e.key === "Enter") this.addPaso(t.id); }}
              style="flex:1;padding:11px 13px;border:1px dashed rgba(142,68,31,.35);border-radius:10px;font-size:.88rem;background:transparent;color:var(--ink);outline:none" />
            <button class="btn ghost" style="padding:10px 16px" onClick=${() => this.addPaso(t.id)}>＋</button>
          </div>`}
      </div>`;
  }

  rFoco() {
    const st = this.state;
    const demo = !!(st.access && st.access.demo);
    const cards = st.critical;
    return html`
      <div class="fade">
        <div class="step-head">
          <span class="eyebrow ghost">Paso 5 · Tu 20%</span>
          <h2 style="margin-top:14px">Tus acciones maestras</h2>
          <p>Filtro completado · <b>${cards.length} ${cards.length === 1 ? "acción" : "acciones"} de alto impacto</b>. Este es tu 20%. Ahora dale contexto a cada una — es tu auditoría honesta — y divídela en pasos tan pequeños que empezar deje de dar miedo.</p>
        </div>
        ${cards.length === 0 && html`<div class="card"><span class="hint">Aún no hay filtro. Vuelve a "Prioriza" y asigna prioridades.</span></div>`}
        ${cards.map((t, i) => {
          const p = st.pillars.find(x => x.id === t.pillarId);
          const locked = demo && i > 0;
          const live = st.tasks.find(x => x.id === t.id) || t;
          return html`
            <div key=${t.id} class="card" style=${"margin-bottom:18px;padding:24px;" + (locked ? "opacity:.55;pointer-events:none" : "")}>
              <div style="display:flex;gap:14px;align-items:flex-start;flex-wrap:wrap;margin-bottom:16px">
                <div style="width:40px;height:40px;border-radius:50%;background:var(--terra);color:var(--paper);display:flex;align-items:center;justify-content:center;font-weight:700;flex-shrink:0">${i + 1}</div>
                <div style="flex:1;min-width:200px">
                  ${p && html`<div style="font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;color:var(--terra);font-weight:600">${p.name}</div>`}
                  <div style="font-family:'Marcellus',serif;font-size:1.25rem;color:var(--ink);line-height:1.3">${t.name}</div>
                </div>
                <span class="pill-tag" style="background:var(--gold);color:var(--ink)">✦ 20%</span>
              </div>
              ${locked
                ? html`<div class="hint">Disponible en la versión completa: define el contexto de TODAS tus acciones maestras y sostén tu 20% las 12 semanas.</div>`
                : html`
                  <div class="grid c2" style="margin-top:0">
                    <div class="field" style="margin:0"><label>Situación actual · ¿dónde estás hoy?</label><textarea value=${live.actual || ""} onInput=${e => this.setField(t.id, "actual", e.target.value)} placeholder="Honesto y sin drama…"></textarea></div>
                    <div class="field" style="margin:0"><label>Situación deseada · ¿a dónde vas?</label><textarea value=${live.deseada || ""} onInput=${e => this.setField(t.id, "deseada", e.target.value)} placeholder="Concreto, no abstracto…"></textarea></div>
                    <div class="field" style="margin:0"><label>Recursos activos · ¿con qué cuentas ya?</label><textarea value=${live.recursos || ""} onInput=${e => this.setField(t.id, "recursos", e.target.value)} placeholder="Tiempo, dinero, conocimientos, herramientas…"></textarea></div>
                    <div class="field" style="margin:0"><label>¿Quién puede ayudarte?</label><textarea value=${live.ayuda || ""} onInput=${e => this.setField(t.id, "ayuda", e.target.value)} placeholder="Personas, comunidades, mentores…"></textarea></div>
                    <div class="field" style="margin:0"><label>Limitaciones reales</label><textarea value=${live.limitaciones || ""} onInput=${e => this.setField(t.id, "limitaciones", e.target.value)} placeholder="Lo que sí te limita hoy, sin excusas ni fantasía…"></textarea></div>
                    <div class="field" style="margin:0"><label style="color:var(--terra)">★ ¿Cómo se ve el avance para ti?</label><textarea value=${live.avance || ""} onInput=${e => this.setField(t.id, "avance", e.target.value)} placeholder="Define qué contará como avance. Así lo reconocerás cuando llegue…"></textarea></div>
                  </div>
                  ${this.rPasos(live, true)}`}
            </div>`;
        })}
        ${demo && cards.length === 1 && html`
          <div class="card" style="margin-bottom:18px;opacity:.55">
            <div style="display:flex;gap:14px;align-items:center">
              <div style="width:40px;height:40px;border-radius:50%;background:var(--terra);color:var(--paper);display:flex;align-items:center;justify-content:center;font-weight:700">2</div>
              <div><div style="font-size:.68rem;letter-spacing:.12em;text-transform:uppercase;color:var(--terra);font-weight:600">Trabajo</div>
              <div style="font-family:'Marcellus',serif;font-size:1.25rem">Tu segunda acción maestra</div></div>
            </div>
            <div class="hint" style="margin-top:12px">Disponible en la versión completa.</div>
          </div>`}
        ${cards.length > 0 && html`
          <div class="card" style="padding:20px">
            <div style="font-size:.84rem;font-weight:600;color:var(--cocoa);margin-bottom:12px">Lleva tu foco contigo</div>
            <div style="display:flex;gap:12px;flex-wrap:wrap">
              <button class="dl-btn" onClick=${() => this.downloadPillarsImage()}>🖼 Descargar “Mis pilares” (imagen)</button>
              <button class="dl-btn" onClick=${() => this.downloadMasterActions()}>✦ Descargar “Mis acciones maestras”</button>
            </div>
            ${st.saveState === "img" && html`<div style="margin-top:12px;font-size:.84rem;font-weight:500;color:var(--ok)">Imagen descargada. Tenla a la vista para recordar tu 20% cada semana.</div>`}
            ${st.saveState === "noimg" && html`<div style="margin-top:12px;font-size:.84rem;font-weight:500;color:var(--err)">Primero vuelca tus actividades y ejecuta el filtro 80/20.</div>`}
          </div>`}
      </div>`;
  }

  rPlan() {
    const st = this.state;
    const pack = PACKS[st.pack] || PACKS.plena;
    const weekCards = pack.weeks.map((w, i) => {
      let fecha = "";
      try { fecha = this.weekDate(i).toLocaleDateString("es-ES", { weekday: "short", day: "numeric", month: "short" }); } catch (e) {}
      return { num: i + 1, fecha, ...w };
    });
    const phases = [
      { tag: "Fase 0 · Claridad", name: "Ya la recorriste", sub: "Definiste tus pilares, soltaste tus ideas y filtraste tu 20%. Ya sabes qué te haría más feliz lograr.", weeks: [] },
      { tag: "Fase 1", name: "Exploración y acción", sub: "Empiezas a moverte. Bloqueas tiempo real y das el primer paso, aunque sea imperfecto. Dejas de ver y accionas.", weeks: weekCards.slice(0, 4) },
      { tag: "Fase 2", name: "Tus propios sistemas", sub: "Observas qué funciona y qué no. Iteras, mides y ajustas sin castigarte. Reajustar es parte del camino.", weeks: weekCards.slice(4, 8) },
      { tag: "Fase 3", name: "Internalización", sub: "El proceso deja de ser esfuerzo y se vuelve tu forma de avanzar. Ya no lo piensas: es identidad.", weeks: weekCards.slice(8, 12) }
    ];
    const p3 = st.plan3 || {};
    const ss = st.saveState;
    let saveMsg = "", saveColor = "var(--cocoa)";
    if (ss === "ok" || ss === "ok-ics") { saveMsg = "Tu plan quedó guardado. Podrás retomarlo la próxima vez que entres con tu acceso."; saveColor = "var(--ok)"; }
    else if (ss === "err") { saveMsg = "No se pudo guardar. Revisa tu conexión e inténtalo otra vez."; saveColor = "var(--err)"; }
    else if (ss === "ics") { saveMsg = "Calendario descargado. Ábrelo para sincronizar tus 12 semanas."; saveColor = "var(--ok)"; }

    return html`
      <div class="fade">
        <div class="step-head">
          <span class="eyebrow ghost">Paso 6 · Plan 12 semanas</span>
          <h2 style="margin-top:14px">Tu calendario de enfoque</h2>
          <p>No planees las 12 semanas de golpe: eso también es procrastinar. Aquí entiendes las <b>fases del método</b>, dejas listas tus <b>3 primeras semanas</b> y activas los recordatorios que llegan solos a tu celular.</p>
        </div>

        <div class="card" style="margin-bottom:18px">
          <div style="font-size:.84rem;font-weight:600;color:var(--cocoa);margin-bottom:12px">Estilo de tus mensajes semanales</div>
          <div class="grid c3" style="margin-top:0">
            ${Object.keys(PACKS).map(k => html`
              <div key=${k} onClick=${() => { this.setState({ pack: k }); this._touch(); }}
                style=${"cursor:pointer;border-radius:13px;padding:16px;transition:all .2s;border:1px solid;" + (k === st.pack ? "border-color:var(--ink);background:var(--ink)" : "border-color:var(--line);background:#fff")}>
                <div style=${"font-family:'Marcellus',serif;font-size:1.12rem;margin-bottom:4px;color:" + (k === st.pack ? "var(--paper)" : "var(--cocoa)")}>${PACKS[k].label}</div>
                <div style=${"font-size:.82rem;font-weight:300;line-height:1.45;color:" + (k === st.pack ? "rgba(223,211,189,.78)" : "rgba(16,15,13,.5)")}>${PACKS[k].desc}</div>
              </div>`)}
          </div>
          <div class="grid c2" style="margin-top:16px">
            <div class="field" style="margin:0">
              <label for="hf-hora">Hora del recordatorio</label>
              <select id="hf-hora" value=${st.hora} onChange=${e => { this.setState({ hora: e.target.value }); this._touch(); }}>
                ${["07:00", "09:00", "12:00", "18:00", "20:00"].map(h => html`<option key=${h} value=${h}>${h} h</option>`)}
              </select>
            </div>
            <div class="field" style="margin:0">
              <label for="hf-fecha2">Fecha de inicio</label>
              <input id="hf-fecha2" type="date" value=${st.fechaInicio} onInput=${e => { this.setState({ fechaInicio: e.target.value }); this._touch(); }} />
            </div>
          </div>
        </div>

        <div class="card" style="margin-bottom:18px">
          <div style="font-size:.84rem;font-weight:600;color:var(--cocoa)">Arma tu plan · 3 primeras semanas</div>
          <p class="hint" style="margin:6px 0 14px">Solo tres. Las demás se planean cuando llegues a ellas — así el plan no te aplasta.</p>
          <div class="grid c3" style="margin-top:0">
            ${[1, 2, 3].map(n => html`
              <div key=${n} style="border:1px solid var(--line);border-radius:13px;padding:16px;background:#fff">
                <div style="font-size:.78rem;font-weight:600;color:var(--terra);margin-bottom:8px">${n === 1 ? "Esta semana · en presente" : "Semana " + n + " · prepárala"}</div>
                <div class="field" style="margin:0 0 10px"><label>✦ Tu foco</label><textarea style="min-height:56px" value=${(p3[n] && p3[n].foco) || ""} onInput=${e => this.onPlan3(n, "foco", e.target.value)} placeholder=${n === 1 ? "Tu foco de ahora mismo." : "Déjala lista, sin improvisar."}></textarea></div>
                <div class="field" style="margin:0"><label>¿Cuándo lo harás?</label><input type="text" value=${(p3[n] && p3[n].cuando) || ""} onInput=${e => this.onPlan3(n, "cuando", e.target.value)} placeholder="Día y hora reales" /></div>
              </div>`)}
          </div>
        </div>

        <div style="margin:26px 0 14px">
          <h3 style="font-size:1.3rem;color:var(--cocoa)">Las 4 fases de tu sistema</h3>
          <p class="hint" style="margin-top:6px">No es una receta rígida: es la base para que construyas <b style="color:var(--cocoa)">tu propio sistema</b>. Es un proceso, no un resultado.</p>
        </div>
        ${phases.map((ph, idx) => html`
          <div key=${idx} style="margin-bottom:18px">
            <div class="card" style=${"padding:20px;" + (idx === 0 ? "background:var(--terra-soft);border-style:dashed" : "")}>
              <div style="display:flex;gap:10px;align-items:baseline;flex-wrap:wrap">
                <span class="pill-tag" style="background:var(--ink);color:var(--sand)">${ph.tag}</span>
                <b style="font-family:'Marcellus',serif;font-weight:400;font-size:1.1rem;color:var(--cocoa)">${ph.name}</b>
              </div>
              <p style="font-size:.88rem;font-weight:300;color:rgba(16,15,13,.6);margin:10px 0 0;line-height:1.55">${ph.sub}</p>
              ${ph.weeks.length > 0 && html`
                <div class="grid c2" style="margin-top:14px">
                  ${ph.weeks.map(w => html`
                    <div key=${w.num} style="border:1px solid var(--line);border-radius:12px;padding:14px;background:#fff">
                      <div style="display:flex;justify-content:space-between;gap:8px;margin-bottom:6px">
                        <b style="font-size:.82rem;color:var(--terra)">Semana ${w.num}</b>
                        <span class="hint">${w.fecha}</span>
                      </div>
                      <div style="font-weight:500;font-size:.92rem">${w.t}</div>
                      <div style="font-size:.84rem;font-weight:300;color:rgba(16,15,13,.6);margin-top:4px;line-height:1.5">${w.a}</div>
                      <div style="font-size:.78rem;font-style:italic;color:var(--terra);margin-top:6px">“${w.c}”</div>
                    </div>`)}
                </div>`}
            </div>
          </div>`)}

        <div class="card" style="background:var(--ink);border:none">
          <div style="color:var(--sand);font-family:'Marcellus',serif;font-size:1.25rem">Tu siguiente paso</div>
          <p style="color:rgba(223,211,189,.7);font-size:.9rem;font-weight:300;line-height:1.6;margin:8px 0 16px">Descarga tu calendario: el archivo .ics se abre en Google Calendar, Apple Calendario o el calendario de tu celular. Cada evento trae una alarma para que el recordatorio te llegue solo — con tu acción y tu motivación de la semana.</p>
          <div style="display:flex;gap:12px;flex-wrap:wrap">
            <button class="btn sand" onClick=${() => this.downloadIcs()}>📅 Descargar mis 12 semanas (.ics)</button>
            <button class="btn" style="background:var(--terra)" onClick=${() => this.doSave()}>${ss === "saving" ? "Guardando…" : (ss === "ok" || ss === "ok-ics") ? "✓ Guardado y sincronizado" : "💾 Guardar y sincronizar"}</button>
          </div>
          ${saveMsg && html`<div style=${"margin-top:14px;font-size:.86rem;font-weight:500;color:" + saveColor}>${saveMsg}</div>`}
        </div>
      </div>`;
  }

  rBloques(vw) {
    const st = this.state;
    const list = (st.bloques || {})[vw] || [];
    const horas = ["06:00", "07:00", "08:00", "09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00", "19:00", "20:00", "21:00"];
    const dayLabel = (i) => { try { return this._bloqueDate(vw, i, "09:00").toLocaleDateString("es-ES", { weekday: "short", day: "numeric", month: "short" }); } catch (e) { return "Día " + (i + 1); } };
    return html`
      <div class="card" style="margin-top:18px;border-color:rgba(142,68,31,.3)">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;gap:10px;flex-wrap:wrap">
          <div>
            <div style="font-size:.84rem;font-weight:600;color:var(--cocoa)">✦ Tus bloques de enfoque · semana ${vw}</div>
            <p class="hint" style="margin:4px 0 0;max-width:520px">Citas contigo, en tu calendario. Cuéntale a tu coach qué necesitas lograr esta semana y conviértelo en bloques con día y hora.</p>
          </div>
          <span class="pill-tag" style=${st.iaKey ? "background:rgba(31,122,77,.12);color:var(--ok)" : "background:rgba(16,15,13,.06);color:rgba(16,15,13,.5)"}>${st.iaKey ? "IA conectada" : "IA opcional"}</span>
        </div>
        <div class="field" style="margin-top:14px">
          <label>¿Qué consideras que debes hacer esta semana para avanzar y conseguir un resultado?</label>
          <textarea style="min-height:60px" value=${st.iaInput} onInput=${e => this.setState({ iaInput: e.target.value })} placeholder="Ej: terminar y enviar la propuesta al cliente, grabar el módulo 2 del curso…"></textarea>
        </div>
        <div style="display:flex;gap:12px;align-items:center;margin-top:12px;flex-wrap:wrap">
          <button class="btn" onClick=${() => this.generarBloques()} disabled=${st.iaBusy}>${st.iaBusy ? "✦ Pensando tu semana…" : (st.iaKey ? "✦ Crear mis bloques con IA" : "✦ Crear mis bloques")}</button>
          <a onClick=${() => this.setState({ showIaCfg: !st.showIaCfg })} style="cursor:pointer;font-size:.8rem;color:var(--terra);font-weight:500;border-bottom:1px solid rgba(142,68,31,.3)">${st.iaKey ? "Configurar IA" : "Conectar mi IA"}</a>
        </div>
        ${st.showIaCfg && html`
          <div style="margin-top:14px;padding:16px;border:1px dashed rgba(142,68,31,.35);border-radius:12px;background:var(--terra-soft)">
            <div style="font-size:.82rem;font-weight:600;color:var(--cocoa);margin-bottom:6px">Conecta tu IA (Claude de Anthropic)</div>
            <p class="hint" style="margin:0 0 10px">Pega tu clave API (empieza con <b>sk-ant-</b>). Se guarda solo en este dispositivo, nunca en la base de datos. Consíguela en console.anthropic.com → API keys.</p>
            <div style="display:flex;gap:8px;flex-wrap:wrap">
              <input id="hf-iakey" type="password" placeholder="sk-ant-…" value=${st.iaKey}
                style="flex:1;min-width:200px;padding:11px 13px;border:1px solid var(--line);border-radius:10px;font-size:.88rem;background:#fff;outline:none" />
              <button class="btn ghost" style="padding:10px 16px" onClick=${() => this.saveIaKey(document.getElementById("hf-iakey").value)}>Guardar</button>
              ${st.iaKey && html`<button class="btn ghost" style="padding:10px 16px;color:var(--err)" onClick=${() => this.saveIaKey("")}>Quitar</button>`}
            </div>
          </div>`}
        ${st.iaMsg && html`<div style="margin-top:14px;font-size:.88rem;font-style:italic;color:var(--terra);line-height:1.55">“${st.iaMsg}”</div>`}
        ${st.iaErr && html`<div style="margin-top:14px;font-size:.84rem;font-weight:500;color:var(--err)">${st.iaErr}</div>`}
        ${list.length > 0 && html`
          <div style="display:grid;gap:10px;margin-top:16px">
            ${list.map(b => html`
              <div key=${b.id} style="border:1px solid var(--line);border-radius:13px;padding:14px;background:#fff">
                <div style="display:flex;gap:10px;align-items:flex-start">
                  <span style="width:9px;height:9px;background:var(--gold);transform:rotate(45deg);flex-shrink:0;margin-top:8px"></span>
                  <input type="text" value=${b.titulo} placeholder="¿Qué vas a terminar en este bloque?"
                    onInput=${e => this.setBloque(vw, b.id, "titulo", e.target.value)}
                    style="flex:1;padding:8px 10px;border:1px solid transparent;border-radius:8px;font-size:.94rem;font-weight:500;color:var(--ink);background:transparent;outline:none"
                    onFocus=${e => e.target.style.borderColor = "var(--line)"} onBlur=${e => e.target.style.borderColor = "transparent"} />
                  <button class="paso-del" title="Quitar bloque" onClick=${() => this.removeBloque(vw, b.id)}>×</button>
                </div>
                ${b.motivo && html`<div class="hint" style="margin:2px 0 0 19px">${b.motivo}</div>`}
                <div style="display:flex;gap:8px;flex-wrap:wrap;align-items:center;margin:10px 0 0 19px">
                  <select value=${String(b.dia)} onChange=${e => this.setBloque(vw, b.id, "dia", e.target.value)}
                    style="padding:8px 10px;border:1px solid var(--line);border-radius:9px;background:#fff;font-size:.82rem;outline:none">
                    ${[0, 1, 2, 3, 4, 5, 6].map(i => html`<option key=${i} value=${String(i)}>${dayLabel(i)}</option>`)}
                  </select>
                  <select value=${b.hora} onChange=${e => this.setBloque(vw, b.id, "hora", e.target.value)}
                    style="padding:8px 10px;border:1px solid var(--line);border-radius:9px;background:#fff;font-size:.82rem;outline:none">
                    ${horas.map(h => html`<option key=${h} value=${h}>${h}</option>`)}
                  </select>
                  <select value=${String(b.dur || 60)} onChange=${e => this.setBloque(vw, b.id, "dur", e.target.value)}
                    style="padding:8px 10px;border:1px solid var(--line);border-radius:9px;background:#fff;font-size:.82rem;outline:none">
                    ${[30, 45, 60, 90, 120].map(m => html`<option key=${m} value=${String(m)}>${m} min</option>`)}
                  </select>
                  <a class="btn" style="padding:9px 16px;font-size:.82rem" href=${this.gcalUrl(b, vw)} target="_blank" rel="noopener">📅 Google Calendar</a>
                </div>
              </div>`)}
          </div>
          <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:14px">
            <button class="dl-btn" onClick=${() => this.addBloqueManual(vw)}>＋ Agregar otro bloque</button>
            <button class="dl-btn" onClick=${() => this.downloadBloquesIcs(vw)}>⤓ Descargar la semana (.ics)</button>
          </div>`}
      </div>`;
  }

  rAvance() {
    const st = this.state;
    const demo = !!(st.access && st.access.demo);
    const ready = demo || !!(st.critical && st.critical.length > 0);
    if (!ready) {
      return html`
        <div class="fade"><div class="paywall">
          <h2 style="font-size:1.6rem">Primero define tu 20%</h2>
          <p style="font-size:.94rem;font-weight:300;color:rgba(16,15,13,.6);margin:12px auto 0;max-width:460px">Completa tus pilares y el filtro 80/20 para empezar a registrar tu avance.</p>
          <button class="btn" style="margin-top:20px" onClick=${() => this.goStep(0)}>Ir al inicio →</button>
        </div></div>`;
    }
    if (st.avanceMode === "recap") return this.rRecap();

    const seg = st.seguimiento || {};
    const cw = this.currentWeek();
    const vw = Math.max(1, Math.min(12, st.viewWeek || cw));
    const editable = demo || vw === cw;
    const future = !demo && vw > cw;
    const readonly = !demo && vw < cw;
    let viewDate = ""; try { viewDate = this.weekDate(vw - 1).toLocaleDateString("es-ES", { weekday: "long", day: "numeric", month: "long" }); } catch (e) {}
    const registered = Array.from({ length: 12 }, (_, i) => i + 1).filter(n => this._segHasContent(seg[n])).length;
    const d = st.draft || {};
    const re = seg[vw] || null; const reHas = this._segHasContent(re);
    const roFields = reHas ? [["✦ Acción de mi 20%", "accion"], ["Lo que exploré", "exploro"], ["Recursos que usé", "recursos"], ["Limitación que encontré", "limitaciones"], ["🏆 Mi logro", "logro"], ["↻ Una vez más, seguiré", "seguira"]].map(p => ({ label: p[0], value: (re[p[1]] || "").toString().trim() })).filter(f => f.value) : [];
    const isMilestone = !demo && cw % 4 === 0 && vw === cw;
    const pendPasos = [];
    (st.critical || []).forEach(t => {
      const live = st.tasks.find(x => x.id === t.id) || t;
      (live.pasos || []).forEach(p => { if (!p.done) pendPasos.push({ t: live, p }); });
    });
    const stateLabel = editable && vw === cw ? "Tu semana actual" : editable ? "Editable" : future ? "Por venir" : "Bitácora";
    const badgeStyle = editable && vw === cw ? "background:var(--ink);color:var(--sand)" : editable ? "background:var(--terra);color:var(--paper)" : future ? "background:rgba(16,15,13,.06);color:rgba(16,15,13,.45)" : "background:rgba(142,68,31,.1);color:var(--terra)";
    const ssg = st.segSave;

    return html`
      <div class="fade">
        <div class="step-head" style="margin-bottom:18px">
          <span class="eyebrow ghost">Paso 7 · Mi avance</span>
          <h2 style="margin-top:14px">Tu bitácora · semana ${vw}</h2>
          <p>Cada semana registras —en pocas líneas— qué hiciste con tu 20%. Corto y honesto. Verás tu camino mes a mes, una semana a la vez, sin agobio.</p>
        </div>

        ${this.rConfStrip()}

        ${isMilestone && html`
          <div class="card" style="margin-top:18px;background:var(--gold);border:none;display:flex;justify-content:space-between;align-items:center;gap:14px;flex-wrap:wrap">
            <div><b style="font-family:'Marcellus',serif;font-weight:400;font-size:1.15rem">Cerraste un mes ✦</b><div style="font-size:.86rem;font-weight:300;margin-top:2px">Mira el camino que recorriste estas 4 semanas.</div></div>
            <button class="btn dark" onClick=${() => this.openRecap(Math.floor(cw / 4))}>Ver mi recap del mes ${Math.floor(cw / 4)} →</button>
          </div>`}

        <div class="card" style="margin-top:18px">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:12px">
            <div style="font-size:.84rem;font-weight:600;color:var(--cocoa)">Tu trimestre · 12 semanas</div>
            <span class="hint">${registered} de 12 registradas</span>
          </div>
          <div class="hfscroll" style="display:flex;gap:8px;overflow-x:auto;padding-bottom:4px">
            ${Array.from({ length: 12 }, (_, i) => i + 1).map(n => {
              const has = this._segHasContent(seg[n]);
              const cls = "wk-dot" + (n === cw ? " current" : has ? " filled" : (n > cw && !demo) ? " future" : "") + (n === vw ? " sel" : "");
              return html`<button key=${n} class=${cls} onClick=${() => this.viewWeekGo(n)}>${n}</button>`;
            })}
          </div>
        </div>

        ${pendPasos.length > 0 && editable && html`
          <div class="card" style="margin-top:18px">
            <div style="font-size:.84rem;font-weight:600;color:var(--cocoa);margin-bottom:4px">Tus pasos pequeños pendientes</div>
            <p class="hint" style="margin:0 0 12px">¿Completaste alguno esta semana? Márcalo: cada uno cuenta como avance.</p>
            <div style="display:grid;gap:8px">
              ${pendPasos.slice(0, 6).map(({ t, p }) => html`
                <div key=${t.id + "-" + p.id} class=${"paso" + (st.celebrate === t.id + ":" + p.id ? " just" : "")}>
                  <button class="paso-check" onClick=${() => this.togglePaso(t.id, p.id)}>✓</button>
                  <span class="paso-name">${p.name} <span class="hint">· ${t.name}</span></span>
                  ${st.celebrate === t.id + ":" + p.id && html`<span class="burst">✦ +1 avance</span>`}
                </div>`)}
            </div>
          </div>`}

        ${editable && this.rBloques(vw)}

        <div class="card" style="margin-top:18px">
          <div style="display:flex;justify-content:space-between;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:16px">
            <div>
              <b style="font-family:'Marcellus',serif;font-weight:400;font-size:1.2rem;color:var(--cocoa)">Semana ${vw}</b>
              <div class="hint" style="margin-top:2px">${viewDate}</div>
            </div>
            <span class="pill-tag" style=${badgeStyle}>${stateLabel}</span>
          </div>

          ${editable && html`
            <div>
              <div style="font-size:.84rem;font-weight:600;color:var(--cocoa);margin-bottom:10px">¿Cómo te sentiste esta semana?</div>
              <div style="display:flex;gap:8px;flex-wrap:wrap;margin-bottom:18px">
                ${MOODS.map(m => html`
                  <button key=${m[0]} class=${"chip" + (d.animo === m[0] ? " on" : "")} onClick=${() => this.setAnimo(m[0])}>
                    <span class="mood-dot"></span>${m[1]}
                  </button>`)}
              </div>
              <div class="grid c2" style="margin-top:0">
                <div class="field" style="margin:0"><label>✦ ¿Qué acción de tu 20% hiciste?</label><textarea value=${d.accion} onInput=${e => this.onSegField("accion", e.target.value)}></textarea></div>
                <div class="field" style="margin:0"><label>¿Qué exploraste o probaste?</label><textarea value=${d.exploro} onInput=${e => this.onSegField("exploro", e.target.value)}></textarea></div>
                <div class="field" style="margin:0"><label>¿Qué recursos usaste?</label><textarea value=${d.recursos} onInput=${e => this.onSegField("recursos", e.target.value)}></textarea></div>
                <div class="field" style="margin:0"><label>¿Qué limitación encontraste?</label><textarea value=${d.limitaciones} onInput=${e => this.onSegField("limitaciones", e.target.value)}></textarea></div>
                <div class="field" style="margin:0"><label>🏆 Tu logro / win de la semana</label><textarea value=${d.logro} onInput=${e => this.onSegField("logro", e.target.value)}></textarea></div>
                <div class="field" style="margin:0"><label>↻ ¿Qué harás una vez más la próxima semana?</label><textarea value=${d.seguira} onInput=${e => this.onSegField("seguira", e.target.value)}></textarea></div>
              </div>
              <div style="display:flex;gap:14px;align-items:center;margin-top:18px;flex-wrap:wrap">
                <button class="btn" onClick=${() => this.saveWeekEntry()}>${ssg === "saving" ? "Guardando…" : (ssg === "ok" || ssg === "demo-ok") ? "✓ Guardado" : "Guardar mi semana"}</button>
                ${ssg === "ok" && html`<span style="font-size:.84rem;font-weight:500;color:var(--ok)">Tu semana quedó guardada en tu bitácora.</span>`}
                ${ssg === "demo-ok" && html`<span style="font-size:.84rem;font-weight:500;color:var(--cocoa)">Guardado en modo demo (no se sincroniza).</span>`}
                ${ssg === "err" && html`<span style="font-size:.84rem;font-weight:500;color:var(--err)">No se pudo guardar. Revisa tu conexión e inténtalo otra vez.</span>`}
              </div>
            </div>`}

          ${readonly && reHas && html`
            <div>
              <div class="pill-tag" style="background:rgba(142,68,31,.1);color:var(--terra);display:inline-block;margin-bottom:14px">Registro guardado · solo lectura</div>
              ${this.moodLabel(re.animo) && html`<div style="font-size:.88rem;margin-bottom:12px"><b style="font-weight:600;color:var(--cocoa)">Ánimo:</b> ${this.moodLabel(re.animo)}</div>`}
              ${roFields.map(f => html`
                <div key=${f.label} style="border-left:3px solid var(--terra);padding:4px 0 4px 14px;margin-bottom:12px">
                  <div style="font-size:.76rem;font-weight:600;color:var(--terra)">${f.label}</div>
                  <div style="font-size:.9rem;font-weight:300;line-height:1.55;margin-top:2px">${f.value}</div>
                </div>`)}
            </div>`}

          ${readonly && !reHas && html`
            <div style="text-align:center;padding:20px 0">
              <div style="font-family:'Marcellus',serif;font-size:1.15rem;color:var(--cocoa)">Sin registro esta semana</div>
              <p class="hint" style="margin-top:8px">No pasa nada. Cada semana es una nueva oportunidad de aparecer una vez más.</p>
            </div>`}

          ${future && html`
            <div style="text-align:center;padding:20px 0">
              <div style="font-family:'Marcellus',serif;font-size:1.15rem;color:var(--cocoa)">Esta semana aún no llega</div>
              <p class="hint" style="margin-top:8px">Una semana a la vez. Tu foco vive en la semana ${cw}.</p>
            </div>`}
        </div>

        <div class="card" style="margin-top:18px">
          <div style="font-size:.84rem;font-weight:600;color:var(--cocoa);margin-bottom:12px">Tus resúmenes mensuales</div>
          <div style="display:flex;gap:12px;flex-wrap:wrap">
            ${[1, 2, 3].map(m => {
              const open = demo || cw >= m * 4;
              return html`
                <button key=${m} onClick=${() => open && this.openRecap(m)}
                  style=${"display:flex;flex-direction:column;gap:3px;padding:14px 20px;border-radius:12px;border:1px solid var(--line);text-align:left;transition:all .15s;" + (open ? "background:#fff;color:var(--cocoa);cursor:pointer;box-shadow:0 6px 16px rgba(104,48,30,.04)" : "background:transparent;color:rgba(16,15,13,.3);cursor:not-allowed")}>
                  <b style="font-size:.9rem">Mes ${m} ${open ? "" : "🔒"}</b>
                  <span style="font-size:.74rem;font-weight:300">Semanas ${(m - 1) * 4 + 1}–${m * 4}</span>
                </button>`;
            })}
            ${(demo || cw >= 12) && html`
              <button class="btn dark" onClick=${() => this.openRecapAll()}>Ver mi trimestre completo ✦</button>`}
          </div>
        </div>
      </div>`;
  }

  rRecap() {
    const st = this.state;
    const seg = st.seguimiento || {};
    const scope = st.recapMonth;
    let nums;
    if (scope === "all") nums = Array.from({ length: 12 }, (_, i) => i + 1);
    else { const sc = parseInt(scope) || 1; nums = [1, 2, 3, 4].map(k => (sc - 1) * 4 + k); }
    const weeks = nums.map(n => {
      const e = seg[n] || null; const has = this._segHasContent(e);
      let date = ""; try { date = this.weekDate(n - 1).toLocaleDateString("es-ES", { day: "numeric", month: "short" }); } catch (_) {}
      return {
        num: n, date, has,
        animo: has ? this.moodLabel(e.animo) : "",
        snippet: has ? ((e.logro || e.accion || e.exploro || "").toString().trim()) : "",
        seguira: has ? (e.seguira || "").toString().trim() : ""
      };
    });
    const registered = weeks.filter(w => w.has).length;
    const uvm = weeks.filter(w => w.has && w.seguira).map(w => ({ num: w.num, text: w.seguira }));
    const title = scope === "all" ? "Tu trimestre completo" : ("Tu mes " + scope);
    const range = scope === "all" ? "Semanas 1–12" : ("Semanas " + nums[0] + "–" + nums[nums.length - 1]);
    const closing = scope === "all"
      ? "Doce semanas honrando tu prioridad. No perseguiste un resultado: internalizaste una forma de avanzar. Eso se queda contigo."
      : "Cada semana registrada es prueba de que apareciste. Sigue, una vez más.";

    return html`
      <div class="fade">
        <div class="hero-card" style="padding:40px 36px">
          <div style="display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;align-items:flex-start">
            <div>
              <span class="eyebrow">${range} · ${registered} de ${nums.length} registradas</span>
              <h2 style="color:var(--paper);font-size:clamp(1.7rem,3.6vw,2.4rem);margin-top:16px">${title}</h2>
            </div>
            <button class="btn sand" onClick=${() => this.closeRecap()}>← Volver a mi semana</button>
          </div>
          <div style="display:grid;gap:12px;margin-top:26px">
            ${weeks.map(w => html`
              <div key=${w.num} style="display:flex;gap:14px;align-items:flex-start;padding:14px;border-radius:13px;background:rgba(223,211,189,.05);border:1px solid rgba(223,211,189,.1)">
                <div class=${"recap-node" + (w.has ? " has" : "")}>${w.num}</div>
                <div style="flex:1;min-width:0">
                  <div style="display:flex;gap:10px;align-items:baseline;flex-wrap:wrap">
                    <b style="font-size:.84rem;color:var(--sand)">Semana ${w.num}</b>
                    <span style="font-size:.72rem;color:rgba(223,211,189,.45)">${w.date}</span>
                    ${w.animo && html`<span class="pill-tag" style="background:rgba(142,68,31,.35);color:var(--sand)">${w.animo}</span>`}
                  </div>
                  <div style=${"font-size:.86rem;font-weight:300;line-height:1.5;margin-top:4px;color:" + (w.has ? "rgba(223,211,189,.8)" : "rgba(223,211,189,.35)")}>${w.has ? w.snippet : "Sin registro esta semana."}</div>
                </div>
              </div>`)}
          </div>
          ${uvm.length > 0 && html`
            <div style="margin-top:26px">
              <div style="font-size:.78rem;letter-spacing:.12em;text-transform:uppercase;color:var(--terra);font-weight:600;margin-bottom:10px">↻ Lo que sigues haciendo, una vez más</div>
              ${uvm.map(u => html`<div key=${u.num} style="font-size:.88rem;font-weight:300;color:rgba(223,211,189,.75);padding:6px 0;border-bottom:1px solid rgba(223,211,189,.08)"><b style="color:var(--sand);font-weight:500">S${u.num}</b> · ${u.text}</div>`)}
            </div>`}
          <p style="margin:28px 0 0;font-family:'Marcellus',serif;font-size:1.1rem;color:var(--sand);line-height:1.5">${closing}</p>
        </div>
      </div>`;
  }
}

render(html`<${App} />`, document.getElementById("app"));
