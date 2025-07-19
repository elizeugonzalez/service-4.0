#!/bin/bash
# Countdown timer to midnight in Sao Paulo timezone
current=$(TZ=America/Sao_Paulo date +%s)
midnight=$(TZ=America/Sao_Paulo date -d 'tomorrow 00:00' +%s)
diff=$((midnight - current))
while [ $diff -gt 0 ]; do
  printf "Remaining: %02d:%02d\r" $((diff/60)) $((diff%60))
  sleep 1
  diff=$((diff-1))
done
printf "Remaining: 00:00\n"
