var baseURL = "https://pokeapi.co/api/v2/";


// HTML Strings

function pokemonBoxHTML(inPokemonName, inPokemonTypes, inPokemonSprite, inPokedexNumber) {
  var strHTML = (
    '<li id="poke-box-li-' + inPokemonName + '" class="poke-box-li" data-pokemon-name="' + inPokemonName + '" data-pokemon-type="' + inPokemonTypes + '" data-pokedex-number="' + inPokedexNumber + '">' +
      '<div id="poke-box-div-' + inPokemonName + '" class="poke-box-div" data-pokemon-name="' + inPokemonName + '" data-pokemon-type="' + inPokemonTypes + '" data-pokedex-number="' + inPokedexNumber + '">' + 
        '<div class="container-fluid">' +
          '<div class="row">' +
            '<div id="poke-box-img" class="align-self-center">' +
              '<div id="poke-box-' + inPokemonName + '">' +
              '<img id="sprite-' + inPokemonName + '" src="' + inPokemonSprite + '" alt="' + inPokemonName + '" />' +
              '</div>' +
            '</div>' +
            '<div id="poke-box-name" class="poke-box-name-class align-self-center" data-pokemon-name="' + inPokemonName + '">' +
              strProper(inPokemonName) +
            '</div>' +
            '<table id="selected-moves">' +
              '<tr>' +
                '<td id="selected-move-1" class="selected-move-box"></td>' +
                '<td id="selected-move-3" class="selected-move-box"></td>' +
              '</tr>' +
              '<tr>' +
                '<td id="selected-move-2" class="selected-move-box"></td>' +
                '<td id="selected-move-4" class="selected-move-box"></td>' +
              '</tr>' +
            '</table>' +
          '</div>' +
        '</div>' +
      '</div>' +
    '</li>'
  );
  return strHTML;
}

//---------------------------------------------------------------------------------------------------------------


function strProper(inString) {
  var splitStr = inString.split(" ");
  var outStr = "";
  for (i in splitStr) {
    outStr = outStr + " " + splitStr[i].substring(0,1).toUpperCase() + splitStr[i].substring(1).toLowerCase();
  }
  outStr = outStr.trim();
  return outStr  
}

function strInitials(inString) {
  var outInitials = "";
  if (inStr(inString, " ")) {
    var splitStr = inString.split(" ");
    for (i in splitStr) {
      outInitials = outInitials + " " + splitStr[i].substring(0,1);
    }
    outInitials = outInitials.toUpperCase().trim();
  } else {
    outInitials =inString.substring(0,1).toUpperCase().trim();
  }
  return outInitials;
}

function visibleSwap(visibleFirst, visibleSecond) {
  $(visibleFirst).css("display", "none");
  $(visibleSecond).css("display", "block");
}

function inStr(searchString, findString) {
  var isInStr = false;
  var strIndex = searchString.indexOf(findString);
  if (strIndex >= 0) {
    var isInStr = true;
  }
  return isInStr;
}

function hideMoves() {
  $('#party-box-hold, #add-party-button, #move-column, #input-moves, #input-moves-div, #input-moves-div row, #move-column-sub, #move-column-sub row').css("display", "none")
  // $('.move-family').css("display", "none")
}

function showMoves() {
  $('#party-box-hold, #add-party-button, #move-column, #input-moves, #input-moves-div, #input-moves-div row, #move-column-sub, #move-column-sub row').css("display", "block")
  // $('.move-family').css("display", "block")
}

function hidePokemon() {
  $('#poke-box').css("display", "none");
  // $('.pokemon-box-family').css("display", "none");
}

function showPokemon() {
  $('#poke-box').css("display", "block");
  // $('.pokemon-box-family').css("display", "block");
}

function cleanName(inName) {
  return strProper(inName.replace("-", " "));
}

// Global Variables
var pokeArr = [];
var moveArr = [];

