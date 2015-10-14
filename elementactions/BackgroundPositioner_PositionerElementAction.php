<?php 
namespace Craft;

class BackgroundPositioner_PositionerElementAction extends BaseElementAction {
    public function getName() {
        return Craft::t('Set Background Position');
    }
    public function getTriggerHtml() {
        craft()->templates->includeCssResource('backgroundpositioner/style.css');
        return craft()->templates->includeJsResource('backgroundpositioner/getPosition.js');
    }
}