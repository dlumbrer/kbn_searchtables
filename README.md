# Search-Tables for Kibana 5

This is a plugin developed for Kibana 5 that you can build tables and search with an input **without applying filters**


## Installation Steps

```
cd KIBANA_HOME/plugins
git clone https://github.com/dlumbrer/kbn_searchtables
*Run your Kibana*
```
> **Important:** If you have any problem with the plugin version (like a warning message "**it expected Kibana version "x.x.x", and found "5.0.0"**") only change the value of the "version" tag on the package.json to your Kibana version


#### Uninstall:
```
cd KIBANA_HOME
rm -rf plugins/kbn_searchtables/
```


# Example of use

![Example](public/images/search_example.gif)

### Building a Release
Building a release only means packaging the plugin with all its dependencies into a zip archive. Important is to put the plugin in a folder called kibana before zipping it.
The following steps would produce a release of the current head master branch.
```
mkdir release_searchtables
cd release_searchtables
git clone https://github.com/dlumbrer/kbn_searchtables
cd ..
zip -r kbn_searchtables-<version>.zip release_searchtables --exclude release_searchtables/kbn_searchtables/.git\*
```

## Help me to improve! :smile:

If there's any problem or doubt, please, open a Github Issue (Pull Request) or contact me via email (dmorenolumb@gmail.com). It would be very helpful if you tried it and tell me what you think of it, the errors and the possible improves that I could make.


#### For anything, contact me: dmorenolumb@gmail.com
