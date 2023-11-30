--  SELECT 조회
SELECT * from customer;
select custid from 테이블 이름

-- <WHERE 조건>
-- 비교: =, <>, <, <=, >, >=
-- 범위: BETWEEN
-- 집합: IN, NOT IN
-- 패턴: LIKE
-- NULL : IS NULL, IS NOT NULL
-- 복합 조건: AND, OR


-- group by 주의 사항
-- select 절에서 group by 에서 사용한 속성과 집계함수만 사용 가능

/*
where vs having

having
- 그룹에 대해서 필터링( 그래서 group by 함께 쓰임)
- group by 보다 뒤에 위치
- 집계함수와 함께 사용 가능
 
 where
 - 각각의 행을 필터링
 - group by 보다 앞에 위치
 - 집계 함수 사용 X
*/

