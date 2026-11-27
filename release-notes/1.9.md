# Buildspawn 1.9 (build 2.589-buildspawn.18)

## New in 1.9

### Trusted certificates
Trust your company's root CA without editing Java's `cacerts`. The certificates you add are kept when you upgrade.

- **Server:** Settings › Security › Trusted certificates (administrators only).
  - Paste Base64 certificates, or choose a `.pem`, `.crt`, `.cer`, `.der` or `.p7b` file.
  - Check the preview, then add. Each certificate shows its name, issuer, validity and SHA-256 fingerprint, with badges for root, intermediate, not a CA, expired and already trusted.
  - Private keys are refused and never kept.
  - Optional: "Also trust Windows' certificate store", for roots your IT team pushes with group policy.
  - "Send these to agents" (on by default) passes the certificates to every agent, which uses them after it restarts. A table shows which agents are up to date.
  - A notice appears 30 days before an added certificate expires.
  - Changes take effect after a restart; the page tells you when one is needed.
- **Windows launcher (`Buildspawn.exe`):** a new Certificates tab, with the same Add dialog and "Restart now".
- **Agent tray:** a new Certificates tab, with "From the server" and "Added on this machine".
- **Terminal program:** `buildspawn certs list | add <file> | remove <fingerprint or name> | windows-store on|off`.

### Build scripts
- **Set the build's name:** a step prints `##buildspawn[buildNumber '1.4.2-CL%build.vcs.number%']`. The last name printed wins.
- **Set the status text:** `##buildspawn[buildStatus text='{build.status.text}, uploaded to Steam branch qa']`. The text shows on the build page and in History. `status=` can only make the result worse, never better.
- **New build value:** `%build.triggeredBy.username%` (environment variable `BUILDSPAWN_TRIGGERED_BY`) holds the user who started the build. It follows chains and retries.
- **Reference:** docs › Reference › Messages from build scripts lists every log command and build value, with PowerShell examples.

### Look and feel
- **Resizable sidebar:** drag the right edge of the left sidebar, from 200 px to half the window.
  - Your width is remembered in your browser.
  - Double-click the edge to reset.
  - Keyboard: Tab to the edge, then use the arrow keys (Shift for bigger steps).
- **No more "NEW" badges** on pages.
- Spaces fixed in the paused/archived banner and in the project list.

## Fixes
- **Parameters table:** the columns now fit the card at every desktop size and Windows scaling, and with a wide sidebar. The Edit button stays inside the card, headings stay on one line, and long values end in "…" with the full text on hover.
- **Deleting a template:** Delete on a template's page works again; in 1.8 it showed "Page not found".
  - If build configurations use the template, they are detached first and each keeps a copy of the template's settings. The confirmation says how many.
  - If you may not change one of those build configurations, nothing changes.
- **Visual editor:** opening a node's properties no longer shows an empty dialog with no Close button. This bug was introduced in 1.8.
- **Sign-in and the log:**
  - **Fewer log warnings:** visits from people who aren't signed in no longer write a WARNING with a stack trace to the log. Real errors still do.
  - **Security page saves completely:** switching the sign-in method (for example to Entra ID) now saves the whole page. Before, the settings after the switch could be lost.
