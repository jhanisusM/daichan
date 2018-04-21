$.ajax({
    url: 'https://developers.zomato.com/api/v2.1/reviews?res_id=16810575',
    beforeSend: function (xhr) {
        xhr.setRequestHeader("user-key", "107d6396172d66ecf64e46f85c440749")
    }, success: function (data) {
        console.log(data);


        for (var i = 0; i < 5; i++) {


            var tBody = $("tbody");
            var tRow = $("<tr>");

            // Methods run on jQuery selectors return the selector they we run on
            // This is why we can create and save a reference to a td in the same statement we update its text
            var ratedTd = $("<td>").text(data.user_reviews[i].review.rating);
            // var ratingTd = $("<td>").text(data.user_reviews[i].review.rating_text);
            var reviewTd = $("<td>").text(data.user_reviews[i].review.review_text);
            // Append the newly created table data to the table row
            tRow.append(ratedTd, reviewTd);
            // Append the table row to the table body
            tBody.append(tRow);

            // var paragrap = $("<div>");
            // console.log(JSON.stringify(data.user_reviews));
            console.log(data.user_reviews[i].review.rating);
            console.log(data.user_reviews[i].review.rating_text);
            console.log(data.user_reviews[i].review.review_text);
            // var rating = $("#rating").text(data.user_reviews[0].review.rating);
            // var title = $("#title").append(data.user_reviews[i].review.rating_text);

            // var review = data.user_reviews[i].review.review_text;
            // paragrap.text(review);
            // $("#review").append(paragrap);


            // document.write(data.user_reviews[i].review.rating);

            // document.write(data.user_reviews[i].review.rating_text);
            // document.write(data.user_reviews[i].review.review_text);
        }
        // document.write(JSON.stringify(data));
        //process the JSON data etc
    }
})

            // 107d6396172d66ecf64e46f85c440749 