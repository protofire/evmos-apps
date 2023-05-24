export const createHtmlContent = (
  withSetAction: boolean,
  scriptId?: string
) => {
  const acceptOnClick = withSetAction
    ? `(function(){setAction(true); var elem = document.querySelector('#iubenda-cs-banner'); elem.parentNode.removeChild(elem);})();`
    : `(function(){var elem = document.querySelector('#iubenda-cs-banner'); elem.parentNode.removeChild(elem); localStorage.setItem(disableTracker, 'false');})();`;

  const rejectOnClick = withSetAction
    ? `(function(){setAction(false); var elem = document.querySelector('#iubenda-cs-banner'); elem.parentNode.removeChild(elem);})();`
    : `(function(){var elem = document.querySelector('#iubenda-cs-banner'); elem.parentNode.removeChild(elem); localStorage.setItem(disableTracker, 'true');})();`;

  const id = scriptId ? scriptId : "iubenda-cs-banner";

  const content = ` <div id=${id} style="z-index:99999998 !important" class="iubenda-cs-default-floating iubenda-cs-center iubenda-cs-overlay iubenda-cs-slidein 
  iubenda-cs-visible" role="alertdialog" aria-labelledby="iubenda-cs-title" aria-describedby="iubenda-cs-paragraph">
    <div class="iubenda-cs-container iubenda-cs-themed">
      <div class="iubenda-cs-content" style="background-color: #FBF6EF !important;color: #010436 !important;font-size: 14px !important;">
        <div class="iubenda-cs-rationale">
          <button type="button" class="iubenda-cs-close-btn" tabindex="0" role="button" aria-pressed="false" style="display:none!important;">×</button>
          <div class="iubenda-banner-content iubenda-custom-content" role="document">
            <div id="iubenda-cs-title">We value your privacy!</div>
            <div id="iubenda-cs-paragraph">
              <p class="iub-p">We use cookies to enhance your browsing experience and analyze our traffic. By clicking 'Accept All', you agree to our 
              <a href="https://evmos.org/privacy-policy" class="iubenda-privacy-policy-link" target="_blank">privacy policy</a> and 
              <a href="https://evmos.org/cookie-policy" class="iubenda-cs-cookie-policy-lnk" target="_blank" rel="noopener">cookie policy</a>.</p>
            </div>
          </div>
          <div class="iubenda-cs-opt-group" style="color:#FBF6EF!important;">
            <div class="iubenda-cs-opt-group-consent">
              <button onclick="${acceptOnClick}" class="iubenda-cs-accept-btn iubenda-cs-btn-primary" tabindex="0" role="button" aria-pressed="false">Accept</button>
              <button onclick="${rejectOnClick}" class="iubenda-cs-reject-btn iub-prevent-consent iubenda-cs-btn-primary" tabindex="0" role="button" aria-pressed="false" >Reject</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
  if (scriptId) {
    return content;
  } else {
    return `
      <div id="iubenda-cs-banner-tos" style="z-index:99999998 !important;" class="iubenda-cs-default-floating iubenda-cs-center 
      iubenda-cs-overlay iubenda-cs-slidein iubenda-cs-visible" role="alertdialog" aria-labelledby="iubenda-cs-title" aria-describedby="iubenda-cs-paragraph">
       ${content}
      </div>
    `;
  }
};