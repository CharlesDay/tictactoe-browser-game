#!/bin/bash

  curl -L \
  -H "Accept: application/vnd.github+json" \
  -H "Authorization: Bearer ${{ secrets.GITHUB_TOKEN }}"\
  -H "X-GitHub-Api-Version: 2022-11-28" \
  https://api.github.com/repos/CharlesDay/tictactoe-browser-game/actions/cache/usage