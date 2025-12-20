import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ApiKeyModel = runtime.Types.Result.DefaultSelection<Prisma.$ApiKeyPayload>;
export type AggregateApiKey = {
    _count: ApiKeyCountAggregateOutputType | null;
    _avg: ApiKeyAvgAggregateOutputType | null;
    _sum: ApiKeySumAggregateOutputType | null;
    _min: ApiKeyMinAggregateOutputType | null;
    _max: ApiKeyMaxAggregateOutputType | null;
};
export type ApiKeyAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
};
export type ApiKeySumAggregateOutputType = {
    id: number | null;
    userId: number | null;
};
export type ApiKeyMinAggregateOutputType = {
    id: number | null;
    key: string | null;
    name: string | null;
    revoked: boolean | null;
    userId: number | null;
    lastUsedAt: Date | null;
    created_at: Date | null;
};
export type ApiKeyMaxAggregateOutputType = {
    id: number | null;
    key: string | null;
    name: string | null;
    revoked: boolean | null;
    userId: number | null;
    lastUsedAt: Date | null;
    created_at: Date | null;
};
export type ApiKeyCountAggregateOutputType = {
    id: number;
    key: number;
    name: number;
    revoked: number;
    userId: number;
    lastUsedAt: number;
    created_at: number;
    _all: number;
};
export type ApiKeyAvgAggregateInputType = {
    id?: true;
    userId?: true;
};
export type ApiKeySumAggregateInputType = {
    id?: true;
    userId?: true;
};
export type ApiKeyMinAggregateInputType = {
    id?: true;
    key?: true;
    name?: true;
    revoked?: true;
    userId?: true;
    lastUsedAt?: true;
    created_at?: true;
};
export type ApiKeyMaxAggregateInputType = {
    id?: true;
    key?: true;
    name?: true;
    revoked?: true;
    userId?: true;
    lastUsedAt?: true;
    created_at?: true;
};
export type ApiKeyCountAggregateInputType = {
    id?: true;
    key?: true;
    name?: true;
    revoked?: true;
    userId?: true;
    lastUsedAt?: true;
    created_at?: true;
    _all?: true;
};
export type ApiKeyAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApiKeyWhereInput;
    orderBy?: Prisma.ApiKeyOrderByWithRelationInput | Prisma.ApiKeyOrderByWithRelationInput[];
    cursor?: Prisma.ApiKeyWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ApiKeyCountAggregateInputType;
    _avg?: ApiKeyAvgAggregateInputType;
    _sum?: ApiKeySumAggregateInputType;
    _min?: ApiKeyMinAggregateInputType;
    _max?: ApiKeyMaxAggregateInputType;
};
export type GetApiKeyAggregateType<T extends ApiKeyAggregateArgs> = {
    [P in keyof T & keyof AggregateApiKey]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateApiKey[P]> : Prisma.GetScalarType<T[P], AggregateApiKey[P]>;
};
export type ApiKeyGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApiKeyWhereInput;
    orderBy?: Prisma.ApiKeyOrderByWithAggregationInput | Prisma.ApiKeyOrderByWithAggregationInput[];
    by: Prisma.ApiKeyScalarFieldEnum[] | Prisma.ApiKeyScalarFieldEnum;
    having?: Prisma.ApiKeyScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ApiKeyCountAggregateInputType | true;
    _avg?: ApiKeyAvgAggregateInputType;
    _sum?: ApiKeySumAggregateInputType;
    _min?: ApiKeyMinAggregateInputType;
    _max?: ApiKeyMaxAggregateInputType;
};
export type ApiKeyGroupByOutputType = {
    id: number;
    key: string;
    name: string | null;
    revoked: boolean;
    userId: number;
    lastUsedAt: Date | null;
    created_at: Date;
    _count: ApiKeyCountAggregateOutputType | null;
    _avg: ApiKeyAvgAggregateOutputType | null;
    _sum: ApiKeySumAggregateOutputType | null;
    _min: ApiKeyMinAggregateOutputType | null;
    _max: ApiKeyMaxAggregateOutputType | null;
};
type GetApiKeyGroupByPayload<T extends ApiKeyGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ApiKeyGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ApiKeyGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ApiKeyGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ApiKeyGroupByOutputType[P]>;
}>>;
export type ApiKeyWhereInput = {
    AND?: Prisma.ApiKeyWhereInput | Prisma.ApiKeyWhereInput[];
    OR?: Prisma.ApiKeyWhereInput[];
    NOT?: Prisma.ApiKeyWhereInput | Prisma.ApiKeyWhereInput[];
    id?: Prisma.IntFilter<"ApiKey"> | number;
    key?: Prisma.StringFilter<"ApiKey"> | string;
    name?: Prisma.StringNullableFilter<"ApiKey"> | string | null;
    revoked?: Prisma.BoolFilter<"ApiKey"> | boolean;
    userId?: Prisma.IntFilter<"ApiKey"> | number;
    lastUsedAt?: Prisma.DateTimeNullableFilter<"ApiKey"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"ApiKey"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    servers?: Prisma.ServerListRelationFilter;
};
export type ApiKeyOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    revoked?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    servers?: Prisma.ServerOrderByRelationAggregateInput;
};
export type ApiKeyWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    key?: string;
    AND?: Prisma.ApiKeyWhereInput | Prisma.ApiKeyWhereInput[];
    OR?: Prisma.ApiKeyWhereInput[];
    NOT?: Prisma.ApiKeyWhereInput | Prisma.ApiKeyWhereInput[];
    name?: Prisma.StringNullableFilter<"ApiKey"> | string | null;
    revoked?: Prisma.BoolFilter<"ApiKey"> | boolean;
    userId?: Prisma.IntFilter<"ApiKey"> | number;
    lastUsedAt?: Prisma.DateTimeNullableFilter<"ApiKey"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"ApiKey"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    servers?: Prisma.ServerListRelationFilter;
}, "id" | "key">;
export type ApiKeyOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    revoked?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.ApiKeyCountOrderByAggregateInput;
    _avg?: Prisma.ApiKeyAvgOrderByAggregateInput;
    _max?: Prisma.ApiKeyMaxOrderByAggregateInput;
    _min?: Prisma.ApiKeyMinOrderByAggregateInput;
    _sum?: Prisma.ApiKeySumOrderByAggregateInput;
};
export type ApiKeyScalarWhereWithAggregatesInput = {
    AND?: Prisma.ApiKeyScalarWhereWithAggregatesInput | Prisma.ApiKeyScalarWhereWithAggregatesInput[];
    OR?: Prisma.ApiKeyScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ApiKeyScalarWhereWithAggregatesInput | Prisma.ApiKeyScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ApiKey"> | number;
    key?: Prisma.StringWithAggregatesFilter<"ApiKey"> | string;
    name?: Prisma.StringNullableWithAggregatesFilter<"ApiKey"> | string | null;
    revoked?: Prisma.BoolWithAggregatesFilter<"ApiKey"> | boolean;
    userId?: Prisma.IntWithAggregatesFilter<"ApiKey"> | number;
    lastUsedAt?: Prisma.DateTimeNullableWithAggregatesFilter<"ApiKey"> | Date | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"ApiKey"> | Date | string;
};
export type ApiKeyCreateInput = {
    key: string;
    name?: string | null;
    revoked?: boolean;
    lastUsedAt?: Date | string | null;
    created_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutApiKeysInput;
    servers?: Prisma.ServerCreateNestedManyWithoutApiKeyInput;
};
export type ApiKeyUncheckedCreateInput = {
    id?: number;
    key: string;
    name?: string | null;
    revoked?: boolean;
    userId: number;
    lastUsedAt?: Date | string | null;
    created_at?: Date | string;
    servers?: Prisma.ServerUncheckedCreateNestedManyWithoutApiKeyInput;
};
export type ApiKeyUpdateInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revoked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutApiKeysNestedInput;
    servers?: Prisma.ServerUpdateManyWithoutApiKeyNestedInput;
};
export type ApiKeyUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revoked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    servers?: Prisma.ServerUncheckedUpdateManyWithoutApiKeyNestedInput;
};
export type ApiKeyCreateManyInput = {
    id?: number;
    key: string;
    name?: string | null;
    revoked?: boolean;
    userId: number;
    lastUsedAt?: Date | string | null;
    created_at?: Date | string;
};
export type ApiKeyUpdateManyMutationInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revoked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApiKeyUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revoked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApiKeyListRelationFilter = {
    every?: Prisma.ApiKeyWhereInput;
    some?: Prisma.ApiKeyWhereInput;
    none?: Prisma.ApiKeyWhereInput;
};
export type ApiKeyOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ApiKeyCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    revoked?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type ApiKeyAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type ApiKeyMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    revoked?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type ApiKeyMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    key?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    revoked?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    lastUsedAt?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type ApiKeySumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
};
export type ApiKeyScalarRelationFilter = {
    is?: Prisma.ApiKeyWhereInput;
    isNot?: Prisma.ApiKeyWhereInput;
};
export type ApiKeyCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ApiKeyCreateWithoutUserInput, Prisma.ApiKeyUncheckedCreateWithoutUserInput> | Prisma.ApiKeyCreateWithoutUserInput[] | Prisma.ApiKeyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ApiKeyCreateOrConnectWithoutUserInput | Prisma.ApiKeyCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ApiKeyCreateManyUserInputEnvelope;
    connect?: Prisma.ApiKeyWhereUniqueInput | Prisma.ApiKeyWhereUniqueInput[];
};
export type ApiKeyUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ApiKeyCreateWithoutUserInput, Prisma.ApiKeyUncheckedCreateWithoutUserInput> | Prisma.ApiKeyCreateWithoutUserInput[] | Prisma.ApiKeyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ApiKeyCreateOrConnectWithoutUserInput | Prisma.ApiKeyCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ApiKeyCreateManyUserInputEnvelope;
    connect?: Prisma.ApiKeyWhereUniqueInput | Prisma.ApiKeyWhereUniqueInput[];
};
export type ApiKeyUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ApiKeyCreateWithoutUserInput, Prisma.ApiKeyUncheckedCreateWithoutUserInput> | Prisma.ApiKeyCreateWithoutUserInput[] | Prisma.ApiKeyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ApiKeyCreateOrConnectWithoutUserInput | Prisma.ApiKeyCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ApiKeyUpsertWithWhereUniqueWithoutUserInput | Prisma.ApiKeyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ApiKeyCreateManyUserInputEnvelope;
    set?: Prisma.ApiKeyWhereUniqueInput | Prisma.ApiKeyWhereUniqueInput[];
    disconnect?: Prisma.ApiKeyWhereUniqueInput | Prisma.ApiKeyWhereUniqueInput[];
    delete?: Prisma.ApiKeyWhereUniqueInput | Prisma.ApiKeyWhereUniqueInput[];
    connect?: Prisma.ApiKeyWhereUniqueInput | Prisma.ApiKeyWhereUniqueInput[];
    update?: Prisma.ApiKeyUpdateWithWhereUniqueWithoutUserInput | Prisma.ApiKeyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ApiKeyUpdateManyWithWhereWithoutUserInput | Prisma.ApiKeyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ApiKeyScalarWhereInput | Prisma.ApiKeyScalarWhereInput[];
};
export type ApiKeyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ApiKeyCreateWithoutUserInput, Prisma.ApiKeyUncheckedCreateWithoutUserInput> | Prisma.ApiKeyCreateWithoutUserInput[] | Prisma.ApiKeyUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ApiKeyCreateOrConnectWithoutUserInput | Prisma.ApiKeyCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ApiKeyUpsertWithWhereUniqueWithoutUserInput | Prisma.ApiKeyUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ApiKeyCreateManyUserInputEnvelope;
    set?: Prisma.ApiKeyWhereUniqueInput | Prisma.ApiKeyWhereUniqueInput[];
    disconnect?: Prisma.ApiKeyWhereUniqueInput | Prisma.ApiKeyWhereUniqueInput[];
    delete?: Prisma.ApiKeyWhereUniqueInput | Prisma.ApiKeyWhereUniqueInput[];
    connect?: Prisma.ApiKeyWhereUniqueInput | Prisma.ApiKeyWhereUniqueInput[];
    update?: Prisma.ApiKeyUpdateWithWhereUniqueWithoutUserInput | Prisma.ApiKeyUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ApiKeyUpdateManyWithWhereWithoutUserInput | Prisma.ApiKeyUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ApiKeyScalarWhereInput | Prisma.ApiKeyScalarWhereInput[];
};
export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null;
};
export type ApiKeyCreateNestedOneWithoutServersInput = {
    create?: Prisma.XOR<Prisma.ApiKeyCreateWithoutServersInput, Prisma.ApiKeyUncheckedCreateWithoutServersInput>;
    connectOrCreate?: Prisma.ApiKeyCreateOrConnectWithoutServersInput;
    connect?: Prisma.ApiKeyWhereUniqueInput;
};
export type ApiKeyUpdateOneRequiredWithoutServersNestedInput = {
    create?: Prisma.XOR<Prisma.ApiKeyCreateWithoutServersInput, Prisma.ApiKeyUncheckedCreateWithoutServersInput>;
    connectOrCreate?: Prisma.ApiKeyCreateOrConnectWithoutServersInput;
    upsert?: Prisma.ApiKeyUpsertWithoutServersInput;
    connect?: Prisma.ApiKeyWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ApiKeyUpdateToOneWithWhereWithoutServersInput, Prisma.ApiKeyUpdateWithoutServersInput>, Prisma.ApiKeyUncheckedUpdateWithoutServersInput>;
};
export type ApiKeyCreateWithoutUserInput = {
    key: string;
    name?: string | null;
    revoked?: boolean;
    lastUsedAt?: Date | string | null;
    created_at?: Date | string;
    servers?: Prisma.ServerCreateNestedManyWithoutApiKeyInput;
};
export type ApiKeyUncheckedCreateWithoutUserInput = {
    id?: number;
    key: string;
    name?: string | null;
    revoked?: boolean;
    lastUsedAt?: Date | string | null;
    created_at?: Date | string;
    servers?: Prisma.ServerUncheckedCreateNestedManyWithoutApiKeyInput;
};
export type ApiKeyCreateOrConnectWithoutUserInput = {
    where: Prisma.ApiKeyWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApiKeyCreateWithoutUserInput, Prisma.ApiKeyUncheckedCreateWithoutUserInput>;
};
export type ApiKeyCreateManyUserInputEnvelope = {
    data: Prisma.ApiKeyCreateManyUserInput | Prisma.ApiKeyCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ApiKeyUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ApiKeyWhereUniqueInput;
    update: Prisma.XOR<Prisma.ApiKeyUpdateWithoutUserInput, Prisma.ApiKeyUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ApiKeyCreateWithoutUserInput, Prisma.ApiKeyUncheckedCreateWithoutUserInput>;
};
export type ApiKeyUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ApiKeyWhereUniqueInput;
    data: Prisma.XOR<Prisma.ApiKeyUpdateWithoutUserInput, Prisma.ApiKeyUncheckedUpdateWithoutUserInput>;
};
export type ApiKeyUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ApiKeyScalarWhereInput;
    data: Prisma.XOR<Prisma.ApiKeyUpdateManyMutationInput, Prisma.ApiKeyUncheckedUpdateManyWithoutUserInput>;
};
export type ApiKeyScalarWhereInput = {
    AND?: Prisma.ApiKeyScalarWhereInput | Prisma.ApiKeyScalarWhereInput[];
    OR?: Prisma.ApiKeyScalarWhereInput[];
    NOT?: Prisma.ApiKeyScalarWhereInput | Prisma.ApiKeyScalarWhereInput[];
    id?: Prisma.IntFilter<"ApiKey"> | number;
    key?: Prisma.StringFilter<"ApiKey"> | string;
    name?: Prisma.StringNullableFilter<"ApiKey"> | string | null;
    revoked?: Prisma.BoolFilter<"ApiKey"> | boolean;
    userId?: Prisma.IntFilter<"ApiKey"> | number;
    lastUsedAt?: Prisma.DateTimeNullableFilter<"ApiKey"> | Date | string | null;
    created_at?: Prisma.DateTimeFilter<"ApiKey"> | Date | string;
};
export type ApiKeyCreateWithoutServersInput = {
    key: string;
    name?: string | null;
    revoked?: boolean;
    lastUsedAt?: Date | string | null;
    created_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutApiKeysInput;
};
export type ApiKeyUncheckedCreateWithoutServersInput = {
    id?: number;
    key: string;
    name?: string | null;
    revoked?: boolean;
    userId: number;
    lastUsedAt?: Date | string | null;
    created_at?: Date | string;
};
export type ApiKeyCreateOrConnectWithoutServersInput = {
    where: Prisma.ApiKeyWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApiKeyCreateWithoutServersInput, Prisma.ApiKeyUncheckedCreateWithoutServersInput>;
};
export type ApiKeyUpsertWithoutServersInput = {
    update: Prisma.XOR<Prisma.ApiKeyUpdateWithoutServersInput, Prisma.ApiKeyUncheckedUpdateWithoutServersInput>;
    create: Prisma.XOR<Prisma.ApiKeyCreateWithoutServersInput, Prisma.ApiKeyUncheckedCreateWithoutServersInput>;
    where?: Prisma.ApiKeyWhereInput;
};
export type ApiKeyUpdateToOneWithWhereWithoutServersInput = {
    where?: Prisma.ApiKeyWhereInput;
    data: Prisma.XOR<Prisma.ApiKeyUpdateWithoutServersInput, Prisma.ApiKeyUncheckedUpdateWithoutServersInput>;
};
export type ApiKeyUpdateWithoutServersInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revoked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutApiKeysNestedInput;
};
export type ApiKeyUncheckedUpdateWithoutServersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revoked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApiKeyCreateManyUserInput = {
    id?: number;
    key: string;
    name?: string | null;
    revoked?: boolean;
    lastUsedAt?: Date | string | null;
    created_at?: Date | string;
};
export type ApiKeyUpdateWithoutUserInput = {
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revoked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    servers?: Prisma.ServerUpdateManyWithoutApiKeyNestedInput;
};
export type ApiKeyUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revoked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    servers?: Prisma.ServerUncheckedUpdateManyWithoutApiKeyNestedInput;
};
export type ApiKeyUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    key?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    revoked?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    lastUsedAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ApiKeyCountOutputType = {
    servers: number;
};
export type ApiKeyCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    servers?: boolean | ApiKeyCountOutputTypeCountServersArgs;
};
export type ApiKeyCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApiKeyCountOutputTypeSelect<ExtArgs> | null;
};
export type ApiKeyCountOutputTypeCountServersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServerWhereInput;
};
export type ApiKeySelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    name?: boolean;
    revoked?: boolean;
    userId?: boolean;
    lastUsedAt?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    servers?: boolean | Prisma.ApiKey$serversArgs<ExtArgs>;
    _count?: boolean | Prisma.ApiKeyCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["apiKey"]>;
