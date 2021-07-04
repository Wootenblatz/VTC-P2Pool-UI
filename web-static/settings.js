const SiteSettings = {
  siteName: "Wootenblatz's VTC P2Pool",
  blockUrl: "https://www.coinexplorer.net/VTC/block/",
  tranactionUrl: "https://www.coinexplorer.net/VTC/transaction/",
  addressUrl: "https://www.coinexplorer.net/VTC/address/"
}
$(function() {
  $("title").text(SiteSettings.siteName);
  $("h1#SettingsSiteName").html(SiteSettings.siteName);
});