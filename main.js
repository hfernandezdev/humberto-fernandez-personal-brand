import {
  commandActions,
  certifications,
  heroSnapshot,
  experience,
  education,
  links,
  navigation,
  profile,
  projects,
  contactLinks,
  services,
  skills,
} from './data.js';

const app = document.querySelector('#app');

const themeOptions = ['dark', 'light'];
const storageKey = 'hfm-theme-preference';

const escapeHtml = (value = '') =>
  value
    .toString()
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#39;');

const isTruthyLink = (value) => typeof value === 'string' && value.trim().length > 0;

const socialIconMap = {
  LinkedIn: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M6.94 6.5a1.94 1.94 0 1 1-3.88 0 1.94 1.94 0 0 1 3.88 0ZM3.5 8.9h3.0V20h-3V8.9Zm5.03 0h2.88v1.52h.04c.4-.75 1.38-1.54 2.84-1.54 3.04 0 3.6 2.0 3.6 4.6V20h-3v-5.17c0-1.23-.02-2.8-1.7-2.8-1.72 0-1.98 1.34-1.98 2.72V20h-3V8.9Z"/></svg>',
  GitHub: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M12 2C6.48 2 2 6.62 2 12.33c0 4.57 2.87 8.45 6.84 9.81.5.1.68-.22.68-.49 0-.24-.01-.88-.02-1.73-2.78.62-3.37-1.38-3.37-1.38-.46-1.22-1.12-1.55-1.12-1.55-.92-.64.07-.63.07-.63 1.02.08 1.56 1.08 1.56 1.08.9 1.58 2.37 1.12 2.95.86.09-.67.35-1.12.64-1.38-2.22-.26-4.56-1.16-4.56-5.15 0-1.14.39-2.07 1.03-2.8-.1-.26-.45-1.34.1-2.79 0 0 .84-.28 2.75 1.07A9.2 9.2 0 0 1 12 7.97c.85 0 1.7.12 2.5.36 1.9-1.35 2.74-1.07 2.74-1.07.56 1.45.21 2.53.11 2.79.64.73 1.03 1.66 1.03 2.8 0 4-2.35 4.88-4.58 5.14.36.32.68.96.68 1.94 0 1.4-.01 2.52-.01 2.86 0 .27.18.59.69.49A10.13 10.13 0 0 0 22 12.33C22 6.62 17.52 2 12 2Z"/></svg>',
  WhatsApp: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M20.52 3.48A11.9 11.9 0 0 0 12.03 0C5.39 0 .01 5.38 0 12.01c0 2.11.55 4.16 1.58 5.97L0 24l6.21-1.63a11.95 11.95 0 0 0 5.82 1.49h.01C18.66 23.86 24 18.48 24 11.84c0-3.21-1.25-6.22-3.48-8.36Zm-8.49 18.17h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.69.96.99-3.59-.23-.37a9.87 9.87 0 0 1-1.5-5.29C2.2 6.8 6.81 2.2 12.03 2.2c2.64 0 5.11 1.03 6.97 2.88a9.78 9.78 0 0 1 2.88 6.91c0 5.42-4.46 9.66-9.85 9.66Zm5.72-7.34c-.31-.15-1.83-.9-2.12-1-.29-.1-.5-.15-.71.15-.21.31-.82 1-.99 1.2-.18.2-.35.23-.66.08-.31-.15-1.29-.47-2.46-1.5-.91-.82-1.52-1.83-1.7-2.14-.18-.31-.02-.47.13-.62.13-.13.31-.35.46-.52.16-.17.21-.29.31-.49.1-.2.05-.37-.02-.52-.07-.15-.71-1.69-.98-2.32-.26-.63-.53-.54-.72-.55h-.62c-.2 0-.52.08-.79.37-.27.29-1.03 1-1.03 2.45 0 1.45 1.06 2.85 1.21 3.05.15.2 2.09 3.2 5.05 4.48.7.3 1.25.48 1.68.61.7.22 1.34.19 1.84.12.56-.08 1.83-.75 2.09-1.48.26-.73.26-1.35.18-1.48-.07-.13-.27-.2-.58-.35Z"/></svg>',
  Telegram: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M21.95 4.03 18.7 19.33c-.25 1.1-.9 1.37-1.82.86l-5.02-3.7-2.42 2.33c-.27.27-.5.5-1.02.5l.36-5.1L18 6.24c.36-.33-.08-.52-.55-.2L5.45 13.4l-5.04-1.57c-1.1-.34-1.1-1.1.23-1.62L20.09 2.18c.92-.34 1.73.21 1.56 1.85Z"/></svg>',
  Email: '<svg viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path fill="currentColor" d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2Zm0 4.2-8 5.2-8-5.2V6l8 5.2L20 6v2.2Z"/></svg>',
};

