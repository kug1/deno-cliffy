// deno-lint-ignore-file no-explicit-any

/**
 * Checks if current process is a tty.
 *
 * @internal
 */
export function isTerminal(): boolean {
  // dnt-shim-ignore
  const { Deno, process } = globalThis as any;

  if (Deno) {
    return Deno.stdin.isTerminal();
  } else if (process) {
    return process.stdin.isTTY;
  } else {
    throw new Error("unsupported runtime");
  }
}
