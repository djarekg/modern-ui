import type { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | undefined;
export type InputMaybe<T> = T | undefined;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  /** A date-time string at UTC, such as 2007-12-03T10:15:30Z, compliant with the `date-time` format outlined in section 5.6 of the RFC 3339 profile of the ISO 8601 standard for representation of dates and times using the Gregorian calendar.This scalar is serialized to a string in ISO 8601 format and parsed from a string in ISO 8601 format. */
  DateTimeISO: { input: unknown; output: unknown };
}

export interface AffectedRowsOutput {
  count: Scalars["Int"]["output"];
}

export interface AggregateColor {
  _count?: Maybe<ColorCountAggregate>;
  _max?: Maybe<ColorMaxAggregate>;
  _min?: Maybe<ColorMinAggregate>;
}

export interface AggregateCustomer {
  _count?: Maybe<CustomerCountAggregate>;
  _max?: Maybe<CustomerMaxAggregate>;
  _min?: Maybe<CustomerMinAggregate>;
}

export interface AggregateInventory {
  _avg?: Maybe<InventoryAvgAggregate>;
  _count?: Maybe<InventoryCountAggregate>;
  _max?: Maybe<InventoryMaxAggregate>;
  _min?: Maybe<InventoryMinAggregate>;
  _sum?: Maybe<InventorySumAggregate>;
}

export interface AggregateLoginHistory {
  _count?: Maybe<LoginHistoryCountAggregate>;
  _max?: Maybe<LoginHistoryMaxAggregate>;
  _min?: Maybe<LoginHistoryMinAggregate>;
}

export interface AggregateProduct {
  _avg?: Maybe<ProductAvgAggregate>;
  _count?: Maybe<ProductCountAggregate>;
  _max?: Maybe<ProductMaxAggregate>;
  _min?: Maybe<ProductMinAggregate>;
  _sum?: Maybe<ProductSumAggregate>;
}

export interface AggregateProductColor {
  _count?: Maybe<ProductColorCountAggregate>;
  _max?: Maybe<ProductColorMaxAggregate>;
  _min?: Maybe<ProductColorMinAggregate>;
}

export interface AggregateProductSales {
  _avg?: Maybe<ProductSalesAvgAggregate>;
  _count?: Maybe<ProductSalesCountAggregate>;
  _max?: Maybe<ProductSalesMaxAggregate>;
  _min?: Maybe<ProductSalesMinAggregate>;
  _sum?: Maybe<ProductSalesSumAggregate>;
}

export interface AggregateUser {
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
}

export interface Color {
  ProductColor: Array<ProductColor>;
  _count?: Maybe<ColorCount>;
  dateCreated: Scalars["DateTimeISO"]["output"];
  dateUpdated: Scalars["DateTimeISO"]["output"];
  id: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
}

export interface ColorProductColorArgs {
  cursor?: InputMaybe<ProductColorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductColorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductColorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductColorWhereInput>;
}

export interface ColorCount {
  ProductColor: Scalars["Int"]["output"];
}

export interface ColorCountProductColorArgs {
  where?: InputMaybe<ProductColorWhereInput>;
}

export interface ColorCountAggregate {
  _all: Scalars["Int"]["output"];
  dateCreated: Scalars["Int"]["output"];
  dateUpdated: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  name: Scalars["Int"]["output"];
}

export interface ColorCountOrderByAggregateInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
}

export interface ColorCreateInput {
  ProductColor?: InputMaybe<ProductColorCreateNestedManyWithoutColorInput>;
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
}

export interface ColorCreateManyInput {
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
}

export interface ColorCreateNestedOneWithoutProductColorInput {
  connect?: InputMaybe<ColorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ColorCreateOrConnectWithoutProductColorInput>;
  create?: InputMaybe<ColorCreateWithoutProductColorInput>;
}

export interface ColorCreateOrConnectWithoutProductColorInput {
  create: ColorCreateWithoutProductColorInput;
  where: ColorWhereUniqueInput;
}

export interface ColorCreateWithoutProductColorInput {
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
}

export interface ColorGroupBy {
  _count?: Maybe<ColorCountAggregate>;
  _max?: Maybe<ColorMaxAggregate>;
  _min?: Maybe<ColorMinAggregate>;
  dateCreated: Scalars["DateTimeISO"]["output"];
  dateUpdated: Scalars["DateTimeISO"]["output"];
  id: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
}

export interface ColorMaxAggregate {
  dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  dateUpdated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
}

export interface ColorMaxOrderByAggregateInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
}

export interface ColorMinAggregate {
  dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  dateUpdated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
}

export interface ColorMinOrderByAggregateInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
}

export interface ColorOrderByWithAggregationInput {
  _count?: InputMaybe<ColorCountOrderByAggregateInput>;
  _max?: InputMaybe<ColorMaxOrderByAggregateInput>;
  _min?: InputMaybe<ColorMinOrderByAggregateInput>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
}

export interface ColorOrderByWithRelationInput {
  ProductColor?: InputMaybe<ProductColorOrderByRelationAggregateInput>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
}

export interface ColorRelationFilter {
  is?: InputMaybe<ColorWhereInput>;
  isNot?: InputMaybe<ColorWhereInput>;
}

export enum ColorScalarFieldEnum {
  DateCreated = 0,
  DateUpdated = 1,
  Id = 2,
  Name = 3,
}

export interface ColorScalarWhereWithAggregatesInput {
  AND?: InputMaybe<Array<ColorScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ColorScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ColorScalarWhereWithAggregatesInput>>;
  dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  dateUpdated?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
}

export interface ColorUpdateInput {
  ProductColor?: InputMaybe<ProductColorUpdateManyWithoutColorNestedInput>;
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ColorUpdateManyMutationInput {
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ColorUpdateOneRequiredWithoutProductColorNestedInput {
  connect?: InputMaybe<ColorWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ColorCreateOrConnectWithoutProductColorInput>;
  create?: InputMaybe<ColorCreateWithoutProductColorInput>;
  update?: InputMaybe<ColorUpdateToOneWithWhereWithoutProductColorInput>;
  upsert?: InputMaybe<ColorUpsertWithoutProductColorInput>;
}

export interface ColorUpdateToOneWithWhereWithoutProductColorInput {
  data: ColorUpdateWithoutProductColorInput;
  where?: InputMaybe<ColorWhereInput>;
}

export interface ColorUpdateWithoutProductColorInput {
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ColorUpsertWithoutProductColorInput {
  create: ColorCreateWithoutProductColorInput;
  update: ColorUpdateWithoutProductColorInput;
  where?: InputMaybe<ColorWhereInput>;
}

export interface ColorWhereInput {
  AND?: InputMaybe<Array<ColorWhereInput>>;
  NOT?: InputMaybe<Array<ColorWhereInput>>;
  OR?: InputMaybe<Array<ColorWhereInput>>;
  ProductColor?: InputMaybe<ProductColorListRelationFilter>;
  dateCreated?: InputMaybe<DateTimeFilter>;
  dateUpdated?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
}

export interface ColorWhereUniqueInput {
  AND?: InputMaybe<Array<ColorWhereInput>>;
  NOT?: InputMaybe<Array<ColorWhereInput>>;
  OR?: InputMaybe<Array<ColorWhereInput>>;
  ProductColor?: InputMaybe<ProductColorListRelationFilter>;
  dateCreated?: InputMaybe<DateTimeFilter>;
  dateUpdated?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<StringFilter>;
}

export interface CreateManyAndReturnColor {
  dateCreated: Scalars["DateTimeISO"]["output"];
  dateUpdated: Scalars["DateTimeISO"]["output"];
  id: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
}

export interface CreateManyAndReturnCustomer {
  address: Scalars["String"]["output"];
  dateCreated: Scalars["DateTimeISO"]["output"];
  dateUpdated: Scalars["DateTimeISO"]["output"];
  email: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  lastName: Scalars["String"]["output"];
  phone: Scalars["String"]["output"];
}

export interface CreateManyAndReturnInventory {
  dateCreated: Scalars["DateTimeISO"]["output"];
  dateUpdated: Scalars["DateTimeISO"]["output"];
  id: Scalars["String"]["output"];
  product: Product;
  productId: Scalars["String"]["output"];
  quantity: Scalars["Int"]["output"];
  size: Scalars["String"]["output"];
}

export interface CreateManyAndReturnLoginHistory {
  id: Scalars["String"]["output"];
  loginTime: Scalars["DateTimeISO"]["output"];
  user: User;
  userId: Scalars["String"]["output"];
}

export interface CreateManyAndReturnProduct {
  dateCreated: Scalars["DateTimeISO"]["output"];
  dateUpdated: Scalars["DateTimeISO"]["output"];
  description: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  price: Scalars["Float"]["output"];
  type: Scalars["String"]["output"];
}

export interface CreateManyAndReturnProductColor {
  color: Color;
  colorId: Scalars["String"]["output"];
  dateCreated: Scalars["DateTimeISO"]["output"];
  dateUpdated: Scalars["DateTimeISO"]["output"];
  id: Scalars["String"]["output"];
  product: Product;
  productId: Scalars["String"]["output"];
}

export interface CreateManyAndReturnProductSales {
  Customer: Customer;
  User: User;
  customerId: Scalars["String"]["output"];
  dateCreated: Scalars["DateTimeISO"]["output"];
  dateUpdated: Scalars["DateTimeISO"]["output"];
  id: Scalars["String"]["output"];
  price: Scalars["Float"]["output"];
  product: Product;
  productId: Scalars["String"]["output"];
  quantity: Scalars["Int"]["output"];
  userId: Scalars["String"]["output"];
}

export interface CreateManyAndReturnUser {
  address: Scalars["String"]["output"];
  dateCreated: Scalars["DateTimeISO"]["output"];
  email: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  lastName: Scalars["String"]["output"];
  password: Scalars["String"]["output"];
  phone: Scalars["String"]["output"];
  role: Scalars["String"]["output"];
}

export interface Customer {
  _count?: Maybe<CustomerCount>;
  address: Scalars["String"]["output"];
  dateCreated: Scalars["DateTimeISO"]["output"];
  dateUpdated: Scalars["DateTimeISO"]["output"];
  email: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  lastName: Scalars["String"]["output"];
  phone: Scalars["String"]["output"];
  productSales: Array<ProductSales>;
}

export interface CustomerProductSalesArgs {
  cursor?: InputMaybe<ProductSalesWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductSalesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductSalesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductSalesWhereInput>;
}

export interface CustomerCount {
  productSales: Scalars["Int"]["output"];
}

export interface CustomerCountProductSalesArgs {
  where?: InputMaybe<ProductSalesWhereInput>;
}

export interface CustomerCountAggregate {
  _all: Scalars["Int"]["output"];
  address: Scalars["Int"]["output"];
  dateCreated: Scalars["Int"]["output"];
  dateUpdated: Scalars["Int"]["output"];
  email: Scalars["Int"]["output"];
  firstName: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  lastName: Scalars["Int"]["output"];
  phone: Scalars["Int"]["output"];
}

export interface CustomerCountOrderByAggregateInput {
  address?: InputMaybe<SortOrder>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
}

export interface CustomerCreateInput {
  address: Scalars["String"]["input"];
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  id?: InputMaybe<Scalars["String"]["input"]>;
  lastName: Scalars["String"]["input"];
  phone: Scalars["String"]["input"];
  productSales?: InputMaybe<ProductSalesCreateNestedManyWithoutCustomerInput>;
}

export interface CustomerCreateManyInput {
  address: Scalars["String"]["input"];
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  id?: InputMaybe<Scalars["String"]["input"]>;
  lastName: Scalars["String"]["input"];
  phone: Scalars["String"]["input"];
}

export interface CustomerCreateNestedOneWithoutProductSalesInput {
  connect?: InputMaybe<CustomerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CustomerCreateOrConnectWithoutProductSalesInput>;
  create?: InputMaybe<CustomerCreateWithoutProductSalesInput>;
}

export interface CustomerCreateOrConnectWithoutProductSalesInput {
  create: CustomerCreateWithoutProductSalesInput;
  where: CustomerWhereUniqueInput;
}

export interface CustomerCreateWithoutProductSalesInput {
  address: Scalars["String"]["input"];
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  id?: InputMaybe<Scalars["String"]["input"]>;
  lastName: Scalars["String"]["input"];
  phone: Scalars["String"]["input"];
}

export interface CustomerGroupBy {
  _count?: Maybe<CustomerCountAggregate>;
  _max?: Maybe<CustomerMaxAggregate>;
  _min?: Maybe<CustomerMinAggregate>;
  address: Scalars["String"]["output"];
  dateCreated: Scalars["DateTimeISO"]["output"];
  dateUpdated: Scalars["DateTimeISO"]["output"];
  email: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  lastName: Scalars["String"]["output"];
  phone: Scalars["String"]["output"];
}

export interface CustomerMaxAggregate {
  address?: Maybe<Scalars["String"]["output"]>;
  dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  dateUpdated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
}

export interface CustomerMaxOrderByAggregateInput {
  address?: InputMaybe<SortOrder>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
}

export interface CustomerMinAggregate {
  address?: Maybe<Scalars["String"]["output"]>;
  dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  dateUpdated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
}

export interface CustomerMinOrderByAggregateInput {
  address?: InputMaybe<SortOrder>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
}

export interface CustomerOrderByWithAggregationInput {
  _count?: InputMaybe<CustomerCountOrderByAggregateInput>;
  _max?: InputMaybe<CustomerMaxOrderByAggregateInput>;
  _min?: InputMaybe<CustomerMinOrderByAggregateInput>;
  address?: InputMaybe<SortOrder>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
}

export interface CustomerOrderByWithRelationInput {
  address?: InputMaybe<SortOrder>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  productSales?: InputMaybe<ProductSalesOrderByRelationAggregateInput>;
}

export interface CustomerRelationFilter {
  is?: InputMaybe<CustomerWhereInput>;
  isNot?: InputMaybe<CustomerWhereInput>;
}

export enum CustomerScalarFieldEnum {
  Address = 0,
  DateCreated = 1,
  DateUpdated = 2,
  Email = 3,
  FirstName = 4,
  Id = 5,
  LastName = 6,
  Phone = 7,
}

export interface CustomerScalarWhereWithAggregatesInput {
  AND?: InputMaybe<Array<CustomerScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<CustomerScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<CustomerScalarWhereWithAggregatesInput>>;
  address?: InputMaybe<StringWithAggregatesFilter>;
  dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  dateUpdated?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  firstName?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  lastName?: InputMaybe<StringWithAggregatesFilter>;
  phone?: InputMaybe<StringWithAggregatesFilter>;
}

export interface CustomerUpdateInput {
  address?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  productSales?: InputMaybe<ProductSalesUpdateManyWithoutCustomerNestedInput>;
}

export interface CustomerUpdateManyMutationInput {
  address?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
}

export interface CustomerUpdateOneRequiredWithoutProductSalesNestedInput {
  connect?: InputMaybe<CustomerWhereUniqueInput>;
  connectOrCreate?: InputMaybe<CustomerCreateOrConnectWithoutProductSalesInput>;
  create?: InputMaybe<CustomerCreateWithoutProductSalesInput>;
  update?: InputMaybe<CustomerUpdateToOneWithWhereWithoutProductSalesInput>;
  upsert?: InputMaybe<CustomerUpsertWithoutProductSalesInput>;
}

export interface CustomerUpdateToOneWithWhereWithoutProductSalesInput {
  data: CustomerUpdateWithoutProductSalesInput;
  where?: InputMaybe<CustomerWhereInput>;
}

export interface CustomerUpdateWithoutProductSalesInput {
  address?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
}

export interface CustomerUpsertWithoutProductSalesInput {
  create: CustomerCreateWithoutProductSalesInput;
  update: CustomerUpdateWithoutProductSalesInput;
  where?: InputMaybe<CustomerWhereInput>;
}

export interface CustomerWhereInput {
  AND?: InputMaybe<Array<CustomerWhereInput>>;
  NOT?: InputMaybe<Array<CustomerWhereInput>>;
  OR?: InputMaybe<Array<CustomerWhereInput>>;
  address?: InputMaybe<StringFilter>;
  dateCreated?: InputMaybe<DateTimeFilter>;
  dateUpdated?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  productSales?: InputMaybe<ProductSalesListRelationFilter>;
}

export interface CustomerWhereUniqueInput {
  AND?: InputMaybe<Array<CustomerWhereInput>>;
  NOT?: InputMaybe<Array<CustomerWhereInput>>;
  OR?: InputMaybe<Array<CustomerWhereInput>>;
  address?: InputMaybe<StringFilter>;
  dateCreated?: InputMaybe<DateTimeFilter>;
  dateUpdated?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  productSales?: InputMaybe<ProductSalesListRelationFilter>;
}

export interface DateTimeFilter {
  equals?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  gt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  gte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  in?: InputMaybe<Array<Scalars["DateTimeISO"]["input"]>>;
  lt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  lte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTimeISO"]["input"]>>;
}

export interface DateTimeWithAggregatesFilter {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  gt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  gte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  in?: InputMaybe<Array<Scalars["DateTimeISO"]["input"]>>;
  lt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  lte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTimeISO"]["input"]>>;
}

export interface FloatFilter {
  equals?: InputMaybe<Scalars["Float"]["input"]>;
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  lte?: InputMaybe<Scalars["Float"]["input"]>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars["Float"]["input"]>>;
}

export interface FloatWithAggregatesFilter {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars["Float"]["input"]>;
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  lte?: InputMaybe<Scalars["Float"]["input"]>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars["Float"]["input"]>>;
}

export interface IntFilter {
  equals?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
}

export interface IntWithAggregatesFilter {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
}

export interface Inventory {
  dateCreated: Scalars["DateTimeISO"]["output"];
  dateUpdated: Scalars["DateTimeISO"]["output"];
  id: Scalars["String"]["output"];
  product: Product;
  productId: Scalars["String"]["output"];
  quantity: Scalars["Int"]["output"];
  size: Scalars["String"]["output"];
}

export interface InventoryAvgAggregate {
  quantity?: Maybe<Scalars["Float"]["output"]>;
}

export interface InventoryAvgOrderByAggregateInput {
  quantity?: InputMaybe<SortOrder>;
}

export interface InventoryCountAggregate {
  _all: Scalars["Int"]["output"];
  dateCreated: Scalars["Int"]["output"];
  dateUpdated: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  productId: Scalars["Int"]["output"];
  quantity: Scalars["Int"]["output"];
  size: Scalars["Int"]["output"];
}

export interface InventoryCountOrderByAggregateInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
}

export interface InventoryCreateInput {
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  product: ProductCreateNestedOneWithoutInventoryInput;
  quantity: Scalars["Int"]["input"];
  size: Scalars["String"]["input"];
}

export interface InventoryCreateManyInput {
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  productId: Scalars["String"]["input"];
  quantity: Scalars["Int"]["input"];
  size: Scalars["String"]["input"];
}

export interface InventoryCreateManyProductInput {
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  quantity: Scalars["Int"]["input"];
  size: Scalars["String"]["input"];
}

export interface InventoryCreateManyProductInputEnvelope {
  data: Array<InventoryCreateManyProductInput>;
}

export interface InventoryCreateNestedManyWithoutProductInput {
  connect?: InputMaybe<Array<InventoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<InventoryCreateOrConnectWithoutProductInput>
  >;
  create?: InputMaybe<Array<InventoryCreateWithoutProductInput>>;
  createMany?: InputMaybe<InventoryCreateManyProductInputEnvelope>;
}

export interface InventoryCreateOrConnectWithoutProductInput {
  create: InventoryCreateWithoutProductInput;
  where: InventoryWhereUniqueInput;
}

export interface InventoryCreateWithoutProductInput {
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  quantity: Scalars["Int"]["input"];
  size: Scalars["String"]["input"];
}

export interface InventoryGroupBy {
  _avg?: Maybe<InventoryAvgAggregate>;
  _count?: Maybe<InventoryCountAggregate>;
  _max?: Maybe<InventoryMaxAggregate>;
  _min?: Maybe<InventoryMinAggregate>;
  _sum?: Maybe<InventorySumAggregate>;
  dateCreated: Scalars["DateTimeISO"]["output"];
  dateUpdated: Scalars["DateTimeISO"]["output"];
  id: Scalars["String"]["output"];
  productId: Scalars["String"]["output"];
  quantity: Scalars["Int"]["output"];
  size: Scalars["String"]["output"];
}

export interface InventoryListRelationFilter {
  every?: InputMaybe<InventoryWhereInput>;
  none?: InputMaybe<InventoryWhereInput>;
  some?: InputMaybe<InventoryWhereInput>;
}

export interface InventoryMaxAggregate {
  dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  dateUpdated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  productId?: Maybe<Scalars["String"]["output"]>;
  quantity?: Maybe<Scalars["Int"]["output"]>;
  size?: Maybe<Scalars["String"]["output"]>;
}

export interface InventoryMaxOrderByAggregateInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
}

export interface InventoryMinAggregate {
  dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  dateUpdated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  productId?: Maybe<Scalars["String"]["output"]>;
  quantity?: Maybe<Scalars["Int"]["output"]>;
  size?: Maybe<Scalars["String"]["output"]>;
}

export interface InventoryMinOrderByAggregateInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
}

