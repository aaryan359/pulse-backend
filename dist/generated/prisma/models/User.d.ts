import type * as runtime from "@prisma/client/runtime/client";
import type * as Prisma from "../internal/prismaNamespace";
export type UserModel = runtime.Types.Result.DefaultSelection<Prisma.$UserPayload>;
export type AggregateUser = {
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
export type UserAvgAggregateOutputType = {
    id: number | null;
};
export type UserSumAggregateOutputType = {
    id: number | null;
};
export type UserMinAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    password: string | null;
    profilePicture: string | null;
    subscribed: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type UserMaxAggregateOutputType = {
    id: number | null;
    name: string | null;
    email: string | null;
    password: string | null;
    profilePicture: string | null;
    subscribed: boolean | null;
    created_at: Date | null;
    updated_at: Date | null;
};
export type UserCountAggregateOutputType = {
    id: number;
    name: number;
    email: number;
    password: number;
    profilePicture: number;
    subscribed: number;
    created_at: number;
    updated_at: number;
    _all: number;
};
export type UserAvgAggregateInputType = {
    id?: true;
};
export type UserSumAggregateInputType = {
    id?: true;
};
export type UserMinAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    profilePicture?: true;
    subscribed?: true;
    created_at?: true;
    updated_at?: true;
};
export type UserMaxAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    profilePicture?: true;
    subscribed?: true;
    created_at?: true;
    updated_at?: true;
};
export type UserCountAggregateInputType = {
    id?: true;
    name?: true;
    email?: true;
    password?: true;
    profilePicture?: true;
    subscribed?: true;
    created_at?: true;
    updated_at?: true;
    _all?: true;
};
export type UserAggregateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    _count?: true | UserCountAggregateInputType;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type GetUserAggregateType<T extends UserAggregateArgs> = {
    [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count' ? T[P] extends true ? number : Prisma.GetScalarType<T[P], AggregateUser[P]> : Prisma.GetScalarType<T[P], AggregateUser[P]>;
};
export type UserGroupByArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithAggregationInput | Prisma.UserOrderByWithAggregationInput[];
    by: Prisma.UserScalarFieldEnum[] | Prisma.UserScalarFieldEnum;
    having?: Prisma.UserScalarWhereWithAggregatesInput;
    take?: number;
    skip?: number;
    _count?: UserCountAggregateInputType | true;
    _avg?: UserAvgAggregateInputType;
    _sum?: UserSumAggregateInputType;
    _min?: UserMinAggregateInputType;
    _max?: UserMaxAggregateInputType;
};
export type UserGroupByOutputType = {
    id: number;
    name: string | null;
    email: string;
    password: string | null;
    profilePicture: string | null;
    subscribed: boolean;
    created_at: Date;
    updated_at: Date;
    _count: UserCountAggregateOutputType | null;
    _avg: UserAvgAggregateOutputType | null;
    _sum: UserSumAggregateOutputType | null;
    _min: UserMinAggregateOutputType | null;
    _max: UserMaxAggregateOutputType | null;
};
type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<Array<Prisma.PickEnumerable<UserGroupByOutputType, T['by']> & {
    [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count' ? T[P] extends boolean ? number : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]> : Prisma.GetScalarType<T[P], UserGroupByOutputType[P]>;
}>>;
export type UserWhereInput = {
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    id?: Prisma.IntFilter<"User"> | number;
    name?: Prisma.StringNullableFilter<"User"> | string | null;
    email?: Prisma.StringFilter<"User"> | string;
    password?: Prisma.StringNullableFilter<"User"> | string | null;
    profilePicture?: Prisma.StringNullableFilter<"User"> | string | null;
    subscribed?: Prisma.BoolFilter<"User"> | boolean;
    created_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    servers?: Prisma.ServerListRelationFilter;
    apiKeys?: Prisma.ApiKeyListRelationFilter;
};
export type UserOrderByWithRelationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrderInput | Prisma.SortOrder;
    profilePicture?: Prisma.SortOrderInput | Prisma.SortOrder;
    subscribed?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    servers?: Prisma.ServerOrderByRelationAggregateInput;
    apiKeys?: Prisma.ApiKeyOrderByRelationAggregateInput;
};
export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: number;
    email?: string;
    AND?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    OR?: Prisma.UserWhereInput[];
    NOT?: Prisma.UserWhereInput | Prisma.UserWhereInput[];
    name?: Prisma.StringNullableFilter<"User"> | string | null;
    password?: Prisma.StringNullableFilter<"User"> | string | null;
    profilePicture?: Prisma.StringNullableFilter<"User"> | string | null;
    subscribed?: Prisma.BoolFilter<"User"> | boolean;
    created_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    updated_at?: Prisma.DateTimeFilter<"User"> | Date | string;
    servers?: Prisma.ServerListRelationFilter;
    apiKeys?: Prisma.ApiKeyListRelationFilter;
}, "id" | "email">;
export type UserOrderByWithAggregationInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrderInput | Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrderInput | Prisma.SortOrder;
    profilePicture?: Prisma.SortOrderInput | Prisma.SortOrder;
    subscribed?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
    _count?: Prisma.UserCountOrderByAggregateInput;
    _avg?: Prisma.UserAvgOrderByAggregateInput;
    _max?: Prisma.UserMaxOrderByAggregateInput;
    _min?: Prisma.UserMinOrderByAggregateInput;
    _sum?: Prisma.UserSumOrderByAggregateInput;
};
export type UserScalarWhereWithAggregatesInput = {
    AND?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    OR?: Prisma.UserScalarWhereWithAggregatesInput[];
    NOT?: Prisma.UserScalarWhereWithAggregatesInput | Prisma.UserScalarWhereWithAggregatesInput[];
    id?: Prisma.IntWithAggregatesFilter<"User"> | number;
    name?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    email?: Prisma.StringWithAggregatesFilter<"User"> | string;
    password?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    profilePicture?: Prisma.StringNullableWithAggregatesFilter<"User"> | string | null;
    subscribed?: Prisma.BoolWithAggregatesFilter<"User"> | boolean;
    created_at?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
    updated_at?: Prisma.DateTimeWithAggregatesFilter<"User"> | Date | string;
};
export type UserCreateInput = {
    name?: string | null;
    email: string;
    password?: string | null;
    profilePicture?: string | null;
    subscribed?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    servers?: Prisma.ServerCreateNestedManyWithoutUserInput;
    apiKeys?: Prisma.ApiKeyCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateInput = {
    id?: number;
    name?: string | null;
    email: string;
    password?: string | null;
    profilePicture?: string | null;
    subscribed?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    servers?: Prisma.ServerUncheckedCreateNestedManyWithoutUserInput;
    apiKeys?: Prisma.ApiKeyUncheckedCreateNestedManyWithoutUserInput;
};
export type UserUpdateInput = {
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profilePicture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subscribed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    servers?: Prisma.ServerUpdateManyWithoutUserNestedInput;
    apiKeys?: Prisma.ApiKeyUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profilePicture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subscribed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    servers?: Prisma.ServerUncheckedUpdateManyWithoutUserNestedInput;
    apiKeys?: Prisma.ApiKeyUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateManyInput = {
    id?: number;
    name?: string | null;
    email: string;
    password?: string | null;
    profilePicture?: string | null;
    subscribed?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
};
export type UserUpdateManyMutationInput = {
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profilePicture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subscribed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserUncheckedUpdateManyInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profilePicture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subscribed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
};
export type UserCountOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    profilePicture?: Prisma.SortOrder;
    subscribed?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type UserAvgOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UserMaxOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    profilePicture?: Prisma.SortOrder;
    subscribed?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type UserMinOrderByAggregateInput = {
    id?: Prisma.SortOrder;
    name?: Prisma.SortOrder;
    email?: Prisma.SortOrder;
    password?: Prisma.SortOrder;
    profilePicture?: Prisma.SortOrder;
    subscribed?: Prisma.SortOrder;
    created_at?: Prisma.SortOrder;
    updated_at?: Prisma.SortOrder;
};
export type UserSumOrderByAggregateInput = {
    id?: Prisma.SortOrder;
};
export type UserScalarRelationFilter = {
    is?: Prisma.UserWhereInput;
    isNot?: Prisma.UserWhereInput;
};
export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null;
};
export type StringFieldUpdateOperationsInput = {
    set?: string;
};
export type BoolFieldUpdateOperationsInput = {
    set?: boolean;
};
export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string;
};
export type IntFieldUpdateOperationsInput = {
    set?: number;
    increment?: number;
    decrement?: number;
    multiply?: number;
    divide?: number;
};
export type UserCreateNestedOneWithoutApiKeysInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutApiKeysInput, Prisma.UserUncheckedCreateWithoutApiKeysInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutApiKeysInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutApiKeysNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutApiKeysInput, Prisma.UserUncheckedCreateWithoutApiKeysInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutApiKeysInput;
    upsert?: Prisma.UserUpsertWithoutApiKeysInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutApiKeysInput, Prisma.UserUpdateWithoutApiKeysInput>, Prisma.UserUncheckedUpdateWithoutApiKeysInput>;
};
export type UserCreateNestedOneWithoutServersInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutServersInput, Prisma.UserUncheckedCreateWithoutServersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutServersInput;
    connect?: Prisma.UserWhereUniqueInput;
};
export type UserUpdateOneRequiredWithoutServersNestedInput = {
    create?: Prisma.XOR<Prisma.UserCreateWithoutServersInput, Prisma.UserUncheckedCreateWithoutServersInput>;
    connectOrCreate?: Prisma.UserCreateOrConnectWithoutServersInput;
    upsert?: Prisma.UserUpsertWithoutServersInput;
    connect?: Prisma.UserWhereUniqueInput;
    update?: Prisma.XOR<Prisma.XOR<Prisma.UserUpdateToOneWithWhereWithoutServersInput, Prisma.UserUpdateWithoutServersInput>, Prisma.UserUncheckedUpdateWithoutServersInput>;
};
export type UserCreateWithoutApiKeysInput = {
    name?: string | null;
    email: string;
    password?: string | null;
    profilePicture?: string | null;
    subscribed?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    servers?: Prisma.ServerCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutApiKeysInput = {
    id?: number;
    name?: string | null;
    email: string;
    password?: string | null;
    profilePicture?: string | null;
    subscribed?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    servers?: Prisma.ServerUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutApiKeysInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutApiKeysInput, Prisma.UserUncheckedCreateWithoutApiKeysInput>;
};
export type UserUpsertWithoutApiKeysInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutApiKeysInput, Prisma.UserUncheckedUpdateWithoutApiKeysInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutApiKeysInput, Prisma.UserUncheckedCreateWithoutApiKeysInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutApiKeysInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutApiKeysInput, Prisma.UserUncheckedUpdateWithoutApiKeysInput>;
};
export type UserUpdateWithoutApiKeysInput = {
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profilePicture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subscribed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    servers?: Prisma.ServerUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutApiKeysInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profilePicture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subscribed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    servers?: Prisma.ServerUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCreateWithoutServersInput = {
    name?: string | null;
    email: string;
    password?: string | null;
    profilePicture?: string | null;
    subscribed?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    apiKeys?: Prisma.ApiKeyCreateNestedManyWithoutUserInput;
};
export type UserUncheckedCreateWithoutServersInput = {
    id?: number;
    name?: string | null;
    email: string;
    password?: string | null;
    profilePicture?: string | null;
    subscribed?: boolean;
    created_at?: Date | string;
    updated_at?: Date | string;
    apiKeys?: Prisma.ApiKeyUncheckedCreateNestedManyWithoutUserInput;
};
export type UserCreateOrConnectWithoutServersInput = {
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateWithoutServersInput, Prisma.UserUncheckedCreateWithoutServersInput>;
};
export type UserUpsertWithoutServersInput = {
    update: Prisma.XOR<Prisma.UserUpdateWithoutServersInput, Prisma.UserUncheckedUpdateWithoutServersInput>;
    create: Prisma.XOR<Prisma.UserCreateWithoutServersInput, Prisma.UserUncheckedCreateWithoutServersInput>;
    where?: Prisma.UserWhereInput;
};
export type UserUpdateToOneWithWhereWithoutServersInput = {
    where?: Prisma.UserWhereInput;
    data: Prisma.XOR<Prisma.UserUpdateWithoutServersInput, Prisma.UserUncheckedUpdateWithoutServersInput>;
};
export type UserUpdateWithoutServersInput = {
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profilePicture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subscribed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    apiKeys?: Prisma.ApiKeyUpdateManyWithoutUserNestedInput;
};
export type UserUncheckedUpdateWithoutServersInput = {
    id?: Prisma.IntFieldUpdateOperationsInput | number;
    name?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    email?: Prisma.StringFieldUpdateOperationsInput | string;
    password?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    profilePicture?: Prisma.NullableStringFieldUpdateOperationsInput | string | null;
    subscribed?: Prisma.BoolFieldUpdateOperationsInput | boolean;
    created_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    updated_at?: Prisma.DateTimeFieldUpdateOperationsInput | Date | string;
    apiKeys?: Prisma.ApiKeyUncheckedUpdateManyWithoutUserNestedInput;
};
export type UserCountOutputType = {
    servers: number;
    apiKeys: number;
};
export type UserCountOutputTypeSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    servers?: boolean | UserCountOutputTypeCountServersArgs;
    apiKeys?: boolean | UserCountOutputTypeCountApiKeysArgs;
};
export type UserCountOutputTypeDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserCountOutputTypeSelect<ExtArgs> | null;
};
export type UserCountOutputTypeCountServersArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ServerWhereInput;
};
export type UserCountOutputTypeCountApiKeysArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.ApiKeyWhereInput;
};
export type UserSelect<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    profilePicture?: boolean;
    subscribed?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
    servers?: boolean | Prisma.User$serversArgs<ExtArgs>;
    apiKeys?: boolean | Prisma.User$apiKeysArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
}, ExtArgs["result"]["user"]>;
export type UserSelectCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    profilePicture?: boolean;
    subscribed?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetSelect<{
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    profilePicture?: boolean;
    subscribed?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
}, ExtArgs["result"]["user"]>;
export type UserSelectScalar = {
    id?: boolean;
    name?: boolean;
    email?: boolean;
    password?: boolean;
    profilePicture?: boolean;
    subscribed?: boolean;
    created_at?: boolean;
    updated_at?: boolean;
};
export type UserOmit<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = runtime.Types.Extensions.GetOmit<"id" | "name" | "email" | "password" | "profilePicture" | "subscribed" | "created_at" | "updated_at", ExtArgs["result"]["user"]>;
export type UserInclude<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    servers?: boolean | Prisma.User$serversArgs<ExtArgs>;
    apiKeys?: boolean | Prisma.User$apiKeysArgs<ExtArgs>;
    _count?: boolean | Prisma.UserCountOutputTypeDefaultArgs<ExtArgs>;
};
export type UserIncludeCreateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type UserIncludeUpdateManyAndReturn<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {};
export type $UserPayload<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    name: "User";
    objects: {
        servers: Prisma.$ServerPayload<ExtArgs>[];
        apiKeys: Prisma.$ApiKeyPayload<ExtArgs>[];
    };
    scalars: runtime.Types.Extensions.GetPayloadResult<{
        id: number;
        name: string | null;
        email: string;
        password: string | null;
        profilePicture: string | null;
        subscribed: boolean;
        created_at: Date;
        updated_at: Date;
    }, ExtArgs["result"]["user"]>;
    composites: {};
};
export type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = runtime.Types.Result.GetResult<Prisma.$UserPayload, S>;
export type UserCountArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
    select?: UserCountAggregateInputType | true;
};
export interface UserDelegate<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: {
        types: Prisma.TypeMap<ExtArgs>['model']['User'];
        meta: {
            name: 'User';
        };
    };
    findUnique<T extends UserFindUniqueArgs>(args: Prisma.SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: Prisma.SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findFirst<T extends UserFindFirstArgs>(args?: Prisma.SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>;
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: Prisma.SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    findMany<T extends UserFindManyArgs>(args?: Prisma.SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>;
    create<T extends UserCreateArgs>(args: Prisma.SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    createMany<T extends UserCreateManyArgs>(args?: Prisma.SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: Prisma.SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>;
    delete<T extends UserDeleteArgs>(args: Prisma.SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    update<T extends UserUpdateArgs>(args: Prisma.SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    deleteMany<T extends UserDeleteManyArgs>(args?: Prisma.SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateMany<T extends UserUpdateManyArgs>(args: Prisma.SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<Prisma.BatchPayload>;
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: Prisma.SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>;
    upsert<T extends UserUpsertArgs>(args: Prisma.SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma.Prisma__UserClient<runtime.Types.Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>;
    count<T extends UserCountArgs>(args?: Prisma.Subset<T, UserCountArgs>): Prisma.PrismaPromise<T extends runtime.Types.Utils.Record<'select', any> ? T['select'] extends true ? number : Prisma.GetScalarType<T['select'], UserCountAggregateOutputType> : number>;
    aggregate<T extends UserAggregateArgs>(args: Prisma.Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>;
    groupBy<T extends UserGroupByArgs, HasSelectOrTake extends Prisma.Or<Prisma.Extends<'skip', Prisma.Keys<T>>, Prisma.Extends<'take', Prisma.Keys<T>>>, OrderByArg extends Prisma.True extends HasSelectOrTake ? {
        orderBy: UserGroupByArgs['orderBy'];
    } : {
        orderBy?: UserGroupByArgs['orderBy'];
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
    }[OrderFields]>(args: Prisma.SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>;
    readonly fields: UserFieldRefs;
}
export interface Prisma__UserClient<T, Null = never, ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise";
    servers<T extends Prisma.User$serversArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$serversArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ServerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    apiKeys<T extends Prisma.User$apiKeysArgs<ExtArgs> = {}>(args?: Prisma.Subset<T, Prisma.User$apiKeysArgs<ExtArgs>>): Prisma.PrismaPromise<runtime.Types.Result.GetResult<Prisma.$ApiKeyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>;
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): runtime.Types.Utils.JsPromise<TResult1 | TResult2>;
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): runtime.Types.Utils.JsPromise<T | TResult>;
    finally(onfinally?: (() => void) | undefined | null): runtime.Types.Utils.JsPromise<T>;
}
export interface UserFieldRefs {
    readonly id: Prisma.FieldRef<"User", 'Int'>;
    readonly name: Prisma.FieldRef<"User", 'String'>;
    readonly email: Prisma.FieldRef<"User", 'String'>;
    readonly password: Prisma.FieldRef<"User", 'String'>;
    readonly profilePicture: Prisma.FieldRef<"User", 'String'>;
    readonly subscribed: Prisma.FieldRef<"User", 'Boolean'>;
    readonly created_at: Prisma.FieldRef<"User", 'DateTime'>;
    readonly updated_at: Prisma.FieldRef<"User", 'DateTime'>;
}
export type UserFindUniqueArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindUniqueOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserFindFirstArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindFirstOrThrowArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserFindManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput | Prisma.UserOrderByWithRelationInput[];
    cursor?: Prisma.UserWhereUniqueInput;
    take?: number;
    skip?: number;
    distinct?: Prisma.UserScalarFieldEnum | Prisma.UserScalarFieldEnum[];
};
export type UserCreateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
};
export type UserCreateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserCreateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectCreateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.UserCreateManyInput | Prisma.UserCreateManyInput[];
    skipDuplicates?: boolean;
};
export type UserUpdateArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
    where: Prisma.UserWhereUniqueInput;
};
export type UserUpdateManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpdateManyAndReturnArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelectUpdateManyAndReturn<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    data: Prisma.XOR<Prisma.UserUpdateManyMutationInput, Prisma.UserUncheckedUpdateManyInput>;
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type UserUpsertArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
    create: Prisma.XOR<Prisma.UserCreateInput, Prisma.UserUncheckedCreateInput>;
    update: Prisma.XOR<Prisma.UserUpdateInput, Prisma.UserUncheckedUpdateInput>;
};
export type UserDeleteArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
    where: Prisma.UserWhereUniqueInput;
};
export type UserDeleteManyArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    where?: Prisma.UserWhereInput;
    limit?: number;
};
export type User$serversArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type User$apiKeysArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
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
export type UserDefaultArgs<ExtArgs extends runtime.Types.Extensions.InternalArgs = runtime.Types.Extensions.DefaultArgs> = {
    select?: Prisma.UserSelect<ExtArgs> | null;
    omit?: Prisma.UserOmit<ExtArgs> | null;
    include?: Prisma.UserInclude<ExtArgs> | null;
};
export {};
//# sourceMappingURL=User.d.ts.map