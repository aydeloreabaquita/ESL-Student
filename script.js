const teachers=[{name:'Mia Santos',initials:'MS',country:'Philippines',specialty:'Conversation · General English',rating:'4.9',classes:'1,240',bio:'Warm, structured lessons that help learners speak with confidence.'},{name:'Daniel Cho',initials:'DC',country:'South Korea',specialty:'Business English · TOEIC',rating:'4.8',classes:'980',bio:'Practical workplace English with clear goals and useful feedback.'},{name:'Sofia Reyes',initials:'SR',country:'Spain',specialty:'IELTS · Pronunciation',rating:'5.0',classes:'1,480',bio:'Exam preparation and pronunciation coaching for ambitious learners.'},{name:'Emma Wilson',initials:'EW',country:'United Kingdom',specialty:'Kids English · Reading',rating:'4.9',classes:'860',bio:'Patient, playful lessons for young learners and early readers.'},{name:'Kenji Mori',initials:'KM',country:'Japan',specialty:'Beginner English · Grammar',rating:'4.8',classes:'720',bio:'Calm, step-by-step classes with bilingual learning insight.'},{name:'Ava Thompson',initials:'AT',country:'Canada',specialty:'Conversation · Travel',rating:'4.9',classes:'1,110',bio:'Friendly conversation practice for travel, work and daily life.'}];let chosen=teachers[0],selectedSlot='';
document.querySelector('#teacherGrid').innerHTML=teachers.map((t,i)=>`<article class="card teacher-card"><div class="teacher-top"><span class="avatar">${t.initials}</span><div><h3>${t.name}</h3><small>${t.country}</small><div class="rating">★★★★★ ${t.rating}</div></div></div><div class="tags">${t.specialty.split(' · ').map(x=>`<span class="tag">${x}</span>`).join('')}</div><p>${t.bio}</p><footer><span><b>$10</b><small> / 30 min</small></span><button class="primary" data-book="${i}">View schedule</button></footer></article>`).join('');
function teacherSummary(){document.querySelector('#selectedTeacher').innerHTML=`<div class="teacher-top"><span class="avatar">${chosen.initials}</span><div><h3>${chosen.name}</h3><small>${chosen.country}</small><div class="rating">★★★★★ ${chosen.rating}</div></div></div><div class="tags">${chosen.specialty.split(' · ').map(x=>`<span class="tag">${x}</span>`).join('')}</div><p>${chosen.bio}</p><div class="list-item"><span>Classes taught</span><b>${chosen.classes}</b></div><div class="list-item"><span>Class length</span><b>30 min</b></div><div class="list-item"><span>Price</span><b>$10.00</b></div>`}
const days=['Mon 24','Tue 25','Wed 26','Thu 27','Fri 28'],slots=['08:00','09:30','10:30','14:00','17:30'];function renderWeek(){document.querySelector('#bookingWeek').innerHTML=days.map((d,di)=>`<div class="book-day"><h4>${d}</h4>${slots.filter((_,i)=>(i+di)%3!==0).map(t=>`<button class="time-slot" data-slot="${d} at ${t}">${t}</button>`).join('')}</div>`).join('')}teacherSummary();renderWeek();
document.querySelector('#teacherGrid').onclick=e=>{const b=e.target.closest('[data-book]');if(!b)return;chosen=teachers[+b.dataset.book];teacherSummary();document.querySelector('[data-view="booking"]').click()};document.querySelector('#bookingWeek').onclick=e=>{if(!e.target.dataset.slot)return;document.querySelectorAll('.time-slot').forEach(x=>x.classList.remove('selected'));e.target.classList.add('selected');selectedSlot=e.target.dataset.slot;document.querySelector('#selectionLabel').textContent=`${chosen.name} · ${selectedSlot}`;document.querySelector('#confirmBooking').disabled=false};
document.querySelector('#confirmBooking').onclick=()=>{document.querySelector('#modalText').textContent=`Your 30-minute class with ${chosen.name} is confirmed for ${selectedSlot}. Total: $10.00.`;document.querySelector('#modal').classList.add('open')};document.querySelector('#closeModal').onclick=()=>{document.querySelector('#modal').classList.remove('open');document.querySelector('[data-view="classes"]').click()};
const history=[['Mia Santos','Aug 24 · 10:30','Conversation','$10','Completed'],['Daniel Cho','Aug 22 · 14:00','Business English','$10','Completed'],['Sofia Reyes','Aug 20 · 09:30','General English','$10','Completed'],['Mia Santos','Aug 27 · 10:30','Conversation','$10','Upcoming']];document.querySelector('#classHistory').innerHTML=history.map(h=>`<div class="history-row"><b>${h[0]}</b>${h.slice(1,4).map(x=>`<span>${x}</span>`).join('')}<span class="pill ${h[4]==='Completed'?'green':'gold'}">${h[4]}</span></div>`).join('');
document.querySelectorAll('[data-view]').forEach(b=>b.onclick=()=>{document.querySelectorAll('[data-view]').forEach(x=>x.classList.remove('active'));b.classList.add('active');document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));document.querySelector('#'+b.dataset.view).classList.add('active')});document.querySelectorAll('[data-go]').forEach(b=>b.onclick=()=>document.querySelector(`[data-view="${b.dataset.go}"]`).click());