export interface InventoryOrderByRelationAggregateInput {
  _count?: InputMaybe<SortOrder>;
}

export interface InventoryOrderByWithAggregationInput {
  _avg?: InputMaybe<InventoryAvgOrderByAggregateInput>;
  _count?: InputMaybe<InventoryCountOrderByAggregateInput>;
  _max?: InputMaybe<InventoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<InventoryMinOrderByAggregateInput>;
  _sum?: InputMaybe<InventorySumOrderByAggregateInput>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
}

export interface InventoryOrderByWithRelationInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  product?: InputMaybe<ProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  size?: InputMaybe<SortOrder>;
}

export enum InventoryScalarFieldEnum {
  DateCreated = 0,
  DateUpdated = 1,
  Id = 2,
  ProductId = 3,
  Quantity = 4,
  Size = 5,
}

export interface InventoryScalarWhereInput {
  AND?: InputMaybe<Array<InventoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<InventoryScalarWhereInput>>;
  OR?: InputMaybe<Array<InventoryScalarWhereInput>>;
  dateCreated?: InputMaybe<DateTimeFilter>;
  dateUpdated?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  productId?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntFilter>;
  size?: InputMaybe<StringFilter>;
}

export interface InventoryScalarWhereWithAggregatesInput {
  AND?: InputMaybe<Array<InventoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<InventoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<InventoryScalarWhereWithAggregatesInput>>;
  dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  dateUpdated?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  productId?: InputMaybe<StringWithAggregatesFilter>;
  quantity?: InputMaybe<IntWithAggregatesFilter>;
  size?: InputMaybe<StringWithAggregatesFilter>;
}

export interface InventorySumAggregate {
  quantity?: Maybe<Scalars["Int"]["output"]>;
}

export interface InventorySumOrderByAggregateInput {
  quantity?: InputMaybe<SortOrder>;
}

export interface InventoryUpdateInput {
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutInventoryNestedInput>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
  size?: InputMaybe<Scalars["String"]["input"]>;
}

export interface InventoryUpdateManyMutationInput {
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
  size?: InputMaybe<Scalars["String"]["input"]>;
}

export interface InventoryUpdateManyWithWhereWithoutProductInput {
  data: InventoryUpdateManyMutationInput;
  where: InventoryScalarWhereInput;
}

export interface InventoryUpdateManyWithoutProductNestedInput {
  connect?: InputMaybe<Array<InventoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<InventoryCreateOrConnectWithoutProductInput>
  >;
  create?: InputMaybe<Array<InventoryCreateWithoutProductInput>>;
  createMany?: InputMaybe<InventoryCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<InventoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<InventoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<InventoryWhereUniqueInput>>;
  set?: InputMaybe<Array<InventoryWhereUniqueInput>>;
  update?: InputMaybe<Array<InventoryUpdateWithWhereUniqueWithoutProductInput>>;
  updateMany?: InputMaybe<
    Array<InventoryUpdateManyWithWhereWithoutProductInput>
  >;
  upsert?: InputMaybe<Array<InventoryUpsertWithWhereUniqueWithoutProductInput>>;
}

export interface InventoryUpdateWithWhereUniqueWithoutProductInput {
  data: InventoryUpdateWithoutProductInput;
  where: InventoryWhereUniqueInput;
}

export interface InventoryUpdateWithoutProductInput {
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
  size?: InputMaybe<Scalars["String"]["input"]>;
}

export interface InventoryUpsertWithWhereUniqueWithoutProductInput {
  create: InventoryCreateWithoutProductInput;
  update: InventoryUpdateWithoutProductInput;
  where: InventoryWhereUniqueInput;
}

export interface InventoryWhereInput {
  AND?: InputMaybe<Array<InventoryWhereInput>>;
  NOT?: InputMaybe<Array<InventoryWhereInput>>;
  OR?: InputMaybe<Array<InventoryWhereInput>>;
  dateCreated?: InputMaybe<DateTimeFilter>;
  dateUpdated?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntFilter>;
  size?: InputMaybe<StringFilter>;
}

export interface InventoryWhereUniqueInput {
  AND?: InputMaybe<Array<InventoryWhereInput>>;
  NOT?: InputMaybe<Array<InventoryWhereInput>>;
  OR?: InputMaybe<Array<InventoryWhereInput>>;
  dateCreated?: InputMaybe<DateTimeFilter>;
  dateUpdated?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntFilter>;
  size?: InputMaybe<StringFilter>;
}

export interface LoginHistory {
  id: Scalars["String"]["output"];
  loginTime: Scalars["DateTimeISO"]["output"];
  user: User;
  userId: Scalars["String"]["output"];
}

export interface LoginHistoryCountAggregate {
  _all: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  loginTime: Scalars["Int"]["output"];
  userId: Scalars["Int"]["output"];
}

export interface LoginHistoryCountOrderByAggregateInput {
  id?: InputMaybe<SortOrder>;
  loginTime?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
}

export interface LoginHistoryCreateInput {
  id?: InputMaybe<Scalars["String"]["input"]>;
  loginTime?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  user: UserCreateNestedOneWithoutLoginHistoryInput;
}

export interface LoginHistoryCreateManyInput {
  id?: InputMaybe<Scalars["String"]["input"]>;
  loginTime?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  userId: Scalars["String"]["input"];
}

export interface LoginHistoryCreateManyUserInput {
  id?: InputMaybe<Scalars["String"]["input"]>;
  loginTime?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
}

export interface LoginHistoryCreateManyUserInputEnvelope {
  data: Array<LoginHistoryCreateManyUserInput>;
}

export interface LoginHistoryCreateNestedManyWithoutUserInput {
  connect?: InputMaybe<Array<LoginHistoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<LoginHistoryCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<LoginHistoryCreateWithoutUserInput>>;
  createMany?: InputMaybe<LoginHistoryCreateManyUserInputEnvelope>;
}

export interface LoginHistoryCreateOrConnectWithoutUserInput {
  create: LoginHistoryCreateWithoutUserInput;
  where: LoginHistoryWhereUniqueInput;
}

export interface LoginHistoryCreateWithoutUserInput {
  id?: InputMaybe<Scalars["String"]["input"]>;
  loginTime?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
}

export interface LoginHistoryGroupBy {
  _count?: Maybe<LoginHistoryCountAggregate>;
  _max?: Maybe<LoginHistoryMaxAggregate>;
  _min?: Maybe<LoginHistoryMinAggregate>;
  id: Scalars["String"]["output"];
  loginTime: Scalars["DateTimeISO"]["output"];
  userId: Scalars["String"]["output"];
}

export interface LoginHistoryListRelationFilter {
  every?: InputMaybe<LoginHistoryWhereInput>;
  none?: InputMaybe<LoginHistoryWhereInput>;
  some?: InputMaybe<LoginHistoryWhereInput>;
}

export interface LoginHistoryMaxAggregate {
  id?: Maybe<Scalars["String"]["output"]>;
  loginTime?: Maybe<Scalars["DateTimeISO"]["output"]>;
  userId?: Maybe<Scalars["String"]["output"]>;
}

