<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registration</title>
</head>

<body>
    <form id="registrationForm" onsubmit="submitForm(event)">
        <label for="na">Your Name:</label>
        <input type="text" id="na" name="na" placeholder="Your name" required><br><br>

        <label for="age">Age:</label>
        <input type="number" id="age" name="age" min="10" max="8000" placeholder="Age" maxlength="4" minlength="6" size="6"><br><br>

        <label for="birthday">Enter your birthday:</label>
        <input type="date" id="birthday" name="birthday"><br><br>

        <label for="color">Choose a color:</label>
        <input type="color" id="color" name="color"><br><br>

        <label for="email">Enter email:</label>
        <input type="email" id="email" name="email" placeholder="Enter email" size="30" required><br><br>

        <label for="password">Password (8-10 characters):</label>
        <input type="password" id="password" name="password" placeholder="Password" minlength="8" maxlength="10" size="14"><br><br>

        <label>Gender:</label>
        <input type="radio" id="male" name="gender" value="male"> Male
        <input type="radio" id="female" name="gender" value="female"> Female<br><br>

        <label for="education">Education:</label>
        <select id="education" name="education">
            <option value="doctorate">Doctorate</option>
            <option value="master">Master</option>
            <option selected value="bachelor">Bachelor</option>
            <option value="highschool">High School</option>
            <option value="elementary">Elementary School</option>
        </select><br><br>

        <label for="agree">Do you agree?</label>
        <input type="checkbox" id="agree" name="agree"><br><br>

        <input type="submit" value="Enroll Now">
    </form>

    <script>
        function submitForm(event) {
            event.preventDefault(); // Prevents the form from submitting normally
            // Add your JavaScript logic for handling the form data here
            // For example, you can use document.getElementById to access form elements and their values
            console.log("Form submitted!");
        }
    </script>
</body>

</html>