const socialLabel = (label) => {
  const icon = socialIconMap[label] || '↗';
  return `<span class="button-text"><span class="action-icon" aria-hidden="true">${icon}</span><span>${escapeHtml(label)}</span></span>`;
};

const externalLink = (href, label, className = 'link-button') => {
  if (!isTruthyLink(href)) {
    return `<span class="${className} is-disabled" aria-disabled="true"><span class="button-text"><span class="action-icon" aria-hidden="true">↗</span><span>${escapeHtml(label)}</span></span></span>`;
  }

  return `<a class="${className}" href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer"><span class="button-text"><span class="action-icon" aria-hidden="true">↗</span><span>${escapeHtml(label)}</span></span></a>`;
};

const navMarkup = navigation
  .map(
    (item) => `
      <a class="nav-link" href="#${item.target}" data-scroll-target="${item.target}" data-nav-link="${item.target}">${escapeHtml(item.label)}</a>
    `,
  )
  .join('');

const serviceCards = services
  .map((service) => {
    const stack = service.stack ? `<p class="service-stack">${escapeHtml(service.stack.join(' · '))}</p>` : '';
    const badge = service.featured ? '<span class="eyebrow accent">AI / GenAI</span>' : '';
    return `
      <article class="card service-card ${service.featured ? 'featured' : ''}">
        ${badge}
        <h3>${escapeHtml(service.title)}</h3>
        <p>${escapeHtml(service.description)}</p>
        ${stack}
        <ul class="chip-list">
          ${service.items.map((item) => `<li class="chip">${escapeHtml(item)}</li>`).join('')}
        </ul>
      </article>
    `;
  })
  .join('');

const experienceCards = experience
  .map(
    (entry) => `
      <article class="timeline-card card">
        <div class="timeline-header">
          <div>
            <span class="eyebrow">${escapeHtml(entry.period)}</span>
            <h3>${escapeHtml(entry.role)}</h3>
          </div>
          <span class="location">${escapeHtml(entry.location)}</span>
        </div>
        <h4>${escapeHtml(entry.company)}</h4>
        <p>${escapeHtml(entry.summary)}</p>
        <div class="meta-block">
          <strong>Tecnologías</strong>
          <p>${escapeHtml(entry.technologies.join(' · '))}</p>
        </div>
        <ul class="bullet-list">
          ${entry.highlights.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
        </ul>
      </article>
    `,
  )
  .join('');

const educationCard = `
  <article class="card education-main-card">
    <div class="education-heading">
      <div>
        <p class="eyebrow accent">Educación</p>
        <h3>${escapeHtml(education.title)}</h3>
      </div>
      <span class="status-pill">${escapeHtml(education.period)}</span>
    </div>
    <p class="education-institution">${escapeHtml(education.institution)}</p>
    <p class="education-summary">${escapeHtml(education.summary)}</p>
    <div class="inline-actions education-actions">
      ${documentButton(links.degreeTitle, 'Ver certificado')}
    </div>
  </article>
`;

const certificationCards = certifications
  .map(
    (item) => `
      <article class="card certification-card">
        <div class="education-heading">
          <div>
            <h3>${escapeHtml(item.title)}</h3>
            <p class="education-institution">${escapeHtml(item.issuer)}</p>
          </div>
          <span class="status-pill ${item.title === 'Fundamentos de Ingeniero IA con Python' ? 'cert-date-pill' : ''}">${escapeHtml(item.date)}</span>
        </div>
        <div class="inline-actions">
          ${documentButton(item.href, 'Ver certificado')}
        </div>
      </article>
    `,
  )
  .join('');

