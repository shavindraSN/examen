-- In this space add all the database functions

/**
 * Get Subject names of available subjects in the question bank
 *
 */
DELIMITER ;;
CREATE DEFINER=`root`@`localhost` PROCEDURE `sp_get_available_subjects`()
BEGIN
	SELECT DISTINCT `subject_name` FROM `subjects` INNER JOIN 'questions' ON `subjects`.`id` = `questions`.`subject_id`; 
END ;;
DELIMITER ;