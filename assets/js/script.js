  $(function(){
    $("#bouton").click(function(){
      var result = $("#nombreClick").val();
      result++;
      $("#nombreClick").val(result);
    });
    $("#bouton-").click(function(){
      var result = $("#nombreClick").val();
      result--;
      $("#nombreClick").val(result);
  });
  });
