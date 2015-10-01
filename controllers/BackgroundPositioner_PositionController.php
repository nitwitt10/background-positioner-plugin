<?php
namespace Craft;

class BackgroundPositioner_PositionController extends BaseController {
    protected $allowAnonymous = true;
    public function actionSavePosition() {
        $data = craft()->request->getPost();
        $assetId = $data['id'];
        $assetPosition = $data['position'];
        $criteria = craft()->elements->getCriteria(ElementType::Asset);
        $criteria->id = $assetId;
        $assets = $criteria->find();
        $asset = $assets[0];
        $asset->setContentFromPost([
            'backgroundPosition' => $assetPosition
        ]);
        $fileSaved = craft()->assets->storeFile($asset);
        $this->returnJson($fileSaved);
    }
}