export type ApiKeySelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    name?: boolean;
    revoked?: boolean;
    userId?: boolean;
    lastUsedAt?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["apiKey"]>;
export type ApiKeySelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    key?: boolean;
    name?: boolean;
    revoked?: boolean;
    userId?: boolean;
    lastUsedAt?: boolean;
    created_at?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["apiKey"]>;
export type ApiKeySelectScalar = {
    id?: boolean;
    key?: boolean;
    name?: boolean;
    revoked?: boolean;
    userId?: boolean;
    lastUsedAt?: boolean;
    created_at?: boolean;
};
export type ApiKeyOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "key" | "name" | "revoked" | "userId" | "lastUsedAt" | "created_at", ExtArgs["result"]["apiKey"]>;
export type ApiKeyInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    servers?: boolean | Prisma.ApiKey$serversArgs<ExtArgs>;
    _count?: boolean | Prisma.ApiKeyCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ApiKeyIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type ApiKeyIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
};
export type $ApiKeyPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ApiKey";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        servers: Prisma.$ServerPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        key: string;
        name: string | null;
        revoked: boolean;
        userId: number;
        lastUsedAt: Date | null;
        created_at: Date;
    }, ExtArgs["result"]["apiKey"]>;
    composites: {};
};
export type ApiKeyGetPayload<S extends boolean | null | undefined | ApiKeyDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ApiKeyPayload, S>;
export type ApiKeyCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ApiKeyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ApiKeyCountAggregateInputType | true;
};
export interface ApiKeyDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ApiKey'];
        meta: {
            name: 'ApiKey';
        };
    };
    findUnique<T extends ApiKeyFindUniqueArgs>(args: Prisma.SelectSubset<T, ApiKeyFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ApiKeyClient<runtime.Types.Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ApiKeyFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ApiKeyFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApiKeyClient<runtime.Types.Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ApiKeyFindFirstArgs>(args?: Prisma.SelectSubset<T, ApiKeyFindFirstArgs<ExtArgs>>): Prisma.Prisma__ApiKeyClient<runtime.Types.Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ApiKeyFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ApiKeyFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ApiKeyClient<runtime.Types.Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ApiKeyFindManyArgs>(args?: Prisma.SelectSubset<T, ApiKeyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ApiKeyCreateArgs>(args: Prisma.SelectSubset<T, ApiKeyCreateArgs<ExtArgs>>): Prisma.Prisma__ApiKeyClient<runtime.Types.Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ApiKeyCreateManyArgs>(args?: Prisma.SelectSubset<T, ApiKeyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ApiKeyCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ApiKeyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ApiKeyDeleteArgs>(args: Prisma.SelectSubset<T, ApiKeyDeleteArgs<ExtArgs>>): Prisma.Prisma__ApiKeyClient<runtime.Types.Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ApiKeyUpdateArgs>(args: Prisma.SelectSubset<T, ApiKeyUpdateArgs<ExtArgs>>): Prisma.Prisma__ApiKeyClient<runtime.Types.Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ApiKeyDeleteManyArgs>(args?: Prisma.SelectSubset<T, ApiKeyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ApiKeyUpdateManyArgs>(args: Prisma.SelectSubset<T, ApiKeyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ApiKeyUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ApiKeyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ApiKeyUpsertArgs>(args: Prisma.SelectSubset<T, ApiKeyUpsertArgs<ExtArgs>>): Prisma.Prisma__ApiKeyClient<runtime.Types.Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ApiKeyCountArgs>(args?: Prisma.Subset<T, ApiKeyCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ApiKeyCountAggregateOutputType> : number>;
    aggregate<T extends ApiKeyAggregateArgs>(args: Prisma.Subset<T, ApiKeyAggregateArgs>): Prisma.PrismaPromise<GetApiKeyAggregateType<T>>;
    groupBy<T extends ApiKeyGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ApiKeyGroupByArgs['orderBy'];
    } : {
        orderBy?: ApiKeyGroupByArgs['orderBy'];
    }, OrderFields extends Prisma.ExcludeUnderscoreKeys<Prisma.Keys<Prisma.MaybeTupleToUnion<T['orderBy']>>>, ByFields extends Prisma.MaybeTupleToUnion<T['by']>, ByValid extends Prisma.Has<ByFields, OrderFields>, HavingFields extends Prisma.GetHavingFields<T['having']>, HavingValid extends Prisma.Has<ByFields, HavingFields>, ByEmpty extends T['by'] extends never[] ? Prisma.True : Prisma.False, InputErrors extends ByEmpty extends Prisma.True ? `Error: "by" must not be empty.` : HavingValid extends Prisma.False ? {
        [P in HavingFields]: P extends ByFields ? never : P extends string ? `Error: Field "${P}" used in "having" needs to be provided in "by".` : [
            Error,
            'Field ',
            P,
            ` in "having" needs to be provided in "by"`
        ];
    }[HavingFields] : 'take' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "take", you also need to provide "orderBy"' : 'skip' extends Prisma.Keys<T> ? 'orderBy' extends Prisma.Keys<T> ? ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields] : 'Error: If you provide "skip", you also need to provide "orderBy"' : ByValid extends Prisma.True ? {} : {
        [P in OrderFields]: P extends ByFields ? never : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`;
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ApiKeyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApiKeyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ApiKeyFieldRefs;
}
export interface Prisma__ApiKeyClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    servers<T extends Prisma.ApiKey$serversArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ApiKey$serversArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ApiKeyFieldRefs {
    readonly id: Prisma.FieldRef<"ApiKey", 'Int'>;
    readonly key: Prisma.FieldRef<"ApiKey", 'String'>;
    readonly name: Prisma.FieldRef<"ApiKey", 'String'>;
    readonly revoked: Prisma.FieldRef<"ApiKey", 'Boolean'>;
    readonly userId: Prisma.FieldRef<"ApiKey", 'Int'>;
    readonly lastUsedAt: Prisma.FieldRef<"ApiKey", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"ApiKey", 'DateTime'>;
}
export type ApiKeyFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApiKeySelect<ExtArgs> | null;
    omit?: Prisma.ApiKeyOmit<ExtArgs> | null;
    include?: Prisma.ApiKeyInclude<ExtArgs> | null;
    where: Prisma.ApiKeyWhereUniqueInput;
};
export type ApiKeyFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApiKeySelect<ExtArgs> | null;
    omit?: Prisma.ApiKeyOmit<ExtArgs> | null;
    include?: Prisma.ApiKeyInclude<ExtArgs> | null;
    where: Prisma.ApiKeyWhereUniqueInput;
};
export type ApiKeyFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApiKeySelect<ExtArgs> | null;
    omit?: Prisma.ApiKeyOmit<ExtArgs> | null;
    include?: Prisma.ApiKeyInclude<ExtArgs> | null;
    where?: Prisma.ApiKeyWhereInput;
    orderBy?: Prisma.ApiKeyOrderByWithRelationInput | Prisma.ApiKeyOrderByWithRelationInput[];
    cursor?: Prisma.ApiKeyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApiKeyScalarFieldEnum | Prisma.ApiKeyScalarFieldEnum[];
};
export type ApiKeyFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApiKeySelect<ExtArgs> | null;
    omit?: Prisma.ApiKeyOmit<ExtArgs> | null;
    include?: Prisma.ApiKeyInclude<ExtArgs> | null;
    where?: Prisma.ApiKeyWhereInput;
    orderBy?: Prisma.ApiKeyOrderByWithRelationInput | Prisma.ApiKeyOrderByWithRelationInput[];
    cursor?: Prisma.ApiKeyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApiKeyScalarFieldEnum | Prisma.ApiKeyScalarFieldEnum[];
};
export type ApiKeyFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApiKeySelect<ExtArgs> | null;
    omit?: Prisma.ApiKeyOmit<ExtArgs> | null;
    include?: Prisma.ApiKeyInclude<ExtArgs> | null;
    where?: Prisma.ApiKeyWhereInput;
    orderBy?: Prisma.ApiKeyOrderByWithRelationInput | Prisma.ApiKeyOrderByWithRelationInput[];
    cursor?: Prisma.ApiKeyWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ApiKeyScalarFieldEnum | Prisma.ApiKeyScalarFieldEnum[];
};
export type ApiKeyCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApiKeySelect<ExtArgs> | null;
    omit?: Prisma.ApiKeyOmit<ExtArgs> | null;
    include?: Prisma.ApiKeyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApiKeyCreateInput, Prisma.ApiKeyUncheckedCreateInput>;
};
export type ApiKeyCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ApiKeyCreateManyInput | Prisma.ApiKeyCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ApiKeyCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApiKeySelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ApiKeyOmit<ExtArgs> | null;
    data: Prisma.ApiKeyCreateManyInput | Prisma.ApiKeyCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ApiKeyIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ApiKeyUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApiKeySelect<ExtArgs> | null;
    omit?: Prisma.ApiKeyOmit<ExtArgs> | null;
    include?: Prisma.ApiKeyInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApiKeyUpdateInput, Prisma.ApiKeyUncheckedUpdateInput>;
    where: Prisma.ApiKeyWhereUniqueInput;
};
export type ApiKeyUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ApiKeyUpdateManyMutationInput, Prisma.ApiKeyUncheckedUpdateManyInput>;
    where?: Prisma.ApiKeyWhereInput;
    limit?: number;
};
export type ApiKeyUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApiKeySelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ApiKeyOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ApiKeyUpdateManyMutationInput, Prisma.ApiKeyUncheckedUpdateManyInput>;
    where?: Prisma.ApiKeyWhereInput;
    limit?: number;
    include?: Prisma.ApiKeyIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ApiKeyUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApiKeySelect<ExtArgs> | null;
    omit?: Prisma.ApiKeyOmit<ExtArgs> | null;
    include?: Prisma.ApiKeyInclude<ExtArgs> | null;
    where: Prisma.ApiKeyWhereUniqueInput;
    create: Prisma.XOR<Prisma.ApiKeyCreateInput, Prisma.ApiKeyUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ApiKeyUpdateInput, Prisma.ApiKeyUncheckedUpdateInput>;
};
export type ApiKeyDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApiKeySelect<ExtArgs> | null;
    omit?: Prisma.ApiKeyOmit<ExtArgs> | null;
    include?: Prisma.ApiKeyInclude<ExtArgs> | null;
    where: Prisma.ApiKeyWhereUniqueInput;
};
export type ApiKeyDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApiKeyWhereInput;
    limit?: number;
};
export type ApiKey$serversArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerSelect<ExtArgs> | null;
    omit?: Prisma.ServerOmit<ExtArgs> | null;
    include?: Prisma.ServerInclude<ExtArgs> | null;
    where?: Prisma.ServerWhereInput;
    orderBy?: Prisma.ServerOrderByWithRelationInput | Prisma.ServerOrderByWithRelationInput[];
    cursor?: Prisma.ServerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ServerScalarFieldEnum | Prisma.ServerScalarFieldEnum[];
};
export type ApiKeyDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ApiKeySelect<ExtArgs> | null;
    omit?: Prisma.ApiKeyOmit<ExtArgs> | null;
    include?: Prisma.ApiKeyInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ApiKey.d.ts.map