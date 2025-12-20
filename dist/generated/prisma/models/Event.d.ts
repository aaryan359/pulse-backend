import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type EventModel = runtime.Types.Result.DefaultSelection<Prisma.$EventPayload>;
export type AggregateEvent = {
    _count: EventCountAggregateOutputType | null;
    _avg: EventAvgAggregateOutputType | null;
    _sum: EventSumAggregateOutputType | null;
    _min: EventMinAggregateOutputType | null;
    _max: EventMaxAggregateOutputType | null;
};
export type EventAvgAggregateOutputType = {
    id: number | null;
    serverId: number | null;
};
export type EventSumAggregateOutputType = {
    id: number | null;
    serverId: number | null;
};
export type EventMinAggregateOutputType = {
    id: number | null;
    type: string | null;
    severity: string | null;
    message: string | null;
    serverId: number | null;
    created_at: Date | null;
};
export type EventMaxAggregateOutputType = {
    id: number | null;
    type: string | null;
    severity: string | null;
    message: string | null;
    serverId: number | null;
    created_at: Date | null;
};
export type EventCountAggregateOutputType = {
    id: number;
    type: number;
    severity: number;
    message: number;
    serverId: number;
    created_at: number;
    _all: number;
};
export type EventAvgAggregateInputType = {
    id?: true;
    serverId?: true;
};
export type EventSumAggregateInputType = {
    id?: true;
    serverId?: true;
};
export type EventMinAggregateInputType = {
    id?: true;
    type?: true;
    severity?: true;
    message?: true;
    serverId?: true;
    created_at?: true;
};
export type EventMaxAggregateInputType = {
    id?: true;
    type?: true;
    severity?: true;
    message?: true;
    serverId?: true;
    created_at?: true;
};
export type EventCountAggregateInputType = {
    id?: true;
    type?: true;
    severity?: true;
    message?: true;
    serverId?: true;
    created_at?: true;
    _all?: true;
};
export type EventAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventWhereInput;
    orderBy?: Prisma.EventOrderByWithRelationInput | Prisma.EventOrderByWithRelationInput[];
    cursor?: Prisma.EventWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | EventCountAggregateInputType;
    _avg?: EventAvgAggregateInputType;
    _sum?: EventSumAggregateInputType;
    _min?: EventMinAggregateInputType;
    _max?: EventMaxAggregateInputType;
};
export type GetEventAggregateType<T extends EventAggregateArgs> = {
    [P in keyof T & keyof AggregateEvent]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateEvent[P]> : Prisma.GetScalarType<T[P], AggregateEvent[P]>;
};
export type EventGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventWhereInput;
    orderBy?: Prisma.EventOrderByWithAggregationInput | Prisma.EventOrderByWithAggregationInput[];
    by: Prisma.EventScalarFieldEnum[] | Prisma.EventScalarFieldEnum;
    having?: Prisma.EventScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: EventCountAggregateInputType | true;
    _avg?: EventAvgAggregateInputType;
    _sum?: EventSumAggregateInputType;
    _min?: EventMinAggregateInputType;
    _max?: EventMaxAggregateInputType;
};
export type EventGroupByOutputType = {
    id: number;
    type: string;
    severity: string;
    message: string;
    serverId: number;
    created_at: Date;
    _count: EventCountAggregateOutputType | null;
    _avg: EventAvgAggregateOutputType | null;
    _sum: EventSumAggregateOutputType | null;
    _min: EventMinAggregateOutputType | null;
    _max: EventMaxAggregateOutputType | null;
};
type GetEventGroupByPayload<T extends EventGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<EventGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof EventGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], EventGroupByOutputType[P]> : Prisma.GetScalarType<T[P], EventGroupByOutputType[P]>;
}>>;
export type EventWhereInput = {
    AND?: Prisma.EventWhereInput | Prisma.EventWhereInput[];
    OR?: Prisma.EventWhereInput[];
    NOT?: Prisma.EventWhereInput | Prisma.EventWhereInput[];
    id?: Prisma.IntFilter<"Event"> | number;
    type?: Prisma.StringFilter<"Event"> | string;
    severity?: Prisma.StringFilter<"Event"> | string;
    message?: Prisma.StringFilter<"Event"> | string;
    serverId?: Prisma.IntFilter<"Event"> | number;
    created_at?: Prisma.DateTimeFilter<"Event"> | Date | string;
    server?: Prisma.XOR<Prisma.ServerScalarRelationFilter, Prisma.ServerWhereInput>;
};
export type EventOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    serverId?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    server?: Prisma.ServerOrderByWithRelationInput;
};
export type EventWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    AND?: Prisma.EventWhereInput | Prisma.EventWhereInput[];
    OR?: Prisma.EventWhereInput[];
    NOT?: Prisma.EventWhereInput | Prisma.EventWhereInput[];
    type?: Prisma.StringFilter<"Event"> | string;
    severity?: Prisma.StringFilter<"Event"> | string;
    message?: Prisma.StringFilter<"Event"> | string;
    serverId?: Prisma.IntFilter<"Event"> | number;
    created_at?: Prisma.DateTimeFilter<"Event"> | Date | string;
    server?: Prisma.XOR<Prisma.ServerScalarRelationFilter, Prisma.ServerWhereInput>;
}, "id">;
export type EventOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    serverId?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    _count?: Prisma.EventCountOrderByAggregateInput;
    _avg?: Prisma.EventAvgOrderByAggregateInput;
    _max?: Prisma.EventMaxOrderByAggregateInput;
    _min?: Prisma.EventMinOrderByAggregateInput;
    _sum?: Prisma.EventSumOrderByAggregateInput;
};
export type EventScalarWhereWithAggregatesInput = {
    AND?: Prisma.EventScalarWhereWithAggregatesInput | Prisma.EventScalarWhereWithAggregatesInput[];
    OR?: Prisma.EventScalarWhereWithAggregatesInput[];
    NOT?: Prisma.EventScalarWhereWithAggregatesInput | Prisma.EventScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"Event"> | number;
    type?: Prisma.StringWithAggregatesFilter<"Event"> | string;
    severity?: Prisma.StringWithAggregatesFilter<"Event"> | string;
    message?: Prisma.StringWithAggregatesFilter<"Event"> | string;
    serverId?: Prisma.IntWithAggregatesFilter<"Event"> | number;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"Event"> | Date | string;
};
export type EventCreateInput = {
    type: string;
    severity: string;
    message: string;
    created_at?: Date | string;
    server: Prisma.ServerCreateNestedOneWithoutEventsInput;
};
export type EventUncheckedCreateInput = {
    id?: number;
    type: string;
    severity: string;
    message: string;
    serverId: number;
    created_at?: Date | string;
};
export type EventUpdateInput = {
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    server?: Prisma.ServerUpdateOneRequiredWithoutEventsNestedInput;
};
export type EventUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    serverId?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventCreateManyInput = {
    id?: number;
    type: string;
    severity: string;
    message: string;
    serverId: number;
    created_at?: Date | string;
};
export type EventUpdateManyMutationInput = {
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    serverId?: Prisma.IntFieldUpdateOperationsInput | number;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventListRelationFilter = {
    every?: Prisma.EventWhereInput;
    some?: Prisma.EventWhereInput;
    none?: Prisma.EventWhereInput;
};
export type EventOrderByRelationAggregateInput = {
    _count?: Prisma.SortOrder;
};
export type EventCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    serverId?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type EventAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    serverId?: Prisma.SortOrder;
};
export type EventMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    serverId?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type EventMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    type?: Prisma.SortOrder;
    severity?: Prisma.SortOrder;
    message?: Prisma.SortOrder;
    serverId?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
};
export type EventSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    serverId?: Prisma.SortOrder;
};
export type EventCreateNestedManyWithoutServerInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutServerInput, Prisma.EventUncheckedCreateWithoutServerInput> | Prisma.EventCreateWithoutServerInput[] | Prisma.EventUncheckedCreateWithoutServerInput[];
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutServerInput | Prisma.EventCreateOrConnectWithoutServerInput[];
    createMany?: Prisma.EventCreateManyServerInputEnvelope;
    connect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
};
export type EventUncheckedCreateNestedManyWithoutServerInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutServerInput, Prisma.EventUncheckedCreateWithoutServerInput> | Prisma.EventCreateWithoutServerInput[] | Prisma.EventUncheckedCreateWithoutServerInput[];
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutServerInput | Prisma.EventCreateOrConnectWithoutServerInput[];
    createMany?: Prisma.EventCreateManyServerInputEnvelope;
    connect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
};
export type EventUpdateManyWithoutServerNestedInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutServerInput, Prisma.EventUncheckedCreateWithoutServerInput> | Prisma.EventCreateWithoutServerInput[] | Prisma.EventUncheckedCreateWithoutServerInput[];
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutServerInput | Prisma.EventCreateOrConnectWithoutServerInput[];
    upsert?: Prisma.EventUpsertWithWhereUniqueWithoutServerInput | Prisma.EventUpsertWithWhereUniqueWithoutServerInput[];
    createMany?: Prisma.EventCreateManyServerInputEnvelope;
    set?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    disconnect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    delete?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    connect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    update?: Prisma.EventUpdateWithWhereUniqueWithoutServerInput | Prisma.EventUpdateWithWhereUniqueWithoutServerInput[];
    updateMany?: Prisma.EventUpdateManyWithWhereWithoutServerInput | Prisma.EventUpdateManyWithWhereWithoutServerInput[];
    deleteMany?: Prisma.EventScalarWhereInput | Prisma.EventScalarWhereInput[];
};
export type EventUncheckedUpdateManyWithoutServerNestedInput = {
    create?: Prisma.XOR<Prisma.EventCreateWithoutServerInput, Prisma.EventUncheckedCreateWithoutServerInput> | Prisma.EventCreateWithoutServerInput[] | Prisma.EventUncheckedCreateWithoutServerInput[];
    connectOrCreate?: Prisma.EventCreateOrConnectWithoutServerInput | Prisma.EventCreateOrConnectWithoutServerInput[];
    upsert?: Prisma.EventUpsertWithWhereUniqueWithoutServerInput | Prisma.EventUpsertWithWhereUniqueWithoutServerInput[];
    createMany?: Prisma.EventCreateManyServerInputEnvelope;
    set?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    disconnect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    delete?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    connect?: Prisma.EventWhereUniqueInput | Prisma.EventWhereUniqueInput[];
    update?: Prisma.EventUpdateWithWhereUniqueWithoutServerInput | Prisma.EventUpdateWithWhereUniqueWithoutServerInput[];
    updateMany?: Prisma.EventUpdateManyWithWhereWithoutServerInput | Prisma.EventUpdateManyWithWhereWithoutServerInput[];
    deleteMany?: Prisma.EventScalarWhereInput | Prisma.EventScalarWhereInput[];
};
export type EventCreateWithoutServerInput = {
    type: string;
    severity: string;
    message: string;
    created_at?: Date | string;
};
export type EventUncheckedCreateWithoutServerInput = {
    id?: number;
    type: string;
    severity: string;
    message: string;
    created_at?: Date | string;
};
export type EventCreateOrConnectWithoutServerInput = {
    where: Prisma.EventWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventCreateWithoutServerInput, Prisma.EventUncheckedCreateWithoutServerInput>;
};
export type EventCreateManyServerInputEnvelope = {
    data: Prisma.EventCreateManyServerInput | Prisma.EventCreateManyServerInput[];
    skipDuplicates?: boolean;
};
export type EventUpsertWithWhereUniqueWithoutServerInput = {
    where: Prisma.EventWhereUniqueInput;
    update: Prisma.XOR<Prisma.EventUpdateWithoutServerInput, Prisma.EventUncheckedUpdateWithoutServerInput>;
    create: Prisma.XOR<Prisma.EventCreateWithoutServerInput, Prisma.EventUncheckedCreateWithoutServerInput>;
};
export type EventUpdateWithWhereUniqueWithoutServerInput = {
    where: Prisma.EventWhereUniqueInput;
    data: Prisma.XOR<Prisma.EventUpdateWithoutServerInput, Prisma.EventUncheckedUpdateWithoutServerInput>;
};
export type EventUpdateManyWithWhereWithoutServerInput = {
    where: Prisma.EventScalarWhereInput;
    data: Prisma.XOR<Prisma.EventUpdateManyMutationInput, Prisma.EventUncheckedUpdateManyWithoutServerInput>;
};
export type EventScalarWhereInput = {
    AND?: Prisma.EventScalarWhereInput | Prisma.EventScalarWhereInput[];
    OR?: Prisma.EventScalarWhereInput[];
    NOT?: Prisma.EventScalarWhereInput | Prisma.EventScalarWhereInput[];
    id?: Prisma.IntFilter<"Event"> | number;
    type?: Prisma.StringFilter<"Event"> | string;
    severity?: Prisma.StringFilter<"Event"> | string;
    message?: Prisma.StringFilter<"Event"> | string;
    serverId?: Prisma.IntFilter<"Event"> | number;
    created_at?: Prisma.DateTimeFilter<"Event"> | Date | string;
};
export type EventCreateManyServerInput = {
    id?: number;
    type: string;
    severity: string;
    message: string;
    created_at?: Date | string;
};
export type EventUpdateWithoutServerInput = {
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventUncheckedUpdateWithoutServerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventUncheckedUpdateManyWithoutServerInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    type?: Prisma.StringFieldUpdateOperationsInput | string;
    severity?: Prisma.StringFieldUpdateOperationsInput | string;
    message?: Prisma.StringFieldUpdateOperationsInput | string;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type EventSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    severity?: boolean;
    message?: boolean;
    serverId?: boolean;
    created_at?: boolean;
    server?: boolean | Prisma.ServerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["event"]>;
export type EventSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    severity?: boolean;
    message?: boolean;
    serverId?: boolean;
    created_at?: boolean;
    server?: boolean | Prisma.ServerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["event"]>;
export type EventSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    type?: boolean;
    severity?: boolean;
    message?: boolean;
    serverId?: boolean;
    created_at?: boolean;
    server?: boolean | Prisma.ServerDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["event"]>;
export type EventSelectScalar = {
    id?: boolean;
    type?: boolean;
    severity?: boolean;
    message?: boolean;
    serverId?: boolean;
    created_at?: boolean;
};
export type EventOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "type" | "severity" | "message" | "serverId" | "created_at", ExtArgs["result"]["event"]>;
export type EventInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    server?: boolean | Prisma.ServerDefaultArgs<ExtArgs>;
};
export type EventIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    server?: boolean | Prisma.ServerDefaultArgs<ExtArgs>;
};
export type EventIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    server?: boolean | Prisma.ServerDefaultArgs<ExtArgs>;
};
export type $EventPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "Event";
    objects: {
        server: Prisma.$ServerPayload<ExtArgs>;
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        type: string;
        severity: string;
        message: string;
        serverId: number;
        created_at: Date;
    }, ExtArgs["result"]["event"]>;
    composites: {};
};
export type EventGetPayload<S extends boolean | null | undefined | EventDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$EventPayload, S>;
export type EventCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<EventFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: EventCountAggregateInputType | true;
};
export interface EventDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['Event'];
        meta: {
            name: 'Event';
        };
    };
    findUnique<T extends EventFindUniqueArgs>(args: Prisma.SelectSubset<T, EventFindUniqueArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends EventFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, EventFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends EventFindFirstArgs>(args?: Prisma.SelectSubset<T, EventFindFirstArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends EventFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, EventFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends EventFindManyArgs>(args?: Prisma.SelectSubset<T, EventFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends EventCreateArgs>(args: Prisma.SelectSubset<T, EventCreateArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends EventCreateManyArgs>(args?: Prisma.SelectSubset<T, EventCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends EventCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, EventCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends EventDeleteArgs>(args: Prisma.SelectSubset<T, EventDeleteArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends EventUpdateArgs>(args: Prisma.SelectSubset<T, EventUpdateArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends EventDeleteManyArgs>(args?: Prisma.SelectSubset<T, EventDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends EventUpdateManyArgs>(args: Prisma.SelectSubset<T, EventUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends EventUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, EventUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends EventUpsertArgs>(args: Prisma.SelectSubset<T, EventUpsertArgs<ExtArgs>>): Prisma.Prisma__EventClient<runtime.Types.Result.GetResult<Prisma.$EventPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends EventCountArgs>(args?: Prisma.Subset<T, EventCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], EventCountAggregateOutputType> : number>;
    aggregate<T extends EventAggregateArgs>(args: Prisma.Subset<T, EventAggregateArgs>): Prisma.PrismaPromise<GetEventAggregateType<T>>;
    groupBy<T extends EventGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: EventGroupByArgs['orderBy'];
    } : {
        orderBy?: EventGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, EventGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetEventGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: EventFieldRefs;
}
export interface Prisma__EventClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    server<T extends Prisma.ServerDefaultArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.ServerDefaultArgs<ExtArgs>>): Prisma.Prisma__ServerClient<runtime.Types.Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface EventFieldRefs {
    readonly id: Prisma.FieldRef<"Event", 'Int'>;
    readonly type: Prisma.FieldRef<"Event", 'String'>;
    readonly severity: Prisma.FieldRef<"Event", 'String'>;
    readonly message: Prisma.FieldRef<"Event", 'String'>;
    readonly serverId: Prisma.FieldRef<"Event", 'Int'>;
    readonly created_at: Prisma.FieldRef<"Event", 'DateTime'>;
}
export type EventFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    where: Prisma.EventWhereUniqueInput;
};
export type EventFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    where: Prisma.EventWhereUniqueInput;
};
export type EventFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EventFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EventFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type EventCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EventCreateInput, Prisma.EventUncheckedCreateInput>;
};
export type EventCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.EventCreateManyInput | Prisma.EventCreateManyInput[];
    skipDuplicates?: boolean;
};
export type EventCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    data: Prisma.EventCreateManyInput | Prisma.EventCreateManyInput[];
    skipDuplicates?: boolean;
    include?: Prisma.EventIncludeCreateManyAndReturn<ExtArgs> | null;
};
export type EventUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EventUpdateInput, Prisma.EventUncheckedUpdateInput>;
    where: Prisma.EventWhereUniqueInput;
};
export type EventUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.EventUpdateManyMutationInput, Prisma.EventUncheckedUpdateManyInput>;
    where?: Prisma.EventWhereInput;
    limit?: number;
};
export type EventUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.EventUpdateManyMutationInput, Prisma.EventUncheckedUpdateManyInput>;
    where?: Prisma.EventWhereInput;
    limit?: number;
    include?: Prisma.EventIncludeUpdateManyAndReturn<ExtArgs> | null;
};
export type EventUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    where: Prisma.EventWhereUniqueInput;
    create: Prisma.XOR<Prisma.EventCreateInput, Prisma.EventUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.EventUpdateInput, Prisma.EventUncheckedUpdateInput>;
};
export type EventDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
    where: Prisma.EventWhereUniqueInput;
};
export type EventDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.EventWhereInput;
    limit?: number;
};
export type EventDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.EventSelect<ExtArgs> | null;
    omit?: Prisma.EventOmit<ExtArgs> | null;
    include?: Prisma.EventInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=Event.d.ts.map