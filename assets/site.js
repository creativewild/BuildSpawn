/*
 * Buildspawn Guide: shared page script.
 *
 * Every guide page loads this file. It builds the top bar, the left navigation, the
 * "On this page" list, Previous / Next links, search, the theme toggle, copy buttons
 * on code blocks and the screenshot zoom. Pages only hold their own <main class="doc">.
 *
 * To add a page: add it to NAV below (href is the path under docs\ without ".html"),
 * create the file from docs\_template.html, then run `node build-index.mjs` in docs-site.
 */
(function () {
  'use strict';

  /* ---- The navigation: the one list every page uses. Order = Previous / Next order. ---- */
  // NAV-START
  const NAV = [
    { group: 'Get started', desc: 'Install the server, sign in and find your way around.', pages: [
      { title: 'What is Buildspawn', href: 'get-started/what-is-buildspawn' },
      { title: 'Install the server', href: 'get-started/install' },
      { title: 'First start and sign-in', href: 'get-started/first-start' },
      { title: 'The Windows app', href: 'get-started/windows-app' },
      { title: 'The terminal program', href: 'get-started/terminal-program' },
      { title: 'A tour of the interface', href: 'get-started/tour' },
    ] },
    { group: 'How-to guides', desc: 'Step-by-step recipes for common jobs, from first build to night shifts.', pages: [
      { title: 'Build an Unreal Engine game from Perforce', href: 'how-to/build-unreal-from-perforce' },
      { title: 'Build a Unity project from Git', href: 'how-to/build-unity-from-git' },
      { title: 'Build every Perforce submit', href: 'how-to/build-every-submit' },
      { title: 'Test a shelved change before you submit', href: 'how-to/check-shelf-before-submit' },
      { title: 'Share settings between build configurations', href: 'how-to/share-settings-with-a-project' },
      { title: 'Pass a version number between steps', href: 'how-to/pass-values-between-steps' },
      { title: 'Use a secret in a build', href: 'how-to/use-a-secret' },
      { title: 'Run steps in parallel on several agents', href: 'how-to/run-steps-in-parallel' },
      { title: 'Organise your build log with blocks', href: 'how-to/group-build-output' },
      { title: 'Add a Windows build agent', href: 'how-to/add-windows-agent' },
      { title: 'Add a Linux or macOS agent', href: 'how-to/add-linux-mac-agent' },
      { title: 'Create a pool for console devkits', href: 'how-to/set-up-console-pool' },
      { title: 'Move agents to another pool every evening', href: 'how-to/night-pool-schedule' },
      { title: 'Give release builds priority on agents', href: 'how-to/borrow-agents-for-release' },
      { title: 'Spot unhealthy agents', href: 'how-to/watch-agent-health' },
      { title: 'Find out why a build failed', href: 'how-to/find-why-build-failed' },
      { title: 'Re-run a failed build from the failing step', href: 'how-to/rerun-from-failed-step' },
      { title: 'Give a team access to its projects', href: 'how-to/give-team-access' },
      { title: 'Start builds from a script', href: 'how-to/script-with-api-token' },
      { title: 'Watch the server from a terminal', href: 'how-to/monitor-from-terminal' },
      { title: 'Back up and upgrade the server', href: 'how-to/back-up-and-upgrade' },
      { title: 'Upgrade agents', href: 'how-to/admin-upgrade-agents' },
      { title: 'Sign in with Entra ID', href: 'how-to/admin-sign-in-entra-id' },
      { title: 'Build Unity from Perforce and upload to a Steam branch', href: 'how-to/game-unity-perforce-steam' },
      { title: 'Publish a build to the Epic Games Store', href: 'how-to/game-publish-epic' },
      { title: 'Copy a stream (Main to Drop)', href: 'how-to/game-copy-stream' },
      { title: 'Clean a Perforce workspace', href: 'how-to/game-clean-workspace' },
      { title: 'Use P4 commands in a script with the P4 ticket', href: 'how-to/game-p4-ticket-script' },
      { title: 'Ask for a value when a build starts', href: 'how-to/params-ask-for-value' },
      { title: 'Pass a value from one step to the next', href: 'how-to/params-pass-value-between-steps' },
      { title: 'Run nightly at 02:00', href: 'how-to/params-nightly-0200' },
      { title: 'Run on every Perforce submit', href: 'how-to/params-run-on-perforce-submit' },
      { title: 'Run B when A succeeds', href: 'how-to/params-run-b-after-a' },
      { title: 'Set the build name from a script', href: 'how-to/params-set-build-name' },
      { title: 'Use a secret in PowerShell', href: 'how-to/params-secret-powershell' },
      { title: 'Organise projects for a game', href: 'how-to/projects-organise-game' },
      { title: 'Make a tab for your team', href: 'how-to/projects-team-view' },
      { title: 'Create a build configuration from a template', href: 'how-to/projects-from-template' },
      { title: 'Keep the last 30 builds', href: 'how-to/projects-keep-last-30-builds' },
      { title: 'Archive build output', href: 'how-to/projects-archive-build-output' },
      { title: 'Pause a whole project', href: 'how-to/projects-pause-project' },
      { title: 'Move a build configuration', href: 'how-to/projects-move-build-configuration' },
      { title: 'Make a Pipeline from a script', href: 'how-to/projects-pipeline-script' },
      { title: 'Run a build with different parameters', href: 'how-to/run-build-with-different-parameters' },
      { title: 'Compare two builds', href: 'how-to/run-compare-two-builds' },
      { title: 'Download artifacts', href: 'how-to/run-download-artifacts' },
      { title: 'Follow a build from the terminal', href: 'how-to/run-follow-build-from-terminal' },
      { title: 'Run a PowerShell script with parameters', href: 'how-to/steps-powershell-with-parameters' },
      { title: 'Build a .sln with MSBuild', href: 'how-to/steps-build-sln-with-msbuild' },
      { title: 'Run NUnit tests and see the results', href: 'how-to/steps-nunit-tests-with-results' },
      { title: 'Pack and publish a NuGet package', href: 'how-to/steps-pack-and-publish-nuget' },
      { title: 'Run steps in a Docker container', href: 'how-to/steps-run-in-docker-container' },
      { title: 'Run Python tests and see the results', href: 'how-to/steps-python-tests-with-results' },
      { title: 'Cook several platforms with a Matrix block', href: 'how-to/steps-cook-matrix' },
      { title: 'Retry a flaky step', href: 'how-to/steps-retry-flaky-step' },
      { title: 'Always clean up, and collect logs after a failure', href: 'how-to/steps-cleanup-after-failure' },
      { title: 'Trust your company’s root CA', href: 'how-to/admin-trust-root-ca' },
      { title: 'Use another build\'s artifacts', href: 'how-to/params-use-other-build-artifacts' },
    ] },
    { group: 'Projects and build configurations', desc: 'Organise your work in projects and set up what to build.', pages: [
      { title: 'Projects', href: 'projects/projects' },
      { title: 'Views', href: 'projects/views' },
      { title: 'Create a build configuration', href: 'projects/create-build-configuration' },
      { title: 'Settings homes', href: 'projects/settings-homes' },
      { title: 'Templates', href: 'projects/templates' },
      { title: 'Documentation links', href: 'projects/documentation-links' },
      { title: 'Tree order and separators', href: 'projects/project-tree-order' },
      { title: 'Pause and archive', href: 'projects/project-pause-archive' },
      { title: 'Project icons', href: 'projects/project-icons' },
      { title: 'IDs', href: 'projects/project-ids' },
      { title: 'Rename, move and delete', href: 'projects/project-move-delete' },
      { title: 'Copying settings', href: 'projects/project-copy-settings' },
      { title: 'Job settings', href: 'projects/job-settings' },
      { title: 'Project settings', href: 'projects/folder-settings' },
    ] },
    { group: 'Item types', desc: 'Every kind of item you can create from New Item, and the ones that are hidden.', pages: [
      { title: 'Item types: overview', href: 'projects/item-types' },
      { title: 'Build configuration', href: 'projects/type-build-configuration' },
      { title: 'Pipeline', href: 'projects/type-pipeline' },
      { title: 'Build configuration template', href: 'projects/type-template' },
      { title: 'Project', href: 'projects/type-project' },
      { title: 'Multibranch Pipeline', href: 'projects/type-multibranch' },
      { title: 'Multi-configuration project', href: 'projects/type-multi-configuration' },
      { title: 'Organization Folder', href: 'projects/type-organization-folder' },
    ] },
    { group: 'Build configuration settings', desc: 'Every settings tab of a build configuration, field by field.', pages: [
      { title: 'General', href: 'projects/bc-general' },
      { title: 'Version Control', href: 'projects/bc-version-control' },
      { title: 'Build Steps', href: 'projects/bc-build-steps' },
      { title: 'Triggers', href: 'projects/bc-triggers' },
      { title: 'Parameters', href: 'projects/bc-parameters' },
      { title: 'Dependencies', href: 'projects/bc-dependencies' },
      { title: 'Agent Requirements', href: 'projects/bc-agent-requirements' },
      { title: 'Build Features', href: 'projects/bc-build-features' },
      { title: 'Post-build Actions', href: 'projects/bc-post-build-actions' },
      { title: 'Failure Conditions', href: 'projects/bc-failure-conditions' },
      { title: 'Retention and discard old builds', href: 'projects/bc-retention' },
      { title: 'Workspace options', href: 'projects/bc-workspace-options' },
      { title: 'Other settings', href: 'projects/bc-other-settings' },
    ] },
    { group: 'Build steps', desc: 'The runners that do the work, and how steps fit together.', pages: [
      { title: 'Runners', href: 'build-steps/runners' },
      { title: 'The script editor', href: 'build-steps/script-editor' },
      { title: 'Parallel blocks and overrides', href: 'build-steps/parallel-blocks' },
      { title: 'Resume and retry', href: 'build-steps/resume-and-retry' },
      { title: 'The steps list and editor', href: 'build-steps/step-list' },
      { title: 'Step statuses and BUILD_STEP_STATUS', href: 'build-steps/step-statuses' },
      { title: 'Configured build step', href: 'build-steps/configured-build-step' },
      { title: 'Steps shared from a project or template', href: 'build-steps/shared-steps' },
      { title: 'Matrix mode for Parallel blocks', href: 'build-steps/matrix-mode' },
      { title: 'Fields every runner has', href: 'build-steps/common-step-fields' },
      { title: 'Command Line', href: 'build-steps/command-line' },
      { title: 'PowerShell', href: 'build-steps/powershell' },
      { title: 'Execute Windows batch command', href: 'build-steps/batch-file' },
      { title: 'Execute shell', href: 'build-steps/shell-script' },
      { title: 'C# Script', href: 'build-steps/csharp-script' },
      { title: 'Kotlin Script', href: 'build-steps/kotlin-script' },
      { title: 'Node.js', href: 'build-steps/nodejs' },
      { title: 'Python', href: 'build-steps/python' },
      { title: '.NET', href: 'build-steps/dotnet' },
      { title: 'MSBuild', href: 'build-steps/msbuild' },
      { title: 'Ant', href: 'build-steps/ant' },
      { title: 'Gradle', href: 'build-steps/gradle' },
      { title: 'Maven', href: 'build-steps/maven' },
      { title: 'Rake', href: 'build-steps/rake' },
      { title: 'Simple Build Tool', href: 'build-steps/sbt' },
      { title: 'Xcode Project', href: 'build-steps/xcode' },
      { title: 'NUnit', href: 'build-steps/nunit' },
      { title: 'VSTest', href: 'build-steps/vstest' },
      { title: 'MSTest', href: 'build-steps/mstest' },
      { title: 'NuGet Installer', href: 'build-steps/nuget-installer' },
      { title: 'NuGet Pack', href: 'build-steps/nuget-pack' },
      { title: 'NuGet Publish', href: 'build-steps/nuget-publish' },
      { title: 'FxCop', href: 'build-steps/fxcop' },
      { title: 'Code Inspections', href: 'build-steps/code-inspections' },
      { title: 'Inspections (ReSharper)', href: 'build-steps/resharper-inspections' },
      { title: 'Duplicates finder', href: 'build-steps/duplicates-finder' },
      { title: 'Duplicates (ReSharper)', href: 'build-steps/resharper-duplicates' },
      { title: 'dotCover', href: 'build-steps/dotcover' },
      { title: 'Docker', href: 'build-steps/docker' },
      { title: 'Docker Compose', href: 'build-steps/docker-compose' },
      { title: 'Container Deployer', href: 'build-steps/container-deployer' },
      { title: 'Run with timeout', href: 'build-steps/run-with-timeout' },
      { title: 'SSH Exec', href: 'build-steps/ssh-exec' },
      { title: 'SSH Upload', href: 'build-steps/ssh-upload' },
      { title: 'FTP Upload', href: 'build-steps/ftp-upload' },
      { title: 'SMB Upload', href: 'build-steps/smb-upload' },
    ] },
    { group: 'Game builds and stores', desc: 'Unity, Unreal Engine, Steam and the Epic Games Store.', pages: [
      { title: 'Overview', href: 'game-builds/overview' },
      { title: 'Unity step', href: 'game-builds/unity' },
      { title: 'Unity build settings', href: 'game-builds/unity-license' },
      { title: 'Unreal Engine step', href: 'game-builds/unreal' },
      { title: 'UGS metadata server badge', href: 'game-builds/ugs-badge' },
      { title: 'Steam upload: overview', href: 'game-builds/steam-overview' },
      { title: 'Steam build account', href: 'game-builds/steam-account' },
      { title: 'Install SteamCMD', href: 'game-builds/install-steamcmd' },
      { title: 'Steam upload', href: 'game-builds/steam-upload' },
      { title: 'Steam: DRM wrap', href: 'game-builds/steam-drm-wrap' },
      { title: 'Steam: check build', href: 'game-builds/steam-check-build' },
      { title: 'Steam: set branch live', href: 'game-builds/steam-set-live' },
      { title: 'Steam: workshop item', href: 'game-builds/steam-workshop' },
      { title: 'Epic Games Store', href: 'game-builds/epic-overview' },
      { title: 'Epic credential and tool setup', href: 'game-builds/epic-credentials' },
      { title: 'Install BuildPatch Tool', href: 'game-builds/install-buildpatch-tool' },
      { title: 'Epic Games Store upload', href: 'game-builds/epic-upload' },
      { title: 'Epic: optimise patch', href: 'game-builds/epic-optimise' },
      { title: 'Epic: label binary', href: 'game-builds/epic-label' },
      { title: 'Epic: inspect binaries', href: 'game-builds/epic-inspect' },
      { title: 'Epic: download binary', href: 'game-builds/epic-download' },
      { title: 'Epic: copy binary', href: 'game-builds/epic-copy' },
      { title: 'Epic: delete binary', href: 'game-builds/epic-delete' },
    ] },
    { group: 'Build features', desc: 'Extras that wrap the whole build: timestamps, credentials, labels and more.', pages: [
      { title: 'Timestamps in the build log', href: 'projects/feature-timestamps' },
      { title: 'Delete the workspace before the build', href: 'projects/feature-delete-workspace' },
      { title: 'Bind credentials to variables', href: 'projects/feature-credential-bindings' },
      { title: 'Parallel tests', href: 'projects/feature-parallel-tests' },
      { title: 'XML report processing', href: 'projects/feature-xml-report' },
      { title: 'Commit status publisher', href: 'projects/feature-commit-status' },
      { title: 'Notifications', href: 'projects/feature-notifications' },
      { title: 'VCS labeling', href: 'projects/feature-vcs-labeling' },
      { title: 'Unity build settings', href: 'projects/feature-unity' },
      { title: 'Send files or run commands over SSH before the build', href: 'projects/feature-ssh-before' },
      { title: 'Send files or run commands over SSH after the build', href: 'projects/feature-ssh-after' },
      { title: 'Project Properties', href: 'projects/feature-project-properties' },
      { title: 'Documentation', href: 'projects/feature-documentation' },
      { title: 'Terminate a build if it is stuck', href: 'projects/feature-build-timeout' },
    ] },
    { group: 'After the build', desc: 'Post-build actions: artifacts, test reports, notifications, labels and uploads.', pages: [
      { title: 'Overview', href: 'post-build/overview' },
      { title: 'Archive the artifacts', href: 'post-build/archive-artifacts' },
      { title: 'Publish JUnit test result report', href: 'post-build/test-report' },
      { title: 'Aggregate downstream test results', href: 'post-build/aggregate-tests' },
      { title: 'Build other build configurations', href: 'post-build/build-other' },
      { title: 'Record fingerprints of files to track usage', href: 'post-build/fingerprints' },
      { title: 'E-mail Notification', href: 'post-build/email' },
      { title: 'Git Publisher', href: 'post-build/git-publisher' },
      { title: 'Deploy war/ear to a container', href: 'post-build/deploy-container' },
      { title: 'Label in Perforce (VCS labeling)', href: 'post-build/perforce-label' },
      { title: 'Perforce: Label build', href: 'post-build/perforce-label-build' },
      { title: 'Perforce: Publish assets', href: 'post-build/perforce-publish' },
      { title: 'Perforce: Cleanup', href: 'post-build/perforce-cleanup' },
      { title: 'Perforce: ApproveImpl review', href: 'post-build/perforce-approve-review' },
      { title: 'UGS metadata server badge', href: 'post-build/ugs-badge' },
      { title: 'Send build artifacts over SSH', href: 'post-build/ssh' },
      { title: 'Send build artifacts over FTP', href: 'post-build/ftp' },
      { title: 'Send build artifacts to a Windows share', href: 'post-build/cifs' },
    ] },
    { group: 'The visual editor', desc: 'Draw a build as blocks and wires, then watch it run.', pages: [
      { title: 'Canvas and palette', href: 'visual-editor/canvas' },
      { title: 'The build configuration block', href: 'visual-editor/configuration-block' },
      { title: 'Run view', href: 'visual-editor/run-view' },
    ] },
    { group: 'Parameters and secrets', desc: 'Pass values to builds and keep passwords safe.', pages: [
      { title: 'Parameters', href: 'parameters/parameters' },
      { title: 'Secrets and Vault', href: 'parameters/secrets' },
      { title: 'Set parameters from a build', href: 'parameters/set-from-build' },
      { title: 'Passing parameters in a build chain', href: 'parameters/build-chains' },
      { title: 'Parameter with a value type', href: 'parameters/param-typed' },
      { title: 'String parameter', href: 'parameters/param-string' },
      { title: 'Multi-line string parameter', href: 'parameters/param-multiline' },
      { title: 'Boolean parameter', href: 'parameters/param-boolean' },
      { title: 'Choice parameter', href: 'parameters/param-choice' },
      { title: 'Password parameter', href: 'parameters/param-password' },
      { title: 'File parameter', href: 'parameters/param-file' },
      { title: 'Run parameter', href: 'parameters/param-run' },
      { title: 'Credentials parameter', href: 'parameters/param-credentials' },
      { title: 'Asked parameters (prompt)', href: 'parameters/param-prompt' },
      { title: 'Agent parameters', href: 'parameters/param-agent' },
      { title: 'Parameter references', href: 'parameters/param-references' },
      { title: 'Credentials', href: 'parameters/credentials' },
      { title: 'Snapshot and artifact dependencies', href: 'parameters/dependencies' },
    ] },
    { group: 'Version control', desc: 'Connect Git and Perforce and keep settings in your repository.', pages: [
      { title: 'Version control overview', href: 'version-control/overview' },
      { title: 'Perforce', href: 'version-control/perforce' },
      { title: 'Perforce connections', href: 'version-control/perforce-connections' },
      { title: 'Perforce roots', href: 'version-control/perforce-roots' },
      { title: 'Perforce Software', href: 'version-control/perforce-software' },
      { title: 'View Mappings', href: 'version-control/perforce-view-mappings' },
      { title: 'Perforce streams', href: 'version-control/perforce-streams' },
      { title: 'Shelves and personal builds', href: 'version-control/perforce-shelves' },
      { title: 'Polling and triggers', href: 'version-control/perforce-polling' },
      { title: 'Perforce variables', href: 'version-control/perforce-variables' },
      { title: 'Perforce operations', href: 'version-control/perforce-operations' },
      { title: 'Perforce root: unshelve', href: 'version-control/perforce-root-unshelve' },
      { title: 'Perforce: Unshelve', href: 'version-control/perforce-unshelve' },
      { title: 'Several roots', href: 'version-control/several-roots' },
      { title: 'Git', href: 'version-control/git' },
      { title: 'Version control parameters', href: 'version-control/vcs-parameters' },
      { title: 'Versioned settings', href: 'version-control/versioned-settings' },
    ] },
    { group: 'Running builds', desc: 'Start builds by hand or by trigger, and manage the queue.', pages: [
      { title: 'The Run dialog', href: 'running-builds/run-dialog' },
      { title: 'Re-run a build', href: 'running-builds/rerun' },
      { title: 'The queue', href: 'running-builds/queue' },
      { title: 'Parallel tests and composite builds', href: 'running-builds/parallel-and-composite' },
      { title: 'Triggers', href: 'running-builds/triggers' },
      { title: 'VCS trigger', href: 'running-builds/trigger-vcs' },
      { title: 'Schedule trigger', href: 'running-builds/trigger-schedule' },
      { title: 'Finish Build trigger', href: 'running-builds/trigger-finish-build' },
      { title: 'Retry build trigger', href: 'running-builds/trigger-retry' },
      { title: 'Perforce trigger (P4)', href: 'running-builds/trigger-p4' },
      { title: 'Perforce root trigger', href: 'running-builds/trigger-p4-root' },
      { title: 'Perforce shelve trigger', href: 'running-builds/trigger-p4-shelve' },
      { title: 'Remote trigger', href: 'running-builds/trigger-remote' },
      { title: 'Resume a build', href: 'running-builds/resume' },
      { title: 'Stop a build', href: 'running-builds/stop-a-build' },
      { title: 'Personal builds and shelves', href: 'running-builds/personal-builds' },
      { title: 'Shared builds', href: 'running-builds/shared-builds' },
      { title: 'Side builds', href: 'running-builds/side-builds' },
    ] },
    { group: 'Build results', desc: 'Read the build page, the console, changes, artifacts and tests.', pages: [
      { title: 'The build page', href: 'build-results/build-page' },
      { title: 'The build console', href: 'build-results/build-console' },
      { title: 'Changes, artifacts and tests', href: 'build-results/changes-artifacts-tests' },
      { title: 'The build name and status text', href: 'build-results/build-name-and-status' },
      { title: 'The Statistics tab', href: 'build-results/statistics' },
      { title: 'History', href: 'build-results/history' },
      { title: 'The project directory', href: 'build-results/project-directory' },
      { title: 'The Dashboard', href: 'build-results/dashboard-widgets' },
      { title: 'Atom feeds', href: 'build-results/atom-feeds' },
    ] },
    { group: 'Agents', desc: 'The machines that run your builds, grouped in pools.', pages: [
      { title: 'The Agents page', href: 'agents/agents-page' },
      { title: 'Install an agent', href: 'agents/install-agent' },
      { title: 'Telemetry', href: 'agents/telemetry' },
      { title: 'Pools', href: 'agents/pools' },
      { title: 'The Pool Scheduler', href: 'agents/pool-scheduler' },
      { title: 'Windows tray app', href: 'agents/windows-tray-app' },
      { title: 'Agent terminal program', href: 'agents/agent-terminal' },
      { title: 'Agent service scripts', href: 'agents/windows-service' },
      { title: 'Personal agents', href: 'agents/personal-agents' },
      { title: 'Agent settings', href: 'agents/agent-settings' },
      { title: 'Labels and agent requirements', href: 'agents/agent-labels-requirements' },
      { title: 'Builds at a time', href: 'agents/agent-executors' },
      { title: 'Connect an agent', href: 'agents/agent-connection' },
      { title: 'Clouds', href: 'agents/clouds' },
    ] },
    { group: 'Administration', desc: 'The Settings page: users, tools, connections and upkeep.', pages: [
      { title: 'Users and permissions', href: 'administration/users-and-permissions' },
      { title: 'Tools', href: 'administration/tools' },
      { title: 'Global connections and Vault', href: 'administration/global-connections' },
      { title: 'Dashboard', href: 'administration/dashboard' },
      { title: 'Appearance and themes', href: 'administration/appearance' },
      { title: 'Plugins and updates', href: 'administration/plugins' },
      { title: 'Backups and upgrades', href: 'administration/backups' },
      { title: 'Security realms', href: 'administration/security-realms' },
      { title: 'Entra ID sign-in', href: 'administration/entra-id' },
      { title: 'SAML sign-in', href: 'administration/saml' },
      { title: 'Authorization', href: 'administration/authorization' },
      { title: 'Roles', href: 'administration/roles' },
      { title: 'Users and groups', href: 'administration/users' },
      { title: 'Trusted certificates', href: 'administration/trusted-certificates' },
      { title: 'User settings', href: 'administration/user-settings' },
      { title: 'Security settings', href: 'administration/security-settings' },
      { title: 'Settings overview', href: 'administration/settings-overview' },
      { title: 'System settings', href: 'administration/system-settings' },
      { title: 'Management pages', href: 'administration/management-pages' },
      { title: 'Running the server', href: 'administration/running-the-server' },
      { title: 'The Windows app', href: 'administration/windows-launcher' },
      { title: 'Install on Linux and macOS', href: 'administration/linux-macos-install' },
      { title: 'The server terminal program', href: 'administration/server-terminal' },
    ] },
    { group: 'Reference', desc: 'Commands, settings files, tokens, messages and release notes.', pages: [
      { title: 'Terminal program commands', href: 'reference/terminal-commands' },
      { title: 'Settings files', href: 'reference/settings-files' },
      { title: 'API tokens', href: 'reference/api-tokens' },
      { title: 'Service messages', href: 'reference/service-messages' },
      { title: 'Release notes', href: 'reference/release-notes' },
      { title: 'Build values', href: 'reference/build-values' },
    ] },
  ];
  // NAV-END

  const html = document.documentElement;
  const body = document.body;
  const ROOT = html.getAttribute('data-root') || '';
  const PAGE = body.getAttribute('data-page') || '';
  const docUrl = (href) => ROOT + 'docs/' + href + '.html';
  const FLAT = [];
  NAV.forEach((g) => g.pages.forEach((p) => FLAT.push(Object.assign({ group: g.group }, p))));

  const el = (tag, attrs, children) => {
    const n = document.createElement(tag);
    if (attrs) for (const k in attrs) {
      if (k === 'class') n.className = attrs[k];
      else if (k === 'html') n.innerHTML = attrs[k];
      else if (k === 'text') n.textContent = attrs[k];
      else n.setAttribute(k, attrs[k]);
    }
    (children || []).forEach((c) => c && n.appendChild(typeof c === 'string' ? document.createTextNode(c) : c));
    return n;
  };
  const store = {
    get(k) { try { return localStorage.getItem(k); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(k, v); } catch (e) { /* storage blocked */ } },
  };

  /* ---- Theme ---- */
  const ICON_SUN = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="12" cy="12" r="4.5"/><path d="M12 2v2.5M12 19.5V22M2 12h2.5M19.5 12H22M4.9 4.9l1.8 1.8M17.3 17.3l1.8 1.8M4.9 19.1l1.8-1.8M17.3 6.7l1.8-1.8"/></svg>';
  const ICON_MOON = '<svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.5 14.5A8.5 8.5 0 0 1 9.5 3.5a8.5 8.5 0 1 0 11 11z"/></svg>';
  const ICON_SEARCH = '<svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"><circle cx="11" cy="11" r="7"/><path d="M20 20l-3.5-3.5"/></svg>';
  const ICON_CHEVRON = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 6l6 6-6 6"/></svg>';
  const ICON_COPY = '<svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="12" height="12" rx="2"/><path d="M5 15V5a2 2 0 0 1 2-2h10"/></svg>';

  function applyTheme(t) {
    html.setAttribute('data-theme', t);
    const b = document.querySelector('.theme-toggle');
    if (b) {
      b.innerHTML = t === 'dark' ? ICON_SUN : ICON_MOON;
      b.title = t === 'dark' ? 'Switch to light theme' : 'Switch to dark theme';
    }
  }
  // ?theme=dark or ?theme=light in the URL wins for this visit (handy for screenshots).
  const urlTheme = (location.search.match(/[?&]theme=(light|dark)/) || [])[1];
  applyTheme(urlTheme || (store.get('bs-theme') === 'dark' ? 'dark' : 'light'));

  /* ---- Top bar ---- */
  const isGuide = PAGE !== '';
  const topbar = el('header', { class: 'topbar' }, [
    el('a', { class: 'brand', href: ROOT + 'index.html', title: 'Buildspawn home' }, [
      el('img', { src: ROOT + 'assets/logo.svg', alt: 'Buildspawn', class: 'brand-logo' }),
    ]),
    el('nav', { class: 'toplinks' }, [
      el('a', { href: docUrl('index'), class: isGuide ? 'active' : '', text: 'Guide' }),
      el('a', { href: ROOT + 'index.html#download', text: 'Download' }),
    ]),
    el('div', { class: 'topbar-spacer' }),
    el('div', { class: 'search' }, [
      el('span', { class: 'search-icon', html: ICON_SEARCH }),
      el('input', { type: 'search', placeholder: 'Search the guide', 'aria-label': 'Search the guide', autocomplete: 'off', spellcheck: 'false' }),
      el('kbd', { class: 'search-key', text: '/' }),
      el('div', { class: 'search-results', role: 'listbox' }),
    ]),
    el('button', { class: 'theme-toggle', type: 'button', 'aria-label': 'Toggle theme' }),
  ]);
  body.insertBefore(topbar, body.firstChild);
  applyTheme(html.getAttribute('data-theme'));
  topbar.querySelector('.theme-toggle').addEventListener('click', () => {
    const t = html.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
    store.set('bs-theme', t);
    applyTheme(t);
  });

  /* ---- Layout: sidebar | content | on this page ---- */
  const main = document.querySelector('main.doc');
  if (main) {
    const layout = el('div', { class: 'layout' });
    const sidebar = el('aside', { class: 'sidebar', 'aria-label': 'Guide navigation' });
    const content = el('div', { class: 'content' });
    const toc = el('aside', { class: 'toc', 'aria-label': 'On this page' });
    main.parentNode.insertBefore(layout, main);
    layout.appendChild(sidebar);
    layout.appendChild(content);
    layout.appendChild(toc);
    content.appendChild(main);

    // Sidebar
    const navRoot = el('nav', { class: 'sidenav' });
    navRoot.appendChild(el('a', { class: 'sidenav-home' + (PAGE === 'index' ? ' current' : ''), href: docUrl('index'), text: 'Guide home' }));
    NAV.forEach((g) => {
      const hasCurrent = g.pages.some((p) => p.href === PAGE);
      const grp = el('div', { class: 'navgroup' + (hasCurrent ? ' open' : '') });
      const btn = el('button', { type: 'button', class: 'navgroup-title', 'aria-expanded': String(hasCurrent) }, [
        el('span', { class: 'chev', html: ICON_CHEVRON }), el('span', { text: g.group }),
      ]);
      btn.addEventListener('click', () => {
        const open = grp.classList.toggle('open');
        btn.setAttribute('aria-expanded', String(open));
      });
      const ul = el('ul');
      g.pages.forEach((p) => {
        const a = el('a', { href: docUrl(p.href), text: p.title });
        if (p.href === PAGE) { a.className = 'current'; a.setAttribute('aria-current', 'page'); }
        ul.appendChild(el('li', null, [a]));
      });
      grp.appendChild(btn);
      grp.appendChild(ul);
      navRoot.appendChild(grp);
    });
    sidebar.appendChild(navRoot);
    requestAnimationFrame(() => {
      const cur = sidebar.querySelector('a.current');
      if (cur && cur.offsetTop > sidebar.clientHeight - 80) sidebar.scrollTop = cur.offsetTop - sidebar.clientHeight / 3;
    });

    // Breadcrumb (group name above the title)
    const here = FLAT.findIndex((p) => p.href === PAGE);
    const h1 = main.querySelector('h1');
    if (here >= 0 && h1) h1.parentNode.insertBefore(el('div', { class: 'eyebrow', text: FLAT[here].group }), h1);

    // Headings: ids, anchors, "On this page"
    const slug = (s) => s.toLowerCase().replace(/<[^>]+>/g, '').replace(/[^a-z0-9]+/g, '-').replace(/^-+|-+$/g, '') || 'section';
    const used = {};
    const heads = Array.from(main.querySelectorAll(':scope > h2, :scope > h3'));
    heads.forEach((h) => {
      h.setAttribute('data-toc', h.textContent.trim());
      if (!h.id) {
        let id = slug(h.textContent); let n = 2;
        while (used[id] || document.getElementById(id)) id = slug(h.textContent) + '-' + n++;
        h.id = id;
      }
      used[h.id] = true;
      h.appendChild(el('a', { class: 'anchor', href: '#' + h.id, 'aria-label': 'Link to this section', text: '#' }));
    });
    if (heads.length) {
      toc.appendChild(el('div', { class: 'toc-title', text: 'On this page' }));
      const list = el('ul');
      heads.forEach((h) => {
        const a = el('a', { href: '#' + h.id, text: h.getAttribute('data-toc') });
        list.appendChild(el('li', { class: h.tagName === 'H3' ? 'sub' : '' }, [a]));
      });
      toc.appendChild(list);
      const links = Array.from(list.querySelectorAll('a'));
      const spy = () => {
        let active = 0;
        heads.forEach((h, i) => { if (h.getBoundingClientRect().top < 120) active = i; });
        if (window.scrollY > 0 && window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 4) active = heads.length - 1;
        links.forEach((a, i) => a.classList.toggle('active', i === active));
      };
      window.addEventListener('scroll', spy, { passive: true });
      window.addEventListener('load', spy);
      setTimeout(spy, 0);
    }

    // Previous / Next
    if (here >= 0) {
      const pager = el('nav', { class: 'pager', 'aria-label': 'Previous and next page' });
      const prev = FLAT[here - 1]; const next = FLAT[here + 1];
      const card = (p, dir) => el('a', { class: 'pager-link ' + dir, href: docUrl(p.href) }, [
        el('span', { class: 'pager-dir', text: dir === 'prev' ? '← Previous' : 'Next →' }),
        el('span', { class: 'pager-title', text: p.title }),
        el('span', { class: 'pager-group', text: p.group }),
      ]);
      pager.appendChild(prev ? card(prev, 'prev') : el('span'));
      pager.appendChild(next ? card(next, 'next') : el('span'));
      content.appendChild(pager);
    }
    content.appendChild(el('footer', { class: 'docfoot', html: 'Buildspawn 1.9.3 · User guide' }));

    // Guide home: cards built from NAV
    document.querySelectorAll('[data-nav-cards]').forEach((holder) => {
      if (holder.children.length) return;
      NAV.forEach((g, i) => {
        const links = el('ul');
        g.pages.forEach((p) => links.appendChild(el('li', null, [el('a', { href: docUrl(p.href), text: p.title })])));
        holder.appendChild(el('div', { class: 'card group-card' }, [
          el('div', { class: 'card-num', text: String(i + 1).padStart(2, '0') }),
          el('h3', null, [el('a', { href: docUrl(g.pages[0].href), text: g.group })]),
          el('p', { text: g.desc }),
          links,
        ]));
      });
    });
  }

  /* ---- Callout labels ---- */
  const LABELS = { note: 'Note', tip: 'Tip', warning: 'Warning', todo: 'To do' };
  document.querySelectorAll('.callout').forEach((c) => {
    if (c.querySelector('.callout-label')) return;
    const kind = Object.keys(LABELS).find((k) => c.classList.contains(k)) || 'note';
    c.insertBefore(el('div', { class: 'callout-label', text: c.getAttribute('data-label') || LABELS[kind] }), c.firstChild);
  });

  /* ---- Copy buttons on code blocks ---- */
  function copyText(text) {
    if (navigator.clipboard && window.isSecureContext) return navigator.clipboard.writeText(text);
    return new Promise((res, rej) => {
      const ta = el('textarea', { style: 'position:fixed;opacity:0' }); ta.value = text;
      document.body.appendChild(ta); ta.select();
      try { document.execCommand('copy') ? res() : rej(); } catch (e) { rej(e); }
      ta.remove();
    });
  }
  document.querySelectorAll('pre').forEach((pre) => {
    if (pre.classList.contains('terminal') || pre.classList.contains('no-copy')) return;
    const wrap = el('div', { class: 'codeblock' });
    pre.parentNode.insertBefore(wrap, pre);
    wrap.appendChild(pre);
    const btn = el('button', { type: 'button', class: 'copy-btn', title: 'Copy to clipboard' });
    btn.innerHTML = ICON_COPY + '<span>Copy</span>';
    btn.addEventListener('click', () => {
      copyText(pre.innerText.replace(/\n$/, '')).then(() => {
        btn.classList.add('done'); btn.querySelector('span').textContent = 'Copied';
        setTimeout(() => { btn.classList.remove('done'); btn.querySelector('span').textContent = 'Copy'; }, 1600);
      }, () => { btn.querySelector('span').textContent = 'Press Ctrl+C'; });
    });
    wrap.appendChild(btn);
  });

  /* ---- Screenshot zoom ---- */
  const box = el('div', { class: 'lightbox', role: 'dialog', 'aria-modal': 'true', 'aria-label': 'Screenshot' }, [
    el('img', { alt: '' }), el('div', { class: 'lightbox-caption' }),
  ]);
  body.appendChild(box);
  const closeBox = () => box.classList.remove('open');
  box.addEventListener('click', closeBox);
  document.querySelectorAll('figure.shot img, img.zoom').forEach((img) => {
    img.addEventListener('click', () => {
      box.querySelector('img').src = img.currentSrc || img.src;
      box.querySelector('img').alt = img.alt;
      const cap = img.closest('figure') && img.closest('figure').querySelector('figcaption');
      box.querySelector('.lightbox-caption').textContent = cap ? cap.textContent : img.alt;
      box.classList.add('open');
    });
  });

  /* ---- Search ---- */
  const input = topbar.querySelector('.search input');
  const results = topbar.querySelector('.search-results');
  const INDEX = window.SEARCH_INDEX || [];
  let sel = -1; let hits = [];
  const esc = (s) => s.replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
  const mark = (s, terms) => {
    let out = esc(s);
    terms.forEach((t) => { out = out.replace(new RegExp('(' + t.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'ig'), '<mark>$1</mark>'); });
    return out;
  };
  function search(q) {
    const terms = q.toLowerCase().split(/\s+/).filter((t) => t.length > 1 || /\d/.test(t));
    if (!terms.length) return [];
    const out = [];
    INDEX.forEach((d) => {
      const title = d.title.toLowerCase(); const text = (d.text || '').toLowerCase();
      let score = 0; let heading = null;
      for (const t of terms) {
        let s = 0;
        if (title.includes(t)) s += 12;
        const h = (d.headings || []).find((x) => x.toLowerCase().includes(t));
        if (h) { s += 6; heading = heading || h; }
        const c = text.split(t).length - 1;
        if (c) s += Math.min(c, 5);
        if (!s) { score = 0; break; }
        score += s;
      }
      if (score) {
        const i = text.indexOf(terms[0]);
        const start = Math.max(0, i - 50);
        const snip = i >= 0 ? (start ? '…' : '') + d.text.slice(start, i + 90) + '…' : '';
        out.push({ d, score, heading, snip });
      }
    });
    return out.sort((a, b) => b.score - a.score).slice(0, 8).map((r) => Object.assign(r, { terms }));
  }
  function render() {
    results.innerHTML = '';
    if (!input.value.trim()) { results.classList.remove('open'); return; }
    if (!hits.length) {
      results.appendChild(el('div', { class: 'search-empty', text: 'No pages match “' + input.value.trim() + '”.' }));
    }
    hits.forEach((r, i) => {
      const a = el('a', { class: 'search-hit' + (i === sel ? ' sel' : ''), href: ROOT + 'docs/' + r.d.href + '.html' });
      a.innerHTML = '<span class="hit-title">' + mark(r.d.title, r.terms) + '</span>' +
        (r.heading ? '<span class="hit-heading">' + mark(r.heading, r.terms) + '</span>' : '') +
        (r.snip ? '<span class="hit-snip">' + mark(r.snip, r.terms) + '</span>' : '');
      a.addEventListener('mouseenter', () => { sel = i; Array.from(results.children).forEach((c, j) => c.classList.toggle('sel', j === i)); });
      results.appendChild(a);
    });
    results.classList.add('open');
  }
  input.addEventListener('input', () => { hits = search(input.value); sel = hits.length ? 0 : -1; render(); });
  input.addEventListener('focus', () => { if (input.value.trim()) render(); });
  input.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowDown') { sel = Math.min(sel + 1, hits.length - 1); render(); e.preventDefault(); }
    else if (e.key === 'ArrowUp') { sel = Math.max(sel - 1, 0); render(); e.preventDefault(); }
    else if (e.key === 'Enter' && hits[sel]) { location.href = ROOT + 'docs/' + hits[sel].d.href + '.html'; }
    else if (e.key === 'Escape') { input.value = ''; hits = []; render(); input.blur(); }
  });
  document.addEventListener('click', (e) => { if (!e.target.closest('.search')) results.classList.remove('open'); });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') closeBox();
    const typing = /^(INPUT|TEXTAREA|SELECT)$/.test(document.activeElement.tagName) || document.activeElement.isContentEditable;
    if (e.key === '/' && !typing) { e.preventDefault(); input.focus(); input.select(); }
  });

  window.BUILDSPAWN_NAV = NAV;
  html.classList.add('ready');
})();
