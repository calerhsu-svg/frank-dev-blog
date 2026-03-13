// ── STATE ────────────────────────────────────────────────────────
const LANGS=['tw','jp','cn','ph']
const LANG_LABELS={tw:'🇹🇼 TW',jp:'🇯🇵 JP',cn:'🇨🇳 CN',ph:'🇵🇭 PH'}

// Map browser language codes to our supported langs
function detectLang(){
  const nav=navigator.language||navigator.userLanguage||''
  const code=nav.toLowerCase()
  if(code.startsWith('ja')) return 'jp'
  if(code.startsWith('zh')){
    // zh-TW, zh-Hant → tw; zh-CN, zh-Hans, zh → cn
    if(code.includes('tw')||code.includes('hant')) return 'tw'
    return 'cn'
  }
  if(code.startsWith('fil')||code.startsWith('tl')) return 'ph'
  if(code.startsWith('en')) return 'ph'
  if(code.startsWith('ko')||code.startsWith('ms')||code.startsWith('vi')||code.startsWith('th')) return 'ph'
  // Default to English for unsupported locales
  return 'ph'
}

function loadLang(){
  const saved=localStorage.getItem('frank-dev-lang')
  if(saved&&LANGS.includes(saved)) return saved
  return detectLang()
}

let lang=loadLang(), darkMode=false, activeTag=null, dailyOffset=0

// ── LANG ─────────────────────────────────────────────────────────
function applyLang(){
  const L=LANG[lang]
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const k=el.getAttribute('data-i18n')
    if(L[k]!==undefined) el.textContent=L[k]
  })
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el=>{
    const k=el.getAttribute('data-i18n-placeholder')
    if(L[k]!==undefined) el.placeholder=L[k]
  })
  document.getElementById('langBtn').textContent=LANG_LABELS[lang]
  document.title=L.site_title
  document.querySelectorAll('.lang-option').forEach(btn=>{
    btn.classList.toggle('active',btn.getAttribute('onclick').includes("'"+lang+"'"))
  })
}
function toggleLangMenu(){
  document.getElementById('langMenu').classList.toggle('open')
}
function setLang(l){
  lang=l;activeTag=null
  localStorage.setItem('frank-dev-lang',l)
  document.getElementById('langMenu').classList.remove('open')
  applyLang();renderAll();renderDaily()
}
document.addEventListener('click',e=>{
  if(!e.target.closest('.lang-dropdown'))document.getElementById('langMenu').classList.remove('open')
})

// ── NAV ──────────────────────────────────────────────────────────
function toggleMenu(){
  document.querySelector('.nav-right').classList.toggle('open')
  document.getElementById('hamburgerBtn').classList.toggle('active')
  document.getElementById('menuBackdrop').classList.toggle('open')
  document.body.style.overflow=document.querySelector('.nav-right').classList.contains('open')?'hidden':''
}
function closeMenu(){
  document.querySelector('.nav-right').classList.remove('open')
  document.getElementById('hamburgerBtn').classList.remove('active')
  document.getElementById('menuBackdrop').classList.remove('open')
  document.body.style.overflow=''
}
function showPage(name){
  closeMenu()
  document.querySelectorAll('.page').forEach(p=>p.classList.remove('active'))
  document.querySelectorAll('.nav-link').forEach(b=>b.classList.remove('active'))
  document.getElementById('page-'+name).classList.add('active')
  const btn=document.querySelector(`.nav-link[data-page="${name}"]`)
  if(btn) btn.classList.add('active')
  window.scrollTo(0,0)
}

// ── DARK MODE ────────────────────────────────────────────────────
function toggleDark(){
  darkMode=!darkMode
  document.body.setAttribute('data-dark',darkMode)
  document.getElementById('themeBtn').textContent=darkMode?'☀️':'🌙'
}

