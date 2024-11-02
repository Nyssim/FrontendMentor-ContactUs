function validation() {
    document.getElementById("form_content").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita o envio do formulário
        ClearField()
    });
    
    function ClearField() {
        document.getElementById('form_content').reset();
    }

}

