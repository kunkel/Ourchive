function Controller() {
    function openVideoCamera() {
        Titanium.Media.showCamera({
            success: function(e) {
                if (e.mediaType === Titanium.Media.MEDIA_TYPE_VIDEO) {
                    var takenVideo = e.media;
                    movieFile = Titanium.Filesystem.getFile(Titanium.Filesystem.applicationDataDirectory, "mymovie.mov");
                    movieFile.write(takenVideo);
                }
            },
            error: function() {
                alert("There was an error");
                Alloy.Globals.homeWin.open();
                $.addVideoWin.close();
            },
            cancel: function() {
                Alloy.Globals.homeWin.open();
                $.addVideoWin.close();
            },
            allowEditing: true,
            saveToPhotoGallery: true,
            mediaTypes: [ Titanium.Media.MEDIA_TYPE_VIDEO ],
            videoQuality: Titanium.Media.QUALITY_HIGH
        });
    }
    function openMenu() {
        Alloy.createController("menu").getView().open();
    }
    function closeWindow() {
        Alloy.Globals.homeWin.open();
        $.addVideoWin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addVideo";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.addVideoWin = Ti.UI.createWindow({
        layout: "vertical",
        id: "addVideoWin"
    });
    $.__views.addVideoWin && $.addTopLevelView($.__views.addVideoWin);
    openVideoCamera ? $.__views.addVideoWin.addEventListener("open", openVideoCamera) : __defers["$.__views.addVideoWin!open!openVideoCamera"] = true;
    $.__views.titleBar = Ti.UI.createView({
        backgroundColor: "gray",
        height: "90px",
        width: "100%",
        layout: "horizontal",
        id: "titleBar"
    });
    $.__views.addVideoWin.add($.__views.titleBar);
    $.__views.menuBtn = Ti.UI.createButton({
        left: "10px",
        top: "40px",
        title: "menu",
        id: "menuBtn"
    });
    $.__views.titleBar.add($.__views.menuBtn);
    openMenu ? $.__views.menuBtn.addEventListener("click", openMenu) : __defers["$.__views.menuBtn!click!openMenu"] = true;
    $.__views.title = Ti.UI.createLabel({
        left: "100px",
        top: "40px",
        text: "Edit Details",
        id: "title"
    });
    $.__views.titleBar.add($.__views.title);
    $.__views.addVideoView = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "gray",
        width: "100%",
        height: "1046px",
        id: "addVideoView"
    });
    $.__views.addVideoWin.add($.__views.addVideoView);
    $.__views.videoThumbnail = Ti.UI.createImageView({
        id: "videoThumbnail"
    });
    $.__views.addVideoView.add($.__views.videoThumbnail);
    $.__views.eventDescription = Ti.UI.createTextArea({
        height: "180px",
        width: "86%",
        backgroundColor: "white",
        top: "10px",
        id: "eventDescription",
        hintText: "Description"
    });
    $.__views.addVideoView.add($.__views.eventDescription);
    $.__views.tagView = Ti.UI.createView({
        layout: "horizontal",
        height: "40px",
        width: "86%",
        id: "tagView"
    });
    $.__views.addVideoView.add($.__views.tagView);
    $.__views.__alloyId3 = Ti.UI.createLabel({
        text: "Tags",
        id: "__alloyId3"
    });
    $.__views.tagView.add($.__views.__alloyId3);
    $.__views.tagsDescription = Ti.UI.createLabel({
        left: "250px",
        font: {
            fontFamily: "Helvetica",
            fontSize: "8dp",
            fontStyle: "italic",
            fontWeight: "normal"
        },
        text: "Photo Description",
        id: "tagsDescription"
    });
    $.__views.tagView.add($.__views.tagsDescription);
    $.__views.eventTags = Ti.UI.createTextField({
        height: "90px",
        width: "86%",
        backgroundColor: "white",
        top: "10px",
        id: "eventTags"
    });
    $.__views.addVideoView.add($.__views.eventTags);
    $.__views.submitBtnView = Ti.UI.createView({
        top: "20px",
        width: "87%",
        layout: "horizontal",
        id: "submitBtnView"
    });
    $.__views.addVideoView.add($.__views.submitBtnView);
    $.__views.submitBtn = Ti.UI.createButton({
        width: "50%",
        backgroundColor: "green",
        title: "Submit",
        id: "submitBtn"
    });
    $.__views.submitBtnView.add($.__views.submitBtn);
    $.__views.cancelBtn = Ti.UI.createButton({
        width: "50%",
        backgroundColor: "red",
        title: "Cancel",
        id: "cancelBtn"
    });
    $.__views.submitBtnView.add($.__views.cancelBtn);
    closeWindow ? $.__views.cancelBtn.addEventListener("click", closeWindow) : __defers["$.__views.cancelBtn!click!closeWindow"] = true;
    exports.destroy = function() {};
    _.extend($, $.__views);
    __defers["$.__views.addVideoWin!open!openVideoCamera"] && $.__views.addVideoWin.addEventListener("open", openVideoCamera);
    __defers["$.__views.menuBtn!click!openMenu"] && $.__views.menuBtn.addEventListener("click", openMenu);
    __defers["$.__views.cancelBtn!click!closeWindow"] && $.__views.cancelBtn.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;