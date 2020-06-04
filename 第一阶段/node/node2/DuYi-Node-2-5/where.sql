--运行顺序：from where select
SELECT *
FROM employee
WHERE ismale = 1;

SELECT *
FROM department
WHERE companyId in (1, 2);

SELECT *
from employee
WHERE location is not null;

SELECT *
from employee
WHERE location is null;--null需要使用is

SELECT *
from employee
WHERE salary>=10000;

--between and在。。到。。之间
SELECT *
from employee
WHERE salary BETWEEN 10000 and 12000;

-- 模糊匹配：%（姓袁的把前面的%去掉）
SELECT *
from employee
WHERE `name` like '%袁%';

SELECT *
from employee
WHERE `name` like '袁_';

SELECT *
from employee
WHERE `name` like '张%' and ismale=0 and salary>=12000;
-- and：并且；or：或者
SELECT *
from employee
WHERE `name` like '张%' and (ismale=0 and salary>=12000
    or
    birthday>='1996-1-1');