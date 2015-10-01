<?php
namespace Craft;

class BackgroundPositionerPlugin extends BasePlugin
{
    public function getName()
    {
         return Craft::t('Background Positioner');
    }

    public function addAssetActions($source)
    {
        return array('backgroundPositioner_Positioner');
    }

    function getVersion()
    {
        return '0.0.1';
    }

    function getDeveloper()
    {
        return 'Rabble + Rouser';
    }

    function getDeveloperUrl()
    {
        return 'http://www.rabbleandrouser.com/';
    }

    public function init() 
    {
        
    }

    
}
