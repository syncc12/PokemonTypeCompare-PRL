  $(function() {
    
    function pokeDataOBJ(pokeBoxOuterHTML) {
      var pokeName = $(pokeBoxOuterHTML).children('.row').children('.poke-box-text').children('.row').children('.poke-box-name').text();
      var pokeNumber = $(pokeBoxOuterHTML).children('.row').children('.poke-box-text').children('.row').children('.poke-box-number').text();
      var pokeType1 = $(pokeBoxOuterHTML).children('.row').children('.poke-box-text').children('.row').children('.poke-box-type').children('.poke-box-type-1').text();
      var pokeType2 = $(pokeBoxOuterHTML).children('.row').children('.poke-box-text').children('.row').children('.poke-box-type').children('.poke-box-type-2').text();
      var pokeOBJ = { name: pokeName.trim(), number: pokeNumber.trim(), type1: pokeType1.trim(), type2: pokeType2.trim() };

      return pokeOBJ;
    }

    function effectDetermine(attackType1, attackType2) {
      var adDict = {
        "bug": {"advantage": ["grass","psychic","dark"], "disadvantage": ["fighting","flying","poison","ghost","steel","fire","fairy"], "neutral": ["normal","ground","rock","bug","water","electric","ice","dragon"]},
        "dark": {"advantage": ["ghost","psychic"], "disadvantage": ["fighting","dark","fairy"], "neutral": ["normal","flying","poison","ground","rock","bug","steel","fire","water","grass","electric","ice","dragon"]},
        "dragon": {"advantage": ["dragon"], "disadvantage": ["steel"], "neutral": ["normal","fighting","flying","poison","ground","rock","bug","ghost","fire","water","grass","electric","psychic","ice","dark"], "noeffect": ["fairy"]},
        "electric": {"advantage": ["flying","water"], "disadvantage": ["grass","electric","dragon"], "neutral": ["normal","fighting","poison","rock","bug","ghost","steel","fire","psychic","ice","dark","fairy"], "noeffect": ["ground"]},
        "fairy": {"advantage": ["fighting","dragon","dark"], "disadvantage": ["poison","steel","fire"], "neutral": ["normal","flying","ground","rock","bug","ghost","water","grass","electric","psychic","ice","fairy"]},
        "fighting": {"advantage": ["normal","rock","steel","ice","dark"], "disadvantage": ["flying","poison","bug","psychic","fairy"], "neutral": ["fighting","ground","fire","water","grass","electric","dragon"], "noeffect": ["ghost"]},
        "fire": {"advantage": ["bug","steel","grass","ice"], "disadvantage": ["rock","fire","water","dragon"], "neutral": ["normal","fighting","flying","poison","ground","ghost","electric","psychic","dark","fairy"]},
        "flying": {"advantage": ["fighting","bug","grass"], "disadvantage": ["rock","steel","electric"], "neutral": ["normal","flying","poison","ground","ghost","fire","water","psychic","ice","dragon","dark","fairy"]},
        "ghost": {"advantage": ["ghost","psychic"], "disadvantage": ["dark"], "neutral": ["fighting","flying","poison","ground","rock","bug","steel","fire","water","grass","electric","ice","dragon","fairy"], "noeffect": ["normal"]},
        "grass": {"advantage": ["ground","rock","water"], "disadvantage": ["flying","poison","bug","steel","fire","grass","dragon"], "neutral": ["normal","fighting","ghost","electric","psychic","ice","dark","fairy"]},
        "ground": {"advantage": ["poison","rock","steel","fire","electric"], "disadvantage": ["bug","grass"], "neutral": ["normal","fighting","ground","ghost","water","psychic","ice","dragon","dark","fairy"], "noeffect": ["flying"]},
        "ice": {"advantage": ["flying","ground","grass","dragon"], "disadvantage": ["steel","fire","water","ice"], "neutral": ["normal","fighting","poison","rock","bug","ghost","electric","psychic","dark","fairy"]},
        "normal": {"advantage": [], "disadvantage": ["rock","steel"], "neutral": ["normal","fighting","flying","poison","ground","bug","fire","water","grass","electric","psychic","ice","dragon","dark","fairy"], "noeffect": ["ghost"]},
        "poison": {"advantage": ["grass","fairy"], "disadvantage": ["poison","ground","rock","ghost"], "neutral": ["normal","fighting","flying","bug","fire","water","electric","psychic","ice","dragon","dark"], "noeffect": ["steel"]},
        "psychic": {"advantage": ["fighting","poison"], "disadvantage": ["steel","psychic"], "neutral": ["normal","flying","ground","rock","bug","ghost","fire","water","grass","electric","ice","dragon","fairy"], "noeffect": ["dark"]},
        "rock": {"advantage": ["flying","bug","fire","ice"], "disadvantage": ["fighting","ground","steel"], "neutral": ["normal","poison","rock","ghost","water","grass","electric","psychic","dragon","dark","fairy"]},
        "steel": {"advantage": ["rock","ice","fairy"], "disadvantage": ["steel","fire","water","electric"], "neutral": ["normal","fighting","flying","poison","ground","bug","ghost","grass","psychic","dragon","dark"]},
        "water": {"advantage": ["ground","rock","fire"], "disadvantage": ["water","grass","dragon"], "neutral": ["normal","fighting","flying","poison","bug","ghost","steel","electric","psychic","ice","dark","fairy"]}
      };

      var advArr1 = adDict[attackType1]["advantage"];
      var disadvArr1 = adDict[attackType1]["disadvantage"];
      var noeArr1 = adDict[attackType1]["noeffect"];
      var neutrArr1 = adDict[attackType1]["neutral"];
      
      if (attackType2 !== 'undefined') {
        if (attackType2 != "") {
          var advArr2 = adDict[attackType2]["advantage"];
          var disadvArr2 = adDict[attackType2]["disadvantage"];
          var noeArr2 = adDict[attackType2]["noeffect"];
          var neutrArr2 = adDict[attackType2]["neutral"];
        } else {
          var advArr2 = "";
          var disadvArr2 = "";
          var noeArr2 = "";
          var neutrArr2 = "";
        }
      }

      var effectArr1 = [advArr1, disadvArr1, noeArr1, neutrArr1];
      var effectArr2 = [advArr2, disadvArr2, noeArr2, neutrArr2];

      var effectArr = [effectArr1, effectArr2];

      return effectArr;

    }



    
      
      
    var pokeOBJ;
    var advantageList = $('ul#ul-advantage-list')
    var disadvantageList = $('ul#ul-disadvantage-list')
    var noeffectList = $('ul#ul-noeffect-list')
    var neutralList = $('ul#ul-neutral-list')
    










    $('.poke-box').draggable({
      snap: "#drop-box, .poke-box-home", snapMode: "inner", revert: 'invalid'
    });

    $('.poke-box').on("dragstart", function(event, ui) {
      pokeOBJ = pokeDataOBJ(this.outerHTML);
    });

    $('#drop-box, .poke-box-home').droppable({
      accept: '.poke-box',
      drop: function(event, ui) {
        $(this).find('.poke-box').append(ui.draggable);
      }
    });

    $('#drop-box').on( "drop", function(event, ui) {
        var determinedEffect = effectDetermine(pokeOBJ.type1, pokeOBJ.type2);
        console.log(determinedEffect);
        var collectAdvantage = [];
        var collectDisadvantage = [];
        var collectNoeffect = [];
        var collectNeutral = [];
        var collectedEffects = [];
        
        $.each(determinedEffect, function(i) {
          collectAdvantage.push(determinedEffect[0][0][i]);
          collectDisadvantage.push(determinedEffect[0][1][i]);
          if (typeof determinedEffect[0][2] !== 'undefined') {
            collectNoeffect.push(determinedEffect[0][2][i]);
          } else {
            collectNoeffect.push("");
          }
          collectNeutral.push(determinedEffect[0][3][i]);

          collectAdvantage.push(determinedEffect[1][0][i]);
          collectDisadvantage.push(determinedEffect[1][1][i]);
          if (typeof determinedEffect[1][2] !== 'undefined') {
            collectNoeffect.push(determinedEffect[1][2][i]);
          } else {
            collectNoeffect.push("");
          }
          collectNeutral.push(determinedEffect[1][3][i]);
        });

        collectAdvantage = $.unique(collectAdvantage);
        collectDisadvantage = $.unique(collectDisadvantage);
        collectNoeffect = $.unique(collectNoeffect);
        collectNeutral = $.unique(collectNeutral);

        collectedEffects = [collectAdvantage, collectDisadvantage, collectNoeffect, collectNeutral];

        $.each(collectedEffects, function(i) {

          var li_advantage = $('<li/>')
            .addClass('li-advantage-list')
            .addClass('pt-' + collectedEffects[0][i])
            .appendTo(advantageList);
          var a_advantage = $('<a/>')
            .addClass('a-advantage-list')
            .text(collectedEffects[0][i])
            .appendTo(li_advantage);

           var li_disadvantage = $('<li/>')
            .addClass('li-disadvantage-list')
            .addClass('pt-' + collectedEffects[1][i])
            .appendTo(disadvantageList);
          var a_disadvantage = $('<a/>')
            .addClass('a-disadvantage-list')
            .text(collectedEffects[1][i])
            .appendTo(li_disadvantage);

          if (typeof collectedEffects[2] !== 'undefined') {
          var li_noeffect = $('<li/>')
            .addClass('li-noeffect-list')
            .addClass('pt-' + collectedEffects[2][i])
            .appendTo(advantageList);
          var a_noeffect = $('<a/>')
            .addClass('a-noeffect-list')
            .text(collectedEffects[2][i])
            .appendTo(li_noeffect);
          }

          var li_neutral = $('<li/>')
            .addClass('li-neutral-list')
            .addClass('pt-' + collectedEffects[3][i])
            .appendTo(neutralList);
          var a_neutral = $('<a/>')
            .addClass('a-neutral-list')
            .text(collectedEffects[3][i])
            .appendTo(li_neutral);
        });
      });

    $(document).ready(function(){
      $("#poke-filter").on("keyup", function() {
        var filterValue = $(this).val().toLowerCase();
        $("#poke-box-all").children('.poke-box-home-break').children('.poke-box-home').children('.poke-box').filter(function() {
          var pokeBoxDiv = $(this).find('.poke-box-name');
          var toggleDiv = $(this).parents('.poke-box-home-break')
          toggleDiv.toggle(pokeBoxDiv.text().toLowerCase().indexOf(filterValue) > -1)
        });
      });
    });
    

    // $('body').click(function( event ) {
    //   console.log("clicked: " + this.lastChild.outerHTML);
    // });


    // $(document).on("click", function ( event ) {
    //   var clickedTag =  this.innerHTML;
    //   console.log("clicked: " + clickedTag)
    // });





    // $('.new-lesson-button').click(function( event ) {
    //   var lessonUrl = $( event.target ).data('lesson-url');
    //   $('#newLessonForm').attr('action', lessonUrl );
    // });

    // $('.lessons').sortable({
    //   update: function( event, ui ) {
    //     $.ajax({
    //       type: 'PUT',
    //       url: ui.item.data('update-url'),
    //       dataType: 'json',
    //       data: { lesson: { row_order_position: ui.item.index() } }
    //     });
    //   }
    // });

    // $('.sections').sortable({
    //   update: function( event, ui ) {
    //     $.ajax({
    //       type: 'PUT',
    //       url: ui.item.data('update-url'),
    //       dataType: 'json',
    //       data: { section: { row_order_position: ui.item.index() } }
    //     });
    //   }
    // });
  });