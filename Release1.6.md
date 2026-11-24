# Buildspawn 1.6 (build 2.589-buildspawn.15)

## New in 1.6

### Personal machines: run builds on your own computer
- **My machines** (your user menu): connect your own computer as a personal agent. Only you can build on it, and
  only your own builds run there. It is hidden from everyone else.
- **Run on my machine:** start a build of a job on one of your machines, either in its own copy of the workspace
  or in a folder you have already synced. A synced folder is never wiped or cleaned up. After the build, the
  shelved files are reverted, and only when the workspace has no other open files.
- **Share** a build from your machine with a link.
- **Builds are cancelled** when your machine goes offline for longer than the time set in Settings › Security ›
  Personal machines.
- **Credentials:** an administrator chooses which credentials personal machines may use; the rest are refused.
- **The Use personal machines permission** (Agent › UsePersonal) decides who can add one.

### Agent app and terminal view
- **Every agent download** has a terminal view of its status: connection, current build, logs, workspaces and
  machine details. You can pause the agent (it finishes the current build first) or stop it from there.
- **On Windows,** an agent also comes with a notification-area app showing the same status, with Pause, Stop,
  Open logs and the connection history.
- **Agents report** their state to the server every few seconds, so a paused or stopped agent shows why on its
  page and in the agents list.

### Forms
- **Every settings page uses the new form layout:** an "On this page" index, the fields in cards, a summary
  card, real switches and choices instead of raw option text, help shown when you focus a field, checks when
  you leave a field, and advanced settings folded away. This covers system settings, security, jobs and
  folders, agents, views, credentials, roles and permissions, Perforce, Vault, Unity, Unreal, telemetry and
  your user pages.
- **One Save / Apply / Cancel bar** on every page. It stays at the bottom of the window, is as wide as the page
  content, and never covers anything.
- **Job settings tabs** never hang on the loading placeholder. If a part takes long, it says so and offers
  Reload. Version Control and Post-build Actions open in under a second.

### Pages
- **Folders and the root project** show their pages as sub-tabs, like the job settings, instead of a side
  menu.
- **The Build Queue and Executors side cards are gone.** The Queue page and the Agents list show both.
- **"Add Credentials" no longer spins forever** when you click it before hovering.

### Permissions
- **Project-based security keeps its 1.5 layout:** one card per user or group, with what it grants as a
  summary and every permission grouped inside the card.
- **The Entra ID matrix now uses the same cards,** with an "Add from Entra ID" row for the people picker, or a
  name box with Add user / Add group when Graph search is off.

### Logs
- **No more warning in the log** when an agent disconnects while its output is still being closed.

## Fixed during testing
- A style rule on the agents list could not be read by older browsers and test tools; it is written so they
  can read it.