export interface LoginHistoryMaxOrderByAggregateInput {
  id?: InputMaybe<SortOrder>;
  loginTime?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
}

export interface LoginHistoryMinAggregate {
  id?: Maybe<Scalars["String"]["output"]>;
  loginTime?: Maybe<Scalars["DateTimeISO"]["output"]>;
  userId?: Maybe<Scalars["String"]["output"]>;
}

export interface LoginHistoryMinOrderByAggregateInput {
  id?: InputMaybe<SortOrder>;
  loginTime?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
}

export interface LoginHistoryOrderByRelationAggregateInput {
  _count?: InputMaybe<SortOrder>;
}

export interface LoginHistoryOrderByWithAggregationInput {
  _count?: InputMaybe<LoginHistoryCountOrderByAggregateInput>;
  _max?: InputMaybe<LoginHistoryMaxOrderByAggregateInput>;
  _min?: InputMaybe<LoginHistoryMinOrderByAggregateInput>;
  id?: InputMaybe<SortOrder>;
  loginTime?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
}

export interface LoginHistoryOrderByWithRelationInput {
  id?: InputMaybe<SortOrder>;
  loginTime?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
}

export enum LoginHistoryScalarFieldEnum {
  Id = 0,
  LoginTime = 1,
  UserId = 2,
}

export interface LoginHistoryScalarWhereInput {
  AND?: InputMaybe<Array<LoginHistoryScalarWhereInput>>;
  NOT?: InputMaybe<Array<LoginHistoryScalarWhereInput>>;
  OR?: InputMaybe<Array<LoginHistoryScalarWhereInput>>;
  id?: InputMaybe<StringFilter>;
  loginTime?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
}

export interface LoginHistoryScalarWhereWithAggregatesInput {
  AND?: InputMaybe<Array<LoginHistoryScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<LoginHistoryScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<LoginHistoryScalarWhereWithAggregatesInput>>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  loginTime?: InputMaybe<DateTimeWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
}

export interface LoginHistoryUpdateInput {
  id?: InputMaybe<Scalars["String"]["input"]>;
  loginTime?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  user?: InputMaybe<UserUpdateOneRequiredWithoutLoginHistoryNestedInput>;
}

export interface LoginHistoryUpdateManyMutationInput {
  id?: InputMaybe<Scalars["String"]["input"]>;
  loginTime?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
}

export interface LoginHistoryUpdateManyWithWhereWithoutUserInput {
  data: LoginHistoryUpdateManyMutationInput;
  where: LoginHistoryScalarWhereInput;
}

export interface LoginHistoryUpdateManyWithoutUserNestedInput {
  connect?: InputMaybe<Array<LoginHistoryWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<LoginHistoryCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<LoginHistoryCreateWithoutUserInput>>;
  createMany?: InputMaybe<LoginHistoryCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<LoginHistoryWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<LoginHistoryScalarWhereInput>>;
  disconnect?: InputMaybe<Array<LoginHistoryWhereUniqueInput>>;
  set?: InputMaybe<Array<LoginHistoryWhereUniqueInput>>;
  update?: InputMaybe<Array<LoginHistoryUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<
    Array<LoginHistoryUpdateManyWithWhereWithoutUserInput>
  >;
  upsert?: InputMaybe<Array<LoginHistoryUpsertWithWhereUniqueWithoutUserInput>>;
}

export interface LoginHistoryUpdateWithWhereUniqueWithoutUserInput {
  data: LoginHistoryUpdateWithoutUserInput;
  where: LoginHistoryWhereUniqueInput;
}

export interface LoginHistoryUpdateWithoutUserInput {
  id?: InputMaybe<Scalars["String"]["input"]>;
  loginTime?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
}

export interface LoginHistoryUpsertWithWhereUniqueWithoutUserInput {
  create: LoginHistoryCreateWithoutUserInput;
  update: LoginHistoryUpdateWithoutUserInput;
  where: LoginHistoryWhereUniqueInput;
}

export interface LoginHistoryWhereInput {
  AND?: InputMaybe<Array<LoginHistoryWhereInput>>;
  NOT?: InputMaybe<Array<LoginHistoryWhereInput>>;
  OR?: InputMaybe<Array<LoginHistoryWhereInput>>;
  id?: InputMaybe<StringFilter>;
  loginTime?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
}

export interface LoginHistoryWhereUniqueInput {
  AND?: InputMaybe<Array<LoginHistoryWhereInput>>;
  NOT?: InputMaybe<Array<LoginHistoryWhereInput>>;
  OR?: InputMaybe<Array<LoginHistoryWhereInput>>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  loginTime?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
}

export interface Mutation {
  createManyAndReturnColor: Array<CreateManyAndReturnColor>;
  createManyAndReturnCustomer: Array<CreateManyAndReturnCustomer>;
  createManyAndReturnInventory: Array<CreateManyAndReturnInventory>;
  createManyAndReturnLoginHistory: Array<CreateManyAndReturnLoginHistory>;
  createManyAndReturnProduct: Array<CreateManyAndReturnProduct>;
  createManyAndReturnProductColor: Array<CreateManyAndReturnProductColor>;
  createManyAndReturnProductSales: Array<CreateManyAndReturnProductSales>;
  createManyAndReturnUser: Array<CreateManyAndReturnUser>;
  createManyColor: AffectedRowsOutput;
  createManyCustomer: AffectedRowsOutput;
  createManyInventory: AffectedRowsOutput;
  createManyLoginHistory: AffectedRowsOutput;
  createManyProduct: AffectedRowsOutput;
  createManyProductColor: AffectedRowsOutput;
  createManyProductSales: AffectedRowsOutput;
  createManyUser: AffectedRowsOutput;
  createOneColor: Color;
  createOneCustomer: Customer;
  createOneInventory: Inventory;
  createOneLoginHistory: LoginHistory;
  createOneProduct: Product;
  createOneProductColor: ProductColor;
  createOneProductSales: ProductSales;
  createOneUser: User;
  deleteManyColor: AffectedRowsOutput;
  deleteManyCustomer: AffectedRowsOutput;
  deleteManyInventory: AffectedRowsOutput;
  deleteManyLoginHistory: AffectedRowsOutput;
  deleteManyProduct: AffectedRowsOutput;
  deleteManyProductColor: AffectedRowsOutput;
  deleteManyProductSales: AffectedRowsOutput;
  deleteManyUser: AffectedRowsOutput;
  deleteOneColor?: Maybe<Color>;
  deleteOneCustomer?: Maybe<Customer>;
  deleteOneInventory?: Maybe<Inventory>;
  deleteOneLoginHistory?: Maybe<LoginHistory>;
  deleteOneProduct?: Maybe<Product>;
  deleteOneProductColor?: Maybe<ProductColor>;
  deleteOneProductSales?: Maybe<ProductSales>;
  deleteOneUser?: Maybe<User>;
  updateManyColor: AffectedRowsOutput;
  updateManyCustomer: AffectedRowsOutput;
  updateManyInventory: AffectedRowsOutput;
  updateManyLoginHistory: AffectedRowsOutput;
  updateManyProduct: AffectedRowsOutput;
  updateManyProductColor: AffectedRowsOutput;
  updateManyProductSales: AffectedRowsOutput;
  updateManyUser: AffectedRowsOutput;
  updateOneColor?: Maybe<Color>;
  updateOneCustomer?: Maybe<Customer>;
  updateOneInventory?: Maybe<Inventory>;
  updateOneLoginHistory?: Maybe<LoginHistory>;
  updateOneProduct?: Maybe<Product>;
  updateOneProductColor?: Maybe<ProductColor>;
  updateOneProductSales?: Maybe<ProductSales>;
  updateOneUser?: Maybe<User>;
  upsertOneColor: Color;
  upsertOneCustomer: Customer;
  upsertOneInventory: Inventory;
  upsertOneLoginHistory: LoginHistory;
  upsertOneProduct: Product;
  upsertOneProductColor: ProductColor;
  upsertOneProductSales: ProductSales;
  upsertOneUser: User;
}

export interface MutationCreateManyAndReturnColorArgs {
  data: Array<ColorCreateManyInput>;
}

export interface MutationCreateManyAndReturnCustomerArgs {
  data: Array<CustomerCreateManyInput>;
}

export interface MutationCreateManyAndReturnInventoryArgs {
  data: Array<InventoryCreateManyInput>;
}

export interface MutationCreateManyAndReturnLoginHistoryArgs {
  data: Array<LoginHistoryCreateManyInput>;
}

export interface MutationCreateManyAndReturnProductArgs {
  data: Array<ProductCreateManyInput>;
}

export interface MutationCreateManyAndReturnProductColorArgs {
  data: Array<ProductColorCreateManyInput>;
}

export interface MutationCreateManyAndReturnProductSalesArgs {
  data: Array<ProductSalesCreateManyInput>;
}

export interface MutationCreateManyAndReturnUserArgs {
  data: Array<UserCreateManyInput>;
}

export interface MutationCreateManyColorArgs {
  data: Array<ColorCreateManyInput>;
}

export interface MutationCreateManyCustomerArgs {
  data: Array<CustomerCreateManyInput>;
}

export interface MutationCreateManyInventoryArgs {
  data: Array<InventoryCreateManyInput>;
}

export interface MutationCreateManyLoginHistoryArgs {
  data: Array<LoginHistoryCreateManyInput>;
}

export interface MutationCreateManyProductArgs {
  data: Array<ProductCreateManyInput>;
}

export interface MutationCreateManyProductColorArgs {
  data: Array<ProductColorCreateManyInput>;
}

export interface MutationCreateManyProductSalesArgs {
  data: Array<ProductSalesCreateManyInput>;
}

export interface MutationCreateManyUserArgs {
  data: Array<UserCreateManyInput>;
}

export interface MutationCreateOneColorArgs {
  data: ColorCreateInput;
}

export interface MutationCreateOneCustomerArgs {
  data: CustomerCreateInput;
}

export interface MutationCreateOneInventoryArgs {
  data: InventoryCreateInput;
}

export interface MutationCreateOneLoginHistoryArgs {
  data: LoginHistoryCreateInput;
}

export interface MutationCreateOneProductArgs {
  data: ProductCreateInput;
}

export interface MutationCreateOneProductColorArgs {
  data: ProductColorCreateInput;
}

export interface MutationCreateOneProductSalesArgs {
  data: ProductSalesCreateInput;
}

export interface MutationCreateOneUserArgs {
  data: UserCreateInput;
}

export interface MutationDeleteManyColorArgs {
  where?: InputMaybe<ColorWhereInput>;
}

export interface MutationDeleteManyCustomerArgs {
  where?: InputMaybe<CustomerWhereInput>;
}

export interface MutationDeleteManyInventoryArgs {
  where?: InputMaybe<InventoryWhereInput>;
}

export interface MutationDeleteManyLoginHistoryArgs {
  where?: InputMaybe<LoginHistoryWhereInput>;
}

export interface MutationDeleteManyProductArgs {
  where?: InputMaybe<ProductWhereInput>;
}

export interface MutationDeleteManyProductColorArgs {
  where?: InputMaybe<ProductColorWhereInput>;
}

export interface MutationDeleteManyProductSalesArgs {
  where?: InputMaybe<ProductSalesWhereInput>;
}

export interface MutationDeleteManyUserArgs {
  where?: InputMaybe<UserWhereInput>;
}

export interface MutationDeleteOneColorArgs {
  where: ColorWhereUniqueInput;
}

export interface MutationDeleteOneCustomerArgs {
  where: CustomerWhereUniqueInput;
}

export interface MutationDeleteOneInventoryArgs {
  where: InventoryWhereUniqueInput;
}

export interface MutationDeleteOneLoginHistoryArgs {
  where: LoginHistoryWhereUniqueInput;
}

export interface MutationDeleteOneProductArgs {
  where: ProductWhereUniqueInput;
}

export interface MutationDeleteOneProductColorArgs {
  where: ProductColorWhereUniqueInput;
}

export interface MutationDeleteOneProductSalesArgs {
  where: ProductSalesWhereUniqueInput;
}

export interface MutationDeleteOneUserArgs {
  where: UserWhereUniqueInput;
}

export interface MutationUpdateManyColorArgs {
  data: ColorUpdateManyMutationInput;
  where?: InputMaybe<ColorWhereInput>;
}

export interface MutationUpdateManyCustomerArgs {
  data: CustomerUpdateManyMutationInput;
  where?: InputMaybe<CustomerWhereInput>;
}

export interface MutationUpdateManyInventoryArgs {
  data: InventoryUpdateManyMutationInput;
  where?: InputMaybe<InventoryWhereInput>;
}

export interface MutationUpdateManyLoginHistoryArgs {
  data: LoginHistoryUpdateManyMutationInput;
  where?: InputMaybe<LoginHistoryWhereInput>;
}

export interface MutationUpdateManyProductArgs {
  data: ProductUpdateManyMutationInput;
  where?: InputMaybe<ProductWhereInput>;
}

export interface MutationUpdateManyProductColorArgs {
  data: ProductColorUpdateManyMutationInput;
  where?: InputMaybe<ProductColorWhereInput>;
}

export interface MutationUpdateManyProductSalesArgs {
  data: ProductSalesUpdateManyMutationInput;
  where?: InputMaybe<ProductSalesWhereInput>;
}

export interface MutationUpdateManyUserArgs {
  data: UserUpdateManyMutationInput;
  where?: InputMaybe<UserWhereInput>;
}

export interface MutationUpdateOneColorArgs {
  data: ColorUpdateInput;
  where: ColorWhereUniqueInput;
}

export interface MutationUpdateOneCustomerArgs {
  data: CustomerUpdateInput;
  where: CustomerWhereUniqueInput;
}

export interface MutationUpdateOneInventoryArgs {
  data: InventoryUpdateInput;
  where: InventoryWhereUniqueInput;
}

export interface MutationUpdateOneLoginHistoryArgs {
  data: LoginHistoryUpdateInput;
  where: LoginHistoryWhereUniqueInput;
}

export interface MutationUpdateOneProductArgs {
  data: ProductUpdateInput;
  where: ProductWhereUniqueInput;
}

