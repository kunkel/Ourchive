function Controller() {
    function openMenu() {
        Alloy.createController("menu").getView().open();
        $.addEventWin.close();
    }
    function focusTextField() {
        $.eventTitle.focus();
    }
    function closeWindow() {
        Alloy.Globals.homeWin.open();
        $.addEventWin.close();
    }
    require("alloy/controllers/BaseController").apply(this, Array.prototype.slice.call(arguments));
    this.__controllerPath = "addEvent";
    arguments[0] ? arguments[0]["__parentSymbol"] : null;
    arguments[0] ? arguments[0]["$model"] : null;
    arguments[0] ? arguments[0]["__itemTemplate"] : null;
    var $ = this;
    var exports = {};
    var __defers = {};
    $.__views.addEvent = Ti.UI.createView({
        id: "addEvent"
    });
    $.__views.addEvent && $.addTopLevelView($.__views.addEvent);
    focusTextField ? $.__views.addEvent.addEventListener("open", focusTextField) : __defers["$.__views.addEvent!open!focusTextField"] = true;
    $.__views.titleBar = Ti.UI.createView({
        backgroundColor: "gray",
        height: "90px",
        width: "100%",
        layout: "horizontal",
        id: "titleBar"
    });
    $.__views.addEvent.add($.__views.titleBar);
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
        text: "Add a Moment",
        id: "title"
    });
    $.__views.titleBar.add($.__views.title);
    $.__views.addEventView = Ti.UI.createView({
        layout: "vertical",
        backgroundColor: "gray",
        width: "100%",
        height: "1046px",
        id: "addEventView"
    });
    $.__views.addEvent.add($.__views.addEventView);
    $.__views.eventTitle = Ti.UI.createTextField({
        height: "90px",
        width: "86%",
        backgroundColor: "white",
        top: "10px",
        id: "eventTitle",
        hintText: "Title"
    });
    $.__views.addEventView.add($.__views.eventTitle);
    $.__views.eventLocation = Ti.UI.createTextField({
        height: "90px",
        width: "86%",
        backgroundColor: "white",
        top: "10px",
        id: "eventLocation",
        hintText: "Location"
    });
    $.__views.addEventView.add($.__views.eventLocation);
    $.__views.eventDescription = Ti.UI.createTextArea({
        height: "180px",
        width: "86%",
        backgroundColor: "white",
        top: "10px",
        id: "eventDescription",
        hintText: "Description"
    });
    $.__views.addEventView.add($.__views.eventDescription);
    $.__views.tagView = Ti.UI.createView({
        layout: "horizontal",
        height: "40px",
        width: "86%",
        id: "tagView"
    });
    $.__views.addEventView.add($.__views.tagView);
    $.__views.__alloyId1 = Ti.UI.createLabel({
        text: "Tags",
        id: "__alloyId1"
    });
    $.__views.tagView.add($.__views.__alloyId1);
    $.__views.tagsDescription = Ti.UI.createLabel({
        left: "250px",
        font: {
            fontFamily: "Helvetica",
            fontSize: "8dp",
            fontStyle: "italic",
            fontWeight: "normal"
        },
        text: "For all moments in this event",
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
    $.__views.addEventView.add($.__views.eventTags);
    $.__views.submitBtnView = Ti.UI.createView({
        top: "20px",
        width: "87%",
        layout: "horizontal",
        id: "submitBtnView"
    });
    $.__views.addEventView.add($.__views.submitBtnView);
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
    Alloy.Globals.previous = $.addEventWin;
    $.submitBtn.addEventListener("click", function() {
        var eventModel = Alloy.createModel("event", {
            title: $.eventTitle.value,
            location: $.eventLocation.value,
            description: $.eventDescription.value,
            tags: $.eventTags.value
        });
        eventModel.save();
        Alloy.Collections.Moments.fetch();
        $.addEventWin.close();
    });
    __defers["$.__views.addEvent!open!focusTextField"] && $.__views.addEvent.addEventListener("open", focusTextField);
    __defers["$.__views.menuBtn!click!openMenu"] && $.__views.menuBtn.addEventListener("click", openMenu);
    __defers["$.__views.cancelBtn!click!closeWindow"] && $.__views.cancelBtn.addEventListener("click", closeWindow);
    _.extend($, exports);
}

var Alloy = require("alloy"), Backbone = Alloy.Backbone, _ = Alloy._;

module.exports = Controller;