// Pokemon Data Collection
// var pokeDataArray = [];
// var pokeCount;
// var pokeListGet;
// $(function(_PokemonDataCollection) {
//   $.get(baseURL + "pokemon", function(data, status) {
//     pokeCount = data['count'];
//   }).done(function(data) {
//     $.get(baseURL + "pokemon?limit=" + pokeCount).done(function(pokeListGet) {
//       var pokePathArray = [];
//       for (i = 0; i < pokeListGet['count']; i++) {
//         pokePathArray.push(pokeListGet['results'][i]['url']);
//       }

//       $.each(pokePathArray, function(index, value) {

//         $.get(value).done(function(pokeData) {
//           var pokeMoveName;
//           var pokeMoveURL;
//           var pokeMoveType;
//           var pokeMovesArray = [];
          
//           var pokeName = pokeData['name'];
//           var pokeSprite = pokeData['sprites']['front_default'];
//           var pokeNumber = pokeData['id'];
//           if (pokeData['types']['length'] == 2) {
//             var pokeType1 = strProper(pokeData['types'][0]['type']['name']);
//             var pokeType2 = strProper(pokeData['types'][1]['type']['name']);
//           } else {
//             var pokeType1 = strProper(pokeData['types'][0]['type']['name']);
//             var pokeType2 = null;
//           }
//           var pokeTypesDict = {"pokemon_type1": pokeType1, "pokemon_type1": pokeType2};
//           for (i = 0; i < pokeData['moves'].length; i++) {
//             pokeMoveName = pokeData['moves'][i]['move']['name'];
//             pokeMoveURL = pokeData['moves'][i]['move']['url'];
//             pokeMoveType = null;
//             pokeMovesArray.push({"move_name": pokeMoveName, "move_type": pokeMoveType, "move_url": pokeMoveURL});
//           }
//           pokeDataArray.push({"pokemon_name": pokeName, "sprite": pokeSprite, "pokedex_number": pokeNumber, "pokemon_types": pokeTypesDict, "moves": pokeMovesArray});

//         }).done(function(data){
//           var pdaIndex1 = index;
//           $.each(pokeDataArray[pdaIndex1]['moves'], function(index, value) {
//             var pdaIndex2 = index;
//             $.get(value).done(function(data) {
//               pokeDataArray[pdaIndex1]['moves'][pdaIndex2]['move_type'] = moveData['type']['name'];
//             });

//           });
//         });

//       });

//       console.log(pokeDataArray);
//       $.each(pokeDataArray, function(index, value) {
//         console.log("4")
//         var pdaIndex1 = index;
//         $.each(value['moves']['move_url'], function(index, value) {
//           var pdaIndex2 = index;
//           $.get(value).done(function(data) {
//             pokeDataArray[pdaIndex1]['moves'][pdaIndex2]['move_type'] = moveData['type']['name'];
//           });

//         });
//       });

//     });
//   });
// });

// Selection Process - Up To "Add To Party"
$(function(_SelectionProcess1) {
  hideMoves();
  $.get(baseURL + "pokemon?limit=20").done(function(data) { //Max Limit: 964
    $.each(data['results'], function(index, value) {
      $.get(value['url']).done(function(data, status) {
        var pokemonName = data['name'];
        var pokemonSprite = data['sprites']['front_default'];
        var pokemonTypes;
        if (data['types']['length'] == 2) {
          pokemonTypes = strProper(data['types'][0]['type']['name'] + " " + data['types'][1]['type']['name']);
        } else {
          pokemonTypes = strProper(data['types'][0]['type']['name']);
        }
        
        var pokedexNumber = data['id'];
        var insertHTML = pokemonBoxHTML(pokemonName, pokemonTypes, pokemonSprite, pokedexNumber);
        $('#poke-box-ol').append(insertHTML);
        $('#poke-box-ol > li').css("display", "block");
        pokeArr.push($('#poke-box-ol > li').last());
      });
    });

    
    $("#poke-box-ol").selectable({
      selected: function(event, ui) {
        $('#move-box-ul').empty();
        $('#input-pokemon').val('');
        // $('#poke-box-ol > li').hide();
        var insertHTML = (
          '<div id="party-box-hold"><div class="container-fluid"><div class="row">' + 
            ui['selected'].innerHTML + 
          '</div></div></div>'
        );
        hidePokemon();
        showMoves();
        $('#party-box-hold').replaceWith(insertHTML);
        $('#add-party-button').trigger('partyBoxHoldChange')
        _SelectMoves();
      }
    });
  })
});

