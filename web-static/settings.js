const SiteSettings = {
  locale: "en-US",
  siteName: "Wootenblatz's VTC P2Pool",
  blockUrl: "https://insight.vertcoin.org/block/",
  tranactionUrl: "https://insight.vertcoin.org/tx/",
  addressUrl: "https://insight.vertcoin.org/address/"
}
$(function() {
  $("title").text(SiteSettings.siteName);
  $("h1#SettingsSiteName").html(SiteSettings.siteName);
});