// ── RENDER POSTS ─────────────────────────────────────────────────
function getPosts(){ return {tw:POSTS_TW,jp:POSTS_JP,cn:POSTS_CN,ph:POSTS_PH}[lang]||POSTS_TW }
function getTags(){
  const L=LANG[lang]
  const tagMap={
    'Unity':'Unity','Cocos':'Cocos',
    '入門':L.tag_beginner,'効能優化':L.tag_perf,'效能優化':L.tag_perf,
    '教學':L.tag_tutorial,'接案':L.tag_freelance,'心得':L.tag_insight,'UI設計':L.tag_ui,
    '最適化':L.tag_perf,'チュートリアル':L.tag_tutorial,'フリーランス':L.tag_freelance,
    '体験談':L.tag_insight,'UIデザイン':L.tag_ui
  }
  return tagMap
}
function makeTagChips(tags){
  return tags.map(t=>`<span class="tag-chip">${t}</span>`).join('')
}
function makeCard(post){
  const el=document.createElement('div')
  el.className='card'
  el.innerHTML=`<div class="card-icon">${post.cover}</div><div class="card-tags">${makeTagChips(post.tags)}</div><h3>${post.title}</h3><p>${post.excerpt}</p><div class="card-meta"><span>📅 ${post.date}</span><span>⏱ ${post.readTime}</span></div>`
  el.onclick=()=>openModal(post)
  return el
}
function renderHomeGrid(){
  const g=document.getElementById('home-grid')
  g.innerHTML=''
  getPosts().slice(0,3).forEach(p=>g.appendChild(makeCard(p)))
}
function renderPostsGrid(){
  const posts=getPosts()
  const L=LANG[lang]
  const tagMap=getTags()
  const filtered=activeTag?posts.filter(p=>p.tags.some(t=>t===activeTag||tagMap[t]===activeTag||getTags()[t]===activeTag)):posts
  const g=document.getElementById('posts-grid')
  g.innerHTML=''
  filtered.forEach(p=>g.appendChild(makeCard(p)))
  document.getElementById('post-count').textContent=`${L.posts_count} ${filtered.length} ${L.posts_count2}`
}
function renderFilterBar(){
  const bar=document.getElementById('filter-bar')
  bar.innerHTML=''
  const L=LANG[lang]
  const allTags=[...new Set(getPosts().flatMap(p=>p.tags))]
  const allBtn=document.createElement('button')
  allBtn.className='filter-tag'+(activeTag===null?' active':'')
  allBtn.textContent=L.tag_all
  allBtn.onclick=()=>{activeTag=null;renderFilterBar();renderPostsGrid()}
  bar.appendChild(allBtn)
  allTags.forEach(tag=>{
    const btn=document.createElement('button')
    btn.className='filter-tag'+(activeTag===tag?' active':'')
    btn.textContent=tag
    btn.onclick=()=>{activeTag=tag;renderFilterBar();renderPostsGrid()}
    bar.appendChild(btn)
  })
}
function renderAll(){
  renderHomeGrid()
  renderFilterBar()
  renderPostsGrid()
}

// ── MODAL ────────────────────────────────────────────────────────
function openModal(post){
  document.getElementById('m-icon').textContent=post.cover
  document.getElementById('m-tags').innerHTML=makeTagChips(post.tags)
  document.getElementById('m-title').textContent=post.title
  document.getElementById('m-meta').innerHTML=`<span>📅 ${post.date}</span><span>⏱ ${post.readTime}</span>`
  document.getElementById('m-body').innerHTML=post.content.map(b=>b.t==='h3'?`<h3>${b.s}</h3>`:`<p>${b.s}</p>`).join('')
  document.getElementById('modal-overlay').classList.add('open')
  document.body.style.overflow='hidden'
}
function closeModal(e){
  if(e&&e.target!==document.getElementById('modal-overlay')&&!e.target.classList.contains('modal-close'))return
  document.getElementById('modal-overlay').classList.remove('open')
  document.body.style.overflow=''
}

// ── COURSE PREVIEW ──────────────────────────────────────────────
function openCoursePreview(id){
  const course=COURSES[id]
  if(!course) return
  const L=LANG[lang]
  document.getElementById('cp-icon').textContent=course.icon
  // Badge
  const badge=document.getElementById('cp-badge')
  if(course.type==='free'){
    badge.className='cp-badge free'
    badge.textContent=L.free||'免費'
  }else{
    badge.className='cp-badge paid'
    badge.textContent=course.price
  }
  // Title
  const titleKey={'unity-guide':'cr1_title','cocos-cheatsheet':'cr2_title','perf-course':'cr3_title','arch-course':'cr4_title','fullgame-course':'cr5_title'}
  document.getElementById('cp-title').textContent=L[titleKey[id]]||id
  // TOC
  const tocEl=document.getElementById('cp-toc')
  const tocItems=course.toc?course.toc[lang]||course.toc.tw:course.lessons?course.lessons[lang]||course.lessons.tw:[]
  if(tocItems.length){
    const tocLabel=L.cp_toc||'目錄'
    tocEl.innerHTML=`<h3>📋 ${tocLabel}</h3><ol>${tocItems.map((item,i)=>`<li${i===0?' class="highlight"':''}>${item}</li>`).join('')}</ol>`
    tocEl.style.display='block'
  }else{
    tocEl.style.display='none'
  }
  // Body (preview content)
  const preview=course.preview?course.preview[lang]||course.preview.tw:[]
  const bodyEl=document.getElementById('cp-body')
  bodyEl.innerHTML=preview.map(b=>{
    if(b.t==='h3') return `<h3>${b.s}</h3>`
    if(b.t==='h4') return `<h4>${b.s}</h4>`
    if(b.t==='code') return `<pre>${b.s}</pre>`
    if(b.t==='lock') return `<div class="cp-lock">${b.s}</div>`
    return `<p>${b.s}</p>`
  }).join('')
  // Footer action
  const langLabel={tw:'繁體中文版',jp:'日本語版',cn:'简体中文版',ph:'English Version'}[lang]
  const footer=document.getElementById('cp-footer')
  if(course.type==='free'){
    footer.innerHTML=`<span style="font-size:12px;color:var(--sub)">📦 ${langLabel}</span><button class="btn-green" onclick="closeCoursePreview();freeDownload('${id}')">${L.dl_btn||'📥 免費下載'}</button>`
  }else{
    footer.innerHTML=`<span style="font-size:12px;color:var(--sub)">📦 ${langLabel}</span><button class="btn-primary" onclick="closeCoursePreview();buyCourse('${id}')">${L.buy_btn||'🛒 立即購買'}</button>`
  }
  document.getElementById('course-modal').classList.add('open')
  document.body.style.overflow='hidden'
}
function closeCoursePreview(e){
  if(e&&e.target!==document.getElementById('course-modal')&&!e.target.classList.contains('modal-close'))return
  document.getElementById('course-modal').classList.remove('open')
  document.body.style.overflow=''
}

