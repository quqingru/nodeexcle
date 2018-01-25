/**
 * Created by zhangxu on 2018/1/25.
 */
'use strict'
import XLSX from 'xlsx';

const  workbook = XLSX.readFile('数据统计.xlsx',null);

//获取Excle中所有表名称

const  sheetNames=workbook.sheetNames;
console.log(sheetNames)




