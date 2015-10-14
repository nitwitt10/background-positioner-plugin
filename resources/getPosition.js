var positionStyle = "50% 50%";
var getPosition = function(element) {
    $(element).click(function(e) {
        // Get the Object's position on the page
        var posX = $(this).offset().left, posY = $(this).offset().top;
        // Get the click location relative to the object itself in percentage
        var resultX = (((e.pageX - posX)/$(this).width())*100).toFixed(0);
        var resultY = (((e.pageY - posY)/$(this).height())*100).toFixed(0);
        // Assign all boxes the background position of that percentage
        positionStyle = resultX + '% ' + resultY + '%';

        $('.box').css("background-position", (positionStyle));
        $('.focus-marker').css("display", "block");
        $('.focus-marker').css("background-position", (positionStyle));
        console.log("CLICK: " + positionStyle);
    });
}

new Craft.ElementActionTrigger({
   handle: 'BackgroundPositioner_Positioner',
   batch: false,
   validateSelection: function($selectedElements) {
        return true;
    },
    activate: function($selectedElements) {
        var $element = $selectedElements.find('.element'),
            imageUrl = $element.data('url');
            imageId  = $element.data('id');

        var $div = '<div class="modal">';
                $div += '<h2 class="bgposition-title">Set Responsive Background Position</h2>';
                $div += '<p class="bgposition-description">Select a point of focus by clicking anywhere on the image:</p>';
                $div += '<div class="image-container">';
                    $div += '<img src="' + imageUrl + '" class="image">';
                    $div += '<div class="focus-marker" style="display: none;"></div>';
                $div += '</div><hr>';
                $div += '<div class="boxes-container">';
                    $div += '<div class="box"      style="background-image: url(\'' + imageUrl + '\');"><span>Preview: Square</span></div>';
                    $div += '<div class="box wide" style="background-image: url(\'' + imageUrl + '\');"><span>Preview: Wide</span></div>';
                    $div += '<div class="box tall" style="background-image: url(\'' + imageUrl + '\');"><span>Preview: Tall</span></div>';
                $div += '</div><hr>';
                $div += '<button class="position-confirm">Save Position</button>';
            $div += '</div>';


		var myModal = new Garnish.Modal($div);
        getPosition('.image');

        $('.position-confirm').click(function() {
            console.log("The final position is: " + positionStyle);

            var data = {
                "position": positionStyle,
                "id": imageId
            };

            Craft.postActionRequest('backgroundPositioner/position/savePosition', data, function(response) {
                if(response === true) {
                    myModal.hide();
                } else {
                    alert("Save failed.");
                }
            });
        });
    }
});