// ── ACTIONS ──────────────────────────────────────────────────────
function scrollToContact(){
  showPage('services')
  setTimeout(()=>document.getElementById('contact-section').scrollIntoView({behavior:'smooth'}),100)
}
function copyText(txt){
  const msgs={tw:'已複製！',jp:'コピーしました！',cn:'已复制！',ph:'Copied!'}
  navigator.clipboard.writeText(txt).then(()=>showToast(msgs[lang]||msgs.tw))
}
function showToast(msg){
  const t=document.getElementById('toast')
  t.textContent=msg;t.classList.add('show')
  setTimeout(()=>t.classList.remove('show'),2500)
}
function submitContact(){
  const name=document.getElementById('cf-name').value
  const email=document.getElementById('cf-email').value
  const service=document.getElementById('cf-service').value
  const desc=document.getElementById('cf-desc').value
  const budget=document.getElementById('cf-budget').value
  const timeline=document.getElementById('cf-timeline').value
  if(!name||!email){showToast({tw:'請填寫姓名和 Email',jp:'名前とEmailを入力してください',cn:'请填写姓名和 Email',ph:'Please fill in name and Email'}[lang]);return}
  const body=`姓名/名前: ${name}\nEmail: ${email}\n服務/サービス: ${service}\n描述/内容: ${desc}\n預算/予算: ${budget}\n時程/期間: ${timeline}`
  window.location.href=`mailto:a8398433@gmail.com?subject=${encodeURIComponent('[Frank Dev] 接案詢問 / 案件問い合わせ')}&body=${encodeURIComponent(body)}`
  showToast({tw:'已開啟郵件！',jp:'メールを開きました！',cn:'已打开邮件！',ph:'Email opened!'}[lang])
}
function captureEmail(){
  const email=document.getElementById('capture-email').value
  if(!email){showToast({tw:'請輸入 Email',jp:'Emailを入力してください',cn:'请输入 Email',ph:'Please enter Email'}[lang]);return}
  window.location.href=`mailto:a8398433@gmail.com?subject=${encodeURIComponent('[Frank Dev] 訂閱申請')}&body=${encodeURIComponent('訂閱 Email: '+email)}`
  showToast({tw:'感謝訂閱！',jp:'ご登録ありがとうございます！',cn:'感谢订阅！',ph:'Thank you for subscribing!'}[lang])
}
function captureCourseEmail(){
  const email=document.getElementById('course-email').value
  if(!email){showToast({tw:'請輸入 Email',jp:'Emailを入力してください',cn:'请输入 Email',ph:'Please enter Email'}[lang]);return}
  window.location.href=`mailto:a8398433@gmail.com?subject=${encodeURIComponent('[Frank Dev] 課程訂閱 / コース登録')}&body=${encodeURIComponent('Email: '+email)}`
  showToast({tw:'稍後將寄送教材至你的 Email！',jp:'教材を近日中にメールでお送りします！',cn:'稍后将寄送教材至你的 Email！',ph:'Materials will be sent to your email soon!'}[lang])
}
function freeDownload(item){
  const files={'unity-guide':'unity-beginner-guide.html','cocos-cheatsheet':'cocos-creator-cheatsheet.html'}
  const file=files[item]
  if(!file) return
  const url='downloads/'+lang+'/'+file
  window.open(url,'_blank')
  showToast({tw:'下載開始！',jp:'ダウンロード開始！',cn:'下载开始！',ph:'Download started!'}[lang])
}
// ── PAYMENT ─────────────────────────────────────────────────────
const COURSE_PRICES={'perf-course':'NT$990','arch-course':'NT$1,490','fullgame-course':'NT$2,490'}
const COURSE_TITLE_KEYS={'perf-course':'cr3_title','arch-course':'cr4_title','fullgame-course':'cr5_title'}
let currentPayItem=null

