document.getElementById("validate").addEventListener("click", validate);
        document.getElementById("prenom").addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault(); // Empêche le formulaire de se soumettre
                validate();
            }
        });

        function validate() {
        var prenomInput = document.getElementById("prenom");
        var prenom = prenomInput.value.trim().toLowerCase(); // Récupère et nettoie le texte de l'input, et le convertit en minuscules
        var autorise = document.querySelector(".autorise");
        var content = document.querySelector(".content");
        var refuse = document.querySelector(".refuse");
        var refuse = document.querySelector(".refuse");
        if (prenom === "rosa" || prenom === "flore") {
            content.style.display = "none";
            autorise.style.display = "block";
            
            // Rediriger vers acces.html après 5 secondes
            setTimeout(function() {
                window.location.href = "acces.html";
            }, 1500);
        } else {
            refuse.style.display = "block";
            content.style.display = "none";
            // Rediriger vers index.html après 3 secondes
            setTimeout(function() {
                window.location.href = "index.html";
            }, 1200);
    }
}


