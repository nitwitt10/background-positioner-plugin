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

            var $div = $('<div class="modal"> <h2 class="bgposition-title">Set Responsive Background Position</h2> <div class="image-container"><img src="' + imageUrl + '" class="image"><div class="focus-marker"></div></div> <hr> <div class="boxes-container"><div class="box" style="background-image: url(\'' + imageUrl + '\');"></div> <div class="box wide" style="background-image: url(\'' + imageUrl + '\');"></div> <div class="box tall" style="background-image: url(\'' + imageUrl + '\');"></div></div> <hr><button class="position-confirm">Save Position</button></div>');

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
