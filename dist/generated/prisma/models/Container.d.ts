import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type ContainerModel = runtime.Types.Result.DefaultSelection<Prisma.$ContainerPayload>;
export type AggregateContainer = {
    _count: ContainerCountAggregateOutputType | null;
    _avg: ContainerAvgAggregateOutputType | null;
    _sum: ContainerSumAggregateOutputType | null;
    _min: ContainerMinAggregateOutputType | null;
    _max: ContainerMaxAggregateOutputType | null;
};
export type ContainerAvgAggregateOutputType = {
    id: number | null;
    serverId: number | null;
};
export type ContainerSumAggregateOutputType = {
    id: number | null;
    serverId: number | null;
};
export type ContainerMinAggregateOutputType = {
    id: number | null;
    containerId: string | null;
    name: string | null;
    image: string | null;
    serverId: number | null;
    lastState: string | null;
    lastStatus: string | null;
    lastSeenAt: Date | null;
};
export type ContainerMaxAggregateOutputType = {
    id: number | null;
    containerId: string | null;
    name: string | null;
    image: string | null;
    serverId: number | null;
    lastState: string | null;
    lastStatus: string | null;
    lastSeenAt: Date | null;
};
export type ContainerCountAggregateOutputType = {
    id: number;
    containerId: number;
    name: number;
    image: number;
    serverId: number;
    lastState: number;
    lastStatus: number;
    lastSeenAt: number;
    _all: number;
};
export type ContainerAvgAggregateInputType = {
    id?: true;
    serverId?: true;
};
export type ContainerSumAggregateInputType = {
    id?: true;
    serverId?: true;
};
export type ContainerMinAggregateInputType = {
    id?: true;
    containerId?: true;
    name?: true;
    image?: true;
    serverId?: true;
    lastState?: true;
    lastStatus?: true;
    lastSeenAt?: true;
};
export type ContainerMaxAggregateInputType = {
    id?: true;
    containerId?: true;
    name?: true;
    image?: true;
    serverId?: true;
    lastState?: true;
    lastStatus?: true;
    lastSeenAt?: true;
};
export type ContainerCountAggregateInputType = {
    id?: true;
    containerId?: true;
    name?: true;
    image?: true;
    serverId?: true;
    lastState?: true;
    lastStatus?: true;
    lastSeenAt?: true;
    _all?: true;
};
export type ContainerAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContainerWhereInput;
    orderBy?: Prisma.ContainerOrderByWithRelationInput | Prisma.ContainerOrderByWithRelationInput[];
    cursor?: Prisma.ContainerWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | ContainerCountAggregateInputType;
    _avg?: ContainerAvgAggregateInputType;
    _sum?: ContainerSumAggregateInputType;
    _min?: ContainerMinAggregateInputType;
    _max?: ContainerMaxAggregateInputType;
};
export type GetContainerAggregateType<T extends ContainerAggregateArgs> = {
    [P in keyof T & keyof AggregateContainer]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateContainer[P]> : Prisma.GetScalarType<T[P], AggregateContainer[P]>;
};
export type ContainerGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContainerWhereInput;
    orderBy?: Prisma.ContainerOrderByWithAggregationInput | Prisma.ContainerOrderByWithAggregationInput[];
    by: Prisma.ContainerScalarFieldEnum[] | Prisma.ContainerScalarFieldEnum;
    having?: Prisma.ContainerScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: ContainerCountAggregateInputType | true;
    _avg?: ContainerAvgAggregateInputType;
    _sum?: ContainerSumAggregateInputType;
    _min?: ContainerMinAggregateInputType;
    _max?: ContainerMaxAggregateInputType;
};
export type ContainerGroupByOutputType = {
    id: number;
    containerId: string;
    name: string;
    image: string;
    serverId: number;
    lastState: string;
    lastStatus: string;
    lastSeenAt: Date;
    _count: ContainerCountAggregateOutputType | null;
    _avg: ContainerAvgAggregateOutputType | null;
    _sum: ContainerSumAggregateOutputType | null;
    _min: ContainerMinAggregateOutputType | null;
    _max: ContainerMaxAggregateOutputType | null;
};
type GetContainerGroupByPayload<T extends ContainerGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<ContainerGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof ContainerGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], ContainerGroupByOutputType[P]> : Prisma.GetScalarType<T[P], ContainerGroupByOutputType[P]>;
}>>;
export type ContainerWhereInput = {
    AND?: Prisma.ContainerWhereInput | Prisma.ContainerWhereInput[];
    OR?: Prisma.ContainerWhereInput[];
    NOT?: Prisma.ContainerWhereInput | Prisma.ContainerWhereInput[];
    id?: Prisma.IntFilter<"Container"> | number;
    containerId?: Prisma.StringFilter<"Container"> | string;
    name?: Prisma.StringFilter<"Container"> | string;
    image?: Prisma.StringFilter<"Container"> | string;
    serverId?: Prisma.IntFilter<"Container"> | number;
    lastState?: Prisma.StringFilter<"Container"> | string;
    lastStatus?: Prisma.StringFilter<"Container"> | string;
    lastSeenAt?: Prisma.DateTimeFilter<"Container"> | Date | string;
    server?: Prisma.XOR<Prisma.ServerScalarRelationFilter, Prisma.ServerWhereInput>;
};
export type ContainerOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    containerId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    serverId?: Prisma.SortOrder;
    lastState?: Prisma.SortOrder;
    lastStatus?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
    server?: Prisma.ServerOrderByWithRelationInput;
};
export type ContainerWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    serverId_containerId?: Prisma.ContainerServerIdContainerIdCompoundUniqueInput;
    AND?: Prisma.ContainerWhereInput | Prisma.ContainerWhereInput[];
    OR?: Prisma.ContainerWhereInput[];
    NOT?: Prisma.ContainerWhereInput | Prisma.ContainerWhereInput[];
    containerId?: Prisma.StringFilter<"Container"> | string;
    name?: Prisma.StringFilter<"Container"> | string;
    image?: Prisma.StringFilter<"Container"> | string;
    serverId?: Prisma.IntFilter<"Container"> | number;
    lastState?: Prisma.StringFilter<"Container"> | string;
    lastStatus?: Prisma.StringFilter<"Container"> | string;
    lastSeenAt?: Prisma.DateTimeFilter<"Container"> | Date | string;
    server?: Prisma.XOR<Prisma.ServerScalarRelationFilter, Prisma.ServerWhereInput>;
}, "id" | "serverId_containerId">;
export type ContainerOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    containerId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    serverId?: Prisma.SortOrder;
    lastState?: Prisma.SortOrder;
    lastStatus?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
    _count?: Prisma.ContainerCountOrderByAggregateInput;
    _avg?: Prisma.ContainerAvgOrderByAggregateInput;
    _max?: Prisma.ContainerMaxOrderByAggregateInput;
    _min?: Prisma.ContainerMinOrderByAggregateInput;
    _sum?: Prisma.ContainerSumOrderByAggregateInput;
};
export type ContainerScalarWhereWithAggregatesInput = {
    AND?: Prisma.ContainerScalarWhereWithAggregatesInput | Prisma.ContainerScalarWhereWithAggregatesInput[];
    OR?: Prisma.ContainerScalarWhereWithAggregatesInput[];
    NOT?: Prisma.ContainerScalarWhereWithAggregatesInput | Prisma.ContainerScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Container"> | number;
    containerId?: Prisma.StringWithAggregatesFilter<"Container"> | string;
    name?: Prisma.StringWithAggregatesFilter<"Container"> | string;
    image?: Prisma.StringWithAggregatesFilter<"Container"> | string;
    serverId?: Prisma.IntWithAggregatesFilter<"Container"> | number;
    lastState?: Prisma.StringWithAggregatesFilter<"Container"> | string;
    lastStatus?: Prisma.StringWithAggregatesFilter<"Container"> | string;
    lastSeenAt?: Prisma.DateTimeWithAggregatesFilter<"Container"> | Date | string;
};
export type ContainerCreateInput = {
    containerId: string;
    name: string;
    image: string;
    lastState: string;
    lastStatus: string;
    lastSeenAt: Date | string;
    server: Prisma.ServerCreateNestedOneWithoutContainersInput;
};
export type ContainerUncheckedCreateInput = {
    id?: number;
    containerId: string;
    name: string;
    image: string;
    serverId: number;
    lastState: string;
    lastStatus: string;
    lastSeenAt: Date | string;
};
export type ContainerUpdateInput = {
    containerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    lastState?: Prisma.StringFieldUpdateOperationsInput | string;
    lastStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    server?: Prisma.ServerUpdateOneRequiredWithoutContainersNestedInput;
};
export type ContainerUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    containerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    serverId?: Prisma.IntFieldUpdateOperationsInput | number;
    lastState?: Prisma.StringFieldUpdateOperationsInput | string;
    lastStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContainerCreateManyInput = {
    id?: number;
    containerId: string;
    name: string;
    image: string;
    serverId: number;
    lastState: string;
    lastStatus: string;
    lastSeenAt: Date | string;
};
export type ContainerUpdateManyMutationInput = {
    containerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    lastState?: Prisma.StringFieldUpdateOperationsInput | string;
    lastStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContainerUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    containerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    serverId?: Prisma.IntFieldUpdateOperationsInput | number;
    lastState?: Prisma.StringFieldUpdateOperationsInput | string;
    lastStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContainerListRelationFilter = {
    every?: Prisma.ContainerWhereInput;
    some?: Prisma.ContainerWhereInput;
    none?: Prisma.ContainerWhereInput;
};
export type ContainerOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type ContainerServerIdContainerIdCompoundUniqueInput = {
    serverId: number;
    containerId: string;
};
export type ContainerCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    containerId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    serverId?: Prisma.SortOrder;
    lastState?: Prisma.SortOrder;
    lastStatus?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
};
export type ContainerAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    serverId?: Prisma.SortOrder;
};
export type ContainerMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    containerId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    serverId?: Prisma.SortOrder;
    lastState?: Prisma.SortOrder;
    lastStatus?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
};
export type ContainerMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    containerId?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    image?: Prisma.SortOrder;
    serverId?: Prisma.SortOrder;
    lastState?: Prisma.SortOrder;
    lastStatus?: Prisma.SortOrder;
    lastSeenAt?: Prisma.SortOrder;
};
export type ContainerSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    serverId?: Prisma.SortOrder;
};
export type ContainerCreateNestedManyWithoutServerInput = {
    create?: Prisma.XOR<Prisma.ContainerCreateWithoutServerInput, Prisma.ContainerUncheckedCreateWithoutServerInput> | Prisma.ContainerCreateWithoutServerInput[] | Prisma.ContainerUncheckedCreateWithoutServerInput[];
    connectOrCreate?: Prisma.ContainerCreateOrConnectWithoutServerInput | Prisma.ContainerCreateOrConnectWithoutServerInput[];
    createMany?: Prisma.ContainerCreateManyServerInputEnvelope;
    connect?: Prisma.ContainerWhereUniqueInput | Prisma.ContainerWhereUniqueInput[];
};
export type ContainerUncheckedCreateNestedManyWithoutServerInput = {
    create?: Prisma.XOR<Prisma.ContainerCreateWithoutServerInput, Prisma.ContainerUncheckedCreateWithoutServerInput> | Prisma.ContainerCreateWithoutServerInput[] | Prisma.ContainerUncheckedCreateWithoutServerInput[];
    connectOrCreate?: Prisma.ContainerCreateOrConnectWithoutServerInput | Prisma.ContainerCreateOrConnectWithoutServerInput[];
    createMany?: Prisma.ContainerCreateManyServerInputEnvelope;
    connect?: Prisma.ContainerWhereUniqueInput | Prisma.ContainerWhereUniqueInput[];
};
export type ContainerUpdateManyWithoutServerNestedInput = {
    create?: Prisma.XOR<Prisma.ContainerCreateWithoutServerInput, Prisma.ContainerUncheckedCreateWithoutServerInput> | Prisma.ContainerCreateWithoutServerInput[] | Prisma.ContainerUncheckedCreateWithoutServerInput[];
    connectOrCreate?: Prisma.ContainerCreateOrConnectWithoutServerInput | Prisma.ContainerCreateOrConnectWithoutServerInput[];
    upsert?: Prisma.ContainerUpsertWithWhereUniqueWithoutServerInput | Prisma.ContainerUpsertWithWhereUniqueWithoutServerInput[];
    createMany?: Prisma.ContainerCreateManyServerInputEnvelope;
    set?: Prisma.ContainerWhereUniqueInput | Prisma.ContainerWhereUniqueInput[];
    disconnect?: Prisma.ContainerWhereUniqueInput | Prisma.ContainerWhereUniqueInput[];
    delete?: Prisma.ContainerWhereUniqueInput | Prisma.ContainerWhereUniqueInput[];
    connect?: Prisma.ContainerWhereUniqueInput | Prisma.ContainerWhereUniqueInput[];
    update?: Prisma.ContainerUpdateWithWhereUniqueWithoutServerInput | Prisma.ContainerUpdateWithWhereUniqueWithoutServerInput[];
    updateMany?: Prisma.ContainerUpdateManyWithWhereWithoutServerInput | Prisma.ContainerUpdateManyWithWhereWithoutServerInput[];
    deleteMany?: Prisma.ContainerScalarWhereInput | Prisma.ContainerScalarWhereInput[];
};
export type ContainerUncheckedUpdateManyWithoutServerNestedInput = {
    create?: Prisma.XOR<Prisma.ContainerCreateWithoutServerInput, Prisma.ContainerUncheckedCreateWithoutServerInput> | Prisma.ContainerCreateWithoutServerInput[] | Prisma.ContainerUncheckedCreateWithoutServerInput[];
    connectOrCreate?: Prisma.ContainerCreateOrConnectWithoutServerInput | Prisma.ContainerCreateOrConnectWithoutServerInput[];
    upsert?: Prisma.ContainerUpsertWithWhereUniqueWithoutServerInput | Prisma.ContainerUpsertWithWhereUniqueWithoutServerInput[];
    createMany?: Prisma.ContainerCreateManyServerInputEnvelope;
    set?: Prisma.ContainerWhereUniqueInput | Prisma.ContainerWhereUniqueInput[];
    disconnect?: Prisma.ContainerWhereUniqueInput | Prisma.ContainerWhereUniqueInput[];
    delete?: Prisma.ContainerWhereUniqueInput | Prisma.ContainerWhereUniqueInput[];
    connect?: Prisma.ContainerWhereUniqueInput | Prisma.ContainerWhereUniqueInput[];
    update?: Prisma.ContainerUpdateWithWhereUniqueWithoutServerInput | Prisma.ContainerUpdateWithWhereUniqueWithoutServerInput[];
    updateMany?: Prisma.ContainerUpdateManyWithWhereWithoutServerInput | Prisma.ContainerUpdateManyWithWhereWithoutServerInput[];
    deleteMany?: Prisma.ContainerScalarWhereInput | Prisma.ContainerScalarWhereInput[];
};
export type ContainerCreateWithoutServerInput = {
    containerId: string;
    name: string;
    image: string;
    lastState: string;
    lastStatus: string;
    lastSeenAt: Date | string;
};
export type ContainerUncheckedCreateWithoutServerInput = {
    id?: number;
    containerId: string;
    name: string;
    image: string;
    lastState: string;
    lastStatus: string;
    lastSeenAt: Date | string;
};
export type ContainerCreateOrConnectWithoutServerInput = {
    where: Prisma.ContainerWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContainerCreateWithoutServerInput, Prisma.ContainerUncheckedCreateWithoutServerInput>;
};
export type ContainerCreateManyServerInputEnvelope = {
    data: Prisma.ContainerCreateManyServerInput | Prisma.ContainerCreateManyServerInput[];
    skipDuplicates?: boolean;
};
export type ContainerUpsertWithWhereUniqueWithoutServerInput = {
    where: Prisma.ContainerWhereUniqueInput;
    update: Prisma.XOR<Prisma.ContainerUpdateWithoutServerInput, Prisma.ContainerUncheckedUpdateWithoutServerInput>;
    create: Prisma.XOR<Prisma.ContainerCreateWithoutServerInput, Prisma.ContainerUncheckedCreateWithoutServerInput>;
};
export type ContainerUpdateWithWhereUniqueWithoutServerInput = {
    where: Prisma.ContainerWhereUniqueInput;
    data: Prisma.XOR<Prisma.ContainerUpdateWithoutServerInput, Prisma.ContainerUncheckedUpdateWithoutServerInput>;
};
export type ContainerUpdateManyWithWhereWithoutServerInput = {
    where: Prisma.ContainerScalarWhereInput;
    data: Prisma.XOR<Prisma.ContainerUpdateManyMutationInput, Prisma.ContainerUncheckedUpdateManyWithoutServerInput>;
};
export type ContainerScalarWhereInput = {
    AND?: Prisma.ContainerScalarWhereInput | Prisma.ContainerScalarWhereInput[];
    OR?: Prisma.ContainerScalarWhereInput[];
    NOT?: Prisma.ContainerScalarWhereInput | Prisma.ContainerScalarWhereInput[];
    id?: Prisma.IntFilter<"Container"> | number;
    containerId?: Prisma.StringFilter<"Container"> | string;
    name?: Prisma.StringFilter<"Container"> | string;
    image?: Prisma.StringFilter<"Container"> | string;
    serverId?: Prisma.IntFilter<"Container"> | number;
    lastState?: Prisma.StringFilter<"Container"> | string;
    lastStatus?: Prisma.StringFilter<"Container"> | string;
    lastSeenAt?: Prisma.DateTimeFilter<"Container"> | Date | string;
};
export type ContainerCreateManyServerInput = {
    id?: number;
    containerId: string;
    name: string;
    image: string;
    lastState: string;
    lastStatus: string;
    lastSeenAt: Date | string;
};
export type ContainerUpdateWithoutServerInput = {
    containerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    lastState?: Prisma.StringFieldUpdateOperationsInput | string;
    lastStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContainerUncheckedUpdateWithoutServerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    containerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    lastState?: Prisma.StringFieldUpdateOperationsInput | string;
    lastStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContainerUncheckedUpdateManyWithoutServerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    containerId?: Prisma.StringFieldUpdateOperationsInput | string;
    name?: Prisma.StringFieldUpdateOperationsInput | string;
    image?: Prisma.StringFieldUpdateOperationsInput | string;
    lastState?: Prisma.StringFieldUpdateOperationsInput | string;
    lastStatus?: Prisma.StringFieldUpdateOperationsInput | string;
    lastSeenAt?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type ContainerSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    containerId?: boolean;
    name?: boolean;
    image?: boolean;
    serverId?: boolean;
    lastState?: boolean;
    lastStatus?: boolean;
    lastSeenAt?: boolean;
    server?: boolean | Prisma.ServerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["container"]>;
export type ContainerSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    containerId?: boolean;
    name?: boolean;
    image?: boolean;
    serverId?: boolean;
    lastState?: boolean;
    lastStatus?: boolean;
    lastSeenAt?: boolean;
    server?: boolean | Prisma.ServerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["container"]>;
export type ContainerSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    containerId?: boolean;
    name?: boolean;
    image?: boolean;
    serverId?: boolean;
    lastState?: boolean;
    lastStatus?: boolean;
    lastSeenAt?: boolean;
    server?: boolean | Prisma.ServerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["container"]>;
export type ContainerSelectScalar = {
    id?: boolean;
    containerId?: boolean;
    name?: boolean;
    image?: boolean;
    serverId?: boolean;
    lastState?: boolean;
    lastStatus?: boolean;
    lastSeenAt?: boolean;
};
export type ContainerOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "containerId" | "name" | "image" | "serverId" | "lastState" | "lastStatus" | "lastSeenAt", ExtArgs["result"]["container"]>;
export type ContainerInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    server?: boolean | Prisma.ServerDefaultArgs<ExtArgs>;
};
export type ContainerIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    server?: boolean | Prisma.ServerDefaultArgs<ExtArgs>;
};
export type ContainerIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    server?: boolean | Prisma.ServerDefaultArgs<ExtArgs>;
};
export type $ContainerPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Container";
    objects: {
        server: Prisma.$ServerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        containerId: string;
        name: string;
        image: string;
        serverId: number;
        lastState: string;
        lastStatus: string;
        lastSeenAt: Date;
    }, ExtArgs["result"]["container"]>;
    composites: {};
};
export type ContainerGetPayload<S extends boolean | null | undefined | ContainerDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$ContainerPayload, S>;
export type ContainerCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<ContainerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: ContainerCountAggregateInputType | true;
};
export interface ContainerDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Container'];
        meta: {
            name: 'Container';
        };
    };
    findUnique<T extends ContainerFindUniqueArgs>(args: Prisma.SelectSubset<T, ContainerFindUniqueArgs<ExtArgs>>): Prisma.Prisma__ContainerClient<runtime.Types.Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends ContainerFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, ContainerFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContainerClient<runtime.Types.Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends ContainerFindFirstArgs>(args?: Prisma.SelectSubset<T, ContainerFindFirstArgs<ExtArgs>>): Prisma.Prisma__ContainerClient<runtime.Types.Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends ContainerFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, ContainerFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__ContainerClient<runtime.Types.Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends ContainerFindManyArgs>(args?: Prisma.SelectSubset<T, ContainerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends ContainerCreateArgs>(args: Prisma.SelectSubset<T, ContainerCreateArgs<ExtArgs>>): Prisma.Prisma__ContainerClient<runtime.Types.Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends ContainerCreateManyArgs>(args?: Prisma.SelectSubset<T, ContainerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends ContainerCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, ContainerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends ContainerDeleteArgs>(args: Prisma.SelectSubset<T, ContainerDeleteArgs<ExtArgs>>): Prisma.Prisma__ContainerClient<runtime.Types.Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends ContainerUpdateArgs>(args: Prisma.SelectSubset<T, ContainerUpdateArgs<ExtArgs>>): Prisma.Prisma__ContainerClient<runtime.Types.Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends ContainerDeleteManyArgs>(args?: Prisma.SelectSubset<T, ContainerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends ContainerUpdateManyArgs>(args: Prisma.SelectSubset<T, ContainerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends ContainerUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, ContainerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends ContainerUpsertArgs>(args: Prisma.SelectSubset<T, ContainerUpsertArgs<ExtArgs>>): Prisma.Prisma__ContainerClient<runtime.Types.Result.GetResult<Prisma.$ContainerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends ContainerCountArgs>(args?: Prisma.Subset<T, ContainerCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], ContainerCountAggregateOutputType> : number>;
    aggregate<T extends ContainerAggregateArgs>(args: Prisma.Subset<T, ContainerAggregateArgs>): Prisma.PrismaPromise<GetContainerAggregateType<T>>;
    groupBy<T extends ContainerGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: ContainerGroupByArgs['orderBy'];
    } : {
        orderBy?: ContainerGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, ContainerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetContainerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: ContainerFieldRefs;
}
export interface Prisma__ContainerClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    server<T extends Prisma.ServerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ServerDefaultArgs<ExtArgs>>): Prisma.Prisma__ServerClient<runtime.Types.Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface ContainerFieldRefs {
    readonly id: Prisma.FieldRef<"Container", 'Int'>;
    readonly containerId: Prisma.FieldRef<"Container", 'String'>;
    readonly name: Prisma.FieldRef<"Container", 'String'>;
    readonly image: Prisma.FieldRef<"Container", 'String'>;
    readonly serverId: Prisma.FieldRef<"Container", 'Int'>;
    readonly lastState: Prisma.FieldRef<"Container", 'String'>;
    readonly lastStatus: Prisma.FieldRef<"Container", 'String'>;
    readonly lastSeenAt: Prisma.FieldRef<"Container", 'DateTime'>;
}
export type ContainerFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContainerSelect<ExtArgs> | null;
    omit?: Prisma.ContainerOmit<ExtArgs> | null;
    include?: Prisma.ContainerInclude<ExtArgs> | null;
    where: Prisma.ContainerWhereUniqueInput;
};
export type ContainerFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContainerSelect<ExtArgs> | null;
    omit?: Prisma.ContainerOmit<ExtArgs> | null;
    include?: Prisma.ContainerInclude<ExtArgs> | null;
    where: Prisma.ContainerWhereUniqueInput;
};
export type ContainerFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ContainerFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ContainerFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type ContainerCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContainerSelect<ExtArgs> | null;
    omit?: Prisma.ContainerOmit<ExtArgs> | null;
    include?: Prisma.ContainerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContainerCreateInput, Prisma.ContainerUncheckedCreateInput>;
};
export type ContainerCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.ContainerCreateManyInput | Prisma.ContainerCreateManyInput[];
    skipDuplicates?: boolean;
};
export type ContainerCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContainerSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContainerOmit<ExtArgs> | null;
    data: Prisma.ContainerCreateManyInput | Prisma.ContainerCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.ContainerIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type ContainerUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContainerSelect<ExtArgs> | null;
    omit?: Prisma.ContainerOmit<ExtArgs> | null;
    include?: Prisma.ContainerInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContainerUpdateInput, Prisma.ContainerUncheckedUpdateInput>;
    where: Prisma.ContainerWhereUniqueInput;
};
export type ContainerUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.ContainerUpdateManyMutationInput, Prisma.ContainerUncheckedUpdateManyInput>;
    where?: Prisma.ContainerWhereInput;
    limit?: number;
};
export type ContainerUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContainerSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.ContainerOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.ContainerUpdateManyMutationInput, Prisma.ContainerUncheckedUpdateManyInput>;
    where?: Prisma.ContainerWhereInput;
    limit?: number;
    include?: Prisma.ContainerIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type ContainerUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContainerSelect<ExtArgs> | null;
    omit?: Prisma.ContainerOmit<ExtArgs> | null;
    include?: Prisma.ContainerInclude<ExtArgs> | null;
    where: Prisma.ContainerWhereUniqueInput;
    create: Prisma.XOR<Prisma.ContainerCreateInput, Prisma.ContainerUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.ContainerUpdateInput, Prisma.ContainerUncheckedUpdateInput>;
};
export type ContainerDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContainerSelect<ExtArgs> | null;
    omit?: Prisma.ContainerOmit<ExtArgs> | null;
    include?: Prisma.ContainerInclude<ExtArgs> | null;
    where: Prisma.ContainerWhereUniqueInput;
};
export type ContainerDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ContainerWhereInput;
    limit?: number;
};
export type ContainerDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.ContainerSelect<ExtArgs> | null;
    omit?: Prisma.ContainerOmit<ExtArgs> | null;
    include?: Prisma.ContainerInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Container.d.ts.map