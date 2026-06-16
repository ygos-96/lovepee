(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var e=`https://script.google.com/macros/s/AKfycbx_6Q8b0BNUHyrxAA65a0dTlc1t22bzMikoy177nCIk8dtyAtoKc5AqQNXx89lBwQY_/exec`;async function t(t,n={}){let r=await fetch(e,{method:`POST`,headers:{"Content-Type":`text/plain;charset=utf-8`},body:JSON.stringify({action:t,...n})});return r.ok?r.json():{ok:!1,error:`Não foi possível conectar à planilha.`}}function n(e,n){return t(`login`,{username:e,password:n})}function r(e,n,r){return t(`update_lovecoins`,{adminUsername:e,targetUsername:n,lovecoins:r})}function i({username:e,amount:n,items:r,productCount:i}){return t(`purchase`,{username:e,amount:n,items:r,productCount:i})}function a(e,n=`mine`){return t(`list_purchases`,{username:e,scope:n})}function o(e){return t(`list_purchases`,{username:e,scope:`all`})}function s(e,n){return t(`cancel_purchase`,{username:e,saleId:n})}function c(e){return t(`resolve_wish_link`,{link:e})}function l(e,n=``){return t(`resolve_product_image`,{name:e,category:n})}function u({id:e,name:n,link:r,image:i,value:a,username:o}){return t(`sync_wish`,{id:e,name:n,link:r,image:i,value:a,username:o})}function d(e,n){return t(`delete_wish`,{id:e,username:n})}function f(e){return t(`list_wishes`,{username:e??``})}var p=`/lovepee/`;function m(e){return`${p}${e.startsWith(`/`)?e.slice(1):e}`}function h(e){return e?/^https?:\/\//i.test(e)||e.startsWith(p)?e:e.startsWith(`/`)?m(e.slice(1)):m(e):m(`products/wish-placeholder.svg`)}var g=e=>m(`products/${encodeURI(e)}`),_=[{id:`b1`,title:`Recado do Dev`,subtitle:``,variant:`pink`,tag:`Hoje`,dailyPhrase:!0},{id:`b2`,title:`Seu saldo está cheio de amor`,subtitle:`Use seus Love Coins para resgatar mimos especiais.`,variant:`dark`,tag:`LC$`},{id:`b3`,title:`Como funciona?`,subtitle:`Escolha um item, resgate com LC$ e aguarde seu presente.`,variant:`light`,tag:`Lovepee`}],v=[{id:`p-vale-maquiagem-50`,name:`Vale Maquiagem`,description:`Vale para usar em produtos de maquiagem na Lovepee. Escolha batons, bases, sombras e mais no valor de LC$ 50.`,price:50,originalPrice:50,discount:0,rating:4.8,sold:420,category:`Vales`,badge:null,image:g(`maquiagem-50.png`)},{id:`p-vale-maquiagem-100`,name:`Vale Maquiagem`,description:`Vale para maquiagem com mais liberdade de escolha. Ideal para montar um kit básico ou complementar a coleção.`,price:100,originalPrice:100,discount:0,rating:4.8,sold:310,category:`Vales`,badge:null,image:g(`maquiagem-100.png`)},{id:`p-vale-maquiagem-150`,name:`Vale Maquiagem`,description:`Vale intermediário para quem quer investir em maquiagem de qualidade. Válido para itens selecionados da vitrine.`,price:150,originalPrice:150,discount:0,rating:4.9,sold:180,category:`Vales`,badge:null,image:g(`maquiagem-150.png`)},{id:`p-vale-maquiagem-200`,name:`Vale Maquiagem`,description:`Vale premium para montar looks completos. Perfeito para presentear ou se presentear com maquiagem.`,price:200,originalPrice:200,discount:0,rating:4.9,sold:95,category:`Vales`,badge:null,image:g(`maquiagem-200.png`)},{id:`p-vale-maquiagem-250`,name:`Vale Maquiagem`,description:`O vale mais completo de maquiagem. Máximo valor para escolher os melhores itens da loja.`,price:250,originalPrice:250,discount:0,rating:5,sold:62,category:`Vales`,badge:null,image:g(`maquiagem-250.png`)},{id:`p-vale-manicure`,name:`Vale Manicure`,description:`Sessão de manicure para cuidar das unhas das mãos. Inclui esmaltação, cutículas e acabamento profissional.`,price:100,originalPrice:100,discount:0,rating:4.9,sold:540,category:`Vales`,badge:null,image:g(`manicure-100.png`)},{id:`p-vale-pedicure`,name:`Vale Pedicure`,description:`Sessão de pedicure para relaxar e deixar os pés impecáveis. Esfoliação, hidratação e esmaltação.`,price:100,originalPrice:100,discount:0,rating:4.8,sold:480,category:`Vales`,badge:null,image:g(`pedicure-100.png`)},{id:`p-livro-nevermoor`,name:`Livro — Nevermoor: Os Desafios de Morrigan Crow`,description:`Fantasia juvenil de Jessica Townsend. Acompanhe Morrigan Crow em um mundo mágico de desafios e descobertas.`,price:80,originalPrice:80,discount:0,rating:4.9,sold:220,category:`Livros`,badge:null,image:g(`nevermoor.jpg`)},{id:`p-livro-kit`,name:`Kit 2 Livros — Escolha do Editor`,description:`Dupla de livros curada pela equipe Lovepee. Combinação de ficção e não-ficção para presentear.`,price:150,originalPrice:150,discount:0,rating:4.9,sold:88,category:`Livros`,badge:null,image:g(`kit-2-livros.png`)},{id:`p-vale-spa`,name:`Vale Spa`,description:`Pacote spa com acesso a sauna, banho de imersão, massagem express e área de relaxamento.`,price:290,originalPrice:290,discount:0,rating:4.9,sold:210,category:`Experiências`,badge:null,image:g(`vale-spa.png`)},{id:`p-vale-head-spa`,name:`Vale Head Spa`,description:`Tratamento capilar e relaxamento do couro cabeludo com massagem, aromaterapia e hidratação profunda.`,price:170,originalPrice:170,discount:0,rating:4.9,sold:156,category:`Experiências`,badge:null,image:g(`head-spa.png`)},{id:`p-viagem-fds`,name:`Viagem de Final de Semana`,description:`Pacote de fim de semana para dois: hospedagem, café da manhã e tempo para desconectar. Destinos parceiros Lovepee.`,price:1500,originalPrice:1500,discount:0,rating:5,sold:48,category:`Experiências`,badge:null,image:g(`viagem.png`)}],y=`lovepee-data`,b=`lovepee-session`,x=`lovepee-cart`,S=18,C=m(`products/wish-placeholder.svg`);function w(){return{version:S,products:structuredClone(v),wishes:[],banners:structuredClone(_)}}function T(){try{let e=localStorage.getItem(y);return e?JSON.parse(e):null}catch{return null}}function E(e){localStorage.setItem(y,JSON.stringify(e))}function D(){let e=T();if(!e){E(w());return}e.version!==S&&E({version:S,products:structuredClone(v),banners:structuredClone(_),wishes:e.wishes??[]})}function O(){return D(),T()}function k(){return O().wishes??[]}function A(e){let t=Math.max(0,Math.floor(Number(e.value)||0));return{id:e.id,name:e.name,link:e.link,externalUrl:e.link,comingSoon:!0,badge:`Em breve`,price:t,originalPrice:t,discount:0,rating:0,sold:0,category:`Desejos`,description:`Este produto foi sugerido na lista de desejos e em breve estará disponível para compra com LC$ na Lovepee.`,image:e.image||C,createdBy:e.createdBy,createdByUsername:e.createdByUsername,createdAt:e.createdAt,value:t}}function j(){let e=O(),t=(e.wishes??[]).map(A);return[...e.products,...t]}function M(e){return j().find(t=>t.id===e)??null}function ee(e){return k().find(t=>t.id===e)??null}function te(e){if(!e)return{ok:!0};try{let t=new URL(e);if(![`http:`,`https:`].includes(t.protocol))return{ok:!1,error:`O link deve começar com http:// ou https://`}}catch{return{ok:!1,error:`Informe um link válido.`}}return{ok:!0}}function ne(e){let t=String(e??``).trim();if(!t||t===`0`)return{ok:!0,value:0,provided:!1};let n=Math.floor(Number(t));return!Number.isFinite(Number(t))||n<=0?{ok:!1,error:`Informe um valor válido em LC$ (maior que zero).`}:{ok:!0,value:n,provided:!0}}function re(e,t){return e?{ok:!0,value:0,provided:!1}:ne(t)}function ie(e){let t=O();t.wishes=e,E(t)}function ae({name:e,link:t,image:n,value:r,userId:i,username:a}){let o=e.trim(),s=t.trim(),c=String(n||``).trim(),l=re(s,r);if(!o)return{ok:!1,error:`Informe o nome do produto.`};let u=te(s);if(!u.ok)return u;if(!s){if(!l.ok)return l;if(!l.provided)return{ok:!1,error:`Sem link, informe também o valor desejado em LC$.`}}let d=O(),f={id:`wish-${crypto.randomUUID()}`,name:o,link:s,image:c,value:l.value,createdBy:i,createdByUsername:a,createdAt:new Date().toISOString()};return d.wishes=[...d.wishes??[],f],E(d),{ok:!0,wish:f}}function oe(e,{name:t,link:n,image:r,value:i},a){let o=t.trim(),s=n.trim(),c=String(r||``).trim(),l=re(s,i);if(!o)return{ok:!1,error:`Informe o nome do produto.`};let u=te(s);if(!u.ok)return u;let d=O(),f=d.wishes??[],p=f.findIndex(t=>t.id===e);if(p===-1)return{ok:!1,error:`Desejo não encontrado.`};let m=f[p];if(m.createdBy!==a)return{ok:!1,error:`Você só pode editar seus próprios desejos.`};if(!s){if(!l.ok)return l;if(!l.provided&&!(Number(m.value)>0))return{ok:!1,error:`Sem link, informe também o valor desejado em LC$.`}}let h={...m,name:o,link:s,image:c||m.image,value:s?0:l.provided?l.value:Math.max(0,Math.floor(Number(m.value)||0)),updatedAt:new Date().toISOString()};return f[p]=h,d.wishes=f,E(d),{ok:!0,wish:h}}function se(e,t){let n=O(),r=n.wishes??[],i=r.findIndex(t=>t.id===e);return i===-1?{ok:!1,error:`Desejo não encontrado.`}:r[i].createdBy===t?(n.wishes=r.filter(t=>t.id!==e),E(n),{ok:!0}):{ok:!1,error:`Você só pode apagar seus próprios desejos.`}}function ce(){return O().banners}function le(){try{let e=localStorage.getItem(b);return e?JSON.parse(e):null}catch{return null}}function ue(e){localStorage.setItem(b,JSON.stringify({user:e}))}function de(e){let t=le();if(!t?.user)return null;let n={...t.user,...e};return ue(n),n}function fe(){localStorage.removeItem(b)}function pe(){return le()?.user??null}function N(){try{let e=localStorage.getItem(x);return e?JSON.parse(e):{userId:null,items:[]}}catch{return{userId:null,items:[]}}}function me(e){localStorage.setItem(x,JSON.stringify(e))}function he(e){let t=N();return t.userId===e?t.items.reduce((e,t)=>e+t.quantity,0):0}function P(e){let t=N();return t.userId===e?t.items.map(e=>{let t=M(e.productId);return!t||t.comingSoon?null:{productId:e.productId,quantity:e.quantity,product:t,lineTotal:t.price*e.quantity}}).filter(Boolean):[]}function ge(e){return P(e).reduce((e,t)=>e+t.lineTotal,0)}function _e(e,t){let n=M(t);if(!n)return{ok:!1,error:`Produto não encontrado.`};if(n.comingSoon)return{ok:!1,error:`Este produto ainda não está disponível para compra.`};let r=N();r.userId!==e&&(r={userId:e,items:[]});let i=r.items.find(e=>e.productId===t);return i?i.quantity+=1:r.items.push({productId:t,quantity:1}),me(r),{ok:!0,count:he(e)}}function ve(e,t){let n=N();return n.userId===e?(n.items=n.items.filter(e=>e.productId!==t),me(n),{ok:!0,count:he(e)}):{ok:!0,count:0}}function ye(e){me({userId:e,items:[]})}function be(e){let t=String(e||``).trim();return t?t.toLowerCase().replace(/(?:^|[\s-])\S/g,e=>e.toUpperCase()):``}function F(e){return`LC$ ${Math.floor(Number(e)).toLocaleString(`pt-BR`)}`}function I(e){return`${Math.floor(Number(e)).toLocaleString(`pt-BR`)} LC$`}async function xe(e,t){let r=await n(e,t);return r.ok?(ue(r.user),{ok:!0,user:L(r.user)}):r}function Se(){fe()}function Ce(){let e=pe();return e?L(e):null}async function we(e,t,n){if(!n?.isAdmin)return{ok:!1,error:`Somente o perfil dev01 pode alterar saldos LC$.`};let i=Number(t);if(!Number.isFinite(i)||i<0)return{ok:!1,error:`Informe um valor válido de LC$.`};let a=await r(n.username,e,Math.floor(i));return a.ok?(a.user.username===n.username&&de({lovecoins:a.user.lovecoins}),{ok:!0,user:L(a.user)}):a}async function Te(e,t){if(!e)return{ok:!1,error:`Sessão inválida. Entre novamente.`};if(!t.length)return{ok:!1,error:`Seu carrinho está vazio.`};let n=0,r=[];for(let e of t){let t=e.product;if(!t)return{ok:!1,error:`Um produto do carrinho não está mais disponível.`};if(t.comingSoon)return{ok:!1,error:`"${t.name}" não está disponível para compra.`};n+=Math.floor(t.price)*e.quantity,r.push({product:t,quantity:e.quantity})}if(e.lovecoins<n)return{ok:!1,error:`LC$ insuficientes. Você tem ${e.lovecoins} LC$ e precisa de ${n} LC$.`};let a=r.map(({product:e,quantity:t})=>({name:e.name,quantity:t,price:e.price})),o=r.reduce((e,t)=>e+t.quantity,0),s=await i({username:e.username,amount:n,items:a,productCount:o});if(!s.ok)return s;if(!s.saleId)return{ok:!1,error:`O saldo foi debitado, mas a compra não entrou na aba compras. O Apps Script publicado está desatualizado — abra o projeto, cole o Code.gs novo e reimplante o App da Web em uma nova versão.`,partial:!0,lovecoins:s.lovecoins};let c=de({lovecoins:s.lovecoins});return c?{ok:!0,user:L(c),spent:n,products:r,saleId:s.saleId}:{ok:!1,error:`Não foi possível atualizar sua sessão.`}}async function Ee(e,t){if(!e)return{ok:!1,error:`Sessão inválida. Entre novamente.`};if(!t)return{ok:!1,error:`Pedido não informado.`};let n=await s(e.username,t);if(!n.ok)return n;let r=de({lovecoins:n.lovecoins});return r?{ok:!0,user:L(r),refunded:n.refunded,saleId:n.saleId}:{ok:!1,error:`Não foi possível atualizar sua sessão.`}}function L(e){let{password:t,...n}=e;return{...n,name:be(n.name)}}var De=`Lovepee`,Oe=m(`logo.png`);m(`favicon.png`);var R={home:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>`,grid:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/></svg>`,cart:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/></svg>`,user:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>`,search:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>`,coin:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"/><path d="M12 18V6"/></svg>`,star:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>`,logout:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"/><polyline points="16 17 21 12 16 7"/><line x1="21" x2="9" y1="12" y2="12"/></svg>`,heart:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>`,filter:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"/></svg>`,trash:`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>`},ke=[{id:`home`,label:`Início`,icon:R.home},{id:`wishes`,label:`Desejos`,icon:R.heart},{id:`cart`,label:`Carrinho`,icon:R.cart},{id:`profile`,label:`Perfil`,icon:R.user}];function Ae({user:e,activeTab:t,cartCount:n=0,content:r}){return`
    <div class="app-shell">
      <header class="app-header">
        <div class="app-header-top">
          <div class="app-brand">
            <img src="${Oe}" alt="${De}" class="app-brand-logo" width="220" height="56" />
          </div>

          <button type="button" class="app-search-btn" aria-label="Buscar produtos">
            ${R.search}
          </button>
        </div>

        <div class="app-header-meta">
          <p class="app-greeting">Olá, <strong>${e.name}</strong></p>
          <button
            type="button"
            class="lovecoins-badge ${e.isAdmin?`lovecoins-badge--admin`:``}"
            ${e.isAdmin?`data-admin-lovecoins`:``}
            aria-label="Seu saldo: ${I(e.lovecoins)}${e.isAdmin?`. Toque para gerenciar (admin)`:``}"
          >
            <span class="lovecoins-badge-icon">${R.coin}</span>
            <span class="lovecoins-badge-value">${I(e.lovecoins)}</span>
          </button>
        </div>
      </header>

      <main class="app-main">
        ${r}
      </main>

      <nav class="bottom-nav" aria-label="Navegação principal">
        ${ke.map(e=>`
          <button
            type="button"
            class="bottom-nav-item ${t===e.id?`bottom-nav-item--active`:``}"
            data-nav="${e.id}"
            aria-current="${t===e.id?`page`:`false`}"
          >
            <span class="bottom-nav-icon">
              ${e.icon}
              ${e.id===`cart`&&n>0?`<span class="bottom-nav-badge">${n>9?`9+`:n}</span>`:``}
            </span>
            <span class="bottom-nav-label">${e.label}</span>
          </button>
        `).join(``)}
      </nav>
    </div>
  `}function je(e,{onNavigate:t,onAdminLovecoins:n}){e.querySelectorAll(`[data-nav]`).forEach(e=>{e.addEventListener(`click`,()=>t(e.dataset.nav))});let r=e.querySelector(`[data-admin-lovecoins]`);r&&n&&r.addEventListener(`click`,n)}function Me({size:e=`card`}={}){return`
    <div class="soon-stamp ${e===`detail`?`soon-stamp--detail`:``}" aria-label="Em breve">
      <span class="soon-stamp__line" aria-hidden="true"></span>
      <span class="soon-stamp__text">EM BREVE</span>
      <span class="soon-stamp__line" aria-hidden="true"></span>
    </div>
  `}function Ne(e,{variant:t=`default`}={}){let n=h(e.image),r=t===`wide`?` product-card--wide`:``;if(e.comingSoon)return`
      <button type="button" class="product-card product-card--soon" data-product-id="${e.id}">
        <div class="product-image-wrap product-image-wrap--soon">
          ${Me()}
          <img src="${n}" alt="${e.name}" class="product-image" loading="lazy" />
        </div>
        <div class="product-body product-body--soon">
          <h3 class="product-name">${e.name}</h3>
          <p class="product-soon-hint">Toque para ver detalhes</p>
        </div>
      </button>
    `;let i=e.badge?`<span class="product-badge">${e.badge}</span>`:``,a=e.discount>0;return`
    <button type="button" class="product-card${r}" data-product-id="${e.id}">
      <div class="product-image-wrap">
        ${i}
        <img src="${n}" alt="${e.name}" class="product-image" loading="lazy" />
        ${a?`<span class="product-discount">-${e.discount}%</span>`:``}
      </div>
      <div class="product-body">
        <h3 class="product-name">${e.name}</h3>
        <div class="product-prices">
          <span class="product-price">${F(e.price)}</span>
          ${a?`<span class="product-original">${F(e.originalPrice)}</span>`:``}
        </div>
      </div>
    </button>
  `}function Pe(e){return e.length?`
    <div class="product-grid">
      ${e.map(e=>Ne(e)).join(``)}
    </div>
  `:Fe()}function Fe(e=`Nenhum produto por aqui ainda.`){return`
    <div class="products-empty">
      <span class="products-empty-icon">♥</span>
      <p>${e}</p>
    </div>
  `}function Ie(e,t){e.querySelectorAll(`[data-product-id]`).forEach(e=>{e.addEventListener(`click`,()=>t(e.dataset.productId))})}var z=[0,50,100,150,200,250,`all`],Le={all:`Todos os produtos`,available:`Vitrine`,top:`Principais produtos`,"coming-soon":`Em breve`};function Re(e){if(e===`all`||e===null||e===``)return z.length-1;let t=z.indexOf(Number(e));return t>=0?t:z.length-1}function ze(e){return z[Math.max(0,Math.min(z.length-1,Number(e)||0))]}function Be(e){if(e===`all`||e===null||e===``)return`Todos os valores`;let t=Number(e);return Number.isFinite(t)?t===0?`Até LC$ 0`:`Até LC$ ${t}`:`Todos os valores`}function Ve(e){let t=j();switch(e){case`coming-soon`:return t.filter(e=>e.comingSoon);case`top`:return[...t.filter(e=>!e.comingSoon)].sort((e,t)=>t.sold-e.sold);case`available`:return t.filter(e=>!e.comingSoon);default:return t.filter(e=>!e.comingSoon)}}function He(e,t=`all`){if(t===`all`||t===null||t===``)return e;let n=Number(t);return Number.isFinite(n)?e.filter(e=>Math.floor(Number(e.price)||0)<=n):e}function Ue({mode:e=`all`,priceCap:t=`all`,filterOpen:n=!1}={}){let r=Ve(e),i=He(r,t),a=Le[e]??Le.all,o=e!==`coming-soon`,s=Re(t),c=Be(t);return`
    <div class="catalog-page">
      <button type="button" class="product-back" id="catalogBack" aria-label="Voltar">
        ← Voltar
      </button>

      <div class="catalog-head">
        <h1>${a}</h1>
        <div class="catalog-head-actions">
          ${o?`
            <div class="catalog-filter-wrap">
              <button
                type="button"
                class="catalog-filter-btn ${n?`catalog-filter-btn--open`:``}"
                id="catalogFilterToggle"
                aria-expanded="${n}"
                aria-haspopup="true"
              >
                <span class="catalog-filter-btn-icon" aria-hidden="true">${R.filter}</span>
                <span class="catalog-filter-btn-label">${c}</span>
              </button>
              <div class="catalog-filter-menu ${n?`catalog-filter-menu--open`:``}" id="catalogFilterMenu">
                <p class="catalog-filter-menu-title">Filtrar por valor</p>
                <p class="catalog-filter-menu-value">${c}</p>
                <input
                  type="range"
                  id="catalogPriceRange"
                  class="catalog-price-range"
                  min="0"
                  max="${z.length-1}"
                  step="1"
                  value="${s}"
                />
                <div class="catalog-price-steps" aria-hidden="true">
                  ${z.map(e=>`<span>${e===`all`?`Todos`:e}</span>`).join(``)}
                </div>
              </div>
            </div>
          `:``}
          <span class="section-chip">${i.length}</span>
        </div>
      </div>

      ${i.length?Pe(i):Fe(o?`Nenhum produto encontrado com esse filtro de valor.`:`Nenhum produto em breve no momento.`)}

      ${o&&i.length?`<p class="catalog-filter-hint">Exibindo ${i.length} de ${r.length} produtos</p>`:``}
    </div>
  `}function We(e,{onBack:t,onFilterChange:n,onFilterToggle:r,onProductClick:i}){e.querySelector(`#catalogBack`)?.addEventListener(`click`,t);let a=e.querySelector(`#catalogFilterToggle`),o=e.querySelector(`#catalogFilterMenu`),s=e.querySelector(`#catalogPriceRange`);a?.addEventListener(`click`,e=>{e.stopPropagation(),r?.()}),s?.addEventListener(`input`,()=>{let t=Be(ze(s.value));e.querySelector(`.catalog-filter-menu-value`)?.replaceChildren(document.createTextNode(t)),e.querySelector(`.catalog-filter-btn-label`)?.replaceChildren(document.createTextNode(t))}),s?.addEventListener(`change`,()=>{n?.(ze(s.value))}),o&&o.addEventListener(`click`,e=>e.stopPropagation());let c=t=>{e.contains(t.target)||(document.removeEventListener(`click`,c),a?.getAttribute(`aria-expanded`)===`true`&&r?.(!1))};a?.getAttribute(`aria-expanded`)===`true`&&window.requestAnimationFrame(()=>{document.addEventListener(`click`,c)}),i&&Ie(e,i)}var Ge=`lovepee-availability`;function Ke(){try{let e=localStorage.getItem(Ge);return e?JSON.parse(e):{}}catch{return{}}}function qe(e){localStorage.setItem(Ge,JSON.stringify(e))}function Je(e){let t=new Date().toISOString().slice(0,10),n=Ke(),r=!1;for(let i of e)i.comingSoon||n[i.id]||(n[i.id]=t,r=!0);return r&&qe(n),n}function Ye(e){let t=0;for(let n=0;n<e.length;n++)t=(t<<5)-t+e.charCodeAt(n),t|=0;return t}function Xe(e,t){return[...e].sort((e,n)=>Ye(`${t}:${e.id}`)-Ye(`${t}:${n.id}`))}function Ze(e,t=6){let n=new Date().toISOString().slice(0,10),r=Je(e),i=e.filter(e=>!e.comingSoon);if(!i.length)return[];let a=i.filter(e=>r[e.id]===n),o=Xe(i.filter(e=>r[e.id]!==n),n),s=[...a,...o],c=new Set,l=[];for(let e of s)if(!c.has(e.id)&&(c.add(e.id),l.push(e),l.length>=t))break;return l}var Qe=`Motivo #1: seu sorriso ilumina até os dias mais difíceis.(Motivo #2: você torna tudo mais bonito só de estar perto.(Motivo #3: amo a forma carinhosa como você me olha.(Motivo #4: seu abraço é o meu lugar favorito no mundo.(Motivo #5: você me faz querer ser melhor todos os dias.(Motivo #6: sua risada é a trilha sonora da minha vida.(Motivo #7: ninguém entende meu coração como você.(Motivo #8: você transforma o comum em algo inesquecível.(Motivo #9: amo quando você fica animada com as coisas pequenas.(Motivo #10: seu carinho cura qualquer cansaço.(Motivo #11: você é minha paz depois de um dia corrido.(Motivo #12: amo a sua delicadeza comigo e com os outros.(Motivo #13: seu jeito único me encanta desde o primeiro dia.(Motivo #14: você me faz sentir escolhido de verdade.(Motivo #15: amo dividir sonhos e planos com você.(Motivo #16: sua presença vale mais que qualquer presente.(Motivo #17: você me inspira a amar com mais intensidade.(Motivo #18: amo cada detalhe que faz você ser você.(Motivo #19: seu amor me dá coragem para tudo.(Motivo #20: você é a melhor parte da minha rotina.(Motivo #21: amo quando você confia em mim de olhos fechados.(Motivo #22: seu cuidado aparece nas coisas mais simples.(Motivo #23: você faz meu coração acelerar até hoje.(Motivo #24: amo construir nossa história um dia de cada vez.(Motivo #25: sua gentileza é um presente que não tem preço.(Motivo #26: você me faz acreditar em amor de verdade.(Motivo #27: amo quando você me chama de um jeito só seu.(Motivo #28: seu amor me faz sentir em casa em qualquer lugar.(Motivo #29: você é minha pessoa favorita em qualquer lugar.(Motivo #30: amo cada versão sua: forte, sensível e verdadeira.(Motivo #31: te amo hoje, amanhã e em todos os dias que virão.`.split(`(`);function $e(e=new Date){let t=new Date(e.getFullYear(),0,0);return Math.floor((e-t)/864e5)%Qe.length}function et(e=new Date){return Qe[$e(e)]}function tt(e){return typeof e==`object`&&!!e&&`constructor`in e&&e.constructor===Object}function nt(e={},t={}){let n=[`__proto__`,`constructor`,`prototype`];Object.keys(t).filter(e=>n.indexOf(e)<0).forEach(n=>{e[n]===void 0?e[n]=t[n]:tt(t[n])&&tt(e[n])&&Object.keys(t[n]).length>0&&nt(e[n],t[n])})}var rt={body:{},addEventListener(){},removeEventListener(){},activeElement:{blur(){},nodeName:``},querySelector(){return null},querySelectorAll(){return[]},getElementById(){return null},createEvent(){return{initEvent(){}}},createElement(){return{children:[],childNodes:[],style:{},setAttribute(){},getElementsByTagName(){return[]}}},createElementNS(){return{}},importNode(){return null},location:{hash:``,host:``,hostname:``,href:``,origin:``,pathname:``,protocol:``,search:``}};function B(){let e=typeof document<`u`?document:{};return nt(e,rt),e}var it={document:rt,navigator:{userAgent:``},location:{hash:``,host:``,hostname:``,href:``,origin:``,pathname:``,protocol:``,search:``},history:{replaceState(){},pushState(){},go(){},back(){}},CustomEvent:function(){return this},addEventListener(){},removeEventListener(){},getComputedStyle(){return{getPropertyValue(){return``}}},Image(){},Date(){},screen:{},setTimeout(){},clearTimeout(){},matchMedia(){return{}},requestAnimationFrame(e){return typeof setTimeout>`u`?(e(),null):setTimeout(e,0)},cancelAnimationFrame(e){typeof setTimeout>`u`||clearTimeout(e)}};function V(){let e=typeof window<`u`?window:{};return nt(e,it),e}function at(e=``){return e.trim().split(` `).filter(e=>!!e.trim())}function ot(e){let t=e;Object.keys(t).forEach(e=>{try{t[e]=null}catch{}try{delete t[e]}catch{}})}function st(e,t=0){return setTimeout(e,t)}function ct(){return Date.now()}function lt(e){let t=V(),n;return t.getComputedStyle&&(n=t.getComputedStyle(e,null)),!n&&e.currentStyle&&(n=e.currentStyle),n||=e.style,n}function ut(e,t=`x`){let n=V(),r,i,a,o=lt(e);return n.WebKitCSSMatrix?(i=o.transform||o.webkitTransform,i.split(`,`).length>6&&(i=i.split(`, `).map(e=>e.replace(`,`,`.`)).join(`, `)),a=new n.WebKitCSSMatrix(i===`none`?``:i)):(a=o.MozTransform||o.OTransform||o.MsTransform||o.msTransform||o.transform||o.getPropertyValue(`transform`).replace(`translate(`,`matrix(1, 0, 0, 1,`),r=a.toString().split(`,`)),t===`x`&&(i=n.WebKitCSSMatrix?a.m41:r.length===16?parseFloat(r[12]):parseFloat(r[4])),t===`y`&&(i=n.WebKitCSSMatrix?a.m42:r.length===16?parseFloat(r[13]):parseFloat(r[5])),i||0}function dt(e){return typeof e==`object`&&!!e&&e.constructor&&Object.prototype.toString.call(e).slice(8,-1)===`Object`}function ft(e){return typeof window<`u`&&window.HTMLElement!==void 0?e instanceof HTMLElement:e&&(e.nodeType===1||e.nodeType===11)}function H(...e){let t=Object(e[0]);for(let n=1;n<e.length;n+=1){let r=e[n];if(r!=null&&!ft(r)){let e=Object.keys(Object(r)).filter(e=>e!==`__proto__`&&e!==`constructor`&&e!==`prototype`);for(let n=0,i=e.length;n<i;n+=1){let i=e[n],a=Object.getOwnPropertyDescriptor(r,i);a!==void 0&&a.enumerable&&(dt(t[i])&&dt(r[i])?r[i].__swiper__?t[i]=r[i]:H(t[i],r[i]):!dt(t[i])&&dt(r[i])?(t[i]={},r[i].__swiper__?t[i]=r[i]:H(t[i],r[i])):t[i]=r[i])}}}return t}function U(e,t,n){e.style.setProperty(t,n)}function pt({swiper:e,targetPosition:t,side:n}){let r=V(),i=-e.translate,a=null,o,s=e.params.speed;e.wrapperEl.style.scrollSnapType=`none`,r.cancelAnimationFrame(e.cssModeFrameID);let c=t>i?`next`:`prev`,l=(e,t)=>c===`next`&&e>=t||c===`prev`&&e<=t,u=()=>{o=new Date().getTime(),a===null&&(a=o);let c=Math.max(Math.min((o-a)/s,1),0),d=i+(.5-Math.cos(c*Math.PI)/2)*(t-i);if(l(d,t)&&(d=t),e.wrapperEl.scrollTo({[n]:d}),l(d,t)){e.wrapperEl.style.overflow=`hidden`,e.wrapperEl.style.scrollSnapType=``,setTimeout(()=>{e.wrapperEl.style.overflow=``,e.wrapperEl.scrollTo({[n]:d})}),r.cancelAnimationFrame(e.cssModeFrameID);return}e.cssModeFrameID=r.requestAnimationFrame(u)};u()}function W(e,t=``){let n=V(),r=[...e.children];return n.HTMLSlotElement&&e instanceof HTMLSlotElement&&r.push(...e.assignedElements()),t?r.filter(e=>e.matches(t)):r}function mt(e,t){let n=[t];for(;n.length>0;){let t=n.shift();if(e===t)return!0;n.push(...t.children,...t.shadowRoot?t.shadowRoot.children:[],...t.assignedElements?t.assignedElements():[])}}function ht(e,t){let n=V(),r=t.contains(e);return!r&&n.HTMLSlotElement&&t instanceof HTMLSlotElement&&(r=[...t.assignedElements()].includes(e),r||=mt(e,t)),r}function gt(e){try{console.warn(e);return}catch{}}function _t(e,t=[]){let n=document.createElement(e);return n.classList.add(...Array.isArray(t)?t:at(t)),n}function vt(e,t){let n=[];for(;e.previousElementSibling;){let r=e.previousElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function yt(e,t){let n=[];for(;e.nextElementSibling;){let r=e.nextElementSibling;t?r.matches(t)&&n.push(r):n.push(r),e=r}return n}function G(e,t){return V().getComputedStyle(e,null).getPropertyValue(t)}function bt(e){let t=e,n;if(t){for(n=0;(t=t.previousSibling)!==null;)t.nodeType===1&&(n+=1);return n}}function xt(e,t){let n=[],r=e.parentElement;for(;r;)t?r.matches(t)&&n.push(r):n.push(r),r=r.parentElement;return n}function St(e,t,n){let r=V();return n?e[t===`width`?`offsetWidth`:`offsetHeight`]+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t===`width`?`margin-right`:`margin-top`))+parseFloat(r.getComputedStyle(e,null).getPropertyValue(t===`width`?`margin-left`:`margin-bottom`)):e.offsetWidth}var Ct;function wt(){let e=V(),t=B();return{smoothScroll:t.documentElement&&t.documentElement.style&&`scrollBehavior`in t.documentElement.style,touch:!!(`ontouchstart`in e||e.DocumentTouch&&t instanceof e.DocumentTouch)}}function Tt(){return Ct||=wt(),Ct}var Et;function Dt({userAgent:e}={}){let t=Tt(),n=V(),r=n.navigator.platform,i=e||n.navigator.userAgent,a={ios:!1,android:!1},o=n.screen.width,s=n.screen.height,c=i.match(/(Android);?[\s\/]+([\d.]+)?/),l=i.match(/(iPad)(?!\1).*OS\s([\d_]+)/),u=i.match(/(iPod)(.*OS\s([\d_]+))?/),d=!l&&i.match(/(iPhone\sOS|iOS)\s([\d_]+)/),f=r===`Win32`,p=r===`MacIntel`;return!l&&p&&t.touch&&[`1024x1366`,`1366x1024`,`834x1194`,`1194x834`,`834x1112`,`1112x834`,`768x1024`,`1024x768`,`820x1180`,`1180x820`,`810x1080`,`1080x810`].indexOf(`${o}x${s}`)>=0&&(l=i.match(/(Version)\/([\d.]+)/),l||=[0,1,`13_0_0`],p=!1),c&&!f&&(a.os=`android`,a.android=!0),(l||d||u)&&(a.os=`ios`,a.ios=!0),a}function Ot(e={}){return Et||=Dt(e),Et}var kt;function At(){let e=V(),t=Ot(),n=!1;function r(){let t=e.navigator.userAgent.toLowerCase();return t.indexOf(`safari`)>=0&&t.indexOf(`chrome`)<0&&t.indexOf(`android`)<0}if(r()){let t=String(e.navigator.userAgent);if(t.includes(`Version/`)){let[e,r]=t.split(`Version/`)[1].split(` `)[0].split(`.`).map(e=>Number(e));n=e<16||e===16&&r<2}}let i=/(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent),a=r(),o=a||i&&t.ios;return{isSafari:n||a,needPerspectiveFix:n,need3dFix:o,isWebView:i}}function jt(){return kt||=At(),kt}function Mt({swiper:e,on:t,emit:n}){let r=V(),i=null,a=null,o=()=>{!e||e.destroyed||!e.initialized||(n(`beforeResize`),n(`resize`))},s=()=>{!e||e.destroyed||!e.initialized||(i=new ResizeObserver(t=>{a=r.requestAnimationFrame(()=>{let{width:n,height:r}=e,i=n,a=r;t.forEach(({contentBoxSize:t,contentRect:n,target:r})=>{r&&r!==e.el||(i=n?n.width:(t[0]||t).inlineSize,a=n?n.height:(t[0]||t).blockSize)}),(i!==n||a!==r)&&o()})}),i.observe(e.el))},c=()=>{a&&r.cancelAnimationFrame(a),i&&i.unobserve&&e.el&&(i.unobserve(e.el),i=null)},l=()=>{!e||e.destroyed||!e.initialized||n(`orientationchange`)};t(`init`,()=>{if(e.params.resizeObserver&&r.ResizeObserver!==void 0){s();return}r.addEventListener(`resize`,o),r.addEventListener(`orientationchange`,l)}),t(`destroy`,()=>{c(),r.removeEventListener(`resize`,o),r.removeEventListener(`orientationchange`,l)})}function Nt({swiper:e,extendParams:t,on:n,emit:r}){let i=[],a=V(),o=(t,n={})=>{let o=new(a.MutationObserver||a.WebkitMutationObserver)(t=>{if(e.__preventObserver__)return;if(t.length===1){r(`observerUpdate`,t[0]);return}let n=function(){r(`observerUpdate`,t[0])};a.requestAnimationFrame?a.requestAnimationFrame(n):a.setTimeout(n,0)});o.observe(t,{attributes:n.attributes===void 0?!0:n.attributes,childList:e.isElement||(n.childList===void 0?!0:n).childList,characterData:n.characterData===void 0?!0:n.characterData}),i.push(o)};t({observer:!1,observeParents:!1,observeSlideChildren:!1}),n(`init`,()=>{if(e.params.observer){if(e.params.observeParents){let t=xt(e.hostEl);for(let e=0;e<t.length;e+=1)o(t[e])}o(e.hostEl,{childList:e.params.observeSlideChildren}),o(e.wrapperEl,{attributes:!1})}}),n(`destroy`,()=>{i.forEach(e=>{e.disconnect()}),i.splice(0,i.length)})}var Pt={on(e,t,n){let r=this;if(!r.eventsListeners||r.destroyed||typeof t!=`function`)return r;let i=n?`unshift`:`push`;return e.split(` `).forEach(e=>{r.eventsListeners[e]||(r.eventsListeners[e]=[]),r.eventsListeners[e][i](t)}),r},once(e,t,n){let r=this;if(!r.eventsListeners||r.destroyed||typeof t!=`function`)return r;function i(...n){r.off(e,i),i.__emitterProxy&&delete i.__emitterProxy,t.apply(r,n)}return i.__emitterProxy=t,r.on(e,i,n)},onAny(e,t){let n=this;if(!n.eventsListeners||n.destroyed||typeof e!=`function`)return n;let r=t?`unshift`:`push`;return n.eventsAnyListeners.indexOf(e)<0&&n.eventsAnyListeners[r](e),n},offAny(e){let t=this;if(!t.eventsListeners||t.destroyed||!t.eventsAnyListeners)return t;let n=t.eventsAnyListeners.indexOf(e);return n>=0&&t.eventsAnyListeners.splice(n,1),t},off(e,t){let n=this;return!n.eventsListeners||n.destroyed||!n.eventsListeners||e.split(` `).forEach(e=>{t===void 0?n.eventsListeners[e]=[]:n.eventsListeners[e]&&n.eventsListeners[e].forEach((r,i)=>{(r===t||r.__emitterProxy&&r.__emitterProxy===t)&&n.eventsListeners[e].splice(i,1)})}),n},emit(...e){let t=this;if(!t.eventsListeners||t.destroyed||!t.eventsListeners)return t;let n,r,i;return typeof e[0]==`string`||Array.isArray(e[0])?(n=e[0],r=e.slice(1,e.length),i=t):(n=e[0].events,r=e[0].data,i=e[0].context||t),r.unshift(i),(Array.isArray(n)?n:n.split(` `)).forEach(e=>{t.eventsAnyListeners&&t.eventsAnyListeners.length&&t.eventsAnyListeners.forEach(t=>{t.apply(i,[e,...r])}),t.eventsListeners&&t.eventsListeners[e]&&t.eventsListeners[e].forEach(e=>{e.apply(i,r)})}),t}};function Ft(){let e=this,t,n,r=e.el;t=e.params.width!==void 0&&e.params.width!==null?e.params.width:r.clientWidth,n=e.params.height!==void 0&&e.params.height!==null?e.params.height:r.clientHeight,!(t===0&&e.isHorizontal()||n===0&&e.isVertical())&&(t=t-parseInt(G(r,`padding-left`)||0,10)-parseInt(G(r,`padding-right`)||0,10),n=n-parseInt(G(r,`padding-top`)||0,10)-parseInt(G(r,`padding-bottom`)||0,10),Number.isNaN(t)&&(t=0),Number.isNaN(n)&&(n=0),Object.assign(e,{width:t,height:n,size:e.isHorizontal()?t:n}))}function It(){let e=this;function t(t,n){return parseFloat(t.getPropertyValue(e.getDirectionLabel(n))||0)}let n=e.params,{wrapperEl:r,slidesEl:i,rtlTranslate:a,wrongRTL:o}=e,s=e.virtual&&n.virtual.enabled,c=s?e.virtual.slides.length:e.slides.length,l=W(i,`.${e.params.slideClass}, swiper-slide`),u=s?e.virtual.slides.length:l.length,d=[],f=[],p=[],m=n.slidesOffsetBefore;typeof m==`function`&&(m=n.slidesOffsetBefore.call(e));let h=n.slidesOffsetAfter;typeof h==`function`&&(h=n.slidesOffsetAfter.call(e));let g=e.snapGrid.length,_=e.slidesGrid.length,v=e.size-m-h,y=n.spaceBetween,b=-m,x=0,S=0;if(v===void 0)return;typeof y==`string`&&y.indexOf(`%`)>=0?y=parseFloat(y.replace(`%`,``))/100*v:typeof y==`string`&&(y=parseFloat(y)),e.virtualSize=-y-m-h,l.forEach(e=>{a?e.style.marginLeft=``:e.style.marginRight=``,e.style.marginBottom=``,e.style.marginTop=``}),n.centeredSlides&&n.cssMode&&(U(r,`--swiper-centered-offset-before`,``),U(r,`--swiper-centered-offset-after`,``)),n.cssMode&&(U(r,`--swiper-slides-offset-before`,`${m}px`),U(r,`--swiper-slides-offset-after`,`${h}px`));let C=n.grid&&n.grid.rows>1&&e.grid;C?e.grid.initSlides(l):e.grid&&e.grid.unsetSlides();let w,T=n.slidesPerView===`auto`&&n.breakpoints&&Object.keys(n.breakpoints).filter(e=>n.breakpoints[e].slidesPerView!==void 0).length>0;for(let r=0;r<u;r+=1){w=0;let i=l[r];if(!(i&&(C&&e.grid.updateSlide(r,i,l),G(i,`display`)===`none`))){if(s&&n.slidesPerView===`auto`)n.virtual.slidesPerViewAutoSlideSize&&(w=n.virtual.slidesPerViewAutoSlideSize),w&&i&&(n.roundLengths&&(w=Math.floor(w)),i.style[e.getDirectionLabel(`width`)]=`${w}px`);else if(n.slidesPerView===`auto`){T&&(i.style[e.getDirectionLabel(`width`)]=``);let r=getComputedStyle(i),a=i.style.transform,o=i.style.webkitTransform;if(a&&(i.style.transform=`none`),o&&(i.style.webkitTransform=`none`),n.roundLengths)w=e.isHorizontal()?St(i,`width`,!0):St(i,`height`,!0);else{let e=t(r,`width`),n=t(r,`padding-left`),a=t(r,`padding-right`),o=t(r,`margin-left`),s=t(r,`margin-right`),c=r.getPropertyValue(`box-sizing`);if(c&&c===`border-box`)w=e+o+s;else{let{clientWidth:t,offsetWidth:r}=i;w=e+n+a+o+s+(r-t)}}a&&(i.style.transform=a),o&&(i.style.webkitTransform=o),n.roundLengths&&(w=Math.floor(w))}else w=(v-(n.slidesPerView-1)*y)/n.slidesPerView,n.roundLengths&&(w=Math.floor(w)),i&&(i.style[e.getDirectionLabel(`width`)]=`${w}px`);i&&(i.swiperSlideSize=w),p.push(w),n.centeredSlides?(b=b+w/2+x/2+y,x===0&&r!==0&&(b=b-v/2-y),r===0&&(b=b-v/2-y),Math.abs(b)<1/1e3&&(b=0),n.roundLengths&&(b=Math.floor(b)),S%n.slidesPerGroup===0&&d.push(b),f.push(b)):(n.roundLengths&&(b=Math.floor(b)),(S-Math.min(e.params.slidesPerGroupSkip,S))%e.params.slidesPerGroup===0&&d.push(b),f.push(b),b=b+w+y),e.virtualSize+=w+y,x=w,S+=1}}if(e.virtualSize=Math.max(e.virtualSize,v)+h,a&&o&&(n.effect===`slide`||n.effect===`coverflow`)&&(r.style.width=`${e.virtualSize+y}px`),n.setWrapperSize&&(r.style[e.getDirectionLabel(`width`)]=`${e.virtualSize+y}px`),C&&e.grid.updateWrapperSize(w,d),!n.centeredSlides){let t=n.slidesPerView!==`auto`&&n.slidesPerView%1!=0,r=n.snapToSlideEdge&&!n.loop&&(n.slidesPerView===`auto`||t),i=d.length;if(r){let e;if(n.slidesPerView===`auto`){e=1;let t=0;for(let n=p.length-1;n>=0&&(t+=p[n]+(n<p.length-1?y:0),t<=v);--n)e=p.length-n}else e=Math.floor(n.slidesPerView);i=Math.max(u-e,0)}let a=[];for(let t=0;t<d.length;t+=1){let o=d[t];n.roundLengths&&(o=Math.floor(o)),r?t<=i&&a.push(o):d[t]<=e.virtualSize-v&&a.push(o)}d=a,Math.floor(e.virtualSize-v)-Math.floor(d[d.length-1])>1&&(r||d.push(e.virtualSize-v))}if(s&&n.loop){let t=p[0]+y;if(n.slidesPerGroup>1){let r=Math.ceil((e.virtual.slidesBefore+e.virtual.slidesAfter)/n.slidesPerGroup),i=t*n.slidesPerGroup;for(let e=0;e<r;e+=1)d.push(d[d.length-1]+i)}for(let r=0;r<e.virtual.slidesBefore+e.virtual.slidesAfter;r+=1)n.slidesPerGroup===1&&d.push(d[d.length-1]+t),f.push(f[f.length-1]+t),e.virtualSize+=t}if(d.length===0&&(d=[0]),y!==0){let t=e.isHorizontal()&&a?`marginLeft`:e.getDirectionLabel(`marginRight`);l.filter((e,t)=>!n.cssMode||n.loop?!0:t!==l.length-1).forEach(e=>{e.style[t]=`${y}px`})}if(n.centeredSlides&&n.centeredSlidesBounds){let e=0;p.forEach(t=>{e+=t+(y||0)}),e-=y;let t=e>v?e-v:0;d=d.map(e=>e<=0?-m:e>t?t+h:e)}if(n.centerInsufficientSlides){let e=0;if(p.forEach(t=>{e+=t+(y||0)}),e-=y,e<v){let t=(v-e)/2;d.forEach((e,n)=>{d[n]=e-t}),f.forEach((e,n)=>{f[n]=e+t})}}if(Object.assign(e,{slides:l,snapGrid:d,slidesGrid:f,slidesSizesGrid:p}),n.centeredSlides&&n.cssMode&&!n.centeredSlidesBounds){U(r,`--swiper-centered-offset-before`,`${-d[0]}px`),U(r,`--swiper-centered-offset-after`,`${e.size/2-p[p.length-1]/2}px`);let t=-e.snapGrid[0],n=-e.slidesGrid[0];e.snapGrid=e.snapGrid.map(e=>e+t),e.slidesGrid=e.slidesGrid.map(e=>e+n)}if(u!==c&&e.emit(`slidesLengthChange`),d.length!==g&&(e.params.watchOverflow&&e.checkOverflow(),e.emit(`snapGridLengthChange`)),f.length!==_&&e.emit(`slidesGridLengthChange`),n.watchSlidesProgress&&e.updateSlidesOffset(),e.emit(`slidesUpdated`),!s&&!n.cssMode&&(n.effect===`slide`||n.effect===`fade`)){let t=`${n.containerModifierClass}backface-hidden`,r=e.el.classList.contains(t);u<=n.maxBackfaceHiddenSlides?r||e.el.classList.add(t):r&&e.el.classList.remove(t)}}function Lt(e){let t=this,n=[],r=t.virtual&&t.params.virtual.enabled,i=0,a;typeof e==`number`?t.setTransition(e):e===!0&&t.setTransition(t.params.speed);let o=e=>r?t.slides[t.getSlideIndexByData(e)]:t.slides[e];if(t.params.slidesPerView!==`auto`&&t.params.slidesPerView>1)if(t.params.centeredSlides)(t.visibleSlides||[]).forEach(e=>{n.push(e)});else for(a=0;a<Math.ceil(t.params.slidesPerView);a+=1){let e=t.activeIndex+a;if(e>t.slides.length&&!r)break;n.push(o(e))}else n.push(o(t.activeIndex));for(a=0;a<n.length;a+=1)if(n[a]!==void 0){let e=n[a].offsetHeight;i=e>i?e:i}(i||i===0)&&(t.wrapperEl.style.height=`${i}px`)}function Rt(){let e=this,t=e.slides,n=e.isElement?e.isHorizontal()?e.wrapperEl.offsetLeft:e.wrapperEl.offsetTop:0;for(let r=0;r<t.length;r+=1)t[r].swiperSlideOffset=(e.isHorizontal()?t[r].offsetLeft:t[r].offsetTop)-n-e.cssOverflowAdjustment()}var zt=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function Bt(e=this&&this.translate||0){let t=this,n=t.params,{slides:r,rtlTranslate:i,snapGrid:a}=t;if(r.length===0)return;r[0].swiperSlideOffset===void 0&&t.updateSlidesOffset();let o=-e;i&&(o=e),t.visibleSlidesIndexes=[],t.visibleSlides=[];let s=n.spaceBetween;typeof s==`string`&&s.indexOf(`%`)>=0?s=parseFloat(s.replace(`%`,``))/100*t.size:typeof s==`string`&&(s=parseFloat(s));for(let e=0;e<r.length;e+=1){let c=r[e],l=c.swiperSlideOffset;n.cssMode&&n.centeredSlides&&(l-=r[0].swiperSlideOffset);let u=(o+(n.centeredSlides?t.minTranslate():0)-l)/(c.swiperSlideSize+s),d=(o-a[0]+(n.centeredSlides?t.minTranslate():0)-l)/(c.swiperSlideSize+s),f=-(o-l),p=f+t.slidesSizesGrid[e],m=f>=0&&f<=t.size-t.slidesSizesGrid[e],h=f>=0&&f<t.size-1||p>1&&p<=t.size||f<=0&&p>=t.size;h&&(t.visibleSlides.push(c),t.visibleSlidesIndexes.push(e)),zt(c,h,n.slideVisibleClass),zt(c,m,n.slideFullyVisibleClass),c.progress=i?-u:u,c.originalProgress=i?-d:d}}function Vt(e){let t=this;if(e===void 0){let n=t.rtlTranslate?-1:1;e=t&&t.translate&&t.translate*n||0}let n=t.params,r=t.maxTranslate()-t.minTranslate(),{progress:i,isBeginning:a,isEnd:o,progressLoop:s}=t,c=a,l=o;if(r===0)i=0,a=!0,o=!0;else{i=(e-t.minTranslate())/r;let n=Math.abs(e-t.minTranslate())<1,s=Math.abs(e-t.maxTranslate())<1;a=n||i<=0,o=s||i>=1,n&&(i=0),s&&(i=1)}if(n.loop){let n=t.getSlideIndexByData(0),r=t.getSlideIndexByData(t.slides.length-1),i=t.slidesGrid[n],a=t.slidesGrid[r],o=t.slidesGrid[t.slidesGrid.length-1],c=Math.abs(e);s=c>=i?(c-i)/o:(c+o-a)/o,s>1&&--s}Object.assign(t,{progress:i,progressLoop:s,isBeginning:a,isEnd:o}),(n.watchSlidesProgress||n.centeredSlides&&n.autoHeight)&&t.updateSlidesProgress(e),a&&!c&&t.emit(`reachBeginning toEdge`),o&&!l&&t.emit(`reachEnd toEdge`),(c&&!a||l&&!o)&&t.emit(`fromEdge`),t.emit(`progress`,i)}var Ht=(e,t,n)=>{t&&!e.classList.contains(n)?e.classList.add(n):!t&&e.classList.contains(n)&&e.classList.remove(n)};function Ut(){let e=this,{slides:t,params:n,slidesEl:r,activeIndex:i}=e,a=e.virtual&&n.virtual.enabled,o=e.grid&&n.grid&&n.grid.rows>1,s=e=>W(r,`.${n.slideClass}${e}, swiper-slide${e}`)[0],c,l,u;if(a)if(n.loop){let t=i-e.virtual.slidesBefore;t<0&&(t=e.virtual.slides.length+t),t>=e.virtual.slides.length&&(t-=e.virtual.slides.length),c=s(`[data-swiper-slide-index="${t}"]`)}else c=s(`[data-swiper-slide-index="${i}"]`);else o?(c=t.find(e=>e.column===i),u=t.find(e=>e.column===i+1),l=t.find(e=>e.column===i-1)):c=t[i];c&&(o||(u=yt(c,`.${n.slideClass}, swiper-slide`)[0],n.loop&&!u&&(u=t[0]),l=vt(c,`.${n.slideClass}, swiper-slide`)[0],n.loop)),t.forEach(e=>{Ht(e,e===c,n.slideActiveClass),Ht(e,e===u,n.slideNextClass),Ht(e,e===l,n.slidePrevClass)}),e.emitSlidesClasses()}var Wt=(e,t)=>{if(!e||e.destroyed||!e.params)return;let n=t.closest(e.isElement?`swiper-slide`:`.${e.params.slideClass}`);if(n){let t=n.querySelector(`.${e.params.lazyPreloaderClass}`);!t&&e.isElement&&(n.shadowRoot?t=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`):requestAnimationFrame(()=>{n.shadowRoot&&(t=n.shadowRoot.querySelector(`.${e.params.lazyPreloaderClass}`),t&&!t.lazyPreloaderManaged&&t.remove())})),t&&!t.lazyPreloaderManaged&&t.remove()}},Gt=(e,t)=>{if(!e.slides[t])return;let n=e.slides[t].querySelector(`[loading="lazy"]`);n&&n.removeAttribute(`loading`)},Kt=e=>{if(!e||e.destroyed||!e.params)return;let t=e.params.lazyPreloadPrevNext,n=e.slides.length;if(!n||!t||t<0)return;t=Math.min(t,n);let r=e.params.slidesPerView===`auto`?e.slidesPerViewDynamic():Math.ceil(e.params.slidesPerView),i=e.activeIndex;if(e.params.grid&&e.params.grid.rows>1){let n=i,a=[n-t];a.push(...Array.from({length:t}).map((e,t)=>n+r+t)),e.slides.forEach((t,n)=>{a.includes(t.column)&&Gt(e,n)});return}let a=i+r-1;if(e.params.rewind||e.params.loop)for(let r=i-t;r<=a+t;r+=1){let t=(r%n+n)%n;(t<i||t>a)&&Gt(e,t)}else for(let r=Math.max(i-t,0);r<=Math.min(a+t,n-1);r+=1)r!==i&&(r>a||r<i)&&Gt(e,r)};function qt(e){let{slidesGrid:t,params:n}=e,r=e.rtlTranslate?e.translate:-e.translate,i;for(let e=0;e<t.length;e+=1)t[e+1]===void 0?r>=t[e]&&(i=e):r>=t[e]&&r<t[e+1]-(t[e+1]-t[e])/2?i=e:r>=t[e]&&r<t[e+1]&&(i=e+1);return n.normalizeSlideIndex&&(i<0||i===void 0)&&(i=0),i}function Jt(e){let t=this,n=t.rtlTranslate?t.translate:-t.translate,{snapGrid:r,params:i,activeIndex:a,realIndex:o,snapIndex:s}=t,c=e,l,u=e=>{let n=e-t.virtual.slidesBefore;return n<0&&(n=t.virtual.slides.length+n),n>=t.virtual.slides.length&&(n-=t.virtual.slides.length),n};if(c===void 0&&(c=qt(t)),r.indexOf(n)>=0)l=r.indexOf(n);else{let e=Math.min(i.slidesPerGroupSkip,c);l=e+Math.floor((c-e)/i.slidesPerGroup)}if(l>=r.length&&(l=r.length-1),c===a&&!t.params.loop){l!==s&&(t.snapIndex=l,t.emit(`snapIndexChange`));return}if(c===a&&t.params.loop&&t.virtual&&t.params.virtual.enabled){t.realIndex=u(c);return}let d=t.grid&&i.grid&&i.grid.rows>1,f;if(t.virtual&&i.virtual.enabled)f=i.loop?u(c):c;else if(d){let e=t.slides.find(e=>e.column===c),n=parseInt(e.getAttribute(`data-swiper-slide-index`),10);Number.isNaN(n)&&(n=Math.max(t.slides.indexOf(e),0)),f=Math.floor(n/i.grid.rows)}else if(t.slides[c]){let e=t.slides[c].getAttribute(`data-swiper-slide-index`);f=e?parseInt(e,10):c}else f=c;Object.assign(t,{previousSnapIndex:s,snapIndex:l,previousRealIndex:o,realIndex:f,previousIndex:a,activeIndex:c}),t.initialized&&Kt(t),t.emit(`activeIndexChange`),t.emit(`snapIndexChange`),(t.initialized||t.params.runCallbacksOnInit)&&(o!==f&&t.emit(`realIndexChange`),t.emit(`slideChange`))}function Yt(e,t){let n=this,r=n.params,i=e.closest(`.${r.slideClass}, swiper-slide`);!i&&n.isElement&&t&&t.length>1&&t.includes(e)&&[...t.slice(t.indexOf(e)+1,t.length)].forEach(e=>{!i&&e.matches&&e.matches(`.${r.slideClass}, swiper-slide`)&&(i=e)});let a=!1,o;if(i){for(let e=0;e<n.slides.length;e+=1)if(n.slides[e]===i){a=!0,o=e;break}}if(i&&a)n.clickedSlide=i,n.virtual&&n.params.virtual.enabled?n.clickedIndex=parseInt(i.getAttribute(`data-swiper-slide-index`),10):n.clickedIndex=o;else{n.clickedSlide=void 0,n.clickedIndex=void 0;return}r.slideToClickedSlide&&n.clickedIndex!==void 0&&n.clickedIndex!==n.activeIndex&&n.slideToClickedSlide()}var Xt={updateSize:Ft,updateSlides:It,updateAutoHeight:Lt,updateSlidesOffset:Rt,updateSlidesProgress:Bt,updateProgress:Vt,updateSlidesClasses:Ut,updateActiveIndex:Jt,updateClickedSlide:Yt};function Zt(e=this.isHorizontal()?`x`:`y`){let t=this,{params:n,rtlTranslate:r,translate:i,wrapperEl:a}=t;if(n.virtualTranslate)return r?-i:i;if(n.cssMode)return i;let o=ut(a,e);return o+=t.cssOverflowAdjustment(),r&&(o=-o),o||0}function Qt(e,t){let n=this,{rtlTranslate:r,params:i,wrapperEl:a,progress:o}=n,s=0,c=0;n.isHorizontal()?s=r?-e:e:c=e,i.roundLengths&&(s=Math.floor(s),c=Math.floor(c)),n.previousTranslate=n.translate,n.translate=n.isHorizontal()?s:c,i.cssMode?a[n.isHorizontal()?`scrollLeft`:`scrollTop`]=n.isHorizontal()?-s:-c:i.virtualTranslate||(n.isHorizontal()?s-=n.cssOverflowAdjustment():c-=n.cssOverflowAdjustment(),a.style.transform=`translate3d(${s}px, ${c}px, 0px)`);let l,u=n.maxTranslate()-n.minTranslate();l=u===0?0:(e-n.minTranslate())/u,l!==o&&n.updateProgress(e),n.emit(`setTranslate`,n.translate,t)}function $t(){return-this.snapGrid[0]}function en(){return-this.snapGrid[this.snapGrid.length-1]}function tn(e=0,t=this.params.speed,n=!0,r=!0,i){let a=this,{params:o,wrapperEl:s}=a;if(a.animating&&o.preventInteractionOnTransition)return!1;let c=a.minTranslate(),l=a.maxTranslate(),u;if(u=r&&e>c?c:r&&e<l?l:e,a.updateProgress(u),o.cssMode){let e=a.isHorizontal();if(t===0)s[e?`scrollLeft`:`scrollTop`]=-u;else{if(!a.support.smoothScroll)return pt({swiper:a,targetPosition:-u,side:e?`left`:`top`}),!0;s.scrollTo({[e?`left`:`top`]:-u,behavior:`smooth`})}return!0}return t===0?(a.setTransition(0),a.setTranslate(u),n&&(a.emit(`beforeTransitionStart`,t,i),a.emit(`transitionEnd`))):(a.setTransition(t),a.setTranslate(u),n&&(a.emit(`beforeTransitionStart`,t,i),a.emit(`transitionStart`)),a.animating||(a.animating=!0,a.onTranslateToWrapperTransitionEnd||=function(e){!a||a.destroyed||e.target===this&&(a.wrapperEl.removeEventListener(`transitionend`,a.onTranslateToWrapperTransitionEnd),a.onTranslateToWrapperTransitionEnd=null,delete a.onTranslateToWrapperTransitionEnd,a.animating=!1,n&&a.emit(`transitionEnd`))},a.wrapperEl.addEventListener(`transitionend`,a.onTranslateToWrapperTransitionEnd))),!0}var nn={getTranslate:Zt,setTranslate:Qt,minTranslate:$t,maxTranslate:en,translateTo:tn};function rn(e,t){let n=this;n.params.cssMode||(n.wrapperEl.style.transitionDuration=`${e}ms`,n.wrapperEl.style.transitionDelay=e===0?`0ms`:``),n.emit(`setTransition`,e,t)}function an({swiper:e,runCallbacks:t,direction:n,step:r}){let{activeIndex:i,previousIndex:a}=e,o=n;o||=i>a?`next`:i<a?`prev`:`reset`,e.emit(`transition${r}`),t&&o===`reset`?e.emit(`slideResetTransition${r}`):t&&i!==a&&(e.emit(`slideChangeTransition${r}`),o===`next`?e.emit(`slideNextTransition${r}`):e.emit(`slidePrevTransition${r}`))}function on(e=!0,t){let n=this,{params:r}=n;r.cssMode||(r.autoHeight&&n.updateAutoHeight(),an({swiper:n,runCallbacks:e,direction:t,step:`Start`}))}function sn(e=!0,t){let n=this,{params:r}=n;n.animating=!1,!r.cssMode&&(n.setTransition(0),an({swiper:n,runCallbacks:e,direction:t,step:`End`}))}var cn={setTransition:rn,transitionStart:on,transitionEnd:sn};function ln(e=0,t,n=!0,r,i){typeof e==`string`&&(e=parseInt(e,10));let a=this,o=e;o<0&&(o=0);let{params:s,snapGrid:c,slidesGrid:l,previousIndex:u,activeIndex:d,rtlTranslate:f,wrapperEl:p,enabled:m}=a;if(!m&&!r&&!i||a.destroyed||a.animating&&s.preventInteractionOnTransition)return!1;t===void 0&&(t=a.params.speed);let h=Math.min(a.params.slidesPerGroupSkip,o),g=h+Math.floor((o-h)/a.params.slidesPerGroup);g>=c.length&&(g=c.length-1);let _=-c[g];if(s.normalizeSlideIndex)for(let e=0;e<l.length;e+=1){let t=-Math.floor(_*100),n=Math.floor(l[e]*100),r=Math.floor(l[e+1]*100);l[e+1]===void 0?t>=n&&(o=e):t>=n&&t<r-(r-n)/2?o=e:t>=n&&t<r&&(o=e+1)}if(a.initialized&&o!==d&&(!a.allowSlideNext&&(f?_>a.translate&&_>a.minTranslate():_<a.translate&&_<a.minTranslate())||!a.allowSlidePrev&&_>a.translate&&_>a.maxTranslate()&&(d||0)!==o))return!1;o!==(u||0)&&n&&a.emit(`beforeSlideChangeStart`),a.updateProgress(_);let v;v=o>d?`next`:o<d?`prev`:`reset`;let y=a.virtual&&a.params.virtual.enabled;if(!(y&&i)&&(f&&-_===a.translate||!f&&_===a.translate))return a.updateActiveIndex(o),s.autoHeight&&a.updateAutoHeight(),a.updateSlidesClasses(),s.effect!==`slide`&&a.setTranslate(_),v!==`reset`&&(a.transitionStart(n,v),a.transitionEnd(n,v)),!1;if(s.cssMode){let e=a.isHorizontal(),n=f?_:-_;if(t===0)y&&(a.wrapperEl.style.scrollSnapType=`none`,a._immediateVirtual=!0),y&&!a._cssModeVirtualInitialSet&&a.params.initialSlide>0?(a._cssModeVirtualInitialSet=!0,requestAnimationFrame(()=>{p[e?`scrollLeft`:`scrollTop`]=n})):p[e?`scrollLeft`:`scrollTop`]=n,y&&requestAnimationFrame(()=>{a.wrapperEl.style.scrollSnapType=``,a._immediateVirtual=!1});else{if(!a.support.smoothScroll)return pt({swiper:a,targetPosition:n,side:e?`left`:`top`}),!0;p.scrollTo({[e?`left`:`top`]:n,behavior:`smooth`})}return!0}let b=jt().isSafari;return y&&!i&&b&&a.isElement&&a.virtual.update(!1,!1,o),a.setTransition(t),a.setTranslate(_),a.updateActiveIndex(o),a.updateSlidesClasses(),a.emit(`beforeTransitionStart`,t,r),a.transitionStart(n,v),t===0?a.transitionEnd(n,v):a.animating||(a.animating=!0,a.onSlideToWrapperTransitionEnd||=function(e){!a||a.destroyed||e.target===this&&(a.wrapperEl.removeEventListener(`transitionend`,a.onSlideToWrapperTransitionEnd),a.onSlideToWrapperTransitionEnd=null,delete a.onSlideToWrapperTransitionEnd,a.transitionEnd(n,v))},a.wrapperEl.addEventListener(`transitionend`,a.onSlideToWrapperTransitionEnd)),!0}function un(e=0,t,n=!0,r){typeof e==`string`&&(e=parseInt(e,10));let i=this;if(i.destroyed)return;t===void 0&&(t=i.params.speed);let a=i.grid&&i.params.grid&&i.params.grid.rows>1,o=e;if(i.params.loop)if(i.virtual&&i.params.virtual.enabled)o+=i.virtual.slidesBefore;else{let e;if(a){let t=o*i.params.grid.rows;e=i.slides.find(e=>e.getAttribute(`data-swiper-slide-index`)*1===t).column}else e=i.getSlideIndexByData(o);let t=a?Math.ceil(i.slides.length/i.params.grid.rows):i.slides.length,{centeredSlides:n,slidesOffsetBefore:s,slidesOffsetAfter:c}=i.params,l=n||!!s||!!c,u=i.params.slidesPerView;u===`auto`?u=i.slidesPerViewDynamic():(u=Math.ceil(parseFloat(i.params.slidesPerView,10)),l&&u%2==0&&(u+=1));let d=t-e<u;if(l&&(d||=e<Math.ceil(u/2)),r&&l&&i.params.slidesPerView!==`auto`&&!a&&(d=!1),d){let n=l?e<i.activeIndex?`prev`:`next`:e-i.activeIndex-1<i.params.slidesPerView?`next`:`prev`;i.loopFix({direction:n,slideTo:!0,activeSlideIndex:n===`next`?e+1:e-t+1,slideRealIndex:n===`next`?i.realIndex:void 0})}if(a){let e=o*i.params.grid.rows;o=i.slides.find(t=>t.getAttribute(`data-swiper-slide-index`)*1===e).column}else o=i.getSlideIndexByData(o)}return requestAnimationFrame(()=>{i.slideTo(o,t,n,r)}),i}function dn(e,t=!0,n){let r=this,{enabled:i,params:a,animating:o}=r;if(!i||r.destroyed)return r;e===void 0&&(e=r.params.speed);let s=a.slidesPerGroup;a.slidesPerView===`auto`&&a.slidesPerGroup===1&&a.slidesPerGroupAuto&&(s=Math.max(r.slidesPerViewDynamic(`current`,!0),1));let c=r.activeIndex<a.slidesPerGroupSkip?1:s,l=r.virtual&&a.virtual.enabled;if(a.loop){if(o&&!l&&a.loopPreventsSliding)return!1;if(r.loopFix({direction:`next`}),r._clientLeft=r.wrapperEl.clientLeft,r.activeIndex===r.slides.length-1&&a.cssMode)return requestAnimationFrame(()=>{r.slideTo(r.activeIndex+c,e,t,n)}),!0}return a.rewind&&r.isEnd?r.slideTo(0,e,t,n):r.slideTo(r.activeIndex+c,e,t,n)}function fn(e,t=!0,n){let r=this,{params:i,snapGrid:a,slidesGrid:o,rtlTranslate:s,enabled:c,animating:l}=r;if(!c||r.destroyed)return r;e===void 0&&(e=r.params.speed);let u=r.virtual&&i.virtual.enabled;if(i.loop){if(l&&!u&&i.loopPreventsSliding)return!1;r.loopFix({direction:`prev`}),r._clientLeft=r.wrapperEl.clientLeft}let d=s?r.translate:-r.translate;function f(e){return e<0?-Math.floor(Math.abs(e)):Math.floor(e)}let p=f(d),m=a.map(e=>f(e)),h=i.freeMode&&i.freeMode.enabled,g=a[m.indexOf(p)-1];if(g===void 0&&(i.cssMode||h)){let e;a.forEach((t,n)=>{p>=t&&(e=n)}),e!==void 0&&(g=h?a[e]:a[e>0?e-1:e])}let _=0;if(g!==void 0&&(_=o.indexOf(g),_<0&&(_=r.activeIndex-1),i.slidesPerView===`auto`&&i.slidesPerGroup===1&&i.slidesPerGroupAuto&&(_=_-r.slidesPerViewDynamic(`previous`,!0)+1,_=Math.max(_,0))),i.rewind&&r.isBeginning){let i=r.params.virtual&&r.params.virtual.enabled&&r.virtual?r.virtual.slides.length-1:r.slides.length-1;return r.slideTo(i,e,t,n)}else if(i.loop&&r.activeIndex===0&&i.cssMode)return requestAnimationFrame(()=>{r.slideTo(_,e,t,n)}),!0;return r.slideTo(_,e,t,n)}function pn(e,t=!0,n){let r=this;if(!r.destroyed)return e===void 0&&(e=r.params.speed),r.slideTo(r.activeIndex,e,t,n)}function mn(e,t=!0,n,r=.5){let i=this;if(i.destroyed)return;e===void 0&&(e=i.params.speed);let a=i.activeIndex,o=Math.min(i.params.slidesPerGroupSkip,a),s=o+Math.floor((a-o)/i.params.slidesPerGroup),c=i.rtlTranslate?i.translate:-i.translate;if(c>=i.snapGrid[s]){let e=i.snapGrid[s],t=i.snapGrid[s+1];c-e>(t-e)*r&&(a+=i.params.slidesPerGroup)}else{let e=i.snapGrid[s-1],t=i.snapGrid[s];c-e<=(t-e)*r&&(a-=i.params.slidesPerGroup)}return a=Math.max(a,0),a=Math.min(a,i.slidesGrid.length-1),i.slideTo(a,e,t,n)}function hn(){let e=this;if(e.destroyed)return;let{params:t,slidesEl:n}=e,r=t.slidesPerView===`auto`?e.slidesPerViewDynamic():t.slidesPerView,i=e.getSlideIndexWhenGrid(e.clickedIndex),a,o=e.isElement?`swiper-slide`:`.${t.slideClass}`,s=e.grid&&e.params.grid&&e.params.grid.rows>1;if(t.loop){if(e.animating)return;a=parseInt(e.clickedSlide.getAttribute(`data-swiper-slide-index`),10),t.centeredSlides?e.slideToLoop(a):i>(s?(e.slides.length-r)/2-(e.params.grid.rows-1):e.slides.length-r)?(e.loopFix(),i=e.getSlideIndex(W(n,`${o}[data-swiper-slide-index="${a}"]`)[0]),st(()=>{e.slideTo(i)})):e.slideTo(i)}else e.slideTo(i)}var gn={slideTo:ln,slideToLoop:un,slideNext:dn,slidePrev:fn,slideReset:pn,slideToClosest:mn,slideToClickedSlide:hn};function _n(e,t){let n=this,{params:r,slidesEl:i}=n;if(!r.loop||n.virtual&&n.params.virtual.enabled)return;let a=()=>{W(i,`.${r.slideClass}, swiper-slide`).forEach((e,t)=>{e.setAttribute(`data-swiper-slide-index`,t)})},o=()=>{let e=W(i,`.${r.slideBlankClass}`);e.forEach(e=>{e.remove()}),e.length>0&&(n.recalcSlides(),n.updateSlides())},s=n.grid&&r.grid&&r.grid.rows>1;r.loopAddBlankSlides&&(r.slidesPerGroup>1||s)&&o();let c=r.slidesPerGroup*(s?r.grid.rows:1),l=n.slides.length%c!==0,u=s&&n.slides.length%r.grid.rows!==0,d=e=>{for(let t=0;t<e;t+=1){let e=n.isElement?_t(`swiper-slide`,[r.slideBlankClass]):_t(`div`,[r.slideClass,r.slideBlankClass]);n.slidesEl.append(e)}};l?(r.loopAddBlankSlides?(d(c-n.slides.length%c),n.recalcSlides(),n.updateSlides()):gt(`Swiper Loop Warning: The number of slides is not even to slidesPerGroup, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)`),a()):(u&&(r.loopAddBlankSlides?(d(r.grid.rows-n.slides.length%r.grid.rows),n.recalcSlides(),n.updateSlides()):gt(`Swiper Loop Warning: The number of slides is not even to grid.rows, loop mode may not function properly. You need to add more slides (or make duplicates, or empty slides)`)),a());let f=r.centeredSlides||!!r.slidesOffsetBefore||!!r.slidesOffsetAfter;n.loopFix({slideRealIndex:e,direction:f?void 0:`next`,initial:t})}function vn({slideRealIndex:e,slideTo:t=!0,direction:n,setTranslate:r,activeSlideIndex:i,initial:a,byController:o,byMousewheel:s}={}){let c=this;if(!c.params.loop)return;c.emit(`beforeLoopFix`);let{slides:l,allowSlidePrev:u,allowSlideNext:d,slidesEl:f,params:p}=c,{centeredSlides:m,slidesOffsetBefore:h,slidesOffsetAfter:g,initialSlide:_}=p,v=m||!!h||!!g;if(c.allowSlidePrev=!0,c.allowSlideNext=!0,c.virtual&&p.virtual.enabled){t&&(!v&&c.snapIndex===0?c.slideTo(c.virtual.slides.length,0,!1,!0):v&&c.snapIndex<p.slidesPerView?c.slideTo(c.virtual.slides.length+c.snapIndex,0,!1,!0):c.snapIndex===c.snapGrid.length-1&&c.slideTo(c.virtual.slidesBefore,0,!1,!0)),c.allowSlidePrev=u,c.allowSlideNext=d,c.emit(`loopFix`);return}let y=p.slidesPerView;y===`auto`?y=c.slidesPerViewDynamic():(y=Math.ceil(parseFloat(p.slidesPerView,10)),v&&y%2==0&&(y+=1));let b=p.slidesPerGroupAuto?y:p.slidesPerGroup,x=v?Math.max(b,Math.ceil(y/2)):b;x%b!==0&&(x+=b-x%b),x+=p.loopAdditionalSlides,c.loopedSlides=x;let S=c.grid&&p.grid&&p.grid.rows>1;l.length<y+x||c.params.effect===`cards`&&l.length<y+x*2?gt(`Swiper Loop Warning: The number of slides is not enough for loop mode, it will be disabled or not function properly. You need to add more slides (or make duplicates) or lower the values of slidesPerView and slidesPerGroup parameters`):S&&p.grid.fill===`row`&&gt("Swiper Loop Warning: Loop mode is not compatible with grid.fill = `row`");let C=[],w=[],T=S?Math.ceil(l.length/p.grid.rows):l.length,E=a&&T-_<y&&!v,D=E?_:c.activeIndex;i===void 0?i=c.getSlideIndex(l.find(e=>e.classList.contains(p.slideActiveClass))):D=i;let O=n===`next`||!n,k=n===`prev`||!n,A=0,j=0,M=(S?l[i].column:i)+(v&&r===void 0?-y/2+.5:0);if(M<x){A=Math.max(x-M,b);for(let e=0;e<x-M;e+=1){let t=e-Math.floor(e/T)*T;if(S){let e=T-t-1;for(let t=l.length-1;t>=0;--t)l[t].column===e&&C.push(t)}else C.push(T-t-1)}}else if(M+y>T-x){j=Math.max(M-(T-x*2),b),E&&(j=Math.max(j,y-T+_+1));for(let e=0;e<j;e+=1){let t=e-Math.floor(e/T)*T;S?l.forEach((e,n)=>{e.column===t&&w.push(n)}):w.push(t)}}if(c.__preventObserver__=!0,requestAnimationFrame(()=>{c.__preventObserver__=!1}),c.params.effect===`cards`&&l.length<y+x*2&&(w.includes(i)&&w.splice(w.indexOf(i),1),C.includes(i)&&C.splice(C.indexOf(i),1)),k&&C.forEach(e=>{l[e].swiperLoopMoveDOM=!0,f.prepend(l[e]),l[e].swiperLoopMoveDOM=!1}),O&&w.forEach(e=>{l[e].swiperLoopMoveDOM=!0,f.append(l[e]),l[e].swiperLoopMoveDOM=!1}),c.recalcSlides(),p.slidesPerView===`auto`?c.updateSlides():S&&(C.length>0&&k||w.length>0&&O)&&c.slides.forEach((e,t)=>{c.grid.updateSlide(t,e,c.slides)}),p.watchSlidesProgress&&c.updateSlidesOffset(),t){if(C.length>0&&k){if(e===void 0){let e=c.slidesGrid[D],t=c.slidesGrid[D+A]-e;s?c.setTranslate(c.translate-t):(c.slideTo(D+Math.ceil(A),0,!1,!0),r&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-t,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-t))}else if(r){let e=S?C.length/p.grid.rows:C.length;c.slideTo(c.activeIndex+e,0,!1,!0),c.touchEventsData.currentTranslate=c.translate}}else if(w.length>0&&O)if(e===void 0){let e=c.slidesGrid[D],t=c.slidesGrid[D-j]-e;s?c.setTranslate(c.translate-t):(c.slideTo(D-j,0,!1,!0),r&&(c.touchEventsData.startTranslate=c.touchEventsData.startTranslate-t,c.touchEventsData.currentTranslate=c.touchEventsData.currentTranslate-t))}else{let e=S?w.length/p.grid.rows:w.length;c.slideTo(c.activeIndex-e,0,!1,!0)}}if(c.allowSlidePrev=u,c.allowSlideNext=d,c.controller&&c.controller.control&&!o){let a={slideRealIndex:e,direction:n,setTranslate:r,activeSlideIndex:i,byController:!0};Array.isArray(c.controller.control)?c.controller.control.forEach(e=>{!e.destroyed&&e.params.loop&&e.loopFix({...a,slideTo:e.params.slidesPerView===p.slidesPerView?t:!1})}):c.controller.control instanceof c.constructor&&c.controller.control.params.loop&&c.controller.control.loopFix({...a,slideTo:c.controller.control.params.slidesPerView===p.slidesPerView?t:!1})}c.emit(`loopFix`)}function yn(){let e=this,{params:t,slidesEl:n}=e;if(!t.loop||!n||e.virtual&&e.params.virtual.enabled)return;e.recalcSlides();let r=[];e.slides.forEach(e=>{let t=e.swiperSlideIndex===void 0?e.getAttribute(`data-swiper-slide-index`)*1:e.swiperSlideIndex;r[t]=e}),e.slides.forEach(e=>{e.removeAttribute(`data-swiper-slide-index`)}),r.forEach(e=>{n.append(e)}),e.recalcSlides(),e.slideTo(e.realIndex,0)}var bn={loopCreate:_n,loopFix:vn,loopDestroy:yn};function xn(e){let t=this;if(!t.params.simulateTouch||t.params.watchOverflow&&t.isLocked||t.params.cssMode)return;let n=t.params.touchEventsTarget===`container`?t.el:t.wrapperEl;t.isElement&&(t.__preventObserver__=!0),n.style.cursor=`move`,n.style.cursor=e?`grabbing`:`grab`,t.isElement&&requestAnimationFrame(()=>{t.__preventObserver__=!1})}function Sn(){let e=this;e.params.watchOverflow&&e.isLocked||e.params.cssMode||(e.isElement&&(e.__preventObserver__=!0),e[e.params.touchEventsTarget===`container`?`el`:`wrapperEl`].style.cursor=``,e.isElement&&requestAnimationFrame(()=>{e.__preventObserver__=!1}))}var Cn={setGrabCursor:xn,unsetGrabCursor:Sn};function wn(e,t=this){function n(t){if(!t||t===B()||t===V())return null;t.assignedSlot&&(t=t.assignedSlot);let r=t.closest(e);return!r&&!t.getRootNode?null:r||n(t.getRootNode().host)}return n(t)}function Tn(e,t,n){let r=V(),{params:i}=e,a=i.edgeSwipeDetection,o=i.edgeSwipeThreshold;return a&&(n<=o||n>=r.innerWidth-o)?a===`prevent`?(t.preventDefault(),!0):!1:!0}function En(e){let t=this;if(t.destroyed)return;let n=B(),r=e;r.originalEvent&&(r=r.originalEvent);let i=t.touchEventsData;if(r.type===`pointerdown`){if(i.pointerId!==null&&i.pointerId!==r.pointerId)return;i.pointerId=r.pointerId}else r.type===`touchstart`&&r.targetTouches.length===1&&(i.touchId=r.targetTouches[0].identifier);if(r.type===`touchstart`){Tn(t,r,r.targetTouches[0].pageX);return}let{params:a,touches:o,enabled:s}=t;if(!s||!a.simulateTouch&&r.pointerType===`mouse`||t.animating&&a.preventInteractionOnTransition)return;!t.animating&&a.cssMode&&a.loop&&t.loopFix();let c=r.target;if(a.touchEventsTarget===`wrapper`&&!ht(c,t.wrapperEl)||`which`in r&&r.which===3||`button`in r&&r.button>0||i.isTouched&&i.isMoved)return;let l=!!a.noSwipingClass&&a.noSwipingClass!==``,u=r.composedPath?r.composedPath():r.path;l&&r.target&&r.target.shadowRoot&&u&&(c=u[0]);let d=a.noSwipingSelector?a.noSwipingSelector:`.${a.noSwipingClass}`,f=!!(r.target&&r.target.shadowRoot);if(a.noSwiping&&(f?wn(d,c):c.closest(d))){t.allowClick=!0;return}if(a.swipeHandler&&!c.closest(a.swipeHandler))return;o.currentX=r.pageX,o.currentY=r.pageY;let p=o.currentX,m=o.currentY;if(!Tn(t,r,p))return;Object.assign(i,{isTouched:!0,isMoved:!1,allowTouchCallbacks:!0,isScrolling:void 0,startMoving:void 0}),o.startX=p,o.startY=m,i.touchStartTime=ct(),t.allowClick=!0,t.updateSize(),t.swipeDirection=void 0,a.threshold>0&&(i.allowThresholdMove=!1);let h=!0;c.matches(i.focusableElements)&&(h=!1,c.nodeName===`SELECT`&&(i.isTouched=!1)),n.activeElement&&n.activeElement.matches(i.focusableElements)&&n.activeElement!==c&&(r.pointerType===`mouse`||r.pointerType!==`mouse`&&!c.matches(i.focusableElements))&&n.activeElement.blur();let g=h&&t.allowTouchMove&&a.touchStartPreventDefault;(a.touchStartForcePreventDefault||g)&&!c.isContentEditable&&r.preventDefault(),a.freeMode&&a.freeMode.enabled&&t.freeMode&&t.animating&&!a.cssMode&&t.freeMode.onTouchStart(),t.emit(`touchStart`,r)}function Dn(e){let t=B(),n=this;if(n.destroyed)return;let r=n.touchEventsData,{params:i,touches:a,rtlTranslate:o,enabled:s}=n;if(!s||!i.simulateTouch&&e.pointerType===`mouse`)return;let c=e;if(c.originalEvent&&(c=c.originalEvent),c.type===`pointermove`&&(r.touchId!==null||c.pointerId!==r.pointerId))return;let l;if(c.type===`touchmove`){if(l=[...c.changedTouches].find(e=>e.identifier===r.touchId),!l||l.identifier!==r.touchId)return}else l=c;if(!r.isTouched){r.startMoving&&r.isScrolling&&n.emit(`touchMoveOpposite`,c);return}let u=l.pageX,d=l.pageY;if(c.preventedByNestedSwiper){a.startX=u,a.startY=d;return}if(!n.allowTouchMove){c.target.matches(r.focusableElements)||(n.allowClick=!1),r.isTouched&&(Object.assign(a,{startX:u,startY:d,currentX:u,currentY:d}),r.touchStartTime=ct());return}if(i.touchReleaseOnEdges&&!i.loop){if(n.isVertical()){if(d<a.startY&&n.translate<=n.maxTranslate()||d>a.startY&&n.translate>=n.minTranslate()){r.isTouched=!1,r.isMoved=!1;return}}else if(o&&(u>a.startX&&-n.translate<=n.maxTranslate()||u<a.startX&&-n.translate>=n.minTranslate()))return;else if(!o&&(u<a.startX&&n.translate<=n.maxTranslate()||u>a.startX&&n.translate>=n.minTranslate()))return}if(t.activeElement&&t.activeElement.matches(r.focusableElements)&&t.activeElement!==c.target&&c.pointerType!==`mouse`&&t.activeElement.blur(),t.activeElement&&c.target===t.activeElement&&c.target.matches(r.focusableElements)){r.isMoved=!0,n.allowClick=!1;return}r.allowTouchCallbacks&&n.emit(`touchMove`,c),a.previousX=a.currentX,a.previousY=a.currentY,a.currentX=u,a.currentY=d;let f=a.currentX-a.startX,p=a.currentY-a.startY;if(n.params.threshold&&Math.sqrt(f**2+p**2)<n.params.threshold)return;if(r.isScrolling===void 0){let e;n.isHorizontal()&&a.currentY===a.startY||n.isVertical()&&a.currentX===a.startX?r.isScrolling=!1:f*f+p*p>=25&&(e=Math.atan2(Math.abs(p),Math.abs(f))*180/Math.PI,r.isScrolling=n.isHorizontal()?e>i.touchAngle:90-e>i.touchAngle)}if(r.isScrolling&&n.emit(`touchMoveOpposite`,c),r.startMoving===void 0&&(a.currentX!==a.startX||a.currentY!==a.startY)&&(r.startMoving=!0),r.isScrolling||c.type===`touchmove`&&r.preventTouchMoveFromPointerMove){r.isTouched=!1;return}if(!r.startMoving)return;n.allowClick=!1,!i.cssMode&&c.cancelable&&c.preventDefault(),i.touchMoveStopPropagation&&!i.nested&&c.stopPropagation();let m=n.isHorizontal()?f:p,h=n.isHorizontal()?a.currentX-a.previousX:a.currentY-a.previousY;i.oneWayMovement&&(m=Math.abs(m)*(o?1:-1),h=Math.abs(h)*(o?1:-1)),a.diff=m,m*=i.touchRatio,o&&(m=-m,h=-h);let g=n.touchesDirection;n.swipeDirection=m>0?`prev`:`next`,n.touchesDirection=h>0?`prev`:`next`;let _=n.params.loop&&!i.cssMode,v=n.touchesDirection===`next`&&n.allowSlideNext||n.touchesDirection===`prev`&&n.allowSlidePrev;if(!r.isMoved){if(_&&v&&n.loopFix({direction:n.swipeDirection}),r.startTranslate=n.getTranslate(),n.setTransition(0),n.animating){let e=new window.CustomEvent(`transitionend`,{bubbles:!0,cancelable:!0,detail:{bySwiperTouchMove:!0}});n.wrapperEl.dispatchEvent(e)}r.allowMomentumBounce=!1,i.grabCursor&&(n.allowSlideNext===!0||n.allowSlidePrev===!0)&&n.setGrabCursor(!0),n.emit(`sliderFirstMove`,c)}if(new Date().getTime(),i._loopSwapReset!==!1&&r.isMoved&&r.allowThresholdMove&&g!==n.touchesDirection&&_&&v&&Math.abs(m)>=1){Object.assign(a,{startX:u,startY:d,currentX:u,currentY:d,startTranslate:r.currentTranslate}),r.loopSwapReset=!0,r.startTranslate=r.currentTranslate;return}n.emit(`sliderMove`,c),r.isMoved=!0,r.currentTranslate=m+r.startTranslate;let y=!0,b=i.resistanceRatio;if(i.touchReleaseOnEdges&&(b=0),m>0?(_&&v&&r.allowThresholdMove&&r.currentTranslate>(i.centeredSlides?n.minTranslate()-n.slidesSizesGrid[n.activeIndex+1]-(i.slidesPerView!==`auto`&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.activeIndex+1]+n.params.spaceBetween:0)-n.params.spaceBetween:n.minTranslate())&&n.loopFix({direction:`prev`,setTranslate:!0,activeSlideIndex:0}),r.currentTranslate>n.minTranslate()&&(y=!1,i.resistance&&(r.currentTranslate=n.minTranslate()-1+(-n.minTranslate()+r.startTranslate+m)**b))):m<0&&(_&&v&&r.allowThresholdMove&&r.currentTranslate<(i.centeredSlides?n.maxTranslate()+n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween+(i.slidesPerView!==`auto`&&n.slides.length-i.slidesPerView>=2?n.slidesSizesGrid[n.slidesSizesGrid.length-1]+n.params.spaceBetween:0):n.maxTranslate())&&n.loopFix({direction:`next`,setTranslate:!0,activeSlideIndex:n.slides.length-(i.slidesPerView===`auto`?n.slidesPerViewDynamic():Math.ceil(parseFloat(i.slidesPerView,10)))}),r.currentTranslate<n.maxTranslate()&&(y=!1,i.resistance&&(r.currentTranslate=n.maxTranslate()+1-(n.maxTranslate()-r.startTranslate-m)**b))),y&&(c.preventedByNestedSwiper=!0),!n.allowSlideNext&&n.swipeDirection===`next`&&r.currentTranslate<r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&n.swipeDirection===`prev`&&r.currentTranslate>r.startTranslate&&(r.currentTranslate=r.startTranslate),!n.allowSlidePrev&&!n.allowSlideNext&&(r.currentTranslate=r.startTranslate),i.threshold>0)if(Math.abs(m)>i.threshold||r.allowThresholdMove){if(!r.allowThresholdMove){r.allowThresholdMove=!0,a.startX=a.currentX,a.startY=a.currentY,r.currentTranslate=r.startTranslate,a.diff=n.isHorizontal()?a.currentX-a.startX:a.currentY-a.startY;return}}else{r.currentTranslate=r.startTranslate;return}!i.followFinger||i.cssMode||((i.freeMode&&i.freeMode.enabled&&n.freeMode||i.watchSlidesProgress)&&(n.updateActiveIndex(),n.updateSlidesClasses()),i.freeMode&&i.freeMode.enabled&&n.freeMode&&n.freeMode.onTouchMove(),n.updateProgress(r.currentTranslate),n.setTranslate(r.currentTranslate))}function On(e){let t=this;if(t.destroyed)return;let n=t.touchEventsData,r=e;r.originalEvent&&(r=r.originalEvent);let i;if(!(r.type===`touchend`||r.type===`touchcancel`)){if(n.touchId!==null||r.pointerId!==n.pointerId)return;i=r}else if(i=[...r.changedTouches].find(e=>e.identifier===n.touchId),!i||i.identifier!==n.touchId)return;if([`pointercancel`,`pointerout`,`pointerleave`,`contextmenu`].includes(r.type)&&!([`pointercancel`,`contextmenu`].includes(r.type)&&(t.browser.isSafari||t.browser.isWebView)))return;n.pointerId=null,n.touchId=null;let{params:a,touches:o,rtlTranslate:s,slidesGrid:c,enabled:l}=t;if(!l||!a.simulateTouch&&r.pointerType===`mouse`)return;if(n.allowTouchCallbacks&&t.emit(`touchEnd`,r),n.allowTouchCallbacks=!1,!n.isTouched){n.isMoved&&a.grabCursor&&t.setGrabCursor(!1),n.isMoved=!1,n.startMoving=!1;return}a.grabCursor&&n.isMoved&&n.isTouched&&(t.allowSlideNext===!0||t.allowSlidePrev===!0)&&t.setGrabCursor(!1);let u=ct(),d=u-n.touchStartTime;if(t.allowClick){let e=r.path||r.composedPath&&r.composedPath();t.updateClickedSlide(e&&e[0]||r.target,e),t.emit(`tap click`,r),d<300&&u-n.lastClickTime<300&&t.emit(`doubleTap doubleClick`,r)}if(n.lastClickTime=ct(),st(()=>{t.destroyed||(t.allowClick=!0)}),!n.isTouched||!n.isMoved||!t.swipeDirection||o.diff===0&&!n.loopSwapReset||n.currentTranslate===n.startTranslate&&!n.loopSwapReset){n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;return}n.isTouched=!1,n.isMoved=!1,n.startMoving=!1;let f;if(f=a.followFinger?s?t.translate:-t.translate:-n.currentTranslate,a.cssMode)return;if(a.freeMode&&a.freeMode.enabled){t.freeMode.onTouchEnd({currentPos:f});return}let p=f>=-t.maxTranslate()&&!t.params.loop,m=0,h=t.slidesSizesGrid[0];for(let e=0;e<c.length;e+=e<a.slidesPerGroupSkip?1:a.slidesPerGroup){let t=e<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;c[e+t]===void 0?(p||f>=c[e])&&(m=e,h=c[c.length-1]-c[c.length-2]):(p||f>=c[e]&&f<c[e+t])&&(m=e,h=c[e+t]-c[e])}let g=null,_=null;a.rewind&&(t.isBeginning?_=a.virtual&&a.virtual.enabled&&t.virtual?t.virtual.slides.length-1:t.slides.length-1:t.isEnd&&(g=0));let v=(f-c[m])/h,y=m<a.slidesPerGroupSkip-1?1:a.slidesPerGroup;if(d>a.longSwipesMs){if(!a.longSwipes){t.slideTo(t.activeIndex);return}t.swipeDirection===`next`&&(v>=a.longSwipesRatio?t.slideTo(a.rewind&&t.isEnd?g:m+y):t.slideTo(m)),t.swipeDirection===`prev`&&(v>1-a.longSwipesRatio?t.slideTo(m+y):_!==null&&v<0&&Math.abs(v)>a.longSwipesRatio?t.slideTo(_):t.slideTo(m))}else{if(!a.shortSwipes){t.slideTo(t.activeIndex);return}t.navigation&&(r.target===t.navigation.nextEl||r.target===t.navigation.prevEl)?r.target===t.navigation.nextEl?t.slideTo(m+y):t.slideTo(m):(t.swipeDirection===`next`&&t.slideTo(g===null?m+y:g),t.swipeDirection===`prev`&&t.slideTo(_===null?m:_))}}function kn(){let e=this,{params:t,el:n}=e;if(n&&n.offsetWidth===0)return;t.breakpoints&&e.setBreakpoint();let{allowSlideNext:r,allowSlidePrev:i,snapGrid:a}=e,o=e.virtual&&e.params.virtual.enabled;e.allowSlideNext=!0,e.allowSlidePrev=!0,e.updateSize(),e.updateSlides(),e.updateSlidesClasses();let s=o&&t.loop;if((t.slidesPerView===`auto`||t.slidesPerView>1)&&e.isEnd&&!e.isBeginning&&!e.params.centeredSlides&&!s){let t=o?e.virtual.slides:e.slides;e.slideTo(t.length-1,0,!1,!0)}else e.params.loop&&!o?e.slideToLoop(e.realIndex,0,!1,!0):e.slideTo(e.activeIndex,0,!1,!0);e.autoplay&&e.autoplay.running&&e.autoplay.paused&&(clearTimeout(e.autoplay.resizeTimeout),e.autoplay.resizeTimeout=setTimeout(()=>{e.autoplay&&e.autoplay.running&&e.autoplay.paused&&e.autoplay.resume()},500)),e.allowSlidePrev=i,e.allowSlideNext=r,e.params.watchOverflow&&a!==e.snapGrid&&e.checkOverflow()}function An(e){let t=this;t.destroyed||t.enabled&&(t.allowClick||(t.params.preventClicks&&e.preventDefault(),t.params.preventClicksPropagation&&t.animating&&(e.stopPropagation(),e.stopImmediatePropagation())))}function jn(){let e=this;if(e.destroyed)return;let{wrapperEl:t,rtlTranslate:n,enabled:r}=e;if(!r)return;e.previousTranslate=e.translate,e.isHorizontal()?e.translate=-t.scrollLeft:e.translate=-t.scrollTop,e.translate===0&&(e.translate=0),e.updateActiveIndex(),e.updateSlidesClasses();let i,a=e.maxTranslate()-e.minTranslate();i=a===0?0:(e.translate-e.minTranslate())/a,i!==e.progress&&e.updateProgress(n?-e.translate:e.translate),e.emit(`setTranslate`,e.translate,!1)}function Mn(e){let t=this;t.destroyed||(Wt(t,e.target),!(t.params.cssMode||t.params.slidesPerView!==`auto`&&!t.params.autoHeight)&&t.update())}function Nn(){let e=this;e.destroyed||e.documentTouchHandlerProceeded||(e.documentTouchHandlerProceeded=!0,e.params.touchReleaseOnEdges&&(e.el.style.touchAction=`auto`))}var Pn=(e,t)=>{let n=B(),{params:r,el:i,wrapperEl:a,device:o}=e,s=!!r.nested,c=t===`on`?`addEventListener`:`removeEventListener`,l=t;!i||typeof i==`string`||(n[c](`touchstart`,e.onDocumentTouchStart,{passive:!1,capture:s}),i[c](`touchstart`,e.onTouchStart,{passive:!1}),i[c](`pointerdown`,e.onTouchStart,{passive:!1}),n[c](`touchmove`,e.onTouchMove,{passive:!1,capture:s}),n[c](`pointermove`,e.onTouchMove,{passive:!1,capture:s}),n[c](`touchend`,e.onTouchEnd,{passive:!0}),n[c](`pointerup`,e.onTouchEnd,{passive:!0}),n[c](`pointercancel`,e.onTouchEnd,{passive:!0}),n[c](`touchcancel`,e.onTouchEnd,{passive:!0}),n[c](`pointerout`,e.onTouchEnd,{passive:!0}),n[c](`pointerleave`,e.onTouchEnd,{passive:!0}),n[c](`contextmenu`,e.onTouchEnd,{passive:!0}),(r.preventClicks||r.preventClicksPropagation)&&i[c](`click`,e.onClick,!0),r.cssMode&&a[c](`scroll`,e.onScroll),r.updateOnWindowResize?e[l](o.ios||o.android?`resize orientationchange observerUpdate`:`resize observerUpdate`,kn,!0):e[l](`observerUpdate`,kn,!0),i[c](`load`,e.onLoad,{capture:!0}))};function Fn(){let e=this,{params:t}=e;e.onTouchStart=En.bind(e),e.onTouchMove=Dn.bind(e),e.onTouchEnd=On.bind(e),e.onDocumentTouchStart=Nn.bind(e),t.cssMode&&(e.onScroll=jn.bind(e)),e.onClick=An.bind(e),e.onLoad=Mn.bind(e),Pn(e,`on`)}function In(){Pn(this,`off`)}var Ln={attachEvents:Fn,detachEvents:In},Rn=(e,t)=>e.grid&&t.grid&&t.grid.rows>1;function zn(){let e=this,{realIndex:t,initialized:n,params:r,el:i}=e,a=r.breakpoints;if(!a||a&&Object.keys(a).length===0)return;let o=B(),s=r.breakpointsBase===`window`||!r.breakpointsBase?r.breakpointsBase:`container`,c=[`window`,`container`].includes(r.breakpointsBase)||!r.breakpointsBase?e.el:o.querySelector(r.breakpointsBase),l=e.getBreakpoint(a,s,c);if(!l||e.currentBreakpoint===l)return;let u=(l in a?a[l]:void 0)||e.originalParams,d=Rn(e,r),f=Rn(e,u),p=e.params.grabCursor,m=u.grabCursor,h=r.enabled;d&&!f?(i.classList.remove(`${r.containerModifierClass}grid`,`${r.containerModifierClass}grid-column`),e.emitContainerClasses()):!d&&f&&(i.classList.add(`${r.containerModifierClass}grid`),(u.grid.fill&&u.grid.fill===`column`||!u.grid.fill&&r.grid.fill===`column`)&&i.classList.add(`${r.containerModifierClass}grid-column`),e.emitContainerClasses()),p&&!m?e.unsetGrabCursor():!p&&m&&e.setGrabCursor(),[`navigation`,`pagination`,`scrollbar`].forEach(t=>{if(u[t]===void 0)return;let n=r[t]&&r[t].enabled,i=u[t]&&u[t].enabled;n&&!i&&e[t].disable(),!n&&i&&e[t].enable()});let g=u.direction&&u.direction!==r.direction,_=r.loop&&(u.slidesPerView!==r.slidesPerView||g),v=r.loop;g&&n&&e.changeDirection(),H(e.params,u);let y=e.params.enabled,b=e.params.loop;Object.assign(e,{allowTouchMove:e.params.allowTouchMove,allowSlideNext:e.params.allowSlideNext,allowSlidePrev:e.params.allowSlidePrev}),h&&!y?e.disable():!h&&y&&e.enable(),e.currentBreakpoint=l,e.emit(`_beforeBreakpoint`,u),n&&(_?(e.loopDestroy(),e.loopCreate(t),e.updateSlides()):!v&&b?(e.loopCreate(t),e.updateSlides()):v&&!b&&e.loopDestroy()),e.emit(`breakpoint`,u)}function Bn(e,t=`window`,n){if(!e||t===`container`&&!n)return;let r=!1,i=V(),a=t===`window`?i.innerHeight:n.clientHeight,o=Object.keys(e).map(e=>typeof e==`string`&&e.indexOf(`@`)===0?{value:a*parseFloat(e.substr(1)),point:e}:{value:e,point:e});o.sort((e,t)=>parseInt(e.value,10)-parseInt(t.value,10));for(let e=0;e<o.length;e+=1){let{point:a,value:s}=o[e];t===`window`?i.matchMedia(`(min-width: ${s}px)`).matches&&(r=a):s<=n.clientWidth&&(r=a)}return r||`max`}var Vn={setBreakpoint:zn,getBreakpoint:Bn};function Hn(e,t){let n=[];return e.forEach(e=>{typeof e==`object`?Object.keys(e).forEach(r=>{e[r]&&n.push(t+r)}):typeof e==`string`&&n.push(t+e)}),n}function Un(){let e=this,{classNames:t,params:n,rtl:r,el:i,device:a}=e,o=Hn([`initialized`,n.direction,{"free-mode":e.params.freeMode&&n.freeMode.enabled},{autoheight:n.autoHeight},{rtl:r},{grid:n.grid&&n.grid.rows>1},{"grid-column":n.grid&&n.grid.rows>1&&n.grid.fill===`column`},{android:a.android},{ios:a.ios},{"css-mode":n.cssMode},{centered:n.cssMode&&n.centeredSlides},{"watch-progress":n.watchSlidesProgress}],n.containerModifierClass);t.push(...o),i.classList.add(...t),e.emitContainerClasses()}function Wn(){let e=this,{el:t,classNames:n}=e;!t||typeof t==`string`||(t.classList.remove(...n),e.emitContainerClasses())}var Gn={addClasses:Un,removeClasses:Wn};function Kn(){let e=this,{isLocked:t,params:n}=e,{slidesOffsetBefore:r}=n;if(r){let t=e.slides.length-1,n=e.slidesGrid[t]+e.slidesSizesGrid[t]+r*2;e.isLocked=e.size>n}else e.isLocked=e.snapGrid.length===1;n.allowSlideNext===!0&&(e.allowSlideNext=!e.isLocked),n.allowSlidePrev===!0&&(e.allowSlidePrev=!e.isLocked),t&&t!==e.isLocked&&(e.isEnd=!1),t!==e.isLocked&&e.emit(e.isLocked?`lock`:`unlock`)}var qn={checkOverflow:Kn},Jn={init:!0,direction:`horizontal`,oneWayMovement:!1,swiperElementNodeName:`SWIPER-CONTAINER`,touchEventsTarget:`wrapper`,initialSlide:0,speed:300,cssMode:!1,updateOnWindowResize:!0,resizeObserver:!0,nested:!1,createElements:!1,eventsPrefix:`swiper`,enabled:!0,focusableElements:`input, select, option, textarea, button, video, label`,width:null,height:null,preventInteractionOnTransition:!1,userAgent:null,url:null,edgeSwipeDetection:!1,edgeSwipeThreshold:20,autoHeight:!1,setWrapperSize:!1,virtualTranslate:!1,effect:`slide`,breakpoints:void 0,breakpointsBase:`window`,spaceBetween:0,slidesPerView:1,slidesPerGroup:1,slidesPerGroupSkip:0,slidesPerGroupAuto:!1,centeredSlides:!1,centeredSlidesBounds:!1,slidesOffsetBefore:0,slidesOffsetAfter:0,normalizeSlideIndex:!0,centerInsufficientSlides:!1,snapToSlideEdge:!1,watchOverflow:!0,roundLengths:!1,touchRatio:1,touchAngle:45,simulateTouch:!0,shortSwipes:!0,longSwipes:!0,longSwipesRatio:.5,longSwipesMs:300,followFinger:!0,allowTouchMove:!0,threshold:5,touchMoveStopPropagation:!1,touchStartPreventDefault:!0,touchStartForcePreventDefault:!1,touchReleaseOnEdges:!1,uniqueNavElements:!0,resistance:!0,resistanceRatio:.85,watchSlidesProgress:!1,grabCursor:!1,preventClicks:!0,preventClicksPropagation:!0,slideToClickedSlide:!1,loop:!1,loopAddBlankSlides:!0,loopAdditionalSlides:0,loopPreventsSliding:!0,rewind:!1,allowSlidePrev:!0,allowSlideNext:!0,swipeHandler:null,noSwiping:!0,noSwipingClass:`swiper-no-swiping`,noSwipingSelector:null,passiveListeners:!0,maxBackfaceHiddenSlides:10,containerModifierClass:`swiper-`,slideClass:`swiper-slide`,slideBlankClass:`swiper-slide-blank`,slideActiveClass:`swiper-slide-active`,slideVisibleClass:`swiper-slide-visible`,slideFullyVisibleClass:`swiper-slide-fully-visible`,slideNextClass:`swiper-slide-next`,slidePrevClass:`swiper-slide-prev`,wrapperClass:`swiper-wrapper`,lazyPreloaderClass:`swiper-lazy-preloader`,lazyPreloadPrevNext:0,runCallbacksOnInit:!0,_emitClasses:!1};function Yn(e,t){return function(n={}){let r=Object.keys(n)[0],i=n[r];if(typeof i!=`object`||!i){H(t,n);return}if(e[r]===!0&&(e[r]={enabled:!0}),r===`navigation`&&e[r]&&e[r].enabled&&!e[r].prevEl&&!e[r].nextEl&&(e[r].auto=!0),[`pagination`,`scrollbar`].indexOf(r)>=0&&e[r]&&e[r].enabled&&!e[r].el&&(e[r].auto=!0),!(r in e&&`enabled`in i)){H(t,n);return}typeof e[r]==`object`&&!(`enabled`in e[r])&&(e[r].enabled=!0),e[r]||(e[r]={enabled:!1}),H(t,n)}}var Xn={eventsEmitter:Pt,update:Xt,translate:nn,transition:cn,slide:gn,loop:bn,grabCursor:Cn,events:Ln,breakpoints:Vn,checkOverflow:qn,classes:Gn},Zn={},Qn=class e{constructor(...t){let n,r;t.length===1&&t[0].constructor&&Object.prototype.toString.call(t[0]).slice(8,-1)===`Object`?r=t[0]:[n,r]=t,r||={},r=H({},r),n&&!r.el&&(r.el=n);let i=B();if(r.el&&typeof r.el==`string`&&i.querySelectorAll(r.el).length>1){let t=[];return i.querySelectorAll(r.el).forEach(n=>{let i=H({},r,{el:n});t.push(new e(i))}),t}let a=this;a.__swiper__=!0,a.support=Tt(),a.device=Ot({userAgent:r.userAgent}),a.browser=jt(),a.eventsListeners={},a.eventsAnyListeners=[],a.modules=[...a.__modules__],r.modules&&Array.isArray(r.modules)&&r.modules.forEach(e=>{typeof e==`function`&&a.modules.indexOf(e)<0&&a.modules.push(e)});let o={};return a.modules.forEach(e=>{e({params:r,swiper:a,extendParams:Yn(r,o),on:a.on.bind(a),once:a.once.bind(a),off:a.off.bind(a),emit:a.emit.bind(a)})}),a.params=H({},H({},Jn,o),Zn,r),a.originalParams=H({},a.params),a.passedParams=H({},r),a.params&&a.params.on&&Object.keys(a.params.on).forEach(e=>{a.on(e,a.params.on[e])}),a.params&&a.params.onAny&&a.onAny(a.params.onAny),Object.assign(a,{enabled:a.params.enabled,el:n,classNames:[],slides:[],slidesGrid:[],snapGrid:[],slidesSizesGrid:[],isHorizontal(){return a.params.direction===`horizontal`},isVertical(){return a.params.direction===`vertical`},activeIndex:0,realIndex:0,isBeginning:!0,isEnd:!1,translate:0,previousTranslate:0,progress:0,velocity:0,animating:!1,cssOverflowAdjustment(){return Math.trunc(this.translate/2**23)*2**23},allowSlideNext:a.params.allowSlideNext,allowSlidePrev:a.params.allowSlidePrev,touchEventsData:{isTouched:void 0,isMoved:void 0,allowTouchCallbacks:void 0,touchStartTime:void 0,isScrolling:void 0,currentTranslate:void 0,startTranslate:void 0,allowThresholdMove:void 0,focusableElements:a.params.focusableElements,lastClickTime:0,clickTimeout:void 0,velocities:[],allowMomentumBounce:void 0,startMoving:void 0,pointerId:null,touchId:null},allowClick:!0,allowTouchMove:a.params.allowTouchMove,touches:{startX:0,startY:0,currentX:0,currentY:0,diff:0},imagesToLoad:[],imagesLoaded:0}),a.emit(`_swiper`),a.params.init&&a.init(),a}getDirectionLabel(e){return this.isHorizontal()?e:{width:`height`,"margin-top":`margin-left`,"margin-bottom ":`margin-right`,"margin-left":`margin-top`,"margin-right":`margin-bottom`,"padding-left":`padding-top`,"padding-right":`padding-bottom`,marginRight:`marginBottom`}[e]}getSlideIndex(e){let{slidesEl:t,params:n}=this,r=bt(W(t,`.${n.slideClass}, swiper-slide`)[0]);return bt(e)-r}getSlideIndexByData(e){return this.getSlideIndex(this.slides.find(t=>t.getAttribute(`data-swiper-slide-index`)*1===e))}getSlideIndexWhenGrid(e){return this.grid&&this.params.grid&&this.params.grid.rows>1&&(this.params.grid.fill===`column`?e=Math.floor(e/this.params.grid.rows):this.params.grid.fill===`row`&&(e%=Math.ceil(this.slides.length/this.params.grid.rows))),e}recalcSlides(){let e=this,{slidesEl:t,params:n}=e;e.slides=W(t,`.${n.slideClass}, swiper-slide`)}enable(){let e=this;e.enabled||(e.enabled=!0,e.params.grabCursor&&e.setGrabCursor(),e.emit(`enable`))}disable(){let e=this;e.enabled&&(e.enabled=!1,e.params.grabCursor&&e.unsetGrabCursor(),e.emit(`disable`))}setProgress(e,t){let n=this;e=Math.min(Math.max(e,0),1);let r=n.minTranslate(),i=(n.maxTranslate()-r)*e+r;n.translateTo(i,t===void 0?0:t),n.updateActiveIndex(),n.updateSlidesClasses()}emitContainerClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let t=e.el.className.split(` `).filter(t=>t.indexOf(`swiper`)===0||t.indexOf(e.params.containerModifierClass)===0);e.emit(`_containerClasses`,t.join(` `))}getSlideClasses(e){let t=this;return t.destroyed?``:e.className.split(` `).filter(e=>e.indexOf(`swiper-slide`)===0||e.indexOf(t.params.slideClass)===0).join(` `)}emitSlidesClasses(){let e=this;if(!e.params._emitClasses||!e.el)return;let t=[];e.slides.forEach(n=>{let r=e.getSlideClasses(n);t.push({slideEl:n,classNames:r}),e.emit(`_slideClass`,n,r)}),e.emit(`_slideClasses`,t)}slidesPerViewDynamic(e=`current`,t=!1){let{params:n,slides:r,slidesGrid:i,slidesSizesGrid:a,size:o,activeIndex:s}=this,c=1;if(typeof n.slidesPerView==`number`)return n.slidesPerView;if(n.centeredSlides){let e=r[s]?Math.ceil(r[s].swiperSlideSize):0,t;for(let n=s+1;n<r.length;n+=1)r[n]&&!t&&(e+=Math.ceil(r[n].swiperSlideSize),c+=1,e>o&&(t=!0));for(let n=s-1;n>=0;--n)r[n]&&!t&&(e+=r[n].swiperSlideSize,c+=1,e>o&&(t=!0))}else if(e===`current`)for(let e=s+1;e<r.length;e+=1)(t?i[e]+a[e]-i[s]<o:i[e]-i[s]<o)&&(c+=1);else for(let e=s-1;e>=0;--e)i[s]-i[e]<o&&(c+=1);return c}update(){let e=this;if(!e||e.destroyed)return;let{snapGrid:t,params:n}=e;n.breakpoints&&e.setBreakpoint(),[...e.el.querySelectorAll(`[loading="lazy"]`)].forEach(t=>{t.complete&&Wt(e,t)}),e.updateSize(),e.updateSlides(),e.updateProgress(),e.updateSlidesClasses();function r(){let t=e.rtlTranslate?e.translate*-1:e.translate,n=Math.min(Math.max(t,e.maxTranslate()),e.minTranslate());e.setTranslate(n),e.updateActiveIndex(),e.updateSlidesClasses()}let i;if(n.freeMode&&n.freeMode.enabled&&!n.cssMode)r(),n.autoHeight&&e.updateAutoHeight();else{if((n.slidesPerView===`auto`||n.slidesPerView>1)&&e.isEnd&&!n.centeredSlides){let t=e.virtual&&n.virtual.enabled?e.virtual.slides:e.slides;i=e.slideTo(t.length-1,0,!1,!0)}else i=e.slideTo(e.activeIndex,0,!1,!0);i||r()}n.watchOverflow&&t!==e.snapGrid&&e.checkOverflow(),e.emit(`update`)}changeDirection(e,t=!0){let n=this,r=n.params.direction;return e||=r===`horizontal`?`vertical`:`horizontal`,e===r||e!==`horizontal`&&e!==`vertical`?n:(n.el.classList.remove(`${n.params.containerModifierClass}${r}`),n.el.classList.add(`${n.params.containerModifierClass}${e}`),n.emitContainerClasses(),n.params.direction=e,n.slides.forEach(t=>{e===`vertical`?t.style.width=``:t.style.height=``}),n.emit(`changeDirection`),t&&n.update(),n)}changeLanguageDirection(e){let t=this;t.rtl&&e===`rtl`||!t.rtl&&e===`ltr`||(t.rtl=e===`rtl`,t.rtlTranslate=t.params.direction===`horizontal`&&t.rtl,t.rtl?(t.el.classList.add(`${t.params.containerModifierClass}rtl`),t.el.dir=`rtl`):(t.el.classList.remove(`${t.params.containerModifierClass}rtl`),t.el.dir=`ltr`),t.update())}mount(e){let t=this;if(t.mounted)return!0;let n=e||t.params.el;if(typeof n==`string`&&(n=document.querySelector(n)),!n)return!1;n.swiper=t,n.parentNode&&n.parentNode.host&&n.parentNode.host.nodeName===t.params.swiperElementNodeName.toUpperCase()&&(t.isElement=!0);let r=()=>`.${(t.params.wrapperClass||``).trim().split(` `).join(`.`)}`,i=n&&n.shadowRoot&&n.shadowRoot.querySelector?n.shadowRoot.querySelector(r()):W(n,r())[0];return!i&&t.params.createElements&&(i=_t(`div`,t.params.wrapperClass),n.append(i),W(n,`.${t.params.slideClass}`).forEach(e=>{i.append(e)})),Object.assign(t,{el:n,wrapperEl:i,slidesEl:t.isElement&&!n.parentNode.host.slideSlots?n.parentNode.host:i,hostEl:t.isElement?n.parentNode.host:n,mounted:!0,rtl:n.dir.toLowerCase()===`rtl`||G(n,`direction`)===`rtl`,rtlTranslate:t.params.direction===`horizontal`&&(n.dir.toLowerCase()===`rtl`||G(n,`direction`)===`rtl`),wrongRTL:G(i,`display`)===`-webkit-box`}),!0}init(e){let t=this;if(t.initialized||t.mount(e)===!1)return t;t.emit(`beforeInit`),t.params.breakpoints&&t.setBreakpoint(),t.addClasses(),t.updateSize(),t.updateSlides(),t.params.watchOverflow&&t.checkOverflow(),t.params.grabCursor&&t.enabled&&t.setGrabCursor(),t.params.loop&&t.virtual&&t.params.virtual.enabled?t.slideTo(t.params.initialSlide+t.virtual.slidesBefore,0,t.params.runCallbacksOnInit,!1,!0):t.slideTo(t.params.initialSlide,0,t.params.runCallbacksOnInit,!1,!0),t.params.loop&&t.loopCreate(void 0,!0),t.attachEvents();let n=[...t.el.querySelectorAll(`[loading="lazy"]`)];return t.isElement&&n.push(...t.hostEl.querySelectorAll(`[loading="lazy"]`)),n.forEach(e=>{e.complete?Wt(t,e):e.addEventListener(`load`,e=>{Wt(t,e.target)})}),Kt(t),t.initialized=!0,Kt(t),t.emit(`init`),t.emit(`afterInit`),t}destroy(e=!0,t=!0){let n=this,{params:r,el:i,wrapperEl:a,slides:o}=n;return n.params===void 0||n.destroyed?null:(n.emit(`beforeDestroy`),n.initialized=!1,n.detachEvents(),r.loop&&n.loopDestroy(),t&&(n.removeClasses(),i&&typeof i!=`string`&&i.removeAttribute(`style`),a&&a.removeAttribute(`style`),o&&o.length&&o.forEach(e=>{e.classList.remove(r.slideVisibleClass,r.slideFullyVisibleClass,r.slideActiveClass,r.slideNextClass,r.slidePrevClass),e.removeAttribute(`style`),e.removeAttribute(`data-swiper-slide-index`)})),n.emit(`destroy`),Object.keys(n.eventsListeners).forEach(e=>{n.off(e)}),e!==!1&&(n.el&&typeof n.el!=`string`&&(n.el.swiper=null),ot(n)),n.destroyed=!0,null)}static extendDefaults(e){H(Zn,e)}static get extendedDefaults(){return Zn}static get defaults(){return Jn}static installModule(t){e.prototype.__modules__||(e.prototype.__modules__=[]);let n=e.prototype.__modules__;typeof t==`function`&&n.indexOf(t)<0&&n.push(t)}static use(t){return Array.isArray(t)?(t.forEach(t=>e.installModule(t)),e):(e.installModule(t),e)}};Object.keys(Xn).forEach(e=>{Object.keys(Xn[e]).forEach(t=>{Qn.prototype[t]=Xn[e][t]})}),Qn.use([Mt,Nt]);function $n({swiper:e,extendParams:t,on:n,emit:r,params:i}){e.autoplay={running:!1,paused:!1,timeLeft:0},t({autoplay:{enabled:!1,delay:3e3,waitForTransition:!0,disableOnInteraction:!1,stopOnLastSlide:!1,reverseDirection:!1,pauseOnMouseEnter:!1}});let a,o,s=i&&i.autoplay?i.autoplay.delay:3e3,c=i&&i.autoplay?i.autoplay.delay:3e3,l,u=new Date().getTime(),d,f,p,m,h,g;function _(t){!e||e.destroyed||!e.wrapperEl||t.target===e.wrapperEl&&(e.wrapperEl.removeEventListener(`transitionend`,_),!(g||t.detail&&t.detail.bySwiperTouchMove)&&T())}let v=()=>{if(e.destroyed||!e.autoplay.running)return;e.autoplay.paused?d=!0:d&&=(c=l,!1);let t=e.autoplay.paused?l:u+c-new Date().getTime();e.autoplay.timeLeft=t,r(`autoplayTimeLeft`,t,t/s),o=requestAnimationFrame(()=>{v()})},y=()=>{let t;if(t=e.virtual&&e.params.virtual.enabled?e.slides.find(e=>e.classList.contains(`swiper-slide-active`)):e.slides[e.activeIndex],t)return parseInt(t.getAttribute(`data-swiper-autoplay`),10)},b=()=>{let t=e.params.autoplay.delay,n=y();return!Number.isNaN(n)&&n>0&&(t=n),t},x=t=>{if(e.destroyed||!e.autoplay.running)return;cancelAnimationFrame(o),v();let n=t;n===void 0&&(n=b(),s=n,c=n),l=n;let i=e.params.speed,d=()=>{!e||e.destroyed||(e.params.autoplay.reverseDirection?!e.isBeginning||e.params.loop||e.params.rewind?(e.slidePrev(i,!0,!0),r(`autoplay`)):e.params.autoplay.stopOnLastSlide||(e.slideTo(e.slides.length-1,i,!0,!0),r(`autoplay`)):!e.isEnd||e.params.loop||e.params.rewind?(e.slideNext(i,!0,!0),r(`autoplay`)):e.params.autoplay.stopOnLastSlide||(e.slideTo(0,i,!0,!0),r(`autoplay`)),e.params.cssMode&&(u=new Date().getTime(),requestAnimationFrame(()=>{x()})))};return n>0?(clearTimeout(a),a=setTimeout(()=>{d()},n)):requestAnimationFrame(()=>{d()}),n},S=()=>{u=new Date().getTime(),e.autoplay.running=!0,x(),r(`autoplayStart`)},C=()=>{e.autoplay.running=!1,clearTimeout(a),cancelAnimationFrame(o),r(`autoplayStop`)},w=(t,n)=>{if(e.destroyed||!e.autoplay.running)return;clearTimeout(a),t||(h=!0);let i=()=>{r(`autoplayPause`),e.params.autoplay.waitForTransition?e.wrapperEl.addEventListener(`transitionend`,_):T()};if(e.autoplay.paused=!0,n){i();return}l=(l||e.params.autoplay.delay)-(new Date().getTime()-u),!(e.isEnd&&l<0&&!e.params.loop)&&(l<0&&(l=0),i())},T=()=>{e.isEnd&&l<0&&!e.params.loop||e.destroyed||!e.autoplay.running||(u=new Date().getTime(),h?(h=!1,x(l)):x(),e.autoplay.paused=!1,r(`autoplayResume`))},E=()=>{if(e.destroyed||!e.autoplay.running)return;let t=B();t.visibilityState===`hidden`&&(h=!0,w(!0)),t.visibilityState===`visible`&&T()},D=t=>{t.pointerType===`mouse`&&(h=!0,g=!0,!(e.animating||e.autoplay.paused)&&w(!0))},O=t=>{t.pointerType===`mouse`&&(g=!1,e.autoplay.paused&&T())},k=()=>{e.params.autoplay.pauseOnMouseEnter&&(e.el.addEventListener(`pointerenter`,D),e.el.addEventListener(`pointerleave`,O))},A=()=>{e.el&&typeof e.el!=`string`&&(e.el.removeEventListener(`pointerenter`,D),e.el.removeEventListener(`pointerleave`,O))},j=()=>{B().addEventListener(`visibilitychange`,E)},M=()=>{B().removeEventListener(`visibilitychange`,E)};n(`init`,()=>{e.params.autoplay.enabled&&(k(),j(),S())}),n(`destroy`,()=>{A(),M(),e.autoplay.running&&C()}),n(`_freeModeStaticRelease`,()=>{(p||h)&&T()}),n(`_freeModeNoMomentumRelease`,()=>{e.params.autoplay.disableOnInteraction?C():w(!0,!0)}),n(`beforeTransitionStart`,(t,n,r)=>{e.destroyed||!e.autoplay.running||(r||!e.params.autoplay.disableOnInteraction?w(!0,!0):C())}),n(`sliderFirstMove`,()=>{if(!(e.destroyed||!e.autoplay.running)){if(e.params.autoplay.disableOnInteraction){C();return}f=!0,p=!1,h=!1,m=setTimeout(()=>{h=!0,p=!0,w(!0)},200)}}),n(`touchEnd`,()=>{if(!(e.destroyed||!e.autoplay.running||!f)){if(clearTimeout(m),clearTimeout(a),e.params.autoplay.disableOnInteraction){p=!1,f=!1;return}p&&e.params.cssMode&&T(),p=!1,f=!1}}),n(`slideChange`,()=>{e.destroyed||!e.autoplay.running||e.autoplay.paused&&(l=b(),s=b())}),Object.assign(e.autoplay,{start:S,stop:C,pause:w,resume:T})}function er(e){return e.map(e=>e.dailyPhrase?{...e,subtitle:et()}:e)}function tr(e){return`

    <div class="banner-swiper swiper">

      <div class="swiper-wrapper">

        ${er(e).map(e=>`

          <div class="swiper-slide">

            <article class="banner-slide banner-slide--${e.variant}">

              <span class="banner-tag">${e.tag}</span>

              <h2>${e.title}</h2>

              <p>${e.subtitle}</p>

            </article>

          </div>

        `).join(``)}

      </div>

    </div>

  `}function nr(e){return`<button type="button" class="section-link" data-catalog="${e}">Ver tudo</button>`}function rr(e,t,{catalogMode:n=null,chip:r=``}={}){if(!t.length)return``;let i=[r?`<span class="section-chip section-chip--plain">${r}</span>`:``,n?nr(n):``].filter(Boolean).join(``);return`

    <section class="home-section">

      <div class="section-head">

        <h2>${e}</h2>

        ${i?`<div class="section-head-actions">${i}</div>`:``}

      </div>

      ${Pe(t)}

    </section>

  `}function ir(e){return e.length?`

    <div class="highlights-swiper swiper">

      <div class="swiper-wrapper">

        ${e.map(e=>`

          <div class="swiper-slide">

            ${Ne(e,{variant:`wide`})}

          </div>

        `).join(``)}

      </div>

    </div>

  `:Fe(`Nenhum destaque no momento.`)}function ar(){let e=ce(),t=j(),n=t.filter(e=>!e.comingSoon),r=t.filter(e=>e.comingSoon),i=Ze(t).slice(0,4),a=[...n].sort((e,t)=>t.sold-e.sold).slice(0,4),o=[...n].slice(0,4),s=r.slice(0,4);return`

    <div class="home-page">

      <section class="banner-carousel" aria-label="Novidades">

        ${tr(e)}

      </section>



      ${n.length?`

        <section class="home-section home-section--highlights">

          <div class="section-head">

            <h2>Destaques</h2>

            <div class="section-head-actions">

              <span class="section-chip section-chip--plain">Hoje</span>

            </div>

          </div>

          ${ir(i)}

        </section>



        ${rr(`Principais produtos`,a,{catalogMode:`top`})}

      `:``}



      ${o.length?rr(`Vitrine`,o,{catalogMode:`available`}):``}



      ${s.length?rr(`Em breve`,s,{catalogMode:`coming-soon`,chip:`Novidades`}):``}

    </div>

  `}function or(e,{onProductClick:t,onOpenCatalog:n}={}){t&&Ie(e,t),e.querySelectorAll(`[data-catalog]`).forEach(e=>{e.addEventListener(`click`,()=>n?.(e.dataset.catalog))});let r=null,i=null,a=e.querySelector(`.banner-swiper`);if(a){let e=a.querySelectorAll(`.swiper-slide`).length;r=new Qn(a,{modules:[$n],slidesPerView:1,spaceBetween:12,speed:500,loop:!1,rewind:e>1,grabCursor:!0,resistanceRatio:.85,autoplay:e>1?{delay:4500,disableOnInteraction:!1}:!1})}let o=e.querySelector(`.highlights-swiper`);if(o){let e=o.querySelectorAll(`.swiper-slide`).length;i=new Qn(o,{slidesPerView:1.15,spaceBetween:14,speed:450,loop:e>1,loopAdditionalSlides:2,grabCursor:!0,breakpoints:{380:{slidesPerView:1.25,spaceBetween:16}}})}return()=>{r?.destroy(),i?.destroy()}}function sr({error:e=``,loading:t=!1}={}){return`
    <div class="login-screen">
      <div class="login-card">
        <div class="login-brand">
          <img src="${Oe}" alt="${De}" class="login-brand-logo" width="256" height="64" />
          <p>Sua loja favorita, estilo app</p>
        </div>

        <form id="loginForm" class="login-form" novalidate>
          ${e?`<p class="login-error" role="alert">${e}</p>`:``}

          <label class="field">
            <span>Usuário</span>
            <input
              type="text"
              name="username"
              autocomplete="username"
              placeholder="seu login da planilha"
              required
              ${t?`disabled`:``}
            />
          </label>

          <label class="field">
            <span>Senha</span>
            <input
              type="password"
              name="password"
              autocomplete="current-password"
              placeholder="••••••"
              required
              ${t?`disabled`:``}
            />
          </label>

          <button type="submit" class="btn-primary" ${t?`disabled`:``}>
            ${t?`Entrando...`:`Entrar`}
          </button>
        </form>
      </div>
    </div>
  `}function cr(e,t){let n=e.querySelector(`#loginForm`);n.addEventListener(`submit`,e=>{e.preventDefault();let r=new FormData(n);t({username:String(r.get(`username`)??``),password:String(r.get(`password`)??``)})})}function lr(e,t){if(e.comingSoon)return ur(e);let n=h(e.image),r=e.discount>0,i=e.originalPrice-e.price;return`
    <div class="product-page">
      <button type="button" class="product-back" id="productBack" aria-label="Voltar">
        ← Voltar
      </button>

      <div class="product-detail-gallery">
        <div class="product-detail-image-wrap">
          ${e.badge?`<span class="product-badge">${e.badge}</span>`:``}
          <img src="${n}" alt="${e.name}" class="product-detail-image" />
        </div>
      </div>

      <div class="product-detail-body">
        <div class="product-detail-head">
          <span class="product-detail-category">${e.category}</span>
          <h1 class="product-detail-title">${e.name}</h1>
        </div>

        <section class="product-detail-pricing" aria-label="Preço">
          <div class="product-detail-prices">
            <span class="product-detail-price">${F(e.price)}</span>
            ${r?`
              <span class="product-detail-original">${F(e.originalPrice)}</span>
              <span class="product-detail-discount">-${e.discount}%</span>
            `:``}
          </div>
          ${r?`<p class="product-detail-savings">Você economiza ${F(i)}</p>`:``}
          <p class="product-detail-balance">
            Seu saldo: <strong>${I(t.lovecoins)}</strong>
          </p>
        </section>

        <section class="product-detail-section">
          <h2>Sobre o produto</h2>
          <p class="product-detail-description">${e.description}</p>
        </section>

        ${e.externalUrl?`
          <a
            href="${e.externalUrl}"
            target="_blank"
            rel="noopener noreferrer"
            class="product-external-link"
          >
            Ver referência externa ↗
          </a>
        `:``}

        <div class="product-detail-actions">
          <button type="button" id="addToCartBtn" class="btn-buy">
            Adicionar ao carrinho · ${F(e.price)}
          </button>
          <p class="product-detail-footnote">
            O pagamento é feito na aba Carrinho, quando você finalizar a compra.
          </p>
        </div>
      </div>
    </div>
  `}function ur(e){let t=h(e.image);return`
    <div class="product-page product-page--soon">
      <button type="button" class="product-back" id="productBack" aria-label="Voltar">
        ← Voltar
      </button>

      <div class="product-detail-gallery product-detail-gallery--soon">
        <div class="product-detail-image-wrap product-detail-image-wrap--soon">
          ${Me({size:`detail`})}
          <img src="${t}" alt="${e.name}" class="product-detail-image" />
        </div>
      </div>

      <div class="product-detail-body">
        <div class="product-detail-head">
          <span class="product-detail-category">Lista de desejos</span>
          <h1 class="product-detail-title">${e.name}</h1>
          <p class="product-soon-status">Este produto ainda não está disponível para compra.</p>
        </div>

        <section class="product-detail-section">
          <h2>Sobre o produto</h2>
          <p class="product-detail-description">
            ${e.description}
            ${e.createdByUsername?` Sugerido por <strong>@${e.createdByUsername}</strong>.`:``}
          </p>
        </section>

        <a
          href="${e.link}"
          target="_blank"
          rel="noopener noreferrer"
          class="btn-buy btn-buy--outline"
        >
          Abrir link do produto ↗
        </a>
      </div>
    </div>
  `}function dr(e,{productId:t,onBack:n,onAddToCart:r}){e.querySelector(`#productBack`)?.addEventListener(`click`,n),e.querySelector(`#addToCartBtn`)?.addEventListener(`click`,()=>{r(t)})}function fr(){return`
    <div class="placeholder-page">
      <div class="placeholder-icon">?</div>
      <h2>Produto não encontrado</h2>
      <p>Este item não está mais disponível na vitrine.</p>
      <button type="button" class="btn-primary mt-6" id="productBack">Voltar</button>
    </div>
  `}function pr(e){return M(e)}var mr=5,hr=15,gr=10800*1e3,_r=[{id:`confirmed`,label:`Pedido confirmado`,description:`Recebemos seu pedido e o pagamento em LC$ foi aprovado.`},{id:`preparing`,label:`Preparando envio`,description:`Seus itens estão sendo separados com muito carinho.`},{id:`transit`,label:`A caminho`,description:`O pacote saiu do centro de distribuição Lovepee.`},{id:`delivered`,label:`Entregue`,description:`Pedido entregue. Esperamos que você adore!`}];function vr(e){let t=Number(String(e||``).replace(/^V/i,``));return!Number.isFinite(t)||t<=0?null:t}function yr(e){return e?e.split(`|`).map(e=>e.trim()).filter(Boolean).map(e=>{let t=e.match(/^(\d+)x\s+(.+?)\s+\((\d+)\s+LC\$\)$/);if(t){let e=Number(t[1]),n=Number(t[3]);return{quantity:e,name:t[2],price:n,total:e*n}}return{quantity:1,name:e,price:0,total:0}}):[]}function br(e,t){let n=new Date(e);return n.setDate(n.getDate()+t),n}function xr(e){let t=new Date(e);return t.setHours(0,0,0,0),t}function Sr(e,t=new Date){let n=vr(e);if(!n)return{stages:[],currentStageIndex:0,daysSinceOrder:0,estimatedDelivery:null,isDelivered:!1,progressPercent:0,statusLabel:`Status indisponível`};let r=new Date(n),i=Math.max(0,Math.floor((xr(t)-xr(r))/(1e3*60*60*24))),a=i>=hr,o=a?_r.length-1:Math.min(Math.floor(i/mr),_r.length-1),s=_r.map((e,t)=>{let n=br(r,t*mr),i=`pending`;return a||t<o?i=`done`:t===o&&(i=`current`),{...e,date:n,status:i}});return{stages:s,currentStageIndex:o,daysSinceOrder:i,estimatedDelivery:br(r,hr),isDelivered:a,progressPercent:Math.min(100,Math.round(i/hr*100)),statusLabel:s[o]?.label??`Em andamento`}}function Cr(e){let t=typeof e==`number`?e:vr(e);return t?new Date(t).toLocaleString(`pt-BR`,{day:`2-digit`,month:`short`,year:`numeric`,hour:`2-digit`,minute:`2-digit`}):``}function wr(e){return e?e.toLocaleDateString(`pt-BR`,{day:`2-digit`,month:`short`,year:`numeric`}):``}function Tr(e,t=new Date){let n=vr(e);return n?t.getTime()-n<=gr:!1}function Er(e){let t=vr(e);return t?new Date(t+gr):null}function Dr(e){return String(e??``).replace(/&/g,`&amp;`).replace(/</g,`&lt;`).replace(/>/g,`&gt;`).replace(/"/g,`&quot;`)}function Or({title:e=`Confirmar`,message:t=``,confirmLabel:n=`Confirmar`,cancelLabel:r=`Cancelar`,tone:i=`danger`}={}){return new Promise(a=>{document.querySelector(`.app-dialog-backdrop`)?.remove();let o=document.createElement(`div`);o.className=`app-dialog-backdrop`,o.innerHTML=`
      <div class="app-dialog" role="dialog" aria-modal="true" aria-labelledby="app-dialog-title">
        <div class="app-dialog-icon app-dialog-icon--${i}" aria-hidden="true">!</div>
        <h2 id="app-dialog-title" class="app-dialog-title">${Dr(e)}</h2>
        <p class="app-dialog-message">${Dr(t)}</p>
        <div class="app-dialog-actions">
          <button type="button" class="app-dialog-btn app-dialog-btn--ghost" data-action="cancel">
            ${Dr(r)}
          </button>
          <button type="button" class="app-dialog-btn app-dialog-btn--${i}" data-action="confirm">
            ${Dr(n)}
          </button>
        </div>
      </div>
    `,document.body.appendChild(o);let s=e=>{o.classList.remove(`app-dialog-backdrop--visible`),window.setTimeout(()=>{o.remove(),a(e)},200)},c=e=>{e.key===`Escape`&&(document.removeEventListener(`keydown`,c),s(!1))};o.querySelector(`[data-action="cancel"]`)?.addEventListener(`click`,()=>s(!1)),o.querySelector(`[data-action="confirm"]`)?.addEventListener(`click`,()=>s(!0)),o.addEventListener(`click`,e=>{e.target===o&&s(!1)}),document.addEventListener(`keydown`,c),window.requestAnimationFrame(()=>{o.classList.add(`app-dialog-backdrop--visible`),o.querySelector(`[data-action="confirm"]`)?.focus()})})}function kr(e){let t=Sr(e);return t.stages.length?`
    <div class="shipping-card">
      <div class="shipping-card-head">
        <div>
          <p class="shipping-card-label">Status do envio</p>
          <p class="shipping-card-status">${t.statusLabel}</p>
        </div>
        ${t.estimatedDelivery?`<div class="shipping-card-eta">
                <span>Previsão de entrega</span>
                <strong>${wr(t.estimatedDelivery)}</strong>
              </div>`:``}
      </div>

      <div class="shipping-progress" aria-hidden="true">
        <span class="shipping-progress-bar" style="width: ${t.progressPercent}%"></span>
      </div>

      <ol class="shipping-timeline">
        ${t.stages.map(e=>{let t=e.status===`pending`?`Previsto: ${wr(e.date)}`:wr(e.date);return`
          <li class="shipping-step shipping-step--${e.status}">
            <span class="shipping-step-marker" aria-hidden="true"></span>
            <div class="shipping-step-body">
              <div class="shipping-step-head">
                <strong>${e.label}</strong>
                <span>${t}</span>
              </div>
              <p>${e.description}</p>
            </div>
          </li>
        `}).join(``)}
      </ol>

      ${t.isDelivered?`<p class="shipping-footnote">Seu pedido foi entregue. Obrigado por comprar na Lovepee!</p>`:``}
    </div>
  `:`<p class="order-detail-muted">Status de envio indisponível para este pedido.</p>`}function Ar(e,{cancelLoading:t=!1,cancelError:n=``,allowCancel:r=!0,showCustomer:i=!1}={}){if(!e)return`
      <div class="orders-page">
        <button type="button" class="product-back" id="orderDetailBack" aria-label="Voltar">
          ← Voltar
        </button>
        <div class="orders-empty">
          <p class="orders-empty-error">Pedido não encontrado.</p>
        </div>
      </div>
    `;let a=yr(e.products),o=a.reduce((e,t)=>e+t.total,0),s=Cr(e.saleId),c=r&&Tr(e.saleId),l=Er(e.saleId);return`
    <div class="orders-page order-detail-page">
      <button type="button" class="product-back" id="orderDetailBack" aria-label="Voltar">
        ← Voltar
      </button>

      <div class="order-detail-head">
        <div>
          <p class="order-detail-label">Pedido</p>
          <h2 class="order-detail-id">${e.saleId}</h2>
          ${s?`<p class="order-detail-date">Realizado em ${s}</p>`:``}
          ${i&&e.username?`<p class="order-detail-date">Cliente: @${e.username}</p>`:``}
        </div>
        <span class="section-chip">${e.productCount} ${e.productCount===1?`item`:`itens`}</span>
      </div>

      <section class="order-detail-section">
        <h3>Itens do pedido</h3>
        <ul class="order-items-list">
          ${a.length?a.map(e=>`
            <li class="order-item-row">
              <div class="order-item-info">
                <span class="order-item-qty">${e.quantity}x</span>
                <div>
                  <strong>${e.name}</strong>
                  <span class="order-item-unit">${F(e.price)} cada</span>
                </div>
              </div>
              <span class="order-item-total">${F(e.total)}</span>
            </li>
          `).join(``):`<li class="order-item-row order-item-row--empty">${e.products||`Sem detalhes dos produtos`}</li>`}
        </ul>
        ${o>0?`<div class="order-detail-total">
                <span>Total pago</span>
                <strong>${F(o)}</strong>
              </div>`:``}
      </section>

      <section class="order-detail-section">
        <h3>Rastreamento</h3>
        ${kr(e.saleId)}
      </section>

      ${c?`
        <section class="order-detail-section order-cancel-section">
          <h3>Cancelamento</h3>
          <p class="order-cancel-note">
            Você pode cancelar este pedido e receber ${F(o)} de volta até
            <strong>${Cr(l?.getTime())}</strong>.
          </p>
          ${n?`<p class="order-cancel-error" role="alert">${n}</p>`:``}
          <button
            type="button"
            class="btn-cancel-order"
            id="cancelOrderBtn"
            ${t?`disabled`:``}
          >
            ${t?`Cancelando pedido…`:`Cancelar pedido e receber LC$ de volta`}
          </button>
        </section>
      `:``}
    </div>
  `}function jr(e,{showUsername:t=!1,actionPrefix:n=``}={}){return`
    <ul class="orders-list">
      ${[...e].reverse().map(e=>{let r=Cr(e.saleId),i=Sr(e.saleId);return`
        <li>
          <button
            type="button"
            class="orders-card orders-card--action"
            data-sale-id="${e.saleId}"
            ${n?`data-order-source="${n}"`:``}
            aria-label="Ver detalhes do pedido ${e.saleId}"
          >
            <div class="orders-card-head">
              <span class="orders-card-id">${e.saleId}</span>
              ${r?`<span class="orders-card-date">${r}</span>`:``}
            </div>
            ${t&&e.username?`<p class="orders-card-user">@${e.username}</p>`:``}
            <p class="orders-card-products">${e.products||`Sem detalhes dos produtos`}</p>
            <div class="orders-card-foot">
              <span class="orders-card-meta">${e.productCount} ${e.productCount===1?`item`:`itens`}</span>
              <span class="orders-card-shipping">${i.statusLabel}</span>
            </div>
          </button>
        </li>
      `}).join(``)}
    </ul>
  `}function Mr({purchases:e=[],loading:t=!1,error:n=``}={}){return t?`
      <section class="admin-purchases-panel">
        <div class="section-head">
          <h2>Controle de compras</h2>
        </div>
        <p class="orders-status">Carregando compras da planilha…</p>
      </section>
    `:n?`
      <section class="admin-purchases-panel">
        <div class="section-head">
          <h2>Controle de compras</h2>
        </div>
        <p class="orders-empty-error">${n}</p>
      </section>
    `:`
    <section class="admin-purchases-panel">
      <div class="section-head">
        <h2>Controle de compras</h2>
        <span class="section-chip">${e.length}</span>
      </div>
      <p class="admin-purchases-desc">
        Compras registradas na planilha por todos os usuários.
      </p>
      ${e.length?jr(e,{showUsername:!0,actionPrefix:`admin`}):`
        <div class="orders-empty admin-purchases-empty">
          <span class="orders-empty-icon">📦</span>
          <p>Nenhuma compra registrada na planilha ainda.</p>
        </div>
      `}
    </section>
  `}function Nr({purchases:e=[],loading:t=!1,error:n=``}={}){return t?`
      <div class="orders-page">
        <button type="button" class="product-back" id="ordersBack" aria-label="Voltar">
          ← Voltar
        </button>
        <p class="orders-status">Carregando seus pedidos…</p>
      </div>
    `:n?`
      <div class="orders-page">
        <button type="button" class="product-back" id="ordersBack" aria-label="Voltar">
          ← Voltar
        </button>
        <div class="orders-empty">
          <p class="orders-empty-error">${n}</p>
        </div>
      </div>
    `:e.length?`
    <div class="orders-page">
      <button type="button" class="product-back" id="ordersBack" aria-label="Voltar">
        ← Voltar
      </button>

      <div class="orders-head">
        <h2>Meus pedidos</h2>
        <span class="section-chip">${e.length}</span>
      </div>

      ${jr(e)}
    </div>
  `:`
      <div class="orders-page">
        <button type="button" class="product-back" id="ordersBack" aria-label="Voltar">
          ← Voltar
        </button>
        <div class="orders-empty">
          <span class="orders-empty-icon">📦</span>
          <h2>Nenhum pedido ainda</h2>
          <p>Quando você finalizar uma compra, ela aparece aqui.</p>
        </div>
      </div>
    `}function Pr(e,{adminLoading:t=!1,adminMessage:n=``,orderCount:r=0,adminPurchases:i=[],adminPurchasesLoading:a=!1,adminPurchasesError:o=``}={}){return`
    <div class="profile-page">
      <section class="profile-hero">
        <div class="profile-avatar">${e.name.charAt(0).toUpperCase()}</div>
        <div>
          <h2>${e.name}</h2>
          <p>@${e.username}</p>
        </div>
      </section>

      <section class="profile-stats">
        <div class="profile-stat">
          <span class="profile-stat-value" title="${I(e.lovecoins)}">${I(e.lovecoins)}</span>
          <span class="profile-stat-label">Saldo</span>
        </div>
        <button type="button" class="profile-stat profile-stat--action" id="openOrdersBtn" aria-label="Ver meus pedidos">
          <span class="profile-stat-value">${r}</span>
          <span class="profile-stat-label">Pedidos</span>
        </button>
      </section>

      ${e.isAdmin?`
        <section class="admin-panel">
          <div class="section-head">
            <h2>Painel admin</h2>
            <span class="section-chip">LC$</span>
          </div>
          <p class="admin-panel-desc">
            Somente <strong>dev01</strong> pode alterar o saldo LC$ de qualquer usuário cadastrado na planilha.
          </p>

          ${n?`<p class="admin-panel-feedback" role="status">${n}</p>`:``}

          <form id="adminLovecoinsForm" class="admin-form">
            <label class="field">
              <span>Login do usuário</span>
              <input
                type="text"
                name="username"
                placeholder="ex: maria"
                autocomplete="off"
                required
              />
            </label>
            <label class="field">
              <span>Saldo LC$</span>
              <input
                type="number"
                name="lovecoins"
                min="0"
                step="1"
                placeholder="0"
                required
              />
            </label>
            <button type="submit" class="btn-secondary" ${t?`disabled`:``}>
              ${t?`Salvando na planilha...`:`Atualizar saldo na planilha`}
            </button>
          </form>
        </section>

        ${Mr({purchases:i,loading:a,error:o})}
      `:``}

      <button type="button" class="btn-logout" id="logoutBtn">
        ${R.logout}
        Sair da conta
      </button>
    </div>
  `}function Fr(e,{onLogout:t,onUpdateLovecoins:n,onOpenOrders:r,onOpenOrder:i}){e.querySelector(`#logoutBtn`)?.addEventListener(`click`,t),e.querySelector(`#openOrdersBtn`)?.addEventListener(`click`,r),e.querySelectorAll(`[data-order-source="admin"][data-sale-id]`).forEach(e=>{e.addEventListener(`click`,()=>i(e.dataset.saleId,`admin`))});let a=e.querySelector(`#adminLovecoinsForm`);a?.addEventListener(`submit`,e=>{e.preventDefault();let t=new FormData(a);n({username:String(t.get(`username`)??``),lovecoins:Number(t.get(`lovecoins`))})})}function Ir(e,{onBack:t,onOpenOrder:n}){e.querySelector(`#ordersBack`)?.addEventListener(`click`,t),e.querySelectorAll(`[data-sale-id]`).forEach(e=>{e.addEventListener(`click`,()=>n(e.dataset.saleId))})}function Lr(e,{onBack:t,onCancelOrder:n}){e.querySelector(`#orderDetailBack`)?.addEventListener(`click`,t),e.querySelector(`#cancelOrderBtn`)?.addEventListener(`click`,async()=>{await Or({title:`Cancelar pedido?`,message:`Os LC$ serão devolvidos ao seu saldo e o pedido será removido.`,confirmLabel:`Sim, cancelar`,cancelLabel:`Voltar`,tone:`danger`})&&n()})}function Rr(e,{view:t=`list`,loading:n=!1}={}){let r=P(e.id),i=ge(e.id),a=i>0&&e.lovecoins>=i;return t===`checkout`?zr(e,r,i,a,n):`
    <div class="cart-page">
      <section class="cart-hero">
        <span class="cart-hero-icon">${R.cart}</span>
        <h1>Carrinho</h1>
        <p>${r.length?`${r.length} item(ns) prontos para compra`:`Seu carrinho está vazio.`}</p>
      </section>

      ${r.length?`
        <ul class="cart-list">
          ${r.map(e=>`
            <li class="cart-item">
              <div class="cart-item-thumb">
                <img src="${h(e.product.image)}" alt="${e.product.name}" loading="lazy" />
              </div>
              <div class="cart-item-body">
                <strong>${e.product.name}</strong>
                <span class="cart-item-meta">${e.quantity}x · ${F(e.product.price)}</span>
                <span class="cart-item-total">${F(e.lineTotal)}</span>
              </div>
              <button
                type="button"
                class="cart-item-remove"
                data-remove-id="${e.productId}"
                aria-label="Remover ${e.product.name}"
              >
                ✕
              </button>
            </li>
          `).join(``)}
        </ul>

        <section class="cart-summary">
          <div class="cart-summary-row">
            <span>Subtotal</span>
            <strong>${F(i)}</strong>
          </div>
          <div class="cart-summary-row cart-summary-row--muted">
            <span>Seu saldo</span>
            <span>${I(e.lovecoins)}</span>
          </div>
          <button type="button" class="btn-primary" id="goCheckoutBtn">
            Finalizar compra
          </button>
        </section>
      `:`
        <div class="products-empty">
          <span class="products-empty-icon">${R.cart}</span>
          <p>Adicione produtos da vitrine ao carrinho para comprar com LC$.</p>
        </div>
      `}
    </div>
  `}function zr(e,t,n,r,i){let a=e.lovecoins-n;return`
    <div class="cart-page cart-page--checkout">
      <button type="button" class="product-back" id="checkoutBack" aria-label="Voltar">
        ← Voltar ao carrinho
      </button>

      <section class="cart-hero">
        <h1>Pagamento</h1>
        <p>Revise seus itens e confirme a compra com LC$.</p>
      </section>

      <section class="checkout-list">
        <h2>Itens do pedido</h2>
        <ul class="cart-list cart-list--compact">
          ${t.map(e=>`
            <li class="cart-item cart-item--compact">
              <div class="cart-item-thumb">
                <img src="${h(e.product.image)}" alt="" loading="lazy" />
              </div>
              <div class="cart-item-body">
                <strong>${e.product.name}</strong>
                <span class="cart-item-meta">${e.quantity}x · ${F(e.product.price)}</span>
              </div>
              <span class="cart-item-total">${F(e.lineTotal)}</span>
            </li>
          `).join(``)}
        </ul>
      </section>

      <section class="checkout-summary">
        <div class="cart-summary-row">
          <span>Total</span>
          <strong class="checkout-total">${F(n)}</strong>
        </div>
        <div class="cart-summary-row cart-summary-row--muted">
          <span>Saldo atual</span>
          <span>${I(e.lovecoins)}</span>
        </div>
        <div class="cart-summary-row cart-summary-row--muted">
          <span>Saldo após compra</span>
          <span>${r?I(a):`—`}</span>
        </div>

        <button
          type="button"
          id="confirmPurchaseBtn"
          class="btn-buy ${r&&!i?``:`btn-buy--disabled`}"
          ${r&&!i?``:`disabled`}
        >
          ${i?`Processando…`:r?`Confirmar compra · ${F(n)}`:`LC$ insuficientes`}
        </button>

        <p class="product-detail-footnote">
          Ao confirmar, ${F(n)} serão debitados do seu saldo Lovepee.
        </p>
      </section>
    </div>
  `}function Br(e,{view:t=`list`,onRemove:n,onCheckout:r,onConfirmPurchase:i,onBackToCart:a}){if(t===`checkout`){e.querySelector(`#checkoutBack`)?.addEventListener(`click`,a),e.querySelector(`#confirmPurchaseBtn`)?.addEventListener(`click`,i);return}e.querySelectorAll(`[data-remove-id]`).forEach(e=>{e.addEventListener(`click`,()=>n(e.dataset.removeId))}),e.querySelector(`#goCheckoutBtn`)?.addEventListener(`click`,r)}function K(e){return String(e??``).replace(/&/g,`&amp;`).replace(/"/g,`&quot;`).replace(/</g,`&lt;`)}function Vr(e){return K(e)}function Hr(e,{loading:t=!1,error:n=``,editingWishId:r=null,formMode:i=`link`}={}){let a=k().filter(t=>t.createdBy===e.id),o=r?ee(r):null,s=!!o,c=i===`manual`?`manual`:`link`,l=c===`link`;return`
    <div class="wishes-page">
      <section class="wishes-hero">
        <span class="wishes-hero-icon">${R.heart}</span>
        <h1>Lista de desejos</h1>
        <p>Sugira produtos que você quer ver na Lovepee. Você pode colar um link ou cadastrar manualmente com nome e valor.</p>
      </section>

      <section class="wishes-form-card">
        <h2>${s?`Editar desejo`:`Novo desejo`}</h2>
        ${n?`<div class="login-error wishes-form-error" role="alert">${n}</div>`:``}
        <div class="wish-form-mode-switch" role="tablist" aria-label="Modo de cadastro do desejo">
          <button
            type="button"
            class="wish-mode-btn ${l?`wish-mode-btn--active`:``}"
            data-wish-mode="link"
            ${t?`disabled`:``}
          >
            Com link
          </button>
          <button
            type="button"
            class="wish-mode-btn ${l?``:`wish-mode-btn--active`}"
            data-wish-mode="manual"
            ${t?`disabled`:``}
          >
            Manual
          </button>
        </div>
        <form id="wishForm" class="wish-form" novalidate>
          <input type="hidden" name="wishId" value="${K(r??``)}" />
          <input type="hidden" name="mode" value="${c}" />
          ${l?`
            <label class="field">
              <span>Link do produto</span>
              <input
                type="url"
                name="link"
                placeholder="https://www.mercadolivre.com.br/..."
                value="${K(o?.link??``)}"
                ${t?`disabled`:``}
              />
            </label>
            <label class="field">
              <span>Nome do produto <small class="field-hint">(opcional — preenchido pelo link)</small></span>
              <input
                type="text"
                name="name"
                placeholder="Deixe em branco para buscar automaticamente"
                value="${K(o?.name??``)}"
                maxlength="120"
                ${t?`disabled`:``}
              />
            </label>
          `:`
            <label class="field">
              <span>Nome do produto</span>
              <input
                type="text"
                name="name"
                placeholder="Ex: Kit de maquiagem"
                value="${K(o?.name??``)}"
                maxlength="120"
                ${t?`disabled`:``}
              />
            </label>
            <label class="field">
              <span>Valor desejado (LC$)</span>
              <input
                type="number"
                name="value"
                min="1"
                step="1"
                inputmode="numeric"
                placeholder="Ex: 150"
                value="${K(o?.value??``)}"
                ${t?`disabled`:``}
              />
            </label>
          `}
          <div class="wish-form-actions">
            ${s?`<button type="button" class="btn-secondary" id="wishCancelEdit" ${t?`disabled`:``}>Cancelar</button>`:``}
            <button type="submit" class="btn-primary" ${t?`disabled`:``}>
              ${t?`Salvando…`:s?`Salvar alterações`:`Adicionar à vitrine`}
            </button>
          </div>
        </form>
      </section>

      <section class="wishes-list-section">
        <div class="section-head">
          <h2>Seus desejos</h2>
          <span class="section-chip">${a.length}</span>
        </div>

        ${a.length?`
          <ul class="wishes-list">
            ${a.map(e=>`
              <li class="wish-item ${r===e.id?`wish-item--editing`:``}">
                <div class="wish-item-thumb">
                  <img src="${h(e.image)}" alt="" loading="lazy" />
                </div>
                <div class="wish-item-body">
                  <strong>${Vr(e.name)}</strong>
                  ${e.link?`<a href="${K(e.link)}" target="_blank" rel="noopener noreferrer" class="wish-item-link">Ver link ↗</a>`:`<span class="wish-item-link">Sem link externo</span>`}
                  ${Number.isFinite(Number(e.value))&&Number(e.value)>0?`<span class="wish-item-meta">Valor sugerido: LC$ ${Math.floor(Number(e.value))}</span>`:``}
                  <span class="wish-item-meta">Por @${e.createdByUsername}</span>
                </div>
                <div class="wish-item-actions">
                  <div class="wish-item-action-row">
                    <button type="button" class="wish-item-edit" data-wish-id="${e.id}">
                      Editar
                    </button>
                    <button
                      type="button"
                      class="wish-item-delete"
                      data-wish-id="${e.id}"
                      aria-label="Apagar desejo"
                    >
                      ${R.trash}
                    </button>
                  </div>
                  <span class="wish-item-badge">Em breve</span>
                </div>
              </li>
            `).join(``)}
          </ul>
        `:`
          <div class="products-empty">
            <span class="products-empty-icon">♥</span>
            <p>Nenhum desejo cadastrado ainda. Seja a primeira a sugerir um produto!</p>
          </div>
        `}
      </section>
    </div>
  `}function Ur(e,{user:t,onSaveWish:n,onEditWish:r,onCancelEdit:i,onDeleteWish:a,onModeChange:o}){e.querySelectorAll(`[data-wish-mode]`).forEach(e=>{e.addEventListener(`click`,()=>{o?.(e.dataset.wishMode)})});let s=e.querySelector(`#wishForm`);s?.addEventListener(`submit`,e=>{e.preventDefault();let r=new FormData(s);n({wishId:String(r.get(`wishId`)??``).trim()||null,name:String(r.get(`name`)??``),link:String(r.get(`link`)??``),value:String(r.get(`value`)??``),mode:String(r.get(`mode`)??`link`),userId:t.id,username:t.username})}),e.querySelector(`#wishCancelEdit`)?.addEventListener(`click`,()=>{i()}),e.querySelectorAll(`.wish-item-edit`).forEach(e=>{e.addEventListener(`click`,()=>{r(e.dataset.wishId)})}),e.querySelectorAll(`.wish-item-delete`).forEach(e=>{e.addEventListener(`click`,async()=>{let t=e.dataset.wishId,n=ee(t);n&&await Or({title:`Apagar desejo?`,message:`"${n.name}" será removido da sua lista e da planilha.`,confirmLabel:`Sim, apagar`,cancelLabel:`Cancelar`,tone:`danger`})&&a?.(t)})})}var q=document.querySelector(`#app`),J={view:`login`,tab:`home`,productId:null,user:null,loginError:``,loginLoading:!1,adminLoading:!1,adminMessage:``,wishLoading:!1,wishError:``,editingWishId:null,wishFormMode:`link`,cartView:`list`,checkoutLoading:!1,orderCount:0,profileView:`main`,selectedOrderId:null,orders:[],ordersLoading:!1,ordersError:``,orderCancelLoading:!1,orderCancelError:``,orderDetailSource:`orders`,adminPurchases:[],adminPurchasesLoading:!1,adminPurchasesError:``,homeView:`main`,catalogMode:`available`,catalogPriceCap:`all`,catalogFilterOpen:!1,toast:``},Wr=null;function Y(){return!!J.user?.isAdmin}function Gr(){return J.selectedOrderId?J.orders.find(e=>e.saleId===J.selectedOrderId)??J.adminPurchases.find(e=>e.saleId===J.selectedOrderId)??null:null}function Kr(e,t){return!e||!t?!1:String(e.username||``).trim().toLowerCase()===t.username.toLowerCase()}function qr(){D();let e=Ce();e&&(J={...J,user:e,view:`app`,tab:`home`,loginError:``},Q(),di(),e.isAdmin&&Z()),X()}function X(){if(Wr?.(),Wr=null,q.innerHTML=``,J.view===`login`){q.innerHTML=sr({error:J.loginError,loading:J.loginLoading}),cr(q,Zr);return}let e=Jr();q.innerHTML=Ae({user:J.user,activeTab:J.productId?null:J.tab,cartCount:he(J.user.id),content:e}),je(q,{onNavigate:$r,onAdminLovecoins:J.user?.isAdmin?()=>$r(`profile`):null}),Xr(q),J.toast&&($(J.toast),J.toast=``)}function Jr(){if(J.productId){let e=pr(J.productId);return e?lr(e,J.user):fr()}return Yr()}function Yr(){switch(J.tab){case`home`:return J.homeView===`catalog`?Ue({mode:J.catalogMode,priceCap:J.catalogPriceCap,filterOpen:J.catalogFilterOpen}):ar();case`wishes`:return Hr(J.user,{loading:J.wishLoading,error:J.wishError,editingWishId:J.editingWishId,formMode:J.wishFormMode});case`cart`:return Rr(J.user,{view:J.cartView,loading:J.checkoutLoading});case`profile`:if(J.profileView===`order-detail`){let e=Gr();return Ar(e,{cancelLoading:J.orderCancelLoading,cancelError:J.orderCancelError,allowCancel:Kr(e,J.user),showCustomer:Y()&&!Kr(e,J.user)})}return J.profileView===`orders`?Nr({purchases:J.orders,loading:J.ordersLoading,error:J.ordersError}):Pr(J.user,{adminLoading:J.adminLoading,adminMessage:J.adminMessage,orderCount:J.orderCount,adminPurchases:J.adminPurchases,adminPurchasesLoading:J.adminPurchasesLoading,adminPurchasesError:J.adminPurchasesError});default:return ar()}}function Xr(e){let t=e.querySelector(`.app-main`);if(J.productId){let e=pr(J.productId);dr(t,{productId:J.productId,onBack:ai,onAddToCart:oi}),e||t.querySelector(`#productBack`)?.addEventListener(`click`,ai);return}J.tab===`home`&&(J.homeView===`catalog`?We(t,{onBack:ni,onFilterChange:ri,onFilterToggle:ii,onProductClick:ei}):Wr=or(t,{onProductClick:ei,onOpenCatalog:ti})??null),J.tab===`wishes`&&Ur(t,{user:J.user,formMode:J.wishFormMode,onSaveWish:wi,onEditWish:bi,onCancelEdit:xi,onModeChange:Si,onDeleteWish:Ci}),J.tab===`cart`&&Br(t,{view:J.cartView,onRemove:si,onCheckout:ci,onConfirmPurchase:ui,onBackToCart:li}),J.tab===`profile`&&(J.profileView===`order-detail`?Lr(t,{onBack:hi,onCancelOrder:gi}):J.profileView===`orders`?Ir(t,{onBack:pi,onOpenOrder:e=>mi(e,`orders`)}):Fr(t,{onLogout:Qr,onUpdateLovecoins:Ti,onOpenOrders:fi,onOpenOrder:mi}))}async function Zr({username:e,password:t}){J.loginLoading=!0,J.loginError=``,X();let n=await xe(e,t);if(J.loginLoading=!1,!n.ok){J.loginError=n.error,X();return}J={...J,user:n.user,view:`app`,tab:`home`,productId:null,loginError:``},Q(),di(),n.user.isAdmin&&Z(),X()}function Qr(){Se(),J.user&&ye(J.user.id),J={view:`login`,tab:`home`,productId:null,user:null,loginError:``,loginLoading:!1,adminLoading:!1,adminMessage:``,wishLoading:!1,wishError:``,editingWishId:null,wishFormMode:`link`,cartView:`list`,checkoutLoading:!1,orderCount:0,profileView:`main`,selectedOrderId:null,orders:[],ordersLoading:!1,ordersError:``,orderCancelLoading:!1,orderCancelError:``,orderDetailSource:`orders`,adminPurchases:[],adminPurchasesLoading:!1,adminPurchasesError:``,homeView:`main`,catalogMode:`available`,catalogPriceCap:`all`,catalogFilterOpen:!1,toast:``},X()}function $r(e){J.tab=e,J.productId=null,J.homeView=`main`,J.catalogFilterOpen=!1,J.profileView=`main`,J.selectedOrderId=null,J.orderDetailSource=`orders`,J.ordersError=``,J.orderCancelError=``,J.adminMessage=``,J.wishError=``,e!==`wishes`&&(J.editingWishId=null,J.wishFormMode=`link`),e!==`cart`&&(J.cartView=`list`),e===`wishes`&&Q(),e===`profile`&&(di(),Y()&&Z()),X()}function ei(e){J.productId=e,X()}function ti(e){J.homeView=`catalog`,J.catalogMode=e||`available`,J.catalogPriceCap=`all`,J.catalogFilterOpen=!1,X()}function ni(){J.homeView=`main`,J.catalogPriceCap=`all`,J.catalogFilterOpen=!1,X()}function ri(e){J.catalogPriceCap=e,J.catalogFilterOpen=!0,X()}function ii(e){typeof e==`boolean`?J.catalogFilterOpen=e:J.catalogFilterOpen=!J.catalogFilterOpen,X()}function ai(){J.productId=null,X()}function oi(e){let t=_e(J.user.id,e);if(!t.ok){$(t.error);return}J.toast=`Adicionado ao carrinho!`,X()}function si(e){ve(J.user.id,e),J.cartView===`checkout`&&P(J.user.id).length===0&&(J.cartView=`list`),X()}function ci(){if(!P(J.user.id).length){$(`Seu carrinho está vazio.`);return}J.cartView=`checkout`,X()}function li(){J.cartView=`list`,X()}async function ui(){let e=P(J.user.id);if(!e.length){$(`Seu carrinho está vazio.`),J.cartView=`list`,X();return}J.checkoutLoading=!0,X();let t=await Te(J.user,e);if(J.checkoutLoading=!1,!t.ok){t.partial&&t.lovecoins!=null&&(J.user={...J.user,lovecoins:t.lovecoins}),$(t.error),X();return}ye(J.user.id),J.user=t.user,J.orderCount+=1,J.orders=[],J.profileView=`main`,J.selectedOrderId=null,J.orderDetailSource=`orders`,Y()&&(J.adminPurchases=[],Z()),J.cartView=`list`,J.tab=`home`,J.productId=null,J.toast=`Compra confirmada! Pedido ${t.saleId} registrado na planilha.`,X()}async function di(){if(!J.user)return;let e=await a(J.user.username);e.ok&&(J.orders=e.purchases??[],J.orderCount=e.count??J.orders.length,J.tab===`profile`&&J.view===`app`&&X())}function fi(){J.profileView=`orders`,J.selectedOrderId=null,J.orderDetailSource=`orders`,J.ordersError=``,J.ordersLoading=!J.orders.length,X(),_i()}function pi(){J.profileView=`main`,J.selectedOrderId=null,J.ordersError=``,X()}function mi(e,t=`orders`){J.profileView=`order-detail`,J.selectedOrderId=e,J.orderDetailSource=t,J.orderCancelError=``,X()}function hi(){J.profileView=J.orderDetailSource===`admin`?`main`:`orders`,J.selectedOrderId=null,J.orderCancelError=``,X()}async function gi(){let e=J.selectedOrderId;if(!e||!J.user)return;J.orderCancelLoading=!0,J.orderCancelError=``,X();let t=await Ee(J.user,e);if(J.orderCancelLoading=!1,!t.ok){J.orderCancelError=t.error||`Não foi possível cancelar o pedido.`,X();return}J.user=t.user,J.orders=J.orders.filter(t=>t.saleId!==e),J.orderCount=J.orders.length,Y()&&(J.adminPurchases=J.adminPurchases.filter(t=>t.saleId!==e),Z()),J.profileView=`orders`,J.selectedOrderId=null,J.orderDetailSource=`orders`,J.orderCancelError=``,J.toast=`${F(t.refunded)} devolvidos ao seu saldo. Pedido cancelado.`,X()}async function _i(){if(!J.user)return;J.orders.length>0||(J.ordersLoading=!0,J.ordersError=``,J.tab===`profile`&&J.profileView===`orders`&&X());let e=await a(J.user.username);if(J.ordersLoading=!1,!e.ok){J.ordersError=e.error||`Não foi possível carregar seus pedidos.`,J.tab===`profile`&&J.profileView===`orders`&&X();return}J.orders=e.purchases??[],J.orderCount=e.count??J.orders.length,J.tab===`profile`&&J.profileView===`orders`&&X()}async function Z(){if(!Y())return;J.adminPurchasesLoading=!0,J.adminPurchasesError=``,J.tab===`profile`&&J.profileView===`main`&&X();let e=await o(J.user.username);if(J.adminPurchasesLoading=!1,!e.ok){J.adminPurchasesError=e.error||`Não foi possível carregar as compras da planilha.`,J.tab===`profile`&&J.profileView===`main`&&X();return}J.adminPurchases=e.purchases??[],J.tab===`profile`&&J.profileView===`main`&&X()}async function Q(){let e=await f(``);e.ok&&Array.isArray(e.wishes)&&(ie(e.wishes),J.view===`app`&&X())}async function vi(e,t=null){let n=e.mode===`manual`?`manual`:`link`,r=e.link.trim(),i=e.name.trim(),a=String(e.value??``).trim(),o=Math.max(0,Math.floor(Number(t?.value)||0)),s=o;if(n===`manual`){let e=a.length>0,n=e?Math.floor(Number(a)):NaN;if(s=e?n:o,e&&(!Number.isFinite(n)||n<=0))return{ok:!1,error:`Informe um valor válido em LC$ (maior que zero).`};if(!i)return{ok:!1,error:`Sem link, informe o nome do produto.`};if(!Number.isFinite(s)||s<=0)return{ok:!1,error:`Sem link, informe também o valor desejado em LC$.`};let r=await l(i,`Desejos`);return{ok:!0,name:i,link:``,image:r.ok?r.image||t?.image||``:t?.image||``,value:s}}if(!r)return{ok:!1,error:`Informe o link do produto ou escolha o modo Manual.`};if(!(!t||t.link!==r||!i)&&t)return{ok:!0,name:i||t.name,link:r,image:t.image||``,value:0};let u=await c(r);if(!u.ok)return i?{ok:!0,name:i,link:r,image:t?.image||``,value:0}:u;let d=i||u.name||t?.name||``;return d?{ok:!0,name:d,link:r,image:u.image||t?.image||``,value:0}:{ok:!1,error:`Não encontramos o nome do produto. Informe manualmente.`}}async function yi(e,t){return u({id:e.id,name:e.name,link:e.link,image:e.image||``,value:e.value||0,username:t})}function bi(e){let t=ee(e);J.editingWishId=e,J.wishFormMode=t?.link?`link`:`manual`,J.wishError=``,X(),document.querySelector(`.wishes-form-card`)?.scrollIntoView({behavior:`smooth`,block:`start`})}function xi(){J.editingWishId=null,J.wishFormMode=`link`,J.wishError=``,X()}function Si(e){J.wishFormMode=e===`manual`?`manual`:`link`,J.wishError=``,X()}async function Ci(e){J.wishLoading=!0,J.wishError=``,X();let t=se(e,J.user.id);if(!t.ok){J.wishLoading=!1,J.wishError=t.error,X();return}let n=await d(e,J.user.username);if(J.wishLoading=!1,!n.ok){await Q(),J.wishError=n.error||`Não foi possível apagar o desejo na planilha.`,X();return}J.editingWishId===e&&(J.editingWishId=null),J.wishError=``,J.toast=`Desejo apagado.`,X()}async function wi(e){J.wishLoading=!0,J.wishError=``,X();let t=await vi(e,e.wishId?ee(e.wishId):null);if(!t.ok){J.wishLoading=!1,J.wishError=t.error||`Não foi possível salvar o desejo.`,X();return}let n=null;if(e.wishId){let r=oe(e.wishId,{name:t.name,link:t.link,image:t.image,value:t.value},e.userId);if(!r.ok){J.wishLoading=!1,J.wishError=r.error,X();return}n=r.wish}else{let r=ae({name:t.name,link:t.link,image:t.image,value:t.value,userId:e.userId,username:e.username});if(!r.ok){J.wishLoading=!1,J.wishError=r.error,X();return}n=r.wish}let r=await yi(n,e.username);if(J.wishLoading=!1,!r.ok){J.wishError=r.error||`Desejo salvo localmente, mas não foi possível gravar na planilha.`,X();return}await Q(),J.editingWishId=null,J.wishFormMode=`link`,J.wishError=``,J.toast=e.wishId?`Desejo atualizado na planilha!`:`Desejo adicionado à planilha!`,X()}async function Ti({username:e,lovecoins:t}){J.adminLoading=!0,J.adminMessage=``,X();let n=await we(e,t,J.user);if(J.adminLoading=!1,!n.ok){J.adminMessage=n.error,X();return}n.user.username===J.user.username&&(J.user={...J.user,lovecoins:n.user.lovecoins}),J.adminMessage=`Saldo de @${n.user.username} atualizado para ${n.user.lovecoins} LC$ na planilha.`,J.toast=`Planilha atualizada com sucesso.`,X()}function $(e){document.querySelector(`.app-toast`)?.remove();let t=document.createElement(`div`);t.className=`app-toast`,t.textContent=e,document.body.appendChild(t),window.setTimeout(()=>t.classList.add(`app-toast--visible`),10),window.setTimeout(()=>{t.classList.remove(`app-toast--visible`),window.setTimeout(()=>t.remove(),300)},2800)}qr();