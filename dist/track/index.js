/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ 6657:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $Command: () => (/* reexport */ smithy_client_dist_es/* Command */.uB),
  ApproximateCreationDateTimePrecision: () => (/* reexport */ ApproximateCreationDateTimePrecision),
  AttributeAction: () => (/* reexport */ AttributeAction),
  AttributeValue: () => (/* reexport */ AttributeValue),
  BackupInUseException: () => (/* reexport */ BackupInUseException),
  BackupNotFoundException: () => (/* reexport */ BackupNotFoundException),
  BackupStatus: () => (/* reexport */ BackupStatus),
  BackupType: () => (/* reexport */ BackupType),
  BackupTypeFilter: () => (/* reexport */ BackupTypeFilter),
  BatchExecuteStatementCommand: () => (/* reexport */ BatchExecuteStatementCommand),
  BatchGetItemCommand: () => (/* reexport */ BatchGetItemCommand),
  BatchStatementErrorCodeEnum: () => (/* reexport */ BatchStatementErrorCodeEnum),
  BatchWriteItemCommand: () => (/* reexport */ BatchWriteItemCommand),
  BillingMode: () => (/* reexport */ BillingMode),
  ComparisonOperator: () => (/* reexport */ ComparisonOperator),
  ConditionalCheckFailedException: () => (/* reexport */ ConditionalCheckFailedException),
  ConditionalOperator: () => (/* reexport */ ConditionalOperator),
  ContinuousBackupsStatus: () => (/* reexport */ ContinuousBackupsStatus),
  ContinuousBackupsUnavailableException: () => (/* reexport */ ContinuousBackupsUnavailableException),
  ContributorInsightsAction: () => (/* reexport */ ContributorInsightsAction),
  ContributorInsightsStatus: () => (/* reexport */ ContributorInsightsStatus),
  CreateBackupCommand: () => (/* reexport */ CreateBackupCommand),
  CreateGlobalTableCommand: () => (/* reexport */ CreateGlobalTableCommand),
  CreateTableCommand: () => (/* reexport */ CreateTableCommand),
  DeleteBackupCommand: () => (/* reexport */ DeleteBackupCommand),
  DeleteItemCommand: () => (/* reexport */ DeleteItemCommand),
  DeleteResourcePolicyCommand: () => (/* reexport */ DeleteResourcePolicyCommand),
  DeleteTableCommand: () => (/* reexport */ DeleteTableCommand),
  DescribeBackupCommand: () => (/* reexport */ DescribeBackupCommand),
  DescribeContinuousBackupsCommand: () => (/* reexport */ DescribeContinuousBackupsCommand),
  DescribeContributorInsightsCommand: () => (/* reexport */ DescribeContributorInsightsCommand),
  DescribeEndpointsCommand: () => (/* reexport */ DescribeEndpointsCommand),
  DescribeExportCommand: () => (/* reexport */ DescribeExportCommand),
  DescribeGlobalTableCommand: () => (/* reexport */ DescribeGlobalTableCommand),
  DescribeGlobalTableSettingsCommand: () => (/* reexport */ DescribeGlobalTableSettingsCommand),
  DescribeImportCommand: () => (/* reexport */ DescribeImportCommand),
  DescribeKinesisStreamingDestinationCommand: () => (/* reexport */ DescribeKinesisStreamingDestinationCommand),
  DescribeLimitsCommand: () => (/* reexport */ DescribeLimitsCommand),
  DescribeTableCommand: () => (/* reexport */ DescribeTableCommand),
  DescribeTableReplicaAutoScalingCommand: () => (/* reexport */ DescribeTableReplicaAutoScalingCommand),
  DescribeTimeToLiveCommand: () => (/* reexport */ DescribeTimeToLiveCommand),
  DestinationStatus: () => (/* reexport */ DestinationStatus),
  DisableKinesisStreamingDestinationCommand: () => (/* reexport */ DisableKinesisStreamingDestinationCommand),
  DuplicateItemException: () => (/* reexport */ DuplicateItemException),
  DynamoDB: () => (/* reexport */ DynamoDB),
  DynamoDBClient: () => (/* reexport */ DynamoDBClient),
  DynamoDBServiceException: () => (/* reexport */ DynamoDBServiceException),
  EnableKinesisStreamingDestinationCommand: () => (/* reexport */ EnableKinesisStreamingDestinationCommand),
  ExecuteStatementCommand: () => (/* reexport */ ExecuteStatementCommand),
  ExecuteTransactionCommand: () => (/* reexport */ ExecuteTransactionCommand),
  ExportConflictException: () => (/* reexport */ ExportConflictException),
  ExportFormat: () => (/* reexport */ ExportFormat),
  ExportNotFoundException: () => (/* reexport */ ExportNotFoundException),
  ExportStatus: () => (/* reexport */ ExportStatus),
  ExportTableToPointInTimeCommand: () => (/* reexport */ ExportTableToPointInTimeCommand),
  ExportType: () => (/* reexport */ ExportType),
  ExportViewType: () => (/* reexport */ ExportViewType),
  GetItemCommand: () => (/* reexport */ GetItemCommand),
  GetResourcePolicyCommand: () => (/* reexport */ GetResourcePolicyCommand),
  GlobalTableAlreadyExistsException: () => (/* reexport */ GlobalTableAlreadyExistsException),
  GlobalTableNotFoundException: () => (/* reexport */ GlobalTableNotFoundException),
  GlobalTableStatus: () => (/* reexport */ GlobalTableStatus),
  IdempotentParameterMismatchException: () => (/* reexport */ IdempotentParameterMismatchException),
  ImportConflictException: () => (/* reexport */ ImportConflictException),
  ImportNotFoundException: () => (/* reexport */ ImportNotFoundException),
  ImportStatus: () => (/* reexport */ ImportStatus),
  ImportTableCommand: () => (/* reexport */ ImportTableCommand),
  IndexNotFoundException: () => (/* reexport */ IndexNotFoundException),
  IndexStatus: () => (/* reexport */ IndexStatus),
  InputCompressionType: () => (/* reexport */ InputCompressionType),
  InputFormat: () => (/* reexport */ InputFormat),
  InternalServerError: () => (/* reexport */ InternalServerError),
  InvalidEndpointException: () => (/* reexport */ InvalidEndpointException),
  InvalidExportTimeException: () => (/* reexport */ InvalidExportTimeException),
  InvalidRestoreTimeException: () => (/* reexport */ InvalidRestoreTimeException),
  ItemCollectionSizeLimitExceededException: () => (/* reexport */ ItemCollectionSizeLimitExceededException),
  KeyType: () => (/* reexport */ KeyType),
  LimitExceededException: () => (/* reexport */ LimitExceededException),
  ListBackupsCommand: () => (/* reexport */ ListBackupsCommand),
  ListContributorInsightsCommand: () => (/* reexport */ ListContributorInsightsCommand),
  ListExportsCommand: () => (/* reexport */ ListExportsCommand),
  ListGlobalTablesCommand: () => (/* reexport */ ListGlobalTablesCommand),
  ListImportsCommand: () => (/* reexport */ ListImportsCommand),
  ListTablesCommand: () => (/* reexport */ ListTablesCommand),
  ListTagsOfResourceCommand: () => (/* reexport */ ListTagsOfResourceCommand),
  PointInTimeRecoveryStatus: () => (/* reexport */ PointInTimeRecoveryStatus),
  PointInTimeRecoveryUnavailableException: () => (/* reexport */ PointInTimeRecoveryUnavailableException),
  PolicyNotFoundException: () => (/* reexport */ PolicyNotFoundException),
  ProjectionType: () => (/* reexport */ ProjectionType),
  ProvisionedThroughputExceededException: () => (/* reexport */ ProvisionedThroughputExceededException),
  PutItemCommand: () => (/* reexport */ PutItemCommand),
  PutResourcePolicyCommand: () => (/* reexport */ PutResourcePolicyCommand),
  QueryCommand: () => (/* reexport */ QueryCommand),
  ReplicaAlreadyExistsException: () => (/* reexport */ ReplicaAlreadyExistsException),
  ReplicaNotFoundException: () => (/* reexport */ ReplicaNotFoundException),
  ReplicaStatus: () => (/* reexport */ ReplicaStatus),
  RequestLimitExceeded: () => (/* reexport */ RequestLimitExceeded),
  ResourceInUseException: () => (/* reexport */ ResourceInUseException),
  ResourceNotFoundException: () => (/* reexport */ ResourceNotFoundException),
  RestoreTableFromBackupCommand: () => (/* reexport */ RestoreTableFromBackupCommand),
  RestoreTableToPointInTimeCommand: () => (/* reexport */ RestoreTableToPointInTimeCommand),
  ReturnConsumedCapacity: () => (/* reexport */ ReturnConsumedCapacity),
  ReturnItemCollectionMetrics: () => (/* reexport */ ReturnItemCollectionMetrics),
  ReturnValue: () => (/* reexport */ ReturnValue),
  ReturnValuesOnConditionCheckFailure: () => (/* reexport */ ReturnValuesOnConditionCheckFailure),
  S3SseAlgorithm: () => (/* reexport */ S3SseAlgorithm),
  SSEStatus: () => (/* reexport */ SSEStatus),
  SSEType: () => (/* reexport */ SSEType),
  ScalarAttributeType: () => (/* reexport */ ScalarAttributeType),
  ScanCommand: () => (/* reexport */ ScanCommand),
  Select: () => (/* reexport */ Select),
  StreamViewType: () => (/* reexport */ StreamViewType),
  TableAlreadyExistsException: () => (/* reexport */ TableAlreadyExistsException),
  TableClass: () => (/* reexport */ TableClass),
  TableInUseException: () => (/* reexport */ TableInUseException),
  TableNotFoundException: () => (/* reexport */ TableNotFoundException),
  TableStatus: () => (/* reexport */ TableStatus),
  TagResourceCommand: () => (/* reexport */ TagResourceCommand),
  TimeToLiveStatus: () => (/* reexport */ TimeToLiveStatus),
  TransactGetItemsCommand: () => (/* reexport */ TransactGetItemsCommand),
  TransactWriteItemsCommand: () => (/* reexport */ TransactWriteItemsCommand),
  TransactionCanceledException: () => (/* reexport */ TransactionCanceledException),
  TransactionConflictException: () => (/* reexport */ TransactionConflictException),
  TransactionInProgressException: () => (/* reexport */ TransactionInProgressException),
  UntagResourceCommand: () => (/* reexport */ UntagResourceCommand),
  UpdateContinuousBackupsCommand: () => (/* reexport */ UpdateContinuousBackupsCommand),
  UpdateContributorInsightsCommand: () => (/* reexport */ UpdateContributorInsightsCommand),
  UpdateGlobalTableCommand: () => (/* reexport */ UpdateGlobalTableCommand),
  UpdateGlobalTableSettingsCommand: () => (/* reexport */ UpdateGlobalTableSettingsCommand),
  UpdateItemCommand: () => (/* reexport */ UpdateItemCommand),
  UpdateKinesisStreamingDestinationCommand: () => (/* reexport */ UpdateKinesisStreamingDestinationCommand),
  UpdateTableCommand: () => (/* reexport */ UpdateTableCommand),
  UpdateTableReplicaAutoScalingCommand: () => (/* reexport */ UpdateTableReplicaAutoScalingCommand),
  UpdateTimeToLiveCommand: () => (/* reexport */ UpdateTimeToLiveCommand),
  __Client: () => (/* reexport */ smithy_client_dist_es/* Client */.Kj),
  paginateListContributorInsights: () => (/* reexport */ paginateListContributorInsights),
  paginateListExports: () => (/* reexport */ paginateListExports),
  paginateListImports: () => (/* reexport */ paginateListImports),
  paginateListTables: () => (/* reexport */ paginateListTables),
  paginateQuery: () => (/* reexport */ paginateQuery),
  paginateScan: () => (/* reexport */ paginateScan),
  waitForTableExists: () => (/* reexport */ waitForTableExists),
  waitForTableNotExists: () => (/* reexport */ waitForTableNotExists),
  waitUntilTableExists: () => (/* reexport */ waitUntilTableExists),
  waitUntilTableNotExists: () => (/* reexport */ waitUntilTableNotExists)
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/configurations.js
const ENV_ENDPOINT_DISCOVERY = ["AWS_ENABLE_ENDPOINT_DISCOVERY", "AWS_ENDPOINT_DISCOVERY_ENABLED"];
const CONFIG_ENDPOINT_DISCOVERY = "endpoint_discovery_enabled";
const isFalsy = (value) => ["false", "0"].indexOf(value) >= 0;
const NODE_ENDPOINT_DISCOVERY_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => {
        for (let i = 0; i < ENV_ENDPOINT_DISCOVERY.length; i++) {
            const envKey = ENV_ENDPOINT_DISCOVERY[i];
            if (envKey in env) {
                const value = env[envKey];
                if (value === "") {
                    throw Error(`Environment variable ${envKey} can't be empty of undefined, got "${value}"`);
                }
                return !isFalsy(value);
            }
        }
    },
    configFileSelector: (profile) => {
        if (CONFIG_ENDPOINT_DISCOVERY in profile) {
            const value = profile[CONFIG_ENDPOINT_DISCOVERY];
            if (value === undefined) {
                throw Error(`Shared config entry ${CONFIG_ENDPOINT_DISCOVERY} can't be undefined, got "${value}"`);
            }
            return !isFalsy(value);
        }
    },
    default: undefined,
};

// EXTERNAL MODULE: ./node_modules/@smithy/protocol-http/dist-es/index.js + 5 modules
var dist_es = __webpack_require__(5479);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/updateDiscoveredEndpointInCache.js
const requestQueue = {};
const updateDiscoveredEndpointInCache_updateDiscoveredEndpointInCache = async (config, options) => new Promise((resolve, reject) => {
    const { endpointCache } = config;
    const { cacheKey, commandName, identifiers } = options;
    const endpoints = endpointCache.get(cacheKey);
    if (endpoints && endpoints.length === 1 && endpoints[0].Address === "") {
        if (options.isDiscoveredEndpointRequired) {
            if (!requestQueue[cacheKey])
                requestQueue[cacheKey] = [];
            requestQueue[cacheKey].push({ resolve, reject });
        }
        else {
            resolve();
        }
    }
    else if (endpoints && endpoints.length > 0) {
        resolve();
    }
    else {
        const placeholderEndpoints = [{ Address: "", CachePeriodInMinutes: 1 }];
        endpointCache.set(cacheKey, placeholderEndpoints);
        const command = new options.endpointDiscoveryCommandCtor({
            Operation: commandName.slice(0, -7),
            Identifiers: identifiers,
        });
        const handler = command.resolveMiddleware(options.clientStack, config, options.options);
        handler(command)
            .then((result) => {
            endpointCache.set(cacheKey, result.output.Endpoints);
            if (requestQueue[cacheKey]) {
                requestQueue[cacheKey].forEach(({ resolve }) => {
                    resolve();
                });
                delete requestQueue[cacheKey];
            }
            resolve();
        })
            .catch((error) => {
            endpointCache.delete(cacheKey);
            const errorToThrow = Object.assign(new Error(`The operation to discover endpoint failed.` +
                ` Please retry, or provide a custom endpoint and disable endpoint discovery to proceed.`), { reason: error });
            if (requestQueue[cacheKey]) {
                requestQueue[cacheKey].forEach(({ reject }) => {
                    reject(errorToThrow);
                });
                delete requestQueue[cacheKey];
            }
            if (options.isDiscoveredEndpointRequired) {
                reject(errorToThrow);
            }
            else {
                endpointCache.set(cacheKey, placeholderEndpoints);
                resolve();
            }
        });
    }
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/endpointDiscoveryMiddleware.js



const endpointDiscoveryMiddleware_endpointDiscoveryMiddleware = (config, middlewareConfig) => (next, context) => async (args) => {
    if (config.isCustomEndpoint) {
        if (config.isClientEndpointDiscoveryEnabled) {
            throw new Error(`Custom endpoint is supplied; endpointDiscoveryEnabled must not be true.`);
        }
        return next(args);
    }
    const { endpointDiscoveryCommandCtor } = config;
    const { isDiscoveredEndpointRequired, identifiers } = middlewareConfig;
    const clientName = context.clientName;
    const commandName = context.commandName;
    const isEndpointDiscoveryEnabled = await config.endpointDiscoveryEnabled();
    const cacheKey = await getCacheKey(commandName, config, { identifiers });
    if (isDiscoveredEndpointRequired) {
        if (isEndpointDiscoveryEnabled === false) {
            throw new Error(`Endpoint Discovery is disabled but ${commandName} on ${clientName} requires it.` +
                ` Please check your configurations.`);
        }
        await updateDiscoveredEndpointInCache(config, {
            ...middlewareConfig,
            commandName,
            cacheKey,
            endpointDiscoveryCommandCtor,
        });
    }
    else if (isEndpointDiscoveryEnabled) {
        updateDiscoveredEndpointInCache(config, {
            ...middlewareConfig,
            commandName,
            cacheKey,
            endpointDiscoveryCommandCtor,
        });
    }
    const { request } = args;
    if (cacheKey && HttpRequest.isInstance(request)) {
        const endpoint = config.endpointCache.getEndpoint(cacheKey);
        if (endpoint) {
            request.hostname = endpoint;
        }
    }
    return next(args);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/getEndpointDiscoveryPlugin.js

const endpointDiscoveryMiddlewareOptions = {
    name: "endpointDiscoveryMiddleware",
    step: "build",
    tags: ["ENDPOINT_DISCOVERY"],
    override: true,
};
const getEndpointDiscoveryPlugin = (pluginConfig, middlewareConfig) => ({
    applyToStack: (commandStack) => {
        commandStack.add(endpointDiscoveryMiddleware(pluginConfig, middlewareConfig), endpointDiscoveryMiddlewareOptions);
    },
});
const getEndpointDiscoveryRequiredPlugin = (pluginConfig, middlewareConfig) => ({
    applyToStack: (commandStack) => {
        commandStack.add(endpointDiscoveryMiddleware(pluginConfig, { ...middlewareConfig, isDiscoveredEndpointRequired: true }), endpointDiscoveryMiddlewareOptions);
    },
});
const getEndpointDiscoveryOptionalPlugin = (pluginConfig, middlewareConfig) => ({
    applyToStack: (commandStack) => {
        commandStack.add(endpointDiscoveryMiddleware(pluginConfig, { ...middlewareConfig, isDiscoveredEndpointRequired: false }), endpointDiscoveryMiddlewareOptions);
    },
});

// EXTERNAL MODULE: ./node_modules/mnemonist/lru-cache.js
var lru_cache = __webpack_require__(1429);
var lru_cache_default = /*#__PURE__*/__webpack_require__.n(lru_cache);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/endpoint-cache/dist-es/EndpointCache.js

class EndpointCache {
    constructor(capacity) {
        this.cache = new (lru_cache_default())(capacity);
    }
    getEndpoint(key) {
        const endpointsWithExpiry = this.get(key);
        if (!endpointsWithExpiry || endpointsWithExpiry.length === 0) {
            return undefined;
        }
        const endpoints = endpointsWithExpiry.map((endpoint) => endpoint.Address);
        return endpoints[Math.floor(Math.random() * endpoints.length)];
    }
    get(key) {
        if (!this.has(key)) {
            return;
        }
        const value = this.cache.get(key);
        if (!value) {
            return;
        }
        const now = Date.now();
        const endpointsWithExpiry = value.filter((endpoint) => now < endpoint.Expires);
        if (endpointsWithExpiry.length === 0) {
            this.delete(key);
            return undefined;
        }
        return endpointsWithExpiry;
    }
    set(key, endpoints) {
        const now = Date.now();
        this.cache.set(key, endpoints.map(({ Address, CachePeriodInMinutes }) => ({
            Address,
            Expires: now + CachePeriodInMinutes * 60 * 1000,
        })));
    }
    delete(key) {
        this.cache.set(key, []);
    }
    has(key) {
        if (!this.cache.has(key)) {
            return false;
        }
        const endpoints = this.cache.peek(key);
        if (!endpoints) {
            return false;
        }
        return endpoints.length > 0;
    }
    clear() {
        this.cache.clear();
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/endpoint-cache/dist-es/index.js



;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/resolveEndpointDiscoveryConfig.js

const resolveEndpointDiscoveryConfig = (input, { endpointDiscoveryCommandCtor }) => ({
    ...input,
    endpointDiscoveryCommandCtor,
    endpointCache: new EndpointCache(input.endpointCacheSize ?? 1000),
    endpointDiscoveryEnabled: input.endpointDiscoveryEnabled !== undefined
        ? () => Promise.resolve(input.endpointDiscoveryEnabled)
        : input.endpointDiscoveryEnabledProvider,
    isClientEndpointDiscoveryEnabled: input.endpointDiscoveryEnabled !== undefined,
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-endpoint-discovery/dist-es/index.js




// EXTERNAL MODULE: ./node_modules/@aws-sdk/middleware-host-header/dist-es/index.js
var middleware_host_header_dist_es = __webpack_require__(1095);
// EXTERNAL MODULE: ./node_modules/@aws-sdk/middleware-logger/dist-es/index.js + 1 modules
var middleware_logger_dist_es = __webpack_require__(9359);
// EXTERNAL MODULE: ./node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js
var middleware_recursion_detection_dist_es = __webpack_require__(8377);
// EXTERNAL MODULE: ./node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js + 3 modules
var middleware_user_agent_dist_es = __webpack_require__(499);
// EXTERNAL MODULE: ./node_modules/@smithy/config-resolver/dist-es/index.js + 10 modules
var config_resolver_dist_es = __webpack_require__(7122);
// EXTERNAL MODULE: ./node_modules/@smithy/core/dist-es/index.js + 17 modules
var core_dist_es = __webpack_require__(2972);
// EXTERNAL MODULE: ./node_modules/@smithy/middleware-content-length/dist-es/index.js
var middleware_content_length_dist_es = __webpack_require__(649);
// EXTERNAL MODULE: ./node_modules/@smithy/middleware-endpoint/dist-es/index.js + 10 modules
var middleware_endpoint_dist_es = __webpack_require__(9389);
// EXTERNAL MODULE: ./node_modules/@smithy/middleware-retry/dist-es/index.js + 10 modules
var middleware_retry_dist_es = __webpack_require__(3594);
// EXTERNAL MODULE: ./node_modules/@smithy/smithy-client/dist-es/index.js + 25 modules
var smithy_client_dist_es = __webpack_require__(678);
// EXTERNAL MODULE: ./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js
var resolveAwsSdkSigV4Config = __webpack_require__(4685);
// EXTERNAL MODULE: ./node_modules/@smithy/util-middleware/dist-es/index.js + 2 modules
var util_middleware_dist_es = __webpack_require__(7135);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/auth/httpAuthSchemeProvider.js


const defaultDynamoDBHttpAuthSchemeParametersProvider = async (config, context, input) => {
    return {
        operation: (0,util_middleware_dist_es/* getSmithyContext */.u)(context).operation,
        region: (await (0,util_middleware_dist_es/* normalizeProvider */.t)(config.region)()) ||
            (() => {
                throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
            })(),
    };
};
function createAwsAuthSigv4HttpAuthOption(authParameters) {
    return {
        schemeId: "aws.auth#sigv4",
        signingProperties: {
            name: "dynamodb",
            region: authParameters.region,
        },
        propertiesExtractor: (config, context) => ({
            signingProperties: {
                config,
                context,
            },
        }),
    };
}
const defaultDynamoDBHttpAuthSchemeProvider = (authParameters) => {
    const options = [];
    switch (authParameters.operation) {
        default: {
            options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
        }
    }
    return options;
};
const resolveHttpAuthSchemeConfig = (config) => {
    const config_0 = (0,resolveAwsSdkSigV4Config/* resolveAwsSdkSigV4Config */.h)(config);
    return {
        ...config_0,
    };
};

// EXTERNAL MODULE: ./node_modules/@smithy/middleware-serde/dist-es/index.js + 3 modules
var middleware_serde_dist_es = __webpack_require__(1208);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/endpoint/EndpointParameters.js
const resolveClientEndpointParameters = (options) => {
    return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "dynamodb",
    };
};
const commonParams = {
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
};

// EXTERNAL MODULE: ./node_modules/@aws-sdk/core/dist-es/protocols/json/parseJsonBody.js
var parseJsonBody = __webpack_require__(7335);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/core/dist-es/protocols/json/awsExpectUnion.js

const awsExpectUnion = (value) => {
    if (value == null) {
        return undefined;
    }
    if (typeof value === "object" && "__type" in value) {
        delete value.__type;
    }
    return (0,smithy_client_dist_es/* expectUnion */.tN)(value);
};

// EXTERNAL MODULE: ./node_modules/uuid/dist/esm-node/v4.js + 3 modules
var v4 = __webpack_require__(4349);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/models/DynamoDBServiceException.js


class DynamoDBServiceException extends smithy_client_dist_es/* ServiceException */.TJ {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, DynamoDBServiceException.prototype);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/models/models_0.js

const ApproximateCreationDateTimePrecision = {
    MICROSECOND: "MICROSECOND",
    MILLISECOND: "MILLISECOND",
};
const AttributeAction = {
    ADD: "ADD",
    DELETE: "DELETE",
    PUT: "PUT",
};
const ScalarAttributeType = {
    B: "B",
    N: "N",
    S: "S",
};
const BackupStatus = {
    AVAILABLE: "AVAILABLE",
    CREATING: "CREATING",
    DELETED: "DELETED",
};
const BackupType = {
    AWS_BACKUP: "AWS_BACKUP",
    SYSTEM: "SYSTEM",
    USER: "USER",
};
const BillingMode = {
    PAY_PER_REQUEST: "PAY_PER_REQUEST",
    PROVISIONED: "PROVISIONED",
};
const KeyType = {
    HASH: "HASH",
    RANGE: "RANGE",
};
const ProjectionType = {
    ALL: "ALL",
    INCLUDE: "INCLUDE",
    KEYS_ONLY: "KEYS_ONLY",
};
const SSEType = {
    AES256: "AES256",
    KMS: "KMS",
};
const SSEStatus = {
    DISABLED: "DISABLED",
    DISABLING: "DISABLING",
    ENABLED: "ENABLED",
    ENABLING: "ENABLING",
    UPDATING: "UPDATING",
};
const StreamViewType = {
    KEYS_ONLY: "KEYS_ONLY",
    NEW_AND_OLD_IMAGES: "NEW_AND_OLD_IMAGES",
    NEW_IMAGE: "NEW_IMAGE",
    OLD_IMAGE: "OLD_IMAGE",
};
const TimeToLiveStatus = {
    DISABLED: "DISABLED",
    DISABLING: "DISABLING",
    ENABLED: "ENABLED",
    ENABLING: "ENABLING",
};
class BackupInUseException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "BackupInUseException",
            $fault: "client",
            ...opts,
        });
        this.name = "BackupInUseException";
        this.$fault = "client";
        Object.setPrototypeOf(this, BackupInUseException.prototype);
    }
}
class BackupNotFoundException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "BackupNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "BackupNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, BackupNotFoundException.prototype);
    }
}
const BackupTypeFilter = {
    ALL: "ALL",
    AWS_BACKUP: "AWS_BACKUP",
    SYSTEM: "SYSTEM",
    USER: "USER",
};
const ReturnConsumedCapacity = {
    INDEXES: "INDEXES",
    NONE: "NONE",
    TOTAL: "TOTAL",
};
const ReturnValuesOnConditionCheckFailure = {
    ALL_OLD: "ALL_OLD",
    NONE: "NONE",
};
const BatchStatementErrorCodeEnum = {
    AccessDenied: "AccessDenied",
    ConditionalCheckFailed: "ConditionalCheckFailed",
    DuplicateItem: "DuplicateItem",
    InternalServerError: "InternalServerError",
    ItemCollectionSizeLimitExceeded: "ItemCollectionSizeLimitExceeded",
    ProvisionedThroughputExceeded: "ProvisionedThroughputExceeded",
    RequestLimitExceeded: "RequestLimitExceeded",
    ResourceNotFound: "ResourceNotFound",
    ThrottlingError: "ThrottlingError",
    TransactionConflict: "TransactionConflict",
    ValidationError: "ValidationError",
};
class InternalServerError extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "InternalServerError",
            $fault: "server",
            ...opts,
        });
        this.name = "InternalServerError";
        this.$fault = "server";
        Object.setPrototypeOf(this, InternalServerError.prototype);
    }
}
class RequestLimitExceeded extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "RequestLimitExceeded",
            $fault: "client",
            ...opts,
        });
        this.name = "RequestLimitExceeded";
        this.$fault = "client";
        Object.setPrototypeOf(this, RequestLimitExceeded.prototype);
    }
}
class InvalidEndpointException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "InvalidEndpointException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidEndpointException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidEndpointException.prototype);
        this.Message = opts.Message;
    }
}
class ProvisionedThroughputExceededException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "ProvisionedThroughputExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "ProvisionedThroughputExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ProvisionedThroughputExceededException.prototype);
    }
}
class ResourceNotFoundException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    }
}
const ReturnItemCollectionMetrics = {
    NONE: "NONE",
    SIZE: "SIZE",
};
class ItemCollectionSizeLimitExceededException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "ItemCollectionSizeLimitExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "ItemCollectionSizeLimitExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ItemCollectionSizeLimitExceededException.prototype);
    }
}
const ComparisonOperator = {
    BEGINS_WITH: "BEGINS_WITH",
    BETWEEN: "BETWEEN",
    CONTAINS: "CONTAINS",
    EQ: "EQ",
    GE: "GE",
    GT: "GT",
    IN: "IN",
    LE: "LE",
    LT: "LT",
    NE: "NE",
    NOT_CONTAINS: "NOT_CONTAINS",
    NOT_NULL: "NOT_NULL",
    NULL: "NULL",
};
const ConditionalOperator = {
    AND: "AND",
    OR: "OR",
};
const ContinuousBackupsStatus = {
    DISABLED: "DISABLED",
    ENABLED: "ENABLED",
};
const PointInTimeRecoveryStatus = {
    DISABLED: "DISABLED",
    ENABLED: "ENABLED",
};
class ContinuousBackupsUnavailableException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "ContinuousBackupsUnavailableException",
            $fault: "client",
            ...opts,
        });
        this.name = "ContinuousBackupsUnavailableException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ContinuousBackupsUnavailableException.prototype);
    }
}
const ContributorInsightsAction = {
    DISABLE: "DISABLE",
    ENABLE: "ENABLE",
};
const ContributorInsightsStatus = {
    DISABLED: "DISABLED",
    DISABLING: "DISABLING",
    ENABLED: "ENABLED",
    ENABLING: "ENABLING",
    FAILED: "FAILED",
};
class LimitExceededException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "LimitExceededException",
            $fault: "client",
            ...opts,
        });
        this.name = "LimitExceededException";
        this.$fault = "client";
        Object.setPrototypeOf(this, LimitExceededException.prototype);
    }
}
class TableInUseException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "TableInUseException",
            $fault: "client",
            ...opts,
        });
        this.name = "TableInUseException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TableInUseException.prototype);
    }
}
class TableNotFoundException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "TableNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "TableNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TableNotFoundException.prototype);
    }
}
const GlobalTableStatus = {
    ACTIVE: "ACTIVE",
    CREATING: "CREATING",
    DELETING: "DELETING",
    UPDATING: "UPDATING",
};
const ReplicaStatus = {
    ACTIVE: "ACTIVE",
    CREATING: "CREATING",
    CREATION_FAILED: "CREATION_FAILED",
    DELETING: "DELETING",
    INACCESSIBLE_ENCRYPTION_CREDENTIALS: "INACCESSIBLE_ENCRYPTION_CREDENTIALS",
    REGION_DISABLED: "REGION_DISABLED",
    UPDATING: "UPDATING",
};
const TableClass = {
    STANDARD: "STANDARD",
    STANDARD_INFREQUENT_ACCESS: "STANDARD_INFREQUENT_ACCESS",
};
class GlobalTableAlreadyExistsException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "GlobalTableAlreadyExistsException",
            $fault: "client",
            ...opts,
        });
        this.name = "GlobalTableAlreadyExistsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, GlobalTableAlreadyExistsException.prototype);
    }
}
const IndexStatus = {
    ACTIVE: "ACTIVE",
    CREATING: "CREATING",
    DELETING: "DELETING",
    UPDATING: "UPDATING",
};
const TableStatus = {
    ACTIVE: "ACTIVE",
    ARCHIVED: "ARCHIVED",
    ARCHIVING: "ARCHIVING",
    CREATING: "CREATING",
    DELETING: "DELETING",
    INACCESSIBLE_ENCRYPTION_CREDENTIALS: "INACCESSIBLE_ENCRYPTION_CREDENTIALS",
    UPDATING: "UPDATING",
};
class ResourceInUseException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "ResourceInUseException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceInUseException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceInUseException.prototype);
    }
}
const ReturnValue = {
    ALL_NEW: "ALL_NEW",
    ALL_OLD: "ALL_OLD",
    NONE: "NONE",
    UPDATED_NEW: "UPDATED_NEW",
    UPDATED_OLD: "UPDATED_OLD",
};
class TransactionConflictException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "TransactionConflictException",
            $fault: "client",
            ...opts,
        });
        this.name = "TransactionConflictException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TransactionConflictException.prototype);
    }
}
class PolicyNotFoundException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "PolicyNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "PolicyNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, PolicyNotFoundException.prototype);
    }
}
const ExportFormat = {
    DYNAMODB_JSON: "DYNAMODB_JSON",
    ION: "ION",
};
const ExportStatus = {
    COMPLETED: "COMPLETED",
    FAILED: "FAILED",
    IN_PROGRESS: "IN_PROGRESS",
};
const ExportType = {
    FULL_EXPORT: "FULL_EXPORT",
    INCREMENTAL_EXPORT: "INCREMENTAL_EXPORT",
};
const ExportViewType = {
    NEW_AND_OLD_IMAGES: "NEW_AND_OLD_IMAGES",
    NEW_IMAGE: "NEW_IMAGE",
};
const S3SseAlgorithm = {
    AES256: "AES256",
    KMS: "KMS",
};
class ExportNotFoundException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "ExportNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ExportNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ExportNotFoundException.prototype);
    }
}
class GlobalTableNotFoundException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "GlobalTableNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "GlobalTableNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, GlobalTableNotFoundException.prototype);
    }
}
const ImportStatus = {
    CANCELLED: "CANCELLED",
    CANCELLING: "CANCELLING",
    COMPLETED: "COMPLETED",
    FAILED: "FAILED",
    IN_PROGRESS: "IN_PROGRESS",
};
const InputCompressionType = {
    GZIP: "GZIP",
    NONE: "NONE",
    ZSTD: "ZSTD",
};
const InputFormat = {
    CSV: "CSV",
    DYNAMODB_JSON: "DYNAMODB_JSON",
    ION: "ION",
};
class ImportNotFoundException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "ImportNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ImportNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ImportNotFoundException.prototype);
    }
}
const DestinationStatus = {
    ACTIVE: "ACTIVE",
    DISABLED: "DISABLED",
    DISABLING: "DISABLING",
    ENABLE_FAILED: "ENABLE_FAILED",
    ENABLING: "ENABLING",
    UPDATING: "UPDATING",
};
class DuplicateItemException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "DuplicateItemException",
            $fault: "client",
            ...opts,
        });
        this.name = "DuplicateItemException";
        this.$fault = "client";
        Object.setPrototypeOf(this, DuplicateItemException.prototype);
    }
}
class IdempotentParameterMismatchException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "IdempotentParameterMismatchException",
            $fault: "client",
            ...opts,
        });
        this.name = "IdempotentParameterMismatchException";
        this.$fault = "client";
        Object.setPrototypeOf(this, IdempotentParameterMismatchException.prototype);
        this.Message = opts.Message;
    }
}
class TransactionInProgressException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "TransactionInProgressException",
            $fault: "client",
            ...opts,
        });
        this.name = "TransactionInProgressException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TransactionInProgressException.prototype);
        this.Message = opts.Message;
    }
}
class ExportConflictException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "ExportConflictException",
            $fault: "client",
            ...opts,
        });
        this.name = "ExportConflictException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ExportConflictException.prototype);
    }
}
class InvalidExportTimeException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "InvalidExportTimeException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidExportTimeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidExportTimeException.prototype);
    }
}
class PointInTimeRecoveryUnavailableException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "PointInTimeRecoveryUnavailableException",
            $fault: "client",
            ...opts,
        });
        this.name = "PointInTimeRecoveryUnavailableException";
        this.$fault = "client";
        Object.setPrototypeOf(this, PointInTimeRecoveryUnavailableException.prototype);
    }
}
class ImportConflictException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "ImportConflictException",
            $fault: "client",
            ...opts,
        });
        this.name = "ImportConflictException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ImportConflictException.prototype);
    }
}
const Select = {
    ALL_ATTRIBUTES: "ALL_ATTRIBUTES",
    ALL_PROJECTED_ATTRIBUTES: "ALL_PROJECTED_ATTRIBUTES",
    COUNT: "COUNT",
    SPECIFIC_ATTRIBUTES: "SPECIFIC_ATTRIBUTES",
};
class TableAlreadyExistsException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "TableAlreadyExistsException",
            $fault: "client",
            ...opts,
        });
        this.name = "TableAlreadyExistsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TableAlreadyExistsException.prototype);
    }
}
class InvalidRestoreTimeException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "InvalidRestoreTimeException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidRestoreTimeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidRestoreTimeException.prototype);
    }
}
class ReplicaAlreadyExistsException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "ReplicaAlreadyExistsException",
            $fault: "client",
            ...opts,
        });
        this.name = "ReplicaAlreadyExistsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ReplicaAlreadyExistsException.prototype);
    }
}
class ReplicaNotFoundException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "ReplicaNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ReplicaNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ReplicaNotFoundException.prototype);
    }
}
class IndexNotFoundException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "IndexNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "IndexNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, IndexNotFoundException.prototype);
    }
}
var AttributeValue;
(function (AttributeValue) {
    AttributeValue.visit = (value, visitor) => {
        if (value.S !== undefined)
            return visitor.S(value.S);
        if (value.N !== undefined)
            return visitor.N(value.N);
        if (value.B !== undefined)
            return visitor.B(value.B);
        if (value.SS !== undefined)
            return visitor.SS(value.SS);
        if (value.NS !== undefined)
            return visitor.NS(value.NS);
        if (value.BS !== undefined)
            return visitor.BS(value.BS);
        if (value.M !== undefined)
            return visitor.M(value.M);
        if (value.L !== undefined)
            return visitor.L(value.L);
        if (value.NULL !== undefined)
            return visitor.NULL(value.NULL);
        if (value.BOOL !== undefined)
            return visitor.BOOL(value.BOOL);
        return visitor._(value.$unknown[0], value.$unknown[1]);
    };
})(AttributeValue || (AttributeValue = {}));
class ConditionalCheckFailedException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "ConditionalCheckFailedException",
            $fault: "client",
            ...opts,
        });
        this.name = "ConditionalCheckFailedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ConditionalCheckFailedException.prototype);
        this.Item = opts.Item;
    }
}
class TransactionCanceledException extends DynamoDBServiceException {
    constructor(opts) {
        super({
            name: "TransactionCanceledException",
            $fault: "client",
            ...opts,
        });
        this.name = "TransactionCanceledException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TransactionCanceledException.prototype);
        this.Message = opts.Message;
        this.CancellationReasons = opts.CancellationReasons;
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/protocols/Aws_json1_0.js






const se_BatchExecuteStatementCommand = async (input, context) => {
    const headers = sharedHeaders("BatchExecuteStatement");
    let body;
    body = JSON.stringify(se_BatchExecuteStatementInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_BatchGetItemCommand = async (input, context) => {
    const headers = sharedHeaders("BatchGetItem");
    let body;
    body = JSON.stringify(se_BatchGetItemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_BatchWriteItemCommand = async (input, context) => {
    const headers = sharedHeaders("BatchWriteItem");
    let body;
    body = JSON.stringify(se_BatchWriteItemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_CreateBackupCommand = async (input, context) => {
    const headers = sharedHeaders("CreateBackup");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_CreateGlobalTableCommand = async (input, context) => {
    const headers = sharedHeaders("CreateGlobalTable");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_CreateTableCommand = async (input, context) => {
    const headers = sharedHeaders("CreateTable");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DeleteBackupCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteBackup");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DeleteItemCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteItem");
    let body;
    body = JSON.stringify(se_DeleteItemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DeleteResourcePolicyCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteResourcePolicy");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DeleteTableCommand = async (input, context) => {
    const headers = sharedHeaders("DeleteTable");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeBackupCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeBackup");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeContinuousBackupsCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeContinuousBackups");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeContributorInsightsCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeContributorInsights");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeEndpointsCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeEndpoints");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeExportCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeExport");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeGlobalTableCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeGlobalTable");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeGlobalTableSettingsCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeGlobalTableSettings");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeImportCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeImport");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeKinesisStreamingDestinationCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeKinesisStreamingDestination");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeLimitsCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeLimits");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeTableCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeTable");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeTableReplicaAutoScalingCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeTableReplicaAutoScaling");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DescribeTimeToLiveCommand = async (input, context) => {
    const headers = sharedHeaders("DescribeTimeToLive");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DisableKinesisStreamingDestinationCommand = async (input, context) => {
    const headers = sharedHeaders("DisableKinesisStreamingDestination");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_EnableKinesisStreamingDestinationCommand = async (input, context) => {
    const headers = sharedHeaders("EnableKinesisStreamingDestination");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ExecuteStatementCommand = async (input, context) => {
    const headers = sharedHeaders("ExecuteStatement");
    let body;
    body = JSON.stringify(se_ExecuteStatementInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ExecuteTransactionCommand = async (input, context) => {
    const headers = sharedHeaders("ExecuteTransaction");
    let body;
    body = JSON.stringify(se_ExecuteTransactionInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ExportTableToPointInTimeCommand = async (input, context) => {
    const headers = sharedHeaders("ExportTableToPointInTime");
    let body;
    body = JSON.stringify(se_ExportTableToPointInTimeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetItemCommand = async (input, context) => {
    const headers = sharedHeaders("GetItem");
    let body;
    body = JSON.stringify(se_GetItemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetResourcePolicyCommand = async (input, context) => {
    const headers = sharedHeaders("GetResourcePolicy");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ImportTableCommand = async (input, context) => {
    const headers = sharedHeaders("ImportTable");
    let body;
    body = JSON.stringify(se_ImportTableInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ListBackupsCommand = async (input, context) => {
    const headers = sharedHeaders("ListBackups");
    let body;
    body = JSON.stringify(se_ListBackupsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ListContributorInsightsCommand = async (input, context) => {
    const headers = sharedHeaders("ListContributorInsights");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ListExportsCommand = async (input, context) => {
    const headers = sharedHeaders("ListExports");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ListGlobalTablesCommand = async (input, context) => {
    const headers = sharedHeaders("ListGlobalTables");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ListImportsCommand = async (input, context) => {
    const headers = sharedHeaders("ListImports");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ListTablesCommand = async (input, context) => {
    const headers = sharedHeaders("ListTables");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ListTagsOfResourceCommand = async (input, context) => {
    const headers = sharedHeaders("ListTagsOfResource");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_PutItemCommand = async (input, context) => {
    const headers = sharedHeaders("PutItem");
    let body;
    body = JSON.stringify(se_PutItemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_PutResourcePolicyCommand = async (input, context) => {
    const headers = sharedHeaders("PutResourcePolicy");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_QueryCommand = async (input, context) => {
    const headers = sharedHeaders("Query");
    let body;
    body = JSON.stringify(se_QueryInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_RestoreTableFromBackupCommand = async (input, context) => {
    const headers = sharedHeaders("RestoreTableFromBackup");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_RestoreTableToPointInTimeCommand = async (input, context) => {
    const headers = sharedHeaders("RestoreTableToPointInTime");
    let body;
    body = JSON.stringify(se_RestoreTableToPointInTimeInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_ScanCommand = async (input, context) => {
    const headers = sharedHeaders("Scan");
    let body;
    body = JSON.stringify(se_ScanInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_TagResourceCommand = async (input, context) => {
    const headers = sharedHeaders("TagResource");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_TransactGetItemsCommand = async (input, context) => {
    const headers = sharedHeaders("TransactGetItems");
    let body;
    body = JSON.stringify(se_TransactGetItemsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_TransactWriteItemsCommand = async (input, context) => {
    const headers = sharedHeaders("TransactWriteItems");
    let body;
    body = JSON.stringify(se_TransactWriteItemsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UntagResourceCommand = async (input, context) => {
    const headers = sharedHeaders("UntagResource");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UpdateContinuousBackupsCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateContinuousBackups");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UpdateContributorInsightsCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateContributorInsights");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UpdateGlobalTableCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateGlobalTable");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UpdateGlobalTableSettingsCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateGlobalTableSettings");
    let body;
    body = JSON.stringify(se_UpdateGlobalTableSettingsInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UpdateItemCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateItem");
    let body;
    body = JSON.stringify(se_UpdateItemInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UpdateKinesisStreamingDestinationCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateKinesisStreamingDestination");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UpdateTableCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateTable");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UpdateTableReplicaAutoScalingCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateTableReplicaAutoScaling");
    let body;
    body = JSON.stringify(se_UpdateTableReplicaAutoScalingInput(input, context));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_UpdateTimeToLiveCommand = async (input, context) => {
    const headers = sharedHeaders("UpdateTimeToLive");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* _json */.Ss)(input));
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const de_BatchExecuteStatementCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_BatchExecuteStatementOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_BatchGetItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_BatchGetItemOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_BatchWriteItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_BatchWriteItemOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CreateBackupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_CreateBackupOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CreateGlobalTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_CreateGlobalTableOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CreateTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_CreateTableOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DeleteBackupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_DeleteBackupOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DeleteItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_DeleteItemOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DeleteResourcePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = (0,smithy_client_dist_es/* _json */.Ss)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DeleteTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_DeleteTableOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeBackupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_DescribeBackupOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeContinuousBackupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_DescribeContinuousBackupsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeContributorInsightsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_DescribeContributorInsightsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeEndpointsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = (0,smithy_client_dist_es/* _json */.Ss)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeExportCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_DescribeExportOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeGlobalTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_DescribeGlobalTableOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeGlobalTableSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_DescribeGlobalTableSettingsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeImportCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_DescribeImportOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeKinesisStreamingDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = (0,smithy_client_dist_es/* _json */.Ss)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeLimitsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = (0,smithy_client_dist_es/* _json */.Ss)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_DescribeTableOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeTableReplicaAutoScalingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_DescribeTableReplicaAutoScalingOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DescribeTimeToLiveCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = (0,smithy_client_dist_es/* _json */.Ss)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DisableKinesisStreamingDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = (0,smithy_client_dist_es/* _json */.Ss)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_EnableKinesisStreamingDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = (0,smithy_client_dist_es/* _json */.Ss)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ExecuteStatementCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_ExecuteStatementOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ExecuteTransactionCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_ExecuteTransactionOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ExportTableToPointInTimeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_ExportTableToPointInTimeOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_GetItemOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetResourcePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = (0,smithy_client_dist_es/* _json */.Ss)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ImportTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_ImportTableOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListBackupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_ListBackupsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListContributorInsightsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = (0,smithy_client_dist_es/* _json */.Ss)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListExportsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = (0,smithy_client_dist_es/* _json */.Ss)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListGlobalTablesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = (0,smithy_client_dist_es/* _json */.Ss)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListImportsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_ListImportsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListTablesCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = (0,smithy_client_dist_es/* _json */.Ss)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ListTagsOfResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = (0,smithy_client_dist_es/* _json */.Ss)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_PutItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_PutItemOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_PutResourcePolicyCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = (0,smithy_client_dist_es/* _json */.Ss)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_QueryCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_QueryOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_RestoreTableFromBackupCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_RestoreTableFromBackupOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_RestoreTableToPointInTimeCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_RestoreTableToPointInTimeOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_ScanCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_ScanOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_TagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await (0,smithy_client_dist_es/* collectBody */.Px)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_TransactGetItemsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_TransactGetItemsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_TransactWriteItemsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_TransactWriteItemsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UntagResourceCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    await (0,smithy_client_dist_es/* collectBody */.Px)(output.body, context);
    const response = {
        $metadata: deserializeMetadata(output),
    };
    return response;
};
const de_UpdateContinuousBackupsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_UpdateContinuousBackupsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateContributorInsightsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = (0,smithy_client_dist_es/* _json */.Ss)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateGlobalTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_UpdateGlobalTableOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateGlobalTableSettingsCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_UpdateGlobalTableSettingsOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateItemCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_UpdateItemOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateKinesisStreamingDestinationCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = (0,smithy_client_dist_es/* _json */.Ss)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateTableCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_UpdateTableOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateTableReplicaAutoScalingCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = de_UpdateTableReplicaAutoScalingOutput(data, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_UpdateTimeToLiveCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context);
    let contents = {};
    contents = (0,smithy_client_dist_es/* _json */.Ss)(data);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await (0,parseJsonBody/* parseJsonErrorBody */.CG)(output.body, context),
    };
    const errorCode = (0,parseJsonBody/* loadRestJsonErrorCode */.cJ)(output, parsedOutput.body);
    switch (errorCode) {
        case "InternalServerError":
        case "com.amazonaws.dynamodb#InternalServerError":
            throw await de_InternalServerErrorRes(parsedOutput, context);
        case "RequestLimitExceeded":
        case "com.amazonaws.dynamodb#RequestLimitExceeded":
            throw await de_RequestLimitExceededRes(parsedOutput, context);
        case "InvalidEndpointException":
        case "com.amazonaws.dynamodb#InvalidEndpointException":
            throw await de_InvalidEndpointExceptionRes(parsedOutput, context);
        case "ProvisionedThroughputExceededException":
        case "com.amazonaws.dynamodb#ProvisionedThroughputExceededException":
            throw await de_ProvisionedThroughputExceededExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.dynamodb#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "ItemCollectionSizeLimitExceededException":
        case "com.amazonaws.dynamodb#ItemCollectionSizeLimitExceededException":
            throw await de_ItemCollectionSizeLimitExceededExceptionRes(parsedOutput, context);
        case "BackupInUseException":
        case "com.amazonaws.dynamodb#BackupInUseException":
            throw await de_BackupInUseExceptionRes(parsedOutput, context);
        case "ContinuousBackupsUnavailableException":
        case "com.amazonaws.dynamodb#ContinuousBackupsUnavailableException":
            throw await de_ContinuousBackupsUnavailableExceptionRes(parsedOutput, context);
        case "LimitExceededException":
        case "com.amazonaws.dynamodb#LimitExceededException":
            throw await de_LimitExceededExceptionRes(parsedOutput, context);
        case "TableInUseException":
        case "com.amazonaws.dynamodb#TableInUseException":
            throw await de_TableInUseExceptionRes(parsedOutput, context);
        case "TableNotFoundException":
        case "com.amazonaws.dynamodb#TableNotFoundException":
            throw await de_TableNotFoundExceptionRes(parsedOutput, context);
        case "GlobalTableAlreadyExistsException":
        case "com.amazonaws.dynamodb#GlobalTableAlreadyExistsException":
            throw await de_GlobalTableAlreadyExistsExceptionRes(parsedOutput, context);
        case "ResourceInUseException":
        case "com.amazonaws.dynamodb#ResourceInUseException":
            throw await de_ResourceInUseExceptionRes(parsedOutput, context);
        case "BackupNotFoundException":
        case "com.amazonaws.dynamodb#BackupNotFoundException":
            throw await de_BackupNotFoundExceptionRes(parsedOutput, context);
        case "ConditionalCheckFailedException":
        case "com.amazonaws.dynamodb#ConditionalCheckFailedException":
            throw await de_ConditionalCheckFailedExceptionRes(parsedOutput, context);
        case "TransactionConflictException":
        case "com.amazonaws.dynamodb#TransactionConflictException":
            throw await de_TransactionConflictExceptionRes(parsedOutput, context);
        case "PolicyNotFoundException":
        case "com.amazonaws.dynamodb#PolicyNotFoundException":
            throw await de_PolicyNotFoundExceptionRes(parsedOutput, context);
        case "ExportNotFoundException":
        case "com.amazonaws.dynamodb#ExportNotFoundException":
            throw await de_ExportNotFoundExceptionRes(parsedOutput, context);
        case "GlobalTableNotFoundException":
        case "com.amazonaws.dynamodb#GlobalTableNotFoundException":
            throw await de_GlobalTableNotFoundExceptionRes(parsedOutput, context);
        case "ImportNotFoundException":
        case "com.amazonaws.dynamodb#ImportNotFoundException":
            throw await de_ImportNotFoundExceptionRes(parsedOutput, context);
        case "DuplicateItemException":
        case "com.amazonaws.dynamodb#DuplicateItemException":
            throw await de_DuplicateItemExceptionRes(parsedOutput, context);
        case "IdempotentParameterMismatchException":
        case "com.amazonaws.dynamodb#IdempotentParameterMismatchException":
            throw await de_IdempotentParameterMismatchExceptionRes(parsedOutput, context);
        case "TransactionCanceledException":
        case "com.amazonaws.dynamodb#TransactionCanceledException":
            throw await de_TransactionCanceledExceptionRes(parsedOutput, context);
        case "TransactionInProgressException":
        case "com.amazonaws.dynamodb#TransactionInProgressException":
            throw await de_TransactionInProgressExceptionRes(parsedOutput, context);
        case "ExportConflictException":
        case "com.amazonaws.dynamodb#ExportConflictException":
            throw await de_ExportConflictExceptionRes(parsedOutput, context);
        case "InvalidExportTimeException":
        case "com.amazonaws.dynamodb#InvalidExportTimeException":
            throw await de_InvalidExportTimeExceptionRes(parsedOutput, context);
        case "PointInTimeRecoveryUnavailableException":
        case "com.amazonaws.dynamodb#PointInTimeRecoveryUnavailableException":
            throw await de_PointInTimeRecoveryUnavailableExceptionRes(parsedOutput, context);
        case "ImportConflictException":
        case "com.amazonaws.dynamodb#ImportConflictException":
            throw await de_ImportConflictExceptionRes(parsedOutput, context);
        case "TableAlreadyExistsException":
        case "com.amazonaws.dynamodb#TableAlreadyExistsException":
            throw await de_TableAlreadyExistsExceptionRes(parsedOutput, context);
        case "InvalidRestoreTimeException":
        case "com.amazonaws.dynamodb#InvalidRestoreTimeException":
            throw await de_InvalidRestoreTimeExceptionRes(parsedOutput, context);
        case "ReplicaAlreadyExistsException":
        case "com.amazonaws.dynamodb#ReplicaAlreadyExistsException":
            throw await de_ReplicaAlreadyExistsExceptionRes(parsedOutput, context);
        case "ReplicaNotFoundException":
        case "com.amazonaws.dynamodb#ReplicaNotFoundException":
            throw await de_ReplicaNotFoundExceptionRes(parsedOutput, context);
        case "IndexNotFoundException":
        case "com.amazonaws.dynamodb#IndexNotFoundException":
            throw await de_IndexNotFoundExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const de_BackupInUseExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new BackupInUseException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_BackupNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new BackupNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_ConditionalCheckFailedExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_ConditionalCheckFailedException(body, context);
    const exception = new ConditionalCheckFailedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_ContinuousBackupsUnavailableExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new ContinuousBackupsUnavailableException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_DuplicateItemExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new DuplicateItemException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_ExportConflictExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new ExportConflictException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_ExportNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new ExportNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_GlobalTableAlreadyExistsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new GlobalTableAlreadyExistsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_GlobalTableNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new GlobalTableNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_IdempotentParameterMismatchExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new IdempotentParameterMismatchException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_ImportConflictExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new ImportConflictException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_ImportNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new ImportNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_IndexNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new IndexNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_InternalServerErrorRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new InternalServerError({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_InvalidEndpointExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new InvalidEndpointException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_InvalidExportTimeExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new InvalidExportTimeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_InvalidRestoreTimeExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new InvalidRestoreTimeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_ItemCollectionSizeLimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new ItemCollectionSizeLimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_LimitExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new LimitExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_PointInTimeRecoveryUnavailableExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new PointInTimeRecoveryUnavailableException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_PolicyNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new PolicyNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_ProvisionedThroughputExceededExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new ProvisionedThroughputExceededException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_ReplicaAlreadyExistsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new ReplicaAlreadyExistsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_ReplicaNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new ReplicaNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_RequestLimitExceededRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new RequestLimitExceeded({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_ResourceInUseExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new ResourceInUseException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_ResourceNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new ResourceNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_TableAlreadyExistsExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new TableAlreadyExistsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_TableInUseExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new TableInUseException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_TableNotFoundExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new TableNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_TransactionCanceledExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_TransactionCanceledException(body, context);
    const exception = new TransactionCanceledException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_TransactionConflictExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new TransactionConflictException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_TransactionInProgressExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = (0,smithy_client_dist_es/* _json */.Ss)(body);
    const exception = new TransactionInProgressException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const se_AttributeUpdates = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = se_AttributeValueUpdate(value, context);
        return acc;
    }, {});
};
const se_AttributeValue = (input, context) => {
    return AttributeValue.visit(input, {
        B: (value) => ({ B: context.base64Encoder(value) }),
        BOOL: (value) => ({ BOOL: value }),
        BS: (value) => ({ BS: se_BinarySetAttributeValue(value, context) }),
        L: (value) => ({ L: se_ListAttributeValue(value, context) }),
        M: (value) => ({ M: se_MapAttributeValue(value, context) }),
        N: (value) => ({ N: value }),
        NS: (value) => ({ NS: (0,smithy_client_dist_es/* _json */.Ss)(value) }),
        NULL: (value) => ({ NULL: value }),
        S: (value) => ({ S: value }),
        SS: (value) => ({ SS: (0,smithy_client_dist_es/* _json */.Ss)(value) }),
        _: (name, value) => ({ name: value }),
    });
};
const se_AttributeValueList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_AttributeValue(entry, context);
    });
};
const se_AttributeValueUpdate = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        Action: [],
        Value: (_) => se_AttributeValue(_, context),
    });
};
const se_AutoScalingPolicyUpdate = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        PolicyName: [],
        TargetTrackingScalingPolicyConfiguration: (_) => se_AutoScalingTargetTrackingScalingPolicyConfigurationUpdate(_, context),
    });
};
const se_AutoScalingSettingsUpdate = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        AutoScalingDisabled: [],
        AutoScalingRoleArn: [],
        MaximumUnits: [],
        MinimumUnits: [],
        ScalingPolicyUpdate: (_) => se_AutoScalingPolicyUpdate(_, context),
    });
};
const se_AutoScalingTargetTrackingScalingPolicyConfigurationUpdate = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        DisableScaleIn: [],
        ScaleInCooldown: [],
        ScaleOutCooldown: [],
        TargetValue: smithy_client_dist_es/* serializeFloat */.VA,
    });
};
const se_BatchExecuteStatementInput = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        ReturnConsumedCapacity: [],
        Statements: (_) => se_PartiQLBatchRequest(_, context),
    });
};
const se_BatchGetItemInput = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        RequestItems: (_) => se_BatchGetRequestMap(_, context),
        ReturnConsumedCapacity: [],
    });
};
const se_BatchGetRequestMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = se_KeysAndAttributes(value, context);
        return acc;
    }, {});
};
const se_BatchStatementRequest = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        ConsistentRead: [],
        Parameters: (_) => se_PreparedStatementParameters(_, context),
        ReturnValuesOnConditionCheckFailure: [],
        Statement: [],
    });
};
const se_BatchWriteItemInput = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        RequestItems: (_) => se_BatchWriteItemRequestMap(_, context),
        ReturnConsumedCapacity: [],
        ReturnItemCollectionMetrics: [],
    });
};
const se_BatchWriteItemRequestMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = se_WriteRequests(value, context);
        return acc;
    }, {});
};
const se_BinarySetAttributeValue = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return context.base64Encoder(entry);
    });
};
const se_Condition = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        AttributeValueList: (_) => se_AttributeValueList(_, context),
        ComparisonOperator: [],
    });
};
const se_ConditionCheck = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        ConditionExpression: [],
        ExpressionAttributeNames: smithy_client_dist_es/* _json */.Ss,
        ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
        Key: (_) => se_Key(_, context),
        ReturnValuesOnConditionCheckFailure: [],
        TableName: [],
    });
};
const se_Delete = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        ConditionExpression: [],
        ExpressionAttributeNames: smithy_client_dist_es/* _json */.Ss,
        ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
        Key: (_) => se_Key(_, context),
        ReturnValuesOnConditionCheckFailure: [],
        TableName: [],
    });
};
const se_DeleteItemInput = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        ConditionExpression: [],
        ConditionalOperator: [],
        Expected: (_) => se_ExpectedAttributeMap(_, context),
        ExpressionAttributeNames: smithy_client_dist_es/* _json */.Ss,
        ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
        Key: (_) => se_Key(_, context),
        ReturnConsumedCapacity: [],
        ReturnItemCollectionMetrics: [],
        ReturnValues: [],
        ReturnValuesOnConditionCheckFailure: [],
        TableName: [],
    });
};
const se_DeleteRequest = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        Key: (_) => se_Key(_, context),
    });
};
const se_ExecuteStatementInput = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        ConsistentRead: [],
        Limit: [],
        NextToken: [],
        Parameters: (_) => se_PreparedStatementParameters(_, context),
        ReturnConsumedCapacity: [],
        ReturnValuesOnConditionCheckFailure: [],
        Statement: [],
    });
};
const se_ExecuteTransactionInput = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        ClientRequestToken: [true, (_) => _ ?? (0,v4/* default */.A)()],
        ReturnConsumedCapacity: [],
        TransactStatements: (_) => se_ParameterizedStatements(_, context),
    });
};
const se_ExpectedAttributeMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = se_ExpectedAttributeValue(value, context);
        return acc;
    }, {});
};
const se_ExpectedAttributeValue = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        AttributeValueList: (_) => se_AttributeValueList(_, context),
        ComparisonOperator: [],
        Exists: [],
        Value: (_) => se_AttributeValue(_, context),
    });
};
const se_ExportTableToPointInTimeInput = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        ClientToken: [true, (_) => _ ?? (0,v4/* default */.A)()],
        ExportFormat: [],
        ExportTime: (_) => Math.round(_.getTime() / 1000),
        ExportType: [],
        IncrementalExportSpecification: (_) => se_IncrementalExportSpecification(_, context),
        S3Bucket: [],
        S3BucketOwner: [],
        S3Prefix: [],
        S3SseAlgorithm: [],
        S3SseKmsKeyId: [],
        TableArn: [],
    });
};
const se_ExpressionAttributeValueMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = se_AttributeValue(value, context);
        return acc;
    }, {});
};
const se_FilterConditionMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = se_Condition(value, context);
        return acc;
    }, {});
};
const se_Get = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        ExpressionAttributeNames: smithy_client_dist_es/* _json */.Ss,
        Key: (_) => se_Key(_, context),
        ProjectionExpression: [],
        TableName: [],
    });
};
const se_GetItemInput = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        AttributesToGet: smithy_client_dist_es/* _json */.Ss,
        ConsistentRead: [],
        ExpressionAttributeNames: smithy_client_dist_es/* _json */.Ss,
        Key: (_) => se_Key(_, context),
        ProjectionExpression: [],
        ReturnConsumedCapacity: [],
        TableName: [],
    });
};
const se_GlobalSecondaryIndexAutoScalingUpdate = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        IndexName: [],
        ProvisionedWriteCapacityAutoScalingUpdate: (_) => se_AutoScalingSettingsUpdate(_, context),
    });
};
const se_GlobalSecondaryIndexAutoScalingUpdateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_GlobalSecondaryIndexAutoScalingUpdate(entry, context);
    });
};
const se_GlobalTableGlobalSecondaryIndexSettingsUpdate = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        IndexName: [],
        ProvisionedWriteCapacityAutoScalingSettingsUpdate: (_) => se_AutoScalingSettingsUpdate(_, context),
        ProvisionedWriteCapacityUnits: [],
    });
};
const se_GlobalTableGlobalSecondaryIndexSettingsUpdateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_GlobalTableGlobalSecondaryIndexSettingsUpdate(entry, context);
    });
};
const se_ImportTableInput = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        ClientToken: [true, (_) => _ ?? (0,v4/* default */.A)()],
        InputCompressionType: [],
        InputFormat: [],
        InputFormatOptions: smithy_client_dist_es/* _json */.Ss,
        S3BucketSource: smithy_client_dist_es/* _json */.Ss,
        TableCreationParameters: smithy_client_dist_es/* _json */.Ss,
    });
};
const se_IncrementalExportSpecification = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        ExportFromTime: (_) => Math.round(_.getTime() / 1000),
        ExportToTime: (_) => Math.round(_.getTime() / 1000),
        ExportViewType: [],
    });
};
const se_Key = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = se_AttributeValue(value, context);
        return acc;
    }, {});
};
const se_KeyConditions = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = se_Condition(value, context);
        return acc;
    }, {});
};
const se_KeyList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_Key(entry, context);
    });
};
const se_KeysAndAttributes = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        AttributesToGet: smithy_client_dist_es/* _json */.Ss,
        ConsistentRead: [],
        ExpressionAttributeNames: smithy_client_dist_es/* _json */.Ss,
        Keys: (_) => se_KeyList(_, context),
        ProjectionExpression: [],
    });
};
const se_ListAttributeValue = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_AttributeValue(entry, context);
    });
};
const se_ListBackupsInput = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        BackupType: [],
        ExclusiveStartBackupArn: [],
        Limit: [],
        TableName: [],
        TimeRangeLowerBound: (_) => Math.round(_.getTime() / 1000),
        TimeRangeUpperBound: (_) => Math.round(_.getTime() / 1000),
    });
};
const se_MapAttributeValue = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = se_AttributeValue(value, context);
        return acc;
    }, {});
};
const se_ParameterizedStatement = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        Parameters: (_) => se_PreparedStatementParameters(_, context),
        ReturnValuesOnConditionCheckFailure: [],
        Statement: [],
    });
};
const se_ParameterizedStatements = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_ParameterizedStatement(entry, context);
    });
};
const se_PartiQLBatchRequest = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_BatchStatementRequest(entry, context);
    });
};
const se_PreparedStatementParameters = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_AttributeValue(entry, context);
    });
};
const se_Put = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        ConditionExpression: [],
        ExpressionAttributeNames: smithy_client_dist_es/* _json */.Ss,
        ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
        Item: (_) => se_PutItemInputAttributeMap(_, context),
        ReturnValuesOnConditionCheckFailure: [],
        TableName: [],
    });
};
const se_PutItemInput = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        ConditionExpression: [],
        ConditionalOperator: [],
        Expected: (_) => se_ExpectedAttributeMap(_, context),
        ExpressionAttributeNames: smithy_client_dist_es/* _json */.Ss,
        ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
        Item: (_) => se_PutItemInputAttributeMap(_, context),
        ReturnConsumedCapacity: [],
        ReturnItemCollectionMetrics: [],
        ReturnValues: [],
        ReturnValuesOnConditionCheckFailure: [],
        TableName: [],
    });
};
const se_PutItemInputAttributeMap = (input, context) => {
    return Object.entries(input).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = se_AttributeValue(value, context);
        return acc;
    }, {});
};
const se_PutRequest = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        Item: (_) => se_PutItemInputAttributeMap(_, context),
    });
};
const se_QueryInput = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        AttributesToGet: smithy_client_dist_es/* _json */.Ss,
        ConditionalOperator: [],
        ConsistentRead: [],
        ExclusiveStartKey: (_) => se_Key(_, context),
        ExpressionAttributeNames: smithy_client_dist_es/* _json */.Ss,
        ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
        FilterExpression: [],
        IndexName: [],
        KeyConditionExpression: [],
        KeyConditions: (_) => se_KeyConditions(_, context),
        Limit: [],
        ProjectionExpression: [],
        QueryFilter: (_) => se_FilterConditionMap(_, context),
        ReturnConsumedCapacity: [],
        ScanIndexForward: [],
        Select: [],
        TableName: [],
    });
};
const se_ReplicaAutoScalingUpdate = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        RegionName: [],
        ReplicaGlobalSecondaryIndexUpdates: (_) => se_ReplicaGlobalSecondaryIndexAutoScalingUpdateList(_, context),
        ReplicaProvisionedReadCapacityAutoScalingUpdate: (_) => se_AutoScalingSettingsUpdate(_, context),
    });
};
const se_ReplicaAutoScalingUpdateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_ReplicaAutoScalingUpdate(entry, context);
    });
};
const se_ReplicaGlobalSecondaryIndexAutoScalingUpdate = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        IndexName: [],
        ProvisionedReadCapacityAutoScalingUpdate: (_) => se_AutoScalingSettingsUpdate(_, context),
    });
};
const se_ReplicaGlobalSecondaryIndexAutoScalingUpdateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_ReplicaGlobalSecondaryIndexAutoScalingUpdate(entry, context);
    });
};
const se_ReplicaGlobalSecondaryIndexSettingsUpdate = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        IndexName: [],
        ProvisionedReadCapacityAutoScalingSettingsUpdate: (_) => se_AutoScalingSettingsUpdate(_, context),
        ProvisionedReadCapacityUnits: [],
    });
};
const se_ReplicaGlobalSecondaryIndexSettingsUpdateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_ReplicaGlobalSecondaryIndexSettingsUpdate(entry, context);
    });
};
const se_ReplicaSettingsUpdate = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        RegionName: [],
        ReplicaGlobalSecondaryIndexSettingsUpdate: (_) => se_ReplicaGlobalSecondaryIndexSettingsUpdateList(_, context),
        ReplicaProvisionedReadCapacityAutoScalingSettingsUpdate: (_) => se_AutoScalingSettingsUpdate(_, context),
        ReplicaProvisionedReadCapacityUnits: [],
        ReplicaTableClass: [],
    });
};
const se_ReplicaSettingsUpdateList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_ReplicaSettingsUpdate(entry, context);
    });
};
const se_RestoreTableToPointInTimeInput = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        BillingModeOverride: [],
        GlobalSecondaryIndexOverride: smithy_client_dist_es/* _json */.Ss,
        LocalSecondaryIndexOverride: smithy_client_dist_es/* _json */.Ss,
        ProvisionedThroughputOverride: smithy_client_dist_es/* _json */.Ss,
        RestoreDateTime: (_) => Math.round(_.getTime() / 1000),
        SSESpecificationOverride: smithy_client_dist_es/* _json */.Ss,
        SourceTableArn: [],
        SourceTableName: [],
        TargetTableName: [],
        UseLatestRestorableTime: [],
    });
};
const se_ScanInput = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        AttributesToGet: smithy_client_dist_es/* _json */.Ss,
        ConditionalOperator: [],
        ConsistentRead: [],
        ExclusiveStartKey: (_) => se_Key(_, context),
        ExpressionAttributeNames: smithy_client_dist_es/* _json */.Ss,
        ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
        FilterExpression: [],
        IndexName: [],
        Limit: [],
        ProjectionExpression: [],
        ReturnConsumedCapacity: [],
        ScanFilter: (_) => se_FilterConditionMap(_, context),
        Segment: [],
        Select: [],
        TableName: [],
        TotalSegments: [],
    });
};
const se_TransactGetItem = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        Get: (_) => se_Get(_, context),
    });
};
const se_TransactGetItemList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_TransactGetItem(entry, context);
    });
};
const se_TransactGetItemsInput = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        ReturnConsumedCapacity: [],
        TransactItems: (_) => se_TransactGetItemList(_, context),
    });
};
const se_TransactWriteItem = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        ConditionCheck: (_) => se_ConditionCheck(_, context),
        Delete: (_) => se_Delete(_, context),
        Put: (_) => se_Put(_, context),
        Update: (_) => se_Update(_, context),
    });
};
const se_TransactWriteItemList = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_TransactWriteItem(entry, context);
    });
};
const se_TransactWriteItemsInput = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        ClientRequestToken: [true, (_) => _ ?? (0,v4/* default */.A)()],
        ReturnConsumedCapacity: [],
        ReturnItemCollectionMetrics: [],
        TransactItems: (_) => se_TransactWriteItemList(_, context),
    });
};
const se_Update = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        ConditionExpression: [],
        ExpressionAttributeNames: smithy_client_dist_es/* _json */.Ss,
        ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
        Key: (_) => se_Key(_, context),
        ReturnValuesOnConditionCheckFailure: [],
        TableName: [],
        UpdateExpression: [],
    });
};
const se_UpdateGlobalTableSettingsInput = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        GlobalTableBillingMode: [],
        GlobalTableGlobalSecondaryIndexSettingsUpdate: (_) => se_GlobalTableGlobalSecondaryIndexSettingsUpdateList(_, context),
        GlobalTableName: [],
        GlobalTableProvisionedWriteCapacityAutoScalingSettingsUpdate: (_) => se_AutoScalingSettingsUpdate(_, context),
        GlobalTableProvisionedWriteCapacityUnits: [],
        ReplicaSettingsUpdate: (_) => se_ReplicaSettingsUpdateList(_, context),
    });
};
const se_UpdateItemInput = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        AttributeUpdates: (_) => se_AttributeUpdates(_, context),
        ConditionExpression: [],
        ConditionalOperator: [],
        Expected: (_) => se_ExpectedAttributeMap(_, context),
        ExpressionAttributeNames: smithy_client_dist_es/* _json */.Ss,
        ExpressionAttributeValues: (_) => se_ExpressionAttributeValueMap(_, context),
        Key: (_) => se_Key(_, context),
        ReturnConsumedCapacity: [],
        ReturnItemCollectionMetrics: [],
        ReturnValues: [],
        ReturnValuesOnConditionCheckFailure: [],
        TableName: [],
        UpdateExpression: [],
    });
};
const se_UpdateTableReplicaAutoScalingInput = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        GlobalSecondaryIndexUpdates: (_) => se_GlobalSecondaryIndexAutoScalingUpdateList(_, context),
        ProvisionedWriteCapacityAutoScalingUpdate: (_) => se_AutoScalingSettingsUpdate(_, context),
        ReplicaUpdates: (_) => se_ReplicaAutoScalingUpdateList(_, context),
        TableName: [],
    });
};
const se_WriteRequest = (input, context) => {
    return (0,smithy_client_dist_es/* take */.s)(input, {
        DeleteRequest: (_) => se_DeleteRequest(_, context),
        PutRequest: (_) => se_PutRequest(_, context),
    });
};
const se_WriteRequests = (input, context) => {
    return input
        .filter((e) => e != null)
        .map((entry) => {
        return se_WriteRequest(entry, context);
    });
};
const de_ArchivalSummary = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        ArchivalBackupArn: smithy_client_dist_es/* expectString */.lK,
        ArchivalDateTime: (_) => (0,smithy_client_dist_es/* expectNonNull */.Y0)((0,smithy_client_dist_es/* parseEpochTimestamp */.l3)((0,smithy_client_dist_es/* expectNumber */.r$)(_))),
        ArchivalReason: smithy_client_dist_es/* expectString */.lK,
    });
};
const de_AttributeMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = de_AttributeValue(awsExpectUnion(value), context);
        return acc;
    }, {});
};
const de_AttributeValue = (output, context) => {
    if (output.B != null) {
        return {
            B: context.base64Decoder(output.B),
        };
    }
    if ((0,smithy_client_dist_es/* expectBoolean */.ak)(output.BOOL) !== undefined) {
        return { BOOL: (0,smithy_client_dist_es/* expectBoolean */.ak)(output.BOOL) };
    }
    if (output.BS != null) {
        return {
            BS: de_BinarySetAttributeValue(output.BS, context),
        };
    }
    if (output.L != null) {
        return {
            L: de_ListAttributeValue(output.L, context),
        };
    }
    if (output.M != null) {
        return {
            M: de_MapAttributeValue(output.M, context),
        };
    }
    if ((0,smithy_client_dist_es/* expectString */.lK)(output.N) !== undefined) {
        return { N: (0,smithy_client_dist_es/* expectString */.lK)(output.N) };
    }
    if (output.NS != null) {
        return {
            NS: (0,smithy_client_dist_es/* _json */.Ss)(output.NS),
        };
    }
    if ((0,smithy_client_dist_es/* expectBoolean */.ak)(output.NULL) !== undefined) {
        return { NULL: (0,smithy_client_dist_es/* expectBoolean */.ak)(output.NULL) };
    }
    if ((0,smithy_client_dist_es/* expectString */.lK)(output.S) !== undefined) {
        return { S: (0,smithy_client_dist_es/* expectString */.lK)(output.S) };
    }
    if (output.SS != null) {
        return {
            SS: (0,smithy_client_dist_es/* _json */.Ss)(output.SS),
        };
    }
    return { $unknown: Object.entries(output)[0] };
};
const de_AutoScalingPolicyDescription = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        PolicyName: smithy_client_dist_es/* expectString */.lK,
        TargetTrackingScalingPolicyConfiguration: (_) => de_AutoScalingTargetTrackingScalingPolicyConfigurationDescription(_, context),
    });
};
const de_AutoScalingPolicyDescriptionList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_AutoScalingPolicyDescription(entry, context);
    });
    return retVal;
};
const de_AutoScalingSettingsDescription = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        AutoScalingDisabled: smithy_client_dist_es/* expectBoolean */.ak,
        AutoScalingRoleArn: smithy_client_dist_es/* expectString */.lK,
        MaximumUnits: smithy_client_dist_es/* expectLong */.Yy,
        MinimumUnits: smithy_client_dist_es/* expectLong */.Yy,
        ScalingPolicies: (_) => de_AutoScalingPolicyDescriptionList(_, context),
    });
};
const de_AutoScalingTargetTrackingScalingPolicyConfigurationDescription = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        DisableScaleIn: smithy_client_dist_es/* expectBoolean */.ak,
        ScaleInCooldown: smithy_client_dist_es/* expectInt32 */.ET,
        ScaleOutCooldown: smithy_client_dist_es/* expectInt32 */.ET,
        TargetValue: smithy_client_dist_es/* limitedParseDouble */.JW,
    });
};
const de_BackupDescription = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        BackupDetails: (_) => de_BackupDetails(_, context),
        SourceTableDetails: (_) => de_SourceTableDetails(_, context),
        SourceTableFeatureDetails: (_) => de_SourceTableFeatureDetails(_, context),
    });
};
const de_BackupDetails = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        BackupArn: smithy_client_dist_es/* expectString */.lK,
        BackupCreationDateTime: (_) => (0,smithy_client_dist_es/* expectNonNull */.Y0)((0,smithy_client_dist_es/* parseEpochTimestamp */.l3)((0,smithy_client_dist_es/* expectNumber */.r$)(_))),
        BackupExpiryDateTime: (_) => (0,smithy_client_dist_es/* expectNonNull */.Y0)((0,smithy_client_dist_es/* parseEpochTimestamp */.l3)((0,smithy_client_dist_es/* expectNumber */.r$)(_))),
        BackupName: smithy_client_dist_es/* expectString */.lK,
        BackupSizeBytes: smithy_client_dist_es/* expectLong */.Yy,
        BackupStatus: smithy_client_dist_es/* expectString */.lK,
        BackupType: smithy_client_dist_es/* expectString */.lK,
    });
};
const de_BackupSummaries = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_BackupSummary(entry, context);
    });
    return retVal;
};
const de_BackupSummary = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        BackupArn: smithy_client_dist_es/* expectString */.lK,
        BackupCreationDateTime: (_) => (0,smithy_client_dist_es/* expectNonNull */.Y0)((0,smithy_client_dist_es/* parseEpochTimestamp */.l3)((0,smithy_client_dist_es/* expectNumber */.r$)(_))),
        BackupExpiryDateTime: (_) => (0,smithy_client_dist_es/* expectNonNull */.Y0)((0,smithy_client_dist_es/* parseEpochTimestamp */.l3)((0,smithy_client_dist_es/* expectNumber */.r$)(_))),
        BackupName: smithy_client_dist_es/* expectString */.lK,
        BackupSizeBytes: smithy_client_dist_es/* expectLong */.Yy,
        BackupStatus: smithy_client_dist_es/* expectString */.lK,
        BackupType: smithy_client_dist_es/* expectString */.lK,
        TableArn: smithy_client_dist_es/* expectString */.lK,
        TableId: smithy_client_dist_es/* expectString */.lK,
        TableName: smithy_client_dist_es/* expectString */.lK,
    });
};
const de_BatchExecuteStatementOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        ConsumedCapacity: (_) => de_ConsumedCapacityMultiple(_, context),
        Responses: (_) => de_PartiQLBatchResponse(_, context),
    });
};
const de_BatchGetItemOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        ConsumedCapacity: (_) => de_ConsumedCapacityMultiple(_, context),
        Responses: (_) => de_BatchGetResponseMap(_, context),
        UnprocessedKeys: (_) => de_BatchGetRequestMap(_, context),
    });
};
const de_BatchGetRequestMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = de_KeysAndAttributes(value, context);
        return acc;
    }, {});
};
const de_BatchGetResponseMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = de_ItemList(value, context);
        return acc;
    }, {});
};
const de_BatchStatementError = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        Code: smithy_client_dist_es/* expectString */.lK,
        Item: (_) => de_AttributeMap(_, context),
        Message: smithy_client_dist_es/* expectString */.lK,
    });
};
const de_BatchStatementResponse = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        Error: (_) => de_BatchStatementError(_, context),
        Item: (_) => de_AttributeMap(_, context),
        TableName: smithy_client_dist_es/* expectString */.lK,
    });
};
const de_BatchWriteItemOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        ConsumedCapacity: (_) => de_ConsumedCapacityMultiple(_, context),
        ItemCollectionMetrics: (_) => de_ItemCollectionMetricsPerTable(_, context),
        UnprocessedItems: (_) => de_BatchWriteItemRequestMap(_, context),
    });
};
const de_BatchWriteItemRequestMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = de_WriteRequests(value, context);
        return acc;
    }, {});
};
const de_BillingModeSummary = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        BillingMode: smithy_client_dist_es/* expectString */.lK,
        LastUpdateToPayPerRequestDateTime: (_) => (0,smithy_client_dist_es/* expectNonNull */.Y0)((0,smithy_client_dist_es/* parseEpochTimestamp */.l3)((0,smithy_client_dist_es/* expectNumber */.r$)(_))),
    });
};
const de_BinarySetAttributeValue = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return context.base64Decoder(entry);
    });
    return retVal;
};
const de_CancellationReason = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        Code: smithy_client_dist_es/* expectString */.lK,
        Item: (_) => de_AttributeMap(_, context),
        Message: smithy_client_dist_es/* expectString */.lK,
    });
};
const de_CancellationReasonList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_CancellationReason(entry, context);
    });
    return retVal;
};
const de_Capacity = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        CapacityUnits: smithy_client_dist_es/* limitedParseDouble */.JW,
        ReadCapacityUnits: smithy_client_dist_es/* limitedParseDouble */.JW,
        WriteCapacityUnits: smithy_client_dist_es/* limitedParseDouble */.JW,
    });
};
const de_ConditionalCheckFailedException = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        Item: (_) => de_AttributeMap(_, context),
        message: smithy_client_dist_es/* expectString */.lK,
    });
};
const de_ConsumedCapacity = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        CapacityUnits: smithy_client_dist_es/* limitedParseDouble */.JW,
        GlobalSecondaryIndexes: (_) => de_SecondaryIndexesCapacityMap(_, context),
        LocalSecondaryIndexes: (_) => de_SecondaryIndexesCapacityMap(_, context),
        ReadCapacityUnits: smithy_client_dist_es/* limitedParseDouble */.JW,
        Table: (_) => de_Capacity(_, context),
        TableName: smithy_client_dist_es/* expectString */.lK,
        WriteCapacityUnits: smithy_client_dist_es/* limitedParseDouble */.JW,
    });
};
const de_ConsumedCapacityMultiple = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ConsumedCapacity(entry, context);
    });
    return retVal;
};
const de_ContinuousBackupsDescription = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        ContinuousBackupsStatus: smithy_client_dist_es/* expectString */.lK,
        PointInTimeRecoveryDescription: (_) => de_PointInTimeRecoveryDescription(_, context),
    });
};
const de_CreateBackupOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        BackupDetails: (_) => de_BackupDetails(_, context),
    });
};
const de_CreateGlobalTableOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        GlobalTableDescription: (_) => de_GlobalTableDescription(_, context),
    });
};
const de_CreateTableOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        TableDescription: (_) => de_TableDescription(_, context),
    });
};
const de_DeleteBackupOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        BackupDescription: (_) => de_BackupDescription(_, context),
    });
};
const de_DeleteItemOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        Attributes: (_) => de_AttributeMap(_, context),
        ConsumedCapacity: (_) => de_ConsumedCapacity(_, context),
        ItemCollectionMetrics: (_) => de_ItemCollectionMetrics(_, context),
    });
};
const de_DeleteRequest = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        Key: (_) => de_Key(_, context),
    });
};
const de_DeleteTableOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        TableDescription: (_) => de_TableDescription(_, context),
    });
};
const de_DescribeBackupOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        BackupDescription: (_) => de_BackupDescription(_, context),
    });
};
const de_DescribeContinuousBackupsOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        ContinuousBackupsDescription: (_) => de_ContinuousBackupsDescription(_, context),
    });
};
const de_DescribeContributorInsightsOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        ContributorInsightsRuleList: smithy_client_dist_es/* _json */.Ss,
        ContributorInsightsStatus: smithy_client_dist_es/* expectString */.lK,
        FailureException: smithy_client_dist_es/* _json */.Ss,
        IndexName: smithy_client_dist_es/* expectString */.lK,
        LastUpdateDateTime: (_) => (0,smithy_client_dist_es/* expectNonNull */.Y0)((0,smithy_client_dist_es/* parseEpochTimestamp */.l3)((0,smithy_client_dist_es/* expectNumber */.r$)(_))),
        TableName: smithy_client_dist_es/* expectString */.lK,
    });
};
const de_DescribeExportOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        ExportDescription: (_) => de_ExportDescription(_, context),
    });
};
const de_DescribeGlobalTableOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        GlobalTableDescription: (_) => de_GlobalTableDescription(_, context),
    });
};
const de_DescribeGlobalTableSettingsOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        GlobalTableName: smithy_client_dist_es/* expectString */.lK,
        ReplicaSettings: (_) => de_ReplicaSettingsDescriptionList(_, context),
    });
};
const de_DescribeImportOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        ImportTableDescription: (_) => de_ImportTableDescription(_, context),
    });
};
const de_DescribeTableOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        Table: (_) => de_TableDescription(_, context),
    });
};
const de_DescribeTableReplicaAutoScalingOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        TableAutoScalingDescription: (_) => de_TableAutoScalingDescription(_, context),
    });
};
const de_ExecuteStatementOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        ConsumedCapacity: (_) => de_ConsumedCapacity(_, context),
        Items: (_) => de_ItemList(_, context),
        LastEvaluatedKey: (_) => de_Key(_, context),
        NextToken: smithy_client_dist_es/* expectString */.lK,
    });
};
const de_ExecuteTransactionOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        ConsumedCapacity: (_) => de_ConsumedCapacityMultiple(_, context),
        Responses: (_) => de_ItemResponseList(_, context),
    });
};
const de_ExportDescription = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        BilledSizeBytes: smithy_client_dist_es/* expectLong */.Yy,
        ClientToken: smithy_client_dist_es/* expectString */.lK,
        EndTime: (_) => (0,smithy_client_dist_es/* expectNonNull */.Y0)((0,smithy_client_dist_es/* parseEpochTimestamp */.l3)((0,smithy_client_dist_es/* expectNumber */.r$)(_))),
        ExportArn: smithy_client_dist_es/* expectString */.lK,
        ExportFormat: smithy_client_dist_es/* expectString */.lK,
        ExportManifest: smithy_client_dist_es/* expectString */.lK,
        ExportStatus: smithy_client_dist_es/* expectString */.lK,
        ExportTime: (_) => (0,smithy_client_dist_es/* expectNonNull */.Y0)((0,smithy_client_dist_es/* parseEpochTimestamp */.l3)((0,smithy_client_dist_es/* expectNumber */.r$)(_))),
        ExportType: smithy_client_dist_es/* expectString */.lK,
        FailureCode: smithy_client_dist_es/* expectString */.lK,
        FailureMessage: smithy_client_dist_es/* expectString */.lK,
        IncrementalExportSpecification: (_) => de_IncrementalExportSpecification(_, context),
        ItemCount: smithy_client_dist_es/* expectLong */.Yy,
        S3Bucket: smithy_client_dist_es/* expectString */.lK,
        S3BucketOwner: smithy_client_dist_es/* expectString */.lK,
        S3Prefix: smithy_client_dist_es/* expectString */.lK,
        S3SseAlgorithm: smithy_client_dist_es/* expectString */.lK,
        S3SseKmsKeyId: smithy_client_dist_es/* expectString */.lK,
        StartTime: (_) => (0,smithy_client_dist_es/* expectNonNull */.Y0)((0,smithy_client_dist_es/* parseEpochTimestamp */.l3)((0,smithy_client_dist_es/* expectNumber */.r$)(_))),
        TableArn: smithy_client_dist_es/* expectString */.lK,
        TableId: smithy_client_dist_es/* expectString */.lK,
    });
};
const de_ExportTableToPointInTimeOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        ExportDescription: (_) => de_ExportDescription(_, context),
    });
};
const de_GetItemOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        ConsumedCapacity: (_) => de_ConsumedCapacity(_, context),
        Item: (_) => de_AttributeMap(_, context),
    });
};
const de_GlobalSecondaryIndexDescription = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        Backfilling: smithy_client_dist_es/* expectBoolean */.ak,
        IndexArn: smithy_client_dist_es/* expectString */.lK,
        IndexName: smithy_client_dist_es/* expectString */.lK,
        IndexSizeBytes: smithy_client_dist_es/* expectLong */.Yy,
        IndexStatus: smithy_client_dist_es/* expectString */.lK,
        ItemCount: smithy_client_dist_es/* expectLong */.Yy,
        KeySchema: smithy_client_dist_es/* _json */.Ss,
        Projection: smithy_client_dist_es/* _json */.Ss,
        ProvisionedThroughput: (_) => de_ProvisionedThroughputDescription(_, context),
    });
};
const de_GlobalSecondaryIndexDescriptionList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_GlobalSecondaryIndexDescription(entry, context);
    });
    return retVal;
};
const de_GlobalTableDescription = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        CreationDateTime: (_) => (0,smithy_client_dist_es/* expectNonNull */.Y0)((0,smithy_client_dist_es/* parseEpochTimestamp */.l3)((0,smithy_client_dist_es/* expectNumber */.r$)(_))),
        GlobalTableArn: smithy_client_dist_es/* expectString */.lK,
        GlobalTableName: smithy_client_dist_es/* expectString */.lK,
        GlobalTableStatus: smithy_client_dist_es/* expectString */.lK,
        ReplicationGroup: (_) => de_ReplicaDescriptionList(_, context),
    });
};
const de_ImportSummary = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        CloudWatchLogGroupArn: smithy_client_dist_es/* expectString */.lK,
        EndTime: (_) => (0,smithy_client_dist_es/* expectNonNull */.Y0)((0,smithy_client_dist_es/* parseEpochTimestamp */.l3)((0,smithy_client_dist_es/* expectNumber */.r$)(_))),
        ImportArn: smithy_client_dist_es/* expectString */.lK,
        ImportStatus: smithy_client_dist_es/* expectString */.lK,
        InputFormat: smithy_client_dist_es/* expectString */.lK,
        S3BucketSource: smithy_client_dist_es/* _json */.Ss,
        StartTime: (_) => (0,smithy_client_dist_es/* expectNonNull */.Y0)((0,smithy_client_dist_es/* parseEpochTimestamp */.l3)((0,smithy_client_dist_es/* expectNumber */.r$)(_))),
        TableArn: smithy_client_dist_es/* expectString */.lK,
    });
};
const de_ImportSummaryList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ImportSummary(entry, context);
    });
    return retVal;
};
const de_ImportTableDescription = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        ClientToken: smithy_client_dist_es/* expectString */.lK,
        CloudWatchLogGroupArn: smithy_client_dist_es/* expectString */.lK,
        EndTime: (_) => (0,smithy_client_dist_es/* expectNonNull */.Y0)((0,smithy_client_dist_es/* parseEpochTimestamp */.l3)((0,smithy_client_dist_es/* expectNumber */.r$)(_))),
        ErrorCount: smithy_client_dist_es/* expectLong */.Yy,
        FailureCode: smithy_client_dist_es/* expectString */.lK,
        FailureMessage: smithy_client_dist_es/* expectString */.lK,
        ImportArn: smithy_client_dist_es/* expectString */.lK,
        ImportStatus: smithy_client_dist_es/* expectString */.lK,
        ImportedItemCount: smithy_client_dist_es/* expectLong */.Yy,
        InputCompressionType: smithy_client_dist_es/* expectString */.lK,
        InputFormat: smithy_client_dist_es/* expectString */.lK,
        InputFormatOptions: smithy_client_dist_es/* _json */.Ss,
        ProcessedItemCount: smithy_client_dist_es/* expectLong */.Yy,
        ProcessedSizeBytes: smithy_client_dist_es/* expectLong */.Yy,
        S3BucketSource: smithy_client_dist_es/* _json */.Ss,
        StartTime: (_) => (0,smithy_client_dist_es/* expectNonNull */.Y0)((0,smithy_client_dist_es/* parseEpochTimestamp */.l3)((0,smithy_client_dist_es/* expectNumber */.r$)(_))),
        TableArn: smithy_client_dist_es/* expectString */.lK,
        TableCreationParameters: smithy_client_dist_es/* _json */.Ss,
        TableId: smithy_client_dist_es/* expectString */.lK,
    });
};
const de_ImportTableOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        ImportTableDescription: (_) => de_ImportTableDescription(_, context),
    });
};
const de_IncrementalExportSpecification = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        ExportFromTime: (_) => (0,smithy_client_dist_es/* expectNonNull */.Y0)((0,smithy_client_dist_es/* parseEpochTimestamp */.l3)((0,smithy_client_dist_es/* expectNumber */.r$)(_))),
        ExportToTime: (_) => (0,smithy_client_dist_es/* expectNonNull */.Y0)((0,smithy_client_dist_es/* parseEpochTimestamp */.l3)((0,smithy_client_dist_es/* expectNumber */.r$)(_))),
        ExportViewType: smithy_client_dist_es/* expectString */.lK,
    });
};
const de_ItemCollectionKeyAttributeMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = de_AttributeValue(awsExpectUnion(value), context);
        return acc;
    }, {});
};
const de_ItemCollectionMetrics = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        ItemCollectionKey: (_) => de_ItemCollectionKeyAttributeMap(_, context),
        SizeEstimateRangeGB: (_) => de_ItemCollectionSizeEstimateRange(_, context),
    });
};
const de_ItemCollectionMetricsMultiple = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ItemCollectionMetrics(entry, context);
    });
    return retVal;
};
const de_ItemCollectionMetricsPerTable = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = de_ItemCollectionMetricsMultiple(value, context);
        return acc;
    }, {});
};
const de_ItemCollectionSizeEstimateRange = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return (0,smithy_client_dist_es/* limitedParseDouble */.JW)(entry);
    });
    return retVal;
};
const de_ItemList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_AttributeMap(entry, context);
    });
    return retVal;
};
const de_ItemResponse = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        Item: (_) => de_AttributeMap(_, context),
    });
};
const de_ItemResponseList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ItemResponse(entry, context);
    });
    return retVal;
};
const de_Key = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = de_AttributeValue(awsExpectUnion(value), context);
        return acc;
    }, {});
};
const de_KeyList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_Key(entry, context);
    });
    return retVal;
};
const de_KeysAndAttributes = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        AttributesToGet: smithy_client_dist_es/* _json */.Ss,
        ConsistentRead: smithy_client_dist_es/* expectBoolean */.ak,
        ExpressionAttributeNames: smithy_client_dist_es/* _json */.Ss,
        Keys: (_) => de_KeyList(_, context),
        ProjectionExpression: smithy_client_dist_es/* expectString */.lK,
    });
};
const de_ListAttributeValue = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_AttributeValue(awsExpectUnion(entry), context);
    });
    return retVal;
};
const de_ListBackupsOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        BackupSummaries: (_) => de_BackupSummaries(_, context),
        LastEvaluatedBackupArn: smithy_client_dist_es/* expectString */.lK,
    });
};
const de_ListImportsOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        ImportSummaryList: (_) => de_ImportSummaryList(_, context),
        NextToken: smithy_client_dist_es/* expectString */.lK,
    });
};
const de_MapAttributeValue = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = de_AttributeValue(awsExpectUnion(value), context);
        return acc;
    }, {});
};
const de_PartiQLBatchResponse = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_BatchStatementResponse(entry, context);
    });
    return retVal;
};
const de_PointInTimeRecoveryDescription = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        EarliestRestorableDateTime: (_) => (0,smithy_client_dist_es/* expectNonNull */.Y0)((0,smithy_client_dist_es/* parseEpochTimestamp */.l3)((0,smithy_client_dist_es/* expectNumber */.r$)(_))),
        LatestRestorableDateTime: (_) => (0,smithy_client_dist_es/* expectNonNull */.Y0)((0,smithy_client_dist_es/* parseEpochTimestamp */.l3)((0,smithy_client_dist_es/* expectNumber */.r$)(_))),
        PointInTimeRecoveryStatus: smithy_client_dist_es/* expectString */.lK,
    });
};
const de_ProvisionedThroughputDescription = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        LastDecreaseDateTime: (_) => (0,smithy_client_dist_es/* expectNonNull */.Y0)((0,smithy_client_dist_es/* parseEpochTimestamp */.l3)((0,smithy_client_dist_es/* expectNumber */.r$)(_))),
        LastIncreaseDateTime: (_) => (0,smithy_client_dist_es/* expectNonNull */.Y0)((0,smithy_client_dist_es/* parseEpochTimestamp */.l3)((0,smithy_client_dist_es/* expectNumber */.r$)(_))),
        NumberOfDecreasesToday: smithy_client_dist_es/* expectLong */.Yy,
        ReadCapacityUnits: smithy_client_dist_es/* expectLong */.Yy,
        WriteCapacityUnits: smithy_client_dist_es/* expectLong */.Yy,
    });
};
const de_PutItemInputAttributeMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = de_AttributeValue(awsExpectUnion(value), context);
        return acc;
    }, {});
};
const de_PutItemOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        Attributes: (_) => de_AttributeMap(_, context),
        ConsumedCapacity: (_) => de_ConsumedCapacity(_, context),
        ItemCollectionMetrics: (_) => de_ItemCollectionMetrics(_, context),
    });
};
const de_PutRequest = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        Item: (_) => de_PutItemInputAttributeMap(_, context),
    });
};
const de_QueryOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        ConsumedCapacity: (_) => de_ConsumedCapacity(_, context),
        Count: smithy_client_dist_es/* expectInt32 */.ET,
        Items: (_) => de_ItemList(_, context),
        LastEvaluatedKey: (_) => de_Key(_, context),
        ScannedCount: smithy_client_dist_es/* expectInt32 */.ET,
    });
};
const de_ReplicaAutoScalingDescription = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        GlobalSecondaryIndexes: (_) => de_ReplicaGlobalSecondaryIndexAutoScalingDescriptionList(_, context),
        RegionName: smithy_client_dist_es/* expectString */.lK,
        ReplicaProvisionedReadCapacityAutoScalingSettings: (_) => de_AutoScalingSettingsDescription(_, context),
        ReplicaProvisionedWriteCapacityAutoScalingSettings: (_) => de_AutoScalingSettingsDescription(_, context),
        ReplicaStatus: smithy_client_dist_es/* expectString */.lK,
    });
};
const de_ReplicaAutoScalingDescriptionList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ReplicaAutoScalingDescription(entry, context);
    });
    return retVal;
};
const de_ReplicaDescription = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        GlobalSecondaryIndexes: smithy_client_dist_es/* _json */.Ss,
        KMSMasterKeyId: smithy_client_dist_es/* expectString */.lK,
        ProvisionedThroughputOverride: smithy_client_dist_es/* _json */.Ss,
        RegionName: smithy_client_dist_es/* expectString */.lK,
        ReplicaInaccessibleDateTime: (_) => (0,smithy_client_dist_es/* expectNonNull */.Y0)((0,smithy_client_dist_es/* parseEpochTimestamp */.l3)((0,smithy_client_dist_es/* expectNumber */.r$)(_))),
        ReplicaStatus: smithy_client_dist_es/* expectString */.lK,
        ReplicaStatusDescription: smithy_client_dist_es/* expectString */.lK,
        ReplicaStatusPercentProgress: smithy_client_dist_es/* expectString */.lK,
        ReplicaTableClassSummary: (_) => de_TableClassSummary(_, context),
    });
};
const de_ReplicaDescriptionList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ReplicaDescription(entry, context);
    });
    return retVal;
};
const de_ReplicaGlobalSecondaryIndexAutoScalingDescription = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        IndexName: smithy_client_dist_es/* expectString */.lK,
        IndexStatus: smithy_client_dist_es/* expectString */.lK,
        ProvisionedReadCapacityAutoScalingSettings: (_) => de_AutoScalingSettingsDescription(_, context),
        ProvisionedWriteCapacityAutoScalingSettings: (_) => de_AutoScalingSettingsDescription(_, context),
    });
};
const de_ReplicaGlobalSecondaryIndexAutoScalingDescriptionList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ReplicaGlobalSecondaryIndexAutoScalingDescription(entry, context);
    });
    return retVal;
};
const de_ReplicaGlobalSecondaryIndexSettingsDescription = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        IndexName: smithy_client_dist_es/* expectString */.lK,
        IndexStatus: smithy_client_dist_es/* expectString */.lK,
        ProvisionedReadCapacityAutoScalingSettings: (_) => de_AutoScalingSettingsDescription(_, context),
        ProvisionedReadCapacityUnits: smithy_client_dist_es/* expectLong */.Yy,
        ProvisionedWriteCapacityAutoScalingSettings: (_) => de_AutoScalingSettingsDescription(_, context),
        ProvisionedWriteCapacityUnits: smithy_client_dist_es/* expectLong */.Yy,
    });
};
const de_ReplicaGlobalSecondaryIndexSettingsDescriptionList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ReplicaGlobalSecondaryIndexSettingsDescription(entry, context);
    });
    return retVal;
};
const de_ReplicaSettingsDescription = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        RegionName: smithy_client_dist_es/* expectString */.lK,
        ReplicaBillingModeSummary: (_) => de_BillingModeSummary(_, context),
        ReplicaGlobalSecondaryIndexSettings: (_) => de_ReplicaGlobalSecondaryIndexSettingsDescriptionList(_, context),
        ReplicaProvisionedReadCapacityAutoScalingSettings: (_) => de_AutoScalingSettingsDescription(_, context),
        ReplicaProvisionedReadCapacityUnits: smithy_client_dist_es/* expectLong */.Yy,
        ReplicaProvisionedWriteCapacityAutoScalingSettings: (_) => de_AutoScalingSettingsDescription(_, context),
        ReplicaProvisionedWriteCapacityUnits: smithy_client_dist_es/* expectLong */.Yy,
        ReplicaStatus: smithy_client_dist_es/* expectString */.lK,
        ReplicaTableClassSummary: (_) => de_TableClassSummary(_, context),
    });
};
const de_ReplicaSettingsDescriptionList = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_ReplicaSettingsDescription(entry, context);
    });
    return retVal;
};
const de_RestoreSummary = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        RestoreDateTime: (_) => (0,smithy_client_dist_es/* expectNonNull */.Y0)((0,smithy_client_dist_es/* parseEpochTimestamp */.l3)((0,smithy_client_dist_es/* expectNumber */.r$)(_))),
        RestoreInProgress: smithy_client_dist_es/* expectBoolean */.ak,
        SourceBackupArn: smithy_client_dist_es/* expectString */.lK,
        SourceTableArn: smithy_client_dist_es/* expectString */.lK,
    });
};
const de_RestoreTableFromBackupOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        TableDescription: (_) => de_TableDescription(_, context),
    });
};
const de_RestoreTableToPointInTimeOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        TableDescription: (_) => de_TableDescription(_, context),
    });
};
const de_ScanOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        ConsumedCapacity: (_) => de_ConsumedCapacity(_, context),
        Count: smithy_client_dist_es/* expectInt32 */.ET,
        Items: (_) => de_ItemList(_, context),
        LastEvaluatedKey: (_) => de_Key(_, context),
        ScannedCount: smithy_client_dist_es/* expectInt32 */.ET,
    });
};
const de_SecondaryIndexesCapacityMap = (output, context) => {
    return Object.entries(output).reduce((acc, [key, value]) => {
        if (value === null) {
            return acc;
        }
        acc[key] = de_Capacity(value, context);
        return acc;
    }, {});
};
const de_SourceTableDetails = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        BillingMode: smithy_client_dist_es/* expectString */.lK,
        ItemCount: smithy_client_dist_es/* expectLong */.Yy,
        KeySchema: smithy_client_dist_es/* _json */.Ss,
        ProvisionedThroughput: smithy_client_dist_es/* _json */.Ss,
        TableArn: smithy_client_dist_es/* expectString */.lK,
        TableCreationDateTime: (_) => (0,smithy_client_dist_es/* expectNonNull */.Y0)((0,smithy_client_dist_es/* parseEpochTimestamp */.l3)((0,smithy_client_dist_es/* expectNumber */.r$)(_))),
        TableId: smithy_client_dist_es/* expectString */.lK,
        TableName: smithy_client_dist_es/* expectString */.lK,
        TableSizeBytes: smithy_client_dist_es/* expectLong */.Yy,
    });
};
const de_SourceTableFeatureDetails = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        GlobalSecondaryIndexes: smithy_client_dist_es/* _json */.Ss,
        LocalSecondaryIndexes: smithy_client_dist_es/* _json */.Ss,
        SSEDescription: (_) => de_SSEDescription(_, context),
        StreamDescription: smithy_client_dist_es/* _json */.Ss,
        TimeToLiveDescription: smithy_client_dist_es/* _json */.Ss,
    });
};
const de_SSEDescription = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        InaccessibleEncryptionDateTime: (_) => (0,smithy_client_dist_es/* expectNonNull */.Y0)((0,smithy_client_dist_es/* parseEpochTimestamp */.l3)((0,smithy_client_dist_es/* expectNumber */.r$)(_))),
        KMSMasterKeyArn: smithy_client_dist_es/* expectString */.lK,
        SSEType: smithy_client_dist_es/* expectString */.lK,
        Status: smithy_client_dist_es/* expectString */.lK,
    });
};
const de_TableAutoScalingDescription = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        Replicas: (_) => de_ReplicaAutoScalingDescriptionList(_, context),
        TableName: smithy_client_dist_es/* expectString */.lK,
        TableStatus: smithy_client_dist_es/* expectString */.lK,
    });
};
const de_TableClassSummary = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        LastUpdateDateTime: (_) => (0,smithy_client_dist_es/* expectNonNull */.Y0)((0,smithy_client_dist_es/* parseEpochTimestamp */.l3)((0,smithy_client_dist_es/* expectNumber */.r$)(_))),
        TableClass: smithy_client_dist_es/* expectString */.lK,
    });
};
const de_TableDescription = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        ArchivalSummary: (_) => de_ArchivalSummary(_, context),
        AttributeDefinitions: smithy_client_dist_es/* _json */.Ss,
        BillingModeSummary: (_) => de_BillingModeSummary(_, context),
        CreationDateTime: (_) => (0,smithy_client_dist_es/* expectNonNull */.Y0)((0,smithy_client_dist_es/* parseEpochTimestamp */.l3)((0,smithy_client_dist_es/* expectNumber */.r$)(_))),
        DeletionProtectionEnabled: smithy_client_dist_es/* expectBoolean */.ak,
        GlobalSecondaryIndexes: (_) => de_GlobalSecondaryIndexDescriptionList(_, context),
        GlobalTableVersion: smithy_client_dist_es/* expectString */.lK,
        ItemCount: smithy_client_dist_es/* expectLong */.Yy,
        KeySchema: smithy_client_dist_es/* _json */.Ss,
        LatestStreamArn: smithy_client_dist_es/* expectString */.lK,
        LatestStreamLabel: smithy_client_dist_es/* expectString */.lK,
        LocalSecondaryIndexes: smithy_client_dist_es/* _json */.Ss,
        ProvisionedThroughput: (_) => de_ProvisionedThroughputDescription(_, context),
        Replicas: (_) => de_ReplicaDescriptionList(_, context),
        RestoreSummary: (_) => de_RestoreSummary(_, context),
        SSEDescription: (_) => de_SSEDescription(_, context),
        StreamSpecification: smithy_client_dist_es/* _json */.Ss,
        TableArn: smithy_client_dist_es/* expectString */.lK,
        TableClassSummary: (_) => de_TableClassSummary(_, context),
        TableId: smithy_client_dist_es/* expectString */.lK,
        TableName: smithy_client_dist_es/* expectString */.lK,
        TableSizeBytes: smithy_client_dist_es/* expectLong */.Yy,
        TableStatus: smithy_client_dist_es/* expectString */.lK,
    });
};
const de_TransactGetItemsOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        ConsumedCapacity: (_) => de_ConsumedCapacityMultiple(_, context),
        Responses: (_) => de_ItemResponseList(_, context),
    });
};
const de_TransactionCanceledException = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        CancellationReasons: (_) => de_CancellationReasonList(_, context),
        Message: smithy_client_dist_es/* expectString */.lK,
    });
};
const de_TransactWriteItemsOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        ConsumedCapacity: (_) => de_ConsumedCapacityMultiple(_, context),
        ItemCollectionMetrics: (_) => de_ItemCollectionMetricsPerTable(_, context),
    });
};
const de_UpdateContinuousBackupsOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        ContinuousBackupsDescription: (_) => de_ContinuousBackupsDescription(_, context),
    });
};
const de_UpdateGlobalTableOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        GlobalTableDescription: (_) => de_GlobalTableDescription(_, context),
    });
};
const de_UpdateGlobalTableSettingsOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        GlobalTableName: smithy_client_dist_es/* expectString */.lK,
        ReplicaSettings: (_) => de_ReplicaSettingsDescriptionList(_, context),
    });
};
const de_UpdateItemOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        Attributes: (_) => de_AttributeMap(_, context),
        ConsumedCapacity: (_) => de_ConsumedCapacity(_, context),
        ItemCollectionMetrics: (_) => de_ItemCollectionMetrics(_, context),
    });
};
const de_UpdateTableOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        TableDescription: (_) => de_TableDescription(_, context),
    });
};
const de_UpdateTableReplicaAutoScalingOutput = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        TableAutoScalingDescription: (_) => de_TableAutoScalingDescription(_, context),
    });
};
const de_WriteRequest = (output, context) => {
    return (0,smithy_client_dist_es/* take */.s)(output, {
        DeleteRequest: (_) => de_DeleteRequest(_, context),
        PutRequest: (_) => de_PutRequest(_, context),
    });
};
const de_WriteRequests = (output, context) => {
    const retVal = (output || [])
        .filter((e) => e != null)
        .map((entry) => {
        return de_WriteRequest(entry, context);
    });
    return retVal;
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const throwDefaultError = (0,smithy_client_dist_es/* withBaseException */.jr)(DynamoDBServiceException);
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new dist_es/* HttpRequest */.Kd(contents);
};
function sharedHeaders(operation) {
    return {
        "content-type": "application/x-amz-json-1.0",
        "x-amz-target": `DynamoDB_20120810.${operation}`,
    };
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeEndpointsCommand.js






class DescribeEndpointsCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "DescribeEndpoints", {})
    .n("DynamoDBClient", "DescribeEndpointsCommand")
    .f(void 0, void 0)
    .ser(se_DescribeEndpointsCommand)
    .de(de_DescribeEndpointsCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/package.json
const package_namespaceObject = {"rE":"3.549.0"};
// EXTERNAL MODULE: ./node_modules/@aws-sdk/core/dist-es/client/emitWarningIfUnsupportedVersion.js
var emitWarningIfUnsupportedVersion = __webpack_require__(2458);
// EXTERNAL MODULE: ./node_modules/@aws-sdk/credential-provider-node/dist-es/index.js + 2 modules
var credential_provider_node_dist_es = __webpack_require__(8257);
// EXTERNAL MODULE: ./node_modules/@aws-sdk/util-user-agent-node/dist-es/index.js + 3 modules
var util_user_agent_node_dist_es = __webpack_require__(3058);
// EXTERNAL MODULE: ./node_modules/@smithy/hash-node/dist-es/index.js
var hash_node_dist_es = __webpack_require__(1701);
// EXTERNAL MODULE: ./node_modules/@smithy/node-config-provider/dist-es/index.js + 4 modules
var node_config_provider_dist_es = __webpack_require__(1881);
// EXTERNAL MODULE: ./node_modules/@smithy/node-http-handler/dist-es/index.js + 13 modules
var node_http_handler_dist_es = __webpack_require__(4616);
// EXTERNAL MODULE: ./node_modules/@smithy/util-body-length-node/dist-es/index.js + 1 modules
var util_body_length_node_dist_es = __webpack_require__(7809);
// EXTERNAL MODULE: ./node_modules/@smithy/util-retry/dist-es/index.js + 8 modules
var util_retry_dist_es = __webpack_require__(3323);
// EXTERNAL MODULE: ./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js + 4 modules
var AwsSdkSigV4Signer = __webpack_require__(1228);
// EXTERNAL MODULE: ./node_modules/@smithy/url-parser/dist-es/index.js + 1 modules
var url_parser_dist_es = __webpack_require__(2641);
// EXTERNAL MODULE: ./node_modules/@smithy/util-base64/dist-es/index.js + 2 modules
var util_base64_dist_es = __webpack_require__(4572);
// EXTERNAL MODULE: ./node_modules/@smithy/util-utf8/dist-es/index.js + 3 modules
var util_utf8_dist_es = __webpack_require__(3197);
// EXTERNAL MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/index.js + 9 modules
var util_endpoints_dist_es = __webpack_require__(6652);
// EXTERNAL MODULE: ./node_modules/@smithy/util-endpoints/dist-es/index.js + 34 modules
var _smithy_util_endpoints_dist_es = __webpack_require__(3875);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/endpoint/ruleset.js
const w = "required", x = "fn", y = "argv", z = "ref";
const a = true, b = "isSet", c = "booleanEquals", d = "error", e = "endpoint", f = "tree", g = "PartitionResult", h = "getAttr", i = "stringEquals", j = { [w]: false, "type": "String" }, k = { [w]: true, "default": false, "type": "Boolean" }, l = { [z]: "Endpoint" }, m = { [x]: c, [y]: [{ [z]: "UseFIPS" }, true] }, n = { [x]: c, [y]: [{ [z]: "UseDualStack" }, true] }, o = {}, p = { [z]: "Region" }, q = { [x]: h, [y]: [{ [z]: g }, "supportsFIPS"] }, r = { [z]: g }, s = { [x]: c, [y]: [true, { [x]: h, [y]: [r, "supportsDualStack"] }] }, t = [m], u = [n], v = [p];
const _data = { version: "1.0", parameters: { Region: j, UseDualStack: k, UseFIPS: k, Endpoint: j }, rules: [{ conditions: [{ [x]: b, [y]: [l] }], rules: [{ conditions: t, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d }, { conditions: u, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d }, { endpoint: { url: l, properties: o, headers: o }, type: e }], type: f }, { conditions: [{ [x]: b, [y]: v }], rules: [{ conditions: [{ [x]: "aws.partition", [y]: v, assign: g }], rules: [{ conditions: [m, n], rules: [{ conditions: [{ [x]: c, [y]: [a, q] }, s], rules: [{ endpoint: { url: "https://dynamodb-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: o, headers: o }, type: e }], type: f }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d }], type: f }, { conditions: t, rules: [{ conditions: [{ [x]: c, [y]: [q, a] }], rules: [{ conditions: [{ [x]: i, [y]: [{ [x]: h, [y]: [r, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://dynamodb.{Region}.amazonaws.com", properties: o, headers: o }, type: e }, { endpoint: { url: "https://dynamodb-fips.{Region}.{PartitionResult#dnsSuffix}", properties: o, headers: o }, type: e }], type: f }, { error: "FIPS is enabled but this partition does not support FIPS", type: d }], type: f }, { conditions: u, rules: [{ conditions: [s], rules: [{ endpoint: { url: "https://dynamodb.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: o, headers: o }, type: e }], type: f }, { error: "DualStack is enabled but this partition does not support DualStack", type: d }], type: f }, { conditions: [{ [x]: i, [y]: [p, "local"] }], endpoint: { url: "http://localhost:8000", properties: { authSchemes: [{ name: "sigv4", signingName: "dynamodb", signingRegion: "us-east-1" }] }, headers: o }, type: e }, { endpoint: { url: "https://dynamodb.{Region}.{PartitionResult#dnsSuffix}", properties: o, headers: o }, type: e }], type: f }], type: f }, { error: "Invalid Configuration: Missing Region", type: d }] };
const ruleSet = _data;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/endpoint/endpointResolver.js



const defaultEndpointResolver = (endpointParams, context = {}) => {
    return (0,_smithy_util_endpoints_dist_es/* resolveEndpoint */.sO)(ruleSet, {
        endpointParams: endpointParams,
        logger: context.logger,
    });
};
_smithy_util_endpoints_dist_es/* customEndpointFunctions */.mw.aws = util_endpoints_dist_es/* awsEndpointFunctions */.UF;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeConfig.shared.js







const getRuntimeConfig = (config) => {
    return {
        apiVersion: "2012-08-10",
        base64Decoder: config?.base64Decoder ?? util_base64_dist_es/* fromBase64 */.E,
        base64Encoder: config?.base64Encoder ?? util_base64_dist_es/* toBase64 */.n,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultDynamoDBHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
            {
                schemeId: "aws.auth#sigv4",
                identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
                signer: new AwsSdkSigV4Signer/* AwsSdkSigV4Signer */.f(),
            },
        ],
        logger: config?.logger ?? new smithy_client_dist_es/* NoOpLogger */.N4(),
        serviceId: config?.serviceId ?? "DynamoDB",
        urlParser: config?.urlParser ?? url_parser_dist_es/* parseUrl */.D,
        utf8Decoder: config?.utf8Decoder ?? util_utf8_dist_es/* fromUtf8 */.ar,
        utf8Encoder: config?.utf8Encoder ?? util_utf8_dist_es/* toUtf8 */.Pq,
    };
};

// EXTERNAL MODULE: ./node_modules/@smithy/util-defaults-mode-node/dist-es/index.js + 3 modules
var util_defaults_mode_node_dist_es = __webpack_require__(4321);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeConfig.js
















const runtimeConfig_getRuntimeConfig = (config) => {
    (0,smithy_client_dist_es/* emitWarningIfUnsupportedVersion */.I9)(process.version);
    const defaultsMode = (0,util_defaults_mode_node_dist_es/* resolveDefaultsModeConfig */.I)(config);
    const defaultConfigProvider = () => defaultsMode().then(smithy_client_dist_es/* loadConfigsForDefaultMode */.lT);
    const clientSharedValues = getRuntimeConfig(config);
    (0,emitWarningIfUnsupportedVersion/* emitWarningIfUnsupportedVersion */.I)(process.version);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? util_body_length_node_dist_es/* calculateBodyLength */.n,
        credentialDefaultProvider: config?.credentialDefaultProvider ?? credential_provider_node_dist_es.defaultProvider,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ??
            (0,util_user_agent_node_dist_es/* defaultUserAgent */.mJ)({ serviceId: clientSharedValues.serviceId, clientVersion: package_namespaceObject.rE }),
        endpointDiscoveryEnabledProvider: config?.endpointDiscoveryEnabledProvider ?? (0,node_config_provider_dist_es/* loadConfig */.Z)(NODE_ENDPOINT_DISCOVERY_CONFIG_OPTIONS),
        maxAttempts: config?.maxAttempts ?? (0,node_config_provider_dist_es/* loadConfig */.Z)(middleware_retry_dist_es/* NODE_MAX_ATTEMPT_CONFIG_OPTIONS */.qs),
        region: config?.region ?? (0,node_config_provider_dist_es/* loadConfig */.Z)(config_resolver_dist_es/* NODE_REGION_CONFIG_OPTIONS */.GG, config_resolver_dist_es/* NODE_REGION_CONFIG_FILE_OPTIONS */.zH),
        requestHandler: node_http_handler_dist_es/* NodeHttpHandler */.$c.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ??
            (0,node_config_provider_dist_es/* loadConfig */.Z)({
                ...middleware_retry_dist_es/* NODE_RETRY_MODE_CONFIG_OPTIONS */.kN,
                default: async () => (await defaultConfigProvider()).retryMode || util_retry_dist_es/* DEFAULT_RETRY_MODE */.L0,
            }),
        sha256: config?.sha256 ?? hash_node_dist_es/* Hash */.V.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? node_http_handler_dist_es/* streamCollector */.kv,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (0,node_config_provider_dist_es/* loadConfig */.Z)(config_resolver_dist_es/* NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS */.e$),
        useFipsEndpoint: config?.useFipsEndpoint ?? (0,node_config_provider_dist_es/* loadConfig */.Z)(config_resolver_dist_es/* NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS */.Ko),
    };
};

// EXTERNAL MODULE: ./node_modules/@aws-sdk/region-config-resolver/dist-es/index.js + 3 modules
var region_config_resolver_dist_es = __webpack_require__(4547);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/auth/httpAuthExtensionConfiguration.js
const getHttpAuthExtensionConfiguration = (runtimeConfig) => {
    const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
    let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
    let _credentials = runtimeConfig.credentials;
    return {
        setHttpAuthScheme(httpAuthScheme) {
            const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
            if (index === -1) {
                _httpAuthSchemes.push(httpAuthScheme);
            }
            else {
                _httpAuthSchemes.splice(index, 1, httpAuthScheme);
            }
        },
        httpAuthSchemes() {
            return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
            _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
            return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
            _credentials = credentials;
        },
        credentials() {
            return _credentials;
        },
    };
};
const resolveHttpAuthRuntimeConfig = (config) => {
    return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials(),
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/runtimeExtensions.js




const asPartial = (t) => t;
const resolveRuntimeExtensions = (runtimeConfig, extensions) => {
    const extensionConfiguration = {
        ...asPartial((0,region_config_resolver_dist_es/* getAwsRegionExtensionConfiguration */.Rq)(runtimeConfig)),
        ...asPartial((0,smithy_client_dist_es/* getDefaultExtensionConfiguration */.xA)(runtimeConfig)),
        ...asPartial((0,dist_es/* getHttpHandlerExtensionConfiguration */.eS)(runtimeConfig)),
        ...asPartial(getHttpAuthExtensionConfiguration(runtimeConfig)),
    };
    extensions.forEach((extension) => extension.configure(extensionConfiguration));
    return {
        ...runtimeConfig,
        ...(0,region_config_resolver_dist_es/* resolveAwsRegionExtensionConfiguration */.$3)(extensionConfiguration),
        ...(0,smithy_client_dist_es/* resolveDefaultRuntimeConfig */.uv)(extensionConfiguration),
        ...(0,dist_es/* resolveHttpHandlerRuntimeConfig */.jt)(extensionConfiguration),
        ...resolveHttpAuthRuntimeConfig(extensionConfiguration),
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/DynamoDBClient.js

















class DynamoDBClient extends smithy_client_dist_es/* Client */.Kj {
    constructor(...[configuration]) {
        const _config_0 = runtimeConfig_getRuntimeConfig(configuration || {});
        const _config_1 = resolveClientEndpointParameters(_config_0);
        const _config_2 = (0,config_resolver_dist_es/* resolveRegionConfig */.TD)(_config_1);
        const _config_3 = (0,middleware_endpoint_dist_es/* resolveEndpointConfig */.Co)(_config_2);
        const _config_4 = (0,middleware_retry_dist_es/* resolveRetryConfig */.$z)(_config_3);
        const _config_5 = (0,middleware_host_header_dist_es/* resolveHostHeaderConfig */.OV)(_config_4);
        const _config_6 = (0,middleware_user_agent_dist_es/* resolveUserAgentConfig */.Dc)(_config_5);
        const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
        const _config_8 = resolveEndpointDiscoveryConfig(_config_7, {
            endpointDiscoveryCommandCtor: DescribeEndpointsCommand,
        });
        const _config_9 = resolveRuntimeExtensions(_config_8, configuration?.extensions || []);
        super(_config_9);
        this.config = _config_9;
        this.middlewareStack.use((0,middleware_retry_dist_es/* getRetryPlugin */.ey)(this.config));
        this.middlewareStack.use((0,middleware_content_length_dist_es/* getContentLengthPlugin */.vK)(this.config));
        this.middlewareStack.use((0,middleware_host_header_dist_es/* getHostHeaderPlugin */.TC)(this.config));
        this.middlewareStack.use((0,middleware_logger_dist_es/* getLoggerPlugin */.Y7)(this.config));
        this.middlewareStack.use((0,middleware_recursion_detection_dist_es/* getRecursionDetectionPlugin */.n4)(this.config));
        this.middlewareStack.use((0,middleware_user_agent_dist_es/* getUserAgentPlugin */.sM)(this.config));
        this.middlewareStack.use((0,core_dist_es/* getHttpAuthSchemeEndpointRuleSetPlugin */.wB)(this.config, {
            httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
            identityProviderConfigProvider: this.getIdentityProviderConfigProvider(),
        }));
        this.middlewareStack.use((0,core_dist_es/* getHttpSigningPlugin */.lW)(this.config));
    }
    destroy() {
        super.destroy();
    }
    getDefaultHttpAuthSchemeParametersProvider() {
        return defaultDynamoDBHttpAuthSchemeParametersProvider;
    }
    getIdentityProviderConfigProvider() {
        return async (config) => new core_dist_es/* DefaultIdentityProviderConfig */.h$({
            "aws.auth#sigv4": config.credentials,
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/BatchExecuteStatementCommand.js






class BatchExecuteStatementCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "BatchExecuteStatement", {})
    .n("DynamoDBClient", "BatchExecuteStatementCommand")
    .f(void 0, void 0)
    .ser(se_BatchExecuteStatementCommand)
    .de(de_BatchExecuteStatementCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/BatchGetItemCommand.js






class BatchGetItemCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "BatchGetItem", {})
    .n("DynamoDBClient", "BatchGetItemCommand")
    .f(void 0, void 0)
    .ser(se_BatchGetItemCommand)
    .de(de_BatchGetItemCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/BatchWriteItemCommand.js






class BatchWriteItemCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "BatchWriteItem", {})
    .n("DynamoDBClient", "BatchWriteItemCommand")
    .f(void 0, void 0)
    .ser(se_BatchWriteItemCommand)
    .de(de_BatchWriteItemCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/CreateBackupCommand.js






class CreateBackupCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "CreateBackup", {})
    .n("DynamoDBClient", "CreateBackupCommand")
    .f(void 0, void 0)
    .ser(se_CreateBackupCommand)
    .de(de_CreateBackupCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/CreateGlobalTableCommand.js






class CreateGlobalTableCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "CreateGlobalTable", {})
    .n("DynamoDBClient", "CreateGlobalTableCommand")
    .f(void 0, void 0)
    .ser(se_CreateGlobalTableCommand)
    .de(de_CreateGlobalTableCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/CreateTableCommand.js






class CreateTableCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "CreateTable", {})
    .n("DynamoDBClient", "CreateTableCommand")
    .f(void 0, void 0)
    .ser(se_CreateTableCommand)
    .de(de_CreateTableCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DeleteBackupCommand.js






class DeleteBackupCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "DeleteBackup", {})
    .n("DynamoDBClient", "DeleteBackupCommand")
    .f(void 0, void 0)
    .ser(se_DeleteBackupCommand)
    .de(de_DeleteBackupCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DeleteItemCommand.js






class DeleteItemCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "DeleteItem", {})
    .n("DynamoDBClient", "DeleteItemCommand")
    .f(void 0, void 0)
    .ser(se_DeleteItemCommand)
    .de(de_DeleteItemCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DeleteResourcePolicyCommand.js






class DeleteResourcePolicyCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "DeleteResourcePolicy", {})
    .n("DynamoDBClient", "DeleteResourcePolicyCommand")
    .f(void 0, void 0)
    .ser(se_DeleteResourcePolicyCommand)
    .de(de_DeleteResourcePolicyCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DeleteTableCommand.js






class DeleteTableCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "DeleteTable", {})
    .n("DynamoDBClient", "DeleteTableCommand")
    .f(void 0, void 0)
    .ser(se_DeleteTableCommand)
    .de(de_DeleteTableCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeBackupCommand.js






class DescribeBackupCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "DescribeBackup", {})
    .n("DynamoDBClient", "DescribeBackupCommand")
    .f(void 0, void 0)
    .ser(se_DescribeBackupCommand)
    .de(de_DescribeBackupCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeContinuousBackupsCommand.js






class DescribeContinuousBackupsCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "DescribeContinuousBackups", {})
    .n("DynamoDBClient", "DescribeContinuousBackupsCommand")
    .f(void 0, void 0)
    .ser(se_DescribeContinuousBackupsCommand)
    .de(de_DescribeContinuousBackupsCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeContributorInsightsCommand.js






class DescribeContributorInsightsCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "DescribeContributorInsights", {})
    .n("DynamoDBClient", "DescribeContributorInsightsCommand")
    .f(void 0, void 0)
    .ser(se_DescribeContributorInsightsCommand)
    .de(de_DescribeContributorInsightsCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeExportCommand.js






class DescribeExportCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "DescribeExport", {})
    .n("DynamoDBClient", "DescribeExportCommand")
    .f(void 0, void 0)
    .ser(se_DescribeExportCommand)
    .de(de_DescribeExportCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeGlobalTableCommand.js






class DescribeGlobalTableCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "DescribeGlobalTable", {})
    .n("DynamoDBClient", "DescribeGlobalTableCommand")
    .f(void 0, void 0)
    .ser(se_DescribeGlobalTableCommand)
    .de(de_DescribeGlobalTableCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeGlobalTableSettingsCommand.js






class DescribeGlobalTableSettingsCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "DescribeGlobalTableSettings", {})
    .n("DynamoDBClient", "DescribeGlobalTableSettingsCommand")
    .f(void 0, void 0)
    .ser(se_DescribeGlobalTableSettingsCommand)
    .de(de_DescribeGlobalTableSettingsCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeImportCommand.js






class DescribeImportCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "DescribeImport", {})
    .n("DynamoDBClient", "DescribeImportCommand")
    .f(void 0, void 0)
    .ser(se_DescribeImportCommand)
    .de(de_DescribeImportCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeKinesisStreamingDestinationCommand.js






class DescribeKinesisStreamingDestinationCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "DescribeKinesisStreamingDestination", {})
    .n("DynamoDBClient", "DescribeKinesisStreamingDestinationCommand")
    .f(void 0, void 0)
    .ser(se_DescribeKinesisStreamingDestinationCommand)
    .de(de_DescribeKinesisStreamingDestinationCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeLimitsCommand.js






class DescribeLimitsCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "DescribeLimits", {})
    .n("DynamoDBClient", "DescribeLimitsCommand")
    .f(void 0, void 0)
    .ser(se_DescribeLimitsCommand)
    .de(de_DescribeLimitsCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeTableCommand.js






class DescribeTableCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "DescribeTable", {})
    .n("DynamoDBClient", "DescribeTableCommand")
    .f(void 0, void 0)
    .ser(se_DescribeTableCommand)
    .de(de_DescribeTableCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeTableReplicaAutoScalingCommand.js






class DescribeTableReplicaAutoScalingCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "DescribeTableReplicaAutoScaling", {})
    .n("DynamoDBClient", "DescribeTableReplicaAutoScalingCommand")
    .f(void 0, void 0)
    .ser(se_DescribeTableReplicaAutoScalingCommand)
    .de(de_DescribeTableReplicaAutoScalingCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DescribeTimeToLiveCommand.js






class DescribeTimeToLiveCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "DescribeTimeToLive", {})
    .n("DynamoDBClient", "DescribeTimeToLiveCommand")
    .f(void 0, void 0)
    .ser(se_DescribeTimeToLiveCommand)
    .de(de_DescribeTimeToLiveCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/DisableKinesisStreamingDestinationCommand.js






class DisableKinesisStreamingDestinationCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "DisableKinesisStreamingDestination", {})
    .n("DynamoDBClient", "DisableKinesisStreamingDestinationCommand")
    .f(void 0, void 0)
    .ser(se_DisableKinesisStreamingDestinationCommand)
    .de(de_DisableKinesisStreamingDestinationCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/EnableKinesisStreamingDestinationCommand.js






class EnableKinesisStreamingDestinationCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "EnableKinesisStreamingDestination", {})
    .n("DynamoDBClient", "EnableKinesisStreamingDestinationCommand")
    .f(void 0, void 0)
    .ser(se_EnableKinesisStreamingDestinationCommand)
    .de(de_EnableKinesisStreamingDestinationCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ExecuteStatementCommand.js






class ExecuteStatementCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "ExecuteStatement", {})
    .n("DynamoDBClient", "ExecuteStatementCommand")
    .f(void 0, void 0)
    .ser(se_ExecuteStatementCommand)
    .de(de_ExecuteStatementCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ExecuteTransactionCommand.js






class ExecuteTransactionCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "ExecuteTransaction", {})
    .n("DynamoDBClient", "ExecuteTransactionCommand")
    .f(void 0, void 0)
    .ser(se_ExecuteTransactionCommand)
    .de(de_ExecuteTransactionCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ExportTableToPointInTimeCommand.js






class ExportTableToPointInTimeCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "ExportTableToPointInTime", {})
    .n("DynamoDBClient", "ExportTableToPointInTimeCommand")
    .f(void 0, void 0)
    .ser(se_ExportTableToPointInTimeCommand)
    .de(de_ExportTableToPointInTimeCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/GetItemCommand.js






class GetItemCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "GetItem", {})
    .n("DynamoDBClient", "GetItemCommand")
    .f(void 0, void 0)
    .ser(se_GetItemCommand)
    .de(de_GetItemCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/GetResourcePolicyCommand.js






class GetResourcePolicyCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "GetResourcePolicy", {})
    .n("DynamoDBClient", "GetResourcePolicyCommand")
    .f(void 0, void 0)
    .ser(se_GetResourcePolicyCommand)
    .de(de_GetResourcePolicyCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ImportTableCommand.js






class ImportTableCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "ImportTable", {})
    .n("DynamoDBClient", "ImportTableCommand")
    .f(void 0, void 0)
    .ser(se_ImportTableCommand)
    .de(de_ImportTableCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ListBackupsCommand.js






class ListBackupsCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "ListBackups", {})
    .n("DynamoDBClient", "ListBackupsCommand")
    .f(void 0, void 0)
    .ser(se_ListBackupsCommand)
    .de(de_ListBackupsCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ListContributorInsightsCommand.js






class ListContributorInsightsCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "ListContributorInsights", {})
    .n("DynamoDBClient", "ListContributorInsightsCommand")
    .f(void 0, void 0)
    .ser(se_ListContributorInsightsCommand)
    .de(de_ListContributorInsightsCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ListExportsCommand.js






class ListExportsCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "ListExports", {})
    .n("DynamoDBClient", "ListExportsCommand")
    .f(void 0, void 0)
    .ser(se_ListExportsCommand)
    .de(de_ListExportsCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ListGlobalTablesCommand.js






class ListGlobalTablesCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "ListGlobalTables", {})
    .n("DynamoDBClient", "ListGlobalTablesCommand")
    .f(void 0, void 0)
    .ser(se_ListGlobalTablesCommand)
    .de(de_ListGlobalTablesCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ListImportsCommand.js






class ListImportsCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "ListImports", {})
    .n("DynamoDBClient", "ListImportsCommand")
    .f(void 0, void 0)
    .ser(se_ListImportsCommand)
    .de(de_ListImportsCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ListTablesCommand.js






class ListTablesCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "ListTables", {})
    .n("DynamoDBClient", "ListTablesCommand")
    .f(void 0, void 0)
    .ser(se_ListTablesCommand)
    .de(de_ListTablesCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ListTagsOfResourceCommand.js






class ListTagsOfResourceCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "ListTagsOfResource", {})
    .n("DynamoDBClient", "ListTagsOfResourceCommand")
    .f(void 0, void 0)
    .ser(se_ListTagsOfResourceCommand)
    .de(de_ListTagsOfResourceCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/PutItemCommand.js






class PutItemCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "PutItem", {})
    .n("DynamoDBClient", "PutItemCommand")
    .f(void 0, void 0)
    .ser(se_PutItemCommand)
    .de(de_PutItemCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/PutResourcePolicyCommand.js






class PutResourcePolicyCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "PutResourcePolicy", {})
    .n("DynamoDBClient", "PutResourcePolicyCommand")
    .f(void 0, void 0)
    .ser(se_PutResourcePolicyCommand)
    .de(de_PutResourcePolicyCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/QueryCommand.js






class QueryCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "Query", {})
    .n("DynamoDBClient", "QueryCommand")
    .f(void 0, void 0)
    .ser(se_QueryCommand)
    .de(de_QueryCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/RestoreTableFromBackupCommand.js






class RestoreTableFromBackupCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "RestoreTableFromBackup", {})
    .n("DynamoDBClient", "RestoreTableFromBackupCommand")
    .f(void 0, void 0)
    .ser(se_RestoreTableFromBackupCommand)
    .de(de_RestoreTableFromBackupCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/RestoreTableToPointInTimeCommand.js






class RestoreTableToPointInTimeCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "RestoreTableToPointInTime", {})
    .n("DynamoDBClient", "RestoreTableToPointInTimeCommand")
    .f(void 0, void 0)
    .ser(se_RestoreTableToPointInTimeCommand)
    .de(de_RestoreTableToPointInTimeCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/ScanCommand.js






class ScanCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "Scan", {})
    .n("DynamoDBClient", "ScanCommand")
    .f(void 0, void 0)
    .ser(se_ScanCommand)
    .de(de_ScanCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/TagResourceCommand.js






class TagResourceCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "TagResource", {})
    .n("DynamoDBClient", "TagResourceCommand")
    .f(void 0, void 0)
    .ser(se_TagResourceCommand)
    .de(de_TagResourceCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/TransactGetItemsCommand.js






class TransactGetItemsCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "TransactGetItems", {})
    .n("DynamoDBClient", "TransactGetItemsCommand")
    .f(void 0, void 0)
    .ser(se_TransactGetItemsCommand)
    .de(de_TransactGetItemsCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/TransactWriteItemsCommand.js






class TransactWriteItemsCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "TransactWriteItems", {})
    .n("DynamoDBClient", "TransactWriteItemsCommand")
    .f(void 0, void 0)
    .ser(se_TransactWriteItemsCommand)
    .de(de_TransactWriteItemsCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UntagResourceCommand.js






class UntagResourceCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "UntagResource", {})
    .n("DynamoDBClient", "UntagResourceCommand")
    .f(void 0, void 0)
    .ser(se_UntagResourceCommand)
    .de(de_UntagResourceCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateContinuousBackupsCommand.js






class UpdateContinuousBackupsCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "UpdateContinuousBackups", {})
    .n("DynamoDBClient", "UpdateContinuousBackupsCommand")
    .f(void 0, void 0)
    .ser(se_UpdateContinuousBackupsCommand)
    .de(de_UpdateContinuousBackupsCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateContributorInsightsCommand.js






class UpdateContributorInsightsCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "UpdateContributorInsights", {})
    .n("DynamoDBClient", "UpdateContributorInsightsCommand")
    .f(void 0, void 0)
    .ser(se_UpdateContributorInsightsCommand)
    .de(de_UpdateContributorInsightsCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateGlobalTableCommand.js






class UpdateGlobalTableCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "UpdateGlobalTable", {})
    .n("DynamoDBClient", "UpdateGlobalTableCommand")
    .f(void 0, void 0)
    .ser(se_UpdateGlobalTableCommand)
    .de(de_UpdateGlobalTableCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateGlobalTableSettingsCommand.js






class UpdateGlobalTableSettingsCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "UpdateGlobalTableSettings", {})
    .n("DynamoDBClient", "UpdateGlobalTableSettingsCommand")
    .f(void 0, void 0)
    .ser(se_UpdateGlobalTableSettingsCommand)
    .de(de_UpdateGlobalTableSettingsCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateItemCommand.js






class UpdateItemCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "UpdateItem", {})
    .n("DynamoDBClient", "UpdateItemCommand")
    .f(void 0, void 0)
    .ser(se_UpdateItemCommand)
    .de(de_UpdateItemCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateKinesisStreamingDestinationCommand.js






class UpdateKinesisStreamingDestinationCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "UpdateKinesisStreamingDestination", {})
    .n("DynamoDBClient", "UpdateKinesisStreamingDestinationCommand")
    .f(void 0, void 0)
    .ser(se_UpdateKinesisStreamingDestinationCommand)
    .de(de_UpdateKinesisStreamingDestinationCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateTableCommand.js






class UpdateTableCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "UpdateTable", {})
    .n("DynamoDBClient", "UpdateTableCommand")
    .f(void 0, void 0)
    .ser(se_UpdateTableCommand)
    .de(de_UpdateTableCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateTableReplicaAutoScalingCommand.js






class UpdateTableReplicaAutoScalingCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "UpdateTableReplicaAutoScaling", {})
    .n("DynamoDBClient", "UpdateTableReplicaAutoScalingCommand")
    .f(void 0, void 0)
    .ser(se_UpdateTableReplicaAutoScalingCommand)
    .de(de_UpdateTableReplicaAutoScalingCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/UpdateTimeToLiveCommand.js






class UpdateTimeToLiveCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,middleware_endpoint_dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("DynamoDB_20120810", "UpdateTimeToLive", {})
    .n("DynamoDBClient", "UpdateTimeToLiveCommand")
    .f(void 0, void 0)
    .ser(se_UpdateTimeToLiveCommand)
    .de(de_UpdateTimeToLiveCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/DynamoDB.js



























































const commands = {
    BatchExecuteStatementCommand: BatchExecuteStatementCommand,
    BatchGetItemCommand: BatchGetItemCommand,
    BatchWriteItemCommand: BatchWriteItemCommand,
    CreateBackupCommand: CreateBackupCommand,
    CreateGlobalTableCommand: CreateGlobalTableCommand,
    CreateTableCommand: CreateTableCommand,
    DeleteBackupCommand: DeleteBackupCommand,
    DeleteItemCommand: DeleteItemCommand,
    DeleteResourcePolicyCommand: DeleteResourcePolicyCommand,
    DeleteTableCommand: DeleteTableCommand,
    DescribeBackupCommand: DescribeBackupCommand,
    DescribeContinuousBackupsCommand: DescribeContinuousBackupsCommand,
    DescribeContributorInsightsCommand: DescribeContributorInsightsCommand,
    DescribeEndpointsCommand: DescribeEndpointsCommand,
    DescribeExportCommand: DescribeExportCommand,
    DescribeGlobalTableCommand: DescribeGlobalTableCommand,
    DescribeGlobalTableSettingsCommand: DescribeGlobalTableSettingsCommand,
    DescribeImportCommand: DescribeImportCommand,
    DescribeKinesisStreamingDestinationCommand: DescribeKinesisStreamingDestinationCommand,
    DescribeLimitsCommand: DescribeLimitsCommand,
    DescribeTableCommand: DescribeTableCommand,
    DescribeTableReplicaAutoScalingCommand: DescribeTableReplicaAutoScalingCommand,
    DescribeTimeToLiveCommand: DescribeTimeToLiveCommand,
    DisableKinesisStreamingDestinationCommand: DisableKinesisStreamingDestinationCommand,
    EnableKinesisStreamingDestinationCommand: EnableKinesisStreamingDestinationCommand,
    ExecuteStatementCommand: ExecuteStatementCommand,
    ExecuteTransactionCommand: ExecuteTransactionCommand,
    ExportTableToPointInTimeCommand: ExportTableToPointInTimeCommand,
    GetItemCommand: GetItemCommand,
    GetResourcePolicyCommand: GetResourcePolicyCommand,
    ImportTableCommand: ImportTableCommand,
    ListBackupsCommand: ListBackupsCommand,
    ListContributorInsightsCommand: ListContributorInsightsCommand,
    ListExportsCommand: ListExportsCommand,
    ListGlobalTablesCommand: ListGlobalTablesCommand,
    ListImportsCommand: ListImportsCommand,
    ListTablesCommand: ListTablesCommand,
    ListTagsOfResourceCommand: ListTagsOfResourceCommand,
    PutItemCommand: PutItemCommand,
    PutResourcePolicyCommand: PutResourcePolicyCommand,
    QueryCommand: QueryCommand,
    RestoreTableFromBackupCommand: RestoreTableFromBackupCommand,
    RestoreTableToPointInTimeCommand: RestoreTableToPointInTimeCommand,
    ScanCommand: ScanCommand,
    TagResourceCommand: TagResourceCommand,
    TransactGetItemsCommand: TransactGetItemsCommand,
    TransactWriteItemsCommand: TransactWriteItemsCommand,
    UntagResourceCommand: UntagResourceCommand,
    UpdateContinuousBackupsCommand: UpdateContinuousBackupsCommand,
    UpdateContributorInsightsCommand: UpdateContributorInsightsCommand,
    UpdateGlobalTableCommand: UpdateGlobalTableCommand,
    UpdateGlobalTableSettingsCommand: UpdateGlobalTableSettingsCommand,
    UpdateItemCommand: UpdateItemCommand,
    UpdateKinesisStreamingDestinationCommand: UpdateKinesisStreamingDestinationCommand,
    UpdateTableCommand: UpdateTableCommand,
    UpdateTableReplicaAutoScalingCommand: UpdateTableReplicaAutoScalingCommand,
    UpdateTimeToLiveCommand: UpdateTimeToLiveCommand,
};
class DynamoDB extends DynamoDBClient {
}
(0,smithy_client_dist_es/* createAggregatedClient */.J1)(commands, DynamoDB);

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/commands/index.js


























































;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/pagination/ListContributorInsightsPaginator.js



const paginateListContributorInsights = (0,core_dist_es/* createPaginator */.KU)(DynamoDBClient, ListContributorInsightsCommand, "NextToken", "NextToken", "MaxResults");

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/pagination/ListExportsPaginator.js



const paginateListExports = (0,core_dist_es/* createPaginator */.KU)(DynamoDBClient, ListExportsCommand, "NextToken", "NextToken", "MaxResults");

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/pagination/ListImportsPaginator.js



const paginateListImports = (0,core_dist_es/* createPaginator */.KU)(DynamoDBClient, ListImportsCommand, "NextToken", "NextToken", "PageSize");

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/pagination/ListTablesPaginator.js



const paginateListTables = (0,core_dist_es/* createPaginator */.KU)(DynamoDBClient, ListTablesCommand, "ExclusiveStartTableName", "LastEvaluatedTableName", "Limit");

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/pagination/QueryPaginator.js



const paginateQuery = (0,core_dist_es/* createPaginator */.KU)(DynamoDBClient, QueryCommand, "ExclusiveStartKey", "LastEvaluatedKey", "Limit");

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/pagination/ScanPaginator.js



const paginateScan = (0,core_dist_es/* createPaginator */.KU)(DynamoDBClient, ScanCommand, "ExclusiveStartKey", "LastEvaluatedKey", "Limit");

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/pagination/index.js








// EXTERNAL MODULE: ./node_modules/@smithy/util-waiter/dist-es/index.js + 5 modules
var util_waiter_dist_es = __webpack_require__(2948);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/waiters/waitForTableExists.js


const checkState = async (client, input) => {
    let reason;
    try {
        const result = await client.send(new DescribeTableCommand(input));
        reason = result;
        try {
            const returnComparator = () => {
                return result.Table.TableStatus;
            };
            if (returnComparator() === "ACTIVE") {
                return { state: util_waiter_dist_es/* WaiterState */.IX.SUCCESS, reason };
            }
        }
        catch (e) { }
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "ResourceNotFoundException") {
            return { state: util_waiter_dist_es/* WaiterState */.IX.RETRY, reason };
        }
    }
    return { state: util_waiter_dist_es/* WaiterState */.IX.RETRY, reason };
};
const waitForTableExists = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    return (0,util_waiter_dist_es/* createWaiter */.$C)({ ...serviceDefaults, ...params }, input, checkState);
};
const waitUntilTableExists = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    const result = await (0,util_waiter_dist_es/* createWaiter */.$C)({ ...serviceDefaults, ...params }, input, checkState);
    return (0,util_waiter_dist_es/* checkExceptions */.No)(result);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/waiters/waitForTableNotExists.js


const waitForTableNotExists_checkState = async (client, input) => {
    let reason;
    try {
        const result = await client.send(new DescribeTableCommand(input));
        reason = result;
    }
    catch (exception) {
        reason = exception;
        if (exception.name && exception.name == "ResourceNotFoundException") {
            return { state: util_waiter_dist_es/* WaiterState */.IX.SUCCESS, reason };
        }
    }
    return { state: util_waiter_dist_es/* WaiterState */.IX.RETRY, reason };
};
const waitForTableNotExists = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    return (0,util_waiter_dist_es/* createWaiter */.$C)({ ...serviceDefaults, ...params }, input, waitForTableNotExists_checkState);
};
const waitUntilTableNotExists = async (params, input) => {
    const serviceDefaults = { minDelay: 20, maxDelay: 120 };
    const result = await (0,util_waiter_dist_es/* createWaiter */.$C)({ ...serviceDefaults, ...params }, input, waitForTableNotExists_checkState);
    return (0,util_waiter_dist_es/* checkExceptions */.No)(result);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/waiters/index.js



;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/models/index.js


;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-dynamodb/dist-es/index.js









/***/ }),

/***/ 6800:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  cz: () => (/* binding */ defaultRoleAssumers_getDefaultRoleAssumer),
  I$: () => (/* binding */ defaultRoleAssumers_getDefaultRoleAssumerWithWebIdentity)
});

// UNUSED EXPORTS: decorateDefaultCredentialProvider

// EXTERNAL MODULE: ./node_modules/@smithy/middleware-endpoint/dist-es/index.js + 10 modules
var dist_es = __webpack_require__(9389);
// EXTERNAL MODULE: ./node_modules/@smithy/middleware-serde/dist-es/index.js + 3 modules
var middleware_serde_dist_es = __webpack_require__(1208);
// EXTERNAL MODULE: ./node_modules/@smithy/smithy-client/dist-es/index.js + 25 modules
var smithy_client_dist_es = __webpack_require__(678);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/endpoint/EndpointParameters.js
const resolveClientEndpointParameters = (options) => {
    return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        useGlobalEndpoint: options.useGlobalEndpoint ?? false,
        defaultSigningName: "sts",
    };
};
const commonParams = {
    UseGlobalEndpoint: { type: "builtInParams", name: "useGlobalEndpoint" },
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/models/STSServiceException.js


class STSServiceException extends smithy_client_dist_es/* ServiceException */.TJ {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, STSServiceException.prototype);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/models/models_0.js


class ExpiredTokenException extends STSServiceException {
    constructor(opts) {
        super({
            name: "ExpiredTokenException",
            $fault: "client",
            ...opts,
        });
        this.name = "ExpiredTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ExpiredTokenException.prototype);
    }
}
class MalformedPolicyDocumentException extends STSServiceException {
    constructor(opts) {
        super({
            name: "MalformedPolicyDocumentException",
            $fault: "client",
            ...opts,
        });
        this.name = "MalformedPolicyDocumentException";
        this.$fault = "client";
        Object.setPrototypeOf(this, MalformedPolicyDocumentException.prototype);
    }
}
class PackedPolicyTooLargeException extends STSServiceException {
    constructor(opts) {
        super({
            name: "PackedPolicyTooLargeException",
            $fault: "client",
            ...opts,
        });
        this.name = "PackedPolicyTooLargeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, PackedPolicyTooLargeException.prototype);
    }
}
class RegionDisabledException extends STSServiceException {
    constructor(opts) {
        super({
            name: "RegionDisabledException",
            $fault: "client",
            ...opts,
        });
        this.name = "RegionDisabledException";
        this.$fault = "client";
        Object.setPrototypeOf(this, RegionDisabledException.prototype);
    }
}
class IDPRejectedClaimException extends STSServiceException {
    constructor(opts) {
        super({
            name: "IDPRejectedClaimException",
            $fault: "client",
            ...opts,
        });
        this.name = "IDPRejectedClaimException";
        this.$fault = "client";
        Object.setPrototypeOf(this, IDPRejectedClaimException.prototype);
    }
}
class InvalidIdentityTokenException extends STSServiceException {
    constructor(opts) {
        super({
            name: "InvalidIdentityTokenException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidIdentityTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidIdentityTokenException.prototype);
    }
}
class IDPCommunicationErrorException extends STSServiceException {
    constructor(opts) {
        super({
            name: "IDPCommunicationErrorException",
            $fault: "client",
            ...opts,
        });
        this.name = "IDPCommunicationErrorException";
        this.$fault = "client";
        Object.setPrototypeOf(this, IDPCommunicationErrorException.prototype);
    }
}
class InvalidAuthorizationMessageException extends STSServiceException {
    constructor(opts) {
        super({
            name: "InvalidAuthorizationMessageException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidAuthorizationMessageException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidAuthorizationMessageException.prototype);
    }
}
const CredentialsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SecretAccessKey && { SecretAccessKey: smithy_client_dist_es/* SENSITIVE_STRING */.$H }),
});
const AssumeRoleResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }),
});
const AssumeRoleWithSAMLRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.SAMLAssertion && { SAMLAssertion: SENSITIVE_STRING }),
});
const AssumeRoleWithSAMLResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }),
});
const AssumeRoleWithWebIdentityRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.WebIdentityToken && { WebIdentityToken: smithy_client_dist_es/* SENSITIVE_STRING */.$H }),
});
const AssumeRoleWithWebIdentityResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }),
});
const GetFederationTokenResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }),
});
const GetSessionTokenResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.Credentials && { Credentials: CredentialsFilterSensitiveLog(obj.Credentials) }),
});

// EXTERNAL MODULE: ./node_modules/@aws-sdk/core/dist-es/protocols/xml/parseXmlBody.js
var parseXmlBody = __webpack_require__(2789);
// EXTERNAL MODULE: ./node_modules/@smithy/protocol-http/dist-es/index.js + 5 modules
var protocol_http_dist_es = __webpack_require__(5479);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/protocols/Aws_query.js





const se_AssumeRoleCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_AssumeRoleRequest(input, context),
        [_A]: _AR,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AssumeRoleWithSAMLCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_AssumeRoleWithSAMLRequest(input, context),
        [_A]: _ARWSAML,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_AssumeRoleWithWebIdentityCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_AssumeRoleWithWebIdentityRequest(input, context),
        [_A]: _ARWWI,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_DecodeAuthorizationMessageCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_DecodeAuthorizationMessageRequest(input, context),
        [_A]: _DAM,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetAccessKeyInfoCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetAccessKeyInfoRequest(input, context),
        [_A]: _GAKI,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetCallerIdentityCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetCallerIdentityRequest(input, context),
        [_A]: _GCI,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetFederationTokenCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetFederationTokenRequest(input, context),
        [_A]: _GFT,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const se_GetSessionTokenCommand = async (input, context) => {
    const headers = SHARED_HEADERS;
    let body;
    body = buildFormUrlencodedString({
        ...se_GetSessionTokenRequest(input, context),
        [_A]: _GST,
        [_V]: _,
    });
    return buildHttpRpcRequest(context, headers, "/", undefined, body);
};
const de_AssumeRoleCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseXmlBody/* parseXmlBody */.t_)(output.body, context);
    let contents = {};
    contents = de_AssumeRoleResponse(data.AssumeRoleResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_AssumeRoleWithSAMLCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_AssumeRoleWithSAMLResponse(data.AssumeRoleWithSAMLResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_AssumeRoleWithWebIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await (0,parseXmlBody/* parseXmlBody */.t_)(output.body, context);
    let contents = {};
    contents = de_AssumeRoleWithWebIdentityResponse(data.AssumeRoleWithWebIdentityResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_DecodeAuthorizationMessageCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_DecodeAuthorizationMessageResponse(data.DecodeAuthorizationMessageResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetAccessKeyInfoCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetAccessKeyInfoResponse(data.GetAccessKeyInfoResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetCallerIdentityCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetCallerIdentityResponse(data.GetCallerIdentityResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetFederationTokenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetFederationTokenResponse(data.GetFederationTokenResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_GetSessionTokenCommand = async (output, context) => {
    if (output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const data = await parseBody(output.body, context);
    let contents = {};
    contents = de_GetSessionTokenResponse(data.GetSessionTokenResult, context);
    const response = {
        $metadata: deserializeMetadata(output),
        ...contents,
    };
    return response;
};
const de_CommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await (0,parseXmlBody/* parseXmlErrorBody */.FI)(output.body, context),
    };
    const errorCode = loadQueryErrorCode(output, parsedOutput.body);
    switch (errorCode) {
        case "ExpiredTokenException":
        case "com.amazonaws.sts#ExpiredTokenException":
            throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
        case "MalformedPolicyDocument":
        case "com.amazonaws.sts#MalformedPolicyDocumentException":
            throw await de_MalformedPolicyDocumentExceptionRes(parsedOutput, context);
        case "PackedPolicyTooLarge":
        case "com.amazonaws.sts#PackedPolicyTooLargeException":
            throw await de_PackedPolicyTooLargeExceptionRes(parsedOutput, context);
        case "RegionDisabledException":
        case "com.amazonaws.sts#RegionDisabledException":
            throw await de_RegionDisabledExceptionRes(parsedOutput, context);
        case "IDPRejectedClaim":
        case "com.amazonaws.sts#IDPRejectedClaimException":
            throw await de_IDPRejectedClaimExceptionRes(parsedOutput, context);
        case "InvalidIdentityToken":
        case "com.amazonaws.sts#InvalidIdentityTokenException":
            throw await de_InvalidIdentityTokenExceptionRes(parsedOutput, context);
        case "IDPCommunicationError":
        case "com.amazonaws.sts#IDPCommunicationErrorException":
            throw await de_IDPCommunicationErrorExceptionRes(parsedOutput, context);
        case "InvalidAuthorizationMessageException":
        case "com.amazonaws.sts#InvalidAuthorizationMessageException":
            throw await de_InvalidAuthorizationMessageExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody: parsedBody.Error,
                errorCode,
            });
    }
};
const de_ExpiredTokenExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_ExpiredTokenException(body.Error, context);
    const exception = new ExpiredTokenException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_IDPCommunicationErrorExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_IDPCommunicationErrorException(body.Error, context);
    const exception = new IDPCommunicationErrorException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_IDPRejectedClaimExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_IDPRejectedClaimException(body.Error, context);
    const exception = new IDPRejectedClaimException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_InvalidAuthorizationMessageExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_InvalidAuthorizationMessageException(body.Error, context);
    const exception = new InvalidAuthorizationMessageException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_InvalidIdentityTokenExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_InvalidIdentityTokenException(body.Error, context);
    const exception = new InvalidIdentityTokenException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_MalformedPolicyDocumentExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_MalformedPolicyDocumentException(body.Error, context);
    const exception = new MalformedPolicyDocumentException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_PackedPolicyTooLargeExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_PackedPolicyTooLargeException(body.Error, context);
    const exception = new PackedPolicyTooLargeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const de_RegionDisabledExceptionRes = async (parsedOutput, context) => {
    const body = parsedOutput.body;
    const deserialized = de_RegionDisabledException(body.Error, context);
    const exception = new RegionDisabledException({
        $metadata: deserializeMetadata(parsedOutput),
        ...deserialized,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, body);
};
const se_AssumeRoleRequest = (input, context) => {
    const entries = {};
    if (input[_RA] != null) {
        entries[_RA] = input[_RA];
    }
    if (input[_RSN] != null) {
        entries[_RSN] = input[_RSN];
    }
    if (input[_PA] != null) {
        const memberEntries = se_policyDescriptorListType(input[_PA], context);
        if (input[_PA]?.length === 0) {
            entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_P] != null) {
        entries[_P] = input[_P];
    }
    if (input[_DS] != null) {
        entries[_DS] = input[_DS];
    }
    if (input[_T] != null) {
        const memberEntries = se_tagListType(input[_T], context);
        if (input[_T]?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_TTK] != null) {
        const memberEntries = se_tagKeyListType(input[_TTK], context);
        if (input[_TTK]?.length === 0) {
            entries.TransitiveTagKeys = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `TransitiveTagKeys.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_EI] != null) {
        entries[_EI] = input[_EI];
    }
    if (input[_SN] != null) {
        entries[_SN] = input[_SN];
    }
    if (input[_TC] != null) {
        entries[_TC] = input[_TC];
    }
    if (input[_SI] != null) {
        entries[_SI] = input[_SI];
    }
    if (input[_PC] != null) {
        const memberEntries = se_ProvidedContextsListType(input[_PC], context);
        if (input[_PC]?.length === 0) {
            entries.ProvidedContexts = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `ProvidedContexts.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_AssumeRoleWithSAMLRequest = (input, context) => {
    const entries = {};
    if (input[_RA] != null) {
        entries[_RA] = input[_RA];
    }
    if (input[_PAr] != null) {
        entries[_PAr] = input[_PAr];
    }
    if (input[_SAMLA] != null) {
        entries[_SAMLA] = input[_SAMLA];
    }
    if (input[_PA] != null) {
        const memberEntries = se_policyDescriptorListType(input[_PA], context);
        if (input[_PA]?.length === 0) {
            entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_P] != null) {
        entries[_P] = input[_P];
    }
    if (input[_DS] != null) {
        entries[_DS] = input[_DS];
    }
    return entries;
};
const se_AssumeRoleWithWebIdentityRequest = (input, context) => {
    const entries = {};
    if (input[_RA] != null) {
        entries[_RA] = input[_RA];
    }
    if (input[_RSN] != null) {
        entries[_RSN] = input[_RSN];
    }
    if (input[_WIT] != null) {
        entries[_WIT] = input[_WIT];
    }
    if (input[_PI] != null) {
        entries[_PI] = input[_PI];
    }
    if (input[_PA] != null) {
        const memberEntries = se_policyDescriptorListType(input[_PA], context);
        if (input[_PA]?.length === 0) {
            entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_P] != null) {
        entries[_P] = input[_P];
    }
    if (input[_DS] != null) {
        entries[_DS] = input[_DS];
    }
    return entries;
};
const se_DecodeAuthorizationMessageRequest = (input, context) => {
    const entries = {};
    if (input[_EM] != null) {
        entries[_EM] = input[_EM];
    }
    return entries;
};
const se_GetAccessKeyInfoRequest = (input, context) => {
    const entries = {};
    if (input[_AKI] != null) {
        entries[_AKI] = input[_AKI];
    }
    return entries;
};
const se_GetCallerIdentityRequest = (input, context) => {
    const entries = {};
    return entries;
};
const se_GetFederationTokenRequest = (input, context) => {
    const entries = {};
    if (input[_N] != null) {
        entries[_N] = input[_N];
    }
    if (input[_P] != null) {
        entries[_P] = input[_P];
    }
    if (input[_PA] != null) {
        const memberEntries = se_policyDescriptorListType(input[_PA], context);
        if (input[_PA]?.length === 0) {
            entries.PolicyArns = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `PolicyArns.${key}`;
            entries[loc] = value;
        });
    }
    if (input[_DS] != null) {
        entries[_DS] = input[_DS];
    }
    if (input[_T] != null) {
        const memberEntries = se_tagListType(input[_T], context);
        if (input[_T]?.length === 0) {
            entries.Tags = [];
        }
        Object.entries(memberEntries).forEach(([key, value]) => {
            const loc = `Tags.${key}`;
            entries[loc] = value;
        });
    }
    return entries;
};
const se_GetSessionTokenRequest = (input, context) => {
    const entries = {};
    if (input[_DS] != null) {
        entries[_DS] = input[_DS];
    }
    if (input[_SN] != null) {
        entries[_SN] = input[_SN];
    }
    if (input[_TC] != null) {
        entries[_TC] = input[_TC];
    }
    return entries;
};
const se_policyDescriptorListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = se_PolicyDescriptorType(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const se_PolicyDescriptorType = (input, context) => {
    const entries = {};
    if (input[_a] != null) {
        entries[_a] = input[_a];
    }
    return entries;
};
const se_ProvidedContext = (input, context) => {
    const entries = {};
    if (input[_PAro] != null) {
        entries[_PAro] = input[_PAro];
    }
    if (input[_CA] != null) {
        entries[_CA] = input[_CA];
    }
    return entries;
};
const se_ProvidedContextsListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = se_ProvidedContext(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const se_Tag = (input, context) => {
    const entries = {};
    if (input[_K] != null) {
        entries[_K] = input[_K];
    }
    if (input[_Va] != null) {
        entries[_Va] = input[_Va];
    }
    return entries;
};
const se_tagKeyListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        entries[`member.${counter}`] = entry;
        counter++;
    }
    return entries;
};
const se_tagListType = (input, context) => {
    const entries = {};
    let counter = 1;
    for (const entry of input) {
        if (entry === null) {
            continue;
        }
        const memberEntries = se_Tag(entry, context);
        Object.entries(memberEntries).forEach(([key, value]) => {
            entries[`member.${counter}.${key}`] = value;
        });
        counter++;
    }
    return entries;
};
const de_AssumedRoleUser = (output, context) => {
    const contents = {};
    if (output[_ARI] != null) {
        contents[_ARI] = (0,smithy_client_dist_es/* expectString */.lK)(output[_ARI]);
    }
    if (output[_Ar] != null) {
        contents[_Ar] = (0,smithy_client_dist_es/* expectString */.lK)(output[_Ar]);
    }
    return contents;
};
const de_AssumeRoleResponse = (output, context) => {
    const contents = {};
    if (output[_C] != null) {
        contents[_C] = de_Credentials(output[_C], context);
    }
    if (output[_ARU] != null) {
        contents[_ARU] = de_AssumedRoleUser(output[_ARU], context);
    }
    if (output[_PPS] != null) {
        contents[_PPS] = (0,smithy_client_dist_es/* strictParseInt32 */.xW)(output[_PPS]);
    }
    if (output[_SI] != null) {
        contents[_SI] = (0,smithy_client_dist_es/* expectString */.lK)(output[_SI]);
    }
    return contents;
};
const de_AssumeRoleWithSAMLResponse = (output, context) => {
    const contents = {};
    if (output[_C] != null) {
        contents[_C] = de_Credentials(output[_C], context);
    }
    if (output[_ARU] != null) {
        contents[_ARU] = de_AssumedRoleUser(output[_ARU], context);
    }
    if (output[_PPS] != null) {
        contents[_PPS] = __strictParseInt32(output[_PPS]);
    }
    if (output[_S] != null) {
        contents[_S] = __expectString(output[_S]);
    }
    if (output[_ST] != null) {
        contents[_ST] = __expectString(output[_ST]);
    }
    if (output[_I] != null) {
        contents[_I] = __expectString(output[_I]);
    }
    if (output[_Au] != null) {
        contents[_Au] = __expectString(output[_Au]);
    }
    if (output[_NQ] != null) {
        contents[_NQ] = __expectString(output[_NQ]);
    }
    if (output[_SI] != null) {
        contents[_SI] = __expectString(output[_SI]);
    }
    return contents;
};
const de_AssumeRoleWithWebIdentityResponse = (output, context) => {
    const contents = {};
    if (output[_C] != null) {
        contents[_C] = de_Credentials(output[_C], context);
    }
    if (output[_SFWIT] != null) {
        contents[_SFWIT] = (0,smithy_client_dist_es/* expectString */.lK)(output[_SFWIT]);
    }
    if (output[_ARU] != null) {
        contents[_ARU] = de_AssumedRoleUser(output[_ARU], context);
    }
    if (output[_PPS] != null) {
        contents[_PPS] = (0,smithy_client_dist_es/* strictParseInt32 */.xW)(output[_PPS]);
    }
    if (output[_Pr] != null) {
        contents[_Pr] = (0,smithy_client_dist_es/* expectString */.lK)(output[_Pr]);
    }
    if (output[_Au] != null) {
        contents[_Au] = (0,smithy_client_dist_es/* expectString */.lK)(output[_Au]);
    }
    if (output[_SI] != null) {
        contents[_SI] = (0,smithy_client_dist_es/* expectString */.lK)(output[_SI]);
    }
    return contents;
};
const de_Credentials = (output, context) => {
    const contents = {};
    if (output[_AKI] != null) {
        contents[_AKI] = (0,smithy_client_dist_es/* expectString */.lK)(output[_AKI]);
    }
    if (output[_SAK] != null) {
        contents[_SAK] = (0,smithy_client_dist_es/* expectString */.lK)(output[_SAK]);
    }
    if (output[_STe] != null) {
        contents[_STe] = (0,smithy_client_dist_es/* expectString */.lK)(output[_STe]);
    }
    if (output[_E] != null) {
        contents[_E] = (0,smithy_client_dist_es/* expectNonNull */.Y0)((0,smithy_client_dist_es/* parseRfc3339DateTimeWithOffset */.t_)(output[_E]));
    }
    return contents;
};
const de_DecodeAuthorizationMessageResponse = (output, context) => {
    const contents = {};
    if (output[_DM] != null) {
        contents[_DM] = __expectString(output[_DM]);
    }
    return contents;
};
const de_ExpiredTokenException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = (0,smithy_client_dist_es/* expectString */.lK)(output[_m]);
    }
    return contents;
};
const de_FederatedUser = (output, context) => {
    const contents = {};
    if (output[_FUI] != null) {
        contents[_FUI] = __expectString(output[_FUI]);
    }
    if (output[_Ar] != null) {
        contents[_Ar] = __expectString(output[_Ar]);
    }
    return contents;
};
const de_GetAccessKeyInfoResponse = (output, context) => {
    const contents = {};
    if (output[_Ac] != null) {
        contents[_Ac] = __expectString(output[_Ac]);
    }
    return contents;
};
const de_GetCallerIdentityResponse = (output, context) => {
    const contents = {};
    if (output[_UI] != null) {
        contents[_UI] = __expectString(output[_UI]);
    }
    if (output[_Ac] != null) {
        contents[_Ac] = __expectString(output[_Ac]);
    }
    if (output[_Ar] != null) {
        contents[_Ar] = __expectString(output[_Ar]);
    }
    return contents;
};
const de_GetFederationTokenResponse = (output, context) => {
    const contents = {};
    if (output[_C] != null) {
        contents[_C] = de_Credentials(output[_C], context);
    }
    if (output[_FU] != null) {
        contents[_FU] = de_FederatedUser(output[_FU], context);
    }
    if (output[_PPS] != null) {
        contents[_PPS] = __strictParseInt32(output[_PPS]);
    }
    return contents;
};
const de_GetSessionTokenResponse = (output, context) => {
    const contents = {};
    if (output[_C] != null) {
        contents[_C] = de_Credentials(output[_C], context);
    }
    return contents;
};
const de_IDPCommunicationErrorException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = (0,smithy_client_dist_es/* expectString */.lK)(output[_m]);
    }
    return contents;
};
const de_IDPRejectedClaimException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = (0,smithy_client_dist_es/* expectString */.lK)(output[_m]);
    }
    return contents;
};
const de_InvalidAuthorizationMessageException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = (0,smithy_client_dist_es/* expectString */.lK)(output[_m]);
    }
    return contents;
};
const de_InvalidIdentityTokenException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = (0,smithy_client_dist_es/* expectString */.lK)(output[_m]);
    }
    return contents;
};
const de_MalformedPolicyDocumentException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = (0,smithy_client_dist_es/* expectString */.lK)(output[_m]);
    }
    return contents;
};
const de_PackedPolicyTooLargeException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = (0,smithy_client_dist_es/* expectString */.lK)(output[_m]);
    }
    return contents;
};
const de_RegionDisabledException = (output, context) => {
    const contents = {};
    if (output[_m] != null) {
        contents[_m] = (0,smithy_client_dist_es/* expectString */.lK)(output[_m]);
    }
    return contents;
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const throwDefaultError = (0,smithy_client_dist_es/* withBaseException */.jr)(STSServiceException);
const buildHttpRpcRequest = async (context, headers, path, resolvedHostname, body) => {
    const { hostname, protocol = "https", port, path: basePath } = await context.endpoint();
    const contents = {
        protocol,
        hostname,
        port,
        method: "POST",
        path: basePath.endsWith("/") ? basePath.slice(0, -1) + path : basePath + path,
        headers,
    };
    if (resolvedHostname !== undefined) {
        contents.hostname = resolvedHostname;
    }
    if (body !== undefined) {
        contents.body = body;
    }
    return new protocol_http_dist_es/* HttpRequest */.Kd(contents);
};
const SHARED_HEADERS = {
    "content-type": "application/x-www-form-urlencoded",
};
const _ = "2011-06-15";
const _A = "Action";
const _AKI = "AccessKeyId";
const _AR = "AssumeRole";
const _ARI = "AssumedRoleId";
const _ARU = "AssumedRoleUser";
const _ARWSAML = "AssumeRoleWithSAML";
const _ARWWI = "AssumeRoleWithWebIdentity";
const _Ac = "Account";
const _Ar = "Arn";
const _Au = "Audience";
const _C = "Credentials";
const _CA = "ContextAssertion";
const _DAM = "DecodeAuthorizationMessage";
const _DM = "DecodedMessage";
const _DS = "DurationSeconds";
const _E = "Expiration";
const _EI = "ExternalId";
const _EM = "EncodedMessage";
const _FU = "FederatedUser";
const _FUI = "FederatedUserId";
const _GAKI = "GetAccessKeyInfo";
const _GCI = "GetCallerIdentity";
const _GFT = "GetFederationToken";
const _GST = "GetSessionToken";
const _I = "Issuer";
const _K = "Key";
const _N = "Name";
const _NQ = "NameQualifier";
const _P = "Policy";
const _PA = "PolicyArns";
const _PAr = "PrincipalArn";
const _PAro = "ProviderArn";
const _PC = "ProvidedContexts";
const _PI = "ProviderId";
const _PPS = "PackedPolicySize";
const _Pr = "Provider";
const _RA = "RoleArn";
const _RSN = "RoleSessionName";
const _S = "Subject";
const _SAK = "SecretAccessKey";
const _SAMLA = "SAMLAssertion";
const _SFWIT = "SubjectFromWebIdentityToken";
const _SI = "SourceIdentity";
const _SN = "SerialNumber";
const _ST = "SubjectType";
const _STe = "SessionToken";
const _T = "Tags";
const _TC = "TokenCode";
const _TTK = "TransitiveTagKeys";
const _UI = "UserId";
const _V = "Version";
const _Va = "Value";
const _WIT = "WebIdentityToken";
const _a = "arn";
const _m = "message";
const buildFormUrlencodedString = (formEntries) => Object.entries(formEntries)
    .map(([key, value]) => (0,smithy_client_dist_es/* extendedEncodeURIComponent */.$6)(key) + "=" + (0,smithy_client_dist_es/* extendedEncodeURIComponent */.$6)(value))
    .join("&");
const loadQueryErrorCode = (output, data) => {
    if (data.Error?.Code !== undefined) {
        return data.Error.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/commands/AssumeRoleCommand.js







class AssumeRoleCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSSecurityTokenServiceV20110615", "AssumeRole", {})
    .n("STSClient", "AssumeRoleCommand")
    .f(void 0, AssumeRoleResponseFilterSensitiveLog)
    .ser(se_AssumeRoleCommand)
    .de(de_AssumeRoleCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/commands/AssumeRoleWithWebIdentityCommand.js







class AssumeRoleWithWebIdentityCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSSecurityTokenServiceV20110615", "AssumeRoleWithWebIdentity", {})
    .n("STSClient", "AssumeRoleWithWebIdentityCommand")
    .f(AssumeRoleWithWebIdentityRequestFilterSensitiveLog, AssumeRoleWithWebIdentityResponseFilterSensitiveLog)
    .ser(se_AssumeRoleWithWebIdentityCommand)
    .de(de_AssumeRoleWithWebIdentityCommand)
    .build() {
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/defaultStsRoleAssumers.js


const ASSUME_ROLE_DEFAULT_REGION = "us-east-1";
const resolveRegion = async (_region, _parentRegion, credentialProviderLogger) => {
    const region = typeof _region === "function" ? await _region() : _region;
    const parentRegion = typeof _parentRegion === "function" ? await _parentRegion() : _parentRegion;
    credentialProviderLogger?.debug?.("@aws-sdk/client-sts::resolveRegion", "accepting first of:", `${region} (provider)`, `${parentRegion} (parent client)`, `${ASSUME_ROLE_DEFAULT_REGION} (STS default)`);
    return region ?? parentRegion ?? ASSUME_ROLE_DEFAULT_REGION;
};
const getDefaultRoleAssumer = (stsOptions, stsClientCtor) => {
    let stsClient;
    let closureSourceCreds;
    return async (sourceCreds, params) => {
        closureSourceCreds = sourceCreds;
        if (!stsClient) {
            const { logger = stsOptions?.parentClientConfig?.logger, region, requestHandler = stsOptions?.parentClientConfig?.requestHandler, credentialProviderLogger, } = stsOptions;
            const resolvedRegion = await resolveRegion(region, stsOptions?.parentClientConfig?.region, credentialProviderLogger);
            stsClient = new stsClientCtor({
                credentialDefaultProvider: () => async () => closureSourceCreds,
                region: resolvedRegion,
                requestHandler: requestHandler,
                logger: logger,
            });
        }
        const { Credentials } = await stsClient.send(new AssumeRoleCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
            throw new Error(`Invalid response from STS.assumeRole call with role ${params.RoleArn}`);
        }
        return {
            accessKeyId: Credentials.AccessKeyId,
            secretAccessKey: Credentials.SecretAccessKey,
            sessionToken: Credentials.SessionToken,
            expiration: Credentials.Expiration,
            credentialScope: Credentials.CredentialScope,
        };
    };
};
const getDefaultRoleAssumerWithWebIdentity = (stsOptions, stsClientCtor) => {
    let stsClient;
    return async (params) => {
        if (!stsClient) {
            const { logger = stsOptions?.parentClientConfig?.logger, region, requestHandler = stsOptions?.parentClientConfig?.requestHandler, credentialProviderLogger, } = stsOptions;
            const resolvedRegion = await resolveRegion(region, stsOptions?.parentClientConfig?.region, credentialProviderLogger);
            stsClient = new stsClientCtor({
                region: resolvedRegion,
                requestHandler: requestHandler,
                logger: logger,
            });
        }
        const { Credentials } = await stsClient.send(new AssumeRoleWithWebIdentityCommand(params));
        if (!Credentials || !Credentials.AccessKeyId || !Credentials.SecretAccessKey) {
            throw new Error(`Invalid response from STS.assumeRoleWithWebIdentity call with role ${params.RoleArn}`);
        }
        return {
            accessKeyId: Credentials.AccessKeyId,
            secretAccessKey: Credentials.SecretAccessKey,
            sessionToken: Credentials.SessionToken,
            expiration: Credentials.Expiration,
            credentialScope: Credentials.CredentialScope,
        };
    };
};
const decorateDefaultCredentialProvider = (provider) => (input) => provider({
    roleAssumer: getDefaultRoleAssumer(input, input.stsClientCtor),
    roleAssumerWithWebIdentity: getDefaultRoleAssumerWithWebIdentity(input, input.stsClientCtor),
    ...input,
});

// EXTERNAL MODULE: ./node_modules/@aws-sdk/middleware-host-header/dist-es/index.js
var middleware_host_header_dist_es = __webpack_require__(1095);
// EXTERNAL MODULE: ./node_modules/@aws-sdk/middleware-logger/dist-es/index.js + 1 modules
var middleware_logger_dist_es = __webpack_require__(9359);
// EXTERNAL MODULE: ./node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js
var middleware_recursion_detection_dist_es = __webpack_require__(8377);
// EXTERNAL MODULE: ./node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js + 3 modules
var middleware_user_agent_dist_es = __webpack_require__(499);
// EXTERNAL MODULE: ./node_modules/@smithy/config-resolver/dist-es/index.js + 10 modules
var config_resolver_dist_es = __webpack_require__(7122);
// EXTERNAL MODULE: ./node_modules/@smithy/core/dist-es/index.js + 17 modules
var core_dist_es = __webpack_require__(2972);
// EXTERNAL MODULE: ./node_modules/@smithy/middleware-content-length/dist-es/index.js
var middleware_content_length_dist_es = __webpack_require__(649);
// EXTERNAL MODULE: ./node_modules/@smithy/middleware-retry/dist-es/index.js + 10 modules
var middleware_retry_dist_es = __webpack_require__(3594);
// EXTERNAL MODULE: ./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js
var resolveAwsSdkSigV4Config = __webpack_require__(4685);
// EXTERNAL MODULE: ./node_modules/@smithy/util-middleware/dist-es/index.js + 2 modules
var util_middleware_dist_es = __webpack_require__(7135);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/auth/httpAuthSchemeProvider.js



const defaultSTSHttpAuthSchemeParametersProvider = async (config, context, input) => {
    return {
        operation: (0,util_middleware_dist_es/* getSmithyContext */.u)(context).operation,
        region: (await (0,util_middleware_dist_es/* normalizeProvider */.t)(config.region)()) ||
            (() => {
                throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
            })(),
    };
};
function createAwsAuthSigv4HttpAuthOption(authParameters) {
    return {
        schemeId: "aws.auth#sigv4",
        signingProperties: {
            name: "sts",
            region: authParameters.region,
        },
        propertiesExtractor: (config, context) => ({
            signingProperties: {
                config,
                context,
            },
        }),
    };
}
function createSmithyApiNoAuthHttpAuthOption(authParameters) {
    return {
        schemeId: "smithy.api#noAuth",
    };
}
const defaultSTSHttpAuthSchemeProvider = (authParameters) => {
    const options = [];
    switch (authParameters.operation) {
        case "AssumeRoleWithSAML": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "AssumeRoleWithWebIdentity": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        default: {
            options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
        }
    }
    return options;
};
const resolveStsAuthConfig = (input) => ({
    ...input,
    stsClientCtor: STSClient,
});
const resolveHttpAuthSchemeConfig = (config) => {
    const config_0 = resolveStsAuthConfig(config);
    const config_1 = (0,resolveAwsSdkSigV4Config/* resolveAwsSdkSigV4Config */.h)(config_0);
    return {
        ...config_1,
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/package.json
const package_namespaceObject = {"rE":"3.549.0"};
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/credentialDefaultProvider.js
const defaultProvider = ((input) => {
    return () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 8257)).then(({ defaultProvider }) => defaultProvider(input)());
});

// EXTERNAL MODULE: ./node_modules/@aws-sdk/core/dist-es/client/emitWarningIfUnsupportedVersion.js
var emitWarningIfUnsupportedVersion = __webpack_require__(2458);
// EXTERNAL MODULE: ./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js + 4 modules
var AwsSdkSigV4Signer = __webpack_require__(1228);
// EXTERNAL MODULE: ./node_modules/@aws-sdk/util-user-agent-node/dist-es/index.js + 3 modules
var util_user_agent_node_dist_es = __webpack_require__(3058);
// EXTERNAL MODULE: ./node_modules/@smithy/hash-node/dist-es/index.js
var hash_node_dist_es = __webpack_require__(1701);
// EXTERNAL MODULE: ./node_modules/@smithy/node-config-provider/dist-es/index.js + 4 modules
var node_config_provider_dist_es = __webpack_require__(1881);
// EXTERNAL MODULE: ./node_modules/@smithy/node-http-handler/dist-es/index.js + 13 modules
var node_http_handler_dist_es = __webpack_require__(4616);
// EXTERNAL MODULE: ./node_modules/@smithy/util-body-length-node/dist-es/index.js + 1 modules
var util_body_length_node_dist_es = __webpack_require__(7809);
// EXTERNAL MODULE: ./node_modules/@smithy/util-retry/dist-es/index.js + 8 modules
var util_retry_dist_es = __webpack_require__(3323);
// EXTERNAL MODULE: ./node_modules/@smithy/url-parser/dist-es/index.js + 1 modules
var url_parser_dist_es = __webpack_require__(2641);
// EXTERNAL MODULE: ./node_modules/@smithy/util-base64/dist-es/index.js + 2 modules
var util_base64_dist_es = __webpack_require__(4572);
// EXTERNAL MODULE: ./node_modules/@smithy/util-utf8/dist-es/index.js + 3 modules
var util_utf8_dist_es = __webpack_require__(3197);
// EXTERNAL MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/index.js + 9 modules
var util_endpoints_dist_es = __webpack_require__(6652);
// EXTERNAL MODULE: ./node_modules/@smithy/util-endpoints/dist-es/index.js + 34 modules
var _smithy_util_endpoints_dist_es = __webpack_require__(3875);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/endpoint/ruleset.js
const F = "required", G = "type", H = "fn", I = "argv", J = "ref";
const a = false, b = true, c = "booleanEquals", d = "stringEquals", e = "sigv4", f = "sts", g = "us-east-1", h = "endpoint", i = "https://sts.{Region}.{PartitionResult#dnsSuffix}", j = "tree", k = "error", l = "getAttr", m = { [F]: false, [G]: "String" }, n = { [F]: true, "default": false, [G]: "Boolean" }, o = { [J]: "Endpoint" }, p = { [H]: "isSet", [I]: [{ [J]: "Region" }] }, q = { [J]: "Region" }, r = { [H]: "aws.partition", [I]: [q], "assign": "PartitionResult" }, s = { [J]: "UseFIPS" }, t = { [J]: "UseDualStack" }, u = { "url": "https://sts.amazonaws.com", "properties": { "authSchemes": [{ "name": e, "signingName": f, "signingRegion": g }] }, "headers": {} }, v = {}, w = { "conditions": [{ [H]: d, [I]: [q, "aws-global"] }], [h]: u, [G]: h }, x = { [H]: c, [I]: [s, true] }, y = { [H]: c, [I]: [t, true] }, z = { [H]: l, [I]: [{ [J]: "PartitionResult" }, "supportsFIPS"] }, A = { [J]: "PartitionResult" }, B = { [H]: c, [I]: [true, { [H]: l, [I]: [A, "supportsDualStack"] }] }, C = [{ [H]: "isSet", [I]: [o] }], D = [x], E = [y];
const _data = { version: "1.0", parameters: { Region: m, UseDualStack: n, UseFIPS: n, Endpoint: m, UseGlobalEndpoint: n }, rules: [{ conditions: [{ [H]: c, [I]: [{ [J]: "UseGlobalEndpoint" }, b] }, { [H]: "not", [I]: C }, p, r, { [H]: c, [I]: [s, a] }, { [H]: c, [I]: [t, a] }], rules: [{ conditions: [{ [H]: d, [I]: [q, "ap-northeast-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "ap-south-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "ap-southeast-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "ap-southeast-2"] }], endpoint: u, [G]: h }, w, { conditions: [{ [H]: d, [I]: [q, "ca-central-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "eu-central-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "eu-north-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "eu-west-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "eu-west-2"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "eu-west-3"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "sa-east-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, g] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "us-east-2"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "us-west-1"] }], endpoint: u, [G]: h }, { conditions: [{ [H]: d, [I]: [q, "us-west-2"] }], endpoint: u, [G]: h }, { endpoint: { url: i, properties: { authSchemes: [{ name: e, signingName: f, signingRegion: "{Region}" }] }, headers: v }, [G]: h }], [G]: j }, { conditions: C, rules: [{ conditions: D, error: "Invalid Configuration: FIPS and custom endpoint are not supported", [G]: k }, { conditions: E, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", [G]: k }, { endpoint: { url: o, properties: v, headers: v }, [G]: h }], [G]: j }, { conditions: [p], rules: [{ conditions: [r], rules: [{ conditions: [x, y], rules: [{ conditions: [{ [H]: c, [I]: [b, z] }, B], rules: [{ endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: v, headers: v }, [G]: h }], [G]: j }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", [G]: k }], [G]: j }, { conditions: D, rules: [{ conditions: [{ [H]: c, [I]: [z, b] }], rules: [{ conditions: [{ [H]: d, [I]: [{ [H]: l, [I]: [A, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://sts.{Region}.amazonaws.com", properties: v, headers: v }, [G]: h }, { endpoint: { url: "https://sts-fips.{Region}.{PartitionResult#dnsSuffix}", properties: v, headers: v }, [G]: h }], [G]: j }, { error: "FIPS is enabled but this partition does not support FIPS", [G]: k }], [G]: j }, { conditions: E, rules: [{ conditions: [B], rules: [{ endpoint: { url: "https://sts.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: v, headers: v }, [G]: h }], [G]: j }, { error: "DualStack is enabled but this partition does not support DualStack", [G]: k }], [G]: j }, w, { endpoint: { url: i, properties: v, headers: v }, [G]: h }], [G]: j }], [G]: j }, { error: "Invalid Configuration: Missing Region", [G]: k }] };
const ruleSet = _data;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/endpoint/endpointResolver.js



const defaultEndpointResolver = (endpointParams, context = {}) => {
    return (0,_smithy_util_endpoints_dist_es/* resolveEndpoint */.sO)(ruleSet, {
        endpointParams: endpointParams,
        logger: context.logger,
    });
};
_smithy_util_endpoints_dist_es/* customEndpointFunctions */.mw.aws = util_endpoints_dist_es/* awsEndpointFunctions */.UF;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/runtimeConfig.shared.js








const getRuntimeConfig = (config) => {
    return {
        apiVersion: "2011-06-15",
        base64Decoder: config?.base64Decoder ?? util_base64_dist_es/* fromBase64 */.E,
        base64Encoder: config?.base64Encoder ?? util_base64_dist_es/* toBase64 */.n,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultSTSHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
            {
                schemeId: "aws.auth#sigv4",
                identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
                signer: new AwsSdkSigV4Signer/* AwsSdkSigV4Signer */.f(),
            },
            {
                schemeId: "smithy.api#noAuth",
                identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                signer: new core_dist_es/* NoAuthSigner */.mR(),
            },
        ],
        logger: config?.logger ?? new smithy_client_dist_es/* NoOpLogger */.N4(),
        serviceId: config?.serviceId ?? "STS",
        urlParser: config?.urlParser ?? url_parser_dist_es/* parseUrl */.D,
        utf8Decoder: config?.utf8Decoder ?? util_utf8_dist_es/* fromUtf8 */.ar,
        utf8Encoder: config?.utf8Encoder ?? util_utf8_dist_es/* toUtf8 */.Pq,
    };
};

// EXTERNAL MODULE: ./node_modules/@smithy/util-defaults-mode-node/dist-es/index.js + 3 modules
var util_defaults_mode_node_dist_es = __webpack_require__(4321);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/runtimeConfig.js
















const runtimeConfig_getRuntimeConfig = (config) => {
    (0,smithy_client_dist_es/* emitWarningIfUnsupportedVersion */.I9)(process.version);
    const defaultsMode = (0,util_defaults_mode_node_dist_es/* resolveDefaultsModeConfig */.I)(config);
    const defaultConfigProvider = () => defaultsMode().then(smithy_client_dist_es/* loadConfigsForDefaultMode */.lT);
    const clientSharedValues = getRuntimeConfig(config);
    (0,emitWarningIfUnsupportedVersion/* emitWarningIfUnsupportedVersion */.I)(process.version);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? util_body_length_node_dist_es/* calculateBodyLength */.n,
        credentialDefaultProvider: config?.credentialDefaultProvider ?? defaultProvider,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ??
            (0,util_user_agent_node_dist_es/* defaultUserAgent */.mJ)({ serviceId: clientSharedValues.serviceId, clientVersion: package_namespaceObject.rE }),
        httpAuthSchemes: config?.httpAuthSchemes ?? [
            {
                schemeId: "aws.auth#sigv4",
                identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4") ||
                    (async (idProps) => await defaultProvider(idProps?.__config || {})()),
                signer: new AwsSdkSigV4Signer/* AwsSdkSigV4Signer */.f(),
            },
            {
                schemeId: "smithy.api#noAuth",
                identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                signer: new core_dist_es/* NoAuthSigner */.mR(),
            },
        ],
        maxAttempts: config?.maxAttempts ?? (0,node_config_provider_dist_es/* loadConfig */.Z)(middleware_retry_dist_es/* NODE_MAX_ATTEMPT_CONFIG_OPTIONS */.qs),
        region: config?.region ?? (0,node_config_provider_dist_es/* loadConfig */.Z)(config_resolver_dist_es/* NODE_REGION_CONFIG_OPTIONS */.GG, config_resolver_dist_es/* NODE_REGION_CONFIG_FILE_OPTIONS */.zH),
        requestHandler: node_http_handler_dist_es/* NodeHttpHandler */.$c.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ??
            (0,node_config_provider_dist_es/* loadConfig */.Z)({
                ...middleware_retry_dist_es/* NODE_RETRY_MODE_CONFIG_OPTIONS */.kN,
                default: async () => (await defaultConfigProvider()).retryMode || util_retry_dist_es/* DEFAULT_RETRY_MODE */.L0,
            }),
        sha256: config?.sha256 ?? hash_node_dist_es/* Hash */.V.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? node_http_handler_dist_es/* streamCollector */.kv,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (0,node_config_provider_dist_es/* loadConfig */.Z)(config_resolver_dist_es/* NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS */.e$),
        useFipsEndpoint: config?.useFipsEndpoint ?? (0,node_config_provider_dist_es/* loadConfig */.Z)(config_resolver_dist_es/* NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS */.Ko),
    };
};

// EXTERNAL MODULE: ./node_modules/@aws-sdk/region-config-resolver/dist-es/index.js + 3 modules
var region_config_resolver_dist_es = __webpack_require__(4547);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/auth/httpAuthExtensionConfiguration.js
const getHttpAuthExtensionConfiguration = (runtimeConfig) => {
    const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
    let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
    let _credentials = runtimeConfig.credentials;
    return {
        setHttpAuthScheme(httpAuthScheme) {
            const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
            if (index === -1) {
                _httpAuthSchemes.push(httpAuthScheme);
            }
            else {
                _httpAuthSchemes.splice(index, 1, httpAuthScheme);
            }
        },
        httpAuthSchemes() {
            return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
            _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
            return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
            _credentials = credentials;
        },
        credentials() {
            return _credentials;
        },
    };
};
const resolveHttpAuthRuntimeConfig = (config) => {
    return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials(),
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/runtimeExtensions.js




const asPartial = (t) => t;
const resolveRuntimeExtensions = (runtimeConfig, extensions) => {
    const extensionConfiguration = {
        ...asPartial((0,region_config_resolver_dist_es/* getAwsRegionExtensionConfiguration */.Rq)(runtimeConfig)),
        ...asPartial((0,smithy_client_dist_es/* getDefaultExtensionConfiguration */.xA)(runtimeConfig)),
        ...asPartial((0,protocol_http_dist_es/* getHttpHandlerExtensionConfiguration */.eS)(runtimeConfig)),
        ...asPartial(getHttpAuthExtensionConfiguration(runtimeConfig)),
    };
    extensions.forEach((extension) => extension.configure(extensionConfiguration));
    return {
        ...runtimeConfig,
        ...(0,region_config_resolver_dist_es/* resolveAwsRegionExtensionConfiguration */.$3)(extensionConfiguration),
        ...(0,smithy_client_dist_es/* resolveDefaultRuntimeConfig */.uv)(extensionConfiguration),
        ...(0,protocol_http_dist_es/* resolveHttpHandlerRuntimeConfig */.jt)(extensionConfiguration),
        ...resolveHttpAuthRuntimeConfig(extensionConfiguration),
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/STSClient.js















class STSClient extends smithy_client_dist_es/* Client */.Kj {
    constructor(...[configuration]) {
        const _config_0 = runtimeConfig_getRuntimeConfig(configuration || {});
        const _config_1 = resolveClientEndpointParameters(_config_0);
        const _config_2 = (0,config_resolver_dist_es/* resolveRegionConfig */.TD)(_config_1);
        const _config_3 = (0,dist_es/* resolveEndpointConfig */.Co)(_config_2);
        const _config_4 = (0,middleware_retry_dist_es/* resolveRetryConfig */.$z)(_config_3);
        const _config_5 = (0,middleware_host_header_dist_es/* resolveHostHeaderConfig */.OV)(_config_4);
        const _config_6 = (0,middleware_user_agent_dist_es/* resolveUserAgentConfig */.Dc)(_config_5);
        const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
        const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
        super(_config_8);
        this.config = _config_8;
        this.middlewareStack.use((0,middleware_retry_dist_es/* getRetryPlugin */.ey)(this.config));
        this.middlewareStack.use((0,middleware_content_length_dist_es/* getContentLengthPlugin */.vK)(this.config));
        this.middlewareStack.use((0,middleware_host_header_dist_es/* getHostHeaderPlugin */.TC)(this.config));
        this.middlewareStack.use((0,middleware_logger_dist_es/* getLoggerPlugin */.Y7)(this.config));
        this.middlewareStack.use((0,middleware_recursion_detection_dist_es/* getRecursionDetectionPlugin */.n4)(this.config));
        this.middlewareStack.use((0,middleware_user_agent_dist_es/* getUserAgentPlugin */.sM)(this.config));
        this.middlewareStack.use((0,core_dist_es/* getHttpAuthSchemeEndpointRuleSetPlugin */.wB)(this.config, {
            httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
            identityProviderConfigProvider: this.getIdentityProviderConfigProvider(),
        }));
        this.middlewareStack.use((0,core_dist_es/* getHttpSigningPlugin */.lW)(this.config));
    }
    destroy() {
        super.destroy();
    }
    getDefaultHttpAuthSchemeParametersProvider() {
        return defaultSTSHttpAuthSchemeParametersProvider;
    }
    getIdentityProviderConfigProvider() {
        return async (config) => new core_dist_es/* DefaultIdentityProviderConfig */.h$({
            "aws.auth#sigv4": config.credentials,
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sts/dist-es/defaultRoleAssumers.js


const getCustomizableStsClientCtor = (baseCtor, customizations) => {
    if (!customizations)
        return baseCtor;
    else
        return class CustomizableSTSClient extends baseCtor {
            constructor(config) {
                super(config);
                for (const customization of customizations) {
                    this.middlewareStack.use(customization);
                }
            }
        };
};
const defaultRoleAssumers_getDefaultRoleAssumer = (stsOptions = {}, stsPlugins) => getDefaultRoleAssumer(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins));
const defaultRoleAssumers_getDefaultRoleAssumerWithWebIdentity = (stsOptions = {}, stsPlugins) => getDefaultRoleAssumerWithWebIdentity(stsOptions, getCustomizableStsClientCtor(STSClient, stsPlugins));
const defaultRoleAssumers_decorateDefaultCredentialProvider = (provider) => (input) => provider({
    roleAssumer: defaultRoleAssumers_getDefaultRoleAssumer(input),
    roleAssumerWithWebIdentity: defaultRoleAssumers_getDefaultRoleAssumerWithWebIdentity(input),
    ...input,
});


/***/ }),

/***/ 2458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   I: () => (/* binding */ emitWarningIfUnsupportedVersion)
/* harmony export */ });
let warningEmitted = false;
const emitWarningIfUnsupportedVersion = (version) => {
    if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 16) {
        warningEmitted = true;
        process.emitWarning(`NodeDeprecationWarning: The AWS SDK for JavaScript (v3) will
no longer support Node.js 14.x on May 1, 2024.

To continue receiving updates to AWS services, bug fixes, and security
updates please upgrade to an active Node.js LTS version.

More information can be found at: https://a.co/dzr2AJd`);
    }
};


/***/ }),

/***/ 1228:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  f: () => (/* binding */ AwsSdkSigV4Signer)
});

// UNUSED EXPORTS: AWSSDKSigV4Signer

// EXTERNAL MODULE: ./node_modules/@smithy/protocol-http/dist-es/index.js + 5 modules
var dist_es = __webpack_require__(5479);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/getSkewCorrectedDate.js
const getSkewCorrectedDate = (systemClockOffset) => new Date(Date.now() + systemClockOffset);

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/getDateHeader.js

const getDateHeader = (response) => dist_es/* HttpResponse */.cS.isInstance(response) ? response.headers?.date ?? response.headers?.Date : undefined;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/isClockSkewed.js

const isClockSkewed = (clockTime, systemClockOffset) => Math.abs(getSkewCorrectedDate(systemClockOffset).getTime() - clockTime) >= 300000;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/utils/getUpdatedSystemClockOffset.js

const getUpdatedSystemClockOffset = (clockTime, currentSystemClockOffset) => {
    const clockTimeInMs = Date.parse(clockTime);
    if (isClockSkewed(clockTimeInMs, currentSystemClockOffset)) {
        return clockTimeInMs - Date.now();
    }
    return currentSystemClockOffset;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js


const throwSigningPropertyError = (name, property) => {
    if (!property) {
        throw new Error(`Property \`${name}\` is not resolved for AWS SDK SigV4Auth`);
    }
    return property;
};
const validateSigningProperties = async (signingProperties) => {
    const context = throwSigningPropertyError("context", signingProperties.context);
    const config = throwSigningPropertyError("config", signingProperties.config);
    const authScheme = context.endpointV2?.properties?.authSchemes?.[0];
    const signerFunction = throwSigningPropertyError("signer", config.signer);
    const signer = await signerFunction(authScheme);
    const signingRegion = signingProperties?.signingRegion;
    const signingName = signingProperties?.signingName;
    return {
        config,
        signer,
        signingRegion,
        signingName,
    };
};
class AwsSdkSigV4Signer {
    async sign(httpRequest, identity, signingProperties) {
        if (!dist_es/* HttpRequest */.Kd.isInstance(httpRequest)) {
            throw new Error("The request is not an instance of `HttpRequest` and cannot be signed");
        }
        const { config, signer, signingRegion, signingName } = await validateSigningProperties(signingProperties);
        const signedRequest = await signer.sign(httpRequest, {
            signingDate: getSkewCorrectedDate(config.systemClockOffset),
            signingRegion: signingRegion,
            signingService: signingName,
        });
        return signedRequest;
    }
    errorHandler(signingProperties) {
        return (error) => {
            const serverTime = error.ServerTime ?? getDateHeader(error.$response);
            if (serverTime) {
                const config = throwSigningPropertyError("config", signingProperties.config);
                const initialSystemClockOffset = config.systemClockOffset;
                config.systemClockOffset = getUpdatedSystemClockOffset(serverTime, config.systemClockOffset);
                const clockSkewCorrected = config.systemClockOffset !== initialSystemClockOffset;
                if (clockSkewCorrected && error.$metadata) {
                    error.$metadata.clockSkewCorrected = true;
                }
            }
            throw error;
        };
    }
    successHandler(httpResponse, signingProperties) {
        const dateHeader = getDateHeader(httpResponse);
        if (dateHeader) {
            const config = throwSigningPropertyError("config", signingProperties.config);
            config.systemClockOffset = getUpdatedSystemClockOffset(dateHeader, config.systemClockOffset);
        }
    }
}
const AWSSDKSigV4Signer = (/* unused pure expression or super */ null && (AwsSdkSigV4Signer));


/***/ }),

/***/ 4685:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   h: () => (/* binding */ resolveAwsSdkSigV4Config)
/* harmony export */ });
/* unused harmony export resolveAWSSDKSigV4Config */
/* harmony import */ var _smithy_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2972);
/* harmony import */ var _smithy_signature_v4__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5993);


const resolveAwsSdkSigV4Config = (config) => {
    let normalizedCreds;
    if (config.credentials) {
        normalizedCreds = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__/* .memoizeIdentityProvider */ .K4)(config.credentials, _smithy_core__WEBPACK_IMPORTED_MODULE_0__/* .isIdentityExpired */ .OC, _smithy_core__WEBPACK_IMPORTED_MODULE_0__/* .doesIdentityRequireRefresh */ .e);
    }
    if (!normalizedCreds) {
        if (config.credentialDefaultProvider) {
            normalizedCreds = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__/* .normalizeProvider */ .te)(config.credentialDefaultProvider(Object.assign({}, config, {
                parentClientConfig: config,
            })));
        }
        else {
            normalizedCreds = async () => {
                throw new Error("`credentials` is missing");
            };
        }
    }
    const { signingEscapePath = true, systemClockOffset = config.systemClockOffset || 0, sha256, } = config;
    let signer;
    if (config.signer) {
        signer = (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__/* .normalizeProvider */ .te)(config.signer);
    }
    else if (config.regionInfoProvider) {
        signer = () => (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__/* .normalizeProvider */ .te)(config.region)()
            .then(async (region) => [
            (await config.regionInfoProvider(region, {
                useFipsEndpoint: await config.useFipsEndpoint(),
                useDualstackEndpoint: await config.useDualstackEndpoint(),
            })) || {},
            region,
        ])
            .then(([regionInfo, region]) => {
            const { signingRegion, signingService } = regionInfo;
            config.signingRegion = config.signingRegion || signingRegion || region;
            config.signingName = config.signingName || signingService || config.serviceId;
            const params = {
                ...config,
                credentials: normalizedCreds,
                region: config.signingRegion,
                service: config.signingName,
                sha256,
                uriEscapePath: signingEscapePath,
            };
            const SignerCtor = config.signerConstructor || _smithy_signature_v4__WEBPACK_IMPORTED_MODULE_1__/* .SignatureV4 */ .BB;
            return new SignerCtor(params);
        });
    }
    else {
        signer = async (authScheme) => {
            authScheme = Object.assign({}, {
                name: "sigv4",
                signingName: config.signingName || config.defaultSigningName,
                signingRegion: await (0,_smithy_core__WEBPACK_IMPORTED_MODULE_0__/* .normalizeProvider */ .te)(config.region)(),
                properties: {},
            }, authScheme);
            const signingRegion = authScheme.signingRegion;
            const signingService = authScheme.signingName;
            config.signingRegion = config.signingRegion || signingRegion;
            config.signingName = config.signingName || signingService || config.serviceId;
            const params = {
                ...config,
                credentials: normalizedCreds,
                region: config.signingRegion,
                service: config.signingName,
                sha256,
                uriEscapePath: signingEscapePath,
            };
            const SignerCtor = config.signerConstructor || _smithy_signature_v4__WEBPACK_IMPORTED_MODULE_1__/* .SignatureV4 */ .BB;
            return new SignerCtor(params);
        };
    }
    return {
        ...config,
        systemClockOffset,
        signingEscapePath,
        credentials: normalizedCreds,
        signer,
    };
};
const resolveAWSSDKSigV4Config = (/* unused pure expression or super */ null && (resolveAwsSdkSigV4Config));


/***/ }),

/***/ 6914:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   w: () => (/* binding */ collectBodyString)
/* harmony export */ });
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(678);

const collectBodyString = (streamBody, context) => (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__/* .collectBody */ .Px)(streamBody, context).then((body) => context.utf8Encoder(body));


/***/ }),

/***/ 7335:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CG: () => (/* binding */ parseJsonErrorBody),
/* harmony export */   Y2: () => (/* binding */ parseJsonBody),
/* harmony export */   cJ: () => (/* binding */ loadRestJsonErrorCode)
/* harmony export */ });
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6914);

const parseJsonBody = (streamBody, context) => (0,_common__WEBPACK_IMPORTED_MODULE_0__/* .collectBodyString */ .w)(streamBody, context).then((encoded) => {
    if (encoded.length) {
        try {
            return JSON.parse(encoded);
        }
        catch (e) {
            if (e?.name === "SyntaxError") {
                Object.defineProperty(e, "$responseBodyText", {
                    value: encoded,
                });
            }
            throw e;
        }
    }
    return {};
});
const parseJsonErrorBody = async (errorBody, context) => {
    const value = await parseJsonBody(errorBody, context);
    value.message = value.message ?? value.Message;
    return value;
};
const loadRestJsonErrorCode = (output, data) => {
    const findKey = (object, key) => Object.keys(object).find((k) => k.toLowerCase() === key.toLowerCase());
    const sanitizeErrorCode = (rawValue) => {
        let cleanValue = rawValue;
        if (typeof cleanValue === "number") {
            cleanValue = cleanValue.toString();
        }
        if (cleanValue.indexOf(",") >= 0) {
            cleanValue = cleanValue.split(",")[0];
        }
        if (cleanValue.indexOf(":") >= 0) {
            cleanValue = cleanValue.split(":")[0];
        }
        if (cleanValue.indexOf("#") >= 0) {
            cleanValue = cleanValue.split("#")[1];
        }
        return cleanValue;
    };
    const headerKey = findKey(output.headers, "x-amzn-errortype");
    if (headerKey !== undefined) {
        return sanitizeErrorCode(output.headers[headerKey]);
    }
    if (data.code !== undefined) {
        return sanitizeErrorCode(data.code);
    }
    if (data["__type"] !== undefined) {
        return sanitizeErrorCode(data["__type"]);
    }
};


/***/ }),

/***/ 2789:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FI: () => (/* binding */ parseXmlErrorBody),
/* harmony export */   t_: () => (/* binding */ parseXmlBody)
/* harmony export */ });
/* unused harmony export loadRestXmlErrorCode */
/* harmony import */ var _smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(678);
/* harmony import */ var fast_xml_parser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6454);
/* harmony import */ var fast_xml_parser__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(fast_xml_parser__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6914);



const parseXmlBody = (streamBody, context) => (0,_common__WEBPACK_IMPORTED_MODULE_2__/* .collectBodyString */ .w)(streamBody, context).then((encoded) => {
    if (encoded.length) {
        const parser = new fast_xml_parser__WEBPACK_IMPORTED_MODULE_1__.XMLParser({
            attributeNamePrefix: "",
            htmlEntities: true,
            ignoreAttributes: false,
            ignoreDeclaration: true,
            parseTagValue: false,
            trimValues: false,
            tagValueProcessor: (_, val) => (val.trim() === "" && val.includes("\n") ? "" : undefined),
        });
        parser.addEntity("#xD", "\r");
        parser.addEntity("#10", "\n");
        let parsedObj;
        try {
            parsedObj = parser.parse(encoded);
        }
        catch (e) {
            if (e && typeof e === "object") {
                Object.defineProperty(e, "$responseBodyText", {
                    value: encoded,
                });
            }
            throw e;
        }
        const textNodeName = "#text";
        const key = Object.keys(parsedObj)[0];
        const parsedObjToReturn = parsedObj[key];
        if (parsedObjToReturn[textNodeName]) {
            parsedObjToReturn[key] = parsedObjToReturn[textNodeName];
            delete parsedObjToReturn[textNodeName];
        }
        return (0,_smithy_smithy_client__WEBPACK_IMPORTED_MODULE_0__/* .getValueFromTextNode */ .rm)(parsedObjToReturn);
    }
    return {};
});
const parseXmlErrorBody = async (errorBody, context) => {
    const value = await parseXmlBody(errorBody, context);
    if (value.Error) {
        value.Error.message = value.Error.message ?? value.Error.Message;
    }
    return value;
};
const loadRestXmlErrorCode = (output, data) => {
    if (data?.Error?.Code !== undefined) {
        return data.Error.Code;
    }
    if (data?.Code !== undefined) {
        return data.Code;
    }
    if (output.statusCode == 404) {
        return "NotFound";
    }
};


/***/ }),

/***/ 904:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ENV_CREDENTIAL_SCOPE: () => (/* reexport */ ENV_CREDENTIAL_SCOPE),
  ENV_EXPIRATION: () => (/* reexport */ ENV_EXPIRATION),
  ENV_KEY: () => (/* reexport */ ENV_KEY),
  ENV_SECRET: () => (/* reexport */ ENV_SECRET),
  ENV_SESSION: () => (/* reexport */ ENV_SESSION),
  fromEnv: () => (/* reexport */ fromEnv)
});

// EXTERNAL MODULE: ./node_modules/@smithy/property-provider/dist-es/index.js + 6 modules
var dist_es = __webpack_require__(8112);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-env/dist-es/fromEnv.js

const ENV_KEY = "AWS_ACCESS_KEY_ID";
const ENV_SECRET = "AWS_SECRET_ACCESS_KEY";
const ENV_SESSION = "AWS_SESSION_TOKEN";
const ENV_EXPIRATION = "AWS_CREDENTIAL_EXPIRATION";
const ENV_CREDENTIAL_SCOPE = "AWS_CREDENTIAL_SCOPE";
const fromEnv = (init) => async () => {
    init?.logger?.debug("@aws-sdk/credential-provider-env", "fromEnv");
    const accessKeyId = process.env[ENV_KEY];
    const secretAccessKey = process.env[ENV_SECRET];
    const sessionToken = process.env[ENV_SESSION];
    const expiry = process.env[ENV_EXPIRATION];
    const credentialScope = process.env[ENV_CREDENTIAL_SCOPE];
    if (accessKeyId && secretAccessKey) {
        return {
            accessKeyId,
            secretAccessKey,
            ...(sessionToken && { sessionToken }),
            ...(expiry && { expiration: new Date(expiry) }),
            ...(credentialScope && { credentialScope }),
        };
    }
    throw new dist_es/* CredentialsProviderError */.C1("Unable to find environment variable credentials.");
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-env/dist-es/index.js



/***/ }),

/***/ 7292:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  fromHttp: () => (/* reexport */ fromHttp)
});

// EXTERNAL MODULE: ./node_modules/@smithy/node-http-handler/dist-es/index.js + 13 modules
var dist_es = __webpack_require__(4616);
// EXTERNAL MODULE: ./node_modules/@smithy/property-provider/dist-es/index.js + 6 modules
var property_provider_dist_es = __webpack_require__(8112);
;// CONCATENATED MODULE: external "fs/promises"
const promises_namespaceObject = require("fs/promises");
var promises_default = /*#__PURE__*/__webpack_require__.n(promises_namespaceObject);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/checkUrl.js

const LOOPBACK_CIDR_IPv4 = "127.0.0.0/8";
const LOOPBACK_CIDR_IPv6 = "::1/128";
const ECS_CONTAINER_HOST = "169.254.170.2";
const EKS_CONTAINER_HOST_IPv4 = "169.254.170.23";
const EKS_CONTAINER_HOST_IPv6 = "[fd00:ec2::23]";
const checkUrl = (url) => {
    if (url.protocol === "https:") {
        return;
    }
    if (url.hostname === ECS_CONTAINER_HOST ||
        url.hostname === EKS_CONTAINER_HOST_IPv4 ||
        url.hostname === EKS_CONTAINER_HOST_IPv6) {
        return;
    }
    if (url.hostname.includes("[")) {
        if (url.hostname === "[::1]" || url.hostname === "[0000:0000:0000:0000:0000:0000:0000:0001]") {
            return;
        }
    }
    else {
        if (url.hostname === "localhost") {
            return;
        }
        const ipComponents = url.hostname.split(".");
        const inRange = (component) => {
            const num = parseInt(component, 10);
            return 0 <= num && num <= 255;
        };
        if (ipComponents[0] === "127" &&
            inRange(ipComponents[1]) &&
            inRange(ipComponents[2]) &&
            inRange(ipComponents[3]) &&
            ipComponents.length === 4) {
            return;
        }
    }
    throw new property_provider_dist_es/* CredentialsProviderError */.C1(`URL not accepted. It must either be HTTPS or match one of the following:
  - loopback CIDR 127.0.0.0/8 or [::1/128]
  - ECS container host 169.254.170.2
  - EKS container host 169.254.170.23 or [fd00:ec2::23]`);
};

// EXTERNAL MODULE: ./node_modules/@smithy/protocol-http/dist-es/index.js + 5 modules
var protocol_http_dist_es = __webpack_require__(5479);
// EXTERNAL MODULE: ./node_modules/@smithy/smithy-client/dist-es/index.js + 25 modules
var smithy_client_dist_es = __webpack_require__(678);
// EXTERNAL MODULE: ./node_modules/@smithy/util-stream/dist-es/index.js + 4 modules
var util_stream_dist_es = __webpack_require__(5186);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/requestHelpers.js




function createGetRequest(url) {
    return new protocol_http_dist_es/* HttpRequest */.Kd({
        protocol: url.protocol,
        hostname: url.hostname,
        port: Number(url.port),
        path: url.pathname,
        query: Array.from(url.searchParams.entries()).reduce((acc, [k, v]) => {
            acc[k] = v;
            return acc;
        }, {}),
        fragment: url.hash,
    });
}
async function getCredentials(response) {
    const contentType = response?.headers["content-type"] ?? response?.headers["Content-Type"] ?? "";
    if (!contentType.includes("json")) {
        console.warn("HTTP credential provider response header content-type was not application/json. Observed: " + contentType + ".");
    }
    const stream = (0,util_stream_dist_es/* sdkStreamMixin */.c9)(response.body);
    const str = await stream.transformToString();
    if (response.statusCode === 200) {
        const parsed = JSON.parse(str);
        if (typeof parsed.AccessKeyId !== "string" ||
            typeof parsed.SecretAccessKey !== "string" ||
            typeof parsed.Token !== "string" ||
            typeof parsed.Expiration !== "string") {
            throw new property_provider_dist_es/* CredentialsProviderError */.C1("HTTP credential provider response not of the required format, an object matching: " +
                "{ AccessKeyId: string, SecretAccessKey: string, Token: string, Expiration: string(rfc3339) }");
        }
        return {
            accessKeyId: parsed.AccessKeyId,
            secretAccessKey: parsed.SecretAccessKey,
            sessionToken: parsed.Token,
            expiration: (0,smithy_client_dist_es/* parseRfc3339DateTime */.EI)(parsed.Expiration),
        };
    }
    if (response.statusCode >= 400 && response.statusCode < 500) {
        let parsedBody = {};
        try {
            parsedBody = JSON.parse(str);
        }
        catch (e) { }
        throw Object.assign(new property_provider_dist_es/* CredentialsProviderError */.C1(`Server responded with status: ${response.statusCode}`), {
            Code: parsedBody.Code,
            Message: parsedBody.Message,
        });
    }
    throw new property_provider_dist_es/* CredentialsProviderError */.C1(`Server responded with status: ${response.statusCode}`);
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/retry-wrapper.js
const retryWrapper = (toRetry, maxRetries, delayMs) => {
    return async () => {
        for (let i = 0; i < maxRetries; ++i) {
            try {
                return await toRetry();
            }
            catch (e) {
                await new Promise((resolve) => setTimeout(resolve, delayMs));
            }
        }
        return await toRetry();
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-http/dist-es/fromHttp/fromHttp.js






const AWS_CONTAINER_CREDENTIALS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
const DEFAULT_LINK_LOCAL_HOST = "http://169.254.170.2";
const AWS_CONTAINER_CREDENTIALS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
const AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE = "AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE";
const AWS_CONTAINER_AUTHORIZATION_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
const fromHttp = (options) => {
    options.logger?.debug("@aws-sdk/credential-provider-http", "fromHttp");
    let host;
    const relative = options.awsContainerCredentialsRelativeUri ?? process.env[AWS_CONTAINER_CREDENTIALS_RELATIVE_URI];
    const full = options.awsContainerCredentialsFullUri ?? process.env[AWS_CONTAINER_CREDENTIALS_FULL_URI];
    const token = options.awsContainerAuthorizationToken ?? process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN];
    const tokenFile = options.awsContainerAuthorizationTokenFile ?? process.env[AWS_CONTAINER_AUTHORIZATION_TOKEN_FILE];
    if (relative && full) {
        console.warn("AWS SDK HTTP credentials provider:", "you have set both awsContainerCredentialsRelativeUri and awsContainerCredentialsFullUri.");
        console.warn("awsContainerCredentialsFullUri will take precedence.");
    }
    if (token && tokenFile) {
        console.warn("AWS SDK HTTP credentials provider:", "you have set both awsContainerAuthorizationToken and awsContainerAuthorizationTokenFile.");
        console.warn("awsContainerAuthorizationToken will take precedence.");
    }
    if (full) {
        host = full;
    }
    else if (relative) {
        host = `${DEFAULT_LINK_LOCAL_HOST}${relative}`;
    }
    else {
        throw new property_provider_dist_es/* CredentialsProviderError */.C1(`No HTTP credential provider host provided.
Set AWS_CONTAINER_CREDENTIALS_FULL_URI or AWS_CONTAINER_CREDENTIALS_RELATIVE_URI.`);
    }
    const url = new URL(host);
    checkUrl(url);
    const requestHandler = new dist_es/* NodeHttpHandler */.$c({
        requestTimeout: options.timeout ?? 1000,
        connectionTimeout: options.timeout ?? 1000,
    });
    return retryWrapper(async () => {
        const request = createGetRequest(url);
        if (token) {
            request.headers.Authorization = token;
        }
        else if (tokenFile) {
            request.headers.Authorization = (await promises_default().readFile(tokenFile)).toString();
        }
        try {
            const result = await requestHandler.handle(request);
            return getCredentials(result.response);
        }
        catch (e) {
            throw new property_provider_dist_es/* CredentialsProviderError */.C1(String(e));
        }
    }, options.maxRetries ?? 3, options.timeout ?? 1000);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-http/dist-es/index.js



/***/ }),

/***/ 5170:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  fromIni: () => (/* reexport */ fromIni)
});

// EXTERNAL MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/index.js + 14 modules
var dist_es = __webpack_require__(3054);
// EXTERNAL MODULE: ./node_modules/@smithy/property-provider/dist-es/index.js + 6 modules
var property_provider_dist_es = __webpack_require__(8112);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveCredentialSource.js

const resolveCredentialSource = (credentialSource, profileName) => {
    const sourceProvidersMap = {
        EcsContainer: (options) => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 7897)).then(({ fromContainerMetadata }) => fromContainerMetadata(options)),
        Ec2InstanceMetadata: (options) => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 7897)).then(({ fromInstanceMetadata }) => fromInstanceMetadata(options)),
        Environment: (options) => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 904)).then(({ fromEnv }) => fromEnv(options)),
    };
    if (credentialSource in sourceProvidersMap) {
        return sourceProvidersMap[credentialSource];
    }
    else {
        throw new property_provider_dist_es/* CredentialsProviderError */.C1(`Unsupported credential source in profile ${profileName}. Got ${credentialSource}, ` +
            `expected EcsContainer or Ec2InstanceMetadata or Environment.`);
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveAssumeRoleCredentials.js




const isAssumeRoleProfile = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.role_arn === "string" &&
    ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1 &&
    ["undefined", "string"].indexOf(typeof arg.external_id) > -1 &&
    ["undefined", "string"].indexOf(typeof arg.mfa_serial) > -1 &&
    (isAssumeRoleWithSourceProfile(arg) || isAssumeRoleWithProviderProfile(arg));
const isAssumeRoleWithSourceProfile = (arg) => typeof arg.source_profile === "string" && typeof arg.credential_source === "undefined";
const isAssumeRoleWithProviderProfile = (arg) => typeof arg.credential_source === "string" && typeof arg.source_profile === "undefined";
const resolveAssumeRoleCredentials = async (profileName, profiles, options, visitedProfiles = {}) => {
    options.logger?.debug("@aws-sdk/credential-provider-ini", "resolveAssumeRoleCredentials (STS)");
    const data = profiles[profileName];
    if (!options.roleAssumer) {
        const { getDefaultRoleAssumer } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 2348));
        options.roleAssumer = getDefaultRoleAssumer({
            ...options.clientConfig,
            credentialProviderLogger: options.logger,
            parentClientConfig: options?.parentClientConfig,
        }, options.clientPlugins);
    }
    const { source_profile } = data;
    if (source_profile && source_profile in visitedProfiles) {
        throw new property_provider_dist_es/* CredentialsProviderError */.C1(`Detected a cycle attempting to resolve credentials for profile` +
            ` ${(0,dist_es/* getProfileName */.Bz)(options)}. Profiles visited: ` +
            Object.keys(visitedProfiles).join(", "), false);
    }
    const sourceCredsProvider = source_profile
        ? resolveProfileData(source_profile, profiles, options, {
            ...visitedProfiles,
            [source_profile]: true,
        })
        : (await resolveCredentialSource(data.credential_source, profileName)(options))();
    const params = {
        RoleArn: data.role_arn,
        RoleSessionName: data.role_session_name || `aws-sdk-js-${Date.now()}`,
        ExternalId: data.external_id,
        DurationSeconds: parseInt(data.duration_seconds || "3600", 10),
    };
    const { mfa_serial } = data;
    if (mfa_serial) {
        if (!options.mfaCodeProvider) {
            throw new property_provider_dist_es/* CredentialsProviderError */.C1(`Profile ${profileName} requires multi-factor authentication, but no MFA code callback was provided.`, false);
        }
        params.SerialNumber = mfa_serial;
        params.TokenCode = await options.mfaCodeProvider(mfa_serial);
    }
    const sourceCreds = await sourceCredsProvider;
    return options.roleAssumer(sourceCreds, params);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveProcessCredentials.js
const isProcessProfile = (arg) => Boolean(arg) && typeof arg === "object" && typeof arg.credential_process === "string";
const resolveProcessCredentials = async (options, profile) => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 1460)).then(({ fromProcess }) => fromProcess({
    ...options,
    profile,
})());

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveSsoCredentials.js
const resolveSsoCredentials = async (profile, options = {}) => {
    const { fromSSO } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 9791));
    return fromSSO({
        profile,
        logger: options.logger,
    })();
};
const isSsoProfile = (arg) => arg &&
    (typeof arg.sso_start_url === "string" ||
        typeof arg.sso_account_id === "string" ||
        typeof arg.sso_session === "string" ||
        typeof arg.sso_region === "string" ||
        typeof arg.sso_role_name === "string");

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveStaticCredentials.js
const isStaticCredsProfile = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.aws_access_key_id === "string" &&
    typeof arg.aws_secret_access_key === "string" &&
    ["undefined", "string"].indexOf(typeof arg.aws_session_token) > -1;
const resolveStaticCredentials = (profile, options) => {
    options?.logger?.debug("@aws-sdk/credential-provider-ini", "resolveStaticCredentials");
    return Promise.resolve({
        accessKeyId: profile.aws_access_key_id,
        secretAccessKey: profile.aws_secret_access_key,
        sessionToken: profile.aws_session_token,
        credentialScope: profile.aws_credential_scope,
    });
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveWebIdentityCredentials.js
const isWebIdentityProfile = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.web_identity_token_file === "string" &&
    typeof arg.role_arn === "string" &&
    ["undefined", "string"].indexOf(typeof arg.role_session_name) > -1;
const resolveWebIdentityCredentials = async (profile, options) => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 7819)).then(({ fromTokenFile }) => fromTokenFile({
    webIdentityTokenFile: profile.web_identity_token_file,
    roleArn: profile.role_arn,
    roleSessionName: profile.role_session_name,
    roleAssumerWithWebIdentity: options.roleAssumerWithWebIdentity,
    logger: options.logger,
    parentClientConfig: options.parentClientConfig,
})());

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-ini/dist-es/resolveProfileData.js






const resolveProfileData = async (profileName, profiles, options, visitedProfiles = {}) => {
    const data = profiles[profileName];
    if (Object.keys(visitedProfiles).length > 0 && isStaticCredsProfile(data)) {
        return resolveStaticCredentials(data, options);
    }
    if (isAssumeRoleProfile(data)) {
        return resolveAssumeRoleCredentials(profileName, profiles, options, visitedProfiles);
    }
    if (isStaticCredsProfile(data)) {
        return resolveStaticCredentials(data, options);
    }
    if (isWebIdentityProfile(data)) {
        return resolveWebIdentityCredentials(data, options);
    }
    if (isProcessProfile(data)) {
        return resolveProcessCredentials(options, profileName);
    }
    if (isSsoProfile(data)) {
        return await resolveSsoCredentials(profileName, options);
    }
    throw new property_provider_dist_es/* CredentialsProviderError */.C1(`Profile ${profileName} could not be found or parsed in shared credentials file.`);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-ini/dist-es/fromIni.js


const fromIni = (init = {}) => async () => {
    init.logger?.debug("@aws-sdk/credential-provider-ini", "fromIni");
    const profiles = await (0,dist_es/* parseKnownFiles */.YU)(init);
    return resolveProfileData((0,dist_es/* getProfileName */.Bz)(init), profiles, init);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-ini/dist-es/index.js



/***/ }),

/***/ 2348:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultRoleAssumer: () => (/* reexport safe */ _aws_sdk_client_sts__WEBPACK_IMPORTED_MODULE_0__.cz)
/* harmony export */ });
/* harmony import */ var _aws_sdk_client_sts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6800);




/***/ }),

/***/ 8257:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  credentialsTreatedAsExpired: () => (/* reexport */ credentialsTreatedAsExpired),
  credentialsWillNeedRefresh: () => (/* reexport */ credentialsWillNeedRefresh),
  defaultProvider: () => (/* reexport */ defaultProvider)
});

// EXTERNAL MODULE: ./node_modules/@smithy/property-provider/dist-es/index.js + 6 modules
var dist_es = __webpack_require__(8112);
// EXTERNAL MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/index.js + 14 modules
var shared_ini_file_loader_dist_es = __webpack_require__(3054);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-node/dist-es/remoteProvider.js

const ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
const remoteProvider = async (init) => {
    const { ENV_CMDS_FULL_URI, ENV_CMDS_RELATIVE_URI, fromContainerMetadata, fromInstanceMetadata } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 7897));
    if (process.env[ENV_CMDS_RELATIVE_URI] || process.env[ENV_CMDS_FULL_URI]) {
        init.logger?.debug("@aws-sdk/credential-provider-node", "remoteProvider::fromHttp/fromContainerMetadata");
        const { fromHttp } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 7292));
        return (0,dist_es/* chain */.cy)(fromHttp(init), fromContainerMetadata(init));
    }
    if (process.env[ENV_IMDS_DISABLED]) {
        return async () => {
            throw new dist_es/* CredentialsProviderError */.C1("EC2 Instance Metadata Service access disabled");
        };
    }
    init.logger?.debug("@aws-sdk/credential-provider-node", "remoteProvider::fromInstanceMetadata");
    return fromInstanceMetadata(init);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-node/dist-es/defaultProvider.js



const defaultProvider = (init = {}) => (0,dist_es/* memoize */.Bj)((0,dist_es/* chain */.cy)(...(init.profile || process.env[shared_ini_file_loader_dist_es/* ENV_PROFILE */.Ch]
    ? []
    : [
        async () => {
            init.logger?.debug("@aws-sdk/credential-provider-node", "defaultProvider::fromEnv");
            const { fromEnv } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 904));
            return fromEnv(init)();
        },
    ]), async () => {
    init.logger?.debug("@aws-sdk/credential-provider-node", "defaultProvider::fromSSO");
    const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoSession } = init;
    if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
        throw new dist_es/* CredentialsProviderError */.C1("Skipping SSO provider in default chain (inputs do not include SSO fields).");
    }
    const { fromSSO } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 9791));
    return fromSSO(init)();
}, async () => {
    init.logger?.debug("@aws-sdk/credential-provider-node", "defaultProvider::fromIni");
    const { fromIni } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 5170));
    return fromIni(init)();
}, async () => {
    init.logger?.debug("@aws-sdk/credential-provider-node", "defaultProvider::fromProcess");
    const { fromProcess } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 1460));
    return fromProcess(init)();
}, async () => {
    init.logger?.debug("@aws-sdk/credential-provider-node", "defaultProvider::fromTokenFile");
    const { fromTokenFile } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 7819));
    return fromTokenFile(init)();
}, async () => {
    init.logger?.debug("@aws-sdk/credential-provider-node", "defaultProvider::remoteProvider");
    return (await remoteProvider(init))();
}, async () => {
    throw new dist_es/* CredentialsProviderError */.C1("Could not load credentials from any providers", false);
}), credentialsTreatedAsExpired, credentialsWillNeedRefresh);
const credentialsWillNeedRefresh = (credentials) => credentials?.expiration !== undefined;
const credentialsTreatedAsExpired = (credentials) => credentials?.expiration !== undefined && credentials.expiration.getTime() - Date.now() < 300000;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-node/dist-es/index.js



/***/ }),

/***/ 1460:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  fromProcess: () => (/* reexport */ fromProcess)
});

// EXTERNAL MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/index.js + 14 modules
var dist_es = __webpack_require__(3054);
// EXTERNAL MODULE: ./node_modules/@smithy/property-provider/dist-es/index.js + 6 modules
var property_provider_dist_es = __webpack_require__(8112);
;// CONCATENATED MODULE: external "child_process"
const external_child_process_namespaceObject = require("child_process");
// EXTERNAL MODULE: external "util"
var external_util_ = __webpack_require__(9023);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-process/dist-es/getValidatedProcessCredentials.js
const getValidatedProcessCredentials = (profileName, data) => {
    if (data.Version !== 1) {
        throw Error(`Profile ${profileName} credential_process did not return Version 1.`);
    }
    if (data.AccessKeyId === undefined || data.SecretAccessKey === undefined) {
        throw Error(`Profile ${profileName} credential_process returned invalid credentials.`);
    }
    if (data.Expiration) {
        const currentTime = new Date();
        const expireTime = new Date(data.Expiration);
        if (expireTime < currentTime) {
            throw Error(`Profile ${profileName} credential_process returned expired credentials.`);
        }
    }
    return {
        accessKeyId: data.AccessKeyId,
        secretAccessKey: data.SecretAccessKey,
        ...(data.SessionToken && { sessionToken: data.SessionToken }),
        ...(data.Expiration && { expiration: new Date(data.Expiration) }),
        ...(data.CredentialScope && { credentialScope: data.CredentialScope }),
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-process/dist-es/resolveProcessCredentials.js




const resolveProcessCredentials = async (profileName, profiles) => {
    const profile = profiles[profileName];
    if (profiles[profileName]) {
        const credentialProcess = profile["credential_process"];
        if (credentialProcess !== undefined) {
            const execPromise = (0,external_util_.promisify)(external_child_process_namespaceObject.exec);
            try {
                const { stdout } = await execPromise(credentialProcess);
                let data;
                try {
                    data = JSON.parse(stdout.trim());
                }
                catch {
                    throw Error(`Profile ${profileName} credential_process returned invalid JSON.`);
                }
                return getValidatedProcessCredentials(profileName, data);
            }
            catch (error) {
                throw new property_provider_dist_es/* CredentialsProviderError */.C1(error.message);
            }
        }
        else {
            throw new property_provider_dist_es/* CredentialsProviderError */.C1(`Profile ${profileName} did not contain credential_process.`);
        }
    }
    else {
        throw new property_provider_dist_es/* CredentialsProviderError */.C1(`Profile ${profileName} could not be found in shared credentials file.`);
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-process/dist-es/fromProcess.js


const fromProcess = (init = {}) => async () => {
    init.logger?.debug("@aws-sdk/credential-provider-process", "fromProcess");
    const profiles = await (0,dist_es/* parseKnownFiles */.YU)(init);
    return resolveProcessCredentials((0,dist_es/* getProfileName */.Bz)(init), profiles);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-process/dist-es/index.js



/***/ }),

/***/ 9791:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  fromSSO: () => (/* reexport */ fromSSO)
});

// UNUSED EXPORTS: isSsoProfile, validateSsoProfile

// EXTERNAL MODULE: ./node_modules/@smithy/property-provider/dist-es/index.js + 6 modules
var dist_es = __webpack_require__(8112);
// EXTERNAL MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/index.js + 14 modules
var shared_ini_file_loader_dist_es = __webpack_require__(3054);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-sso/dist-es/isSsoProfile.js
const isSsoProfile = (arg) => arg &&
    (typeof arg.sso_start_url === "string" ||
        typeof arg.sso_account_id === "string" ||
        typeof arg.sso_session === "string" ||
        typeof arg.sso_region === "string" ||
        typeof arg.sso_role_name === "string");

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/token-providers/dist-es/constants.js
const EXPIRE_WINDOW_MS = 5 * 60 * 1000;
const REFRESH_MESSAGE = `To refresh this SSO session run 'aws sso login' with the corresponding profile.`;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/token-providers/dist-es/getSsoOidcClient.js
const ssoOidcClientsHash = {};
const getSsoOidcClient = async (ssoRegion) => {
    const { SSOOIDCClient } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 3553));
    if (ssoOidcClientsHash[ssoRegion]) {
        return ssoOidcClientsHash[ssoRegion];
    }
    const ssoOidcClient = new SSOOIDCClient({ region: ssoRegion });
    ssoOidcClientsHash[ssoRegion] = ssoOidcClient;
    return ssoOidcClient;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/token-providers/dist-es/getNewSsoOidcToken.js

const getNewSsoOidcToken = async (ssoToken, ssoRegion) => {
    const { CreateTokenCommand } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 3553));
    const ssoOidcClient = await getSsoOidcClient(ssoRegion);
    return ssoOidcClient.send(new CreateTokenCommand({
        clientId: ssoToken.clientId,
        clientSecret: ssoToken.clientSecret,
        refreshToken: ssoToken.refreshToken,
        grantType: "refresh_token",
    }));
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/token-providers/dist-es/validateTokenExpiry.js


const validateTokenExpiry = (token) => {
    if (token.expiration && token.expiration.getTime() < Date.now()) {
        throw new dist_es/* TokenProviderError */.Jh(`Token is expired. ${REFRESH_MESSAGE}`, false);
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/token-providers/dist-es/validateTokenKey.js


const validateTokenKey = (key, value, forRefresh = false) => {
    if (typeof value === "undefined") {
        throw new dist_es/* TokenProviderError */.Jh(`Value not present for '${key}' in SSO Token${forRefresh ? ". Cannot refresh" : ""}. ${REFRESH_MESSAGE}`, false);
    }
};

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(9896);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/token-providers/dist-es/writeSSOTokenToFile.js


const { writeFile } = external_fs_.promises;
const writeSSOTokenToFile = (id, ssoToken) => {
    const tokenFilepath = (0,shared_ini_file_loader_dist_es/* getSSOTokenFilepath */.C9)(id);
    const tokenString = JSON.stringify(ssoToken, null, 2);
    return writeFile(tokenFilepath, tokenString);
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/token-providers/dist-es/fromSso.js







const lastRefreshAttemptTime = new Date(0);
const fromSso = (init = {}) => async () => {
    init.logger?.debug("@aws-sdk/token-providers", "fromSso");
    const profiles = await (0,shared_ini_file_loader_dist_es/* parseKnownFiles */.YU)(init);
    const profileName = (0,shared_ini_file_loader_dist_es/* getProfileName */.Bz)(init);
    const profile = profiles[profileName];
    if (!profile) {
        throw new dist_es/* TokenProviderError */.Jh(`Profile '${profileName}' could not be found in shared credentials file.`, false);
    }
    else if (!profile["sso_session"]) {
        throw new dist_es/* TokenProviderError */.Jh(`Profile '${profileName}' is missing required property 'sso_session'.`);
    }
    const ssoSessionName = profile["sso_session"];
    const ssoSessions = await (0,shared_ini_file_loader_dist_es/* loadSsoSessionData */.qw)(init);
    const ssoSession = ssoSessions[ssoSessionName];
    if (!ssoSession) {
        throw new dist_es/* TokenProviderError */.Jh(`Sso session '${ssoSessionName}' could not be found in shared credentials file.`, false);
    }
    for (const ssoSessionRequiredKey of ["sso_start_url", "sso_region"]) {
        if (!ssoSession[ssoSessionRequiredKey]) {
            throw new dist_es/* TokenProviderError */.Jh(`Sso session '${ssoSessionName}' is missing required property '${ssoSessionRequiredKey}'.`, false);
        }
    }
    const ssoStartUrl = ssoSession["sso_start_url"];
    const ssoRegion = ssoSession["sso_region"];
    let ssoToken;
    try {
        ssoToken = await (0,shared_ini_file_loader_dist_es/* getSSOTokenFromFile */.vf)(ssoSessionName);
    }
    catch (e) {
        throw new dist_es/* TokenProviderError */.Jh(`The SSO session token associated with profile=${profileName} was not found or is invalid. ${REFRESH_MESSAGE}`, false);
    }
    validateTokenKey("accessToken", ssoToken.accessToken);
    validateTokenKey("expiresAt", ssoToken.expiresAt);
    const { accessToken, expiresAt } = ssoToken;
    const existingToken = { token: accessToken, expiration: new Date(expiresAt) };
    if (existingToken.expiration.getTime() - Date.now() > EXPIRE_WINDOW_MS) {
        return existingToken;
    }
    if (Date.now() - lastRefreshAttemptTime.getTime() < 30 * 1000) {
        validateTokenExpiry(existingToken);
        return existingToken;
    }
    validateTokenKey("clientId", ssoToken.clientId, true);
    validateTokenKey("clientSecret", ssoToken.clientSecret, true);
    validateTokenKey("refreshToken", ssoToken.refreshToken, true);
    try {
        lastRefreshAttemptTime.setTime(Date.now());
        const newSsoOidcToken = await getNewSsoOidcToken(ssoToken, ssoRegion);
        validateTokenKey("accessToken", newSsoOidcToken.accessToken);
        validateTokenKey("expiresIn", newSsoOidcToken.expiresIn);
        const newTokenExpiration = new Date(Date.now() + newSsoOidcToken.expiresIn * 1000);
        try {
            await writeSSOTokenToFile(ssoSessionName, {
                ...ssoToken,
                accessToken: newSsoOidcToken.accessToken,
                expiresAt: newTokenExpiration.toISOString(),
                refreshToken: newSsoOidcToken.refreshToken,
            });
        }
        catch (error) {
        }
        return {
            token: newSsoOidcToken.accessToken,
            expiration: newTokenExpiration,
        };
    }
    catch (error) {
        validateTokenExpiry(existingToken);
        return existingToken;
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-sso/dist-es/resolveSSOCredentials.js



const SHOULD_FAIL_CREDENTIAL_CHAIN = false;
const resolveSSOCredentials = async ({ ssoStartUrl, ssoSession, ssoAccountId, ssoRegion, ssoRoleName, ssoClient, clientConfig, profile, }) => {
    let token;
    const refreshMessage = `To refresh this SSO session run aws sso login with the corresponding profile.`;
    if (ssoSession) {
        try {
            const _token = await fromSso({ profile })();
            token = {
                accessToken: _token.token,
                expiresAt: new Date(_token.expiration).toISOString(),
            };
        }
        catch (e) {
            throw new dist_es/* CredentialsProviderError */.C1(e.message, SHOULD_FAIL_CREDENTIAL_CHAIN);
        }
    }
    else {
        try {
            token = await (0,shared_ini_file_loader_dist_es/* getSSOTokenFromFile */.vf)(ssoStartUrl);
        }
        catch (e) {
            throw new dist_es/* CredentialsProviderError */.C1(`The SSO session associated with this profile is invalid. ${refreshMessage}`, SHOULD_FAIL_CREDENTIAL_CHAIN);
        }
    }
    if (new Date(token.expiresAt).getTime() - Date.now() <= 0) {
        throw new dist_es/* CredentialsProviderError */.C1(`The SSO session associated with this profile has expired. ${refreshMessage}`, SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
    const { accessToken } = token;
    const { SSOClient, GetRoleCredentialsCommand } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 2563));
    const sso = ssoClient ||
        new SSOClient(Object.assign({}, clientConfig ?? {}, {
            region: clientConfig?.region ?? ssoRegion,
        }));
    let ssoResp;
    try {
        ssoResp = await sso.send(new GetRoleCredentialsCommand({
            accountId: ssoAccountId,
            roleName: ssoRoleName,
            accessToken,
        }));
    }
    catch (e) {
        throw dist_es/* CredentialsProviderError */.C1.from(e, SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
    const { roleCredentials: { accessKeyId, secretAccessKey, sessionToken, expiration, credentialScope } = {} } = ssoResp;
    if (!accessKeyId || !secretAccessKey || !sessionToken || !expiration) {
        throw new dist_es/* CredentialsProviderError */.C1("SSO returns an invalid temporary credential.", SHOULD_FAIL_CREDENTIAL_CHAIN);
    }
    return { accessKeyId, secretAccessKey, sessionToken, expiration: new Date(expiration), credentialScope };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-sso/dist-es/validateSsoProfile.js

const validateSsoProfile = (profile) => {
    const { sso_start_url, sso_account_id, sso_region, sso_role_name } = profile;
    if (!sso_start_url || !sso_account_id || !sso_region || !sso_role_name) {
        throw new dist_es/* CredentialsProviderError */.C1(`Profile is configured with invalid SSO credentials. Required parameters "sso_account_id", ` +
            `"sso_region", "sso_role_name", "sso_start_url". Got ${Object.keys(profile).join(", ")}\nReference: https://docs.aws.amazon.com/cli/latest/userguide/cli-configure-sso.html`, false);
    }
    return profile;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-sso/dist-es/fromSSO.js





const fromSSO = (init = {}) => async () => {
    init.logger?.debug("@aws-sdk/credential-provider-sso", "fromSSO");
    const { ssoStartUrl, ssoAccountId, ssoRegion, ssoRoleName, ssoSession } = init;
    const { ssoClient } = init;
    const profileName = (0,shared_ini_file_loader_dist_es/* getProfileName */.Bz)(init);
    if (!ssoStartUrl && !ssoAccountId && !ssoRegion && !ssoRoleName && !ssoSession) {
        const profiles = await (0,shared_ini_file_loader_dist_es/* parseKnownFiles */.YU)(init);
        const profile = profiles[profileName];
        if (!profile) {
            throw new dist_es/* CredentialsProviderError */.C1(`Profile ${profileName} was not found.`);
        }
        if (!isSsoProfile(profile)) {
            throw new dist_es/* CredentialsProviderError */.C1(`Profile ${profileName} is not configured with SSO credentials.`);
        }
        if (profile?.sso_session) {
            const ssoSessions = await (0,shared_ini_file_loader_dist_es/* loadSsoSessionData */.qw)(init);
            const session = ssoSessions[profile.sso_session];
            const conflictMsg = ` configurations in profile ${profileName} and sso-session ${profile.sso_session}`;
            if (ssoRegion && ssoRegion !== session.sso_region) {
                throw new dist_es/* CredentialsProviderError */.C1(`Conflicting SSO region` + conflictMsg, false);
            }
            if (ssoStartUrl && ssoStartUrl !== session.sso_start_url) {
                throw new dist_es/* CredentialsProviderError */.C1(`Conflicting SSO start_url` + conflictMsg, false);
            }
            profile.sso_region = session.sso_region;
            profile.sso_start_url = session.sso_start_url;
        }
        const { sso_start_url, sso_account_id, sso_region, sso_role_name, sso_session } = validateSsoProfile(profile);
        return resolveSSOCredentials({
            ssoStartUrl: sso_start_url,
            ssoSession: sso_session,
            ssoAccountId: sso_account_id,
            ssoRegion: sso_region,
            ssoRoleName: sso_role_name,
            ssoClient: ssoClient,
            clientConfig: init.clientConfig,
            profile: profileName,
        });
    }
    else if (!ssoStartUrl || !ssoAccountId || !ssoRegion || !ssoRoleName) {
        throw new dist_es/* CredentialsProviderError */.C1("Incomplete configuration. The fromSSO() argument hash must include " +
            '"ssoStartUrl", "ssoAccountId", "ssoRegion", "ssoRoleName"');
    }
    else {
        return resolveSSOCredentials({
            ssoStartUrl,
            ssoSession,
            ssoAccountId,
            ssoRegion,
            ssoRoleName,
            ssoClient,
            clientConfig: init.clientConfig,
            profile: profileName,
        });
    }
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-sso/dist-es/index.js






/***/ }),

/***/ 2563:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  GetRoleCredentialsCommand: () => (/* reexport */ GetRoleCredentialsCommand),
  SSOClient: () => (/* reexport */ SSOClient)
});

// EXTERNAL MODULE: ./node_modules/@smithy/middleware-endpoint/dist-es/index.js + 10 modules
var dist_es = __webpack_require__(9389);
// EXTERNAL MODULE: ./node_modules/@smithy/middleware-serde/dist-es/index.js + 3 modules
var middleware_serde_dist_es = __webpack_require__(1208);
// EXTERNAL MODULE: ./node_modules/@smithy/smithy-client/dist-es/index.js + 25 modules
var smithy_client_dist_es = __webpack_require__(678);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/endpoint/EndpointParameters.js
const resolveClientEndpointParameters = (options) => {
    return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "awsssoportal",
    };
};
const commonParams = {
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/models/SSOServiceException.js


class SSOServiceException extends smithy_client_dist_es/* ServiceException */.TJ {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, SSOServiceException.prototype);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/models/models_0.js


class InvalidRequestException extends SSOServiceException {
    constructor(opts) {
        super({
            name: "InvalidRequestException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidRequestException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidRequestException.prototype);
    }
}
class ResourceNotFoundException extends SSOServiceException {
    constructor(opts) {
        super({
            name: "ResourceNotFoundException",
            $fault: "client",
            ...opts,
        });
        this.name = "ResourceNotFoundException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ResourceNotFoundException.prototype);
    }
}
class TooManyRequestsException extends SSOServiceException {
    constructor(opts) {
        super({
            name: "TooManyRequestsException",
            $fault: "client",
            ...opts,
        });
        this.name = "TooManyRequestsException";
        this.$fault = "client";
        Object.setPrototypeOf(this, TooManyRequestsException.prototype);
    }
}
class UnauthorizedException extends SSOServiceException {
    constructor(opts) {
        super({
            name: "UnauthorizedException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnauthorizedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnauthorizedException.prototype);
    }
}
const GetRoleCredentialsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: smithy_client_dist_es/* SENSITIVE_STRING */.$H }),
});
const RoleCredentialsFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.secretAccessKey && { secretAccessKey: smithy_client_dist_es/* SENSITIVE_STRING */.$H }),
    ...(obj.sessionToken && { sessionToken: smithy_client_dist_es/* SENSITIVE_STRING */.$H }),
});
const GetRoleCredentialsResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.roleCredentials && { roleCredentials: RoleCredentialsFilterSensitiveLog(obj.roleCredentials) }),
});
const ListAccountRolesRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
});
const ListAccountsRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
});
const LogoutRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
});

// EXTERNAL MODULE: ./node_modules/@aws-sdk/core/dist-es/protocols/json/parseJsonBody.js
var parseJsonBody = __webpack_require__(7335);
// EXTERNAL MODULE: ./node_modules/@smithy/core/dist-es/index.js + 17 modules
var core_dist_es = __webpack_require__(2972);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/protocols/Aws_restJson1.js





const se_GetRoleCredentialsCommand = async (input, context) => {
    const b = (0,core_dist_es/* requestBuilder */.lI)(input, context);
    const headers = (0,smithy_client_dist_es/* map */.Tj)({}, isSerializableHeaderValue, {
        [_xasbt]: input[_aT],
    });
    b.bp("/federation/credentials");
    const query = (0,smithy_client_dist_es/* map */.Tj)({
        [_rn]: [, (0,smithy_client_dist_es/* expectNonNull */.Y0)(input[_rN], `roleName`)],
        [_ai]: [, (0,smithy_client_dist_es/* expectNonNull */.Y0)(input[_aI], `accountId`)],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_ListAccountRolesCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = map({}, isSerializableHeaderValue, {
        [_xasbt]: input[_aT],
    });
    b.bp("/assignment/roles");
    const query = map({
        [_nt]: [, input[_nT]],
        [_mr]: [() => input.maxResults !== void 0, () => input[_mR].toString()],
        [_ai]: [, __expectNonNull(input[_aI], `accountId`)],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_ListAccountsCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = map({}, isSerializableHeaderValue, {
        [_xasbt]: input[_aT],
    });
    b.bp("/assignment/accounts");
    const query = map({
        [_nt]: [, input[_nT]],
        [_mr]: [() => input.maxResults !== void 0, () => input[_mR].toString()],
    });
    let body;
    b.m("GET").h(headers).q(query).b(body);
    return b.build();
};
const se_LogoutCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = map({}, isSerializableHeaderValue, {
        [_xasbt]: input[_aT],
    });
    b.bp("/logout");
    let body;
    b.m("POST").h(headers).b(body);
    return b.build();
};
const de_GetRoleCredentialsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0,smithy_client_dist_es/* map */.Tj)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0,smithy_client_dist_es/* expectNonNull */.Y0)((0,smithy_client_dist_es/* expectObject */.Xk)(await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context)), "body");
    const doc = (0,smithy_client_dist_es/* take */.s)(data, {
        roleCredentials: smithy_client_dist_es/* _json */.Ss,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_ListAccountRolesCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        nextToken: __expectString,
        roleList: _json,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_ListAccountsCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        accountList: _json,
        nextToken: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_LogoutCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    await collectBody(output.body, context);
    return contents;
};
const de_CommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await (0,parseJsonBody/* parseJsonErrorBody */.CG)(output.body, context),
    };
    const errorCode = (0,parseJsonBody/* loadRestJsonErrorCode */.cJ)(output, parsedOutput.body);
    switch (errorCode) {
        case "InvalidRequestException":
        case "com.amazonaws.sso#InvalidRequestException":
            throw await de_InvalidRequestExceptionRes(parsedOutput, context);
        case "ResourceNotFoundException":
        case "com.amazonaws.sso#ResourceNotFoundException":
            throw await de_ResourceNotFoundExceptionRes(parsedOutput, context);
        case "TooManyRequestsException":
        case "com.amazonaws.sso#TooManyRequestsException":
            throw await de_TooManyRequestsExceptionRes(parsedOutput, context);
        case "UnauthorizedException":
        case "com.amazonaws.sso#UnauthorizedException":
            throw await de_UnauthorizedExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const throwDefaultError = (0,smithy_client_dist_es/* withBaseException */.jr)(SSOServiceException);
const de_InvalidRequestExceptionRes = async (parsedOutput, context) => {
    const contents = (0,smithy_client_dist_es/* map */.Tj)({});
    const data = parsedOutput.body;
    const doc = (0,smithy_client_dist_es/* take */.s)(data, {
        message: smithy_client_dist_es/* expectString */.lK,
    });
    Object.assign(contents, doc);
    const exception = new InvalidRequestException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, parsedOutput.body);
};
const de_ResourceNotFoundExceptionRes = async (parsedOutput, context) => {
    const contents = (0,smithy_client_dist_es/* map */.Tj)({});
    const data = parsedOutput.body;
    const doc = (0,smithy_client_dist_es/* take */.s)(data, {
        message: smithy_client_dist_es/* expectString */.lK,
    });
    Object.assign(contents, doc);
    const exception = new ResourceNotFoundException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, parsedOutput.body);
};
const de_TooManyRequestsExceptionRes = async (parsedOutput, context) => {
    const contents = (0,smithy_client_dist_es/* map */.Tj)({});
    const data = parsedOutput.body;
    const doc = (0,smithy_client_dist_es/* take */.s)(data, {
        message: smithy_client_dist_es/* expectString */.lK,
    });
    Object.assign(contents, doc);
    const exception = new TooManyRequestsException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, parsedOutput.body);
};
const de_UnauthorizedExceptionRes = async (parsedOutput, context) => {
    const contents = (0,smithy_client_dist_es/* map */.Tj)({});
    const data = parsedOutput.body;
    const doc = (0,smithy_client_dist_es/* take */.s)(data, {
        message: smithy_client_dist_es/* expectString */.lK,
    });
    Object.assign(contents, doc);
    const exception = new UnauthorizedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, parsedOutput.body);
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
const _aI = "accountId";
const _aT = "accessToken";
const _ai = "account_id";
const _mR = "maxResults";
const _mr = "max_result";
const _nT = "nextToken";
const _nt = "next_token";
const _rN = "roleName";
const _rn = "role_name";
const _xasbt = "x-amz-sso_bearer_token";

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/commands/GetRoleCredentialsCommand.js







class GetRoleCredentialsCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("SWBPortalService", "GetRoleCredentials", {})
    .n("SSOClient", "GetRoleCredentialsCommand")
    .f(GetRoleCredentialsRequestFilterSensitiveLog, GetRoleCredentialsResponseFilterSensitiveLog)
    .ser(se_GetRoleCredentialsCommand)
    .de(de_GetRoleCredentialsCommand)
    .build() {
}

// EXTERNAL MODULE: ./node_modules/@aws-sdk/middleware-host-header/dist-es/index.js
var middleware_host_header_dist_es = __webpack_require__(1095);
// EXTERNAL MODULE: ./node_modules/@aws-sdk/middleware-logger/dist-es/index.js + 1 modules
var middleware_logger_dist_es = __webpack_require__(9359);
// EXTERNAL MODULE: ./node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js
var middleware_recursion_detection_dist_es = __webpack_require__(8377);
// EXTERNAL MODULE: ./node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js + 3 modules
var middleware_user_agent_dist_es = __webpack_require__(499);
// EXTERNAL MODULE: ./node_modules/@smithy/config-resolver/dist-es/index.js + 10 modules
var config_resolver_dist_es = __webpack_require__(7122);
// EXTERNAL MODULE: ./node_modules/@smithy/middleware-content-length/dist-es/index.js
var middleware_content_length_dist_es = __webpack_require__(649);
// EXTERNAL MODULE: ./node_modules/@smithy/middleware-retry/dist-es/index.js + 10 modules
var middleware_retry_dist_es = __webpack_require__(3594);
// EXTERNAL MODULE: ./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js
var resolveAwsSdkSigV4Config = __webpack_require__(4685);
// EXTERNAL MODULE: ./node_modules/@smithy/util-middleware/dist-es/index.js + 2 modules
var util_middleware_dist_es = __webpack_require__(7135);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/auth/httpAuthSchemeProvider.js


const defaultSSOHttpAuthSchemeParametersProvider = async (config, context, input) => {
    return {
        operation: (0,util_middleware_dist_es/* getSmithyContext */.u)(context).operation,
        region: (await (0,util_middleware_dist_es/* normalizeProvider */.t)(config.region)()) ||
            (() => {
                throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
            })(),
    };
};
function createAwsAuthSigv4HttpAuthOption(authParameters) {
    return {
        schemeId: "aws.auth#sigv4",
        signingProperties: {
            name: "awsssoportal",
            region: authParameters.region,
        },
        propertiesExtractor: (config, context) => ({
            signingProperties: {
                config,
                context,
            },
        }),
    };
}
function createSmithyApiNoAuthHttpAuthOption(authParameters) {
    return {
        schemeId: "smithy.api#noAuth",
    };
}
const defaultSSOHttpAuthSchemeProvider = (authParameters) => {
    const options = [];
    switch (authParameters.operation) {
        case "GetRoleCredentials": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "ListAccountRoles": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "ListAccounts": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "Logout": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        default: {
            options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
        }
    }
    return options;
};
const resolveHttpAuthSchemeConfig = (config) => {
    const config_0 = (0,resolveAwsSdkSigV4Config/* resolveAwsSdkSigV4Config */.h)(config);
    return {
        ...config_0,
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/package.json
const package_namespaceObject = {"rE":"3.549.0"};
// EXTERNAL MODULE: ./node_modules/@aws-sdk/core/dist-es/client/emitWarningIfUnsupportedVersion.js
var emitWarningIfUnsupportedVersion = __webpack_require__(2458);
// EXTERNAL MODULE: ./node_modules/@aws-sdk/util-user-agent-node/dist-es/index.js + 3 modules
var util_user_agent_node_dist_es = __webpack_require__(3058);
// EXTERNAL MODULE: ./node_modules/@smithy/hash-node/dist-es/index.js
var hash_node_dist_es = __webpack_require__(1701);
// EXTERNAL MODULE: ./node_modules/@smithy/node-config-provider/dist-es/index.js + 4 modules
var node_config_provider_dist_es = __webpack_require__(1881);
// EXTERNAL MODULE: ./node_modules/@smithy/node-http-handler/dist-es/index.js + 13 modules
var node_http_handler_dist_es = __webpack_require__(4616);
// EXTERNAL MODULE: ./node_modules/@smithy/util-body-length-node/dist-es/index.js + 1 modules
var util_body_length_node_dist_es = __webpack_require__(7809);
// EXTERNAL MODULE: ./node_modules/@smithy/util-retry/dist-es/index.js + 8 modules
var util_retry_dist_es = __webpack_require__(3323);
// EXTERNAL MODULE: ./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js + 4 modules
var AwsSdkSigV4Signer = __webpack_require__(1228);
// EXTERNAL MODULE: ./node_modules/@smithy/url-parser/dist-es/index.js + 1 modules
var url_parser_dist_es = __webpack_require__(2641);
// EXTERNAL MODULE: ./node_modules/@smithy/util-base64/dist-es/index.js + 2 modules
var util_base64_dist_es = __webpack_require__(4572);
// EXTERNAL MODULE: ./node_modules/@smithy/util-utf8/dist-es/index.js + 3 modules
var util_utf8_dist_es = __webpack_require__(3197);
// EXTERNAL MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/index.js + 9 modules
var util_endpoints_dist_es = __webpack_require__(6652);
// EXTERNAL MODULE: ./node_modules/@smithy/util-endpoints/dist-es/index.js + 34 modules
var _smithy_util_endpoints_dist_es = __webpack_require__(3875);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/endpoint/ruleset.js
const u = "required", v = "fn", w = "argv", x = "ref";
const a = true, b = "isSet", c = "booleanEquals", d = "error", e = "endpoint", f = "tree", g = "PartitionResult", h = "getAttr", i = { [u]: false, "type": "String" }, j = { [u]: true, "default": false, "type": "Boolean" }, k = { [x]: "Endpoint" }, l = { [v]: c, [w]: [{ [x]: "UseFIPS" }, true] }, m = { [v]: c, [w]: [{ [x]: "UseDualStack" }, true] }, n = {}, o = { [v]: h, [w]: [{ [x]: g }, "supportsFIPS"] }, p = { [x]: g }, q = { [v]: c, [w]: [true, { [v]: h, [w]: [p, "supportsDualStack"] }] }, r = [l], s = [m], t = [{ [x]: "Region" }];
const _data = { version: "1.0", parameters: { Region: i, UseDualStack: j, UseFIPS: j, Endpoint: i }, rules: [{ conditions: [{ [v]: b, [w]: [k] }], rules: [{ conditions: r, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d }, { conditions: s, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d }, { endpoint: { url: k, properties: n, headers: n }, type: e }], type: f }, { conditions: [{ [v]: b, [w]: t }], rules: [{ conditions: [{ [v]: "aws.partition", [w]: t, assign: g }], rules: [{ conditions: [l, m], rules: [{ conditions: [{ [v]: c, [w]: [a, o] }, q], rules: [{ endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d }], type: f }, { conditions: r, rules: [{ conditions: [{ [v]: c, [w]: [o, a] }], rules: [{ conditions: [{ [v]: "stringEquals", [w]: [{ [v]: h, [w]: [p, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://portal.sso.{Region}.amazonaws.com", properties: n, headers: n }, type: e }, { endpoint: { url: "https://portal.sso-fips.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS is enabled but this partition does not support FIPS", type: d }], type: f }, { conditions: s, rules: [{ conditions: [q], rules: [{ endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "DualStack is enabled but this partition does not support DualStack", type: d }], type: f }, { endpoint: { url: "https://portal.sso.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }], type: f }, { error: "Invalid Configuration: Missing Region", type: d }] };
const ruleSet = _data;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/endpoint/endpointResolver.js



const defaultEndpointResolver = (endpointParams, context = {}) => {
    return (0,_smithy_util_endpoints_dist_es/* resolveEndpoint */.sO)(ruleSet, {
        endpointParams: endpointParams,
        logger: context.logger,
    });
};
_smithy_util_endpoints_dist_es/* customEndpointFunctions */.mw.aws = util_endpoints_dist_es/* awsEndpointFunctions */.UF;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/runtimeConfig.shared.js








const getRuntimeConfig = (config) => {
    return {
        apiVersion: "2019-06-10",
        base64Decoder: config?.base64Decoder ?? util_base64_dist_es/* fromBase64 */.E,
        base64Encoder: config?.base64Encoder ?? util_base64_dist_es/* toBase64 */.n,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultSSOHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
            {
                schemeId: "aws.auth#sigv4",
                identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
                signer: new AwsSdkSigV4Signer/* AwsSdkSigV4Signer */.f(),
            },
            {
                schemeId: "smithy.api#noAuth",
                identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                signer: new core_dist_es/* NoAuthSigner */.mR(),
            },
        ],
        logger: config?.logger ?? new smithy_client_dist_es/* NoOpLogger */.N4(),
        serviceId: config?.serviceId ?? "SSO",
        urlParser: config?.urlParser ?? url_parser_dist_es/* parseUrl */.D,
        utf8Decoder: config?.utf8Decoder ?? util_utf8_dist_es/* fromUtf8 */.ar,
        utf8Encoder: config?.utf8Encoder ?? util_utf8_dist_es/* toUtf8 */.Pq,
    };
};

// EXTERNAL MODULE: ./node_modules/@smithy/util-defaults-mode-node/dist-es/index.js + 3 modules
var util_defaults_mode_node_dist_es = __webpack_require__(4321);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/runtimeConfig.js














const runtimeConfig_getRuntimeConfig = (config) => {
    (0,smithy_client_dist_es/* emitWarningIfUnsupportedVersion */.I9)(process.version);
    const defaultsMode = (0,util_defaults_mode_node_dist_es/* resolveDefaultsModeConfig */.I)(config);
    const defaultConfigProvider = () => defaultsMode().then(smithy_client_dist_es/* loadConfigsForDefaultMode */.lT);
    const clientSharedValues = getRuntimeConfig(config);
    (0,emitWarningIfUnsupportedVersion/* emitWarningIfUnsupportedVersion */.I)(process.version);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? util_body_length_node_dist_es/* calculateBodyLength */.n,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ??
            (0,util_user_agent_node_dist_es/* defaultUserAgent */.mJ)({ serviceId: clientSharedValues.serviceId, clientVersion: package_namespaceObject.rE }),
        maxAttempts: config?.maxAttempts ?? (0,node_config_provider_dist_es/* loadConfig */.Z)(middleware_retry_dist_es/* NODE_MAX_ATTEMPT_CONFIG_OPTIONS */.qs),
        region: config?.region ?? (0,node_config_provider_dist_es/* loadConfig */.Z)(config_resolver_dist_es/* NODE_REGION_CONFIG_OPTIONS */.GG, config_resolver_dist_es/* NODE_REGION_CONFIG_FILE_OPTIONS */.zH),
        requestHandler: node_http_handler_dist_es/* NodeHttpHandler */.$c.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ??
            (0,node_config_provider_dist_es/* loadConfig */.Z)({
                ...middleware_retry_dist_es/* NODE_RETRY_MODE_CONFIG_OPTIONS */.kN,
                default: async () => (await defaultConfigProvider()).retryMode || util_retry_dist_es/* DEFAULT_RETRY_MODE */.L0,
            }),
        sha256: config?.sha256 ?? hash_node_dist_es/* Hash */.V.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? node_http_handler_dist_es/* streamCollector */.kv,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (0,node_config_provider_dist_es/* loadConfig */.Z)(config_resolver_dist_es/* NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS */.e$),
        useFipsEndpoint: config?.useFipsEndpoint ?? (0,node_config_provider_dist_es/* loadConfig */.Z)(config_resolver_dist_es/* NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS */.Ko),
    };
};

// EXTERNAL MODULE: ./node_modules/@aws-sdk/region-config-resolver/dist-es/index.js + 3 modules
var region_config_resolver_dist_es = __webpack_require__(4547);
// EXTERNAL MODULE: ./node_modules/@smithy/protocol-http/dist-es/index.js + 5 modules
var protocol_http_dist_es = __webpack_require__(5479);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/auth/httpAuthExtensionConfiguration.js
const getHttpAuthExtensionConfiguration = (runtimeConfig) => {
    const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
    let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
    let _credentials = runtimeConfig.credentials;
    return {
        setHttpAuthScheme(httpAuthScheme) {
            const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
            if (index === -1) {
                _httpAuthSchemes.push(httpAuthScheme);
            }
            else {
                _httpAuthSchemes.splice(index, 1, httpAuthScheme);
            }
        },
        httpAuthSchemes() {
            return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
            _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
            return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
            _credentials = credentials;
        },
        credentials() {
            return _credentials;
        },
    };
};
const resolveHttpAuthRuntimeConfig = (config) => {
    return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials(),
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/runtimeExtensions.js




const asPartial = (t) => t;
const resolveRuntimeExtensions = (runtimeConfig, extensions) => {
    const extensionConfiguration = {
        ...asPartial((0,region_config_resolver_dist_es/* getAwsRegionExtensionConfiguration */.Rq)(runtimeConfig)),
        ...asPartial((0,smithy_client_dist_es/* getDefaultExtensionConfiguration */.xA)(runtimeConfig)),
        ...asPartial((0,protocol_http_dist_es/* getHttpHandlerExtensionConfiguration */.eS)(runtimeConfig)),
        ...asPartial(getHttpAuthExtensionConfiguration(runtimeConfig)),
    };
    extensions.forEach((extension) => extension.configure(extensionConfiguration));
    return {
        ...runtimeConfig,
        ...(0,region_config_resolver_dist_es/* resolveAwsRegionExtensionConfiguration */.$3)(extensionConfiguration),
        ...(0,smithy_client_dist_es/* resolveDefaultRuntimeConfig */.uv)(extensionConfiguration),
        ...(0,protocol_http_dist_es/* resolveHttpHandlerRuntimeConfig */.jt)(extensionConfiguration),
        ...resolveHttpAuthRuntimeConfig(extensionConfiguration),
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso/dist-es/SSOClient.js















class SSOClient extends smithy_client_dist_es/* Client */.Kj {
    constructor(...[configuration]) {
        const _config_0 = runtimeConfig_getRuntimeConfig(configuration || {});
        const _config_1 = resolveClientEndpointParameters(_config_0);
        const _config_2 = (0,config_resolver_dist_es/* resolveRegionConfig */.TD)(_config_1);
        const _config_3 = (0,dist_es/* resolveEndpointConfig */.Co)(_config_2);
        const _config_4 = (0,middleware_retry_dist_es/* resolveRetryConfig */.$z)(_config_3);
        const _config_5 = (0,middleware_host_header_dist_es/* resolveHostHeaderConfig */.OV)(_config_4);
        const _config_6 = (0,middleware_user_agent_dist_es/* resolveUserAgentConfig */.Dc)(_config_5);
        const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
        const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
        super(_config_8);
        this.config = _config_8;
        this.middlewareStack.use((0,middleware_retry_dist_es/* getRetryPlugin */.ey)(this.config));
        this.middlewareStack.use((0,middleware_content_length_dist_es/* getContentLengthPlugin */.vK)(this.config));
        this.middlewareStack.use((0,middleware_host_header_dist_es/* getHostHeaderPlugin */.TC)(this.config));
        this.middlewareStack.use((0,middleware_logger_dist_es/* getLoggerPlugin */.Y7)(this.config));
        this.middlewareStack.use((0,middleware_recursion_detection_dist_es/* getRecursionDetectionPlugin */.n4)(this.config));
        this.middlewareStack.use((0,middleware_user_agent_dist_es/* getUserAgentPlugin */.sM)(this.config));
        this.middlewareStack.use((0,core_dist_es/* getHttpAuthSchemeEndpointRuleSetPlugin */.wB)(this.config, {
            httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
            identityProviderConfigProvider: this.getIdentityProviderConfigProvider(),
        }));
        this.middlewareStack.use((0,core_dist_es/* getHttpSigningPlugin */.lW)(this.config));
    }
    destroy() {
        super.destroy();
    }
    getDefaultHttpAuthSchemeParametersProvider() {
        return defaultSSOHttpAuthSchemeParametersProvider;
    }
    getIdentityProviderConfigProvider() {
        return async (config) => new core_dist_es/* DefaultIdentityProviderConfig */.h$({
            "aws.auth#sigv4": config.credentials,
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-sso/dist-es/loadSso.js




/***/ }),

/***/ 7819:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  fromTokenFile: () => (/* reexport */ fromTokenFile),
  fromWebToken: () => (/* reexport */ fromWebToken)
});

// EXTERNAL MODULE: ./node_modules/@smithy/property-provider/dist-es/index.js + 6 modules
var dist_es = __webpack_require__(8112);
// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(9896);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromWebToken.js
const fromWebToken = (init) => async () => {
    init.logger?.debug("@aws-sdk/credential-provider-web-identity", "fromWebToken");
    const { roleArn, roleSessionName, webIdentityToken, providerId, policyArns, policy, durationSeconds } = init;
    let { roleAssumerWithWebIdentity } = init;
    if (!roleAssumerWithWebIdentity) {
        const { getDefaultRoleAssumerWithWebIdentity } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 1777));
        roleAssumerWithWebIdentity = getDefaultRoleAssumerWithWebIdentity({
            ...init.clientConfig,
            credentialProviderLogger: init.logger,
            parentClientConfig: init.parentClientConfig,
        }, init.clientPlugins);
    }
    return roleAssumerWithWebIdentity({
        RoleArn: roleArn,
        RoleSessionName: roleSessionName ?? `aws-sdk-js-session-${Date.now()}`,
        WebIdentityToken: webIdentityToken,
        ProviderId: providerId,
        PolicyArns: policyArns,
        Policy: policy,
        DurationSeconds: durationSeconds,
    });
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-web-identity/dist-es/fromTokenFile.js



const ENV_TOKEN_FILE = "AWS_WEB_IDENTITY_TOKEN_FILE";
const ENV_ROLE_ARN = "AWS_ROLE_ARN";
const ENV_ROLE_SESSION_NAME = "AWS_ROLE_SESSION_NAME";
const fromTokenFile = (init = {}) => async () => {
    init.logger?.debug("@aws-sdk/credential-provider-web-identity", "fromTokenFile");
    const webIdentityTokenFile = init?.webIdentityTokenFile ?? process.env[ENV_TOKEN_FILE];
    const roleArn = init?.roleArn ?? process.env[ENV_ROLE_ARN];
    const roleSessionName = init?.roleSessionName ?? process.env[ENV_ROLE_SESSION_NAME];
    if (!webIdentityTokenFile || !roleArn) {
        throw new dist_es/* CredentialsProviderError */.C1("Web identity configuration not specified");
    }
    return fromWebToken({
        ...init,
        webIdentityToken: (0,external_fs_.readFileSync)(webIdentityTokenFile, { encoding: "ascii" }),
        roleArn,
        roleSessionName,
    })();
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/credential-provider-web-identity/dist-es/index.js




/***/ }),

/***/ 1777:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultRoleAssumerWithWebIdentity: () => (/* reexport safe */ _aws_sdk_client_sts__WEBPACK_IMPORTED_MODULE_0__.I$)
/* harmony export */ });
/* harmony import */ var _aws_sdk_client_sts__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6800);




/***/ }),

/***/ 1095:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OV: () => (/* binding */ resolveHostHeaderConfig),
/* harmony export */   TC: () => (/* binding */ getHostHeaderPlugin)
/* harmony export */ });
/* unused harmony exports hostHeaderMiddleware, hostHeaderMiddlewareOptions */
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5479);

function resolveHostHeaderConfig(input) {
    return input;
}
const hostHeaderMiddleware = (options) => (next) => async (args) => {
    if (!_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__/* .HttpRequest */ .Kd.isInstance(args.request))
        return next(args);
    const { request } = args;
    const { handlerProtocol = "" } = options.requestHandler.metadata || {};
    if (handlerProtocol.indexOf("h2") >= 0 && !request.headers[":authority"]) {
        delete request.headers["host"];
        request.headers[":authority"] = request.hostname + (request.port ? ":" + request.port : "");
    }
    else if (!request.headers["host"]) {
        let host = request.hostname;
        if (request.port != null)
            host += `:${request.port}`;
        request.headers["host"] = host;
    }
    return next(args);
};
const hostHeaderMiddlewareOptions = {
    name: "hostHeaderMiddleware",
    step: "build",
    priority: "low",
    tags: ["HOST"],
    override: true,
};
const getHostHeaderPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(hostHeaderMiddleware(options), hostHeaderMiddlewareOptions);
    },
});


/***/ }),

/***/ 9359:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y7: () => (/* reexport */ getLoggerPlugin)
});

// UNUSED EXPORTS: loggerMiddleware, loggerMiddlewareOptions

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-logger/dist-es/loggerMiddleware.js
const loggerMiddleware = () => (next, context) => async (args) => {
    try {
        const response = await next(args);
        const { clientName, commandName, logger, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog, overrideOutputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
        const outputFilterSensitiveLog = overrideOutputFilterSensitiveLog ?? context.outputFilterSensitiveLog;
        const { $metadata, ...outputWithoutMetadata } = response.output;
        logger?.info?.({
            clientName,
            commandName,
            input: inputFilterSensitiveLog(args.input),
            output: outputFilterSensitiveLog(outputWithoutMetadata),
            metadata: $metadata,
        });
        return response;
    }
    catch (error) {
        const { clientName, commandName, logger, dynamoDbDocumentClientOptions = {} } = context;
        const { overrideInputFilterSensitiveLog } = dynamoDbDocumentClientOptions;
        const inputFilterSensitiveLog = overrideInputFilterSensitiveLog ?? context.inputFilterSensitiveLog;
        logger?.error?.({
            clientName,
            commandName,
            input: inputFilterSensitiveLog(args.input),
            error,
            metadata: error.$metadata,
        });
        throw error;
    }
};
const loggerMiddlewareOptions = {
    name: "loggerMiddleware",
    tags: ["LOGGER"],
    step: "initialize",
    override: true,
};
const getLoggerPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(loggerMiddleware(), loggerMiddlewareOptions);
    },
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-logger/dist-es/index.js



/***/ }),

/***/ 8377:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   n4: () => (/* binding */ getRecursionDetectionPlugin)
/* harmony export */ });
/* unused harmony exports recursionDetectionMiddleware, addRecursionDetectionMiddlewareOptions */
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5479);

const TRACE_ID_HEADER_NAME = "X-Amzn-Trace-Id";
const ENV_LAMBDA_FUNCTION_NAME = "AWS_LAMBDA_FUNCTION_NAME";
const ENV_TRACE_ID = "_X_AMZN_TRACE_ID";
const recursionDetectionMiddleware = (options) => (next) => async (args) => {
    const { request } = args;
    if (!_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__/* .HttpRequest */ .Kd.isInstance(request) ||
        options.runtime !== "node" ||
        request.headers.hasOwnProperty(TRACE_ID_HEADER_NAME)) {
        return next(args);
    }
    const functionName = process.env[ENV_LAMBDA_FUNCTION_NAME];
    const traceId = process.env[ENV_TRACE_ID];
    const nonEmptyString = (str) => typeof str === "string" && str.length > 0;
    if (nonEmptyString(functionName) && nonEmptyString(traceId)) {
        request.headers[TRACE_ID_HEADER_NAME] = traceId;
    }
    return next({
        ...args,
        request,
    });
};
const addRecursionDetectionMiddlewareOptions = {
    step: "build",
    tags: ["RECURSION_DETECTION"],
    name: "recursionDetectionMiddleware",
    override: true,
    priority: "low",
};
const getRecursionDetectionPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(recursionDetectionMiddleware(options), addRecursionDetectionMiddlewareOptions);
    },
});


/***/ }),

/***/ 499:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  sM: () => (/* reexport */ getUserAgentPlugin),
  Dc: () => (/* reexport */ resolveUserAgentConfig)
});

// UNUSED EXPORTS: getUserAgentMiddlewareOptions, userAgentMiddleware

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-user-agent/dist-es/configurations.js
function resolveUserAgentConfig(input) {
    return {
        ...input,
        customUserAgent: typeof input.customUserAgent === "string" ? [[input.customUserAgent]] : input.customUserAgent,
    };
}

// EXTERNAL MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/index.js + 9 modules
var dist_es = __webpack_require__(6652);
// EXTERNAL MODULE: ./node_modules/@smithy/protocol-http/dist-es/index.js + 5 modules
var protocol_http_dist_es = __webpack_require__(5479);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-user-agent/dist-es/constants.js
const USER_AGENT = "user-agent";
const X_AMZ_USER_AGENT = "x-amz-user-agent";
const SPACE = " ";
const UA_NAME_SEPARATOR = "/";
const UA_NAME_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w]/g;
const UA_VALUE_ESCAPE_REGEX = /[^\!\$\%\&\'\*\+\-\.\^\_\`\|\~\d\w\#]/g;
const UA_ESCAPE_CHAR = "-";

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-user-agent/dist-es/user-agent-middleware.js



const userAgentMiddleware = (options) => (next, context) => async (args) => {
    const { request } = args;
    if (!protocol_http_dist_es/* HttpRequest */.Kd.isInstance(request))
        return next(args);
    const { headers } = request;
    const userAgent = context?.userAgent?.map(escapeUserAgent) || [];
    const defaultUserAgent = (await options.defaultUserAgentProvider()).map(escapeUserAgent);
    const customUserAgent = options?.customUserAgent?.map(escapeUserAgent) || [];
    const prefix = (0,dist_es/* getUserAgentPrefix */.vL)();
    const sdkUserAgentValue = (prefix ? [prefix] : [])
        .concat([...defaultUserAgent, ...userAgent, ...customUserAgent])
        .join(SPACE);
    const normalUAValue = [
        ...defaultUserAgent.filter((section) => section.startsWith("aws-sdk-")),
        ...customUserAgent,
    ].join(SPACE);
    if (options.runtime !== "browser") {
        if (normalUAValue) {
            headers[X_AMZ_USER_AGENT] = headers[X_AMZ_USER_AGENT]
                ? `${headers[USER_AGENT]} ${normalUAValue}`
                : normalUAValue;
        }
        headers[USER_AGENT] = sdkUserAgentValue;
    }
    else {
        headers[X_AMZ_USER_AGENT] = sdkUserAgentValue;
    }
    return next({
        ...args,
        request,
    });
};
const escapeUserAgent = (userAgentPair) => {
    const name = userAgentPair[0]
        .split(UA_NAME_SEPARATOR)
        .map((part) => part.replace(UA_NAME_ESCAPE_REGEX, UA_ESCAPE_CHAR))
        .join(UA_NAME_SEPARATOR);
    const version = userAgentPair[1]?.replace(UA_VALUE_ESCAPE_REGEX, UA_ESCAPE_CHAR);
    const prefixSeparatorIndex = name.indexOf(UA_NAME_SEPARATOR);
    const prefix = name.substring(0, prefixSeparatorIndex);
    let uaName = name.substring(prefixSeparatorIndex + 1);
    if (prefix === "api") {
        uaName = uaName.toLowerCase();
    }
    return [prefix, uaName, version]
        .filter((item) => item && item.length > 0)
        .reduce((acc, item, index) => {
        switch (index) {
            case 0:
                return item;
            case 1:
                return `${acc}/${item}`;
            default:
                return `${acc}#${item}`;
        }
    }, "");
};
const getUserAgentMiddlewareOptions = {
    name: "getUserAgentMiddleware",
    step: "build",
    priority: "low",
    tags: ["SET_USER_AGENT", "USER_AGENT"],
    override: true,
};
const getUserAgentPlugin = (config) => ({
    applyToStack: (clientStack) => {
        clientStack.add(userAgentMiddleware(config), getUserAgentMiddlewareOptions);
    },
});

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js




/***/ }),

/***/ 4547:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Rq: () => (/* reexport */ getAwsRegionExtensionConfiguration),
  $3: () => (/* reexport */ resolveAwsRegionExtensionConfiguration)
});

// UNUSED EXPORTS: NODE_REGION_CONFIG_FILE_OPTIONS, NODE_REGION_CONFIG_OPTIONS, REGION_ENV_NAME, REGION_INI_NAME, resolveRegionConfig

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/region-config-resolver/dist-es/extensions/index.js
const getAwsRegionExtensionConfiguration = (runtimeConfig) => {
    let runtimeConfigRegion = async () => {
        if (runtimeConfig.region === undefined) {
            throw new Error("Region is missing from runtimeConfig");
        }
        const region = runtimeConfig.region;
        if (typeof region === "string") {
            return region;
        }
        return region();
    };
    return {
        setRegion(region) {
            runtimeConfigRegion = region;
        },
        region() {
            return runtimeConfigRegion;
        },
    };
};
const resolveAwsRegionExtensionConfiguration = (awsRegionExtensionConfiguration) => {
    return {
        region: awsRegionExtensionConfiguration.region(),
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/config.js
const REGION_ENV_NAME = "AWS_REGION";
const REGION_INI_NAME = "region";
const NODE_REGION_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[REGION_ENV_NAME],
    configFileSelector: (profile) => profile[REGION_INI_NAME],
    default: () => {
        throw new Error("Region is missing");
    },
};
const NODE_REGION_CONFIG_FILE_OPTIONS = {
    preferredFile: "credentials",
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/region-config-resolver/dist-es/regionConfig/index.js



;// CONCATENATED MODULE: ./node_modules/@aws-sdk/region-config-resolver/dist-es/index.js




/***/ }),

/***/ 3553:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  CreateTokenCommand: () => (/* reexport */ CreateTokenCommand),
  SSOOIDCClient: () => (/* reexport */ SSOOIDCClient)
});

// EXTERNAL MODULE: ./node_modules/@smithy/middleware-endpoint/dist-es/index.js + 10 modules
var dist_es = __webpack_require__(9389);
// EXTERNAL MODULE: ./node_modules/@smithy/middleware-serde/dist-es/index.js + 3 modules
var middleware_serde_dist_es = __webpack_require__(1208);
// EXTERNAL MODULE: ./node_modules/@smithy/smithy-client/dist-es/index.js + 25 modules
var smithy_client_dist_es = __webpack_require__(678);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso-oidc/dist-es/endpoint/EndpointParameters.js
const resolveClientEndpointParameters = (options) => {
    return {
        ...options,
        useDualstackEndpoint: options.useDualstackEndpoint ?? false,
        useFipsEndpoint: options.useFipsEndpoint ?? false,
        defaultSigningName: "sso-oauth",
    };
};
const commonParams = {
    UseFIPS: { type: "builtInParams", name: "useFipsEndpoint" },
    Endpoint: { type: "builtInParams", name: "endpoint" },
    Region: { type: "builtInParams", name: "region" },
    UseDualStack: { type: "builtInParams", name: "useDualstackEndpoint" },
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso-oidc/dist-es/models/SSOOIDCServiceException.js


class SSOOIDCServiceException extends smithy_client_dist_es/* ServiceException */.TJ {
    constructor(options) {
        super(options);
        Object.setPrototypeOf(this, SSOOIDCServiceException.prototype);
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso-oidc/dist-es/models/models_0.js


class AccessDeniedException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "AccessDeniedException",
            $fault: "client",
            ...opts,
        });
        this.name = "AccessDeniedException";
        this.$fault = "client";
        Object.setPrototypeOf(this, AccessDeniedException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class AuthorizationPendingException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "AuthorizationPendingException",
            $fault: "client",
            ...opts,
        });
        this.name = "AuthorizationPendingException";
        this.$fault = "client";
        Object.setPrototypeOf(this, AuthorizationPendingException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class ExpiredTokenException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "ExpiredTokenException",
            $fault: "client",
            ...opts,
        });
        this.name = "ExpiredTokenException";
        this.$fault = "client";
        Object.setPrototypeOf(this, ExpiredTokenException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class InternalServerException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InternalServerException",
            $fault: "server",
            ...opts,
        });
        this.name = "InternalServerException";
        this.$fault = "server";
        Object.setPrototypeOf(this, InternalServerException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class InvalidClientException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidClientException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidClientException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class InvalidGrantException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidGrantException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidGrantException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidGrantException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class InvalidRequestException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidRequestException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidRequestException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidRequestException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class InvalidScopeException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidScopeException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidScopeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidScopeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class SlowDownException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "SlowDownException",
            $fault: "client",
            ...opts,
        });
        this.name = "SlowDownException";
        this.$fault = "client";
        Object.setPrototypeOf(this, SlowDownException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class UnauthorizedClientException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "UnauthorizedClientException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnauthorizedClientException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnauthorizedClientException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class UnsupportedGrantTypeException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "UnsupportedGrantTypeException",
            $fault: "client",
            ...opts,
        });
        this.name = "UnsupportedGrantTypeException";
        this.$fault = "client";
        Object.setPrototypeOf(this, UnsupportedGrantTypeException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
class InvalidRequestRegionException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidRequestRegionException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidRequestRegionException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidRequestRegionException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
        this.endpoint = opts.endpoint;
        this.region = opts.region;
    }
}
class InvalidClientMetadataException extends SSOOIDCServiceException {
    constructor(opts) {
        super({
            name: "InvalidClientMetadataException",
            $fault: "client",
            ...opts,
        });
        this.name = "InvalidClientMetadataException";
        this.$fault = "client";
        Object.setPrototypeOf(this, InvalidClientMetadataException.prototype);
        this.error = opts.error;
        this.error_description = opts.error_description;
    }
}
const CreateTokenRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.clientSecret && { clientSecret: smithy_client_dist_es/* SENSITIVE_STRING */.$H }),
    ...(obj.refreshToken && { refreshToken: smithy_client_dist_es/* SENSITIVE_STRING */.$H }),
});
const CreateTokenResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: smithy_client_dist_es/* SENSITIVE_STRING */.$H }),
    ...(obj.refreshToken && { refreshToken: smithy_client_dist_es/* SENSITIVE_STRING */.$H }),
    ...(obj.idToken && { idToken: smithy_client_dist_es/* SENSITIVE_STRING */.$H }),
});
const CreateTokenWithIAMRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.refreshToken && { refreshToken: SENSITIVE_STRING }),
    ...(obj.assertion && { assertion: SENSITIVE_STRING }),
    ...(obj.subjectToken && { subjectToken: SENSITIVE_STRING }),
});
const CreateTokenWithIAMResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.accessToken && { accessToken: SENSITIVE_STRING }),
    ...(obj.refreshToken && { refreshToken: SENSITIVE_STRING }),
    ...(obj.idToken && { idToken: SENSITIVE_STRING }),
});
const RegisterClientResponseFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
});
const StartDeviceAuthorizationRequestFilterSensitiveLog = (obj) => ({
    ...obj,
    ...(obj.clientSecret && { clientSecret: SENSITIVE_STRING }),
});

// EXTERNAL MODULE: ./node_modules/@aws-sdk/core/dist-es/protocols/json/parseJsonBody.js
var parseJsonBody = __webpack_require__(7335);
// EXTERNAL MODULE: ./node_modules/@smithy/core/dist-es/index.js + 17 modules
var core_dist_es = __webpack_require__(2972);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso-oidc/dist-es/protocols/Aws_restJson1.js





const se_CreateTokenCommand = async (input, context) => {
    const b = (0,core_dist_es/* requestBuilder */.lI)(input, context);
    const headers = {
        "content-type": "application/json",
    };
    b.bp("/token");
    let body;
    body = JSON.stringify((0,smithy_client_dist_es/* take */.s)(input, {
        clientId: [],
        clientSecret: [],
        code: [],
        deviceCode: [],
        grantType: [],
        redirectUri: [],
        refreshToken: [],
        scope: (_) => (0,smithy_client_dist_es/* _json */.Ss)(_),
    }));
    b.m("POST").h(headers).b(body);
    return b.build();
};
const se_CreateTokenWithIAMCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {
        "content-type": "application/json",
    };
    b.bp("/token");
    const query = map({
        [_ai]: [, "t"],
    });
    let body;
    body = JSON.stringify(take(input, {
        assertion: [],
        clientId: [],
        code: [],
        grantType: [],
        redirectUri: [],
        refreshToken: [],
        requestedTokenType: [],
        scope: (_) => _json(_),
        subjectToken: [],
        subjectTokenType: [],
    }));
    b.m("POST").h(headers).q(query).b(body);
    return b.build();
};
const se_RegisterClientCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {
        "content-type": "application/json",
    };
    b.bp("/client/register");
    let body;
    body = JSON.stringify(take(input, {
        clientName: [],
        clientType: [],
        scopes: (_) => _json(_),
    }));
    b.m("POST").h(headers).b(body);
    return b.build();
};
const se_StartDeviceAuthorizationCommand = async (input, context) => {
    const b = rb(input, context);
    const headers = {
        "content-type": "application/json",
    };
    b.bp("/device_authorization");
    let body;
    body = JSON.stringify(take(input, {
        clientId: [],
        clientSecret: [],
        startUrl: [],
    }));
    b.m("POST").h(headers).b(body);
    return b.build();
};
const de_CreateTokenCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = (0,smithy_client_dist_es/* map */.Tj)({
        $metadata: deserializeMetadata(output),
    });
    const data = (0,smithy_client_dist_es/* expectNonNull */.Y0)((0,smithy_client_dist_es/* expectObject */.Xk)(await (0,parseJsonBody/* parseJsonBody */.Y2)(output.body, context)), "body");
    const doc = (0,smithy_client_dist_es/* take */.s)(data, {
        accessToken: smithy_client_dist_es/* expectString */.lK,
        expiresIn: smithy_client_dist_es/* expectInt32 */.ET,
        idToken: smithy_client_dist_es/* expectString */.lK,
        refreshToken: smithy_client_dist_es/* expectString */.lK,
        tokenType: smithy_client_dist_es/* expectString */.lK,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_CreateTokenWithIAMCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        accessToken: __expectString,
        expiresIn: __expectInt32,
        idToken: __expectString,
        issuedTokenType: __expectString,
        refreshToken: __expectString,
        scope: _json,
        tokenType: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_RegisterClientCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        authorizationEndpoint: __expectString,
        clientId: __expectString,
        clientIdIssuedAt: __expectLong,
        clientSecret: __expectString,
        clientSecretExpiresAt: __expectLong,
        tokenEndpoint: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_StartDeviceAuthorizationCommand = async (output, context) => {
    if (output.statusCode !== 200 && output.statusCode >= 300) {
        return de_CommandError(output, context);
    }
    const contents = map({
        $metadata: deserializeMetadata(output),
    });
    const data = __expectNonNull(__expectObject(await parseBody(output.body, context)), "body");
    const doc = take(data, {
        deviceCode: __expectString,
        expiresIn: __expectInt32,
        interval: __expectInt32,
        userCode: __expectString,
        verificationUri: __expectString,
        verificationUriComplete: __expectString,
    });
    Object.assign(contents, doc);
    return contents;
};
const de_CommandError = async (output, context) => {
    const parsedOutput = {
        ...output,
        body: await (0,parseJsonBody/* parseJsonErrorBody */.CG)(output.body, context),
    };
    const errorCode = (0,parseJsonBody/* loadRestJsonErrorCode */.cJ)(output, parsedOutput.body);
    switch (errorCode) {
        case "AccessDeniedException":
        case "com.amazonaws.ssooidc#AccessDeniedException":
            throw await de_AccessDeniedExceptionRes(parsedOutput, context);
        case "AuthorizationPendingException":
        case "com.amazonaws.ssooidc#AuthorizationPendingException":
            throw await de_AuthorizationPendingExceptionRes(parsedOutput, context);
        case "ExpiredTokenException":
        case "com.amazonaws.ssooidc#ExpiredTokenException":
            throw await de_ExpiredTokenExceptionRes(parsedOutput, context);
        case "InternalServerException":
        case "com.amazonaws.ssooidc#InternalServerException":
            throw await de_InternalServerExceptionRes(parsedOutput, context);
        case "InvalidClientException":
        case "com.amazonaws.ssooidc#InvalidClientException":
            throw await de_InvalidClientExceptionRes(parsedOutput, context);
        case "InvalidGrantException":
        case "com.amazonaws.ssooidc#InvalidGrantException":
            throw await de_InvalidGrantExceptionRes(parsedOutput, context);
        case "InvalidRequestException":
        case "com.amazonaws.ssooidc#InvalidRequestException":
            throw await de_InvalidRequestExceptionRes(parsedOutput, context);
        case "InvalidScopeException":
        case "com.amazonaws.ssooidc#InvalidScopeException":
            throw await de_InvalidScopeExceptionRes(parsedOutput, context);
        case "SlowDownException":
        case "com.amazonaws.ssooidc#SlowDownException":
            throw await de_SlowDownExceptionRes(parsedOutput, context);
        case "UnauthorizedClientException":
        case "com.amazonaws.ssooidc#UnauthorizedClientException":
            throw await de_UnauthorizedClientExceptionRes(parsedOutput, context);
        case "UnsupportedGrantTypeException":
        case "com.amazonaws.ssooidc#UnsupportedGrantTypeException":
            throw await de_UnsupportedGrantTypeExceptionRes(parsedOutput, context);
        case "InvalidRequestRegionException":
        case "com.amazonaws.ssooidc#InvalidRequestRegionException":
            throw await de_InvalidRequestRegionExceptionRes(parsedOutput, context);
        case "InvalidClientMetadataException":
        case "com.amazonaws.ssooidc#InvalidClientMetadataException":
            throw await de_InvalidClientMetadataExceptionRes(parsedOutput, context);
        default:
            const parsedBody = parsedOutput.body;
            return throwDefaultError({
                output,
                parsedBody,
                errorCode,
            });
    }
};
const throwDefaultError = (0,smithy_client_dist_es/* withBaseException */.jr)(SSOOIDCServiceException);
const de_AccessDeniedExceptionRes = async (parsedOutput, context) => {
    const contents = (0,smithy_client_dist_es/* map */.Tj)({});
    const data = parsedOutput.body;
    const doc = (0,smithy_client_dist_es/* take */.s)(data, {
        error: smithy_client_dist_es/* expectString */.lK,
        error_description: smithy_client_dist_es/* expectString */.lK,
    });
    Object.assign(contents, doc);
    const exception = new AccessDeniedException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, parsedOutput.body);
};
const de_AuthorizationPendingExceptionRes = async (parsedOutput, context) => {
    const contents = (0,smithy_client_dist_es/* map */.Tj)({});
    const data = parsedOutput.body;
    const doc = (0,smithy_client_dist_es/* take */.s)(data, {
        error: smithy_client_dist_es/* expectString */.lK,
        error_description: smithy_client_dist_es/* expectString */.lK,
    });
    Object.assign(contents, doc);
    const exception = new AuthorizationPendingException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, parsedOutput.body);
};
const de_ExpiredTokenExceptionRes = async (parsedOutput, context) => {
    const contents = (0,smithy_client_dist_es/* map */.Tj)({});
    const data = parsedOutput.body;
    const doc = (0,smithy_client_dist_es/* take */.s)(data, {
        error: smithy_client_dist_es/* expectString */.lK,
        error_description: smithy_client_dist_es/* expectString */.lK,
    });
    Object.assign(contents, doc);
    const exception = new ExpiredTokenException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, parsedOutput.body);
};
const de_InternalServerExceptionRes = async (parsedOutput, context) => {
    const contents = (0,smithy_client_dist_es/* map */.Tj)({});
    const data = parsedOutput.body;
    const doc = (0,smithy_client_dist_es/* take */.s)(data, {
        error: smithy_client_dist_es/* expectString */.lK,
        error_description: smithy_client_dist_es/* expectString */.lK,
    });
    Object.assign(contents, doc);
    const exception = new InternalServerException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, parsedOutput.body);
};
const de_InvalidClientExceptionRes = async (parsedOutput, context) => {
    const contents = (0,smithy_client_dist_es/* map */.Tj)({});
    const data = parsedOutput.body;
    const doc = (0,smithy_client_dist_es/* take */.s)(data, {
        error: smithy_client_dist_es/* expectString */.lK,
        error_description: smithy_client_dist_es/* expectString */.lK,
    });
    Object.assign(contents, doc);
    const exception = new InvalidClientException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, parsedOutput.body);
};
const de_InvalidClientMetadataExceptionRes = async (parsedOutput, context) => {
    const contents = (0,smithy_client_dist_es/* map */.Tj)({});
    const data = parsedOutput.body;
    const doc = (0,smithy_client_dist_es/* take */.s)(data, {
        error: smithy_client_dist_es/* expectString */.lK,
        error_description: smithy_client_dist_es/* expectString */.lK,
    });
    Object.assign(contents, doc);
    const exception = new InvalidClientMetadataException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, parsedOutput.body);
};
const de_InvalidGrantExceptionRes = async (parsedOutput, context) => {
    const contents = (0,smithy_client_dist_es/* map */.Tj)({});
    const data = parsedOutput.body;
    const doc = (0,smithy_client_dist_es/* take */.s)(data, {
        error: smithy_client_dist_es/* expectString */.lK,
        error_description: smithy_client_dist_es/* expectString */.lK,
    });
    Object.assign(contents, doc);
    const exception = new InvalidGrantException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, parsedOutput.body);
};
const de_InvalidRequestExceptionRes = async (parsedOutput, context) => {
    const contents = (0,smithy_client_dist_es/* map */.Tj)({});
    const data = parsedOutput.body;
    const doc = (0,smithy_client_dist_es/* take */.s)(data, {
        error: smithy_client_dist_es/* expectString */.lK,
        error_description: smithy_client_dist_es/* expectString */.lK,
    });
    Object.assign(contents, doc);
    const exception = new InvalidRequestException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, parsedOutput.body);
};
const de_InvalidRequestRegionExceptionRes = async (parsedOutput, context) => {
    const contents = (0,smithy_client_dist_es/* map */.Tj)({});
    const data = parsedOutput.body;
    const doc = (0,smithy_client_dist_es/* take */.s)(data, {
        endpoint: smithy_client_dist_es/* expectString */.lK,
        error: smithy_client_dist_es/* expectString */.lK,
        error_description: smithy_client_dist_es/* expectString */.lK,
        region: smithy_client_dist_es/* expectString */.lK,
    });
    Object.assign(contents, doc);
    const exception = new InvalidRequestRegionException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, parsedOutput.body);
};
const de_InvalidScopeExceptionRes = async (parsedOutput, context) => {
    const contents = (0,smithy_client_dist_es/* map */.Tj)({});
    const data = parsedOutput.body;
    const doc = (0,smithy_client_dist_es/* take */.s)(data, {
        error: smithy_client_dist_es/* expectString */.lK,
        error_description: smithy_client_dist_es/* expectString */.lK,
    });
    Object.assign(contents, doc);
    const exception = new InvalidScopeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, parsedOutput.body);
};
const de_SlowDownExceptionRes = async (parsedOutput, context) => {
    const contents = (0,smithy_client_dist_es/* map */.Tj)({});
    const data = parsedOutput.body;
    const doc = (0,smithy_client_dist_es/* take */.s)(data, {
        error: smithy_client_dist_es/* expectString */.lK,
        error_description: smithy_client_dist_es/* expectString */.lK,
    });
    Object.assign(contents, doc);
    const exception = new SlowDownException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, parsedOutput.body);
};
const de_UnauthorizedClientExceptionRes = async (parsedOutput, context) => {
    const contents = (0,smithy_client_dist_es/* map */.Tj)({});
    const data = parsedOutput.body;
    const doc = (0,smithy_client_dist_es/* take */.s)(data, {
        error: smithy_client_dist_es/* expectString */.lK,
        error_description: smithy_client_dist_es/* expectString */.lK,
    });
    Object.assign(contents, doc);
    const exception = new UnauthorizedClientException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, parsedOutput.body);
};
const de_UnsupportedGrantTypeExceptionRes = async (parsedOutput, context) => {
    const contents = (0,smithy_client_dist_es/* map */.Tj)({});
    const data = parsedOutput.body;
    const doc = (0,smithy_client_dist_es/* take */.s)(data, {
        error: smithy_client_dist_es/* expectString */.lK,
        error_description: smithy_client_dist_es/* expectString */.lK,
    });
    Object.assign(contents, doc);
    const exception = new UnsupportedGrantTypeException({
        $metadata: deserializeMetadata(parsedOutput),
        ...contents,
    });
    return (0,smithy_client_dist_es/* decorateServiceException */.Mw)(exception, parsedOutput.body);
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});
const collectBodyString = (streamBody, context) => collectBody(streamBody, context).then((body) => context.utf8Encoder(body));
const isSerializableHeaderValue = (value) => value !== undefined &&
    value !== null &&
    value !== "" &&
    (!Object.getOwnPropertyNames(value).includes("length") || value.length != 0) &&
    (!Object.getOwnPropertyNames(value).includes("size") || value.size != 0);
const _ai = "aws_iam";

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso-oidc/dist-es/commands/CreateTokenCommand.js







class CreateTokenCommand extends smithy_client_dist_es/* Command */.uB
    .classBuilder()
    .ep({
    ...commonParams,
})
    .m(function (Command, cs, config, o) {
    return [
        (0,middleware_serde_dist_es/* getSerdePlugin */.TM)(config, this.serialize, this.deserialize),
        (0,dist_es/* getEndpointPlugin */.rD)(config, Command.getEndpointParameterInstructions()),
    ];
})
    .s("AWSSSOOIDCService", "CreateToken", {})
    .n("SSOOIDCClient", "CreateTokenCommand")
    .f(CreateTokenRequestFilterSensitiveLog, CreateTokenResponseFilterSensitiveLog)
    .ser(se_CreateTokenCommand)
    .de(de_CreateTokenCommand)
    .build() {
}

// EXTERNAL MODULE: ./node_modules/@aws-sdk/middleware-host-header/dist-es/index.js
var middleware_host_header_dist_es = __webpack_require__(1095);
// EXTERNAL MODULE: ./node_modules/@aws-sdk/middleware-logger/dist-es/index.js + 1 modules
var middleware_logger_dist_es = __webpack_require__(9359);
// EXTERNAL MODULE: ./node_modules/@aws-sdk/middleware-recursion-detection/dist-es/index.js
var middleware_recursion_detection_dist_es = __webpack_require__(8377);
// EXTERNAL MODULE: ./node_modules/@aws-sdk/middleware-user-agent/dist-es/index.js + 3 modules
var middleware_user_agent_dist_es = __webpack_require__(499);
// EXTERNAL MODULE: ./node_modules/@smithy/config-resolver/dist-es/index.js + 10 modules
var config_resolver_dist_es = __webpack_require__(7122);
// EXTERNAL MODULE: ./node_modules/@smithy/middleware-content-length/dist-es/index.js
var middleware_content_length_dist_es = __webpack_require__(649);
// EXTERNAL MODULE: ./node_modules/@smithy/middleware-retry/dist-es/index.js + 10 modules
var middleware_retry_dist_es = __webpack_require__(3594);
// EXTERNAL MODULE: ./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/aws_sdk/resolveAwsSdkSigV4Config.js
var resolveAwsSdkSigV4Config = __webpack_require__(4685);
// EXTERNAL MODULE: ./node_modules/@smithy/util-middleware/dist-es/index.js + 2 modules
var util_middleware_dist_es = __webpack_require__(7135);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso-oidc/dist-es/auth/httpAuthSchemeProvider.js


const defaultSSOOIDCHttpAuthSchemeParametersProvider = async (config, context, input) => {
    return {
        operation: (0,util_middleware_dist_es/* getSmithyContext */.u)(context).operation,
        region: (await (0,util_middleware_dist_es/* normalizeProvider */.t)(config.region)()) ||
            (() => {
                throw new Error("expected `region` to be configured for `aws.auth#sigv4`");
            })(),
    };
};
function createAwsAuthSigv4HttpAuthOption(authParameters) {
    return {
        schemeId: "aws.auth#sigv4",
        signingProperties: {
            name: "sso-oauth",
            region: authParameters.region,
        },
        propertiesExtractor: (config, context) => ({
            signingProperties: {
                config,
                context,
            },
        }),
    };
}
function createSmithyApiNoAuthHttpAuthOption(authParameters) {
    return {
        schemeId: "smithy.api#noAuth",
    };
}
const defaultSSOOIDCHttpAuthSchemeProvider = (authParameters) => {
    const options = [];
    switch (authParameters.operation) {
        case "CreateToken": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "RegisterClient": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        case "StartDeviceAuthorization": {
            options.push(createSmithyApiNoAuthHttpAuthOption(authParameters));
            break;
        }
        default: {
            options.push(createAwsAuthSigv4HttpAuthOption(authParameters));
        }
    }
    return options;
};
const resolveHttpAuthSchemeConfig = (config) => {
    const config_0 = (0,resolveAwsSdkSigV4Config/* resolveAwsSdkSigV4Config */.h)(config);
    return {
        ...config_0,
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso-oidc/package.json
const package_namespaceObject = {"rE":"3.549.0"};
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso-oidc/dist-es/credentialDefaultProvider.js
const defaultProvider = ((input) => {
    return () => Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 8257)).then(({ defaultProvider }) => defaultProvider(input)());
});

// EXTERNAL MODULE: ./node_modules/@aws-sdk/core/dist-es/client/emitWarningIfUnsupportedVersion.js
var emitWarningIfUnsupportedVersion = __webpack_require__(2458);
// EXTERNAL MODULE: ./node_modules/@aws-sdk/util-user-agent-node/dist-es/index.js + 3 modules
var util_user_agent_node_dist_es = __webpack_require__(3058);
// EXTERNAL MODULE: ./node_modules/@smithy/hash-node/dist-es/index.js
var hash_node_dist_es = __webpack_require__(1701);
// EXTERNAL MODULE: ./node_modules/@smithy/node-config-provider/dist-es/index.js + 4 modules
var node_config_provider_dist_es = __webpack_require__(1881);
// EXTERNAL MODULE: ./node_modules/@smithy/node-http-handler/dist-es/index.js + 13 modules
var node_http_handler_dist_es = __webpack_require__(4616);
// EXTERNAL MODULE: ./node_modules/@smithy/util-body-length-node/dist-es/index.js + 1 modules
var util_body_length_node_dist_es = __webpack_require__(7809);
// EXTERNAL MODULE: ./node_modules/@smithy/util-retry/dist-es/index.js + 8 modules
var util_retry_dist_es = __webpack_require__(3323);
// EXTERNAL MODULE: ./node_modules/@aws-sdk/core/dist-es/httpAuthSchemes/aws_sdk/AwsSdkSigV4Signer.js + 4 modules
var AwsSdkSigV4Signer = __webpack_require__(1228);
// EXTERNAL MODULE: ./node_modules/@smithy/url-parser/dist-es/index.js + 1 modules
var url_parser_dist_es = __webpack_require__(2641);
// EXTERNAL MODULE: ./node_modules/@smithy/util-base64/dist-es/index.js + 2 modules
var util_base64_dist_es = __webpack_require__(4572);
// EXTERNAL MODULE: ./node_modules/@smithy/util-utf8/dist-es/index.js + 3 modules
var util_utf8_dist_es = __webpack_require__(3197);
// EXTERNAL MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/index.js + 9 modules
var util_endpoints_dist_es = __webpack_require__(6652);
// EXTERNAL MODULE: ./node_modules/@smithy/util-endpoints/dist-es/index.js + 34 modules
var _smithy_util_endpoints_dist_es = __webpack_require__(3875);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso-oidc/dist-es/endpoint/ruleset.js
const u = "required", v = "fn", w = "argv", x = "ref";
const a = true, b = "isSet", c = "booleanEquals", d = "error", e = "endpoint", f = "tree", g = "PartitionResult", h = "getAttr", i = { [u]: false, "type": "String" }, j = { [u]: true, "default": false, "type": "Boolean" }, k = { [x]: "Endpoint" }, l = { [v]: c, [w]: [{ [x]: "UseFIPS" }, true] }, m = { [v]: c, [w]: [{ [x]: "UseDualStack" }, true] }, n = {}, o = { [v]: h, [w]: [{ [x]: g }, "supportsFIPS"] }, p = { [x]: g }, q = { [v]: c, [w]: [true, { [v]: h, [w]: [p, "supportsDualStack"] }] }, r = [l], s = [m], t = [{ [x]: "Region" }];
const _data = { version: "1.0", parameters: { Region: i, UseDualStack: j, UseFIPS: j, Endpoint: i }, rules: [{ conditions: [{ [v]: b, [w]: [k] }], rules: [{ conditions: r, error: "Invalid Configuration: FIPS and custom endpoint are not supported", type: d }, { conditions: s, error: "Invalid Configuration: Dualstack and custom endpoint are not supported", type: d }, { endpoint: { url: k, properties: n, headers: n }, type: e }], type: f }, { conditions: [{ [v]: b, [w]: t }], rules: [{ conditions: [{ [v]: "aws.partition", [w]: t, assign: g }], rules: [{ conditions: [l, m], rules: [{ conditions: [{ [v]: c, [w]: [a, o] }, q], rules: [{ endpoint: { url: "https://oidc-fips.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS and DualStack are enabled, but this partition does not support one or both", type: d }], type: f }, { conditions: r, rules: [{ conditions: [{ [v]: c, [w]: [o, a] }], rules: [{ conditions: [{ [v]: "stringEquals", [w]: [{ [v]: h, [w]: [p, "name"] }, "aws-us-gov"] }], endpoint: { url: "https://oidc.{Region}.amazonaws.com", properties: n, headers: n }, type: e }, { endpoint: { url: "https://oidc-fips.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "FIPS is enabled but this partition does not support FIPS", type: d }], type: f }, { conditions: s, rules: [{ conditions: [q], rules: [{ endpoint: { url: "https://oidc.{Region}.{PartitionResult#dualStackDnsSuffix}", properties: n, headers: n }, type: e }], type: f }, { error: "DualStack is enabled but this partition does not support DualStack", type: d }], type: f }, { endpoint: { url: "https://oidc.{Region}.{PartitionResult#dnsSuffix}", properties: n, headers: n }, type: e }], type: f }], type: f }, { error: "Invalid Configuration: Missing Region", type: d }] };
const ruleSet = _data;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso-oidc/dist-es/endpoint/endpointResolver.js



const defaultEndpointResolver = (endpointParams, context = {}) => {
    return (0,_smithy_util_endpoints_dist_es/* resolveEndpoint */.sO)(ruleSet, {
        endpointParams: endpointParams,
        logger: context.logger,
    });
};
_smithy_util_endpoints_dist_es/* customEndpointFunctions */.mw.aws = util_endpoints_dist_es/* awsEndpointFunctions */.UF;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso-oidc/dist-es/runtimeConfig.shared.js








const getRuntimeConfig = (config) => {
    return {
        apiVersion: "2019-06-10",
        base64Decoder: config?.base64Decoder ?? util_base64_dist_es/* fromBase64 */.E,
        base64Encoder: config?.base64Encoder ?? util_base64_dist_es/* toBase64 */.n,
        disableHostPrefix: config?.disableHostPrefix ?? false,
        endpointProvider: config?.endpointProvider ?? defaultEndpointResolver,
        extensions: config?.extensions ?? [],
        httpAuthSchemeProvider: config?.httpAuthSchemeProvider ?? defaultSSOOIDCHttpAuthSchemeProvider,
        httpAuthSchemes: config?.httpAuthSchemes ?? [
            {
                schemeId: "aws.auth#sigv4",
                identityProvider: (ipc) => ipc.getIdentityProvider("aws.auth#sigv4"),
                signer: new AwsSdkSigV4Signer/* AwsSdkSigV4Signer */.f(),
            },
            {
                schemeId: "smithy.api#noAuth",
                identityProvider: (ipc) => ipc.getIdentityProvider("smithy.api#noAuth") || (async () => ({})),
                signer: new core_dist_es/* NoAuthSigner */.mR(),
            },
        ],
        logger: config?.logger ?? new smithy_client_dist_es/* NoOpLogger */.N4(),
        serviceId: config?.serviceId ?? "SSO OIDC",
        urlParser: config?.urlParser ?? url_parser_dist_es/* parseUrl */.D,
        utf8Decoder: config?.utf8Decoder ?? util_utf8_dist_es/* fromUtf8 */.ar,
        utf8Encoder: config?.utf8Encoder ?? util_utf8_dist_es/* toUtf8 */.Pq,
    };
};

// EXTERNAL MODULE: ./node_modules/@smithy/util-defaults-mode-node/dist-es/index.js + 3 modules
var util_defaults_mode_node_dist_es = __webpack_require__(4321);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso-oidc/dist-es/runtimeConfig.js















const runtimeConfig_getRuntimeConfig = (config) => {
    (0,smithy_client_dist_es/* emitWarningIfUnsupportedVersion */.I9)(process.version);
    const defaultsMode = (0,util_defaults_mode_node_dist_es/* resolveDefaultsModeConfig */.I)(config);
    const defaultConfigProvider = () => defaultsMode().then(smithy_client_dist_es/* loadConfigsForDefaultMode */.lT);
    const clientSharedValues = getRuntimeConfig(config);
    (0,emitWarningIfUnsupportedVersion/* emitWarningIfUnsupportedVersion */.I)(process.version);
    return {
        ...clientSharedValues,
        ...config,
        runtime: "node",
        defaultsMode,
        bodyLengthChecker: config?.bodyLengthChecker ?? util_body_length_node_dist_es/* calculateBodyLength */.n,
        credentialDefaultProvider: config?.credentialDefaultProvider ?? defaultProvider,
        defaultUserAgentProvider: config?.defaultUserAgentProvider ??
            (0,util_user_agent_node_dist_es/* defaultUserAgent */.mJ)({ serviceId: clientSharedValues.serviceId, clientVersion: package_namespaceObject.rE }),
        maxAttempts: config?.maxAttempts ?? (0,node_config_provider_dist_es/* loadConfig */.Z)(middleware_retry_dist_es/* NODE_MAX_ATTEMPT_CONFIG_OPTIONS */.qs),
        region: config?.region ?? (0,node_config_provider_dist_es/* loadConfig */.Z)(config_resolver_dist_es/* NODE_REGION_CONFIG_OPTIONS */.GG, config_resolver_dist_es/* NODE_REGION_CONFIG_FILE_OPTIONS */.zH),
        requestHandler: node_http_handler_dist_es/* NodeHttpHandler */.$c.create(config?.requestHandler ?? defaultConfigProvider),
        retryMode: config?.retryMode ??
            (0,node_config_provider_dist_es/* loadConfig */.Z)({
                ...middleware_retry_dist_es/* NODE_RETRY_MODE_CONFIG_OPTIONS */.kN,
                default: async () => (await defaultConfigProvider()).retryMode || util_retry_dist_es/* DEFAULT_RETRY_MODE */.L0,
            }),
        sha256: config?.sha256 ?? hash_node_dist_es/* Hash */.V.bind(null, "sha256"),
        streamCollector: config?.streamCollector ?? node_http_handler_dist_es/* streamCollector */.kv,
        useDualstackEndpoint: config?.useDualstackEndpoint ?? (0,node_config_provider_dist_es/* loadConfig */.Z)(config_resolver_dist_es/* NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS */.e$),
        useFipsEndpoint: config?.useFipsEndpoint ?? (0,node_config_provider_dist_es/* loadConfig */.Z)(config_resolver_dist_es/* NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS */.Ko),
    };
};

// EXTERNAL MODULE: ./node_modules/@aws-sdk/region-config-resolver/dist-es/index.js + 3 modules
var region_config_resolver_dist_es = __webpack_require__(4547);
// EXTERNAL MODULE: ./node_modules/@smithy/protocol-http/dist-es/index.js + 5 modules
var protocol_http_dist_es = __webpack_require__(5479);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso-oidc/dist-es/auth/httpAuthExtensionConfiguration.js
const getHttpAuthExtensionConfiguration = (runtimeConfig) => {
    const _httpAuthSchemes = runtimeConfig.httpAuthSchemes;
    let _httpAuthSchemeProvider = runtimeConfig.httpAuthSchemeProvider;
    let _credentials = runtimeConfig.credentials;
    return {
        setHttpAuthScheme(httpAuthScheme) {
            const index = _httpAuthSchemes.findIndex((scheme) => scheme.schemeId === httpAuthScheme.schemeId);
            if (index === -1) {
                _httpAuthSchemes.push(httpAuthScheme);
            }
            else {
                _httpAuthSchemes.splice(index, 1, httpAuthScheme);
            }
        },
        httpAuthSchemes() {
            return _httpAuthSchemes;
        },
        setHttpAuthSchemeProvider(httpAuthSchemeProvider) {
            _httpAuthSchemeProvider = httpAuthSchemeProvider;
        },
        httpAuthSchemeProvider() {
            return _httpAuthSchemeProvider;
        },
        setCredentials(credentials) {
            _credentials = credentials;
        },
        credentials() {
            return _credentials;
        },
    };
};
const resolveHttpAuthRuntimeConfig = (config) => {
    return {
        httpAuthSchemes: config.httpAuthSchemes(),
        httpAuthSchemeProvider: config.httpAuthSchemeProvider(),
        credentials: config.credentials(),
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso-oidc/dist-es/runtimeExtensions.js




const asPartial = (t) => t;
const resolveRuntimeExtensions = (runtimeConfig, extensions) => {
    const extensionConfiguration = {
        ...asPartial((0,region_config_resolver_dist_es/* getAwsRegionExtensionConfiguration */.Rq)(runtimeConfig)),
        ...asPartial((0,smithy_client_dist_es/* getDefaultExtensionConfiguration */.xA)(runtimeConfig)),
        ...asPartial((0,protocol_http_dist_es/* getHttpHandlerExtensionConfiguration */.eS)(runtimeConfig)),
        ...asPartial(getHttpAuthExtensionConfiguration(runtimeConfig)),
    };
    extensions.forEach((extension) => extension.configure(extensionConfiguration));
    return {
        ...runtimeConfig,
        ...(0,region_config_resolver_dist_es/* resolveAwsRegionExtensionConfiguration */.$3)(extensionConfiguration),
        ...(0,smithy_client_dist_es/* resolveDefaultRuntimeConfig */.uv)(extensionConfiguration),
        ...(0,protocol_http_dist_es/* resolveHttpHandlerRuntimeConfig */.jt)(extensionConfiguration),
        ...resolveHttpAuthRuntimeConfig(extensionConfiguration),
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/client-sso-oidc/dist-es/SSOOIDCClient.js















class SSOOIDCClient extends smithy_client_dist_es/* Client */.Kj {
    constructor(...[configuration]) {
        const _config_0 = runtimeConfig_getRuntimeConfig(configuration || {});
        const _config_1 = resolveClientEndpointParameters(_config_0);
        const _config_2 = (0,config_resolver_dist_es/* resolveRegionConfig */.TD)(_config_1);
        const _config_3 = (0,dist_es/* resolveEndpointConfig */.Co)(_config_2);
        const _config_4 = (0,middleware_retry_dist_es/* resolveRetryConfig */.$z)(_config_3);
        const _config_5 = (0,middleware_host_header_dist_es/* resolveHostHeaderConfig */.OV)(_config_4);
        const _config_6 = (0,middleware_user_agent_dist_es/* resolveUserAgentConfig */.Dc)(_config_5);
        const _config_7 = resolveHttpAuthSchemeConfig(_config_6);
        const _config_8 = resolveRuntimeExtensions(_config_7, configuration?.extensions || []);
        super(_config_8);
        this.config = _config_8;
        this.middlewareStack.use((0,middleware_retry_dist_es/* getRetryPlugin */.ey)(this.config));
        this.middlewareStack.use((0,middleware_content_length_dist_es/* getContentLengthPlugin */.vK)(this.config));
        this.middlewareStack.use((0,middleware_host_header_dist_es/* getHostHeaderPlugin */.TC)(this.config));
        this.middlewareStack.use((0,middleware_logger_dist_es/* getLoggerPlugin */.Y7)(this.config));
        this.middlewareStack.use((0,middleware_recursion_detection_dist_es/* getRecursionDetectionPlugin */.n4)(this.config));
        this.middlewareStack.use((0,middleware_user_agent_dist_es/* getUserAgentPlugin */.sM)(this.config));
        this.middlewareStack.use((0,core_dist_es/* getHttpAuthSchemeEndpointRuleSetPlugin */.wB)(this.config, {
            httpAuthSchemeParametersProvider: this.getDefaultHttpAuthSchemeParametersProvider(),
            identityProviderConfigProvider: this.getIdentityProviderConfigProvider(),
        }));
        this.middlewareStack.use((0,core_dist_es/* getHttpSigningPlugin */.lW)(this.config));
    }
    destroy() {
        super.destroy();
    }
    getDefaultHttpAuthSchemeParametersProvider() {
        return defaultSSOOIDCHttpAuthSchemeParametersProvider;
    }
    getIdentityProviderConfigProvider() {
        return async (config) => new core_dist_es/* DefaultIdentityProviderConfig */.h$({
            "aws.auth#sigv4": config.credentials,
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/token-providers/dist-es/loadSsoOidc.js




/***/ }),

/***/ 6652:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  UF: () => (/* reexport */ awsEndpointFunctions),
  vL: () => (/* reexport */ getUserAgentPrefix)
});

// UNUSED EXPORTS: EndpointError, isIpAddress, partition, resolveEndpoint, setPartitionInfo, useDefaultPartitionInfo

// EXTERNAL MODULE: ./node_modules/@smithy/util-endpoints/dist-es/index.js + 34 modules
var dist_es = __webpack_require__(3875);
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/isIpAddress.js


;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/isVirtualHostableS3Bucket.js


const isVirtualHostableS3Bucket = (value, allowSubDomains = false) => {
    if (allowSubDomains) {
        for (const label of value.split(".")) {
            if (!isVirtualHostableS3Bucket(label)) {
                return false;
            }
        }
        return true;
    }
    if (!(0,dist_es/* isValidHostLabel */.X8)(value)) {
        return false;
    }
    if (value.length < 3 || value.length > 63) {
        return false;
    }
    if (value !== value.toLowerCase()) {
        return false;
    }
    if ((0,dist_es/* isIpAddress */.oX)(value)) {
        return false;
    }
    return true;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/parseArn.js
const parseArn = (value) => {
    const segments = value.split(":");
    if (segments.length < 6)
        return null;
    const [arn, partition, service, region, accountId, ...resourceId] = segments;
    if (arn !== "arn" || partition === "" || service === "" || resourceId[0] === "")
        return null;
    return {
        partition,
        service,
        region,
        accountId,
        resourceId: resourceId[0].includes("/") ? resourceId[0].split("/") : resourceId,
    };
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partitions.json
const partitions_namespaceObject = /*#__PURE__*/JSON.parse('{"partitions":[{"id":"aws","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","implicitGlobalRegion":"us-east-1","name":"aws","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^(us|eu|ap|sa|ca|me|af|il)\\\\-\\\\w+\\\\-\\\\d+$","regions":{"af-south-1":{"description":"Africa (Cape Town)"},"ap-east-1":{"description":"Asia Pacific (Hong Kong)"},"ap-northeast-1":{"description":"Asia Pacific (Tokyo)"},"ap-northeast-2":{"description":"Asia Pacific (Seoul)"},"ap-northeast-3":{"description":"Asia Pacific (Osaka)"},"ap-south-1":{"description":"Asia Pacific (Mumbai)"},"ap-south-2":{"description":"Asia Pacific (Hyderabad)"},"ap-southeast-1":{"description":"Asia Pacific (Singapore)"},"ap-southeast-2":{"description":"Asia Pacific (Sydney)"},"ap-southeast-3":{"description":"Asia Pacific (Jakarta)"},"ap-southeast-4":{"description":"Asia Pacific (Melbourne)"},"aws-global":{"description":"AWS Standard global region"},"ca-central-1":{"description":"Canada (Central)"},"ca-west-1":{"description":"Canada West (Calgary)"},"eu-central-1":{"description":"Europe (Frankfurt)"},"eu-central-2":{"description":"Europe (Zurich)"},"eu-north-1":{"description":"Europe (Stockholm)"},"eu-south-1":{"description":"Europe (Milan)"},"eu-south-2":{"description":"Europe (Spain)"},"eu-west-1":{"description":"Europe (Ireland)"},"eu-west-2":{"description":"Europe (London)"},"eu-west-3":{"description":"Europe (Paris)"},"il-central-1":{"description":"Israel (Tel Aviv)"},"me-central-1":{"description":"Middle East (UAE)"},"me-south-1":{"description":"Middle East (Bahrain)"},"sa-east-1":{"description":"South America (Sao Paulo)"},"us-east-1":{"description":"US East (N. Virginia)"},"us-east-2":{"description":"US East (Ohio)"},"us-west-1":{"description":"US West (N. California)"},"us-west-2":{"description":"US West (Oregon)"}}},{"id":"aws-cn","outputs":{"dnsSuffix":"amazonaws.com.cn","dualStackDnsSuffix":"api.amazonwebservices.com.cn","implicitGlobalRegion":"cn-northwest-1","name":"aws-cn","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^cn\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-cn-global":{"description":"AWS China global region"},"cn-north-1":{"description":"China (Beijing)"},"cn-northwest-1":{"description":"China (Ningxia)"}}},{"id":"aws-us-gov","outputs":{"dnsSuffix":"amazonaws.com","dualStackDnsSuffix":"api.aws","implicitGlobalRegion":"us-gov-west-1","name":"aws-us-gov","supportsDualStack":true,"supportsFIPS":true},"regionRegex":"^us\\\\-gov\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-us-gov-global":{"description":"AWS GovCloud (US) global region"},"us-gov-east-1":{"description":"AWS GovCloud (US-East)"},"us-gov-west-1":{"description":"AWS GovCloud (US-West)"}}},{"id":"aws-iso","outputs":{"dnsSuffix":"c2s.ic.gov","dualStackDnsSuffix":"c2s.ic.gov","implicitGlobalRegion":"us-iso-east-1","name":"aws-iso","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-iso\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-global":{"description":"AWS ISO (US) global region"},"us-iso-east-1":{"description":"US ISO East"},"us-iso-west-1":{"description":"US ISO WEST"}}},{"id":"aws-iso-b","outputs":{"dnsSuffix":"sc2s.sgov.gov","dualStackDnsSuffix":"sc2s.sgov.gov","implicitGlobalRegion":"us-isob-east-1","name":"aws-iso-b","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-isob\\\\-\\\\w+\\\\-\\\\d+$","regions":{"aws-iso-b-global":{"description":"AWS ISOB (US) global region"},"us-isob-east-1":{"description":"US ISOB East (Ohio)"}}},{"id":"aws-iso-e","outputs":{"dnsSuffix":"cloud.adc-e.uk","dualStackDnsSuffix":"cloud.adc-e.uk","implicitGlobalRegion":"eu-isoe-west-1","name":"aws-iso-e","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^eu\\\\-isoe\\\\-\\\\w+\\\\-\\\\d+$","regions":{}},{"id":"aws-iso-f","outputs":{"dnsSuffix":"csp.hci.ic.gov","dualStackDnsSuffix":"csp.hci.ic.gov","implicitGlobalRegion":"us-isof-south-1","name":"aws-iso-f","supportsDualStack":false,"supportsFIPS":true},"regionRegex":"^us\\\\-isof\\\\-\\\\w+\\\\-\\\\d+$","regions":{}}],"version":"1.1"}');
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/lib/aws/partition.js

let selectedPartitionsInfo = partitions_namespaceObject;
let selectedUserAgentPrefix = "";
const partition = (value) => {
    const { partitions } = selectedPartitionsInfo;
    for (const partition of partitions) {
        const { regions, outputs } = partition;
        for (const [region, regionData] of Object.entries(regions)) {
            if (region === value) {
                return {
                    ...outputs,
                    ...regionData,
                };
            }
        }
    }
    for (const partition of partitions) {
        const { regionRegex, outputs } = partition;
        if (new RegExp(regionRegex).test(value)) {
            return {
                ...outputs,
            };
        }
    }
    const DEFAULT_PARTITION = partitions.find((partition) => partition.id === "aws");
    if (!DEFAULT_PARTITION) {
        throw new Error("Provided region was not found in the partition array or regex," +
            " and default partition with id 'aws' doesn't exist.");
    }
    return {
        ...DEFAULT_PARTITION.outputs,
    };
};
const setPartitionInfo = (partitionsInfo, userAgentPrefix = "") => {
    selectedPartitionsInfo = partitionsInfo;
    selectedUserAgentPrefix = userAgentPrefix;
};
const useDefaultPartitionInfo = () => {
    setPartitionInfo(partitionsInfo, "");
};
const getUserAgentPrefix = () => selectedUserAgentPrefix;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/aws.js




const awsEndpointFunctions = {
    isVirtualHostableS3Bucket: isVirtualHostableS3Bucket,
    parseArn: parseArn,
    partition: partition,
};
dist_es/* customEndpointFunctions */.mw.aws = awsEndpointFunctions;

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/resolveEndpoint.js


;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/types/EndpointError.js


;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/types/index.js







;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-endpoints/dist-es/index.js







/***/ }),

/***/ 3058:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  mJ: () => (/* binding */ defaultUserAgent)
});

// UNUSED EXPORTS: UA_APP_ID_ENV_NAME, UA_APP_ID_INI_NAME, crtAvailability

// EXTERNAL MODULE: ./node_modules/@smithy/node-config-provider/dist-es/index.js + 4 modules
var dist_es = __webpack_require__(1881);
// EXTERNAL MODULE: external "os"
var external_os_ = __webpack_require__(857);
;// CONCATENATED MODULE: external "process"
const external_process_namespaceObject = require("process");
;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-user-agent-node/dist-es/crt-availability.js
const crtAvailability = {
    isCrtAvailable: false,
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-user-agent-node/dist-es/is-crt-available.js

const isCrtAvailable = () => {
    if (crtAvailability.isCrtAvailable) {
        return ["md/crt-avail"];
    }
    return null;
};

;// CONCATENATED MODULE: ./node_modules/@aws-sdk/util-user-agent-node/dist-es/index.js





const UA_APP_ID_ENV_NAME = "AWS_SDK_UA_APP_ID";
const UA_APP_ID_INI_NAME = "sdk-ua-app-id";
const defaultUserAgent = ({ serviceId, clientVersion }) => {
    const sections = [
        ["aws-sdk-js", clientVersion],
        ["ua", "2.0"],
        [`os/${(0,external_os_.platform)()}`, (0,external_os_.release)()],
        ["lang/js"],
        ["md/nodejs", `${external_process_namespaceObject.versions.node}`],
    ];
    const crtAvailable = isCrtAvailable();
    if (crtAvailable) {
        sections.push(crtAvailable);
    }
    if (serviceId) {
        sections.push([`api/${serviceId}`, clientVersion]);
    }
    if (external_process_namespaceObject.env.AWS_EXECUTION_ENV) {
        sections.push([`exec-env/${external_process_namespaceObject.env.AWS_EXECUTION_ENV}`]);
    }
    const appIdPromise = (0,dist_es/* loadConfig */.Z)({
        environmentVariableSelector: (env) => env[UA_APP_ID_ENV_NAME],
        configFileSelector: (profile) => profile[UA_APP_ID_INI_NAME],
        default: undefined,
    })();
    let resolvedUserAgent = undefined;
    return async () => {
        if (!resolvedUserAgent) {
            const appId = await appIdPromise;
            resolvedUserAgent = appId ? [...sections, [`app/${appId}`]] : [...sections];
        }
        return resolvedUserAgent;
    };
};


/***/ }),

/***/ 7122:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  zH: () => (/* reexport */ NODE_REGION_CONFIG_FILE_OPTIONS),
  GG: () => (/* reexport */ NODE_REGION_CONFIG_OPTIONS),
  e$: () => (/* reexport */ NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS),
  Ko: () => (/* reexport */ NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS),
  TD: () => (/* reexport */ resolveRegionConfig)
});

// UNUSED EXPORTS: CONFIG_USE_DUALSTACK_ENDPOINT, CONFIG_USE_FIPS_ENDPOINT, DEFAULT_USE_DUALSTACK_ENDPOINT, DEFAULT_USE_FIPS_ENDPOINT, ENV_USE_DUALSTACK_ENDPOINT, ENV_USE_FIPS_ENDPOINT, REGION_ENV_NAME, REGION_INI_NAME, getRegionInfo, resolveCustomEndpointsConfig, resolveEndpointsConfig

// EXTERNAL MODULE: ./node_modules/@smithy/util-config-provider/dist-es/index.js + 2 modules
var dist_es = __webpack_require__(5645);
;// CONCATENATED MODULE: ./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseDualstackEndpointConfigOptions.js

const ENV_USE_DUALSTACK_ENDPOINT = "AWS_USE_DUALSTACK_ENDPOINT";
const CONFIG_USE_DUALSTACK_ENDPOINT = "use_dualstack_endpoint";
const DEFAULT_USE_DUALSTACK_ENDPOINT = false;
const NODE_USE_DUALSTACK_ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => (0,dist_es/* booleanSelector */.Qm)(env, ENV_USE_DUALSTACK_ENDPOINT, dist_es/* SelectorType */.cV.ENV),
    configFileSelector: (profile) => (0,dist_es/* booleanSelector */.Qm)(profile, CONFIG_USE_DUALSTACK_ENDPOINT, dist_es/* SelectorType */.cV.CONFIG),
    default: false,
};

;// CONCATENATED MODULE: ./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/NodeUseFipsEndpointConfigOptions.js

const ENV_USE_FIPS_ENDPOINT = "AWS_USE_FIPS_ENDPOINT";
const CONFIG_USE_FIPS_ENDPOINT = "use_fips_endpoint";
const DEFAULT_USE_FIPS_ENDPOINT = false;
const NODE_USE_FIPS_ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => (0,dist_es/* booleanSelector */.Qm)(env, ENV_USE_FIPS_ENDPOINT, dist_es/* SelectorType */.cV.ENV),
    configFileSelector: (profile) => (0,dist_es/* booleanSelector */.Qm)(profile, CONFIG_USE_FIPS_ENDPOINT, dist_es/* SelectorType */.cV.CONFIG),
    default: false,
};

// EXTERNAL MODULE: ./node_modules/@smithy/util-middleware/dist-es/index.js + 2 modules
var util_middleware_dist_es = __webpack_require__(7135);
;// CONCATENATED MODULE: ./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveCustomEndpointsConfig.js

const resolveCustomEndpointsConfig = (input) => {
    const { endpoint, urlParser } = input;
    return {
        ...input,
        tls: input.tls ?? true,
        endpoint: normalizeProvider(typeof endpoint === "string" ? urlParser(endpoint) : endpoint),
        isCustomEndpoint: true,
        useDualstackEndpoint: normalizeProvider(input.useDualstackEndpoint ?? false),
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/resolveEndpointsConfig.js


const resolveEndpointsConfig = (input) => {
    const useDualstackEndpoint = normalizeProvider(input.useDualstackEndpoint ?? false);
    const { endpoint, useFipsEndpoint, urlParser } = input;
    return {
        ...input,
        tls: input.tls ?? true,
        endpoint: endpoint
            ? normalizeProvider(typeof endpoint === "string" ? urlParser(endpoint) : endpoint)
            : () => getEndpointFromRegion({ ...input, useDualstackEndpoint, useFipsEndpoint }),
        isCustomEndpoint: !!endpoint,
        useDualstackEndpoint,
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/config-resolver/dist-es/endpointsConfig/index.js





;// CONCATENATED MODULE: ./node_modules/@smithy/config-resolver/dist-es/regionConfig/config.js
const REGION_ENV_NAME = "AWS_REGION";
const REGION_INI_NAME = "region";
const NODE_REGION_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[REGION_ENV_NAME],
    configFileSelector: (profile) => profile[REGION_INI_NAME],
    default: () => {
        throw new Error("Region is missing");
    },
};
const NODE_REGION_CONFIG_FILE_OPTIONS = {
    preferredFile: "credentials",
};

;// CONCATENATED MODULE: ./node_modules/@smithy/config-resolver/dist-es/regionConfig/isFipsRegion.js
const isFipsRegion = (region) => typeof region === "string" && (region.startsWith("fips-") || region.endsWith("-fips"));

;// CONCATENATED MODULE: ./node_modules/@smithy/config-resolver/dist-es/regionConfig/getRealRegion.js

const getRealRegion = (region) => isFipsRegion(region)
    ? ["fips-aws-global", "aws-fips"].includes(region)
        ? "us-east-1"
        : region.replace(/fips-(dkr-|prod-)?|-fips/, "")
    : region;

;// CONCATENATED MODULE: ./node_modules/@smithy/config-resolver/dist-es/regionConfig/resolveRegionConfig.js


const resolveRegionConfig = (input) => {
    const { region, useFipsEndpoint } = input;
    if (!region) {
        throw new Error("Region is missing");
    }
    return {
        ...input,
        region: async () => {
            if (typeof region === "string") {
                return getRealRegion(region);
            }
            const providedRegion = await region();
            return getRealRegion(providedRegion);
        },
        useFipsEndpoint: async () => {
            const providedRegion = typeof region === "string" ? region : await region();
            if (isFipsRegion(providedRegion)) {
                return true;
            }
            return typeof useFipsEndpoint !== "function" ? Promise.resolve(!!useFipsEndpoint) : useFipsEndpoint();
        },
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/config-resolver/dist-es/regionConfig/index.js



;// CONCATENATED MODULE: ./node_modules/@smithy/config-resolver/dist-es/index.js





/***/ }),

/***/ 2972:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h$: () => (/* reexport */ DefaultIdentityProviderConfig),
  mR: () => (/* reexport */ NoAuthSigner),
  KU: () => (/* reexport */ createPaginator),
  e: () => (/* reexport */ doesIdentityRequireRefresh),
  wB: () => (/* reexport */ getHttpAuthSchemeEndpointRuleSetPlugin),
  lW: () => (/* reexport */ getHttpSigningPlugin),
  OC: () => (/* reexport */ isIdentityExpired),
  K4: () => (/* reexport */ memoizeIdentityProvider),
  te: () => (/* reexport */ normalizeProvider),
  lI: () => (/* reexport */ requestBuilder)
});

// UNUSED EXPORTS: EXPIRATION_MS, HttpApiKeyAuthSigner, HttpBearerAuthSigner, RequestBuilder, createIsIdentityExpiredFunction, getHttpAuthSchemePlugin, getSmithyContext, httpAuthSchemeEndpointRuleSetMiddlewareOptions, httpAuthSchemeMiddleware, httpAuthSchemeMiddlewareOptions, httpSigningMiddleware, httpSigningMiddlewareOptions

// EXTERNAL MODULE: ./node_modules/@smithy/types/dist-es/index.js + 11 modules
var dist_es = __webpack_require__(7523);
// EXTERNAL MODULE: ./node_modules/@smithy/util-middleware/dist-es/index.js + 2 modules
var util_middleware_dist_es = __webpack_require__(7135);
;// CONCATENATED MODULE: ./node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/httpAuthSchemeMiddleware.js


function convertHttpAuthSchemesToMap(httpAuthSchemes) {
    const map = new Map();
    for (const scheme of httpAuthSchemes) {
        map.set(scheme.schemeId, scheme);
    }
    return map;
}
const httpAuthSchemeMiddleware_httpAuthSchemeMiddleware = (config, mwOptions) => (next, context) => async (args) => {
    const options = config.httpAuthSchemeProvider(await mwOptions.httpAuthSchemeParametersProvider(config, context, args.input));
    const authSchemes = convertHttpAuthSchemesToMap(config.httpAuthSchemes);
    const smithyContext = (0,util_middleware_dist_es/* getSmithyContext */.u)(context);
    const failureReasons = [];
    for (const option of options) {
        const scheme = authSchemes.get(option.schemeId);
        if (!scheme) {
            failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` was not enabled for this service.`);
            continue;
        }
        const identityProvider = scheme.identityProvider(await mwOptions.identityProviderConfigProvider(config));
        if (!identityProvider) {
            failureReasons.push(`HttpAuthScheme \`${option.schemeId}\` did not have an IdentityProvider configured.`);
            continue;
        }
        const { identityProperties = {}, signingProperties = {} } = option.propertiesExtractor?.(config, context) || {};
        option.identityProperties = Object.assign(option.identityProperties || {}, identityProperties);
        option.signingProperties = Object.assign(option.signingProperties || {}, signingProperties);
        smithyContext.selectedHttpAuthScheme = {
            httpAuthOption: option,
            identity: await identityProvider(option.identityProperties),
            signer: scheme.signer,
        };
        break;
    }
    if (!smithyContext.selectedHttpAuthScheme) {
        throw new Error(failureReasons.join("\n"));
    }
    return next(args);
};

// EXTERNAL MODULE: ./node_modules/@smithy/middleware-endpoint/dist-es/index.js + 10 modules
var middleware_endpoint_dist_es = __webpack_require__(9389);
;// CONCATENATED MODULE: ./node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemeEndpointRuleSetPlugin.js


const httpAuthSchemeEndpointRuleSetMiddlewareOptions = {
    step: "serialize",
    tags: ["HTTP_AUTH_SCHEME"],
    name: "httpAuthSchemeMiddleware",
    override: true,
    relation: "before",
    toMiddleware: middleware_endpoint_dist_es/* endpointMiddlewareOptions */.ko.name,
};
const getHttpAuthSchemeEndpointRuleSetPlugin = (config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider, }) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(httpAuthSchemeMiddleware_httpAuthSchemeMiddleware(config, {
            httpAuthSchemeParametersProvider,
            identityProviderConfigProvider,
        }), httpAuthSchemeEndpointRuleSetMiddlewareOptions);
    },
});

// EXTERNAL MODULE: ./node_modules/@smithy/middleware-serde/dist-es/index.js + 3 modules
var middleware_serde_dist_es = __webpack_require__(1208);
;// CONCATENATED MODULE: ./node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/getHttpAuthSchemePlugin.js


const httpAuthSchemeMiddlewareOptions = {
    step: "serialize",
    tags: ["HTTP_AUTH_SCHEME"],
    name: "httpAuthSchemeMiddleware",
    override: true,
    relation: "before",
    toMiddleware: middleware_serde_dist_es/* serializerMiddlewareOption */.Ou.name,
};
const getHttpAuthSchemePlugin = (config, { httpAuthSchemeParametersProvider, identityProviderConfigProvider, }) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(httpAuthSchemeMiddleware(config, {
            httpAuthSchemeParametersProvider,
            identityProviderConfigProvider,
        }), httpAuthSchemeMiddlewareOptions);
    },
});

;// CONCATENATED MODULE: ./node_modules/@smithy/core/dist-es/middleware-http-auth-scheme/index.js




// EXTERNAL MODULE: ./node_modules/@smithy/protocol-http/dist-es/index.js + 5 modules
var protocol_http_dist_es = __webpack_require__(5479);
;// CONCATENATED MODULE: ./node_modules/@smithy/core/dist-es/middleware-http-signing/httpSigningMiddleware.js



const defaultErrorHandler = (signingProperties) => (error) => {
    throw error;
};
const defaultSuccessHandler = (httpResponse, signingProperties) => { };
const httpSigningMiddleware = (config) => (next, context) => async (args) => {
    if (!protocol_http_dist_es/* HttpRequest */.Kd.isInstance(args.request)) {
        return next(args);
    }
    const smithyContext = (0,util_middleware_dist_es/* getSmithyContext */.u)(context);
    const scheme = smithyContext.selectedHttpAuthScheme;
    if (!scheme) {
        throw new Error(`No HttpAuthScheme was selected: unable to sign request`);
    }
    const { httpAuthOption: { signingProperties = {} }, identity, signer, } = scheme;
    const output = await next({
        ...args,
        request: await signer.sign(args.request, identity, signingProperties),
    }).catch((signer.errorHandler || defaultErrorHandler)(signingProperties));
    (signer.successHandler || defaultSuccessHandler)(output.response, signingProperties);
    return output;
};

// EXTERNAL MODULE: ./node_modules/@smithy/middleware-retry/dist-es/index.js + 10 modules
var middleware_retry_dist_es = __webpack_require__(3594);
;// CONCATENATED MODULE: ./node_modules/@smithy/core/dist-es/middleware-http-signing/getHttpSigningMiddleware.js


const httpSigningMiddlewareOptions = {
    step: "finalizeRequest",
    tags: ["HTTP_SIGNING"],
    name: "httpSigningMiddleware",
    aliases: ["apiKeyMiddleware", "tokenMiddleware", "awsAuthMiddleware"],
    override: true,
    relation: "after",
    toMiddleware: middleware_retry_dist_es/* retryMiddlewareOptions */.j7.name,
};
const getHttpSigningPlugin = (config) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(httpSigningMiddleware(config), httpSigningMiddlewareOptions);
    },
});

;// CONCATENATED MODULE: ./node_modules/@smithy/core/dist-es/middleware-http-signing/index.js



;// CONCATENATED MODULE: ./node_modules/@smithy/core/dist-es/util-identity-and-auth/DefaultIdentityProviderConfig.js
class DefaultIdentityProviderConfig {
    constructor(config) {
        this.authSchemes = new Map();
        for (const [key, value] of Object.entries(config)) {
            if (value !== undefined) {
                this.authSchemes.set(key, value);
            }
        }
    }
    getIdentityProvider(schemeId) {
        return this.authSchemes.get(schemeId);
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/httpApiKeyAuth.js

class HttpApiKeyAuthSigner {
    async sign(httpRequest, identity, signingProperties) {
        if (!signingProperties) {
            throw new Error("request could not be signed with `apiKey` since the `name` and `in` signer properties are missing");
        }
        if (!signingProperties.name) {
            throw new Error("request could not be signed with `apiKey` since the `name` signer property is missing");
        }
        if (!signingProperties.in) {
            throw new Error("request could not be signed with `apiKey` since the `in` signer property is missing");
        }
        if (!identity.apiKey) {
            throw new Error("request could not be signed with `apiKey` since the `apiKey` is not defined");
        }
        const clonedRequest = httpRequest.clone();
        if (signingProperties.in === HttpApiKeyAuthLocation.QUERY) {
            clonedRequest.query[signingProperties.name] = identity.apiKey;
        }
        else if (signingProperties.in === HttpApiKeyAuthLocation.HEADER) {
            clonedRequest.headers[signingProperties.name] = signingProperties.scheme
                ? `${signingProperties.scheme} ${identity.apiKey}`
                : identity.apiKey;
        }
        else {
            throw new Error("request can only be signed with `apiKey` locations `query` or `header`, " +
                "but found: `" +
                signingProperties.in +
                "`");
        }
        return clonedRequest;
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/noAuth.js
class NoAuthSigner {
    async sign(httpRequest, identity, signingProperties) {
        return httpRequest;
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/core/dist-es/util-identity-and-auth/httpAuthSchemes/index.js




;// CONCATENATED MODULE: ./node_modules/@smithy/core/dist-es/util-identity-and-auth/memoizeIdentityProvider.js
const createIsIdentityExpiredFunction = (expirationMs) => (identity) => doesIdentityRequireRefresh(identity) && identity.expiration.getTime() - Date.now() < expirationMs;
const EXPIRATION_MS = 300000;
const isIdentityExpired = createIsIdentityExpiredFunction(EXPIRATION_MS);
const doesIdentityRequireRefresh = (identity) => identity.expiration !== undefined;
const memoizeIdentityProvider = (provider, isExpired, requiresRefresh) => {
    if (provider === undefined) {
        return undefined;
    }
    const normalizedProvider = typeof provider !== "function" ? async () => Promise.resolve(provider) : provider;
    let resolved;
    let pending;
    let hasResult;
    let isConstant = false;
    const coalesceProvider = async (options) => {
        if (!pending) {
            pending = normalizedProvider(options);
        }
        try {
            resolved = await pending;
            hasResult = true;
            isConstant = false;
        }
        finally {
            pending = undefined;
        }
        return resolved;
    };
    if (isExpired === undefined) {
        return async (options) => {
            if (!hasResult || options?.forceRefresh) {
                resolved = await coalesceProvider(options);
            }
            return resolved;
        };
    }
    return async (options) => {
        if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider(options);
        }
        if (isConstant) {
            return resolved;
        }
        if (!requiresRefresh(resolved)) {
            isConstant = true;
            return resolved;
        }
        if (isExpired(resolved)) {
            await coalesceProvider(options);
            return resolved;
        }
        return resolved;
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/core/dist-es/util-identity-and-auth/index.js




;// CONCATENATED MODULE: ./node_modules/@smithy/core/dist-es/getSmithyContext.js

const getSmithyContext = (context) => context[SMITHY_CONTEXT_KEY] || (context[SMITHY_CONTEXT_KEY] = {});

;// CONCATENATED MODULE: ./node_modules/@smithy/core/dist-es/normalizeProvider.js
const normalizeProvider = (input) => {
    if (typeof input === "function")
        return input;
    const promisified = Promise.resolve(input);
    return () => promisified;
};

// EXTERNAL MODULE: ./node_modules/@smithy/smithy-client/dist-es/index.js + 25 modules
var smithy_client_dist_es = __webpack_require__(678);
;// CONCATENATED MODULE: ./node_modules/@smithy/core/dist-es/protocols/requestBuilder.js


function requestBuilder(input, context) {
    return new RequestBuilder(input, context);
}
class RequestBuilder {
    constructor(input, context) {
        this.input = input;
        this.context = context;
        this.query = {};
        this.method = "";
        this.headers = {};
        this.path = "";
        this.body = null;
        this.hostname = "";
        this.resolvePathStack = [];
    }
    async build() {
        const { hostname, protocol = "https", port, path: basePath } = await this.context.endpoint();
        this.path = basePath;
        for (const resolvePath of this.resolvePathStack) {
            resolvePath(this.path);
        }
        return new protocol_http_dist_es/* HttpRequest */.Kd({
            protocol,
            hostname: this.hostname || hostname,
            port,
            method: this.method,
            path: this.path,
            query: this.query,
            body: this.body,
            headers: this.headers,
        });
    }
    hn(hostname) {
        this.hostname = hostname;
        return this;
    }
    bp(uriLabel) {
        this.resolvePathStack.push((basePath) => {
            this.path = `${basePath?.endsWith("/") ? basePath.slice(0, -1) : basePath || ""}` + uriLabel;
        });
        return this;
    }
    p(memberName, labelValueProvider, uriLabel, isGreedyLabel) {
        this.resolvePathStack.push((path) => {
            this.path = (0,smithy_client_dist_es/* resolvedPath */.un)(path, this.input, memberName, labelValueProvider, uriLabel, isGreedyLabel);
        });
        return this;
    }
    h(headers) {
        this.headers = headers;
        return this;
    }
    q(query) {
        this.query = query;
        return this;
    }
    b(body) {
        this.body = body;
        return this;
    }
    m(method) {
        this.method = method;
        return this;
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/core/dist-es/pagination/createPaginator.js
const makePagedClientRequest = async (CommandCtor, client, input, ...args) => {
    return await client.send(new CommandCtor(input), ...args);
};
function createPaginator(ClientCtor, CommandCtor, inputTokenName, outputTokenName, pageSizeTokenName) {
    return async function* paginateOperation(config, input, ...additionalArguments) {
        let token = config.startingToken || undefined;
        let hasNext = true;
        let page;
        while (hasNext) {
            input[inputTokenName] = token;
            if (pageSizeTokenName) {
                input[pageSizeTokenName] = input[pageSizeTokenName] ?? config.pageSize;
            }
            if (config.client instanceof ClientCtor) {
                page = await makePagedClientRequest(CommandCtor, config.client, input, ...additionalArguments);
            }
            else {
                throw new Error(`Invalid client, expected instance of ${ClientCtor.name}`);
            }
            yield page;
            const prevToken = token;
            token = get(page, outputTokenName);
            hasNext = !!(token && (!config.stopOnSameToken || token !== prevToken));
        }
        return undefined;
    };
}
const get = (fromObject, path) => {
    let cursor = fromObject;
    const pathComponents = path.split(".");
    for (const step of pathComponents) {
        if (!cursor || typeof cursor !== "object") {
            return undefined;
        }
        cursor = cursor[step];
    }
    return cursor;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/core/dist-es/index.js









/***/ }),

/***/ 7897:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  DEFAULT_MAX_RETRIES: () => (/* reexport */ DEFAULT_MAX_RETRIES),
  DEFAULT_TIMEOUT: () => (/* reexport */ DEFAULT_TIMEOUT),
  ENV_CMDS_AUTH_TOKEN: () => (/* reexport */ ENV_CMDS_AUTH_TOKEN),
  ENV_CMDS_FULL_URI: () => (/* reexport */ ENV_CMDS_FULL_URI),
  ENV_CMDS_RELATIVE_URI: () => (/* reexport */ ENV_CMDS_RELATIVE_URI),
  Endpoint: () => (/* reexport */ Endpoint),
  fromContainerMetadata: () => (/* reexport */ fromContainerMetadata),
  fromInstanceMetadata: () => (/* reexport */ fromInstanceMetadata),
  getInstanceMetadataEndpoint: () => (/* reexport */ getInstanceMetadataEndpoint),
  httpRequest: () => (/* reexport */ httpRequest),
  providerConfigFromInit: () => (/* reexport */ providerConfigFromInit)
});

// EXTERNAL MODULE: ./node_modules/@smithy/property-provider/dist-es/index.js + 6 modules
var dist_es = __webpack_require__(8112);
// EXTERNAL MODULE: external "url"
var external_url_ = __webpack_require__(7016);
// EXTERNAL MODULE: external "buffer"
var external_buffer_ = __webpack_require__(181);
// EXTERNAL MODULE: external "http"
var external_http_ = __webpack_require__(8611);
;// CONCATENATED MODULE: ./node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/httpRequest.js



function httpRequest(options) {
    return new Promise((resolve, reject) => {
        const req = (0,external_http_.request)({
            method: "GET",
            ...options,
            hostname: options.hostname?.replace(/^\[(.+)\]$/, "$1"),
        });
        req.on("error", (err) => {
            reject(Object.assign(new dist_es/* ProviderError */.mZ("Unable to connect to instance metadata service"), err));
            req.destroy();
        });
        req.on("timeout", () => {
            reject(new dist_es/* ProviderError */.mZ("TimeoutError from instance metadata service"));
            req.destroy();
        });
        req.on("response", (res) => {
            const { statusCode = 400 } = res;
            if (statusCode < 200 || 300 <= statusCode) {
                reject(Object.assign(new dist_es/* ProviderError */.mZ("Error response received from instance metadata service"), { statusCode }));
                req.destroy();
            }
            const chunks = [];
            res.on("data", (chunk) => {
                chunks.push(chunk);
            });
            res.on("end", () => {
                resolve(external_buffer_.Buffer.concat(chunks));
                req.destroy();
            });
        });
        req.end();
    });
}

;// CONCATENATED MODULE: ./node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/ImdsCredentials.js
const isImdsCredentials = (arg) => Boolean(arg) &&
    typeof arg === "object" &&
    typeof arg.AccessKeyId === "string" &&
    typeof arg.SecretAccessKey === "string" &&
    typeof arg.Token === "string" &&
    typeof arg.Expiration === "string";
const fromImdsCredentials = (creds) => ({
    accessKeyId: creds.AccessKeyId,
    secretAccessKey: creds.SecretAccessKey,
    sessionToken: creds.Token,
    expiration: new Date(creds.Expiration),
});

;// CONCATENATED MODULE: ./node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/RemoteProviderInit.js
const DEFAULT_TIMEOUT = 1000;
const DEFAULT_MAX_RETRIES = 0;
const providerConfigFromInit = ({ maxRetries = DEFAULT_MAX_RETRIES, timeout = DEFAULT_TIMEOUT, }) => ({ maxRetries, timeout });

;// CONCATENATED MODULE: ./node_modules/@smithy/credential-provider-imds/dist-es/remoteProvider/retry.js
const retry = (toRetry, maxRetries) => {
    let promise = toRetry();
    for (let i = 0; i < maxRetries; i++) {
        promise = promise.catch(toRetry);
    }
    return promise;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/credential-provider-imds/dist-es/fromContainerMetadata.js






const ENV_CMDS_FULL_URI = "AWS_CONTAINER_CREDENTIALS_FULL_URI";
const ENV_CMDS_RELATIVE_URI = "AWS_CONTAINER_CREDENTIALS_RELATIVE_URI";
const ENV_CMDS_AUTH_TOKEN = "AWS_CONTAINER_AUTHORIZATION_TOKEN";
const fromContainerMetadata = (init = {}) => {
    const { timeout, maxRetries } = providerConfigFromInit(init);
    return () => retry(async () => {
        const requestOptions = await getCmdsUri();
        const credsResponse = JSON.parse(await requestFromEcsImds(timeout, requestOptions));
        if (!isImdsCredentials(credsResponse)) {
            throw new dist_es/* CredentialsProviderError */.C1("Invalid response received from instance metadata service.");
        }
        return fromImdsCredentials(credsResponse);
    }, maxRetries);
};
const requestFromEcsImds = async (timeout, options) => {
    if (process.env[ENV_CMDS_AUTH_TOKEN]) {
        options.headers = {
            ...options.headers,
            Authorization: process.env[ENV_CMDS_AUTH_TOKEN],
        };
    }
    const buffer = await httpRequest({
        ...options,
        timeout,
    });
    return buffer.toString();
};
const CMDS_IP = "169.254.170.2";
const GREENGRASS_HOSTS = {
    localhost: true,
    "127.0.0.1": true,
};
const GREENGRASS_PROTOCOLS = {
    "http:": true,
    "https:": true,
};
const getCmdsUri = async () => {
    if (process.env[ENV_CMDS_RELATIVE_URI]) {
        return {
            hostname: CMDS_IP,
            path: process.env[ENV_CMDS_RELATIVE_URI],
        };
    }
    if (process.env[ENV_CMDS_FULL_URI]) {
        const parsed = (0,external_url_.parse)(process.env[ENV_CMDS_FULL_URI]);
        if (!parsed.hostname || !(parsed.hostname in GREENGRASS_HOSTS)) {
            throw new dist_es/* CredentialsProviderError */.C1(`${parsed.hostname} is not a valid container metadata service hostname`, false);
        }
        if (!parsed.protocol || !(parsed.protocol in GREENGRASS_PROTOCOLS)) {
            throw new dist_es/* CredentialsProviderError */.C1(`${parsed.protocol} is not a valid container metadata service protocol`, false);
        }
        return {
            ...parsed,
            port: parsed.port ? parseInt(parsed.port, 10) : undefined,
        };
    }
    throw new dist_es/* CredentialsProviderError */.C1("The container metadata credential provider cannot be used unless" +
        ` the ${ENV_CMDS_RELATIVE_URI} or ${ENV_CMDS_FULL_URI} environment` +
        " variable is set", false);
};

// EXTERNAL MODULE: ./node_modules/@smithy/node-config-provider/dist-es/index.js + 4 modules
var node_config_provider_dist_es = __webpack_require__(1881);
;// CONCATENATED MODULE: ./node_modules/@smithy/credential-provider-imds/dist-es/error/InstanceMetadataV1FallbackError.js

class InstanceMetadataV1FallbackError extends dist_es/* CredentialsProviderError */.C1 {
    constructor(message, tryNextLink = true) {
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        this.name = "InstanceMetadataV1FallbackError";
        Object.setPrototypeOf(this, InstanceMetadataV1FallbackError.prototype);
    }
}

// EXTERNAL MODULE: ./node_modules/@smithy/url-parser/dist-es/index.js + 1 modules
var url_parser_dist_es = __webpack_require__(2641);
;// CONCATENATED MODULE: ./node_modules/@smithy/credential-provider-imds/dist-es/config/Endpoint.js
var Endpoint;
(function (Endpoint) {
    Endpoint["IPv4"] = "http://169.254.169.254";
    Endpoint["IPv6"] = "http://[fd00:ec2::254]";
})(Endpoint || (Endpoint = {}));

;// CONCATENATED MODULE: ./node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointConfigOptions.js
const ENV_ENDPOINT_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT";
const CONFIG_ENDPOINT_NAME = "ec2_metadata_service_endpoint";
const ENDPOINT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[ENV_ENDPOINT_NAME],
    configFileSelector: (profile) => profile[CONFIG_ENDPOINT_NAME],
    default: undefined,
};

;// CONCATENATED MODULE: ./node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointMode.js
var EndpointMode;
(function (EndpointMode) {
    EndpointMode["IPv4"] = "IPv4";
    EndpointMode["IPv6"] = "IPv6";
})(EndpointMode || (EndpointMode = {}));

;// CONCATENATED MODULE: ./node_modules/@smithy/credential-provider-imds/dist-es/config/EndpointModeConfigOptions.js

const ENV_ENDPOINT_MODE_NAME = "AWS_EC2_METADATA_SERVICE_ENDPOINT_MODE";
const CONFIG_ENDPOINT_MODE_NAME = "ec2_metadata_service_endpoint_mode";
const ENDPOINT_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[ENV_ENDPOINT_MODE_NAME],
    configFileSelector: (profile) => profile[CONFIG_ENDPOINT_MODE_NAME],
    default: EndpointMode.IPv4,
};

;// CONCATENATED MODULE: ./node_modules/@smithy/credential-provider-imds/dist-es/utils/getInstanceMetadataEndpoint.js






const getInstanceMetadataEndpoint = async () => (0,url_parser_dist_es/* parseUrl */.D)((await getFromEndpointConfig()) || (await getFromEndpointModeConfig()));
const getFromEndpointConfig = async () => (0,node_config_provider_dist_es/* loadConfig */.Z)(ENDPOINT_CONFIG_OPTIONS)();
const getFromEndpointModeConfig = async () => {
    const endpointMode = await (0,node_config_provider_dist_es/* loadConfig */.Z)(ENDPOINT_MODE_CONFIG_OPTIONS)();
    switch (endpointMode) {
        case EndpointMode.IPv4:
            return Endpoint.IPv4;
        case EndpointMode.IPv6:
            return Endpoint.IPv6;
        default:
            throw new Error(`Unsupported endpoint mode: ${endpointMode}.` + ` Select from ${Object.values(EndpointMode)}`);
    }
};

;// CONCATENATED MODULE: ./node_modules/@smithy/credential-provider-imds/dist-es/utils/getExtendedInstanceMetadataCredentials.js
const STATIC_STABILITY_REFRESH_INTERVAL_SECONDS = 5 * 60;
const STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS = 5 * 60;
const STATIC_STABILITY_DOC_URL = "https://docs.aws.amazon.com/sdkref/latest/guide/feature-static-credentials.html";
const getExtendedInstanceMetadataCredentials = (credentials, logger) => {
    const refreshInterval = STATIC_STABILITY_REFRESH_INTERVAL_SECONDS +
        Math.floor(Math.random() * STATIC_STABILITY_REFRESH_INTERVAL_JITTER_WINDOW_SECONDS);
    const newExpiration = new Date(Date.now() + refreshInterval * 1000);
    logger.warn("Attempting credential expiration extension due to a credential service availability issue. A refresh of these " +
        `credentials will be attempted after ${new Date(newExpiration)}.\nFor more information, please visit: ` +
        STATIC_STABILITY_DOC_URL);
    const originalExpiration = credentials.originalExpiration ?? credentials.expiration;
    return {
        ...credentials,
        ...(originalExpiration ? { originalExpiration } : {}),
        expiration: newExpiration,
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/credential-provider-imds/dist-es/utils/staticStabilityProvider.js

const staticStabilityProvider = (provider, options = {}) => {
    const logger = options?.logger || console;
    let pastCredentials;
    return async () => {
        let credentials;
        try {
            credentials = await provider();
            if (credentials.expiration && credentials.expiration.getTime() < Date.now()) {
                credentials = getExtendedInstanceMetadataCredentials(credentials, logger);
            }
        }
        catch (e) {
            if (pastCredentials) {
                logger.warn("Credential renew failed: ", e);
                credentials = getExtendedInstanceMetadataCredentials(pastCredentials, logger);
            }
            else {
                throw e;
            }
        }
        pastCredentials = credentials;
        return credentials;
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/credential-provider-imds/dist-es/fromInstanceMetadata.js









const IMDS_PATH = "/latest/meta-data/iam/security-credentials/";
const IMDS_TOKEN_PATH = "/latest/api/token";
const AWS_EC2_METADATA_V1_DISABLED = "AWS_EC2_METADATA_V1_DISABLED";
const PROFILE_AWS_EC2_METADATA_V1_DISABLED = "ec2_metadata_v1_disabled";
const X_AWS_EC2_METADATA_TOKEN = "x-aws-ec2-metadata-token";
const fromInstanceMetadata = (init = {}) => staticStabilityProvider(getInstanceImdsProvider(init), { logger: init.logger });
const getInstanceImdsProvider = (init) => {
    let disableFetchToken = false;
    const { logger, profile } = init;
    const { timeout, maxRetries } = providerConfigFromInit(init);
    const getCredentials = async (maxRetries, options) => {
        const isImdsV1Fallback = disableFetchToken || options.headers?.[X_AWS_EC2_METADATA_TOKEN] == null;
        if (isImdsV1Fallback) {
            let fallbackBlockedFromProfile = false;
            let fallbackBlockedFromProcessEnv = false;
            const configValue = await (0,node_config_provider_dist_es/* loadConfig */.Z)({
                environmentVariableSelector: (env) => {
                    const envValue = env[AWS_EC2_METADATA_V1_DISABLED];
                    fallbackBlockedFromProcessEnv = !!envValue && envValue !== "false";
                    if (envValue === undefined) {
                        throw new dist_es/* CredentialsProviderError */.C1(`${AWS_EC2_METADATA_V1_DISABLED} not set in env, checking config file next.`);
                    }
                    return fallbackBlockedFromProcessEnv;
                },
                configFileSelector: (profile) => {
                    const profileValue = profile[PROFILE_AWS_EC2_METADATA_V1_DISABLED];
                    fallbackBlockedFromProfile = !!profileValue && profileValue !== "false";
                    return fallbackBlockedFromProfile;
                },
                default: false,
            }, {
                profile,
            })();
            if (init.ec2MetadataV1Disabled || configValue) {
                const causes = [];
                if (init.ec2MetadataV1Disabled)
                    causes.push("credential provider initialization (runtime option ec2MetadataV1Disabled)");
                if (fallbackBlockedFromProfile)
                    causes.push(`config file profile (${PROFILE_AWS_EC2_METADATA_V1_DISABLED})`);
                if (fallbackBlockedFromProcessEnv)
                    causes.push(`process environment variable (${AWS_EC2_METADATA_V1_DISABLED})`);
                throw new InstanceMetadataV1FallbackError(`AWS EC2 Metadata v1 fallback has been blocked by AWS SDK configuration in the following: [${causes.join(", ")}].`);
            }
        }
        const imdsProfile = (await retry(async () => {
            let profile;
            try {
                profile = await getProfile(options);
            }
            catch (err) {
                if (err.statusCode === 401) {
                    disableFetchToken = false;
                }
                throw err;
            }
            return profile;
        }, maxRetries)).trim();
        return retry(async () => {
            let creds;
            try {
                creds = await getCredentialsFromProfile(imdsProfile, options);
            }
            catch (err) {
                if (err.statusCode === 401) {
                    disableFetchToken = false;
                }
                throw err;
            }
            return creds;
        }, maxRetries);
    };
    return async () => {
        const endpoint = await getInstanceMetadataEndpoint();
        if (disableFetchToken) {
            logger?.debug("AWS SDK Instance Metadata", "using v1 fallback (no token fetch)");
            return getCredentials(maxRetries, { ...endpoint, timeout });
        }
        else {
            let token;
            try {
                token = (await getMetadataToken({ ...endpoint, timeout })).toString();
            }
            catch (error) {
                if (error?.statusCode === 400) {
                    throw Object.assign(error, {
                        message: "EC2 Metadata token request returned error",
                    });
                }
                else if (error.message === "TimeoutError" || [403, 404, 405].includes(error.statusCode)) {
                    disableFetchToken = true;
                }
                logger?.debug("AWS SDK Instance Metadata", "using v1 fallback (initial)");
                return getCredentials(maxRetries, { ...endpoint, timeout });
            }
            return getCredentials(maxRetries, {
                ...endpoint,
                headers: {
                    [X_AWS_EC2_METADATA_TOKEN]: token,
                },
                timeout,
            });
        }
    };
};
const getMetadataToken = async (options) => httpRequest({
    ...options,
    path: IMDS_TOKEN_PATH,
    method: "PUT",
    headers: {
        "x-aws-ec2-metadata-token-ttl-seconds": "21600",
    },
});
const getProfile = async (options) => (await httpRequest({ ...options, path: IMDS_PATH })).toString();
const getCredentialsFromProfile = async (profile, options) => {
    const credsResponse = JSON.parse((await httpRequest({
        ...options,
        path: IMDS_PATH + profile,
    })).toString());
    if (!isImdsCredentials(credsResponse)) {
        throw new dist_es/* CredentialsProviderError */.C1("Invalid response received from instance metadata service.");
    }
    return fromImdsCredentials(credsResponse);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/credential-provider-imds/dist-es/index.js









/***/ }),

/***/ 1701:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   V: () => (/* binding */ Hash)
/* harmony export */ });
/* harmony import */ var _smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(9290);
/* harmony import */ var _smithy_util_utf8__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3197);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(181);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(6982);
/* harmony import */ var crypto__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(crypto__WEBPACK_IMPORTED_MODULE_3__);




class Hash {
    constructor(algorithmIdentifier, secret) {
        this.algorithmIdentifier = algorithmIdentifier;
        this.secret = secret;
        this.reset();
    }
    update(toHash, encoding) {
        this.hash.update((0,_smithy_util_utf8__WEBPACK_IMPORTED_MODULE_1__/* .toUint8Array */ .Fo)(castSourceData(toHash, encoding)));
    }
    digest() {
        return Promise.resolve(this.hash.digest());
    }
    reset() {
        this.hash = this.secret
            ? (0,crypto__WEBPACK_IMPORTED_MODULE_3__.createHmac)(this.algorithmIdentifier, castSourceData(this.secret))
            : (0,crypto__WEBPACK_IMPORTED_MODULE_3__.createHash)(this.algorithmIdentifier);
    }
}
function castSourceData(toCast, encoding) {
    if (buffer__WEBPACK_IMPORTED_MODULE_2__.Buffer.isBuffer(toCast)) {
        return toCast;
    }
    if (typeof toCast === "string") {
        return (0,_smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__/* .fromString */ .s)(toCast, encoding);
    }
    if (ArrayBuffer.isView(toCast)) {
        return (0,_smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__/* .fromArrayBuffer */ .Q)(toCast.buffer, toCast.byteOffset, toCast.byteLength);
    }
    return (0,_smithy_util_buffer_from__WEBPACK_IMPORTED_MODULE_0__/* .fromArrayBuffer */ .Q)(toCast);
}


/***/ }),

/***/ 3695:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   m: () => (/* binding */ isArrayBuffer)
/* harmony export */ });
const isArrayBuffer = (arg) => (typeof ArrayBuffer === "function" && arg instanceof ArrayBuffer) ||
    Object.prototype.toString.call(arg) === "[object ArrayBuffer]";


/***/ }),

/***/ 649:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   vK: () => (/* binding */ getContentLengthPlugin)
/* harmony export */ });
/* unused harmony exports contentLengthMiddleware, contentLengthMiddlewareOptions */
/* harmony import */ var _smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(5479);

const CONTENT_LENGTH_HEADER = "content-length";
function contentLengthMiddleware(bodyLengthChecker) {
    return (next) => async (args) => {
        const request = args.request;
        if (_smithy_protocol_http__WEBPACK_IMPORTED_MODULE_0__/* .HttpRequest */ .Kd.isInstance(request)) {
            const { body, headers } = request;
            if (body &&
                Object.keys(headers)
                    .map((str) => str.toLowerCase())
                    .indexOf(CONTENT_LENGTH_HEADER) === -1) {
                try {
                    const length = bodyLengthChecker(body);
                    request.headers = {
                        ...request.headers,
                        [CONTENT_LENGTH_HEADER]: String(length),
                    };
                }
                catch (error) {
                }
            }
        }
        return next({
            ...args,
            request,
        });
    };
}
const contentLengthMiddlewareOptions = {
    step: "build",
    tags: ["SET_CONTENT_LENGTH", "CONTENT_LENGTH"],
    name: "contentLengthMiddleware",
    override: true,
};
const getContentLengthPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(contentLengthMiddleware(options.bodyLengthChecker), contentLengthMiddlewareOptions);
    },
});


/***/ }),

/***/ 9389:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ko: () => (/* reexport */ endpointMiddlewareOptions),
  rD: () => (/* reexport */ getEndpointPlugin),
  Co: () => (/* reexport */ resolveEndpointConfig)
});

// UNUSED EXPORTS: endpointMiddleware, getEndpointFromInstructions, resolveParams, toEndpointV1

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-endpoint/dist-es/service-customizations/s3.js
const resolveParamsForS3 = async (endpointParams) => {
    const bucket = endpointParams?.Bucket || "";
    if (typeof endpointParams.Bucket === "string") {
        endpointParams.Bucket = bucket.replace(/#/g, encodeURIComponent("#")).replace(/\?/g, encodeURIComponent("?"));
    }
    if (isArnBucketName(bucket)) {
        if (endpointParams.ForcePathStyle === true) {
            throw new Error("Path-style addressing cannot be used with ARN buckets");
        }
    }
    else if (!isDnsCompatibleBucketName(bucket) ||
        (bucket.indexOf(".") !== -1 && !String(endpointParams.Endpoint).startsWith("http:")) ||
        bucket.toLowerCase() !== bucket ||
        bucket.length < 3) {
        endpointParams.ForcePathStyle = true;
    }
    if (endpointParams.DisableMultiRegionAccessPoints) {
        endpointParams.disableMultiRegionAccessPoints = true;
        endpointParams.DisableMRAP = true;
    }
    return endpointParams;
};
const DOMAIN_PATTERN = /^[a-z0-9][a-z0-9\.\-]{1,61}[a-z0-9]$/;
const IP_ADDRESS_PATTERN = /(\d+\.){3}\d+/;
const DOTS_PATTERN = /\.\./;
const DOT_PATTERN = /\./;
const S3_HOSTNAME_PATTERN = /^(.+\.)?s3(-fips)?(\.dualstack)?[.-]([a-z0-9-]+)\./;
const isDnsCompatibleBucketName = (bucketName) => DOMAIN_PATTERN.test(bucketName) && !IP_ADDRESS_PATTERN.test(bucketName) && !DOTS_PATTERN.test(bucketName);
const isArnBucketName = (bucketName) => {
    const [arn, partition, service, , , bucket] = bucketName.split(":");
    const isArn = arn === "arn" && bucketName.split(":").length >= 6;
    const isValidArn = Boolean(isArn && partition && service && bucket);
    if (isArn && !isValidArn) {
        throw new Error(`Invalid ARN: ${bucketName} was an invalid ARN.`);
    }
    return isValidArn;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/createConfigValueProvider.js
const createConfigValueProvider = (configKey, canonicalEndpointParamKey, config) => {
    const configProvider = async () => {
        const configValue = config[configKey] ?? config[canonicalEndpointParamKey];
        if (typeof configValue === "function") {
            return configValue();
        }
        return configValue;
    };
    if (configKey === "credentialScope" || canonicalEndpointParamKey === "CredentialScope") {
        return async () => {
            const credentials = typeof config.credentials === "function" ? await config.credentials() : config.credentials;
            const configValue = credentials?.credentialScope ?? credentials?.CredentialScope;
            return configValue;
        };
    }
    if (configKey === "endpoint" || canonicalEndpointParamKey === "endpoint") {
        return async () => {
            const endpoint = await configProvider();
            if (endpoint && typeof endpoint === "object") {
                if ("url" in endpoint) {
                    return endpoint.url.href;
                }
                if ("hostname" in endpoint) {
                    const { protocol, hostname, port, path } = endpoint;
                    return `${protocol}//${hostname}${port ? ":" + port : ""}${path}`;
                }
            }
            return endpoint;
        };
    }
    return configProvider;
};

// EXTERNAL MODULE: ./node_modules/@smithy/node-config-provider/dist-es/index.js + 4 modules
var dist_es = __webpack_require__(1881);
// EXTERNAL MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/index.js + 14 modules
var shared_ini_file_loader_dist_es = __webpack_require__(3054);
;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointUrlConfig.js

const ENV_ENDPOINT_URL = "AWS_ENDPOINT_URL";
const CONFIG_ENDPOINT_URL = "endpoint_url";
const getEndpointUrlConfig = (serviceId) => ({
    environmentVariableSelector: (env) => {
        const serviceSuffixParts = serviceId.split(" ").map((w) => w.toUpperCase());
        const serviceEndpointUrl = env[[ENV_ENDPOINT_URL, ...serviceSuffixParts].join("_")];
        if (serviceEndpointUrl)
            return serviceEndpointUrl;
        const endpointUrl = env[ENV_ENDPOINT_URL];
        if (endpointUrl)
            return endpointUrl;
        return undefined;
    },
    configFileSelector: (profile, config) => {
        if (config && profile.services) {
            const servicesSection = config[["services", profile.services].join(shared_ini_file_loader_dist_es/* CONFIG_PREFIX_SEPARATOR */.QD)];
            if (servicesSection) {
                const servicePrefixParts = serviceId.split(" ").map((w) => w.toLowerCase());
                const endpointUrl = servicesSection[[servicePrefixParts.join("_"), CONFIG_ENDPOINT_URL].join(shared_ini_file_loader_dist_es/* CONFIG_PREFIX_SEPARATOR */.QD)];
                if (endpointUrl)
                    return endpointUrl;
            }
        }
        const endpointUrl = profile[CONFIG_ENDPOINT_URL];
        if (endpointUrl)
            return endpointUrl;
        return undefined;
    },
    default: undefined,
});

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromConfig.js


const getEndpointFromConfig = async (serviceId) => (0,dist_es/* loadConfig */.Z)(getEndpointUrlConfig(serviceId))();

// EXTERNAL MODULE: ./node_modules/@smithy/url-parser/dist-es/index.js + 1 modules
var url_parser_dist_es = __webpack_require__(2641);
;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/toEndpointV1.js

const toEndpointV1 = (endpoint) => {
    if (typeof endpoint === "object") {
        if ("url" in endpoint) {
            return (0,url_parser_dist_es/* parseUrl */.D)(endpoint.url);
        }
        return endpoint;
    }
    return (0,url_parser_dist_es/* parseUrl */.D)(endpoint);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/getEndpointFromInstructions.js




const getEndpointFromInstructions = async (commandInput, instructionsSupplier, clientConfig, context) => {
    if (!clientConfig.endpoint) {
        const endpointFromConfig = await getEndpointFromConfig(clientConfig.serviceId || "");
        if (endpointFromConfig) {
            clientConfig.endpoint = () => Promise.resolve(toEndpointV1(endpointFromConfig));
        }
    }
    const endpointParams = await resolveParams(commandInput, instructionsSupplier, clientConfig);
    if (typeof clientConfig.endpointProvider !== "function") {
        throw new Error("config.endpointProvider is not set.");
    }
    const endpoint = clientConfig.endpointProvider(endpointParams, context);
    return endpoint;
};
const resolveParams = async (commandInput, instructionsSupplier, clientConfig) => {
    const endpointParams = {};
    const instructions = instructionsSupplier?.getEndpointParameterInstructions?.() || {};
    for (const [name, instruction] of Object.entries(instructions)) {
        switch (instruction.type) {
            case "staticContextParams":
                endpointParams[name] = instruction.value;
                break;
            case "contextParams":
                endpointParams[name] = commandInput[instruction.name];
                break;
            case "clientContextParams":
            case "builtInParams":
                endpointParams[name] = await createConfigValueProvider(instruction.name, name, clientConfig)();
                break;
            default:
                throw new Error("Unrecognized endpoint parameter instruction: " + JSON.stringify(instruction));
        }
    }
    if (Object.keys(instructions).length === 0) {
        Object.assign(endpointParams, clientConfig);
    }
    if (String(clientConfig.serviceId).toLowerCase() === "s3") {
        await resolveParamsForS3(endpointParams);
    }
    return endpointParams;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-endpoint/dist-es/adaptors/index.js



// EXTERNAL MODULE: ./node_modules/@smithy/util-middleware/dist-es/index.js + 2 modules
var util_middleware_dist_es = __webpack_require__(7135);
;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-endpoint/dist-es/endpointMiddleware.js


const endpointMiddleware = ({ config, instructions, }) => {
    return (next, context) => async (args) => {
        const endpoint = await getEndpointFromInstructions(args.input, {
            getEndpointParameterInstructions() {
                return instructions;
            },
        }, { ...config }, context);
        context.endpointV2 = endpoint;
        context.authSchemes = endpoint.properties?.authSchemes;
        const authScheme = context.authSchemes?.[0];
        if (authScheme) {
            context["signing_region"] = authScheme.signingRegion;
            context["signing_service"] = authScheme.signingName;
            const smithyContext = (0,util_middleware_dist_es/* getSmithyContext */.u)(context);
            const httpAuthOption = smithyContext?.selectedHttpAuthScheme?.httpAuthOption;
            if (httpAuthOption) {
                httpAuthOption.signingProperties = Object.assign(httpAuthOption.signingProperties || {}, {
                    signing_region: authScheme.signingRegion,
                    signingRegion: authScheme.signingRegion,
                    signing_service: authScheme.signingName,
                    signingName: authScheme.signingName,
                    signingRegionSet: authScheme.signingRegionSet,
                }, authScheme.properties);
            }
        }
        return next({
            ...args,
        });
    };
};

// EXTERNAL MODULE: ./node_modules/@smithy/middleware-serde/dist-es/index.js + 3 modules
var middleware_serde_dist_es = __webpack_require__(1208);
;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-endpoint/dist-es/getEndpointPlugin.js


const endpointMiddlewareOptions = {
    step: "serialize",
    tags: ["ENDPOINT_PARAMETERS", "ENDPOINT_V2", "ENDPOINT"],
    name: "endpointV2Middleware",
    override: true,
    relation: "before",
    toMiddleware: middleware_serde_dist_es/* serializerMiddlewareOption */.Ou.name,
};
const getEndpointPlugin = (config, instructions) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(endpointMiddleware({
            config,
            instructions,
        }), endpointMiddlewareOptions);
    },
});

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-endpoint/dist-es/resolveEndpointConfig.js


const resolveEndpointConfig = (input) => {
    const tls = input.tls ?? true;
    const { endpoint } = input;
    const customEndpointProvider = endpoint != null ? async () => toEndpointV1(await (0,util_middleware_dist_es/* normalizeProvider */.t)(endpoint)()) : undefined;
    const isCustomEndpoint = !!endpoint;
    return {
        ...input,
        endpoint: customEndpointProvider,
        tls,
        isCustomEndpoint,
        useDualstackEndpoint: (0,util_middleware_dist_es/* normalizeProvider */.t)(input.useDualstackEndpoint ?? false),
        useFipsEndpoint: (0,util_middleware_dist_es/* normalizeProvider */.t)(input.useFipsEndpoint ?? false),
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-endpoint/dist-es/index.js







/***/ }),

/***/ 3594:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  qs: () => (/* reexport */ NODE_MAX_ATTEMPT_CONFIG_OPTIONS),
  kN: () => (/* reexport */ NODE_RETRY_MODE_CONFIG_OPTIONS),
  ey: () => (/* reexport */ getRetryPlugin),
  $z: () => (/* reexport */ resolveRetryConfig),
  j7: () => (/* reexport */ retryMiddlewareOptions)
});

// UNUSED EXPORTS: AdaptiveRetryStrategy, CONFIG_MAX_ATTEMPTS, CONFIG_RETRY_MODE, ENV_MAX_ATTEMPTS, ENV_RETRY_MODE, StandardRetryStrategy, defaultDelayDecider, defaultRetryDecider, getOmitRetryHeadersPlugin, getRetryAfterHint, omitRetryHeadersMiddleware, omitRetryHeadersMiddlewareOptions, retryMiddleware

// EXTERNAL MODULE: ./node_modules/@smithy/util-retry/dist-es/index.js + 8 modules
var dist_es = __webpack_require__(3323);
// EXTERNAL MODULE: ./node_modules/@smithy/protocol-http/dist-es/index.js + 5 modules
var protocol_http_dist_es = __webpack_require__(5479);
// EXTERNAL MODULE: ./node_modules/@smithy/service-error-classification/dist-es/index.js + 1 modules
var service_error_classification_dist_es = __webpack_require__(4542);
// EXTERNAL MODULE: ./node_modules/uuid/dist/esm-node/v4.js + 3 modules
var v4 = __webpack_require__(4349);
;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-retry/dist-es/defaultRetryQuota.js

const getDefaultRetryQuota = (initialRetryTokens, options) => {
    const MAX_CAPACITY = initialRetryTokens;
    const noRetryIncrement = options?.noRetryIncrement ?? dist_es/* NO_RETRY_INCREMENT */.XP;
    const retryCost = options?.retryCost ?? dist_es/* RETRY_COST */.XS;
    const timeoutRetryCost = options?.timeoutRetryCost ?? dist_es/* TIMEOUT_RETRY_COST */.Rn;
    let availableCapacity = initialRetryTokens;
    const getCapacityAmount = (error) => (error.name === "TimeoutError" ? timeoutRetryCost : retryCost);
    const hasRetryTokens = (error) => getCapacityAmount(error) <= availableCapacity;
    const retrieveRetryTokens = (error) => {
        if (!hasRetryTokens(error)) {
            throw new Error("No retry token available");
        }
        const capacityAmount = getCapacityAmount(error);
        availableCapacity -= capacityAmount;
        return capacityAmount;
    };
    const releaseRetryTokens = (capacityReleaseAmount) => {
        availableCapacity += capacityReleaseAmount ?? noRetryIncrement;
        availableCapacity = Math.min(availableCapacity, MAX_CAPACITY);
    };
    return Object.freeze({
        hasRetryTokens,
        retrieveRetryTokens,
        releaseRetryTokens,
    });
};

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-retry/dist-es/delayDecider.js

const defaultDelayDecider = (delayBase, attempts) => Math.floor(Math.min(dist_es/* MAXIMUM_RETRY_DELAY */.G8, Math.random() * 2 ** attempts * delayBase));

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-retry/dist-es/retryDecider.js

const defaultRetryDecider = (error) => {
    if (!error) {
        return false;
    }
    return (0,service_error_classification_dist_es/* isRetryableByTrait */.S0)(error) || (0,service_error_classification_dist_es/* isClockSkewError */.h5)(error) || (0,service_error_classification_dist_es/* isThrottlingError */.Qb)(error) || (0,service_error_classification_dist_es/* isTransientError */.bV)(error);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-retry/dist-es/util.js
const asSdkError = (error) => {
    if (error instanceof Error)
        return error;
    if (error instanceof Object)
        return Object.assign(new Error(), error);
    if (typeof error === "string")
        return new Error(error);
    return new Error(`AWS SDK error wrapper for ${error}`);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-retry/dist-es/StandardRetryStrategy.js








class StandardRetryStrategy {
    constructor(maxAttemptsProvider, options) {
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = dist_es/* RETRY_MODES */.cm.STANDARD;
        this.retryDecider = options?.retryDecider ?? defaultRetryDecider;
        this.delayDecider = options?.delayDecider ?? defaultDelayDecider;
        this.retryQuota = options?.retryQuota ?? getDefaultRetryQuota(dist_es/* INITIAL_RETRY_TOKENS */.Df);
    }
    shouldRetry(error, attempts, maxAttempts) {
        return attempts < maxAttempts && this.retryDecider(error) && this.retryQuota.hasRetryTokens(error);
    }
    async getMaxAttempts() {
        let maxAttempts;
        try {
            maxAttempts = await this.maxAttemptsProvider();
        }
        catch (error) {
            maxAttempts = dist_es/* DEFAULT_MAX_ATTEMPTS */.Gz;
        }
        return maxAttempts;
    }
    async retry(next, args, options) {
        let retryTokenAmount;
        let attempts = 0;
        let totalDelay = 0;
        const maxAttempts = await this.getMaxAttempts();
        const { request } = args;
        if (protocol_http_dist_es/* HttpRequest */.Kd.isInstance(request)) {
            request.headers[dist_es/* INVOCATION_ID_HEADER */.l5] = (0,v4/* default */.A)();
        }
        while (true) {
            try {
                if (protocol_http_dist_es/* HttpRequest */.Kd.isInstance(request)) {
                    request.headers[dist_es/* REQUEST_HEADER */.ok] = `attempt=${attempts + 1}; max=${maxAttempts}`;
                }
                if (options?.beforeRequest) {
                    await options.beforeRequest();
                }
                const { response, output } = await next(args);
                if (options?.afterRequest) {
                    options.afterRequest(response);
                }
                this.retryQuota.releaseRetryTokens(retryTokenAmount);
                output.$metadata.attempts = attempts + 1;
                output.$metadata.totalRetryDelay = totalDelay;
                return { response, output };
            }
            catch (e) {
                const err = asSdkError(e);
                attempts++;
                if (this.shouldRetry(err, attempts, maxAttempts)) {
                    retryTokenAmount = this.retryQuota.retrieveRetryTokens(err);
                    const delayFromDecider = this.delayDecider((0,service_error_classification_dist_es/* isThrottlingError */.Qb)(err) ? dist_es/* THROTTLING_RETRY_DELAY_BASE */.jh : dist_es/* DEFAULT_RETRY_DELAY_BASE */.bp, attempts);
                    const delayFromResponse = getDelayFromRetryAfterHeader(err.$response);
                    const delay = Math.max(delayFromResponse || 0, delayFromDecider);
                    totalDelay += delay;
                    await new Promise((resolve) => setTimeout(resolve, delay));
                    continue;
                }
                if (!err.$metadata) {
                    err.$metadata = {};
                }
                err.$metadata.attempts = attempts;
                err.$metadata.totalRetryDelay = totalDelay;
                throw err;
            }
        }
    }
}
const getDelayFromRetryAfterHeader = (response) => {
    if (!protocol_http_dist_es/* HttpResponse */.cS.isInstance(response))
        return;
    const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
    if (!retryAfterHeaderName)
        return;
    const retryAfter = response.headers[retryAfterHeaderName];
    const retryAfterSeconds = Number(retryAfter);
    if (!Number.isNaN(retryAfterSeconds))
        return retryAfterSeconds * 1000;
    const retryAfterDate = new Date(retryAfter);
    return retryAfterDate.getTime() - Date.now();
};

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-retry/dist-es/AdaptiveRetryStrategy.js


class AdaptiveRetryStrategy extends StandardRetryStrategy {
    constructor(maxAttemptsProvider, options) {
        const { rateLimiter, ...superOptions } = options ?? {};
        super(maxAttemptsProvider, superOptions);
        this.rateLimiter = rateLimiter ?? new dist_es/* DefaultRateLimiter */.QJ();
        this.mode = dist_es/* RETRY_MODES */.cm.ADAPTIVE;
    }
    async retry(next, args) {
        return super.retry(next, args, {
            beforeRequest: async () => {
                return this.rateLimiter.getSendToken();
            },
            afterRequest: (response) => {
                this.rateLimiter.updateClientSendingRate(response);
            },
        });
    }
}

// EXTERNAL MODULE: ./node_modules/@smithy/util-middleware/dist-es/index.js + 2 modules
var util_middleware_dist_es = __webpack_require__(7135);
;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-retry/dist-es/configurations.js


const ENV_MAX_ATTEMPTS = "AWS_MAX_ATTEMPTS";
const CONFIG_MAX_ATTEMPTS = "max_attempts";
const NODE_MAX_ATTEMPT_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => {
        const value = env[ENV_MAX_ATTEMPTS];
        if (!value)
            return undefined;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
            throw new Error(`Environment variable ${ENV_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
    },
    configFileSelector: (profile) => {
        const value = profile[CONFIG_MAX_ATTEMPTS];
        if (!value)
            return undefined;
        const maxAttempt = parseInt(value);
        if (Number.isNaN(maxAttempt)) {
            throw new Error(`Shared config file entry ${CONFIG_MAX_ATTEMPTS} mast be a number, got "${value}"`);
        }
        return maxAttempt;
    },
    default: dist_es/* DEFAULT_MAX_ATTEMPTS */.Gz,
};
const resolveRetryConfig = (input) => {
    const { retryStrategy } = input;
    const maxAttempts = (0,util_middleware_dist_es/* normalizeProvider */.t)(input.maxAttempts ?? dist_es/* DEFAULT_MAX_ATTEMPTS */.Gz);
    return {
        ...input,
        maxAttempts,
        retryStrategy: async () => {
            if (retryStrategy) {
                return retryStrategy;
            }
            const retryMode = await (0,util_middleware_dist_es/* normalizeProvider */.t)(input.retryMode)();
            if (retryMode === dist_es/* RETRY_MODES */.cm.ADAPTIVE) {
                return new dist_es/* AdaptiveRetryStrategy */.Y(maxAttempts);
            }
            return new dist_es/* StandardRetryStrategy */.ru(maxAttempts);
        },
    };
};
const ENV_RETRY_MODE = "AWS_RETRY_MODE";
const CONFIG_RETRY_MODE = "retry_mode";
const NODE_RETRY_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => env[ENV_RETRY_MODE],
    configFileSelector: (profile) => profile[CONFIG_RETRY_MODE],
    default: dist_es/* DEFAULT_RETRY_MODE */.L0,
};

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-retry/dist-es/omitRetryHeadersMiddleware.js


const omitRetryHeadersMiddleware = () => (next) => async (args) => {
    const { request } = args;
    if (HttpRequest.isInstance(request)) {
        delete request.headers[INVOCATION_ID_HEADER];
        delete request.headers[REQUEST_HEADER];
    }
    return next(args);
};
const omitRetryHeadersMiddlewareOptions = {
    name: "omitRetryHeadersMiddleware",
    tags: ["RETRY", "HEADERS", "OMIT_RETRY_HEADERS"],
    relation: "before",
    toMiddleware: "awsAuthMiddleware",
    override: true,
};
const getOmitRetryHeadersPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.addRelativeTo(omitRetryHeadersMiddleware(), omitRetryHeadersMiddlewareOptions);
    },
});

// EXTERNAL MODULE: ./node_modules/@smithy/smithy-client/dist-es/index.js + 25 modules
var smithy_client_dist_es = __webpack_require__(678);
// EXTERNAL MODULE: external "stream"
var external_stream_ = __webpack_require__(2203);
;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-retry/dist-es/isStreamingPayload/isStreamingPayload.js

const isStreamingPayload = (request) => request?.body instanceof external_stream_.Readable ||
    (typeof ReadableStream !== "undefined" && request?.body instanceof ReadableStream);

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-retry/dist-es/retryMiddleware.js







const retryMiddleware = (options) => (next, context) => async (args) => {
    let retryStrategy = await options.retryStrategy();
    const maxAttempts = await options.maxAttempts();
    if (isRetryStrategyV2(retryStrategy)) {
        retryStrategy = retryStrategy;
        let retryToken = await retryStrategy.acquireInitialRetryToken(context["partition_id"]);
        let lastError = new Error();
        let attempts = 0;
        let totalRetryDelay = 0;
        const { request } = args;
        const isRequest = protocol_http_dist_es/* HttpRequest */.Kd.isInstance(request);
        if (isRequest) {
            request.headers[dist_es/* INVOCATION_ID_HEADER */.l5] = (0,v4/* default */.A)();
        }
        while (true) {
            try {
                if (isRequest) {
                    request.headers[dist_es/* REQUEST_HEADER */.ok] = `attempt=${attempts + 1}; max=${maxAttempts}`;
                }
                const { response, output } = await next(args);
                retryStrategy.recordSuccess(retryToken);
                output.$metadata.attempts = attempts + 1;
                output.$metadata.totalRetryDelay = totalRetryDelay;
                return { response, output };
            }
            catch (e) {
                const retryErrorInfo = getRetryErrorInfo(e);
                lastError = asSdkError(e);
                if (isRequest && isStreamingPayload(request)) {
                    (context.logger instanceof smithy_client_dist_es/* NoOpLogger */.N4 ? console : context.logger)?.warn("An error was encountered in a non-retryable streaming request.");
                    throw lastError;
                }
                try {
                    retryToken = await retryStrategy.refreshRetryTokenForRetry(retryToken, retryErrorInfo);
                }
                catch (refreshError) {
                    if (!lastError.$metadata) {
                        lastError.$metadata = {};
                    }
                    lastError.$metadata.attempts = attempts + 1;
                    lastError.$metadata.totalRetryDelay = totalRetryDelay;
                    throw lastError;
                }
                attempts = retryToken.getRetryCount();
                const delay = retryToken.getRetryDelay();
                totalRetryDelay += delay;
                await new Promise((resolve) => setTimeout(resolve, delay));
            }
        }
    }
    else {
        retryStrategy = retryStrategy;
        if (retryStrategy?.mode)
            context.userAgent = [...(context.userAgent || []), ["cfg/retry-mode", retryStrategy.mode]];
        return retryStrategy.retry(next, args);
    }
};
const isRetryStrategyV2 = (retryStrategy) => typeof retryStrategy.acquireInitialRetryToken !== "undefined" &&
    typeof retryStrategy.refreshRetryTokenForRetry !== "undefined" &&
    typeof retryStrategy.recordSuccess !== "undefined";
const getRetryErrorInfo = (error) => {
    const errorInfo = {
        error,
        errorType: getRetryErrorType(error),
    };
    const retryAfterHint = getRetryAfterHint(error.$response);
    if (retryAfterHint) {
        errorInfo.retryAfterHint = retryAfterHint;
    }
    return errorInfo;
};
const getRetryErrorType = (error) => {
    if ((0,service_error_classification_dist_es/* isThrottlingError */.Qb)(error))
        return "THROTTLING";
    if ((0,service_error_classification_dist_es/* isTransientError */.bV)(error))
        return "TRANSIENT";
    if ((0,service_error_classification_dist_es/* isServerError */.GQ)(error))
        return "SERVER_ERROR";
    return "CLIENT_ERROR";
};
const retryMiddlewareOptions = {
    name: "retryMiddleware",
    tags: ["RETRY"],
    step: "finalizeRequest",
    priority: "high",
    override: true,
};
const getRetryPlugin = (options) => ({
    applyToStack: (clientStack) => {
        clientStack.add(retryMiddleware(options), retryMiddlewareOptions);
    },
});
const getRetryAfterHint = (response) => {
    if (!protocol_http_dist_es/* HttpResponse */.cS.isInstance(response))
        return;
    const retryAfterHeaderName = Object.keys(response.headers).find((key) => key.toLowerCase() === "retry-after");
    if (!retryAfterHeaderName)
        return;
    const retryAfter = response.headers[retryAfterHeaderName];
    const retryAfterSeconds = Number(retryAfter);
    if (!Number.isNaN(retryAfterSeconds))
        return new Date(retryAfterSeconds * 1000);
    const retryAfterDate = new Date(retryAfter);
    return retryAfterDate;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-retry/dist-es/index.js









/***/ }),

/***/ 1208:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  TM: () => (/* reexport */ getSerdePlugin),
  Ou: () => (/* reexport */ serializerMiddlewareOption)
});

// UNUSED EXPORTS: deserializerMiddleware, deserializerMiddlewareOption, serializerMiddleware

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-serde/dist-es/deserializerMiddleware.js
const deserializerMiddleware = (options, deserializer) => (next, context) => async (args) => {
    const { response } = await next(args);
    try {
        const parsed = await deserializer(response, options);
        return {
            response,
            output: parsed,
        };
    }
    catch (error) {
        Object.defineProperty(error, "$response", {
            value: response,
        });
        if (!("$metadata" in error)) {
            const hint = `Deserialization error: to see the raw response, inspect the hidden field {error}.$response on this object.`;
            error.message += "\n  " + hint;
            if (typeof error.$responseBodyText !== "undefined") {
                if (error.$response) {
                    error.$response.body = error.$responseBodyText;
                }
            }
        }
        throw error;
    }
};

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-serde/dist-es/serializerMiddleware.js
const serializerMiddleware = (options, serializer) => (next, context) => async (args) => {
    const endpoint = context.endpointV2?.url && options.urlParser
        ? async () => options.urlParser(context.endpointV2.url)
        : options.endpoint;
    if (!endpoint) {
        throw new Error("No valid endpoint provider available.");
    }
    const request = await serializer(args.input, { ...options, endpoint });
    return next({
        ...args,
        request,
    });
};

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-serde/dist-es/serdePlugin.js


const deserializerMiddlewareOption = {
    name: "deserializerMiddleware",
    step: "deserialize",
    tags: ["DESERIALIZER"],
    override: true,
};
const serializerMiddlewareOption = {
    name: "serializerMiddleware",
    step: "serialize",
    tags: ["SERIALIZER"],
    override: true,
};
function getSerdePlugin(config, serializer, deserializer) {
    return {
        applyToStack: (commandStack) => {
            commandStack.add(deserializerMiddleware(config, deserializer), deserializerMiddlewareOption);
            commandStack.add(serializerMiddleware(config, serializer), serializerMiddlewareOption);
        },
    };
}

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-serde/dist-es/index.js





/***/ }),

/***/ 1881:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Z: () => (/* reexport */ loadConfig)
});

// EXTERNAL MODULE: ./node_modules/@smithy/property-provider/dist-es/index.js + 6 modules
var dist_es = __webpack_require__(8112);
;// CONCATENATED MODULE: ./node_modules/@smithy/node-config-provider/dist-es/fromEnv.js

const fromEnv = (envVarSelector) => async () => {
    try {
        const config = envVarSelector(process.env);
        if (config === undefined) {
            throw new Error();
        }
        return config;
    }
    catch (e) {
        throw new dist_es/* CredentialsProviderError */.C1(e.message || `Cannot load config from environment variables with getter: ${envVarSelector}`);
    }
};

// EXTERNAL MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/index.js + 14 modules
var shared_ini_file_loader_dist_es = __webpack_require__(3054);
;// CONCATENATED MODULE: ./node_modules/@smithy/node-config-provider/dist-es/fromSharedConfigFiles.js


const fromSharedConfigFiles = (configSelector, { preferredFile = "config", ...init } = {}) => async () => {
    const profile = (0,shared_ini_file_loader_dist_es/* getProfileName */.Bz)(init);
    const { configFile, credentialsFile } = await (0,shared_ini_file_loader_dist_es/* loadSharedConfigFiles */.p6)(init);
    const profileFromCredentials = credentialsFile[profile] || {};
    const profileFromConfig = configFile[profile] || {};
    const mergedProfile = preferredFile === "config"
        ? { ...profileFromCredentials, ...profileFromConfig }
        : { ...profileFromConfig, ...profileFromCredentials };
    try {
        const cfgFile = preferredFile === "config" ? configFile : credentialsFile;
        const configValue = configSelector(mergedProfile, cfgFile);
        if (configValue === undefined) {
            throw new Error();
        }
        return configValue;
    }
    catch (e) {
        throw new dist_es/* CredentialsProviderError */.C1(e.message || `Cannot load config for profile ${profile} in SDK configuration files with getter: ${configSelector}`);
    }
};

;// CONCATENATED MODULE: ./node_modules/@smithy/node-config-provider/dist-es/fromStatic.js

const isFunction = (func) => typeof func === "function";
const fromStatic = (defaultValue) => isFunction(defaultValue) ? async () => await defaultValue() : (0,dist_es/* fromStatic */.VR)(defaultValue);

;// CONCATENATED MODULE: ./node_modules/@smithy/node-config-provider/dist-es/configLoader.js




const loadConfig = ({ environmentVariableSelector, configFileSelector, default: defaultValue }, configuration = {}) => (0,dist_es/* memoize */.Bj)((0,dist_es/* chain */.cy)(fromEnv(environmentVariableSelector), fromSharedConfigFiles(configFileSelector, configuration), fromStatic(defaultValue)));

;// CONCATENATED MODULE: ./node_modules/@smithy/node-config-provider/dist-es/index.js



/***/ }),

/***/ 4616:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  $c: () => (/* reexport */ NodeHttpHandler),
  kv: () => (/* reexport */ streamCollector)
});

// UNUSED EXPORTS: DEFAULT_REQUEST_TIMEOUT, NodeHttp2Handler

// EXTERNAL MODULE: ./node_modules/@smithy/protocol-http/dist-es/index.js + 5 modules
var dist_es = __webpack_require__(5479);
// EXTERNAL MODULE: ./node_modules/@smithy/querystring-builder/dist-es/index.js
var querystring_builder_dist_es = __webpack_require__(5901);
// EXTERNAL MODULE: external "http"
var external_http_ = __webpack_require__(8611);
// EXTERNAL MODULE: external "https"
var external_https_ = __webpack_require__(5692);
;// CONCATENATED MODULE: ./node_modules/@smithy/node-http-handler/dist-es/constants.js
const NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "EPIPE", "ETIMEDOUT"];

;// CONCATENATED MODULE: ./node_modules/@smithy/node-http-handler/dist-es/get-transformed-headers.js
const get_transformed_headers_getTransformedHeaders = (headers) => {
    const transformedHeaders = {};
    for (const name of Object.keys(headers)) {
        const headerValues = headers[name];
        transformedHeaders[name] = Array.isArray(headerValues) ? headerValues.join(",") : headerValues;
    }
    return transformedHeaders;
};


;// CONCATENATED MODULE: ./node_modules/@smithy/node-http-handler/dist-es/set-connection-timeout.js
const setConnectionTimeout = (request, reject, timeoutInMs = 0) => {
    if (!timeoutInMs) {
        return;
    }
    const timeoutId = setTimeout(() => {
        request.destroy();
        reject(Object.assign(new Error(`Socket timed out without establishing a connection within ${timeoutInMs} ms`), {
            name: "TimeoutError",
        }));
    }, timeoutInMs);
    request.on("socket", (socket) => {
        if (socket.connecting) {
            socket.on("connect", () => {
                clearTimeout(timeoutId);
            });
        }
        else {
            clearTimeout(timeoutId);
        }
    });
};

;// CONCATENATED MODULE: ./node_modules/@smithy/node-http-handler/dist-es/set-socket-keep-alive.js
const setSocketKeepAlive = (request, { keepAlive, keepAliveMsecs }) => {
    if (keepAlive !== true) {
        return;
    }
    request.on("socket", (socket) => {
        socket.setKeepAlive(keepAlive, keepAliveMsecs || 0);
    });
};

;// CONCATENATED MODULE: ./node_modules/@smithy/node-http-handler/dist-es/set-socket-timeout.js
const setSocketTimeout = (request, reject, timeoutInMs = 0) => {
    request.setTimeout(timeoutInMs, () => {
        request.destroy();
        reject(Object.assign(new Error(`Connection timed out after ${timeoutInMs} ms`), { name: "TimeoutError" }));
    });
};

// EXTERNAL MODULE: external "stream"
var external_stream_ = __webpack_require__(2203);
;// CONCATENATED MODULE: ./node_modules/@smithy/node-http-handler/dist-es/write-request-body.js

const MIN_WAIT_TIME = 1000;
async function write_request_body_writeRequestBody(httpRequest, request, maxContinueTimeoutMs = MIN_WAIT_TIME) {
    const headers = request.headers ?? {};
    const expect = headers["Expect"] || headers["expect"];
    let timeoutId = -1;
    let hasError = false;
    if (expect === "100-continue") {
        await Promise.race([
            new Promise((resolve) => {
                timeoutId = Number(setTimeout(resolve, Math.max(MIN_WAIT_TIME, maxContinueTimeoutMs)));
            }),
            new Promise((resolve) => {
                httpRequest.on("continue", () => {
                    clearTimeout(timeoutId);
                    resolve();
                });
                httpRequest.on("error", () => {
                    hasError = true;
                    clearTimeout(timeoutId);
                    resolve();
                });
            }),
        ]);
    }
    if (!hasError) {
        writeBody(httpRequest, request.body);
    }
}
function writeBody(httpRequest, body) {
    if (body instanceof external_stream_.Readable) {
        body.pipe(httpRequest);
        return;
    }
    if (body) {
        if (Buffer.isBuffer(body) || typeof body === "string") {
            httpRequest.end(body);
            return;
        }
        const uint8 = body;
        if (typeof uint8 === "object" &&
            uint8.buffer &&
            typeof uint8.byteOffset === "number" &&
            typeof uint8.byteLength === "number") {
            httpRequest.end(Buffer.from(uint8.buffer, uint8.byteOffset, uint8.byteLength));
            return;
        }
        httpRequest.end(Buffer.from(body));
        return;
    }
    httpRequest.end();
}

;// CONCATENATED MODULE: ./node_modules/@smithy/node-http-handler/dist-es/node-http-handler.js










const DEFAULT_REQUEST_TIMEOUT = 0;
class NodeHttpHandler {
    static create(instanceOrOptions) {
        if (typeof instanceOrOptions?.handle === "function") {
            return instanceOrOptions;
        }
        return new NodeHttpHandler(instanceOrOptions);
    }
    static checkSocketUsage(agent, socketWarningTimestamp) {
        const { sockets, requests, maxSockets } = agent;
        if (typeof maxSockets !== "number" || maxSockets === Infinity) {
            return socketWarningTimestamp;
        }
        const interval = 15000;
        if (Date.now() - interval < socketWarningTimestamp) {
            return socketWarningTimestamp;
        }
        if (sockets && requests) {
            for (const origin in sockets) {
                const socketsInUse = sockets[origin]?.length ?? 0;
                const requestsEnqueued = requests[origin]?.length ?? 0;
                if (socketsInUse >= maxSockets && requestsEnqueued >= 2 * maxSockets) {
                    console.warn("@smithy/node-http-handler:WARN", `socket usage at capacity=${socketsInUse} and ${requestsEnqueued} additional requests are enqueued.`, "See https://docs.aws.amazon.com/sdk-for-javascript/v3/developer-guide/node-configuring-maxsockets.html", "or increase socketAcquisitionWarningTimeout=(millis) in the NodeHttpHandler config.");
                    return Date.now();
                }
            }
        }
        return socketWarningTimestamp;
    }
    constructor(options) {
        this.socketWarningTimestamp = 0;
        this.metadata = { handlerProtocol: "http/1.1" };
        this.configProvider = new Promise((resolve, reject) => {
            if (typeof options === "function") {
                options()
                    .then((_options) => {
                    resolve(this.resolveDefaultConfig(_options));
                })
                    .catch(reject);
            }
            else {
                resolve(this.resolveDefaultConfig(options));
            }
        });
    }
    resolveDefaultConfig(options) {
        const { requestTimeout, connectionTimeout, socketTimeout, httpAgent, httpsAgent } = options || {};
        const keepAlive = true;
        const maxSockets = 50;
        return {
            connectionTimeout,
            requestTimeout: requestTimeout ?? socketTimeout,
            httpAgent: (() => {
                if (httpAgent instanceof external_http_.Agent || typeof httpAgent?.destroy === "function") {
                    return httpAgent;
                }
                return new external_http_.Agent({ keepAlive, maxSockets, ...httpAgent });
            })(),
            httpsAgent: (() => {
                if (httpsAgent instanceof external_https_.Agent || typeof httpsAgent?.destroy === "function") {
                    return httpsAgent;
                }
                return new external_https_.Agent({ keepAlive, maxSockets, ...httpsAgent });
            })(),
        };
    }
    destroy() {
        this.config?.httpAgent?.destroy();
        this.config?.httpsAgent?.destroy();
    }
    async handle(request, { abortSignal } = {}) {
        if (!this.config) {
            this.config = await this.configProvider;
        }
        let socketCheckTimeoutId;
        return new Promise((_resolve, _reject) => {
            let writeRequestBodyPromise = undefined;
            const resolve = async (arg) => {
                await writeRequestBodyPromise;
                clearTimeout(socketCheckTimeoutId);
                _resolve(arg);
            };
            const reject = async (arg) => {
                await writeRequestBodyPromise;
                _reject(arg);
            };
            if (!this.config) {
                throw new Error("Node HTTP request handler config is not resolved");
            }
            if (abortSignal?.aborted) {
                const abortError = new Error("Request aborted");
                abortError.name = "AbortError";
                reject(abortError);
                return;
            }
            const isSSL = request.protocol === "https:";
            const agent = isSSL ? this.config.httpsAgent : this.config.httpAgent;
            socketCheckTimeoutId = setTimeout(() => {
                this.socketWarningTimestamp = NodeHttpHandler.checkSocketUsage(agent, this.socketWarningTimestamp);
            }, this.config.socketAcquisitionWarningTimeout ?? (this.config.requestTimeout ?? 2000) + (this.config.connectionTimeout ?? 1000));
            const queryString = (0,querystring_builder_dist_es/* buildQueryString */.G)(request.query || {});
            let auth = undefined;
            if (request.username != null || request.password != null) {
                const username = request.username ?? "";
                const password = request.password ?? "";
                auth = `${username}:${password}`;
            }
            let path = request.path;
            if (queryString) {
                path += `?${queryString}`;
            }
            if (request.fragment) {
                path += `#${request.fragment}`;
            }
            const nodeHttpsOptions = {
                headers: request.headers,
                host: request.hostname,
                method: request.method,
                path,
                port: request.port,
                agent,
                auth,
            };
            const requestFunc = isSSL ? external_https_.request : external_http_.request;
            const req = requestFunc(nodeHttpsOptions, (res) => {
                const httpResponse = new dist_es/* HttpResponse */.cS({
                    statusCode: res.statusCode || -1,
                    reason: res.statusMessage,
                    headers: get_transformed_headers_getTransformedHeaders(res.headers),
                    body: res,
                });
                resolve({ response: httpResponse });
            });
            req.on("error", (err) => {
                if (NODEJS_TIMEOUT_ERROR_CODES.includes(err.code)) {
                    reject(Object.assign(err, { name: "TimeoutError" }));
                }
                else {
                    reject(err);
                }
            });
            setConnectionTimeout(req, reject, this.config.connectionTimeout);
            setSocketTimeout(req, reject, this.config.requestTimeout);
            if (abortSignal) {
                abortSignal.onabort = () => {
                    req.abort();
                    const abortError = new Error("Request aborted");
                    abortError.name = "AbortError";
                    reject(abortError);
                };
            }
            const httpAgent = nodeHttpsOptions.agent;
            if (typeof httpAgent === "object" && "keepAlive" in httpAgent) {
                setSocketKeepAlive(req, {
                    keepAlive: httpAgent.keepAlive,
                    keepAliveMsecs: httpAgent.keepAliveMsecs,
                });
            }
            writeRequestBodyPromise = write_request_body_writeRequestBody(req, request, this.config.requestTimeout).catch(_reject);
        });
    }
    updateHttpClientConfig(key, value) {
        this.config = undefined;
        this.configProvider = this.configProvider.then((config) => {
            return {
                ...config,
                [key]: value,
            };
        });
    }
    httpHandlerConfigs() {
        return this.config ?? {};
    }
}

;// CONCATENATED MODULE: external "http2"
const external_http2_namespaceObject = require("http2");
;// CONCATENATED MODULE: ./node_modules/@smithy/node-http-handler/dist-es/node-http2-connection-pool.js
class node_http2_connection_pool_NodeHttp2ConnectionPool {
    constructor(sessions) {
        this.sessions = [];
        this.sessions = sessions ?? [];
    }
    poll() {
        if (this.sessions.length > 0) {
            return this.sessions.shift();
        }
    }
    offerLast(session) {
        this.sessions.push(session);
    }
    contains(session) {
        return this.sessions.includes(session);
    }
    remove(session) {
        this.sessions = this.sessions.filter((s) => s !== session);
    }
    [Symbol.iterator]() {
        return this.sessions[Symbol.iterator]();
    }
    destroy(connection) {
        for (const session of this.sessions) {
            if (session === connection) {
                if (!session.destroyed) {
                    session.destroy();
                }
            }
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/node-http-handler/dist-es/node-http2-connection-manager.js


class node_http2_connection_manager_NodeHttp2ConnectionManager {
    constructor(config) {
        this.sessionCache = new Map();
        this.config = config;
        if (this.config.maxConcurrency && this.config.maxConcurrency <= 0) {
            throw new RangeError("maxConcurrency must be greater than zero.");
        }
    }
    lease(requestContext, connectionConfiguration) {
        const url = this.getUrlString(requestContext);
        const existingPool = this.sessionCache.get(url);
        if (existingPool) {
            const existingSession = existingPool.poll();
            if (existingSession && !this.config.disableConcurrency) {
                return existingSession;
            }
        }
        const session = http2.connect(url);
        if (this.config.maxConcurrency) {
            session.settings({ maxConcurrentStreams: this.config.maxConcurrency }, (err) => {
                if (err) {
                    throw new Error("Fail to set maxConcurrentStreams to " +
                        this.config.maxConcurrency +
                        "when creating new session for " +
                        requestContext.destination.toString());
                }
            });
        }
        session.unref();
        const destroySessionCb = () => {
            session.destroy();
            this.deleteSession(url, session);
        };
        session.on("goaway", destroySessionCb);
        session.on("error", destroySessionCb);
        session.on("frameError", destroySessionCb);
        session.on("close", () => this.deleteSession(url, session));
        if (connectionConfiguration.requestTimeout) {
            session.setTimeout(connectionConfiguration.requestTimeout, destroySessionCb);
        }
        const connectionPool = this.sessionCache.get(url) || new NodeHttp2ConnectionPool();
        connectionPool.offerLast(session);
        this.sessionCache.set(url, connectionPool);
        return session;
    }
    deleteSession(authority, session) {
        const existingConnectionPool = this.sessionCache.get(authority);
        if (!existingConnectionPool) {
            return;
        }
        if (!existingConnectionPool.contains(session)) {
            return;
        }
        existingConnectionPool.remove(session);
        this.sessionCache.set(authority, existingConnectionPool);
    }
    release(requestContext, session) {
        const cacheKey = this.getUrlString(requestContext);
        this.sessionCache.get(cacheKey)?.offerLast(session);
    }
    destroy() {
        for (const [key, connectionPool] of this.sessionCache) {
            for (const session of connectionPool) {
                if (!session.destroyed) {
                    session.destroy();
                }
                connectionPool.remove(session);
            }
            this.sessionCache.delete(key);
        }
    }
    setMaxConcurrentStreams(maxConcurrentStreams) {
        if (this.config.maxConcurrency && this.config.maxConcurrency <= 0) {
            throw new RangeError("maxConcurrentStreams must be greater than zero.");
        }
        this.config.maxConcurrency = maxConcurrentStreams;
    }
    setDisableConcurrentStreams(disableConcurrentStreams) {
        this.config.disableConcurrency = disableConcurrentStreams;
    }
    getUrlString(request) {
        return request.destination.toString();
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/node-http-handler/dist-es/node-http2-handler.js






class NodeHttp2Handler {
    static create(instanceOrOptions) {
        if (typeof instanceOrOptions?.handle === "function") {
            return instanceOrOptions;
        }
        return new NodeHttp2Handler(instanceOrOptions);
    }
    constructor(options) {
        this.metadata = { handlerProtocol: "h2" };
        this.connectionManager = new NodeHttp2ConnectionManager({});
        this.configProvider = new Promise((resolve, reject) => {
            if (typeof options === "function") {
                options()
                    .then((opts) => {
                    resolve(opts || {});
                })
                    .catch(reject);
            }
            else {
                resolve(options || {});
            }
        });
    }
    destroy() {
        this.connectionManager.destroy();
    }
    async handle(request, { abortSignal } = {}) {
        if (!this.config) {
            this.config = await this.configProvider;
            this.connectionManager.setDisableConcurrentStreams(this.config.disableConcurrentStreams || false);
            if (this.config.maxConcurrentStreams) {
                this.connectionManager.setMaxConcurrentStreams(this.config.maxConcurrentStreams);
            }
        }
        const { requestTimeout, disableConcurrentStreams } = this.config;
        return new Promise((_resolve, _reject) => {
            let fulfilled = false;
            let writeRequestBodyPromise = undefined;
            const resolve = async (arg) => {
                await writeRequestBodyPromise;
                _resolve(arg);
            };
            const reject = async (arg) => {
                await writeRequestBodyPromise;
                _reject(arg);
            };
            if (abortSignal?.aborted) {
                fulfilled = true;
                const abortError = new Error("Request aborted");
                abortError.name = "AbortError";
                reject(abortError);
                return;
            }
            const { hostname, method, port, protocol, query } = request;
            let auth = "";
            if (request.username != null || request.password != null) {
                const username = request.username ?? "";
                const password = request.password ?? "";
                auth = `${username}:${password}@`;
            }
            const authority = `${protocol}//${auth}${hostname}${port ? `:${port}` : ""}`;
            const requestContext = { destination: new URL(authority) };
            const session = this.connectionManager.lease(requestContext, {
                requestTimeout: this.config?.sessionTimeout,
                disableConcurrentStreams: disableConcurrentStreams || false,
            });
            const rejectWithDestroy = (err) => {
                if (disableConcurrentStreams) {
                    this.destroySession(session);
                }
                fulfilled = true;
                reject(err);
            };
            const queryString = buildQueryString(query || {});
            let path = request.path;
            if (queryString) {
                path += `?${queryString}`;
            }
            if (request.fragment) {
                path += `#${request.fragment}`;
            }
            const req = session.request({
                ...request.headers,
                [constants.HTTP2_HEADER_PATH]: path,
                [constants.HTTP2_HEADER_METHOD]: method,
            });
            session.ref();
            req.on("response", (headers) => {
                const httpResponse = new HttpResponse({
                    statusCode: headers[":status"] || -1,
                    headers: getTransformedHeaders(headers),
                    body: req,
                });
                fulfilled = true;
                resolve({ response: httpResponse });
                if (disableConcurrentStreams) {
                    session.close();
                    this.connectionManager.deleteSession(authority, session);
                }
            });
            if (requestTimeout) {
                req.setTimeout(requestTimeout, () => {
                    req.close();
                    const timeoutError = new Error(`Stream timed out because of no activity for ${requestTimeout} ms`);
                    timeoutError.name = "TimeoutError";
                    rejectWithDestroy(timeoutError);
                });
            }
            if (abortSignal) {
                abortSignal.onabort = () => {
                    req.close();
                    const abortError = new Error("Request aborted");
                    abortError.name = "AbortError";
                    rejectWithDestroy(abortError);
                };
            }
            req.on("frameError", (type, code, id) => {
                rejectWithDestroy(new Error(`Frame type id ${type} in stream id ${id} has failed with code ${code}.`));
            });
            req.on("error", rejectWithDestroy);
            req.on("aborted", () => {
                rejectWithDestroy(new Error(`HTTP/2 stream is abnormally aborted in mid-communication with result code ${req.rstCode}.`));
            });
            req.on("close", () => {
                session.unref();
                if (disableConcurrentStreams) {
                    session.destroy();
                }
                if (!fulfilled) {
                    rejectWithDestroy(new Error("Unexpected error: http2 request did not get a response"));
                }
            });
            writeRequestBodyPromise = writeRequestBody(req, request, requestTimeout);
        });
    }
    updateHttpClientConfig(key, value) {
        this.config = undefined;
        this.configProvider = this.configProvider.then((config) => {
            return {
                ...config,
                [key]: value,
            };
        });
    }
    httpHandlerConfigs() {
        return this.config ?? {};
    }
    destroySession(session) {
        if (!session.destroyed) {
            session.destroy();
        }
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/node-http-handler/dist-es/stream-collector/collector.js

class Collector extends external_stream_.Writable {
    constructor() {
        super(...arguments);
        this.bufferedBytes = [];
    }
    _write(chunk, encoding, callback) {
        this.bufferedBytes.push(chunk);
        callback();
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/node-http-handler/dist-es/stream-collector/index.js

const streamCollector = (stream) => new Promise((resolve, reject) => {
    const collector = new Collector();
    stream.pipe(collector);
    stream.on("error", (err) => {
        collector.end();
        reject(err);
    });
    collector.on("error", reject);
    collector.on("finish", function () {
        const bytes = new Uint8Array(Buffer.concat(this.bufferedBytes));
        resolve(bytes);
    });
});

;// CONCATENATED MODULE: ./node_modules/@smithy/node-http-handler/dist-es/index.js





/***/ }),

/***/ 8112:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  C1: () => (/* reexport */ CredentialsProviderError),
  mZ: () => (/* reexport */ ProviderError),
  Jh: () => (/* reexport */ TokenProviderError),
  cy: () => (/* reexport */ chain),
  VR: () => (/* reexport */ fromStatic),
  Bj: () => (/* reexport */ memoize)
});

;// CONCATENATED MODULE: ./node_modules/@smithy/property-provider/dist-es/ProviderError.js
class ProviderError extends Error {
    constructor(message, tryNextLink = true) {
        super(message);
        this.tryNextLink = tryNextLink;
        this.name = "ProviderError";
        Object.setPrototypeOf(this, ProviderError.prototype);
    }
    static from(error, tryNextLink = true) {
        return Object.assign(new this(error.message, tryNextLink), error);
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/property-provider/dist-es/CredentialsProviderError.js

class CredentialsProviderError extends ProviderError {
    constructor(message, tryNextLink = true) {
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        this.name = "CredentialsProviderError";
        Object.setPrototypeOf(this, CredentialsProviderError.prototype);
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/property-provider/dist-es/TokenProviderError.js

class TokenProviderError extends ProviderError {
    constructor(message, tryNextLink = true) {
        super(message, tryNextLink);
        this.tryNextLink = tryNextLink;
        this.name = "TokenProviderError";
        Object.setPrototypeOf(this, TokenProviderError.prototype);
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/property-provider/dist-es/chain.js

const chain = (...providers) => async () => {
    if (providers.length === 0) {
        throw new ProviderError("No providers in chain");
    }
    let lastProviderError;
    for (const provider of providers) {
        try {
            const credentials = await provider();
            return credentials;
        }
        catch (err) {
            lastProviderError = err;
            if (err?.tryNextLink) {
                continue;
            }
            throw err;
        }
    }
    throw lastProviderError;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/property-provider/dist-es/fromStatic.js
const fromStatic = (staticValue) => () => Promise.resolve(staticValue);

;// CONCATENATED MODULE: ./node_modules/@smithy/property-provider/dist-es/memoize.js
const memoize = (provider, isExpired, requiresRefresh) => {
    let resolved;
    let pending;
    let hasResult;
    let isConstant = false;
    const coalesceProvider = async () => {
        if (!pending) {
            pending = provider();
        }
        try {
            resolved = await pending;
            hasResult = true;
            isConstant = false;
        }
        finally {
            pending = undefined;
        }
        return resolved;
    };
    if (isExpired === undefined) {
        return async (options) => {
            if (!hasResult || options?.forceRefresh) {
                resolved = await coalesceProvider();
            }
            return resolved;
        };
    }
    return async (options) => {
        if (!hasResult || options?.forceRefresh) {
            resolved = await coalesceProvider();
        }
        if (isConstant) {
            return resolved;
        }
        if (requiresRefresh && !requiresRefresh(resolved)) {
            isConstant = true;
            return resolved;
        }
        if (isExpired(resolved)) {
            await coalesceProvider();
            return resolved;
        }
        return resolved;
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/property-provider/dist-es/index.js








/***/ }),

/***/ 5479:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Kd: () => (/* reexport */ HttpRequest),
  cS: () => (/* reexport */ HttpResponse),
  eS: () => (/* reexport */ getHttpHandlerExtensionConfiguration),
  jt: () => (/* reexport */ resolveHttpHandlerRuntimeConfig)
});

// UNUSED EXPORTS: Field, Fields, isValidHostname

;// CONCATENATED MODULE: ./node_modules/@smithy/protocol-http/dist-es/extensions/httpExtensionConfiguration.js
const getHttpHandlerExtensionConfiguration = (runtimeConfig) => {
    let httpHandler = runtimeConfig.httpHandler;
    return {
        setHttpHandler(handler) {
            httpHandler = handler;
        },
        httpHandler() {
            return httpHandler;
        },
        updateHttpClientConfig(key, value) {
            httpHandler.updateHttpClientConfig(key, value);
        },
        httpHandlerConfigs() {
            return httpHandler.httpHandlerConfigs();
        },
    };
};
const resolveHttpHandlerRuntimeConfig = (httpHandlerExtensionConfiguration) => {
    return {
        httpHandler: httpHandlerExtensionConfiguration.httpHandler(),
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/protocol-http/dist-es/extensions/index.js


// EXTERNAL MODULE: ./node_modules/@smithy/types/dist-es/index.js + 11 modules
var dist_es = __webpack_require__(7523);
;// CONCATENATED MODULE: ./node_modules/@smithy/protocol-http/dist-es/Field.js

class Field {
    constructor({ name, kind = FieldPosition.HEADER, values = [] }) {
        this.name = name;
        this.kind = kind;
        this.values = values;
    }
    add(value) {
        this.values.push(value);
    }
    set(values) {
        this.values = values;
    }
    remove(value) {
        this.values = this.values.filter((v) => v !== value);
    }
    toString() {
        return this.values.map((v) => (v.includes(",") || v.includes(" ") ? `"${v}"` : v)).join(", ");
    }
    get() {
        return this.values;
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/protocol-http/dist-es/httpRequest.js
class HttpRequest {
    constructor(options) {
        this.method = options.method || "GET";
        this.hostname = options.hostname || "localhost";
        this.port = options.port;
        this.query = options.query || {};
        this.headers = options.headers || {};
        this.body = options.body;
        this.protocol = options.protocol
            ? options.protocol.slice(-1) !== ":"
                ? `${options.protocol}:`
                : options.protocol
            : "https:";
        this.path = options.path ? (options.path.charAt(0) !== "/" ? `/${options.path}` : options.path) : "/";
        this.username = options.username;
        this.password = options.password;
        this.fragment = options.fragment;
    }
    static isInstance(request) {
        if (!request)
            return false;
        const req = request;
        return ("method" in req &&
            "protocol" in req &&
            "hostname" in req &&
            "path" in req &&
            typeof req["query"] === "object" &&
            typeof req["headers"] === "object");
    }
    clone() {
        const cloned = new HttpRequest({
            ...this,
            headers: { ...this.headers },
        });
        if (cloned.query)
            cloned.query = cloneQuery(cloned.query);
        return cloned;
    }
}
function cloneQuery(query) {
    return Object.keys(query).reduce((carry, paramName) => {
        const param = query[paramName];
        return {
            ...carry,
            [paramName]: Array.isArray(param) ? [...param] : param,
        };
    }, {});
}

;// CONCATENATED MODULE: ./node_modules/@smithy/protocol-http/dist-es/httpResponse.js
class HttpResponse {
    constructor(options) {
        this.statusCode = options.statusCode;
        this.reason = options.reason;
        this.headers = options.headers || {};
        this.body = options.body;
    }
    static isInstance(response) {
        if (!response)
            return false;
        const resp = response;
        return typeof resp.statusCode === "number" && typeof resp.headers === "object";
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/protocol-http/dist-es/index.js










/***/ }),

/***/ 5901:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   G: () => (/* binding */ buildQueryString)
/* harmony export */ });
/* harmony import */ var _smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2531);

function buildQueryString(query) {
    const parts = [];
    for (let key of Object.keys(query).sort()) {
        const value = query[key];
        key = (0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__/* .escapeUri */ .o)(key);
        if (Array.isArray(value)) {
            for (let i = 0, iLen = value.length; i < iLen; i++) {
                parts.push(`${key}=${(0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__/* .escapeUri */ .o)(value[i])}`);
            }
        }
        else {
            let qsEntry = key;
            if (value || typeof value === "string") {
                qsEntry += `=${(0,_smithy_util_uri_escape__WEBPACK_IMPORTED_MODULE_0__/* .escapeUri */ .o)(value)}`;
            }
            parts.push(qsEntry);
        }
    }
    return parts.join("&");
}


/***/ }),

/***/ 4542:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  h5: () => (/* binding */ isClockSkewError),
  S0: () => (/* binding */ isRetryableByTrait),
  GQ: () => (/* binding */ isServerError),
  Qb: () => (/* binding */ isThrottlingError),
  bV: () => (/* binding */ isTransientError)
});

// UNUSED EXPORTS: isClockSkewCorrectedError

;// CONCATENATED MODULE: ./node_modules/@smithy/service-error-classification/dist-es/constants.js
const CLOCK_SKEW_ERROR_CODES = [
    "AuthFailure",
    "InvalidSignatureException",
    "RequestExpired",
    "RequestInTheFuture",
    "RequestTimeTooSkewed",
    "SignatureDoesNotMatch",
];
const THROTTLING_ERROR_CODES = [
    "BandwidthLimitExceeded",
    "EC2ThrottledException",
    "LimitExceededException",
    "PriorRequestNotComplete",
    "ProvisionedThroughputExceededException",
    "RequestLimitExceeded",
    "RequestThrottled",
    "RequestThrottledException",
    "SlowDown",
    "ThrottledException",
    "Throttling",
    "ThrottlingException",
    "TooManyRequestsException",
    "TransactionInProgressException",
];
const TRANSIENT_ERROR_CODES = ["TimeoutError", "RequestTimeout", "RequestTimeoutException"];
const TRANSIENT_ERROR_STATUS_CODES = [500, 502, 503, 504];
const NODEJS_TIMEOUT_ERROR_CODES = ["ECONNRESET", "ECONNREFUSED", "EPIPE", "ETIMEDOUT"];

;// CONCATENATED MODULE: ./node_modules/@smithy/service-error-classification/dist-es/index.js

const isRetryableByTrait = (error) => error.$retryable !== undefined;
const isClockSkewError = (error) => CLOCK_SKEW_ERROR_CODES.includes(error.name);
const isClockSkewCorrectedError = (error) => error.$metadata?.clockSkewCorrected;
const isThrottlingError = (error) => error.$metadata?.httpStatusCode === 429 ||
    THROTTLING_ERROR_CODES.includes(error.name) ||
    error.$retryable?.throttling == true;
const isTransientError = (error) => isClockSkewCorrectedError(error) ||
    TRANSIENT_ERROR_CODES.includes(error.name) ||
    NODEJS_TIMEOUT_ERROR_CODES.includes(error?.code || "") ||
    TRANSIENT_ERROR_STATUS_CODES.includes(error.$metadata?.httpStatusCode || 0);
const isServerError = (error) => {
    if (error.$metadata?.httpStatusCode !== undefined) {
        const statusCode = error.$metadata.httpStatusCode;
        if (500 <= statusCode && statusCode <= 599 && !isTransientError(error)) {
            return true;
        }
        return false;
    }
    return false;
};


/***/ }),

/***/ 3054:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  QD: () => (/* reexport */ CONFIG_PREFIX_SEPARATOR),
  Ch: () => (/* reexport */ ENV_PROFILE),
  Bz: () => (/* reexport */ getProfileName),
  C9: () => (/* reexport */ getSSOTokenFilepath),
  vf: () => (/* reexport */ getSSOTokenFromFile),
  p6: () => (/* reexport */ loadSharedConfigFiles),
  qw: () => (/* reexport */ loadSsoSessionData),
  YU: () => (/* reexport */ parseKnownFiles)
});

// UNUSED EXPORTS: DEFAULT_PROFILE, getHomeDir

// EXTERNAL MODULE: external "os"
var external_os_ = __webpack_require__(857);
// EXTERNAL MODULE: external "path"
var external_path_ = __webpack_require__(6928);
;// CONCATENATED MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/getHomeDir.js


const homeDirCache = {};
const getHomeDirCacheKey = () => {
    if (process && process.geteuid) {
        return `${process.geteuid()}`;
    }
    return "DEFAULT";
};
const getHomeDir = () => {
    const { HOME, USERPROFILE, HOMEPATH, HOMEDRIVE = `C:${external_path_.sep}` } = process.env;
    if (HOME)
        return HOME;
    if (USERPROFILE)
        return USERPROFILE;
    if (HOMEPATH)
        return `${HOMEDRIVE}${HOMEPATH}`;
    const homeDirCacheKey = getHomeDirCacheKey();
    if (!homeDirCache[homeDirCacheKey])
        homeDirCache[homeDirCacheKey] = (0,external_os_.homedir)();
    return homeDirCache[homeDirCacheKey];
};

;// CONCATENATED MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/getProfileName.js
const ENV_PROFILE = "AWS_PROFILE";
const DEFAULT_PROFILE = "default";
const getProfileName = (init) => init.profile || process.env[ENV_PROFILE] || DEFAULT_PROFILE;

// EXTERNAL MODULE: external "crypto"
var external_crypto_ = __webpack_require__(6982);
;// CONCATENATED MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/getSSOTokenFilepath.js



const getSSOTokenFilepath = (id) => {
    const hasher = (0,external_crypto_.createHash)("sha1");
    const cacheName = hasher.update(id).digest("hex");
    return (0,external_path_.join)(getHomeDir(), ".aws", "sso", "cache", `${cacheName}.json`);
};

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(9896);
;// CONCATENATED MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/getSSOTokenFromFile.js


const { readFile } = external_fs_.promises;
const getSSOTokenFromFile = async (id) => {
    const ssoTokenFilepath = getSSOTokenFilepath(id);
    const ssoTokenText = await readFile(ssoTokenFilepath, "utf8");
    return JSON.parse(ssoTokenText);
};

// EXTERNAL MODULE: ./node_modules/@smithy/types/dist-es/index.js + 11 modules
var dist_es = __webpack_require__(7523);
;// CONCATENATED MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/getConfigData.js


const getConfigData = (data) => Object.entries(data)
    .filter(([key]) => {
    const indexOfSeparator = key.indexOf(CONFIG_PREFIX_SEPARATOR);
    if (indexOfSeparator === -1) {
        return false;
    }
    return Object.values(dist_es/* IniSectionType */.Ip).includes(key.substring(0, indexOfSeparator));
})
    .reduce((acc, [key, value]) => {
    const indexOfSeparator = key.indexOf(CONFIG_PREFIX_SEPARATOR);
    const updatedKey = key.substring(0, indexOfSeparator) === dist_es/* IniSectionType */.Ip.PROFILE ? key.substring(indexOfSeparator + 1) : key;
    acc[updatedKey] = value;
    return acc;
}, {
    ...(data.default && { default: data.default }),
});

;// CONCATENATED MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/getConfigFilepath.js


const ENV_CONFIG_PATH = "AWS_CONFIG_FILE";
const getConfigFilepath = () => process.env[ENV_CONFIG_PATH] || (0,external_path_.join)(getHomeDir(), ".aws", "config");

;// CONCATENATED MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/getCredentialsFilepath.js


const ENV_CREDENTIALS_PATH = "AWS_SHARED_CREDENTIALS_FILE";
const getCredentialsFilepath = () => process.env[ENV_CREDENTIALS_PATH] || (0,external_path_.join)(getHomeDir(), ".aws", "credentials");

;// CONCATENATED MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/parseIni.js


const prefixKeyRegex = /^([\w-]+)\s(["'])?([\w-@\+\.%:/]+)\2$/;
const profileNameBlockList = ["__proto__", "profile __proto__"];
const parseIni = (iniData) => {
    const map = {};
    let currentSection;
    let currentSubSection;
    for (const iniLine of iniData.split(/\r?\n/)) {
        const trimmedLine = iniLine.split(/(^|\s)[;#]/)[0].trim();
        const isSection = trimmedLine[0] === "[" && trimmedLine[trimmedLine.length - 1] === "]";
        if (isSection) {
            currentSection = undefined;
            currentSubSection = undefined;
            const sectionName = trimmedLine.substring(1, trimmedLine.length - 1);
            const matches = prefixKeyRegex.exec(sectionName);
            if (matches) {
                const [, prefix, , name] = matches;
                if (Object.values(dist_es/* IniSectionType */.Ip).includes(prefix)) {
                    currentSection = [prefix, name].join(CONFIG_PREFIX_SEPARATOR);
                }
            }
            else {
                currentSection = sectionName;
            }
            if (profileNameBlockList.includes(sectionName)) {
                throw new Error(`Found invalid profile name "${sectionName}"`);
            }
        }
        else if (currentSection) {
            const indexOfEqualsSign = trimmedLine.indexOf("=");
            if (![0, -1].includes(indexOfEqualsSign)) {
                const [name, value] = [
                    trimmedLine.substring(0, indexOfEqualsSign).trim(),
                    trimmedLine.substring(indexOfEqualsSign + 1).trim(),
                ];
                if (value === "") {
                    currentSubSection = name;
                }
                else {
                    if (currentSubSection && iniLine.trimStart() === iniLine) {
                        currentSubSection = undefined;
                    }
                    map[currentSection] = map[currentSection] || {};
                    const key = currentSubSection ? [currentSubSection, name].join(CONFIG_PREFIX_SEPARATOR) : name;
                    map[currentSection][key] = value;
                }
            }
        }
    }
    return map;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/slurpFile.js

const { readFile: slurpFile_readFile } = external_fs_.promises;
const filePromisesHash = {};
const slurpFile = (path, options) => {
    if (!filePromisesHash[path] || options?.ignoreCache) {
        filePromisesHash[path] = slurpFile_readFile(path, "utf8");
    }
    return filePromisesHash[path];
};

;// CONCATENATED MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/loadSharedConfigFiles.js





const swallowError = () => ({});
const CONFIG_PREFIX_SEPARATOR = ".";
const loadSharedConfigFiles = async (init = {}) => {
    const { filepath = getCredentialsFilepath(), configFilepath = getConfigFilepath() } = init;
    const parsedFiles = await Promise.all([
        slurpFile(configFilepath, {
            ignoreCache: init.ignoreCache,
        })
            .then(parseIni)
            .then(getConfigData)
            .catch(swallowError),
        slurpFile(filepath, {
            ignoreCache: init.ignoreCache,
        })
            .then(parseIni)
            .catch(swallowError),
    ]);
    return {
        configFile: parsedFiles[0],
        credentialsFile: parsedFiles[1],
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/getSsoSessionData.js


const getSsoSessionData = (data) => Object.entries(data)
    .filter(([key]) => key.startsWith(dist_es/* IniSectionType */.Ip.SSO_SESSION + CONFIG_PREFIX_SEPARATOR))
    .reduce((acc, [key, value]) => ({ ...acc, [key.substring(key.indexOf(CONFIG_PREFIX_SEPARATOR) + 1)]: value }), {});

;// CONCATENATED MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/loadSsoSessionData.js




const loadSsoSessionData_swallowError = () => ({});
const loadSsoSessionData = async (init = {}) => slurpFile(init.configFilepath ?? getConfigFilepath())
    .then(parseIni)
    .then(getSsoSessionData)
    .catch(loadSsoSessionData_swallowError);

;// CONCATENATED MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/mergeConfigFiles.js
const mergeConfigFiles = (...files) => {
    const merged = {};
    for (const file of files) {
        for (const [key, values] of Object.entries(file)) {
            if (merged[key] !== undefined) {
                Object.assign(merged[key], values);
            }
            else {
                merged[key] = values;
            }
        }
    }
    return merged;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/parseKnownFiles.js


const parseKnownFiles = async (init) => {
    const parsedFiles = await loadSharedConfigFiles(init);
    return mergeConfigFiles(parsedFiles.configFile, parsedFiles.credentialsFile);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/shared-ini-file-loader/dist-es/index.js










/***/ }),

/***/ 5993:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  BB: () => (/* reexport */ SignatureV4)
});

// UNUSED EXPORTS: clearCredentialCache, createScope, getCanonicalHeaders, getCanonicalQuery, getPayloadHash, getSigningKey, moveHeadersToQuery, prepareRequest

// EXTERNAL MODULE: ./node_modules/@smithy/util-hex-encoding/dist-es/index.js
var dist_es = __webpack_require__(8004);
// EXTERNAL MODULE: ./node_modules/@smithy/util-middleware/dist-es/index.js + 2 modules
var util_middleware_dist_es = __webpack_require__(7135);
// EXTERNAL MODULE: ./node_modules/@smithy/util-utf8/dist-es/index.js + 3 modules
var util_utf8_dist_es = __webpack_require__(3197);
;// CONCATENATED MODULE: ./node_modules/@smithy/signature-v4/dist-es/constants.js
const ALGORITHM_QUERY_PARAM = "X-Amz-Algorithm";
const CREDENTIAL_QUERY_PARAM = "X-Amz-Credential";
const AMZ_DATE_QUERY_PARAM = "X-Amz-Date";
const SIGNED_HEADERS_QUERY_PARAM = "X-Amz-SignedHeaders";
const EXPIRES_QUERY_PARAM = "X-Amz-Expires";
const SIGNATURE_QUERY_PARAM = "X-Amz-Signature";
const TOKEN_QUERY_PARAM = "X-Amz-Security-Token";
const REGION_SET_PARAM = "X-Amz-Region-Set";
const AUTH_HEADER = "authorization";
const AMZ_DATE_HEADER = AMZ_DATE_QUERY_PARAM.toLowerCase();
const DATE_HEADER = "date";
const GENERATED_HEADERS = [AUTH_HEADER, AMZ_DATE_HEADER, DATE_HEADER];
const SIGNATURE_HEADER = SIGNATURE_QUERY_PARAM.toLowerCase();
const SHA256_HEADER = "x-amz-content-sha256";
const TOKEN_HEADER = TOKEN_QUERY_PARAM.toLowerCase();
const HOST_HEADER = "host";
const ALWAYS_UNSIGNABLE_HEADERS = {
    authorization: true,
    "cache-control": true,
    connection: true,
    expect: true,
    from: true,
    "keep-alive": true,
    "max-forwards": true,
    pragma: true,
    referer: true,
    te: true,
    trailer: true,
    "transfer-encoding": true,
    upgrade: true,
    "user-agent": true,
    "x-amzn-trace-id": true,
};
const PROXY_HEADER_PATTERN = /^proxy-/;
const SEC_HEADER_PATTERN = /^sec-/;
const UNSIGNABLE_PATTERNS = (/* unused pure expression or super */ null && ([/^proxy-/i, /^sec-/i]));
const ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256";
const ALGORITHM_IDENTIFIER_V4A = "AWS4-ECDSA-P256-SHA256";
const EVENT_ALGORITHM_IDENTIFIER = "AWS4-HMAC-SHA256-PAYLOAD";
const UNSIGNED_PAYLOAD = "UNSIGNED-PAYLOAD";
const MAX_CACHE_SIZE = 50;
const KEY_TYPE_IDENTIFIER = "aws4_request";
const MAX_PRESIGNED_TTL = 60 * 60 * 24 * 7;

;// CONCATENATED MODULE: ./node_modules/@smithy/signature-v4/dist-es/credentialDerivation.js



const signingKeyCache = {};
const cacheQueue = [];
const createScope = (shortDate, region, service) => `${shortDate}/${region}/${service}/${KEY_TYPE_IDENTIFIER}`;
const getSigningKey = async (sha256Constructor, credentials, shortDate, region, service) => {
    const credsHash = await hmac(sha256Constructor, credentials.secretAccessKey, credentials.accessKeyId);
    const cacheKey = `${shortDate}:${region}:${service}:${(0,dist_es/* toHex */.n)(credsHash)}:${credentials.sessionToken}`;
    if (cacheKey in signingKeyCache) {
        return signingKeyCache[cacheKey];
    }
    cacheQueue.push(cacheKey);
    while (cacheQueue.length > MAX_CACHE_SIZE) {
        delete signingKeyCache[cacheQueue.shift()];
    }
    let key = `AWS4${credentials.secretAccessKey}`;
    for (const signable of [shortDate, region, service, KEY_TYPE_IDENTIFIER]) {
        key = await hmac(sha256Constructor, key, signable);
    }
    return (signingKeyCache[cacheKey] = key);
};
const clearCredentialCache = () => {
    cacheQueue.length = 0;
    Object.keys(signingKeyCache).forEach((cacheKey) => {
        delete signingKeyCache[cacheKey];
    });
};
const hmac = (ctor, secret, data) => {
    const hash = new ctor(secret);
    hash.update((0,util_utf8_dist_es/* toUint8Array */.Fo)(data));
    return hash.digest();
};

;// CONCATENATED MODULE: ./node_modules/@smithy/signature-v4/dist-es/getCanonicalHeaders.js

const getCanonicalHeaders = ({ headers }, unsignableHeaders, signableHeaders) => {
    const canonical = {};
    for (const headerName of Object.keys(headers).sort()) {
        if (headers[headerName] == undefined) {
            continue;
        }
        const canonicalHeaderName = headerName.toLowerCase();
        if (canonicalHeaderName in ALWAYS_UNSIGNABLE_HEADERS ||
            unsignableHeaders?.has(canonicalHeaderName) ||
            PROXY_HEADER_PATTERN.test(canonicalHeaderName) ||
            SEC_HEADER_PATTERN.test(canonicalHeaderName)) {
            if (!signableHeaders || (signableHeaders && !signableHeaders.has(canonicalHeaderName))) {
                continue;
            }
        }
        canonical[canonicalHeaderName] = headers[headerName].trim().replace(/\s+/g, " ");
    }
    return canonical;
};

// EXTERNAL MODULE: ./node_modules/@smithy/util-uri-escape/dist-es/escape-uri.js
var escape_uri = __webpack_require__(2531);
;// CONCATENATED MODULE: ./node_modules/@smithy/signature-v4/dist-es/getCanonicalQuery.js


const getCanonicalQuery = ({ query = {} }) => {
    const keys = [];
    const serialized = {};
    for (const key of Object.keys(query).sort()) {
        if (key.toLowerCase() === SIGNATURE_HEADER) {
            continue;
        }
        keys.push(key);
        const value = query[key];
        if (typeof value === "string") {
            serialized[key] = `${(0,escape_uri/* escapeUri */.o)(key)}=${(0,escape_uri/* escapeUri */.o)(value)}`;
        }
        else if (Array.isArray(value)) {
            serialized[key] = value
                .slice(0)
                .reduce((encoded, value) => encoded.concat([`${(0,escape_uri/* escapeUri */.o)(key)}=${(0,escape_uri/* escapeUri */.o)(value)}`]), [])
                .sort()
                .join("&");
        }
    }
    return keys
        .map((key) => serialized[key])
        .filter((serialized) => serialized)
        .join("&");
};

// EXTERNAL MODULE: ./node_modules/@smithy/is-array-buffer/dist-es/index.js
var is_array_buffer_dist_es = __webpack_require__(3695);
;// CONCATENATED MODULE: ./node_modules/@smithy/signature-v4/dist-es/getPayloadHash.js




const getPayloadHash = async ({ headers, body }, hashConstructor) => {
    for (const headerName of Object.keys(headers)) {
        if (headerName.toLowerCase() === SHA256_HEADER) {
            return headers[headerName];
        }
    }
    if (body == undefined) {
        return "e3b0c44298fc1c149afbf4c8996fb92427ae41e4649b934ca495991b7852b855";
    }
    else if (typeof body === "string" || ArrayBuffer.isView(body) || (0,is_array_buffer_dist_es/* isArrayBuffer */.m)(body)) {
        const hashCtor = new hashConstructor();
        hashCtor.update((0,util_utf8_dist_es/* toUint8Array */.Fo)(body));
        return (0,dist_es/* toHex */.n)(await hashCtor.digest());
    }
    return UNSIGNED_PAYLOAD;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/signature-v4/dist-es/HeaderFormatter.js


class HeaderFormatter {
    format(headers) {
        const chunks = [];
        for (const headerName of Object.keys(headers)) {
            const bytes = (0,util_utf8_dist_es/* fromUtf8 */.ar)(headerName);
            chunks.push(Uint8Array.from([bytes.byteLength]), bytes, this.formatHeaderValue(headers[headerName]));
        }
        const out = new Uint8Array(chunks.reduce((carry, bytes) => carry + bytes.byteLength, 0));
        let position = 0;
        for (const chunk of chunks) {
            out.set(chunk, position);
            position += chunk.byteLength;
        }
        return out;
    }
    formatHeaderValue(header) {
        switch (header.type) {
            case "boolean":
                return Uint8Array.from([header.value ? 0 : 1]);
            case "byte":
                return Uint8Array.from([2, header.value]);
            case "short":
                const shortView = new DataView(new ArrayBuffer(3));
                shortView.setUint8(0, 3);
                shortView.setInt16(1, header.value, false);
                return new Uint8Array(shortView.buffer);
            case "integer":
                const intView = new DataView(new ArrayBuffer(5));
                intView.setUint8(0, 4);
                intView.setInt32(1, header.value, false);
                return new Uint8Array(intView.buffer);
            case "long":
                const longBytes = new Uint8Array(9);
                longBytes[0] = 5;
                longBytes.set(header.value.bytes, 1);
                return longBytes;
            case "binary":
                const binView = new DataView(new ArrayBuffer(3 + header.value.byteLength));
                binView.setUint8(0, 6);
                binView.setUint16(1, header.value.byteLength, false);
                const binBytes = new Uint8Array(binView.buffer);
                binBytes.set(header.value, 3);
                return binBytes;
            case "string":
                const utf8Bytes = (0,util_utf8_dist_es/* fromUtf8 */.ar)(header.value);
                const strView = new DataView(new ArrayBuffer(3 + utf8Bytes.byteLength));
                strView.setUint8(0, 7);
                strView.setUint16(1, utf8Bytes.byteLength, false);
                const strBytes = new Uint8Array(strView.buffer);
                strBytes.set(utf8Bytes, 3);
                return strBytes;
            case "timestamp":
                const tsBytes = new Uint8Array(9);
                tsBytes[0] = 8;
                tsBytes.set(Int64.fromNumber(header.value.valueOf()).bytes, 1);
                return tsBytes;
            case "uuid":
                if (!UUID_PATTERN.test(header.value)) {
                    throw new Error(`Invalid UUID received: ${header.value}`);
                }
                const uuidBytes = new Uint8Array(17);
                uuidBytes[0] = 9;
                uuidBytes.set((0,dist_es/* fromHex */.a)(header.value.replace(/\-/g, "")), 1);
                return uuidBytes;
        }
    }
}
var HEADER_VALUE_TYPE;
(function (HEADER_VALUE_TYPE) {
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["boolTrue"] = 0] = "boolTrue";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["boolFalse"] = 1] = "boolFalse";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["byte"] = 2] = "byte";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["short"] = 3] = "short";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["integer"] = 4] = "integer";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["long"] = 5] = "long";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["byteArray"] = 6] = "byteArray";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["string"] = 7] = "string";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["timestamp"] = 8] = "timestamp";
    HEADER_VALUE_TYPE[HEADER_VALUE_TYPE["uuid"] = 9] = "uuid";
})(HEADER_VALUE_TYPE || (HEADER_VALUE_TYPE = {}));
const UUID_PATTERN = /^[a-f0-9]{8}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{4}-[a-f0-9]{12}$/;
class Int64 {
    constructor(bytes) {
        this.bytes = bytes;
        if (bytes.byteLength !== 8) {
            throw new Error("Int64 buffers must be exactly 8 bytes");
        }
    }
    static fromNumber(number) {
        if (number > 9223372036854776000 || number < -9223372036854776000) {
            throw new Error(`${number} is too large (or, if negative, too small) to represent as an Int64`);
        }
        const bytes = new Uint8Array(8);
        for (let i = 7, remaining = Math.abs(Math.round(number)); i > -1 && remaining > 0; i--, remaining /= 256) {
            bytes[i] = remaining;
        }
        if (number < 0) {
            negate(bytes);
        }
        return new Int64(bytes);
    }
    valueOf() {
        const bytes = this.bytes.slice(0);
        const negative = bytes[0] & 0b10000000;
        if (negative) {
            negate(bytes);
        }
        return parseInt((0,dist_es/* toHex */.n)(bytes), 16) * (negative ? -1 : 1);
    }
    toString() {
        return String(this.valueOf());
    }
}
function negate(bytes) {
    for (let i = 0; i < 8; i++) {
        bytes[i] ^= 0xff;
    }
    for (let i = 7; i > -1; i--) {
        bytes[i]++;
        if (bytes[i] !== 0)
            break;
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/signature-v4/dist-es/headerUtil.js
const hasHeader = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            return true;
        }
    }
    return false;
};
const getHeaderValue = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            return headers[headerName];
        }
    }
    return undefined;
};
const deleteHeader = (soughtHeader, headers) => {
    soughtHeader = soughtHeader.toLowerCase();
    for (const headerName of Object.keys(headers)) {
        if (soughtHeader === headerName.toLowerCase()) {
            delete headers[headerName];
        }
    }
};

;// CONCATENATED MODULE: ./node_modules/@smithy/signature-v4/dist-es/cloneRequest.js
const cloneRequest = ({ headers, query, ...rest }) => ({
    ...rest,
    headers: { ...headers },
    query: query ? cloneQuery(query) : undefined,
});
const cloneQuery = (query) => Object.keys(query).reduce((carry, paramName) => {
    const param = query[paramName];
    return {
        ...carry,
        [paramName]: Array.isArray(param) ? [...param] : param,
    };
}, {});

;// CONCATENATED MODULE: ./node_modules/@smithy/signature-v4/dist-es/moveHeadersToQuery.js

const moveHeadersToQuery = (request, options = {}) => {
    const { headers, query = {} } = typeof request.clone === "function" ? request.clone() : cloneRequest(request);
    for (const name of Object.keys(headers)) {
        const lname = name.toLowerCase();
        if (lname.slice(0, 6) === "x-amz-" && !options.unhoistableHeaders?.has(lname)) {
            query[name] = headers[name];
            delete headers[name];
        }
    }
    return {
        ...request,
        headers,
        query,
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/signature-v4/dist-es/prepareRequest.js


const prepareRequest = (request) => {
    request = typeof request.clone === "function" ? request.clone() : cloneRequest(request);
    for (const headerName of Object.keys(request.headers)) {
        if (GENERATED_HEADERS.indexOf(headerName.toLowerCase()) > -1) {
            delete request.headers[headerName];
        }
    }
    return request;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/signature-v4/dist-es/utilDate.js
const iso8601 = (time) => toDate(time)
    .toISOString()
    .replace(/\.\d{3}Z$/, "Z");
const toDate = (time) => {
    if (typeof time === "number") {
        return new Date(time * 1000);
    }
    if (typeof time === "string") {
        if (Number(time)) {
            return new Date(Number(time) * 1000);
        }
        return new Date(time);
    }
    return time;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/signature-v4/dist-es/SignatureV4.js













class SignatureV4 {
    constructor({ applyChecksum, credentials, region, service, sha256, uriEscapePath = true, }) {
        this.headerFormatter = new HeaderFormatter();
        this.service = service;
        this.sha256 = sha256;
        this.uriEscapePath = uriEscapePath;
        this.applyChecksum = typeof applyChecksum === "boolean" ? applyChecksum : true;
        this.regionProvider = (0,util_middleware_dist_es/* normalizeProvider */.t)(region);
        this.credentialProvider = (0,util_middleware_dist_es/* normalizeProvider */.t)(credentials);
    }
    async presign(originalRequest, options = {}) {
        const { signingDate = new Date(), expiresIn = 3600, unsignableHeaders, unhoistableHeaders, signableHeaders, signingRegion, signingService, } = options;
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const { longDate, shortDate } = formatDate(signingDate);
        if (expiresIn > MAX_PRESIGNED_TTL) {
            return Promise.reject("Signature version 4 presigned URLs" + " must have an expiration date less than one week in" + " the future");
        }
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const request = moveHeadersToQuery(prepareRequest(originalRequest), { unhoistableHeaders });
        if (credentials.sessionToken) {
            request.query[TOKEN_QUERY_PARAM] = credentials.sessionToken;
        }
        request.query[ALGORITHM_QUERY_PARAM] = ALGORITHM_IDENTIFIER;
        request.query[CREDENTIAL_QUERY_PARAM] = `${credentials.accessKeyId}/${scope}`;
        request.query[AMZ_DATE_QUERY_PARAM] = longDate;
        request.query[EXPIRES_QUERY_PARAM] = expiresIn.toString(10);
        const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
        request.query[SIGNED_HEADERS_QUERY_PARAM] = getCanonicalHeaderList(canonicalHeaders);
        request.query[SIGNATURE_QUERY_PARAM] = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, await getPayloadHash(originalRequest, this.sha256)));
        return request;
    }
    async sign(toSign, options) {
        if (typeof toSign === "string") {
            return this.signString(toSign, options);
        }
        else if (toSign.headers && toSign.payload) {
            return this.signEvent(toSign, options);
        }
        else if (toSign.message) {
            return this.signMessage(toSign, options);
        }
        else {
            return this.signRequest(toSign, options);
        }
    }
    async signEvent({ headers, payload }, { signingDate = new Date(), priorSignature, signingRegion, signingService }) {
        const region = signingRegion ?? (await this.regionProvider());
        const { shortDate, longDate } = formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        const hashedPayload = await getPayloadHash({ headers: {}, body: payload }, this.sha256);
        const hash = new this.sha256();
        hash.update(headers);
        const hashedHeaders = (0,dist_es/* toHex */.n)(await hash.digest());
        const stringToSign = [
            EVENT_ALGORITHM_IDENTIFIER,
            longDate,
            scope,
            priorSignature,
            hashedHeaders,
            hashedPayload,
        ].join("\n");
        return this.signString(stringToSign, { signingDate, signingRegion: region, signingService });
    }
    async signMessage(signableMessage, { signingDate = new Date(), signingRegion, signingService }) {
        const promise = this.signEvent({
            headers: this.headerFormatter.format(signableMessage.message.headers),
            payload: signableMessage.message.body,
        }, {
            signingDate,
            signingRegion,
            signingService,
            priorSignature: signableMessage.priorSignature,
        });
        return promise.then((signature) => {
            return { message: signableMessage.message, signature };
        });
    }
    async signString(stringToSign, { signingDate = new Date(), signingRegion, signingService } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const { shortDate } = formatDate(signingDate);
        const hash = new this.sha256(await this.getSigningKey(credentials, region, shortDate, signingService));
        hash.update((0,util_utf8_dist_es/* toUint8Array */.Fo)(stringToSign));
        return (0,dist_es/* toHex */.n)(await hash.digest());
    }
    async signRequest(requestToSign, { signingDate = new Date(), signableHeaders, unsignableHeaders, signingRegion, signingService, } = {}) {
        const credentials = await this.credentialProvider();
        this.validateResolvedCredentials(credentials);
        const region = signingRegion ?? (await this.regionProvider());
        const request = prepareRequest(requestToSign);
        const { longDate, shortDate } = formatDate(signingDate);
        const scope = createScope(shortDate, region, signingService ?? this.service);
        request.headers[AMZ_DATE_HEADER] = longDate;
        if (credentials.sessionToken) {
            request.headers[TOKEN_HEADER] = credentials.sessionToken;
        }
        const payloadHash = await getPayloadHash(request, this.sha256);
        if (!hasHeader(SHA256_HEADER, request.headers) && this.applyChecksum) {
            request.headers[SHA256_HEADER] = payloadHash;
        }
        const canonicalHeaders = getCanonicalHeaders(request, unsignableHeaders, signableHeaders);
        const signature = await this.getSignature(longDate, scope, this.getSigningKey(credentials, region, shortDate, signingService), this.createCanonicalRequest(request, canonicalHeaders, payloadHash));
        request.headers[AUTH_HEADER] =
            `${ALGORITHM_IDENTIFIER} ` +
                `Credential=${credentials.accessKeyId}/${scope}, ` +
                `SignedHeaders=${getCanonicalHeaderList(canonicalHeaders)}, ` +
                `Signature=${signature}`;
        return request;
    }
    createCanonicalRequest(request, canonicalHeaders, payloadHash) {
        const sortedHeaders = Object.keys(canonicalHeaders).sort();
        return `${request.method}
${this.getCanonicalPath(request)}
${getCanonicalQuery(request)}
${sortedHeaders.map((name) => `${name}:${canonicalHeaders[name]}`).join("\n")}

${sortedHeaders.join(";")}
${payloadHash}`;
    }
    async createStringToSign(longDate, credentialScope, canonicalRequest) {
        const hash = new this.sha256();
        hash.update((0,util_utf8_dist_es/* toUint8Array */.Fo)(canonicalRequest));
        const hashedRequest = await hash.digest();
        return `${ALGORITHM_IDENTIFIER}
${longDate}
${credentialScope}
${(0,dist_es/* toHex */.n)(hashedRequest)}`;
    }
    getCanonicalPath({ path }) {
        if (this.uriEscapePath) {
            const normalizedPathSegments = [];
            for (const pathSegment of path.split("/")) {
                if (pathSegment?.length === 0)
                    continue;
                if (pathSegment === ".")
                    continue;
                if (pathSegment === "..") {
                    normalizedPathSegments.pop();
                }
                else {
                    normalizedPathSegments.push(pathSegment);
                }
            }
            const normalizedPath = `${path?.startsWith("/") ? "/" : ""}${normalizedPathSegments.join("/")}${normalizedPathSegments.length > 0 && path?.endsWith("/") ? "/" : ""}`;
            const doubleEncoded = encodeURIComponent(normalizedPath);
            return doubleEncoded.replace(/%2F/g, "/");
        }
        return path;
    }
    async getSignature(longDate, credentialScope, keyPromise, canonicalRequest) {
        const stringToSign = await this.createStringToSign(longDate, credentialScope, canonicalRequest);
        const hash = new this.sha256(await keyPromise);
        hash.update((0,util_utf8_dist_es/* toUint8Array */.Fo)(stringToSign));
        return (0,dist_es/* toHex */.n)(await hash.digest());
    }
    getSigningKey(credentials, region, shortDate, service) {
        return getSigningKey(this.sha256, credentials, shortDate, region, service || this.service);
    }
    validateResolvedCredentials(credentials) {
        if (typeof credentials !== "object" ||
            typeof credentials.accessKeyId !== "string" ||
            typeof credentials.secretAccessKey !== "string") {
            throw new Error("Resolved credential object is not valid");
        }
    }
}
const formatDate = (now) => {
    const longDate = iso8601(now).replace(/[\-:]/g, "");
    return {
        longDate,
        shortDate: longDate.slice(0, 8),
    };
};
const getCanonicalHeaderList = (headers) => Object.keys(headers).sort().join(";");

;// CONCATENATED MODULE: ./node_modules/@smithy/signature-v4/dist-es/index.js









/***/ }),

/***/ 678:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Kj: () => (/* reexport */ Client),
  uB: () => (/* reexport */ Command),
  N4: () => (/* reexport */ NoOpLogger),
  $H: () => (/* reexport */ SENSITIVE_STRING),
  TJ: () => (/* reexport */ ServiceException),
  Ss: () => (/* reexport */ _json),
  Px: () => (/* reexport */ collectBody),
  J1: () => (/* reexport */ createAggregatedClient),
  Mw: () => (/* reexport */ decorateServiceException),
  I9: () => (/* reexport */ emitWarningIfUnsupportedVersion),
  ak: () => (/* reexport */ expectBoolean),
  ET: () => (/* reexport */ expectInt32),
  Yy: () => (/* reexport */ expectLong),
  Y0: () => (/* reexport */ expectNonNull),
  r$: () => (/* reexport */ expectNumber),
  Xk: () => (/* reexport */ expectObject),
  lK: () => (/* reexport */ expectString),
  tN: () => (/* reexport */ expectUnion),
  $6: () => (/* reexport */ extendedEncodeURIComponent),
  xA: () => (/* reexport */ getDefaultExtensionConfiguration),
  rm: () => (/* reexport */ getValueFromTextNode),
  JW: () => (/* reexport */ limitedParseDouble),
  lT: () => (/* reexport */ loadConfigsForDefaultMode),
  Tj: () => (/* reexport */ map),
  l3: () => (/* reexport */ parseEpochTimestamp),
  EI: () => (/* reexport */ parseRfc3339DateTime),
  t_: () => (/* reexport */ parseRfc3339DateTimeWithOffset),
  uv: () => (/* reexport */ resolveDefaultRuntimeConfig),
  un: () => (/* reexport */ resolvedPath),
  VA: () => (/* reexport */ serializeFloat),
  xW: () => (/* reexport */ strictParseInt32),
  s: () => (/* reexport */ take),
  jr: () => (/* reexport */ withBaseException)
});

// UNUSED EXPORTS: LazyJsonString, StringWrapper, convertMap, dateToUtcString, expectByte, expectFloat32, expectInt, expectShort, getArrayIfSingleItem, getDefaultClientConfiguration, handleFloat, limitedParseFloat, limitedParseFloat32, logger, parseBoolean, parseRfc7231DateTime, splitEvery, strictParseByte, strictParseDouble, strictParseFloat, strictParseFloat32, strictParseInt, strictParseLong, strictParseShort, throwDefaultError

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/NoOpLogger.js
class NoOpLogger {
    trace() { }
    debug() { }
    info() { }
    warn() { }
    error() { }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-stack/dist-es/MiddlewareStack.js
const getAllAliases = (name, aliases) => {
    const _aliases = [];
    if (name) {
        _aliases.push(name);
    }
    if (aliases) {
        for (const alias of aliases) {
            _aliases.push(alias);
        }
    }
    return _aliases;
};
const getMiddlewareNameWithAliases = (name, aliases) => {
    return `${name || "anonymous"}${aliases && aliases.length > 0 ? ` (a.k.a. ${aliases.join(",")})` : ""}`;
};
const constructStack = () => {
    let absoluteEntries = [];
    let relativeEntries = [];
    let identifyOnResolve = false;
    const entriesNameSet = new Set();
    const sort = (entries) => entries.sort((a, b) => stepWeights[b.step] - stepWeights[a.step] ||
        priorityWeights[b.priority || "normal"] - priorityWeights[a.priority || "normal"]);
    const removeByName = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
            const aliases = getAllAliases(entry.name, entry.aliases);
            if (aliases.includes(toRemove)) {
                isRemoved = true;
                for (const alias of aliases) {
                    entriesNameSet.delete(alias);
                }
                return false;
            }
            return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
    };
    const removeByReference = (toRemove) => {
        let isRemoved = false;
        const filterCb = (entry) => {
            if (entry.middleware === toRemove) {
                isRemoved = true;
                for (const alias of getAllAliases(entry.name, entry.aliases)) {
                    entriesNameSet.delete(alias);
                }
                return false;
            }
            return true;
        };
        absoluteEntries = absoluteEntries.filter(filterCb);
        relativeEntries = relativeEntries.filter(filterCb);
        return isRemoved;
    };
    const cloneTo = (toStack) => {
        absoluteEntries.forEach((entry) => {
            toStack.add(entry.middleware, { ...entry });
        });
        relativeEntries.forEach((entry) => {
            toStack.addRelativeTo(entry.middleware, { ...entry });
        });
        toStack.identifyOnResolve?.(stack.identifyOnResolve());
        return toStack;
    };
    const expandRelativeMiddlewareList = (from) => {
        const expandedMiddlewareList = [];
        from.before.forEach((entry) => {
            if (entry.before.length === 0 && entry.after.length === 0) {
                expandedMiddlewareList.push(entry);
            }
            else {
                expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
            }
        });
        expandedMiddlewareList.push(from);
        from.after.reverse().forEach((entry) => {
            if (entry.before.length === 0 && entry.after.length === 0) {
                expandedMiddlewareList.push(entry);
            }
            else {
                expandedMiddlewareList.push(...expandRelativeMiddlewareList(entry));
            }
        });
        return expandedMiddlewareList;
    };
    const getMiddlewareList = (debug = false) => {
        const normalizedAbsoluteEntries = [];
        const normalizedRelativeEntries = [];
        const normalizedEntriesNameMap = {};
        absoluteEntries.forEach((entry) => {
            const normalizedEntry = {
                ...entry,
                before: [],
                after: [],
            };
            for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
                normalizedEntriesNameMap[alias] = normalizedEntry;
            }
            normalizedAbsoluteEntries.push(normalizedEntry);
        });
        relativeEntries.forEach((entry) => {
            const normalizedEntry = {
                ...entry,
                before: [],
                after: [],
            };
            for (const alias of getAllAliases(normalizedEntry.name, normalizedEntry.aliases)) {
                normalizedEntriesNameMap[alias] = normalizedEntry;
            }
            normalizedRelativeEntries.push(normalizedEntry);
        });
        normalizedRelativeEntries.forEach((entry) => {
            if (entry.toMiddleware) {
                const toMiddleware = normalizedEntriesNameMap[entry.toMiddleware];
                if (toMiddleware === undefined) {
                    if (debug) {
                        return;
                    }
                    throw new Error(`${entry.toMiddleware} is not found when adding ` +
                        `${getMiddlewareNameWithAliases(entry.name, entry.aliases)} ` +
                        `middleware ${entry.relation} ${entry.toMiddleware}`);
                }
                if (entry.relation === "after") {
                    toMiddleware.after.push(entry);
                }
                if (entry.relation === "before") {
                    toMiddleware.before.push(entry);
                }
            }
        });
        const mainChain = sort(normalizedAbsoluteEntries)
            .map(expandRelativeMiddlewareList)
            .reduce((wholeList, expandedMiddlewareList) => {
            wholeList.push(...expandedMiddlewareList);
            return wholeList;
        }, []);
        return mainChain;
    };
    const stack = {
        add: (middleware, options = {}) => {
            const { name, override, aliases: _aliases } = options;
            const entry = {
                step: "initialize",
                priority: "normal",
                middleware,
                ...options,
            };
            const aliases = getAllAliases(name, _aliases);
            if (aliases.length > 0) {
                if (aliases.some((alias) => entriesNameSet.has(alias))) {
                    if (!override)
                        throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
                    for (const alias of aliases) {
                        const toOverrideIndex = absoluteEntries.findIndex((entry) => entry.name === alias || entry.aliases?.some((a) => a === alias));
                        if (toOverrideIndex === -1) {
                            continue;
                        }
                        const toOverride = absoluteEntries[toOverrideIndex];
                        if (toOverride.step !== entry.step || entry.priority !== toOverride.priority) {
                            throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware with ` +
                                `${toOverride.priority} priority in ${toOverride.step} step cannot ` +
                                `be overridden by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware with ` +
                                `${entry.priority} priority in ${entry.step} step.`);
                        }
                        absoluteEntries.splice(toOverrideIndex, 1);
                    }
                }
                for (const alias of aliases) {
                    entriesNameSet.add(alias);
                }
            }
            absoluteEntries.push(entry);
        },
        addRelativeTo: (middleware, options) => {
            const { name, override, aliases: _aliases } = options;
            const entry = {
                middleware,
                ...options,
            };
            const aliases = getAllAliases(name, _aliases);
            if (aliases.length > 0) {
                if (aliases.some((alias) => entriesNameSet.has(alias))) {
                    if (!override)
                        throw new Error(`Duplicate middleware name '${getMiddlewareNameWithAliases(name, _aliases)}'`);
                    for (const alias of aliases) {
                        const toOverrideIndex = relativeEntries.findIndex((entry) => entry.name === alias || entry.aliases?.some((a) => a === alias));
                        if (toOverrideIndex === -1) {
                            continue;
                        }
                        const toOverride = relativeEntries[toOverrideIndex];
                        if (toOverride.toMiddleware !== entry.toMiddleware || toOverride.relation !== entry.relation) {
                            throw new Error(`"${getMiddlewareNameWithAliases(toOverride.name, toOverride.aliases)}" middleware ` +
                                `${toOverride.relation} "${toOverride.toMiddleware}" middleware cannot be overridden ` +
                                `by "${getMiddlewareNameWithAliases(name, _aliases)}" middleware ${entry.relation} ` +
                                `"${entry.toMiddleware}" middleware.`);
                        }
                        relativeEntries.splice(toOverrideIndex, 1);
                    }
                }
                for (const alias of aliases) {
                    entriesNameSet.add(alias);
                }
            }
            relativeEntries.push(entry);
        },
        clone: () => cloneTo(constructStack()),
        use: (plugin) => {
            plugin.applyToStack(stack);
        },
        remove: (toRemove) => {
            if (typeof toRemove === "string")
                return removeByName(toRemove);
            else
                return removeByReference(toRemove);
        },
        removeByTag: (toRemove) => {
            let isRemoved = false;
            const filterCb = (entry) => {
                const { tags, name, aliases: _aliases } = entry;
                if (tags && tags.includes(toRemove)) {
                    const aliases = getAllAliases(name, _aliases);
                    for (const alias of aliases) {
                        entriesNameSet.delete(alias);
                    }
                    isRemoved = true;
                    return false;
                }
                return true;
            };
            absoluteEntries = absoluteEntries.filter(filterCb);
            relativeEntries = relativeEntries.filter(filterCb);
            return isRemoved;
        },
        concat: (from) => {
            const cloned = cloneTo(constructStack());
            cloned.use(from);
            cloned.identifyOnResolve(identifyOnResolve || cloned.identifyOnResolve() || (from.identifyOnResolve?.() ?? false));
            return cloned;
        },
        applyToStack: cloneTo,
        identify: () => {
            return getMiddlewareList(true).map((mw) => {
                const step = mw.step ??
                    mw.relation +
                        " " +
                        mw.toMiddleware;
                return getMiddlewareNameWithAliases(mw.name, mw.aliases) + " - " + step;
            });
        },
        identifyOnResolve(toggle) {
            if (typeof toggle === "boolean")
                identifyOnResolve = toggle;
            return identifyOnResolve;
        },
        resolve: (handler, context) => {
            for (const middleware of getMiddlewareList()
                .map((entry) => entry.middleware)
                .reverse()) {
                handler = middleware(handler, context);
            }
            if (identifyOnResolve) {
                console.log(stack.identify());
            }
            return handler;
        },
    };
    return stack;
};
const stepWeights = {
    initialize: 5,
    serialize: 4,
    build: 3,
    finalizeRequest: 2,
    deserialize: 1,
};
const priorityWeights = {
    high: 3,
    normal: 2,
    low: 1,
};

;// CONCATENATED MODULE: ./node_modules/@smithy/middleware-stack/dist-es/index.js


;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/client.js

class Client {
    constructor(config) {
        this.middlewareStack = constructStack();
        this.config = config;
    }
    send(command, optionsOrCb, cb) {
        const options = typeof optionsOrCb !== "function" ? optionsOrCb : undefined;
        const callback = typeof optionsOrCb === "function" ? optionsOrCb : cb;
        const handler = command.resolveMiddleware(this.middlewareStack, this.config, options);
        if (callback) {
            handler(command)
                .then((result) => callback(null, result.output), (err) => callback(err))
                .catch(() => { });
        }
        else {
            return handler(command).then((result) => result.output);
        }
    }
    destroy() {
        if (this.config.requestHandler.destroy)
            this.config.requestHandler.destroy();
    }
}

// EXTERNAL MODULE: ./node_modules/@smithy/util-stream/dist-es/index.js + 4 modules
var dist_es = __webpack_require__(5186);
;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/collect-stream-body.js

const collectBody = async (streamBody = new Uint8Array(), context) => {
    if (streamBody instanceof Uint8Array) {
        return dist_es/* Uint8ArrayBlobAdapter */.Mu.mutate(streamBody);
    }
    if (!streamBody) {
        return dist_es/* Uint8ArrayBlobAdapter */.Mu.mutate(new Uint8Array());
    }
    const fromContext = context.streamCollector(streamBody);
    return dist_es/* Uint8ArrayBlobAdapter */.Mu.mutate(await fromContext);
};

// EXTERNAL MODULE: ./node_modules/@smithy/types/dist-es/index.js + 11 modules
var types_dist_es = __webpack_require__(7523);
;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/command.js


class Command {
    constructor() {
        this.middlewareStack = constructStack();
    }
    static classBuilder() {
        return new ClassBuilder();
    }
    resolveMiddlewareWithContext(clientStack, configuration, options, { middlewareFn, clientName, commandName, inputFilterSensitiveLog, outputFilterSensitiveLog, smithyContext, additionalContext, CommandCtor, }) {
        for (const mw of middlewareFn.bind(this)(CommandCtor, clientStack, configuration, options)) {
            this.middlewareStack.use(mw);
        }
        const stack = clientStack.concat(this.middlewareStack);
        const { logger } = configuration;
        const handlerExecutionContext = {
            logger,
            clientName,
            commandName,
            inputFilterSensitiveLog,
            outputFilterSensitiveLog,
            [types_dist_es/* SMITHY_CONTEXT_KEY */.Vf]: {
                ...smithyContext,
            },
            ...additionalContext,
        };
        const { requestHandler } = configuration;
        return stack.resolve((request) => requestHandler.handle(request.request, options || {}), handlerExecutionContext);
    }
}
class ClassBuilder {
    constructor() {
        this._init = () => { };
        this._ep = {};
        this._middlewareFn = () => [];
        this._commandName = "";
        this._clientName = "";
        this._additionalContext = {};
        this._smithyContext = {};
        this._inputFilterSensitiveLog = (_) => _;
        this._outputFilterSensitiveLog = (_) => _;
        this._serializer = null;
        this._deserializer = null;
    }
    init(cb) {
        this._init = cb;
    }
    ep(endpointParameterInstructions) {
        this._ep = endpointParameterInstructions;
        return this;
    }
    m(middlewareSupplier) {
        this._middlewareFn = middlewareSupplier;
        return this;
    }
    s(service, operation, smithyContext = {}) {
        this._smithyContext = {
            service,
            operation,
            ...smithyContext,
        };
        return this;
    }
    c(additionalContext = {}) {
        this._additionalContext = additionalContext;
        return this;
    }
    n(clientName, commandName) {
        this._clientName = clientName;
        this._commandName = commandName;
        return this;
    }
    f(inputFilter = (_) => _, outputFilter = (_) => _) {
        this._inputFilterSensitiveLog = inputFilter;
        this._outputFilterSensitiveLog = outputFilter;
        return this;
    }
    ser(serializer) {
        this._serializer = serializer;
        return this;
    }
    de(deserializer) {
        this._deserializer = deserializer;
        return this;
    }
    build() {
        const closure = this;
        let CommandRef;
        return (CommandRef = class extends Command {
            static getEndpointParameterInstructions() {
                return closure._ep;
            }
            constructor(...[input]) {
                super();
                this.serialize = closure._serializer;
                this.deserialize = closure._deserializer;
                this.input = input ?? {};
                closure._init(this);
            }
            resolveMiddleware(stack, configuration, options) {
                return this.resolveMiddlewareWithContext(stack, configuration, options, {
                    CommandCtor: CommandRef,
                    middlewareFn: closure._middlewareFn,
                    clientName: closure._clientName,
                    commandName: closure._commandName,
                    inputFilterSensitiveLog: closure._inputFilterSensitiveLog,
                    outputFilterSensitiveLog: closure._outputFilterSensitiveLog,
                    smithyContext: closure._smithyContext,
                    additionalContext: closure._additionalContext,
                });
            }
        });
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/constants.js
const SENSITIVE_STRING = "***SensitiveInformation***";

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/create-aggregated-client.js
const createAggregatedClient = (commands, Client) => {
    for (const command of Object.keys(commands)) {
        const CommandCtor = commands[command];
        const methodImpl = async function (args, optionsOrCb, cb) {
            const command = new CommandCtor(args);
            if (typeof optionsOrCb === "function") {
                this.send(command, optionsOrCb);
            }
            else if (typeof cb === "function") {
                if (typeof optionsOrCb !== "object")
                    throw new Error(`Expected http options but got ${typeof optionsOrCb}`);
                this.send(command, optionsOrCb || {}, cb);
            }
            else {
                return this.send(command, optionsOrCb);
            }
        };
        const methodName = (command[0].toLowerCase() + command.slice(1)).replace(/Command$/, "");
        Client.prototype[methodName] = methodImpl;
    }
};

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/parse-utils.js
const parseBoolean = (value) => {
    switch (value) {
        case "true":
            return true;
        case "false":
            return false;
        default:
            throw new Error(`Unable to parse boolean value "${value}"`);
    }
};
const expectBoolean = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "number") {
        if (value === 0 || value === 1) {
            logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (value === 0) {
            return false;
        }
        if (value === 1) {
            return true;
        }
    }
    if (typeof value === "string") {
        const lower = value.toLowerCase();
        if (lower === "false" || lower === "true") {
            logger.warn(stackTraceWarning(`Expected boolean, got ${typeof value}: ${value}`));
        }
        if (lower === "false") {
            return false;
        }
        if (lower === "true") {
            return true;
        }
    }
    if (typeof value === "boolean") {
        return value;
    }
    throw new TypeError(`Expected boolean, got ${typeof value}: ${value}`);
};
const expectNumber = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "string") {
        const parsed = parseFloat(value);
        if (!Number.isNaN(parsed)) {
            if (String(parsed) !== String(value)) {
                logger.warn(stackTraceWarning(`Expected number but observed string: ${value}`));
            }
            return parsed;
        }
    }
    if (typeof value === "number") {
        return value;
    }
    throw new TypeError(`Expected number, got ${typeof value}: ${value}`);
};
const MAX_FLOAT = Math.ceil(2 ** 127 * (2 - 2 ** -23));
const expectFloat32 = (value) => {
    const expected = expectNumber(value);
    if (expected !== undefined && !Number.isNaN(expected) && expected !== Infinity && expected !== -Infinity) {
        if (Math.abs(expected) > MAX_FLOAT) {
            throw new TypeError(`Expected 32-bit float, got ${value}`);
        }
    }
    return expected;
};
const expectLong = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (Number.isInteger(value) && !Number.isNaN(value)) {
        return value;
    }
    throw new TypeError(`Expected integer, got ${typeof value}: ${value}`);
};
const expectInt = (/* unused pure expression or super */ null && (expectLong));
const expectInt32 = (value) => expectSizedInt(value, 32);
const expectShort = (value) => expectSizedInt(value, 16);
const expectByte = (value) => expectSizedInt(value, 8);
const expectSizedInt = (value, size) => {
    const expected = expectLong(value);
    if (expected !== undefined && castInt(expected, size) !== expected) {
        throw new TypeError(`Expected ${size}-bit integer, got ${value}`);
    }
    return expected;
};
const castInt = (value, size) => {
    switch (size) {
        case 32:
            return Int32Array.of(value)[0];
        case 16:
            return Int16Array.of(value)[0];
        case 8:
            return Int8Array.of(value)[0];
    }
};
const expectNonNull = (value, location) => {
    if (value === null || value === undefined) {
        if (location) {
            throw new TypeError(`Expected a non-null value for ${location}`);
        }
        throw new TypeError("Expected a non-null value");
    }
    return value;
};
const expectObject = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "object" && !Array.isArray(value)) {
        return value;
    }
    const receivedType = Array.isArray(value) ? "array" : typeof value;
    throw new TypeError(`Expected object, got ${receivedType}: ${value}`);
};
const expectString = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value === "string") {
        return value;
    }
    if (["boolean", "number", "bigint"].includes(typeof value)) {
        logger.warn(stackTraceWarning(`Expected string, got ${typeof value}: ${value}`));
        return String(value);
    }
    throw new TypeError(`Expected string, got ${typeof value}: ${value}`);
};
const expectUnion = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    const asObject = expectObject(value);
    const setKeys = Object.entries(asObject)
        .filter(([, v]) => v != null)
        .map(([k]) => k);
    if (setKeys.length === 0) {
        throw new TypeError(`Unions must have exactly one non-null member. None were found.`);
    }
    if (setKeys.length > 1) {
        throw new TypeError(`Unions must have exactly one non-null member. Keys ${setKeys} were not null.`);
    }
    return asObject;
};
const strictParseDouble = (value) => {
    if (typeof value == "string") {
        return expectNumber(parseNumber(value));
    }
    return expectNumber(value);
};
const strictParseFloat = (/* unused pure expression or super */ null && (strictParseDouble));
const strictParseFloat32 = (value) => {
    if (typeof value == "string") {
        return expectFloat32(parseNumber(value));
    }
    return expectFloat32(value);
};
const NUMBER_REGEX = /(-?(?:0|[1-9]\d*)(?:\.\d+)?(?:[eE][+-]?\d+)?)|(-?Infinity)|(NaN)/g;
const parseNumber = (value) => {
    const matches = value.match(NUMBER_REGEX);
    if (matches === null || matches[0].length !== value.length) {
        throw new TypeError(`Expected real number, got implicit NaN`);
    }
    return parseFloat(value);
};
const limitedParseDouble = (value) => {
    if (typeof value == "string") {
        return parseFloatString(value);
    }
    return expectNumber(value);
};
const handleFloat = (/* unused pure expression or super */ null && (limitedParseDouble));
const limitedParseFloat = (/* unused pure expression or super */ null && (limitedParseDouble));
const limitedParseFloat32 = (value) => {
    if (typeof value == "string") {
        return parseFloatString(value);
    }
    return expectFloat32(value);
};
const parseFloatString = (value) => {
    switch (value) {
        case "NaN":
            return NaN;
        case "Infinity":
            return Infinity;
        case "-Infinity":
            return -Infinity;
        default:
            throw new Error(`Unable to parse float value: ${value}`);
    }
};
const strictParseLong = (value) => {
    if (typeof value === "string") {
        return expectLong(parseNumber(value));
    }
    return expectLong(value);
};
const strictParseInt = (/* unused pure expression or super */ null && (strictParseLong));
const strictParseInt32 = (value) => {
    if (typeof value === "string") {
        return expectInt32(parseNumber(value));
    }
    return expectInt32(value);
};
const parse_utils_strictParseShort = (value) => {
    if (typeof value === "string") {
        return expectShort(parseNumber(value));
    }
    return expectShort(value);
};
const strictParseByte = (value) => {
    if (typeof value === "string") {
        return expectByte(parseNumber(value));
    }
    return expectByte(value);
};
const stackTraceWarning = (message) => {
    return String(new TypeError(message).stack || message)
        .split("\n")
        .slice(0, 5)
        .filter((s) => !s.includes("stackTraceWarning"))
        .join("\n");
};
const logger = {
    warn: console.warn,
};

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/date-utils.js

const DAYS = (/* unused pure expression or super */ null && (["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"]));
const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
function dateToUtcString(date) {
    const year = date.getUTCFullYear();
    const month = date.getUTCMonth();
    const dayOfWeek = date.getUTCDay();
    const dayOfMonthInt = date.getUTCDate();
    const hoursInt = date.getUTCHours();
    const minutesInt = date.getUTCMinutes();
    const secondsInt = date.getUTCSeconds();
    const dayOfMonthString = dayOfMonthInt < 10 ? `0${dayOfMonthInt}` : `${dayOfMonthInt}`;
    const hoursString = hoursInt < 10 ? `0${hoursInt}` : `${hoursInt}`;
    const minutesString = minutesInt < 10 ? `0${minutesInt}` : `${minutesInt}`;
    const secondsString = secondsInt < 10 ? `0${secondsInt}` : `${secondsInt}`;
    return `${DAYS[dayOfWeek]}, ${dayOfMonthString} ${MONTHS[month]} ${year} ${hoursString}:${minutesString}:${secondsString} GMT`;
}
const RFC3339 = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?[zZ]$/);
const parseRfc3339DateTime = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
    }
    const match = RFC3339.exec(value);
    if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
    }
    const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds] = match;
    const year = parse_utils_strictParseShort(stripLeadingZeroes(yearStr));
    const month = parseDateValue(monthStr, "month", 1, 12);
    const day = parseDateValue(dayStr, "day", 1, 31);
    return buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
};
const RFC3339_WITH_OFFSET = new RegExp(/^(\d{4})-(\d{2})-(\d{2})[tT](\d{2}):(\d{2}):(\d{2})(?:\.(\d+))?(([-+]\d{2}\:\d{2})|[zZ])$/);
const parseRfc3339DateTimeWithOffset = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-3339 date-times must be expressed as strings");
    }
    const match = RFC3339_WITH_OFFSET.exec(value);
    if (!match) {
        throw new TypeError("Invalid RFC-3339 date-time value");
    }
    const [_, yearStr, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, offsetStr] = match;
    const year = parse_utils_strictParseShort(stripLeadingZeroes(yearStr));
    const month = parseDateValue(monthStr, "month", 1, 12);
    const day = parseDateValue(dayStr, "day", 1, 31);
    const date = buildDate(year, month, day, { hours, minutes, seconds, fractionalMilliseconds });
    if (offsetStr.toUpperCase() != "Z") {
        date.setTime(date.getTime() - parseOffsetToMilliseconds(offsetStr));
    }
    return date;
};
const IMF_FIXDATE = (/* unused pure expression or super */ null && (new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d{2}) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/)));
const RFC_850_DATE = (/* unused pure expression or super */ null && (new RegExp(/^(?:Monday|Tuesday|Wednesday|Thursday|Friday|Saturday|Sunday), (\d{2})-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? GMT$/)));
const ASC_TIME = (/* unused pure expression or super */ null && (new RegExp(/^(?:Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( [1-9]|\d{2}) (\d{1,2}):(\d{2}):(\d{2})(?:\.(\d+))? (\d{4})$/)));
const parseRfc7231DateTime = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    if (typeof value !== "string") {
        throw new TypeError("RFC-7231 date-times must be expressed as strings");
    }
    let match = IMF_FIXDATE.exec(value);
    if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
    }
    match = RFC_850_DATE.exec(value);
    if (match) {
        const [_, dayStr, monthStr, yearStr, hours, minutes, seconds, fractionalMilliseconds] = match;
        return adjustRfc850Year(buildDate(parseTwoDigitYear(yearStr), parseMonthByShortName(monthStr), parseDateValue(dayStr, "day", 1, 31), {
            hours,
            minutes,
            seconds,
            fractionalMilliseconds,
        }));
    }
    match = ASC_TIME.exec(value);
    if (match) {
        const [_, monthStr, dayStr, hours, minutes, seconds, fractionalMilliseconds, yearStr] = match;
        return buildDate(strictParseShort(stripLeadingZeroes(yearStr)), parseMonthByShortName(monthStr), parseDateValue(dayStr.trimLeft(), "day", 1, 31), { hours, minutes, seconds, fractionalMilliseconds });
    }
    throw new TypeError("Invalid RFC-7231 date-time value");
};
const parseEpochTimestamp = (value) => {
    if (value === null || value === undefined) {
        return undefined;
    }
    let valueAsDouble;
    if (typeof value === "number") {
        valueAsDouble = value;
    }
    else if (typeof value === "string") {
        valueAsDouble = strictParseDouble(value);
    }
    else {
        throw new TypeError("Epoch timestamps must be expressed as floating point numbers or their string representation");
    }
    if (Number.isNaN(valueAsDouble) || valueAsDouble === Infinity || valueAsDouble === -Infinity) {
        throw new TypeError("Epoch timestamps must be valid, non-Infinite, non-NaN numerics");
    }
    return new Date(Math.round(valueAsDouble * 1000));
};
const buildDate = (year, month, day, time) => {
    const adjustedMonth = month - 1;
    validateDayOfMonth(year, adjustedMonth, day);
    return new Date(Date.UTC(year, adjustedMonth, day, parseDateValue(time.hours, "hour", 0, 23), parseDateValue(time.minutes, "minute", 0, 59), parseDateValue(time.seconds, "seconds", 0, 60), parseMilliseconds(time.fractionalMilliseconds)));
};
const parseTwoDigitYear = (value) => {
    const thisYear = new Date().getUTCFullYear();
    const valueInThisCentury = Math.floor(thisYear / 100) * 100 + strictParseShort(stripLeadingZeroes(value));
    if (valueInThisCentury < thisYear) {
        return valueInThisCentury + 100;
    }
    return valueInThisCentury;
};
const FIFTY_YEARS_IN_MILLIS = (/* unused pure expression or super */ null && (50 * 365 * 24 * 60 * 60 * 1000));
const adjustRfc850Year = (input) => {
    if (input.getTime() - new Date().getTime() > FIFTY_YEARS_IN_MILLIS) {
        return new Date(Date.UTC(input.getUTCFullYear() - 100, input.getUTCMonth(), input.getUTCDate(), input.getUTCHours(), input.getUTCMinutes(), input.getUTCSeconds(), input.getUTCMilliseconds()));
    }
    return input;
};
const parseMonthByShortName = (value) => {
    const monthIdx = MONTHS.indexOf(value);
    if (monthIdx < 0) {
        throw new TypeError(`Invalid month: ${value}`);
    }
    return monthIdx + 1;
};
const DAYS_IN_MONTH = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const validateDayOfMonth = (year, month, day) => {
    let maxDays = DAYS_IN_MONTH[month];
    if (month === 1 && isLeapYear(year)) {
        maxDays = 29;
    }
    if (day > maxDays) {
        throw new TypeError(`Invalid day for ${MONTHS[month]} in ${year}: ${day}`);
    }
};
const isLeapYear = (year) => {
    return year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0);
};
const parseDateValue = (value, type, lower, upper) => {
    const dateVal = strictParseByte(stripLeadingZeroes(value));
    if (dateVal < lower || dateVal > upper) {
        throw new TypeError(`${type} must be between ${lower} and ${upper}, inclusive`);
    }
    return dateVal;
};
const parseMilliseconds = (value) => {
    if (value === null || value === undefined) {
        return 0;
    }
    return strictParseFloat32("0." + value) * 1000;
};
const parseOffsetToMilliseconds = (value) => {
    const directionStr = value[0];
    let direction = 1;
    if (directionStr == "+") {
        direction = 1;
    }
    else if (directionStr == "-") {
        direction = -1;
    }
    else {
        throw new TypeError(`Offset direction, ${directionStr}, must be "+" or "-"`);
    }
    const hour = Number(value.substring(1, 3));
    const minute = Number(value.substring(4, 6));
    return direction * (hour * 60 + minute) * 60 * 1000;
};
const stripLeadingZeroes = (value) => {
    let idx = 0;
    while (idx < value.length - 1 && value.charAt(idx) === "0") {
        idx++;
    }
    if (idx === 0) {
        return value;
    }
    return value.slice(idx);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/exceptions.js
class ServiceException extends Error {
    constructor(options) {
        super(options.message);
        Object.setPrototypeOf(this, ServiceException.prototype);
        this.name = options.name;
        this.$fault = options.$fault;
        this.$metadata = options.$metadata;
    }
}
const decorateServiceException = (exception, additions = {}) => {
    Object.entries(additions)
        .filter(([, v]) => v !== undefined)
        .forEach(([k, v]) => {
        if (exception[k] == undefined || exception[k] === "") {
            exception[k] = v;
        }
    });
    const message = exception.message || exception.Message || "UnknownError";
    exception.message = message;
    delete exception.Message;
    return exception;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/default-error-handler.js

const throwDefaultError = ({ output, parsedBody, exceptionCtor, errorCode }) => {
    const $metadata = deserializeMetadata(output);
    const statusCode = $metadata.httpStatusCode ? $metadata.httpStatusCode + "" : undefined;
    const response = new exceptionCtor({
        name: parsedBody?.code || parsedBody?.Code || errorCode || statusCode || "UnknownError",
        $fault: "client",
        $metadata,
    });
    throw decorateServiceException(response, parsedBody);
};
const withBaseException = (ExceptionCtor) => {
    return ({ output, parsedBody, errorCode }) => {
        throwDefaultError({ output, parsedBody, exceptionCtor: ExceptionCtor, errorCode });
    };
};
const deserializeMetadata = (output) => ({
    httpStatusCode: output.statusCode,
    requestId: output.headers["x-amzn-requestid"] ?? output.headers["x-amzn-request-id"] ?? output.headers["x-amz-request-id"],
    extendedRequestId: output.headers["x-amz-id-2"],
    cfId: output.headers["x-amz-cf-id"],
});

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/defaults-mode.js
const loadConfigsForDefaultMode = (mode) => {
    switch (mode) {
        case "standard":
            return {
                retryMode: "standard",
                connectionTimeout: 3100,
            };
        case "in-region":
            return {
                retryMode: "standard",
                connectionTimeout: 1100,
            };
        case "cross-region":
            return {
                retryMode: "standard",
                connectionTimeout: 3100,
            };
        case "mobile":
            return {
                retryMode: "standard",
                connectionTimeout: 30000,
            };
        default:
            return {};
    }
};

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/emitWarningIfUnsupportedVersion.js
let warningEmitted = false;
const emitWarningIfUnsupportedVersion = (version) => {
    if (version && !warningEmitted && parseInt(version.substring(1, version.indexOf("."))) < 14) {
        warningEmitted = true;
    }
};

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/extensions/checksum.js


const getChecksumConfiguration = (runtimeConfig) => {
    const checksumAlgorithms = [];
    for (const id in types_dist_es/* AlgorithmId */.dB) {
        const algorithmId = types_dist_es/* AlgorithmId */.dB[id];
        if (runtimeConfig[algorithmId] === undefined) {
            continue;
        }
        checksumAlgorithms.push({
            algorithmId: () => algorithmId,
            checksumConstructor: () => runtimeConfig[algorithmId],
        });
    }
    return {
        _checksumAlgorithms: checksumAlgorithms,
        addChecksumAlgorithm(algo) {
            this._checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
            return this._checksumAlgorithms;
        },
    };
};
const resolveChecksumRuntimeConfig = (clientConfig) => {
    const runtimeConfig = {};
    clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
    });
    return runtimeConfig;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/extensions/retry.js
const getRetryConfiguration = (runtimeConfig) => {
    let _retryStrategy = runtimeConfig.retryStrategy;
    return {
        setRetryStrategy(retryStrategy) {
            _retryStrategy = retryStrategy;
        },
        retryStrategy() {
            return _retryStrategy;
        },
    };
};
const resolveRetryRuntimeConfig = (retryStrategyConfiguration) => {
    const runtimeConfig = {};
    runtimeConfig.retryStrategy = retryStrategyConfiguration.retryStrategy();
    return runtimeConfig;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/extensions/defaultExtensionConfiguration.js


const getDefaultExtensionConfiguration = (runtimeConfig) => {
    return {
        ...getChecksumConfiguration(runtimeConfig),
        ...getRetryConfiguration(runtimeConfig),
    };
};
const getDefaultClientConfiguration = (/* unused pure expression or super */ null && (getDefaultExtensionConfiguration));
const resolveDefaultRuntimeConfig = (config) => {
    return {
        ...resolveChecksumRuntimeConfig(config),
        ...resolveRetryRuntimeConfig(config),
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/extensions/index.js


;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/extended-encode-uri-component.js
function extendedEncodeURIComponent(str) {
    return encodeURIComponent(str).replace(/[!'()*]/g, function (c) {
        return "%" + c.charCodeAt(0).toString(16).toUpperCase();
    });
}

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/get-value-from-text-node.js
const getValueFromTextNode = (obj) => {
    const textNodeName = "#text";
    for (const key in obj) {
        if (obj.hasOwnProperty(key) && obj[key][textNodeName] !== undefined) {
            obj[key] = obj[key][textNodeName];
        }
        else if (typeof obj[key] === "object" && obj[key] !== null) {
            obj[key] = getValueFromTextNode(obj[key]);
        }
    }
    return obj;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/lazy-json.js
const StringWrapper = function () {
    const Class = Object.getPrototypeOf(this).constructor;
    const Constructor = Function.bind.apply(String, [null, ...arguments]);
    const instance = new Constructor();
    Object.setPrototypeOf(instance, Class.prototype);
    return instance;
};
StringWrapper.prototype = Object.create(String.prototype, {
    constructor: {
        value: StringWrapper,
        enumerable: false,
        writable: true,
        configurable: true,
    },
});
Object.setPrototypeOf(StringWrapper, String);
class LazyJsonString extends (/* unused pure expression or super */ null && (StringWrapper)) {
    deserializeJSON() {
        return JSON.parse(super.toString());
    }
    toJSON() {
        return super.toString();
    }
    static fromObject(object) {
        if (object instanceof LazyJsonString) {
            return object;
        }
        else if (object instanceof String || typeof object === "string") {
            return new LazyJsonString(object);
        }
        return new LazyJsonString(JSON.stringify(object));
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/object-mapping.js
function map(arg0, arg1, arg2) {
    let target;
    let filter;
    let instructions;
    if (typeof arg1 === "undefined" && typeof arg2 === "undefined") {
        target = {};
        instructions = arg0;
    }
    else {
        target = arg0;
        if (typeof arg1 === "function") {
            filter = arg1;
            instructions = arg2;
            return mapWithFilter(target, filter, instructions);
        }
        else {
            instructions = arg1;
        }
    }
    for (const key of Object.keys(instructions)) {
        if (!Array.isArray(instructions[key])) {
            target[key] = instructions[key];
            continue;
        }
        applyInstruction(target, null, instructions, key);
    }
    return target;
}
const convertMap = (target) => {
    const output = {};
    for (const [k, v] of Object.entries(target || {})) {
        output[k] = [, v];
    }
    return output;
};
const take = (source, instructions) => {
    const out = {};
    for (const key in instructions) {
        applyInstruction(out, source, instructions, key);
    }
    return out;
};
const mapWithFilter = (target, filter, instructions) => {
    return map(target, Object.entries(instructions).reduce((_instructions, [key, value]) => {
        if (Array.isArray(value)) {
            _instructions[key] = value;
        }
        else {
            if (typeof value === "function") {
                _instructions[key] = [filter, value()];
            }
            else {
                _instructions[key] = [filter, value];
            }
        }
        return _instructions;
    }, {}));
};
const applyInstruction = (target, source, instructions, targetKey) => {
    if (source !== null) {
        let instruction = instructions[targetKey];
        if (typeof instruction === "function") {
            instruction = [, instruction];
        }
        const [filter = nonNullish, valueFn = pass, sourceKey = targetKey] = instruction;
        if ((typeof filter === "function" && filter(source[sourceKey])) || (typeof filter !== "function" && !!filter)) {
            target[targetKey] = valueFn(source[sourceKey]);
        }
        return;
    }
    let [filter, value] = instructions[targetKey];
    if (typeof value === "function") {
        let _value;
        const defaultFilterPassed = filter === undefined && (_value = value()) != null;
        const customFilterPassed = (typeof filter === "function" && !!filter(void 0)) || (typeof filter !== "function" && !!filter);
        if (defaultFilterPassed) {
            target[targetKey] = _value;
        }
        else if (customFilterPassed) {
            target[targetKey] = value();
        }
    }
    else {
        const defaultFilterPassed = filter === undefined && value != null;
        const customFilterPassed = (typeof filter === "function" && !!filter(value)) || (typeof filter !== "function" && !!filter);
        if (defaultFilterPassed || customFilterPassed) {
            target[targetKey] = value;
        }
    }
};
const nonNullish = (_) => _ != null;
const pass = (_) => _;

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/resolve-path.js

const resolvedPath = (resolvedPath, input, memberName, labelValueProvider, uriLabel, isGreedyLabel) => {
    if (input != null && input[memberName] !== undefined) {
        const labelValue = labelValueProvider();
        if (labelValue.length <= 0) {
            throw new Error("Empty value provided for input HTTP label: " + memberName + ".");
        }
        resolvedPath = resolvedPath.replace(uriLabel, isGreedyLabel
            ? labelValue
                .split("/")
                .map((segment) => extendedEncodeURIComponent(segment))
                .join("/")
            : extendedEncodeURIComponent(labelValue));
    }
    else {
        throw new Error("No value provided for input HTTP label: " + memberName + ".");
    }
    return resolvedPath;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/ser-utils.js
const serializeFloat = (value) => {
    if (value !== value) {
        return "NaN";
    }
    switch (value) {
        case Infinity:
            return "Infinity";
        case -Infinity:
            return "-Infinity";
        default:
            return value;
    }
};

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/serde-json.js
const _json = (obj) => {
    if (obj == null) {
        return {};
    }
    if (Array.isArray(obj)) {
        return obj.filter((_) => _ != null).map(_json);
    }
    if (typeof obj === "object") {
        const target = {};
        for (const key of Object.keys(obj)) {
            if (obj[key] == null) {
                continue;
            }
            target[key] = _json(obj[key]);
        }
        return target;
    }
    return obj;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/smithy-client/dist-es/index.js
























/***/ }),

/***/ 7523:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  dB: () => (/* reexport */ AlgorithmId),
  Ue: () => (/* reexport */ EndpointURLScheme),
  Ip: () => (/* reexport */ IniSectionType),
  Vf: () => (/* reexport */ SMITHY_CONTEXT_KEY)
});

// UNUSED EXPORTS: FieldPosition, HttpApiKeyAuthLocation, HttpAuthLocation, RequestHandlerProtocol, getDefaultClientConfiguration, resolveDefaultRuntimeConfig

;// CONCATENATED MODULE: ./node_modules/@smithy/types/dist-es/auth/auth.js
var HttpAuthLocation;
(function (HttpAuthLocation) {
    HttpAuthLocation["HEADER"] = "header";
    HttpAuthLocation["QUERY"] = "query";
})(HttpAuthLocation || (HttpAuthLocation = {}));

;// CONCATENATED MODULE: ./node_modules/@smithy/types/dist-es/auth/HttpApiKeyAuth.js
var HttpApiKeyAuthLocation;
(function (HttpApiKeyAuthLocation) {
    HttpApiKeyAuthLocation["HEADER"] = "header";
    HttpApiKeyAuthLocation["QUERY"] = "query";
})(HttpApiKeyAuthLocation || (HttpApiKeyAuthLocation = {}));

;// CONCATENATED MODULE: ./node_modules/@smithy/types/dist-es/auth/index.js







;// CONCATENATED MODULE: ./node_modules/@smithy/types/dist-es/endpoint.js
var EndpointURLScheme;
(function (EndpointURLScheme) {
    EndpointURLScheme["HTTP"] = "http";
    EndpointURLScheme["HTTPS"] = "https";
})(EndpointURLScheme || (EndpointURLScheme = {}));

;// CONCATENATED MODULE: ./node_modules/@smithy/types/dist-es/extensions/checksum.js
var AlgorithmId;
(function (AlgorithmId) {
    AlgorithmId["MD5"] = "md5";
    AlgorithmId["CRC32"] = "crc32";
    AlgorithmId["CRC32C"] = "crc32c";
    AlgorithmId["SHA1"] = "sha1";
    AlgorithmId["SHA256"] = "sha256";
})(AlgorithmId || (AlgorithmId = {}));
const checksum_getChecksumConfiguration = (runtimeConfig) => {
    const checksumAlgorithms = [];
    if (runtimeConfig.sha256 !== undefined) {
        checksumAlgorithms.push({
            algorithmId: () => AlgorithmId.SHA256,
            checksumConstructor: () => runtimeConfig.sha256,
        });
    }
    if (runtimeConfig.md5 != undefined) {
        checksumAlgorithms.push({
            algorithmId: () => AlgorithmId.MD5,
            checksumConstructor: () => runtimeConfig.md5,
        });
    }
    return {
        _checksumAlgorithms: checksumAlgorithms,
        addChecksumAlgorithm(algo) {
            this._checksumAlgorithms.push(algo);
        },
        checksumAlgorithms() {
            return this._checksumAlgorithms;
        },
    };
};
const checksum_resolveChecksumRuntimeConfig = (clientConfig) => {
    const runtimeConfig = {};
    clientConfig.checksumAlgorithms().forEach((checksumAlgorithm) => {
        runtimeConfig[checksumAlgorithm.algorithmId()] = checksumAlgorithm.checksumConstructor();
    });
    return runtimeConfig;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/types/dist-es/extensions/defaultClientConfiguration.js

const getDefaultClientConfiguration = (runtimeConfig) => {
    return {
        ...getChecksumConfiguration(runtimeConfig),
    };
};
const resolveDefaultRuntimeConfig = (config) => {
    return {
        ...resolveChecksumRuntimeConfig(config),
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/types/dist-es/extensions/index.js




;// CONCATENATED MODULE: ./node_modules/@smithy/types/dist-es/http.js
var FieldPosition;
(function (FieldPosition) {
    FieldPosition[FieldPosition["HEADER"] = 0] = "HEADER";
    FieldPosition[FieldPosition["TRAILER"] = 1] = "TRAILER";
})(FieldPosition || (FieldPosition = {}));

;// CONCATENATED MODULE: ./node_modules/@smithy/types/dist-es/middleware.js
const SMITHY_CONTEXT_KEY = "__smithy_context";

;// CONCATENATED MODULE: ./node_modules/@smithy/types/dist-es/profile.js
var IniSectionType;
(function (IniSectionType) {
    IniSectionType["PROFILE"] = "profile";
    IniSectionType["SSO_SESSION"] = "sso-session";
    IniSectionType["SERVICES"] = "services";
})(IniSectionType || (IniSectionType = {}));

;// CONCATENATED MODULE: ./node_modules/@smithy/types/dist-es/transfer.js
var RequestHandlerProtocol;
(function (RequestHandlerProtocol) {
    RequestHandlerProtocol["HTTP_0_9"] = "http/0.9";
    RequestHandlerProtocol["HTTP_1_0"] = "http/1.0";
    RequestHandlerProtocol["TDS_8_0"] = "tds/8.0";
})(RequestHandlerProtocol || (RequestHandlerProtocol = {}));

;// CONCATENATED MODULE: ./node_modules/@smithy/types/dist-es/index.js






































/***/ }),

/***/ 2641:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  D: () => (/* binding */ parseUrl)
});

;// CONCATENATED MODULE: ./node_modules/@smithy/querystring-parser/dist-es/index.js
function parseQueryString(querystring) {
    const query = {};
    querystring = querystring.replace(/^\?/, "");
    if (querystring) {
        for (const pair of querystring.split("&")) {
            let [key, value = null] = pair.split("=");
            key = decodeURIComponent(key);
            if (value) {
                value = decodeURIComponent(value);
            }
            if (!(key in query)) {
                query[key] = value;
            }
            else if (Array.isArray(query[key])) {
                query[key].push(value);
            }
            else {
                query[key] = [query[key], value];
            }
        }
    }
    return query;
}

;// CONCATENATED MODULE: ./node_modules/@smithy/url-parser/dist-es/index.js

const parseUrl = (url) => {
    if (typeof url === "string") {
        return parseUrl(new URL(url));
    }
    const { hostname, pathname, port, protocol, search } = url;
    let query;
    if (search) {
        query = parseQueryString(search);
    }
    return {
        hostname,
        port: port ? parseInt(port) : undefined,
        protocol,
        path: pathname,
        query,
    };
};


/***/ }),

/***/ 4572:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  E: () => (/* reexport */ fromBase64),
  n: () => (/* reexport */ toBase64)
});

// EXTERNAL MODULE: ./node_modules/@smithy/util-buffer-from/dist-es/index.js
var dist_es = __webpack_require__(9290);
;// CONCATENATED MODULE: ./node_modules/@smithy/util-base64/dist-es/fromBase64.js

const BASE64_REGEX = /^[A-Za-z0-9+/]*={0,2}$/;
const fromBase64 = (input) => {
    if ((input.length * 3) % 4 !== 0) {
        throw new TypeError(`Incorrect padding on base64 string.`);
    }
    if (!BASE64_REGEX.exec(input)) {
        throw new TypeError(`Invalid base64 string.`);
    }
    const buffer = (0,dist_es/* fromString */.s)(input, "base64");
    return new Uint8Array(buffer.buffer, buffer.byteOffset, buffer.byteLength);
};

// EXTERNAL MODULE: ./node_modules/@smithy/util-utf8/dist-es/index.js + 3 modules
var util_utf8_dist_es = __webpack_require__(3197);
;// CONCATENATED MODULE: ./node_modules/@smithy/util-base64/dist-es/toBase64.js


const toBase64 = (_input) => {
    let input;
    if (typeof _input === "string") {
        input = (0,util_utf8_dist_es/* fromUtf8 */.ar)(_input);
    }
    else {
        input = _input;
    }
    if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-base64: toBase64 encoder function only accepts string | Uint8Array.");
    }
    return (0,dist_es/* fromArrayBuffer */.Q)(input.buffer, input.byteOffset, input.byteLength).toString("base64");
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-base64/dist-es/index.js




/***/ }),

/***/ 7809:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  n: () => (/* reexport */ calculateBodyLength)
});

// EXTERNAL MODULE: external "fs"
var external_fs_ = __webpack_require__(9896);
;// CONCATENATED MODULE: ./node_modules/@smithy/util-body-length-node/dist-es/calculateBodyLength.js

const calculateBodyLength = (body) => {
    if (!body) {
        return 0;
    }
    if (typeof body === "string") {
        return Buffer.byteLength(body);
    }
    else if (typeof body.byteLength === "number") {
        return body.byteLength;
    }
    else if (typeof body.size === "number") {
        return body.size;
    }
    else if (typeof body.start === "number" && typeof body.end === "number") {
        return body.end + 1 - body.start;
    }
    else if (typeof body.path === "string" || Buffer.isBuffer(body.path)) {
        return (0,external_fs_.lstatSync)(body.path).size;
    }
    else if (typeof body.fd === "number") {
        return (0,external_fs_.fstatSync)(body.fd).size;
    }
    throw new Error(`Body Length computation failed for ${body}`);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-body-length-node/dist-es/index.js



/***/ }),

/***/ 9290:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Q: () => (/* binding */ fromArrayBuffer),
/* harmony export */   s: () => (/* binding */ fromString)
/* harmony export */ });
/* harmony import */ var _smithy_is_array_buffer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3695);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(181);
/* harmony import */ var buffer__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(buffer__WEBPACK_IMPORTED_MODULE_0__);


const fromArrayBuffer = (input, offset = 0, length = input.byteLength - offset) => {
    if (!(0,_smithy_is_array_buffer__WEBPACK_IMPORTED_MODULE_1__/* .isArrayBuffer */ .m)(input)) {
        throw new TypeError(`The "input" argument must be ArrayBuffer. Received type ${typeof input} (${input})`);
    }
    return buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from(input, offset, length);
};
const fromString = (input, encoding) => {
    if (typeof input !== "string") {
        throw new TypeError(`The "input" argument must be of type string. Received type ${typeof input} (${input})`);
    }
    return encoding ? buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from(input, encoding) : buffer__WEBPACK_IMPORTED_MODULE_0__.Buffer.from(input);
};


/***/ }),

/***/ 5645:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  cV: () => (/* reexport */ SelectorType),
  Qm: () => (/* reexport */ booleanSelector)
});

// UNUSED EXPORTS: numberSelector

;// CONCATENATED MODULE: ./node_modules/@smithy/util-config-provider/dist-es/booleanSelector.js
const booleanSelector = (obj, key, type) => {
    if (!(key in obj))
        return undefined;
    if (obj[key] === "true")
        return true;
    if (obj[key] === "false")
        return false;
    throw new Error(`Cannot load ${type} "${key}". Expected "true" or "false", got ${obj[key]}.`);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-config-provider/dist-es/types.js
var SelectorType;
(function (SelectorType) {
    SelectorType["ENV"] = "env";
    SelectorType["CONFIG"] = "shared config entry";
})(SelectorType || (SelectorType = {}));

;// CONCATENATED MODULE: ./node_modules/@smithy/util-config-provider/dist-es/index.js





/***/ }),

/***/ 4321:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  I: () => (/* reexport */ resolveDefaultsModeConfig)
});

// EXTERNAL MODULE: ./node_modules/@smithy/config-resolver/dist-es/index.js + 10 modules
var dist_es = __webpack_require__(7122);
// EXTERNAL MODULE: ./node_modules/@smithy/node-config-provider/dist-es/index.js + 4 modules
var node_config_provider_dist_es = __webpack_require__(1881);
// EXTERNAL MODULE: ./node_modules/@smithy/property-provider/dist-es/index.js + 6 modules
var property_provider_dist_es = __webpack_require__(8112);
;// CONCATENATED MODULE: ./node_modules/@smithy/util-defaults-mode-node/dist-es/constants.js
const AWS_EXECUTION_ENV = "AWS_EXECUTION_ENV";
const AWS_REGION_ENV = "AWS_REGION";
const AWS_DEFAULT_REGION_ENV = "AWS_DEFAULT_REGION";
const ENV_IMDS_DISABLED = "AWS_EC2_METADATA_DISABLED";
const DEFAULTS_MODE_OPTIONS = ["in-region", "cross-region", "mobile", "standard", "legacy"];
const IMDS_REGION_PATH = "/latest/meta-data/placement/region";

;// CONCATENATED MODULE: ./node_modules/@smithy/util-defaults-mode-node/dist-es/defaultsModeConfig.js
const AWS_DEFAULTS_MODE_ENV = "AWS_DEFAULTS_MODE";
const AWS_DEFAULTS_MODE_CONFIG = "defaults_mode";
const NODE_DEFAULTS_MODE_CONFIG_OPTIONS = {
    environmentVariableSelector: (env) => {
        return env[AWS_DEFAULTS_MODE_ENV];
    },
    configFileSelector: (profile) => {
        return profile[AWS_DEFAULTS_MODE_CONFIG];
    },
    default: "legacy",
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-defaults-mode-node/dist-es/resolveDefaultsModeConfig.js





const resolveDefaultsModeConfig = ({ region = (0,node_config_provider_dist_es/* loadConfig */.Z)(dist_es/* NODE_REGION_CONFIG_OPTIONS */.GG), defaultsMode = (0,node_config_provider_dist_es/* loadConfig */.Z)(NODE_DEFAULTS_MODE_CONFIG_OPTIONS), } = {}) => (0,property_provider_dist_es/* memoize */.Bj)(async () => {
    const mode = typeof defaultsMode === "function" ? await defaultsMode() : defaultsMode;
    switch (mode?.toLowerCase()) {
        case "auto":
            return resolveNodeDefaultsModeAuto(region);
        case "in-region":
        case "cross-region":
        case "mobile":
        case "standard":
        case "legacy":
            return Promise.resolve(mode?.toLocaleLowerCase());
        case undefined:
            return Promise.resolve("legacy");
        default:
            throw new Error(`Invalid parameter for "defaultsMode", expect ${DEFAULTS_MODE_OPTIONS.join(", ")}, got ${mode}`);
    }
});
const resolveNodeDefaultsModeAuto = async (clientRegion) => {
    if (clientRegion) {
        const resolvedRegion = typeof clientRegion === "function" ? await clientRegion() : clientRegion;
        const inferredRegion = await inferPhysicalRegion();
        if (!inferredRegion) {
            return "standard";
        }
        if (resolvedRegion === inferredRegion) {
            return "in-region";
        }
        else {
            return "cross-region";
        }
    }
    return "standard";
};
const inferPhysicalRegion = async () => {
    if (process.env[AWS_EXECUTION_ENV] && (process.env[AWS_REGION_ENV] || process.env[AWS_DEFAULT_REGION_ENV])) {
        return process.env[AWS_REGION_ENV] ?? process.env[AWS_DEFAULT_REGION_ENV];
    }
    if (!process.env[ENV_IMDS_DISABLED]) {
        try {
            const { getInstanceMetadataEndpoint, httpRequest } = await Promise.resolve(/* import() */).then(__webpack_require__.bind(__webpack_require__, 7897));
            const endpoint = await getInstanceMetadataEndpoint();
            return (await httpRequest({ ...endpoint, path: IMDS_REGION_PATH })).toString();
        }
        catch (e) {
        }
    }
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-defaults-mode-node/dist-es/index.js



/***/ }),

/***/ 3875:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  mw: () => (/* reexport */ customEndpointFunctions),
  oX: () => (/* reexport */ isIpAddress),
  X8: () => (/* reexport */ isValidHostLabel),
  sO: () => (/* reexport */ resolveEndpoint)
});

// UNUSED EXPORTS: EndpointError

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/lib/isIpAddress.js
const IP_V4_REGEX = new RegExp(`^(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}$`);
const isIpAddress = (value) => IP_V4_REGEX.test(value) || (value.startsWith("[") && value.endsWith("]"));

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/lib/isValidHostLabel.js
const VALID_HOST_LABEL_REGEX = new RegExp(`^(?!.*-$)(?!-)[a-zA-Z0-9-]{1,63}$`);
const isValidHostLabel = (value, allowSubDomains = false) => {
    if (!allowSubDomains) {
        return VALID_HOST_LABEL_REGEX.test(value);
    }
    const labels = value.split(".");
    for (const label of labels) {
        if (!isValidHostLabel(label)) {
            return false;
        }
    }
    return true;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/customEndpointFunctions.js
const customEndpointFunctions = {};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/debug/debugId.js
const debugId = "endpoints";

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/debug/toDebugString.js
function toDebugString(input) {
    if (typeof input !== "object" || input == null) {
        return input;
    }
    if ("ref" in input) {
        return `$${toDebugString(input.ref)}`;
    }
    if ("fn" in input) {
        return `${input.fn}(${(input.argv || []).map(toDebugString).join(", ")})`;
    }
    return JSON.stringify(input, null, 2);
}

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/types/EndpointError.js
class EndpointError extends Error {
    constructor(message) {
        super(message);
        this.name = "EndpointError";
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/types/index.js








;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/lib/booleanEquals.js
const booleanEquals = (value1, value2) => value1 === value2;

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/lib/getAttrPathList.js

const getAttrPathList = (path) => {
    const parts = path.split(".");
    const pathList = [];
    for (const part of parts) {
        const squareBracketIndex = part.indexOf("[");
        if (squareBracketIndex !== -1) {
            if (part.indexOf("]") !== part.length - 1) {
                throw new EndpointError(`Path: '${path}' does not end with ']'`);
            }
            const arrayIndex = part.slice(squareBracketIndex + 1, -1);
            if (Number.isNaN(parseInt(arrayIndex))) {
                throw new EndpointError(`Invalid array index: '${arrayIndex}' in path: '${path}'`);
            }
            if (squareBracketIndex !== 0) {
                pathList.push(part.slice(0, squareBracketIndex));
            }
            pathList.push(arrayIndex);
        }
        else {
            pathList.push(part);
        }
    }
    return pathList;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/lib/getAttr.js


const getAttr = (value, path) => getAttrPathList(path).reduce((acc, index) => {
    if (typeof acc !== "object") {
        throw new EndpointError(`Index '${index}' in '${path}' not found in '${JSON.stringify(value)}'`);
    }
    else if (Array.isArray(acc)) {
        return acc[parseInt(index)];
    }
    return acc[index];
}, value);

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/lib/isSet.js
const isSet = (value) => value != null;

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/lib/not.js
const not = (value) => !value;

// EXTERNAL MODULE: ./node_modules/@smithy/types/dist-es/index.js + 11 modules
var dist_es = __webpack_require__(7523);
;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/lib/parseURL.js


const DEFAULT_PORTS = {
    [dist_es/* EndpointURLScheme */.Ue.HTTP]: 80,
    [dist_es/* EndpointURLScheme */.Ue.HTTPS]: 443,
};
const parseURL = (value) => {
    const whatwgURL = (() => {
        try {
            if (value instanceof URL) {
                return value;
            }
            if (typeof value === "object" && "hostname" in value) {
                const { hostname, port, protocol = "", path = "", query = {} } = value;
                const url = new URL(`${protocol}//${hostname}${port ? `:${port}` : ""}${path}`);
                url.search = Object.entries(query)
                    .map(([k, v]) => `${k}=${v}`)
                    .join("&");
                return url;
            }
            return new URL(value);
        }
        catch (error) {
            return null;
        }
    })();
    if (!whatwgURL) {
        console.error(`Unable to parse ${JSON.stringify(value)} as a whatwg URL.`);
        return null;
    }
    const urlString = whatwgURL.href;
    const { host, hostname, pathname, protocol, search } = whatwgURL;
    if (search) {
        return null;
    }
    const scheme = protocol.slice(0, -1);
    if (!Object.values(dist_es/* EndpointURLScheme */.Ue).includes(scheme)) {
        return null;
    }
    const isIp = isIpAddress(hostname);
    const inputContainsDefaultPort = urlString.includes(`${host}:${DEFAULT_PORTS[scheme]}`) ||
        (typeof value === "string" && value.includes(`${host}:${DEFAULT_PORTS[scheme]}`));
    const authority = `${host}${inputContainsDefaultPort ? `:${DEFAULT_PORTS[scheme]}` : ``}`;
    return {
        scheme,
        authority,
        path: pathname,
        normalizedPath: pathname.endsWith("/") ? pathname : `${pathname}/`,
        isIp,
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/lib/stringEquals.js
const stringEquals = (value1, value2) => value1 === value2;

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/lib/substring.js
const substring = (input, start, stop, reverse) => {
    if (start >= stop || input.length < stop) {
        return null;
    }
    if (!reverse) {
        return input.substring(start, stop);
    }
    return input.substring(input.length - stop, input.length - start);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/lib/uriEncode.js
const uriEncode = (value) => encodeURIComponent(value).replace(/[!*'()]/g, (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`);

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/lib/index.js










;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/endpointFunctions.js

const endpointFunctions = {
    booleanEquals: booleanEquals,
    getAttr: getAttr,
    isSet: isSet,
    isValidHostLabel: isValidHostLabel,
    not: not,
    parseURL: parseURL,
    stringEquals: stringEquals,
    substring: substring,
    uriEncode: uriEncode,
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTemplate.js

const evaluateTemplate = (template, options) => {
    const evaluatedTemplateArr = [];
    const templateContext = {
        ...options.endpointParams,
        ...options.referenceRecord,
    };
    let currentIndex = 0;
    while (currentIndex < template.length) {
        const openingBraceIndex = template.indexOf("{", currentIndex);
        if (openingBraceIndex === -1) {
            evaluatedTemplateArr.push(template.slice(currentIndex));
            break;
        }
        evaluatedTemplateArr.push(template.slice(currentIndex, openingBraceIndex));
        const closingBraceIndex = template.indexOf("}", openingBraceIndex);
        if (closingBraceIndex === -1) {
            evaluatedTemplateArr.push(template.slice(openingBraceIndex));
            break;
        }
        if (template[openingBraceIndex + 1] === "{" && template[closingBraceIndex + 1] === "}") {
            evaluatedTemplateArr.push(template.slice(openingBraceIndex + 1, closingBraceIndex));
            currentIndex = closingBraceIndex + 2;
        }
        const parameterName = template.substring(openingBraceIndex + 1, closingBraceIndex);
        if (parameterName.includes("#")) {
            const [refName, attrName] = parameterName.split("#");
            evaluatedTemplateArr.push(getAttr(templateContext[refName], attrName));
        }
        else {
            evaluatedTemplateArr.push(templateContext[parameterName]);
        }
        currentIndex = closingBraceIndex + 1;
    }
    return evaluatedTemplateArr.join("");
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/getReferenceValue.js
const getReferenceValue = ({ ref }, options) => {
    const referenceRecord = {
        ...options.endpointParams,
        ...options.referenceRecord,
    };
    return referenceRecord[ref];
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateExpression.js




const evaluateExpression = (obj, keyName, options) => {
    if (typeof obj === "string") {
        return evaluateTemplate(obj, options);
    }
    else if (obj["fn"]) {
        return callFunction(obj, options);
    }
    else if (obj["ref"]) {
        return getReferenceValue(obj, options);
    }
    throw new EndpointError(`'${keyName}': ${String(obj)} is not a string, function or reference.`);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/callFunction.js



const callFunction = ({ fn, argv }, options) => {
    const evaluatedArgs = argv.map((arg) => ["boolean", "number"].includes(typeof arg) ? arg : evaluateExpression(arg, "arg", options));
    const fnSegments = fn.split(".");
    if (fnSegments[0] in customEndpointFunctions && fnSegments[1] != null) {
        return customEndpointFunctions[fnSegments[0]][fnSegments[1]](...evaluatedArgs);
    }
    return endpointFunctions[fn](...evaluatedArgs);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateCondition.js



const evaluateCondition = ({ assign, ...fnArgs }, options) => {
    if (assign && assign in options.referenceRecord) {
        throw new EndpointError(`'${assign}' is already defined in Reference Record.`);
    }
    const value = callFunction(fnArgs, options);
    options.logger?.debug?.(debugId, `evaluateCondition: ${toDebugString(fnArgs)} = ${toDebugString(value)}`);
    return {
        result: value === "" ? true : !!value,
        ...(assign != null && { toAssign: { name: assign, value } }),
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateConditions.js


const evaluateConditions = (conditions = [], options) => {
    const conditionsReferenceRecord = {};
    for (const condition of conditions) {
        const { result, toAssign } = evaluateCondition(condition, {
            ...options,
            referenceRecord: {
                ...options.referenceRecord,
                ...conditionsReferenceRecord,
            },
        });
        if (!result) {
            return { result };
        }
        if (toAssign) {
            conditionsReferenceRecord[toAssign.name] = toAssign.value;
            options.logger?.debug?.(debugId, `assign: ${toAssign.name} := ${toDebugString(toAssign.value)}`);
        }
    }
    return { result: true, referenceRecord: conditionsReferenceRecord };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointHeaders.js


const getEndpointHeaders = (headers, options) => Object.entries(headers).reduce((acc, [headerKey, headerVal]) => ({
    ...acc,
    [headerKey]: headerVal.map((headerValEntry) => {
        const processedExpr = evaluateExpression(headerValEntry, "Header value entry", options);
        if (typeof processedExpr !== "string") {
            throw new EndpointError(`Header '${headerKey}' value '${processedExpr}' is not a string`);
        }
        return processedExpr;
    }),
}), {});

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperty.js



const getEndpointProperty = (property, options) => {
    if (Array.isArray(property)) {
        return property.map((propertyEntry) => getEndpointProperty(propertyEntry, options));
    }
    switch (typeof property) {
        case "string":
            return evaluateTemplate(property, options);
        case "object":
            if (property === null) {
                throw new EndpointError(`Unexpected endpoint property: ${property}`);
            }
            return getEndpointProperties(property, options);
        case "boolean":
            return property;
        default:
            throw new EndpointError(`Unexpected endpoint property type: ${typeof property}`);
    }
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointProperties.js

const getEndpointProperties = (properties, options) => Object.entries(properties).reduce((acc, [propertyKey, propertyVal]) => ({
    ...acc,
    [propertyKey]: getEndpointProperty(propertyVal, options),
}), {});

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/getEndpointUrl.js


const getEndpointUrl = (endpointUrl, options) => {
    const expression = evaluateExpression(endpointUrl, "Endpoint URL", options);
    if (typeof expression === "string") {
        try {
            return new URL(expression);
        }
        catch (error) {
            console.error(`Failed to construct URL with ${expression}`, error);
            throw error;
        }
    }
    throw new EndpointError(`Endpoint URL must be a string, got ${typeof expression}`);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateEndpointRule.js





const evaluateEndpointRule = (endpointRule, options) => {
    const { conditions, endpoint } = endpointRule;
    const { result, referenceRecord } = evaluateConditions(conditions, options);
    if (!result) {
        return;
    }
    const endpointRuleOptions = {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord },
    };
    const { url, properties, headers } = endpoint;
    options.logger?.debug?.(debugId, `Resolving endpoint from template: ${toDebugString(endpoint)}`);
    return {
        ...(headers != undefined && {
            headers: getEndpointHeaders(headers, endpointRuleOptions),
        }),
        ...(properties != undefined && {
            properties: getEndpointProperties(properties, endpointRuleOptions),
        }),
        url: getEndpointUrl(url, endpointRuleOptions),
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateErrorRule.js



const evaluateErrorRule = (errorRule, options) => {
    const { conditions, error } = errorRule;
    const { result, referenceRecord } = evaluateConditions(conditions, options);
    if (!result) {
        return;
    }
    throw new EndpointError(evaluateExpression(error, "Error", {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord },
    }));
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateTreeRule.js


const evaluateTreeRule = (treeRule, options) => {
    const { conditions, rules } = treeRule;
    const { result, referenceRecord } = evaluateConditions(conditions, options);
    if (!result) {
        return;
    }
    return evaluateRules(rules, {
        ...options,
        referenceRecord: { ...options.referenceRecord, ...referenceRecord },
    });
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/evaluateRules.js




const evaluateRules = (rules, options) => {
    for (const rule of rules) {
        if (rule.type === "endpoint") {
            const endpointOrUndefined = evaluateEndpointRule(rule, options);
            if (endpointOrUndefined) {
                return endpointOrUndefined;
            }
        }
        else if (rule.type === "error") {
            evaluateErrorRule(rule, options);
        }
        else if (rule.type === "tree") {
            const endpointOrUndefined = evaluateTreeRule(rule, options);
            if (endpointOrUndefined) {
                return endpointOrUndefined;
            }
        }
        else {
            throw new EndpointError(`Unknown endpoint rule: ${rule}`);
        }
    }
    throw new EndpointError(`Rules evaluation failed`);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/utils/index.js



;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/resolveEndpoint.js



const resolveEndpoint = (ruleSetObject, options) => {
    const { endpointParams, logger } = options;
    const { parameters, rules } = ruleSetObject;
    options.logger?.debug?.(`${debugId} Initial EndpointParams: ${toDebugString(endpointParams)}`);
    const paramsWithDefault = Object.entries(parameters)
        .filter(([, v]) => v.default != null)
        .map(([k, v]) => [k, v.default]);
    if (paramsWithDefault.length > 0) {
        for (const [paramKey, paramDefaultValue] of paramsWithDefault) {
            endpointParams[paramKey] = endpointParams[paramKey] ?? paramDefaultValue;
        }
    }
    const requiredParams = Object.entries(parameters)
        .filter(([, v]) => v.required)
        .map(([k]) => k);
    for (const requiredParam of requiredParams) {
        if (endpointParams[requiredParam] == null) {
            throw new EndpointError(`Missing required parameter: '${requiredParam}'`);
        }
    }
    const endpoint = evaluateRules(rules, { endpointParams, logger, referenceRecord: {} });
    if (options.endpointParams?.Endpoint) {
        try {
            const givenEndpoint = new URL(options.endpointParams.Endpoint);
            const { protocol, port } = givenEndpoint;
            endpoint.url.protocol = protocol;
            endpoint.url.port = port;
        }
        catch (e) {
        }
    }
    options.logger?.debug?.(`${debugId} Resolved endpoint: ${toDebugString(endpoint)}`);
    return endpoint;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-endpoints/dist-es/index.js







/***/ }),

/***/ 8004:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   a: () => (/* binding */ fromHex),
/* harmony export */   n: () => (/* binding */ toHex)
/* harmony export */ });
const SHORT_TO_HEX = {};
const HEX_TO_SHORT = {};
for (let i = 0; i < 256; i++) {
    let encodedByte = i.toString(16).toLowerCase();
    if (encodedByte.length === 1) {
        encodedByte = `0${encodedByte}`;
    }
    SHORT_TO_HEX[i] = encodedByte;
    HEX_TO_SHORT[encodedByte] = i;
}
function fromHex(encoded) {
    if (encoded.length % 2 !== 0) {
        throw new Error("Hex encoded strings must have an even number length");
    }
    const out = new Uint8Array(encoded.length / 2);
    for (let i = 0; i < encoded.length; i += 2) {
        const encodedByte = encoded.slice(i, i + 2).toLowerCase();
        if (encodedByte in HEX_TO_SHORT) {
            out[i / 2] = HEX_TO_SHORT[encodedByte];
        }
        else {
            throw new Error(`Cannot decode unrecognized sequence ${encodedByte} as hexadecimal`);
        }
    }
    return out;
}
function toHex(bytes) {
    let out = "";
    for (let i = 0; i < bytes.byteLength; i++) {
        out += SHORT_TO_HEX[bytes[i]];
    }
    return out;
}


/***/ }),

/***/ 7135:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  u: () => (/* reexport */ getSmithyContext),
  t: () => (/* reexport */ normalizeProvider)
});

// EXTERNAL MODULE: ./node_modules/@smithy/types/dist-es/index.js + 11 modules
var dist_es = __webpack_require__(7523);
;// CONCATENATED MODULE: ./node_modules/@smithy/util-middleware/dist-es/getSmithyContext.js

const getSmithyContext = (context) => context[dist_es/* SMITHY_CONTEXT_KEY */.Vf] || (context[dist_es/* SMITHY_CONTEXT_KEY */.Vf] = {});

;// CONCATENATED MODULE: ./node_modules/@smithy/util-middleware/dist-es/normalizeProvider.js
const normalizeProvider = (input) => {
    if (typeof input === "function")
        return input;
    const promisified = Promise.resolve(input);
    return () => promisified;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-middleware/dist-es/index.js




/***/ }),

/***/ 3323:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Y: () => (/* reexport */ AdaptiveRetryStrategy),
  Gz: () => (/* reexport */ DEFAULT_MAX_ATTEMPTS),
  bp: () => (/* reexport */ DEFAULT_RETRY_DELAY_BASE),
  L0: () => (/* reexport */ DEFAULT_RETRY_MODE),
  QJ: () => (/* reexport */ DefaultRateLimiter),
  Df: () => (/* reexport */ INITIAL_RETRY_TOKENS),
  l5: () => (/* reexport */ INVOCATION_ID_HEADER),
  G8: () => (/* reexport */ MAXIMUM_RETRY_DELAY),
  XP: () => (/* reexport */ NO_RETRY_INCREMENT),
  ok: () => (/* reexport */ REQUEST_HEADER),
  XS: () => (/* reexport */ RETRY_COST),
  cm: () => (/* reexport */ RETRY_MODES),
  ru: () => (/* reexport */ StandardRetryStrategy),
  jh: () => (/* reexport */ THROTTLING_RETRY_DELAY_BASE),
  Rn: () => (/* reexport */ TIMEOUT_RETRY_COST)
});

// UNUSED EXPORTS: ConfiguredRetryStrategy

;// CONCATENATED MODULE: ./node_modules/@smithy/util-retry/dist-es/config.js
var RETRY_MODES;
(function (RETRY_MODES) {
    RETRY_MODES["STANDARD"] = "standard";
    RETRY_MODES["ADAPTIVE"] = "adaptive";
})(RETRY_MODES || (RETRY_MODES = {}));
const DEFAULT_MAX_ATTEMPTS = 3;
const DEFAULT_RETRY_MODE = RETRY_MODES.STANDARD;

// EXTERNAL MODULE: ./node_modules/@smithy/service-error-classification/dist-es/index.js + 1 modules
var dist_es = __webpack_require__(4542);
;// CONCATENATED MODULE: ./node_modules/@smithy/util-retry/dist-es/DefaultRateLimiter.js

class DefaultRateLimiter {
    constructor(options) {
        this.currentCapacity = 0;
        this.enabled = false;
        this.lastMaxRate = 0;
        this.measuredTxRate = 0;
        this.requestCount = 0;
        this.lastTimestamp = 0;
        this.timeWindow = 0;
        this.beta = options?.beta ?? 0.7;
        this.minCapacity = options?.minCapacity ?? 1;
        this.minFillRate = options?.minFillRate ?? 0.5;
        this.scaleConstant = options?.scaleConstant ?? 0.4;
        this.smooth = options?.smooth ?? 0.8;
        const currentTimeInSeconds = this.getCurrentTimeInSeconds();
        this.lastThrottleTime = currentTimeInSeconds;
        this.lastTxRateBucket = Math.floor(this.getCurrentTimeInSeconds());
        this.fillRate = this.minFillRate;
        this.maxCapacity = this.minCapacity;
    }
    getCurrentTimeInSeconds() {
        return Date.now() / 1000;
    }
    async getSendToken() {
        return this.acquireTokenBucket(1);
    }
    async acquireTokenBucket(amount) {
        if (!this.enabled) {
            return;
        }
        this.refillTokenBucket();
        if (amount > this.currentCapacity) {
            const delay = ((amount - this.currentCapacity) / this.fillRate) * 1000;
            await new Promise((resolve) => setTimeout(resolve, delay));
        }
        this.currentCapacity = this.currentCapacity - amount;
    }
    refillTokenBucket() {
        const timestamp = this.getCurrentTimeInSeconds();
        if (!this.lastTimestamp) {
            this.lastTimestamp = timestamp;
            return;
        }
        const fillAmount = (timestamp - this.lastTimestamp) * this.fillRate;
        this.currentCapacity = Math.min(this.maxCapacity, this.currentCapacity + fillAmount);
        this.lastTimestamp = timestamp;
    }
    updateClientSendingRate(response) {
        let calculatedRate;
        this.updateMeasuredRate();
        if ((0,dist_es/* isThrottlingError */.Qb)(response)) {
            const rateToUse = !this.enabled ? this.measuredTxRate : Math.min(this.measuredTxRate, this.fillRate);
            this.lastMaxRate = rateToUse;
            this.calculateTimeWindow();
            this.lastThrottleTime = this.getCurrentTimeInSeconds();
            calculatedRate = this.cubicThrottle(rateToUse);
            this.enableTokenBucket();
        }
        else {
            this.calculateTimeWindow();
            calculatedRate = this.cubicSuccess(this.getCurrentTimeInSeconds());
        }
        const newRate = Math.min(calculatedRate, 2 * this.measuredTxRate);
        this.updateTokenBucketRate(newRate);
    }
    calculateTimeWindow() {
        this.timeWindow = this.getPrecise(Math.pow((this.lastMaxRate * (1 - this.beta)) / this.scaleConstant, 1 / 3));
    }
    cubicThrottle(rateToUse) {
        return this.getPrecise(rateToUse * this.beta);
    }
    cubicSuccess(timestamp) {
        return this.getPrecise(this.scaleConstant * Math.pow(timestamp - this.lastThrottleTime - this.timeWindow, 3) + this.lastMaxRate);
    }
    enableTokenBucket() {
        this.enabled = true;
    }
    updateTokenBucketRate(newRate) {
        this.refillTokenBucket();
        this.fillRate = Math.max(newRate, this.minFillRate);
        this.maxCapacity = Math.max(newRate, this.minCapacity);
        this.currentCapacity = Math.min(this.currentCapacity, this.maxCapacity);
    }
    updateMeasuredRate() {
        const t = this.getCurrentTimeInSeconds();
        const timeBucket = Math.floor(t * 2) / 2;
        this.requestCount++;
        if (timeBucket > this.lastTxRateBucket) {
            const currentRate = this.requestCount / (timeBucket - this.lastTxRateBucket);
            this.measuredTxRate = this.getPrecise(currentRate * this.smooth + this.measuredTxRate * (1 - this.smooth));
            this.requestCount = 0;
            this.lastTxRateBucket = timeBucket;
        }
    }
    getPrecise(num) {
        return parseFloat(num.toFixed(8));
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/util-retry/dist-es/constants.js
const DEFAULT_RETRY_DELAY_BASE = 100;
const MAXIMUM_RETRY_DELAY = 20 * 1000;
const THROTTLING_RETRY_DELAY_BASE = 500;
const INITIAL_RETRY_TOKENS = 500;
const RETRY_COST = 5;
const TIMEOUT_RETRY_COST = 10;
const NO_RETRY_INCREMENT = 1;
const INVOCATION_ID_HEADER = "amz-sdk-invocation-id";
const REQUEST_HEADER = "amz-sdk-request";

;// CONCATENATED MODULE: ./node_modules/@smithy/util-retry/dist-es/defaultRetryBackoffStrategy.js

const getDefaultRetryBackoffStrategy = () => {
    let delayBase = DEFAULT_RETRY_DELAY_BASE;
    const computeNextBackoffDelay = (attempts) => {
        return Math.floor(Math.min(MAXIMUM_RETRY_DELAY, Math.random() * 2 ** attempts * delayBase));
    };
    const setDelayBase = (delay) => {
        delayBase = delay;
    };
    return {
        computeNextBackoffDelay,
        setDelayBase,
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-retry/dist-es/defaultRetryToken.js

const createDefaultRetryToken = ({ retryDelay, retryCount, retryCost, }) => {
    const getRetryCount = () => retryCount;
    const getRetryDelay = () => Math.min(MAXIMUM_RETRY_DELAY, retryDelay);
    const getRetryCost = () => retryCost;
    return {
        getRetryCount,
        getRetryDelay,
        getRetryCost,
    };
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-retry/dist-es/StandardRetryStrategy.js




class StandardRetryStrategy {
    constructor(maxAttempts) {
        this.maxAttempts = maxAttempts;
        this.mode = RETRY_MODES.STANDARD;
        this.capacity = INITIAL_RETRY_TOKENS;
        this.retryBackoffStrategy = getDefaultRetryBackoffStrategy();
        this.maxAttemptsProvider = typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts;
    }
    async acquireInitialRetryToken(retryTokenScope) {
        return createDefaultRetryToken({
            retryDelay: DEFAULT_RETRY_DELAY_BASE,
            retryCount: 0,
        });
    }
    async refreshRetryTokenForRetry(token, errorInfo) {
        const maxAttempts = await this.getMaxAttempts();
        if (this.shouldRetry(token, errorInfo, maxAttempts)) {
            const errorType = errorInfo.errorType;
            this.retryBackoffStrategy.setDelayBase(errorType === "THROTTLING" ? THROTTLING_RETRY_DELAY_BASE : DEFAULT_RETRY_DELAY_BASE);
            const delayFromErrorType = this.retryBackoffStrategy.computeNextBackoffDelay(token.getRetryCount());
            const retryDelay = errorInfo.retryAfterHint
                ? Math.max(errorInfo.retryAfterHint.getTime() - Date.now() || 0, delayFromErrorType)
                : delayFromErrorType;
            const capacityCost = this.getCapacityCost(errorType);
            this.capacity -= capacityCost;
            return createDefaultRetryToken({
                retryDelay,
                retryCount: token.getRetryCount() + 1,
                retryCost: capacityCost,
            });
        }
        throw new Error("No retry token available");
    }
    recordSuccess(token) {
        this.capacity = Math.max(INITIAL_RETRY_TOKENS, this.capacity + (token.getRetryCost() ?? NO_RETRY_INCREMENT));
    }
    getCapacity() {
        return this.capacity;
    }
    async getMaxAttempts() {
        try {
            return await this.maxAttemptsProvider();
        }
        catch (error) {
            console.warn(`Max attempts provider could not resolve. Using default of ${DEFAULT_MAX_ATTEMPTS}`);
            return DEFAULT_MAX_ATTEMPTS;
        }
    }
    shouldRetry(tokenToRenew, errorInfo, maxAttempts) {
        const attempts = tokenToRenew.getRetryCount() + 1;
        return (attempts < maxAttempts &&
            this.capacity >= this.getCapacityCost(errorInfo.errorType) &&
            this.isRetryableError(errorInfo.errorType));
    }
    getCapacityCost(errorType) {
        return errorType === "TRANSIENT" ? TIMEOUT_RETRY_COST : RETRY_COST;
    }
    isRetryableError(errorType) {
        return errorType === "THROTTLING" || errorType === "TRANSIENT";
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/util-retry/dist-es/AdaptiveRetryStrategy.js



class AdaptiveRetryStrategy {
    constructor(maxAttemptsProvider, options) {
        this.maxAttemptsProvider = maxAttemptsProvider;
        this.mode = RETRY_MODES.ADAPTIVE;
        const { rateLimiter } = options ?? {};
        this.rateLimiter = rateLimiter ?? new DefaultRateLimiter();
        this.standardRetryStrategy = new StandardRetryStrategy(maxAttemptsProvider);
    }
    async acquireInitialRetryToken(retryTokenScope) {
        await this.rateLimiter.getSendToken();
        return this.standardRetryStrategy.acquireInitialRetryToken(retryTokenScope);
    }
    async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        this.rateLimiter.updateClientSendingRate(errorInfo);
        return this.standardRetryStrategy.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
    }
    recordSuccess(token) {
        this.rateLimiter.updateClientSendingRate({});
        this.standardRetryStrategy.recordSuccess(token);
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/util-retry/dist-es/ConfiguredRetryStrategy.js


class ConfiguredRetryStrategy extends StandardRetryStrategy {
    constructor(maxAttempts, computeNextBackoffDelay = DEFAULT_RETRY_DELAY_BASE) {
        super(typeof maxAttempts === "function" ? maxAttempts : async () => maxAttempts);
        if (typeof computeNextBackoffDelay === "number") {
            this.computeNextBackoffDelay = () => computeNextBackoffDelay;
        }
        else {
            this.computeNextBackoffDelay = computeNextBackoffDelay;
        }
    }
    async refreshRetryTokenForRetry(tokenToRenew, errorInfo) {
        const token = await super.refreshRetryTokenForRetry(tokenToRenew, errorInfo);
        token.getRetryDelay = () => this.computeNextBackoffDelay(token.getRetryCount());
        return token;
    }
}

;// CONCATENATED MODULE: ./node_modules/@smithy/util-retry/dist-es/index.js









/***/ }),

/***/ 5186:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  Mu: () => (/* reexport */ Uint8ArrayBlobAdapter),
  c9: () => (/* reexport */ sdkStreamMixin)
});

// UNUSED EXPORTS: getAwsChunkedEncodingStream

// EXTERNAL MODULE: ./node_modules/@smithy/util-base64/dist-es/index.js + 2 modules
var dist_es = __webpack_require__(4572);
// EXTERNAL MODULE: ./node_modules/@smithy/util-utf8/dist-es/index.js + 3 modules
var util_utf8_dist_es = __webpack_require__(3197);
;// CONCATENATED MODULE: ./node_modules/@smithy/util-stream/dist-es/blob/transforms.js



function transformToString(payload, encoding = "utf-8") {
    if (encoding === "base64") {
        return (0,dist_es/* toBase64 */.n)(payload);
    }
    return (0,util_utf8_dist_es/* toUtf8 */.Pq)(payload);
}
function transformFromString(str, encoding) {
    if (encoding === "base64") {
        return Uint8ArrayBlobAdapter.mutate((0,dist_es/* fromBase64 */.E)(str));
    }
    return Uint8ArrayBlobAdapter.mutate((0,util_utf8_dist_es/* fromUtf8 */.ar)(str));
}

;// CONCATENATED MODULE: ./node_modules/@smithy/util-stream/dist-es/blob/Uint8ArrayBlobAdapter.js

class Uint8ArrayBlobAdapter extends Uint8Array {
    static fromString(source, encoding = "utf-8") {
        switch (typeof source) {
            case "string":
                return transformFromString(source, encoding);
            default:
                throw new Error(`Unsupported conversion from ${typeof source} to Uint8ArrayBlobAdapter.`);
        }
    }
    static mutate(source) {
        Object.setPrototypeOf(source, Uint8ArrayBlobAdapter.prototype);
        return source;
    }
    transformToString(encoding = "utf-8") {
        return transformToString(this, encoding);
    }
}

// EXTERNAL MODULE: external "stream"
var external_stream_ = __webpack_require__(2203);
;// CONCATENATED MODULE: ./node_modules/@smithy/util-stream/dist-es/getAwsChunkedEncodingStream.js

const getAwsChunkedEncodingStream = (readableStream, options) => {
    const { base64Encoder, bodyLengthChecker, checksumAlgorithmFn, checksumLocationName, streamHasher } = options;
    const checksumRequired = base64Encoder !== undefined &&
        checksumAlgorithmFn !== undefined &&
        checksumLocationName !== undefined &&
        streamHasher !== undefined;
    const digest = checksumRequired ? streamHasher(checksumAlgorithmFn, readableStream) : undefined;
    const awsChunkedEncodingStream = new Readable({ read: () => { } });
    readableStream.on("data", (data) => {
        const length = bodyLengthChecker(data) || 0;
        awsChunkedEncodingStream.push(`${length.toString(16)}\r\n`);
        awsChunkedEncodingStream.push(data);
        awsChunkedEncodingStream.push("\r\n");
    });
    readableStream.on("end", async () => {
        awsChunkedEncodingStream.push(`0\r\n`);
        if (checksumRequired) {
            const checksum = base64Encoder(await digest);
            awsChunkedEncodingStream.push(`${checksumLocationName}:${checksum}\r\n`);
            awsChunkedEncodingStream.push(`\r\n`);
        }
        awsChunkedEncodingStream.push(null);
    });
    return awsChunkedEncodingStream;
};

// EXTERNAL MODULE: ./node_modules/@smithy/node-http-handler/dist-es/index.js + 13 modules
var node_http_handler_dist_es = __webpack_require__(4616);
// EXTERNAL MODULE: ./node_modules/@smithy/util-buffer-from/dist-es/index.js
var util_buffer_from_dist_es = __webpack_require__(9290);
// EXTERNAL MODULE: external "util"
var external_util_ = __webpack_require__(9023);
;// CONCATENATED MODULE: ./node_modules/@smithy/util-stream/dist-es/sdk-stream-mixin.js




const ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED = "The stream has already been transformed.";
const sdkStreamMixin = (stream) => {
    if (!(stream instanceof external_stream_.Readable)) {
        const name = stream?.__proto__?.constructor?.name || stream;
        throw new Error(`Unexpected stream implementation, expect Stream.Readable instance, got ${name}`);
    }
    let transformed = false;
    const transformToByteArray = async () => {
        if (transformed) {
            throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
        }
        transformed = true;
        return await (0,node_http_handler_dist_es/* streamCollector */.kv)(stream);
    };
    return Object.assign(stream, {
        transformToByteArray,
        transformToString: async (encoding) => {
            const buf = await transformToByteArray();
            if (encoding === undefined || Buffer.isEncoding(encoding)) {
                return (0,util_buffer_from_dist_es/* fromArrayBuffer */.Q)(buf.buffer, buf.byteOffset, buf.byteLength).toString(encoding);
            }
            else {
                const decoder = new external_util_.TextDecoder(encoding);
                return decoder.decode(buf);
            }
        },
        transformToWebStream: () => {
            if (transformed) {
                throw new Error(ERR_MSG_STREAM_HAS_BEEN_TRANSFORMED);
            }
            if (stream.readableFlowing !== null) {
                throw new Error("The stream has been consumed by other callbacks.");
            }
            if (typeof external_stream_.Readable.toWeb !== "function") {
                throw new Error("Readable.toWeb() is not supported. Please make sure you are using Node.js >= 17.0.0, or polyfill is available.");
            }
            transformed = true;
            return external_stream_.Readable.toWeb(stream);
        },
    });
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-stream/dist-es/index.js





/***/ }),

/***/ 2531:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   o: () => (/* binding */ escapeUri)
/* harmony export */ });
const escapeUri = (uri) => encodeURIComponent(uri).replace(/[!'()*]/g, hexEncode);
const hexEncode = (c) => `%${c.charCodeAt(0).toString(16).toUpperCase()}`;


/***/ }),

/***/ 3197:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  ar: () => (/* reexport */ fromUtf8),
  Fo: () => (/* reexport */ toUint8Array),
  Pq: () => (/* reexport */ toUtf8)
});

// EXTERNAL MODULE: ./node_modules/@smithy/util-buffer-from/dist-es/index.js
var dist_es = __webpack_require__(9290);
;// CONCATENATED MODULE: ./node_modules/@smithy/util-utf8/dist-es/fromUtf8.js

const fromUtf8 = (input) => {
    const buf = (0,dist_es/* fromString */.s)(input, "utf8");
    return new Uint8Array(buf.buffer, buf.byteOffset, buf.byteLength / Uint8Array.BYTES_PER_ELEMENT);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-utf8/dist-es/toUint8Array.js

const toUint8Array = (data) => {
    if (typeof data === "string") {
        return fromUtf8(data);
    }
    if (ArrayBuffer.isView(data)) {
        return new Uint8Array(data.buffer, data.byteOffset, data.byteLength / Uint8Array.BYTES_PER_ELEMENT);
    }
    return new Uint8Array(data);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-utf8/dist-es/toUtf8.js

const toUtf8 = (input) => {
    if (typeof input === "string") {
        return input;
    }
    if (typeof input !== "object" || typeof input.byteOffset !== "number" || typeof input.byteLength !== "number") {
        throw new Error("@smithy/util-utf8: toUtf8 encoder function only accepts string | Uint8Array.");
    }
    return (0,dist_es/* fromArrayBuffer */.Q)(input.buffer, input.byteOffset, input.byteLength).toString("utf8");
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-utf8/dist-es/index.js





/***/ }),

/***/ 2948:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  IX: () => (/* reexport */ WaiterState),
  No: () => (/* reexport */ checkExceptions),
  $C: () => (/* reexport */ createWaiter)
});

// UNUSED EXPORTS: waiterServiceDefaults

;// CONCATENATED MODULE: ./node_modules/@smithy/util-waiter/dist-es/utils/sleep.js
const sleep = (seconds) => {
    return new Promise((resolve) => setTimeout(resolve, seconds * 1000));
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-waiter/dist-es/waiter.js
const waiterServiceDefaults = {
    minDelay: 2,
    maxDelay: 120,
};
var WaiterState;
(function (WaiterState) {
    WaiterState["ABORTED"] = "ABORTED";
    WaiterState["FAILURE"] = "FAILURE";
    WaiterState["SUCCESS"] = "SUCCESS";
    WaiterState["RETRY"] = "RETRY";
    WaiterState["TIMEOUT"] = "TIMEOUT";
})(WaiterState || (WaiterState = {}));
const checkExceptions = (result) => {
    if (result.state === WaiterState.ABORTED) {
        const abortError = new Error(`${JSON.stringify({
            ...result,
            reason: "Request was aborted",
        })}`);
        abortError.name = "AbortError";
        throw abortError;
    }
    else if (result.state === WaiterState.TIMEOUT) {
        const timeoutError = new Error(`${JSON.stringify({
            ...result,
            reason: "Waiter has timed out",
        })}`);
        timeoutError.name = "TimeoutError";
        throw timeoutError;
    }
    else if (result.state !== WaiterState.SUCCESS) {
        throw new Error(`${JSON.stringify({ result })}`);
    }
    return result;
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-waiter/dist-es/poller.js


const exponentialBackoffWithJitter = (minDelay, maxDelay, attemptCeiling, attempt) => {
    if (attempt > attemptCeiling)
        return maxDelay;
    const delay = minDelay * 2 ** (attempt - 1);
    return randomInRange(minDelay, delay);
};
const randomInRange = (min, max) => min + Math.random() * (max - min);
const runPolling = async ({ minDelay, maxDelay, maxWaitTime, abortController, client, abortSignal }, input, acceptorChecks) => {
    const { state, reason } = await acceptorChecks(client, input);
    if (state !== WaiterState.RETRY) {
        return { state, reason };
    }
    let currentAttempt = 1;
    const waitUntil = Date.now() + maxWaitTime * 1000;
    const attemptCeiling = Math.log(maxDelay / minDelay) / Math.log(2) + 1;
    while (true) {
        if (abortController?.signal?.aborted || abortSignal?.aborted) {
            return { state: WaiterState.ABORTED };
        }
        const delay = exponentialBackoffWithJitter(minDelay, maxDelay, attemptCeiling, currentAttempt);
        if (Date.now() + delay * 1000 > waitUntil) {
            return { state: WaiterState.TIMEOUT };
        }
        await sleep(delay);
        const { state, reason } = await acceptorChecks(client, input);
        if (state !== WaiterState.RETRY) {
            return { state, reason };
        }
        currentAttempt += 1;
    }
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-waiter/dist-es/utils/validate.js
const validateWaiterOptions = (options) => {
    if (options.maxWaitTime < 1) {
        throw new Error(`WaiterConfiguration.maxWaitTime must be greater than 0`);
    }
    else if (options.minDelay < 1) {
        throw new Error(`WaiterConfiguration.minDelay must be greater than 0`);
    }
    else if (options.maxDelay < 1) {
        throw new Error(`WaiterConfiguration.maxDelay must be greater than 0`);
    }
    else if (options.maxWaitTime <= options.minDelay) {
        throw new Error(`WaiterConfiguration.maxWaitTime [${options.maxWaitTime}] must be greater than WaiterConfiguration.minDelay [${options.minDelay}] for this waiter`);
    }
    else if (options.maxDelay < options.minDelay) {
        throw new Error(`WaiterConfiguration.maxDelay [${options.maxDelay}] must be greater than WaiterConfiguration.minDelay [${options.minDelay}] for this waiter`);
    }
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-waiter/dist-es/createWaiter.js



const abortTimeout = async (abortSignal) => {
    return new Promise((resolve) => {
        abortSignal.onabort = () => resolve({ state: WaiterState.ABORTED });
    });
};
const createWaiter = async (options, input, acceptorChecks) => {
    const params = {
        ...waiterServiceDefaults,
        ...options,
    };
    validateWaiterOptions(params);
    const exitConditions = [runPolling(params, input, acceptorChecks)];
    if (options.abortController) {
        exitConditions.push(abortTimeout(options.abortController.signal));
    }
    if (options.abortSignal) {
        exitConditions.push(abortTimeout(options.abortSignal));
    }
    return Promise.race(exitConditions);
};

;// CONCATENATED MODULE: ./node_modules/@smithy/util-waiter/dist-es/index.js




/***/ }),

/***/ 6454:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";


const validator = __webpack_require__(3918);
const XMLParser = __webpack_require__(2923);
const XMLBuilder = __webpack_require__(8904);

module.exports = {
  XMLParser: XMLParser,
  XMLValidator: validator,
  XMLBuilder: XMLBuilder
}

/***/ }),

/***/ 5334:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


const nameStartChar = ':A-Za-z_\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD';
const nameChar = nameStartChar + '\\-.\\d\\u00B7\\u0300-\\u036F\\u203F-\\u2040';
const nameRegexp = '[' + nameStartChar + '][' + nameChar + ']*'
const regexName = new RegExp('^' + nameRegexp + '$');

const getAllMatches = function(string, regex) {
  const matches = [];
  let match = regex.exec(string);
  while (match) {
    const allmatches = [];
    allmatches.startIndex = regex.lastIndex - match[0].length;
    const len = match.length;
    for (let index = 0; index < len; index++) {
      allmatches.push(match[index]);
    }
    matches.push(allmatches);
    match = regex.exec(string);
  }
  return matches;
};

const isName = function(string) {
  const match = regexName.exec(string);
  return !(match === null || typeof match === 'undefined');
};

exports.isExist = function(v) {
  return typeof v !== 'undefined';
};

exports.isEmptyObject = function(obj) {
  return Object.keys(obj).length === 0;
};

/**
 * Copy all the properties of a into b.
 * @param {*} target
 * @param {*} a
 */
exports.merge = function(target, a, arrayMode) {
  if (a) {
    const keys = Object.keys(a); // will return an array of own properties
    const len = keys.length; //don't make it inline
    for (let i = 0; i < len; i++) {
      if (arrayMode === 'strict') {
        target[keys[i]] = [ a[keys[i]] ];
      } else {
        target[keys[i]] = a[keys[i]];
      }
    }
  }
};
/* exports.merge =function (b,a){
  return Object.assign(b,a);
} */

exports.getValue = function(v) {
  if (exports.isExist(v)) {
    return v;
  } else {
    return '';
  }
};

// const fakeCall = function(a) {return a;};
// const fakeCallNoReturn = function() {};

exports.isName = isName;
exports.getAllMatches = getAllMatches;
exports.nameRegexp = nameRegexp;


/***/ }),

/***/ 3918:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";


const util = __webpack_require__(5334);

const defaultOptions = {
  allowBooleanAttributes: false, //A tag can have attributes without any value
  unpairedTags: []
};

//const tagsPattern = new RegExp("<\\/?([\\w:\\-_\.]+)\\s*\/?>","g");
exports.validate = function (xmlData, options) {
  options = Object.assign({}, defaultOptions, options);

  //xmlData = xmlData.replace(/(\r\n|\n|\r)/gm,"");//make it single line
  //xmlData = xmlData.replace(/(^\s*<\?xml.*?\?>)/g,"");//Remove XML starting tag
  //xmlData = xmlData.replace(/(<!DOCTYPE[\s\w\"\.\/\-\:]+(\[.*\])*\s*>)/g,"");//Remove DOCTYPE
  const tags = [];
  let tagFound = false;

  //indicates that the root tag has been closed (aka. depth 0 has been reached)
  let reachedRoot = false;

  if (xmlData[0] === '\ufeff') {
    // check for byte order mark (BOM)
    xmlData = xmlData.substr(1);
  }
  
  for (let i = 0; i < xmlData.length; i++) {

    if (xmlData[i] === '<' && xmlData[i+1] === '?') {
      i+=2;
      i = readPI(xmlData,i);
      if (i.err) return i;
    }else if (xmlData[i] === '<') {
      //starting of tag
      //read until you reach to '>' avoiding any '>' in attribute value
      let tagStartPos = i;
      i++;
      
      if (xmlData[i] === '!') {
        i = readCommentAndCDATA(xmlData, i);
        continue;
      } else {
        let closingTag = false;
        if (xmlData[i] === '/') {
          //closing tag
          closingTag = true;
          i++;
        }
        //read tagname
        let tagName = '';
        for (; i < xmlData.length &&
          xmlData[i] !== '>' &&
          xmlData[i] !== ' ' &&
          xmlData[i] !== '\t' &&
          xmlData[i] !== '\n' &&
          xmlData[i] !== '\r'; i++
        ) {
          tagName += xmlData[i];
        }
        tagName = tagName.trim();
        //console.log(tagName);

        if (tagName[tagName.length - 1] === '/') {
          //self closing tag without attributes
          tagName = tagName.substring(0, tagName.length - 1);
          //continue;
          i--;
        }
        if (!validateTagName(tagName)) {
          let msg;
          if (tagName.trim().length === 0) {
            msg = "Invalid space after '<'.";
          } else {
            msg = "Tag '"+tagName+"' is an invalid name.";
          }
          return getErrorObject('InvalidTag', msg, getLineNumberForPosition(xmlData, i));
        }

        const result = readAttributeStr(xmlData, i);
        if (result === false) {
          return getErrorObject('InvalidAttr', "Attributes for '"+tagName+"' have open quote.", getLineNumberForPosition(xmlData, i));
        }
        let attrStr = result.value;
        i = result.index;

        if (attrStr[attrStr.length - 1] === '/') {
          //self closing tag
          const attrStrStart = i - attrStr.length;
          attrStr = attrStr.substring(0, attrStr.length - 1);
          const isValid = validateAttributeString(attrStr, options);
          if (isValid === true) {
            tagFound = true;
            //continue; //text may presents after self closing tag
          } else {
            //the result from the nested function returns the position of the error within the attribute
            //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
            //this gives us the absolute index in the entire xml, which we can use to find the line at last
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, attrStrStart + isValid.err.line));
          }
        } else if (closingTag) {
          if (!result.tagClosed) {
            return getErrorObject('InvalidTag', "Closing tag '"+tagName+"' doesn't have proper closing.", getLineNumberForPosition(xmlData, i));
          } else if (attrStr.trim().length > 0) {
            return getErrorObject('InvalidTag', "Closing tag '"+tagName+"' can't have attributes or invalid starting.", getLineNumberForPosition(xmlData, tagStartPos));
          } else {
            const otg = tags.pop();
            if (tagName !== otg.tagName) {
              let openPos = getLineNumberForPosition(xmlData, otg.tagStartPos);
              return getErrorObject('InvalidTag',
                "Expected closing tag '"+otg.tagName+"' (opened in line "+openPos.line+", col "+openPos.col+") instead of closing tag '"+tagName+"'.",
                getLineNumberForPosition(xmlData, tagStartPos));
            }

            //when there are no more tags, we reached the root level.
            if (tags.length == 0) {
              reachedRoot = true;
            }
          }
        } else {
          const isValid = validateAttributeString(attrStr, options);
          if (isValid !== true) {
            //the result from the nested function returns the position of the error within the attribute
            //in order to get the 'true' error line, we need to calculate the position where the attribute begins (i - attrStr.length) and then add the position within the attribute
            //this gives us the absolute index in the entire xml, which we can use to find the line at last
            return getErrorObject(isValid.err.code, isValid.err.msg, getLineNumberForPosition(xmlData, i - attrStr.length + isValid.err.line));
          }

          //if the root level has been reached before ...
          if (reachedRoot === true) {
            return getErrorObject('InvalidXml', 'Multiple possible root nodes found.', getLineNumberForPosition(xmlData, i));
          } else if(options.unpairedTags.indexOf(tagName) !== -1){
            //don't push into stack
          } else {
            tags.push({tagName, tagStartPos});
          }
          tagFound = true;
        }

        //skip tag text value
        //It may include comments and CDATA value
        for (i++; i < xmlData.length; i++) {
          if (xmlData[i] === '<') {
            if (xmlData[i + 1] === '!') {
              //comment or CADATA
              i++;
              i = readCommentAndCDATA(xmlData, i);
              continue;
            } else if (xmlData[i+1] === '?') {
              i = readPI(xmlData, ++i);
              if (i.err) return i;
            } else{
              break;
            }
          } else if (xmlData[i] === '&') {
            const afterAmp = validateAmpersand(xmlData, i);
            if (afterAmp == -1)
              return getErrorObject('InvalidChar', "char '&' is not expected.", getLineNumberForPosition(xmlData, i));
            i = afterAmp;
          }else{
            if (reachedRoot === true && !isWhiteSpace(xmlData[i])) {
              return getErrorObject('InvalidXml', "Extra text at the end", getLineNumberForPosition(xmlData, i));
            }
          }
        } //end of reading tag text value
        if (xmlData[i] === '<') {
          i--;
        }
      }
    } else {
      if ( isWhiteSpace(xmlData[i])) {
        continue;
      }
      return getErrorObject('InvalidChar', "char '"+xmlData[i]+"' is not expected.", getLineNumberForPosition(xmlData, i));
    }
  }

  if (!tagFound) {
    return getErrorObject('InvalidXml', 'Start tag expected.', 1);
  }else if (tags.length == 1) {
      return getErrorObject('InvalidTag', "Unclosed tag '"+tags[0].tagName+"'.", getLineNumberForPosition(xmlData, tags[0].tagStartPos));
  }else if (tags.length > 0) {
      return getErrorObject('InvalidXml', "Invalid '"+
          JSON.stringify(tags.map(t => t.tagName), null, 4).replace(/\r?\n/g, '')+
          "' found.", {line: 1, col: 1});
  }

  return true;
};

function isWhiteSpace(char){
  return char === ' ' || char === '\t' || char === '\n'  || char === '\r';
}
/**
 * Read Processing insstructions and skip
 * @param {*} xmlData
 * @param {*} i
 */
function readPI(xmlData, i) {
  const start = i;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] == '?' || xmlData[i] == ' ') {
      //tagname
      const tagname = xmlData.substr(start, i - start);
      if (i > 5 && tagname === 'xml') {
        return getErrorObject('InvalidXml', 'XML declaration allowed only at the start of the document.', getLineNumberForPosition(xmlData, i));
      } else if (xmlData[i] == '?' && xmlData[i + 1] == '>') {
        //check if valid attribut string
        i++;
        break;
      } else {
        continue;
      }
    }
  }
  return i;
}

function readCommentAndCDATA(xmlData, i) {
  if (xmlData.length > i + 5 && xmlData[i + 1] === '-' && xmlData[i + 2] === '-') {
    //comment
    for (i += 3; i < xmlData.length; i++) {
      if (xmlData[i] === '-' && xmlData[i + 1] === '-' && xmlData[i + 2] === '>') {
        i += 2;
        break;
      }
    }
  } else if (
    xmlData.length > i + 8 &&
    xmlData[i + 1] === 'D' &&
    xmlData[i + 2] === 'O' &&
    xmlData[i + 3] === 'C' &&
    xmlData[i + 4] === 'T' &&
    xmlData[i + 5] === 'Y' &&
    xmlData[i + 6] === 'P' &&
    xmlData[i + 7] === 'E'
  ) {
    let angleBracketsCount = 1;
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === '<') {
        angleBracketsCount++;
      } else if (xmlData[i] === '>') {
        angleBracketsCount--;
        if (angleBracketsCount === 0) {
          break;
        }
      }
    }
  } else if (
    xmlData.length > i + 9 &&
    xmlData[i + 1] === '[' &&
    xmlData[i + 2] === 'C' &&
    xmlData[i + 3] === 'D' &&
    xmlData[i + 4] === 'A' &&
    xmlData[i + 5] === 'T' &&
    xmlData[i + 6] === 'A' &&
    xmlData[i + 7] === '['
  ) {
    for (i += 8; i < xmlData.length; i++) {
      if (xmlData[i] === ']' && xmlData[i + 1] === ']' && xmlData[i + 2] === '>') {
        i += 2;
        break;
      }
    }
  }

  return i;
}

const doubleQuote = '"';
const singleQuote = "'";

/**
 * Keep reading xmlData until '<' is found outside the attribute value.
 * @param {string} xmlData
 * @param {number} i
 */
function readAttributeStr(xmlData, i) {
  let attrStr = '';
  let startChar = '';
  let tagClosed = false;
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === doubleQuote || xmlData[i] === singleQuote) {
      if (startChar === '') {
        startChar = xmlData[i];
      } else if (startChar !== xmlData[i]) {
        //if vaue is enclosed with double quote then single quotes are allowed inside the value and vice versa
      } else {
        startChar = '';
      }
    } else if (xmlData[i] === '>') {
      if (startChar === '') {
        tagClosed = true;
        break;
      }
    }
    attrStr += xmlData[i];
  }
  if (startChar !== '') {
    return false;
  }

  return {
    value: attrStr,
    index: i,
    tagClosed: tagClosed
  };
}

/**
 * Select all the attributes whether valid or invalid.
 */
const validAttrStrRegxp = new RegExp('(\\s*)([^\\s=]+)(\\s*=)?(\\s*([\'"])(([\\s\\S])*?)\\5)?', 'g');

//attr, ="sd", a="amit's", a="sd"b="saf", ab  cd=""

function validateAttributeString(attrStr, options) {
  //console.log("start:"+attrStr+":end");

  //if(attrStr.trim().length === 0) return true; //empty string

  const matches = util.getAllMatches(attrStr, validAttrStrRegxp);
  const attrNames = {};

  for (let i = 0; i < matches.length; i++) {
    if (matches[i][1].length === 0) {
      //nospace before attribute name: a="sd"b="saf"
      return getErrorObject('InvalidAttr', "Attribute '"+matches[i][2]+"' has no space in starting.", getPositionFromMatch(matches[i]))
    } else if (matches[i][3] !== undefined && matches[i][4] === undefined) {
      return getErrorObject('InvalidAttr', "Attribute '"+matches[i][2]+"' is without value.", getPositionFromMatch(matches[i]));
    } else if (matches[i][3] === undefined && !options.allowBooleanAttributes) {
      //independent attribute: ab
      return getErrorObject('InvalidAttr', "boolean attribute '"+matches[i][2]+"' is not allowed.", getPositionFromMatch(matches[i]));
    }
    /* else if(matches[i][6] === undefined){//attribute without value: ab=
                    return { err: { code:"InvalidAttr",msg:"attribute " + matches[i][2] + " has no value assigned."}};
                } */
    const attrName = matches[i][2];
    if (!validateAttrName(attrName)) {
      return getErrorObject('InvalidAttr', "Attribute '"+attrName+"' is an invalid name.", getPositionFromMatch(matches[i]));
    }
    if (!attrNames.hasOwnProperty(attrName)) {
      //check for duplicate attribute.
      attrNames[attrName] = 1;
    } else {
      return getErrorObject('InvalidAttr', "Attribute '"+attrName+"' is repeated.", getPositionFromMatch(matches[i]));
    }
  }

  return true;
}

function validateNumberAmpersand(xmlData, i) {
  let re = /\d/;
  if (xmlData[i] === 'x') {
    i++;
    re = /[\da-fA-F]/;
  }
  for (; i < xmlData.length; i++) {
    if (xmlData[i] === ';')
      return i;
    if (!xmlData[i].match(re))
      break;
  }
  return -1;
}

function validateAmpersand(xmlData, i) {
  // https://www.w3.org/TR/xml/#dt-charref
  i++;
  if (xmlData[i] === ';')
    return -1;
  if (xmlData[i] === '#') {
    i++;
    return validateNumberAmpersand(xmlData, i);
  }
  let count = 0;
  for (; i < xmlData.length; i++, count++) {
    if (xmlData[i].match(/\w/) && count < 20)
      continue;
    if (xmlData[i] === ';')
      break;
    return -1;
  }
  return i;
}

function getErrorObject(code, message, lineNumber) {
  return {
    err: {
      code: code,
      msg: message,
      line: lineNumber.line || lineNumber,
      col: lineNumber.col,
    },
  };
}

function validateAttrName(attrName) {
  return util.isName(attrName);
}

// const startsWithXML = /^xml/i;

function validateTagName(tagname) {
  return util.isName(tagname) /* && !tagname.match(startsWithXML) */;
}

//this function returns the line number for the character at the given index
function getLineNumberForPosition(xmlData, index) {
  const lines = xmlData.substring(0, index).split(/\r?\n/);
  return {
    line: lines.length,

    // column number is last line's length + 1, because column numbering starts at 1:
    col: lines[lines.length - 1].length + 1
  };
}

//this function returns the position of the first character of match within attrStr
function getPositionFromMatch(match) {
  return match.startIndex + match[1].length;
}


/***/ }),

/***/ 8904:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

//parse Empty Node as self closing node
const buildFromOrderedJs = __webpack_require__(2788);

const defaultOptions = {
  attributeNamePrefix: '@_',
  attributesGroupName: false,
  textNodeName: '#text',
  ignoreAttributes: true,
  cdataPropName: false,
  format: false,
  indentBy: '  ',
  suppressEmptyNode: false,
  suppressUnpairedNode: true,
  suppressBooleanAttributes: true,
  tagValueProcessor: function(key, a) {
    return a;
  },
  attributeValueProcessor: function(attrName, a) {
    return a;
  },
  preserveOrder: false,
  commentPropName: false,
  unpairedTags: [],
  entities: [
    { regex: new RegExp("&", "g"), val: "&amp;" },//it must be on top
    { regex: new RegExp(">", "g"), val: "&gt;" },
    { regex: new RegExp("<", "g"), val: "&lt;" },
    { regex: new RegExp("\'", "g"), val: "&apos;" },
    { regex: new RegExp("\"", "g"), val: "&quot;" }
  ],
  processEntities: true,
  stopNodes: [],
  // transformTagName: false,
  // transformAttributeName: false,
  oneListGroup: false
};

function Builder(options) {
  this.options = Object.assign({}, defaultOptions, options);
  if (this.options.ignoreAttributes || this.options.attributesGroupName) {
    this.isAttribute = function(/*a*/) {
      return false;
    };
  } else {
    this.attrPrefixLen = this.options.attributeNamePrefix.length;
    this.isAttribute = isAttribute;
  }

  this.processTextOrObjNode = processTextOrObjNode

  if (this.options.format) {
    this.indentate = indentate;
    this.tagEndChar = '>\n';
    this.newLine = '\n';
  } else {
    this.indentate = function() {
      return '';
    };
    this.tagEndChar = '>';
    this.newLine = '';
  }
}

Builder.prototype.build = function(jObj) {
  if(this.options.preserveOrder){
    return buildFromOrderedJs(jObj, this.options);
  }else {
    if(Array.isArray(jObj) && this.options.arrayNodeName && this.options.arrayNodeName.length > 1){
      jObj = {
        [this.options.arrayNodeName] : jObj
      }
    }
    return this.j2x(jObj, 0).val;
  }
};

Builder.prototype.j2x = function(jObj, level) {
  let attrStr = '';
  let val = '';
  for (let key in jObj) {
    if (typeof jObj[key] === 'undefined') {
      // supress undefined node
    } else if (jObj[key] === null) {
      if(key[0] === "?") val += this.indentate(level) + '<' + key + '?' + this.tagEndChar;
      else val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
      // val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
    } else if (jObj[key] instanceof Date) {
      val += this.buildTextValNode(jObj[key], key, '', level);
    } else if (typeof jObj[key] !== 'object') {
      //premitive type
      const attr = this.isAttribute(key);
      if (attr) {
        attrStr += this.buildAttrPairStr(attr, '' + jObj[key]);
      }else {
        //tag value
        if (key === this.options.textNodeName) {
          let newval = this.options.tagValueProcessor(key, '' + jObj[key]);
          val += this.replaceEntitiesValue(newval);
        } else {
          val += this.buildTextValNode(jObj[key], key, '', level);
        }
      }
    } else if (Array.isArray(jObj[key])) {
      //repeated nodes
      const arrLen = jObj[key].length;
      let listTagVal = "";
      for (let j = 0; j < arrLen; j++) {
        const item = jObj[key][j];
        if (typeof item === 'undefined') {
          // supress undefined node
        } else if (item === null) {
          if(key[0] === "?") val += this.indentate(level) + '<' + key + '?' + this.tagEndChar;
          else val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
          // val += this.indentate(level) + '<' + key + '/' + this.tagEndChar;
        } else if (typeof item === 'object') {
          if(this.options.oneListGroup ){
            listTagVal += this.j2x(item, level + 1).val;
          }else{
            listTagVal += this.processTextOrObjNode(item, key, level)
          }
        } else {
          listTagVal += this.buildTextValNode(item, key, '', level);
        }
      }
      if(this.options.oneListGroup){
        listTagVal = this.buildObjectNode(listTagVal, key, '', level);
      }
      val += listTagVal;
    } else {
      //nested node
      if (this.options.attributesGroupName && key === this.options.attributesGroupName) {
        const Ks = Object.keys(jObj[key]);
        const L = Ks.length;
        for (let j = 0; j < L; j++) {
          attrStr += this.buildAttrPairStr(Ks[j], '' + jObj[key][Ks[j]]);
        }
      } else {
        val += this.processTextOrObjNode(jObj[key], key, level)
      }
    }
  }
  return {attrStr: attrStr, val: val};
};

Builder.prototype.buildAttrPairStr = function(attrName, val){
  val = this.options.attributeValueProcessor(attrName, '' + val);
  val = this.replaceEntitiesValue(val);
  if (this.options.suppressBooleanAttributes && val === "true") {
    return ' ' + attrName;
  } else return ' ' + attrName + '="' + val + '"';
}

function processTextOrObjNode (object, key, level) {
  const result = this.j2x(object, level + 1);
  if (object[this.options.textNodeName] !== undefined && Object.keys(object).length === 1) {
    return this.buildTextValNode(object[this.options.textNodeName], key, result.attrStr, level);
  } else {
    return this.buildObjectNode(result.val, key, result.attrStr, level);
  }
}

Builder.prototype.buildObjectNode = function(val, key, attrStr, level) {
  if(val === ""){
    if(key[0] === "?") return  this.indentate(level) + '<' + key + attrStr+ '?' + this.tagEndChar;
    else {
      return this.indentate(level) + '<' + key + attrStr + this.closeTag(key) + this.tagEndChar;
    }
  }else{

    let tagEndExp = '</' + key + this.tagEndChar;
    let piClosingChar = "";
    
    if(key[0] === "?") {
      piClosingChar = "?";
      tagEndExp = "";
    }
  
    if (attrStr && val.indexOf('<') === -1) {
      return ( this.indentate(level) + '<' +  key + attrStr + piClosingChar + '>' + val + tagEndExp );
    } else if (this.options.commentPropName !== false && key === this.options.commentPropName && piClosingChar.length === 0) {
      return this.indentate(level) + `<!--${val}-->` + this.newLine;
    }else {
      return (
        this.indentate(level) + '<' + key + attrStr + piClosingChar + this.tagEndChar +
        val +
        this.indentate(level) + tagEndExp    );
    }
  }
}

Builder.prototype.closeTag = function(key){
  let closeTag = "";
  if(this.options.unpairedTags.indexOf(key) !== -1){ //unpaired
    if(!this.options.suppressUnpairedNode) closeTag = "/"
  }else if(this.options.suppressEmptyNode){ //empty
    closeTag = "/";
  }else{
    closeTag = `></${key}`
  }
  return closeTag;
}

function buildEmptyObjNode(val, key, attrStr, level) {
  if (val !== '') {
    return this.buildObjectNode(val, key, attrStr, level);
  } else {
    if(key[0] === "?") return  this.indentate(level) + '<' + key + attrStr+ '?' + this.tagEndChar;
    else {
      return  this.indentate(level) + '<' + key + attrStr + '/' + this.tagEndChar;
      // return this.buildTagStr(level,key, attrStr);
    }
  }
}

Builder.prototype.buildTextValNode = function(val, key, attrStr, level) {
  if (this.options.cdataPropName !== false && key === this.options.cdataPropName) {
    return this.indentate(level) + `<![CDATA[${val}]]>` +  this.newLine;
  }else if (this.options.commentPropName !== false && key === this.options.commentPropName) {
    return this.indentate(level) + `<!--${val}-->` +  this.newLine;
  }else if(key[0] === "?") {//PI tag
    return  this.indentate(level) + '<' + key + attrStr+ '?' + this.tagEndChar; 
  }else{
    let textValue = this.options.tagValueProcessor(key, val);
    textValue = this.replaceEntitiesValue(textValue);
  
    if( textValue === ''){
      return this.indentate(level) + '<' + key + attrStr + this.closeTag(key) + this.tagEndChar;
    }else{
      return this.indentate(level) + '<' + key + attrStr + '>' +
         textValue +
        '</' + key + this.tagEndChar;
    }
  }
}

Builder.prototype.replaceEntitiesValue = function(textValue){
  if(textValue && textValue.length > 0 && this.options.processEntities){
    for (let i=0; i<this.options.entities.length; i++) {
      const entity = this.options.entities[i];
      textValue = textValue.replace(entity.regex, entity.val);
    }
  }
  return textValue;
}

function indentate(level) {
  return this.options.indentBy.repeat(level);
}

function isAttribute(name /*, options*/) {
  if (name.startsWith(this.options.attributeNamePrefix)) {
    return name.substr(this.attrPrefixLen);
  } else {
    return false;
  }
}

module.exports = Builder;


/***/ }),

/***/ 2788:
/***/ ((module) => {

const EOL = "\n";

/**
 * 
 * @param {array} jArray 
 * @param {any} options 
 * @returns 
 */
function toXml(jArray, options) {
    let indentation = "";
    if (options.format && options.indentBy.length > 0) {
        indentation = EOL;
    }
    return arrToStr(jArray, options, "", indentation);
}

function arrToStr(arr, options, jPath, indentation) {
    let xmlStr = "";
    let isPreviousElementTag = false;

    for (let i = 0; i < arr.length; i++) {
        const tagObj = arr[i];
        const tagName = propName(tagObj);
        let newJPath = "";
        if (jPath.length === 0) newJPath = tagName
        else newJPath = `${jPath}.${tagName}`;

        if (tagName === options.textNodeName) {
            let tagText = tagObj[tagName];
            if (!isStopNode(newJPath, options)) {
                tagText = options.tagValueProcessor(tagName, tagText);
                tagText = replaceEntitiesValue(tagText, options);
            }
            if (isPreviousElementTag) {
                xmlStr += indentation;
            }
            xmlStr += tagText;
            isPreviousElementTag = false;
            continue;
        } else if (tagName === options.cdataPropName) {
            if (isPreviousElementTag) {
                xmlStr += indentation;
            }
            xmlStr += `<![CDATA[${tagObj[tagName][0][options.textNodeName]}]]>`;
            isPreviousElementTag = false;
            continue;
        } else if (tagName === options.commentPropName) {
            xmlStr += indentation + `<!--${tagObj[tagName][0][options.textNodeName]}-->`;
            isPreviousElementTag = true;
            continue;
        } else if (tagName[0] === "?") {
            const attStr = attr_to_str(tagObj[":@"], options);
            const tempInd = tagName === "?xml" ? "" : indentation;
            let piTextNodeName = tagObj[tagName][0][options.textNodeName];
            piTextNodeName = piTextNodeName.length !== 0 ? " " + piTextNodeName : ""; //remove extra spacing
            xmlStr += tempInd + `<${tagName}${piTextNodeName}${attStr}?>`;
            isPreviousElementTag = true;
            continue;
        }
        let newIdentation = indentation;
        if (newIdentation !== "") {
            newIdentation += options.indentBy;
        }
        const attStr = attr_to_str(tagObj[":@"], options);
        const tagStart = indentation + `<${tagName}${attStr}`;
        const tagValue = arrToStr(tagObj[tagName], options, newJPath, newIdentation);
        if (options.unpairedTags.indexOf(tagName) !== -1) {
            if (options.suppressUnpairedNode) xmlStr += tagStart + ">";
            else xmlStr += tagStart + "/>";
        } else if ((!tagValue || tagValue.length === 0) && options.suppressEmptyNode) {
            xmlStr += tagStart + "/>";
        } else if (tagValue && tagValue.endsWith(">")) {
            xmlStr += tagStart + `>${tagValue}${indentation}</${tagName}>`;
        } else {
            xmlStr += tagStart + ">";
            if (tagValue && indentation !== "" && (tagValue.includes("/>") || tagValue.includes("</"))) {
                xmlStr += indentation + options.indentBy + tagValue + indentation;
            } else {
                xmlStr += tagValue;
            }
            xmlStr += `</${tagName}>`;
        }
        isPreviousElementTag = true;
    }

    return xmlStr;
}

function propName(obj) {
    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; i++) {
        const key = keys[i];
        if (key !== ":@") return key;
    }
}

function attr_to_str(attrMap, options) {
    let attrStr = "";
    if (attrMap && !options.ignoreAttributes) {
        for (let attr in attrMap) {
            let attrVal = options.attributeValueProcessor(attr, attrMap[attr]);
            attrVal = replaceEntitiesValue(attrVal, options);
            if (attrVal === true && options.suppressBooleanAttributes) {
                attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}`;
            } else {
                attrStr += ` ${attr.substr(options.attributeNamePrefix.length)}="${attrVal}"`;
            }
        }
    }
    return attrStr;
}

function isStopNode(jPath, options) {
    jPath = jPath.substr(0, jPath.length - options.textNodeName.length - 1);
    let tagName = jPath.substr(jPath.lastIndexOf(".") + 1);
    for (let index in options.stopNodes) {
        if (options.stopNodes[index] === jPath || options.stopNodes[index] === "*." + tagName) return true;
    }
    return false;
}

function replaceEntitiesValue(textValue, options) {
    if (textValue && textValue.length > 0 && options.processEntities) {
        for (let i = 0; i < options.entities.length; i++) {
            const entity = options.entities[i];
            textValue = textValue.replace(entity.regex, entity.val);
        }
    }
    return textValue;
}
module.exports = toXml;


/***/ }),

/***/ 9400:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const util = __webpack_require__(5334);

//TODO: handle comments
function readDocType(xmlData, i){
    
    const entities = {};
    if( xmlData[i + 3] === 'O' &&
         xmlData[i + 4] === 'C' &&
         xmlData[i + 5] === 'T' &&
         xmlData[i + 6] === 'Y' &&
         xmlData[i + 7] === 'P' &&
         xmlData[i + 8] === 'E')
    {    
        i = i+9;
        let angleBracketsCount = 1;
        let hasBody = false, comment = false;
        let exp = "";
        for(;i<xmlData.length;i++){
            if (xmlData[i] === '<' && !comment) { //Determine the tag type
                if( hasBody && isEntity(xmlData, i)){
                    i += 7; 
                    [entityName, val,i] = readEntityExp(xmlData,i+1);
                    if(val.indexOf("&") === -1) //Parameter entities are not supported
                        entities[ validateEntityName(entityName) ] = {
                            regx : RegExp( `&${entityName};`,"g"),
                            val: val
                        };
                }
                else if( hasBody && isElement(xmlData, i))  i += 8;//Not supported
                else if( hasBody && isAttlist(xmlData, i))  i += 8;//Not supported
                else if( hasBody && isNotation(xmlData, i)) i += 9;//Not supported
                else if( isComment)                         comment = true;
                else                                        throw new Error("Invalid DOCTYPE");

                angleBracketsCount++;
                exp = "";
            } else if (xmlData[i] === '>') { //Read tag content
                if(comment){
                    if( xmlData[i - 1] === "-" && xmlData[i - 2] === "-"){
                        comment = false;
                        angleBracketsCount--;
                    }
                }else{
                    angleBracketsCount--;
                }
                if (angleBracketsCount === 0) {
                  break;
                }
            }else if( xmlData[i] === '['){
                hasBody = true;
            }else{
                exp += xmlData[i];
            }
        }
        if(angleBracketsCount !== 0){
            throw new Error(`Unclosed DOCTYPE`);
        }
    }else{
        throw new Error(`Invalid Tag instead of DOCTYPE`);
    }
    return {entities, i};
}

function readEntityExp(xmlData,i){
    //External entities are not supported
    //    <!ENTITY ext SYSTEM "http://normal-website.com" >

    //Parameter entities are not supported
    //    <!ENTITY entityname "&anotherElement;">

    //Internal entities are supported
    //    <!ENTITY entityname "replacement text">
    
    //read EntityName
    let entityName = "";
    for (; i < xmlData.length && (xmlData[i] !== "'" && xmlData[i] !== '"' ); i++) {
        // if(xmlData[i] === " ") continue;
        // else 
        entityName += xmlData[i];
    }
    entityName = entityName.trim();
    if(entityName.indexOf(" ") !== -1) throw new Error("External entites are not supported");

    //read Entity Value
    const startChar = xmlData[i++];
    let val = ""
    for (; i < xmlData.length && xmlData[i] !== startChar ; i++) {
        val += xmlData[i];
    }
    return [entityName, val, i];
}

function isComment(xmlData, i){
    if(xmlData[i+1] === '!' &&
    xmlData[i+2] === '-' &&
    xmlData[i+3] === '-') return true
    return false
}
function isEntity(xmlData, i){
    if(xmlData[i+1] === '!' &&
    xmlData[i+2] === 'E' &&
    xmlData[i+3] === 'N' &&
    xmlData[i+4] === 'T' &&
    xmlData[i+5] === 'I' &&
    xmlData[i+6] === 'T' &&
    xmlData[i+7] === 'Y') return true
    return false
}
function isElement(xmlData, i){
    if(xmlData[i+1] === '!' &&
    xmlData[i+2] === 'E' &&
    xmlData[i+3] === 'L' &&
    xmlData[i+4] === 'E' &&
    xmlData[i+5] === 'M' &&
    xmlData[i+6] === 'E' &&
    xmlData[i+7] === 'N' &&
    xmlData[i+8] === 'T') return true
    return false
}

function isAttlist(xmlData, i){
    if(xmlData[i+1] === '!' &&
    xmlData[i+2] === 'A' &&
    xmlData[i+3] === 'T' &&
    xmlData[i+4] === 'T' &&
    xmlData[i+5] === 'L' &&
    xmlData[i+6] === 'I' &&
    xmlData[i+7] === 'S' &&
    xmlData[i+8] === 'T') return true
    return false
}
function isNotation(xmlData, i){
    if(xmlData[i+1] === '!' &&
    xmlData[i+2] === 'N' &&
    xmlData[i+3] === 'O' &&
    xmlData[i+4] === 'T' &&
    xmlData[i+5] === 'A' &&
    xmlData[i+6] === 'T' &&
    xmlData[i+7] === 'I' &&
    xmlData[i+8] === 'O' &&
    xmlData[i+9] === 'N') return true
    return false
}

function validateEntityName(name){
    if (util.isName(name))
	return name;
    else
        throw new Error(`Invalid entity name ${name}`);
}

module.exports = readDocType;


/***/ }),

/***/ 460:
/***/ ((__unused_webpack_module, exports) => {


const defaultOptions = {
    preserveOrder: false,
    attributeNamePrefix: '@_',
    attributesGroupName: false,
    textNodeName: '#text',
    ignoreAttributes: true,
    removeNSPrefix: false, // remove NS from tag name or attribute name if true
    allowBooleanAttributes: false, //a tag can have attributes without any value
    //ignoreRootElement : false,
    parseTagValue: true,
    parseAttributeValue: false,
    trimValues: true, //Trim string values of tag and attributes
    cdataPropName: false,
    numberParseOptions: {
      hex: true,
      leadingZeros: true,
      eNotation: true
    },
    tagValueProcessor: function(tagName, val) {
      return val;
    },
    attributeValueProcessor: function(attrName, val) {
      return val;
    },
    stopNodes: [], //nested tags will not be parsed even for errors
    alwaysCreateTextNode: false,
    isArray: () => false,
    commentPropName: false,
    unpairedTags: [],
    processEntities: true,
    htmlEntities: false,
    ignoreDeclaration: false,
    ignorePiTags: false,
    transformTagName: false,
    transformAttributeName: false,
    updateTag: function(tagName, jPath, attrs){
      return tagName
    },
    // skipEmptyListItem: false
};
   
const buildOptions = function(options) {
    return Object.assign({}, defaultOptions, options);
};

exports.buildOptions = buildOptions;
exports.defaultOptions = defaultOptions;

/***/ }),

/***/ 7680:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

"use strict";

///@ts-check

const util = __webpack_require__(5334);
const xmlNode = __webpack_require__(3832);
const readDocType = __webpack_require__(9400);
const toNumber = __webpack_require__(7983);

const regx =
  '<((!\\[CDATA\\[([\\s\\S]*?)(]]>))|((NAME:)?(NAME))([^>]*)>|((\\/)(NAME)\\s*>))([^<]*)'
  .replace(/NAME/g, util.nameRegexp);

//const tagsRegx = new RegExp("<(\\/?[\\w:\\-\._]+)([^>]*)>(\\s*"+cdataRegx+")*([^<]+)?","g");
//const tagsRegx = new RegExp("<(\\/?)((\\w*:)?([\\w:\\-\._]+))([^>]*)>([^<]*)("+cdataRegx+"([^<]*))*([^<]+)?","g");

class OrderedObjParser{
  constructor(options){
    this.options = options;
    this.currentNode = null;
    this.tagsNodeStack = [];
    this.docTypeEntities = {};
    this.lastEntities = {
      "apos" : { regex: /&(apos|#39|#x27);/g, val : "'"},
      "gt" : { regex: /&(gt|#62|#x3E);/g, val : ">"},
      "lt" : { regex: /&(lt|#60|#x3C);/g, val : "<"},
      "quot" : { regex: /&(quot|#34|#x22);/g, val : "\""},
    };
    this.ampEntity = { regex: /&(amp|#38|#x26);/g, val : "&"};
    this.htmlEntities = {
      "space": { regex: /&(nbsp|#160);/g, val: " " },
      // "lt" : { regex: /&(lt|#60);/g, val: "<" },
      // "gt" : { regex: /&(gt|#62);/g, val: ">" },
      // "amp" : { regex: /&(amp|#38);/g, val: "&" },
      // "quot" : { regex: /&(quot|#34);/g, val: "\"" },
      // "apos" : { regex: /&(apos|#39);/g, val: "'" },
      "cent" : { regex: /&(cent|#162);/g, val: "¢" },
      "pound" : { regex: /&(pound|#163);/g, val: "£" },
      "yen" : { regex: /&(yen|#165);/g, val: "¥" },
      "euro" : { regex: /&(euro|#8364);/g, val: "€" },
      "copyright" : { regex: /&(copy|#169);/g, val: "©" },
      "reg" : { regex: /&(reg|#174);/g, val: "®" },
      "inr" : { regex: /&(inr|#8377);/g, val: "₹" },
    };
    this.addExternalEntities = addExternalEntities;
    this.parseXml = parseXml;
    this.parseTextData = parseTextData;
    this.resolveNameSpace = resolveNameSpace;
    this.buildAttributesMap = buildAttributesMap;
    this.isItStopNode = isItStopNode;
    this.replaceEntitiesValue = replaceEntitiesValue;
    this.readStopNodeData = readStopNodeData;
    this.saveTextToParentTag = saveTextToParentTag;
    this.addChild = addChild;
  }

}

function addExternalEntities(externalEntities){
  const entKeys = Object.keys(externalEntities);
  for (let i = 0; i < entKeys.length; i++) {
    const ent = entKeys[i];
    this.lastEntities[ent] = {
       regex: new RegExp("&"+ent+";","g"),
       val : externalEntities[ent]
    }
  }
}

/**
 * @param {string} val
 * @param {string} tagName
 * @param {string} jPath
 * @param {boolean} dontTrim
 * @param {boolean} hasAttributes
 * @param {boolean} isLeafNode
 * @param {boolean} escapeEntities
 */
function parseTextData(val, tagName, jPath, dontTrim, hasAttributes, isLeafNode, escapeEntities) {
  if (val !== undefined) {
    if (this.options.trimValues && !dontTrim) {
      val = val.trim();
    }
    if(val.length > 0){
      if(!escapeEntities) val = this.replaceEntitiesValue(val);
      
      const newval = this.options.tagValueProcessor(tagName, val, jPath, hasAttributes, isLeafNode);
      if(newval === null || newval === undefined){
        //don't parse
        return val;
      }else if(typeof newval !== typeof val || newval !== val){
        //overwrite
        return newval;
      }else if(this.options.trimValues){
        return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
      }else{
        const trimmedVal = val.trim();
        if(trimmedVal === val){
          return parseValue(val, this.options.parseTagValue, this.options.numberParseOptions);
        }else{
          return val;
        }
      }
    }
  }
}

function resolveNameSpace(tagname) {
  if (this.options.removeNSPrefix) {
    const tags = tagname.split(':');
    const prefix = tagname.charAt(0) === '/' ? '/' : '';
    if (tags[0] === 'xmlns') {
      return '';
    }
    if (tags.length === 2) {
      tagname = prefix + tags[1];
    }
  }
  return tagname;
}

//TODO: change regex to capture NS
//const attrsRegx = new RegExp("([\\w\\-\\.\\:]+)\\s*=\\s*(['\"])((.|\n)*?)\\2","gm");
const attrsRegx = new RegExp('([^\\s=]+)\\s*(=\\s*([\'"])([\\s\\S]*?)\\3)?', 'gm');

function buildAttributesMap(attrStr, jPath, tagName) {
  if (!this.options.ignoreAttributes && typeof attrStr === 'string') {
    // attrStr = attrStr.replace(/\r?\n/g, ' ');
    //attrStr = attrStr || attrStr.trim();

    const matches = util.getAllMatches(attrStr, attrsRegx);
    const len = matches.length; //don't make it inline
    const attrs = {};
    for (let i = 0; i < len; i++) {
      const attrName = this.resolveNameSpace(matches[i][1]);
      let oldVal = matches[i][4];
      let aName = this.options.attributeNamePrefix + attrName;
      if (attrName.length) {
        if (this.options.transformAttributeName) {
          aName = this.options.transformAttributeName(aName);
        }
        if(aName === "__proto__") aName  = "#__proto__";
        if (oldVal !== undefined) {
          if (this.options.trimValues) {
            oldVal = oldVal.trim();
          }
          oldVal = this.replaceEntitiesValue(oldVal);
          const newVal = this.options.attributeValueProcessor(attrName, oldVal, jPath);
          if(newVal === null || newVal === undefined){
            //don't parse
            attrs[aName] = oldVal;
          }else if(typeof newVal !== typeof oldVal || newVal !== oldVal){
            //overwrite
            attrs[aName] = newVal;
          }else{
            //parse
            attrs[aName] = parseValue(
              oldVal,
              this.options.parseAttributeValue,
              this.options.numberParseOptions
            );
          }
        } else if (this.options.allowBooleanAttributes) {
          attrs[aName] = true;
        }
      }
    }
    if (!Object.keys(attrs).length) {
      return;
    }
    if (this.options.attributesGroupName) {
      const attrCollection = {};
      attrCollection[this.options.attributesGroupName] = attrs;
      return attrCollection;
    }
    return attrs
  }
}

const parseXml = function(xmlData) {
  xmlData = xmlData.replace(/\r\n?/g, "\n"); //TODO: remove this line
  const xmlObj = new xmlNode('!xml');
  let currentNode = xmlObj;
  let textData = "";
  let jPath = "";
  for(let i=0; i< xmlData.length; i++){//for each char in XML data
    const ch = xmlData[i];
    if(ch === '<'){
      // const nextIndex = i+1;
      // const _2ndChar = xmlData[nextIndex];
      if( xmlData[i+1] === '/') {//Closing Tag
        const closeIndex = findClosingIndex(xmlData, ">", i, "Closing Tag is not closed.")
        let tagName = xmlData.substring(i+2,closeIndex).trim();

        if(this.options.removeNSPrefix){
          const colonIndex = tagName.indexOf(":");
          if(colonIndex !== -1){
            tagName = tagName.substr(colonIndex+1);
          }
        }

        if(this.options.transformTagName) {
          tagName = this.options.transformTagName(tagName);
        }

        if(currentNode){
          textData = this.saveTextToParentTag(textData, currentNode, jPath);
        }

        //check if last tag of nested tag was unpaired tag
        const lastTagName = jPath.substring(jPath.lastIndexOf(".")+1);
        if(tagName && this.options.unpairedTags.indexOf(tagName) !== -1 ){
          throw new Error(`Unpaired tag can not be used as closing tag: </${tagName}>`);
        }
        let propIndex = 0
        if(lastTagName && this.options.unpairedTags.indexOf(lastTagName) !== -1 ){
          propIndex = jPath.lastIndexOf('.', jPath.lastIndexOf('.')-1)
          this.tagsNodeStack.pop();
        }else{
          propIndex = jPath.lastIndexOf(".");
        }
        jPath = jPath.substring(0, propIndex);

        currentNode = this.tagsNodeStack.pop();//avoid recursion, set the parent tag scope
        textData = "";
        i = closeIndex;
      } else if( xmlData[i+1] === '?') {

        let tagData = readTagExp(xmlData,i, false, "?>");
        if(!tagData) throw new Error("Pi Tag is not closed.");

        textData = this.saveTextToParentTag(textData, currentNode, jPath);
        if( (this.options.ignoreDeclaration && tagData.tagName === "?xml") || this.options.ignorePiTags){

        }else{
  
          const childNode = new xmlNode(tagData.tagName);
          childNode.add(this.options.textNodeName, "");
          
          if(tagData.tagName !== tagData.tagExp && tagData.attrExpPresent){
            childNode[":@"] = this.buildAttributesMap(tagData.tagExp, jPath, tagData.tagName);
          }
          this.addChild(currentNode, childNode, jPath)

        }


        i = tagData.closeIndex + 1;
      } else if(xmlData.substr(i + 1, 3) === '!--') {
        const endIndex = findClosingIndex(xmlData, "-->", i+4, "Comment is not closed.")
        if(this.options.commentPropName){
          const comment = xmlData.substring(i + 4, endIndex - 2);

          textData = this.saveTextToParentTag(textData, currentNode, jPath);

          currentNode.add(this.options.commentPropName, [ { [this.options.textNodeName] : comment } ]);
        }
        i = endIndex;
      } else if( xmlData.substr(i + 1, 2) === '!D') {
        const result = readDocType(xmlData, i);
        this.docTypeEntities = result.entities;
        i = result.i;
      }else if(xmlData.substr(i + 1, 2) === '![') {
        const closeIndex = findClosingIndex(xmlData, "]]>", i, "CDATA is not closed.") - 2;
        const tagExp = xmlData.substring(i + 9,closeIndex);

        textData = this.saveTextToParentTag(textData, currentNode, jPath);

        //cdata should be set even if it is 0 length string
        if(this.options.cdataPropName){
          // let val = this.parseTextData(tagExp, this.options.cdataPropName, jPath + "." + this.options.cdataPropName, true, false, true);
          // if(!val) val = "";
          currentNode.add(this.options.cdataPropName, [ { [this.options.textNodeName] : tagExp } ]);
        }else{
          let val = this.parseTextData(tagExp, currentNode.tagname, jPath, true, false, true);
          if(val == undefined) val = "";
          currentNode.add(this.options.textNodeName, val);
        }
        
        i = closeIndex + 2;
      }else {//Opening tag
        let result = readTagExp(xmlData,i, this.options.removeNSPrefix);
        let tagName= result.tagName;
        let tagExp = result.tagExp;
        let attrExpPresent = result.attrExpPresent;
        let closeIndex = result.closeIndex;

        if (this.options.transformTagName) {
          tagName = this.options.transformTagName(tagName);
        }
        
        //save text as child node
        if (currentNode && textData) {
          if(currentNode.tagname !== '!xml'){
            //when nested tag is found
            textData = this.saveTextToParentTag(textData, currentNode, jPath, false);
          }
        }

        //check if last tag was unpaired tag
        const lastTag = currentNode;
        if(lastTag && this.options.unpairedTags.indexOf(lastTag.tagname) !== -1 ){
          currentNode = this.tagsNodeStack.pop();
          jPath = jPath.substring(0, jPath.lastIndexOf("."));
        }
        if(tagName !== xmlObj.tagname){
          jPath += jPath ? "." + tagName : tagName;
        }
        if (this.isItStopNode(this.options.stopNodes, jPath, tagName)) { //TODO: namespace
          let tagContent = "";
          //self-closing tag
          if(tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1){
            i = result.closeIndex;
          }
          //unpaired tag
          else if(this.options.unpairedTags.indexOf(tagName) !== -1){
            i = result.closeIndex;
          }
          //normal tag
          else{
            //read until closing tag is found
            const result = this.readStopNodeData(xmlData, tagName, closeIndex + 1);
            if(!result) throw new Error(`Unexpected end of ${tagName}`);
            i = result.i;
            tagContent = result.tagContent;
          }

          const childNode = new xmlNode(tagName);
          if(tagName !== tagExp && attrExpPresent){
            childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
          }
          if(tagContent) {
            tagContent = this.parseTextData(tagContent, tagName, jPath, true, attrExpPresent, true, true);
          }
          
          jPath = jPath.substr(0, jPath.lastIndexOf("."));
          childNode.add(this.options.textNodeName, tagContent);
          
          this.addChild(currentNode, childNode, jPath)
        }else{
  //selfClosing tag
          if(tagExp.length > 0 && tagExp.lastIndexOf("/") === tagExp.length - 1){
            if(tagName[tagName.length - 1] === "/"){ //remove trailing '/'
              tagName = tagName.substr(0, tagName.length - 1);
              tagExp = tagName;
            }else{
              tagExp = tagExp.substr(0, tagExp.length - 1);
            }
            
            if(this.options.transformTagName) {
              tagName = this.options.transformTagName(tagName);
            }

            const childNode = new xmlNode(tagName);
            if(tagName !== tagExp && attrExpPresent){
              childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
            }
            this.addChild(currentNode, childNode, jPath)
            jPath = jPath.substr(0, jPath.lastIndexOf("."));
          }
    //opening tag
          else{
            const childNode = new xmlNode( tagName);
            this.tagsNodeStack.push(currentNode);
            
            if(tagName !== tagExp && attrExpPresent){
              childNode[":@"] = this.buildAttributesMap(tagExp, jPath, tagName);
            }
            this.addChild(currentNode, childNode, jPath)
            currentNode = childNode;
          }
          textData = "";
          i = closeIndex;
        }
      }
    }else{
      textData += xmlData[i];
    }
  }
  return xmlObj.child;
}

function addChild(currentNode, childNode, jPath){
  const result = this.options.updateTag(childNode.tagname, jPath, childNode[":@"])
  if(result === false){
  }else if(typeof result === "string"){
    childNode.tagname = result
    currentNode.addChild(childNode);
  }else{
    currentNode.addChild(childNode);
  }
}

const replaceEntitiesValue = function(val){

  if(this.options.processEntities){
    for(let entityName in this.docTypeEntities){
      const entity = this.docTypeEntities[entityName];
      val = val.replace( entity.regx, entity.val);
    }
    for(let entityName in this.lastEntities){
      const entity = this.lastEntities[entityName];
      val = val.replace( entity.regex, entity.val);
    }
    if(this.options.htmlEntities){
      for(let entityName in this.htmlEntities){
        const entity = this.htmlEntities[entityName];
        val = val.replace( entity.regex, entity.val);
      }
    }
    val = val.replace( this.ampEntity.regex, this.ampEntity.val);
  }
  return val;
}
function saveTextToParentTag(textData, currentNode, jPath, isLeafNode) {
  if (textData) { //store previously collected data as textNode
    if(isLeafNode === undefined) isLeafNode = Object.keys(currentNode.child).length === 0
    
    textData = this.parseTextData(textData,
      currentNode.tagname,
      jPath,
      false,
      currentNode[":@"] ? Object.keys(currentNode[":@"]).length !== 0 : false,
      isLeafNode);

    if (textData !== undefined && textData !== "")
      currentNode.add(this.options.textNodeName, textData);
    textData = "";
  }
  return textData;
}

//TODO: use jPath to simplify the logic
/**
 * 
 * @param {string[]} stopNodes 
 * @param {string} jPath
 * @param {string} currentTagName 
 */
function isItStopNode(stopNodes, jPath, currentTagName){
  const allNodesExp = "*." + currentTagName;
  for (const stopNodePath in stopNodes) {
    const stopNodeExp = stopNodes[stopNodePath];
    if( allNodesExp === stopNodeExp || jPath === stopNodeExp  ) return true;
  }
  return false;
}

/**
 * Returns the tag Expression and where it is ending handling single-double quotes situation
 * @param {string} xmlData 
 * @param {number} i starting index
 * @returns 
 */
function tagExpWithClosingIndex(xmlData, i, closingChar = ">"){
  let attrBoundary;
  let tagExp = "";
  for (let index = i; index < xmlData.length; index++) {
    let ch = xmlData[index];
    if (attrBoundary) {
        if (ch === attrBoundary) attrBoundary = "";//reset
    } else if (ch === '"' || ch === "'") {
        attrBoundary = ch;
    } else if (ch === closingChar[0]) {
      if(closingChar[1]){
        if(xmlData[index + 1] === closingChar[1]){
          return {
            data: tagExp,
            index: index
          }
        }
      }else{
        return {
          data: tagExp,
          index: index
        }
      }
    } else if (ch === '\t') {
      ch = " "
    }
    tagExp += ch;
  }
}

function findClosingIndex(xmlData, str, i, errMsg){
  const closingIndex = xmlData.indexOf(str, i);
  if(closingIndex === -1){
    throw new Error(errMsg)
  }else{
    return closingIndex + str.length - 1;
  }
}

function readTagExp(xmlData,i, removeNSPrefix, closingChar = ">"){
  const result = tagExpWithClosingIndex(xmlData, i+1, closingChar);
  if(!result) return;
  let tagExp = result.data;
  const closeIndex = result.index;
  const separatorIndex = tagExp.search(/\s/);
  let tagName = tagExp;
  let attrExpPresent = true;
  if(separatorIndex !== -1){//separate tag name and attributes expression
    tagName = tagExp.substr(0, separatorIndex).replace(/\s\s*$/, '');
    tagExp = tagExp.substr(separatorIndex + 1);
  }

  if(removeNSPrefix){
    const colonIndex = tagName.indexOf(":");
    if(colonIndex !== -1){
      tagName = tagName.substr(colonIndex+1);
      attrExpPresent = tagName !== result.data.substr(colonIndex + 1);
    }
  }

  return {
    tagName: tagName,
    tagExp: tagExp,
    closeIndex: closeIndex,
    attrExpPresent: attrExpPresent,
  }
}
/**
 * find paired tag for a stop node
 * @param {string} xmlData 
 * @param {string} tagName 
 * @param {number} i 
 */
function readStopNodeData(xmlData, tagName, i){
  const startIndex = i;
  // Starting at 1 since we already have an open tag
  let openTagCount = 1;

  for (; i < xmlData.length; i++) {
    if( xmlData[i] === "<"){ 
      if (xmlData[i+1] === "/") {//close tag
          const closeIndex = findClosingIndex(xmlData, ">", i, `${tagName} is not closed`);
          let closeTagName = xmlData.substring(i+2,closeIndex).trim();
          if(closeTagName === tagName){
            openTagCount--;
            if (openTagCount === 0) {
              return {
                tagContent: xmlData.substring(startIndex, i),
                i : closeIndex
              }
            }
          }
          i=closeIndex;
        } else if(xmlData[i+1] === '?') { 
          const closeIndex = findClosingIndex(xmlData, "?>", i+1, "StopNode is not closed.")
          i=closeIndex;
        } else if(xmlData.substr(i + 1, 3) === '!--') { 
          const closeIndex = findClosingIndex(xmlData, "-->", i+3, "StopNode is not closed.")
          i=closeIndex;
        } else if(xmlData.substr(i + 1, 2) === '![') { 
          const closeIndex = findClosingIndex(xmlData, "]]>", i, "StopNode is not closed.") - 2;
          i=closeIndex;
        } else {
          const tagData = readTagExp(xmlData, i, '>')

          if (tagData) {
            const openTagName = tagData && tagData.tagName;
            if (openTagName === tagName && tagData.tagExp[tagData.tagExp.length-1] !== "/") {
              openTagCount++;
            }
            i=tagData.closeIndex;
          }
        }
      }
  }//end for loop
}

function parseValue(val, shouldParse, options) {
  if (shouldParse && typeof val === 'string') {
    //console.log(options)
    const newval = val.trim();
    if(newval === 'true' ) return true;
    else if(newval === 'false' ) return false;
    else return toNumber(val, options);
  } else {
    if (util.isExist(val)) {
      return val;
    } else {
      return '';
    }
  }
}


module.exports = OrderedObjParser;


/***/ }),

/***/ 2923:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

const { buildOptions} = __webpack_require__(460);
const OrderedObjParser = __webpack_require__(7680);
const { prettify} = __webpack_require__(5629);
const validator = __webpack_require__(3918);

class XMLParser{
    
    constructor(options){
        this.externalEntities = {};
        this.options = buildOptions(options);
        
    }
    /**
     * Parse XML dats to JS object 
     * @param {string|Buffer} xmlData 
     * @param {boolean|Object} validationOption 
     */
    parse(xmlData,validationOption){
        if(typeof xmlData === "string"){
        }else if( xmlData.toString){
            xmlData = xmlData.toString();
        }else{
            throw new Error("XML data is accepted in String or Bytes[] form.")
        }
        if( validationOption){
            if(validationOption === true) validationOption = {}; //validate with default options
            
            const result = validator.validate(xmlData, validationOption);
            if (result !== true) {
              throw Error( `${result.err.msg}:${result.err.line}:${result.err.col}` )
            }
          }
        const orderedObjParser = new OrderedObjParser(this.options);
        orderedObjParser.addExternalEntities(this.externalEntities);
        const orderedResult = orderedObjParser.parseXml(xmlData);
        if(this.options.preserveOrder || orderedResult === undefined) return orderedResult;
        else return prettify(orderedResult, this.options);
    }

    /**
     * Add Entity which is not by default supported by this library
     * @param {string} key 
     * @param {string} value 
     */
    addEntity(key, value){
        if(value.indexOf("&") !== -1){
            throw new Error("Entity value can't have '&'")
        }else if(key.indexOf("&") !== -1 || key.indexOf(";") !== -1){
            throw new Error("An entity must be set without '&' and ';'. Eg. use '#xD' for '&#xD;'")
        }else if(value === "&"){
            throw new Error("An entity with value '&' is not permitted");
        }else{
            this.externalEntities[key] = value;
        }
    }
}

module.exports = XMLParser;

/***/ }),

/***/ 5629:
/***/ ((__unused_webpack_module, exports) => {

"use strict";


/**
 * 
 * @param {array} node 
 * @param {any} options 
 * @returns 
 */
function prettify(node, options){
  return compress( node, options);
}

/**
 * 
 * @param {array} arr 
 * @param {object} options 
 * @param {string} jPath 
 * @returns object
 */
function compress(arr, options, jPath){
  let text;
  const compressedObj = {};
  for (let i = 0; i < arr.length; i++) {
    const tagObj = arr[i];
    const property = propName(tagObj);
    let newJpath = "";
    if(jPath === undefined) newJpath = property;
    else newJpath = jPath + "." + property;

    if(property === options.textNodeName){
      if(text === undefined) text = tagObj[property];
      else text += "" + tagObj[property];
    }else if(property === undefined){
      continue;
    }else if(tagObj[property]){
      
      let val = compress(tagObj[property], options, newJpath);
      const isLeaf = isLeafTag(val, options);

      if(tagObj[":@"]){
        assignAttributes( val, tagObj[":@"], newJpath, options);
      }else if(Object.keys(val).length === 1 && val[options.textNodeName] !== undefined && !options.alwaysCreateTextNode){
        val = val[options.textNodeName];
      }else if(Object.keys(val).length === 0){
        if(options.alwaysCreateTextNode) val[options.textNodeName] = "";
        else val = "";
      }

      if(compressedObj[property] !== undefined && compressedObj.hasOwnProperty(property)) {
        if(!Array.isArray(compressedObj[property])) {
            compressedObj[property] = [ compressedObj[property] ];
        }
        compressedObj[property].push(val);
      }else{
        //TODO: if a node is not an array, then check if it should be an array
        //also determine if it is a leaf node
        if (options.isArray(property, newJpath, isLeaf )) {
          compressedObj[property] = [val];
        }else{
          compressedObj[property] = val;
        }
      }
    }
    
  }
  // if(text && text.length > 0) compressedObj[options.textNodeName] = text;
  if(typeof text === "string"){
    if(text.length > 0) compressedObj[options.textNodeName] = text;
  }else if(text !== undefined) compressedObj[options.textNodeName] = text;
  return compressedObj;
}

function propName(obj){
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    const key = keys[i];
    if(key !== ":@") return key;
  }
}

function assignAttributes(obj, attrMap, jpath, options){
  if (attrMap) {
    const keys = Object.keys(attrMap);
    const len = keys.length; //don't make it inline
    for (let i = 0; i < len; i++) {
      const atrrName = keys[i];
      if (options.isArray(atrrName, jpath + "." + atrrName, true, true)) {
        obj[atrrName] = [ attrMap[atrrName] ];
      } else {
        obj[atrrName] = attrMap[atrrName];
      }
    }
  }
}

function isLeafTag(obj, options){
  const { textNodeName } = options;
  const propCount = Object.keys(obj).length;
  
  if (propCount === 0) {
    return true;
  }

  if (
    propCount === 1 &&
    (obj[textNodeName] || typeof obj[textNodeName] === "boolean" || obj[textNodeName] === 0)
  ) {
    return true;
  }

  return false;
}
exports.prettify = prettify;


/***/ }),

/***/ 3832:
/***/ ((module) => {

"use strict";


class XmlNode{
  constructor(tagname) {
    this.tagname = tagname;
    this.child = []; //nested tags, text, cdata, comments in order
    this[":@"] = {}; //attributes map
  }
  add(key,val){
    // this.child.push( {name : key, val: val, isCdata: isCdata });
    if(key === "__proto__") key = "#__proto__";
    this.child.push( {[key]: val });
  }
  addChild(node) {
    if(node.tagname === "__proto__") node.tagname = "#__proto__";
    if(node[":@"] && Object.keys(node[":@"]).length > 0){
      this.child.push( { [node.tagname]: node.child, [":@"]: node[":@"] });
    }else{
      this.child.push( { [node.tagname]: node.child });
    }
  };
};


module.exports = XmlNode;

/***/ }),

/***/ 1429:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/**
 * Mnemonist LRUCache
 * ===================
 *
 * JavaScript implementation of the LRU Cache data structure. To save up
 * memory and allocations this implementation represents its underlying
 * doubly-linked list as static arrays and pointers. Thus, memory is allocated
 * only once at instantiation and JS objects are never created to serve as
 * pointers. This also means this implementation does not trigger too many
 * garbage collections.
 *
 * Note that to save up memory, a LRU Cache can be implemented using a singly
 * linked list by storing predecessors' pointers as hashmap values.
 * However, this means more hashmap lookups and would probably slow the whole
 * thing down. What's more, pointers are not the things taking most space in
 * memory.
 */
var Iterator = __webpack_require__(2766),
    forEach = __webpack_require__(156),
    typed = __webpack_require__(5384),
    iterables = __webpack_require__(9938);

/**
 * LRUCache.
 *
 * @constructor
 * @param {function} Keys     - Array class for storing keys.
 * @param {function} Values   - Array class for storing values.
 * @param {number}   capacity - Desired capacity.
 */
function LRUCache(Keys, Values, capacity) {
  if (arguments.length < 2) {
    capacity = Keys;
    Keys = null;
    Values = null;
  }

  this.capacity = capacity;

  if (typeof this.capacity !== 'number' || this.capacity <= 0)
    throw new Error('mnemonist/lru-cache: capacity should be positive number.');

  var PointerArray = typed.getPointerArray(capacity);

  this.forward = new PointerArray(capacity);
  this.backward = new PointerArray(capacity);
  this.K = typeof Keys === 'function' ? new Keys(capacity) : new Array(capacity);
  this.V = typeof Values === 'function' ? new Values(capacity) : new Array(capacity);

  // Properties
  this.size = 0;
  this.head = 0;
  this.tail = 0;
  this.items = {};
}

/**
 * Method used to clear the structure.
 *
 * @return {undefined}
 */
LRUCache.prototype.clear = function() {
  this.size = 0;
  this.head = 0;
  this.tail = 0;
  this.items = {};
};

/**
 * Method used to splay a value on top.
 *
 * @param  {number}   pointer - Pointer of the value to splay on top.
 * @return {LRUCache}
 */
LRUCache.prototype.splayOnTop = function(pointer) {
  var oldHead = this.head;

  if (this.head === pointer)
    return this;

  var previous = this.backward[pointer],
      next = this.forward[pointer];

  if (this.tail === pointer) {
    this.tail = previous;
  }
  else {
    this.backward[next] = previous;
  }

  this.forward[previous] = next;

  this.backward[oldHead] = pointer;
  this.head = pointer;
  this.forward[pointer] = oldHead;

  return this;
};

/**
 * Method used to set the value for the given key in the cache.
 *
 * @param  {any} key   - Key.
 * @param  {any} value - Value.
 * @return {undefined}
 */
LRUCache.prototype.set = function(key, value) {

  // The key already exists, we just need to update the value and splay on top
  var pointer = this.items[key];

  if (typeof pointer !== 'undefined') {
    this.splayOnTop(pointer);
    this.V[pointer] = value;

    return;
  }

  // The cache is not yet full
  if (this.size < this.capacity) {
    pointer = this.size++;
  }

  // Cache is full, we need to drop the last value
  else {
    pointer = this.tail;
    this.tail = this.backward[pointer];
    delete this.items[this.K[pointer]];
  }

  // Storing key & value
  this.items[key] = pointer;
  this.K[pointer] = key;
  this.V[pointer] = value;

  // Moving the item at the front of the list
  this.forward[pointer] = this.head;
  this.backward[this.head] = pointer;
  this.head = pointer;
};

/**
 * Method used to set the value for the given key in the cache
 *
 * @param  {any} key   - Key.
 * @param  {any} value - Value.
 * @return {{evicted: boolean, key: any, value: any}} An object containing the
 * key and value of an item that was overwritten or evicted in the set
 * operation, as well as a boolean indicating whether it was evicted due to
 * limited capacity. Return value is null if nothing was evicted or overwritten
 * during the set operation.
 */
LRUCache.prototype.setpop = function(key, value) {
  var oldValue = null;
  var oldKey = null;
  // The key already exists, we just need to update the value and splay on top
  var pointer = this.items[key];

  if (typeof pointer !== 'undefined') {
    this.splayOnTop(pointer);
    oldValue = this.V[pointer];
    this.V[pointer] = value;
    return {evicted: false, key: key, value: oldValue};
  }

  // The cache is not yet full
  if (this.size < this.capacity) {
    pointer = this.size++;
  }

  // Cache is full, we need to drop the last value
  else {
    pointer = this.tail;
    this.tail = this.backward[pointer];
    oldValue = this.V[pointer];
    oldKey = this.K[pointer];
    delete this.items[this.K[pointer]];
  }

  // Storing key & value
  this.items[key] = pointer;
  this.K[pointer] = key;
  this.V[pointer] = value;

  // Moving the item at the front of the list
  this.forward[pointer] = this.head;
  this.backward[this.head] = pointer;
  this.head = pointer;

  // Return object if eviction took place, otherwise return null
  if (oldKey) {
    return {evicted: true, key: oldKey, value: oldValue};
  }
  else {
    return null;
  }
};

/**
 * Method used to check whether the key exists in the cache.
 *
 * @param  {any} key   - Key.
 * @return {boolean}
 */
LRUCache.prototype.has = function(key) {
  return key in this.items;
};

/**
 * Method used to get the value attached to the given key. Will move the
 * related key to the front of the underlying linked list.
 *
 * @param  {any} key   - Key.
 * @return {any}
 */
LRUCache.prototype.get = function(key) {
  var pointer = this.items[key];

  if (typeof pointer === 'undefined')
    return;

  this.splayOnTop(pointer);

  return this.V[pointer];
};

/**
 * Method used to get the value attached to the given key. Does not modify
 * the ordering of the underlying linked list.
 *
 * @param  {any} key   - Key.
 * @return {any}
 */
LRUCache.prototype.peek = function(key) {
    var pointer = this.items[key];

    if (typeof pointer === 'undefined')
        return;

    return this.V[pointer];
};

/**
 * Method used to iterate over the cache's entries using a callback.
 *
 * @param  {function}  callback - Function to call for each item.
 * @param  {object}    scope    - Optional scope.
 * @return {undefined}
 */
LRUCache.prototype.forEach = function(callback, scope) {
  scope = arguments.length > 1 ? scope : this;

  var i = 0,
      l = this.size;

  var pointer = this.head,
      keys = this.K,
      values = this.V,
      forward = this.forward;

  while (i < l) {

    callback.call(scope, values[pointer], keys[pointer], this);
    pointer = forward[pointer];

    i++;
  }
};

/**
 * Method used to create an iterator over the cache's keys from most
 * recently used to least recently used.
 *
 * @return {Iterator}
 */
LRUCache.prototype.keys = function() {
  var i = 0,
      l = this.size;

  var pointer = this.head,
      keys = this.K,
      forward = this.forward;

  return new Iterator(function() {
    if (i >= l)
      return {done: true};

    var key = keys[pointer];

    i++;

    if (i < l)
      pointer = forward[pointer];

    return {
      done: false,
      value: key
    };
  });
};

/**
 * Method used to create an iterator over the cache's values from most
 * recently used to least recently used.
 *
 * @return {Iterator}
 */
LRUCache.prototype.values = function() {
  var i = 0,
      l = this.size;

  var pointer = this.head,
      values = this.V,
      forward = this.forward;

  return new Iterator(function() {
    if (i >= l)
      return {done: true};

    var value = values[pointer];

    i++;

    if (i < l)
      pointer = forward[pointer];

    return {
      done: false,
      value: value
    };
  });
};

/**
 * Method used to create an iterator over the cache's entries from most
 * recently used to least recently used.
 *
 * @return {Iterator}
 */
LRUCache.prototype.entries = function() {
  var i = 0,
      l = this.size;

  var pointer = this.head,
      keys = this.K,
      values = this.V,
      forward = this.forward;

  return new Iterator(function() {
    if (i >= l)
      return {done: true};

    var key = keys[pointer],
        value = values[pointer];

    i++;

    if (i < l)
      pointer = forward[pointer];

    return {
      done: false,
      value: [key, value]
    };
  });
};

/**
 * Attaching the #.entries method to Symbol.iterator if possible.
 */
if (typeof Symbol !== 'undefined')
  LRUCache.prototype[Symbol.iterator] = LRUCache.prototype.entries;

/**
 * Convenience known methods.
 */
LRUCache.prototype.inspect = function() {
  var proxy = new Map();

  var iterator = this.entries(),
      step;

  while ((step = iterator.next(), !step.done))
    proxy.set(step.value[0], step.value[1]);

  // Trick so that node displays the name of the constructor
  Object.defineProperty(proxy, 'constructor', {
    value: LRUCache,
    enumerable: false
  });

  return proxy;
};

if (typeof Symbol !== 'undefined')
  LRUCache.prototype[Symbol.for('nodejs.util.inspect.custom')] = LRUCache.prototype.inspect;

/**
 * Static @.from function taking an arbitrary iterable & converting it into
 * a structure.
 *
 * @param  {Iterable} iterable - Target iterable.
 * @param  {function} Keys     - Array class for storing keys.
 * @param  {function} Values   - Array class for storing values.
 * @param  {number}   capacity - Cache's capacity.
 * @return {LRUCache}
 */
LRUCache.from = function(iterable, Keys, Values, capacity) {
  if (arguments.length < 2) {
    capacity = iterables.guessLength(iterable);

    if (typeof capacity !== 'number')
      throw new Error('mnemonist/lru-cache.from: could not guess iterable length. Please provide desired capacity as last argument.');
  }
  else if (arguments.length === 2) {
    capacity = Keys;
    Keys = null;
    Values = null;
  }

  var cache = new LRUCache(Keys, Values, capacity);

  forEach(iterable, function(value, key) {
    cache.set(key, value);
  });

  return cache;
};

/**
 * Exporting.
 */
module.exports = LRUCache;


/***/ }),

/***/ 9938:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

/**
 * Mnemonist Iterable Function
 * ============================
 *
 * Harmonized iteration helpers over mixed iterable targets.
 */
var forEach = __webpack_require__(156);

var typed = __webpack_require__(5384);

/**
 * Function used to determine whether the given object supports array-like
 * random access.
 *
 * @param  {any} target - Target object.
 * @return {boolean}
 */
function isArrayLike(target) {
  return Array.isArray(target) || typed.isTypedArray(target);
}

/**
 * Function used to guess the length of the structure over which we are going
 * to iterate.
 *
 * @param  {any} target - Target object.
 * @return {number|undefined}
 */
function guessLength(target) {
  if (typeof target.length === 'number')
    return target.length;

  if (typeof target.size === 'number')
    return target.size;

  return;
}

/**
 * Function used to convert an iterable to an array.
 *
 * @param  {any}   target - Iteration target.
 * @return {array}
 */
function toArray(target) {
  var l = guessLength(target);

  var array = typeof l === 'number' ? new Array(l) : [];

  var i = 0;

  // TODO: we could optimize when given target is array like
  forEach(target, function(value) {
    array[i++] = value;
  });

  return array;
}

/**
 * Same as above but returns a supplementary indices array.
 *
 * @param  {any}   target - Iteration target.
 * @return {array}
 */
function toArrayWithIndices(target) {
  var l = guessLength(target);

  var IndexArray = typeof l === 'number' ?
    typed.getPointerArray(l) :
    Array;

  var array = typeof l === 'number' ? new Array(l) : [];
  var indices = typeof l === 'number' ? new IndexArray(l) : [];

  var i = 0;

  // TODO: we could optimize when given target is array like
  forEach(target, function(value) {
    array[i] = value;
    indices[i] = i++;
  });

  return [array, indices];
}

/**
 * Exporting.
 */
exports.isArrayLike = isArrayLike;
exports.guessLength = guessLength;
exports.toArray = toArray;
exports.toArrayWithIndices = toArrayWithIndices;


/***/ }),

/***/ 5384:
/***/ ((__unused_webpack_module, exports) => {

/**
 * Mnemonist Typed Array Helpers
 * ==============================
 *
 * Miscellaneous helpers related to typed arrays.
 */

/**
 * When using an unsigned integer array to store pointers, one might want to
 * choose the optimal word size in regards to the actual numbers of pointers
 * to store.
 *
 * This helpers does just that.
 *
 * @param  {number} size - Expected size of the array to map.
 * @return {TypedArray}
 */
var MAX_8BIT_INTEGER = Math.pow(2, 8) - 1,
    MAX_16BIT_INTEGER = Math.pow(2, 16) - 1,
    MAX_32BIT_INTEGER = Math.pow(2, 32) - 1;

var MAX_SIGNED_8BIT_INTEGER = Math.pow(2, 7) - 1,
    MAX_SIGNED_16BIT_INTEGER = Math.pow(2, 15) - 1,
    MAX_SIGNED_32BIT_INTEGER = Math.pow(2, 31) - 1;

exports.getPointerArray = function(size) {
  var maxIndex = size - 1;

  if (maxIndex <= MAX_8BIT_INTEGER)
    return Uint8Array;

  if (maxIndex <= MAX_16BIT_INTEGER)
    return Uint16Array;

  if (maxIndex <= MAX_32BIT_INTEGER)
    return Uint32Array;

  return Float64Array;
};

exports.getSignedPointerArray = function(size) {
  var maxIndex = size - 1;

  if (maxIndex <= MAX_SIGNED_8BIT_INTEGER)
    return Int8Array;

  if (maxIndex <= MAX_SIGNED_16BIT_INTEGER)
    return Int16Array;

  if (maxIndex <= MAX_SIGNED_32BIT_INTEGER)
    return Int32Array;

  return Float64Array;
};

/**
 * Function returning the minimal type able to represent the given number.
 *
 * @param  {number} value - Value to test.
 * @return {TypedArrayClass}
 */
exports.getNumberType = function(value) {

  // <= 32 bits itnteger?
  if (value === (value | 0)) {

    // Negative
    if (Math.sign(value) === -1) {
      if (value <= 127 && value >= -128)
        return Int8Array;

      if (value <= 32767 && value >= -32768)
        return Int16Array;

      return Int32Array;
    }
    else {

      if (value <= 255)
        return Uint8Array;

      if (value <= 65535)
        return Uint16Array;

      return Uint32Array;
    }
  }

  // 53 bits integer & floats
  // NOTE: it's kinda hard to tell whether we could use 32bits or not...
  return Float64Array;
};

/**
 * Function returning the minimal type able to represent the given array
 * of JavaScript numbers.
 *
 * @param  {array}    array  - Array to represent.
 * @param  {function} getter - Optional getter.
 * @return {TypedArrayClass}
 */
var TYPE_PRIORITY = {
  Uint8Array: 1,
  Int8Array: 2,
  Uint16Array: 3,
  Int16Array: 4,
  Uint32Array: 5,
  Int32Array: 6,
  Float32Array: 7,
  Float64Array: 8
};

// TODO: make this a one-shot for one value
exports.getMinimalRepresentation = function(array, getter) {
  var maxType = null,
      maxPriority = 0,
      p,
      t,
      v,
      i,
      l;

  for (i = 0, l = array.length; i < l; i++) {
    v = getter ? getter(array[i]) : array[i];
    t = exports.getNumberType(v);
    p = TYPE_PRIORITY[t.name];

    if (p > maxPriority) {
      maxPriority = p;
      maxType = t;
    }
  }

  return maxType;
};

/**
 * Function returning whether the given value is a typed array.
 *
 * @param  {any} value - Value to test.
 * @return {boolean}
 */
exports.isTypedArray = function(value) {
  return typeof ArrayBuffer !== 'undefined' && ArrayBuffer.isView(value);
};

/**
 * Function used to concat byte arrays.
 *
 * @param  {...ByteArray}
 * @return {ByteArray}
 */
exports.concat = function() {
  var length = 0,
      i,
      o,
      l;

  for (i = 0, l = arguments.length; i < l; i++)
    length += arguments[i].length;

  var array = new (arguments[0].constructor)(length);

  for (i = 0, o = 0; i < l; i++) {
    array.set(arguments[i], o);
    o += arguments[i].length;
  }

  return array;
};

/**
 * Function used to initialize a byte array of indices.
 *
 * @param  {number}    length - Length of target.
 * @return {ByteArray}
 */
exports.indices = function(length) {
  var PointerArray = exports.getPointerArray(length);

  var array = new PointerArray(length);

  for (var i = 0; i < length; i++)
    array[i] = i;

  return array;
};


/***/ }),

/***/ 156:
/***/ ((module) => {

/**
 * Obliterator ForEach Function
 * =============================
 *
 * Helper function used to easily iterate over mixed values.
 */

/**
 * Constants.
 */
var ARRAY_BUFFER_SUPPORT = typeof ArrayBuffer !== 'undefined',
    SYMBOL_SUPPORT = typeof Symbol !== 'undefined';

/**
 * Function able to iterate over almost any iterable JS value.
 *
 * @param  {any}      iterable - Iterable value.
 * @param  {function} callback - Callback function.
 */
function forEach(iterable, callback) {
  var iterator, k, i, l, s;

  if (!iterable)
    throw new Error('obliterator/forEach: invalid iterable.');

  if (typeof callback !== 'function')
    throw new Error('obliterator/forEach: expecting a callback.');

  // The target is an array or a string or function arguments
  if (
    Array.isArray(iterable) ||
    (ARRAY_BUFFER_SUPPORT && ArrayBuffer.isView(iterable)) ||
    typeof iterable === 'string' ||
    iterable.toString() === '[object Arguments]'
  ) {
    for (i = 0, l = iterable.length; i < l; i++)
      callback(iterable[i], i);
    return;
  }

  // The target has a #.forEach method
  if (typeof iterable.forEach === 'function') {
    iterable.forEach(callback);
    return;
  }

  // The target is iterable
  if (
    SYMBOL_SUPPORT &&
    Symbol.iterator in iterable &&
    typeof iterable.next !== 'function'
  ) {
    iterable = iterable[Symbol.iterator]();
  }

  // The target is an iterator
  if (typeof iterable.next === 'function') {
    iterator = iterable;
    i = 0;

    while ((s = iterator.next(), s.done !== true)) {
      callback(s.value, i);
      i++;
    }

    return;
  }

  // The target is a plain object
  for (k in iterable) {
    if (iterable.hasOwnProperty(k)) {
      callback(iterable[k], k);
    }
  }

  return;
}

/**
 * Same function as the above `forEach` but will yield `null` when the target
 * does not have keys.
 *
 * @param  {any}      iterable - Iterable value.
 * @param  {function} callback - Callback function.
 */
forEach.forEachWithNullKeys = function(iterable, callback) {
  var iterator, k, i, l, s;

  if (!iterable)
    throw new Error('obliterator/forEachWithNullKeys: invalid iterable.');

  if (typeof callback !== 'function')
    throw new Error('obliterator/forEachWithNullKeys: expecting a callback.');

  // The target is an array or a string or function arguments
  if (
    Array.isArray(iterable) ||
    (ARRAY_BUFFER_SUPPORT && ArrayBuffer.isView(iterable)) ||
    typeof iterable === 'string' ||
    iterable.toString() === '[object Arguments]'
  ) {
    for (i = 0, l = iterable.length; i < l; i++)
      callback(iterable[i], null);
    return;
  }

  // The target is a Set
  if (iterable instanceof Set) {
    iterable.forEach(function(value) {
      callback(value, null);
    });
    return;
  }

  // The target has a #.forEach method
  if (typeof iterable.forEach === 'function') {
    iterable.forEach(callback);
    return;
  }

  // The target is iterable
  if (
    SYMBOL_SUPPORT &&
    Symbol.iterator in iterable &&
    typeof iterable.next !== 'function'
  ) {
    iterable = iterable[Symbol.iterator]();
  }

  // The target is an iterator
  if (typeof iterable.next === 'function') {
    iterator = iterable;
    i = 0;

    while ((s = iterator.next(), s.done !== true)) {
      callback(s.value, null);
      i++;
    }

    return;
  }

  // The target is a plain object
  for (k in iterable) {
    if (iterable.hasOwnProperty(k)) {
      callback(iterable[k], k);
    }
  }

  return;
};

/**
 * Exporting.
 */
module.exports = forEach;


/***/ }),

/***/ 2766:
/***/ ((module) => {

/**
 * Obliterator Iterator Class
 * ===========================
 *
 * Simple class representing the library's iterators.
 */

/**
 * Iterator class.
 *
 * @constructor
 * @param {function} next - Next function.
 */
function Iterator(next) {

  // Hiding the given function
  Object.defineProperty(this, '_next', {
    writable: false,
    enumerable: false,
    value: next
  });

  // Is the iterator complete?
  this.done = false;
}

/**
 * Next function.
 *
 * @return {object}
 */
// NOTE: maybe this should dropped for performance?
Iterator.prototype.next = function() {
  if (this.done)
    return {done: true};

  var step = this._next();

  if (step.done)
    this.done = true;

  return step;
};

/**
 * If symbols are supported, we add `next` to `Symbol.iterator`.
 */
if (typeof Symbol !== 'undefined')
  Iterator.prototype[Symbol.iterator] = function() {
    return this;
  };

/**
 * Returning an iterator of the given values.
 *
 * @param  {any...} values - Values.
 * @return {Iterator}
 */
Iterator.of = function() {
  var args = arguments,
      l = args.length,
      i = 0;

  return new Iterator(function() {
    if (i >= l)
      return {done: true};

    return {done: false, value: args[i++]};
  });
};

/**
 * Returning an empty iterator.
 *
 * @return {Iterator}
 */
Iterator.empty = function() {
  var iterator = new Iterator(null);
  iterator.done = true;

  return iterator;
};

/**
 * Returning whether the given value is an iterator.
 *
 * @param  {any} value - Value.
 * @return {boolean}
 */
Iterator.is = function(value) {
  if (value instanceof Iterator)
    return true;

  return (
    typeof value === 'object' &&
    value !== null &&
    typeof value.next === 'function'
  );
};

/**
 * Exporting.
 */
module.exports = Iterator;


/***/ }),

/***/ 7983:
/***/ ((module) => {

const hexRegex = /^[-+]?0x[a-fA-F0-9]+$/;
const numRegex = /^([\-\+])?(0*)(\.[0-9]+([eE]\-?[0-9]+)?|[0-9]+(\.[0-9]+([eE]\-?[0-9]+)?)?)$/;
// const octRegex = /0x[a-z0-9]+/;
// const binRegex = /0x[a-z0-9]+/;


//polyfill
if (!Number.parseInt && window.parseInt) {
    Number.parseInt = window.parseInt;
}
if (!Number.parseFloat && window.parseFloat) {
    Number.parseFloat = window.parseFloat;
}

  
const consider = {
    hex :  true,
    leadingZeros: true,
    decimalPoint: "\.",
    eNotation: true
    //skipLike: /regex/
};

function toNumber(str, options = {}){
    // const options = Object.assign({}, consider);
    // if(opt.leadingZeros === false){
    //     options.leadingZeros = false;
    // }else if(opt.hex === false){
    //     options.hex = false;
    // }

    options = Object.assign({}, consider, options );
    if(!str || typeof str !== "string" ) return str;
    
    let trimmedStr  = str.trim();
    // if(trimmedStr === "0.0") return 0;
    // else if(trimmedStr === "+0.0") return 0;
    // else if(trimmedStr === "-0.0") return -0;

    if(options.skipLike !== undefined && options.skipLike.test(trimmedStr)) return str;
    else if (options.hex && hexRegex.test(trimmedStr)) {
        return Number.parseInt(trimmedStr, 16);
    // } else if (options.parseOct && octRegex.test(str)) {
    //     return Number.parseInt(val, 8);
    // }else if (options.parseBin && binRegex.test(str)) {
    //     return Number.parseInt(val, 2);
    }else{
        //separate negative sign, leading zeros, and rest number
        const match = numRegex.exec(trimmedStr);
        if(match){
            const sign = match[1];
            const leadingZeros = match[2];
            let numTrimmedByZeros = trimZeros(match[3]); //complete num without leading zeros
            //trim ending zeros for floating number
            
            const eNotation = match[4] || match[6];
            if(!options.leadingZeros && leadingZeros.length > 0 && sign && trimmedStr[2] !== ".") return str; //-0123
            else if(!options.leadingZeros && leadingZeros.length > 0 && !sign && trimmedStr[1] !== ".") return str; //0123
            else{//no leading zeros or leading zeros are allowed
                const num = Number(trimmedStr);
                const numStr = "" + num;
                if(numStr.search(/[eE]/) !== -1){ //given number is long and parsed to eNotation
                    if(options.eNotation) return num;
                    else return str;
                }else if(eNotation){ //given number has enotation
                    if(options.eNotation) return num;
                    else return str;
                }else if(trimmedStr.indexOf(".") !== -1){ //floating number
                    // const decimalPart = match[5].substr(1);
                    // const intPart = trimmedStr.substr(0,trimmedStr.indexOf("."));

                    
                    // const p = numStr.indexOf(".");
                    // const givenIntPart = numStr.substr(0,p);
                    // const givenDecPart = numStr.substr(p+1);
                    if(numStr === "0" && (numTrimmedByZeros === "") ) return num; //0.0
                    else if(numStr === numTrimmedByZeros) return num; //0.456. 0.79000
                    else if( sign && numStr === "-"+numTrimmedByZeros) return num;
                    else return str;
                }
                
                if(leadingZeros){
                    // if(numTrimmedByZeros === numStr){
                    //     if(options.leadingZeros) return num;
                    //     else return str;
                    // }else return str;
                    if(numTrimmedByZeros === numStr) return num;
                    else if(sign+numTrimmedByZeros === numStr) return num;
                    else return str;
                }

                if(trimmedStr === numStr) return num;
                else if(trimmedStr === sign+numStr) return num;
                // else{
                //     //number with +/- sign
                //     trimmedStr.test(/[-+][0-9]);

                // }
                return str;
            }
            // else if(!eNotation && trimmedStr && trimmedStr !== Number(trimmedStr) ) return str;
            
        }else{ //non-numeric string
            return str;
        }
    }
}

/**
 * 
 * @param {string} numStr without leading zeros
 * @returns 
 */
function trimZeros(numStr){
    if(numStr && numStr.indexOf(".") !== -1){//float
        numStr = numStr.replace(/0+$/, ""); //remove ending zeros
        if(numStr === ".")  numStr = "0";
        else if(numStr[0] === ".")  numStr = "0"+numStr;
        else if(numStr[numStr.length-1] === ".")  numStr = numStr.substr(0,numStr.length-1);
        return numStr;
    }
    return numStr;
}
module.exports = toNumber


/***/ }),

/***/ 4200:
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";

Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.atomicCountSet = exports.atomicCountUp = void 0;
var client_dynamodb_1 = __webpack_require__(6657);
function atomicCountUp(tableName, wid, sensor) {
    return new client_dynamodb_1.UpdateItemCommand({
        TableName: tableName,
        ReturnValues: "ALL_NEW",
        Key: {
            PartitionKey: { S: 'CNT_' + wid },
            SortKey: { S: sensor },
        },
        UpdateExpression: 'ADD #count :q',
        ExpressionAttributeNames: { '#count': 'Count' },
        ExpressionAttributeValues: { ':q': { N: '1' } },
    });
}
exports.atomicCountUp = atomicCountUp;
function atomicCountSet(tableName, wid, sensor, count) {
    return new client_dynamodb_1.UpdateItemCommand({
        TableName: tableName,
        ReturnValues: "ALL_NEW",
        Key: {
            PartitionKey: { S: 'CNT_' + wid },
            SortKey: { S: sensor },
        },
        UpdateExpression: 'SET #count = :q',
        ExpressionAttributeNames: { '#count': 'Count' },
        ExpressionAttributeValues: { ':q': { N: String(count) } },
    });
}
exports.atomicCountSet = atomicCountSet;


/***/ }),

/***/ 3931:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

"use strict";

var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.handler = void 0;
var client_dynamodb_1 = __webpack_require__(6657);
var counter_1 = __webpack_require__(4200);
// 環境変数
var region = process.env.DDB_REGION;
var tableName = process.env.DDB_TABLE;
var debug = process.env.DEBUG === '1';
function handler(event, context, callback) {
    var _a, _b, _c, _d;
    return __awaiter(this, void 0, void 0, function () {
        var time, timeEpoch, sourceIp, userAgent, wid, sensor, timing, direct, client, putItemOutput, updateItemOutput;
        return __generator(this, function (_e) {
            switch (_e.label) {
                case 0:
                    if (debug) {
                        console.info('event:', event);
                    }
                    time = event.requestContext.time;
                    timeEpoch = event.requestContext.timeEpoch;
                    sourceIp = event.requestContext.http.sourceIp;
                    userAgent = event.requestContext.http.userAgent;
                    wid = (_a = event.queryStringParameters) === null || _a === void 0 ? void 0 : _a.wid;
                    sensor = (_b = event.queryStringParameters) === null || _b === void 0 ? void 0 : _b.sensor;
                    timing = (_c = event.queryStringParameters) === null || _c === void 0 ? void 0 : _c.timing;
                    direct = (_d = event.queryStringParameters) === null || _d === void 0 ? void 0 : _d.direct;
                    if (!wid) return [3 /*break*/, 3];
                    client = new client_dynamodb_1.DynamoDBClient({
                        region: region,
                    });
                    return [4 /*yield*/, client.send(new client_dynamodb_1.PutItemCommand({
                            TableName: tableName,
                            Item: {
                                "PartitionKey": { S: wid },
                                "SortKey": { S: timeEpoch + "-" + sourceIp },
                                "Received": { S: time },
                                "TimeEpoch": { N: String(timeEpoch) },
                                "SourceIp": { S: sourceIp },
                                "UserAgent": { S: userAgent },
                                "Sensor": sensor ? { S: sensor } : { NULL: true },
                                "Timing": timing ? { N: timing } : { NULL: true },
                            },
                        }))];
                case 1:
                    putItemOutput = _e.sent();
                    if (debug) {
                        console.info('putItemOutput:', putItemOutput);
                    }
                    if (!sensor) return [3 /*break*/, 3];
                    return [4 /*yield*/, client.send((0, counter_1.atomicCountUp)(tableName, wid, sensor))];
                case 2:
                    updateItemOutput = _e.sent();
                    if (debug) {
                        console.info('updateItemOutput:', updateItemOutput);
                    }
                    _e.label = 3;
                case 3:
                    if (direct) {
                        return [2 /*return*/, {
                                statusCode: 200,
                                headers: {
                                    "Content-Type": "video/mp4", //"application/octet-stream"
                                },
                                body: b64mp4(),
                                isBase64Encoded: true,
                            }];
                    }
                    else {
                        return [2 /*return*/, {
                                statusCode: 302,
                                headers: {
                                    Location: "https://github.com/kamicup/panda-tools/raw/main/resources/h264-cbp.mp4",
                                    "Content-Type": "application/octet-stream",
                                },
                                body: "",
                            }];
                    }
                    return [2 /*return*/];
            }
        });
    });
}
exports.handler = handler;
/**
 * resources/h264-cbp.mp4 の base64 エンコード表現
 */
var b64mp4 = function () {
    return "AAAAIGZ0eXBpc29tAAACAGlzb21pc28yYXZjMW1wNDEAAAAIZnJlZQAAAvVtZGF0AAACcQYF//9t3EXpvebZSLeWLNgg2SPu73gyNjQgLSBjb3JlIDE2NCByMzA5NSBiYWVlNDAwIC0gSC4yNjQvTVBFRy00IEFWQyBjb2RlYyAtIENvcHlsZWZ0IDIwMDMtMjAyMiAtIGh0dHA6Ly93d3cudmlkZW9sYW4ub3JnL3gyNjQuaHRtbCAtIG9wdGlvbnM6IGNhYmFjPTAgcmVmPTMgZGVibG9jaz0xOjA6MCBhbmFseXNlPTB4MToweDExMSBtZT1oZXggc3VibWU9NyBwc3k9MSBwc3lfcmQ9MS4wMDowLjAwIG1peGVkX3JlZj0xIG1lX3JhbmdlPTE2IGNocm9tYV9tZT0xIHRyZWxsaXM9MSA4eDhkY3Q9MCBjcW09MCBkZWFkem9uZT0yMSwxMSBmYXN0X3Bza2lwPTEgY2hyb21hX3FwX29mZnNldD0tMiB0aHJlYWRzPTEgbG9va2FoZWFkX3RocmVhZHM9MSBzbGljZWRfdGhyZWFkcz0wIG5yPTAgZGVjaW1hdGU9MSBpbnRlcmxhY2VkPTAgYmx1cmF5X2NvbXBhdD0wIGNvbnN0cmFpbmVkX2ludHJhPTAgYmZyYW1lcz0wIHdlaWdodHA9MCBrZXlpbnQ9MjUwIGtleWludF9taW49MTAgc2NlbmVjdXQ9NDAgaW50cmFfcmVmcmVzaD0wIHJjX2xvb2thaGVhZD00MCByYz1jcmYgbWJ0cmVlPTEgY3JmPTIzLjAgcWNvbXA9MC42MCBxcG1pbj0wIHFwbWF4PTY5IHFwc3RlcD00IGlwX3JhdGlvPTEuNDAgYXE9MToxLjAwAIAAAAAaZYiED/EYoAAm+xwABHBjgACrlJyddddddeAAAAAGQZo4H+KgAAAABkGaVAf4qAAAAAZBmmA/xUAAAAAGQZqAP8VAAAAABkGaoD/FQAAAAAZBmsA/xUAAAAAGQZrgP8VAAAAABkGbADvFQAAAAAZBmyA3xUAAAAM9bW9vdgAAAGxtdmhkAAAAAAAAAAAAAAAAAAAD6AAAA+gAAQAAAQAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAgAAAmh0cmFrAAAAXHRraGQAAAADAAAAAAAAAAAAAAABAAAAAAAAA+gAAAAAAAAAAAAAAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAABAAAAAAAAAAAAAAAAAABAAAAAADAAAAAwAAAAAAAkZWR0cwAAABxlbHN0AAAAAAAAAAEAAAPoAAAAAAABAAAAAAHgbWRpYQAAACBtZGhkAAAAAAAAAAAAAAAAAAAoAAAAKABVxAAAAAAALWhkbHIAAAAAAAAAAHZpZGUAAAAAAAAAAAAAAABWaWRlb0hhbmRsZXIAAAABi21pbmYAAAAUdm1oZAAAAAEAAAAAAAAAAAAAACRkaW5mAAAAHGRyZWYAAAAAAAAAAQAAAAx1cmwgAAAAAQAAAUtzdGJsAAAAq3N0c2QAAAAAAAAAAQAAAJthdmMxAAAAAAAAAAEAAAAAAAAAAAAAAAAAAAAAADAAMABIAAAASAAAAAAAAAABFExhdmM2MC4zLjEwMCBsaWJ4MjY0AAAAAAAAAAAAAAAAGP//AAAAMWF2Y0MBQsAK/+EAGWdCwArZDemoCBASAAADAAIAAAMAKB4kTJABAAVoy4PLIAAAABRidHJ0AAAAAAAAF2gAABdoAAAAGHN0dHMAAAAAAAAAAQAAAAoAAAQAAAAAFHN0c3MAAAAAAAAAAQAAAAEAAAAcc3RzYwAAAAAAAAABAAAAAQAAAAoAAAABAAAAPHN0c3oAAAAAAAAAAAAAAAoAAAKTAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAACgAAAAoAAAAKAAAAFHN0Y28AAAAAAAAAAQAAADAAAABhdWR0YQAAAFltZXRhAAAAAAAAACFoZGxyAAAAAAAAAABtZGlyYXBwbAAAAAAAAAAAAAAAACxpbHN0AAAAJKl0b28AAAAcZGF0YQAAAAEAAAAATGF2ZjYwLjMuMTAw";
};


/***/ }),

/***/ 4349:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ esm_node_v4)
});

// EXTERNAL MODULE: external "crypto"
var external_crypto_ = __webpack_require__(6982);
var external_crypto_default = /*#__PURE__*/__webpack_require__.n(external_crypto_);
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/native.js

/* harmony default export */ const esm_node_native = ({
  randomUUID: (external_crypto_default()).randomUUID
});
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/rng.js

const rnds8Pool = new Uint8Array(256); // # of random values to pre-allocate

let poolPtr = rnds8Pool.length;
function rng() {
  if (poolPtr > rnds8Pool.length - 16) {
    external_crypto_default().randomFillSync(rnds8Pool);
    poolPtr = 0;
  }

  return rnds8Pool.slice(poolPtr, poolPtr += 16);
}
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/stringify.js

/**
 * Convert array of 16 byte values to UUID string format of the form:
 * XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX
 */

const byteToHex = [];

for (let i = 0; i < 256; ++i) {
  byteToHex.push((i + 0x100).toString(16).slice(1));
}

function unsafeStringify(arr, offset = 0) {
  // Note: Be careful editing this code!  It's been tuned for performance
  // and works in ways you may not expect. See https://github.com/uuidjs/uuid/pull/434
  return byteToHex[arr[offset + 0]] + byteToHex[arr[offset + 1]] + byteToHex[arr[offset + 2]] + byteToHex[arr[offset + 3]] + '-' + byteToHex[arr[offset + 4]] + byteToHex[arr[offset + 5]] + '-' + byteToHex[arr[offset + 6]] + byteToHex[arr[offset + 7]] + '-' + byteToHex[arr[offset + 8]] + byteToHex[arr[offset + 9]] + '-' + byteToHex[arr[offset + 10]] + byteToHex[arr[offset + 11]] + byteToHex[arr[offset + 12]] + byteToHex[arr[offset + 13]] + byteToHex[arr[offset + 14]] + byteToHex[arr[offset + 15]];
}

function stringify(arr, offset = 0) {
  const uuid = unsafeStringify(arr, offset); // Consistency check for valid UUID.  If this throws, it's likely due to one
  // of the following:
  // - One or more input array values don't map to a hex octet (leading to
  // "undefined" in the uuid)
  // - Invalid input values for the RFC `version` or `variant` fields

  if (!validate(uuid)) {
    throw TypeError('Stringified UUID is invalid');
  }

  return uuid;
}

/* harmony default export */ const esm_node_stringify = ((/* unused pure expression or super */ null && (stringify)));
;// CONCATENATED MODULE: ./node_modules/uuid/dist/esm-node/v4.js




function v4(options, buf, offset) {
  if (esm_node_native.randomUUID && !buf && !options) {
    return esm_node_native.randomUUID();
  }

  options = options || {};
  const rnds = options.random || (options.rng || rng)(); // Per 4.4, set bits for version and `clock_seq_hi_and_reserved`

  rnds[6] = rnds[6] & 0x0f | 0x40;
  rnds[8] = rnds[8] & 0x3f | 0x80; // Copy bytes to buffer, if provided

  if (buf) {
    offset = offset || 0;

    for (let i = 0; i < 16; ++i) {
      buf[offset + i] = rnds[i];
    }

    return buf;
  }

  return unsafeStringify(rnds);
}

/* harmony default export */ const esm_node_v4 = (v4);

/***/ }),

/***/ 181:
/***/ ((module) => {

"use strict";
module.exports = require("buffer");

/***/ }),

/***/ 6982:
/***/ ((module) => {

"use strict";
module.exports = require("crypto");

/***/ }),

/***/ 9896:
/***/ ((module) => {

"use strict";
module.exports = require("fs");

/***/ }),

/***/ 8611:
/***/ ((module) => {

"use strict";
module.exports = require("http");

/***/ }),

/***/ 5692:
/***/ ((module) => {

"use strict";
module.exports = require("https");

/***/ }),

/***/ 857:
/***/ ((module) => {

"use strict";
module.exports = require("os");

/***/ }),

/***/ 6928:
/***/ ((module) => {

"use strict";
module.exports = require("path");

/***/ }),

/***/ 2203:
/***/ ((module) => {

"use strict";
module.exports = require("stream");

/***/ }),

/***/ 7016:
/***/ ((module) => {

"use strict";
module.exports = require("url");

/***/ }),

/***/ 9023:
/***/ ((module) => {

"use strict";
module.exports = require("util");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__(3931);
/******/ 	module.exports = __webpack_exports__;
/******/ 	
/******/ })()
;