// Select Moves
function _SelectMoves() {
  var baseURL = "https://pokeapi.co/api/v2/";
  var selectedName = $('#party-box-hold #poke-box-name').data("pokemon-name");
  $.get(baseURL + "pokemon/" + selectedName, function(data, status) {
    $.each(data['moves'], function(index, value) {
      var moveName = value['move']['name'].replace("-"," ");
      var moveURL = value['move']['url'];
      function typeGet() { return $.get(moveURL); }
      $.when(typeGet()).done(function(data, status) {
        var moveType = data['type']['name'];
        var insertHTML = (
          '<li id="move-box-li-' + selectedName.replace(" ", "-") + '-' + moveName.replace(" ", "-") + '" class="move-box-li" data-pokemon-name="' + selectedName + '" data-move-name="' + moveName + '" data-move-type="' + moveType + '">' +
            '<div id="move-box-div-' + selectedName.replace(" ", "-") + '-' + moveName.replace(" ", "-") + '" class="move-box-div" data-pokemon-name="' + selectedName + '" data-move-name="' + moveName + '" data-move-type="' + moveType + '">' +
              '<div class="container-fluid">' +
                '<div class="row">' +
                  '<div id="move-box-type" class="mt-' + moveType + ' std-lb-imgbox"><div id="move-box-type-inner">' + moveType + '</div></div>' +
                  '<div id="move-box-name" class="align-self-center std-lb-namebox">' + moveName + '</div>' +
                '</div>' +
              '</div>' +
            '</div>' +
          '</li>'
          );


        $('#move-box-ul').append(insertHTML);
        moveArr.push($('#move-box-ul > li').last());
        // $('#move-box-ul > li').hide();
        
        
        $('#move-box-ul').selectable({ 
          selected: function(event, ui) {
            var moveJSON = $(ui['selected']['dataset']);
            var selMoveName = moveJSON[0]['moveName'];
            var selMoveType = moveJSON[0]['moveType'];
            // var selMoveSplitName = selMoveName.split(" ")
            // var selMoveInitials = "";
            
            
            // for (i in selMoveSplitName) {
            //   selMoveInitials = selMoveInitials + " " + selMoveSplitName[i].substring(0,1)
            // }
            // selMoveInitials = selMoveInitials.toUpperCase().trim();

            var selMoveInitials = strInitials(selMoveName);

            var insertHTML = '<div class="mt-small-' + selMoveType + '" data-move-name="' + selMoveName + '" data-move-type="' + selMoveType + '" title="' + cleanName(selMoveName) + '"><p class="p-mt-small">' + selMoveInitials + '</p></div>'

            function isEmpty(inElement) {
              return !$.trim($(inElement).html())
            }
            function isNotEmpty(inElement) {
              return !isEmpty(inElement)
            }
            if (isEmpty('#party-box-hold #selected-move-1')) {
              $('#party-box-hold #selected-move-1').append(insertHTML);
              $('#add-party-button').trigger('partyBoxHoldChange');
            } else if (isEmpty('#party-box-hold #selected-move-2')) {
              $('#party-box-hold #selected-move-2').append(insertHTML);
              $('#add-party-button').trigger('partyBoxHoldChange');
            } else if (isEmpty('#party-box-hold #selected-move-3')) {
              $('#party-box-hold #selected-move-3').append(insertHTML);
              $('#add-party-button').trigger('partyBoxHoldChange');
            } else if (isEmpty('#party-box-hold #selected-move-4')) {
              $('#party-box-hold #selected-move-4').append(insertHTML);
              $('#add-party-button').trigger('partyBoxHoldChange');
            } else {}
          }
        });
        


      });
    });
  });
}


