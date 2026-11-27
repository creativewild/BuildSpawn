# Buildspawn release notes

What each version of Buildspawn added, from 1.0 to 1.4.

Installing a newer version over an older one always keeps your settings and data. See Backups and upgrades before you upgrade.

| Version | Build | Main theme |
|---|---|---|
| 1.4 | 2.589-buildspawn.13 | Agents page, telemetry on by default, pool icons and the Pool Scheduler, agents with Java included |
| 1.2 | 2.589-buildspawn.9 | The visual editor, parallel blocks, resume and retry, one Parameters tab, the terminal program |
| 1.1 | 2.589-buildspawn.8 | New look, the build console with blocks and times, Linux and macOS packages |
| 1.0 | 2.589-buildspawn.5 to .7 | The first release: projects, build configurations, Perforce, agents, Windows setup |

## 1.4

Build 2.589-buildspawn.13. Install it over 1.2 or the 1.3 release candidates.

### Agents page

- **One list of agents.** Online and offline agents are in one list, with All / Online / Offline, pool and platform filters, search, **Warnings only**, sorting and paging. The filters are kept in the address, so you can share a link to a filtered list.
- **Live columns** for CPU, memory, disk, GPU, network, pressure and freshness, coloured by your thresholds.
- **Expanded rows** show each busy executor's build: number, time, progress against the estimate, the current step and a stop button.
- **A row menu** with Mark offline, Bring back online, Reconnect, Show connection log, Move to pool and Delete. Mark offline, Bring back online and Move to pool can be undone.
- **Unauthorized** agents show only when some are waiting. Self-registration and rejected agents moved under **Install agents › Agent registration**.

### Telemetry

- On by default. Every agent is sampled every 30 seconds, and every 2 seconds while someone watches its Telemetry tab.
- History for 15 minutes, 1 hour, 6 hours and 24 hours on each agent's Telemetry tab, with Live and Pause.
- Settings live under **Agents › Configure monitors**. Each agent can opt out with **Collect telemetry from this agent**.

### Pools and the Pool Scheduler

- Each pool can have an icon and a colour. They show in the Agents sidebar, the Pools tab, the pool page and the move dialog.
- In the sidebar, pools open to show their agents as idle, busy or offline.
- The **Pool Scheduler** moves agents between pools: by hand with Undo, on a weekly schedule, or with priority rules that borrow idle agents from lower-priority pools and give them back. It has Pause and an activity log.
- Renaming or deleting a pool or an agent updates the scheduler's rules.

### Other changes

- **Documentation links** on build configurations and projects, shown on a Documentation tab.
- **Agent downloads include Java 21:** Windows x64, Linux x64 and ARM, macOS Apple silicon and Intel. An agent machine needs nothing installed first.
- The theme switch in the top bar is a plain Light / Dark toggle.
- Java 21.0.13.1 comes with every server package and agent download.
- **Windows:** the app (`Buildspawn.exe`) is back next to the terminal program (`bin\buildspawn.exe`). The app shows the product version.
- The recommended Java options now include `--enable-native-access=ALL-UNNAMED`. Existing settings files keep their own options. See Settings files.

The server file is larger than before, about 450 MB, because it carries Java for the five agent platforms.

## 1.2

Build 2.589-buildspawn.9.

### The visual editor

- A build configuration's steps are drawn as a graph you can edit: canvas, palette, wiring, undo, keyboard shortcuts and save. It is read only for people who can't edit.
- One **build configuration block** holds the triggers, roots and settings. Parameters are a group wired into it, and each parameter lists the steps that use it.
- A large properties dialog for each node, and a side panel that can stay open.
- **Per-step overrides:** a step can run on another machine and override environment values.
- **Run view** draws the latest or any chosen build over the graph, with live status.

### Builds and steps

- **Parallel blocks:** steps run side by side, on this machine or on others.
- **Resume and retry:** resume a failed build from a step, or retry a step when it fails.
- Wipe out workspace runs in the background with live progress.
- The build console stays quick while a build streams long output.

### Parameters and settings

- **One Parameters tab** for configuration, `env.` and `system.` parameters. The time limit moved to the **Build time** card under Failure conditions.
- `%NAME%` works in batch and shell steps too.
- Every setting has its own place in the settings homes, for build configurations and for projects.
- Projects can have a coloured icon. Favourite colours are shared with the team.

### Top bar