const skillPanels = Object.entries(skills)
  .map(
    ([group, items]) => `
      <article class="card skill-card">
        <h3>${escapeHtml(group)}</h3>
        <p>${escapeHtml(items.join(' · '))}</p>
      </article>
    `,
  )
  .join('');

const resourceLinks = contactLinks
  .map((resource) => externalLink(resource.href, resource.label, 'inline-link resource-link'))
  .join('');

function documentButton(href, label) {
  if (!isTruthyLink(href)) {
    return `<span class="inline-link document-button is-disabled" aria-disabled="true"><span class="button-text"><span class="action-icon" aria-hidden="true">↗</span><span>${escapeHtml(label)}</span></span></span>`;
  }

  return `<a class="inline-link document-button" href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer"><span class="button-text"><span class="action-icon" aria-hidden="true">↗</span><span>${escapeHtml(label)}</span></span></a>`;
}

const demoButton = (href) => {
  if (!isTruthyLink(href)) {
    return '<span class="secondary-button demo-button is-disabled" aria-disabled="true"><span class="button-text"><span class="action-icon" aria-hidden="true">↗</span><span>Ver demo</span></span></span>';
  }

  return `<a class="secondary-button demo-button" href="${escapeHtml(href)}" target="_blank" rel="noopener noreferrer"><span class="button-text"><span class="action-icon" aria-hidden="true">↗</span><span>Ver demo</span></span></a>`;
};

const projectCards = projects
  .map(
    (project) => `
      <article class="card project-card">
        <div class="timeline-header">
          <div>
            <span class="eyebrow">Proyecto</span>
            <h3>${escapeHtml(project.title)}</h3>
            ${project.context ? `<p class="project-context">${escapeHtml(project.context)}</p>` : ''}
          </div>
          <span class="status-pill">${escapeHtml(project.status)}</span>
        </div>
        <p>${escapeHtml(project.description)}</p>
        <div class="project-grid">
          <section>
            <h4>Problema</h4>
            <p>${escapeHtml(project.problem)}</p>
          </section>
          <section>
            <h4>Solución</h4>
            <p>${escapeHtml(project.solution)}</p>
          </section>
          <section>
            <h4>Tecnología</h4>
            <p>${escapeHtml(project.technology.join(' · '))}</p>
          </section>
          <section>
            <h4>Resultado</h4>
            <p>${escapeHtml(project.result)}</p>
          </section>
        </div>
        <footer class="project-footer">
          <p class="project-footer-note">Demo visual en Google Drive</p>
          <div class="inline-actions project-actions">
            ${demoButton(project.demoHref)}
          </div>
        </footer>
      </article>
    `,
  )
  .join('');

const socialLinks = profile.socials
  .map(
    (social) => `
      ${isTruthyLink(social.href)
        ? `<a class="social-link" href="${escapeHtml(social.href)}" target="_blank" rel="noopener noreferrer">${socialLabel(social.label)}</a>`
        : `<span class="social-link is-disabled" aria-disabled="true">${socialLabel(social.label)}</span>`}
    `,
  )
  .join('');

const heroSnapshotRows = heroSnapshot.rows
  .map(
    (item) => `
      <div class="snapshot-row">
        <span class="snapshot-label">${escapeHtml(item.label)}</span>
        <span class="snapshot-value">${escapeHtml(item.value)}</span>
      </div>
    `,
  )
  .join('');

const heroSnapshotMetrics = heroSnapshot.metrics
  .map(
    (metric) => `
      <article class="snapshot-metric">
        <strong>${escapeHtml(metric.value)}</strong>
        <span>${escapeHtml(metric.label)}</span>
      </article>
    `,
  )
  .join('');

