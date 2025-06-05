export const validateParametersForm = (values) => {
    const errors = {};

   
    console.log(values.noOfPlayers);

    switch (Number(values.noOfPlayers)) {
        case 2:
            if (!values.name1) {
                errors.name1 = 'Required';
            } else if (values.name1.length < 2) {
                errors.name1 = 'Must be at least 2 characters.';
            } else if (values.name1.length > 15) {
                errors.name1 = 'Must be 15 characters or less';
            }

            if (!values.name2) {
                errors.name2 = 'Required';
            } else if (values.name2.length < 2) {
                errors.name2 = 'Must be at least 2 characters.';
            } else if (values.name2.length > 15) {
                errors.name2 = 'Must be 15 characters or less';
            }

            break;

        case 3:    
            if (!values.name1) {
                errors.name1 = 'Required';
            } else if (values.name1.length < 2) {
                errors.name1 = 'Must be at least 2 characters.';
            } else if (values.name1.length > 15) {
                errors.name1 = 'Must be 15 characters or less';
            }

            if (!values.name2) {
                errors.name2 = 'Required';
            } else if (values.name2.length < 2) {
                errors.name2 = 'Must be at least 2 characters.';
            } else if (values.name2.length > 15) {
                errors.name2 = 'Must be 15 characters or less';
            }

            if (!values.name3) {
                errors.name3 = 'Required';
            } else if (values.name3.length < 2) {
                errors.name3 = 'Must be at least 2 characters.';
            } else if (values.name3.length > 15) {
                errors.name3 = 'Must be 15 characters or less';
            }

            break;

        case 4:
            if (!values.name1) {
                errors.name1 = 'Required';
            } else if (values.name1.length < 2) {
                errors.name1 = 'Must be at least 2 characters.';
            } else if (values.name1.length > 15) {
                errors.name1 = 'Must be 15 characters or less';
            }

            if (!values.name2) {
                errors.name2 = 'Required';
            } else if (values.name2.length < 2) {
                errors.name2 = 'Must be at least 2 characters.';
            } else if (values.name2.length > 15) {
                errors.name2 = 'Must be 15 characters or less';
            }

            if (!values.name3) {
                errors.name3 = 'Required';
            } else if (values.name3.length < 2) {
                errors.name3 = 'Must be at least 2 characters.';
            } else if (values.name3.length > 15) {
                errors.name3 = 'Must be 15 characters or less';
            }
            
            if (!values.name4) {
                errors.name4 = 'Required';
            } else if (values.name4.length < 2) {
                errors.name4 = 'Must be at least 2 characters.';
            } else if (values.name4.length > 15) {
                errors.name4 = 'Must be 15 characters or less';
            }

            break;


        case 5:
            if (!values.name1) {
                errors.name1 = 'Required';
            } else if (values.name1.length < 2) {
                errors.name1 = 'Must be at least 2 characters.';
            } else if (values.name1.length > 15) {
                errors.name1 = 'Must be 15 characters or less';
            }

            if (!values.name2) {
                errors.name2 = 'Required';
            } else if (values.name2.length < 2) {
                errors.name2 = 'Must be at least 2 characters.';
            } else if (values.name2.length > 15) {
                errors.name2 = 'Must be 15 characters or less';
            }

            if (!values.name3) {
                errors.name3 = 'Required';
            } else if (values.name3.length < 2) {
                errors.name3 = 'Must be at least 2 characters.';
            } else if (values.name3.length > 15) {
                errors.name3 = 'Must be 15 characters or less';
            }
            
            
            if (!values.name4) {
                errors.name4 = 'Required';
            } else if (values.name4.length < 2) {
                errors.name4 = 'Must be at least 2 characters.';
            } else if (values.name4.length > 15) {
                errors.name4 = 'Must be 15 characters or less';
            }

            
            if (!values.name5) {
                errors.name5 = 'Required';
            } else if (values.name5.length < 2) {
                errors.name5 = 'Must be at least 2 characters.';
            } else if (values.name5.length > 15) {
                errors.name5 = 'Must be 15 characters or less';
            }

            break;


        case 6:
            if (!values.name1) {
                errors.name1 = 'Required';
            } else if (values.name1.length < 2) {
                errors.name1 = 'Must be at least 2 characters.';
            } else if (values.name1.length > 15) {
                errors.name1 = 'Must be 15 characters or less';
            }

            if (!values.name2) {
                errors.name2 = 'Required';
            } else if (values.name2.length < 2) {
                errors.name2 = 'Must be at least 2 characters.';
            } else if (values.name2.length > 15) {
                errors.name2 = 'Must be 15 characters or less';
            }

            if (!values.name3) {
                errors.name3 = 'Required';
            } else if (values.name3.length < 2) {
                errors.name3 = 'Must be at least 2 characters.';
            } else if (values.name3.length > 15) {
                errors.name3 = 'Must be 15 characters or less';
            }
            
            if (!values.name4) {
                errors.name4 = 'Required';
            } else if (values.name4.length < 2) {
                errors.name4 = 'Must be at least 2 characters.';
            } else if (values.name4.length > 15) {
                errors.name4 = 'Must be 15 characters or less';
            }

            if (!values.name5) {
                errors.name5 = 'Required';
            } else if (values.name5.length < 2) {
                errors.name5 = 'Must be at least 2 characters.';
            } else if (values.name5.length > 15) {
                errors.name5 = 'Must be 15 characters or less';
            }

            
            if (!values.name6) {
                errors.name6 = 'Required';
            } else if (values.name6.length < 2) {
                errors.name6 = 'Must be at least 2 characters.';
            } else if (values.name6.length > 15) {
                errors.name6 = 'Must be 15 characters or less';
            }

            break;
        default:
            console.log ("Invalid number of players selected");
    }

    const reg = /^\d+$/;

    if (!reg.test(values.noOfLives)) {
        errors.noOfLives = 'Initial number of lives should contain only numbers.';
    }

    if (!values.noOfLives) {
        errors.noOfLives = 'Required';
    } else if (values.noOfLives.length > 2) {
        errors.noOfLives = 'Must be 2 digits or less.';
    }

    if (!reg.test(values.maxScore)) {
        errors.maxScore = 'Maximum score should contain only numbers.';
    }

    if (!values.maxScore) {
        errors.maxScore = 'Required';
    } else if (values.maxScore.length > 2) {
        errors.maxScore = 'Must be 2 digits or less.';
    }

    return errors;
};