- **Manage** is now called **Settings**.
- **My changes** moved into the account menu.
- A theme switch where the bell was. Warnings for administrators show as a count on Settings.
- A waiting build can be moved to the front of the queue.

### Terminal program

- **The terminal program**, `buildspawn`, on every system. On a first run it opens a five-step **launch flow**: home folder, port and memory, service or portable, admin password, start.
- **Presets** save your launch answers, so you can set up the next machine the same way.
- The **live monitor** has seven views: Overview, Builds, Queue, Agents, Logs, Service and Settings. The Queue view says why each build waits.
- With an API token the monitor can stop builds, cancel queue items and take agents offline.
- The Service and Settings views install and control the service and edit the settings file. They ask for administrator rights only when needed.
- Every view has a text command for scripts: `status`, `builds`, `queue`, `agents`, `logs`, `service` and `set`, with `--json`. See Terminal program commands.
- Windows setup puts the terminal program on the PATH.

### Security

- A build can set parameters only with `##buildspawn[setParameter]` service messages. Only `env.NAME` reaches the environment, and names that change how programs start are blocked.
- People who may only view settings no longer see secret values.

### Fixes

- A build no longer hangs at the end when its artifacts are kept in remote storage.
- Moving or copying a step no longer turns inherited steps into copies.

## 1.1

Build 2.589-buildspawn.8.

### New look

- A top bar with icons and a dark project tree on the left.
- Every page redesigned in light and dark themes.
- The Dashboard can show a chosen time window.
- A project's health is the worst of the build configurations inside it.
- Build pages show the Perforce changelist or Git commit. **Re-run** is the main button, and **Keep** is a pin.
- Build configurations can take any icon from a searchable library of more than 5,000 icons and logos.

### The build console

- The log is a tree of **blocks**, one for each build step. Perforce sync and the list of changes get their own blocks. Failed blocks open; passed blocks start closed.
- A **time on every line**: show Clock, Elapsed or Off.
- Filters (All, Important only, Errors only), error and warning counts, and search with "N of M" matches. Press `E` and `W` to jump between errors and warnings.
- Links to single lines, live output with Follow, and long logs that load on demand.
- Scripts can make their own blocks with `::group::` and `::endgroup::`, and their own warnings and errors.

### Linux and macOS

- Packages for Debian and Ubuntu (.deb) and for RHEL, Rocky and Fedora (.rpm), with a systemd service.
- Portable folders for Linux x64 and ARM, and for macOS Apple silicon and Intel.
- Java is included in every package.

### Other changes

- Single sign-on with Microsoft Entra ID and SAML, build time limits and console timestamps now come built in.
- The Re-run dialog has one source row for each Git root.

## 1.0

The first release, shipped as three release candidates (builds 2.589-buildspawn.5 to .7).

### Main features

- **Projects** that pass their settings, steps and parameters down to the build configurations inside them. A build configuration can override or reset what it inherits.
- **Build configurations** set up on separate pages: General, Version control, Build steps, Triggers, Failure conditions, Parameters, Build features and Agent requirements.
- **Templates**, and several version control roots on one build configuration.
- **Runners** for Command Line, Python, PowerShell, Maven, Gradle, Ant, .NET, NUnit, Node.js, Docker and more, plus Unity and Unreal Engine steps.
- **Parallel tests and composite builds.**
- **Perforce** connections, streams, shelves, review status and a workbench page.
- **Agents** with install pages, requirements and telemetry.
- **Tools** with several versions per tool and a `%tool.id%` parameter.
- **HashiCorp Vault** secrets in parameters.
- **Versioned settings** stored in Git or Perforce.
- **Users, groups and project roles**, with pickers instead of typed names.
- Most plugins come built in, so a new server works without downloads.
- Windows setup with an optional Windows service, and a portable zip. Java is included.

### Added during the release candidates

- **Faster Perforce pages:** no page waits on the Perforce server. Lists of changes and shelves are stored and refreshed in the background.
- The **Run dialog** opens at once and loads changes and shelves in the background.
- A **script editor** for build steps, with colours, line numbers, search and `%` autocomplete of parameters.
- `%name%` references inside scripts, with safeguards for secrets.
- **Version control parameters** such as `%build.vcs.number%` and `%vcsroot.url%`.
- **Re-run** any finished build with the same sources and parameters, and **Re-run with changes** to pick other revisions or shelves.
- Tabs that don't fit move into a **More** menu.
