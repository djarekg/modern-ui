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
  readonly count: Scalars["Int"]["output"];
}

export interface AggregateColor {
  readonly _count?: Maybe<ColorCountAggregate>;
  readonly _max?: Maybe<ColorMaxAggregate>;
  readonly _min?: Maybe<ColorMinAggregate>;
}

export interface AggregateCustomer {
  readonly _count?: Maybe<CustomerCountAggregate>;
  readonly _max?: Maybe<CustomerMaxAggregate>;
  readonly _min?: Maybe<CustomerMinAggregate>;
}

export interface AggregateInventory {
  readonly _avg?: Maybe<InventoryAvgAggregate>;
  readonly _count?: Maybe<InventoryCountAggregate>;
  readonly _max?: Maybe<InventoryMaxAggregate>;
  readonly _min?: Maybe<InventoryMinAggregate>;
  readonly _sum?: Maybe<InventorySumAggregate>;
}

export interface AggregateLoginHistory {
  readonly _count?: Maybe<LoginHistoryCountAggregate>;
  readonly _max?: Maybe<LoginHistoryMaxAggregate>;
  readonly _min?: Maybe<LoginHistoryMinAggregate>;
}

export interface AggregateProduct {
  readonly _count?: Maybe<ProductCountAggregate>;
  readonly _max?: Maybe<ProductMaxAggregate>;
  readonly _min?: Maybe<ProductMinAggregate>;
}

export interface AggregateProductColor {
  readonly _count?: Maybe<ProductColorCountAggregate>;
  readonly _max?: Maybe<ProductColorMaxAggregate>;
  readonly _min?: Maybe<ProductColorMinAggregate>;
}

export interface AggregateProductImage {
  readonly _avg?: Maybe<ProductImageAvgAggregate>;
  readonly _count?: Maybe<ProductImageCountAggregate>;
  readonly _max?: Maybe<ProductImageMaxAggregate>;
  readonly _min?: Maybe<ProductImageMinAggregate>;
  readonly _sum?: Maybe<ProductImageSumAggregate>;
}

export interface AggregateProductSales {
  readonly _avg?: Maybe<ProductSalesAvgAggregate>;
  readonly _count?: Maybe<ProductSalesCountAggregate>;
  readonly _max?: Maybe<ProductSalesMaxAggregate>;
  readonly _min?: Maybe<ProductSalesMinAggregate>;
  readonly _sum?: Maybe<ProductSalesSumAggregate>;
}

export interface AggregateProductType {
  readonly _count?: Maybe<ProductTypeCountAggregate>;
  readonly _max?: Maybe<ProductTypeMaxAggregate>;
  readonly _min?: Maybe<ProductTypeMinAggregate>;
}

export interface AggregateUser {
  readonly _count?: Maybe<UserCountAggregate>;
  readonly _max?: Maybe<UserMaxAggregate>;
  readonly _min?: Maybe<UserMinAggregate>;
}

export interface Color {
  readonly ProductColor: ReadonlyArray<ProductColor>;
  readonly _count?: Maybe<ColorCount>;
  readonly dateCreated: Scalars["DateTimeISO"]["output"];
  readonly dateUpdated: Scalars["DateTimeISO"]["output"];
  readonly id: Scalars["String"]["output"];
  readonly name: Scalars["String"]["output"];
}

export interface ColorProductColorArgs {
  cursor?: InputMaybe<ProductColorWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductColorScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductColorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductColorWhereInput>;
}

export interface ColorCount {
  readonly ProductColor: Scalars["Int"]["output"];
}

export interface ColorCountProductColorArgs {
  where?: InputMaybe<ProductColorWhereInput>;
}

export interface ColorCountAggregate {
  readonly _all: Scalars["Int"]["output"];
  readonly dateCreated: Scalars["Int"]["output"];
  readonly dateUpdated: Scalars["Int"]["output"];
  readonly id: Scalars["Int"]["output"];
  readonly name: Scalars["Int"]["output"];
}

export interface ColorCountOrderByAggregateInput {
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
}

export interface ColorCreateInput {
  readonly ProductColor?: InputMaybe<ProductColorCreateNestedManyWithoutColorInput>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly name: Scalars["String"]["input"];
}

export interface ColorCreateManyInput {
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly name: Scalars["String"]["input"];
}

export interface ColorCreateNestedOneWithoutProductColorInput {
  readonly connect?: InputMaybe<ColorWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<ColorCreateOrConnectWithoutProductColorInput>;
  readonly create?: InputMaybe<ColorCreateWithoutProductColorInput>;
}

export interface ColorCreateOrConnectWithoutProductColorInput {
  readonly create: ColorCreateWithoutProductColorInput;
  readonly where: ColorWhereUniqueInput;
}

export interface ColorCreateWithoutProductColorInput {
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly name: Scalars["String"]["input"];
}

export interface ColorGroupBy {
  readonly _count?: Maybe<ColorCountAggregate>;
  readonly _max?: Maybe<ColorMaxAggregate>;
  readonly _min?: Maybe<ColorMinAggregate>;
  readonly dateCreated: Scalars["DateTimeISO"]["output"];
  readonly dateUpdated: Scalars["DateTimeISO"]["output"];
  readonly id: Scalars["String"]["output"];
  readonly name: Scalars["String"]["output"];
}

export interface ColorMaxAggregate {
  readonly dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly dateUpdated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly id?: Maybe<Scalars["String"]["output"]>;
  readonly name?: Maybe<Scalars["String"]["output"]>;
}

export interface ColorMaxOrderByAggregateInput {
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
}

export interface ColorMinAggregate {
  readonly dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly dateUpdated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly id?: Maybe<Scalars["String"]["output"]>;
  readonly name?: Maybe<Scalars["String"]["output"]>;
}

export interface ColorMinOrderByAggregateInput {
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
}

export interface ColorOrderByWithAggregationInput {
  readonly _count?: InputMaybe<ColorCountOrderByAggregateInput>;
  readonly _max?: InputMaybe<ColorMaxOrderByAggregateInput>;
  readonly _min?: InputMaybe<ColorMinOrderByAggregateInput>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
}

export interface ColorOrderByWithRelationInput {
  readonly ProductColor?: InputMaybe<ProductColorOrderByRelationAggregateInput>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
}

export interface ColorRelationFilter {
  readonly is?: InputMaybe<ColorWhereInput>;
  readonly isNot?: InputMaybe<ColorWhereInput>;
}

export enum ColorScalarFieldEnum {
  DateCreated = 0,
  DateUpdated = 1,
  Id = 2,
  Name = 3,
}

export interface ColorScalarWhereWithAggregatesInput {
  readonly AND?: InputMaybe<ReadonlyArray<ColorScalarWhereWithAggregatesInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ColorScalarWhereWithAggregatesInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ColorScalarWhereWithAggregatesInput>>;
  readonly dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly id?: InputMaybe<StringWithAggregatesFilter>;
  readonly name?: InputMaybe<StringWithAggregatesFilter>;
}

