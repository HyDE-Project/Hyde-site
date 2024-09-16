---
title: Installation
description: Installation guide for Hyde-cli
---

<div align="center">
  <br>

![hyde_cli_banner](https://raw.githubusercontent.com/krhyme7/hyde-cli/master/Assets/hyde_cli_banner.png)
<br/>

Hyde-cli is a CLI tool for [HyDE](https://github.com/prasanthrangan/hyprdots).
This repository contains scripts that, while may not be perfect, could provide a better way to manage your HyDE installation.
For example, we have a functional TUI restore tool that follows `restore_cfg.lst`, power-saving options that could be useful for laptops, and much more!

</div>

> [!CAUTION]
> While Hyde-cli is stable, it is important to note that these scripts do alter and *could* potentially mess up your system configuration.
> We ask that you use this tool carefully and report any bugs you find.

## Installation

To install, execute the following command:

```sh
curl -sL https://raw.githubusercontent.com/HyDE-Project/Hyde-cli/master/install.sh | bash
```

> [!Note]
> For User who do not have root access:
> ` export HYDE_LOCAL=1 ` to install this package locally

For other working install solutions, see the following below.

### Arch Linux

Use your preferred AUR helper `paru` or `yay`:

```sh
paru -Sy hyde-cli-git
```

```sh
yay -Sy hyde-cli-git
```

Use makepkg:

```sh
git clone https://aur.archlinux.org/hyde-cli-git.git
cd ./hyde-cli
makepkg -si
```

### Make

Install required dependencies: `git make fzf tree ttf-jetbrains-mono-nerd`.

Clone:

```sh
git clone https://github.com/HyDE-Project/Hyde-cli
cd ./Hyde-cli
```

To install:

```sh
make
```

To uninstall:

```sh
make uninstall
```

To update:

```sh
make update clean install
```

> [!Note]
> User who do not have root access should provide this flag for ` make `; ` make LOCAL=1 `


> [!Important]
> If you have previously installed HyDE without using the CLI, you can still use the CLI to manage your installation.
> To do this, combine the --dir and --link flags where the local cloned repository is located.
>
> For example:
>
> ```sh
> Hyde-install --dir /path/to/cloned/hyde --link
> ```



## Further reading

- Read [usage](./usage.md) for more information on how to use Hyde-cli.
