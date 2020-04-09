/*
    Filename: finalRelease.js
    Written by: Lincoln Anderson
    Purpose: final form prototype
    Date: 12/08/18
*/

$(document).ready(function(){


    var slider = $('#myRange');

    var output = $('demo');

    //updates the slider widget




        //runs accordion widget function

    $( "#accordion" ).accordion();



    //allows autocomplete functionality

    var availableTags = [
        "8 foot",
        "cocktail",
        "training",
        "round",
        "wedding"
    ];
    $( "#autocomplete" ).autocomplete({
    	source: availableTags
    });



    //adds correct functionality to submit and reset button

    $( "input[type='submit']" ).button();

	$( "input[type='reset']" ).button();

    var slider = $('#myRange').val();

    $("#demo").html(slider);

    slider.oninput = function() {

        var slider = $('#myRange').val();

        $("#demo").html(slider);
    }



    //validator allows the input to be checked before running the submit handler

    $.validator.setDefaults({

                //submit handler
    			submitHandler: function() {

                    //these scrape the html to get val and then output it into the output area

                    var eventName = $('#eventName').val();

                    $("#eventNameOutput").html(eventName);

                    var eventDate = $('#datepicker').val();

                    $("#eventDateOutput").html(eventDate);

                    //this checks the radio buttons and whichever one is checked gets output to the area

                    if($('#wedding').is(':checked')) {

                        var selector = $('#wedding').val();

                        $("#eventTypeOutput").html(selector);

                    } else if ($('#birthday').is(':checked')) {

                        var selector = $('#birthday').val();

                        $("#eventTypeOutput").html(selector);

                    } else if ($('#corporate').is(':checked')) {

                        var selector = $('#corporate').val();

                        $("#eventTypeOutput").html(selector);

                    } else if ($('#banquet').is(':checked')) {

                        var selector = $('#banquet').val();

                        $("#eventTypeOutput").html(selector);

                    } else if ($('#other').is(':checked')) {

                        var selector = $('#other').val();

                        $("#eventTypeOutput").html(selector);

                    }

                    //this checks the checkboxes and then oututs whichever are checked

                    if ($('#checkBox1').is(':checked')) {

                        var checkBox1 = $('#checkBox1').val();

                        $("#checkBoxOutput1").html(checkBox1);

                    } else {

                        $("#checkBoxOutput1").html("nope");

                    }

                    if ($('#checkBox2').is(':checked')) {

                        var checkBox2 = $('#checkBox2').val();

                        $("#checkBoxOutput2").html(checkBox2);

                    } else {

                        $("#checkBoxOutput2").html("nope");

                    }
                    if ($('#checkBox3').is(':checked')) {

                        var checkBox3 = $('#checkBox3').val();

                        $("#checkBoxOutput3").html(checkBox3);

                    } else {

                        $("#checkBoxOutput3").html("nope");

                    }

                    //the rest are the same as the first few
                    var slider = $('#myRange').val();

                    $("#sliderOutput").html(slider);

                    var autocomplete = $('#autocomplete').val();

                    $("#autocompleteOutput").html(autocomplete);

                    var userEmail = $('#userEmail').val();

                    $("#emailOutput").html(userEmail);

                    var userPassword = $('#userPassword').val();

                    $("#passwordOutput").html(userPassword);

                    var userPhone = $('#userPhone').val();

                    $("#phoneOutput").html(userPhone);

                    //says that input is validated

    				$("#validationOutput").html('input is validated')

                }
    		});

            //this is what validates the inputs

            $("#eventForm").validate({

                //sets rules for specific inputs

                rules: {
                    eventName: {
                        required: true,
                        maxlength: 30
                    },
                    eventDate: {
                        required: true,
                    },
                    eventRadio: {
                        required: true,

                    },
                    autocomplete: {
                        required: true,

                    },
                    userEmail: {
                        required: true,
                        email: true,

                    },
                    userPassword: {
                        required: true,
                        minlength: 10,

                    },
                    userPhone: {
                        required: true,
                        digits: true,

                    },



                },

                messages: {

                    //shows custom messages for validation

                    eventName: {
                        required: "name required",

                    },
                    eventDate: {
                        required: "date required",

                    },
                    eventType: {
                        required: "type required",

                    },
                    autocomplete: {
                        required: "the type of table is required",

                    },
                    userEmail: {
                        required: "Email is required",
                        email: "This must be an email",

                    },
                    userPhone: {
                        required: "Phone is required",
                        digits: "this must be digits only",

                    },
                    userPassword: {
                        required: "password is required",
                        minlength: "must be above 10"

                    }



                }





            });




    $( "#buttonReset" ).click(function() {

        /*function ran when the reset button is clicked

        this simply changes every output area to an empty value


        */

        $("#eventNameOutput").html("");

        $("#eventDateOutput").html("");

        $("#eventTypeOutput").html("");

        $("#checkBoxOutput1").html("");

        $("#checkBoxOutput2").html("");

        $("#checkBoxOutput3").html("");

        $("#sliderOutput").html("");

        $("#autocompleteOutput").html("");

        $("#sliderOutput").html("");

        $("#emailOutput").html("");

        $("#passwordOutput").html("");

        $("#phoneOutput").html("");

        $("#eventName").val('');

        $("#wedding").prop("checked", false);

        $("#birthday").prop("checked", false);

        $("#banquet").prop("checked", false);

        $("#corporate").prop("checked", false);

        $("#other").prop("checked", false);

        $("#checkBox1").prop("checked", false);

        $("#checkBox2").prop("checked", false);

        $("#checkBox3").prop("checked", false);

        $("#myRange").val(100);

        output.innerHTML = slider.value;

        $("#autocomplete").val("");

        $("#userEmail").val("example@email.com");

        $("#userPassword").val("password");

        $("#userPhone").val("phone number")

        $("#validationOutput").val("");





        return false;

    });

    $( "#button" ).button();
    $( "#button-icon" ).button({
    	icon: "ui-icon-gear",
    	showLabel: false
    });



    $( "#radioset" ).buttonset();



    $( "#controlgroup" ).controlgroup();



    $( "#tabs" ).tabs();



    $( "#dialog" ).dialog({
    	autoOpen: false,
    	width: 400,
    	buttons: [
    		{
    			text: "Ok",
    			click: function() {
    				$( this ).dialog( "close" );
    			}
    		},
    		{
    			text: "Cancel",
    			click: function() {
    				$( this ).dialog( "close" );
    			}
    		}
    	]
    });

    // Link to open the dialog
    $( "#dialog-link" ).click(function( event ) {
    	$( "#dialog" ).dialog( "open" );
    	event.preventDefault();
    });



    $( "#datepicker" ).datepicker({
    	inline: true
    });



    $( "#slider" ).slider({
    	range: true,
    	values: [ 17, 67 ]
    });



    $( "#progressbar" ).progressbar({
    	value: 20
    });



    $( "#spinner" ).spinner();



    $( "#menu" ).menu();



    $( "#tooltip" ).tooltip();



    $( "#selectmenu" ).selectmenu();


    // Hover states on the static widgets
    $( "#dialog-link, #icons li" ).hover(
    	function() {
    		$( this ).addClass( "ui-state-hover" );
    	},
    	function() {
    		$( this ).removeClass( "ui-state-hover" );
    	}
    );



});
