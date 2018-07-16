
// Convert native detail/summary to accessible cross-browser syntax
// This implementation is not robust due to string manipulations
// and should be treated only as a proof of concept

(function(){

  var detailsElements = document.querySelectorAll("details");

  [].forEach.call(detailsElements, convertToButton);

  function convertToButton(details) {

    // Create new wrapper element to replace <details>
    var newDetails = document.createElement("div");
    newDetails.classList.add("__detailSummary");
    var newHTML = "";

    // Get content of <summary> and other content
    var detailsHTML = details.innerHTML.split("<summary>")[1].split("</summary>");
    var summaryContent = detailsHTML[0];
    var detailsContent = detailsHTML[1];

    var headingLevel = 0;

    // Check for a header within the summary
    if (summaryContent.split("<h").length > 1) {
      headingLevel = summaryContent.split("<h")[1][0];

      // Remove header tags from summary content
      summaryContent = summaryContent.split(">")[1].split("</")[0];

      // Wrap <button> with appropriate header tag
      newHTML += "<h" + headingLevel + ">";
    }

    // Repackage <summary> into <button> which toggles the details
    newHTML += "<button class='__summary'>" + summaryContent + "</button>";

    // Close header tag, if opened
    if (headingLevel > 0) {
      newHTML += "</h" + headingLevel + ">";
    }

    // Repackage details into <div> whose visibility is toggled
    newHTML += "<div class='__details'>" + detailsContent + "</div>";
    newDetails.innerHTML = newHTML;

    // Replace <details> with new element
    details.parentNode.replaceChild(newDetails, details);

    // Listen for enter and spacebar
    newDetails.firstChild.addEventListener("keydown", function(event){
      if (event.which !== 13 && event.which !== 32) {
        return true;
      }
      event.preventDefault();
      toggleExpanded(newDetails);
      return true;
    });

    // Listen for click
    newDetails.firstChild.addEventListener("click", function(event){
      event.preventDefault();
      toggleExpanded(newDetails);
      return true;
    });

  }

  function toggleExpanded(details) {
    var summary = details.querySelector("button");
    var content = details.querySelector("div.__details");
    var expanded = summary.getAttribute("aria-expanded") === "true";
    summary.setAttribute("aria-expanded", expanded ? "false" : "true");
    expanded ? content.classList.remove("__expanded") : content.classList.add("__expanded");
  }

  })();