const appMarkup = `
  <div class="page-shell">
    <header class="topbar">
      <div class="brand-block">
        <span class="brand-mark">HF</span>
        <div>
          <p class="brand-name">${escapeHtml(profile.name)}</p>
          <p class="brand-role">${escapeHtml(profile.shortTitle)}</p>
        </div>
      </div>
      <button class="mobile-nav-toggle" type="button" data-mobile-nav-toggle aria-expanded="false" aria-controls="primary-navigation">
        Menú
      </button>
      <div class="nav-drawer" data-nav-drawer>
        <nav class="site-nav" id="primary-navigation" aria-label="Navegación principal">
          ${navMarkup}
        </nav>
      </div>
      <div class="topbar-actions">
        <button class="theme-toggle" type="button" data-theme-toggle aria-label="Cambiar tema">
          <span class="theme-icon" data-theme-icon aria-hidden="true">☾</span>
          <span data-theme-label>Tema oscuro</span>
        </button>
        <button class="command-trigger" type="button" data-open-command aria-label="Abrir búsqueda rápida (Ctrl + K)">
          <span class="command-icon" aria-hidden="true">
            <svg viewBox="0 0 24 24" focusable="false" aria-hidden="true">
              <path fill="currentColor" d="M10.5 4a6.5 6.5 0 1 0 4.03 11.6l4.43 4.43 1.41-1.41-4.43-4.43A6.5 6.5 0 0 0 10.5 4Zm0 2a4.5 4.5 0 1 1 0 9 4.5 4.5 0 0 1 0-9Z"/>
            </svg>
          </span>
          <span class="button-text">Buscar</span>
        </button>
      </div>
    </header>

    <main id="main-content">
      <section class="hero section" id="home">
        <div class="hero-copy">
          <p class="eyebrow">Senior Software Engineer · AI Engineer · Full-Stack Architect</p>
          <h1>${escapeHtml(profile.name)}</h1>
          <p class="hero-title">${escapeHtml(profile.headline)}</p>
          <p class="hero-proposition">${escapeHtml(profile.proposition)}</p>
          <div class="hero-command" aria-hidden="true">
            <span>$ whoami</span>
            <strong>Senior Software Engineer / AI Engineer</strong>
          </div>
          <div class="hero-cta-row">
            ${externalLink(links.quoteForm, 'Solicitar una cotización', 'primary-button')}
            ${externalLink(links.calendly, 'Agendar una consulta', 'secondary-button')}
            ${externalLink(links.portfolioDrive, 'Ver portafolio', 'tertiary-button')}
            ${externalLink(links.cvSpanish, 'CV — Español', 'tertiary-button')}
            ${externalLink(links.cvEnglish, 'CV — English', 'tertiary-button')}
          </div>
          <div class="social-row">
            ${socialLinks}
          </div>
        </div>
        <aside class="hero-snapshot">
          <div class="hero-snapshot-window card">
            <div class="window-chrome" aria-hidden="true">
              <span class="window-dot dot-close"></span>
              <span class="window-dot dot-min"></span>
              <span class="window-dot dot-max"></span>
            </div>
            <div class="snapshot-shell">
              ${heroSnapshotRows}
            </div>
          </div>
          <div class="snapshot-metrics-grid">
            ${heroSnapshotMetrics}
          </div>
        </aside>
      </section>

      <section class="section section-band reveal" id="about">
        <div class="section-heading">
          <p class="eyebrow">Sobre mí</p>
          <h2>Trayectoria, arquitectura y evolución hacia IA</h2>
        </div>
        <div class="two-column-layout">
          <div class="about-column about-summary-column">
            <p>${escapeHtml(profile.summary)}</p>
            <ul class="bullet-list about-bullet-list">
              ${profile.about.map((item) => `<li>${escapeHtml(item)}</li>`).join('')}
            </ul>
          </div>
          <div class="about-column about-detail-column">
            <div class="card about-summary-card">
              <p class="eyebrow accent">Resumen rápido</p>
              <ul class="chip-list about-highlights-list">
                ${profile.aboutHighlights.map((item) => `<li class="chip">${escapeHtml(item)}</li>`).join('')}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section class="section reveal" id="services">
        <div class="section-heading section-heading-split">
          <div class="section-heading-copy">
            <p class="eyebrow">Servicios</p>
            <h2>Soluciones digitales y consultoría tecnológica</h2>
            <p>Desarrollo soluciones digitales adaptadas a las necesidades de cada negocio, desde aplicaciones y plataformas completas hasta integraciones, modernización de sistemas y soluciones basadas en Inteligencia Artificial.</p>
              <div class="mini-command section-command" aria-hidden="true" style="gap: 0;">
              <span>$ build --solution</span>
            </div>
          </div>
          <div class="section-heading-action">
            ${externalLink(links.quoteForm, 'Cotiza tu proyecto', 'primary-button section-cta-button')}
          </div>
        </div>
        <div class="card-grid services-grid">
          ${serviceCards}
        </div>
      </section>

      <section class="section reveal" id="experience">
        <div class="section-heading">
          <p class="eyebrow">Experiencia</p>
          <h2>Impacto en productos, equipos y plataformas</h2>
        </div>
        <div class="stack-list">
          ${experienceCards}
        </div>
      </section>

      <section class="section reveal" id="education">
        <div class="section-heading">
          <p class="eyebrow">Educación y certificaciones</p>
          <h2>Formación que complementa la experiencia</h2>
          <p>Base académica y certificaciones recientes para complementar la experiencia profesional.</p>
        </div>
        <div class="education-layout">
          ${educationCard}
          <div class="education-certifications">
            ${certificationCards}
          </div>
        </div>
      </section>

      <section class="section reveal" id="projects">
        <div class="section-heading">
          <p class="eyebrow">Proyectos</p>
          <h2>Casos profesionales destacados</h2>
          <p>Selección de trabajos recientes del CV, explicados desde el problema, la solución, el stack y el resultado.</p>
        </div>
        <div class="card-grid project-grid-layout">
          ${projectCards}
        </div>
      </section>

      <section class="section reveal" id="technology">
        <div class="section-heading">
          <p class="eyebrow">Tecnología</p>
          <h2>Habilidades técnicas agrupadas por responsabilidad</h2>
        </div>
        <div class="card-grid skills-grid">
          ${skillPanels}
        </div>
      </section>

      <section class="section reveal" id="portfolio">
        <div class="section-heading">
          <p class="eyebrow">Portafolio de trabajo</p>
          <h2>Explora evidencia visual de mis proyectos</h2>
          <p>Reúno aquí videos, imágenes y demostraciones para que puedas revisar el trabajo con más contexto visual.</p>
        </div>
        <div class="portfolio-banner card">
          <div>
            <p class="eyebrow accent">Portafolio</p>
            <h3>Ver portafolio completo</h3>
            <p>Abre el repositorio visual en Google Drive con material adicional de proyectos y trabajos realizados.</p>
          </div>
          ${externalLink(links.portfolioDrive, 'Ver portafolio completo', 'primary-button')}
        </div>
      </section>

      <section class="section reveal" id="contact">
        <div class="section-heading">
          <p class="eyebrow">Contacto y recursos</p>
          <h2>Da el siguiente paso</h2>
          <p>Si quieres avanzar con un proyecto, validar una idea o agendar una conversación técnica, aquí están las vías directas.</p>
        </div>
        <div class="contact-banner card">
          <div class="contact-banner-copy">
            <p class="eyebrow accent">Contacto directo</p>
            <h3>Hablemos de tu proyecto o colaboración técnica</h3>
            <p>Cotiza, agenda y accede a recursos clave para evaluar una colaboración con mayor rapidez.</p>
          </div>
          <div class="contact-banner-actions">
            <div class="inline-actions contact-primary-actions">
              ${externalLink(links.quoteForm, 'Cotiza tu proyecto', 'primary-button')}
              ${externalLink(links.calendly, 'Agenda una consultoría', 'secondary-button')}
              ${externalLink(links.portfolioDrive, 'Ver portafolio', 'tertiary-button')}
            </div>
            <div class="inline-actions contact-support-actions">
              ${resourceLinks}
              ${isTruthyLink(links.whatsapp) ? `<a class="inline-link resource-link" href="${escapeHtml(links.whatsapp)}" target="_blank" rel="noopener noreferrer">${socialLabel('WhatsApp')}</a>` : `<span class="inline-link resource-link is-disabled" aria-disabled="true">${socialLabel('WhatsApp')}</span>`}
              ${isTruthyLink(links.telegram) ? `<a class="inline-link resource-link" href="${escapeHtml(links.telegram)}" target="_blank" rel="noopener noreferrer">${socialLabel('Telegram')}</a>` : `<span class="inline-link resource-link is-disabled" aria-disabled="true">${socialLabel('Telegram')}</span>`}
              ${isTruthyLink(links.email) ? `<a class="inline-link resource-link" href="${escapeHtml(links.email)}" target="_blank" rel="noopener noreferrer">${socialLabel('Email')}</a>` : `<span class="inline-link resource-link is-disabled" aria-disabled="true">${socialLabel('Email')}</span>`}
            </div>
          </div>
        </div>
      </section>

      <footer class="site-footer reveal" id="footer">
        <div class="footer-brand card">
          <p class="eyebrow accent">Marca personal</p>
          <h2>Software, IA y producto para convertir ideas en resultados de negocio.</h2>
          <p>Construyo soluciones sólidas, escalables y fáciles de adoptar por equipos, clientes y empresas.</p>
        </div>
        <p class="footer-note">Perfil enfocado en proyectos, consultoría y colaboración técnica con organizaciones.</p>
      </footer>
    </main>
  </div>

  <div class="command-palette" data-command-palette hidden>
    <div class="command-backdrop" data-close-command></div>
    <div class="command-panel" role="dialog" aria-modal="true" aria-labelledby="command-title">
      <div class="command-header">
        <div>
          <p class="eyebrow">Búsqueda rápida</p>
          <h2 id="command-title">Navegación rápida</h2>
        </div>
        <button class="close-button" type="button" data-close-command aria-label="Cerrar command palette">Cerrar</button>
      </div>
      <label class="command-search-label" for="command-search">Buscar acción</label>
      <input id="command-search" class="command-search" type="text" autocomplete="off" placeholder="Escribe para filtrar acciones" />
      <ul class="command-list" role="listbox" aria-label="Acciones rápidas"></ul>
    </div>
  </div>
`;

