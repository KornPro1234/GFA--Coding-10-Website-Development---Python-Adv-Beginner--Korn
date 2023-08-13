START HTML
    Declare DOCTYPE as HTML

    START HTML head
        Set character encoding to UTF-8
        Set viewport settings
        Set compatibility settings
        Set title to "Simple AI Math"
        Include Bootstrap CSS from CDN
    END HTML head

    START HTML body
        Display a container with top margin

        Display heading level 1 centered with text "Hello to my first AI Math Assistant"

        START HTML form with ID "userInputForm" and top margin
            Display a form group
                Display label for input with text "Enter a sentence (e.g., What is 8 plus 10?):"
                Display input field of type "text" with Bootstrap form-control class, ID "sentence," and name "sentence"
            Display a submit button with Bootstrap btn and btn-primary classes
        END HTML form

        Display a container with top margin
            Display a table with Bootstrap table class
                Display a table row
                    Display a table data cell with text "The answer for your request is:"
                    Display a table data cell
                        Display a div element with ID "answer"
        END container

        START JavaScript
            When the form with ID "userInputForm" is submitted
                Prevent the default form submission behavior
                Get the value of the input field with ID "sentence"
                Call the function processMathStatement with the user input
                Set the content of the element with ID "answer" to the result of the function
        END JavaScript

        Include Bootstrap JS from CDNs (jQuery and Popper.js required for some Bootstrap features)
        Load "simpleMathAI.js" script
    END HTML body

END HTML




                 /-/
             __/  / 
            / ()   \
          /
         <____
              |
               \