/**
 * @file
 * All Javascript for EAT page
 */

/**
 * Section 1: Header Menu
 * Behavior for the menu bar at the header
 *
 * Sections:
 * 1.1) Controller for clicking on menu options
 */
$(document).ready(function () {
    "use strict";


    /**
     * ChooseMyPlate Controller
     * Behavior for choosing different options on the ChooseMyPlate image
     *
     * Requirements:     
     * When you click on any section of the SVG, the background color of the .eat-ribbon class will change to the corresponding color. 
     * For example if you click vegetables, color of .eat-ribbon will change to #C13937
     * 
     * It will also clear whatever text is currently in the .eat-description class and will replace it with the text associated with the class. 
     * For example, when first visiting the page, when I click on vegetables it will diplay 
     * 
     * 
     * Color key:
     * Fruits: #C13937
     * Grains: #EC8533
     * Vegetables: #C1D15A
     * Proteins: #544986
     * 
     */    
   
    $("#vegetables").click(function () {
        $("#banner-vegetables, .vegetables").css("display", "block");
        $("#banner").css("display", "none");
        $( "#banner-vegetables, .vegetables" ).siblings().css( "display", "none" );
        $(".eat-ribbon").css("background-color", "#C1D15A")

    });

    $("#fruits").click(function () {
        $("#banner-fruits, .fruits").css("display", "block");
        $("#banner").css("display", "none");
        $( "#banner-fruits, .fruits" ).siblings().css( "display", "none" );
        $(".eat-ribbon").css("background-color", "#C13937")
    });

    $("#grains").click(function () {
        $("#banner-grains, .grains").css("display", "block");
        $("#banner").css("display", "none");
        $( "#banner-grains, .grains" ).siblings().css( "display", "none" );
        $(".eat-ribbon").css("background-color", "#EC8533")
    });

    $("#proteins").click(function () {
        $("#banner-proteins, .proteins").css("display", "block");
        $("#banner").css("display", "none");
        $( "#banner-proteins, .proteins" ).siblings().css( "display", "none" );
        $(".eat-ribbon").css("background-color", "#544986")
    });

   
});