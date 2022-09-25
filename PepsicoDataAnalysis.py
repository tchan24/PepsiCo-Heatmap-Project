import pandas as pd
import numpy as np

d=pd.read_csv('sample.csv')

d = d.drop(columns=['SIZE_CODE'])
d = d.drop(columns=['STATE'])
d = d.drop(columns=['TRADE_CHANNEL'])

X=d['BRAND']
Y=d['COUNTY']
X.drop_duplicates(inplace = True)
Y.drop_duplicates(inplace = True)
XS = X.astype(str)
numBrand = X.shape[0]
numCounty = Y.shape[0]
print("Brands: " + str(numBrand))
print("Counties: " + str(numCounty))

Z = d['FSCL_WK_END_DTE']
Z = Z.str.split('/', expand=True)
Z = Z[0]
Z = Z.astype(int)

#1 = Winter
#2 = Spring
#3 = Summer
#4 = Fall
for x in range(40):
  if Z.iloc[x] <= 2 or Z.iloc[x] == 12:
    Z.iloc[x]=1
  if Z.iloc[x] <= 5:
    Z.iloc[x]=2
  if Z.iloc[x] <= 8:
    Z.iloc[x] =3
  else:
    Z.iloc[x] = 4

d['FSCL_WK_END_DTE'] = Z

dict = {}
for x in range(numBrand):
  for z in range(1,5):
    if z == 1:
      name = XS.iloc[x] + 'Winter'
      dict[name] = pd.DataFrame()
    if z == 2:
      name = XS.iloc[x] + 'Spring'
      dict[name] = pd.DataFrame()
    if z == 3:
      name = XS.iloc[x] + 'Summer'
      dict[name] = pd.DataFrame()
    if z == 4:
      name = XS.iloc[x] + 'Fall'
      dict[name] = pd.DataFrame()

for x in range(d.shape[0]):
  for key in dict:
    if key == (d.iloc[x]['BRAND'] + 'Winter') and d.iloc[x]['FSCL_WK_END_DTE'] == 1:
      dict[key] = pd.concat([dict[key],d.iloc[x]])
    if key == (d.iloc[x]['BRAND'] + 'Spring') and d.iloc[x]['FSCL_WK_END_DTE'] == 2:
      dict[key] = pd.concat([dict[key],d.iloc[x]])
    if key == (d.iloc[x]['BRAND'] + 'Summer') and d.iloc[x]['FSCL_WK_END_DTE'] == 3:
      dict[key] = pd.concat([dict[key],d.iloc[x]])
    if key == (d.iloc[x]['BRAND'] + 'Fall') and d.iloc[x]['FSCL_WK_END_DTE'] == 4:
      dict[key] = pd.concat([dict[key],d.iloc[x]])

for x in range(numBrand):
  for z in range(1,5):
    if z == 1:
      name = XS.iloc[x] + 'Winter'
      dict[name].to_csv(name + '.csv', index=False, header=False)
    if z == 2:
      name = XS.iloc[x] + 'Spring'
      dict[name].to_csv(name + '.csv', index=False, header=False)
    if z == 3:
      name = XS.iloc[x] + 'Summer'
      dict[name].to_csv(name + '.csv', index=False, header=False)
    if z == 4:
      name = XS.iloc[x] + 'Fall'
      dict[name].to_csv(name + '.csv', index=False, header=False)

      
print(d.to_string())