function buyCourse(item){
  currentPayItem=item
  const L=LANG[lang]
  const courseName=L[COURSE_TITLE_KEYS[item]]||item
  const price=COURSE_PRICES[item]||''
  document.getElementById('pay-course-name').textContent=courseName
  document.getElementById('pay-price').textContent=price
  document.querySelectorAll('#pay-modal [data-i18n]').forEach(el=>{
    const k=el.getAttribute('data-i18n')
    if(L[k]!==undefined) el.textContent=L[k]
  })
  document.getElementById('pay-modal').classList.add('open')
  document.body.style.overflow='hidden'
}
function closePayModal(e){
  if(e&&e.target!==document.getElementById('pay-modal')&&!e.target.classList.contains('modal-close'))return
  document.getElementById('pay-modal').classList.remove('open')
  document.body.style.overflow=''
  currentPayItem=null
}
function payWithBank(){
  if(!currentPayItem) return
  const L=LANG[lang]
  const courseName=L[COURSE_TITLE_KEYS[currentPayItem]]||currentPayItem
  const price=COURSE_PRICES[currentPayItem]||''
  const langLabel={tw:'繁體中文',jp:'日本語',cn:'简体中文',ph:'English'}[lang]
  const body={
    tw:`我已轉帳購買課程: ${courseName}\n金額: ${price}\n語言版本: ${langLabel}\n\n轉帳帳號末五碼: ____\n請確認後發送教材，謝謝！`,
    jp:`コース購入のため振込しました: ${courseName}\n金額: ${price}\n言語: ${langLabel}\n\n振込口座の下5桁: ____\nご確認後、教材をお送りください。`,
    cn:`我已转账购买课程: ${courseName}\n金额: ${price}\n语言版本: ${langLabel}\n\n转账账号末五码: ____\n请确认后发送教材，谢谢！`,
    ph:`I have transferred payment for: ${courseName}\nAmount: ${price}\nLanguage: ${langLabel}\n\nLast 5 digits of my account: ____\nPlease confirm and send materials. Thank you!`
  }[lang]
  window.location.href=`mailto:a8398433@gmail.com?subject=${encodeURIComponent('[Frank Dev] 課程購買 / Course Purchase: '+currentPayItem)}&body=${encodeURIComponent(body)}`
  closePayModal()
  showToast({tw:'已開啟郵件，確認付款後立即發送教材！',jp:'メールを開きました。お支払い確認後すぐに教材を送ります！',cn:'已打开邮件，确认付款后立即发送教材！',ph:'Email opened! Materials will be sent after payment confirmation!'}[lang])
}
function selectAmount(btn,amt){
  document.querySelectorAll('.donate-amt').forEach(b=>b.classList.remove('active'))
  btn.classList.add('active')
  const el=document.getElementById('don-amount')
  if(el) el.value='NT$'+amt
}
function submitDonation(){
  const name=document.getElementById('don-name').value||'匿名'
  const amount=document.getElementById('don-amount').value||'NT$300'
  const msg=document.getElementById('don-msg').value
  window.location.href=`mailto:a8398433@gmail.com?subject=${encodeURIComponent('[Frank Dev] 贊助通知')}&body=${encodeURIComponent('贊助者: '+name+'\n金額: '+amount+'\n留言: '+msg)}`
  showToast({tw:'謝謝你的支持！❤️',jp:'ご支援ありがとうございます！❤️',cn:'谢谢你的支持！❤️',ph:'Thank you for your support! ❤️'}[lang])
}

// ── SOCIAL SHARING ──────────────────────────────────────────────
function shareOn(platform){
  const url=encodeURIComponent(window.location.href)
  const title=encodeURIComponent(document.title)
  const shareUrls={
    facebook:`https://www.facebook.com/sharer/sharer.php?u=${url}`,
    twitter:`https://twitter.com/intent/tweet?url=${url}&text=${title}`,
    line:`https://social-plugins.line.me/lineit/share?url=${url}`
  }
  if(platform==='copy'){
    navigator.clipboard.writeText(window.location.href).then(()=>{
      showToast({tw:'已複製連結！',jp:'リンクをコピーしました！',cn:'已复制链接！',ph:'Link copied!'}[lang])
    })
    return
  }
  if(shareUrls[platform]) window.open(shareUrls[platform],'_blank','width=600,height=400')
}

// ── INIT ─────────────────────────────────────────────────────────
renderAll()
applyLang()
if(typeof renderDaily==='function') renderDaily()
