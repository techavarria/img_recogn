function runOCR(url) {
    Tesseract.recognize(url)
         .then(function(result) {
            document.getElementById("ocr_results")
                    .innerText = result.text;
         }).progress(function(result) {
            document.getElementById("ocr_status")
                    .innerText = result["status"] + " (" +
                        (result["progress"] * 100) + "%)";
        });
}


document.getElementById("go_button")
        .addEventListener("click", function(e) {
          console.log('bien')
            var url = document.getElementById("url").value;
            console.log('bien2')
            runOCR(url);
            console.log('bien3')
        });
