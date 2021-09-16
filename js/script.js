
function textChange(){
	document.getElementById('h1').innerHTML='Change';
}

function textstylechange(){
    document.getElementById('textstylechange').style.color = "blue";
}

function hoverToChange(){
    document.getElementById('hoverchange').style.color = 'red';
}

function timerAlert(){
    alert('Waiting Alert...!');
}

function displayDate() {
  document.getElementById("seedate").innerHTML = Date();
}

function onMouse(){
    document.getElementById('mouseonout').innerHTML = "India";
}
function onMouseOut(){
    document.getElementById('mouseonout').innerHTML = "Bangladesh";
}

 function sum(a,b) {
 		c = a + b;
          document.getElementById('sum').innerHTML = c;
        }

function imgone(){
    document.getElementById('img').src = "images/1.png" ;
}

function imgtwo(){
    document.getElementById('img').src = "images/2.png" ;
}

function cAlert(){
    alert("!WARNING");
}

const students = ['Mozid','Rahim'];
document.getElementById('array').innerHTML = students[0];

function multiple(a,b){

    multiple = a*b;

    document.getElementById('multi').innerHTML = multiple;
}

function ageprompt(){
    let age = prompt('Your age: ');
    document.getElementById('age').innerHTML = age;
}

function checking(){

    let total = confirm("5+5 = 11, right? if right then press ok.");
    document.getElementById('check_confirm').innerHTML = total;
    // alert( total ); 
}

function ageCat(){

    let agecat = prompt('Enter your age to know the age category:');

    if(agecat>18){
        let x = alert('you are adult');
        document.getElementById('age_cat').innerHTML = 'Adult';
    }
    else{
        let y = alert('You are not an adult');
        document.getElementById('age_cat').innerHTML = 'Not adult';
    }
}

function myInfo(){
    let name = prompt('Enter your name: '),
    address = prompt('Enter your address: '),
    phone = prompt('Enter your phone number: ');

    // Different ways of declartion
    //let name = prompt('Enter your name: ');
    //let address = prompt('Enter your address: ');
    //let phone = prompt('Enter your phone number: ');

    // name = prompt('Enter your name: ');
    // address = prompt('Enter your address: ');
    // phone = prompt('Enter your phone number: ');

    document.getElementById('name').innerHTML = name;
    document.getElementById('address').innerHTML = address;
    document.getElementById('phone').innerHTML = phone;
}

// jquery Stat
    
$('.textownhide').click(function(){
    $(this).hide();
});

$('#hoverheadalert').mouseenter(function(){
    alert("Your hover this heading{'This is a heading.'}");
});


$(document).ready(function(){


    // one
    $('#jq_alert').click(function(){
        alert("HHAHAHAHAHA!!!");
    });

    // two
    $('#hide_img_btn').click(function(){
        $('#hide_img').hide('slow');
    });

    // three
     $('#show_img_btn').click(function(){
        $('#hide_img').show('slow');
    });

     // four
     $('#toggle_img_btn').click(function(){
        $('#hide_img').toggle('slow');
    });

     // five
     $('.bg-1').click(function(){
        $('.bg-2').slideToggle(1000);
    });

     // six
     $( "#clickme" ).click(function() {
        $( "#book" ).animate({
        opacity: 0.25,
        left: "+=50",
        height: "toggle"
        }, 1000, function() {
        // Animation complete.
        });
        });

     // seven
     $( "#clickStyleChange" ).click(function() {
      $( "#iamchange" ).animate({
        width: "70%",
        opacity: 0.4,
        marginLeft: "0.6in",
        fontSize: "3em",
        borderWidth: "10px"
      }, 1500 );
    });

    // Eight
    $( "#rightmove" ).click(function() {
      $( "#movingbox" ).animate({ "left": "+=50px" }, "slow" );
    });
     
    $( "#leftmove" ).click(function(){
      $( "#movingbox" ).animate({ "left": "-=50px" }, "slow" );
    });

    $( "#topmove" ).click(function() {
      $( "#movingbox" ).animate({ "top": "-=50px" }, "slow" );
    });
     
     $( "#bottommove" ).click(function() {
      $( "#movingbox" ).animate({ "top": "+=50px" }, "slow" );
    });

    // nine
    $('#borderchange').mouseenter(function(){
        $('#itschangeborder').css( "border", "5px solid red" );
    });

    // Ten
    $('#emptybtn').click(function(){
        $("#empty").empty();
    })

    // Eleven
    $( ".addremoveclass" ).click(function() {
      $( this ).toggleClass( "highlight" );
    });

     // End

     // JQ ui 
     // 1st
     $( function() {
        $( "#draggable" ).draggable();
    });

     // 2nd
    $( function() {
        $( "#selectable" ).selectable();
    });
    
    // 3rd
      $( function() {
        $( "#sortable" ).sortable();
        $( "#sortable" ).disableSelection();
      } );

      // 4th
       $( function() {
        $( "#accordion" ).accordion();
      } );

       // 5th
    var data = ['HTML', 'CSS', 'JavaScript', 'C', 'C++', 'PHP', 'Python', 'Java'];
    $( "#tags" ).autocomplete({
      source: data
    });

    // 6th
  $( function() {
    $( "#datepicker" ).datepicker();
  } );

  // 7th
  $('#dialog-box').click(function(){
    $( "#dialog" ).dialog();
  });

  // 8th
   $('#progress_btn').click(function(){
var progressbar = $( "#progressbar" ),
      progressLabel = $( ".progress-label" );
 
    progressbar.progressbar({
      value: false,
      change: function() {
        progressLabel.text( progressbar.progressbar( "value" ) + "%" );
      },
      complete: function() {
        progressLabel.text( "Complete!" );
      }
    });
 
    function progress() {
      var val = progressbar.progressbar( "value" ) || 0;
 
      progressbar.progressbar( "value", val + 2 );
 
      if ( val < 99 ) {
        setTimeout( progress, 80 );
      }
    }
 
    setTimeout( progress, 2000 );
   });

   // 9th
   $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );

    // 10th
    var tabs = $( "#tabs" ).tabs();
    tabs.find( ".ui-tabs-nav" ).sortable({
      axis: "x",
      stop: function() {
        tabs.tabs( "refresh" );
      }
    });

    // 11th
  var state = true;
    $( "#button" ).on( "click", function() {
      if ( state ) {
        $( "#effect" ).animate({
          backgroundColor: "#aa0000",
          color: "#fff",
          width: 500
        }, 1000 );
      } else {
        $( "#effect" ).animate({
          backgroundColor: "#fff",
          color: "#000",
          width: 240
        }, 1000 );
      }
      state = !state;
    });

    // 12th
    $( function() {
        $( "#resizable" ).resizable();
      } );

    // 13th
    // Start Draggable
  $( "#drag" ).draggable();
  // Start Droppable
  $( "#draggable" ).draggable();
    $( "#Droopable" ).droppable({
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });

     // End
});
