# Modular Montage

## A review of client-side modular React architecture

### Introduction


### Scripts
The `scaffold:component` cmd is used to generate new component files. It takes two arguments: the name of the component and the path to the directory inside `./src` where the component files should be generated.

- Example 1:
```
~$: npm run scaffold:component -- Buttonz global/components
```

This will automatically generate files for a new `Buttonz` component in `src/global/components/` 

```
~$: npm run scaffold:component -- About pages
```

This will automatically generate files for a new `About` component in `src/pages/` 

```