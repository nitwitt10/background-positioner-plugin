<?php
namespace Craft;

class BackgroundPositioner_BGPositionStyleModel extends BaseModel {
    protected function defineAttributes() {
        return array(
            'title'       => AttributeType::String,            
            'author'      => array(AttributeType::String),
            'publisher'   => array(AttributeType::String)
        );
    }
}