app.innerHTML = appMarkup;

const themeLabel = document.querySelector('[data-theme-label]');
const themeIcon = document.querySelector('[data-theme-icon]');
const themeToggle = document.querySelector('[data-theme-toggle]');
const palette = document.querySelector('[data-command-palette]');
const paletteSearch = document.querySelector('#command-search');
const paletteList = document.querySelector('.command-list');
const mobileNavToggle = document.querySelector('[data-mobile-nav-toggle]');
const navDrawer = document.querySelector('[data-nav-drawer]');
const openPaletteButtons = document.querySelectorAll('[data-open-command]');
const closePaletteButtons = document.querySelectorAll('[data-close-command]');

const getStoredTheme = () => {
  const storedTheme = localStorage.getItem(storageKey);
  return themeOptions.includes(storedTheme) ? storedTheme : 'dark';
};

const applyTheme = (theme) => {
  document.documentElement.dataset.theme = theme;
  document.documentElement.dataset.themePreference = theme;
  localStorage.setItem(storageKey, theme);
  themeLabel.textContent = theme === 'dark' ? 'Tema oscuro' : 'Tema claro';
  themeIcon.textContent = theme === 'dark' ? '☾' : '☼';
};

const cycleTheme = () => {
  const current = getStoredTheme();
  const nextIndex = (themeOptions.indexOf(current) + 1) % themeOptions.length;
  applyTheme(themeOptions[nextIndex]);
};