(() => { const icons = {"discover":"<svg viewBox=\"0 0 32 32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\"><circle cx=\"12\" cy=\"10\" r=\"5\"/><path d=\"M3 28v-4a9 9 0 0 1 18 0v4M23 6a5 5 0 0 1 0 10M25 20a8 8 0 0 1 4 7\"/></svg>","booking":"<svg viewBox=\"0 0 32 32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M6 5h21a2 2 0 0 1 2 2v18a3 3 0 0 1-3 3\"/><path d=\"M5 10h24M23 5v6l-3 15a3 3 0 0 1-3 2H5a2 2 0 0 1-2-2L5 7a2 2 0 0 1 1-2Z\"/><path d=\"m9 19 3 4 6-7\"/></svg>","classes":"<svg viewBox=\"0 0 32 32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><path d=\"M10 6H6a2 2 0 0 0-2 2v21h24V8a2 2 0 0 0-2-2h-4\"/><rect x=\"10\" y=\"3\" width=\"12\" height=\"5\" rx=\"1.5\"/><path d=\"M10 14h12M10 20h12M10 25h5\"/></svg>","payments":"<svg viewBox=\"0 0 32 32\" fill=\"none\" stroke=\"currentColor\" stroke-width=\"2.6\" stroke-linecap=\"round\" stroke-linejoin=\"round\" aria-hidden=\"true\" focusable=\"false\"><path d=\"m12 10-3-6a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2l-3 6M11 10h10M12 10C7 15 3 20 3 25c0 5 6 6 13 6s13-1 13-6c0-5-4-10-9-15\"/><path d=\"M19 17h-5a3 3 0 0 0 0 6h4a3 3 0 0 1 0 6h-5M16 15v2m0 12v1\"/></svg>"}; document.querySelectorAll('.nav [data-view]').forEach(button => {button.querySelector('i').innerHTML = icons[button.dataset.view] || '';}); })();
/* Adapt the PillNav glide to both the vertical and mobile navigation. */
(() => {
  const nav = document.querySelector('.nav');
  const buttons = [...nav.querySelectorAll('[data-view]')];
  const glide = document.createElement('span');
  glide.className = 'nav-glide';
  glide.setAttribute('aria-hidden', 'true');
  nav.prepend(glide);
  let hovered = null;
  function sync() {
    buttons.forEach(button => {
      if (button.classList.contains('active')) button.setAttribute('aria-current', 'page');
      else button.removeAttribute('aria-current');
    });
    const target = hovered || (nav.contains(document.activeElement) && buttons.includes(document.activeElement) ? document.activeElement : null) || buttons.find(button => button.classList.contains('active'));
    if (!target) { glide.style.opacity = '0'; return; }
    glide.style.width = target.offsetWidth + 'px';
    glide.style.height = target.offsetHeight + 'px';
    glide.style.transform = 'translate(' + target.offsetLeft + 'px,' + target.offsetTop + 'px)';
    glide.style.opacity = '1';
  }
  buttons.forEach(button => {
    button.addEventListener('pointerenter', () => { hovered = button; sync(); });
    button.addEventListener('focus', sync);
    button.addEventListener('click', sync);
  });
  nav.addEventListener('pointerleave', () => { hovered = null; sync(); });
  nav.addEventListener('focusout', () => requestAnimationFrame(sync));
  new ResizeObserver(sync).observe(nav);
  document.fonts.ready.then(sync);
  sync();
})();

(() => {
  const app = document.querySelector('.app');
  const toggle = document.querySelector('.sidebar-toggle');
  const compact = window.matchMedia('(max-width:950px)');
  let preference = null;
  try { const saved = localStorage.getItem('esl-student-sidebar-expanded'); if (saved !== null) preference = saved === 'true'; } catch {}
  function apply() {
    const expanded = preference === null ? !compact.matches : preference;
    app.classList.toggle('sidebar-collapsed', !expanded);
    app.classList.toggle('sidebar-expanded', expanded);
    toggle.setAttribute('aria-expanded', String(expanded));
    toggle.setAttribute('aria-label', expanded ? 'Collapse sidebar' : 'Expand sidebar');
    toggle.textContent = expanded ? '‹' : '›';
  }
  document.querySelectorAll('.nav [data-view]').forEach(button => {
    const label = button.querySelector('span').textContent;
    button.setAttribute('aria-label', label);
    button.querySelector('i').setAttribute('aria-hidden', 'true');
    const tip = document.createElement('span');
    tip.className = 'nav-tooltip';
    tip.setAttribute('aria-hidden', 'true');
    tip.textContent = label;
    button.append(tip);
  });
  toggle.addEventListener('click', () => {
    preference = toggle.getAttribute('aria-expanded') !== 'true';
    try { localStorage.setItem('esl-student-sidebar-expanded', String(preference)); } catch {}
    apply();
  });
  compact.addEventListener('change', apply);
  apply();
})();
