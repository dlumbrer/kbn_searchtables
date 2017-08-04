# Search-Tables for Kibana 5.5.X

This is a plugin developed for Kibana 5 that you can build tables and search with an input **without applying filters**

## First, download the release according your Kibana's version

Now this plugin is avalible for differents versions of Kibana, in [releases](https://github.com/dlumbrer/kbn_searchtables/releases "Go to releases!") you can find the source code, ZIPs and TARs of the plugin to use in:
* [Kibana 5.5.x](https://github.com/dlumbrer/kbn_searchtables/releases/tag/5.5.X-3 "Go to source")
* [Kibana 5.4.x](https://github.com/dlumbrer/kbn_searchtables/releases/tag/5.4.X-3.1 "Go to source")

## Installation Steps

```
cd KIBANA_HOME/plugins
git clone https://github.com/dlumbrer/kbn_searchtables
rm kbn_searchtables/public/images/search_example.gif
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


## Help me to improve! :smile:

If there's any problem or doubt, please, open a Github Issue (Pull Request) or contact me via email (dmorenolumb@gmail.com). It would be very helpful if you tried it and tell me what you think of it, the errors and the possible improves that I could make.


#### For anything, contact me: dmorenolumb@gmail.com