export interface MutationUpdateOneProductColorArgs {
  data: ProductColorUpdateInput;
  where: ProductColorWhereUniqueInput;
}

export interface MutationUpdateOneProductSalesArgs {
  data: ProductSalesUpdateInput;
  where: ProductSalesWhereUniqueInput;
}

export interface MutationUpdateOneUserArgs {
  data: UserUpdateInput;
  where: UserWhereUniqueInput;
}

export interface MutationUpsertOneColorArgs {
  create: ColorCreateInput;
  update: ColorUpdateInput;
  where: ColorWhereUniqueInput;
}

export interface MutationUpsertOneCustomerArgs {
  create: CustomerCreateInput;
  update: CustomerUpdateInput;
  where: CustomerWhereUniqueInput;
}

export interface MutationUpsertOneInventoryArgs {
  create: InventoryCreateInput;
  update: InventoryUpdateInput;
  where: InventoryWhereUniqueInput;
}

export interface MutationUpsertOneLoginHistoryArgs {
  create: LoginHistoryCreateInput;
  update: LoginHistoryUpdateInput;
  where: LoginHistoryWhereUniqueInput;
}

export interface MutationUpsertOneProductArgs {
  create: ProductCreateInput;
  update: ProductUpdateInput;
  where: ProductWhereUniqueInput;
}

export interface MutationUpsertOneProductColorArgs {
  create: ProductColorCreateInput;
  update: ProductColorUpdateInput;
  where: ProductColorWhereUniqueInput;
}

export interface MutationUpsertOneProductSalesArgs {
  create: ProductSalesCreateInput;
  update: ProductSalesUpdateInput;
  where: ProductSalesWhereUniqueInput;
}

export interface MutationUpsertOneUserArgs {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
}

export interface NestedDateTimeFilter {
  equals?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  gt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  gte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  in?: InputMaybe<Array<Scalars["DateTimeISO"]["input"]>>;
  lt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  lte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTimeISO"]["input"]>>;
}

export interface NestedDateTimeWithAggregatesFilter {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedDateTimeFilter>;
  _min?: InputMaybe<NestedDateTimeFilter>;
  equals?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  gt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  gte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  in?: InputMaybe<Array<Scalars["DateTimeISO"]["input"]>>;
  lt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  lte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars["DateTimeISO"]["input"]>>;
}

export interface NestedFloatFilter {
  equals?: InputMaybe<Scalars["Float"]["input"]>;
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  lte?: InputMaybe<Scalars["Float"]["input"]>;
  not?: InputMaybe<NestedFloatFilter>;
  notIn?: InputMaybe<Array<Scalars["Float"]["input"]>>;
}

export interface NestedFloatWithAggregatesFilter {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedFloatFilter>;
  _min?: InputMaybe<NestedFloatFilter>;
  _sum?: InputMaybe<NestedFloatFilter>;
  equals?: InputMaybe<Scalars["Float"]["input"]>;
  gt?: InputMaybe<Scalars["Float"]["input"]>;
  gte?: InputMaybe<Scalars["Float"]["input"]>;
  in?: InputMaybe<Array<Scalars["Float"]["input"]>>;
  lt?: InputMaybe<Scalars["Float"]["input"]>;
  lte?: InputMaybe<Scalars["Float"]["input"]>;
  not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars["Float"]["input"]>>;
}

export interface NestedIntFilter {
  equals?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
}

export interface NestedIntWithAggregatesFilter {
  _avg?: InputMaybe<NestedFloatFilter>;
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedIntFilter>;
  _min?: InputMaybe<NestedIntFilter>;
  _sum?: InputMaybe<NestedIntFilter>;
  equals?: InputMaybe<Scalars["Int"]["input"]>;
  gt?: InputMaybe<Scalars["Int"]["input"]>;
  gte?: InputMaybe<Scalars["Int"]["input"]>;
  in?: InputMaybe<Array<Scalars["Int"]["input"]>>;
  lt?: InputMaybe<Scalars["Int"]["input"]>;
  lte?: InputMaybe<Scalars["Int"]["input"]>;
  not?: InputMaybe<NestedIntWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars["Int"]["input"]>>;
}

export interface NestedStringFilter {
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
}

export interface NestedStringWithAggregatesFilter {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
}

export interface Product {
  Inventory: Array<Inventory>;
  ProductColor: Array<ProductColor>;
  ProductSales: Array<ProductSales>;
  _count?: Maybe<ProductCount>;
  dateCreated: Scalars["DateTimeISO"]["output"];
  dateUpdated: Scalars["DateTimeISO"]["output"];
  description: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  price: Scalars["Float"]["output"];
  type: Scalars["String"]["output"];
}

export interface ProductInventoryArgs {
  cursor?: InputMaybe<InventoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<InventoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<InventoryWhereInput>;
}

export interface ProductProductColorArgs {
  cursor?: InputMaybe<ProductColorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductColorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductColorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductColorWhereInput>;
}

export interface ProductProductSalesArgs {
  cursor?: InputMaybe<ProductSalesWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductSalesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductSalesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductSalesWhereInput>;
}

export interface ProductAvgAggregate {
  price?: Maybe<Scalars["Float"]["output"]>;
}

export interface ProductAvgOrderByAggregateInput {
  price?: InputMaybe<SortOrder>;
}

export interface ProductColor {
  color: Color;
  colorId: Scalars["String"]["output"];
  dateCreated: Scalars["DateTimeISO"]["output"];
  dateUpdated: Scalars["DateTimeISO"]["output"];
  id: Scalars["String"]["output"];
  product: Product;
  productId: Scalars["String"]["output"];
}

export interface ProductColorCountAggregate {
  _all: Scalars["Int"]["output"];
  colorId: Scalars["Int"]["output"];
  dateCreated: Scalars["Int"]["output"];
  dateUpdated: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  productId: Scalars["Int"]["output"];
}

export interface ProductColorCountOrderByAggregateInput {
  colorId?: InputMaybe<SortOrder>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
}

export interface ProductColorCreateInput {
  color: ColorCreateNestedOneWithoutProductColorInput;
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  product: ProductCreateNestedOneWithoutProductColorInput;
}

export interface ProductColorCreateManyColorInput {
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  productId: Scalars["String"]["input"];
}

export interface ProductColorCreateManyColorInputEnvelope {
  data: Array<ProductColorCreateManyColorInput>;
}

export interface ProductColorCreateManyInput {
  colorId: Scalars["String"]["input"];
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  productId: Scalars["String"]["input"];
}

