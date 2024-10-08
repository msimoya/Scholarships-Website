// JavaScript code


const addSignature = (person) => {

    // Get the signature paragraph element
      let signatureParagraph = document.createElement("p");
    
        // Get the person object that was passed in
        let signatureText = `${person.name} from ${person.hometown} supports this.`;
    
        // Set the text content of the new signature
        signatureParagraph.textContent = signatureText;
    
        // Find the signatures section and append the new signature
        const signaturesSection = document.getElementById("signatures");
        signaturesSection.appendChild(signatureParagraph);
    
        reveal();
    }
    
    
    
    // Click event listener to the sign now button
    const signNowButton = document.getElementById("sign-now-button");
    
    const signNowHandler = () => {
        let nameInput = document.getElementById("name").value;
        let hometownInput = document.getElementById("hometown").value;
    
        // Call addSignature and pass a person object
        addSignature({ name: nameInput, hometown: hometownInput });
    }
    
    signNowButton.addEventListener("click", signNowHandler);
    

    // Validation form
    const validateForm = () => {
        let containsErrors = false;
    
        var petitionInputs = document.getElementById("sign-petition").elements;
    
        for (let i = 0; i < petitionInputs.length; i++) {
            if (petitionInputs[i].value.length < 2) {
                petitionInputs[i].classList.add('error');
                containsErrors = true;
            } else {
                petitionInputs[i].classList.remove('error');
            }
        }
    
        let person = {
          name: petitionInputs[0].value,
          email: petitionInputs[1].value,
          hometown: petitionInputs[2].value
        }
    
        //Validate the values of the inputs
        const email = document.getElementById('email');
        if ((!email.value.includes('@')) && (!email.value.includes('.com'))) {
            email.classList.add('error');
            containsErrors = true;
        }else {
            email.classList.remove('error');
        }
    
        if (!containsErrors) {
          addSignature(person);
            signNowHandler(); // Call signNowHandler if no errors
            // To clear the form
            for (let i = 0; i < petitionInputs.length; i++) {
                petitionInputs[i].value = ""; //clears input value
                containsErrors = false; //clears error
            }
        }
        toggleModal(person);
    }
    
    //Event listener
    signNowButton.addEventListener('click', validateForm);
    
    let animation = {
      revealDistance:100,
      initialOpacity:0,
      transitionDelay:0.5,
      transitionDuration:1,
      transitionTimingFunction:'ease-in-out',
      transitionProperty:'opacity'
    }
    
    function reveal() {
      let elements = document.querySelectorAll('.signature');
      elements.forEach((element, index) => {
        element.style.transition = `${animation.transitionProperty} ${animation.transitionDuration}s ${animation.transitionTimingFunction} ${animation.transitionDelay * index}s`;
        element.style.opacity = 1;
      });
    }
    
    function toggleModal(person) {
      const modal = document.getElementById('thanks-modal');
      const modalContent = document.getElementById('thanks-modal-content');
    
      modal.style.display = "flex";
      modalContent.textContent = `Thank you so much ${person.name}! Enjoy your time on our platform!`;
    
      const intervalId = setInterval(scaleImage, 500);
    
      setTimeout(() => {
        clearInterval(intervalId);
    

        signPetition.submit();
        modal.style.display = "none";
      }, 8000)
    }
    
    let scaleFactor = 1;
    
    let modalImage = document.getElementById('modal-image')
    
    function scaleImage() {
      if (scaleFactor === 1) {
        // If it is, set it to 0.8
        scaleFactor = 0.8;
      } else {
        // If not, set it back to 1
        scaleFactor = 1;
      }
    
      modalImage.style.transform = `scale(${scaleFactor})`;
    
    }
    // Function to toggle dark mode
    function toggle() {
        let body = document.querySelector('body');
        if (body.style.backgroundColor == 'white') {
            body.style.backgroundColor = 'black';
            body.style.color = "white";
        } else {
            body.style.backgroundColor = "white";
            body.style.color = "black";
        }
    }
    
    // Get the modal
    var modal = document.getElementById("myModal");
    
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];
    
    // When the user clicks the button, open the modal 
    document.getElementById("sign-now-button").onclick = function() {
      modal.style.display = "block";
    }
    
    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
      modal.style.display = "none";
    }
    
    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
      if (event.target == modal) {
        modal.style.display = "none";
      }
    }
    
    