applyTheme(getStoredTheme());

themeToggle?.addEventListener('click', cycleTheme);

const scrollToSection = (target) => {
  const section = document.getElementById(target);
  if (!section) return;

  const topbar = document.querySelector('.topbar');
  const headerHeight = topbar?.getBoundingClientRect().height || 0;
  const extraGap = window.innerWidth <= 720 ? 20 : window.innerWidth <= 1100 ? 24 : 28;
  const anchorOffset = headerHeight + extraGap;
  const top = Math.max(0, window.scrollY + section.getBoundingClientRect().top - anchorOffset);

  window.scrollTo({ top, behavior: 'smooth' });
};

const navLinks = Array.from(document.querySelectorAll('[data-nav-link]'));

const setActiveNavLink = (target) => {
  navLinks.forEach((link) => {
    const isActive = link.dataset.navLink === target;
    link.classList.toggle('is-active', isActive);
    if (isActive) {
      link.setAttribute('aria-current', 'page');
    } else {
      link.removeAttribute('aria-current');
    }
  });
};

function closeMobileNav() {
  if (!navDrawer || !mobileNavToggle) return;
  navDrawer.classList.remove('is-open');
  mobileNavToggle.setAttribute('aria-expanded', 'false');
}

function toggleMobileNav() {
  if (!navDrawer || !mobileNavToggle) return;
  const isOpen = navDrawer.classList.toggle('is-open');
  mobileNavToggle.setAttribute('aria-expanded', String(isOpen));
}

