# REGEXP Master List

## Phone

### Expression

- PCRE2

    - `/1?\(?([0-9]{3})\)?[-.\s]?([0-9]{3})[-.\s]?([0-9]{4})/g`

- PCRE - (Google Sheets)
    - `/^((((\+[\d\-.]{1,5})?[ \-.]?\d{3})|(\+[\d\-.]{1,5})?[ \-.]?\((\d{3}\)))?[ \-.]?\d{3}[ \-.]?\d{4}\s?)?$/gm`

### Test Cases

```sh
555.555.5555
(555)555-5555
1 (555) 555-5555
1 (555)-555-5555
555-555-5555
+1-555-532-3455
1-555-532-3455
1-555-532-3455 ext 4
1 (555) 555-5555 extension 123456789123456

// invalid
555-5555
1234567890
555--555-5555
555-555--5555
1234567
((555))555-5555
invalidphone
+91 (123) 456-7890
123.456.7890
1 (555) 555-5555 extension 0123456789012345
```

## ZIP CODE

### Expression

`^(?!0{3})\d{5}(?:-?\d{4})?$`

> This Regex is for US Zip Code like 5 digits (12345), or like 9 digits with no spaces (123456789), or like 10 digits with a hyphen if it has the 9 numbers (12345-6789) and also Starting 3 continuous characters MUST NOT zeros(0).

Works in :

- Google Forms

### Test Cases

```sh
12345
12345-6789
123456789
00000
00000-0000
000000000
00000
00012-3214
00139
00136-3654
00336-69856
```

## Address

### Expression

`[a-zA-Z\d\s\-\,\#\.\+]+` Works in :

- Google Forms

### Test Cases

```shell
IDK YET
```
