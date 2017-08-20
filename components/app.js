var thoughtsModule = (function () {

  var personThoughts, shufflePerson;

  personThoughts = [];

  personThoughts[0] = new Image();
  personThoughts[0].src = "images/person/1.png";
  personThoughts[0].name = "Андруник В.А";
  personThoughts[0].rank = "професор";
  personThoughts[0].paragraph = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat";
  personThoughts[1] = new Image();
  personThoughts[1].src = "images/person/2.png";
  personThoughts[1].name = "Басюк Т.М";
  personThoughts[1].rank = "доцент";
  personThoughts[1].paragraph = "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum";
  personThoughts[2] = new Image();
  personThoughts[2].src = "images/person/3.png";
  personThoughts[2].name = "Бойко Н.І";
  personThoughts[2].rank = "доцент";
  personThoughts[2].paragraph = "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo";
  personThoughts[3] = new Image();
  personThoughts[3].src = "images/person/4.png";
  personThoughts[3].name = "Буров Є.В";
  personThoughts[3].rank = "доцент";
  personThoughts[3].paragraph = "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet";
  personThoughts[4] = new Image();
  personThoughts[4].src = "images/person/5.png";
  personThoughts[4].name = "Василюк А.С";
  personThoughts[4].rank = "доцент";
  personThoughts[4].paragraph = "Сonsectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur?";
  personThoughts[5] = new Image();
  personThoughts[5].src = "images/person/6.png";
  personThoughts[5].name = "Верес О.М";
  personThoughts[5].rank = "доцент";
  personThoughts[5].paragraph = "Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?";
  personThoughts[6] = new Image();
  personThoughts[6].src = "images/person/7.png";
  personThoughts[6].name = "Висоцька В.А";
  personThoughts[6].rank = "доцент";
  personThoughts[6].paragraph = "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness";
  personThoughts[7] = new Image();
  personThoughts[7].src = "images/person/8.png";
  personThoughts[7].name = "Вовк О.Б";
  personThoughts[7].rank = "доцент";
  personThoughts[7].paragraph = "Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes"
  personThoughts[8] = new Image();
  personThoughts[8].src = "images/person/9.png";
  personThoughts[8].name = "Гірняк М.Г";
  personThoughts[8].rank = "асистент";
  personThoughts[8].paragraph = "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga";

  shufflePerson = function (o) {
    for(var j, x, i = o.length; i; j = Math.floor(Math.random() * i), x = o[--i], o[i] = o[j], o[j] = x);
    return o;
  };

  return {

    nextPerson: function() {

      var periodicTextChange = setInterval(function() {

        personThoughts = shufflePerson(personThoughts);
        $('.person-thoughts img').fadeOut();
        $('.person-thoughts img').each(function(i){
          $(this).attr('src', personThoughts[i].src).fadeIn();
          $(this).attr('alt', personThoughts[i].name);
        });
        $('.person-thoughts figcaption').fadeOut();
        $('.person-thoughts figcaption').each(function(i){
          $(this).html('<strong>' + personThoughts[i].name + '</strong>' + '.,' + '<span>' + personThoughts[i].rank + '</span>').fadeIn();
        });
        $('.person-thoughts p').fadeOut();
        $('.person-thoughts p').each(function(i){
          $(this).html(personThoughts[i].paragraph).fadeIn();
        });
      }, 30000);

    }

  };

})();

thoughtsModule.nextPerson();
