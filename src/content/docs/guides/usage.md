---
title: Usage Instructions for HyDE with Hyde-cli
description: Usage Instructions for HyDE with Hyde-cli
---

#### Installation Instructions for HyDE with Hyde-install

> [!Note]
> To achieve the best experience, it is encouraged you perform a fresh install of HyDE.

1) **Basic Installation**

- To install HyDE with the defaults, simply run the following command:

    ```sh
    Hyde-install
    ```

> [!Important]
> *Already  have HyDE before you discover this CLI?*
> Simply run this command
> ` Hyde-install --link --dir ~/HyDE `
> Note that the ` ~/HydE ` is the path to the clone directory.
> See **Advanced Installation** below for more info.

2) **Advanced Installation**

- For more control over the installation process, you can use the following options:

  - **Specify Local Directory**: To clone HyDE into a specific local directory and run the installation, use the `-d` or `--dir` flag followed by the path of the directory.

      ```sh
      Hyde-install --dir /path/to/directory
      ```

  - **Specify Remote Git Repository**: To clone HyDE from a specific remote git repository, use the `-g` or `--git` flag followed by the URL of the repository.

      ```sh
      Hyde-install --git https://host/owner/repository
      ```

  - **Link Local Git Repository**: To link a local git repository, use the `-l` or `--link` flag.

      ```sh
      Hyde-install --link
      ```
3) **Sync changes**
  - If you want to get the latest changes from the `hyprdots/HyDE` repo and apply to your local install
    ```sh
    Hyde update
    Hyde restore Config
    ```

> [!Important]
> If you have previously installed HyDE without using the CLI, you can still use the CLI to manage your installation.
> To do this, combine the --dir and --link flags where the local cloned repository is located.
>
> For example:
>
> ```sh
> Hyde-install --dir /path/to/cloned/hyde --link
> ```
