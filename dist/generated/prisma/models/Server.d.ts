import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ServerModel = runtime.Types.Result.DefaultSelection<Prisma.$ServerPayload>;
export type AggregateServer = {
    _count: ServerCountAggregateOutputType | null;
    _avg: ServerAvgAggregateOutputType | null;
    _sum: ServerSumAggregateOutputType | null;
    _min: ServerMinAggregateOutputType | null;
    _max: ServerMaxAggregateOutputType | null;
};
export type ServerAvgAggregateOutputType = {
    id: number | null;
    userId: number | null;
    apiKeyId: number | null;
};
export type ServerSumAggregateOutputType = {
    id: number | null;
    userId: number | null;
    apiKeyId: number | null;
};
export type ServerMinAggregateOutputType = {
    id: number | null;
    uuid: string | null;
    name: string | null;
    environment: string | null;
    hostname: string | null;
    os: string | null;
    arch: string | null;
    userId: number | null;
    apiKeyId: number | null;
    lastSeenAt: Date | null;
    agentVersion: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type ServerMaxAggregateOutputType = {
    id: number | null;
    uuid: string | null;
    name: string | null;
    environment: string | null;
    hostname: string | null;
    os: string | null;
    arch: string | null;
    userId: number | null;
    apiKeyId: number | null;
    lastSeenAt: Date | null;
    agentVersion: string | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type ServerCountAggregateOutputType = {
    id: number;
    uuid: number;
    name: number;
    environment: number;
    hostname: number;
    os: number;
    arch: number;
    userId: number;
    apiKeyId: number;
    lastSeenAt: number;
    agentVersion: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type ServerAvgAggregateInputType = {
    id?: true;
    userId?: true;
    apiKeyId?: true;
};
export type ServerSumAggregateInputType = {
    id?: true;
    userId?: true;
    apiKeyId?: true;
};
export type ServerMinAggregateInputType = {
    id?: true;
    uuid?: true;
    name?: true;
    environment?: true;
    hostname?: true;
    os?: true;
    arch?: true;
    userId?: true;
    apiKeyId?: true;
    lastSeenAt?: true;
    agentVersion?: true;
    created_at?: true;
    updated_at?: true;
};
export type ServerMaxAggregateInputType = {
    id?: true;
    uuid?: true;
    name?: true;
    environment?: true;
    hostname?: true;
    os?: true;
    arch?: true;
    userId?: true;
    apiKeyId?: true;
    lastSeenAt?: true;
    agentVersion?: true;
    created_at?: true;
    updated_at?: true;
};
export type ServerCountAggregateInputType = {
    id?: true;
    uuid?: true;
    name?: true;
    environment?: true;
    hostname?: true;
    os?: true;
    arch?: true;
    userId?: true;
    apiKeyId?: true;
    lastSeenAt?: true;
    agentVersion?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type ServerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServerWhereInput;
    orderBy?: Prisma.ServerOrderByWithRelationInput | Prisma.ServerOrderByWithRelationInput[];
    cursor?: Prisma.ServerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ServerCountAggregateInputType;
    _avg?: ServerAvgAggregateInputType;
    _sum?: ServerSumAggregateInputType;
    _min?: ServerMinAggregateInputType;
    _max?: ServerMaxAggregateInputType;
};
export type GetServerAggregateType<T extends ServerAggregateArgs> = {
    [P in keyof T & keyof AggregateServer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateServer[P]> : Prisma.GetScalarType<T[P], AggregateServer[P]>;
};
export type ServerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServerWhereInput;
    orderBy?: Prisma.ServerOrderByWithAggregationInput | Prisma.ServerOrderByWithAggregationInput[];
    by: Prisma.ServerScalarFieldEnum[] | Prisma.ServerScalarFieldEnum;
    having?: Prisma.ServerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ServerCountAggregateInputType | true;
    _avg?: ServerAvgAggregateInputType;
    _sum?: ServerSumAggregateInputType;
    _min?: ServerMinAggregateInputType;
    _max?: ServerMaxAggregateInputType;
};
export type ServerGroupByOutputType = {
    id: number;
    uuid: string;
    name: string;
    environment: string;
    hostname: string;
    os: string | null;
    arch: string | null;
    userId: number;
    apiKeyId: number;
    lastSeenAt: Date | null;
    agentVersion: string | null;
    created_at: Date;
    updated_at: Date;
    _count: ServerCountAggregateOutputType | null;
    _avg: ServerAvgAggregateOutputType | null;
    _sum: ServerSumAggregateOutputType | null;
    _min: ServerMinAggregateOutputType | null;
    _max: ServerMaxAggregateOutputType | null;
};
type GetServerGroupByPayload<T extends ServerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ServerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ServerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ServerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ServerGroupByOutputType[P]>;
}>>;
export type ServerWhereInput = {
    AND?: Prisma.ServerWhereInput | Prisma.ServerWhereInput[];
    OR?: Prisma.ServerWhereInput[];
    NOT?: Prisma.ServerWhereInput | Prisma.ServerWhereInput[];
    id?: Prisma.IntFilter<"Server"> | number;
    uuid?: Prisma.StringFilter<"Server"> | string;
    name?: Prisma.StringFilter<"Server"> | string;
    environment?: Prisma.StringFilter<"Server"> | string;
    hostname?: Prisma.StringFilter<"Server"> | string;
    os?: Prisma.StringNullableFilter<"Server"> | string | null;
    arch?: Prisma.StringNullableFilter<"Server"> | string | null;
    userId?: Prisma.IntFilter<"Server"> | number;
    apiKeyId?: Prisma.IntFilter<"Server"> | number;
    lastSeenAt?: Prisma.DateTimeNullableFilter<"Server"> | Date | string | null;
    agentVersion?: Prisma.StringNullableFilter<"Server"> | string | null;
    created_at?: Prisma.DateTimeFilter<"Server"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Server"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    apiKey?: Prisma.XOR<Prisma.ApiKeyScalarRelationFilter, Prisma.ApiKeyWhereInput>;
    snapshots?: Prisma.ServerSnapshotListRelationFilter;
    metrics?: Prisma.ServerMetricListRelationFilter;
    containers?: Prisma.ContainerListRelationFilter;
    events?: Prisma.EventListRelationFilter;
};
export type ServerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    uuid?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    environment?: Prisma.SortOrder;
    hostname?: Prisma.SortOrder;
    os?: Prisma.SortOrderInput | Prisma.SortOrder;
    arch?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    apiKeyId?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    agentVersion?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    user?: Prisma.UserOrderByWithRelationInput;
    apiKey?: Prisma.ApiKeyOrderByWithRelationInput;
    snapshots?: Prisma.ServerSnapshotOrderByRelationAggregateInput;
    metrics?: Prisma.ServerMetricOrderByRelationAggregateInput;
    containers?: Prisma.ContainerOrderByRelationAggregateInput;
    events?: Prisma.EventOrderByRelationAggregateInput;
};
export type ServerWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    uuid?: string;
    AND?: Prisma.ServerWhereInput | Prisma.ServerWhereInput[];
    OR?: Prisma.ServerWhereInput[];
    NOT?: Prisma.ServerWhereInput | Prisma.ServerWhereInput[];
    name?: Prisma.StringFilter<"Server"> | string;
    environment?: Prisma.StringFilter<"Server"> | string;
    hostname?: Prisma.StringFilter<"Server"> | string;
    os?: Prisma.StringNullableFilter<"Server"> | string | null;
    arch?: Prisma.StringNullableFilter<"Server"> | string | null;
    userId?: Prisma.IntFilter<"Server"> | number;
    apiKeyId?: Prisma.IntFilter<"Server"> | number;
    lastSeenAt?: Prisma.DateTimeNullableFilter<"Server"> | Date | string | null;
    agentVersion?: Prisma.StringNullableFilter<"Server"> | string | null;
    created_at?: Prisma.DateTimeFilter<"Server"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Server"> | Date | string;
    user?: Prisma.XOR<Prisma.UserScalarRelationFilter, Prisma.UserWhereInput>;
    apiKey?: Prisma.XOR<Prisma.ApiKeyScalarRelationFilter, Prisma.ApiKeyWhereInput>;
    snapshots?: Prisma.ServerSnapshotListRelationFilter;
    metrics?: Prisma.ServerMetricListRelationFilter;
    containers?: Prisma.ContainerListRelationFilter;
    events?: Prisma.EventListRelationFilter;
}, "id" | "uuid">;
export type ServerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    uuid?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    environment?: Prisma.SortOrder;
    hostname?: Prisma.SortOrder;
    os?: Prisma.SortOrderInput | Prisma.SortOrder;
    arch?: Prisma.SortOrderInput | Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    apiKeyId?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrderInput | Prisma.SortOrder;
    agentVersion?: Prisma.SortOrderInput | Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.ServerCountOrderByAggregateInput;
    _avg?: Prisma.ServerAvgOrderByAggregateInput;
    _max?: Prisma.ServerMaxOrderByAggregateInput;
    _min?: Prisma.ServerMinOrderByAggregateInput;
    _sum?: Prisma.ServerSumOrderByAggregateInput;
};
export type ServerScalarWhereWithAggregatesInput = {
    AND?: Prisma.ServerScalarWhereWithAggregatesInput | Prisma.ServerScalarWhereWithAggregatesInput[];
    OR?: Prisma.ServerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ServerScalarWhereWithAggregatesInput | Prisma.ServerScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Server"> | number;
    uuid?: Prisma.StringWithAggregatesFilter<"Server"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Server"> | string;
    environment?: Prisma.StringWithAggregatesFilter<"Server"> | string;
    hostname?: Prisma.StringWithAggregatesFilter<"Server"> | string;
    os?: Prisma.StringNullableWithAggregatesFilter<"Server"> | string | null;
    arch?: Prisma.StringNullableWithAggregatesFilter<"Server"> | string | null;
    userId?: Prisma.IntWithAggregatesFilter<"Server"> | number;
    apiKeyId?: Prisma.IntWithAggregatesFilter<"Server"> | number;
    lastSeenAt?: Prisma.DateTimeNullableWithAggregatesFilter<"Server"> | Date | string | null;
    agentVersion?: Prisma.StringNullableWithAggregatesFilter<"Server"> | string | null;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Server"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"Server"> | Date | string;
};
export type ServerCreateInput = {
    uuid: string;
    name: string;
    environment: string;
    hostname: string;
    os?: string | null;
    arch?: string | null;
    lastSeenAt?: Date | string | null;
    agentVersion?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutServersInput;
    apiKey: Prisma.ApiKeyCreateNestedOneWithoutServersInput;
    snapshots?: Prisma.ServerSnapshotCreateNestedManyWithoutServerInput;
    metrics?: Prisma.ServerMetricCreateNestedManyWithoutServerInput;
    containers?: Prisma.ContainerCreateNestedManyWithoutServerInput;
    events?: Prisma.EventCreateNestedManyWithoutServerInput;
};
export type ServerUncheckedCreateInput = {
    id?: number;
    uuid: string;
    name: string;
    environment: string;
    hostname: string;
    os?: string | null;
    arch?: string | null;
    userId: number;
    apiKeyId: number;
    lastSeenAt?: Date | string | null;
    agentVersion?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    snapshots?: Prisma.ServerSnapshotUncheckedCreateNestedManyWithoutServerInput;
    metrics?: Prisma.ServerMetricUncheckedCreateNestedManyWithoutServerInput;
    containers?: Prisma.ContainerUncheckedCreateNestedManyWithoutServerInput;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutServerInput;
};
export type ServerUpdateInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    environment?: Prisma.StringFieldUpdateOperationsInput | string;
    hostname?: Prisma.StringFieldUpdateOperationsInput | string;
    os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    arch?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    agentVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutServersNestedInput;
    apiKey?: Prisma.ApiKeyUpdateOneRequiredWithoutServersNestedInput;
    snapshots?: Prisma.ServerSnapshotUpdateManyWithoutServerNestedInput;
    metrics?: Prisma.ServerMetricUpdateManyWithoutServerNestedInput;
    containers?: Prisma.ContainerUpdateManyWithoutServerNestedInput;
    events?: Prisma.EventUpdateManyWithoutServerNestedInput;
};
export type ServerUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    environment?: Prisma.StringFieldUpdateOperationsInput | string;
    hostname?: Prisma.StringFieldUpdateOperationsInput | string;
    os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    arch?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    apiKeyId?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    agentVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    snapshots?: Prisma.ServerSnapshotUncheckedUpdateManyWithoutServerNestedInput;
    metrics?: Prisma.ServerMetricUncheckedUpdateManyWithoutServerNestedInput;
    containers?: Prisma.ContainerUncheckedUpdateManyWithoutServerNestedInput;
    events?: Prisma.EventUncheckedUpdateManyWithoutServerNestedInput;
};
export type ServerCreateManyInput = {
    id?: number;
    uuid: string;
    name: string;
    environment: string;
    hostname: string;
    os?: string | null;
    arch?: string | null;
    userId: number;
    apiKeyId: number;
    lastSeenAt?: Date | string | null;
    agentVersion?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ServerUpdateManyMutationInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    environment?: Prisma.StringFieldUpdateOperationsInput | string;
    hostname?: Prisma.StringFieldUpdateOperationsInput | string;
    os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    arch?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    agentVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServerUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    environment?: Prisma.StringFieldUpdateOperationsInput | string;
    hostname?: Prisma.StringFieldUpdateOperationsInput | string;
    os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    arch?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    apiKeyId?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    agentVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServerListRelationFilter = {
    every?: Prisma.ServerWhereInput;
    some?: Prisma.ServerWhereInput;
    none?: Prisma.ServerWhereInput;
};
export type ServerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ServerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    uuid?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    environment?: Prisma.SortOrder;
    hostname?: Prisma.SortOrder;
    os?: Prisma.SortOrder;
    arch?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    apiKeyId?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
    agentVersion?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type ServerAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    apiKeyId?: Prisma.SortOrder;
};
export type ServerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    uuid?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    environment?: Prisma.SortOrder;
    hostname?: Prisma.SortOrder;
    os?: Prisma.SortOrder;
    arch?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    apiKeyId?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
    agentVersion?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type ServerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    uuid?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    environment?: Prisma.SortOrder;
    hostname?: Prisma.SortOrder;
    os?: Prisma.SortOrder;
    arch?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    apiKeyId?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
    agentVersion?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type ServerSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    userId?: Prisma.SortOrder;
    apiKeyId?: Prisma.SortOrder;
};
export type ServerScalarRelationFilter = {
    is?: Prisma.ServerWhereInput;
    isNot?: Prisma.ServerWhereInput;
};
export type ServerCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ServerCreateWithoutUserInput, Prisma.ServerUncheckedCreateWithoutUserInput> | Prisma.ServerCreateWithoutUserInput[] | Prisma.ServerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ServerCreateOrConnectWithoutUserInput | Prisma.ServerCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ServerCreateManyUserInputEnvelope;
    connect?: Prisma.ServerWhereUniqueInput | Prisma.ServerWhereUniqueInput[];
};
export type ServerUncheckedCreateNestedManyWithoutUserInput = {
    create?: Prisma.XOR<Prisma.ServerCreateWithoutUserInput, Prisma.ServerUncheckedCreateWithoutUserInput> | Prisma.ServerCreateWithoutUserInput[] | Prisma.ServerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ServerCreateOrConnectWithoutUserInput | Prisma.ServerCreateOrConnectWithoutUserInput[];
    createMany?: Prisma.ServerCreateManyUserInputEnvelope;
    connect?: Prisma.ServerWhereUniqueInput | Prisma.ServerWhereUniqueInput[];
};
export type ServerUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ServerCreateWithoutUserInput, Prisma.ServerUncheckedCreateWithoutUserInput> | Prisma.ServerCreateWithoutUserInput[] | Prisma.ServerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ServerCreateOrConnectWithoutUserInput | Prisma.ServerCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ServerUpsertWithWhereUniqueWithoutUserInput | Prisma.ServerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ServerCreateManyUserInputEnvelope;
    set?: Prisma.ServerWhereUniqueInput | Prisma.ServerWhereUniqueInput[];
    disconnect?: Prisma.ServerWhereUniqueInput | Prisma.ServerWhereUniqueInput[];
    delete?: Prisma.ServerWhereUniqueInput | Prisma.ServerWhereUniqueInput[];
    connect?: Prisma.ServerWhereUniqueInput | Prisma.ServerWhereUniqueInput[];
    update?: Prisma.ServerUpdateWithWhereUniqueWithoutUserInput | Prisma.ServerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ServerUpdateManyWithWhereWithoutUserInput | Prisma.ServerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ServerScalarWhereInput | Prisma.ServerScalarWhereInput[];
};
export type ServerUncheckedUpdateManyWithoutUserNestedInput = {
    create?: Prisma.XOR<Prisma.ServerCreateWithoutUserInput, Prisma.ServerUncheckedCreateWithoutUserInput> | Prisma.ServerCreateWithoutUserInput[] | Prisma.ServerUncheckedCreateWithoutUserInput[];
    connectOrCreate?: Prisma.ServerCreateOrConnectWithoutUserInput | Prisma.ServerCreateOrConnectWithoutUserInput[];
    upsert?: Prisma.ServerUpsertWithWhereUniqueWithoutUserInput | Prisma.ServerUpsertWithWhereUniqueWithoutUserInput[];
    createMany?: Prisma.ServerCreateManyUserInputEnvelope;
    set?: Prisma.ServerWhereUniqueInput | Prisma.ServerWhereUniqueInput[];
    disconnect?: Prisma.ServerWhereUniqueInput | Prisma.ServerWhereUniqueInput[];
    delete?: Prisma.ServerWhereUniqueInput | Prisma.ServerWhereUniqueInput[];
    connect?: Prisma.ServerWhereUniqueInput | Prisma.ServerWhereUniqueInput[];
    update?: Prisma.ServerUpdateWithWhereUniqueWithoutUserInput | Prisma.ServerUpdateWithWhereUniqueWithoutUserInput[];
    updateMany?: Prisma.ServerUpdateManyWithWhereWithoutUserInput | Prisma.ServerUpdateManyWithWhereWithoutUserInput[];
    deleteMany?: Prisma.ServerScalarWhereInput | Prisma.ServerScalarWhereInput[];
};
export type ServerCreateNestedManyWithoutApiKeyInput = {
    create?: Prisma.XOR<Prisma.ServerCreateWithoutApiKeyInput, Prisma.ServerUncheckedCreateWithoutApiKeyInput> | Prisma.ServerCreateWithoutApiKeyInput[] | Prisma.ServerUncheckedCreateWithoutApiKeyInput[];
    connectOrCreate?: Prisma.ServerCreateOrConnectWithoutApiKeyInput | Prisma.ServerCreateOrConnectWithoutApiKeyInput[];
    createMany?: Prisma.ServerCreateManyApiKeyInputEnvelope;
    connect?: Prisma.ServerWhereUniqueInput | Prisma.ServerWhereUniqueInput[];
};
export type ServerUncheckedCreateNestedManyWithoutApiKeyInput = {
    create?: Prisma.XOR<Prisma.ServerCreateWithoutApiKeyInput, Prisma.ServerUncheckedCreateWithoutApiKeyInput> | Prisma.ServerCreateWithoutApiKeyInput[] | Prisma.ServerUncheckedCreateWithoutApiKeyInput[];
    connectOrCreate?: Prisma.ServerCreateOrConnectWithoutApiKeyInput | Prisma.ServerCreateOrConnectWithoutApiKeyInput[];
    createMany?: Prisma.ServerCreateManyApiKeyInputEnvelope;
    connect?: Prisma.ServerWhereUniqueInput | Prisma.ServerWhereUniqueInput[];
};
export type ServerUpdateManyWithoutApiKeyNestedInput = {
    create?: Prisma.XOR<Prisma.ServerCreateWithoutApiKeyInput, Prisma.ServerUncheckedCreateWithoutApiKeyInput> | Prisma.ServerCreateWithoutApiKeyInput[] | Prisma.ServerUncheckedCreateWithoutApiKeyInput[];
    connectOrCreate?: Prisma.ServerCreateOrConnectWithoutApiKeyInput | Prisma.ServerCreateOrConnectWithoutApiKeyInput[];
    upsert?: Prisma.ServerUpsertWithWhereUniqueWithoutApiKeyInput | Prisma.ServerUpsertWithWhereUniqueWithoutApiKeyInput[];
    createMany?: Prisma.ServerCreateManyApiKeyInputEnvelope;
    set?: Prisma.ServerWhereUniqueInput | Prisma.ServerWhereUniqueInput[];
    disconnect?: Prisma.ServerWhereUniqueInput | Prisma.ServerWhereUniqueInput[];
    delete?: Prisma.ServerWhereUniqueInput | Prisma.ServerWhereUniqueInput[];
    connect?: Prisma.ServerWhereUniqueInput | Prisma.ServerWhereUniqueInput[];
    update?: Prisma.ServerUpdateWithWhereUniqueWithoutApiKeyInput | Prisma.ServerUpdateWithWhereUniqueWithoutApiKeyInput[];
    updateMany?: Prisma.ServerUpdateManyWithWhereWithoutApiKeyInput | Prisma.ServerUpdateManyWithWhereWithoutApiKeyInput[];
    deleteMany?: Prisma.ServerScalarWhereInput | Prisma.ServerScalarWhereInput[];
};
export type ServerUncheckedUpdateManyWithoutApiKeyNestedInput = {
    create?: Prisma.XOR<Prisma.ServerCreateWithoutApiKeyInput, Prisma.ServerUncheckedCreateWithoutApiKeyInput> | Prisma.ServerCreateWithoutApiKeyInput[] | Prisma.ServerUncheckedCreateWithoutApiKeyInput[];
    connectOrCreate?: Prisma.ServerCreateOrConnectWithoutApiKeyInput | Prisma.ServerCreateOrConnectWithoutApiKeyInput[];
    upsert?: Prisma.ServerUpsertWithWhereUniqueWithoutApiKeyInput | Prisma.ServerUpsertWithWhereUniqueWithoutApiKeyInput[];
    createMany?: Prisma.ServerCreateManyApiKeyInputEnvelope;
    set?: Prisma.ServerWhereUniqueInput | Prisma.ServerWhereUniqueInput[];
    disconnect?: Prisma.ServerWhereUniqueInput | Prisma.ServerWhereUniqueInput[];
    delete?: Prisma.ServerWhereUniqueInput | Prisma.ServerWhereUniqueInput[];
    connect?: Prisma.ServerWhereUniqueInput | Prisma.ServerWhereUniqueInput[];
    update?: Prisma.ServerUpdateWithWhereUniqueWithoutApiKeyInput | Prisma.ServerUpdateWithWhereUniqueWithoutApiKeyInput[];
    updateMany?: Prisma.ServerUpdateManyWithWhereWithoutApiKeyInput | Prisma.ServerUpdateManyWithWhereWithoutApiKeyInput[];
    deleteMany?: Prisma.ServerScalarWhereInput | Prisma.ServerScalarWhereInput[];
};
export type ServerCreateNestedOneWithoutSnapshotsInput = {
    create?: Prisma.XOR<Prisma.ServerCreateWithoutSnapshotsInput, Prisma.ServerUncheckedCreateWithoutSnapshotsInput>;
    connectOrCreate?: Prisma.ServerCreateOrConnectWithoutSnapshotsInput;
    connect?: Prisma.ServerWhereUniqueInput;
};
export type ServerUpdateOneRequiredWithoutSnapshotsNestedInput = {
    create?: Prisma.XOR<Prisma.ServerCreateWithoutSnapshotsInput, Prisma.ServerUncheckedCreateWithoutSnapshotsInput>;
    connectOrCreate?: Prisma.ServerCreateOrConnectWithoutSnapshotsInput;
    upsert?: Prisma.ServerUpsertWithoutSnapshotsInput;
    connect?: Prisma.ServerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ServerUpdateToOneWithWhereWithoutSnapshotsInput, Prisma.ServerUpdateWithoutSnapshotsInput>, Prisma.ServerUncheckedUpdateWithoutSnapshotsInput>;
};
export type ServerCreateNestedOneWithoutMetricsInput = {
    create?: Prisma.XOR<Prisma.ServerCreateWithoutMetricsInput, Prisma.ServerUncheckedCreateWithoutMetricsInput>;
    connectOrCreate?: Prisma.ServerCreateOrConnectWithoutMetricsInput;
    connect?: Prisma.ServerWhereUniqueInput;
};
export type ServerUpdateOneRequiredWithoutMetricsNestedInput = {
    create?: Prisma.XOR<Prisma.ServerCreateWithoutMetricsInput, Prisma.ServerUncheckedCreateWithoutMetricsInput>;
    connectOrCreate?: Prisma.ServerCreateOrConnectWithoutMetricsInput;
    upsert?: Prisma.ServerUpsertWithoutMetricsInput;
    connect?: Prisma.ServerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ServerUpdateToOneWithWhereWithoutMetricsInput, Prisma.ServerUpdateWithoutMetricsInput>, Prisma.ServerUncheckedUpdateWithoutMetricsInput>;
};
export type ServerCreateNestedOneWithoutContainersInput = {
    create?: Prisma.XOR<Prisma.ServerCreateWithoutContainersInput, Prisma.ServerUncheckedCreateWithoutContainersInput>;
    connectOrCreate?: Prisma.ServerCreateOrConnectWithoutContainersInput;
    connect?: Prisma.ServerWhereUniqueInput;
};
export type ServerUpdateOneRequiredWithoutContainersNestedInput = {
    create?: Prisma.XOR<Prisma.ServerCreateWithoutContainersInput, Prisma.ServerUncheckedCreateWithoutContainersInput>;
    connectOrCreate?: Prisma.ServerCreateOrConnectWithoutContainersInput;
    upsert?: Prisma.ServerUpsertWithoutContainersInput;
    connect?: Prisma.ServerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ServerUpdateToOneWithWhereWithoutContainersInput, Prisma.ServerUpdateWithoutContainersInput>, Prisma.ServerUncheckedUpdateWithoutContainersInput>;
};
export type ServerCreateNestedOneWithoutEventsInput = {
    create?: Prisma.XOR<Prisma.ServerCreateWithoutEventsInput, Prisma.ServerUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.ServerCreateOrConnectWithoutEventsInput;
    connect?: Prisma.ServerWhereUniqueInput;
};
export type ServerUpdateOneRequiredWithoutEventsNestedInput = {
    create?: Prisma.XOR<Prisma.ServerCreateWithoutEventsInput, Prisma.ServerUncheckedCreateWithoutEventsInput>;
    connectOrCreate?: Prisma.ServerCreateOrConnectWithoutEventsInput;
    upsert?: Prisma.ServerUpsertWithoutEventsInput;
    connect?: Prisma.ServerWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.ServerUpdateToOneWithWhereWithoutEventsInput, Prisma.ServerUpdateWithoutEventsInput>, Prisma.ServerUncheckedUpdateWithoutEventsInput>;
};
export type ServerCreateWithoutUserInput = {
    uuid: string;
    name: string;
    environment: string;
    hostname: string;
    os?: string | null;
    arch?: string | null;
    lastSeenAt?: Date | string | null;
    agentVersion?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    apiKey: Prisma.ApiKeyCreateNestedOneWithoutServersInput;
    snapshots?: Prisma.ServerSnapshotCreateNestedManyWithoutServerInput;
    metrics?: Prisma.ServerMetricCreateNestedManyWithoutServerInput;
    containers?: Prisma.ContainerCreateNestedManyWithoutServerInput;
    events?: Prisma.EventCreateNestedManyWithoutServerInput;
};
export type ServerUncheckedCreateWithoutUserInput = {
    id?: number;
    uuid: string;
    name: string;
    environment: string;
    hostname: string;
    os?: string | null;
    arch?: string | null;
    apiKeyId: number;
    lastSeenAt?: Date | string | null;
    agentVersion?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    snapshots?: Prisma.ServerSnapshotUncheckedCreateNestedManyWithoutServerInput;
    metrics?: Prisma.ServerMetricUncheckedCreateNestedManyWithoutServerInput;
    containers?: Prisma.ContainerUncheckedCreateNestedManyWithoutServerInput;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutServerInput;
};
export type ServerCreateOrConnectWithoutUserInput = {
    where: Prisma.ServerWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServerCreateWithoutUserInput, Prisma.ServerUncheckedCreateWithoutUserInput>;
};
export type ServerCreateManyUserInputEnvelope = {
    data: Prisma.ServerCreateManyUserInput | Prisma.ServerCreateManyUserInput[];
    skipDuplicates?: boolean;
};
export type ServerUpsertWithWhereUniqueWithoutUserInput = {
    where: Prisma.ServerWhereUniqueInput;
    update: Prisma.XOR<Prisma.ServerUpdateWithoutUserInput, Prisma.ServerUncheckedUpdateWithoutUserInput>;
    create: Prisma.XOR<Prisma.ServerCreateWithoutUserInput, Prisma.ServerUncheckedCreateWithoutUserInput>;
};
export type ServerUpdateWithWhereUniqueWithoutUserInput = {
    where: Prisma.ServerWhereUniqueInput;
    data: Prisma.XOR<Prisma.ServerUpdateWithoutUserInput, Prisma.ServerUncheckedUpdateWithoutUserInput>;
};
export type ServerUpdateManyWithWhereWithoutUserInput = {
    where: Prisma.ServerScalarWhereInput;
    data: Prisma.XOR<Prisma.ServerUpdateManyMutationInput, Prisma.ServerUncheckedUpdateManyWithoutUserInput>;
};
export type ServerScalarWhereInput = {
    AND?: Prisma.ServerScalarWhereInput | Prisma.ServerScalarWhereInput[];
    OR?: Prisma.ServerScalarWhereInput[];
    NOT?: Prisma.ServerScalarWhereInput | Prisma.ServerScalarWhereInput[];
    id?: Prisma.IntFilter<"Server"> | number;
    uuid?: Prisma.StringFilter<"Server"> | string;
    name?: Prisma.StringFilter<"Server"> | string;
    environment?: Prisma.StringFilter<"Server"> | string;
    hostname?: Prisma.StringFilter<"Server"> | string;
    os?: Prisma.StringNullableFilter<"Server"> | string | null;
    arch?: Prisma.StringNullableFilter<"Server"> | string | null;
    userId?: Prisma.IntFilter<"Server"> | number;
    apiKeyId?: Prisma.IntFilter<"Server"> | number;
    lastSeenAt?: Prisma.DateTimeNullableFilter<"Server"> | Date | string | null;
    agentVersion?: Prisma.StringNullableFilter<"Server"> | string | null;
    created_at?: Prisma.DateTimeFilter<"Server"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"Server"> | Date | string;
};
export type ServerCreateWithoutApiKeyInput = {
    uuid: string;
    name: string;
    environment: string;
    hostname: string;
    os?: string | null;
    arch?: string | null;
    lastSeenAt?: Date | string | null;
    agentVersion?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutServersInput;
    snapshots?: Prisma.ServerSnapshotCreateNestedManyWithoutServerInput;
    metrics?: Prisma.ServerMetricCreateNestedManyWithoutServerInput;
    containers?: Prisma.ContainerCreateNestedManyWithoutServerInput;
    events?: Prisma.EventCreateNestedManyWithoutServerInput;
};
export type ServerUncheckedCreateWithoutApiKeyInput = {
    id?: number;
    uuid: string;
    name: string;
    environment: string;
    hostname: string;
    os?: string | null;
    arch?: string | null;
    userId: number;
    lastSeenAt?: Date | string | null;
    agentVersion?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    snapshots?: Prisma.ServerSnapshotUncheckedCreateNestedManyWithoutServerInput;
    metrics?: Prisma.ServerMetricUncheckedCreateNestedManyWithoutServerInput;
    containers?: Prisma.ContainerUncheckedCreateNestedManyWithoutServerInput;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutServerInput;
};
export type ServerCreateOrConnectWithoutApiKeyInput = {
    where: Prisma.ServerWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServerCreateWithoutApiKeyInput, Prisma.ServerUncheckedCreateWithoutApiKeyInput>;
};
export type ServerCreateManyApiKeyInputEnvelope = {
    data: Prisma.ServerCreateManyApiKeyInput | Prisma.ServerCreateManyApiKeyInput[];
    skipDuplicates?: boolean;
};
export type ServerUpsertWithWhereUniqueWithoutApiKeyInput = {
    where: Prisma.ServerWhereUniqueInput;
    update: Prisma.XOR<Prisma.ServerUpdateWithoutApiKeyInput, Prisma.ServerUncheckedUpdateWithoutApiKeyInput>;
    create: Prisma.XOR<Prisma.ServerCreateWithoutApiKeyInput, Prisma.ServerUncheckedCreateWithoutApiKeyInput>;
};
export type ServerUpdateWithWhereUniqueWithoutApiKeyInput = {
    where: Prisma.ServerWhereUniqueInput;
    data: Prisma.XOR<Prisma.ServerUpdateWithoutApiKeyInput, Prisma.ServerUncheckedUpdateWithoutApiKeyInput>;
};
export type ServerUpdateManyWithWhereWithoutApiKeyInput = {
    where: Prisma.ServerScalarWhereInput;
    data: Prisma.XOR<Prisma.ServerUpdateManyMutationInput, Prisma.ServerUncheckedUpdateManyWithoutApiKeyInput>;
};
export type ServerCreateWithoutSnapshotsInput = {
    uuid: string;
    name: string;
    environment: string;
    hostname: string;
    os?: string | null;
    arch?: string | null;
    lastSeenAt?: Date | string | null;
    agentVersion?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutServersInput;
    apiKey: Prisma.ApiKeyCreateNestedOneWithoutServersInput;
    metrics?: Prisma.ServerMetricCreateNestedManyWithoutServerInput;
    containers?: Prisma.ContainerCreateNestedManyWithoutServerInput;
    events?: Prisma.EventCreateNestedManyWithoutServerInput;
};
export type ServerUncheckedCreateWithoutSnapshotsInput = {
    id?: number;
    uuid: string;
    name: string;
    environment: string;
    hostname: string;
    os?: string | null;
    arch?: string | null;
    userId: number;
    apiKeyId: number;
    lastSeenAt?: Date | string | null;
    agentVersion?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    metrics?: Prisma.ServerMetricUncheckedCreateNestedManyWithoutServerInput;
    containers?: Prisma.ContainerUncheckedCreateNestedManyWithoutServerInput;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutServerInput;
};
export type ServerCreateOrConnectWithoutSnapshotsInput = {
    where: Prisma.ServerWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServerCreateWithoutSnapshotsInput, Prisma.ServerUncheckedCreateWithoutSnapshotsInput>;
};
export type ServerUpsertWithoutSnapshotsInput = {
    update: Prisma.XOR<Prisma.ServerUpdateWithoutSnapshotsInput, Prisma.ServerUncheckedUpdateWithoutSnapshotsInput>;
    create: Prisma.XOR<Prisma.ServerCreateWithoutSnapshotsInput, Prisma.ServerUncheckedCreateWithoutSnapshotsInput>;
    where?: Prisma.ServerWhereInput;
};
export type ServerUpdateToOneWithWhereWithoutSnapshotsInput = {
    where?: Prisma.ServerWhereInput;
    data: Prisma.XOR<Prisma.ServerUpdateWithoutSnapshotsInput, Prisma.ServerUncheckedUpdateWithoutSnapshotsInput>;
};
export type ServerUpdateWithoutSnapshotsInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    environment?: Prisma.StringFieldUpdateOperationsInput | string;
    hostname?: Prisma.StringFieldUpdateOperationsInput | string;
    os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    arch?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    agentVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutServersNestedInput;
    apiKey?: Prisma.ApiKeyUpdateOneRequiredWithoutServersNestedInput;
    metrics?: Prisma.ServerMetricUpdateManyWithoutServerNestedInput;
    containers?: Prisma.ContainerUpdateManyWithoutServerNestedInput;
    events?: Prisma.EventUpdateManyWithoutServerNestedInput;
};
export type ServerUncheckedUpdateWithoutSnapshotsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    environment?: Prisma.StringFieldUpdateOperationsInput | string;
    hostname?: Prisma.StringFieldUpdateOperationsInput | string;
    os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    arch?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    apiKeyId?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    agentVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    metrics?: Prisma.ServerMetricUncheckedUpdateManyWithoutServerNestedInput;
    containers?: Prisma.ContainerUncheckedUpdateManyWithoutServerNestedInput;
    events?: Prisma.EventUncheckedUpdateManyWithoutServerNestedInput;
};
export type ServerCreateWithoutMetricsInput = {
    uuid: string;
    name: string;
    environment: string;
    hostname: string;
    os?: string | null;
    arch?: string | null;
    lastSeenAt?: Date | string | null;
    agentVersion?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutServersInput;
    apiKey: Prisma.ApiKeyCreateNestedOneWithoutServersInput;
    snapshots?: Prisma.ServerSnapshotCreateNestedManyWithoutServerInput;
    containers?: Prisma.ContainerCreateNestedManyWithoutServerInput;
    events?: Prisma.EventCreateNestedManyWithoutServerInput;
};
export type ServerUncheckedCreateWithoutMetricsInput = {
    id?: number;
    uuid: string;
    name: string;
    environment: string;
    hostname: string;
    os?: string | null;
    arch?: string | null;
    userId: number;
    apiKeyId: number;
    lastSeenAt?: Date | string | null;
    agentVersion?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    snapshots?: Prisma.ServerSnapshotUncheckedCreateNestedManyWithoutServerInput;
    containers?: Prisma.ContainerUncheckedCreateNestedManyWithoutServerInput;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutServerInput;
};
export type ServerCreateOrConnectWithoutMetricsInput = {
    where: Prisma.ServerWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServerCreateWithoutMetricsInput, Prisma.ServerUncheckedCreateWithoutMetricsInput>;
};
export type ServerUpsertWithoutMetricsInput = {
    update: Prisma.XOR<Prisma.ServerUpdateWithoutMetricsInput, Prisma.ServerUncheckedUpdateWithoutMetricsInput>;
    create: Prisma.XOR<Prisma.ServerCreateWithoutMetricsInput, Prisma.ServerUncheckedCreateWithoutMetricsInput>;
    where?: Prisma.ServerWhereInput;
};
export type ServerUpdateToOneWithWhereWithoutMetricsInput = {
    where?: Prisma.ServerWhereInput;
    data: Prisma.XOR<Prisma.ServerUpdateWithoutMetricsInput, Prisma.ServerUncheckedUpdateWithoutMetricsInput>;
};
export type ServerUpdateWithoutMetricsInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    environment?: Prisma.StringFieldUpdateOperationsInput | string;
    hostname?: Prisma.StringFieldUpdateOperationsInput | string;
    os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    arch?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    agentVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutServersNestedInput;
    apiKey?: Prisma.ApiKeyUpdateOneRequiredWithoutServersNestedInput;
    snapshots?: Prisma.ServerSnapshotUpdateManyWithoutServerNestedInput;
    containers?: Prisma.ContainerUpdateManyWithoutServerNestedInput;
    events?: Prisma.EventUpdateManyWithoutServerNestedInput;
};
export type ServerUncheckedUpdateWithoutMetricsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    environment?: Prisma.StringFieldUpdateOperationsInput | string;
    hostname?: Prisma.StringFieldUpdateOperationsInput | string;
    os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    arch?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    apiKeyId?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    agentVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    snapshots?: Prisma.ServerSnapshotUncheckedUpdateManyWithoutServerNestedInput;
    containers?: Prisma.ContainerUncheckedUpdateManyWithoutServerNestedInput;
    events?: Prisma.EventUncheckedUpdateManyWithoutServerNestedInput;
};
export type ServerCreateWithoutContainersInput = {
    uuid: string;
    name: string;
    environment: string;
    hostname: string;
    os?: string | null;
    arch?: string | null;
    lastSeenAt?: Date | string | null;
    agentVersion?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutServersInput;
    apiKey: Prisma.ApiKeyCreateNestedOneWithoutServersInput;
    snapshots?: Prisma.ServerSnapshotCreateNestedManyWithoutServerInput;
    metrics?: Prisma.ServerMetricCreateNestedManyWithoutServerInput;
    events?: Prisma.EventCreateNestedManyWithoutServerInput;
};
export type ServerUncheckedCreateWithoutContainersInput = {
    id?: number;
    uuid: string;
    name: string;
    environment: string;
    hostname: string;
    os?: string | null;
    arch?: string | null;
    userId: number;
    apiKeyId: number;
    lastSeenAt?: Date | string | null;
    agentVersion?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    snapshots?: Prisma.ServerSnapshotUncheckedCreateNestedManyWithoutServerInput;
    metrics?: Prisma.ServerMetricUncheckedCreateNestedManyWithoutServerInput;
    events?: Prisma.EventUncheckedCreateNestedManyWithoutServerInput;
};
export type ServerCreateOrConnectWithoutContainersInput = {
    where: Prisma.ServerWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServerCreateWithoutContainersInput, Prisma.ServerUncheckedCreateWithoutContainersInput>;
};
export type ServerUpsertWithoutContainersInput = {
    update: Prisma.XOR<Prisma.ServerUpdateWithoutContainersInput, Prisma.ServerUncheckedUpdateWithoutContainersInput>;
    create: Prisma.XOR<Prisma.ServerCreateWithoutContainersInput, Prisma.ServerUncheckedCreateWithoutContainersInput>;
    where?: Prisma.ServerWhereInput;
};
export type ServerUpdateToOneWithWhereWithoutContainersInput = {
    where?: Prisma.ServerWhereInput;
    data: Prisma.XOR<Prisma.ServerUpdateWithoutContainersInput, Prisma.ServerUncheckedUpdateWithoutContainersInput>;
};
export type ServerUpdateWithoutContainersInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    environment?: Prisma.StringFieldUpdateOperationsInput | string;
    hostname?: Prisma.StringFieldUpdateOperationsInput | string;
    os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    arch?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    agentVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutServersNestedInput;
    apiKey?: Prisma.ApiKeyUpdateOneRequiredWithoutServersNestedInput;
    snapshots?: Prisma.ServerSnapshotUpdateManyWithoutServerNestedInput;
    metrics?: Prisma.ServerMetricUpdateManyWithoutServerNestedInput;
    events?: Prisma.EventUpdateManyWithoutServerNestedInput;
};
export type ServerUncheckedUpdateWithoutContainersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    environment?: Prisma.StringFieldUpdateOperationsInput | string;
    hostname?: Prisma.StringFieldUpdateOperationsInput | string;
    os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    arch?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    apiKeyId?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    agentVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    snapshots?: Prisma.ServerSnapshotUncheckedUpdateManyWithoutServerNestedInput;
    metrics?: Prisma.ServerMetricUncheckedUpdateManyWithoutServerNestedInput;
    events?: Prisma.EventUncheckedUpdateManyWithoutServerNestedInput;
};
export type ServerCreateWithoutEventsInput = {
    uuid: string;
    name: string;
    environment: string;
    hostname: string;
    os?: string | null;
    arch?: string | null;
    lastSeenAt?: Date | string | null;
    agentVersion?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    user: Prisma.UserCreateNestedOneWithoutServersInput;
    apiKey: Prisma.ApiKeyCreateNestedOneWithoutServersInput;
    snapshots?: Prisma.ServerSnapshotCreateNestedManyWithoutServerInput;
    metrics?: Prisma.ServerMetricCreateNestedManyWithoutServerInput;
    containers?: Prisma.ContainerCreateNestedManyWithoutServerInput;
};
export type ServerUncheckedCreateWithoutEventsInput = {
    id?: number;
    uuid: string;
    name: string;
    environment: string;
    hostname: string;
    os?: string | null;
    arch?: string | null;
    userId: number;
    apiKeyId: number;
    lastSeenAt?: Date | string | null;
    agentVersion?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
    snapshots?: Prisma.ServerSnapshotUncheckedCreateNestedManyWithoutServerInput;
    metrics?: Prisma.ServerMetricUncheckedCreateNestedManyWithoutServerInput;
    containers?: Prisma.ContainerUncheckedCreateNestedManyWithoutServerInput;
};
export type ServerCreateOrConnectWithoutEventsInput = {
    where: Prisma.ServerWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServerCreateWithoutEventsInput, Prisma.ServerUncheckedCreateWithoutEventsInput>;
};
export type ServerUpsertWithoutEventsInput = {
    update: Prisma.XOR<Prisma.ServerUpdateWithoutEventsInput, Prisma.ServerUncheckedUpdateWithoutEventsInput>;
    create: Prisma.XOR<Prisma.ServerCreateWithoutEventsInput, Prisma.ServerUncheckedCreateWithoutEventsInput>;
    where?: Prisma.ServerWhereInput;
};
export type ServerUpdateToOneWithWhereWithoutEventsInput = {
    where?: Prisma.ServerWhereInput;
    data: Prisma.XOR<Prisma.ServerUpdateWithoutEventsInput, Prisma.ServerUncheckedUpdateWithoutEventsInput>;
};
export type ServerUpdateWithoutEventsInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    environment?: Prisma.StringFieldUpdateOperationsInput | string;
    hostname?: Prisma.StringFieldUpdateOperationsInput | string;
    os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    arch?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    agentVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutServersNestedInput;
    apiKey?: Prisma.ApiKeyUpdateOneRequiredWithoutServersNestedInput;
    snapshots?: Prisma.ServerSnapshotUpdateManyWithoutServerNestedInput;
    metrics?: Prisma.ServerMetricUpdateManyWithoutServerNestedInput;
    containers?: Prisma.ContainerUpdateManyWithoutServerNestedInput;
};
export type ServerUncheckedUpdateWithoutEventsInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    environment?: Prisma.StringFieldUpdateOperationsInput | string;
    hostname?: Prisma.StringFieldUpdateOperationsInput | string;
    os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    arch?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    apiKeyId?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    agentVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    snapshots?: Prisma.ServerSnapshotUncheckedUpdateManyWithoutServerNestedInput;
    metrics?: Prisma.ServerMetricUncheckedUpdateManyWithoutServerNestedInput;
    containers?: Prisma.ContainerUncheckedUpdateManyWithoutServerNestedInput;
};
export type ServerCreateManyUserInput = {
    id?: number;
    uuid: string;
    name: string;
    environment: string;
    hostname: string;
    os?: string | null;
    arch?: string | null;
    apiKeyId: number;
    lastSeenAt?: Date | string | null;
    agentVersion?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ServerUpdateWithoutUserInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    environment?: Prisma.StringFieldUpdateOperationsInput | string;
    hostname?: Prisma.StringFieldUpdateOperationsInput | string;
    os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    arch?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    agentVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    apiKey?: Prisma.ApiKeyUpdateOneRequiredWithoutServersNestedInput;
    snapshots?: Prisma.ServerSnapshotUpdateManyWithoutServerNestedInput;
    metrics?: Prisma.ServerMetricUpdateManyWithoutServerNestedInput;
    containers?: Prisma.ContainerUpdateManyWithoutServerNestedInput;
    events?: Prisma.EventUpdateManyWithoutServerNestedInput;
};
export type ServerUncheckedUpdateWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    environment?: Prisma.StringFieldUpdateOperationsInput | string;
    hostname?: Prisma.StringFieldUpdateOperationsInput | string;
    os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    arch?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    apiKeyId?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    agentVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    snapshots?: Prisma.ServerSnapshotUncheckedUpdateManyWithoutServerNestedInput;
    metrics?: Prisma.ServerMetricUncheckedUpdateManyWithoutServerNestedInput;
    containers?: Prisma.ContainerUncheckedUpdateManyWithoutServerNestedInput;
    events?: Prisma.EventUncheckedUpdateManyWithoutServerNestedInput;
};
export type ServerUncheckedUpdateManyWithoutUserInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    environment?: Prisma.StringFieldUpdateOperationsInput | string;
    hostname?: Prisma.StringFieldUpdateOperationsInput | string;
    os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    arch?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    apiKeyId?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    agentVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServerCreateManyApiKeyInput = {
    id?: number;
    uuid: string;
    name: string;
    environment: string;
    hostname: string;
    os?: string | null;
    arch?: string | null;
    userId: number;
    lastSeenAt?: Date | string | null;
    agentVersion?: string | null;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type ServerUpdateWithoutApiKeyInput = {
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    environment?: Prisma.StringFieldUpdateOperationsInput | string;
    hostname?: Prisma.StringFieldUpdateOperationsInput | string;
    os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    arch?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    agentVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    user?: Prisma.UserUpdateOneRequiredWithoutServersNestedInput;
    snapshots?: Prisma.ServerSnapshotUpdateManyWithoutServerNestedInput;
    metrics?: Prisma.ServerMetricUpdateManyWithoutServerNestedInput;
    containers?: Prisma.ContainerUpdateManyWithoutServerNestedInput;
    events?: Prisma.EventUpdateManyWithoutServerNestedInput;
};
export type ServerUncheckedUpdateWithoutApiKeyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    environment?: Prisma.StringFieldUpdateOperationsInput | string;
    hostname?: Prisma.StringFieldUpdateOperationsInput | string;
    os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    arch?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    agentVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    snapshots?: Prisma.ServerSnapshotUncheckedUpdateManyWithoutServerNestedInput;
    metrics?: Prisma.ServerMetricUncheckedUpdateManyWithoutServerNestedInput;
    containers?: Prisma.ContainerUncheckedUpdateManyWithoutServerNestedInput;
    events?: Prisma.EventUncheckedUpdateManyWithoutServerNestedInput;
};
export type ServerUncheckedUpdateManyWithoutApiKeyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    uuid?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    environment?: Prisma.StringFieldUpdateOperationsInput | string;
    hostname?: Prisma.StringFieldUpdateOperationsInput | string;
    os?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    arch?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    userId?: Prisma.IntFieldUpdateOperationsInput | number;
    lastSeenAt?: Prisma.NullableDateTimeFieldUpdateOperationsInput | Date | string | null;
    agentVersion?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServerCountOutputType = {
    snapshots: number;
    metrics: number;
    containers: number;
    events: number;
};
export type ServerCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    snapshots?: boolean | ServerCountOutputTypeCountSnapshotsArgs;
    metrics?: boolean | ServerCountOutputTypeCountMetricsArgs;
    containers?: boolean | ServerCountOutputTypeCountContainersArgs;
    events?: boolean | ServerCountOutputTypeCountEventsArgs;
};
export type ServerCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerCountOutputTypeSelect<ExtArgs> | null;
};
export type ServerCountOutputTypeCountSnapshotsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServerSnapshotWhereInput;
};
export type ServerCountOutputTypeCountMetricsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServerMetricWhereInput;
};
export type ServerCountOutputTypeCountContainersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContainerWhereInput;
};
export type ServerCountOutputTypeCountEventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventWhereInput;
};
export type ServerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    uuid?: boolean;
    name?: boolean;
    environment?: boolean;
    hostname?: boolean;
    os?: boolean;
    arch?: boolean;
    userId?: boolean;
    apiKeyId?: boolean;
    lastSeenAt?: boolean;
    agentVersion?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    apiKey?: boolean | Prisma.ApiKeyDefaultArgs<ExtArgs>;
    snapshots?: boolean | Prisma.Server$snapshotsArgs<ExtArgs>;
    metrics?: boolean | Prisma.Server$metricsArgs<ExtArgs>;
    containers?: boolean | Prisma.Server$containersArgs<ExtArgs>;
    events?: boolean | Prisma.Server$eventsArgs<ExtArgs>;
    _count?: boolean | Prisma.ServerCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["server"]>;
