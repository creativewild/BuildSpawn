# Buildspawn 1.7 (build 2.589-buildspawn.16)

## New in 1.7

### Sign in
- **New sign-in page:** the logo on the left, the form on the right, the branch lines behind. Light and dark: it
  follows the chosen theme, or the system's setting when the default theme is in use.

### Words
- **A folder is now a "Project" and a job is a "Build configuration"** everywhere in Buildspawn's own pages and in
  the plugins we build ourselves. Only the words changed: links, saved settings and the API are the same.

### New Item
- **A new New Item page:** name with a live check, an **ID** made from the project's ID and the name,
  the project it goes in (with a picker), Start from (Empty, Copy of an existing item,
  Template), the type as cards, and a summary. "Create" stays off until everything is valid and says why.
- **Types:** Build configuration, Pipeline, Project, Build configuration template; Multibranch Pipeline under
  "More types". Multi-configuration project and Organization Folder are no longer offered; existing ones keep
  working.

### Build configurations
- **The first five tabs are always Overview, Change Log, History, Statistics, Settings,** whatever plugins a job
  has. Pipelines get the History tab too.
- **Matrix mode for Parallel blocks:** write the steps once, give the values (for example platform × config), exclude
  or add combinations, and every combination runs as its own side, using %platform% and %config%. Choose where
  each combination runs, how many run at once, a "Try first" combination and what happens when one fails. The build
  page shows a grid of the results with "Re-run" per combination; the console has a lane per combination.
- **New build step "Perforce operations"** (group Source control): Sync, Clean, Reconcile, Edit, Add, Delete,
  Revert, Submit, Shelve, Unshelve, Delete shelf, Tag build changelist, Integrate, Copy, Merge, Resolve, Label, or
  any other p4 command. It uses the project's Perforce root (server, credential, workspace), so no password is ever
  typed into a step or a script, or shown in the log. Results such as the new changelist number are handed to the
  next steps. Dangerous commands are refused unless an administrator allows them (Settings › System ›
  Perforce operations); the Administrator connection needs its own permission.

### Agents
- **Built-in agent parameters:** agent.name, agent.pool, agent.labels, agent.type, agent.owner,
  agent.executors, agent.hostname, agent.os.family, agent.os.version, agent.memory.total.mb, agent.version,
  agent.work.dir, agent.work.dir.free.mb, agent.home.dir, agent.temp.dir. Use them in a build configuration's agent
  requirements (for example agent.name matches WIN-BUILD-0[1-4], or agent.pool equals Unreal) and in steps as
  %agent.name%. Environment variables can be offered as env.NAME: an administrator lists them in Settings › System ›
  Agent environment variables (names that look like secrets are refused).

### Forms and pages
- **Lists in settings** (post-build actions, parameters, columns, filters…) are rows in one card that fold, with a
  summary line, drag to reorder and remove. "+ Add" opens a picker with search instead of a dropdown.
- **"Advanced…" is now "More options",** with how many options are set and which.
- **Few choices are buttons, long lists have search;** Perforce workspace options and Roles permissions have plain
  names instead of codes.
- **Simple pages in one card** (Move, Rename, Delete of a build, build configuration or project, Replay, Rebuild,
  Restart from stage, label settings, Edit description): what will happen, the fields, and the buttons in the bottom
  bar. Deleting a project asks you to type its name.
- **Who am I, Project relationship and label pages** have tabs instead of the old side menu.
- **View settings:** the list of build configurations has a search box, Select all / Clear and a count.
- **Error pages** (page not found, no access, something went wrong) in the normal layout with a way back. Technical
  details are folded and shown to administrators only.
