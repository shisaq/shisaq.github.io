---
author: shisaq
comments: true
date: 2017-08-17 19:26:11+00:00
layout: post
title: SQL标准化设计原则
categories:
- fullstack
---

1. Every row has the same number of columns(每行都有相同数目的列).
In practice, the database system won't let us literally have different numbers of columns in different rows. But if we have columns that are sometimes empty (null) and sometimes not, or if we stuff multiple values into a single field, we're bending this rule.

2. There is a unique key and everything in a row says something about the key(包含唯一键(unique key)，该行中所有元素都表述了该键的某个方面).
The key may be one column or more than one. It may even be the whole row, as in the diet table. But we don't have duplicate rows in a table.

More importantly, if we are storing non-unique facts — such as people's names — we distinguish them using a unique identifier such as a serial number. This makes sure that we don't combine two people's grades or parking tickets just because they have the same name.

3. Facts that don't relate to the key belong in different tables(没有表述该键的元素应该被写入其他的表(tables)中).
The example here was the items table, which had items, their locations, and the location's street addresses in it. The address isn't a fact about the item; it's a fact about the location. Moving it to a separate table saves space and reduces ambiguity, and we can always reconstitute the original table using a join.

4. Tables shouldn't imply relationships that don't exist(表(tables)不应该表述实际上不存在的关系).
The example here was the job_skills table, where a single row listed one of a person's technology skills (like 'Linux') and one of their language skills (like 'French'). This made it look like their Linux knowledge was specific to French, or vice versa ... when that isn't the case in the real world. Normalizing this involved splitting the tech skills and job skills into separate tables.
