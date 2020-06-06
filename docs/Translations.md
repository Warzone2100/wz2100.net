# Translating wz2100.net

- [How do I help translate?](#how-do-i-help-translate)
- [Notes for translators](#notes-for-translators)
- [Notes for developers](#notes-for-developers)
- [For developers merging translation PRs](#for-developers-merging-translation-prs)
- [For developers activating a new language](#for-developers-activating-a-new-language)

## How do I help translate?
Help us get wz2100.net translated into your native language and reach more people.
- Browse over to our Crowdin project: https://crowdin.com/project/wz2100net
- Select the language you’d like to contribute to / review.
   - If the language isn’t listed, please open a new issue at: https://github.com/Warzone2100/wz2100.net/issues/new/choose
- If you don’t have a Crowdin account yet, you can sign up with an email, or just log-in using another account (GitHub, Google, Twitter, etc).
- Request access to the languages you’d like to help contribute translations to!

## Notes for translators:
- All translation happens in the Crowdin project. Do not open pull requests directly on the wz2100.net repository for translation updates.
   - This helps us ensure consistency of output & formatting, provide a measure of Quality Assurance, and keep discussions about translations in a single place where they are in-line with the strings themselves.
- By participating in this project, you agree to the code of conduct: https://github.com/Warzone2100/warzone2100/blob/master/.github/CODE_OF_CONDUCT.md
- If you find an error in the source English strings, open a new issue / pull request on the Warzone2100/wz2100.net repository.
- Discussion about specific translations can occur in-line (see the Comments section to the side, when viewing a translated string).

## Notes for developers:
- The translation setup for this repo relies on several workflows / scripts, and the `translation_integration` branch.
- The native Hugo / go-i18n strings and content files in the `master` branch are processed, filtered, and converted before they are synced to the `translation_integration` branch.
- Edits are then made in Crowdin.
- When edits / translations are approved, Crowdin opens a PR to sync those changes back to the *processed/converted* files in the `translation_integration` branch.
- When that PR is merged, a workflow then processes and merges the converted data back into the Hugo / go-i18n strings and content files and syncs to the `master` branch.
- All of this ensures several things:
   - Crowdin deals with formats that it supports
   - Hugo deals with formats that it supports
   - Front-matter that should not be translated is not sent to Crowdin, cannot be accidentally edited there, and remains in-sync between different language versions of content files.

## For developers merging translation PRs:
- When **merging** a "**New Crowdin translations**" PR:
   - You may want to use "**Squash and Merge**" if there’s a gigantic list of commits (or repeated updates of the same language files) to minimize clutter in the main commit history.
- If a "**New Crowdin translations**" PR can’t be merged (ex. because of merge conflicts / outdated translation branch):
   - Close the Pull Request.
   - Delete the `l10n_translation_integration` branch.
   > Crowdin will then (eventually) re-create the `l10n_translation_integration` branch, and submit a new PR, effectively rebased on the latest `translation_integration` branch. _This may take up to 24 hours to occur, as we have configured Crowdin to batch pushes to its `l10n_*` service branch._

## For developers activating a new language:
To activate a new language, there are two steps:
1. Edit `config.yaml`
   1. Add a new section to the `languages:` section with the appropriate language identifier and:
      - localized `languageName`
      - a `weight` of `2` (or more, but should almost always be 2, especially if you aren't sure)
      - the proper `contentDir`
2. Add the corresponding flag (if missing) to `themes/wz2100net/static/img/flags/<lang>.svg`
   - Flags are from: https://github.com/twitter/twemoji/tree/master/assets/svg
   - (You will likely need to download the Twemoji archive locally, as GitHub limits the number of files displayed.)
   - You can determine the appropriate filename using any of the various emoji search sites to look up the corresponding Unicode codepoints.
   - Rename the svg to `<lang>.svg`