export type ServerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    uuid?: boolean;
    name?: boolean;
    environment?: boolean;
    hostname?: boolean;
    os?: boolean;
    arch?: boolean;
    userId?: boolean;
    apiKeyId?: boolean;
    lastSeenAt?: boolean;
    agentVersion?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    apiKey?: boolean | Prisma.ApiKeyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["server"]>;
export type ServerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    uuid?: boolean;
    name?: boolean;
    environment?: boolean;
    hostname?: boolean;
    os?: boolean;
    arch?: boolean;
    userId?: boolean;
    apiKeyId?: boolean;
    lastSeenAt?: boolean;
    agentVersion?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    apiKey?: boolean | Prisma.ApiKeyDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["server"]>;
export type ServerSelectScalar = {
    id?: boolean;
    uuid?: boolean;
    name?: boolean;
    environment?: boolean;
    hostname?: boolean;
    os?: boolean;
    arch?: boolean;
    userId?: boolean;
    apiKeyId?: boolean;
    lastSeenAt?: boolean;
    agentVersion?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type ServerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "uuid" | "name" | "environment" | "hostname" | "os" | "arch" | "userId" | "apiKeyId" | "lastSeenAt" | "agentVersion" | "created_at" | "updated_at", ExtArgs["result"]["server"]>;
export type ServerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    apiKey?: boolean | Prisma.ApiKeyDefaultArgs<ExtArgs>;
    snapshots?: boolean | Prisma.Server$snapshotsArgs<ExtArgs>;
    metrics?: boolean | Prisma.Server$metricsArgs<ExtArgs>;
    containers?: boolean | Prisma.Server$containersArgs<ExtArgs>;
    events?: boolean | Prisma.Server$eventsArgs<ExtArgs>;
    _count?: boolean | Prisma.ServerCountOutputTypeDefaultArgs<ExtArgs>;
};
export type ServerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    apiKey?: boolean | Prisma.ApiKeyDefaultArgs<ExtArgs>;
};
export type ServerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    user?: boolean | Prisma.UserDefaultArgs<ExtArgs>;
    apiKey?: boolean | Prisma.ApiKeyDefaultArgs<ExtArgs>;
};
export type $ServerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Server";
    objects: {
        user: Prisma.$UserPayload<ExtArgs>;
        apiKey: Prisma.$ApiKeyPayload<ExtArgs>;
        snapshots: Prisma.$ServerSnapshotPayload<ExtArgs>[];
        metrics: Prisma.$ServerMetricPayload<ExtArgs>[];
        containers: Prisma.$ContainerPayload<ExtArgs>[];
        events: Prisma.$EventPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        uuid: string;
        name: string;
        environment: string;
        hostname: string;
        os: string | null;
        arch: string | null;
        userId: number;
        apiKeyId: number;
        lastSeenAt: Date | null;
        agentVersion: string | null;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["server"]>;
    composites: {};
};
export type ServerGetPayload<S extends boolean | null | undefined | ServerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ServerPayload, S>;
export type ServerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ServerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ServerCountAggregateInputType | true;
};
export interface ServerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Server'];
        meta: {
            name: 'Server';
        };
    };
    findUnique<T extends ServerFindUniqueArgs>(args: Prisma.SelectSubset<T, ServerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ServerClient<runtime.Types.Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ServerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ServerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ServerClient<runtime.Types.Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ServerFindFirstArgs>(args?: Prisma.SelectSubset<T, ServerFindFirstArgs<ExtArgs>>): Prisma.Prisma__ServerClient<runtime.Types.Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ServerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ServerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ServerClient<runtime.Types.Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ServerFindManyArgs>(args?: Prisma.SelectSubset<T, ServerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ServerCreateArgs>(args: Prisma.SelectSubset<T, ServerCreateArgs<ExtArgs>>): Prisma.Prisma__ServerClient<runtime.Types.Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ServerCreateManyArgs>(args?: Prisma.SelectSubset<T, ServerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ServerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ServerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ServerDeleteArgs>(args: Prisma.SelectSubset<T, ServerDeleteArgs<ExtArgs>>): Prisma.Prisma__ServerClient<runtime.Types.Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ServerUpdateArgs>(args: Prisma.SelectSubset<T, ServerUpdateArgs<ExtArgs>>): Prisma.Prisma__ServerClient<runtime.Types.Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ServerDeleteManyArgs>(args?: Prisma.SelectSubset<T, ServerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ServerUpdateManyArgs>(args: Prisma.SelectSubset<T, ServerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ServerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ServerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ServerUpsertArgs>(args: Prisma.SelectSubset<T, ServerUpsertArgs<ExtArgs>>): Prisma.Prisma__ServerClient<runtime.Types.Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ServerCountArgs>(args?: Prisma.Subset<T, ServerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ServerCountAggregateOutputType> : number>;
    aggregate<T extends ServerAggregateArgs>(args: Prisma.Subset<T, ServerAggregateArgs>): Prisma.PrismaPromise<GetServerAggregateType<T>>;
    groupBy<T extends ServerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ServerGroupByArgs['orderBy'];
    } : {
        orderBy?: ServerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ServerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ServerFieldRefs;
}
export interface Prisma__ServerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    user<T extends Prisma.UserDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.UserDefaultArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    apiKey<T extends Prisma.ApiKeyDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ApiKeyDefaultArgs<ExtArgs>>): Prisma.Prisma__ApiKeyClient<runtime.Types.Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    snapshots<T extends Prisma.Server$snapshotsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Server$snapshotsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServerSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    metrics<T extends Prisma.Server$metricsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Server$metricsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServerMetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    containers<T extends Prisma.Server$containersArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Server$containersArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    events<T extends Prisma.Server$eventsArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.Server$eventsArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ServerFieldRefs {
    readonly id: Prisma.FieldRef<"Server", 'Int'>;
    readonly uuid: Prisma.FieldRef<"Server", 'String'>;
    readonly name: Prisma.FieldRef<"Server", 'String'>;
    readonly environment: Prisma.FieldRef<"Server", 'String'>;
    readonly hostname: Prisma.FieldRef<"Server", 'String'>;
    readonly os: Prisma.FieldRef<"Server", 'String'>;
    readonly arch: Prisma.FieldRef<"Server", 'String'>;
    readonly userId: Prisma.FieldRef<"Server", 'Int'>;
    readonly apiKeyId: Prisma.FieldRef<"Server", 'Int'>;
    readonly lastSeenAt: Prisma.FieldRef<"Server", 'DateTime'>;
    readonly agentVersion: Prisma.FieldRef<"Server", 'String'>;
    readonly created_at: Prisma.FieldRef<"Server", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"Server", 'DateTime'>;
}
export type ServerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerSelect<ExtArgs> | null;
    omit?: Prisma.ServerOmit<ExtArgs> | null;
    include?: Prisma.ServerInclude<ExtArgs> | null;
    where: Prisma.ServerWhereUniqueInput;
};
export type ServerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerSelect<ExtArgs> | null;
    omit?: Prisma.ServerOmit<ExtArgs> | null;
    include?: Prisma.ServerInclude<ExtArgs> | null;
    where: Prisma.ServerWhereUniqueInput;
};
export type ServerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ServerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ServerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ServerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerSelect<ExtArgs> | null;
    omit?: Prisma.ServerOmit<ExtArgs> | null;
    include?: Prisma.ServerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ServerCreateInput, Prisma.ServerUncheckedCreateInput>;
};
export type ServerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ServerCreateManyInput | Prisma.ServerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ServerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ServerOmit<ExtArgs> | null;
    data: Prisma.ServerCreateManyInput | Prisma.ServerCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ServerIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ServerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerSelect<ExtArgs> | null;
    omit?: Prisma.ServerOmit<ExtArgs> | null;
    include?: Prisma.ServerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ServerUpdateInput, Prisma.ServerUncheckedUpdateInput>;
    where: Prisma.ServerWhereUniqueInput;
};
export type ServerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ServerUpdateManyMutationInput, Prisma.ServerUncheckedUpdateManyInput>;
    where?: Prisma.ServerWhereInput;
    limit?: number;
};
export type ServerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ServerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ServerUpdateManyMutationInput, Prisma.ServerUncheckedUpdateManyInput>;
    where?: Prisma.ServerWhereInput;
    limit?: number;
    include?: Prisma.ServerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ServerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerSelect<ExtArgs> | null;
    omit?: Prisma.ServerOmit<ExtArgs> | null;
    include?: Prisma.ServerInclude<ExtArgs> | null;
    where: Prisma.ServerWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServerCreateInput, Prisma.ServerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ServerUpdateInput, Prisma.ServerUncheckedUpdateInput>;
};
export type ServerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerSelect<ExtArgs> | null;
    omit?: Prisma.ServerOmit<ExtArgs> | null;
    include?: Prisma.ServerInclude<ExtArgs> | null;
    where: Prisma.ServerWhereUniqueInput;
};
export type ServerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServerWhereInput;
    limit?: number;
};
export type Server$snapshotsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerSnapshotSelect<ExtArgs> | null;
    omit?: Prisma.ServerSnapshotOmit<ExtArgs> | null;
    include?: Prisma.ServerSnapshotInclude<ExtArgs> | null;
    where?: Prisma.ServerSnapshotWhereInput;
    orderBy?: Prisma.ServerSnapshotOrderByWithRelationInput | Prisma.ServerSnapshotOrderByWithRelationInput[];
    cursor?: Prisma.ServerSnapshotWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ServerSnapshotScalarFieldEnum | Prisma.ServerSnapshotScalarFieldEnum[];
};
export type Server$metricsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerMetricSelect<ExtArgs> | null;
    omit?: Prisma.ServerMetricOmit<ExtArgs> | null;
    include?: Prisma.ServerMetricInclude<ExtArgs> | null;
    where?: Prisma.ServerMetricWhereInput;
    orderBy?: Prisma.ServerMetricOrderByWithRelationInput | Prisma.ServerMetricOrderByWithRelationInput[];
    cursor?: Prisma.ServerMetricWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ServerMetricScalarFieldEnum | Prisma.ServerMetricScalarFieldEnum[];
};
export type Server$containersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContainerSelect<ExtArgs> | null;
    omit?: Prisma.ContainerOmit<ExtArgs> | null;
    include?: Prisma.ContainerInclude<ExtArgs> | null;
    where?: Prisma.ContainerWhereInput;
    orderBy?: Prisma.ContainerOrderByWithRelationInput | Prisma.ContainerOrderByWithRelationInput[];
    cursor?: Prisma.ContainerWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.ContainerScalarFieldEnum | Prisma.ContainerScalarFieldEnum[];
};
export type Server$eventsArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    where?: Prisma.EventWhereInput;
    orderBy?: Prisma.EventOrderByWithRelationInput | Prisma.EventOrderByWithRelationInput[];
    cursor?: Prisma.EventWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.EventScalarFieldEnum | Prisma.EventScalarFieldEnum[];
};
export type ServerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerSelect<ExtArgs> | null;
    omit?: Prisma.ServerOmit<ExtArgs> | null;
    include?: Prisma.ServerInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Server.d.ts.map