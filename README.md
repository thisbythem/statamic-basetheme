# Statamic: TxT's Basetheme
Everything to get you going with a Statamic theme.

## Setup
Download and drop this into your \_themes directory. You'll need to
rename this folder to your theme name. You'll also need to rename the following items:

* `sass/sitename.sass`
* `js/sitename.js`
* `sass/base/_variables.sass`: $themePath variabe

We stuff our [site-behaviors](https://github.com/thisbythem/site-behaviors) repo
into the js directory for all that fancy js stuff. You'll either need to download that repo and put that
in the js directory, or add it as a submodule if you wish to stay
up-to-date with all that goodness.

## Add Ons
**Required:**

- [statamic-globes](https://github.com/brettdewoody/statamic-globes)

**Frequently Used:**

- [stag](https://github.com/thisbythem/stag)
- [Statamic-relative_cache_buster](https://github.com/thisbythem/Statamic-relative_cache_buster)
- [Statamic-AJAX](https://github.com/pixelfear/Statamic-AJAX)
- [statamic-quicksave](https://github.com/dmatthams/statamic-quicksave)

## SASS
We use sass proper. In Terminal, `cd` into your theme directory and run:
`sass -w sass:css`