// Selection Process - After "Add To Party"
$(function (_SelectionProcess2) {
  $('#add-party-button').on('partyBoxHoldChange', function() {
    $('#add-party-button').attr('disabled', false);
    
    function isEmpty(inElement) { return !$.trim($(inElement).html()) }
    function isNotEmpty(inElement) { return !isEmpty(inElement) }

    function nextOpenPartyBox() {
      if (isEmpty('#party-box-1')) { return '#party-box-1' }
      else if (isEmpty('#party-box-2')) { return '#party-box-2' }
      else if (isEmpty('#party-box-3')) { return '#party-box-3' }
      else if (isEmpty('#party-box-4')) { return '#party-box-4' }
      else if (isEmpty('#party-box-5')) { return '#party-box-5' }
      else if (isEmpty('#party-box-6')) { return '#party-box-6' }
    }

    var pokemonSelected = false;
    var moveSelected = false;
    var partyFull = true;

    if (isNotEmpty('#party-box-hold')) {
      pokemonSelected = true;
    }

    if (isNotEmpty('#party-box-hold #selected-move-1') || isNotEmpty('#party-box-hold #selected-move-2') || isNotEmpty('#party-box-hold #selected-move-3') || isNotEmpty('#party-box-hold #selected-move-4')) {
      moveSelected = true;
    }

    if (isEmpty('#party-box-1') || isEmpty('#party-box-2') || isEmpty('#party-box-3') || isEmpty('#party-box-4') || isEmpty('#party-box-5') || isEmpty('#party-box-6')) {
      partyFull = false;
    }

    $('#add-party-button').on('click', function() {
        if ((pokemonSelected == true) && (moveSelected == true) && (partyFull == false)) {
          var openPartyBox = nextOpenPartyBox();
          $(openPartyBox).append($('#party-box-hold').html());
          $('#party-box-hold').empty();
          $('#input-moves').val('');
          $('#move-box-ul > li').hide();
          hideMoves();
          showPokemon();
          $('#poke-box-ol > li').css("display", "block");
          $('#add-party-button').attr('disabled', true);
      } else { }
    });


    // Save Party
    $('#save-party-button').off().on('click', function( event, ui ) {
      function isEmpty(inElement) {
        return !$.trim($(inElement).html())
      }

      function isNotEmpty(inElement) {
        return !isEmpty(inElement)
      }

      function pBDC(boxNum) {
        //partyBoxDataCollect
        var pkName, pkMove1, pkMove2, pkMove3, pkMove4;
        if (isNotEmpty('#party-box-' + boxNum)) {
          pkName = $('#party-box-' + boxNum + ' .poke-box-div').data('pokemon-name');
          if(isNotEmpty('#party-box-' + boxNum + ' #selected-move-1')) {
            pkMove1 = $('#party-box-' + boxNum + ' #selected-move-1 > div').data('move-name');
          } else { pkMove1 = null; }
          if(isNotEmpty('#party-box-' + boxNum + ' #selected-move-2')) {
            pkMove2 = $('#party-box-' + boxNum + ' #selected-move-2 > div').data('move-name');
          } else { pkMove2 = null; }
          if(isNotEmpty('#party-box-' + boxNum + ' #selected-move-3')) {
            pkMove3 = $('#party-box-' + boxNum + ' #selected-move-3 > div').data('move-name');
          } else { pkMove3 = null; }
          if(isNotEmpty('#party-box-' + boxNum + ' #selected-move-4')) {
            pkMove4 = $('#party-box-' + boxNum + ' #selected-move-4 > div').data('move-name');
          } else { pkMove4 = null; }
          
        } else {
          pkName = null;
          pkMove1 = null;
          pkMove2 = null;
          pkMove3 = null;
          pkMove4 = null;
        }
        return [pkName, pkMove1, pkMove2, pkMove3, pkMove4];
      }

      var pk1, pk2, pk3, pk4, pk5, pk6;

      pk1 = [pBDC(1)[0], pBDC(1)[1], pBDC(1)[2], pBDC(1)[3], pBDC(1)[4]];
      pk2 = [pBDC(2)[0], pBDC(2)[1], pBDC(2)[2], pBDC(2)[3], pBDC(2)[4]];
      pk3 = [pBDC(3)[0], pBDC(3)[1], pBDC(3)[2], pBDC(3)[3], pBDC(3)[4]];
      pk4 = [pBDC(4)[0], pBDC(4)[1], pBDC(4)[2], pBDC(4)[3], pBDC(4)[4]];
      pk5 = [pBDC(5)[0], pBDC(5)[1], pBDC(5)[2], pBDC(5)[3], pBDC(5)[4]];
      pk6 = [pBDC(6)[0], pBDC(6)[1], pBDC(6)[2], pBDC(6)[3], pBDC(6)[4]];

      var sJSON = JSON.stringify({"party": [
        { "pokemon1": 
          { "pokemonName":pk1[0], "move1":pk1[1], "move2":pk1[2], "move3":pk1[3], "move4":pk1[4] }},
        { "pokemon2": 
          { "pokemonName":pk2[0], "move1":pk2[1], "move2":pk2[2], "move3":pk2[3], "move4":pk2[4] }},
        { "pokemon3": 
          { "pokemonName":pk3[0], "move1":pk3[1], "move2":pk3[2], "move3":pk3[3], "move4":pk3[4] }},
        { "pokemon4": 
          { "pokemonName":pk4[0], "move1":pk4[1], "move2":pk4[2], "move3":pk4[3], "move4":pk4[4] }},
        { "pokemon5": 
          { "pokemonName":pk5[0], "move1":pk5[1], "move2":pk5[2], "move3":pk5[3], "move4":pk5[4] }},
        { "pokemon6": 
          { "pokemonName":pk6[0], "move1":pk6[1], "move2":pk6[2], "move3":pk6[3], "move4":pk6[4] }}
      ]});
    });
  });
});



  