document.addEventListener('click', (event) => {
  const link = event.target.closest('[data-scroll-target]');
  if (!link) return;
  event.preventDefault();
  closeMobileNav();
  setActiveNavLink(link.dataset.scrollTarget);
  window.requestAnimationFrame(() => scrollToSection(link.dataset.scrollTarget));
});

const openPalette = () => {
  palette.hidden = false;
  palette.classList.add('is-open');
  paletteSearch.value = '';
  renderPaletteActions();
  window.setTimeout(() => paletteSearch.focus(), 0);
};

const closePalette = () => {
  palette.classList.remove('is-open');
  palette.hidden = true;
};

mobileNavToggle?.addEventListener('click', toggleMobileNav);

document.addEventListener('click', (event) => {
  if (!navDrawer || !mobileNavToggle) return;
  if (event.target.closest('.nav-drawer') || event.target.closest('[data-mobile-nav-toggle]')) return;
  closeMobileNav();
});

const runPaletteAction = (action) => {
  if (action.type === 'scroll') {
    scrollToSection(action.target);
    closePalette();
    return;
  }

  if (isTruthyLink(action.href)) {
    window.open(action.href, '_blank', 'noopener,noreferrer');
    closePalette();
  }
};

const renderPaletteActions = () => {
  const query = paletteSearch.value.trim().toLowerCase();
  const filtered = commandActions.filter((action) => action.label.toLowerCase().includes(query));

  paletteList.innerHTML = filtered
    .map(
      (action, index) => `
        <li>
          <button class="command-item ${index === 0 ? 'is-active' : ''}" type="button" data-command-index="${index}">
            <span>${escapeHtml(action.label)}</span>
            <span class="command-kind">${escapeHtml(action.type === 'scroll' ? 'Ir a sección' : 'Abrir enlace')}</span>
          </button>
        </li>
      `,
    )
    .join('');

  paletteList.querySelectorAll('[data-command-index]').forEach((button, index) => {
    button.addEventListener('click', () => runPaletteAction(filtered[index]));
  });
};

openPaletteButtons.forEach((button) => button.addEventListener('click', openPalette));
closePaletteButtons.forEach((button) => button.addEventListener('click', closePalette));

paletteSearch.addEventListener('input', renderPaletteActions);

palette.addEventListener('click', (event) => {
  if (event.target === palette) {
    closePalette();
  }
});

document.addEventListener('keydown', (event) => {
  const metaKey = navigator.platform.includes('Mac') ? event.metaKey : event.ctrlKey;
  if (metaKey && event.key.toLowerCase() === 'k') {
    event.preventDefault();
    openPalette();
    return;
  }

  if (event.key === 'Escape' && !palette.hidden) {
    closePalette();
  }

  if (event.key === 'Escape') {
    closeMobileNav();
  }
});

const navSections = navigation
  .map((item) => document.getElementById(item.target))
  .filter(Boolean);

if ('IntersectionObserver' in window && navSections.length) {
  const navObserver = new IntersectionObserver(
    (entries) => {
      const visibleEntry = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

      if (visibleEntry?.target?.id) {
        setActiveNavLink(visibleEntry.target.id);
      }
    },
    {
      rootMargin: '-45% 0px -45% 0px',
      threshold: [0.15, 0.3, 0.5, 0.7],
    },
  );

  navSections.forEach((section) => navObserver.observe(section));
}

const revealElements = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 },
  );

  revealElements.forEach((element) => observer.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}

renderPaletteActions();

// Avoid empty-resource dead links in the current launch while keeping data-driven rendering intact.
document.querySelectorAll('a[href=""]').forEach((anchor) => {
  anchor.addEventListener('click', (event) => event.preventDefault());
});