export interface ProductColorCreateManyProductInput {
  colorId: Scalars["String"]["input"];
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ProductColorCreateManyProductInputEnvelope {
  data: Array<ProductColorCreateManyProductInput>;
}

export interface ProductColorCreateNestedManyWithoutColorInput {
  connect?: InputMaybe<Array<ProductColorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ProductColorCreateOrConnectWithoutColorInput>
  >;
  create?: InputMaybe<Array<ProductColorCreateWithoutColorInput>>;
  createMany?: InputMaybe<ProductColorCreateManyColorInputEnvelope>;
}

export interface ProductColorCreateNestedManyWithoutProductInput {
  connect?: InputMaybe<Array<ProductColorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ProductColorCreateOrConnectWithoutProductInput>
  >;
  create?: InputMaybe<Array<ProductColorCreateWithoutProductInput>>;
  createMany?: InputMaybe<ProductColorCreateManyProductInputEnvelope>;
}

export interface ProductColorCreateOrConnectWithoutColorInput {
  create: ProductColorCreateWithoutColorInput;
  where: ProductColorWhereUniqueInput;
}

export interface ProductColorCreateOrConnectWithoutProductInput {
  create: ProductColorCreateWithoutProductInput;
  where: ProductColorWhereUniqueInput;
}

export interface ProductColorCreateWithoutColorInput {
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  product: ProductCreateNestedOneWithoutProductColorInput;
}

export interface ProductColorCreateWithoutProductInput {
  color: ColorCreateNestedOneWithoutProductColorInput;
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ProductColorGroupBy {
  _count?: Maybe<ProductColorCountAggregate>;
  _max?: Maybe<ProductColorMaxAggregate>;
  _min?: Maybe<ProductColorMinAggregate>;
  colorId: Scalars["String"]["output"];
  dateCreated: Scalars["DateTimeISO"]["output"];
  dateUpdated: Scalars["DateTimeISO"]["output"];
  id: Scalars["String"]["output"];
  productId: Scalars["String"]["output"];
}

export interface ProductColorListRelationFilter {
  every?: InputMaybe<ProductColorWhereInput>;
  none?: InputMaybe<ProductColorWhereInput>;
  some?: InputMaybe<ProductColorWhereInput>;
}

export interface ProductColorMaxAggregate {
  colorId?: Maybe<Scalars["String"]["output"]>;
  dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  dateUpdated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  productId?: Maybe<Scalars["String"]["output"]>;
}

export interface ProductColorMaxOrderByAggregateInput {
  colorId?: InputMaybe<SortOrder>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
}

export interface ProductColorMinAggregate {
  colorId?: Maybe<Scalars["String"]["output"]>;
  dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  dateUpdated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  productId?: Maybe<Scalars["String"]["output"]>;
}

export interface ProductColorMinOrderByAggregateInput {
  colorId?: InputMaybe<SortOrder>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
}

export interface ProductColorOrderByRelationAggregateInput {
  _count?: InputMaybe<SortOrder>;
}

export interface ProductColorOrderByWithAggregationInput {
  _count?: InputMaybe<ProductColorCountOrderByAggregateInput>;
  _max?: InputMaybe<ProductColorMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProductColorMinOrderByAggregateInput>;
  colorId?: InputMaybe<SortOrder>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
}

export interface ProductColorOrderByWithRelationInput {
  color?: InputMaybe<ColorOrderByWithRelationInput>;
  colorId?: InputMaybe<SortOrder>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  product?: InputMaybe<ProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
}

export enum ProductColorScalarFieldEnum {
  ColorId = 0,
  DateCreated = 1,
  DateUpdated = 2,
  Id = 3,
  ProductId = 4,
}

export interface ProductColorScalarWhereInput {
  AND?: InputMaybe<Array<ProductColorScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductColorScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductColorScalarWhereInput>>;
  colorId?: InputMaybe<StringFilter>;
  dateCreated?: InputMaybe<DateTimeFilter>;
  dateUpdated?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  productId?: InputMaybe<StringFilter>;
}

export interface ProductColorScalarWhereWithAggregatesInput {
  AND?: InputMaybe<Array<ProductColorScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProductColorScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProductColorScalarWhereWithAggregatesInput>>;
  colorId?: InputMaybe<StringWithAggregatesFilter>;
  dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  dateUpdated?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  productId?: InputMaybe<StringWithAggregatesFilter>;
}

export interface ProductColorUpdateInput {
  color?: InputMaybe<ColorUpdateOneRequiredWithoutProductColorNestedInput>;
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutProductColorNestedInput>;
}

export interface ProductColorUpdateManyMutationInput {
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ProductColorUpdateManyWithWhereWithoutColorInput {
  data: ProductColorUpdateManyMutationInput;
  where: ProductColorScalarWhereInput;
}

export interface ProductColorUpdateManyWithWhereWithoutProductInput {
  data: ProductColorUpdateManyMutationInput;
  where: ProductColorScalarWhereInput;
}

export interface ProductColorUpdateManyWithoutColorNestedInput {
  connect?: InputMaybe<Array<ProductColorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ProductColorCreateOrConnectWithoutColorInput>
  >;
  create?: InputMaybe<Array<ProductColorCreateWithoutColorInput>>;
  createMany?: InputMaybe<ProductColorCreateManyColorInputEnvelope>;
  delete?: InputMaybe<Array<ProductColorWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductColorScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductColorWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductColorWhereUniqueInput>>;
  update?: InputMaybe<
    Array<ProductColorUpdateWithWhereUniqueWithoutColorInput>
  >;
  updateMany?: InputMaybe<
    Array<ProductColorUpdateManyWithWhereWithoutColorInput>
  >;
  upsert?: InputMaybe<
    Array<ProductColorUpsertWithWhereUniqueWithoutColorInput>
  >;
}

export interface ProductColorUpdateManyWithoutProductNestedInput {
  connect?: InputMaybe<Array<ProductColorWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ProductColorCreateOrConnectWithoutProductInput>
  >;
  create?: InputMaybe<Array<ProductColorCreateWithoutProductInput>>;
  createMany?: InputMaybe<ProductColorCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<ProductColorWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductColorScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductColorWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductColorWhereUniqueInput>>;
  update?: InputMaybe<
    Array<ProductColorUpdateWithWhereUniqueWithoutProductInput>
  >;
  updateMany?: InputMaybe<
    Array<ProductColorUpdateManyWithWhereWithoutProductInput>
  >;
  upsert?: InputMaybe<
    Array<ProductColorUpsertWithWhereUniqueWithoutProductInput>
  >;
}

export interface ProductColorUpdateWithWhereUniqueWithoutColorInput {
  data: ProductColorUpdateWithoutColorInput;
  where: ProductColorWhereUniqueInput;
}

export interface ProductColorUpdateWithWhereUniqueWithoutProductInput {
  data: ProductColorUpdateWithoutProductInput;
  where: ProductColorWhereUniqueInput;
}

export interface ProductColorUpdateWithoutColorInput {
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutProductColorNestedInput>;
}

export interface ProductColorUpdateWithoutProductInput {
  color?: InputMaybe<ColorUpdateOneRequiredWithoutProductColorNestedInput>;
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ProductColorUpsertWithWhereUniqueWithoutColorInput {
  create: ProductColorCreateWithoutColorInput;
  update: ProductColorUpdateWithoutColorInput;
  where: ProductColorWhereUniqueInput;
}

export interface ProductColorUpsertWithWhereUniqueWithoutProductInput {
  create: ProductColorCreateWithoutProductInput;
  update: ProductColorUpdateWithoutProductInput;
  where: ProductColorWhereUniqueInput;
}

export interface ProductColorWhereInput {
  AND?: InputMaybe<Array<ProductColorWhereInput>>;
  NOT?: InputMaybe<Array<ProductColorWhereInput>>;
  OR?: InputMaybe<Array<ProductColorWhereInput>>;
  color?: InputMaybe<ColorRelationFilter>;
  colorId?: InputMaybe<StringFilter>;
  dateCreated?: InputMaybe<DateTimeFilter>;
  dateUpdated?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
}

export interface ProductColorWhereUniqueInput {
  AND?: InputMaybe<Array<ProductColorWhereInput>>;
  NOT?: InputMaybe<Array<ProductColorWhereInput>>;
  OR?: InputMaybe<Array<ProductColorWhereInput>>;
  color?: InputMaybe<ColorRelationFilter>;
  colorId?: InputMaybe<StringFilter>;
  dateCreated?: InputMaybe<DateTimeFilter>;
  dateUpdated?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
}

export interface ProductCount {
  Inventory: Scalars["Int"]["output"];
  ProductColor: Scalars["Int"]["output"];
  ProductSales: Scalars["Int"]["output"];
}

export interface ProductCountInventoryArgs {
  where?: InputMaybe<InventoryWhereInput>;
}

export interface ProductCountProductColorArgs {
  where?: InputMaybe<ProductColorWhereInput>;
}

export interface ProductCountProductSalesArgs {
  where?: InputMaybe<ProductSalesWhereInput>;
}

export interface ProductCountAggregate {
  _all: Scalars["Int"]["output"];
  dateCreated: Scalars["Int"]["output"];
  dateUpdated: Scalars["Int"]["output"];
  description: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  name: Scalars["Int"]["output"];
  price: Scalars["Int"]["output"];
  type: Scalars["Int"]["output"];
}

export interface ProductCountOrderByAggregateInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
}

export interface ProductCreateInput {
  Inventory?: InputMaybe<InventoryCreateNestedManyWithoutProductInput>;
  ProductColor?: InputMaybe<ProductColorCreateNestedManyWithoutProductInput>;
  ProductSales?: InputMaybe<ProductSalesCreateNestedManyWithoutProductInput>;
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  description: Scalars["String"]["input"];
  id?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  price: Scalars["Float"]["input"];
  type: Scalars["String"]["input"];
}

export interface ProductCreateManyInput {
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  description: Scalars["String"]["input"];
  id?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  price: Scalars["Float"]["input"];
  type: Scalars["String"]["input"];
}

export interface ProductCreateNestedOneWithoutInventoryInput {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutInventoryInput>;
  create?: InputMaybe<ProductCreateWithoutInventoryInput>;
}

export interface ProductCreateNestedOneWithoutProductColorInput {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductColorInput>;
  create?: InputMaybe<ProductCreateWithoutProductColorInput>;
}

export interface ProductCreateNestedOneWithoutProductSalesInput {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductSalesInput>;
  create?: InputMaybe<ProductCreateWithoutProductSalesInput>;
}

export interface ProductCreateOrConnectWithoutInventoryInput {
  create: ProductCreateWithoutInventoryInput;
  where: ProductWhereUniqueInput;
}

export interface ProductCreateOrConnectWithoutProductColorInput {
  create: ProductCreateWithoutProductColorInput;
  where: ProductWhereUniqueInput;
}

export interface ProductCreateOrConnectWithoutProductSalesInput {
  create: ProductCreateWithoutProductSalesInput;
  where: ProductWhereUniqueInput;
}

export interface ProductCreateWithoutInventoryInput {
  ProductColor?: InputMaybe<ProductColorCreateNestedManyWithoutProductInput>;
  ProductSales?: InputMaybe<ProductSalesCreateNestedManyWithoutProductInput>;
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  description: Scalars["String"]["input"];
  id?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  price: Scalars["Float"]["input"];
  type: Scalars["String"]["input"];
}

export interface ProductCreateWithoutProductColorInput {
  Inventory?: InputMaybe<InventoryCreateNestedManyWithoutProductInput>;
  ProductSales?: InputMaybe<ProductSalesCreateNestedManyWithoutProductInput>;
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  description: Scalars["String"]["input"];
  id?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  price: Scalars["Float"]["input"];
  type: Scalars["String"]["input"];
}

export interface ProductCreateWithoutProductSalesInput {
  Inventory?: InputMaybe<InventoryCreateNestedManyWithoutProductInput>;
  ProductColor?: InputMaybe<ProductColorCreateNestedManyWithoutProductInput>;
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  description: Scalars["String"]["input"];
  id?: InputMaybe<Scalars["String"]["input"]>;
  name: Scalars["String"]["input"];
  price: Scalars["Float"]["input"];
  type: Scalars["String"]["input"];
}

export interface ProductGroupBy {
  _avg?: Maybe<ProductAvgAggregate>;
  _count?: Maybe<ProductCountAggregate>;
  _max?: Maybe<ProductMaxAggregate>;
  _min?: Maybe<ProductMinAggregate>;
  _sum?: Maybe<ProductSumAggregate>;
  dateCreated: Scalars["DateTimeISO"]["output"];
  dateUpdated: Scalars["DateTimeISO"]["output"];
  description: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  price: Scalars["Float"]["output"];
  type: Scalars["String"]["output"];
}

export interface ProductMaxAggregate {
  dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  dateUpdated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
}

export interface ProductMaxOrderByAggregateInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
}

export interface ProductMinAggregate {
  dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  dateUpdated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  description?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  type?: Maybe<Scalars["String"]["output"]>;
}

export interface ProductMinOrderByAggregateInput {
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
}

export interface ProductOrderByWithAggregationInput {
  _avg?: InputMaybe<ProductAvgOrderByAggregateInput>;
  _count?: InputMaybe<ProductCountOrderByAggregateInput>;
  _max?: InputMaybe<ProductMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProductMinOrderByAggregateInput>;
  _sum?: InputMaybe<ProductSumOrderByAggregateInput>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
}

export interface ProductOrderByWithRelationInput {
  Inventory?: InputMaybe<InventoryOrderByRelationAggregateInput>;
  ProductColor?: InputMaybe<ProductColorOrderByRelationAggregateInput>;
  ProductSales?: InputMaybe<ProductSalesOrderByRelationAggregateInput>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  description?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  name?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  type?: InputMaybe<SortOrder>;
}

export interface ProductRelationFilter {
  is?: InputMaybe<ProductWhereInput>;
  isNot?: InputMaybe<ProductWhereInput>;
}

export interface ProductSales {
  Customer: Customer;
  User: User;
  customerId: Scalars["String"]["output"];
  dateCreated: Scalars["DateTimeISO"]["output"];
  dateUpdated: Scalars["DateTimeISO"]["output"];
  id: Scalars["String"]["output"];
  price: Scalars["Float"]["output"];
  product: Product;
  productId: Scalars["String"]["output"];
  quantity: Scalars["Int"]["output"];
  userId: Scalars["String"]["output"];
}

export interface ProductSalesAvgAggregate {
  price?: Maybe<Scalars["Float"]["output"]>;
  quantity?: Maybe<Scalars["Float"]["output"]>;
}

export interface ProductSalesAvgOrderByAggregateInput {
  price?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
}

export interface ProductSalesCountAggregate {
  _all: Scalars["Int"]["output"];
  customerId: Scalars["Int"]["output"];
  dateCreated: Scalars["Int"]["output"];
  dateUpdated: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  price: Scalars["Int"]["output"];
  productId: Scalars["Int"]["output"];
  quantity: Scalars["Int"]["output"];
  userId: Scalars["Int"]["output"];
}

export interface ProductSalesCountOrderByAggregateInput {
  customerId?: InputMaybe<SortOrder>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
}

export interface ProductSalesCreateInput {
  Customer: CustomerCreateNestedOneWithoutProductSalesInput;
  User: UserCreateNestedOneWithoutProductSalesInput;
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  price: Scalars["Float"]["input"];
  product: ProductCreateNestedOneWithoutProductSalesInput;
  quantity: Scalars["Int"]["input"];
}

export interface ProductSalesCreateManyCustomerInput {
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  price: Scalars["Float"]["input"];
  productId: Scalars["String"]["input"];
  quantity: Scalars["Int"]["input"];
  userId: Scalars["String"]["input"];
}

export interface ProductSalesCreateManyCustomerInputEnvelope {
  data: Array<ProductSalesCreateManyCustomerInput>;
}

export interface ProductSalesCreateManyInput {
  customerId: Scalars["String"]["input"];
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  price: Scalars["Float"]["input"];
  productId: Scalars["String"]["input"];
  quantity: Scalars["Int"]["input"];
  userId: Scalars["String"]["input"];
}

export interface ProductSalesCreateManyProductInput {
  customerId: Scalars["String"]["input"];
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  price: Scalars["Float"]["input"];
  quantity: Scalars["Int"]["input"];
  userId: Scalars["String"]["input"];
}

export interface ProductSalesCreateManyProductInputEnvelope {
  data: Array<ProductSalesCreateManyProductInput>;
}

export interface ProductSalesCreateManyUserInput {
  customerId: Scalars["String"]["input"];
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  price: Scalars["Float"]["input"];
  productId: Scalars["String"]["input"];
  quantity: Scalars["Int"]["input"];
}

export interface ProductSalesCreateManyUserInputEnvelope {
  data: Array<ProductSalesCreateManyUserInput>;
}

export interface ProductSalesCreateNestedManyWithoutCustomerInput {
  connect?: InputMaybe<Array<ProductSalesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ProductSalesCreateOrConnectWithoutCustomerInput>
  >;
  create?: InputMaybe<Array<ProductSalesCreateWithoutCustomerInput>>;
  createMany?: InputMaybe<ProductSalesCreateManyCustomerInputEnvelope>;
}

export interface ProductSalesCreateNestedManyWithoutProductInput {
  connect?: InputMaybe<Array<ProductSalesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ProductSalesCreateOrConnectWithoutProductInput>
  >;
  create?: InputMaybe<Array<ProductSalesCreateWithoutProductInput>>;
  createMany?: InputMaybe<ProductSalesCreateManyProductInputEnvelope>;
}

export interface ProductSalesCreateNestedManyWithoutUserInput {
  connect?: InputMaybe<Array<ProductSalesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ProductSalesCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<ProductSalesCreateWithoutUserInput>>;
  createMany?: InputMaybe<ProductSalesCreateManyUserInputEnvelope>;
}

export interface ProductSalesCreateOrConnectWithoutCustomerInput {
  create: ProductSalesCreateWithoutCustomerInput;
  where: ProductSalesWhereUniqueInput;
}

export interface ProductSalesCreateOrConnectWithoutProductInput {
  create: ProductSalesCreateWithoutProductInput;
  where: ProductSalesWhereUniqueInput;
}

export interface ProductSalesCreateOrConnectWithoutUserInput {
  create: ProductSalesCreateWithoutUserInput;
  where: ProductSalesWhereUniqueInput;
}

export interface ProductSalesCreateWithoutCustomerInput {
  User: UserCreateNestedOneWithoutProductSalesInput;
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  price: Scalars["Float"]["input"];
  product: ProductCreateNestedOneWithoutProductSalesInput;
  quantity: Scalars["Int"]["input"];
}

export interface ProductSalesCreateWithoutProductInput {
  Customer: CustomerCreateNestedOneWithoutProductSalesInput;
  User: UserCreateNestedOneWithoutProductSalesInput;
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  price: Scalars["Float"]["input"];
  quantity: Scalars["Int"]["input"];
}

export interface ProductSalesCreateWithoutUserInput {
  Customer: CustomerCreateNestedOneWithoutProductSalesInput;
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  price: Scalars["Float"]["input"];
  product: ProductCreateNestedOneWithoutProductSalesInput;
  quantity: Scalars["Int"]["input"];
}

export interface ProductSalesGroupBy {
  _avg?: Maybe<ProductSalesAvgAggregate>;
  _count?: Maybe<ProductSalesCountAggregate>;
  _max?: Maybe<ProductSalesMaxAggregate>;
  _min?: Maybe<ProductSalesMinAggregate>;
  _sum?: Maybe<ProductSalesSumAggregate>;
  customerId: Scalars["String"]["output"];
  dateCreated: Scalars["DateTimeISO"]["output"];
  dateUpdated: Scalars["DateTimeISO"]["output"];
  id: Scalars["String"]["output"];
  price: Scalars["Float"]["output"];
  productId: Scalars["String"]["output"];
  quantity: Scalars["Int"]["output"];
  userId: Scalars["String"]["output"];
}

export interface ProductSalesListRelationFilter {
  every?: InputMaybe<ProductSalesWhereInput>;
  none?: InputMaybe<ProductSalesWhereInput>;
  some?: InputMaybe<ProductSalesWhereInput>;
}

export interface ProductSalesMaxAggregate {
  customerId?: Maybe<Scalars["String"]["output"]>;
  dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  dateUpdated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  productId?: Maybe<Scalars["String"]["output"]>;
  quantity?: Maybe<Scalars["Int"]["output"]>;
  userId?: Maybe<Scalars["String"]["output"]>;
}

export interface ProductSalesMaxOrderByAggregateInput {
  customerId?: InputMaybe<SortOrder>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
}

export interface ProductSalesMinAggregate {
  customerId?: Maybe<Scalars["String"]["output"]>;
  dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  dateUpdated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  price?: Maybe<Scalars["Float"]["output"]>;
  productId?: Maybe<Scalars["String"]["output"]>;
  quantity?: Maybe<Scalars["Int"]["output"]>;
  userId?: Maybe<Scalars["String"]["output"]>;
}

export interface ProductSalesMinOrderByAggregateInput {
  customerId?: InputMaybe<SortOrder>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
}

export interface ProductSalesOrderByRelationAggregateInput {
  _count?: InputMaybe<SortOrder>;
}

export interface ProductSalesOrderByWithAggregationInput {
  _avg?: InputMaybe<ProductSalesAvgOrderByAggregateInput>;
  _count?: InputMaybe<ProductSalesCountOrderByAggregateInput>;
  _max?: InputMaybe<ProductSalesMaxOrderByAggregateInput>;
  _min?: InputMaybe<ProductSalesMinOrderByAggregateInput>;
  _sum?: InputMaybe<ProductSalesSumOrderByAggregateInput>;
  customerId?: InputMaybe<SortOrder>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  productId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
}

export interface ProductSalesOrderByWithRelationInput {
  Customer?: InputMaybe<CustomerOrderByWithRelationInput>;
  User?: InputMaybe<UserOrderByWithRelationInput>;
  customerId?: InputMaybe<SortOrder>;
  dateCreated?: InputMaybe<SortOrder>;
  dateUpdated?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  price?: InputMaybe<SortOrder>;
  product?: InputMaybe<ProductOrderByWithRelationInput>;
  productId?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
  userId?: InputMaybe<SortOrder>;
}

export enum ProductSalesScalarFieldEnum {
  CustomerId = 0,
  DateCreated = 1,
  DateUpdated = 2,
  Id = 3,
  Price = 4,
  ProductId = 5,
  Quantity = 6,
  UserId = 7,
}

export interface ProductSalesScalarWhereInput {
  AND?: InputMaybe<Array<ProductSalesScalarWhereInput>>;
  NOT?: InputMaybe<Array<ProductSalesScalarWhereInput>>;
  OR?: InputMaybe<Array<ProductSalesScalarWhereInput>>;
  customerId?: InputMaybe<StringFilter>;
  dateCreated?: InputMaybe<DateTimeFilter>;
  dateUpdated?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatFilter>;
  productId?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntFilter>;
  userId?: InputMaybe<StringFilter>;
}

export interface ProductSalesScalarWhereWithAggregatesInput {
  AND?: InputMaybe<Array<ProductSalesScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProductSalesScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProductSalesScalarWhereWithAggregatesInput>>;
  customerId?: InputMaybe<StringWithAggregatesFilter>;
  dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  dateUpdated?: InputMaybe<DateTimeWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  price?: InputMaybe<FloatWithAggregatesFilter>;
  productId?: InputMaybe<StringWithAggregatesFilter>;
  quantity?: InputMaybe<IntWithAggregatesFilter>;
  userId?: InputMaybe<StringWithAggregatesFilter>;
}

export interface ProductSalesSumAggregate {
  price?: Maybe<Scalars["Float"]["output"]>;
  quantity?: Maybe<Scalars["Int"]["output"]>;
}

export interface ProductSalesSumOrderByAggregateInput {
  price?: InputMaybe<SortOrder>;
  quantity?: InputMaybe<SortOrder>;
}

export interface ProductSalesUpdateInput {
  Customer?: InputMaybe<CustomerUpdateOneRequiredWithoutProductSalesNestedInput>;
  User?: InputMaybe<UserUpdateOneRequiredWithoutProductSalesNestedInput>;
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Float"]["input"]>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutProductSalesNestedInput>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface ProductSalesUpdateManyMutationInput {
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Float"]["input"]>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface ProductSalesUpdateManyWithWhereWithoutCustomerInput {
  data: ProductSalesUpdateManyMutationInput;
  where: ProductSalesScalarWhereInput;
}

export interface ProductSalesUpdateManyWithWhereWithoutProductInput {
  data: ProductSalesUpdateManyMutationInput;
  where: ProductSalesScalarWhereInput;
}

export interface ProductSalesUpdateManyWithWhereWithoutUserInput {
  data: ProductSalesUpdateManyMutationInput;
  where: ProductSalesScalarWhereInput;
}

export interface ProductSalesUpdateManyWithoutCustomerNestedInput {
  connect?: InputMaybe<Array<ProductSalesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ProductSalesCreateOrConnectWithoutCustomerInput>
  >;
  create?: InputMaybe<Array<ProductSalesCreateWithoutCustomerInput>>;
  createMany?: InputMaybe<ProductSalesCreateManyCustomerInputEnvelope>;
  delete?: InputMaybe<Array<ProductSalesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductSalesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductSalesWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductSalesWhereUniqueInput>>;
  update?: InputMaybe<
    Array<ProductSalesUpdateWithWhereUniqueWithoutCustomerInput>
  >;
  updateMany?: InputMaybe<
    Array<ProductSalesUpdateManyWithWhereWithoutCustomerInput>
  >;
  upsert?: InputMaybe<
    Array<ProductSalesUpsertWithWhereUniqueWithoutCustomerInput>
  >;
}

export interface ProductSalesUpdateManyWithoutProductNestedInput {
  connect?: InputMaybe<Array<ProductSalesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ProductSalesCreateOrConnectWithoutProductInput>
  >;
  create?: InputMaybe<Array<ProductSalesCreateWithoutProductInput>>;
  createMany?: InputMaybe<ProductSalesCreateManyProductInputEnvelope>;
  delete?: InputMaybe<Array<ProductSalesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductSalesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductSalesWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductSalesWhereUniqueInput>>;
  update?: InputMaybe<
    Array<ProductSalesUpdateWithWhereUniqueWithoutProductInput>
  >;
  updateMany?: InputMaybe<
    Array<ProductSalesUpdateManyWithWhereWithoutProductInput>
  >;
  upsert?: InputMaybe<
    Array<ProductSalesUpsertWithWhereUniqueWithoutProductInput>
  >;
}

export interface ProductSalesUpdateManyWithoutUserNestedInput {
  connect?: InputMaybe<Array<ProductSalesWhereUniqueInput>>;
  connectOrCreate?: InputMaybe<
    Array<ProductSalesCreateOrConnectWithoutUserInput>
  >;
  create?: InputMaybe<Array<ProductSalesCreateWithoutUserInput>>;
  createMany?: InputMaybe<ProductSalesCreateManyUserInputEnvelope>;
  delete?: InputMaybe<Array<ProductSalesWhereUniqueInput>>;
  deleteMany?: InputMaybe<Array<ProductSalesScalarWhereInput>>;
  disconnect?: InputMaybe<Array<ProductSalesWhereUniqueInput>>;
  set?: InputMaybe<Array<ProductSalesWhereUniqueInput>>;
  update?: InputMaybe<Array<ProductSalesUpdateWithWhereUniqueWithoutUserInput>>;
  updateMany?: InputMaybe<
    Array<ProductSalesUpdateManyWithWhereWithoutUserInput>
  >;
  upsert?: InputMaybe<Array<ProductSalesUpsertWithWhereUniqueWithoutUserInput>>;
}

export interface ProductSalesUpdateWithWhereUniqueWithoutCustomerInput {
  data: ProductSalesUpdateWithoutCustomerInput;
  where: ProductSalesWhereUniqueInput;
}

export interface ProductSalesUpdateWithWhereUniqueWithoutProductInput {
  data: ProductSalesUpdateWithoutProductInput;
  where: ProductSalesWhereUniqueInput;
}

export interface ProductSalesUpdateWithWhereUniqueWithoutUserInput {
  data: ProductSalesUpdateWithoutUserInput;
  where: ProductSalesWhereUniqueInput;
}

export interface ProductSalesUpdateWithoutCustomerInput {
  User?: InputMaybe<UserUpdateOneRequiredWithoutProductSalesNestedInput>;
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Float"]["input"]>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutProductSalesNestedInput>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface ProductSalesUpdateWithoutProductInput {
  Customer?: InputMaybe<CustomerUpdateOneRequiredWithoutProductSalesNestedInput>;
  User?: InputMaybe<UserUpdateOneRequiredWithoutProductSalesNestedInput>;
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Float"]["input"]>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface ProductSalesUpdateWithoutUserInput {
  Customer?: InputMaybe<CustomerUpdateOneRequiredWithoutProductSalesNestedInput>;
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Float"]["input"]>;
  product?: InputMaybe<ProductUpdateOneRequiredWithoutProductSalesNestedInput>;
  quantity?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface ProductSalesUpsertWithWhereUniqueWithoutCustomerInput {
  create: ProductSalesCreateWithoutCustomerInput;
  update: ProductSalesUpdateWithoutCustomerInput;
  where: ProductSalesWhereUniqueInput;
}

export interface ProductSalesUpsertWithWhereUniqueWithoutProductInput {
  create: ProductSalesCreateWithoutProductInput;
  update: ProductSalesUpdateWithoutProductInput;
  where: ProductSalesWhereUniqueInput;
}

export interface ProductSalesUpsertWithWhereUniqueWithoutUserInput {
  create: ProductSalesCreateWithoutUserInput;
  update: ProductSalesUpdateWithoutUserInput;
  where: ProductSalesWhereUniqueInput;
}

export interface ProductSalesWhereInput {
  AND?: InputMaybe<Array<ProductSalesWhereInput>>;
  Customer?: InputMaybe<CustomerRelationFilter>;
  NOT?: InputMaybe<Array<ProductSalesWhereInput>>;
  OR?: InputMaybe<Array<ProductSalesWhereInput>>;
  User?: InputMaybe<UserRelationFilter>;
  customerId?: InputMaybe<StringFilter>;
  dateCreated?: InputMaybe<DateTimeFilter>;
  dateUpdated?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntFilter>;
  userId?: InputMaybe<StringFilter>;
}

export interface ProductSalesWhereUniqueInput {
  AND?: InputMaybe<Array<ProductSalesWhereInput>>;
  Customer?: InputMaybe<CustomerRelationFilter>;
  NOT?: InputMaybe<Array<ProductSalesWhereInput>>;
  OR?: InputMaybe<Array<ProductSalesWhereInput>>;
  User?: InputMaybe<UserRelationFilter>;
  customerId?: InputMaybe<StringFilter>;
  dateCreated?: InputMaybe<DateTimeFilter>;
  dateUpdated?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<FloatFilter>;
  product?: InputMaybe<ProductRelationFilter>;
  productId?: InputMaybe<StringFilter>;
  quantity?: InputMaybe<IntFilter>;
  userId?: InputMaybe<StringFilter>;
}

export enum ProductScalarFieldEnum {
  DateCreated = 0,
  DateUpdated = 1,
  Description = 2,
  Id = 3,
  Name = 4,
  Price = 5,
  Type = 6,
}

export interface ProductScalarWhereWithAggregatesInput {
  AND?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<ProductScalarWhereWithAggregatesInput>>;
  dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  dateUpdated?: InputMaybe<DateTimeWithAggregatesFilter>;
  description?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  name?: InputMaybe<StringWithAggregatesFilter>;
  price?: InputMaybe<FloatWithAggregatesFilter>;
  type?: InputMaybe<StringWithAggregatesFilter>;
}

export interface ProductSumAggregate {
  price?: Maybe<Scalars["Float"]["output"]>;
}

export interface ProductSumOrderByAggregateInput {
  price?: InputMaybe<SortOrder>;
}

export interface ProductUpdateInput {
  Inventory?: InputMaybe<InventoryUpdateManyWithoutProductNestedInput>;
  ProductColor?: InputMaybe<ProductColorUpdateManyWithoutProductNestedInput>;
  ProductSales?: InputMaybe<ProductSalesUpdateManyWithoutProductNestedInput>;
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Float"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ProductUpdateManyMutationInput {
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Float"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ProductUpdateOneRequiredWithoutInventoryNestedInput {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutInventoryInput>;
  create?: InputMaybe<ProductCreateWithoutInventoryInput>;
  update?: InputMaybe<ProductUpdateToOneWithWhereWithoutInventoryInput>;
  upsert?: InputMaybe<ProductUpsertWithoutInventoryInput>;
}

export interface ProductUpdateOneRequiredWithoutProductColorNestedInput {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductColorInput>;
  create?: InputMaybe<ProductCreateWithoutProductColorInput>;
  update?: InputMaybe<ProductUpdateToOneWithWhereWithoutProductColorInput>;
  upsert?: InputMaybe<ProductUpsertWithoutProductColorInput>;
}

export interface ProductUpdateOneRequiredWithoutProductSalesNestedInput {
  connect?: InputMaybe<ProductWhereUniqueInput>;
  connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductSalesInput>;
  create?: InputMaybe<ProductCreateWithoutProductSalesInput>;
  update?: InputMaybe<ProductUpdateToOneWithWhereWithoutProductSalesInput>;
  upsert?: InputMaybe<ProductUpsertWithoutProductSalesInput>;
}

export interface ProductUpdateToOneWithWhereWithoutInventoryInput {
  data: ProductUpdateWithoutInventoryInput;
  where?: InputMaybe<ProductWhereInput>;
}

export interface ProductUpdateToOneWithWhereWithoutProductColorInput {
  data: ProductUpdateWithoutProductColorInput;
  where?: InputMaybe<ProductWhereInput>;
}

export interface ProductUpdateToOneWithWhereWithoutProductSalesInput {
  data: ProductUpdateWithoutProductSalesInput;
  where?: InputMaybe<ProductWhereInput>;
}

export interface ProductUpdateWithoutInventoryInput {
  ProductColor?: InputMaybe<ProductColorUpdateManyWithoutProductNestedInput>;
  ProductSales?: InputMaybe<ProductSalesUpdateManyWithoutProductNestedInput>;
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Float"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ProductUpdateWithoutProductColorInput {
  Inventory?: InputMaybe<InventoryUpdateManyWithoutProductNestedInput>;
  ProductSales?: InputMaybe<ProductSalesUpdateManyWithoutProductNestedInput>;
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Float"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ProductUpdateWithoutProductSalesInput {
  Inventory?: InputMaybe<InventoryUpdateManyWithoutProductNestedInput>;
  ProductColor?: InputMaybe<ProductColorUpdateManyWithoutProductNestedInput>;
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  price?: InputMaybe<Scalars["Float"]["input"]>;
  type?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ProductUpsertWithoutInventoryInput {
  create: ProductCreateWithoutInventoryInput;
  update: ProductUpdateWithoutInventoryInput;
  where?: InputMaybe<ProductWhereInput>;
}

export interface ProductUpsertWithoutProductColorInput {
  create: ProductCreateWithoutProductColorInput;
  update: ProductUpdateWithoutProductColorInput;
  where?: InputMaybe<ProductWhereInput>;
}

export interface ProductUpsertWithoutProductSalesInput {
  create: ProductCreateWithoutProductSalesInput;
  update: ProductUpdateWithoutProductSalesInput;
  where?: InputMaybe<ProductWhereInput>;
}

export interface ProductWhereInput {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  Inventory?: InputMaybe<InventoryListRelationFilter>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  ProductColor?: InputMaybe<ProductColorListRelationFilter>;
  ProductSales?: InputMaybe<ProductSalesListRelationFilter>;
  dateCreated?: InputMaybe<DateTimeFilter>;
  dateUpdated?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatFilter>;
  type?: InputMaybe<StringFilter>;
}

export interface ProductWhereUniqueInput {
  AND?: InputMaybe<Array<ProductWhereInput>>;
  Inventory?: InputMaybe<InventoryListRelationFilter>;
  NOT?: InputMaybe<Array<ProductWhereInput>>;
  OR?: InputMaybe<Array<ProductWhereInput>>;
  ProductColor?: InputMaybe<ProductColorListRelationFilter>;
  ProductSales?: InputMaybe<ProductSalesListRelationFilter>;
  dateCreated?: InputMaybe<DateTimeFilter>;
  dateUpdated?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<StringFilter>;
  price?: InputMaybe<FloatFilter>;
  type?: InputMaybe<StringFilter>;
}

export interface Query {
  aggregateColor: AggregateColor;
  aggregateCustomer: AggregateCustomer;
  aggregateInventory: AggregateInventory;
  aggregateLoginHistory: AggregateLoginHistory;
  aggregateProduct: AggregateProduct;
  aggregateProductColor: AggregateProductColor;
  aggregateProductSales: AggregateProductSales;
  aggregateUser: AggregateUser;
  color?: Maybe<Color>;
  colors: Array<Color>;
  customer?: Maybe<Customer>;
  customers: Array<Customer>;
  findFirstColor?: Maybe<Color>;
  findFirstColorOrThrow?: Maybe<Color>;
  findFirstCustomer?: Maybe<Customer>;
  findFirstCustomerOrThrow?: Maybe<Customer>;
  findFirstInventory?: Maybe<Inventory>;
  findFirstInventoryOrThrow?: Maybe<Inventory>;
  findFirstLoginHistory?: Maybe<LoginHistory>;
  findFirstLoginHistoryOrThrow?: Maybe<LoginHistory>;
  findFirstProduct?: Maybe<Product>;
  findFirstProductColor?: Maybe<ProductColor>;
  findFirstProductColorOrThrow?: Maybe<ProductColor>;
  findFirstProductOrThrow?: Maybe<Product>;
  findFirstProductSales?: Maybe<ProductSales>;
  findFirstProductSalesOrThrow?: Maybe<ProductSales>;
  findFirstUser?: Maybe<User>;
  findFirstUserOrThrow?: Maybe<User>;
  findManyProductSales: Array<ProductSales>;
  findUniqueProductSales?: Maybe<ProductSales>;
  findUniqueProductSalesOrThrow?: Maybe<ProductSales>;
  getColor?: Maybe<Color>;
  getCustomer?: Maybe<Customer>;
  getInventory?: Maybe<Inventory>;
  getLoginHistory?: Maybe<LoginHistory>;
  getProduct?: Maybe<Product>;
  getProductColor?: Maybe<ProductColor>;
  getUser?: Maybe<User>;
  groupByColor: Array<ColorGroupBy>;
  groupByCustomer: Array<CustomerGroupBy>;
  groupByInventory: Array<InventoryGroupBy>;
  groupByLoginHistory: Array<LoginHistoryGroupBy>;
  groupByProduct: Array<ProductGroupBy>;
  groupByProductColor: Array<ProductColorGroupBy>;
  groupByProductSales: Array<ProductSalesGroupBy>;
  groupByUser: Array<UserGroupBy>;
  inventories: Array<Inventory>;
  inventory?: Maybe<Inventory>;
  loginHistories: Array<LoginHistory>;
  loginHistory?: Maybe<LoginHistory>;
  product?: Maybe<Product>;
  productColor?: Maybe<ProductColor>;
  productColors: Array<ProductColor>;
  products: Array<Product>;
  signIn: Scalars["String"]["output"];
  signOut: Scalars["Boolean"]["output"];
  user?: Maybe<User>;
  users: Array<User>;
  validate: Scalars["Boolean"]["output"];
}

export interface QueryAggregateColorArgs {
  cursor?: InputMaybe<ColorWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ColorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ColorWhereInput>;
}

export interface QueryAggregateCustomerArgs {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  orderBy?: InputMaybe<Array<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CustomerWhereInput>;
}

export interface QueryAggregateInventoryArgs {
  cursor?: InputMaybe<InventoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<InventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<InventoryWhereInput>;
}

export interface QueryAggregateLoginHistoryArgs {
  cursor?: InputMaybe<LoginHistoryWhereUniqueInput>;
  orderBy?: InputMaybe<Array<LoginHistoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<LoginHistoryWhereInput>;
}

export interface QueryAggregateProductArgs {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductWhereInput>;
}

export interface QueryAggregateProductColorArgs {
  cursor?: InputMaybe<ProductColorWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProductColorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductColorWhereInput>;
}

export interface QueryAggregateProductSalesArgs {
  cursor?: InputMaybe<ProductSalesWhereUniqueInput>;
  orderBy?: InputMaybe<Array<ProductSalesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductSalesWhereInput>;
}

export interface QueryAggregateUserArgs {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<UserWhereInput>;
}

export interface QueryColorArgs {
  where: ColorWhereUniqueInput;
}

export interface QueryColorsArgs {
  cursor?: InputMaybe<ColorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ColorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ColorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ColorWhereInput>;
}

export interface QueryCustomerArgs {
  where: CustomerWhereUniqueInput;
}

export interface QueryCustomersArgs {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CustomerWhereInput>;
}

export interface QueryFindFirstColorArgs {
  cursor?: InputMaybe<ColorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ColorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ColorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ColorWhereInput>;
}

export interface QueryFindFirstColorOrThrowArgs {
  cursor?: InputMaybe<ColorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ColorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ColorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ColorWhereInput>;
}

export interface QueryFindFirstCustomerArgs {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CustomerWhereInput>;
}

export interface QueryFindFirstCustomerOrThrowArgs {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  distinct?: InputMaybe<Array<CustomerScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CustomerWhereInput>;
}

export interface QueryFindFirstInventoryArgs {
  cursor?: InputMaybe<InventoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<InventoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<InventoryWhereInput>;
}

export interface QueryFindFirstInventoryOrThrowArgs {
  cursor?: InputMaybe<InventoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<InventoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<InventoryWhereInput>;
}

export interface QueryFindFirstLoginHistoryArgs {
  cursor?: InputMaybe<LoginHistoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<LoginHistoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LoginHistoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<LoginHistoryWhereInput>;
}

export interface QueryFindFirstLoginHistoryOrThrowArgs {
  cursor?: InputMaybe<LoginHistoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<LoginHistoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LoginHistoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<LoginHistoryWhereInput>;
}

export interface QueryFindFirstProductArgs {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductWhereInput>;
}

export interface QueryFindFirstProductColorArgs {
  cursor?: InputMaybe<ProductColorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductColorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductColorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductColorWhereInput>;
}

export interface QueryFindFirstProductColorOrThrowArgs {
  cursor?: InputMaybe<ProductColorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductColorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductColorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductColorWhereInput>;
}

export interface QueryFindFirstProductOrThrowArgs {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductWhereInput>;
}

export interface QueryFindFirstProductSalesArgs {
  cursor?: InputMaybe<ProductSalesWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductSalesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductSalesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductSalesWhereInput>;
}

export interface QueryFindFirstProductSalesOrThrowArgs {
  cursor?: InputMaybe<ProductSalesWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductSalesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductSalesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductSalesWhereInput>;
}

export interface QueryFindFirstUserArgs {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<UserWhereInput>;
}

export interface QueryFindFirstUserOrThrowArgs {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<UserWhereInput>;
}

export interface QueryFindManyProductSalesArgs {
  cursor?: InputMaybe<ProductSalesWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductSalesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductSalesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductSalesWhereInput>;
}

export interface QueryFindUniqueProductSalesArgs {
  where: ProductSalesWhereUniqueInput;
}

export interface QueryFindUniqueProductSalesOrThrowArgs {
  where: ProductSalesWhereUniqueInput;
}

export interface QueryGetColorArgs {
  where: ColorWhereUniqueInput;
}

export interface QueryGetCustomerArgs {
  where: CustomerWhereUniqueInput;
}

export interface QueryGetInventoryArgs {
  where: InventoryWhereUniqueInput;
}

export interface QueryGetLoginHistoryArgs {
  where: LoginHistoryWhereUniqueInput;
}

export interface QueryGetProductArgs {
  where: ProductWhereUniqueInput;
}

export interface QueryGetProductColorArgs {
  where: ProductColorWhereUniqueInput;
}

export interface QueryGetUserArgs {
  where: UserWhereUniqueInput;
}

export interface QueryGroupByColorArgs {
  by: Array<ColorScalarFieldEnum>;
  having?: InputMaybe<ColorScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ColorOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ColorWhereInput>;
}

export interface QueryGroupByCustomerArgs {
  by: Array<CustomerScalarFieldEnum>;
  having?: InputMaybe<CustomerScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<CustomerOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CustomerWhereInput>;
}

export interface QueryGroupByInventoryArgs {
  by: Array<InventoryScalarFieldEnum>;
  having?: InputMaybe<InventoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<InventoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<InventoryWhereInput>;
}

export interface QueryGroupByLoginHistoryArgs {
  by: Array<LoginHistoryScalarFieldEnum>;
  having?: InputMaybe<LoginHistoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<LoginHistoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<LoginHistoryWhereInput>;
}

export interface QueryGroupByProductArgs {
  by: Array<ProductScalarFieldEnum>;
  having?: InputMaybe<ProductScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ProductOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductWhereInput>;
}

export interface QueryGroupByProductColorArgs {
  by: Array<ProductColorScalarFieldEnum>;
  having?: InputMaybe<ProductColorScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ProductColorOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductColorWhereInput>;
}

export interface QueryGroupByProductSalesArgs {
  by: Array<ProductSalesScalarFieldEnum>;
  having?: InputMaybe<ProductSalesScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<ProductSalesOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductSalesWhereInput>;
}

export interface QueryGroupByUserArgs {
  by: Array<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<Array<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<UserWhereInput>;
}

export interface QueryInventoriesArgs {
  cursor?: InputMaybe<InventoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<InventoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<InventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<InventoryWhereInput>;
}

export interface QueryInventoryArgs {
  where: InventoryWhereUniqueInput;
}

export interface QueryLoginHistoriesArgs {
  cursor?: InputMaybe<LoginHistoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<LoginHistoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LoginHistoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<LoginHistoryWhereInput>;
}

export interface QueryLoginHistoryArgs {
  where: LoginHistoryWhereUniqueInput;
}

export interface QueryProductArgs {
  where: ProductWhereUniqueInput;
}

export interface QueryProductColorArgs {
  where: ProductColorWhereUniqueInput;
}

export interface QueryProductColorsArgs {
  cursor?: InputMaybe<ProductColorWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductColorScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductColorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductColorWhereInput>;
}

export interface QueryProductsArgs {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductWhereInput>;
}

export interface QuerySignInArgs {
  password: Scalars["String"]["input"];
  userName: Scalars["String"]["input"];
}

export interface QueryUserArgs {
  where: UserWhereUniqueInput;
}

export interface QueryUsersArgs {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<UserWhereInput>;
}

export interface QueryValidateArgs {
  token: Scalars["String"]["input"];
}

export enum SortOrder {
  Asc = 0,
  Desc = 1,
}

export interface StringFilter {
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
}

export interface StringWithAggregatesFilter {
  _count?: InputMaybe<NestedIntFilter>;
  _max?: InputMaybe<NestedStringFilter>;
  _min?: InputMaybe<NestedStringFilter>;
  contains?: InputMaybe<Scalars["String"]["input"]>;
  endsWith?: InputMaybe<Scalars["String"]["input"]>;
  equals?: InputMaybe<Scalars["String"]["input"]>;
  gt?: InputMaybe<Scalars["String"]["input"]>;
  gte?: InputMaybe<Scalars["String"]["input"]>;
  in?: InputMaybe<Array<Scalars["String"]["input"]>>;
  lt?: InputMaybe<Scalars["String"]["input"]>;
  lte?: InputMaybe<Scalars["String"]["input"]>;
  not?: InputMaybe<NestedStringWithAggregatesFilter>;
  notIn?: InputMaybe<Array<Scalars["String"]["input"]>>;
  startsWith?: InputMaybe<Scalars["String"]["input"]>;
}

export interface User {
  LoginHistory: Array<LoginHistory>;
  _count?: Maybe<UserCount>;
  address: Scalars["String"]["output"];
  dateCreated: Scalars["DateTimeISO"]["output"];
  email: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  lastName: Scalars["String"]["output"];
  password: Scalars["String"]["output"];
  phone: Scalars["String"]["output"];
  productSales: Array<ProductSales>;
  role: Scalars["String"]["output"];
}

export interface UserLoginHistoryArgs {
  cursor?: InputMaybe<LoginHistoryWhereUniqueInput>;
  distinct?: InputMaybe<Array<LoginHistoryScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<LoginHistoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<LoginHistoryWhereInput>;
}

export interface UserProductSalesArgs {
  cursor?: InputMaybe<ProductSalesWhereUniqueInput>;
  distinct?: InputMaybe<Array<ProductSalesScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<ProductSalesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductSalesWhereInput>;
}

export interface UserCount {
  LoginHistory: Scalars["Int"]["output"];
  productSales: Scalars["Int"]["output"];
}

export interface UserCountLoginHistoryArgs {
  where?: InputMaybe<LoginHistoryWhereInput>;
}

export interface UserCountProductSalesArgs {
  where?: InputMaybe<ProductSalesWhereInput>;
}

export interface UserCountAggregate {
  _all: Scalars["Int"]["output"];
  address: Scalars["Int"]["output"];
  dateCreated: Scalars["Int"]["output"];
  email: Scalars["Int"]["output"];
  firstName: Scalars["Int"]["output"];
  id: Scalars["Int"]["output"];
  lastName: Scalars["Int"]["output"];
  password: Scalars["Int"]["output"];
  phone: Scalars["Int"]["output"];
  role: Scalars["Int"]["output"];
}

export interface UserCountOrderByAggregateInput {
  address?: InputMaybe<SortOrder>;
  dateCreated?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
}

export interface UserCreateInput {
  LoginHistory?: InputMaybe<LoginHistoryCreateNestedManyWithoutUserInput>;
  address: Scalars["String"]["input"];
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  id?: InputMaybe<Scalars["String"]["input"]>;
  lastName: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  phone: Scalars["String"]["input"];
  productSales?: InputMaybe<ProductSalesCreateNestedManyWithoutUserInput>;
  role: Scalars["String"]["input"];
}

export interface UserCreateManyInput {
  address: Scalars["String"]["input"];
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  id?: InputMaybe<Scalars["String"]["input"]>;
  lastName: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  phone: Scalars["String"]["input"];
  role: Scalars["String"]["input"];
}

export interface UserCreateNestedOneWithoutLoginHistoryInput {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLoginHistoryInput>;
  create?: InputMaybe<UserCreateWithoutLoginHistoryInput>;
}

export interface UserCreateNestedOneWithoutProductSalesInput {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProductSalesInput>;
  create?: InputMaybe<UserCreateWithoutProductSalesInput>;
}

export interface UserCreateOrConnectWithoutLoginHistoryInput {
  create: UserCreateWithoutLoginHistoryInput;
  where: UserWhereUniqueInput;
}

export interface UserCreateOrConnectWithoutProductSalesInput {
  create: UserCreateWithoutProductSalesInput;
  where: UserWhereUniqueInput;
}

export interface UserCreateWithoutLoginHistoryInput {
  address: Scalars["String"]["input"];
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  id?: InputMaybe<Scalars["String"]["input"]>;
  lastName: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  phone: Scalars["String"]["input"];
  productSales?: InputMaybe<ProductSalesCreateNestedManyWithoutUserInput>;
  role: Scalars["String"]["input"];
}

export interface UserCreateWithoutProductSalesInput {
  LoginHistory?: InputMaybe<LoginHistoryCreateNestedManyWithoutUserInput>;
  address: Scalars["String"]["input"];
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  id?: InputMaybe<Scalars["String"]["input"]>;
  lastName: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
  phone: Scalars["String"]["input"];
  role: Scalars["String"]["input"];
}

export interface UserGroupBy {
  _count?: Maybe<UserCountAggregate>;
  _max?: Maybe<UserMaxAggregate>;
  _min?: Maybe<UserMinAggregate>;
  address: Scalars["String"]["output"];
  dateCreated: Scalars["DateTimeISO"]["output"];
  email: Scalars["String"]["output"];
  firstName: Scalars["String"]["output"];
  id: Scalars["String"]["output"];
  lastName: Scalars["String"]["output"];
  password: Scalars["String"]["output"];
  phone: Scalars["String"]["output"];
  role: Scalars["String"]["output"];
}

export interface UserMaxAggregate {
  address?: Maybe<Scalars["String"]["output"]>;
  dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  password?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
}

export interface UserMaxOrderByAggregateInput {
  address?: InputMaybe<SortOrder>;
  dateCreated?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
}

export interface UserMinAggregate {
  address?: Maybe<Scalars["String"]["output"]>;
  dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  id?: Maybe<Scalars["String"]["output"]>;
  lastName?: Maybe<Scalars["String"]["output"]>;
  password?: Maybe<Scalars["String"]["output"]>;
  phone?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
}

export interface UserMinOrderByAggregateInput {
  address?: InputMaybe<SortOrder>;
  dateCreated?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
}

export interface UserOrderByWithAggregationInput {
  _count?: InputMaybe<UserCountOrderByAggregateInput>;
  _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  _min?: InputMaybe<UserMinOrderByAggregateInput>;
  address?: InputMaybe<SortOrder>;
  dateCreated?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  role?: InputMaybe<SortOrder>;
}

export interface UserOrderByWithRelationInput {
  LoginHistory?: InputMaybe<LoginHistoryOrderByRelationAggregateInput>;
  address?: InputMaybe<SortOrder>;
  dateCreated?: InputMaybe<SortOrder>;
  email?: InputMaybe<SortOrder>;
  firstName?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  lastName?: InputMaybe<SortOrder>;
  password?: InputMaybe<SortOrder>;
  phone?: InputMaybe<SortOrder>;
  productSales?: InputMaybe<ProductSalesOrderByRelationAggregateInput>;
  role?: InputMaybe<SortOrder>;
}

export interface UserRelationFilter {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
}

export enum UserScalarFieldEnum {
  Address = 0,
  DateCreated = 1,
  Email = 2,
  FirstName = 3,
  Id = 4,
  LastName = 5,
  Password = 6,
  Phone = 7,
  Role = 8,
}

export interface UserScalarWhereWithAggregatesInput {
  AND?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  NOT?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  OR?: InputMaybe<Array<UserScalarWhereWithAggregatesInput>>;
  address?: InputMaybe<StringWithAggregatesFilter>;
  dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  email?: InputMaybe<StringWithAggregatesFilter>;
  firstName?: InputMaybe<StringWithAggregatesFilter>;
  id?: InputMaybe<StringWithAggregatesFilter>;
  lastName?: InputMaybe<StringWithAggregatesFilter>;
  password?: InputMaybe<StringWithAggregatesFilter>;
  phone?: InputMaybe<StringWithAggregatesFilter>;
  role?: InputMaybe<StringWithAggregatesFilter>;
}

export interface UserUpdateInput {
  LoginHistory?: InputMaybe<LoginHistoryUpdateManyWithoutUserNestedInput>;
  address?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  productSales?: InputMaybe<ProductSalesUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<Scalars["String"]["input"]>;
}

export interface UserUpdateManyMutationInput {
  address?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<Scalars["String"]["input"]>;
}

export interface UserUpdateOneRequiredWithoutLoginHistoryNestedInput {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLoginHistoryInput>;
  create?: InputMaybe<UserCreateWithoutLoginHistoryInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutLoginHistoryInput>;
  upsert?: InputMaybe<UserUpsertWithoutLoginHistoryInput>;
}

export interface UserUpdateOneRequiredWithoutProductSalesNestedInput {
  connect?: InputMaybe<UserWhereUniqueInput>;
  connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProductSalesInput>;
  create?: InputMaybe<UserCreateWithoutProductSalesInput>;
  update?: InputMaybe<UserUpdateToOneWithWhereWithoutProductSalesInput>;
  upsert?: InputMaybe<UserUpsertWithoutProductSalesInput>;
}

export interface UserUpdateToOneWithWhereWithoutLoginHistoryInput {
  data: UserUpdateWithoutLoginHistoryInput;
  where?: InputMaybe<UserWhereInput>;
}

export interface UserUpdateToOneWithWhereWithoutProductSalesInput {
  data: UserUpdateWithoutProductSalesInput;
  where?: InputMaybe<UserWhereInput>;
}

export interface UserUpdateWithoutLoginHistoryInput {
  address?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  productSales?: InputMaybe<ProductSalesUpdateManyWithoutUserNestedInput>;
  role?: InputMaybe<Scalars["String"]["input"]>;
}

export interface UserUpdateWithoutProductSalesInput {
  LoginHistory?: InputMaybe<LoginHistoryUpdateManyWithoutUserNestedInput>;
  address?: InputMaybe<Scalars["String"]["input"]>;
  dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  password?: InputMaybe<Scalars["String"]["input"]>;
  phone?: InputMaybe<Scalars["String"]["input"]>;
  role?: InputMaybe<Scalars["String"]["input"]>;
}

export interface UserUpsertWithoutLoginHistoryInput {
  create: UserCreateWithoutLoginHistoryInput;
  update: UserUpdateWithoutLoginHistoryInput;
  where?: InputMaybe<UserWhereInput>;
}

export interface UserUpsertWithoutProductSalesInput {
  create: UserCreateWithoutProductSalesInput;
  update: UserUpdateWithoutProductSalesInput;
  where?: InputMaybe<UserWhereInput>;
}

export interface UserWhereInput {
  AND?: InputMaybe<Array<UserWhereInput>>;
  LoginHistory?: InputMaybe<LoginHistoryListRelationFilter>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  address?: InputMaybe<StringFilter>;
  dateCreated?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<StringFilter>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  lastName?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  productSales?: InputMaybe<ProductSalesListRelationFilter>;
  role?: InputMaybe<StringFilter>;
}

export interface UserWhereUniqueInput {
  AND?: InputMaybe<Array<UserWhereInput>>;
  LoginHistory?: InputMaybe<LoginHistoryListRelationFilter>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  address?: InputMaybe<StringFilter>;
  dateCreated?: InputMaybe<DateTimeFilter>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<StringFilter>;
  id?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<StringFilter>;
  password?: InputMaybe<StringFilter>;
  phone?: InputMaybe<StringFilter>;
  productSales?: InputMaybe<ProductSalesListRelationFilter>;
  role?: InputMaybe<StringFilter>;
}

export type SignInQueryVariables = Exact<{
  userName: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}>;

export type SignInQuery = { signIn: string };

export type SignOutQueryVariables = Exact<{ [key: string]: never }>;

export type SignOutQuery = { signOut: boolean };

export type ValidateQueryVariables = Exact<{
  token: Scalars["String"]["input"];
}>;

export type ValidateQuery = { validate: boolean };

export type GetLoginHistoryByUserIdQueryVariables = Exact<{
  userId: Scalars["String"]["input"];
}>;

export type GetLoginHistoryByUserIdQuery = {
  loginHistories: Array<{ id: string; userId: string; loginTime: unknown }>;
};

export type GetProductsQueryVariables = Exact<{ [key: string]: never }>;

export type GetProductsQuery = {
  products: Array<{ id: string; name: string; description: string }>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  users: Array<{
    id: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    phone: string;
    role: string;
    dateCreated: unknown;
  }>;
};

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars["String"]["input"];
}>;

export type GetUserByIdQuery = {
  user?:
    | {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        address: string;
        phone: string;
        role: string;
        dateCreated: unknown;
      }
    | undefined;
};

export type GetUserByUserNameQueryVariables = Exact<{
  userName: Scalars["String"]["input"];
}>;

export type GetUserByUserNameQuery = {
  user?:
    | {
        id: string;
        firstName: string;
        lastName: string;
        email: string;
        address: string;
        phone: string;
        role: string;
        dateCreated: unknown;
      }
    | undefined;
};

export type LoginHistoryPartsFragment = {
  id: string;
  userId: string;
  loginTime: unknown;
};

export type UserPartsFragment = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  address: string;
  phone: string;
  role: string;
  dateCreated: unknown;
};

export const LoginHistoryPartsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "LoginHistoryParts" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "LoginHistory" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "userId" } },
          { kind: "Field", name: { kind: "Name", value: "loginTime" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<LoginHistoryPartsFragment, unknown>;
export const UserPartsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserParts" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "User" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "firstName" } },
          { kind: "Field", name: { kind: "Name", value: "lastName" } },
          { kind: "Field", name: { kind: "Name", value: "email" } },
          { kind: "Field", name: { kind: "Name", value: "address" } },
          { kind: "Field", name: { kind: "Name", value: "phone" } },
          { kind: "Field", name: { kind: "Name", value: "role" } },
          { kind: "Field", name: { kind: "Name", value: "dateCreated" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UserPartsFragment, unknown>;
export const SignInDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "signIn" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userName" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "password" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "signIn" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "userName" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "userName" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "password" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "password" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SignInQuery, SignInQueryVariables>;
export const SignOutDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "signOut" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "signOut" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<SignOutQuery, SignOutQueryVariables>;
export const ValidateDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "validate" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "token" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "validate" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "token" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "token" },
                },
              },
            ],
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ValidateQuery, ValidateQueryVariables>;
export const GetLoginHistoryByUserIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetLoginHistoryByUserId" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userId" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "loginHistories" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "userId" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "equals" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "userId" },
                            },
                          },
                        ],
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "LoginHistoryParts" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "LoginHistoryParts" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "LoginHistory" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "userId" } },
          { kind: "Field", name: { kind: "Name", value: "loginTime" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetLoginHistoryByUserIdQuery,
  GetLoginHistoryByUserIdQueryVariables
>;
export const GetProductsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getProducts" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "products" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
                { kind: "Field", name: { kind: "Name", value: "description" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetProductsQuery, GetProductsQueryVariables>;
export const GetUsersDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getUsers" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "users" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "UserParts" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserParts" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "User" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "firstName" } },
          { kind: "Field", name: { kind: "Name", value: "lastName" } },
          { kind: "Field", name: { kind: "Name", value: "email" } },
          { kind: "Field", name: { kind: "Name", value: "address" } },
          { kind: "Field", name: { kind: "Name", value: "phone" } },
          { kind: "Field", name: { kind: "Name", value: "role" } },
          { kind: "Field", name: { kind: "Name", value: "dateCreated" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUsersQuery, GetUsersQueryVariables>;
export const GetUserByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getUserById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "id" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "id" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "UserParts" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserParts" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "User" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "firstName" } },
          { kind: "Field", name: { kind: "Name", value: "lastName" } },
          { kind: "Field", name: { kind: "Name", value: "email" } },
          { kind: "Field", name: { kind: "Name", value: "address" } },
          { kind: "Field", name: { kind: "Name", value: "phone" } },
          { kind: "Field", name: { kind: "Name", value: "role" } },
          { kind: "Field", name: { kind: "Name", value: "dateCreated" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetUserByIdQuery, GetUserByIdQueryVariables>;
export const GetUserByUserNameDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getUserByUserName" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "userName" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "user" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "email" },
                      value: {
                        kind: "Variable",
                        name: { kind: "Name", value: "userName" },
                      },
                    },
                  ],
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "FragmentSpread",
                  name: { kind: "Name", value: "UserParts" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "UserParts" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "User" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "firstName" } },
          { kind: "Field", name: { kind: "Name", value: "lastName" } },
          { kind: "Field", name: { kind: "Name", value: "email" } },
          { kind: "Field", name: { kind: "Name", value: "address" } },
          { kind: "Field", name: { kind: "Name", value: "phone" } },
          { kind: "Field", name: { kind: "Name", value: "role" } },
          { kind: "Field", name: { kind: "Name", value: "dateCreated" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetUserByUserNameQuery,
  GetUserByUserNameQueryVariables
>;
