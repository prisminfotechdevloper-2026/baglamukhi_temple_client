# Git Commit Policy

## STRICT RULE: Never Auto-Commit

**DO NOT** run `git add`, `git commit`, or `git push` automatically after making code changes.

Only commit when the user **explicitly** says one of the following (or similar):
- "commit kro"
- "commit and push kro"
- "push kro"
- "ab commit kar do"

## What TO do after changes:
- Make the code changes
- Run `npx tsc --noEmit` to verify no TypeScript errors
- Tell the user what was changed — then STOP
- Wait for the user to ask for a commit

## What NOT to do:
- Do NOT auto-commit after every feature/fix
- Do NOT run `git push` unless explicitly asked
- Do NOT batch-commit at the end of a session without being asked

This rule applies to ALL tasks in this workspace without exception.