// Pokemon Search Box Filter
$(function (_PokemonSearchBoxFilter) {
  $("#input-pokemon").on("input", function() {
    var currentInput = $(this).val().toLowerCase();
    for (i = 0; i < pokeArr.length; i++) {
      console.log(pokeArr[i]);
      var isIn = inStr(pokeArr[i].text().toLowerCase(), currentInput);
      if (isIn) {
        $('#' + pokeArr[i].attr('id')).css("display", "block");
      } else {
        $('#' + pokeArr[i].attr('id')).css("display", "none");
      }
    }
  });
});

// Moves Search Box Filter
$(function (_MovesSearchBoxFilter) {
  $("#input-moves").on("input", function() {
    var currentInput = $(this).val().toLowerCase();
    for (i = 0; i < moveArr.length; i++) {
      console.log(moveArr[i]);
      var isIn = inStr(moveArr[i].find('#move-box-name').text().toLowerCase(), currentInput);
      if (isIn) {
        $('#' + moveArr[i].attr('id')).css("display", "block");
      } else {
        $('#' + moveArr[i].attr('id')).css("display", "none");
      }
    }
  });
});

// Mouse Hover Tool Tip
$(function (_MouseHoverToolTip) {
  $('.selected-move-box').tooltip({
    track: true
  });
});

// Moves Search Box Scroll Lock
// $(function(_MovesSearchBoxScrollLock) {
//   $('#move-column').on("scroll", function() {
//     if (window.pageYoffset > stickyOffset) {
//       $('#input-moves').addClass('sticky');
//     } else {
//       $('#input-moves').removeClass('sticky');
//     }
//   });

// });