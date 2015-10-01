<?php
namespace Craft;

class BackgroundPositioner_BGPositionStyleFieldType extends BaseFieldType {
    public function getName() {
        return Craft::t('BG Position Style');
    }

    public function getInputHtml($name, $value) {
        return craft()->templates->render('backgroundPositioner/background-position-field', array(
            'name'  => $name,
            'value' => $value
        ));
    }
}
