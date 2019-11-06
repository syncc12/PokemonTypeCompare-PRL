
// var baseURL = "https://pokeapi.co/api/v2/";

// function movesPokeBoxJSON(apiData) {
//   var dName = apiData['name'];
//   var dSprite = apiData["sprites"]["front_default"];
//   var outJSON = (
//   '<div id="party-box-hold"><div class="container-fluid"><div class="row">' + 
//     '<li id="moves-poke-box-li-' + dName + '" class="moves-poke-box-li">' +
//       '<div id="moves-poke-box-div-' + dName + '" class="moves-poke-box-div">' + 
//         '<div class="container-fluid">' +
//           '<div class="row">' +
//             '<div id="moves-poke-box-img" class="align-self-center">' +
//               '<div id="moves-poke-box-' + dName + '">' +
//               '<img id="sprite-' + dName + '" src="' + dSprite + '" alt="' + dName + '" />' +
//               '</div>' +
//             '</div>' +
//             '<div id="moves-poke-box-name" class="moves-poke-box-name-class align-self-center">' +
//               dName +
//             '</div>' +
//             '<table id="selected-moves">' +
//               '<tr>' +
//                 '<td id="selected-move-1"></td>' +
//                 '<td id="selected-move-3"></td>' +
//               '</tr>' +
//               '<tr>' +
//                 '<td id="selected-move-2"></td>' +
//                 '<td id="selected-move-4"></td>' +
//               '</tr>' +
//             '</table>' +
//           '</div>' +
//         '</div>' +
//       '</div>' +
//     '</li>'+ 
//   '</div></div></div>');
//   return outJSON;
// }

// function movesJSON(pokemonName, moveName, moveType) {
//   var outJSON = (
//     '<li id="move-box-li-' + pokemonName + '-' + moveName + '" class="move-box-li">' +
//       '<div id="move-box-div-' + pokemonName + '-' + moveName + '" class="move-box-div">' +
//         '<div class="container-fluid">' +
//           '<div class="row">' +
//             '<div id="move-box-type" class="mt-' + moveType + ' std-lb-imgbox"><div id="move-box-type-inner">' + moveType + '</div></div>' +
//             '<div id="move-box-name" class="align-self-center std-lb-namebox">' + moveName + '</div>' +
//           '</div>' +
//         '</div>' +
//       '</div>' +
//     '</li>');
//   return outJSON;
// }

// function fetchPokemon(orderedList) {
//   // orderedList = '#moves-poke-box-ol'
//   $.get(baseURL + "pokemon?limit=20", function(data, status) { //Max Limit: 964
//     $.each(data['results'], function(index, value) {
//       $.get(value['url'], function(data, status) {
//         var insertJSON = movesPokeBoxJSON(data);
//         $(orderedList).append(insertJSON);
//       });
//     });
//   });
// }

// function pokeBoxSelectable(selectableTag, tagToEmpty, replaceTag, displayTag) {
//   // selectableTag = "#moves-poke-box-ol"
//   // tagToEmpty = '#move-box-ul'
//   // replaceTag = '#party-box-hold'
//   // displayTag = '#party-box-hold #selected-moves'
//   $(selectableTag).selectable({
//     selected: function(event, ui) {
//       $(tagToEmpty).empty();
//       $(replaceTag).replaceWith(insertJSON);
//       $(displayTag, '#input-moves').css('display', 'block');
//     }
//   });
// }

// function fetchMoves(pokemonName, appendTag, hideTagChild) {
//   // appendTag = '#move-box-ul'
//   // hideTagChild = 'li'
//   var hideTag = appendTag + ' > ' + hideTagChild;
//   $.get(baseURL + "pokemon/" + pokemonName, function(data, status) {
//     $.each(data['moves'], function(index, value) {
//       var moveName = value['move']['name'].replace("-"," ");
//       var moveURL = value['move']['url'];
//       function typeGet() { return $.get(moveURL); }
//       $.when(typeGet()).done(function(data, status) {
//         var moveType = data['type']['name'];
//         var insertJSON = movesJSON(pokemonName, moveName, moveType);
//         $(appendTag).append(insertJSON);
//         $(hideTag).hide();
//       };
//     };
//   };
// }

