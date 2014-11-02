# Statamic: TxT's Basetheme
Everything to get you going with a Statamic theme.

## Setup
Download and drop this into your \_themes directory. You'll need to
rename this folder to your theme name. You'll also need to rename
`sass/sitename.sass` to your theme name.

We use our [statamic-js](https://github.com/thisbythem/statamic-js) repo
for our scripts. You'll either need to download that repo and put that
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
