const SiteSettings = {
  locale: "en-US",
  siteName: "Wootenblatz's VTC P2Pool",
  blockUrl: "https://vtc.tokenview.com/en/block/",
  tranactionUrl: "https://vtc.tokenview.com/en/tx/",
  addressUrl: "https://vtc.tokenview.com/en/address/"
}
$(function() {
  $("title").text(SiteSettings.siteName);
  $("h1#SettingsSiteName").html(SiteSettings.siteName);
});