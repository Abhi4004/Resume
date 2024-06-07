function toggleSection(sectionId) {
    var section = document.getElementById(sectionId);
    if (section.style.maxHeight) {
        section.style.maxHeight = null; // Collapse the section
    } else {
        section.style.maxHeight = section.scrollHeight + "px"; // Expand the section
    }
}