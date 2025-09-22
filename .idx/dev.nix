{ pkgs, ... }: {
  channel = "unstable";
  packages = [
    pkgs.bun
  ];
  env = { };
  idx = {
    extensions = [
      "pkief.material-icon-theme"
      "bradlc.vscode-tailwindcss"
    ];
    workspace = {
      onCreate = {
        install = "bun install && bun dev";
        default.openFiles = [
          "README.md"
        ];
      };
    };
  };
}