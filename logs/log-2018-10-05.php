<?php defined('BASEPATH') OR exit('No direct script access allowed'); ?>

ERROR - 2018-10-05 15:47:49 --> Undefined variable: post_Country at line no 31 in C:\wamp64\www\OETILibrary-Auditloge\api\application\controllers\Country.php
ERROR - 2018-10-05 15:47:49 --> Query error: Table 'demo.tblerrorlog' doesn't exist - Invalid query: INSERT INTO `tblerrorlog` (`errno`, `errtype`, `errstr`, `errfile`, `errline`, `user_agent`, `ip_address`, `time`) VALUES (8, 'Notice', 'Undefined variable: post_Country', 'C:\\wamp64\\www\\OETILibrary-Auditloge\\api\\application\\controllers\\Country.php', 31, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36', '::1', '2018-10-05 15:47:49')
ERROR - 2018-10-05 16:40:18 --> Query error: Table 'demo.tblmststate' doesn't exist - Invalid query: SELECT `c`.`CountryId`, `c`.`CountryName`, `c`.`CountryAbbreviation`, `c`.`PhonePrefix`, `c`.`IsActive`, (SELECT COUNT(st.StateId) FROM tblmststate as st WHERE st.CountryId=c.CountryId) as isdisabled
FROM `tblmstcountry` as `c`
ORDER BY `c`.`CountryId` ASC
ERROR - 2018-10-05 16:40:21 --> Query error: Table 'demo.tblmststate' doesn't exist - Invalid query: SELECT `c`.`CountryId`, `c`.`CountryName`, `c`.`CountryAbbreviation`, `c`.`PhonePrefix`, `c`.`IsActive`, (SELECT COUNT(st.StateId) FROM tblmststate as st WHERE st.CountryId=c.CountryId) as isdisabled
FROM `tblmstcountry` as `c`
ORDER BY `c`.`CountryId` ASC
ERROR - 2018-10-05 16:40:41 --> Query error: Table 'demo.tblmststate' doesn't exist - Invalid query: SELECT `c`.`CountryId`, `c`.`CountryName`, `c`.`CountryAbbreviation`, `c`.`PhonePrefix`, `c`.`IsActive`, (SELECT COUNT(st.StateId) FROM tblmststate as st WHERE st.CountryId=c.CountryId) as isdisabled
FROM `tblmstcountry` as `c`
ORDER BY `c`.`CountryId` ASC
ERROR - 2018-10-05 16:40:54 --> Query error: Table 'demo.tblmststate' doesn't exist - Invalid query: SELECT `c`.`CountryId`, `c`.`CountryName`, `c`.`CountryAbbreviation`, `c`.`PhonePrefix`, `c`.`IsActive`, (SELECT COUNT(st.StateId) FROM tblmststate as st WHERE st.CountryId=c.CountryId) as isdisabled
FROM `tblmstcountry` as `c`
ORDER BY `c`.`CountryId` ASC
ERROR - 2018-10-05 16:41:27 --> Query error: Unknown column 'c.PhonePrefix' in 'field list' - Invalid query: SELECT `c`.`CountryId`, `c`.`CountryName`, `c`.`CountryAbbreviation`, `c`.`PhonePrefix`, `c`.`IsActive`
FROM `tblmstcountry` as `c`
ORDER BY `c`.`CountryId` ASC
ERROR - 2018-10-05 16:41:32 --> Query error: Unknown column 'c.PhonePrefix' in 'field list' - Invalid query: SELECT `c`.`CountryId`, `c`.`CountryName`, `c`.`CountryAbbreviation`, `c`.`PhonePrefix`, `c`.`IsActive`
FROM `tblmstcountry` as `c`
ORDER BY `c`.`CountryId` ASC
ERROR - 2018-10-05 19:23:17 --> Undefined index: new at line no 87 in C:\wamp64\www\OETILibrary-Auditloge\api\application\models\Country_model.php
ERROR - 2018-10-05 19:23:17 --> Query error: Table 'demo.tblerrorlog' doesn't exist - Invalid query: INSERT INTO `tblerrorlog` (`errno`, `errtype`, `errstr`, `errfile`, `errline`, `user_agent`, `ip_address`, `time`) VALUES (8, 'Notice', 'Undefined index: new', 'C:\\wamp64\\www\\OETILibrary-Auditloge\\api\\application\\models\\Country_model.php', 87, 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/69.0.3497.100 Safari/537.36', '::1', '2018-10-05 19:23:17')