export interface ColorUpdateInput {
  readonly ProductColor?: InputMaybe<ProductColorUpdateManyWithoutColorNestedInput>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly name?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ColorUpdateManyMutationInput {
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly name?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ColorUpdateOneRequiredWithoutProductColorNestedInput {
  readonly connect?: InputMaybe<ColorWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<ColorCreateOrConnectWithoutProductColorInput>;
  readonly create?: InputMaybe<ColorCreateWithoutProductColorInput>;
  readonly update?: InputMaybe<ColorUpdateToOneWithWhereWithoutProductColorInput>;
  readonly upsert?: InputMaybe<ColorUpsertWithoutProductColorInput>;
}

export interface ColorUpdateToOneWithWhereWithoutProductColorInput {
  readonly data: ColorUpdateWithoutProductColorInput;
  readonly where?: InputMaybe<ColorWhereInput>;
}

export interface ColorUpdateWithoutProductColorInput {
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly name?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ColorUpsertWithoutProductColorInput {
  readonly create: ColorCreateWithoutProductColorInput;
  readonly update: ColorUpdateWithoutProductColorInput;
  readonly where?: InputMaybe<ColorWhereInput>;
}

export interface ColorWhereInput {
  readonly AND?: InputMaybe<ReadonlyArray<ColorWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ColorWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ColorWhereInput>>;
  readonly ProductColor?: InputMaybe<ProductColorListRelationFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly name?: InputMaybe<StringFilter>;
}

export interface ColorWhereUniqueInput {
  readonly AND?: InputMaybe<ReadonlyArray<ColorWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ColorWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ColorWhereInput>>;
  readonly ProductColor?: InputMaybe<ProductColorListRelationFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly name?: InputMaybe<StringFilter>;
}

export interface CreateManyAndReturnColor {
  readonly dateCreated: Scalars["DateTimeISO"]["output"];
  readonly dateUpdated: Scalars["DateTimeISO"]["output"];
  readonly id: Scalars["String"]["output"];
  readonly name: Scalars["String"]["output"];
}

export interface CreateManyAndReturnCustomer {
  readonly address: Scalars["String"]["output"];
  readonly dateCreated: Scalars["DateTimeISO"]["output"];
  readonly dateUpdated: Scalars["DateTimeISO"]["output"];
  readonly email: Scalars["String"]["output"];
  readonly firstName: Scalars["String"]["output"];
  readonly id: Scalars["String"]["output"];
  readonly lastName: Scalars["String"]["output"];
  readonly phone: Scalars["String"]["output"];
}

export interface CreateManyAndReturnInventory {
  readonly dateCreated: Scalars["DateTimeISO"]["output"];
  readonly dateUpdated: Scalars["DateTimeISO"]["output"];
  readonly id: Scalars["String"]["output"];
  readonly product: Product;
  readonly productId: Scalars["String"]["output"];
  readonly quantity: Scalars["Int"]["output"];
  readonly size: Scalars["String"]["output"];
}

export interface CreateManyAndReturnLoginHistory {
  readonly id: Scalars["String"]["output"];
  readonly loginTime: Scalars["DateTimeISO"]["output"];
  readonly user: User;
  readonly userId: Scalars["String"]["output"];
}

export interface CreateManyAndReturnProduct {
  readonly ProductType?: Maybe<ProductType>;
  readonly dateCreated: Scalars["DateTimeISO"]["output"];
  readonly dateUpdated: Scalars["DateTimeISO"]["output"];
  readonly description: Scalars["String"]["output"];
  readonly genderId: Scalars["String"]["output"];
  readonly id: Scalars["String"]["output"];
  readonly name: Scalars["String"]["output"];
  readonly price: Scalars["String"]["output"];
  readonly productTypeId: Scalars["String"]["output"];
}

export interface CreateManyAndReturnProductProductTypeArgs {
  where?: InputMaybe<ProductTypeWhereInput>;
}

export interface CreateManyAndReturnProductColor {
  readonly color: Color;
  readonly colorId: Scalars["String"]["output"];
  readonly dateCreated: Scalars["DateTimeISO"]["output"];
  readonly dateUpdated: Scalars["DateTimeISO"]["output"];
  readonly id: Scalars["String"]["output"];
  readonly product: Product;
  readonly productId: Scalars["String"]["output"];
}

export interface CreateManyAndReturnProductImage {
  readonly avgColor: Scalars["String"]["output"];
  readonly dateCreated: Scalars["DateTimeISO"]["output"];
  readonly dateUpdated: Scalars["DateTimeISO"]["output"];
  readonly ext: Scalars["String"]["output"];
  readonly height: Scalars["Int"]["output"];
  readonly id: Scalars["String"]["output"];
  readonly imageId: Scalars["Int"]["output"];
  readonly product: Product;
  readonly productId: Scalars["String"]["output"];
  readonly width: Scalars["Int"]["output"];
}

export interface CreateManyAndReturnProductSales {
  readonly Customer: Customer;
  readonly User: User;
  readonly customerId: Scalars["String"]["output"];
  readonly dateCreated: Scalars["DateTimeISO"]["output"];
  readonly dateUpdated: Scalars["DateTimeISO"]["output"];
  readonly id: Scalars["String"]["output"];
  readonly price: Scalars["Float"]["output"];
  readonly product: Product;
  readonly productId: Scalars["String"]["output"];
  readonly quantity: Scalars["Int"]["output"];
  readonly userId: Scalars["String"]["output"];
}

export interface CreateManyAndReturnProductType {
  readonly dateCreated: Scalars["DateTimeISO"]["output"];
  readonly dateUpdated: Scalars["DateTimeISO"]["output"];
  readonly id: Scalars["String"]["output"];
  readonly name: Scalars["String"]["output"];
}

export interface CreateManyAndReturnUser {
  readonly address: Scalars["String"]["output"];
  readonly dateCreated: Scalars["DateTimeISO"]["output"];
  readonly email: Scalars["String"]["output"];
  readonly firstName: Scalars["String"]["output"];
  readonly id: Scalars["String"]["output"];
  readonly lastName: Scalars["String"]["output"];
  readonly password: Scalars["String"]["output"];
  readonly phone: Scalars["String"]["output"];
  readonly role: Scalars["String"]["output"];
}

export interface Customer {
  readonly _count?: Maybe<CustomerCount>;
  readonly address: Scalars["String"]["output"];
  readonly dateCreated: Scalars["DateTimeISO"]["output"];
  readonly dateUpdated: Scalars["DateTimeISO"]["output"];
  readonly email: Scalars["String"]["output"];
  readonly firstName: Scalars["String"]["output"];
  readonly id: Scalars["String"]["output"];
  readonly lastName: Scalars["String"]["output"];
  readonly phone: Scalars["String"]["output"];
  readonly productSales: ReadonlyArray<ProductSales>;
}

export interface CustomerProductSalesArgs {
  cursor?: InputMaybe<ProductSalesWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductSalesScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductSalesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductSalesWhereInput>;
}

export interface CustomerCount {
  readonly productSales: Scalars["Int"]["output"];
}

export interface CustomerCountProductSalesArgs {
  where?: InputMaybe<ProductSalesWhereInput>;
}

export interface CustomerCountAggregate {
  readonly _all: Scalars["Int"]["output"];
  readonly address: Scalars["Int"]["output"];
  readonly dateCreated: Scalars["Int"]["output"];
  readonly dateUpdated: Scalars["Int"]["output"];
  readonly email: Scalars["Int"]["output"];
  readonly firstName: Scalars["Int"]["output"];
  readonly id: Scalars["Int"]["output"];
  readonly lastName: Scalars["Int"]["output"];
  readonly phone: Scalars["Int"]["output"];
}

export interface CustomerCountOrderByAggregateInput {
  readonly address?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
}

export interface CustomerCreateInput {
  readonly address: Scalars["String"]["input"];
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly email: Scalars["String"]["input"];
  readonly firstName: Scalars["String"]["input"];
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly lastName: Scalars["String"]["input"];
  readonly phone: Scalars["String"]["input"];
  readonly productSales?: InputMaybe<ProductSalesCreateNestedManyWithoutCustomerInput>;
}

export interface CustomerCreateManyInput {
  readonly address: Scalars["String"]["input"];
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly email: Scalars["String"]["input"];
  readonly firstName: Scalars["String"]["input"];
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly lastName: Scalars["String"]["input"];
  readonly phone: Scalars["String"]["input"];
}

export interface CustomerCreateNestedOneWithoutProductSalesInput {
  readonly connect?: InputMaybe<CustomerWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<CustomerCreateOrConnectWithoutProductSalesInput>;
  readonly create?: InputMaybe<CustomerCreateWithoutProductSalesInput>;
}

export interface CustomerCreateOrConnectWithoutProductSalesInput {
  readonly create: CustomerCreateWithoutProductSalesInput;
  readonly where: CustomerWhereUniqueInput;
}

export interface CustomerCreateWithoutProductSalesInput {
  readonly address: Scalars["String"]["input"];
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly email: Scalars["String"]["input"];
  readonly firstName: Scalars["String"]["input"];
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly lastName: Scalars["String"]["input"];
  readonly phone: Scalars["String"]["input"];
}

export interface CustomerGroupBy {
  readonly _count?: Maybe<CustomerCountAggregate>;
  readonly _max?: Maybe<CustomerMaxAggregate>;
  readonly _min?: Maybe<CustomerMinAggregate>;
  readonly address: Scalars["String"]["output"];
  readonly dateCreated: Scalars["DateTimeISO"]["output"];
  readonly dateUpdated: Scalars["DateTimeISO"]["output"];
  readonly email: Scalars["String"]["output"];
  readonly firstName: Scalars["String"]["output"];
  readonly id: Scalars["String"]["output"];
  readonly lastName: Scalars["String"]["output"];
  readonly phone: Scalars["String"]["output"];
}

export interface CustomerMaxAggregate {
  readonly address?: Maybe<Scalars["String"]["output"]>;
  readonly dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly dateUpdated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly email?: Maybe<Scalars["String"]["output"]>;
  readonly firstName?: Maybe<Scalars["String"]["output"]>;
  readonly id?: Maybe<Scalars["String"]["output"]>;
  readonly lastName?: Maybe<Scalars["String"]["output"]>;
  readonly phone?: Maybe<Scalars["String"]["output"]>;
}

export interface CustomerMaxOrderByAggregateInput {
  readonly address?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
}

export interface CustomerMinAggregate {
  readonly address?: Maybe<Scalars["String"]["output"]>;
  readonly dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly dateUpdated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly email?: Maybe<Scalars["String"]["output"]>;
  readonly firstName?: Maybe<Scalars["String"]["output"]>;
  readonly id?: Maybe<Scalars["String"]["output"]>;
  readonly lastName?: Maybe<Scalars["String"]["output"]>;
  readonly phone?: Maybe<Scalars["String"]["output"]>;
}

export interface CustomerMinOrderByAggregateInput {
  readonly address?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
}

export interface CustomerOrderByWithAggregationInput {
  readonly _count?: InputMaybe<CustomerCountOrderByAggregateInput>;
  readonly _max?: InputMaybe<CustomerMaxOrderByAggregateInput>;
  readonly _min?: InputMaybe<CustomerMinOrderByAggregateInput>;
  readonly address?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
}

export interface CustomerOrderByWithRelationInput {
  readonly address?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly productSales?: InputMaybe<ProductSalesOrderByRelationAggregateInput>;
}

export interface CustomerRelationFilter {
  readonly is?: InputMaybe<CustomerWhereInput>;
  readonly isNot?: InputMaybe<CustomerWhereInput>;
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
  readonly AND?: InputMaybe<
    ReadonlyArray<CustomerScalarWhereWithAggregatesInput>
  >;
  readonly NOT?: InputMaybe<
    ReadonlyArray<CustomerScalarWhereWithAggregatesInput>
  >;
  readonly OR?: InputMaybe<
    ReadonlyArray<CustomerScalarWhereWithAggregatesInput>
  >;
  readonly address?: InputMaybe<StringWithAggregatesFilter>;
  readonly dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly email?: InputMaybe<StringWithAggregatesFilter>;
  readonly firstName?: InputMaybe<StringWithAggregatesFilter>;
  readonly id?: InputMaybe<StringWithAggregatesFilter>;
  readonly lastName?: InputMaybe<StringWithAggregatesFilter>;
  readonly phone?: InputMaybe<StringWithAggregatesFilter>;
}

export interface CustomerUpdateInput {
  readonly address?: InputMaybe<Scalars["String"]["input"]>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly email?: InputMaybe<Scalars["String"]["input"]>;
  readonly firstName?: InputMaybe<Scalars["String"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly lastName?: InputMaybe<Scalars["String"]["input"]>;
  readonly phone?: InputMaybe<Scalars["String"]["input"]>;
  readonly productSales?: InputMaybe<ProductSalesUpdateManyWithoutCustomerNestedInput>;
}

export interface CustomerUpdateManyMutationInput {
  readonly address?: InputMaybe<Scalars["String"]["input"]>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly email?: InputMaybe<Scalars["String"]["input"]>;
  readonly firstName?: InputMaybe<Scalars["String"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly lastName?: InputMaybe<Scalars["String"]["input"]>;
  readonly phone?: InputMaybe<Scalars["String"]["input"]>;
}

export interface CustomerUpdateOneRequiredWithoutProductSalesNestedInput {
  readonly connect?: InputMaybe<CustomerWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<CustomerCreateOrConnectWithoutProductSalesInput>;
  readonly create?: InputMaybe<CustomerCreateWithoutProductSalesInput>;
  readonly update?: InputMaybe<CustomerUpdateToOneWithWhereWithoutProductSalesInput>;
  readonly upsert?: InputMaybe<CustomerUpsertWithoutProductSalesInput>;
}

export interface CustomerUpdateToOneWithWhereWithoutProductSalesInput {
  readonly data: CustomerUpdateWithoutProductSalesInput;
  readonly where?: InputMaybe<CustomerWhereInput>;
}

export interface CustomerUpdateWithoutProductSalesInput {
  readonly address?: InputMaybe<Scalars["String"]["input"]>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly email?: InputMaybe<Scalars["String"]["input"]>;
  readonly firstName?: InputMaybe<Scalars["String"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly lastName?: InputMaybe<Scalars["String"]["input"]>;
  readonly phone?: InputMaybe<Scalars["String"]["input"]>;
}

export interface CustomerUpsertWithoutProductSalesInput {
  readonly create: CustomerCreateWithoutProductSalesInput;
  readonly update: CustomerUpdateWithoutProductSalesInput;
  readonly where?: InputMaybe<CustomerWhereInput>;
}

export interface CustomerWhereInput {
  readonly AND?: InputMaybe<ReadonlyArray<CustomerWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<CustomerWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<CustomerWhereInput>>;
  readonly address?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly email?: InputMaybe<StringFilter>;
  readonly firstName?: InputMaybe<StringFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly lastName?: InputMaybe<StringFilter>;
  readonly phone?: InputMaybe<StringFilter>;
  readonly productSales?: InputMaybe<ProductSalesListRelationFilter>;
}

export interface CustomerWhereUniqueInput {
  readonly AND?: InputMaybe<ReadonlyArray<CustomerWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<CustomerWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<CustomerWhereInput>>;
  readonly address?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly email?: InputMaybe<Scalars["String"]["input"]>;
  readonly firstName?: InputMaybe<StringFilter>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly lastName?: InputMaybe<StringFilter>;
  readonly phone?: InputMaybe<StringFilter>;
  readonly productSales?: InputMaybe<ProductSalesListRelationFilter>;
}

export interface DateTimeFilter {
  readonly equals?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly gt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly gte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars["DateTimeISO"]["input"]>>;
  readonly lt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly lte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly not?: InputMaybe<NestedDateTimeFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars["DateTimeISO"]["input"]>>;
}

export interface DateTimeWithAggregatesFilter {
  readonly _count?: InputMaybe<NestedIntFilter>;
  readonly _max?: InputMaybe<NestedDateTimeFilter>;
  readonly _min?: InputMaybe<NestedDateTimeFilter>;
  readonly equals?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly gt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly gte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars["DateTimeISO"]["input"]>>;
  readonly lt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly lte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars["DateTimeISO"]["input"]>>;
}

export interface FloatFilter {
  readonly equals?: InputMaybe<Scalars["Float"]["input"]>;
  readonly gt?: InputMaybe<Scalars["Float"]["input"]>;
  readonly gte?: InputMaybe<Scalars["Float"]["input"]>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars["Float"]["input"]>>;
  readonly lt?: InputMaybe<Scalars["Float"]["input"]>;
  readonly lte?: InputMaybe<Scalars["Float"]["input"]>;
  readonly not?: InputMaybe<NestedFloatFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars["Float"]["input"]>>;
}

export interface FloatWithAggregatesFilter {
  readonly _avg?: InputMaybe<NestedFloatFilter>;
  readonly _count?: InputMaybe<NestedIntFilter>;
  readonly _max?: InputMaybe<NestedFloatFilter>;
  readonly _min?: InputMaybe<NestedFloatFilter>;
  readonly _sum?: InputMaybe<NestedFloatFilter>;
  readonly equals?: InputMaybe<Scalars["Float"]["input"]>;
  readonly gt?: InputMaybe<Scalars["Float"]["input"]>;
  readonly gte?: InputMaybe<Scalars["Float"]["input"]>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars["Float"]["input"]>>;
  readonly lt?: InputMaybe<Scalars["Float"]["input"]>;
  readonly lte?: InputMaybe<Scalars["Float"]["input"]>;
  readonly not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars["Float"]["input"]>>;
}

export interface IntFilter {
  readonly equals?: InputMaybe<Scalars["Int"]["input"]>;
  readonly gt?: InputMaybe<Scalars["Int"]["input"]>;
  readonly gte?: InputMaybe<Scalars["Int"]["input"]>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars["Int"]["input"]>>;
  readonly lt?: InputMaybe<Scalars["Int"]["input"]>;
  readonly lte?: InputMaybe<Scalars["Int"]["input"]>;
  readonly not?: InputMaybe<NestedIntFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars["Int"]["input"]>>;
}

export interface IntWithAggregatesFilter {
  readonly _avg?: InputMaybe<NestedFloatFilter>;
  readonly _count?: InputMaybe<NestedIntFilter>;
  readonly _max?: InputMaybe<NestedIntFilter>;
  readonly _min?: InputMaybe<NestedIntFilter>;
  readonly _sum?: InputMaybe<NestedIntFilter>;
  readonly equals?: InputMaybe<Scalars["Int"]["input"]>;
  readonly gt?: InputMaybe<Scalars["Int"]["input"]>;
  readonly gte?: InputMaybe<Scalars["Int"]["input"]>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars["Int"]["input"]>>;
  readonly lt?: InputMaybe<Scalars["Int"]["input"]>;
  readonly lte?: InputMaybe<Scalars["Int"]["input"]>;
  readonly not?: InputMaybe<NestedIntWithAggregatesFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars["Int"]["input"]>>;
}

export interface Inventory {
  readonly dateCreated: Scalars["DateTimeISO"]["output"];
  readonly dateUpdated: Scalars["DateTimeISO"]["output"];
  readonly id: Scalars["String"]["output"];
  readonly product: Product;
  readonly productId: Scalars["String"]["output"];
  readonly quantity: Scalars["Int"]["output"];
  readonly size: Scalars["String"]["output"];
}

export interface InventoryAvgAggregate {
  readonly quantity?: Maybe<Scalars["Float"]["output"]>;
}

export interface InventoryAvgOrderByAggregateInput {
  readonly quantity?: InputMaybe<SortOrder>;
}

export interface InventoryCountAggregate {
  readonly _all: Scalars["Int"]["output"];
  readonly dateCreated: Scalars["Int"]["output"];
  readonly dateUpdated: Scalars["Int"]["output"];
  readonly id: Scalars["Int"]["output"];
  readonly productId: Scalars["Int"]["output"];
  readonly quantity: Scalars["Int"]["output"];
  readonly size: Scalars["Int"]["output"];
}

export interface InventoryCountOrderByAggregateInput {
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly productId?: InputMaybe<SortOrder>;
  readonly quantity?: InputMaybe<SortOrder>;
  readonly size?: InputMaybe<SortOrder>;
}

export interface InventoryCreateInput {
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly product: ProductCreateNestedOneWithoutInventoryInput;
  readonly quantity: Scalars["Int"]["input"];
  readonly size: Scalars["String"]["input"];
}

export interface InventoryCreateManyInput {
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly productId: Scalars["String"]["input"];
  readonly quantity: Scalars["Int"]["input"];
  readonly size: Scalars["String"]["input"];
}

export interface InventoryCreateManyProductInput {
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly quantity: Scalars["Int"]["input"];
  readonly size: Scalars["String"]["input"];
}

export interface InventoryCreateManyProductInputEnvelope {
  readonly data: ReadonlyArray<InventoryCreateManyProductInput>;
}

export interface InventoryCreateNestedManyWithoutProductInput {
  readonly connect?: InputMaybe<ReadonlyArray<InventoryWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<InventoryCreateOrConnectWithoutProductInput>
  >;
  readonly create?: InputMaybe<
    ReadonlyArray<InventoryCreateWithoutProductInput>
  >;
  readonly createMany?: InputMaybe<InventoryCreateManyProductInputEnvelope>;
}

export interface InventoryCreateOrConnectWithoutProductInput {
  readonly create: InventoryCreateWithoutProductInput;
  readonly where: InventoryWhereUniqueInput;
}

export interface InventoryCreateWithoutProductInput {
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly quantity: Scalars["Int"]["input"];
  readonly size: Scalars["String"]["input"];
}

export interface InventoryGroupBy {
  readonly _avg?: Maybe<InventoryAvgAggregate>;
  readonly _count?: Maybe<InventoryCountAggregate>;
  readonly _max?: Maybe<InventoryMaxAggregate>;
  readonly _min?: Maybe<InventoryMinAggregate>;
  readonly _sum?: Maybe<InventorySumAggregate>;
  readonly dateCreated: Scalars["DateTimeISO"]["output"];
  readonly dateUpdated: Scalars["DateTimeISO"]["output"];
  readonly id: Scalars["String"]["output"];
  readonly productId: Scalars["String"]["output"];
  readonly quantity: Scalars["Int"]["output"];
  readonly size: Scalars["String"]["output"];
}

export interface InventoryListRelationFilter {
  readonly every?: InputMaybe<InventoryWhereInput>;
  readonly none?: InputMaybe<InventoryWhereInput>;
  readonly some?: InputMaybe<InventoryWhereInput>;
}

export interface InventoryMaxAggregate {
  readonly dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly dateUpdated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly id?: Maybe<Scalars["String"]["output"]>;
  readonly productId?: Maybe<Scalars["String"]["output"]>;
  readonly quantity?: Maybe<Scalars["Int"]["output"]>;
  readonly size?: Maybe<Scalars["String"]["output"]>;
}

export interface InventoryMaxOrderByAggregateInput {
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly productId?: InputMaybe<SortOrder>;
  readonly quantity?: InputMaybe<SortOrder>;
  readonly size?: InputMaybe<SortOrder>;
}

export interface InventoryMinAggregate {
  readonly dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly dateUpdated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly id?: Maybe<Scalars["String"]["output"]>;
  readonly productId?: Maybe<Scalars["String"]["output"]>;
  readonly quantity?: Maybe<Scalars["Int"]["output"]>;
  readonly size?: Maybe<Scalars["String"]["output"]>;
}

export interface InventoryMinOrderByAggregateInput {
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly productId?: InputMaybe<SortOrder>;
  readonly quantity?: InputMaybe<SortOrder>;
  readonly size?: InputMaybe<SortOrder>;
}

export interface InventoryOrderByRelationAggregateInput {
  readonly _count?: InputMaybe<SortOrder>;
}

export interface InventoryOrderByWithAggregationInput {
  readonly _avg?: InputMaybe<InventoryAvgOrderByAggregateInput>;
  readonly _count?: InputMaybe<InventoryCountOrderByAggregateInput>;
  readonly _max?: InputMaybe<InventoryMaxOrderByAggregateInput>;
  readonly _min?: InputMaybe<InventoryMinOrderByAggregateInput>;
  readonly _sum?: InputMaybe<InventorySumOrderByAggregateInput>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly productId?: InputMaybe<SortOrder>;
  readonly quantity?: InputMaybe<SortOrder>;
  readonly size?: InputMaybe<SortOrder>;
}

export interface InventoryOrderByWithRelationInput {
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly product?: InputMaybe<ProductOrderByWithRelationInput>;
  readonly productId?: InputMaybe<SortOrder>;
  readonly quantity?: InputMaybe<SortOrder>;
  readonly size?: InputMaybe<SortOrder>;
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
  readonly AND?: InputMaybe<ReadonlyArray<InventoryScalarWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<InventoryScalarWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<InventoryScalarWhereInput>>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly productId?: InputMaybe<StringFilter>;
  readonly quantity?: InputMaybe<IntFilter>;
  readonly size?: InputMaybe<StringFilter>;
}

export interface InventoryScalarWhereWithAggregatesInput {
  readonly AND?: InputMaybe<
    ReadonlyArray<InventoryScalarWhereWithAggregatesInput>
  >;
  readonly NOT?: InputMaybe<
    ReadonlyArray<InventoryScalarWhereWithAggregatesInput>
  >;
  readonly OR?: InputMaybe<
    ReadonlyArray<InventoryScalarWhereWithAggregatesInput>
  >;
  readonly dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly id?: InputMaybe<StringWithAggregatesFilter>;
  readonly productId?: InputMaybe<StringWithAggregatesFilter>;
  readonly quantity?: InputMaybe<IntWithAggregatesFilter>;
  readonly size?: InputMaybe<StringWithAggregatesFilter>;
}

export interface InventorySumAggregate {
  readonly quantity?: Maybe<Scalars["Int"]["output"]>;
}

export interface InventorySumOrderByAggregateInput {
  readonly quantity?: InputMaybe<SortOrder>;
}

export interface InventoryUpdateInput {
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly product?: InputMaybe<ProductUpdateOneRequiredWithoutInventoryNestedInput>;
  readonly quantity?: InputMaybe<Scalars["Int"]["input"]>;
  readonly size?: InputMaybe<Scalars["String"]["input"]>;
}

export interface InventoryUpdateManyMutationInput {
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly quantity?: InputMaybe<Scalars["Int"]["input"]>;
  readonly size?: InputMaybe<Scalars["String"]["input"]>;
}

export interface InventoryUpdateManyWithWhereWithoutProductInput {
  readonly data: InventoryUpdateManyMutationInput;
  readonly where: InventoryScalarWhereInput;
}

export interface InventoryUpdateManyWithoutProductNestedInput {
  readonly connect?: InputMaybe<ReadonlyArray<InventoryWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<InventoryCreateOrConnectWithoutProductInput>
  >;
  readonly create?: InputMaybe<
    ReadonlyArray<InventoryCreateWithoutProductInput>
  >;
  readonly createMany?: InputMaybe<InventoryCreateManyProductInputEnvelope>;
  readonly delete?: InputMaybe<ReadonlyArray<InventoryWhereUniqueInput>>;
  readonly deleteMany?: InputMaybe<ReadonlyArray<InventoryScalarWhereInput>>;
  readonly disconnect?: InputMaybe<ReadonlyArray<InventoryWhereUniqueInput>>;
  readonly set?: InputMaybe<ReadonlyArray<InventoryWhereUniqueInput>>;
  readonly update?: InputMaybe<
    ReadonlyArray<InventoryUpdateWithWhereUniqueWithoutProductInput>
  >;
  readonly updateMany?: InputMaybe<
    ReadonlyArray<InventoryUpdateManyWithWhereWithoutProductInput>
  >;
  readonly upsert?: InputMaybe<
    ReadonlyArray<InventoryUpsertWithWhereUniqueWithoutProductInput>
  >;
}

export interface InventoryUpdateWithWhereUniqueWithoutProductInput {
  readonly data: InventoryUpdateWithoutProductInput;
  readonly where: InventoryWhereUniqueInput;
}

export interface InventoryUpdateWithoutProductInput {
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly quantity?: InputMaybe<Scalars["Int"]["input"]>;
  readonly size?: InputMaybe<Scalars["String"]["input"]>;
}

export interface InventoryUpsertWithWhereUniqueWithoutProductInput {
  readonly create: InventoryCreateWithoutProductInput;
  readonly update: InventoryUpdateWithoutProductInput;
  readonly where: InventoryWhereUniqueInput;
}

export interface InventoryWhereInput {
  readonly AND?: InputMaybe<ReadonlyArray<InventoryWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<InventoryWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<InventoryWhereInput>>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly product?: InputMaybe<ProductRelationFilter>;
  readonly productId?: InputMaybe<StringFilter>;
  readonly quantity?: InputMaybe<IntFilter>;
  readonly size?: InputMaybe<StringFilter>;
}

export interface InventoryWhereUniqueInput {
  readonly AND?: InputMaybe<ReadonlyArray<InventoryWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<InventoryWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<InventoryWhereInput>>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly product?: InputMaybe<ProductRelationFilter>;
  readonly productId?: InputMaybe<StringFilter>;
  readonly quantity?: InputMaybe<IntFilter>;
  readonly size?: InputMaybe<StringFilter>;
}

export interface LoginHistory {
  readonly id: Scalars["String"]["output"];
  readonly loginTime: Scalars["DateTimeISO"]["output"];
  readonly user: User;
  readonly userId: Scalars["String"]["output"];
}

export interface LoginHistoryCountAggregate {
  readonly _all: Scalars["Int"]["output"];
  readonly id: Scalars["Int"]["output"];
  readonly loginTime: Scalars["Int"]["output"];
  readonly userId: Scalars["Int"]["output"];
}

export interface LoginHistoryCountOrderByAggregateInput {
  readonly id?: InputMaybe<SortOrder>;
  readonly loginTime?: InputMaybe<SortOrder>;
  readonly userId?: InputMaybe<SortOrder>;
}

export interface LoginHistoryCreateInput {
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly loginTime?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly user: UserCreateNestedOneWithoutLoginHistoryInput;
}

export interface LoginHistoryCreateManyInput {
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly loginTime?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly userId: Scalars["String"]["input"];
}

export interface LoginHistoryCreateManyUserInput {
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly loginTime?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
}

export interface LoginHistoryCreateManyUserInputEnvelope {
  readonly data: ReadonlyArray<LoginHistoryCreateManyUserInput>;
}

export interface LoginHistoryCreateNestedManyWithoutUserInput {
  readonly connect?: InputMaybe<ReadonlyArray<LoginHistoryWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<LoginHistoryCreateOrConnectWithoutUserInput>
  >;
  readonly create?: InputMaybe<
    ReadonlyArray<LoginHistoryCreateWithoutUserInput>
  >;
  readonly createMany?: InputMaybe<LoginHistoryCreateManyUserInputEnvelope>;
}

export interface LoginHistoryCreateOrConnectWithoutUserInput {
  readonly create: LoginHistoryCreateWithoutUserInput;
  readonly where: LoginHistoryWhereUniqueInput;
}

export interface LoginHistoryCreateWithoutUserInput {
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly loginTime?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
}

export interface LoginHistoryGroupBy {
  readonly _count?: Maybe<LoginHistoryCountAggregate>;
  readonly _max?: Maybe<LoginHistoryMaxAggregate>;
  readonly _min?: Maybe<LoginHistoryMinAggregate>;
  readonly id: Scalars["String"]["output"];
  readonly loginTime: Scalars["DateTimeISO"]["output"];
  readonly userId: Scalars["String"]["output"];
}

export interface LoginHistoryListRelationFilter {
  readonly every?: InputMaybe<LoginHistoryWhereInput>;
  readonly none?: InputMaybe<LoginHistoryWhereInput>;
  readonly some?: InputMaybe<LoginHistoryWhereInput>;
}

export interface LoginHistoryMaxAggregate {
  readonly id?: Maybe<Scalars["String"]["output"]>;
  readonly loginTime?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly userId?: Maybe<Scalars["String"]["output"]>;
}

export interface LoginHistoryMaxOrderByAggregateInput {
  readonly id?: InputMaybe<SortOrder>;
  readonly loginTime?: InputMaybe<SortOrder>;
  readonly userId?: InputMaybe<SortOrder>;
}

export interface LoginHistoryMinAggregate {
  readonly id?: Maybe<Scalars["String"]["output"]>;
  readonly loginTime?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly userId?: Maybe<Scalars["String"]["output"]>;
}

export interface LoginHistoryMinOrderByAggregateInput {
  readonly id?: InputMaybe<SortOrder>;
  readonly loginTime?: InputMaybe<SortOrder>;
  readonly userId?: InputMaybe<SortOrder>;
}

export interface LoginHistoryOrderByRelationAggregateInput {
  readonly _count?: InputMaybe<SortOrder>;
}

export interface LoginHistoryOrderByWithAggregationInput {
  readonly _count?: InputMaybe<LoginHistoryCountOrderByAggregateInput>;
  readonly _max?: InputMaybe<LoginHistoryMaxOrderByAggregateInput>;
  readonly _min?: InputMaybe<LoginHistoryMinOrderByAggregateInput>;
  readonly id?: InputMaybe<SortOrder>;
  readonly loginTime?: InputMaybe<SortOrder>;
  readonly userId?: InputMaybe<SortOrder>;
}

export interface LoginHistoryOrderByWithRelationInput {
  readonly id?: InputMaybe<SortOrder>;
  readonly loginTime?: InputMaybe<SortOrder>;
  readonly user?: InputMaybe<UserOrderByWithRelationInput>;
  readonly userId?: InputMaybe<SortOrder>;
}

export enum LoginHistoryScalarFieldEnum {
  Id = 0,
  LoginTime = 1,
  UserId = 2,
}

export interface LoginHistoryScalarWhereInput {
  readonly AND?: InputMaybe<ReadonlyArray<LoginHistoryScalarWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<LoginHistoryScalarWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<LoginHistoryScalarWhereInput>>;
  readonly id?: InputMaybe<StringFilter>;
  readonly loginTime?: InputMaybe<DateTimeFilter>;
  readonly userId?: InputMaybe<StringFilter>;
}

export interface LoginHistoryScalarWhereWithAggregatesInput {
  readonly AND?: InputMaybe<
    ReadonlyArray<LoginHistoryScalarWhereWithAggregatesInput>
  >;
  readonly NOT?: InputMaybe<
    ReadonlyArray<LoginHistoryScalarWhereWithAggregatesInput>
  >;
  readonly OR?: InputMaybe<
    ReadonlyArray<LoginHistoryScalarWhereWithAggregatesInput>
  >;
  readonly id?: InputMaybe<StringWithAggregatesFilter>;
  readonly loginTime?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly userId?: InputMaybe<StringWithAggregatesFilter>;
}

export interface LoginHistoryUpdateInput {
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly loginTime?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly user?: InputMaybe<UserUpdateOneRequiredWithoutLoginHistoryNestedInput>;
}

export interface LoginHistoryUpdateManyMutationInput {
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly loginTime?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
}

export interface LoginHistoryUpdateManyWithWhereWithoutUserInput {
  readonly data: LoginHistoryUpdateManyMutationInput;
  readonly where: LoginHistoryScalarWhereInput;
}

export interface LoginHistoryUpdateManyWithoutUserNestedInput {
  readonly connect?: InputMaybe<ReadonlyArray<LoginHistoryWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<LoginHistoryCreateOrConnectWithoutUserInput>
  >;
  readonly create?: InputMaybe<
    ReadonlyArray<LoginHistoryCreateWithoutUserInput>
  >;
  readonly createMany?: InputMaybe<LoginHistoryCreateManyUserInputEnvelope>;
  readonly delete?: InputMaybe<ReadonlyArray<LoginHistoryWhereUniqueInput>>;
  readonly deleteMany?: InputMaybe<ReadonlyArray<LoginHistoryScalarWhereInput>>;
  readonly disconnect?: InputMaybe<ReadonlyArray<LoginHistoryWhereUniqueInput>>;
  readonly set?: InputMaybe<ReadonlyArray<LoginHistoryWhereUniqueInput>>;
  readonly update?: InputMaybe<
    ReadonlyArray<LoginHistoryUpdateWithWhereUniqueWithoutUserInput>
  >;
  readonly updateMany?: InputMaybe<
    ReadonlyArray<LoginHistoryUpdateManyWithWhereWithoutUserInput>
  >;
  readonly upsert?: InputMaybe<
    ReadonlyArray<LoginHistoryUpsertWithWhereUniqueWithoutUserInput>
  >;
}

export interface LoginHistoryUpdateWithWhereUniqueWithoutUserInput {
  readonly data: LoginHistoryUpdateWithoutUserInput;
  readonly where: LoginHistoryWhereUniqueInput;
}

export interface LoginHistoryUpdateWithoutUserInput {
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly loginTime?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
}

export interface LoginHistoryUpsertWithWhereUniqueWithoutUserInput {
  readonly create: LoginHistoryCreateWithoutUserInput;
  readonly update: LoginHistoryUpdateWithoutUserInput;
  readonly where: LoginHistoryWhereUniqueInput;
}

export interface LoginHistoryWhereInput {
  readonly AND?: InputMaybe<ReadonlyArray<LoginHistoryWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<LoginHistoryWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<LoginHistoryWhereInput>>;
  readonly id?: InputMaybe<StringFilter>;
  readonly loginTime?: InputMaybe<DateTimeFilter>;
  readonly user?: InputMaybe<UserRelationFilter>;
  readonly userId?: InputMaybe<StringFilter>;
}

export interface LoginHistoryWhereUniqueInput {
  readonly AND?: InputMaybe<ReadonlyArray<LoginHistoryWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<LoginHistoryWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<LoginHistoryWhereInput>>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly loginTime?: InputMaybe<DateTimeFilter>;
  readonly user?: InputMaybe<UserRelationFilter>;
  readonly userId?: InputMaybe<StringFilter>;
}

export interface Mutation {
  readonly createManyAndReturnColor: ReadonlyArray<CreateManyAndReturnColor>;
  readonly createManyAndReturnCustomer: ReadonlyArray<CreateManyAndReturnCustomer>;
  readonly createManyAndReturnInventory: ReadonlyArray<CreateManyAndReturnInventory>;
  readonly createManyAndReturnLoginHistory: ReadonlyArray<CreateManyAndReturnLoginHistory>;
  readonly createManyAndReturnProduct: ReadonlyArray<CreateManyAndReturnProduct>;
  readonly createManyAndReturnProductColor: ReadonlyArray<CreateManyAndReturnProductColor>;
  readonly createManyAndReturnProductImage: ReadonlyArray<CreateManyAndReturnProductImage>;
  readonly createManyAndReturnProductSales: ReadonlyArray<CreateManyAndReturnProductSales>;
  readonly createManyAndReturnProductType: ReadonlyArray<CreateManyAndReturnProductType>;
  readonly createManyAndReturnUser: ReadonlyArray<CreateManyAndReturnUser>;
  readonly createManyColor: AffectedRowsOutput;
  readonly createManyCustomer: AffectedRowsOutput;
  readonly createManyInventory: AffectedRowsOutput;
  readonly createManyLoginHistory: AffectedRowsOutput;
  readonly createManyProduct: AffectedRowsOutput;
  readonly createManyProductColor: AffectedRowsOutput;
  readonly createManyProductImage: AffectedRowsOutput;
  readonly createManyProductSales: AffectedRowsOutput;
  readonly createManyProductType: AffectedRowsOutput;
  readonly createManyUser: AffectedRowsOutput;
  readonly createOneColor: Color;
  readonly createOneCustomer: Customer;
  readonly createOneInventory: Inventory;
  readonly createOneLoginHistory: LoginHistory;
  readonly createOneProduct: Product;
  readonly createOneProductColor: ProductColor;
  readonly createOneProductImage: ProductImage;
  readonly createOneProductSales: ProductSales;
  readonly createOneProductType: ProductType;
  readonly createOneUser: User;
  readonly deleteManyColor: AffectedRowsOutput;
  readonly deleteManyCustomer: AffectedRowsOutput;
  readonly deleteManyInventory: AffectedRowsOutput;
  readonly deleteManyLoginHistory: AffectedRowsOutput;
  readonly deleteManyProduct: AffectedRowsOutput;
  readonly deleteManyProductColor: AffectedRowsOutput;
  readonly deleteManyProductImage: AffectedRowsOutput;
  readonly deleteManyProductSales: AffectedRowsOutput;
  readonly deleteManyProductType: AffectedRowsOutput;
  readonly deleteManyUser: AffectedRowsOutput;
  readonly deleteOneColor?: Maybe<Color>;
  readonly deleteOneCustomer?: Maybe<Customer>;
  readonly deleteOneInventory?: Maybe<Inventory>;
  readonly deleteOneLoginHistory?: Maybe<LoginHistory>;
  readonly deleteOneProduct?: Maybe<Product>;
  readonly deleteOneProductColor?: Maybe<ProductColor>;
  readonly deleteOneProductImage?: Maybe<ProductImage>;
  readonly deleteOneProductSales?: Maybe<ProductSales>;
  readonly deleteOneProductType?: Maybe<ProductType>;
  readonly deleteOneUser?: Maybe<User>;
  readonly updateManyColor: AffectedRowsOutput;
  readonly updateManyCustomer: AffectedRowsOutput;
  readonly updateManyInventory: AffectedRowsOutput;
  readonly updateManyLoginHistory: AffectedRowsOutput;
  readonly updateManyProduct: AffectedRowsOutput;
  readonly updateManyProductColor: AffectedRowsOutput;
  readonly updateManyProductImage: AffectedRowsOutput;
  readonly updateManyProductSales: AffectedRowsOutput;
  readonly updateManyProductType: AffectedRowsOutput;
  readonly updateManyUser: AffectedRowsOutput;
  readonly updateOneColor?: Maybe<Color>;
  readonly updateOneCustomer?: Maybe<Customer>;
  readonly updateOneInventory?: Maybe<Inventory>;
  readonly updateOneLoginHistory?: Maybe<LoginHistory>;
  readonly updateOneProduct?: Maybe<Product>;
  readonly updateOneProductColor?: Maybe<ProductColor>;
  readonly updateOneProductImage?: Maybe<ProductImage>;
  readonly updateOneProductSales?: Maybe<ProductSales>;
  readonly updateOneProductType?: Maybe<ProductType>;
  readonly updateOneUser?: Maybe<User>;
  readonly upsertOneColor: Color;
  readonly upsertOneCustomer: Customer;
  readonly upsertOneInventory: Inventory;
  readonly upsertOneLoginHistory: LoginHistory;
  readonly upsertOneProduct: Product;
  readonly upsertOneProductColor: ProductColor;
  readonly upsertOneProductImage: ProductImage;
  readonly upsertOneProductSales: ProductSales;
  readonly upsertOneProductType: ProductType;
  readonly upsertOneUser: User;
}

export interface MutationCreateManyAndReturnColorArgs {
  data: ReadonlyArray<ColorCreateManyInput>;
}

export interface MutationCreateManyAndReturnCustomerArgs {
  data: ReadonlyArray<CustomerCreateManyInput>;
}

export interface MutationCreateManyAndReturnInventoryArgs {
  data: ReadonlyArray<InventoryCreateManyInput>;
}

export interface MutationCreateManyAndReturnLoginHistoryArgs {
  data: ReadonlyArray<LoginHistoryCreateManyInput>;
}

export interface MutationCreateManyAndReturnProductArgs {
  data: ReadonlyArray<ProductCreateManyInput>;
}

export interface MutationCreateManyAndReturnProductColorArgs {
  data: ReadonlyArray<ProductColorCreateManyInput>;
}

export interface MutationCreateManyAndReturnProductImageArgs {
  data: ReadonlyArray<ProductImageCreateManyInput>;
}

export interface MutationCreateManyAndReturnProductSalesArgs {
  data: ReadonlyArray<ProductSalesCreateManyInput>;
}

export interface MutationCreateManyAndReturnProductTypeArgs {
  data: ReadonlyArray<ProductTypeCreateManyInput>;
}

export interface MutationCreateManyAndReturnUserArgs {
  data: ReadonlyArray<UserCreateManyInput>;
}

export interface MutationCreateManyColorArgs {
  data: ReadonlyArray<ColorCreateManyInput>;
}

export interface MutationCreateManyCustomerArgs {
  data: ReadonlyArray<CustomerCreateManyInput>;
}

export interface MutationCreateManyInventoryArgs {
  data: ReadonlyArray<InventoryCreateManyInput>;
}

export interface MutationCreateManyLoginHistoryArgs {
  data: ReadonlyArray<LoginHistoryCreateManyInput>;
}

export interface MutationCreateManyProductArgs {
  data: ReadonlyArray<ProductCreateManyInput>;
}

export interface MutationCreateManyProductColorArgs {
  data: ReadonlyArray<ProductColorCreateManyInput>;
}

export interface MutationCreateManyProductImageArgs {
  data: ReadonlyArray<ProductImageCreateManyInput>;
}

export interface MutationCreateManyProductSalesArgs {
  data: ReadonlyArray<ProductSalesCreateManyInput>;
}

export interface MutationCreateManyProductTypeArgs {
  data: ReadonlyArray<ProductTypeCreateManyInput>;
}

export interface MutationCreateManyUserArgs {
  data: ReadonlyArray<UserCreateManyInput>;
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

export interface MutationCreateOneProductImageArgs {
  data: ProductImageCreateInput;
}

export interface MutationCreateOneProductSalesArgs {
  data: ProductSalesCreateInput;
}

export interface MutationCreateOneProductTypeArgs {
  data: ProductTypeCreateInput;
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

export interface MutationDeleteManyProductImageArgs {
  where?: InputMaybe<ProductImageWhereInput>;
}

export interface MutationDeleteManyProductSalesArgs {
  where?: InputMaybe<ProductSalesWhereInput>;
}

export interface MutationDeleteManyProductTypeArgs {
  where?: InputMaybe<ProductTypeWhereInput>;
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

export interface MutationDeleteOneProductImageArgs {
  where: ProductImageWhereUniqueInput;
}

export interface MutationDeleteOneProductSalesArgs {
  where: ProductSalesWhereUniqueInput;
}

export interface MutationDeleteOneProductTypeArgs {
  where: ProductTypeWhereUniqueInput;
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

export interface MutationUpdateManyProductImageArgs {
  data: ProductImageUpdateManyMutationInput;
  where?: InputMaybe<ProductImageWhereInput>;
}

export interface MutationUpdateManyProductSalesArgs {
  data: ProductSalesUpdateManyMutationInput;
  where?: InputMaybe<ProductSalesWhereInput>;
}

export interface MutationUpdateManyProductTypeArgs {
  data: ProductTypeUpdateManyMutationInput;
  where?: InputMaybe<ProductTypeWhereInput>;
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

export interface MutationUpdateOneProductImageArgs {
  data: ProductImageUpdateInput;
  where: ProductImageWhereUniqueInput;
}

export interface MutationUpdateOneProductSalesArgs {
  data: ProductSalesUpdateInput;
  where: ProductSalesWhereUniqueInput;
}

export interface MutationUpdateOneProductTypeArgs {
  data: ProductTypeUpdateInput;
  where: ProductTypeWhereUniqueInput;
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

export interface MutationUpsertOneProductImageArgs {
  create: ProductImageCreateInput;
  update: ProductImageUpdateInput;
  where: ProductImageWhereUniqueInput;
}

export interface MutationUpsertOneProductSalesArgs {
  create: ProductSalesCreateInput;
  update: ProductSalesUpdateInput;
  where: ProductSalesWhereUniqueInput;
}

export interface MutationUpsertOneProductTypeArgs {
  create: ProductTypeCreateInput;
  update: ProductTypeUpdateInput;
  where: ProductTypeWhereUniqueInput;
}

export interface MutationUpsertOneUserArgs {
  create: UserCreateInput;
  update: UserUpdateInput;
  where: UserWhereUniqueInput;
}

export interface NestedDateTimeFilter {
  readonly equals?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly gt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly gte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars["DateTimeISO"]["input"]>>;
  readonly lt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly lte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly not?: InputMaybe<NestedDateTimeFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars["DateTimeISO"]["input"]>>;
}

export interface NestedDateTimeWithAggregatesFilter {
  readonly _count?: InputMaybe<NestedIntFilter>;
  readonly _max?: InputMaybe<NestedDateTimeFilter>;
  readonly _min?: InputMaybe<NestedDateTimeFilter>;
  readonly equals?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly gt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly gte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars["DateTimeISO"]["input"]>>;
  readonly lt?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly lte?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly not?: InputMaybe<NestedDateTimeWithAggregatesFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars["DateTimeISO"]["input"]>>;
}

export interface NestedFloatFilter {
  readonly equals?: InputMaybe<Scalars["Float"]["input"]>;
  readonly gt?: InputMaybe<Scalars["Float"]["input"]>;
  readonly gte?: InputMaybe<Scalars["Float"]["input"]>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars["Float"]["input"]>>;
  readonly lt?: InputMaybe<Scalars["Float"]["input"]>;
  readonly lte?: InputMaybe<Scalars["Float"]["input"]>;
  readonly not?: InputMaybe<NestedFloatFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars["Float"]["input"]>>;
}

export interface NestedFloatWithAggregatesFilter {
  readonly _avg?: InputMaybe<NestedFloatFilter>;
  readonly _count?: InputMaybe<NestedIntFilter>;
  readonly _max?: InputMaybe<NestedFloatFilter>;
  readonly _min?: InputMaybe<NestedFloatFilter>;
  readonly _sum?: InputMaybe<NestedFloatFilter>;
  readonly equals?: InputMaybe<Scalars["Float"]["input"]>;
  readonly gt?: InputMaybe<Scalars["Float"]["input"]>;
  readonly gte?: InputMaybe<Scalars["Float"]["input"]>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars["Float"]["input"]>>;
  readonly lt?: InputMaybe<Scalars["Float"]["input"]>;
  readonly lte?: InputMaybe<Scalars["Float"]["input"]>;
  readonly not?: InputMaybe<NestedFloatWithAggregatesFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars["Float"]["input"]>>;
}

export interface NestedIntFilter {
  readonly equals?: InputMaybe<Scalars["Int"]["input"]>;
  readonly gt?: InputMaybe<Scalars["Int"]["input"]>;
  readonly gte?: InputMaybe<Scalars["Int"]["input"]>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars["Int"]["input"]>>;
  readonly lt?: InputMaybe<Scalars["Int"]["input"]>;
  readonly lte?: InputMaybe<Scalars["Int"]["input"]>;
  readonly not?: InputMaybe<NestedIntFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars["Int"]["input"]>>;
}

export interface NestedIntWithAggregatesFilter {
  readonly _avg?: InputMaybe<NestedFloatFilter>;
  readonly _count?: InputMaybe<NestedIntFilter>;
  readonly _max?: InputMaybe<NestedIntFilter>;
  readonly _min?: InputMaybe<NestedIntFilter>;
  readonly _sum?: InputMaybe<NestedIntFilter>;
  readonly equals?: InputMaybe<Scalars["Int"]["input"]>;
  readonly gt?: InputMaybe<Scalars["Int"]["input"]>;
  readonly gte?: InputMaybe<Scalars["Int"]["input"]>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars["Int"]["input"]>>;
  readonly lt?: InputMaybe<Scalars["Int"]["input"]>;
  readonly lte?: InputMaybe<Scalars["Int"]["input"]>;
  readonly not?: InputMaybe<NestedIntWithAggregatesFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars["Int"]["input"]>>;
}

export interface NestedStringFilter {
  readonly contains?: InputMaybe<Scalars["String"]["input"]>;
  readonly endsWith?: InputMaybe<Scalars["String"]["input"]>;
  readonly equals?: InputMaybe<Scalars["String"]["input"]>;
  readonly gt?: InputMaybe<Scalars["String"]["input"]>;
  readonly gte?: InputMaybe<Scalars["String"]["input"]>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars["String"]["input"]>>;
  readonly lt?: InputMaybe<Scalars["String"]["input"]>;
  readonly lte?: InputMaybe<Scalars["String"]["input"]>;
  readonly not?: InputMaybe<NestedStringFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars["String"]["input"]>>;
  readonly startsWith?: InputMaybe<Scalars["String"]["input"]>;
}

export interface NestedStringWithAggregatesFilter {
  readonly _count?: InputMaybe<NestedIntFilter>;
  readonly _max?: InputMaybe<NestedStringFilter>;
  readonly _min?: InputMaybe<NestedStringFilter>;
  readonly contains?: InputMaybe<Scalars["String"]["input"]>;
  readonly endsWith?: InputMaybe<Scalars["String"]["input"]>;
  readonly equals?: InputMaybe<Scalars["String"]["input"]>;
  readonly gt?: InputMaybe<Scalars["String"]["input"]>;
  readonly gte?: InputMaybe<Scalars["String"]["input"]>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars["String"]["input"]>>;
  readonly lt?: InputMaybe<Scalars["String"]["input"]>;
  readonly lte?: InputMaybe<Scalars["String"]["input"]>;
  readonly not?: InputMaybe<NestedStringWithAggregatesFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars["String"]["input"]>>;
  readonly startsWith?: InputMaybe<Scalars["String"]["input"]>;
}

export interface Product {
  readonly Inventory: ReadonlyArray<Inventory>;
  readonly ProductColor: ReadonlyArray<ProductColor>;
  readonly ProductImage: ReadonlyArray<ProductImage>;
  readonly ProductSales: ReadonlyArray<ProductSales>;
  readonly ProductType?: Maybe<ProductType>;
  readonly _count?: Maybe<ProductCount>;
  readonly dateCreated: Scalars["DateTimeISO"]["output"];
  readonly dateUpdated: Scalars["DateTimeISO"]["output"];
  readonly description: Scalars["String"]["output"];
  readonly genderId: Scalars["String"]["output"];
  readonly id: Scalars["String"]["output"];
  readonly name: Scalars["String"]["output"];
  readonly price: Scalars["String"]["output"];
  readonly productTypeId: Scalars["String"]["output"];
}

export interface ProductInventoryArgs {
  cursor?: InputMaybe<InventoryWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<InventoryScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<InventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<InventoryWhereInput>;
}

export interface ProductProductColorArgs {
  cursor?: InputMaybe<ProductColorWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductColorScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductColorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductColorWhereInput>;
}

export interface ProductProductImageArgs {
  cursor?: InputMaybe<ProductImageWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductImageScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductImageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductImageWhereInput>;
}

export interface ProductProductSalesArgs {
  cursor?: InputMaybe<ProductSalesWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductSalesScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductSalesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductSalesWhereInput>;
}

export interface ProductProductTypeArgs {
  where?: InputMaybe<ProductTypeWhereInput>;
}

export interface ProductColor {
  readonly color: Color;
  readonly colorId: Scalars["String"]["output"];
  readonly dateCreated: Scalars["DateTimeISO"]["output"];
  readonly dateUpdated: Scalars["DateTimeISO"]["output"];
  readonly id: Scalars["String"]["output"];
  readonly product: Product;
  readonly productId: Scalars["String"]["output"];
}

export interface ProductColorCountAggregate {
  readonly _all: Scalars["Int"]["output"];
  readonly colorId: Scalars["Int"]["output"];
  readonly dateCreated: Scalars["Int"]["output"];
  readonly dateUpdated: Scalars["Int"]["output"];
  readonly id: Scalars["Int"]["output"];
  readonly productId: Scalars["Int"]["output"];
}

export interface ProductColorCountOrderByAggregateInput {
  readonly colorId?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly productId?: InputMaybe<SortOrder>;
}

export interface ProductColorCreateInput {
  readonly color: ColorCreateNestedOneWithoutProductColorInput;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly product: ProductCreateNestedOneWithoutProductColorInput;
}

export interface ProductColorCreateManyColorInput {
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly productId: Scalars["String"]["input"];
}

export interface ProductColorCreateManyColorInputEnvelope {
  readonly data: ReadonlyArray<ProductColorCreateManyColorInput>;
}

export interface ProductColorCreateManyInput {
  readonly colorId: Scalars["String"]["input"];
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly productId: Scalars["String"]["input"];
}

export interface ProductColorCreateManyProductInput {
  readonly colorId: Scalars["String"]["input"];
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ProductColorCreateManyProductInputEnvelope {
  readonly data: ReadonlyArray<ProductColorCreateManyProductInput>;
}

export interface ProductColorCreateNestedManyWithoutColorInput {
  readonly connect?: InputMaybe<ReadonlyArray<ProductColorWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<ProductColorCreateOrConnectWithoutColorInput>
  >;
  readonly create?: InputMaybe<
    ReadonlyArray<ProductColorCreateWithoutColorInput>
  >;
  readonly createMany?: InputMaybe<ProductColorCreateManyColorInputEnvelope>;
}

export interface ProductColorCreateNestedManyWithoutProductInput {
  readonly connect?: InputMaybe<ReadonlyArray<ProductColorWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<ProductColorCreateOrConnectWithoutProductInput>
  >;
  readonly create?: InputMaybe<
    ReadonlyArray<ProductColorCreateWithoutProductInput>
  >;
  readonly createMany?: InputMaybe<ProductColorCreateManyProductInputEnvelope>;
}

export interface ProductColorCreateOrConnectWithoutColorInput {
  readonly create: ProductColorCreateWithoutColorInput;
  readonly where: ProductColorWhereUniqueInput;
}

export interface ProductColorCreateOrConnectWithoutProductInput {
  readonly create: ProductColorCreateWithoutProductInput;
  readonly where: ProductColorWhereUniqueInput;
}

export interface ProductColorCreateWithoutColorInput {
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly product: ProductCreateNestedOneWithoutProductColorInput;
}

export interface ProductColorCreateWithoutProductInput {
  readonly color: ColorCreateNestedOneWithoutProductColorInput;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ProductColorGroupBy {
  readonly _count?: Maybe<ProductColorCountAggregate>;
  readonly _max?: Maybe<ProductColorMaxAggregate>;
  readonly _min?: Maybe<ProductColorMinAggregate>;
  readonly colorId: Scalars["String"]["output"];
  readonly dateCreated: Scalars["DateTimeISO"]["output"];
  readonly dateUpdated: Scalars["DateTimeISO"]["output"];
  readonly id: Scalars["String"]["output"];
  readonly productId: Scalars["String"]["output"];
}

export interface ProductColorListRelationFilter {
  readonly every?: InputMaybe<ProductColorWhereInput>;
  readonly none?: InputMaybe<ProductColorWhereInput>;
  readonly some?: InputMaybe<ProductColorWhereInput>;
}

export interface ProductColorMaxAggregate {
  readonly colorId?: Maybe<Scalars["String"]["output"]>;
  readonly dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly dateUpdated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly id?: Maybe<Scalars["String"]["output"]>;
  readonly productId?: Maybe<Scalars["String"]["output"]>;
}

export interface ProductColorMaxOrderByAggregateInput {
  readonly colorId?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly productId?: InputMaybe<SortOrder>;
}

export interface ProductColorMinAggregate {
  readonly colorId?: Maybe<Scalars["String"]["output"]>;
  readonly dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly dateUpdated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly id?: Maybe<Scalars["String"]["output"]>;
  readonly productId?: Maybe<Scalars["String"]["output"]>;
}

export interface ProductColorMinOrderByAggregateInput {
  readonly colorId?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly productId?: InputMaybe<SortOrder>;
}

export interface ProductColorOrderByRelationAggregateInput {
  readonly _count?: InputMaybe<SortOrder>;
}

export interface ProductColorOrderByWithAggregationInput {
  readonly _count?: InputMaybe<ProductColorCountOrderByAggregateInput>;
  readonly _max?: InputMaybe<ProductColorMaxOrderByAggregateInput>;
  readonly _min?: InputMaybe<ProductColorMinOrderByAggregateInput>;
  readonly colorId?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly productId?: InputMaybe<SortOrder>;
}

export interface ProductColorOrderByWithRelationInput {
  readonly color?: InputMaybe<ColorOrderByWithRelationInput>;
  readonly colorId?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly product?: InputMaybe<ProductOrderByWithRelationInput>;
  readonly productId?: InputMaybe<SortOrder>;
}

export enum ProductColorScalarFieldEnum {
  ColorId = 0,
  DateCreated = 1,
  DateUpdated = 2,
  Id = 3,
  ProductId = 4,
}

export interface ProductColorScalarWhereInput {
  readonly AND?: InputMaybe<ReadonlyArray<ProductColorScalarWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductColorScalarWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductColorScalarWhereInput>>;
  readonly colorId?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly productId?: InputMaybe<StringFilter>;
}

export interface ProductColorScalarWhereWithAggregatesInput {
  readonly AND?: InputMaybe<
    ReadonlyArray<ProductColorScalarWhereWithAggregatesInput>
  >;
  readonly NOT?: InputMaybe<
    ReadonlyArray<ProductColorScalarWhereWithAggregatesInput>
  >;
  readonly OR?: InputMaybe<
    ReadonlyArray<ProductColorScalarWhereWithAggregatesInput>
  >;
  readonly colorId?: InputMaybe<StringWithAggregatesFilter>;
  readonly dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly id?: InputMaybe<StringWithAggregatesFilter>;
  readonly productId?: InputMaybe<StringWithAggregatesFilter>;
}

export interface ProductColorUpdateInput {
  readonly color?: InputMaybe<ColorUpdateOneRequiredWithoutProductColorNestedInput>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly product?: InputMaybe<ProductUpdateOneRequiredWithoutProductColorNestedInput>;
}

export interface ProductColorUpdateManyMutationInput {
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ProductColorUpdateManyWithWhereWithoutColorInput {
  readonly data: ProductColorUpdateManyMutationInput;
  readonly where: ProductColorScalarWhereInput;
}

export interface ProductColorUpdateManyWithWhereWithoutProductInput {
  readonly data: ProductColorUpdateManyMutationInput;
  readonly where: ProductColorScalarWhereInput;
}

export interface ProductColorUpdateManyWithoutColorNestedInput {
  readonly connect?: InputMaybe<ReadonlyArray<ProductColorWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<ProductColorCreateOrConnectWithoutColorInput>
  >;
  readonly create?: InputMaybe<
    ReadonlyArray<ProductColorCreateWithoutColorInput>
  >;
  readonly createMany?: InputMaybe<ProductColorCreateManyColorInputEnvelope>;
  readonly delete?: InputMaybe<ReadonlyArray<ProductColorWhereUniqueInput>>;
  readonly deleteMany?: InputMaybe<ReadonlyArray<ProductColorScalarWhereInput>>;
  readonly disconnect?: InputMaybe<ReadonlyArray<ProductColorWhereUniqueInput>>;
  readonly set?: InputMaybe<ReadonlyArray<ProductColorWhereUniqueInput>>;
  readonly update?: InputMaybe<
    ReadonlyArray<ProductColorUpdateWithWhereUniqueWithoutColorInput>
  >;
  readonly updateMany?: InputMaybe<
    ReadonlyArray<ProductColorUpdateManyWithWhereWithoutColorInput>
  >;
  readonly upsert?: InputMaybe<
    ReadonlyArray<ProductColorUpsertWithWhereUniqueWithoutColorInput>
  >;
}

export interface ProductColorUpdateManyWithoutProductNestedInput {
  readonly connect?: InputMaybe<ReadonlyArray<ProductColorWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<ProductColorCreateOrConnectWithoutProductInput>
  >;
  readonly create?: InputMaybe<
    ReadonlyArray<ProductColorCreateWithoutProductInput>
  >;
  readonly createMany?: InputMaybe<ProductColorCreateManyProductInputEnvelope>;
  readonly delete?: InputMaybe<ReadonlyArray<ProductColorWhereUniqueInput>>;
  readonly deleteMany?: InputMaybe<ReadonlyArray<ProductColorScalarWhereInput>>;
  readonly disconnect?: InputMaybe<ReadonlyArray<ProductColorWhereUniqueInput>>;
  readonly set?: InputMaybe<ReadonlyArray<ProductColorWhereUniqueInput>>;
  readonly update?: InputMaybe<
    ReadonlyArray<ProductColorUpdateWithWhereUniqueWithoutProductInput>
  >;
  readonly updateMany?: InputMaybe<
    ReadonlyArray<ProductColorUpdateManyWithWhereWithoutProductInput>
  >;
  readonly upsert?: InputMaybe<
    ReadonlyArray<ProductColorUpsertWithWhereUniqueWithoutProductInput>
  >;
}

export interface ProductColorUpdateWithWhereUniqueWithoutColorInput {
  readonly data: ProductColorUpdateWithoutColorInput;
  readonly where: ProductColorWhereUniqueInput;
}

export interface ProductColorUpdateWithWhereUniqueWithoutProductInput {
  readonly data: ProductColorUpdateWithoutProductInput;
  readonly where: ProductColorWhereUniqueInput;
}

export interface ProductColorUpdateWithoutColorInput {
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly product?: InputMaybe<ProductUpdateOneRequiredWithoutProductColorNestedInput>;
}

export interface ProductColorUpdateWithoutProductInput {
  readonly color?: InputMaybe<ColorUpdateOneRequiredWithoutProductColorNestedInput>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ProductColorUpsertWithWhereUniqueWithoutColorInput {
  readonly create: ProductColorCreateWithoutColorInput;
  readonly update: ProductColorUpdateWithoutColorInput;
  readonly where: ProductColorWhereUniqueInput;
}

export interface ProductColorUpsertWithWhereUniqueWithoutProductInput {
  readonly create: ProductColorCreateWithoutProductInput;
  readonly update: ProductColorUpdateWithoutProductInput;
  readonly where: ProductColorWhereUniqueInput;
}

export interface ProductColorWhereInput {
  readonly AND?: InputMaybe<ReadonlyArray<ProductColorWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductColorWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductColorWhereInput>>;
  readonly color?: InputMaybe<ColorRelationFilter>;
  readonly colorId?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly product?: InputMaybe<ProductRelationFilter>;
  readonly productId?: InputMaybe<StringFilter>;
}

export interface ProductColorWhereUniqueInput {
  readonly AND?: InputMaybe<ReadonlyArray<ProductColorWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductColorWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductColorWhereInput>>;
  readonly color?: InputMaybe<ColorRelationFilter>;
  readonly colorId?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly product?: InputMaybe<ProductRelationFilter>;
  readonly productId?: InputMaybe<StringFilter>;
}

export interface ProductCount {
  readonly Inventory: Scalars["Int"]["output"];
  readonly ProductColor: Scalars["Int"]["output"];
  readonly ProductImage: Scalars["Int"]["output"];
  readonly ProductSales: Scalars["Int"]["output"];
}

export interface ProductCountInventoryArgs {
  where?: InputMaybe<InventoryWhereInput>;
}

export interface ProductCountProductColorArgs {
  where?: InputMaybe<ProductColorWhereInput>;
}

export interface ProductCountProductImageArgs {
  where?: InputMaybe<ProductImageWhereInput>;
}

export interface ProductCountProductSalesArgs {
  where?: InputMaybe<ProductSalesWhereInput>;
}

export interface ProductCountAggregate {
  readonly _all: Scalars["Int"]["output"];
  readonly dateCreated: Scalars["Int"]["output"];
  readonly dateUpdated: Scalars["Int"]["output"];
  readonly description: Scalars["Int"]["output"];
  readonly genderId: Scalars["Int"]["output"];
  readonly id: Scalars["Int"]["output"];
  readonly name: Scalars["Int"]["output"];
  readonly price: Scalars["Int"]["output"];
  readonly productTypeId: Scalars["Int"]["output"];
}

export interface ProductCountOrderByAggregateInput {
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly description?: InputMaybe<SortOrder>;
  readonly genderId?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
  readonly price?: InputMaybe<SortOrder>;
  readonly productTypeId?: InputMaybe<SortOrder>;
}

export interface ProductCreateInput {
  readonly Inventory?: InputMaybe<InventoryCreateNestedManyWithoutProductInput>;
  readonly ProductColor?: InputMaybe<ProductColorCreateNestedManyWithoutProductInput>;
  readonly ProductImage?: InputMaybe<ProductImageCreateNestedManyWithoutProductInput>;
  readonly ProductSales?: InputMaybe<ProductSalesCreateNestedManyWithoutProductInput>;
  readonly ProductType?: InputMaybe<ProductTypeCreateNestedOneWithoutProductInput>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly description: Scalars["String"]["input"];
  readonly genderId: Scalars["String"]["input"];
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly name: Scalars["String"]["input"];
  readonly price: Scalars["String"]["input"];
}

export interface ProductCreateManyInput {
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly description: Scalars["String"]["input"];
  readonly genderId: Scalars["String"]["input"];
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly name: Scalars["String"]["input"];
  readonly price: Scalars["String"]["input"];
  readonly productTypeId: Scalars["String"]["input"];
}

export interface ProductCreateManyProductTypeInput {
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly description: Scalars["String"]["input"];
  readonly genderId: Scalars["String"]["input"];
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly name: Scalars["String"]["input"];
  readonly price: Scalars["String"]["input"];
}

export interface ProductCreateManyProductTypeInputEnvelope {
  readonly data: ReadonlyArray<ProductCreateManyProductTypeInput>;
}

export interface ProductCreateNestedManyWithoutProductTypeInput {
  readonly connect?: InputMaybe<ReadonlyArray<ProductWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<ProductCreateOrConnectWithoutProductTypeInput>
  >;
  readonly create?: InputMaybe<
    ReadonlyArray<ProductCreateWithoutProductTypeInput>
  >;
  readonly createMany?: InputMaybe<ProductCreateManyProductTypeInputEnvelope>;
}

export interface ProductCreateNestedOneWithoutInventoryInput {
  readonly connect?: InputMaybe<ProductWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutInventoryInput>;
  readonly create?: InputMaybe<ProductCreateWithoutInventoryInput>;
}

export interface ProductCreateNestedOneWithoutProductColorInput {
  readonly connect?: InputMaybe<ProductWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductColorInput>;
  readonly create?: InputMaybe<ProductCreateWithoutProductColorInput>;
}

export interface ProductCreateNestedOneWithoutProductImageInput {
  readonly connect?: InputMaybe<ProductWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductImageInput>;
  readonly create?: InputMaybe<ProductCreateWithoutProductImageInput>;
}

export interface ProductCreateNestedOneWithoutProductSalesInput {
  readonly connect?: InputMaybe<ProductWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductSalesInput>;
  readonly create?: InputMaybe<ProductCreateWithoutProductSalesInput>;
}

export interface ProductCreateOrConnectWithoutInventoryInput {
  readonly create: ProductCreateWithoutInventoryInput;
  readonly where: ProductWhereUniqueInput;
}

export interface ProductCreateOrConnectWithoutProductColorInput {
  readonly create: ProductCreateWithoutProductColorInput;
  readonly where: ProductWhereUniqueInput;
}

export interface ProductCreateOrConnectWithoutProductImageInput {
  readonly create: ProductCreateWithoutProductImageInput;
  readonly where: ProductWhereUniqueInput;
}

export interface ProductCreateOrConnectWithoutProductSalesInput {
  readonly create: ProductCreateWithoutProductSalesInput;
  readonly where: ProductWhereUniqueInput;
}

export interface ProductCreateOrConnectWithoutProductTypeInput {
  readonly create: ProductCreateWithoutProductTypeInput;
  readonly where: ProductWhereUniqueInput;
}

export interface ProductCreateWithoutInventoryInput {
  readonly ProductColor?: InputMaybe<ProductColorCreateNestedManyWithoutProductInput>;
  readonly ProductImage?: InputMaybe<ProductImageCreateNestedManyWithoutProductInput>;
  readonly ProductSales?: InputMaybe<ProductSalesCreateNestedManyWithoutProductInput>;
  readonly ProductType?: InputMaybe<ProductTypeCreateNestedOneWithoutProductInput>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly description: Scalars["String"]["input"];
  readonly genderId: Scalars["String"]["input"];
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly name: Scalars["String"]["input"];
  readonly price: Scalars["String"]["input"];
}

export interface ProductCreateWithoutProductColorInput {
  readonly Inventory?: InputMaybe<InventoryCreateNestedManyWithoutProductInput>;
  readonly ProductImage?: InputMaybe<ProductImageCreateNestedManyWithoutProductInput>;
  readonly ProductSales?: InputMaybe<ProductSalesCreateNestedManyWithoutProductInput>;
  readonly ProductType?: InputMaybe<ProductTypeCreateNestedOneWithoutProductInput>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly description: Scalars["String"]["input"];
  readonly genderId: Scalars["String"]["input"];
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly name: Scalars["String"]["input"];
  readonly price: Scalars["String"]["input"];
}

export interface ProductCreateWithoutProductImageInput {
  readonly Inventory?: InputMaybe<InventoryCreateNestedManyWithoutProductInput>;
  readonly ProductColor?: InputMaybe<ProductColorCreateNestedManyWithoutProductInput>;
  readonly ProductSales?: InputMaybe<ProductSalesCreateNestedManyWithoutProductInput>;
  readonly ProductType?: InputMaybe<ProductTypeCreateNestedOneWithoutProductInput>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly description: Scalars["String"]["input"];
  readonly genderId: Scalars["String"]["input"];
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly name: Scalars["String"]["input"];
  readonly price: Scalars["String"]["input"];
}

export interface ProductCreateWithoutProductSalesInput {
  readonly Inventory?: InputMaybe<InventoryCreateNestedManyWithoutProductInput>;
  readonly ProductColor?: InputMaybe<ProductColorCreateNestedManyWithoutProductInput>;
  readonly ProductImage?: InputMaybe<ProductImageCreateNestedManyWithoutProductInput>;
  readonly ProductType?: InputMaybe<ProductTypeCreateNestedOneWithoutProductInput>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly description: Scalars["String"]["input"];
  readonly genderId: Scalars["String"]["input"];
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly name: Scalars["String"]["input"];
  readonly price: Scalars["String"]["input"];
}

export interface ProductCreateWithoutProductTypeInput {
  readonly Inventory?: InputMaybe<InventoryCreateNestedManyWithoutProductInput>;
  readonly ProductColor?: InputMaybe<ProductColorCreateNestedManyWithoutProductInput>;
  readonly ProductImage?: InputMaybe<ProductImageCreateNestedManyWithoutProductInput>;
  readonly ProductSales?: InputMaybe<ProductSalesCreateNestedManyWithoutProductInput>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly description: Scalars["String"]["input"];
  readonly genderId: Scalars["String"]["input"];
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly name: Scalars["String"]["input"];
  readonly price: Scalars["String"]["input"];
}

export interface ProductGroupBy {
  readonly _count?: Maybe<ProductCountAggregate>;
  readonly _max?: Maybe<ProductMaxAggregate>;
  readonly _min?: Maybe<ProductMinAggregate>;
  readonly dateCreated: Scalars["DateTimeISO"]["output"];
  readonly dateUpdated: Scalars["DateTimeISO"]["output"];
  readonly description: Scalars["String"]["output"];
  readonly genderId: Scalars["String"]["output"];
  readonly id: Scalars["String"]["output"];
  readonly name: Scalars["String"]["output"];
  readonly price: Scalars["String"]["output"];
  readonly productTypeId: Scalars["String"]["output"];
}

export interface ProductImage {
  readonly avgColor: Scalars["String"]["output"];
  readonly dateCreated: Scalars["DateTimeISO"]["output"];
  readonly dateUpdated: Scalars["DateTimeISO"]["output"];
  readonly ext: Scalars["String"]["output"];
  readonly height: Scalars["Int"]["output"];
  readonly id: Scalars["String"]["output"];
  readonly imageId: Scalars["Int"]["output"];
  readonly product: Product;
  readonly productId: Scalars["String"]["output"];
  readonly width: Scalars["Int"]["output"];
}

export interface ProductImageAvgAggregate {
  readonly height?: Maybe<Scalars["Float"]["output"]>;
  readonly imageId?: Maybe<Scalars["Float"]["output"]>;
  readonly width?: Maybe<Scalars["Float"]["output"]>;
}

export interface ProductImageAvgOrderByAggregateInput {
  readonly height?: InputMaybe<SortOrder>;
  readonly imageId?: InputMaybe<SortOrder>;
  readonly width?: InputMaybe<SortOrder>;
}

export interface ProductImageCountAggregate {
  readonly _all: Scalars["Int"]["output"];
  readonly avgColor: Scalars["Int"]["output"];
  readonly dateCreated: Scalars["Int"]["output"];
  readonly dateUpdated: Scalars["Int"]["output"];
  readonly ext: Scalars["Int"]["output"];
  readonly height: Scalars["Int"]["output"];
  readonly id: Scalars["Int"]["output"];
  readonly imageId: Scalars["Int"]["output"];
  readonly productId: Scalars["Int"]["output"];
  readonly width: Scalars["Int"]["output"];
}

export interface ProductImageCountOrderByAggregateInput {
  readonly avgColor?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly ext?: InputMaybe<SortOrder>;
  readonly height?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly imageId?: InputMaybe<SortOrder>;
  readonly productId?: InputMaybe<SortOrder>;
  readonly width?: InputMaybe<SortOrder>;
}

export interface ProductImageCreateInput {
  readonly avgColor: Scalars["String"]["input"];
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly ext: Scalars["String"]["input"];
  readonly height: Scalars["Int"]["input"];
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly imageId: Scalars["Int"]["input"];
  readonly product: ProductCreateNestedOneWithoutProductImageInput;
  readonly width: Scalars["Int"]["input"];
}

export interface ProductImageCreateManyInput {
  readonly avgColor: Scalars["String"]["input"];
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly ext: Scalars["String"]["input"];
  readonly height: Scalars["Int"]["input"];
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly imageId: Scalars["Int"]["input"];
  readonly productId: Scalars["String"]["input"];
  readonly width: Scalars["Int"]["input"];
}

export interface ProductImageCreateManyProductInput {
  readonly avgColor: Scalars["String"]["input"];
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly ext: Scalars["String"]["input"];
  readonly height: Scalars["Int"]["input"];
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly imageId: Scalars["Int"]["input"];
  readonly width: Scalars["Int"]["input"];
}

export interface ProductImageCreateManyProductInputEnvelope {
  readonly data: ReadonlyArray<ProductImageCreateManyProductInput>;
}

export interface ProductImageCreateNestedManyWithoutProductInput {
  readonly connect?: InputMaybe<ReadonlyArray<ProductImageWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<ProductImageCreateOrConnectWithoutProductInput>
  >;
  readonly create?: InputMaybe<
    ReadonlyArray<ProductImageCreateWithoutProductInput>
  >;
  readonly createMany?: InputMaybe<ProductImageCreateManyProductInputEnvelope>;
}

export interface ProductImageCreateOrConnectWithoutProductInput {
  readonly create: ProductImageCreateWithoutProductInput;
  readonly where: ProductImageWhereUniqueInput;
}

export interface ProductImageCreateWithoutProductInput {
  readonly avgColor: Scalars["String"]["input"];
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly ext: Scalars["String"]["input"];
  readonly height: Scalars["Int"]["input"];
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly imageId: Scalars["Int"]["input"];
  readonly width: Scalars["Int"]["input"];
}

export interface ProductImageGroupBy {
  readonly _avg?: Maybe<ProductImageAvgAggregate>;
  readonly _count?: Maybe<ProductImageCountAggregate>;
  readonly _max?: Maybe<ProductImageMaxAggregate>;
  readonly _min?: Maybe<ProductImageMinAggregate>;
  readonly _sum?: Maybe<ProductImageSumAggregate>;
  readonly avgColor: Scalars["String"]["output"];
  readonly dateCreated: Scalars["DateTimeISO"]["output"];
  readonly dateUpdated: Scalars["DateTimeISO"]["output"];
  readonly ext: Scalars["String"]["output"];
  readonly height: Scalars["Int"]["output"];
  readonly id: Scalars["String"]["output"];
  readonly imageId: Scalars["Int"]["output"];
  readonly productId: Scalars["String"]["output"];
  readonly width: Scalars["Int"]["output"];
}

export interface ProductImageListRelationFilter {
  readonly every?: InputMaybe<ProductImageWhereInput>;
  readonly none?: InputMaybe<ProductImageWhereInput>;
  readonly some?: InputMaybe<ProductImageWhereInput>;
}

export interface ProductImageMaxAggregate {
  readonly avgColor?: Maybe<Scalars["String"]["output"]>;
  readonly dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly dateUpdated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly ext?: Maybe<Scalars["String"]["output"]>;
  readonly height?: Maybe<Scalars["Int"]["output"]>;
  readonly id?: Maybe<Scalars["String"]["output"]>;
  readonly imageId?: Maybe<Scalars["Int"]["output"]>;
  readonly productId?: Maybe<Scalars["String"]["output"]>;
  readonly width?: Maybe<Scalars["Int"]["output"]>;
}

export interface ProductImageMaxOrderByAggregateInput {
  readonly avgColor?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly ext?: InputMaybe<SortOrder>;
  readonly height?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly imageId?: InputMaybe<SortOrder>;
  readonly productId?: InputMaybe<SortOrder>;
  readonly width?: InputMaybe<SortOrder>;
}

export interface ProductImageMinAggregate {
  readonly avgColor?: Maybe<Scalars["String"]["output"]>;
  readonly dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly dateUpdated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly ext?: Maybe<Scalars["String"]["output"]>;
  readonly height?: Maybe<Scalars["Int"]["output"]>;
  readonly id?: Maybe<Scalars["String"]["output"]>;
  readonly imageId?: Maybe<Scalars["Int"]["output"]>;
  readonly productId?: Maybe<Scalars["String"]["output"]>;
  readonly width?: Maybe<Scalars["Int"]["output"]>;
}

export interface ProductImageMinOrderByAggregateInput {
  readonly avgColor?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly ext?: InputMaybe<SortOrder>;
  readonly height?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly imageId?: InputMaybe<SortOrder>;
  readonly productId?: InputMaybe<SortOrder>;
  readonly width?: InputMaybe<SortOrder>;
}

export interface ProductImageOrderByRelationAggregateInput {
  readonly _count?: InputMaybe<SortOrder>;
}

export interface ProductImageOrderByWithAggregationInput {
  readonly _avg?: InputMaybe<ProductImageAvgOrderByAggregateInput>;
  readonly _count?: InputMaybe<ProductImageCountOrderByAggregateInput>;
  readonly _max?: InputMaybe<ProductImageMaxOrderByAggregateInput>;
  readonly _min?: InputMaybe<ProductImageMinOrderByAggregateInput>;
  readonly _sum?: InputMaybe<ProductImageSumOrderByAggregateInput>;
  readonly avgColor?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly ext?: InputMaybe<SortOrder>;
  readonly height?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly imageId?: InputMaybe<SortOrder>;
  readonly productId?: InputMaybe<SortOrder>;
  readonly width?: InputMaybe<SortOrder>;
}

export interface ProductImageOrderByWithRelationInput {
  readonly avgColor?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly ext?: InputMaybe<SortOrder>;
  readonly height?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly imageId?: InputMaybe<SortOrder>;
  readonly product?: InputMaybe<ProductOrderByWithRelationInput>;
  readonly productId?: InputMaybe<SortOrder>;
  readonly width?: InputMaybe<SortOrder>;
}

export enum ProductImageScalarFieldEnum {
  AvgColor = 0,
  DateCreated = 1,
  DateUpdated = 2,
  Ext = 3,
  Height = 4,
  Id = 5,
  ImageId = 6,
  ProductId = 7,
  Width = 8,
}

export interface ProductImageScalarWhereInput {
  readonly AND?: InputMaybe<ReadonlyArray<ProductImageScalarWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductImageScalarWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductImageScalarWhereInput>>;
  readonly avgColor?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly ext?: InputMaybe<StringFilter>;
  readonly height?: InputMaybe<IntFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly imageId?: InputMaybe<IntFilter>;
  readonly productId?: InputMaybe<StringFilter>;
  readonly width?: InputMaybe<IntFilter>;
}

export interface ProductImageScalarWhereWithAggregatesInput {
  readonly AND?: InputMaybe<
    ReadonlyArray<ProductImageScalarWhereWithAggregatesInput>
  >;
  readonly NOT?: InputMaybe<
    ReadonlyArray<ProductImageScalarWhereWithAggregatesInput>
  >;
  readonly OR?: InputMaybe<
    ReadonlyArray<ProductImageScalarWhereWithAggregatesInput>
  >;
  readonly avgColor?: InputMaybe<StringWithAggregatesFilter>;
  readonly dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly ext?: InputMaybe<StringWithAggregatesFilter>;
  readonly height?: InputMaybe<IntWithAggregatesFilter>;
  readonly id?: InputMaybe<StringWithAggregatesFilter>;
  readonly imageId?: InputMaybe<IntWithAggregatesFilter>;
  readonly productId?: InputMaybe<StringWithAggregatesFilter>;
  readonly width?: InputMaybe<IntWithAggregatesFilter>;
}

export interface ProductImageSumAggregate {
  readonly height?: Maybe<Scalars["Int"]["output"]>;
  readonly imageId?: Maybe<Scalars["Int"]["output"]>;
  readonly width?: Maybe<Scalars["Int"]["output"]>;
}

export interface ProductImageSumOrderByAggregateInput {
  readonly height?: InputMaybe<SortOrder>;
  readonly imageId?: InputMaybe<SortOrder>;
  readonly width?: InputMaybe<SortOrder>;
}

export interface ProductImageUpdateInput {
  readonly avgColor?: InputMaybe<Scalars["String"]["input"]>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly ext?: InputMaybe<Scalars["String"]["input"]>;
  readonly height?: InputMaybe<Scalars["Int"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly imageId?: InputMaybe<Scalars["Int"]["input"]>;
  readonly product?: InputMaybe<ProductUpdateOneRequiredWithoutProductImageNestedInput>;
  readonly width?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface ProductImageUpdateManyMutationInput {
  readonly avgColor?: InputMaybe<Scalars["String"]["input"]>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly ext?: InputMaybe<Scalars["String"]["input"]>;
  readonly height?: InputMaybe<Scalars["Int"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly imageId?: InputMaybe<Scalars["Int"]["input"]>;
  readonly width?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface ProductImageUpdateManyWithWhereWithoutProductInput {
  readonly data: ProductImageUpdateManyMutationInput;
  readonly where: ProductImageScalarWhereInput;
}

export interface ProductImageUpdateManyWithoutProductNestedInput {
  readonly connect?: InputMaybe<ReadonlyArray<ProductImageWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<ProductImageCreateOrConnectWithoutProductInput>
  >;
  readonly create?: InputMaybe<
    ReadonlyArray<ProductImageCreateWithoutProductInput>
  >;
  readonly createMany?: InputMaybe<ProductImageCreateManyProductInputEnvelope>;
  readonly delete?: InputMaybe<ReadonlyArray<ProductImageWhereUniqueInput>>;
  readonly deleteMany?: InputMaybe<ReadonlyArray<ProductImageScalarWhereInput>>;
  readonly disconnect?: InputMaybe<ReadonlyArray<ProductImageWhereUniqueInput>>;
  readonly set?: InputMaybe<ReadonlyArray<ProductImageWhereUniqueInput>>;
  readonly update?: InputMaybe<
    ReadonlyArray<ProductImageUpdateWithWhereUniqueWithoutProductInput>
  >;
  readonly updateMany?: InputMaybe<
    ReadonlyArray<ProductImageUpdateManyWithWhereWithoutProductInput>
  >;
  readonly upsert?: InputMaybe<
    ReadonlyArray<ProductImageUpsertWithWhereUniqueWithoutProductInput>
  >;
}

export interface ProductImageUpdateWithWhereUniqueWithoutProductInput {
  readonly data: ProductImageUpdateWithoutProductInput;
  readonly where: ProductImageWhereUniqueInput;
}

export interface ProductImageUpdateWithoutProductInput {
  readonly avgColor?: InputMaybe<Scalars["String"]["input"]>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly ext?: InputMaybe<Scalars["String"]["input"]>;
  readonly height?: InputMaybe<Scalars["Int"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly imageId?: InputMaybe<Scalars["Int"]["input"]>;
  readonly width?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface ProductImageUpsertWithWhereUniqueWithoutProductInput {
  readonly create: ProductImageCreateWithoutProductInput;
  readonly update: ProductImageUpdateWithoutProductInput;
  readonly where: ProductImageWhereUniqueInput;
}

export interface ProductImageWhereInput {
  readonly AND?: InputMaybe<ReadonlyArray<ProductImageWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductImageWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductImageWhereInput>>;
  readonly avgColor?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly ext?: InputMaybe<StringFilter>;
  readonly height?: InputMaybe<IntFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly imageId?: InputMaybe<IntFilter>;
  readonly product?: InputMaybe<ProductRelationFilter>;
  readonly productId?: InputMaybe<StringFilter>;
  readonly width?: InputMaybe<IntFilter>;
}

export interface ProductImageWhereUniqueInput {
  readonly AND?: InputMaybe<ReadonlyArray<ProductImageWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductImageWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductImageWhereInput>>;
  readonly avgColor?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly ext?: InputMaybe<StringFilter>;
  readonly height?: InputMaybe<IntFilter>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly imageId?: InputMaybe<IntFilter>;
  readonly product?: InputMaybe<ProductRelationFilter>;
  readonly productId?: InputMaybe<StringFilter>;
  readonly width?: InputMaybe<IntFilter>;
}

export interface ProductListRelationFilter {
  readonly every?: InputMaybe<ProductWhereInput>;
  readonly none?: InputMaybe<ProductWhereInput>;
  readonly some?: InputMaybe<ProductWhereInput>;
}

export interface ProductMaxAggregate {
  readonly dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly dateUpdated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly description?: Maybe<Scalars["String"]["output"]>;
  readonly genderId?: Maybe<Scalars["String"]["output"]>;
  readonly id?: Maybe<Scalars["String"]["output"]>;
  readonly name?: Maybe<Scalars["String"]["output"]>;
  readonly price?: Maybe<Scalars["String"]["output"]>;
  readonly productTypeId?: Maybe<Scalars["String"]["output"]>;
}

export interface ProductMaxOrderByAggregateInput {
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly description?: InputMaybe<SortOrder>;
  readonly genderId?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
  readonly price?: InputMaybe<SortOrder>;
  readonly productTypeId?: InputMaybe<SortOrder>;
}

export interface ProductMinAggregate {
  readonly dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly dateUpdated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly description?: Maybe<Scalars["String"]["output"]>;
  readonly genderId?: Maybe<Scalars["String"]["output"]>;
  readonly id?: Maybe<Scalars["String"]["output"]>;
  readonly name?: Maybe<Scalars["String"]["output"]>;
  readonly price?: Maybe<Scalars["String"]["output"]>;
  readonly productTypeId?: Maybe<Scalars["String"]["output"]>;
}

export interface ProductMinOrderByAggregateInput {
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly description?: InputMaybe<SortOrder>;
  readonly genderId?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
  readonly price?: InputMaybe<SortOrder>;
  readonly productTypeId?: InputMaybe<SortOrder>;
}

export interface ProductOrderByRelationAggregateInput {
  readonly _count?: InputMaybe<SortOrder>;
}

export interface ProductOrderByWithAggregationInput {
  readonly _count?: InputMaybe<ProductCountOrderByAggregateInput>;
  readonly _max?: InputMaybe<ProductMaxOrderByAggregateInput>;
  readonly _min?: InputMaybe<ProductMinOrderByAggregateInput>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly description?: InputMaybe<SortOrder>;
  readonly genderId?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
  readonly price?: InputMaybe<SortOrder>;
  readonly productTypeId?: InputMaybe<SortOrder>;
}

export interface ProductOrderByWithRelationInput {
  readonly Inventory?: InputMaybe<InventoryOrderByRelationAggregateInput>;
  readonly ProductColor?: InputMaybe<ProductColorOrderByRelationAggregateInput>;
  readonly ProductImage?: InputMaybe<ProductImageOrderByRelationAggregateInput>;
  readonly ProductSales?: InputMaybe<ProductSalesOrderByRelationAggregateInput>;
  readonly ProductType?: InputMaybe<ProductTypeOrderByWithRelationInput>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly description?: InputMaybe<SortOrder>;
  readonly genderId?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
  readonly price?: InputMaybe<SortOrder>;
  readonly productTypeId?: InputMaybe<SortOrder>;
}

export interface ProductRelationFilter {
  readonly is?: InputMaybe<ProductWhereInput>;
  readonly isNot?: InputMaybe<ProductWhereInput>;
}

export interface ProductSales {
  readonly Customer: Customer;
  readonly User: User;
  readonly customerId: Scalars["String"]["output"];
  readonly dateCreated: Scalars["DateTimeISO"]["output"];
  readonly dateUpdated: Scalars["DateTimeISO"]["output"];
  readonly id: Scalars["String"]["output"];
  readonly price: Scalars["Float"]["output"];
  readonly product: Product;
  readonly productId: Scalars["String"]["output"];
  readonly quantity: Scalars["Int"]["output"];
  readonly userId: Scalars["String"]["output"];
}

export interface ProductSalesAvgAggregate {
  readonly price?: Maybe<Scalars["Float"]["output"]>;
  readonly quantity?: Maybe<Scalars["Float"]["output"]>;
}

export interface ProductSalesAvgOrderByAggregateInput {
  readonly price?: InputMaybe<SortOrder>;
  readonly quantity?: InputMaybe<SortOrder>;
}

export interface ProductSalesCountAggregate {
  readonly _all: Scalars["Int"]["output"];
  readonly customerId: Scalars["Int"]["output"];
  readonly dateCreated: Scalars["Int"]["output"];
  readonly dateUpdated: Scalars["Int"]["output"];
  readonly id: Scalars["Int"]["output"];
  readonly price: Scalars["Int"]["output"];
  readonly productId: Scalars["Int"]["output"];
  readonly quantity: Scalars["Int"]["output"];
  readonly userId: Scalars["Int"]["output"];
}

export interface ProductSalesCountOrderByAggregateInput {
  readonly customerId?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly price?: InputMaybe<SortOrder>;
  readonly productId?: InputMaybe<SortOrder>;
  readonly quantity?: InputMaybe<SortOrder>;
  readonly userId?: InputMaybe<SortOrder>;
}

export interface ProductSalesCreateInput {
  readonly Customer: CustomerCreateNestedOneWithoutProductSalesInput;
  readonly User: UserCreateNestedOneWithoutProductSalesInput;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly price: Scalars["Float"]["input"];
  readonly product: ProductCreateNestedOneWithoutProductSalesInput;
  readonly quantity: Scalars["Int"]["input"];
}

export interface ProductSalesCreateManyCustomerInput {
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly price: Scalars["Float"]["input"];
  readonly productId: Scalars["String"]["input"];
  readonly quantity: Scalars["Int"]["input"];
  readonly userId: Scalars["String"]["input"];
}

export interface ProductSalesCreateManyCustomerInputEnvelope {
  readonly data: ReadonlyArray<ProductSalesCreateManyCustomerInput>;
}

export interface ProductSalesCreateManyInput {
  readonly customerId: Scalars["String"]["input"];
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly price: Scalars["Float"]["input"];
  readonly productId: Scalars["String"]["input"];
  readonly quantity: Scalars["Int"]["input"];
  readonly userId: Scalars["String"]["input"];
}

export interface ProductSalesCreateManyProductInput {
  readonly customerId: Scalars["String"]["input"];
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly price: Scalars["Float"]["input"];
  readonly quantity: Scalars["Int"]["input"];
  readonly userId: Scalars["String"]["input"];
}

export interface ProductSalesCreateManyProductInputEnvelope {
  readonly data: ReadonlyArray<ProductSalesCreateManyProductInput>;
}

export interface ProductSalesCreateManyUserInput {
  readonly customerId: Scalars["String"]["input"];
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly price: Scalars["Float"]["input"];
  readonly productId: Scalars["String"]["input"];
  readonly quantity: Scalars["Int"]["input"];
}

export interface ProductSalesCreateManyUserInputEnvelope {
  readonly data: ReadonlyArray<ProductSalesCreateManyUserInput>;
}

export interface ProductSalesCreateNestedManyWithoutCustomerInput {
  readonly connect?: InputMaybe<ReadonlyArray<ProductSalesWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<ProductSalesCreateOrConnectWithoutCustomerInput>
  >;
  readonly create?: InputMaybe<
    ReadonlyArray<ProductSalesCreateWithoutCustomerInput>
  >;
  readonly createMany?: InputMaybe<ProductSalesCreateManyCustomerInputEnvelope>;
}

export interface ProductSalesCreateNestedManyWithoutProductInput {
  readonly connect?: InputMaybe<ReadonlyArray<ProductSalesWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<ProductSalesCreateOrConnectWithoutProductInput>
  >;
  readonly create?: InputMaybe<
    ReadonlyArray<ProductSalesCreateWithoutProductInput>
  >;
  readonly createMany?: InputMaybe<ProductSalesCreateManyProductInputEnvelope>;
}

export interface ProductSalesCreateNestedManyWithoutUserInput {
  readonly connect?: InputMaybe<ReadonlyArray<ProductSalesWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<ProductSalesCreateOrConnectWithoutUserInput>
  >;
  readonly create?: InputMaybe<
    ReadonlyArray<ProductSalesCreateWithoutUserInput>
  >;
  readonly createMany?: InputMaybe<ProductSalesCreateManyUserInputEnvelope>;
}

export interface ProductSalesCreateOrConnectWithoutCustomerInput {
  readonly create: ProductSalesCreateWithoutCustomerInput;
  readonly where: ProductSalesWhereUniqueInput;
}

export interface ProductSalesCreateOrConnectWithoutProductInput {
  readonly create: ProductSalesCreateWithoutProductInput;
  readonly where: ProductSalesWhereUniqueInput;
}

export interface ProductSalesCreateOrConnectWithoutUserInput {
  readonly create: ProductSalesCreateWithoutUserInput;
  readonly where: ProductSalesWhereUniqueInput;
}

export interface ProductSalesCreateWithoutCustomerInput {
  readonly User: UserCreateNestedOneWithoutProductSalesInput;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly price: Scalars["Float"]["input"];
  readonly product: ProductCreateNestedOneWithoutProductSalesInput;
  readonly quantity: Scalars["Int"]["input"];
}

export interface ProductSalesCreateWithoutProductInput {
  readonly Customer: CustomerCreateNestedOneWithoutProductSalesInput;
  readonly User: UserCreateNestedOneWithoutProductSalesInput;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly price: Scalars["Float"]["input"];
  readonly quantity: Scalars["Int"]["input"];
}

export interface ProductSalesCreateWithoutUserInput {
  readonly Customer: CustomerCreateNestedOneWithoutProductSalesInput;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly price: Scalars["Float"]["input"];
  readonly product: ProductCreateNestedOneWithoutProductSalesInput;
  readonly quantity: Scalars["Int"]["input"];
}

export interface ProductSalesGroupBy {
  readonly _avg?: Maybe<ProductSalesAvgAggregate>;
  readonly _count?: Maybe<ProductSalesCountAggregate>;
  readonly _max?: Maybe<ProductSalesMaxAggregate>;
  readonly _min?: Maybe<ProductSalesMinAggregate>;
  readonly _sum?: Maybe<ProductSalesSumAggregate>;
  readonly customerId: Scalars["String"]["output"];
  readonly dateCreated: Scalars["DateTimeISO"]["output"];
  readonly dateUpdated: Scalars["DateTimeISO"]["output"];
  readonly id: Scalars["String"]["output"];
  readonly price: Scalars["Float"]["output"];
  readonly productId: Scalars["String"]["output"];
  readonly quantity: Scalars["Int"]["output"];
  readonly userId: Scalars["String"]["output"];
}

export interface ProductSalesListRelationFilter {
  readonly every?: InputMaybe<ProductSalesWhereInput>;
  readonly none?: InputMaybe<ProductSalesWhereInput>;
  readonly some?: InputMaybe<ProductSalesWhereInput>;
}

export interface ProductSalesMaxAggregate {
  readonly customerId?: Maybe<Scalars["String"]["output"]>;
  readonly dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly dateUpdated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly id?: Maybe<Scalars["String"]["output"]>;
  readonly price?: Maybe<Scalars["Float"]["output"]>;
  readonly productId?: Maybe<Scalars["String"]["output"]>;
  readonly quantity?: Maybe<Scalars["Int"]["output"]>;
  readonly userId?: Maybe<Scalars["String"]["output"]>;
}

export interface ProductSalesMaxOrderByAggregateInput {
  readonly customerId?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly price?: InputMaybe<SortOrder>;
  readonly productId?: InputMaybe<SortOrder>;
  readonly quantity?: InputMaybe<SortOrder>;
  readonly userId?: InputMaybe<SortOrder>;
}

export interface ProductSalesMinAggregate {
  readonly customerId?: Maybe<Scalars["String"]["output"]>;
  readonly dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly dateUpdated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly id?: Maybe<Scalars["String"]["output"]>;
  readonly price?: Maybe<Scalars["Float"]["output"]>;
  readonly productId?: Maybe<Scalars["String"]["output"]>;
  readonly quantity?: Maybe<Scalars["Int"]["output"]>;
  readonly userId?: Maybe<Scalars["String"]["output"]>;
}

export interface ProductSalesMinOrderByAggregateInput {
  readonly customerId?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly price?: InputMaybe<SortOrder>;
  readonly productId?: InputMaybe<SortOrder>;
  readonly quantity?: InputMaybe<SortOrder>;
  readonly userId?: InputMaybe<SortOrder>;
}

export interface ProductSalesOrderByRelationAggregateInput {
  readonly _count?: InputMaybe<SortOrder>;
}

export interface ProductSalesOrderByWithAggregationInput {
  readonly _avg?: InputMaybe<ProductSalesAvgOrderByAggregateInput>;
  readonly _count?: InputMaybe<ProductSalesCountOrderByAggregateInput>;
  readonly _max?: InputMaybe<ProductSalesMaxOrderByAggregateInput>;
  readonly _min?: InputMaybe<ProductSalesMinOrderByAggregateInput>;
  readonly _sum?: InputMaybe<ProductSalesSumOrderByAggregateInput>;
  readonly customerId?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly price?: InputMaybe<SortOrder>;
  readonly productId?: InputMaybe<SortOrder>;
  readonly quantity?: InputMaybe<SortOrder>;
  readonly userId?: InputMaybe<SortOrder>;
}

export interface ProductSalesOrderByWithRelationInput {
  readonly Customer?: InputMaybe<CustomerOrderByWithRelationInput>;
  readonly User?: InputMaybe<UserOrderByWithRelationInput>;
  readonly customerId?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly price?: InputMaybe<SortOrder>;
  readonly product?: InputMaybe<ProductOrderByWithRelationInput>;
  readonly productId?: InputMaybe<SortOrder>;
  readonly quantity?: InputMaybe<SortOrder>;
  readonly userId?: InputMaybe<SortOrder>;
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
  readonly AND?: InputMaybe<ReadonlyArray<ProductSalesScalarWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductSalesScalarWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductSalesScalarWhereInput>>;
  readonly customerId?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly price?: InputMaybe<FloatFilter>;
  readonly productId?: InputMaybe<StringFilter>;
  readonly quantity?: InputMaybe<IntFilter>;
  readonly userId?: InputMaybe<StringFilter>;
}

export interface ProductSalesScalarWhereWithAggregatesInput {
  readonly AND?: InputMaybe<
    ReadonlyArray<ProductSalesScalarWhereWithAggregatesInput>
  >;
  readonly NOT?: InputMaybe<
    ReadonlyArray<ProductSalesScalarWhereWithAggregatesInput>
  >;
  readonly OR?: InputMaybe<
    ReadonlyArray<ProductSalesScalarWhereWithAggregatesInput>
  >;
  readonly customerId?: InputMaybe<StringWithAggregatesFilter>;
  readonly dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly id?: InputMaybe<StringWithAggregatesFilter>;
  readonly price?: InputMaybe<FloatWithAggregatesFilter>;
  readonly productId?: InputMaybe<StringWithAggregatesFilter>;
  readonly quantity?: InputMaybe<IntWithAggregatesFilter>;
  readonly userId?: InputMaybe<StringWithAggregatesFilter>;
}

export interface ProductSalesSumAggregate {
  readonly price?: Maybe<Scalars["Float"]["output"]>;
  readonly quantity?: Maybe<Scalars["Int"]["output"]>;
}

export interface ProductSalesSumOrderByAggregateInput {
  readonly price?: InputMaybe<SortOrder>;
  readonly quantity?: InputMaybe<SortOrder>;
}

export interface ProductSalesUpdateInput {
  readonly Customer?: InputMaybe<CustomerUpdateOneRequiredWithoutProductSalesNestedInput>;
  readonly User?: InputMaybe<UserUpdateOneRequiredWithoutProductSalesNestedInput>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly price?: InputMaybe<Scalars["Float"]["input"]>;
  readonly product?: InputMaybe<ProductUpdateOneRequiredWithoutProductSalesNestedInput>;
  readonly quantity?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface ProductSalesUpdateManyMutationInput {
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly price?: InputMaybe<Scalars["Float"]["input"]>;
  readonly quantity?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface ProductSalesUpdateManyWithWhereWithoutCustomerInput {
  readonly data: ProductSalesUpdateManyMutationInput;
  readonly where: ProductSalesScalarWhereInput;
}

export interface ProductSalesUpdateManyWithWhereWithoutProductInput {
  readonly data: ProductSalesUpdateManyMutationInput;
  readonly where: ProductSalesScalarWhereInput;
}

export interface ProductSalesUpdateManyWithWhereWithoutUserInput {
  readonly data: ProductSalesUpdateManyMutationInput;
  readonly where: ProductSalesScalarWhereInput;
}

export interface ProductSalesUpdateManyWithoutCustomerNestedInput {
  readonly connect?: InputMaybe<ReadonlyArray<ProductSalesWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<ProductSalesCreateOrConnectWithoutCustomerInput>
  >;
  readonly create?: InputMaybe<
    ReadonlyArray<ProductSalesCreateWithoutCustomerInput>
  >;
  readonly createMany?: InputMaybe<ProductSalesCreateManyCustomerInputEnvelope>;
  readonly delete?: InputMaybe<ReadonlyArray<ProductSalesWhereUniqueInput>>;
  readonly deleteMany?: InputMaybe<ReadonlyArray<ProductSalesScalarWhereInput>>;
  readonly disconnect?: InputMaybe<ReadonlyArray<ProductSalesWhereUniqueInput>>;
  readonly set?: InputMaybe<ReadonlyArray<ProductSalesWhereUniqueInput>>;
  readonly update?: InputMaybe<
    ReadonlyArray<ProductSalesUpdateWithWhereUniqueWithoutCustomerInput>
  >;
  readonly updateMany?: InputMaybe<
    ReadonlyArray<ProductSalesUpdateManyWithWhereWithoutCustomerInput>
  >;
  readonly upsert?: InputMaybe<
    ReadonlyArray<ProductSalesUpsertWithWhereUniqueWithoutCustomerInput>
  >;
}

export interface ProductSalesUpdateManyWithoutProductNestedInput {
  readonly connect?: InputMaybe<ReadonlyArray<ProductSalesWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<ProductSalesCreateOrConnectWithoutProductInput>
  >;
  readonly create?: InputMaybe<
    ReadonlyArray<ProductSalesCreateWithoutProductInput>
  >;
  readonly createMany?: InputMaybe<ProductSalesCreateManyProductInputEnvelope>;
  readonly delete?: InputMaybe<ReadonlyArray<ProductSalesWhereUniqueInput>>;
  readonly deleteMany?: InputMaybe<ReadonlyArray<ProductSalesScalarWhereInput>>;
  readonly disconnect?: InputMaybe<ReadonlyArray<ProductSalesWhereUniqueInput>>;
  readonly set?: InputMaybe<ReadonlyArray<ProductSalesWhereUniqueInput>>;
  readonly update?: InputMaybe<
    ReadonlyArray<ProductSalesUpdateWithWhereUniqueWithoutProductInput>
  >;
  readonly updateMany?: InputMaybe<
    ReadonlyArray<ProductSalesUpdateManyWithWhereWithoutProductInput>
  >;
  readonly upsert?: InputMaybe<
    ReadonlyArray<ProductSalesUpsertWithWhereUniqueWithoutProductInput>
  >;
}

export interface ProductSalesUpdateManyWithoutUserNestedInput {
  readonly connect?: InputMaybe<ReadonlyArray<ProductSalesWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<ProductSalesCreateOrConnectWithoutUserInput>
  >;
  readonly create?: InputMaybe<
    ReadonlyArray<ProductSalesCreateWithoutUserInput>
  >;
  readonly createMany?: InputMaybe<ProductSalesCreateManyUserInputEnvelope>;
  readonly delete?: InputMaybe<ReadonlyArray<ProductSalesWhereUniqueInput>>;
  readonly deleteMany?: InputMaybe<ReadonlyArray<ProductSalesScalarWhereInput>>;
  readonly disconnect?: InputMaybe<ReadonlyArray<ProductSalesWhereUniqueInput>>;
  readonly set?: InputMaybe<ReadonlyArray<ProductSalesWhereUniqueInput>>;
  readonly update?: InputMaybe<
    ReadonlyArray<ProductSalesUpdateWithWhereUniqueWithoutUserInput>
  >;
  readonly updateMany?: InputMaybe<
    ReadonlyArray<ProductSalesUpdateManyWithWhereWithoutUserInput>
  >;
  readonly upsert?: InputMaybe<
    ReadonlyArray<ProductSalesUpsertWithWhereUniqueWithoutUserInput>
  >;
}

export interface ProductSalesUpdateWithWhereUniqueWithoutCustomerInput {
  readonly data: ProductSalesUpdateWithoutCustomerInput;
  readonly where: ProductSalesWhereUniqueInput;
}

export interface ProductSalesUpdateWithWhereUniqueWithoutProductInput {
  readonly data: ProductSalesUpdateWithoutProductInput;
  readonly where: ProductSalesWhereUniqueInput;
}

export interface ProductSalesUpdateWithWhereUniqueWithoutUserInput {
  readonly data: ProductSalesUpdateWithoutUserInput;
  readonly where: ProductSalesWhereUniqueInput;
}

export interface ProductSalesUpdateWithoutCustomerInput {
  readonly User?: InputMaybe<UserUpdateOneRequiredWithoutProductSalesNestedInput>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly price?: InputMaybe<Scalars["Float"]["input"]>;
  readonly product?: InputMaybe<ProductUpdateOneRequiredWithoutProductSalesNestedInput>;
  readonly quantity?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface ProductSalesUpdateWithoutProductInput {
  readonly Customer?: InputMaybe<CustomerUpdateOneRequiredWithoutProductSalesNestedInput>;
  readonly User?: InputMaybe<UserUpdateOneRequiredWithoutProductSalesNestedInput>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly price?: InputMaybe<Scalars["Float"]["input"]>;
  readonly quantity?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface ProductSalesUpdateWithoutUserInput {
  readonly Customer?: InputMaybe<CustomerUpdateOneRequiredWithoutProductSalesNestedInput>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly price?: InputMaybe<Scalars["Float"]["input"]>;
  readonly product?: InputMaybe<ProductUpdateOneRequiredWithoutProductSalesNestedInput>;
  readonly quantity?: InputMaybe<Scalars["Int"]["input"]>;
}

export interface ProductSalesUpsertWithWhereUniqueWithoutCustomerInput {
  readonly create: ProductSalesCreateWithoutCustomerInput;
  readonly update: ProductSalesUpdateWithoutCustomerInput;
  readonly where: ProductSalesWhereUniqueInput;
}

export interface ProductSalesUpsertWithWhereUniqueWithoutProductInput {
  readonly create: ProductSalesCreateWithoutProductInput;
  readonly update: ProductSalesUpdateWithoutProductInput;
  readonly where: ProductSalesWhereUniqueInput;
}

export interface ProductSalesUpsertWithWhereUniqueWithoutUserInput {
  readonly create: ProductSalesCreateWithoutUserInput;
  readonly update: ProductSalesUpdateWithoutUserInput;
  readonly where: ProductSalesWhereUniqueInput;
}

export interface ProductSalesWhereInput {
  readonly AND?: InputMaybe<ReadonlyArray<ProductSalesWhereInput>>;
  readonly Customer?: InputMaybe<CustomerRelationFilter>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductSalesWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductSalesWhereInput>>;
  readonly User?: InputMaybe<UserRelationFilter>;
  readonly customerId?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly price?: InputMaybe<FloatFilter>;
  readonly product?: InputMaybe<ProductRelationFilter>;
  readonly productId?: InputMaybe<StringFilter>;
  readonly quantity?: InputMaybe<IntFilter>;
  readonly userId?: InputMaybe<StringFilter>;
}

export interface ProductSalesWhereUniqueInput {
  readonly AND?: InputMaybe<ReadonlyArray<ProductSalesWhereInput>>;
  readonly Customer?: InputMaybe<CustomerRelationFilter>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductSalesWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductSalesWhereInput>>;
  readonly User?: InputMaybe<UserRelationFilter>;
  readonly customerId?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly price?: InputMaybe<FloatFilter>;
  readonly product?: InputMaybe<ProductRelationFilter>;
  readonly productId?: InputMaybe<StringFilter>;
  readonly quantity?: InputMaybe<IntFilter>;
  readonly userId?: InputMaybe<StringFilter>;
}

export enum ProductScalarFieldEnum {
  DateCreated = 0,
  DateUpdated = 1,
  Description = 2,
  GenderId = 3,
  Id = 4,
  Name = 5,
  Price = 6,
  ProductTypeId = 7,
}

export interface ProductScalarWhereInput {
  readonly AND?: InputMaybe<ReadonlyArray<ProductScalarWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductScalarWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductScalarWhereInput>>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly description?: InputMaybe<StringFilter>;
  readonly genderId?: InputMaybe<StringFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly name?: InputMaybe<StringFilter>;
  readonly price?: InputMaybe<StringFilter>;
  readonly productTypeId?: InputMaybe<StringFilter>;
}

export interface ProductScalarWhereWithAggregatesInput {
  readonly AND?: InputMaybe<
    ReadonlyArray<ProductScalarWhereWithAggregatesInput>
  >;
  readonly NOT?: InputMaybe<
    ReadonlyArray<ProductScalarWhereWithAggregatesInput>
  >;
  readonly OR?: InputMaybe<
    ReadonlyArray<ProductScalarWhereWithAggregatesInput>
  >;
  readonly dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly description?: InputMaybe<StringWithAggregatesFilter>;
  readonly genderId?: InputMaybe<StringWithAggregatesFilter>;
  readonly id?: InputMaybe<StringWithAggregatesFilter>;
  readonly name?: InputMaybe<StringWithAggregatesFilter>;
  readonly price?: InputMaybe<StringWithAggregatesFilter>;
  readonly productTypeId?: InputMaybe<StringWithAggregatesFilter>;
}

export interface ProductType {
  readonly Product: ReadonlyArray<Product>;
  readonly _count?: Maybe<ProductTypeCount>;
  readonly dateCreated: Scalars["DateTimeISO"]["output"];
  readonly dateUpdated: Scalars["DateTimeISO"]["output"];
  readonly id: Scalars["String"]["output"];
  readonly name: Scalars["String"]["output"];
}

export interface ProductTypeProductArgs {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductWhereInput>;
}

export interface ProductTypeCount {
  readonly Product: Scalars["Int"]["output"];
}

export interface ProductTypeCountProductArgs {
  where?: InputMaybe<ProductWhereInput>;
}

export interface ProductTypeCountAggregate {
  readonly _all: Scalars["Int"]["output"];
  readonly dateCreated: Scalars["Int"]["output"];
  readonly dateUpdated: Scalars["Int"]["output"];
  readonly id: Scalars["Int"]["output"];
  readonly name: Scalars["Int"]["output"];
}

export interface ProductTypeCountOrderByAggregateInput {
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
}

export interface ProductTypeCreateInput {
  readonly Product?: InputMaybe<ProductCreateNestedManyWithoutProductTypeInput>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly name: Scalars["String"]["input"];
}

export interface ProductTypeCreateManyInput {
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly name: Scalars["String"]["input"];
}

export interface ProductTypeCreateNestedOneWithoutProductInput {
  readonly connect?: InputMaybe<ProductTypeWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<ProductTypeCreateOrConnectWithoutProductInput>;
  readonly create?: InputMaybe<ProductTypeCreateWithoutProductInput>;
}

export interface ProductTypeCreateOrConnectWithoutProductInput {
  readonly create: ProductTypeCreateWithoutProductInput;
  readonly where: ProductTypeWhereUniqueInput;
}

export interface ProductTypeCreateWithoutProductInput {
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly name: Scalars["String"]["input"];
}

export interface ProductTypeGroupBy {
  readonly _count?: Maybe<ProductTypeCountAggregate>;
  readonly _max?: Maybe<ProductTypeMaxAggregate>;
  readonly _min?: Maybe<ProductTypeMinAggregate>;
  readonly dateCreated: Scalars["DateTimeISO"]["output"];
  readonly dateUpdated: Scalars["DateTimeISO"]["output"];
  readonly id: Scalars["String"]["output"];
  readonly name: Scalars["String"]["output"];
}

export interface ProductTypeMaxAggregate {
  readonly dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly dateUpdated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly id?: Maybe<Scalars["String"]["output"]>;
  readonly name?: Maybe<Scalars["String"]["output"]>;
}

export interface ProductTypeMaxOrderByAggregateInput {
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
}

export interface ProductTypeMinAggregate {
  readonly dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly dateUpdated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly id?: Maybe<Scalars["String"]["output"]>;
  readonly name?: Maybe<Scalars["String"]["output"]>;
}

export interface ProductTypeMinOrderByAggregateInput {
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
}

export interface ProductTypeNullableRelationFilter {
  readonly is?: InputMaybe<ProductTypeWhereInput>;
  readonly isNot?: InputMaybe<ProductTypeWhereInput>;
}

export interface ProductTypeOrderByWithAggregationInput {
  readonly _count?: InputMaybe<ProductTypeCountOrderByAggregateInput>;
  readonly _max?: InputMaybe<ProductTypeMaxOrderByAggregateInput>;
  readonly _min?: InputMaybe<ProductTypeMinOrderByAggregateInput>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
}

export interface ProductTypeOrderByWithRelationInput {
  readonly Product?: InputMaybe<ProductOrderByRelationAggregateInput>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly dateUpdated?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly name?: InputMaybe<SortOrder>;
}

export enum ProductTypeScalarFieldEnum {
  DateCreated = 0,
  DateUpdated = 1,
  Id = 2,
  Name = 3,
}

export interface ProductTypeScalarWhereWithAggregatesInput {
  readonly AND?: InputMaybe<
    ReadonlyArray<ProductTypeScalarWhereWithAggregatesInput>
  >;
  readonly NOT?: InputMaybe<
    ReadonlyArray<ProductTypeScalarWhereWithAggregatesInput>
  >;
  readonly OR?: InputMaybe<
    ReadonlyArray<ProductTypeScalarWhereWithAggregatesInput>
  >;
  readonly dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly id?: InputMaybe<StringWithAggregatesFilter>;
  readonly name?: InputMaybe<StringWithAggregatesFilter>;
}

export interface ProductTypeUpdateInput {
  readonly Product?: InputMaybe<ProductUpdateManyWithoutProductTypeNestedInput>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly name?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ProductTypeUpdateManyMutationInput {
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly name?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ProductTypeUpdateOneWithoutProductNestedInput {
  readonly connect?: InputMaybe<ProductTypeWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<ProductTypeCreateOrConnectWithoutProductInput>;
  readonly create?: InputMaybe<ProductTypeCreateWithoutProductInput>;
  readonly delete?: InputMaybe<ProductTypeWhereInput>;
  readonly disconnect?: InputMaybe<ProductTypeWhereInput>;
  readonly update?: InputMaybe<ProductTypeUpdateToOneWithWhereWithoutProductInput>;
  readonly upsert?: InputMaybe<ProductTypeUpsertWithoutProductInput>;
}

export interface ProductTypeUpdateToOneWithWhereWithoutProductInput {
  readonly data: ProductTypeUpdateWithoutProductInput;
  readonly where?: InputMaybe<ProductTypeWhereInput>;
}

export interface ProductTypeUpdateWithoutProductInput {
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly name?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ProductTypeUpsertWithoutProductInput {
  readonly create: ProductTypeCreateWithoutProductInput;
  readonly update: ProductTypeUpdateWithoutProductInput;
  readonly where?: InputMaybe<ProductTypeWhereInput>;
}

export interface ProductTypeWhereInput {
  readonly AND?: InputMaybe<ReadonlyArray<ProductTypeWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductTypeWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductTypeWhereInput>>;
  readonly Product?: InputMaybe<ProductListRelationFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly name?: InputMaybe<StringFilter>;
}

export interface ProductTypeWhereUniqueInput {
  readonly AND?: InputMaybe<ReadonlyArray<ProductTypeWhereInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductTypeWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductTypeWhereInput>>;
  readonly Product?: InputMaybe<ProductListRelationFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly name?: InputMaybe<StringFilter>;
}

export interface ProductUpdateInput {
  readonly Inventory?: InputMaybe<InventoryUpdateManyWithoutProductNestedInput>;
  readonly ProductColor?: InputMaybe<ProductColorUpdateManyWithoutProductNestedInput>;
  readonly ProductImage?: InputMaybe<ProductImageUpdateManyWithoutProductNestedInput>;
  readonly ProductSales?: InputMaybe<ProductSalesUpdateManyWithoutProductNestedInput>;
  readonly ProductType?: InputMaybe<ProductTypeUpdateOneWithoutProductNestedInput>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly description?: InputMaybe<Scalars["String"]["input"]>;
  readonly genderId?: InputMaybe<Scalars["String"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly name?: InputMaybe<Scalars["String"]["input"]>;
  readonly price?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ProductUpdateManyMutationInput {
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly description?: InputMaybe<Scalars["String"]["input"]>;
  readonly genderId?: InputMaybe<Scalars["String"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly name?: InputMaybe<Scalars["String"]["input"]>;
  readonly price?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ProductUpdateManyWithWhereWithoutProductTypeInput {
  readonly data: ProductUpdateManyMutationInput;
  readonly where: ProductScalarWhereInput;
}

export interface ProductUpdateManyWithoutProductTypeNestedInput {
  readonly connect?: InputMaybe<ReadonlyArray<ProductWhereUniqueInput>>;
  readonly connectOrCreate?: InputMaybe<
    ReadonlyArray<ProductCreateOrConnectWithoutProductTypeInput>
  >;
  readonly create?: InputMaybe<
    ReadonlyArray<ProductCreateWithoutProductTypeInput>
  >;
  readonly createMany?: InputMaybe<ProductCreateManyProductTypeInputEnvelope>;
  readonly delete?: InputMaybe<ReadonlyArray<ProductWhereUniqueInput>>;
  readonly deleteMany?: InputMaybe<ReadonlyArray<ProductScalarWhereInput>>;
  readonly disconnect?: InputMaybe<ReadonlyArray<ProductWhereUniqueInput>>;
  readonly set?: InputMaybe<ReadonlyArray<ProductWhereUniqueInput>>;
  readonly update?: InputMaybe<
    ReadonlyArray<ProductUpdateWithWhereUniqueWithoutProductTypeInput>
  >;
  readonly updateMany?: InputMaybe<
    ReadonlyArray<ProductUpdateManyWithWhereWithoutProductTypeInput>
  >;
  readonly upsert?: InputMaybe<
    ReadonlyArray<ProductUpsertWithWhereUniqueWithoutProductTypeInput>
  >;
}

export interface ProductUpdateOneRequiredWithoutInventoryNestedInput {
  readonly connect?: InputMaybe<ProductWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutInventoryInput>;
  readonly create?: InputMaybe<ProductCreateWithoutInventoryInput>;
  readonly update?: InputMaybe<ProductUpdateToOneWithWhereWithoutInventoryInput>;
  readonly upsert?: InputMaybe<ProductUpsertWithoutInventoryInput>;
}

export interface ProductUpdateOneRequiredWithoutProductColorNestedInput {
  readonly connect?: InputMaybe<ProductWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductColorInput>;
  readonly create?: InputMaybe<ProductCreateWithoutProductColorInput>;
  readonly update?: InputMaybe<ProductUpdateToOneWithWhereWithoutProductColorInput>;
  readonly upsert?: InputMaybe<ProductUpsertWithoutProductColorInput>;
}

export interface ProductUpdateOneRequiredWithoutProductImageNestedInput {
  readonly connect?: InputMaybe<ProductWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductImageInput>;
  readonly create?: InputMaybe<ProductCreateWithoutProductImageInput>;
  readonly update?: InputMaybe<ProductUpdateToOneWithWhereWithoutProductImageInput>;
  readonly upsert?: InputMaybe<ProductUpsertWithoutProductImageInput>;
}

export interface ProductUpdateOneRequiredWithoutProductSalesNestedInput {
  readonly connect?: InputMaybe<ProductWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<ProductCreateOrConnectWithoutProductSalesInput>;
  readonly create?: InputMaybe<ProductCreateWithoutProductSalesInput>;
  readonly update?: InputMaybe<ProductUpdateToOneWithWhereWithoutProductSalesInput>;
  readonly upsert?: InputMaybe<ProductUpsertWithoutProductSalesInput>;
}

export interface ProductUpdateToOneWithWhereWithoutInventoryInput {
  readonly data: ProductUpdateWithoutInventoryInput;
  readonly where?: InputMaybe<ProductWhereInput>;
}

export interface ProductUpdateToOneWithWhereWithoutProductColorInput {
  readonly data: ProductUpdateWithoutProductColorInput;
  readonly where?: InputMaybe<ProductWhereInput>;
}

export interface ProductUpdateToOneWithWhereWithoutProductImageInput {
  readonly data: ProductUpdateWithoutProductImageInput;
  readonly where?: InputMaybe<ProductWhereInput>;
}

export interface ProductUpdateToOneWithWhereWithoutProductSalesInput {
  readonly data: ProductUpdateWithoutProductSalesInput;
  readonly where?: InputMaybe<ProductWhereInput>;
}

export interface ProductUpdateWithWhereUniqueWithoutProductTypeInput {
  readonly data: ProductUpdateWithoutProductTypeInput;
  readonly where: ProductWhereUniqueInput;
}

export interface ProductUpdateWithoutInventoryInput {
  readonly ProductColor?: InputMaybe<ProductColorUpdateManyWithoutProductNestedInput>;
  readonly ProductImage?: InputMaybe<ProductImageUpdateManyWithoutProductNestedInput>;
  readonly ProductSales?: InputMaybe<ProductSalesUpdateManyWithoutProductNestedInput>;
  readonly ProductType?: InputMaybe<ProductTypeUpdateOneWithoutProductNestedInput>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly description?: InputMaybe<Scalars["String"]["input"]>;
  readonly genderId?: InputMaybe<Scalars["String"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly name?: InputMaybe<Scalars["String"]["input"]>;
  readonly price?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ProductUpdateWithoutProductColorInput {
  readonly Inventory?: InputMaybe<InventoryUpdateManyWithoutProductNestedInput>;
  readonly ProductImage?: InputMaybe<ProductImageUpdateManyWithoutProductNestedInput>;
  readonly ProductSales?: InputMaybe<ProductSalesUpdateManyWithoutProductNestedInput>;
  readonly ProductType?: InputMaybe<ProductTypeUpdateOneWithoutProductNestedInput>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly description?: InputMaybe<Scalars["String"]["input"]>;
  readonly genderId?: InputMaybe<Scalars["String"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly name?: InputMaybe<Scalars["String"]["input"]>;
  readonly price?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ProductUpdateWithoutProductImageInput {
  readonly Inventory?: InputMaybe<InventoryUpdateManyWithoutProductNestedInput>;
  readonly ProductColor?: InputMaybe<ProductColorUpdateManyWithoutProductNestedInput>;
  readonly ProductSales?: InputMaybe<ProductSalesUpdateManyWithoutProductNestedInput>;
  readonly ProductType?: InputMaybe<ProductTypeUpdateOneWithoutProductNestedInput>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly description?: InputMaybe<Scalars["String"]["input"]>;
  readonly genderId?: InputMaybe<Scalars["String"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly name?: InputMaybe<Scalars["String"]["input"]>;
  readonly price?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ProductUpdateWithoutProductSalesInput {
  readonly Inventory?: InputMaybe<InventoryUpdateManyWithoutProductNestedInput>;
  readonly ProductColor?: InputMaybe<ProductColorUpdateManyWithoutProductNestedInput>;
  readonly ProductImage?: InputMaybe<ProductImageUpdateManyWithoutProductNestedInput>;
  readonly ProductType?: InputMaybe<ProductTypeUpdateOneWithoutProductNestedInput>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly description?: InputMaybe<Scalars["String"]["input"]>;
  readonly genderId?: InputMaybe<Scalars["String"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly name?: InputMaybe<Scalars["String"]["input"]>;
  readonly price?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ProductUpdateWithoutProductTypeInput {
  readonly Inventory?: InputMaybe<InventoryUpdateManyWithoutProductNestedInput>;
  readonly ProductColor?: InputMaybe<ProductColorUpdateManyWithoutProductNestedInput>;
  readonly ProductImage?: InputMaybe<ProductImageUpdateManyWithoutProductNestedInput>;
  readonly ProductSales?: InputMaybe<ProductSalesUpdateManyWithoutProductNestedInput>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly dateUpdated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly description?: InputMaybe<Scalars["String"]["input"]>;
  readonly genderId?: InputMaybe<Scalars["String"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly name?: InputMaybe<Scalars["String"]["input"]>;
  readonly price?: InputMaybe<Scalars["String"]["input"]>;
}

export interface ProductUpsertWithWhereUniqueWithoutProductTypeInput {
  readonly create: ProductCreateWithoutProductTypeInput;
  readonly update: ProductUpdateWithoutProductTypeInput;
  readonly where: ProductWhereUniqueInput;
}

export interface ProductUpsertWithoutInventoryInput {
  readonly create: ProductCreateWithoutInventoryInput;
  readonly update: ProductUpdateWithoutInventoryInput;
  readonly where?: InputMaybe<ProductWhereInput>;
}

export interface ProductUpsertWithoutProductColorInput {
  readonly create: ProductCreateWithoutProductColorInput;
  readonly update: ProductUpdateWithoutProductColorInput;
  readonly where?: InputMaybe<ProductWhereInput>;
}

export interface ProductUpsertWithoutProductImageInput {
  readonly create: ProductCreateWithoutProductImageInput;
  readonly update: ProductUpdateWithoutProductImageInput;
  readonly where?: InputMaybe<ProductWhereInput>;
}

export interface ProductUpsertWithoutProductSalesInput {
  readonly create: ProductCreateWithoutProductSalesInput;
  readonly update: ProductUpdateWithoutProductSalesInput;
  readonly where?: InputMaybe<ProductWhereInput>;
}

export interface ProductWhereInput {
  readonly AND?: InputMaybe<ReadonlyArray<ProductWhereInput>>;
  readonly Inventory?: InputMaybe<InventoryListRelationFilter>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductWhereInput>>;
  readonly ProductColor?: InputMaybe<ProductColorListRelationFilter>;
  readonly ProductImage?: InputMaybe<ProductImageListRelationFilter>;
  readonly ProductSales?: InputMaybe<ProductSalesListRelationFilter>;
  readonly ProductType?: InputMaybe<ProductTypeNullableRelationFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly description?: InputMaybe<StringFilter>;
  readonly genderId?: InputMaybe<StringFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly name?: InputMaybe<StringFilter>;
  readonly price?: InputMaybe<StringFilter>;
  readonly productTypeId?: InputMaybe<StringFilter>;
}

export interface ProductWhereUniqueInput {
  readonly AND?: InputMaybe<ReadonlyArray<ProductWhereInput>>;
  readonly Inventory?: InputMaybe<InventoryListRelationFilter>;
  readonly NOT?: InputMaybe<ReadonlyArray<ProductWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<ProductWhereInput>>;
  readonly ProductColor?: InputMaybe<ProductColorListRelationFilter>;
  readonly ProductImage?: InputMaybe<ProductImageListRelationFilter>;
  readonly ProductSales?: InputMaybe<ProductSalesListRelationFilter>;
  readonly ProductType?: InputMaybe<ProductTypeNullableRelationFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly dateUpdated?: InputMaybe<DateTimeFilter>;
  readonly description?: InputMaybe<StringFilter>;
  readonly genderId?: InputMaybe<StringFilter>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly name?: InputMaybe<StringFilter>;
  readonly price?: InputMaybe<StringFilter>;
  readonly productTypeId?: InputMaybe<StringFilter>;
}

export interface Query {
  readonly aggregateColor: AggregateColor;
  readonly aggregateCustomer: AggregateCustomer;
  readonly aggregateInventory: AggregateInventory;
  readonly aggregateLoginHistory: AggregateLoginHistory;
  readonly aggregateProduct: AggregateProduct;
  readonly aggregateProductColor: AggregateProductColor;
  readonly aggregateProductImage: AggregateProductImage;
  readonly aggregateProductSales: AggregateProductSales;
  readonly aggregateProductType: AggregateProductType;
  readonly aggregateUser: AggregateUser;
  readonly color?: Maybe<Color>;
  readonly colors: ReadonlyArray<Color>;
  readonly customer?: Maybe<Customer>;
  readonly customers: ReadonlyArray<Customer>;
  readonly findFirstColor?: Maybe<Color>;
  readonly findFirstColorOrThrow?: Maybe<Color>;
  readonly findFirstCustomer?: Maybe<Customer>;
  readonly findFirstCustomerOrThrow?: Maybe<Customer>;
  readonly findFirstInventory?: Maybe<Inventory>;
  readonly findFirstInventoryOrThrow?: Maybe<Inventory>;
  readonly findFirstLoginHistory?: Maybe<LoginHistory>;
  readonly findFirstLoginHistoryOrThrow?: Maybe<LoginHistory>;
  readonly findFirstProduct?: Maybe<Product>;
  readonly findFirstProductColor?: Maybe<ProductColor>;
  readonly findFirstProductColorOrThrow?: Maybe<ProductColor>;
  readonly findFirstProductImage?: Maybe<ProductImage>;
  readonly findFirstProductImageOrThrow?: Maybe<ProductImage>;
  readonly findFirstProductOrThrow?: Maybe<Product>;
  readonly findFirstProductSales?: Maybe<ProductSales>;
  readonly findFirstProductSalesOrThrow?: Maybe<ProductSales>;
  readonly findFirstProductType?: Maybe<ProductType>;
  readonly findFirstProductTypeOrThrow?: Maybe<ProductType>;
  readonly findFirstUser?: Maybe<User>;
  readonly findFirstUserOrThrow?: Maybe<User>;
  readonly findManyProductSales: ReadonlyArray<ProductSales>;
  readonly findUniqueProductSales?: Maybe<ProductSales>;
  readonly findUniqueProductSalesOrThrow?: Maybe<ProductSales>;
  readonly getColor?: Maybe<Color>;
  readonly getCustomer?: Maybe<Customer>;
  readonly getInventory?: Maybe<Inventory>;
  readonly getLoginHistory?: Maybe<LoginHistory>;
  readonly getProduct?: Maybe<Product>;
  readonly getProductColor?: Maybe<ProductColor>;
  readonly getProductImage?: Maybe<ProductImage>;
  readonly getProductType?: Maybe<ProductType>;
  readonly getUser?: Maybe<User>;
  readonly groupByColor: ReadonlyArray<ColorGroupBy>;
  readonly groupByCustomer: ReadonlyArray<CustomerGroupBy>;
  readonly groupByInventory: ReadonlyArray<InventoryGroupBy>;
  readonly groupByLoginHistory: ReadonlyArray<LoginHistoryGroupBy>;
  readonly groupByProduct: ReadonlyArray<ProductGroupBy>;
  readonly groupByProductColor: ReadonlyArray<ProductColorGroupBy>;
  readonly groupByProductImage: ReadonlyArray<ProductImageGroupBy>;
  readonly groupByProductSales: ReadonlyArray<ProductSalesGroupBy>;
  readonly groupByProductType: ReadonlyArray<ProductTypeGroupBy>;
  readonly groupByUser: ReadonlyArray<UserGroupBy>;
  readonly inventories: ReadonlyArray<Inventory>;
  readonly inventory?: Maybe<Inventory>;
  readonly loginHistories: ReadonlyArray<LoginHistory>;
  readonly loginHistory?: Maybe<LoginHistory>;
  readonly product?: Maybe<Product>;
  readonly productColor?: Maybe<ProductColor>;
  readonly productColors: ReadonlyArray<ProductColor>;
  readonly productImage?: Maybe<ProductImage>;
  readonly productImages: ReadonlyArray<ProductImage>;
  readonly productType?: Maybe<ProductType>;
  readonly productTypes: ReadonlyArray<ProductType>;
  readonly products: ReadonlyArray<Product>;
  readonly signIn: Scalars["String"]["output"];
  readonly signOut: Scalars["Boolean"]["output"];
  readonly user?: Maybe<User>;
  readonly users: ReadonlyArray<User>;
  readonly validate: Scalars["Boolean"]["output"];
}

export interface QueryAggregateColorArgs {
  cursor?: InputMaybe<ColorWhereUniqueInput>;
  orderBy?: InputMaybe<ReadonlyArray<ColorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ColorWhereInput>;
}

export interface QueryAggregateCustomerArgs {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  orderBy?: InputMaybe<ReadonlyArray<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CustomerWhereInput>;
}

export interface QueryAggregateInventoryArgs {
  cursor?: InputMaybe<InventoryWhereUniqueInput>;
  orderBy?: InputMaybe<ReadonlyArray<InventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<InventoryWhereInput>;
}

export interface QueryAggregateLoginHistoryArgs {
  cursor?: InputMaybe<LoginHistoryWhereUniqueInput>;
  orderBy?: InputMaybe<ReadonlyArray<LoginHistoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<LoginHistoryWhereInput>;
}

export interface QueryAggregateProductArgs {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  orderBy?: InputMaybe<ReadonlyArray<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductWhereInput>;
}

export interface QueryAggregateProductColorArgs {
  cursor?: InputMaybe<ProductColorWhereUniqueInput>;
  orderBy?: InputMaybe<ReadonlyArray<ProductColorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductColorWhereInput>;
}

export interface QueryAggregateProductImageArgs {
  cursor?: InputMaybe<ProductImageWhereUniqueInput>;
  orderBy?: InputMaybe<ReadonlyArray<ProductImageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductImageWhereInput>;
}

export interface QueryAggregateProductSalesArgs {
  cursor?: InputMaybe<ProductSalesWhereUniqueInput>;
  orderBy?: InputMaybe<ReadonlyArray<ProductSalesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductSalesWhereInput>;
}

export interface QueryAggregateProductTypeArgs {
  cursor?: InputMaybe<ProductTypeWhereUniqueInput>;
  orderBy?: InputMaybe<ReadonlyArray<ProductTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductTypeWhereInput>;
}

export interface QueryAggregateUserArgs {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  orderBy?: InputMaybe<ReadonlyArray<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<UserWhereInput>;
}

export interface QueryColorArgs {
  where: ColorWhereUniqueInput;
}

export interface QueryColorsArgs {
  cursor?: InputMaybe<ColorWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ColorScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ColorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ColorWhereInput>;
}

export interface QueryCustomerArgs {
  where: CustomerWhereUniqueInput;
}

export interface QueryCustomersArgs {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<CustomerScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CustomerWhereInput>;
}

export interface QueryFindFirstColorArgs {
  cursor?: InputMaybe<ColorWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ColorScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ColorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ColorWhereInput>;
}

export interface QueryFindFirstColorOrThrowArgs {
  cursor?: InputMaybe<ColorWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ColorScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ColorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ColorWhereInput>;
}

export interface QueryFindFirstCustomerArgs {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<CustomerScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CustomerWhereInput>;
}

export interface QueryFindFirstCustomerOrThrowArgs {
  cursor?: InputMaybe<CustomerWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<CustomerScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<CustomerOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CustomerWhereInput>;
}

export interface QueryFindFirstInventoryArgs {
  cursor?: InputMaybe<InventoryWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<InventoryScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<InventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<InventoryWhereInput>;
}

export interface QueryFindFirstInventoryOrThrowArgs {
  cursor?: InputMaybe<InventoryWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<InventoryScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<InventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<InventoryWhereInput>;
}

export interface QueryFindFirstLoginHistoryArgs {
  cursor?: InputMaybe<LoginHistoryWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<LoginHistoryScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<LoginHistoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<LoginHistoryWhereInput>;
}

export interface QueryFindFirstLoginHistoryOrThrowArgs {
  cursor?: InputMaybe<LoginHistoryWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<LoginHistoryScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<LoginHistoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<LoginHistoryWhereInput>;
}

export interface QueryFindFirstProductArgs {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductWhereInput>;
}

export interface QueryFindFirstProductColorArgs {
  cursor?: InputMaybe<ProductColorWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductColorScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductColorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductColorWhereInput>;
}

export interface QueryFindFirstProductColorOrThrowArgs {
  cursor?: InputMaybe<ProductColorWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductColorScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductColorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductColorWhereInput>;
}

export interface QueryFindFirstProductImageArgs {
  cursor?: InputMaybe<ProductImageWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductImageScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductImageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductImageWhereInput>;
}

export interface QueryFindFirstProductImageOrThrowArgs {
  cursor?: InputMaybe<ProductImageWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductImageScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductImageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductImageWhereInput>;
}

export interface QueryFindFirstProductOrThrowArgs {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductWhereInput>;
}

export interface QueryFindFirstProductSalesArgs {
  cursor?: InputMaybe<ProductSalesWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductSalesScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductSalesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductSalesWhereInput>;
}

export interface QueryFindFirstProductSalesOrThrowArgs {
  cursor?: InputMaybe<ProductSalesWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductSalesScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductSalesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductSalesWhereInput>;
}

export interface QueryFindFirstProductTypeArgs {
  cursor?: InputMaybe<ProductTypeWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductTypeWhereInput>;
}

export interface QueryFindFirstProductTypeOrThrowArgs {
  cursor?: InputMaybe<ProductTypeWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductTypeWhereInput>;
}

export interface QueryFindFirstUserArgs {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<UserWhereInput>;
}

export interface QueryFindFirstUserOrThrowArgs {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<UserWhereInput>;
}

export interface QueryFindManyProductSalesArgs {
  cursor?: InputMaybe<ProductSalesWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductSalesScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductSalesOrderByWithRelationInput>>;
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

export interface QueryGetProductImageArgs {
  where: ProductImageWhereUniqueInput;
}

export interface QueryGetProductTypeArgs {
  where: ProductTypeWhereUniqueInput;
}

export interface QueryGetUserArgs {
  where: UserWhereUniqueInput;
}

export interface QueryGroupByColorArgs {
  by: ReadonlyArray<ColorScalarFieldEnum>;
  having?: InputMaybe<ColorScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<ReadonlyArray<ColorOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ColorWhereInput>;
}

export interface QueryGroupByCustomerArgs {
  by: ReadonlyArray<CustomerScalarFieldEnum>;
  having?: InputMaybe<CustomerScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<ReadonlyArray<CustomerOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<CustomerWhereInput>;
}

export interface QueryGroupByInventoryArgs {
  by: ReadonlyArray<InventoryScalarFieldEnum>;
  having?: InputMaybe<InventoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<ReadonlyArray<InventoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<InventoryWhereInput>;
}

export interface QueryGroupByLoginHistoryArgs {
  by: ReadonlyArray<LoginHistoryScalarFieldEnum>;
  having?: InputMaybe<LoginHistoryScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<ReadonlyArray<LoginHistoryOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<LoginHistoryWhereInput>;
}

export interface QueryGroupByProductArgs {
  by: ReadonlyArray<ProductScalarFieldEnum>;
  having?: InputMaybe<ProductScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<ReadonlyArray<ProductOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductWhereInput>;
}

export interface QueryGroupByProductColorArgs {
  by: ReadonlyArray<ProductColorScalarFieldEnum>;
  having?: InputMaybe<ProductColorScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<ReadonlyArray<ProductColorOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductColorWhereInput>;
}

export interface QueryGroupByProductImageArgs {
  by: ReadonlyArray<ProductImageScalarFieldEnum>;
  having?: InputMaybe<ProductImageScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<ReadonlyArray<ProductImageOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductImageWhereInput>;
}

export interface QueryGroupByProductSalesArgs {
  by: ReadonlyArray<ProductSalesScalarFieldEnum>;
  having?: InputMaybe<ProductSalesScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<ReadonlyArray<ProductSalesOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductSalesWhereInput>;
}

export interface QueryGroupByProductTypeArgs {
  by: ReadonlyArray<ProductTypeScalarFieldEnum>;
  having?: InputMaybe<ProductTypeScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<ReadonlyArray<ProductTypeOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductTypeWhereInput>;
}

export interface QueryGroupByUserArgs {
  by: ReadonlyArray<UserScalarFieldEnum>;
  having?: InputMaybe<UserScalarWhereWithAggregatesInput>;
  orderBy?: InputMaybe<ReadonlyArray<UserOrderByWithAggregationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<UserWhereInput>;
}

export interface QueryInventoriesArgs {
  cursor?: InputMaybe<InventoryWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<InventoryScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<InventoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<InventoryWhereInput>;
}

export interface QueryInventoryArgs {
  where: InventoryWhereUniqueInput;
}

export interface QueryLoginHistoriesArgs {
  cursor?: InputMaybe<LoginHistoryWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<LoginHistoryScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<LoginHistoryOrderByWithRelationInput>>;
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
  distinct?: InputMaybe<ReadonlyArray<ProductColorScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductColorOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductColorWhereInput>;
}

export interface QueryProductImageArgs {
  where: ProductImageWhereUniqueInput;
}

export interface QueryProductImagesArgs {
  cursor?: InputMaybe<ProductImageWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductImageScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductImageOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductImageWhereInput>;
}

export interface QueryProductTypeArgs {
  where: ProductTypeWhereUniqueInput;
}

export interface QueryProductTypesArgs {
  cursor?: InputMaybe<ProductTypeWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductTypeScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductTypeOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductTypeWhereInput>;
}

export interface QueryProductsArgs {
  cursor?: InputMaybe<ProductWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductOrderByWithRelationInput>>;
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
  distinct?: InputMaybe<ReadonlyArray<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<UserOrderByWithRelationInput>>;
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
  readonly contains?: InputMaybe<Scalars["String"]["input"]>;
  readonly endsWith?: InputMaybe<Scalars["String"]["input"]>;
  readonly equals?: InputMaybe<Scalars["String"]["input"]>;
  readonly gt?: InputMaybe<Scalars["String"]["input"]>;
  readonly gte?: InputMaybe<Scalars["String"]["input"]>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars["String"]["input"]>>;
  readonly lt?: InputMaybe<Scalars["String"]["input"]>;
  readonly lte?: InputMaybe<Scalars["String"]["input"]>;
  readonly not?: InputMaybe<NestedStringFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars["String"]["input"]>>;
  readonly startsWith?: InputMaybe<Scalars["String"]["input"]>;
}

export interface StringWithAggregatesFilter {
  readonly _count?: InputMaybe<NestedIntFilter>;
  readonly _max?: InputMaybe<NestedStringFilter>;
  readonly _min?: InputMaybe<NestedStringFilter>;
  readonly contains?: InputMaybe<Scalars["String"]["input"]>;
  readonly endsWith?: InputMaybe<Scalars["String"]["input"]>;
  readonly equals?: InputMaybe<Scalars["String"]["input"]>;
  readonly gt?: InputMaybe<Scalars["String"]["input"]>;
  readonly gte?: InputMaybe<Scalars["String"]["input"]>;
  readonly in?: InputMaybe<ReadonlyArray<Scalars["String"]["input"]>>;
  readonly lt?: InputMaybe<Scalars["String"]["input"]>;
  readonly lte?: InputMaybe<Scalars["String"]["input"]>;
  readonly not?: InputMaybe<NestedStringWithAggregatesFilter>;
  readonly notIn?: InputMaybe<ReadonlyArray<Scalars["String"]["input"]>>;
  readonly startsWith?: InputMaybe<Scalars["String"]["input"]>;
}

export interface User {
  readonly LoginHistory: ReadonlyArray<LoginHistory>;
  readonly _count?: Maybe<UserCount>;
  readonly address: Scalars["String"]["output"];
  readonly dateCreated: Scalars["DateTimeISO"]["output"];
  readonly email: Scalars["String"]["output"];
  readonly firstName: Scalars["String"]["output"];
  readonly id: Scalars["String"]["output"];
  readonly lastName: Scalars["String"]["output"];
  readonly password: Scalars["String"]["output"];
  readonly phone: Scalars["String"]["output"];
  readonly productSales: ReadonlyArray<ProductSales>;
  readonly role: Scalars["String"]["output"];
}

export interface UserLoginHistoryArgs {
  cursor?: InputMaybe<LoginHistoryWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<LoginHistoryScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<LoginHistoryOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<LoginHistoryWhereInput>;
}

export interface UserProductSalesArgs {
  cursor?: InputMaybe<ProductSalesWhereUniqueInput>;
  distinct?: InputMaybe<ReadonlyArray<ProductSalesScalarFieldEnum>>;
  orderBy?: InputMaybe<ReadonlyArray<ProductSalesOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars["Int"]["input"]>;
  take?: InputMaybe<Scalars["Int"]["input"]>;
  where?: InputMaybe<ProductSalesWhereInput>;
}

export interface UserCount {
  readonly LoginHistory: Scalars["Int"]["output"];
  readonly productSales: Scalars["Int"]["output"];
}

export interface UserCountLoginHistoryArgs {
  where?: InputMaybe<LoginHistoryWhereInput>;
}

export interface UserCountProductSalesArgs {
  where?: InputMaybe<ProductSalesWhereInput>;
}

export interface UserCountAggregate {
  readonly _all: Scalars["Int"]["output"];
  readonly address: Scalars["Int"]["output"];
  readonly dateCreated: Scalars["Int"]["output"];
  readonly email: Scalars["Int"]["output"];
  readonly firstName: Scalars["Int"]["output"];
  readonly id: Scalars["Int"]["output"];
  readonly lastName: Scalars["Int"]["output"];
  readonly password: Scalars["Int"]["output"];
  readonly phone: Scalars["Int"]["output"];
  readonly role: Scalars["Int"]["output"];
}

export interface UserCountOrderByAggregateInput {
  readonly address?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly password?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly role?: InputMaybe<SortOrder>;
}

export interface UserCreateInput {
  readonly LoginHistory?: InputMaybe<LoginHistoryCreateNestedManyWithoutUserInput>;
  readonly address: Scalars["String"]["input"];
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly email: Scalars["String"]["input"];
  readonly firstName: Scalars["String"]["input"];
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly lastName: Scalars["String"]["input"];
  readonly password: Scalars["String"]["input"];
  readonly phone: Scalars["String"]["input"];
  readonly productSales?: InputMaybe<ProductSalesCreateNestedManyWithoutUserInput>;
  readonly role: Scalars["String"]["input"];
}

export interface UserCreateManyInput {
  readonly address: Scalars["String"]["input"];
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly email: Scalars["String"]["input"];
  readonly firstName: Scalars["String"]["input"];
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly lastName: Scalars["String"]["input"];
  readonly password: Scalars["String"]["input"];
  readonly phone: Scalars["String"]["input"];
  readonly role: Scalars["String"]["input"];
}

export interface UserCreateNestedOneWithoutLoginHistoryInput {
  readonly connect?: InputMaybe<UserWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLoginHistoryInput>;
  readonly create?: InputMaybe<UserCreateWithoutLoginHistoryInput>;
}

export interface UserCreateNestedOneWithoutProductSalesInput {
  readonly connect?: InputMaybe<UserWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProductSalesInput>;
  readonly create?: InputMaybe<UserCreateWithoutProductSalesInput>;
}

export interface UserCreateOrConnectWithoutLoginHistoryInput {
  readonly create: UserCreateWithoutLoginHistoryInput;
  readonly where: UserWhereUniqueInput;
}

export interface UserCreateOrConnectWithoutProductSalesInput {
  readonly create: UserCreateWithoutProductSalesInput;
  readonly where: UserWhereUniqueInput;
}

export interface UserCreateWithoutLoginHistoryInput {
  readonly address: Scalars["String"]["input"];
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly email: Scalars["String"]["input"];
  readonly firstName: Scalars["String"]["input"];
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly lastName: Scalars["String"]["input"];
  readonly password: Scalars["String"]["input"];
  readonly phone: Scalars["String"]["input"];
  readonly productSales?: InputMaybe<ProductSalesCreateNestedManyWithoutUserInput>;
  readonly role: Scalars["String"]["input"];
}

export interface UserCreateWithoutProductSalesInput {
  readonly LoginHistory?: InputMaybe<LoginHistoryCreateNestedManyWithoutUserInput>;
  readonly address: Scalars["String"]["input"];
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly email: Scalars["String"]["input"];
  readonly firstName: Scalars["String"]["input"];
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly lastName: Scalars["String"]["input"];
  readonly password: Scalars["String"]["input"];
  readonly phone: Scalars["String"]["input"];
  readonly role: Scalars["String"]["input"];
}

export interface UserGroupBy {
  readonly _count?: Maybe<UserCountAggregate>;
  readonly _max?: Maybe<UserMaxAggregate>;
  readonly _min?: Maybe<UserMinAggregate>;
  readonly address: Scalars["String"]["output"];
  readonly dateCreated: Scalars["DateTimeISO"]["output"];
  readonly email: Scalars["String"]["output"];
  readonly firstName: Scalars["String"]["output"];
  readonly id: Scalars["String"]["output"];
  readonly lastName: Scalars["String"]["output"];
  readonly password: Scalars["String"]["output"];
  readonly phone: Scalars["String"]["output"];
  readonly role: Scalars["String"]["output"];
}

export interface UserMaxAggregate {
  readonly address?: Maybe<Scalars["String"]["output"]>;
  readonly dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly email?: Maybe<Scalars["String"]["output"]>;
  readonly firstName?: Maybe<Scalars["String"]["output"]>;
  readonly id?: Maybe<Scalars["String"]["output"]>;
  readonly lastName?: Maybe<Scalars["String"]["output"]>;
  readonly password?: Maybe<Scalars["String"]["output"]>;
  readonly phone?: Maybe<Scalars["String"]["output"]>;
  readonly role?: Maybe<Scalars["String"]["output"]>;
}

export interface UserMaxOrderByAggregateInput {
  readonly address?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly password?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly role?: InputMaybe<SortOrder>;
}

export interface UserMinAggregate {
  readonly address?: Maybe<Scalars["String"]["output"]>;
  readonly dateCreated?: Maybe<Scalars["DateTimeISO"]["output"]>;
  readonly email?: Maybe<Scalars["String"]["output"]>;
  readonly firstName?: Maybe<Scalars["String"]["output"]>;
  readonly id?: Maybe<Scalars["String"]["output"]>;
  readonly lastName?: Maybe<Scalars["String"]["output"]>;
  readonly password?: Maybe<Scalars["String"]["output"]>;
  readonly phone?: Maybe<Scalars["String"]["output"]>;
  readonly role?: Maybe<Scalars["String"]["output"]>;
}

export interface UserMinOrderByAggregateInput {
  readonly address?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly password?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly role?: InputMaybe<SortOrder>;
}

export interface UserOrderByWithAggregationInput {
  readonly _count?: InputMaybe<UserCountOrderByAggregateInput>;
  readonly _max?: InputMaybe<UserMaxOrderByAggregateInput>;
  readonly _min?: InputMaybe<UserMinOrderByAggregateInput>;
  readonly address?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly password?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly role?: InputMaybe<SortOrder>;
}

export interface UserOrderByWithRelationInput {
  readonly LoginHistory?: InputMaybe<LoginHistoryOrderByRelationAggregateInput>;
  readonly address?: InputMaybe<SortOrder>;
  readonly dateCreated?: InputMaybe<SortOrder>;
  readonly email?: InputMaybe<SortOrder>;
  readonly firstName?: InputMaybe<SortOrder>;
  readonly id?: InputMaybe<SortOrder>;
  readonly lastName?: InputMaybe<SortOrder>;
  readonly password?: InputMaybe<SortOrder>;
  readonly phone?: InputMaybe<SortOrder>;
  readonly productSales?: InputMaybe<ProductSalesOrderByRelationAggregateInput>;
  readonly role?: InputMaybe<SortOrder>;
}

export interface UserRelationFilter {
  readonly is?: InputMaybe<UserWhereInput>;
  readonly isNot?: InputMaybe<UserWhereInput>;
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
  readonly AND?: InputMaybe<ReadonlyArray<UserScalarWhereWithAggregatesInput>>;
  readonly NOT?: InputMaybe<ReadonlyArray<UserScalarWhereWithAggregatesInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<UserScalarWhereWithAggregatesInput>>;
  readonly address?: InputMaybe<StringWithAggregatesFilter>;
  readonly dateCreated?: InputMaybe<DateTimeWithAggregatesFilter>;
  readonly email?: InputMaybe<StringWithAggregatesFilter>;
  readonly firstName?: InputMaybe<StringWithAggregatesFilter>;
  readonly id?: InputMaybe<StringWithAggregatesFilter>;
  readonly lastName?: InputMaybe<StringWithAggregatesFilter>;
  readonly password?: InputMaybe<StringWithAggregatesFilter>;
  readonly phone?: InputMaybe<StringWithAggregatesFilter>;
  readonly role?: InputMaybe<StringWithAggregatesFilter>;
}

export interface UserUpdateInput {
  readonly LoginHistory?: InputMaybe<LoginHistoryUpdateManyWithoutUserNestedInput>;
  readonly address?: InputMaybe<Scalars["String"]["input"]>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly email?: InputMaybe<Scalars["String"]["input"]>;
  readonly firstName?: InputMaybe<Scalars["String"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly lastName?: InputMaybe<Scalars["String"]["input"]>;
  readonly password?: InputMaybe<Scalars["String"]["input"]>;
  readonly phone?: InputMaybe<Scalars["String"]["input"]>;
  readonly productSales?: InputMaybe<ProductSalesUpdateManyWithoutUserNestedInput>;
  readonly role?: InputMaybe<Scalars["String"]["input"]>;
}

export interface UserUpdateManyMutationInput {
  readonly address?: InputMaybe<Scalars["String"]["input"]>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly email?: InputMaybe<Scalars["String"]["input"]>;
  readonly firstName?: InputMaybe<Scalars["String"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly lastName?: InputMaybe<Scalars["String"]["input"]>;
  readonly password?: InputMaybe<Scalars["String"]["input"]>;
  readonly phone?: InputMaybe<Scalars["String"]["input"]>;
  readonly role?: InputMaybe<Scalars["String"]["input"]>;
}

export interface UserUpdateOneRequiredWithoutLoginHistoryNestedInput {
  readonly connect?: InputMaybe<UserWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutLoginHistoryInput>;
  readonly create?: InputMaybe<UserCreateWithoutLoginHistoryInput>;
  readonly update?: InputMaybe<UserUpdateToOneWithWhereWithoutLoginHistoryInput>;
  readonly upsert?: InputMaybe<UserUpsertWithoutLoginHistoryInput>;
}

export interface UserUpdateOneRequiredWithoutProductSalesNestedInput {
  readonly connect?: InputMaybe<UserWhereUniqueInput>;
  readonly connectOrCreate?: InputMaybe<UserCreateOrConnectWithoutProductSalesInput>;
  readonly create?: InputMaybe<UserCreateWithoutProductSalesInput>;
  readonly update?: InputMaybe<UserUpdateToOneWithWhereWithoutProductSalesInput>;
  readonly upsert?: InputMaybe<UserUpsertWithoutProductSalesInput>;
}

export interface UserUpdateToOneWithWhereWithoutLoginHistoryInput {
  readonly data: UserUpdateWithoutLoginHistoryInput;
  readonly where?: InputMaybe<UserWhereInput>;
}

export interface UserUpdateToOneWithWhereWithoutProductSalesInput {
  readonly data: UserUpdateWithoutProductSalesInput;
  readonly where?: InputMaybe<UserWhereInput>;
}

export interface UserUpdateWithoutLoginHistoryInput {
  readonly address?: InputMaybe<Scalars["String"]["input"]>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly email?: InputMaybe<Scalars["String"]["input"]>;
  readonly firstName?: InputMaybe<Scalars["String"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly lastName?: InputMaybe<Scalars["String"]["input"]>;
  readonly password?: InputMaybe<Scalars["String"]["input"]>;
  readonly phone?: InputMaybe<Scalars["String"]["input"]>;
  readonly productSales?: InputMaybe<ProductSalesUpdateManyWithoutUserNestedInput>;
  readonly role?: InputMaybe<Scalars["String"]["input"]>;
}

export interface UserUpdateWithoutProductSalesInput {
  readonly LoginHistory?: InputMaybe<LoginHistoryUpdateManyWithoutUserNestedInput>;
  readonly address?: InputMaybe<Scalars["String"]["input"]>;
  readonly dateCreated?: InputMaybe<Scalars["DateTimeISO"]["input"]>;
  readonly email?: InputMaybe<Scalars["String"]["input"]>;
  readonly firstName?: InputMaybe<Scalars["String"]["input"]>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly lastName?: InputMaybe<Scalars["String"]["input"]>;
  readonly password?: InputMaybe<Scalars["String"]["input"]>;
  readonly phone?: InputMaybe<Scalars["String"]["input"]>;
  readonly role?: InputMaybe<Scalars["String"]["input"]>;
}

export interface UserUpsertWithoutLoginHistoryInput {
  readonly create: UserCreateWithoutLoginHistoryInput;
  readonly update: UserUpdateWithoutLoginHistoryInput;
  readonly where?: InputMaybe<UserWhereInput>;
}

export interface UserUpsertWithoutProductSalesInput {
  readonly create: UserCreateWithoutProductSalesInput;
  readonly update: UserUpdateWithoutProductSalesInput;
  readonly where?: InputMaybe<UserWhereInput>;
}

export interface UserWhereInput {
  readonly AND?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly LoginHistory?: InputMaybe<LoginHistoryListRelationFilter>;
  readonly NOT?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly address?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly email?: InputMaybe<StringFilter>;
  readonly firstName?: InputMaybe<StringFilter>;
  readonly id?: InputMaybe<StringFilter>;
  readonly lastName?: InputMaybe<StringFilter>;
  readonly password?: InputMaybe<StringFilter>;
  readonly phone?: InputMaybe<StringFilter>;
  readonly productSales?: InputMaybe<ProductSalesListRelationFilter>;
  readonly role?: InputMaybe<StringFilter>;
}

export interface UserWhereUniqueInput {
  readonly AND?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly LoginHistory?: InputMaybe<LoginHistoryListRelationFilter>;
  readonly NOT?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly OR?: InputMaybe<ReadonlyArray<UserWhereInput>>;
  readonly address?: InputMaybe<StringFilter>;
  readonly dateCreated?: InputMaybe<DateTimeFilter>;
  readonly email?: InputMaybe<Scalars["String"]["input"]>;
  readonly firstName?: InputMaybe<StringFilter>;
  readonly id?: InputMaybe<Scalars["String"]["input"]>;
  readonly lastName?: InputMaybe<StringFilter>;
  readonly password?: InputMaybe<StringFilter>;
  readonly phone?: InputMaybe<StringFilter>;
  readonly productSales?: InputMaybe<ProductSalesListRelationFilter>;
  readonly role?: InputMaybe<StringFilter>;
}

export type SignInQueryVariables = Exact<{
  userName: Scalars["String"]["input"];
  password: Scalars["String"]["input"];
}>;

export type SignInQuery = { readonly signIn: string };

export type SignOutQueryVariables = Exact<{ [key: string]: never }>;

export type SignOutQuery = { readonly signOut: boolean };

export type ValidateQueryVariables = Exact<{
  token: Scalars["String"]["input"];
}>;

export type ValidateQuery = { readonly validate: boolean };

export type GetLoginHistoryByUserIdQueryVariables = Exact<{
  userId: Scalars["String"]["input"];
}>;

export type GetLoginHistoryByUserIdQuery = {
  readonly loginHistories: ReadonlyArray<{
    readonly id: string;
    readonly userId: string;
    readonly loginTime: unknown;
  }>;
};

export type GetProductsQueryVariables = Exact<{ [key: string]: never }>;

export type GetProductsQuery = {
  readonly products: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly price: string;
  }>;
};

export type GetProductByIdQueryVariables = Exact<{
  id: Scalars["String"]["input"];
}>;

export type GetProductByIdQuery = {
  readonly product?:
    | {
        readonly id: string;
        readonly name: string;
        readonly description: string;
        readonly price: string;
        readonly productTypeId: string;
        readonly dateCreated: unknown;
        readonly dateUpdated: unknown;
        readonly ProductImage: ReadonlyArray<{
          readonly imageId: number;
          readonly ext: string;
          readonly width: number;
          readonly height: number;
          readonly avgColor: string;
        }>;
      }
    | undefined;
};

export type GetProductsByProductTypeIdQueryVariables = Exact<{
  productTypeId: Scalars["String"]["input"];
}>;

export type GetProductsByProductTypeIdQuery = {
  readonly products: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
    readonly description: string;
    readonly price: string;
    readonly productTypeId: string;
    readonly dateCreated: unknown;
    readonly dateUpdated: unknown;
    readonly ProductImage: ReadonlyArray<{
      readonly imageId: number;
      readonly ext: string;
      readonly width: number;
      readonly height: number;
      readonly avgColor: string;
    }>;
  }>;
};

export type GetProductTypesQueryVariables = Exact<{ [key: string]: never }>;

export type GetProductTypesQuery = {
  readonly productTypes: ReadonlyArray<{
    readonly id: string;
    readonly name: string;
  }>;
};

export type GetUsersQueryVariables = Exact<{ [key: string]: never }>;

export type GetUsersQuery = {
  readonly users: ReadonlyArray<{
    readonly id: string;
    readonly firstName: string;
    readonly lastName: string;
    readonly email: string;
    readonly address: string;
    readonly phone: string;
    readonly role: string;
    readonly dateCreated: unknown;
  }>;
};

export type GetUserByIdQueryVariables = Exact<{
  id: Scalars["String"]["input"];
}>;

export type GetUserByIdQuery = {
  readonly user?:
    | {
        readonly id: string;
        readonly firstName: string;
        readonly lastName: string;
        readonly email: string;
        readonly address: string;
        readonly phone: string;
        readonly role: string;
        readonly dateCreated: unknown;
      }
    | undefined;
};

export type GetUserByUserNameQueryVariables = Exact<{
  userName: Scalars["String"]["input"];
}>;

export type GetUserByUserNameQuery = {
  readonly user?:
    | {
        readonly id: string;
        readonly firstName: string;
        readonly lastName: string;
        readonly email: string;
        readonly address: string;
        readonly phone: string;
        readonly role: string;
        readonly dateCreated: unknown;
      }
    | undefined;
};

export type LoginHistoryPartsFragment = {
  readonly id: string;
  readonly userId: string;
  readonly loginTime: unknown;
};

export type ProductPartsFragment = {
  readonly id: string;
  readonly name: string;
  readonly description: string;
  readonly price: string;
  readonly productTypeId: string;
  readonly dateCreated: unknown;
  readonly dateUpdated: unknown;
  readonly ProductImage: ReadonlyArray<{
    readonly imageId: number;
    readonly ext: string;
    readonly width: number;
    readonly height: number;
    readonly avgColor: string;
  }>;
};

export type UserPartsFragment = {
  readonly id: string;
  readonly firstName: string;
  readonly lastName: string;
  readonly email: string;
  readonly address: string;
  readonly phone: string;
  readonly role: string;
  readonly dateCreated: unknown;
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
export const ProductPartsFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProductParts" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Product" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "price" } },
          { kind: "Field", name: { kind: "Name", value: "productTypeId" } },
          { kind: "Field", name: { kind: "Name", value: "dateCreated" } },
          { kind: "Field", name: { kind: "Name", value: "dateUpdated" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ProductImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "imageId" } },
                { kind: "Field", name: { kind: "Name", value: "ext" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
                { kind: "Field", name: { kind: "Name", value: "avgColor" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<ProductPartsFragment, unknown>;
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
export const SignIn = {
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
export const SignOut = {
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
export const Validate = {
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
export const GetLoginHistoryByUserId = {
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
export const GetProducts = {
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
                { kind: "Field", name: { kind: "Name", value: "price" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetProductsQuery, GetProductsQueryVariables>;
export const GetProductById = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getProductById" },
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
            name: { kind: "Name", value: "product" },
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
                  name: { kind: "Name", value: "ProductParts" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProductParts" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Product" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "price" } },
          { kind: "Field", name: { kind: "Name", value: "productTypeId" } },
          { kind: "Field", name: { kind: "Name", value: "dateCreated" } },
          { kind: "Field", name: { kind: "Name", value: "dateUpdated" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ProductImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "imageId" } },
                { kind: "Field", name: { kind: "Name", value: "ext" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
                { kind: "Field", name: { kind: "Name", value: "avgColor" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetProductByIdQuery, GetProductByIdQueryVariables>;
export const GetProductsByProductTypeId = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getProductsByProductTypeId" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "productTypeId" },
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
            name: { kind: "Name", value: "products" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "where" },
                value: {
                  kind: "ObjectValue",
                  fields: [
                    {
                      kind: "ObjectField",
                      name: { kind: "Name", value: "productTypeId" },
                      value: {
                        kind: "ObjectValue",
                        fields: [
                          {
                            kind: "ObjectField",
                            name: { kind: "Name", value: "equals" },
                            value: {
                              kind: "Variable",
                              name: { kind: "Name", value: "productTypeId" },
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
                  name: { kind: "Name", value: "ProductParts" },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "ProductParts" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Product" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "id" } },
          { kind: "Field", name: { kind: "Name", value: "name" } },
          { kind: "Field", name: { kind: "Name", value: "description" } },
          { kind: "Field", name: { kind: "Name", value: "price" } },
          { kind: "Field", name: { kind: "Name", value: "productTypeId" } },
          { kind: "Field", name: { kind: "Name", value: "dateCreated" } },
          { kind: "Field", name: { kind: "Name", value: "dateUpdated" } },
          {
            kind: "Field",
            name: { kind: "Name", value: "ProductImage" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "imageId" } },
                { kind: "Field", name: { kind: "Name", value: "ext" } },
                { kind: "Field", name: { kind: "Name", value: "width" } },
                { kind: "Field", name: { kind: "Name", value: "height" } },
                { kind: "Field", name: { kind: "Name", value: "avgColor" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetProductsByProductTypeIdQuery,
  GetProductsByProductTypeIdQueryVariables
>;
export const GetProductTypes = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "getProductTypes" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "productTypes" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "id" } },
                { kind: "Field", name: { kind: "Name", value: "name" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<
  GetProductTypesQuery,
  GetProductTypesQueryVariables
>;
export const GetUsers = {
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
export const GetUserById = {
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
export const GetUserByUserName = {
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
