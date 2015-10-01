# Background Positioner Plugin
A simple Craft plugin for setting a point of focus on full-size background images in responsive elements. 

# Installation
1. Place contents of this repository into `craft/plugins/backgroundpositioner`
2. Install the plugin in your Plugin settings (admin/settings/plugins)
3. Create a new field (admin/settings/fields/new) with the handle `backgroundPosition` and the Field Type `BG Position Style` 
4. Go to your asset settings (admin/settings/assets) and select the source. Use the "Field Layout" tab to assign the Background Position field to the asset. 

# Plugin Usage
1. Select any one asset, click the gear icon, and select **Set Background Position**
2. Select any point on the top image to set the point of focus. The 3 images below will show a preview of the positioning in containers of differing ratios. 
3. Click **Save Position**

# Templating
The backgroundPosition field holds the positioning percentages. 
```
<div style="background-position: {{ asset.backgroundPosition }}; background-image: url('{{ asset.url }}');"></div>
```