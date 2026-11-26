# Buildspawn 1.8 (build 2.589-buildspawn.17)

## New in 1.8

### Store uploads
- **Steam.** These build steps are in the Store group:
  - **Steam upload:** app and depots, file mappings, file properties, the build description and the branch to set live.
  - **Steam: set branch live**
  - **Steam: check build**
  - **Steam: DRM wrap**
  - **Steam: workshop item**
  - **Install SteamCMD**

  The account is a **Steam build account** credential, with Steam Guard handled for you. The steps show a preview of the generated build script, and the log hides secrets. Setting a branch live needs its own permission, in Pipeline as well.
- **Epic Games Store.** These build steps:
  - **Epic Games Store upload**
  - **Epic: label binary**
  - **Epic: inspect binaries**
  - **Epic: copy binary**
  - **Epic: optimise patch**
  - **Epic: download binary**
  - **Epic: delete binary**
  - **Install BuildPatch Tool**

  The credential is an **Epic Games Store** credential. It has a Publishing setting for studios that use their own self-service publishing tools. Agents report where the BuildPatch Tool is, and a project can set its own BuildPatch Tool folder.

### Build chains
- **Values passed along a chain:**
  - `reverse.dep.<id>.<name>` sets a parameter on a build configuration that this one depends on.
  - `dep.<id>.<name>` reads a value from a dependency's build.
  - `%param%` in a value is filled in from the current build's own parameters, so you only enter a value once.
  - The chain pages show which values were sent and where they came from.
- **Fixes:**
  - A personal build of a dependency is never reused by a normal build.
  - Side builds, composite builds and Matrix builds pass values correctly.
  - The sender's build number is the real one.
- **Matrix blocks:**
  - The visual editor shows a Matrix block as one card with its axes.
  - An "include" row can set where it runs.
  - The console has a lane chip per combination.

### Projects tree
- **Your own order:** administrators can put projects and build configurations in any order, with a Reorder dialog and a reorder mode in the tree. Everyone sees the same order.
- **Separators:** administrators can add named separators to group items in the tree.

### Perforce
- **View mappings as a table:**
  - It is used in the Perforce root form and in manual workspaces.
  - Each line is a row with its mode (include, exclude, overlay), and rows can be reordered.
  - `#` comment lines are kept.
  - It has a depot browser and suggestions, a quick-add bar, and errors that say what is wrong.
  - A preview shows what each line maps; it can count the files on request.
  - Table and text stay in sync, and the saved text keeps the classic format.
  - Stream workspaces show the stream's view read-only; Limit View stays editable.

### Agents
- **WebSocket by default:** when the server's TCP agent port is off, agents connect over WebSocket by themselves. To turn this off, use `-noWebSocketFallback`.

### Fixes
- On the file-serving address (static files), a missing file shows a plain "Page not found" with no extra text, as before.
