!function(){var SERVER_SIDE_CONFIG={"privacy":{"disableTextCapture":false,"enableSecureCookies":true},"compressCookies":false,"salesforceAura":false,"supportedDomains":[],"replaySettings":{},"integrations":[{"name":"contentsquare","fn":function integration(dependencyContainer) {
  var HASHED_CS_PROJ_ID='89d5842b786f4';
  var SOURCE_NAME = 'contentsquare';

  function loadCsLiteScript() {
    window._uxa = window._uxa || [];
    var mt = document.createElement('script');
    mt.type = 'text/javascript';
    mt.async = true;
    mt.src = 'https://t.contentsquare.net/uxa/' + HASHED_CS_PROJ_ID + '.js';
    document.getElementsByTagName('head')[0].appendChild(mt);
  }

  function isCsLiteMetadataPresent() {
    var csMetadata;
    if (window._uxa && window._uxa.push) {
      csMetadata = window._uxa.push(['getSessionData']);
    }
    return csMetadata && csMetadata.projectId;
  }

  function csLiteLoadedTimer() {
    if (isCsLiteMetadataPresent()) {
      clearTimerAndLoad();
    }
  }

  function clearTimerAndLoad() {
    clearInterval(csLiteLoaded);
    dependencyContainer.markAdapterAsResolved(SOURCE_NAME);
  }

  try {
    if (isCsLiteMetadataPresent()) {
      dependencyContainer.markAdapterAsResolved(SOURCE_NAME);
      return;
    }

    if (HASHED_CS_PROJ_ID) {
      loadCsLiteScript();
    }

    var csLiteLoaded = setInterval(csLiteLoadedTimer, 100);
    setTimeout(clearTimerAndLoad, 3000);
    //eslint-disable-next-line no-empty
  } catch (e) {}
},"config":{"isBlocking":true,"blockDurationInMs":5000}}],"snapshots":{"click":{"[name=\"button\"]":{"a":{},"j":{"Uniqlo Reservation: Newsletter Sign-up":function execute() { return document.querySelector('#line_items_uniqlo_ticket_order_subscribe_to_newsletter').checked;},"Uniqlo Newsletter Signup on Checkout":function execute() { return document.querySelector("[name='line_items_uniqlo_ticket_order[subscribe_to_newsletter]']").value}},"f":{},"st":{},"ex":{}},"[data-loading-indicator-target=\"trigger\"]":{"a":{},"j":{"Payment Type When Submit Clicked":function execute() { return document.querySelector('input[name="payment_method"]:checked').value;}},"f":{},"st":{},"ex":{}},"*":{"a":{},"j":{"Recommendation Count":function execute() { return document.querySelector('[data-recommendations-badge-menu-trigger]').textContent;}},"f":{},"st":{},"ex":{},"t":{"Link Text":"this"}},".collection-grid-item.collection-grid__item":{"j":{},"f":{},"t":{"In-Grid Title":".collection-grid-item-tout__title"}},"[data-checkout-form-target=\"checkoutSubmitButton\"]":{"a":{},"j":{"Delivery Date":function execute() { return document.querySelector('input[name="line_items_gift_membership_purchase[gift_delivery_date]"]').value;}},"f":{},"st":{},"ex":{}},"#search-nav":{"j":{},"f":{},"t":{"Search Term - MoMA.org":"form[action=\"/search\"] input.header__search-form__input"}},"[data-checkout-form-submit-target=\"submitButton\"]":{"a":{},"j":{},"f":{},"st":{},"ex":{},"t":{"Checkout Button Label":"span.typography"}},"a[data-gtm=\"member home / carousel / cta\"]":{"j":{},"f":{},"s":{"CTA":"#carousel_gkpgnbkyvj > div.owl-stage-outer > div > div:nth-child(1) > a > div > div.\\@1024\\/layout\\/height\\:max\\:clear.\\@1024\\/layout\\/padding\\:bottom.\\@1024\\/layout\\/padding\\:page\\:0\\.5.\\@1024\\/layout\\/padding\\:top.\\@1024\\/layout\\/width.\\$color\\/background\\:white.color\\/background.layout\\/flex.layout\\/flex\\:column.layout\\/flex\\:grow.layout\\/height\\:max.layout\\/justify\\:between.layout\\/padding\\:cap\\:2.layout\\/width\\:100\\% > div.\\$typography\\/weight\\:bold.layout\\/margin\\:top\\:page\\:0\\.5 > a"}},"[href=\"https://membership.moma.org/tiers/*/checkouts/new?campaign=*\"]":{"j":{},"f":{},"t":{"Offer":"a._ar_hide_"}},"div.banner__item, a.cta-grid__grid-item, div.featured-collection, a.product-carousel__cell, div.gifts-hero-grid div a, a.gift-section-alt__product-item, a.gift-section-alt__cta, div.gifting-product-grid__category-list button, a.gifting-product-grid__product-item, a.product-carousel__cta-link, div #dm-93e3b0535ed3f6a7-bf25f578ab0595ed-1-smart-navigation div a":{"j":{},"f":{},"t":{"title":"h2.featured-collection__header, div.cta-grid__text, p.product-carousel__cell-title, p.featured-collection__cta-text.featured-collection__cta-text--bold, p.gift-section-alt__product-item-number, button.gifting-product-grid__category-item.btn.btn-link[type=\"button\"], p.gifting-product-grid__product-item-title, div.gifts-hero-grid__finder-copy--heading, div.gifts-hero-grid__gift-card-copy--heading, h2, div, span","description":"p.featured-collection__subheader","href":"a.href, href","image":"img.data-srcset","image widths":"img.data-widths","section":"h2.cta-grid__title, h1.product-carousel__heading, h3.featured-collections__header-text.featured-collections__header-text--gift-finder.desktop-font-size--small.mobile-font-size--small, div.gifting-product-grid__product-list-heading.desktop-only, h2.gift-section-alt__heading, div.gifting-product-grid__product-list-heading.desktop-only, h3, h2.wide-image-text__text-headline"}},"#fieldset_nav__next":{"j":{},"f":{},"t":{"Benefit Name":".copy_block__visible h1","Benefit Interest":".current_selected_radio"}},"[data-donation-target=\"submitButton\"]":{"a":{"Kiosk Donation Value":{"target":"form[data-donation-selected-value]","attribute":"data-donation-selected-value"}},"j":{},"f":{},"st":{},"ex":{},"t":{"Kiosk Button Label":"[data-donation-target=\"submitLabel\"]"}},"[data-action=\"survey#next\"]":{"j":{"Survey Slide":function execute() { return document.querySelector(".tour-min-height-px").dataset.surveySlideId;},"Survey Answer":function execute() { return document.querySelector(".tour-min-height-px").dataset.surveyAnswer;}},"f":{}},".collection-filters .vue-accordion.list-reset":{"j":{},"f":{},"t":{"Category":".collection-filters__accordion-title"}},"a":{"j":{"go.moma.org Link Title":function execute() { return event.target.closest('a').getAttribute('title');}},"f":{},"t":{"Explore Artwork":"div.mat"}},"[href=\"https://catalog.store.moma.org/moma-design-store-holiday-gift-guide-2024/page/1\"]":{"j":{},"f":{},"s":{"href":"a.href","image":"img.data-src"},"t":{"image-width":"img.data-widths"}},".js-megamenu-parent":{"j":{},"f":{},"t":{"Top Navigation - Category":"a.nav__list-item-link.js-megamenu-trigger"}},".js-megamenu-parent.nav__list-item .js-nav-sub-menu.nav__megamenu .container.nav__megamenu-inner .nav__megamenu--left .nav__megamenu-column-title [aria-label=\"For the Home Menu\"]":{"j":{},"f":{},"t":{"Category":"a.nav__list-item-link.js-megamenu-trigger","Subcategory 1":"a.nav__megamenu-column-title-link"}},".js-megamenu-parent.nav__list-item .js-nav-sub-menu.nav__megamenu .container.nav__megamenu-inner .nav__megamenu--left .nav__megamenu-list-item-link":{"j":{},"f":{},"t":{"Subcategory 1":"a.nav__megamenu-column-title-link","Category":"a.nav__list-item-link.js-megamenu-trigger"},"s":{"Subcategory 2":"a .nav__megamenu-list-item-link"}},".nav__megamenu-products-wrapper .nav__megamenu-product-wrapper":{"j":{},"f":{},"t":{"Product Title":"h5.nav__megamenu-product-title","Subcategory 1":"h5.nav__megamenu-products-title","Category":"a.nav__list-item-link.js-megamenu-trigger"}},"a.bag__underline-link.bag-item__remove, span.bag-item__remove-label, div.bag-item__qty.increment button, label.input-checkbox-label.gift__wrapping-checkbox-label, div.wk-product-card button.btn-link[type=\"submit\"]":{"j":{},"f":{"cart-quantity":"input[name=\"quantity\"]"},"t":{"action":"span.bag-item__remove-label, p.bag-item__gift-label, button.bag-item__qty-btn[type=\"button\"], span.wk-cta-label","section":"h1.wk-title, h1.bag__title"}},"button[data-details-section-title=\"Description\"], button[data-details-section-title=\"Details\"], button[data-details-section-title=\"Shipping & Returns\"], div.ir.pv-video__video-poster, button.pv-details__more-btn":{"j":{},"f":{},"t":{"action":"button.pv-details__nav-item-btn[type=\"submit\"], button.pv-details__more-btn[type=\"button\"], section"}},"div.ss__inline-banner.ss__inline-banner--grid":{"a":{},"j":{},"f":{},"st":{},"t":{"title":"[title]"}},".collection-filters__accordion-list a":{"a":{},"j":{},"f":{},"st":{},"ex":{},"t":{"Filter Category":"span.collection-filters__accordion-title","Filter Name 1":"a.collection-filters__related-collections-link","Filter Name 2":"label"}}},"pageview":{"/checkout/198/confirm*":{"j":{},"f":{},"s":{"total":"#checkout-order-subtotal","Ticket Date":"span[data-ng-if=\"cartItem.model.parsedDate\"]","Order Summary":"span[data-ng-if=\"cartItem.model.description\"]","Ticket Item row":"[data-ng-if=\"cartItem.model.description\"]"}},"/donations/*/thanks":{"a":{},"j":{"Donation Amount":function execute() { return document.querySelectorAll("dd")[3].textContent;},"Donation Fund":function execute() { return document.querySelectorAll("dd")[1].textContent;}},"f":{},"st":{},"ex":{}},"/kiosk*":{"a":{},"j":{"Kiosk Version":function execute() { return document.documentElement.getAttribute('data-bs-theme') === 'v2' ? 'V2' : 'V1'}},"f":{},"st":{},"ex":{}},"/tiers/*/checkouts/*/edit":{"j":{},"f":{},"s":{"Membership Checkout H1":"h1"}},"/*":{"a":{},"j":{"Page Load - Any Page":function execute() { return (function() {
  var interval = setInterval(sendTrack, 200);

  function sendTrack() {
    var domCompleteTime = -1;
    if (typeof window.performance === "object" && window.performance.getEntriesByType("navigation").length > 0) {
      var navEntries = window.performance.getEntriesByType("navigation");
      if (navEntries.length > 0) domCompleteTime = navEntries[0].domComplete || 0;
    }
    if (domCompleteTime > 0) {
      var loadTime = Math.round(domCompleteTime);
      heap.track('Page Load', {
        'Load Time': loadTime
      });
      clearInterval(interval);
    }
  }
})();},"backend_duration_ms":function execute() { return (window && window.MoMA && window.MoMA.backendStats && window.MoMA.backendStats.duration_ms) || 0},"backend_memory_usage":function execute() { return (window && window.MoMA && window.MoMA.backendStats && window.MoMA.backendStats.memory_usage) || 0},"backend_page_type":function execute() { return (window && window.MoMA && window.MoMA.backendStats && window.MoMA.backendStats.page_type) || "other"},"backend_cms_type":function execute() { return (window && window.MoMA && window.MoMA.backendStats && window.MoMA.backendStats.cms_type) || "rails"},"snapshot_test_prop":function execute() { return (function(){return "test";})()}},"f":{},"st":{},"ex":{}}},"change":{"#searchInput-headerSearchDesktop":{"j":{},"f":{},"t":{"Search Term - Store":".search__input._ar_hide_"}},"#calendar-happening-filter":{"a":{},"j":{},"f":{"Filter value":"select.layout/absolute.layout/bottom:0%.layout/left:0%.layout/margin:clear.layout/opacity:0%.layout/right:0%.layout/top:0%.layout/width:100%.typography[name=\"happening_filter\"]#calendar-happening-filter"},"st":{},"ex":{}}},"submit":{"form":{"j":{"Newsletter Opt-in":function execute() { return document.querySelector('#line_items_membership_newsletter_subscribe_primary').checked;},"Auto-Renew Opt-in":function execute() { return document.querySelector('#line_items_membership_auto_renew').checked;},"First Promo Code":function execute() { return document.getElementsByName("voucher[][code]")[0].value;},"Second Promo Code":function execute() { return document.getElementsByName("voucher[][code]")[1].value;}},"f":{}}}},"sdk":{"version":"5.3.18","isExperimentalVersion":false,"domain":"https://cdn.us.heap-api.com","plugins":[]},"ingestServer":"https://c.us.heap-api.com","appServer":"https://heapanalytics.com","csSettings":{"csProjectId":"127448","csHashedProjId":"89d5842b786f4","heapTagStatus":"heap_sideloads_cs"}};function t(e){var n;return-1===e.indexOf('core')&&e.push('core'),e.sort(function(e,n){return e<n?-1:n<e?1:0}).join('-')}function i(){var e=t(SERVER_SIDE_CONFIG.sdk.plugins||[]),n=heap&&heap.clientConfig&&heap.clientConfig.sdk||{},i=n.domain||SERVER_SIDE_CONFIG.sdk.domain,o=encodeURIComponent(n.version||SERVER_SIDE_CONFIG.sdk.version),r;return i+'/v5/'+(n.version||!SERVER_SIDE_CONFIG.sdk.isExperimentalVersion?'heapjs-static':'heapjs-experimental')+'/'+o+'/'+e+'/heap.js'}function e(){var e=i(),n=document.createElement('script');n.type='text/javascript',n.src=e,n.async=!0;var e=document.getElementsByTagName('script')[0];e.parentNode.insertBefore(n,e)}window.heap.serverConfig=SERVER_SIDE_CONFIG,window.heap.init(window.heap.envId,window.heap.clientConfig,window.heap.serverConfig),e()}();