forcepull # add alias to server to override server changes when pulling: alias forcepull='git fetch origin && git reset --hard origin/$(git rev-parse --abbrev-ref HEAD)'
bun i
bun run build
pm2 restart ecosystem.config.cjs