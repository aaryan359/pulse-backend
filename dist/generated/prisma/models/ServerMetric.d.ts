import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ServerMetricModel = runtime.Types.Result.DefaultSelection<Prisma.$ServerMetricPayload>;
export type AggregateServerMetric = {
    _count: ServerMetricCountAggregateOutputType | null;
    _avg: ServerMetricAvgAggregateOutputType | null;
    _sum: ServerMetricSumAggregateOutputType | null;
    _min: ServerMetricMinAggregateOutputType | null;
    _max: ServerMetricMaxAggregateOutputType | null;
};
export type ServerMetricAvgAggregateOutputType = {
    id: number | null;
    serverId: number | null;
    cpuAvg: number | null;
    memoryAvg: number | null;
    diskAvg: number | null;
};
export type ServerMetricSumAggregateOutputType = {
    id: number | null;
    serverId: number | null;
    cpuAvg: number | null;
    memoryAvg: number | null;
    diskAvg: number | null;
};
export type ServerMetricMinAggregateOutputType = {
    id: number | null;
    serverId: number | null;
    interval: string | null;
    cpuAvg: number | null;
    memoryAvg: number | null;
    diskAvg: number | null;
    fromTime: Date | null;
    toTime: Date | null;
    created_at: Date | null;
};
export type ServerMetricMaxAggregateOutputType = {
    id: number | null;
    serverId: number | null;
    interval: string | null;
    cpuAvg: number | null;
    memoryAvg: number | null;
    diskAvg: number | null;
    fromTime: Date | null;
    toTime: Date | null;
    created_at: Date | null;
};
export type ServerMetricCountAggregateOutputType = {
    id: number;
    serverId: number;
    interval: number;
    cpuAvg: number;
    memoryAvg: number;
    diskAvg: number;
    fromTime: number;
    toTime: number;
    created_at: number;
    _all: number;
};
export type ServerMetricAvgAggregateInputType = {
    id?: true;
    serverId?: true;
    cpuAvg?: true;
    memoryAvg?: true;
    diskAvg?: true;
};
export type ServerMetricSumAggregateInputType = {
    id?: true;
    serverId?: true;
    cpuAvg?: true;
    memoryAvg?: true;
    diskAvg?: true;
};
export type ServerMetricMinAggregateInputType = {
    id?: true;
    serverId?: true;
    interval?: true;
    cpuAvg?: true;
    memoryAvg?: true;
    diskAvg?: true;
    fromTime?: true;
    toTime?: true;
    created_at?: true;
};
export type ServerMetricMaxAggregateInputType = {
    id?: true;
    serverId?: true;
    interval?: true;
    cpuAvg?: true;
    memoryAvg?: true;
    diskAvg?: true;
    fromTime?: true;
    toTime?: true;
    created_at?: true;
};
export type ServerMetricCountAggregateInputType = {
    id?: true;
    serverId?: true;
    interval?: true;
    cpuAvg?: true;
    memoryAvg?: true;
    diskAvg?: true;
    fromTime?: true;
    toTime?: true;
    created_at?: true;
    _all?: true;
};
export type ServerMetricAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServerMetricWhereInput;
    orderBy?: Prisma.ServerMetricOrderByWithRelationInput | Prisma.ServerMetricOrderByWithRelationInput[];
    cursor?: Prisma.ServerMetricWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ServerMetricCountAggregateInputType;
    _avg?: ServerMetricAvgAggregateInputType;
    _sum?: ServerMetricSumAggregateInputType;
    _min?: ServerMetricMinAggregateInputType;
    _max?: ServerMetricMaxAggregateInputType;
};
export type GetServerMetricAggregateType<T extends ServerMetricAggregateArgs> = {
    [P in keyof T & keyof AggregateServerMetric]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateServerMetric[P]> : Prisma.GetScalarType<T[P], AggregateServerMetric[P]>;
};
export type ServerMetricGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServerMetricWhereInput;
    orderBy?: Prisma.ServerMetricOrderByWithAggregationInput | Prisma.ServerMetricOrderByWithAggregationInput[];
    by: Prisma.ServerMetricScalarFieldEnum[] | Prisma.ServerMetricScalarFieldEnum;
    having?: Prisma.ServerMetricScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ServerMetricCountAggregateInputType | true;
    _avg?: ServerMetricAvgAggregateInputType;
    _sum?: ServerMetricSumAggregateInputType;
    _min?: ServerMetricMinAggregateInputType;
    _max?: ServerMetricMaxAggregateInputType;
};
export type ServerMetricGroupByOutputType = {
    id: number;
    serverId: number;
    interval: string;
    cpuAvg: number;
    memoryAvg: number;
    diskAvg: number;
    fromTime: Date;
    toTime: Date;
    created_at: Date;
    _count: ServerMetricCountAggregateOutputType | null;
    _avg: ServerMetricAvgAggregateOutputType | null;
    _sum: ServerMetricSumAggregateOutputType | null;
    _min: ServerMetricMinAggregateOutputType | null;
    _max: ServerMetricMaxAggregateOutputType | null;
};
type GetServerMetricGroupByPayload<T extends ServerMetricGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ServerMetricGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ServerMetricGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ServerMetricGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ServerMetricGroupByOutputType[P]>;
}>>;
export type ServerMetricWhereInput = {
    AND?: Prisma.ServerMetricWhereInput | Prisma.ServerMetricWhereInput[];
    OR?: Prisma.ServerMetricWhereInput[];
    NOT?: Prisma.ServerMetricWhereInput | Prisma.ServerMetricWhereInput[];
    id?: Prisma.IntFilter<"ServerMetric"> | number;
    serverId?: Prisma.IntFilter<"ServerMetric"> | number;
    interval?: Prisma.StringFilter<"ServerMetric"> | string;
    cpuAvg?: Prisma.FloatFilter<"ServerMetric"> | number;
    memoryAvg?: Prisma.FloatFilter<"ServerMetric"> | number;
    diskAvg?: Prisma.FloatFilter<"ServerMetric"> | number;
    fromTime?: Prisma.DateTimeFilter<"ServerMetric"> | Date | string;
    toTime?: Prisma.DateTimeFilter<"ServerMetric"> | Date | string;
    created_at?: Prisma.DateTimeFilter<"ServerMetric"> | Date | string;
    server?: Prisma.XOR<Prisma.ServerScalarRelationFilter, Prisma.ServerWhereInput>;
};
export type ServerMetricOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    serverId?: Prisma.SortOrder;
    interval?: Prisma.SortOrder;
    cpuAvg?: Prisma.SortOrder;
    memoryAvg?: Prisma.SortOrder;
    diskAvg?: Prisma.SortOrder;
    fromTime?: Prisma.SortOrder;
    toTime?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    server?: Prisma.ServerOrderByWithRelationInput;
};
export type ServerMetricWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.ServerMetricWhereInput | Prisma.ServerMetricWhereInput[];
    OR?: Prisma.ServerMetricWhereInput[];
    NOT?: Prisma.ServerMetricWhereInput | Prisma.ServerMetricWhereInput[];
    serverId?: Prisma.IntFilter<"ServerMetric"> | number;
    interval?: Prisma.StringFilter<"ServerMetric"> | string;
    cpuAvg?: Prisma.FloatFilter<"ServerMetric"> | number;
    memoryAvg?: Prisma.FloatFilter<"ServerMetric"> | number;
    diskAvg?: Prisma.FloatFilter<"ServerMetric"> | number;
    fromTime?: Prisma.DateTimeFilter<"ServerMetric"> | Date | string;
    toTime?: Prisma.DateTimeFilter<"ServerMetric"> | Date | string;
    created_at?: Prisma.DateTimeFilter<"ServerMetric"> | Date | string;
    server?: Prisma.XOR<Prisma.ServerScalarRelationFilter, Prisma.ServerWhereInput>;
}, "id">;
export type ServerMetricOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    serverId?: Prisma.SortOrder;
    interval?: Prisma.SortOrder;
    cpuAvg?: Prisma.SortOrder;
    memoryAvg?: Prisma.SortOrder;
    diskAvg?: Prisma.SortOrder;
    fromTime?: Prisma.SortOrder;
    toTime?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.ServerMetricCountOrderByAggregateInput;
    _avg?: Prisma.ServerMetricAvgOrderByAggregateInput;
    _max?: Prisma.ServerMetricMaxOrderByAggregateInput;
    _min?: Prisma.ServerMetricMinOrderByAggregateInput;
    _sum?: Prisma.ServerMetricSumOrderByAggregateInput;
};
export type ServerMetricScalarWhereWithAggregatesInput = {
    AND?: Prisma.ServerMetricScalarWhereWithAggregatesInput | Prisma.ServerMetricScalarWhereWithAggregatesInput[];
    OR?: Prisma.ServerMetricScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ServerMetricScalarWhereWithAggregatesInput | Prisma.ServerMetricScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"ServerMetric"> | number;
    serverId?: Prisma.IntWithAggregatesFilter<"ServerMetric"> | number;
    interval?: Prisma.StringWithAggregatesFilter<"ServerMetric"> | string;
    cpuAvg?: Prisma.FloatWithAggregatesFilter<"ServerMetric"> | number;
    memoryAvg?: Prisma.FloatWithAggregatesFilter<"ServerMetric"> | number;
    diskAvg?: Prisma.FloatWithAggregatesFilter<"ServerMetric"> | number;
    fromTime?: Prisma.DateTimeWithAggregatesFilter<"ServerMetric"> | Date | string;
    toTime?: Prisma.DateTimeWithAggregatesFilter<"ServerMetric"> | Date | string;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"ServerMetric"> | Date | string;
};
export type ServerMetricCreateInput = {
    interval: string;
    cpuAvg: number;
    memoryAvg: number;
    diskAvg: number;
    fromTime: Date | string;
    toTime: Date | string;
    created_at?: Date | string;
    server: Prisma.ServerCreateNestedOneWithoutMetricsInput;
};
export type ServerMetricUncheckedCreateInput = {
    id?: number;
    serverId: number;
    interval: string;
    cpuAvg: number;
    memoryAvg: number;
    diskAvg: number;
    fromTime: Date | string;
    toTime: Date | string;
    created_at?: Date | string;
};
export type ServerMetricUpdateInput = {
    interval?: Prisma.StringFieldUpdateOperationsInput | string;
    cpuAvg?: Prisma.FloatFieldUpdateOperationsInput | number;
    memoryAvg?: Prisma.FloatFieldUpdateOperationsInput | number;
    diskAvg?: Prisma.FloatFieldUpdateOperationsInput | number;
    fromTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    toTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    server?: Prisma.ServerUpdateOneRequiredWithoutMetricsNestedInput;
};
export type ServerMetricUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    serverId?: Prisma.IntFieldUpdateOperationsInput | number;
    interval?: Prisma.StringFieldUpdateOperationsInput | string;
    cpuAvg?: Prisma.FloatFieldUpdateOperationsInput | number;
    memoryAvg?: Prisma.FloatFieldUpdateOperationsInput | number;
    diskAvg?: Prisma.FloatFieldUpdateOperationsInput | number;
    fromTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    toTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServerMetricCreateManyInput = {
    id?: number;
    serverId: number;
    interval: string;
    cpuAvg: number;
    memoryAvg: number;
    diskAvg: number;
    fromTime: Date | string;
    toTime: Date | string;
    created_at?: Date | string;
};
export type ServerMetricUpdateManyMutationInput = {
    interval?: Prisma.StringFieldUpdateOperationsInput | string;
    cpuAvg?: Prisma.FloatFieldUpdateOperationsInput | number;
    memoryAvg?: Prisma.FloatFieldUpdateOperationsInput | number;
    diskAvg?: Prisma.FloatFieldUpdateOperationsInput | number;
    fromTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    toTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServerMetricUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    serverId?: Prisma.IntFieldUpdateOperationsInput | number;
    interval?: Prisma.StringFieldUpdateOperationsInput | string;
    cpuAvg?: Prisma.FloatFieldUpdateOperationsInput | number;
    memoryAvg?: Prisma.FloatFieldUpdateOperationsInput | number;
    diskAvg?: Prisma.FloatFieldUpdateOperationsInput | number;
    fromTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    toTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServerMetricListRelationFilter = {
    every?: Prisma.ServerMetricWhereInput;
    some?: Prisma.ServerMetricWhereInput;
    none?: Prisma.ServerMetricWhereInput;
};
export type ServerMetricOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ServerMetricCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    serverId?: Prisma.SortOrder;
    interval?: Prisma.SortOrder;
    cpuAvg?: Prisma.SortOrder;
    memoryAvg?: Prisma.SortOrder;
    diskAvg?: Prisma.SortOrder;
    fromTime?: Prisma.SortOrder;
    toTime?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type ServerMetricAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    serverId?: Prisma.SortOrder;
    cpuAvg?: Prisma.SortOrder;
    memoryAvg?: Prisma.SortOrder;
    diskAvg?: Prisma.SortOrder;
};
export type ServerMetricMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    serverId?: Prisma.SortOrder;
    interval?: Prisma.SortOrder;
    cpuAvg?: Prisma.SortOrder;
    memoryAvg?: Prisma.SortOrder;
    diskAvg?: Prisma.SortOrder;
    fromTime?: Prisma.SortOrder;
    toTime?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type ServerMetricMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    serverId?: Prisma.SortOrder;
    interval?: Prisma.SortOrder;
    cpuAvg?: Prisma.SortOrder;
    memoryAvg?: Prisma.SortOrder;
    diskAvg?: Prisma.SortOrder;
    fromTime?: Prisma.SortOrder;
    toTime?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type ServerMetricSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    serverId?: Prisma.SortOrder;
    cpuAvg?: Prisma.SortOrder;
    memoryAvg?: Prisma.SortOrder;
    diskAvg?: Prisma.SortOrder;
};
export type ServerMetricCreateNestedManyWithoutServerInput = {
    create?: Prisma.XOR<Prisma.ServerMetricCreateWithoutServerInput, Prisma.ServerMetricUncheckedCreateWithoutServerInput> | Prisma.ServerMetricCreateWithoutServerInput[] | Prisma.ServerMetricUncheckedCreateWithoutServerInput[];
    connectOrCreate?: Prisma.ServerMetricCreateOrConnectWithoutServerInput | Prisma.ServerMetricCreateOrConnectWithoutServerInput[];
    createMany?: Prisma.ServerMetricCreateManyServerInputEnvelope;
    connect?: Prisma.ServerMetricWhereUniqueInput | Prisma.ServerMetricWhereUniqueInput[];
};
export type ServerMetricUncheckedCreateNestedManyWithoutServerInput = {
    create?: Prisma.XOR<Prisma.ServerMetricCreateWithoutServerInput, Prisma.ServerMetricUncheckedCreateWithoutServerInput> | Prisma.ServerMetricCreateWithoutServerInput[] | Prisma.ServerMetricUncheckedCreateWithoutServerInput[];
    connectOrCreate?: Prisma.ServerMetricCreateOrConnectWithoutServerInput | Prisma.ServerMetricCreateOrConnectWithoutServerInput[];
    createMany?: Prisma.ServerMetricCreateManyServerInputEnvelope;
    connect?: Prisma.ServerMetricWhereUniqueInput | Prisma.ServerMetricWhereUniqueInput[];
};
export type ServerMetricUpdateManyWithoutServerNestedInput = {
    create?: Prisma.XOR<Prisma.ServerMetricCreateWithoutServerInput, Prisma.ServerMetricUncheckedCreateWithoutServerInput> | Prisma.ServerMetricCreateWithoutServerInput[] | Prisma.ServerMetricUncheckedCreateWithoutServerInput[];
    connectOrCreate?: Prisma.ServerMetricCreateOrConnectWithoutServerInput | Prisma.ServerMetricCreateOrConnectWithoutServerInput[];
    upsert?: Prisma.ServerMetricUpsertWithWhereUniqueWithoutServerInput | Prisma.ServerMetricUpsertWithWhereUniqueWithoutServerInput[];
    createMany?: Prisma.ServerMetricCreateManyServerInputEnvelope;
    set?: Prisma.ServerMetricWhereUniqueInput | Prisma.ServerMetricWhereUniqueInput[];
    disconnect?: Prisma.ServerMetricWhereUniqueInput | Prisma.ServerMetricWhereUniqueInput[];
    delete?: Prisma.ServerMetricWhereUniqueInput | Prisma.ServerMetricWhereUniqueInput[];
    connect?: Prisma.ServerMetricWhereUniqueInput | Prisma.ServerMetricWhereUniqueInput[];
    update?: Prisma.ServerMetricUpdateWithWhereUniqueWithoutServerInput | Prisma.ServerMetricUpdateWithWhereUniqueWithoutServerInput[];
    updateMany?: Prisma.ServerMetricUpdateManyWithWhereWithoutServerInput | Prisma.ServerMetricUpdateManyWithWhereWithoutServerInput[];
    deleteMany?: Prisma.ServerMetricScalarWhereInput | Prisma.ServerMetricScalarWhereInput[];
};
export type ServerMetricUncheckedUpdateManyWithoutServerNestedInput = {
    create?: Prisma.XOR<Prisma.ServerMetricCreateWithoutServerInput, Prisma.ServerMetricUncheckedCreateWithoutServerInput> | Prisma.ServerMetricCreateWithoutServerInput[] | Prisma.ServerMetricUncheckedCreateWithoutServerInput[];
    connectOrCreate?: Prisma.ServerMetricCreateOrConnectWithoutServerInput | Prisma.ServerMetricCreateOrConnectWithoutServerInput[];
    upsert?: Prisma.ServerMetricUpsertWithWhereUniqueWithoutServerInput | Prisma.ServerMetricUpsertWithWhereUniqueWithoutServerInput[];
    createMany?: Prisma.ServerMetricCreateManyServerInputEnvelope;
    set?: Prisma.ServerMetricWhereUniqueInput | Prisma.ServerMetricWhereUniqueInput[];
    disconnect?: Prisma.ServerMetricWhereUniqueInput | Prisma.ServerMetricWhereUniqueInput[];
    delete?: Prisma.ServerMetricWhereUniqueInput | Prisma.ServerMetricWhereUniqueInput[];
    connect?: Prisma.ServerMetricWhereUniqueInput | Prisma.ServerMetricWhereUniqueInput[];
    update?: Prisma.ServerMetricUpdateWithWhereUniqueWithoutServerInput | Prisma.ServerMetricUpdateWithWhereUniqueWithoutServerInput[];
    updateMany?: Prisma.ServerMetricUpdateManyWithWhereWithoutServerInput | Prisma.ServerMetricUpdateManyWithWhereWithoutServerInput[];
    deleteMany?: Prisma.ServerMetricScalarWhereInput | Prisma.ServerMetricScalarWhereInput[];
};
export type ServerMetricCreateWithoutServerInput = {
    interval: string;
    cpuAvg: number;
    memoryAvg: number;
    diskAvg: number;
    fromTime: Date | string;
    toTime: Date | string;
    created_at?: Date | string;
};
export type ServerMetricUncheckedCreateWithoutServerInput = {
    id?: number;
    interval: string;
    cpuAvg: number;
    memoryAvg: number;
    diskAvg: number;
    fromTime: Date | string;
    toTime: Date | string;
    created_at?: Date | string;
};
export type ServerMetricCreateOrConnectWithoutServerInput = {
    where: Prisma.ServerMetricWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServerMetricCreateWithoutServerInput, Prisma.ServerMetricUncheckedCreateWithoutServerInput>;
};
export type ServerMetricCreateManyServerInputEnvelope = {
    data: Prisma.ServerMetricCreateManyServerInput | Prisma.ServerMetricCreateManyServerInput[];
    skipDuplicates?: boolean;
};
export type ServerMetricUpsertWithWhereUniqueWithoutServerInput = {
    where: Prisma.ServerMetricWhereUniqueInput;
    update: Prisma.XOR<Prisma.ServerMetricUpdateWithoutServerInput, Prisma.ServerMetricUncheckedUpdateWithoutServerInput>;
    create: Prisma.XOR<Prisma.ServerMetricCreateWithoutServerInput, Prisma.ServerMetricUncheckedCreateWithoutServerInput>;
};
export type ServerMetricUpdateWithWhereUniqueWithoutServerInput = {
    where: Prisma.ServerMetricWhereUniqueInput;
    data: Prisma.XOR<Prisma.ServerMetricUpdateWithoutServerInput, Prisma.ServerMetricUncheckedUpdateWithoutServerInput>;
};
export type ServerMetricUpdateManyWithWhereWithoutServerInput = {
    where: Prisma.ServerMetricScalarWhereInput;
    data: Prisma.XOR<Prisma.ServerMetricUpdateManyMutationInput, Prisma.ServerMetricUncheckedUpdateManyWithoutServerInput>;
};
export type ServerMetricScalarWhereInput = {
    AND?: Prisma.ServerMetricScalarWhereInput | Prisma.ServerMetricScalarWhereInput[];
    OR?: Prisma.ServerMetricScalarWhereInput[];
    NOT?: Prisma.ServerMetricScalarWhereInput | Prisma.ServerMetricScalarWhereInput[];
    id?: Prisma.IntFilter<"ServerMetric"> | number;
    serverId?: Prisma.IntFilter<"ServerMetric"> | number;
    interval?: Prisma.StringFilter<"ServerMetric"> | string;
    cpuAvg?: Prisma.FloatFilter<"ServerMetric"> | number;
    memoryAvg?: Prisma.FloatFilter<"ServerMetric"> | number;
    diskAvg?: Prisma.FloatFilter<"ServerMetric"> | number;
    fromTime?: Prisma.DateTimeFilter<"ServerMetric"> | Date | string;
    toTime?: Prisma.DateTimeFilter<"ServerMetric"> | Date | string;
    created_at?: Prisma.DateTimeFilter<"ServerMetric"> | Date | string;
};
export type ServerMetricCreateManyServerInput = {
    id?: number;
    interval: string;
    cpuAvg: number;
    memoryAvg: number;
    diskAvg: number;
    fromTime: Date | string;
    toTime: Date | string;
    created_at?: Date | string;
};
export type ServerMetricUpdateWithoutServerInput = {
    interval?: Prisma.StringFieldUpdateOperationsInput | string;
    cpuAvg?: Prisma.FloatFieldUpdateOperationsInput | number;
    memoryAvg?: Prisma.FloatFieldUpdateOperationsInput | number;
    diskAvg?: Prisma.FloatFieldUpdateOperationsInput | number;
    fromTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    toTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServerMetricUncheckedUpdateWithoutServerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    interval?: Prisma.StringFieldUpdateOperationsInput | string;
    cpuAvg?: Prisma.FloatFieldUpdateOperationsInput | number;
    memoryAvg?: Prisma.FloatFieldUpdateOperationsInput | number;
    diskAvg?: Prisma.FloatFieldUpdateOperationsInput | number;
    fromTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    toTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServerMetricUncheckedUpdateManyWithoutServerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    interval?: Prisma.StringFieldUpdateOperationsInput | string;
    cpuAvg?: Prisma.FloatFieldUpdateOperationsInput | number;
    memoryAvg?: Prisma.FloatFieldUpdateOperationsInput | number;
    diskAvg?: Prisma.FloatFieldUpdateOperationsInput | number;
    fromTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    toTime?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ServerMetricSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    serverId?: boolean;
    interval?: boolean;
    cpuAvg?: boolean;
    memoryAvg?: boolean;
    diskAvg?: boolean;
    fromTime?: boolean;
    toTime?: boolean;
    created_at?: boolean;
    server?: boolean | Prisma.ServerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["serverMetric"]>;
export type ServerMetricSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    serverId?: boolean;
    interval?: boolean;
    cpuAvg?: boolean;
    memoryAvg?: boolean;
    diskAvg?: boolean;
    fromTime?: boolean;
    toTime?: boolean;
    created_at?: boolean;
    server?: boolean | Prisma.ServerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["serverMetric"]>;
export type ServerMetricSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    serverId?: boolean;
    interval?: boolean;
    cpuAvg?: boolean;
    memoryAvg?: boolean;
    diskAvg?: boolean;
    fromTime?: boolean;
    toTime?: boolean;
    created_at?: boolean;
    server?: boolean | Prisma.ServerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["serverMetric"]>;
export type ServerMetricSelectScalar = {
    id?: boolean;
    serverId?: boolean;
    interval?: boolean;
    cpuAvg?: boolean;
    memoryAvg?: boolean;
    diskAvg?: boolean;
    fromTime?: boolean;
    toTime?: boolean;
    created_at?: boolean;
};
export type ServerMetricOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "serverId" | "interval" | "cpuAvg" | "memoryAvg" | "diskAvg" | "fromTime" | "toTime" | "created_at", ExtArgs["result"]["serverMetric"]>;
export type ServerMetricInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    server?: boolean | Prisma.ServerDefaultArgs<ExtArgs>;
};
export type ServerMetricIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    server?: boolean | Prisma.ServerDefaultArgs<ExtArgs>;
};
export type ServerMetricIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    server?: boolean | Prisma.ServerDefaultArgs<ExtArgs>;
};
export type $ServerMetricPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "ServerMetric";
    objects: {
        server: Prisma.$ServerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        serverId: number;
        interval: string;
        cpuAvg: number;
        memoryAvg: number;
        diskAvg: number;
        fromTime: Date;
        toTime: Date;
        created_at: Date;
    }, ExtArgs["result"]["serverMetric"]>;
    composites: {};
};
export type ServerMetricGetPayload<S extends boolean | null | undefined | ServerMetricDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ServerMetricPayload, S>;
export type ServerMetricCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ServerMetricFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ServerMetricCountAggregateInputType | true;
};
export interface ServerMetricDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['ServerMetric'];
        meta: {
            name: 'ServerMetric';
        };
    };
    findUnique<T extends ServerMetricFindUniqueArgs>(args: Prisma.SelectSubset<T, ServerMetricFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ServerMetricClient<runtime.Types.Result.GetResult<Prisma.$ServerMetricPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ServerMetricFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ServerMetricFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ServerMetricClient<runtime.Types.Result.GetResult<Prisma.$ServerMetricPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ServerMetricFindFirstArgs>(args?: Prisma.SelectSubset<T, ServerMetricFindFirstArgs<ExtArgs>>): Prisma.Prisma__ServerMetricClient<runtime.Types.Result.GetResult<Prisma.$ServerMetricPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ServerMetricFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ServerMetricFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ServerMetricClient<runtime.Types.Result.GetResult<Prisma.$ServerMetricPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ServerMetricFindManyArgs>(args?: Prisma.SelectSubset<T, ServerMetricFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServerMetricPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ServerMetricCreateArgs>(args: Prisma.SelectSubset<T, ServerMetricCreateArgs<ExtArgs>>): Prisma.Prisma__ServerMetricClient<runtime.Types.Result.GetResult<Prisma.$ServerMetricPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ServerMetricCreateManyArgs>(args?: Prisma.SelectSubset<T, ServerMetricCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ServerMetricCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ServerMetricCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServerMetricPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ServerMetricDeleteArgs>(args: Prisma.SelectSubset<T, ServerMetricDeleteArgs<ExtArgs>>): Prisma.Prisma__ServerMetricClient<runtime.Types.Result.GetResult<Prisma.$ServerMetricPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ServerMetricUpdateArgs>(args: Prisma.SelectSubset<T, ServerMetricUpdateArgs<ExtArgs>>): Prisma.Prisma__ServerMetricClient<runtime.Types.Result.GetResult<Prisma.$ServerMetricPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ServerMetricDeleteManyArgs>(args?: Prisma.SelectSubset<T, ServerMetricDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ServerMetricUpdateManyArgs>(args: Prisma.SelectSubset<T, ServerMetricUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ServerMetricUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ServerMetricUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServerMetricPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ServerMetricUpsertArgs>(args: Prisma.SelectSubset<T, ServerMetricUpsertArgs<ExtArgs>>): Prisma.Prisma__ServerMetricClient<runtime.Types.Result.GetResult<Prisma.$ServerMetricPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ServerMetricCountArgs>(args?: Prisma.Subset<T, ServerMetricCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ServerMetricCountAggregateOutputType> : number>;
    aggregate<T extends ServerMetricAggregateArgs>(args: Prisma.Subset<T, ServerMetricAggregateArgs>): Prisma.PrismaPromise<GetServerMetricAggregateType<T>>;
    groupBy<T extends ServerMetricGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ServerMetricGroupByArgs['orderBy'];
    } : {
        orderBy?: ServerMetricGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ServerMetricGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetServerMetricGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ServerMetricFieldRefs;
}
export interface Prisma__ServerMetricClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    server<T extends Prisma.ServerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ServerDefaultArgs<ExtArgs>>): Prisma.Prisma__ServerClient<runtime.Types.Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ServerMetricFieldRefs {
    readonly id: Prisma.FieldRef<"ServerMetric", 'Int'>;
    readonly serverId: Prisma.FieldRef<"ServerMetric", 'Int'>;
    readonly interval: Prisma.FieldRef<"ServerMetric", 'String'>;
    readonly cpuAvg: Prisma.FieldRef<"ServerMetric", 'Float'>;
    readonly memoryAvg: Prisma.FieldRef<"ServerMetric", 'Float'>;
    readonly diskAvg: Prisma.FieldRef<"ServerMetric", 'Float'>;
    readonly fromTime: Prisma.FieldRef<"ServerMetric", 'DateTime'>;
    readonly toTime: Prisma.FieldRef<"ServerMetric", 'DateTime'>;
    readonly created_at: Prisma.FieldRef<"ServerMetric", 'DateTime'>;
}
export type ServerMetricFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerMetricSelect<ExtArgs> | null;
    omit?: Prisma.ServerMetricOmit<ExtArgs> | null;
    include?: Prisma.ServerMetricInclude<ExtArgs> | null;
    where: Prisma.ServerMetricWhereUniqueInput;
};
export type ServerMetricFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerMetricSelect<ExtArgs> | null;
    omit?: Prisma.ServerMetricOmit<ExtArgs> | null;
    include?: Prisma.ServerMetricInclude<ExtArgs> | null;
    where: Prisma.ServerMetricWhereUniqueInput;
};
export type ServerMetricFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ServerMetricFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ServerMetricFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ServerMetricCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerMetricSelect<ExtArgs> | null;
    omit?: Prisma.ServerMetricOmit<ExtArgs> | null;
    include?: Prisma.ServerMetricInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ServerMetricCreateInput, Prisma.ServerMetricUncheckedCreateInput>;
};
export type ServerMetricCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ServerMetricCreateManyInput | Prisma.ServerMetricCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ServerMetricCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerMetricSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ServerMetricOmit<ExtArgs> | null;
    data: Prisma.ServerMetricCreateManyInput | Prisma.ServerMetricCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ServerMetricIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ServerMetricUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerMetricSelect<ExtArgs> | null;
    omit?: Prisma.ServerMetricOmit<ExtArgs> | null;
    include?: Prisma.ServerMetricInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ServerMetricUpdateInput, Prisma.ServerMetricUncheckedUpdateInput>;
    where: Prisma.ServerMetricWhereUniqueInput;
};
export type ServerMetricUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ServerMetricUpdateManyMutationInput, Prisma.ServerMetricUncheckedUpdateManyInput>;
    where?: Prisma.ServerMetricWhereInput;
    limit?: number;
};
export type ServerMetricUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerMetricSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ServerMetricOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ServerMetricUpdateManyMutationInput, Prisma.ServerMetricUncheckedUpdateManyInput>;
    where?: Prisma.ServerMetricWhereInput;
    limit?: number;
    include?: Prisma.ServerMetricIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ServerMetricUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerMetricSelect<ExtArgs> | null;
    omit?: Prisma.ServerMetricOmit<ExtArgs> | null;
    include?: Prisma.ServerMetricInclude<ExtArgs> | null;
    where: Prisma.ServerMetricWhereUniqueInput;
    create: Prisma.XOR<Prisma.ServerMetricCreateInput, Prisma.ServerMetricUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ServerMetricUpdateInput, Prisma.ServerMetricUncheckedUpdateInput>;
};
export type ServerMetricDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerMetricSelect<ExtArgs> | null;
    omit?: Prisma.ServerMetricOmit<ExtArgs> | null;
    include?: Prisma.ServerMetricInclude<ExtArgs> | null;
    where: Prisma.ServerMetricWhereUniqueInput;
};
export type ServerMetricDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServerMetricWhereInput;
    limit?: number;
};
export type ServerMetricDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ServerMetricSelect<ExtArgs> | null;
    omit?: Prisma.ServerMetricOmit<ExtArgs> | null;
    include?: Prisma.ServerMetricInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=ServerMetric.d.ts.map