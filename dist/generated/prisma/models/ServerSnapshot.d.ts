import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ServerSnapshotModel = runtime.Types.Result.DefaultSelection<Prisma.$ServerSnapshotPayload>;
export type AggregateServerSnapshot = {
    _count: ServerSnapshotCountAggregateOutputType | null;
    _avg: ServerSnapshotAvgAggregateOutputType | null;
    _sum: ServerSnapshotSumAggregateOutputType | null;
    _min: ServerSnapshotMinAggregateOutputType | null;
    _max: ServerSnapshotMaxAggregateOutputType | null;
};
export type ServerSnapshotAvgAggregateOutputType = {
    id: number | null;
    serverId: number | null;
    cpuPercent: number | null;
    memoryPercent: number | null;
    diskPercent: number | null;
    containerCount: number | null;
};
export type ServerSnapshotSumAggregateOutputType = {
    id: number | null;
    serverId: number | null;
    cpuPercent: number | null;
    memoryPercent: number | null;
    diskPercent: number | null;
    containerCount: number | null;
};
export type ServerSnapshotMinAggregateOutputType = {
    id: number | null;
    serverId: number | null;
    cpuPercent: number | null;
    memoryPercent: number | null;
    diskPercent: number | null;
    containerCount: number | null;
    updated_at: Date | null;
};
export type ServerSnapshotMaxAggregateOutputType = {
    id: number | null;
    serverId: number | null;
    cpuPercent: number | null;
    memoryPercent: number | null;
    diskPercent: number | null;
    containerCount: number | null;
    updated_at: Date | null;
};
export type ServerSnapshotCountAggregateOutputType = {
    id: number;
    serverId: number;
    cpuPercent: number;
    memoryPercent: number;
    diskPercent: number;
    containerCount: number;
    updated_at: number;
    _all: number;
};
export type ServerSnapshotAvgAggregateInputType = {
    id?: true;
    serverId?: true;
    cpuPercent?: true;
    memoryPercent?: true;
    diskPercent?: true;
    containerCount?: true;
};
export type ServerSnapshotSumAggregateInputType = {
    id?: true;
    serverId?: true;
    cpuPercent?: true;
    memoryPercent?: true;
    diskPercent?: true;
    containerCount?: true;
};
export type ServerSnapshotMinAggregateInputType = {
    id?: true;
    serverId?: true;
    cpuPercent?: true;
    memoryPercent?: true;
    diskPercent?: true;
    containerCount?: true;
    updated_at?: true;
};
export type ServerSnapshotMaxAggregateInputType = {
    id?: true;
    serverId?: true;
    cpuPercent?: true;
    memoryPercent?: true;
    diskPercent?: true;
    containerCount?: true;
    updated_at?: true;
};
export type ServerSnapshotCountAggregateInputType = {
    id?: true;
    serverId?: true;
    cpuPercent?: true;
    memoryPercent?: true;
    diskPercent?: true;
    containerCount?: true;
    updated_at?: true;
    _all?: true;
};
export type ServerSnapshotAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServerSnapshotWhereInput;
    orderBy?: Prisma.ServerSnapshotOrderByWithRelationInput | Prisma.ServerSnapshotOrderByWithRelationInput[];
    cursor?: Prisma.ServerSnapshotWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ServerSnapshotCountAggregateInputType;
    _avg?: ServerSnapshotAvgAggregateInputType;
    _sum?: ServerSnapshotSumAggregateInputType;
    _min?: ServerSnapshotMinAggregateInputType;
    _max?: ServerSnapshotMaxAggregateInputType;
};
export type GetServerSnapshotAggregateType<T extends ServerSnapshotAggregateArgs> = {
    [P in keyof T & keyof AggregateServerSnapshot]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateServerSnapshot[P]> : Prisma.GetScalarType<T[P], AggregateServerSnapshot[P]>;
};
export type ServerSnapshotGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServerSnapshotWhereInput;
    orderBy?: Prisma.ServerSnapshotOrderByWithAggregationInput | Prisma.ServerSnapshotOrderByWithAggregationInput[];
    by: Prisma.ServerSnapshotScalarFieldEnum[] | Prisma.ServerSnapshotScalarFieldEnum;
    having?: Prisma.ServerSnapshotScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ServerSnapshotCountAggregateInputType | true;
    _avg?: ServerSnapshotAvgAggregateInputType;
    _sum?: ServerSnapshotSumAggregateInputType;
    _min?: ServerSnapshotMinAggregateInputType;
    _max?: ServerSnapshotMaxAggregateInputType;
};
export type ServerSnapshotGroupByOutputType = {
    id: number;
    serverId: number;
    cpuPercent: number;
    memoryPercent: number;
    diskPercent: number;
    containerCount: number;
    updated_at: Date;
    _count: ServerSnapshotCountAggregateOutputType | null;
    _avg: ServerSnapshotAvgAggregateOutputType | null;
    _sum: ServerSnapshotSumAggregateOutputType | null;
    _min: ServerSnapshotMinAggregateOutputType | null;
    _max: ServerSnapshotMaxAggregateOutputType | null;
};
type GetServerSnapshotGroupByPayload<T extends ServerSnapshotGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ServerSnapshotGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ServerSnapshotGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ServerSnapshotGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ServerSnapshotGroupByOutputType[P]>;
}>>;
export type ServerSnapshotWhereInput = {
    AND?: Prisma.ServerSnapshotWhereInput | Prisma.ServerSnapshotWhereInput[];
    OR?: Prisma.ServerSnapshotWhereInput[];
    NOT?: Prisma.ServerSnapshotWhereInput | Prisma.ServerSnapshotWhereInput[];
    id?: Prisma.IntFilter<"ServerSnapshot"> | number;
    serverId?: Prisma.IntFilter<"ServerSnapshot"> | number;
    cpuPercent?: Prisma.FloatFilter<"ServerSnapshot"> | number;
    memoryPercent?: Prisma.FloatFilter<"ServerSnapshot"> | number;
    diskPercent?: Prisma.FloatFilter<"ServerSnapshot"> | number;
    containerCount?: Prisma.IntFilter<"ServerSnapshot"> | number;
    updated_at?: Prisma.DateTimeFilter<"ServerSnapshot"> | Date | string;
    server?: Prisma.XOR<Prisma.ServerScalarRelationFilter, Prisma.ServerWhereInput>;
};
export type ServerSnapshotOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    serverId?: Prisma.SortOrder;
    cpuPercent?: Prisma.SortOrder;
    memoryPercent?: Prisma.SortOrder;
    diskPercent?: Prisma.SortOrder;
    containerCount?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    server?: Prisma.ServerOrderByWithRelationInput;
};
export type ServerSnapshotWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    serverId?: number;
    AND?: Prisma.ServerSnapshotWhereInput | Prisma.ServerSnapshotWhereInput[];
    OR?: Prisma.ServerSnapshotWhereInput[];
    NOT?: Prisma.ServerSnapshotWhereInput | Prisma.ServerSnapshotWhereInput[];
    cpuPercent?: Prisma.FloatFilter<"ServerSnapshot"> | number;
    memoryPercent?: Prisma.FloatFilter<"ServerSnapshot"> | number;
    diskPercent?: Prisma.FloatFilter<"ServerSnapshot"> | number;
    containerCount?: Prisma.IntFilter<"ServerSnapshot"> | number;
    updated_at?: Prisma.DateTimeFilter<"ServerSnapshot"> | Date | string;
    server?: Prisma.XOR<Prisma.ServerScalarRelationFilter, Prisma.ServerWhereInput>;
}, "id" | "serverId">;
export type ServerSnapshotOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    serverId?: Prisma.SortOrder;
    cpuPercent?: Prisma.SortOrder;
    memoryPercent?: Prisma.SortOrder;
    diskPercent?: Prisma.SortOrder;
    containerCount?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.ServerSnapshotCountOrderByAggregateInput;
    _avg?: Prisma.ServerSnapshotAvgOrderByAggregateInput;
    _max?: Prisma.ServerSnapshotMaxOrderByAggregateInput;
    _min?: Prisma.ServerSnapshotMinOrderByAggregateInput;
    _sum?: Prisma.ServerSnapshotSumOrderByAggregateInput;
};
export type ServerSnapshotScalarWhereWithAggregatesInput = {
    AND?: Prisma.ServerSnapshotScalarWhereWithAggregatesInput | Prisma.ServerSnapshotScalarWhereWithAggregatesInput[];
    OR?: Prisma.ServerSnapshotScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ServerSnapshotScalarWhereWithAggregatesInput | Prisma.ServerSnapshotScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ServerSnapshot"> | number;
    serverId?: Prisma.IntWithAggregatesFilter<"ServerSnapshot"> | number;
    cpuPercent?: Prisma.FloatWithAggregatesFilter<"ServerSnapshot"> | number;
    memoryPercent?: Prisma.FloatWithAggregatesFilter<"ServerSnapshot"> | number;
    diskPercent?: Prisma.FloatWithAggregatesFilter<"ServerSnapshot"> | number;
    containerCount?: Prisma.IntWithAggregatesFilter<"ServerSnapshot"> | number;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"ServerSnapshot"> | Date | string;
};
export type ServerSnapshotCreateInput = {
    cpuPercent: number;
    memoryPercent: number;
    diskPercent: number;
    containerCount: number;
    updated_at?: Date | string;
    server: Prisma.ServerCreateNestedOneWithoutSnapshotsInput;
};
export type ServerSnapshotUncheckedCreateInput = {
    id?: number;
    serverId: number;
    cpuPercent: number;
    memoryPercent: number;
    diskPercent: number;
    containerCount: number;
    updated_at?: Date | string;
};
export type ServerSnapshotUpdateInput = {
    cpuPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    memoryPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    diskPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    containerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    server?: Prisma.ServerUpdateOneRequiredWithoutSnapshotsNestedInput;
};
export type ServerSnapshotUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    serverId?: Prisma.IntFieldUpdateOperationsInput | number;
    cpuPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    memoryPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    diskPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    containerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServerSnapshotCreateManyInput = {
    id?: number;
    serverId: number;
    cpuPercent: number;
    memoryPercent: number;
    diskPercent: number;
    containerCount: number;
    updated_at?: Date | string;
};
export type ServerSnapshotUpdateManyMutationInput = {
    cpuPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    memoryPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    diskPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    containerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServerSnapshotUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    serverId?: Prisma.IntFieldUpdateOperationsInput | number;
    cpuPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    memoryPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    diskPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    containerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServerSnapshotListRelationFilter = {
    every?: Prisma.ServerSnapshotWhereInput;
    some?: Prisma.ServerSnapshotWhereInput;
    none?: Prisma.ServerSnapshotWhereInput;
};
export type ServerSnapshotOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ServerSnapshotCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    serverId?: Prisma.SortOrder;
    cpuPercent?: Prisma.SortOrder;
    memoryPercent?: Prisma.SortOrder;
    diskPercent?: Prisma.SortOrder;
    containerCount?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type ServerSnapshotAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    serverId?: Prisma.SortOrder;
    cpuPercent?: Prisma.SortOrder;
    memoryPercent?: Prisma.SortOrder;
    diskPercent?: Prisma.SortOrder;
    containerCount?: Prisma.SortOrder;
};
export type ServerSnapshotMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    serverId?: Prisma.SortOrder;
    cpuPercent?: Prisma.SortOrder;
    memoryPercent?: Prisma.SortOrder;
    diskPercent?: Prisma.SortOrder;
    containerCount?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type ServerSnapshotMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    serverId?: Prisma.SortOrder;
    cpuPercent?: Prisma.SortOrder;
    memoryPercent?: Prisma.SortOrder;
    diskPercent?: Prisma.SortOrder;
    containerCount?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type ServerSnapshotSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    serverId?: Prisma.SortOrder;
    cpuPercent?: Prisma.SortOrder;
    memoryPercent?: Prisma.SortOrder;
    diskPercent?: Prisma.SortOrder;
    containerCount?: Prisma.SortOrder;
};
export type ServerSnapshotCreateNestedManyWithoutServerInput = {
    create?: Prisma.XOR<Prisma.ServerSnapshotCreateWithoutServerInput, Prisma.ServerSnapshotUncheckedCreateWithoutServerInput> | Prisma.ServerSnapshotCreateWithoutServerInput[] | Prisma.ServerSnapshotUncheckedCreateWithoutServerInput[];
    connectOrCreate?: Prisma.ServerSnapshotCreateOrConnectWithoutServerInput | Prisma.ServerSnapshotCreateOrConnectWithoutServerInput[];
    createMany?: Prisma.ServerSnapshotCreateManyServerInputEnvelope;
    connect?: Prisma.ServerSnapshotWhereUniqueInput | Prisma.ServerSnapshotWhereUniqueInput[];
};
export type ServerSnapshotUncheckedCreateNestedManyWithoutServerInput = {
    create?: Prisma.XOR<Prisma.ServerSnapshotCreateWithoutServerInput, Prisma.ServerSnapshotUncheckedCreateWithoutServerInput> | Prisma.ServerSnapshotCreateWithoutServerInput[] | Prisma.ServerSnapshotUncheckedCreateWithoutServerInput[];
    connectOrCreate?: Prisma.ServerSnapshotCreateOrConnectWithoutServerInput | Prisma.ServerSnapshotCreateOrConnectWithoutServerInput[];
    createMany?: Prisma.ServerSnapshotCreateManyServerInputEnvelope;
    connect?: Prisma.ServerSnapshotWhereUniqueInput | Prisma.ServerSnapshotWhereUniqueInput[];
};
export type ServerSnapshotUpdateManyWithoutServerNestedInput = {
    create?: Prisma.XOR<Prisma.ServerSnapshotCreateWithoutServerInput, Prisma.ServerSnapshotUncheckedCreateWithoutServerInput> | Prisma.ServerSnapshotCreateWithoutServerInput[] | Prisma.ServerSnapshotUncheckedCreateWithoutServerInput[];
    connectOrCreate?: Prisma.ServerSnapshotCreateOrConnectWithoutServerInput | Prisma.ServerSnapshotCreateOrConnectWithoutServerInput[];
    upsert?: Prisma.ServerSnapshotUpsertWithWhereUniqueWithoutServerInput | Prisma.ServerSnapshotUpsertWithWhereUniqueWithoutServerInput[];
    createMany?: Prisma.ServerSnapshotCreateManyServerInputEnvelope;
    set?: Prisma.ServerSnapshotWhereUniqueInput | Prisma.ServerSnapshotWhereUniqueInput[];
    disconnect?: Prisma.ServerSnapshotWhereUniqueInput | Prisma.ServerSnapshotWhereUniqueInput[];
    delete?: Prisma.ServerSnapshotWhereUniqueInput | Prisma.ServerSnapshotWhereUniqueInput[];
    connect?: Prisma.ServerSnapshotWhereUniqueInput | Prisma.ServerSnapshotWhereUniqueInput[];
    update?: Prisma.ServerSnapshotUpdateWithWhereUniqueWithoutServerInput | Prisma.ServerSnapshotUpdateWithWhereUniqueWithoutServerInput[];
    updateMany?: Prisma.ServerSnapshotUpdateManyWithWhereWithoutServerInput | Prisma.ServerSnapshotUpdateManyWithWhereWithoutServerInput[];
    deleteMany?: Prisma.ServerSnapshotScalarWhereInput | Prisma.ServerSnapshotScalarWhereInput[];
};
export type ServerSnapshotUncheckedUpdateManyWithoutServerNestedInput = {
    create?: Prisma.XOR<Prisma.ServerSnapshotCreateWithoutServerInput, Prisma.ServerSnapshotUncheckedCreateWithoutServerInput> | Prisma.ServerSnapshotCreateWithoutServerInput[] | Prisma.ServerSnapshotUncheckedCreateWithoutServerInput[];
    connectOrCreate?: Prisma.ServerSnapshotCreateOrConnectWithoutServerInput | Prisma.ServerSnapshotCreateOrConnectWithoutServerInput[];
    upsert?: Prisma.ServerSnapshotUpsertWithWhereUniqueWithoutServerInput | Prisma.ServerSnapshotUpsertWithWhereUniqueWithoutServerInput[];
    createMany?: Prisma.ServerSnapshotCreateManyServerInputEnvelope;
    set?: Prisma.ServerSnapshotWhereUniqueInput | Prisma.ServerSnapshotWhereUniqueInput[];
    disconnect?: Prisma.ServerSnapshotWhereUniqueInput | Prisma.ServerSnapshotWhereUniqueInput[];
    delete?: Prisma.ServerSnapshotWhereUniqueInput | Prisma.ServerSnapshotWhereUniqueInput[];
    connect?: Prisma.ServerSnapshotWhereUniqueInput | Prisma.ServerSnapshotWhereUniqueInput[];
    update?: Prisma.ServerSnapshotUpdateWithWhereUniqueWithoutServerInput | Prisma.ServerSnapshotUpdateWithWhereUniqueWithoutServerInput[];
    updateMany?: Prisma.ServerSnapshotUpdateManyWithWhereWithoutServerInput | Prisma.ServerSnapshotUpdateManyWithWhereWithoutServerInput[];
    deleteMany?: Prisma.ServerSnapshotScalarWhereInput | Prisma.ServerSnapshotScalarWhereInput[];
};
export type FloatFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type ServerSnapshotCreateWithoutServerInput = {
    cpuPercent: number;
    memoryPercent: number;
    diskPercent: number;
    containerCount: number;
    updated_at?: Date | string;
};
export type ServerSnapshotUncheckedCreateWithoutServerInput = {
    id?: number;
    cpuPercent: number;
    memoryPercent: number;
    diskPercent: number;
    containerCount: number;
    updated_at?: Date | string;
};
export type ServerSnapshotCreateOrConnectWithoutServerInput = {
    where: Prisma.ServerSnapshotWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServerSnapshotCreateWithoutServerInput, Prisma.ServerSnapshotUncheckedCreateWithoutServerInput>;
};
export type ServerSnapshotCreateManyServerInputEnvelope = {
    data: Prisma.ServerSnapshotCreateManyServerInput | Prisma.ServerSnapshotCreateManyServerInput[];
    skipDuplicates?: boolean;
};
export type ServerSnapshotUpsertWithWhereUniqueWithoutServerInput = {
    where: Prisma.ServerSnapshotWhereUniqueInput;
    update: Prisma.XOR<Prisma.ServerSnapshotUpdateWithoutServerInput, Prisma.ServerSnapshotUncheckedUpdateWithoutServerInput>;
    create: Prisma.XOR<Prisma.ServerSnapshotCreateWithoutServerInput, Prisma.ServerSnapshotUncheckedCreateWithoutServerInput>;
};
export type ServerSnapshotUpdateWithWhereUniqueWithoutServerInput = {
    where: Prisma.ServerSnapshotWhereUniqueInput;
    data: Prisma.XOR<Prisma.ServerSnapshotUpdateWithoutServerInput, Prisma.ServerSnapshotUncheckedUpdateWithoutServerInput>;
};
export type ServerSnapshotUpdateManyWithWhereWithoutServerInput = {
    where: Prisma.ServerSnapshotScalarWhereInput;
    data: Prisma.XOR<Prisma.ServerSnapshotUpdateManyMutationInput, Prisma.ServerSnapshotUncheckedUpdateManyWithoutServerInput>;
};
export type ServerSnapshotScalarWhereInput = {
    AND?: Prisma.ServerSnapshotScalarWhereInput | Prisma.ServerSnapshotScalarWhereInput[];
    OR?: Prisma.ServerSnapshotScalarWhereInput[];
    NOT?: Prisma.ServerSnapshotScalarWhereInput | Prisma.ServerSnapshotScalarWhereInput[];
    id?: Prisma.IntFilter<"ServerSnapshot"> | number;
    serverId?: Prisma.IntFilter<"ServerSnapshot"> | number;
    cpuPercent?: Prisma.FloatFilter<"ServerSnapshot"> | number;
    memoryPercent?: Prisma.FloatFilter<"ServerSnapshot"> | number;
    diskPercent?: Prisma.FloatFilter<"ServerSnapshot"> | number;
    containerCount?: Prisma.IntFilter<"ServerSnapshot"> | number;
    updated_at?: Prisma.DateTimeFilter<"ServerSnapshot"> | Date | string;
};
export type ServerSnapshotCreateManyServerInput = {
    id?: number;
    cpuPercent: number;
    memoryPercent: number;
    diskPercent: number;
    containerCount: number;
    updated_at?: Date | string;
};
export type ServerSnapshotUpdateWithoutServerInput = {
    cpuPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    memoryPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    diskPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    containerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServerSnapshotUncheckedUpdateWithoutServerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    cpuPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    memoryPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    diskPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    containerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServerSnapshotUncheckedUpdateManyWithoutServerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    cpuPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    memoryPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    diskPercent?: Prisma.FloatFieldUpdateOperationsInput | number;
    containerCount?: Prisma.IntFieldUpdateOperationsInput | number;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServerSnapshotSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    serverId?: boolean;
    cpuPercent?: boolean;
    memoryPercent?: boolean;
    diskPercent?: boolean;
    containerCount?: boolean;
    updated_at?: boolean;
    server?: boolean | Prisma.ServerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["serverSnapshot"]>;
export type ServerSnapshotSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    serverId?: boolean;
    cpuPercent?: boolean;
    memoryPercent?: boolean;
    diskPercent?: boolean;
    containerCount?: boolean;
    updated_at?: boolean;
    server?: boolean | Prisma.ServerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["serverSnapshot"]>;
export type ServerSnapshotSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    serverId?: boolean;
    cpuPercent?: boolean;
    memoryPercent?: boolean;
    diskPercent?: boolean;
    containerCount?: boolean;
    updated_at?: boolean;
    server?: boolean | Prisma.ServerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["serverSnapshot"]>;
export type ServerSnapshotSelectScalar = {
    id?: boolean;
    serverId?: boolean;
    cpuPercent?: boolean;
    memoryPercent?: boolean;
    diskPercent?: boolean;
    containerCount?: boolean;
    updated_at?: boolean;
};
export type ServerSnapshotOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "serverId" | "cpuPercent" | "memoryPercent" | "diskPercent" | "containerCount" | "updated_at", ExtArgs["result"]["serverSnapshot"]>;
export type ServerSnapshotInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    server?: boolean | Prisma.ServerDefaultArgs<ExtArgs>;
};
export type ServerSnapshotIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    server?: boolean | Prisma.ServerDefaultArgs<ExtArgs>;
};
export type ServerSnapshotIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    server?: boolean | Prisma.ServerDefaultArgs<ExtArgs>;
};
export type $ServerSnapshotPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ServerSnapshot";
    objects: {
        server: Prisma.$ServerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        serverId: number;
        cpuPercent: number;
        memoryPercent: number;
        diskPercent: number;
        containerCount: number;
        updated_at: Date;
    }, ExtArgs["result"]["serverSnapshot"]>;
    composites: {};
};
export type ServerSnapshotGetPayload<S extends boolean | null | undefined | ServerSnapshotDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ServerSnapshotPayload, S>;
export type ServerSnapshotCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ServerSnapshotFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ServerSnapshotCountAggregateInputType | true;
};
export interface ServerSnapshotDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ServerSnapshot'];
        meta: {
            name: 'ServerSnapshot';
        };
    };
    findUnique<T extends ServerSnapshotFindUniqueArgs>(args: Prisma.SelectSubset<T, ServerSnapshotFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ServerSnapshotClient<runtime.Types.Result.GetResult<Prisma.$ServerSnapshotPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ServerSnapshotFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ServerSnapshotFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ServerSnapshotClient<runtime.Types.Result.GetResult<Prisma.$ServerSnapshotPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ServerSnapshotFindFirstArgs>(args?: Prisma.SelectSubset<T, ServerSnapshotFindFirstArgs<ExtArgs>>): Prisma.Prisma__ServerSnapshotClient<runtime.Types.Result.GetResult<Prisma.$ServerSnapshotPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ServerSnapshotFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ServerSnapshotFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ServerSnapshotClient<runtime.Types.Result.GetResult<Prisma.$ServerSnapshotPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ServerSnapshotFindManyArgs>(args?: Prisma.SelectSubset<T, ServerSnapshotFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServerSnapshotPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ServerSnapshotCreateArgs>(args: Prisma.SelectSubset<T, ServerSnapshotCreateArgs<ExtArgs>>): Prisma.Prisma__ServerSnapshotClient<runtime.Types.Result.GetResult<Prisma.$ServerSnapshotPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ServerSnapshotCreateManyArgs>(args?: Prisma.SelectSubset<T, ServerSnapshotCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ServerSnapshotCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ServerSnapshotCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServerSnapshotPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ServerSnapshotDeleteArgs>(args: Prisma.SelectSubset<T, ServerSnapshotDeleteArgs<ExtArgs>>): Prisma.Prisma__ServerSnapshotClient<runtime.Types.Result.GetResult<Prisma.$ServerSnapshotPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ServerSnapshotUpdateArgs>(args: Prisma.SelectSubset<T, ServerSnapshotUpdateArgs<ExtArgs>>): Prisma.Prisma__ServerSnapshotClient<runtime.Types.Result.GetResult<Prisma.$ServerSnapshotPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ServerSnapshotDeleteManyArgs>(args?: Prisma.SelectSubset<T, ServerSnapshotDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ServerSnapshotUpdateManyArgs>(args: Prisma.SelectSubset<T, ServerSnapshotUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ServerSnapshotUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ServerSnapshotUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServerSnapshotPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ServerSnapshotUpsertArgs>(args: Prisma.SelectSubset<T, ServerSnapshotUpsertArgs<ExtArgs>>): Prisma.Prisma__ServerSnapshotClient<runtime.Types.Result.GetResult<Prisma.$ServerSnapshotPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ServerSnapshotCountArgs>(args?: Prisma.Subset<T, ServerSnapshotCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ServerSnapshotCountAggregateOutputType> : number>;
    aggregate<T extends ServerSnapshotAggregateArgs>(args: Prisma.Subset<T, ServerSnapshotAggregateArgs>): Prisma.PrismaPromise<GetServerSnapshotAggregateType<T>>;
    groupBy<T extends ServerSnapshotGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ServerSnapshotGroupByArgs['orderBy'];
    } : {
        orderBy?: ServerSnapshotGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ServerSnapshotGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServerSnapshotGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ServerSnapshotFieldRefs;
}
export interface Prisma__ServerSnapshotClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    server<T extends Prisma.ServerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ServerDefaultArgs<ExtArgs>>): Prisma.Prisma__ServerClient<runtime.Types.Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ServerSnapshotFieldRefs {
    readonly id: Prisma.FieldRef<"ServerSnapshot", 'Int'>;
    readonly serverId: Prisma.FieldRef<"ServerSnapshot", 'Int'>;
    readonly cpuPercent: Prisma.FieldRef<"ServerSnapshot", 'Float'>;
    readonly memoryPercent: Prisma.FieldRef<"ServerSnapshot", 'Float'>;
    readonly diskPercent: Prisma.FieldRef<"ServerSnapshot", 'Float'>;
    readonly containerCount: Prisma.FieldRef<"ServerSnapshot", 'Int'>;
    readonly updated_at: Prisma.FieldRef<"ServerSnapshot", 'DateTime'>;
}
export type ServerSnapshotFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerSnapshotSelect<ExtArgs> | null;
    omit?: Prisma.ServerSnapshotOmit<ExtArgs> | null;
    include?: Prisma.ServerSnapshotInclude<ExtArgs> | null;
    where: Prisma.ServerSnapshotWhereUniqueInput;
};
export type ServerSnapshotFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerSnapshotSelect<ExtArgs> | null;
    omit?: Prisma.ServerSnapshotOmit<ExtArgs> | null;
    include?: Prisma.ServerSnapshotInclude<ExtArgs> | null;
    where: Prisma.ServerSnapshotWhereUniqueInput;
};
export type ServerSnapshotFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ServerSnapshotFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ServerSnapshotFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ServerSnapshotCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerSnapshotSelect<ExtArgs> | null;
    omit?: Prisma.ServerSnapshotOmit<ExtArgs> | null;
    include?: Prisma.ServerSnapshotInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ServerSnapshotCreateInput, Prisma.ServerSnapshotUncheckedCreateInput>;
};
export type ServerSnapshotCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ServerSnapshotCreateManyInput | Prisma.ServerSnapshotCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ServerSnapshotCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerSnapshotSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ServerSnapshotOmit<ExtArgs> | null;
    data: Prisma.ServerSnapshotCreateManyInput | Prisma.ServerSnapshotCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ServerSnapshotIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ServerSnapshotUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerSnapshotSelect<ExtArgs> | null;
    omit?: Prisma.ServerSnapshotOmit<ExtArgs> | null;
    include?: Prisma.ServerSnapshotInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ServerSnapshotUpdateInput, Prisma.ServerSnapshotUncheckedUpdateInput>;
    where: Prisma.ServerSnapshotWhereUniqueInput;
};
export type ServerSnapshotUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ServerSnapshotUpdateManyMutationInput, Prisma.ServerSnapshotUncheckedUpdateManyInput>;
    where?: Prisma.ServerSnapshotWhereInput;
    limit?: number;
};
export type ServerSnapshotUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerSnapshotSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ServerSnapshotOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ServerSnapshotUpdateManyMutationInput, Prisma.ServerSnapshotUncheckedUpdateManyInput>;
    where?: Prisma.ServerSnapshotWhereInput;
    limit?: number;
    include?: Prisma.ServerSnapshotIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ServerSnapshotUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerSnapshotSelect<ExtArgs> | null;
    omit?: Prisma.ServerSnapshotOmit<ExtArgs> | null;
    include?: Prisma.ServerSnapshotInclude<ExtArgs> | null;
    where: Prisma.ServerSnapshotWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServerSnapshotCreateInput, Prisma.ServerSnapshotUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ServerSnapshotUpdateInput, Prisma.ServerSnapshotUncheckedUpdateInput>;
};
export type ServerSnapshotDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerSnapshotSelect<ExtArgs> | null;
    omit?: Prisma.ServerSnapshotOmit<ExtArgs> | null;
    include?: Prisma.ServerSnapshotInclude<ExtArgs> | null;
    where: Prisma.ServerSnapshotWhereUniqueInput;
};
export type ServerSnapshotDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServerSnapshotWhereInput;
    limit?: number;
};
export type ServerSnapshotDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerSnapshotSelect<ExtArgs> | null;
    omit?: Prisma.ServerSnapshotOmit<ExtArgs> | null;
    include?: Prisma.ServerSnapshotInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ServerSnapshot.d.ts.map