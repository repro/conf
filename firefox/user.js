// GENERAL
// When Firefox starts: Show a blank page
user_pref("browser.startup.page", 0);
// Always ask me where to save files
user_pref("browser.download.useDownloadDir", false);

// TABS
// Always show the tab bar: no
user_pref("browser.tabs.autoHide", true);
// Warn me when closing multiple tabs: no
user_pref("browser.tabs.warnOnClose", false);

// CONTENT
// Enable JavaScript -> Advanced -> Move or resize existing windows: no
user_pref("dom.disable_window_move_resize", true);
// Enable JavaScript -> Advanced -> Disable or replace context menus: no
user_pref("dom.event.contextmenu.enabled", false);
// Choose your prefered language for displaying pages
user_pref("intl.accept_languages", "de-ch,de,en-us,en");

// PRIVACY
// Tell websites I do not want to be tracked
user_pref("privacy.donottrackheader.enabled", true);
// Remember my browsing history: no
user_pref("places.history.enabled", false);
// Remember download history: no
user_pref("browser.download.manager.retention", 0);
// Remember search and form history: no
user_pref("browser.formfill.enable", false);
// Accept cookies from sites: no
user_pref("network.cookie.cookieBehavior", 2);
// Clear history when Firefox closes
user_pref("privacy.sanitize.sanitizeOnShutdown", true);
// Clear history when Firefox closes -> Settings -> Cookies: no
user_pref("privacy.clearOnShutdown.cookies", false);
// Clear history when Firefox closes -> Settings -> Saved Passwords
user_pref("privacy.clearOnShutdown.passwords", true);
// Clear history when Firefox closes -> Settings -> Offline Website Data
user_pref("privacy.clearOnShutdown.offlineApps", true);
// When using the location bar, suggest: Nothing
user_pref("browser.urlbar.autocomplete.enabled", false);

// SECURITY
// Remember passwords for sites
user_pref("signon.rememberSignons", false);

// ADVANCED
// Warn me when websites try to redirect or reload the page
user_pref("accessibility.blockautorefresh", true);
// Check my spelling as I type: no
user_pref("layout.spellcheckDefault", 0);
// Always check to see if Firefox is the default browser on startup: no
user_pref("browser.shell.checkDefaultBrowser", false);

// OTHER
// image.animation_mode: normal, once, none
user_pref("image.animation_mode", "once");
// browser.startup.homepage_override.mstone
user_pref("browser.startup.homepage_override.mstone", "ignore");
