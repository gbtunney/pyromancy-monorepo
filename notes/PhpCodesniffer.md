```shell
phpcs /path/to/file --report=diff -vv
```

```shell
Usage: phpcbf [-nwli] [-d key[=value]] [--ignore-annotations] [--stdin-path=<stdinPath>]
  [--standard=<standard>] [--sniffs=<sniffs>] [--exclude=<sniffs>] [--suffix=<suffix>]
  [--severity=<severity>] [--error-severity=<severity>] [--warning-severity=<severity>]
  [--tab-width=<tabWidth>] [--encoding=<encoding>] [--parallel=<processes>]
  [--basepath=<basepath>] [--extensions=<extensions>] [--ignore=<patterns>] <file> - ...

 -     Fix STDIN instead of local files and directories
 -n    Do not fix warnings (shortcut for --warning-severity=0)
 -w    Fix both warnings and errors (on by default)
 -l    Local directory only, no recursion
 -p    Show progress of the run
 -q    Quiet mode; disables progress and verbose output
 -v    Print processed files
 -vv   Print ruleset and token output
 -vvv  Print sniff processing information
 -i    Show a list of installed coding standards
 -d    Set the [key] php.ini value to [value] or [true] if value is omitted

 --help                Print this help message
 --version             Print version information
 --ignore-annotations  Ignore all @codingStandard annotations in code comments

 <basepath>    A path to strip from the front of file paths inside reports
 <file>        One or more files and/or directories to fix
 <encoding>    The encoding of the files being fixed (default is utf-8)
 <extensions>  A comma separated list of file extensions to fix
               (extension filtering only valid when checking a directory)
               The type of the file can be specified using: ext/type
               e.g., module/php,es/js
 <patterns>    A comma separated list of patterns to ignore files and directories
 <processes>   How many files should be fixed simultaneously (default is 1)
 <severity>    The minimum severity required to fix an error or warning
 <sniffs>      A comma separated list of sniff codes to include or exclude from fixing
               (all sniffs must be part of the specified standard)
 <standard>    The name or path of the coding standard to use
 <stdinPath>   If processing STDIN, the file path that STDIN will be processed as
 <suffix>      Write modified files to a filename using this suffix
               ("diff" and "patch" are not used in this mode)
 <tabWidth>    The number of spaces each tab represents
```