// function moveBoxSelect(selectableTag, nameTag, typeTag) {
//   // selectableTag = '#move-box-ul'
//   // nameTag = "#move-box-name"
//   // typeTag = "#move-box-type"
//   $(selectableTag).selectable({
//     selected: function(event, ui) {
//       var selMoveName = $(ui['selected']).find(nameTag).text();
//       var selMoveType = $(ui['selected']).find(typeTag).text();
//       var selMoveSplitName = selMoveName.split(" ")
//       var selMoveInitials = "";
//       for (i in selMoveSplitName) {
//         selMoveInitials = selMoveInitials + " " + selMoveSplitName[i].substring(0,1)
//       }
//       selMoveInitials = selMoveInitials.toUpperCase().trim();
//       var insertJSON = '<div class="mt-small-' + selMoveType + '"><p class="p-mt-small">' + selMoveInitials + '</p></div>'
//       function isEmpty(inElement) {
//         return !$.trim($(inElement).html())
//       }
//       function isNotEmpty(inElement) {
//         return !isEmpty(inElement)
//       }
//       if (isEmpty('#selected-move-1')) {
//         $('#selected-move-1').append(insertJSON);
//       } else if (isEmpty('#selected-move-2')) {
//         $('#selected-move-2').append(insertJSON);
//       } else if (isEmpty('#selected-move-3')) {
//         $('#selected-move-3').append(insertJSON);
//       } else if (isEmpty('#selected-move-4')) {
//         $('#selected-move-4').append(insertJSON);
//       } else {}
//     }
//   });
// }

// function addToParty(buttonTag, holdTag) {
//   // buttonTag = '#add-party-button'
//   // holdTag = '#party-box-hold'
//   $(buttonTag).on("click", function() {
//     function isEmpty(inElement) {
//       return !$.trim($(inElement).html())
//     }
//     function isNotEmpty(inElement) {
//       return !isEmpty(inElement)
//     }

//     function nextOpenPartyBox() {
//       if (isEmpty('#party-box-1')) {
//         return '#party-box-1'
//       } else if (isEmpty('#party-box-2')) {
//         return '#party-box-2'
//       } else if (isEmpty('#party-box-3')) {
//         return '#party-box-3'
//       } else if (isEmpty('#party-box-4')) {
//         return '#party-box-4'
//       } else if (isEmpty('#party-box-5')) {
//         return '#party-box-5'
//       } else if (isEmpty('#party-box-6')) {
//         return '#party-box-6'
//       }
//     }

//     var pokemonSelected = false;
//     var moveSelected = false;
//     var partyFull = true;

//     if (isNotEmpty(holdTag)) {
//       pokemonSelected = true;
//     }

//     if (isNotEmpty('#selected-move-1') || isNotEmpty('#selected-move-2') || isNotEmpty('#selected-move-3') || isNotEmpty('#selected-move-4')) {
//       moveSelected = true;
//     }

//     if (isEmpty('#party-box-1') || isEmpty('#party-box-2') || isEmpty('#party-box-3') || isEmpty('#party-box-4') || isEmpty('#party-box-5') || isEmpty('#party-box-6')) {
//       partyFull = false;
//     }

//     if ((pokemonSelected == true) && (moveSelected == true) && (partyFull == false)) {
//       console.log($(holdTag).html());
//       var openPartyBox = nextOpenPartyBox();
//       $(openPartyBox).append($(holdTag).html());
//       $(holdTag).empty();
//     }
//   });
// }

// function pokemonSearchBoxFilter(inputTag, filterTagParent, filterTagChild) {
//   // inputTag = "#input-pokemon"
//   // filterTagParent = '#moves-poke-box-ol'
//   // filterTagChild = 'li'
//   var filterTag = filterTagParent + " > " + filterTagChild;
//   $(inputTag).on("input", function() {
//     var currentInput = $(this).val().toLowerCase();
//     if (currentInput == "") {
//       $(filterTag).hide();
//     } else {
//       var filterTagNC = filterTag + ":not(:contains(" + currentInput + "))" 
//       var filterTagC = filterTag + ":contains(" + currentInput + ")"
//       $(filterTagNC).hide(); 
//       $(filterTagC).show();  
//     }
//   });
// }

// $(function(_SelectionProcess1) {
//   fetchPokemon('#moves-poke-box-ol');
  
// });

// $(function (_SelectMoves) {

// });

// $(function (_SelectionProcess2) {

// });

// $(function (_PokemonSearchBoxFilter) {

// });

// $(function (_MovesSearchBoxFilter) {

// });