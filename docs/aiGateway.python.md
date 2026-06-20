# `aiGateway` Submodule <a name="`aiGateway` Submodule" id="@cdktn/provider-cloudflare.aiGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiGateway <a name="AiGateway" id="@cdktn/provider-cloudflare.aiGateway.AiGateway"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway cloudflare_ai_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGateway(
  scope: Construct,
  id: str,
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  cache_invalidate_on_update: bool | IResolvable,
  cache_ttl: typing.Union[int, float],
  collect_logs: bool | IResolvable,
  id: str,
  rate_limiting_interval: typing.Union[int, float],
  rate_limiting_limit: typing.Union[int, float],
  authentication: bool | IResolvable = None,
  dlp: AiGatewayDlp = None,
  guardrails: AiGatewayGuardrails = None,
  log_management: typing.Union[int, float] = None,
  log_management_strategy: str = None,
  logpush: bool | IResolvable = None,
  logpush_public_key: str = None,
  otel: IResolvable | typing.List[AiGatewayOtel] = None,
  rate_limiting_technique: str = None,
  retry_backoff: str = None,
  retry_delay: typing.Union[int, float] = None,
  retry_max_attempts: typing.Union[int, float] = None,
  spend_limits: AiGatewaySpendLimits = None,
  store_id: str = None,
  stripe: AiGatewayStripe = None,
  workers_ai_billing_mode: str = None,
  zdr: bool | IResolvable = None
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#account_id AiGateway#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.cacheInvalidateOnUpdate">cache_invalidate_on_update</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#cache_invalidate_on_update AiGateway#cache_invalidate_on_update}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.cacheTtl">cache_ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#cache_ttl AiGateway#cache_ttl}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.collectLogs">collect_logs</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#collect_logs AiGateway#collect_logs}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.id">id</a></code> | <code>str</code> | gateway id. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.rateLimitingInterval">rate_limiting_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#rate_limiting_interval AiGateway#rate_limiting_interval}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.rateLimitingLimit">rate_limiting_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#rate_limiting_limit AiGateway#rate_limiting_limit}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.authentication">authentication</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#authentication AiGateway#authentication}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.dlp">dlp</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp">AiGatewayDlp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#dlp AiGateway#dlp}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.guardrails">guardrails</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails">AiGatewayGuardrails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#guardrails AiGateway#guardrails}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.logManagement">log_management</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#log_management AiGateway#log_management}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.logManagementStrategy">log_management_strategy</a></code> | <code>str</code> | Available values: "STOP_INSERTING", "DELETE_OLDEST". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.logpush">logpush</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#logpush AiGateway#logpush}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.logpushPublicKey">logpush_public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#logpush_public_key AiGateway#logpush_public_key}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.otel">otel</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#otel AiGateway#otel}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.rateLimitingTechnique">rate_limiting_technique</a></code> | <code>str</code> | Available values: "fixed", "sliding". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.retryBackoff">retry_backoff</a></code> | <code>str</code> | Backoff strategy for retry delays Available values: "constant", "linear", "exponential". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.retryDelay">retry_delay</a></code> | <code>typing.Union[int, float]</code> | Delay between retry attempts in milliseconds (0-5000). |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.retryMaxAttempts">retry_max_attempts</a></code> | <code>typing.Union[int, float]</code> | Maximum number of retry attempts for failed requests (1-5). |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.spendLimits">spend_limits</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits">AiGatewaySpendLimits</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#spend_limits AiGateway#spend_limits}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.storeId">store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#store_id AiGateway#store_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.stripe">stripe</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe">AiGatewayStripe</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#stripe AiGateway#stripe}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.workersAiBillingMode">workers_ai_billing_mode</a></code> | <code>str</code> | Controls how Workers AI inference calls routed through this gateway are billed. Only 'postpaid' is currently supported. Available values: "postpaid". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.zdr">zdr</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#zdr AiGateway#zdr}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.id"></a>

- *Type:* str

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.connection"></a>

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.count"></a>

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.dependsOn"></a>

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.forEach"></a>

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.lifecycle"></a>

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.provisioners"></a>

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.accountId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#account_id AiGateway#account_id}.

---

##### `cache_invalidate_on_update`<sup>Required</sup> <a name="cache_invalidate_on_update" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.cacheInvalidateOnUpdate"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#cache_invalidate_on_update AiGateway#cache_invalidate_on_update}.

---

##### `cache_ttl`<sup>Required</sup> <a name="cache_ttl" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.cacheTtl"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#cache_ttl AiGateway#cache_ttl}.

---

##### `collect_logs`<sup>Required</sup> <a name="collect_logs" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.collectLogs"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#collect_logs AiGateway#collect_logs}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.id"></a>

- *Type:* str

gateway id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#id AiGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rate_limiting_interval`<sup>Required</sup> <a name="rate_limiting_interval" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.rateLimitingInterval"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#rate_limiting_interval AiGateway#rate_limiting_interval}.

---

##### `rate_limiting_limit`<sup>Required</sup> <a name="rate_limiting_limit" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.rateLimitingLimit"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#rate_limiting_limit AiGateway#rate_limiting_limit}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.authentication"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#authentication AiGateway#authentication}.

---

##### `dlp`<sup>Optional</sup> <a name="dlp" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.dlp"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp">AiGatewayDlp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#dlp AiGateway#dlp}.

---

##### `guardrails`<sup>Optional</sup> <a name="guardrails" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.guardrails"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails">AiGatewayGuardrails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#guardrails AiGateway#guardrails}.

---

##### `log_management`<sup>Optional</sup> <a name="log_management" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.logManagement"></a>

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#log_management AiGateway#log_management}.

---

##### `log_management_strategy`<sup>Optional</sup> <a name="log_management_strategy" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.logManagementStrategy"></a>

- *Type:* str

Available values: "STOP_INSERTING", "DELETE_OLDEST".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#log_management_strategy AiGateway#log_management_strategy}

---

##### `logpush`<sup>Optional</sup> <a name="logpush" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.logpush"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#logpush AiGateway#logpush}.

---

##### `logpush_public_key`<sup>Optional</sup> <a name="logpush_public_key" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.logpushPublicKey"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#logpush_public_key AiGateway#logpush_public_key}.

---

##### `otel`<sup>Optional</sup> <a name="otel" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.otel"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#otel AiGateway#otel}.

---

##### `rate_limiting_technique`<sup>Optional</sup> <a name="rate_limiting_technique" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.rateLimitingTechnique"></a>

- *Type:* str

Available values: "fixed", "sliding".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#rate_limiting_technique AiGateway#rate_limiting_technique}

---

##### `retry_backoff`<sup>Optional</sup> <a name="retry_backoff" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.retryBackoff"></a>

- *Type:* str

Backoff strategy for retry delays Available values: "constant", "linear", "exponential".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#retry_backoff AiGateway#retry_backoff}

---

##### `retry_delay`<sup>Optional</sup> <a name="retry_delay" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.retryDelay"></a>

- *Type:* typing.Union[int, float]

Delay between retry attempts in milliseconds (0-5000).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#retry_delay AiGateway#retry_delay}

---

##### `retry_max_attempts`<sup>Optional</sup> <a name="retry_max_attempts" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.retryMaxAttempts"></a>

- *Type:* typing.Union[int, float]

Maximum number of retry attempts for failed requests (1-5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#retry_max_attempts AiGateway#retry_max_attempts}

---

##### `spend_limits`<sup>Optional</sup> <a name="spend_limits" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.spendLimits"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits">AiGatewaySpendLimits</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#spend_limits AiGateway#spend_limits}.

---

##### `store_id`<sup>Optional</sup> <a name="store_id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.storeId"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#store_id AiGateway#store_id}.

---

##### `stripe`<sup>Optional</sup> <a name="stripe" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.stripe"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe">AiGatewayStripe</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#stripe AiGateway#stripe}.

---

##### `workers_ai_billing_mode`<sup>Optional</sup> <a name="workers_ai_billing_mode" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.workersAiBillingMode"></a>

- *Type:* str

Controls how Workers AI inference calls routed through this gateway are billed. Only 'postpaid' is currently supported. Available values: "postpaid".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#workers_ai_billing_mode AiGateway#workers_ai_billing_mode}

---

##### `zdr`<sup>Optional</sup> <a name="zdr" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.zdr"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#zdr AiGateway#zdr}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.toString">to_string</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.addOverride">add_override</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.overrideLogicalId">override_logical_id</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetOverrideLogicalId">reset_override_logical_id</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.toHclTerraform">to_hcl_terraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.toMetadata">to_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.toTerraform">to_terraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.addMoveTarget">add_move_target</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.hasResourceMove">has_resource_move</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.importFrom">import_from</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.moveFromId">move_from_id</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.moveTo">move_to</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.moveToId">move_to_id</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.putDlp">put_dlp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.putGuardrails">put_guardrails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.putOtel">put_otel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.putSpendLimits">put_spend_limits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.putStripe">put_stripe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetAuthentication">reset_authentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetDlp">reset_dlp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetGuardrails">reset_guardrails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogManagement">reset_log_management</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogManagementStrategy">reset_log_management_strategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogpush">reset_logpush</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogpushPublicKey">reset_logpush_public_key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetOtel">reset_otel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRateLimitingTechnique">reset_rate_limiting_technique</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRetryBackoff">reset_retry_backoff</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRetryDelay">reset_retry_delay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRetryMaxAttempts">reset_retry_max_attempts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetSpendLimits">reset_spend_limits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetStoreId">reset_store_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetStripe">reset_stripe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetWorkersAiBillingMode">reset_workers_ai_billing_mode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetZdr">reset_zdr</a></code> | *No description.* |

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.toString"></a>

```python
def to_string() -> str
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.with"></a>

```python
def with(
  mixins: *IMixin
) -> IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.with.parameter.mixins"></a>

- *Type:* *constructs.IMixin

The mixins to apply.

---

##### `add_override` <a name="add_override" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.addOverride"></a>

```python
def add_override(
  path: str,
  value: typing.Any
) -> None
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.addOverride.parameter.path"></a>

- *Type:* str

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.addOverride.parameter.value"></a>

- *Type:* typing.Any

---

##### `override_logical_id` <a name="override_logical_id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.overrideLogicalId"></a>

```python
def override_logical_id(
  new_logical_id: str
) -> None
```

Overrides the auto-generated logical ID with a specific ID.

###### `new_logical_id`<sup>Required</sup> <a name="new_logical_id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* str

The new logical ID to use for this stack element.

---

##### `reset_override_logical_id` <a name="reset_override_logical_id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetOverrideLogicalId"></a>

```python
def reset_override_logical_id() -> None
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `to_hcl_terraform` <a name="to_hcl_terraform" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.toHclTerraform"></a>

```python
def to_hcl_terraform() -> typing.Any
```

##### `to_metadata` <a name="to_metadata" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.toMetadata"></a>

```python
def to_metadata() -> typing.Any
```

##### `to_terraform` <a name="to_terraform" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.toTerraform"></a>

```python
def to_terraform() -> typing.Any
```

Adds this resource to the terraform JSON output.

##### `add_move_target` <a name="add_move_target" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.addMoveTarget"></a>

```python
def add_move_target(
  move_target: str
) -> None
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* str

The string move target that will correspond to this resource.

---

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `has_resource_move` <a name="has_resource_move" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.hasResourceMove"></a>

```python
def has_resource_move() -> TerraformResourceMoveByTarget | TerraformResourceMoveById
```

##### `import_from` <a name="import_from" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.importFrom"></a>

```python
def import_from(
  id: str,
  provider: TerraformProvider = None
) -> None
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.importFrom.parameter.id"></a>

- *Type:* str

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.importFrom.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `move_from_id` <a name="move_from_id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.moveFromId"></a>

```python
def move_from_id(
  id: str
) -> None
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.moveFromId.parameter.id"></a>

- *Type:* str

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `move_to` <a name="move_to" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.moveTo"></a>

```python
def move_to(
  move_target: str,
  index: str | typing.Union[int, float] = None
) -> None
```

Moves this resource to the target resource given by moveTarget.

###### `move_target`<sup>Required</sup> <a name="move_target" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.moveTo.parameter.moveTarget"></a>

- *Type:* str

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.moveTo.parameter.index"></a>

- *Type:* str | typing.Union[int, float]

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `move_to_id` <a name="move_to_id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.moveToId"></a>

```python
def move_to_id(
  id: str
) -> None
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.moveToId.parameter.id"></a>

- *Type:* str

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `put_dlp` <a name="put_dlp" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putDlp"></a>

```python
def put_dlp(
  enabled: bool | IResolvable,
  action: str = None,
  policies: IResolvable | typing.List[AiGatewayDlpPolicies] = None,
  profiles: typing.List[str] = None
) -> None
```

###### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putDlp.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#enabled AiGateway#enabled}.

---

###### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putDlp.parameter.action"></a>

- *Type:* str

Available values: "BLOCK", "FLAG".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#action AiGateway#action}

---

###### `policies`<sup>Optional</sup> <a name="policies" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putDlp.parameter.policies"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies">AiGatewayDlpPolicies</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#policies AiGateway#policies}.

---

###### `profiles`<sup>Optional</sup> <a name="profiles" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putDlp.parameter.profiles"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#profiles AiGateway#profiles}.

---

##### `put_guardrails` <a name="put_guardrails" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putGuardrails"></a>

```python
def put_guardrails(
  prompt: AiGatewayGuardrailsPrompt,
  response: AiGatewayGuardrailsResponse
) -> None
```

###### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putGuardrails.parameter.prompt"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt">AiGatewayGuardrailsPrompt</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#prompt AiGateway#prompt}.

---

###### `response`<sup>Required</sup> <a name="response" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putGuardrails.parameter.response"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse">AiGatewayGuardrailsResponse</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#response AiGateway#response}.

---

##### `put_otel` <a name="put_otel" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putOtel"></a>

```python
def put_otel(
  value: IResolvable | typing.List[AiGatewayOtel]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putOtel.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a>]

---

##### `put_spend_limits` <a name="put_spend_limits" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putSpendLimits"></a>

```python
def put_spend_limits(
  enabled: bool | IResolvable = None,
  rules: IResolvable | typing.List[AiGatewaySpendLimitsRules] = None
) -> None
```

###### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putSpendLimits.parameter.enabled"></a>

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#enabled AiGateway#enabled}.

---

###### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putSpendLimits.parameter.rules"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules">AiGatewaySpendLimitsRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#rules AiGateway#rules}.

---

##### `put_stripe` <a name="put_stripe" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putStripe"></a>

```python
def put_stripe(
  authorization: str,
  usage_events: IResolvable | typing.List[AiGatewayStripeUsageEvents]
) -> None
```

###### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putStripe.parameter.authorization"></a>

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#authorization AiGateway#authorization}.

---

###### `usage_events`<sup>Required</sup> <a name="usage_events" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putStripe.parameter.usageEvents"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents">AiGatewayStripeUsageEvents</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#usage_events AiGateway#usage_events}.

---

##### `reset_authentication` <a name="reset_authentication" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetAuthentication"></a>

```python
def reset_authentication() -> None
```

##### `reset_dlp` <a name="reset_dlp" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetDlp"></a>

```python
def reset_dlp() -> None
```

##### `reset_guardrails` <a name="reset_guardrails" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetGuardrails"></a>

```python
def reset_guardrails() -> None
```

##### `reset_log_management` <a name="reset_log_management" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogManagement"></a>

```python
def reset_log_management() -> None
```

##### `reset_log_management_strategy` <a name="reset_log_management_strategy" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogManagementStrategy"></a>

```python
def reset_log_management_strategy() -> None
```

##### `reset_logpush` <a name="reset_logpush" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogpush"></a>

```python
def reset_logpush() -> None
```

##### `reset_logpush_public_key` <a name="reset_logpush_public_key" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogpushPublicKey"></a>

```python
def reset_logpush_public_key() -> None
```

##### `reset_otel` <a name="reset_otel" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetOtel"></a>

```python
def reset_otel() -> None
```

##### `reset_rate_limiting_technique` <a name="reset_rate_limiting_technique" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRateLimitingTechnique"></a>

```python
def reset_rate_limiting_technique() -> None
```

##### `reset_retry_backoff` <a name="reset_retry_backoff" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRetryBackoff"></a>

```python
def reset_retry_backoff() -> None
```

##### `reset_retry_delay` <a name="reset_retry_delay" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRetryDelay"></a>

```python
def reset_retry_delay() -> None
```

##### `reset_retry_max_attempts` <a name="reset_retry_max_attempts" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRetryMaxAttempts"></a>

```python
def reset_retry_max_attempts() -> None
```

##### `reset_spend_limits` <a name="reset_spend_limits" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetSpendLimits"></a>

```python
def reset_spend_limits() -> None
```

##### `reset_store_id` <a name="reset_store_id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetStoreId"></a>

```python
def reset_store_id() -> None
```

##### `reset_stripe` <a name="reset_stripe" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetStripe"></a>

```python
def reset_stripe() -> None
```

##### `reset_workers_ai_billing_mode` <a name="reset_workers_ai_billing_mode" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetWorkersAiBillingMode"></a>

```python
def reset_workers_ai_billing_mode() -> None
```

##### `reset_zdr` <a name="reset_zdr" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetZdr"></a>

```python
def reset_zdr() -> None
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.isConstruct">is_construct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.isTerraformElement">is_terraform_element</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.isTerraformResource">is_terraform_resource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.generateConfigForImport">generate_config_for_import</a></code> | Generates CDKTN code for importing a AiGateway resource upon running "cdktn plan <stack-name>". |

---

##### `is_construct` <a name="is_construct" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.isConstruct"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGateway.is_construct(
  x: typing.Any
)
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.isConstruct.parameter.x"></a>

- *Type:* typing.Any

Any object.

---

##### `is_terraform_element` <a name="is_terraform_element" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.isTerraformElement"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGateway.is_terraform_element(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.isTerraformElement.parameter.x"></a>

- *Type:* typing.Any

---

##### `is_terraform_resource` <a name="is_terraform_resource" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.isTerraformResource"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGateway.is_terraform_resource(
  x: typing.Any
)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.isTerraformResource.parameter.x"></a>

- *Type:* typing.Any

---

##### `generate_config_for_import` <a name="generate_config_for_import" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.generateConfigForImport"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGateway.generate_config_for_import(
  scope: Construct,
  import_to_id: str,
  import_from_id: str,
  provider: TerraformProvider = None
)
```

Generates CDKTN code for importing a AiGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* constructs.Construct

The scope in which to define this construct.

---

###### `import_to_id`<sup>Required</sup> <a name="import_to_id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* str

The construct id used in the generated config for the AiGateway to import.

---

###### `import_from_id`<sup>Required</sup> <a name="import_from_id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* str

The id of the existing AiGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* cdktn.TerraformProvider

? Optional instance of the provider where the AiGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cdktfStack">cdktf_stack</a></code> | <code>cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.friendlyUniqueId">friendly_unique_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.terraformMetaArguments">terraform_meta_arguments</a></code> | <code>typing.Mapping[typing.Any]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.terraformResourceType">terraform_resource_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.terraformGeneratorMetadata">terraform_generator_metadata</a></code> | <code>cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.dependsOn">depends_on</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.createdAt">created_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.dlp">dlp</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference">AiGatewayDlpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.guardrails">guardrails</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference">AiGatewayGuardrailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.isDefault">is_default</a></code> | <code>cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.modifiedAt">modified_at</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.otel">otel</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList">AiGatewayOtelList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.spendLimits">spend_limits</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference">AiGatewaySpendLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.stripe">stripe</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference">AiGatewayStripeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.accountIdInput">account_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.authenticationInput">authentication_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheInvalidateOnUpdateInput">cache_invalidate_on_update_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheTtlInput">cache_ttl_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.collectLogsInput">collect_logs_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.dlpInput">dlp_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp">AiGatewayDlp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.guardrailsInput">guardrails_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails">AiGatewayGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagementInput">log_management_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagementStrategyInput">log_management_strategy_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpushInput">logpush_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpushPublicKeyInput">logpush_public_key_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.otelInput">otel_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingIntervalInput">rate_limiting_interval_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingLimitInput">rate_limiting_limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingTechniqueInput">rate_limiting_technique_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryBackoffInput">retry_backoff_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryDelayInput">retry_delay_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryMaxAttemptsInput">retry_max_attempts_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.spendLimitsInput">spend_limits_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits">AiGatewaySpendLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.storeIdInput">store_id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.stripeInput">stripe_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe">AiGatewayStripe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.workersAiBillingModeInput">workers_ai_billing_mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.zdrInput">zdr_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.accountId">account_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.authentication">authentication</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheInvalidateOnUpdate">cache_invalidate_on_update</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheTtl">cache_ttl</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.collectLogs">collect_logs</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagement">log_management</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagementStrategy">log_management_strategy</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpush">logpush</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpushPublicKey">logpush_public_key</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingInterval">rate_limiting_interval</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingLimit">rate_limiting_limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingTechnique">rate_limiting_technique</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryBackoff">retry_backoff</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryDelay">retry_delay</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryMaxAttempts">retry_max_attempts</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.storeId">store_id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.workersAiBillingMode">workers_ai_billing_mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.zdr">zdr</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.node"></a>

```python
node: Node
```

- *Type:* constructs.Node

The tree node.

---

##### `cdktf_stack`<sup>Required</sup> <a name="cdktf_stack" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cdktfStack"></a>

```python
cdktf_stack: TerraformStack
```

- *Type:* cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `friendly_unique_id`<sup>Required</sup> <a name="friendly_unique_id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.friendlyUniqueId"></a>

```python
friendly_unique_id: str
```

- *Type:* str

---

##### `terraform_meta_arguments`<sup>Required</sup> <a name="terraform_meta_arguments" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.terraformMetaArguments"></a>

```python
terraform_meta_arguments: typing.Mapping[typing.Any]
```

- *Type:* typing.Mapping[typing.Any]

---

##### `terraform_resource_type`<sup>Required</sup> <a name="terraform_resource_type" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.terraformResourceType"></a>

```python
terraform_resource_type: str
```

- *Type:* str

---

##### `terraform_generator_metadata`<sup>Optional</sup> <a name="terraform_generator_metadata" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.terraformGeneratorMetadata"></a>

```python
terraform_generator_metadata: TerraformProviderGeneratorMetadata
```

- *Type:* cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.dependsOn"></a>

```python
depends_on: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `created_at`<sup>Required</sup> <a name="created_at" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.createdAt"></a>

```python
created_at: str
```

- *Type:* str

---

##### `dlp`<sup>Required</sup> <a name="dlp" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.dlp"></a>

```python
dlp: AiGatewayDlpOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference">AiGatewayDlpOutputReference</a>

---

##### `guardrails`<sup>Required</sup> <a name="guardrails" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.guardrails"></a>

```python
guardrails: AiGatewayGuardrailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference">AiGatewayGuardrailsOutputReference</a>

---

##### `is_default`<sup>Required</sup> <a name="is_default" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.isDefault"></a>

```python
is_default: IResolvable
```

- *Type:* cdktn.IResolvable

---

##### `modified_at`<sup>Required</sup> <a name="modified_at" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.modifiedAt"></a>

```python
modified_at: str
```

- *Type:* str

---

##### `otel`<sup>Required</sup> <a name="otel" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.otel"></a>

```python
otel: AiGatewayOtelList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList">AiGatewayOtelList</a>

---

##### `spend_limits`<sup>Required</sup> <a name="spend_limits" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.spendLimits"></a>

```python
spend_limits: AiGatewaySpendLimitsOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference">AiGatewaySpendLimitsOutputReference</a>

---

##### `stripe`<sup>Required</sup> <a name="stripe" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.stripe"></a>

```python
stripe: AiGatewayStripeOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference">AiGatewayStripeOutputReference</a>

---

##### `account_id_input`<sup>Optional</sup> <a name="account_id_input" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.accountIdInput"></a>

```python
account_id_input: str
```

- *Type:* str

---

##### `authentication_input`<sup>Optional</sup> <a name="authentication_input" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.authenticationInput"></a>

```python
authentication_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cache_invalidate_on_update_input`<sup>Optional</sup> <a name="cache_invalidate_on_update_input" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheInvalidateOnUpdateInput"></a>

```python
cache_invalidate_on_update_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cache_ttl_input`<sup>Optional</sup> <a name="cache_ttl_input" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheTtlInput"></a>

```python
cache_ttl_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `collect_logs_input`<sup>Optional</sup> <a name="collect_logs_input" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.collectLogsInput"></a>

```python
collect_logs_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `dlp_input`<sup>Optional</sup> <a name="dlp_input" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.dlpInput"></a>

```python
dlp_input: IResolvable | AiGatewayDlp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp">AiGatewayDlp</a>

---

##### `guardrails_input`<sup>Optional</sup> <a name="guardrails_input" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.guardrailsInput"></a>

```python
guardrails_input: IResolvable | AiGatewayGuardrails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails">AiGatewayGuardrails</a>

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `log_management_input`<sup>Optional</sup> <a name="log_management_input" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagementInput"></a>

```python
log_management_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `log_management_strategy_input`<sup>Optional</sup> <a name="log_management_strategy_input" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagementStrategyInput"></a>

```python
log_management_strategy_input: str
```

- *Type:* str

---

##### `logpush_input`<sup>Optional</sup> <a name="logpush_input" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpushInput"></a>

```python
logpush_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `logpush_public_key_input`<sup>Optional</sup> <a name="logpush_public_key_input" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpushPublicKeyInput"></a>

```python
logpush_public_key_input: str
```

- *Type:* str

---

##### `otel_input`<sup>Optional</sup> <a name="otel_input" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.otelInput"></a>

```python
otel_input: IResolvable | typing.List[AiGatewayOtel]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a>]

---

##### `rate_limiting_interval_input`<sup>Optional</sup> <a name="rate_limiting_interval_input" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingIntervalInput"></a>

```python
rate_limiting_interval_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_limiting_limit_input`<sup>Optional</sup> <a name="rate_limiting_limit_input" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingLimitInput"></a>

```python
rate_limiting_limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_limiting_technique_input`<sup>Optional</sup> <a name="rate_limiting_technique_input" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingTechniqueInput"></a>

```python
rate_limiting_technique_input: str
```

- *Type:* str

---

##### `retry_backoff_input`<sup>Optional</sup> <a name="retry_backoff_input" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryBackoffInput"></a>

```python
retry_backoff_input: str
```

- *Type:* str

---

##### `retry_delay_input`<sup>Optional</sup> <a name="retry_delay_input" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryDelayInput"></a>

```python
retry_delay_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_max_attempts_input`<sup>Optional</sup> <a name="retry_max_attempts_input" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryMaxAttemptsInput"></a>

```python
retry_max_attempts_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `spend_limits_input`<sup>Optional</sup> <a name="spend_limits_input" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.spendLimitsInput"></a>

```python
spend_limits_input: IResolvable | AiGatewaySpendLimits
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits">AiGatewaySpendLimits</a>

---

##### `store_id_input`<sup>Optional</sup> <a name="store_id_input" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.storeIdInput"></a>

```python
store_id_input: str
```

- *Type:* str

---

##### `stripe_input`<sup>Optional</sup> <a name="stripe_input" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.stripeInput"></a>

```python
stripe_input: IResolvable | AiGatewayStripe
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe">AiGatewayStripe</a>

---

##### `workers_ai_billing_mode_input`<sup>Optional</sup> <a name="workers_ai_billing_mode_input" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.workersAiBillingModeInput"></a>

```python
workers_ai_billing_mode_input: str
```

- *Type:* str

---

##### `zdr_input`<sup>Optional</sup> <a name="zdr_input" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.zdrInput"></a>

```python
zdr_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.authentication"></a>

```python
authentication: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cache_invalidate_on_update`<sup>Required</sup> <a name="cache_invalidate_on_update" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheInvalidateOnUpdate"></a>

```python
cache_invalidate_on_update: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `cache_ttl`<sup>Required</sup> <a name="cache_ttl" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheTtl"></a>

```python
cache_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `collect_logs`<sup>Required</sup> <a name="collect_logs" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.collectLogs"></a>

```python
collect_logs: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `log_management`<sup>Required</sup> <a name="log_management" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagement"></a>

```python
log_management: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `log_management_strategy`<sup>Required</sup> <a name="log_management_strategy" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagementStrategy"></a>

```python
log_management_strategy: str
```

- *Type:* str

---

##### `logpush`<sup>Required</sup> <a name="logpush" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpush"></a>

```python
logpush: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `logpush_public_key`<sup>Required</sup> <a name="logpush_public_key" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpushPublicKey"></a>

```python
logpush_public_key: str
```

- *Type:* str

---

##### `rate_limiting_interval`<sup>Required</sup> <a name="rate_limiting_interval" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingInterval"></a>

```python
rate_limiting_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_limiting_limit`<sup>Required</sup> <a name="rate_limiting_limit" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingLimit"></a>

```python
rate_limiting_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `rate_limiting_technique`<sup>Required</sup> <a name="rate_limiting_technique" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingTechnique"></a>

```python
rate_limiting_technique: str
```

- *Type:* str

---

##### `retry_backoff`<sup>Required</sup> <a name="retry_backoff" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryBackoff"></a>

```python
retry_backoff: str
```

- *Type:* str

---

##### `retry_delay`<sup>Required</sup> <a name="retry_delay" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryDelay"></a>

```python
retry_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `retry_max_attempts`<sup>Required</sup> <a name="retry_max_attempts" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryMaxAttempts"></a>

```python
retry_max_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `store_id`<sup>Required</sup> <a name="store_id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.storeId"></a>

```python
store_id: str
```

- *Type:* str

---

##### `workers_ai_billing_mode`<sup>Required</sup> <a name="workers_ai_billing_mode" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.workersAiBillingMode"></a>

```python
workers_ai_billing_mode: str
```

- *Type:* str

---

##### `zdr`<sup>Required</sup> <a name="zdr" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.zdr"></a>

```python
zdr: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.tfResourceType">tfResourceType</a></code> | <code>str</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.tfResourceType"></a>

```python
tfResourceType: str
```

- *Type:* str

---

## Structs <a name="Structs" id="Structs"></a>

### AiGatewayConfig <a name="AiGatewayConfig" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewayConfig(
  connection: SSHProvisionerConnection | WinrmProvisionerConnection = None,
  count: typing.Union[int, float] | TerraformCount = None,
  depends_on: typing.List[ITerraformDependable] = None,
  for_each: ITerraformIterator = None,
  lifecycle: TerraformResourceLifecycle = None,
  provider: TerraformProvider = None,
  provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner] = None,
  account_id: str,
  cache_invalidate_on_update: bool | IResolvable,
  cache_ttl: typing.Union[int, float],
  collect_logs: bool | IResolvable,
  id: str,
  rate_limiting_interval: typing.Union[int, float],
  rate_limiting_limit: typing.Union[int, float],
  authentication: bool | IResolvable = None,
  dlp: AiGatewayDlp = None,
  guardrails: AiGatewayGuardrails = None,
  log_management: typing.Union[int, float] = None,
  log_management_strategy: str = None,
  logpush: bool | IResolvable = None,
  logpush_public_key: str = None,
  otel: IResolvable | typing.List[AiGatewayOtel] = None,
  rate_limiting_technique: str = None,
  retry_backoff: str = None,
  retry_delay: typing.Union[int, float] = None,
  retry_max_attempts: typing.Union[int, float] = None,
  spend_limits: AiGatewaySpendLimits = None,
  store_id: str = None,
  stripe: AiGatewayStripe = None,
  workers_ai_billing_mode: str = None,
  zdr: bool | IResolvable = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.connection">connection</a></code> | <code>cdktn.SSHProvisionerConnection \| cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.count">count</a></code> | <code>typing.Union[int, float] \| cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.dependsOn">depends_on</a></code> | <code>typing.List[cdktn.ITerraformDependable]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.forEach">for_each</a></code> | <code>cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.provider">provider</a></code> | <code>cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.provisioners">provisioners</a></code> | <code>typing.List[cdktn.FileProvisioner \| cdktn.LocalExecProvisioner \| cdktn.RemoteExecProvisioner]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.accountId">account_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#account_id AiGateway#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.cacheInvalidateOnUpdate">cache_invalidate_on_update</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#cache_invalidate_on_update AiGateway#cache_invalidate_on_update}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.cacheTtl">cache_ttl</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#cache_ttl AiGateway#cache_ttl}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.collectLogs">collect_logs</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#collect_logs AiGateway#collect_logs}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.id">id</a></code> | <code>str</code> | gateway id. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.rateLimitingInterval">rate_limiting_interval</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#rate_limiting_interval AiGateway#rate_limiting_interval}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.rateLimitingLimit">rate_limiting_limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#rate_limiting_limit AiGateway#rate_limiting_limit}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.authentication">authentication</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#authentication AiGateway#authentication}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.dlp">dlp</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp">AiGatewayDlp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#dlp AiGateway#dlp}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.guardrails">guardrails</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails">AiGatewayGuardrails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#guardrails AiGateway#guardrails}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logManagement">log_management</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#log_management AiGateway#log_management}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logManagementStrategy">log_management_strategy</a></code> | <code>str</code> | Available values: "STOP_INSERTING", "DELETE_OLDEST". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logpush">logpush</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#logpush AiGateway#logpush}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logpushPublicKey">logpush_public_key</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#logpush_public_key AiGateway#logpush_public_key}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.otel">otel</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#otel AiGateway#otel}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.rateLimitingTechnique">rate_limiting_technique</a></code> | <code>str</code> | Available values: "fixed", "sliding". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.retryBackoff">retry_backoff</a></code> | <code>str</code> | Backoff strategy for retry delays Available values: "constant", "linear", "exponential". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.retryDelay">retry_delay</a></code> | <code>typing.Union[int, float]</code> | Delay between retry attempts in milliseconds (0-5000). |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.retryMaxAttempts">retry_max_attempts</a></code> | <code>typing.Union[int, float]</code> | Maximum number of retry attempts for failed requests (1-5). |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.spendLimits">spend_limits</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits">AiGatewaySpendLimits</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#spend_limits AiGateway#spend_limits}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.storeId">store_id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#store_id AiGateway#store_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.stripe">stripe</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe">AiGatewayStripe</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#stripe AiGateway#stripe}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.workersAiBillingMode">workers_ai_billing_mode</a></code> | <code>str</code> | Controls how Workers AI inference calls routed through this gateway are billed. Only 'postpaid' is currently supported. Available values: "postpaid". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.zdr">zdr</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#zdr AiGateway#zdr}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.connection"></a>

```python
connection: SSHProvisionerConnection | WinrmProvisionerConnection
```

- *Type:* cdktn.SSHProvisionerConnection | cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.count"></a>

```python
count: typing.Union[int, float] | TerraformCount
```

- *Type:* typing.Union[int, float] | cdktn.TerraformCount

---

##### `depends_on`<sup>Optional</sup> <a name="depends_on" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.dependsOn"></a>

```python
depends_on: typing.List[ITerraformDependable]
```

- *Type:* typing.List[cdktn.ITerraformDependable]

---

##### `for_each`<sup>Optional</sup> <a name="for_each" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.forEach"></a>

```python
for_each: ITerraformIterator
```

- *Type:* cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.lifecycle"></a>

```python
lifecycle: TerraformResourceLifecycle
```

- *Type:* cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.provider"></a>

```python
provider: TerraformProvider
```

- *Type:* cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.provisioners"></a>

```python
provisioners: typing.List[FileProvisioner | LocalExecProvisioner | RemoteExecProvisioner]
```

- *Type:* typing.List[cdktn.FileProvisioner | cdktn.LocalExecProvisioner | cdktn.RemoteExecProvisioner]

---

##### `account_id`<sup>Required</sup> <a name="account_id" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.accountId"></a>

```python
account_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#account_id AiGateway#account_id}.

---

##### `cache_invalidate_on_update`<sup>Required</sup> <a name="cache_invalidate_on_update" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.cacheInvalidateOnUpdate"></a>

```python
cache_invalidate_on_update: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#cache_invalidate_on_update AiGateway#cache_invalidate_on_update}.

---

##### `cache_ttl`<sup>Required</sup> <a name="cache_ttl" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.cacheTtl"></a>

```python
cache_ttl: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#cache_ttl AiGateway#cache_ttl}.

---

##### `collect_logs`<sup>Required</sup> <a name="collect_logs" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.collectLogs"></a>

```python
collect_logs: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#collect_logs AiGateway#collect_logs}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.id"></a>

```python
id: str
```

- *Type:* str

gateway id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#id AiGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rate_limiting_interval`<sup>Required</sup> <a name="rate_limiting_interval" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.rateLimitingInterval"></a>

```python
rate_limiting_interval: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#rate_limiting_interval AiGateway#rate_limiting_interval}.

---

##### `rate_limiting_limit`<sup>Required</sup> <a name="rate_limiting_limit" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.rateLimitingLimit"></a>

```python
rate_limiting_limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#rate_limiting_limit AiGateway#rate_limiting_limit}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.authentication"></a>

```python
authentication: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#authentication AiGateway#authentication}.

---

##### `dlp`<sup>Optional</sup> <a name="dlp" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.dlp"></a>

```python
dlp: AiGatewayDlp
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp">AiGatewayDlp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#dlp AiGateway#dlp}.

---

##### `guardrails`<sup>Optional</sup> <a name="guardrails" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.guardrails"></a>

```python
guardrails: AiGatewayGuardrails
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails">AiGatewayGuardrails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#guardrails AiGateway#guardrails}.

---

##### `log_management`<sup>Optional</sup> <a name="log_management" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logManagement"></a>

```python
log_management: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#log_management AiGateway#log_management}.

---

##### `log_management_strategy`<sup>Optional</sup> <a name="log_management_strategy" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logManagementStrategy"></a>

```python
log_management_strategy: str
```

- *Type:* str

Available values: "STOP_INSERTING", "DELETE_OLDEST".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#log_management_strategy AiGateway#log_management_strategy}

---

##### `logpush`<sup>Optional</sup> <a name="logpush" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logpush"></a>

```python
logpush: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#logpush AiGateway#logpush}.

---

##### `logpush_public_key`<sup>Optional</sup> <a name="logpush_public_key" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logpushPublicKey"></a>

```python
logpush_public_key: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#logpush_public_key AiGateway#logpush_public_key}.

---

##### `otel`<sup>Optional</sup> <a name="otel" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.otel"></a>

```python
otel: IResolvable | typing.List[AiGatewayOtel]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#otel AiGateway#otel}.

---

##### `rate_limiting_technique`<sup>Optional</sup> <a name="rate_limiting_technique" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.rateLimitingTechnique"></a>

```python
rate_limiting_technique: str
```

- *Type:* str

Available values: "fixed", "sliding".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#rate_limiting_technique AiGateway#rate_limiting_technique}

---

##### `retry_backoff`<sup>Optional</sup> <a name="retry_backoff" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.retryBackoff"></a>

```python
retry_backoff: str
```

- *Type:* str

Backoff strategy for retry delays Available values: "constant", "linear", "exponential".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#retry_backoff AiGateway#retry_backoff}

---

##### `retry_delay`<sup>Optional</sup> <a name="retry_delay" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.retryDelay"></a>

```python
retry_delay: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Delay between retry attempts in milliseconds (0-5000).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#retry_delay AiGateway#retry_delay}

---

##### `retry_max_attempts`<sup>Optional</sup> <a name="retry_max_attempts" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.retryMaxAttempts"></a>

```python
retry_max_attempts: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Maximum number of retry attempts for failed requests (1-5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#retry_max_attempts AiGateway#retry_max_attempts}

---

##### `spend_limits`<sup>Optional</sup> <a name="spend_limits" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.spendLimits"></a>

```python
spend_limits: AiGatewaySpendLimits
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits">AiGatewaySpendLimits</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#spend_limits AiGateway#spend_limits}.

---

##### `store_id`<sup>Optional</sup> <a name="store_id" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.storeId"></a>

```python
store_id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#store_id AiGateway#store_id}.

---

##### `stripe`<sup>Optional</sup> <a name="stripe" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.stripe"></a>

```python
stripe: AiGatewayStripe
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe">AiGatewayStripe</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#stripe AiGateway#stripe}.

---

##### `workers_ai_billing_mode`<sup>Optional</sup> <a name="workers_ai_billing_mode" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.workersAiBillingMode"></a>

```python
workers_ai_billing_mode: str
```

- *Type:* str

Controls how Workers AI inference calls routed through this gateway are billed. Only 'postpaid' is currently supported. Available values: "postpaid".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#workers_ai_billing_mode AiGateway#workers_ai_billing_mode}

---

##### `zdr`<sup>Optional</sup> <a name="zdr" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.zdr"></a>

```python
zdr: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#zdr AiGateway#zdr}.

---

### AiGatewayDlp <a name="AiGatewayDlp" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewayDlp(
  enabled: bool | IResolvable,
  action: str = None,
  policies: IResolvable | typing.List[AiGatewayDlpPolicies] = None,
  profiles: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#enabled AiGateway#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.action">action</a></code> | <code>str</code> | Available values: "BLOCK", "FLAG". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.policies">policies</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies">AiGatewayDlpPolicies</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#policies AiGateway#policies}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.profiles">profiles</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#profiles AiGateway#profiles}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#enabled AiGateway#enabled}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.action"></a>

```python
action: str
```

- *Type:* str

Available values: "BLOCK", "FLAG".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#action AiGateway#action}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.policies"></a>

```python
policies: IResolvable | typing.List[AiGatewayDlpPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies">AiGatewayDlpPolicies</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#policies AiGateway#policies}.

---

##### `profiles`<sup>Optional</sup> <a name="profiles" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.profiles"></a>

```python
profiles: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#profiles AiGateway#profiles}.

---

### AiGatewayDlpPolicies <a name="AiGatewayDlpPolicies" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewayDlpPolicies(
  action: str,
  check: typing.List[str],
  enabled: bool | IResolvable,
  id: str,
  profiles: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.action">action</a></code> | <code>str</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.check">check</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#check AiGateway#check}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#enabled AiGateway#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#id AiGateway#id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.profiles">profiles</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#profiles AiGateway#profiles}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.action"></a>

```python
action: str
```

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#action AiGateway#action}

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.check"></a>

```python
check: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#check AiGateway#check}.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#enabled AiGateway#enabled}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#id AiGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.profiles"></a>

```python
profiles: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#profiles AiGateway#profiles}.

---

### AiGatewayGuardrails <a name="AiGatewayGuardrails" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewayGuardrails(
  prompt: AiGatewayGuardrailsPrompt,
  response: AiGatewayGuardrailsResponse
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails.property.prompt">prompt</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt">AiGatewayGuardrailsPrompt</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#prompt AiGateway#prompt}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails.property.response">response</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse">AiGatewayGuardrailsResponse</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#response AiGateway#response}. |

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails.property.prompt"></a>

```python
prompt: AiGatewayGuardrailsPrompt
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt">AiGatewayGuardrailsPrompt</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#prompt AiGateway#prompt}.

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails.property.response"></a>

```python
response: AiGatewayGuardrailsResponse
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse">AiGatewayGuardrailsResponse</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#response AiGateway#response}.

---

### AiGatewayGuardrailsPrompt <a name="AiGatewayGuardrailsPrompt" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewayGuardrailsPrompt(
  p1: str = None,
  s1: str = None,
  s10: str = None,
  s11: str = None,
  s12: str = None,
  s13: str = None,
  s2: str = None,
  s3: str = None,
  s4: str = None,
  s5: str = None,
  s6: str = None,
  s7: str = None,
  s8: str = None,
  s9: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.p1">p1</a></code> | <code>str</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s1">s1</a></code> | <code>str</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s10">s10</a></code> | <code>str</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s11">s11</a></code> | <code>str</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s12">s12</a></code> | <code>str</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s13">s13</a></code> | <code>str</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s2">s2</a></code> | <code>str</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s3">s3</a></code> | <code>str</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s4">s4</a></code> | <code>str</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s5">s5</a></code> | <code>str</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s6">s6</a></code> | <code>str</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s7">s7</a></code> | <code>str</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s8">s8</a></code> | <code>str</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s9">s9</a></code> | <code>str</code> | Available values: "FLAG", "BLOCK". |

---

##### `p1`<sup>Optional</sup> <a name="p1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.p1"></a>

```python
p1: str
```

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#p1 AiGateway#p1}

---

##### `s1`<sup>Optional</sup> <a name="s1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s1"></a>

```python
s1: str
```

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s1 AiGateway#s1}

---

##### `s10`<sup>Optional</sup> <a name="s10" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s10"></a>

```python
s10: str
```

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s10 AiGateway#s10}

---

##### `s11`<sup>Optional</sup> <a name="s11" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s11"></a>

```python
s11: str
```

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s11 AiGateway#s11}

---

##### `s12`<sup>Optional</sup> <a name="s12" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s12"></a>

```python
s12: str
```

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s12 AiGateway#s12}

---

##### `s13`<sup>Optional</sup> <a name="s13" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s13"></a>

```python
s13: str
```

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s13 AiGateway#s13}

---

##### `s2`<sup>Optional</sup> <a name="s2" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s2"></a>

```python
s2: str
```

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s2 AiGateway#s2}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s3"></a>

```python
s3: str
```

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s3 AiGateway#s3}

---

##### `s4`<sup>Optional</sup> <a name="s4" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s4"></a>

```python
s4: str
```

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s4 AiGateway#s4}

---

##### `s5`<sup>Optional</sup> <a name="s5" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s5"></a>

```python
s5: str
```

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s5 AiGateway#s5}

---

##### `s6`<sup>Optional</sup> <a name="s6" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s6"></a>

```python
s6: str
```

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s6 AiGateway#s6}

---

##### `s7`<sup>Optional</sup> <a name="s7" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s7"></a>

```python
s7: str
```

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s7 AiGateway#s7}

---

##### `s8`<sup>Optional</sup> <a name="s8" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s8"></a>

```python
s8: str
```

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s8 AiGateway#s8}

---

##### `s9`<sup>Optional</sup> <a name="s9" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s9"></a>

```python
s9: str
```

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s9 AiGateway#s9}

---

### AiGatewayGuardrailsResponse <a name="AiGatewayGuardrailsResponse" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewayGuardrailsResponse(
  p1: str = None,
  s1: str = None,
  s10: str = None,
  s11: str = None,
  s12: str = None,
  s13: str = None,
  s2: str = None,
  s3: str = None,
  s4: str = None,
  s5: str = None,
  s6: str = None,
  s7: str = None,
  s8: str = None,
  s9: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.p1">p1</a></code> | <code>str</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s1">s1</a></code> | <code>str</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s10">s10</a></code> | <code>str</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s11">s11</a></code> | <code>str</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s12">s12</a></code> | <code>str</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s13">s13</a></code> | <code>str</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s2">s2</a></code> | <code>str</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s3">s3</a></code> | <code>str</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s4">s4</a></code> | <code>str</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s5">s5</a></code> | <code>str</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s6">s6</a></code> | <code>str</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s7">s7</a></code> | <code>str</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s8">s8</a></code> | <code>str</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s9">s9</a></code> | <code>str</code> | Available values: "FLAG", "BLOCK". |

---

##### `p1`<sup>Optional</sup> <a name="p1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.p1"></a>

```python
p1: str
```

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#p1 AiGateway#p1}

---

##### `s1`<sup>Optional</sup> <a name="s1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s1"></a>

```python
s1: str
```

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s1 AiGateway#s1}

---

##### `s10`<sup>Optional</sup> <a name="s10" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s10"></a>

```python
s10: str
```

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s10 AiGateway#s10}

---

##### `s11`<sup>Optional</sup> <a name="s11" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s11"></a>

```python
s11: str
```

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s11 AiGateway#s11}

---

##### `s12`<sup>Optional</sup> <a name="s12" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s12"></a>

```python
s12: str
```

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s12 AiGateway#s12}

---

##### `s13`<sup>Optional</sup> <a name="s13" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s13"></a>

```python
s13: str
```

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s13 AiGateway#s13}

---

##### `s2`<sup>Optional</sup> <a name="s2" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s2"></a>

```python
s2: str
```

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s2 AiGateway#s2}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s3"></a>

```python
s3: str
```

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s3 AiGateway#s3}

---

##### `s4`<sup>Optional</sup> <a name="s4" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s4"></a>

```python
s4: str
```

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s4 AiGateway#s4}

---

##### `s5`<sup>Optional</sup> <a name="s5" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s5"></a>

```python
s5: str
```

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s5 AiGateway#s5}

---

##### `s6`<sup>Optional</sup> <a name="s6" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s6"></a>

```python
s6: str
```

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s6 AiGateway#s6}

---

##### `s7`<sup>Optional</sup> <a name="s7" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s7"></a>

```python
s7: str
```

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s7 AiGateway#s7}

---

##### `s8`<sup>Optional</sup> <a name="s8" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s8"></a>

```python
s8: str
```

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s8 AiGateway#s8}

---

##### `s9`<sup>Optional</sup> <a name="s9" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s9"></a>

```python
s9: str
```

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s9 AiGateway#s9}

---

### AiGatewayOtel <a name="AiGatewayOtel" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewayOtel(
  headers: typing.Mapping[str],
  url: str,
  authorization: str = None,
  content_type: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.headers">headers</a></code> | <code>typing.Mapping[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#headers AiGateway#headers}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.url">url</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#url AiGateway#url}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#authorization AiGateway#authorization}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.contentType">content_type</a></code> | <code>str</code> | Available values: "json", "protobuf". |

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.headers"></a>

```python
headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#headers AiGateway#headers}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.url"></a>

```python
url: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#url AiGateway#url}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#authorization AiGateway#authorization}.

---

##### `content_type`<sup>Optional</sup> <a name="content_type" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

Available values: "json", "protobuf".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#content_type AiGateway#content_type}

---

### AiGatewaySpendLimits <a name="AiGatewaySpendLimits" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewaySpendLimits(
  enabled: bool | IResolvable = None,
  rules: IResolvable | typing.List[AiGatewaySpendLimitsRules] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#enabled AiGateway#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits.property.rules">rules</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules">AiGatewaySpendLimitsRules</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#rules AiGateway#rules}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#enabled AiGateway#enabled}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits.property.rules"></a>

```python
rules: IResolvable | typing.List[AiGatewaySpendLimitsRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules">AiGatewaySpendLimitsRules</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#rules AiGateway#rules}.

---

### AiGatewaySpendLimitsRules <a name="AiGatewaySpendLimitsRules" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewaySpendLimitsRules(
  limit: typing.Union[int, float],
  limit_type: str,
  window: typing.Union[int, float],
  ai_gateway_provider: AiGatewaySpendLimitsRulesAiGatewayProvider = None,
  enabled: bool | IResolvable = None,
  id: str = None,
  metadata: IResolvable | typing.Mapping[AiGatewaySpendLimitsRulesMetadata] = None,
  model: AiGatewaySpendLimitsRulesModel = None,
  technique: str = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#limit AiGateway#limit}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.limitType">limit_type</a></code> | <code>str</code> | Available values: "cost". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.window">window</a></code> | <code>typing.Union[int, float]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#window AiGateway#window}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.aiGatewayProvider">ai_gateway_provider</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider">AiGatewaySpendLimitsRulesAiGatewayProvider</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#ai_gateway_provider AiGateway#ai_gateway_provider}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#enabled AiGateway#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.id">id</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#id AiGateway#id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.metadata">metadata</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata">AiGatewaySpendLimitsRulesMetadata</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#metadata AiGateway#metadata}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.model">model</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel">AiGatewaySpendLimitsRulesModel</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#model AiGateway#model}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.technique">technique</a></code> | <code>str</code> | Available values: "fixed", "sliding". |

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#limit AiGateway#limit}.

---

##### `limit_type`<sup>Required</sup> <a name="limit_type" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.limitType"></a>

```python
limit_type: str
```

- *Type:* str

Available values: "cost".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#limit_type AiGateway#limit_type}

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.window"></a>

```python
window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#window AiGateway#window}.

---

##### `ai_gateway_provider`<sup>Optional</sup> <a name="ai_gateway_provider" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.aiGatewayProvider"></a>

```python
ai_gateway_provider: AiGatewaySpendLimitsRulesAiGatewayProvider
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider">AiGatewaySpendLimitsRulesAiGatewayProvider</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#ai_gateway_provider AiGateway#ai_gateway_provider}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#enabled AiGateway#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.id"></a>

```python
id: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#id AiGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.metadata"></a>

```python
metadata: IResolvable | typing.Mapping[AiGatewaySpendLimitsRulesMetadata]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata">AiGatewaySpendLimitsRulesMetadata</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#metadata AiGateway#metadata}.

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.model"></a>

```python
model: AiGatewaySpendLimitsRulesModel
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel">AiGatewaySpendLimitsRulesModel</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#model AiGateway#model}.

---

##### `technique`<sup>Optional</sup> <a name="technique" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.technique"></a>

```python
technique: str
```

- *Type:* str

Available values: "fixed", "sliding".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#technique AiGateway#technique}

---

### AiGatewaySpendLimitsRulesAiGatewayProvider <a name="AiGatewaySpendLimitsRulesAiGatewayProvider" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider(
  mode: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider.property.mode">mode</a></code> | <code>str</code> | Available values: "filter". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#values AiGateway#values}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider.property.mode"></a>

```python
mode: str
```

- *Type:* str

Available values: "filter".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#mode AiGateway#mode}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#values AiGateway#values}.

---

### AiGatewaySpendLimitsRulesMetadata <a name="AiGatewaySpendLimitsRulesMetadata" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewaySpendLimitsRulesMetadata(
  mode: str,
  values: typing.List[str] = None
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata.property.mode">mode</a></code> | <code>str</code> | Available values: "partition", "filter". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#values AiGateway#values}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata.property.mode"></a>

```python
mode: str
```

- *Type:* str

Available values: "partition", "filter".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#mode AiGateway#mode}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#values AiGateway#values}.

---

### AiGatewaySpendLimitsRulesModel <a name="AiGatewaySpendLimitsRulesModel" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewaySpendLimitsRulesModel(
  mode: str,
  values: typing.List[str]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel.property.mode">mode</a></code> | <code>str</code> | Available values: "filter". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel.property.values">values</a></code> | <code>typing.List[str]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#values AiGateway#values}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel.property.mode"></a>

```python
mode: str
```

- *Type:* str

Available values: "filter".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#mode AiGateway#mode}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#values AiGateway#values}.

---

### AiGatewayStripe <a name="AiGatewayStripe" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewayStripe(
  authorization: str,
  usage_events: IResolvable | typing.List[AiGatewayStripeUsageEvents]
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe.property.authorization">authorization</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#authorization AiGateway#authorization}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe.property.usageEvents">usage_events</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents">AiGatewayStripeUsageEvents</a>]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#usage_events AiGateway#usage_events}. |

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#authorization AiGateway#authorization}.

---

##### `usage_events`<sup>Required</sup> <a name="usage_events" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe.property.usageEvents"></a>

```python
usage_events: IResolvable | typing.List[AiGatewayStripeUsageEvents]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents">AiGatewayStripeUsageEvents</a>]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#usage_events AiGateway#usage_events}.

---

### AiGatewayStripeUsageEvents <a name="AiGatewayStripeUsageEvents" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewayStripeUsageEvents(
  payload: str
)
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents.property.payload">payload</a></code> | <code>str</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#payload AiGateway#payload}. |

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents.property.payload"></a>

```python
payload: str
```

- *Type:* str

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#payload AiGateway#payload}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiGatewayDlpOutputReference <a name="AiGatewayDlpOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewayDlpOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.putPolicies">put_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resetAction">reset_action</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resetPolicies">reset_policies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resetProfiles">reset_profiles</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_policies` <a name="put_policies" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.putPolicies"></a>

```python
def put_policies(
  value: IResolvable | typing.List[AiGatewayDlpPolicies]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.putPolicies.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies">AiGatewayDlpPolicies</a>]

---

##### `reset_action` <a name="reset_action" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resetAction"></a>

```python
def reset_action() -> None
```

##### `reset_policies` <a name="reset_policies" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resetPolicies"></a>

```python
def reset_policies() -> None
```

##### `reset_profiles` <a name="reset_profiles" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resetProfiles"></a>

```python
def reset_profiles() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.policies">policies</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList">AiGatewayDlpPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.policiesInput">policies_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies">AiGatewayDlpPolicies</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.profilesInput">profiles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.profiles">profiles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp">AiGatewayDlp</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.policies"></a>

```python
policies: AiGatewayDlpPoliciesList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList">AiGatewayDlpPoliciesList</a>

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `policies_input`<sup>Optional</sup> <a name="policies_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.policiesInput"></a>

```python
policies_input: IResolvable | typing.List[AiGatewayDlpPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies">AiGatewayDlpPolicies</a>]

---

##### `profiles_input`<sup>Optional</sup> <a name="profiles_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.profilesInput"></a>

```python
profiles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.profiles"></a>

```python
profiles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayDlp
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp">AiGatewayDlp</a>

---


### AiGatewayDlpPoliciesList <a name="AiGatewayDlpPoliciesList" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewayDlpPoliciesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AiGatewayDlpPoliciesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies">AiGatewayDlpPolicies</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AiGatewayDlpPolicies]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies">AiGatewayDlpPolicies</a>]

---


### AiGatewayDlpPoliciesOutputReference <a name="AiGatewayDlpPoliciesOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewayDlpPoliciesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.actionInput">action_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.checkInput">check_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.profilesInput">profiles_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.action">action</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.check">check</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.profiles">profiles</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies">AiGatewayDlpPolicies</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `action_input`<sup>Optional</sup> <a name="action_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.actionInput"></a>

```python
action_input: str
```

- *Type:* str

---

##### `check_input`<sup>Optional</sup> <a name="check_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.checkInput"></a>

```python
check_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `profiles_input`<sup>Optional</sup> <a name="profiles_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.profilesInput"></a>

```python
profiles_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.action"></a>

```python
action: str
```

- *Type:* str

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.check"></a>

```python
check: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.profiles"></a>

```python
profiles: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayDlpPolicies
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies">AiGatewayDlpPolicies</a>

---


### AiGatewayGuardrailsOutputReference <a name="AiGatewayGuardrailsOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewayGuardrailsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putPrompt">put_prompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putResponse">put_response</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_prompt` <a name="put_prompt" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putPrompt"></a>

```python
def put_prompt(
  p1: str = None,
  s1: str = None,
  s10: str = None,
  s11: str = None,
  s12: str = None,
  s13: str = None,
  s2: str = None,
  s3: str = None,
  s4: str = None,
  s5: str = None,
  s6: str = None,
  s7: str = None,
  s8: str = None,
  s9: str = None
) -> None
```

###### `p1`<sup>Optional</sup> <a name="p1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putPrompt.parameter.p1"></a>

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#p1 AiGateway#p1}

---

###### `s1`<sup>Optional</sup> <a name="s1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putPrompt.parameter.s1"></a>

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s1 AiGateway#s1}

---

###### `s10`<sup>Optional</sup> <a name="s10" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putPrompt.parameter.s10"></a>

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s10 AiGateway#s10}

---

###### `s11`<sup>Optional</sup> <a name="s11" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putPrompt.parameter.s11"></a>

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s11 AiGateway#s11}

---

###### `s12`<sup>Optional</sup> <a name="s12" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putPrompt.parameter.s12"></a>

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s12 AiGateway#s12}

---

###### `s13`<sup>Optional</sup> <a name="s13" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putPrompt.parameter.s13"></a>

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s13 AiGateway#s13}

---

###### `s2`<sup>Optional</sup> <a name="s2" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putPrompt.parameter.s2"></a>

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s2 AiGateway#s2}

---

###### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putPrompt.parameter.s3"></a>

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s3 AiGateway#s3}

---

###### `s4`<sup>Optional</sup> <a name="s4" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putPrompt.parameter.s4"></a>

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s4 AiGateway#s4}

---

###### `s5`<sup>Optional</sup> <a name="s5" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putPrompt.parameter.s5"></a>

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s5 AiGateway#s5}

---

###### `s6`<sup>Optional</sup> <a name="s6" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putPrompt.parameter.s6"></a>

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s6 AiGateway#s6}

---

###### `s7`<sup>Optional</sup> <a name="s7" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putPrompt.parameter.s7"></a>

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s7 AiGateway#s7}

---

###### `s8`<sup>Optional</sup> <a name="s8" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putPrompt.parameter.s8"></a>

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s8 AiGateway#s8}

---

###### `s9`<sup>Optional</sup> <a name="s9" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putPrompt.parameter.s9"></a>

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s9 AiGateway#s9}

---

##### `put_response` <a name="put_response" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putResponse"></a>

```python
def put_response(
  p1: str = None,
  s1: str = None,
  s10: str = None,
  s11: str = None,
  s12: str = None,
  s13: str = None,
  s2: str = None,
  s3: str = None,
  s4: str = None,
  s5: str = None,
  s6: str = None,
  s7: str = None,
  s8: str = None,
  s9: str = None
) -> None
```

###### `p1`<sup>Optional</sup> <a name="p1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putResponse.parameter.p1"></a>

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#p1 AiGateway#p1}

---

###### `s1`<sup>Optional</sup> <a name="s1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putResponse.parameter.s1"></a>

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s1 AiGateway#s1}

---

###### `s10`<sup>Optional</sup> <a name="s10" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putResponse.parameter.s10"></a>

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s10 AiGateway#s10}

---

###### `s11`<sup>Optional</sup> <a name="s11" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putResponse.parameter.s11"></a>

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s11 AiGateway#s11}

---

###### `s12`<sup>Optional</sup> <a name="s12" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putResponse.parameter.s12"></a>

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s12 AiGateway#s12}

---

###### `s13`<sup>Optional</sup> <a name="s13" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putResponse.parameter.s13"></a>

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s13 AiGateway#s13}

---

###### `s2`<sup>Optional</sup> <a name="s2" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putResponse.parameter.s2"></a>

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s2 AiGateway#s2}

---

###### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putResponse.parameter.s3"></a>

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s3 AiGateway#s3}

---

###### `s4`<sup>Optional</sup> <a name="s4" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putResponse.parameter.s4"></a>

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s4 AiGateway#s4}

---

###### `s5`<sup>Optional</sup> <a name="s5" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putResponse.parameter.s5"></a>

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s5 AiGateway#s5}

---

###### `s6`<sup>Optional</sup> <a name="s6" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putResponse.parameter.s6"></a>

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s6 AiGateway#s6}

---

###### `s7`<sup>Optional</sup> <a name="s7" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putResponse.parameter.s7"></a>

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s7 AiGateway#s7}

---

###### `s8`<sup>Optional</sup> <a name="s8" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putResponse.parameter.s8"></a>

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s8 AiGateway#s8}

---

###### `s9`<sup>Optional</sup> <a name="s9" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putResponse.parameter.s9"></a>

- *Type:* str

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s9 AiGateway#s9}

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.prompt">prompt</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference">AiGatewayGuardrailsPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.response">response</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference">AiGatewayGuardrailsResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.promptInput">prompt_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt">AiGatewayGuardrailsPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.responseInput">response_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse">AiGatewayGuardrailsResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails">AiGatewayGuardrails</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.prompt"></a>

```python
prompt: AiGatewayGuardrailsPromptOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference">AiGatewayGuardrailsPromptOutputReference</a>

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.response"></a>

```python
response: AiGatewayGuardrailsResponseOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference">AiGatewayGuardrailsResponseOutputReference</a>

---

##### `prompt_input`<sup>Optional</sup> <a name="prompt_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.promptInput"></a>

```python
prompt_input: IResolvable | AiGatewayGuardrailsPrompt
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt">AiGatewayGuardrailsPrompt</a>

---

##### `response_input`<sup>Optional</sup> <a name="response_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.responseInput"></a>

```python
response_input: IResolvable | AiGatewayGuardrailsResponse
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse">AiGatewayGuardrailsResponse</a>

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayGuardrails
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails">AiGatewayGuardrails</a>

---


### AiGatewayGuardrailsPromptOutputReference <a name="AiGatewayGuardrailsPromptOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewayGuardrailsPromptOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetP1">reset_p1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS1">reset_s1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS10">reset_s10</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS11">reset_s11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS12">reset_s12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS13">reset_s13</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS2">reset_s2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS3">reset_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS4">reset_s4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS5">reset_s5</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS6">reset_s6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS7">reset_s7</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS8">reset_s8</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS9">reset_s9</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_p1` <a name="reset_p1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetP1"></a>

```python
def reset_p1() -> None
```

##### `reset_s1` <a name="reset_s1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS1"></a>

```python
def reset_s1() -> None
```

##### `reset_s10` <a name="reset_s10" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS10"></a>

```python
def reset_s10() -> None
```

##### `reset_s11` <a name="reset_s11" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS11"></a>

```python
def reset_s11() -> None
```

##### `reset_s12` <a name="reset_s12" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS12"></a>

```python
def reset_s12() -> None
```

##### `reset_s13` <a name="reset_s13" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS13"></a>

```python
def reset_s13() -> None
```

##### `reset_s2` <a name="reset_s2" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS2"></a>

```python
def reset_s2() -> None
```

##### `reset_s3` <a name="reset_s3" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```

##### `reset_s4` <a name="reset_s4" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS4"></a>

```python
def reset_s4() -> None
```

##### `reset_s5` <a name="reset_s5" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS5"></a>

```python
def reset_s5() -> None
```

##### `reset_s6` <a name="reset_s6" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS6"></a>

```python
def reset_s6() -> None
```

##### `reset_s7` <a name="reset_s7" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS7"></a>

```python
def reset_s7() -> None
```

##### `reset_s8` <a name="reset_s8" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS8"></a>

```python
def reset_s8() -> None
```

##### `reset_s9` <a name="reset_s9" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS9"></a>

```python
def reset_s9() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.p1Input">p1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s10Input">s10_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s11Input">s11_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s12Input">s12_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s13Input">s13_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s1Input">s1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s2Input">s2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s3Input">s3_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s4Input">s4_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s5Input">s5_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s6Input">s6_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s7Input">s7_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s8Input">s8_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s9Input">s9_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.p1">p1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s1">s1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s10">s10</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s11">s11</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s12">s12</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s13">s13</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s2">s2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s3">s3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s4">s4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s5">s5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s6">s6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s7">s7</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s8">s8</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s9">s9</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt">AiGatewayGuardrailsPrompt</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `p1_input`<sup>Optional</sup> <a name="p1_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.p1Input"></a>

```python
p1_input: str
```

- *Type:* str

---

##### `s10_input`<sup>Optional</sup> <a name="s10_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s10Input"></a>

```python
s10_input: str
```

- *Type:* str

---

##### `s11_input`<sup>Optional</sup> <a name="s11_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s11Input"></a>

```python
s11_input: str
```

- *Type:* str

---

##### `s12_input`<sup>Optional</sup> <a name="s12_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s12Input"></a>

```python
s12_input: str
```

- *Type:* str

---

##### `s13_input`<sup>Optional</sup> <a name="s13_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s13Input"></a>

```python
s13_input: str
```

- *Type:* str

---

##### `s1_input`<sup>Optional</sup> <a name="s1_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s1Input"></a>

```python
s1_input: str
```

- *Type:* str

---

##### `s2_input`<sup>Optional</sup> <a name="s2_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s2Input"></a>

```python
s2_input: str
```

- *Type:* str

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s3Input"></a>

```python
s3_input: str
```

- *Type:* str

---

##### `s4_input`<sup>Optional</sup> <a name="s4_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s4Input"></a>

```python
s4_input: str
```

- *Type:* str

---

##### `s5_input`<sup>Optional</sup> <a name="s5_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s5Input"></a>

```python
s5_input: str
```

- *Type:* str

---

##### `s6_input`<sup>Optional</sup> <a name="s6_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s6Input"></a>

```python
s6_input: str
```

- *Type:* str

---

##### `s7_input`<sup>Optional</sup> <a name="s7_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s7Input"></a>

```python
s7_input: str
```

- *Type:* str

---

##### `s8_input`<sup>Optional</sup> <a name="s8_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s8Input"></a>

```python
s8_input: str
```

- *Type:* str

---

##### `s9_input`<sup>Optional</sup> <a name="s9_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s9Input"></a>

```python
s9_input: str
```

- *Type:* str

---

##### `p1`<sup>Required</sup> <a name="p1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.p1"></a>

```python
p1: str
```

- *Type:* str

---

##### `s1`<sup>Required</sup> <a name="s1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s1"></a>

```python
s1: str
```

- *Type:* str

---

##### `s10`<sup>Required</sup> <a name="s10" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s10"></a>

```python
s10: str
```

- *Type:* str

---

##### `s11`<sup>Required</sup> <a name="s11" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s11"></a>

```python
s11: str
```

- *Type:* str

---

##### `s12`<sup>Required</sup> <a name="s12" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s12"></a>

```python
s12: str
```

- *Type:* str

---

##### `s13`<sup>Required</sup> <a name="s13" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s13"></a>

```python
s13: str
```

- *Type:* str

---

##### `s2`<sup>Required</sup> <a name="s2" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s2"></a>

```python
s2: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s3"></a>

```python
s3: str
```

- *Type:* str

---

##### `s4`<sup>Required</sup> <a name="s4" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s4"></a>

```python
s4: str
```

- *Type:* str

---

##### `s5`<sup>Required</sup> <a name="s5" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s5"></a>

```python
s5: str
```

- *Type:* str

---

##### `s6`<sup>Required</sup> <a name="s6" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s6"></a>

```python
s6: str
```

- *Type:* str

---

##### `s7`<sup>Required</sup> <a name="s7" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s7"></a>

```python
s7: str
```

- *Type:* str

---

##### `s8`<sup>Required</sup> <a name="s8" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s8"></a>

```python
s8: str
```

- *Type:* str

---

##### `s9`<sup>Required</sup> <a name="s9" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s9"></a>

```python
s9: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayGuardrailsPrompt
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt">AiGatewayGuardrailsPrompt</a>

---


### AiGatewayGuardrailsResponseOutputReference <a name="AiGatewayGuardrailsResponseOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewayGuardrailsResponseOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetP1">reset_p1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS1">reset_s1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS10">reset_s10</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS11">reset_s11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS12">reset_s12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS13">reset_s13</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS2">reset_s2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS3">reset_s3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS4">reset_s4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS5">reset_s5</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS6">reset_s6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS7">reset_s7</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS8">reset_s8</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS9">reset_s9</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_p1` <a name="reset_p1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetP1"></a>

```python
def reset_p1() -> None
```

##### `reset_s1` <a name="reset_s1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS1"></a>

```python
def reset_s1() -> None
```

##### `reset_s10` <a name="reset_s10" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS10"></a>

```python
def reset_s10() -> None
```

##### `reset_s11` <a name="reset_s11" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS11"></a>

```python
def reset_s11() -> None
```

##### `reset_s12` <a name="reset_s12" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS12"></a>

```python
def reset_s12() -> None
```

##### `reset_s13` <a name="reset_s13" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS13"></a>

```python
def reset_s13() -> None
```

##### `reset_s2` <a name="reset_s2" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS2"></a>

```python
def reset_s2() -> None
```

##### `reset_s3` <a name="reset_s3" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS3"></a>

```python
def reset_s3() -> None
```

##### `reset_s4` <a name="reset_s4" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS4"></a>

```python
def reset_s4() -> None
```

##### `reset_s5` <a name="reset_s5" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS5"></a>

```python
def reset_s5() -> None
```

##### `reset_s6` <a name="reset_s6" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS6"></a>

```python
def reset_s6() -> None
```

##### `reset_s7` <a name="reset_s7" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS7"></a>

```python
def reset_s7() -> None
```

##### `reset_s8` <a name="reset_s8" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS8"></a>

```python
def reset_s8() -> None
```

##### `reset_s9` <a name="reset_s9" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS9"></a>

```python
def reset_s9() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.p1Input">p1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s10Input">s10_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s11Input">s11_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s12Input">s12_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s13Input">s13_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s1Input">s1_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s2Input">s2_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s3Input">s3_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s4Input">s4_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s5Input">s5_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s6Input">s6_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s7Input">s7_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s8Input">s8_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s9Input">s9_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.p1">p1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s1">s1</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s10">s10</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s11">s11</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s12">s12</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s13">s13</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s2">s2</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s3">s3</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s4">s4</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s5">s5</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s6">s6</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s7">s7</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s8">s8</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s9">s9</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse">AiGatewayGuardrailsResponse</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `p1_input`<sup>Optional</sup> <a name="p1_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.p1Input"></a>

```python
p1_input: str
```

- *Type:* str

---

##### `s10_input`<sup>Optional</sup> <a name="s10_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s10Input"></a>

```python
s10_input: str
```

- *Type:* str

---

##### `s11_input`<sup>Optional</sup> <a name="s11_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s11Input"></a>

```python
s11_input: str
```

- *Type:* str

---

##### `s12_input`<sup>Optional</sup> <a name="s12_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s12Input"></a>

```python
s12_input: str
```

- *Type:* str

---

##### `s13_input`<sup>Optional</sup> <a name="s13_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s13Input"></a>

```python
s13_input: str
```

- *Type:* str

---

##### `s1_input`<sup>Optional</sup> <a name="s1_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s1Input"></a>

```python
s1_input: str
```

- *Type:* str

---

##### `s2_input`<sup>Optional</sup> <a name="s2_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s2Input"></a>

```python
s2_input: str
```

- *Type:* str

---

##### `s3_input`<sup>Optional</sup> <a name="s3_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s3Input"></a>

```python
s3_input: str
```

- *Type:* str

---

##### `s4_input`<sup>Optional</sup> <a name="s4_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s4Input"></a>

```python
s4_input: str
```

- *Type:* str

---

##### `s5_input`<sup>Optional</sup> <a name="s5_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s5Input"></a>

```python
s5_input: str
```

- *Type:* str

---

##### `s6_input`<sup>Optional</sup> <a name="s6_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s6Input"></a>

```python
s6_input: str
```

- *Type:* str

---

##### `s7_input`<sup>Optional</sup> <a name="s7_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s7Input"></a>

```python
s7_input: str
```

- *Type:* str

---

##### `s8_input`<sup>Optional</sup> <a name="s8_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s8Input"></a>

```python
s8_input: str
```

- *Type:* str

---

##### `s9_input`<sup>Optional</sup> <a name="s9_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s9Input"></a>

```python
s9_input: str
```

- *Type:* str

---

##### `p1`<sup>Required</sup> <a name="p1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.p1"></a>

```python
p1: str
```

- *Type:* str

---

##### `s1`<sup>Required</sup> <a name="s1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s1"></a>

```python
s1: str
```

- *Type:* str

---

##### `s10`<sup>Required</sup> <a name="s10" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s10"></a>

```python
s10: str
```

- *Type:* str

---

##### `s11`<sup>Required</sup> <a name="s11" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s11"></a>

```python
s11: str
```

- *Type:* str

---

##### `s12`<sup>Required</sup> <a name="s12" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s12"></a>

```python
s12: str
```

- *Type:* str

---

##### `s13`<sup>Required</sup> <a name="s13" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s13"></a>

```python
s13: str
```

- *Type:* str

---

##### `s2`<sup>Required</sup> <a name="s2" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s2"></a>

```python
s2: str
```

- *Type:* str

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s3"></a>

```python
s3: str
```

- *Type:* str

---

##### `s4`<sup>Required</sup> <a name="s4" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s4"></a>

```python
s4: str
```

- *Type:* str

---

##### `s5`<sup>Required</sup> <a name="s5" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s5"></a>

```python
s5: str
```

- *Type:* str

---

##### `s6`<sup>Required</sup> <a name="s6" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s6"></a>

```python
s6: str
```

- *Type:* str

---

##### `s7`<sup>Required</sup> <a name="s7" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s7"></a>

```python
s7: str
```

- *Type:* str

---

##### `s8`<sup>Required</sup> <a name="s8" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s8"></a>

```python
s8: str
```

- *Type:* str

---

##### `s9`<sup>Required</sup> <a name="s9" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s9"></a>

```python
s9: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayGuardrailsResponse
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse">AiGatewayGuardrailsResponse</a>

---


### AiGatewayOtelList <a name="AiGatewayOtelList" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewayOtelList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AiGatewayOtelOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AiGatewayOtel]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a>]

---


### AiGatewayOtelOutputReference <a name="AiGatewayOtelOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewayOtelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.resetAuthorization">reset_authorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.resetContentType">reset_content_type</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_authorization` <a name="reset_authorization" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.resetAuthorization"></a>

```python
def reset_authorization() -> None
```

##### `reset_content_type` <a name="reset_content_type" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.resetContentType"></a>

```python
def reset_content_type() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.contentTypeInput">content_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.headersInput">headers_input</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.urlInput">url_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.contentType">content_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.headers">headers</a></code> | <code>typing.Mapping[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.url">url</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `content_type_input`<sup>Optional</sup> <a name="content_type_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.contentTypeInput"></a>

```python
content_type_input: str
```

- *Type:* str

---

##### `headers_input`<sup>Optional</sup> <a name="headers_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.headersInput"></a>

```python
headers_input: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `url_input`<sup>Optional</sup> <a name="url_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.urlInput"></a>

```python
url_input: str
```

- *Type:* str

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `content_type`<sup>Required</sup> <a name="content_type" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.contentType"></a>

```python
content_type: str
```

- *Type:* str

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.headers"></a>

```python
headers: typing.Mapping[str]
```

- *Type:* typing.Mapping[str]

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.url"></a>

```python
url: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayOtel
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a>

---


### AiGatewaySpendLimitsOutputReference <a name="AiGatewaySpendLimitsOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewaySpendLimitsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.putRules">put_rules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.resetRules">reset_rules</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_rules` <a name="put_rules" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.putRules"></a>

```python
def put_rules(
  value: IResolvable | typing.List[AiGatewaySpendLimitsRules]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.putRules.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules">AiGatewaySpendLimitsRules</a>]

---

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_rules` <a name="reset_rules" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.resetRules"></a>

```python
def reset_rules() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList">AiGatewaySpendLimitsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.rulesInput">rules_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules">AiGatewaySpendLimitsRules</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits">AiGatewaySpendLimits</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.rules"></a>

```python
rules: AiGatewaySpendLimitsRulesList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList">AiGatewaySpendLimitsRulesList</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `rules_input`<sup>Optional</sup> <a name="rules_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.rulesInput"></a>

```python
rules_input: IResolvable | typing.List[AiGatewaySpendLimitsRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules">AiGatewaySpendLimitsRules</a>]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewaySpendLimits
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits">AiGatewaySpendLimits</a>

---


### AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference <a name="AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider">AiGatewaySpendLimitsRulesAiGatewayProvider</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewaySpendLimitsRulesAiGatewayProvider
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider">AiGatewaySpendLimitsRulesAiGatewayProvider</a>

---


### AiGatewaySpendLimitsRulesList <a name="AiGatewaySpendLimitsRulesList" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewaySpendLimitsRulesList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AiGatewaySpendLimitsRulesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules">AiGatewaySpendLimitsRules</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AiGatewaySpendLimitsRules]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules">AiGatewaySpendLimitsRules</a>]

---


### AiGatewaySpendLimitsRulesMetadataMap <a name="AiGatewaySpendLimitsRulesMetadataMap" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewaySpendLimitsRulesMetadataMap(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.get">get</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.get"></a>

```python
def get(
  key: str
) -> AiGatewaySpendLimitsRulesMetadataOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.get.parameter.key"></a>

- *Type:* str

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata">AiGatewaySpendLimitsRulesMetadata</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.property.internalValue"></a>

```python
internal_value: IResolvable | typing.Mapping[AiGatewaySpendLimitsRulesMetadata]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata">AiGatewaySpendLimitsRulesMetadata</a>]

---


### AiGatewaySpendLimitsRulesMetadataOutputReference <a name="AiGatewaySpendLimitsRulesMetadataOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_key: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.Initializer.parameter.complexObjectKey">complex_object_key</a></code> | <code>str</code> | the key of this item in the map. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_key`<sup>Required</sup> <a name="complex_object_key" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* str

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.resetValues">reset_values</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `reset_values` <a name="reset_values" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.resetValues"></a>

```python
def reset_values() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata">AiGatewaySpendLimitsRulesMetadata</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewaySpendLimitsRulesMetadata
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata">AiGatewaySpendLimitsRulesMetadata</a>

---


### AiGatewaySpendLimitsRulesModelOutputReference <a name="AiGatewaySpendLimitsRulesModelOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewaySpendLimitsRulesModelOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.modeInput">mode_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.valuesInput">values_input</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.mode">mode</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.values">values</a></code> | <code>typing.List[str]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel">AiGatewaySpendLimitsRulesModel</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `mode_input`<sup>Optional</sup> <a name="mode_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.modeInput"></a>

```python
mode_input: str
```

- *Type:* str

---

##### `values_input`<sup>Optional</sup> <a name="values_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.valuesInput"></a>

```python
values_input: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.mode"></a>

```python
mode: str
```

- *Type:* str

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.values"></a>

```python
values: typing.List[str]
```

- *Type:* typing.List[str]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewaySpendLimitsRulesModel
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel">AiGatewaySpendLimitsRulesModel</a>

---


### AiGatewaySpendLimitsRulesOutputReference <a name="AiGatewaySpendLimitsRulesOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewaySpendLimitsRulesOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putAiGatewayProvider">put_ai_gateway_provider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putMetadata">put_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putModel">put_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetAiGatewayProvider">reset_ai_gateway_provider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetEnabled">reset_enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetId">reset_id</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetMetadata">reset_metadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetModel">reset_model</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetTechnique">reset_technique</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_ai_gateway_provider` <a name="put_ai_gateway_provider" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putAiGatewayProvider"></a>

```python
def put_ai_gateway_provider(
  mode: str,
  values: typing.List[str]
) -> None
```

###### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putAiGatewayProvider.parameter.mode"></a>

- *Type:* str

Available values: "filter".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#mode AiGateway#mode}

---

###### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putAiGatewayProvider.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#values AiGateway#values}.

---

##### `put_metadata` <a name="put_metadata" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putMetadata"></a>

```python
def put_metadata(
  value: IResolvable | typing.Mapping[AiGatewaySpendLimitsRulesMetadata]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putMetadata.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata">AiGatewaySpendLimitsRulesMetadata</a>]

---

##### `put_model` <a name="put_model" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putModel"></a>

```python
def put_model(
  mode: str,
  values: typing.List[str]
) -> None
```

###### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putModel.parameter.mode"></a>

- *Type:* str

Available values: "filter".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#mode AiGateway#mode}

---

###### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putModel.parameter.values"></a>

- *Type:* typing.List[str]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#values AiGateway#values}.

---

##### `reset_ai_gateway_provider` <a name="reset_ai_gateway_provider" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetAiGatewayProvider"></a>

```python
def reset_ai_gateway_provider() -> None
```

##### `reset_enabled` <a name="reset_enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetEnabled"></a>

```python
def reset_enabled() -> None
```

##### `reset_id` <a name="reset_id" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetId"></a>

```python
def reset_id() -> None
```

##### `reset_metadata` <a name="reset_metadata" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetMetadata"></a>

```python
def reset_metadata() -> None
```

##### `reset_model` <a name="reset_model" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetModel"></a>

```python
def reset_model() -> None
```

##### `reset_technique` <a name="reset_technique" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetTechnique"></a>

```python
def reset_technique() -> None
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.aiGatewayProvider">ai_gateway_provider</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference">AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap">AiGatewaySpendLimitsRulesMetadataMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.model">model</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference">AiGatewaySpendLimitsRulesModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.aiGatewayProviderInput">ai_gateway_provider_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider">AiGatewaySpendLimitsRulesAiGatewayProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.enabledInput">enabled_input</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.idInput">id_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limitInput">limit_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limitTypeInput">limit_type_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.metadataInput">metadata_input</a></code> | <code>cdktn.IResolvable \| typing.Mapping[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata">AiGatewaySpendLimitsRulesMetadata</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.modelInput">model_input</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel">AiGatewaySpendLimitsRulesModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.techniqueInput">technique_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.windowInput">window_input</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.enabled">enabled</a></code> | <code>bool \| cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.id">id</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limit">limit</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limitType">limit_type</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.technique">technique</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.window">window</a></code> | <code>typing.Union[int, float]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules">AiGatewaySpendLimitsRules</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `ai_gateway_provider`<sup>Required</sup> <a name="ai_gateway_provider" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.aiGatewayProvider"></a>

```python
ai_gateway_provider: AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference">AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.metadata"></a>

```python
metadata: AiGatewaySpendLimitsRulesMetadataMap
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap">AiGatewaySpendLimitsRulesMetadataMap</a>

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.model"></a>

```python
model: AiGatewaySpendLimitsRulesModelOutputReference
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference">AiGatewaySpendLimitsRulesModelOutputReference</a>

---

##### `ai_gateway_provider_input`<sup>Optional</sup> <a name="ai_gateway_provider_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.aiGatewayProviderInput"></a>

```python
ai_gateway_provider_input: IResolvable | AiGatewaySpendLimitsRulesAiGatewayProvider
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider">AiGatewaySpendLimitsRulesAiGatewayProvider</a>

---

##### `enabled_input`<sup>Optional</sup> <a name="enabled_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.enabledInput"></a>

```python
enabled_input: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id_input`<sup>Optional</sup> <a name="id_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.idInput"></a>

```python
id_input: str
```

- *Type:* str

---

##### `limit_input`<sup>Optional</sup> <a name="limit_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limitInput"></a>

```python
limit_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `limit_type_input`<sup>Optional</sup> <a name="limit_type_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limitTypeInput"></a>

```python
limit_type_input: str
```

- *Type:* str

---

##### `metadata_input`<sup>Optional</sup> <a name="metadata_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.metadataInput"></a>

```python
metadata_input: IResolvable | typing.Mapping[AiGatewaySpendLimitsRulesMetadata]
```

- *Type:* cdktn.IResolvable | typing.Mapping[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata">AiGatewaySpendLimitsRulesMetadata</a>]

---

##### `model_input`<sup>Optional</sup> <a name="model_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.modelInput"></a>

```python
model_input: IResolvable | AiGatewaySpendLimitsRulesModel
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel">AiGatewaySpendLimitsRulesModel</a>

---

##### `technique_input`<sup>Optional</sup> <a name="technique_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.techniqueInput"></a>

```python
technique_input: str
```

- *Type:* str

---

##### `window_input`<sup>Optional</sup> <a name="window_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.windowInput"></a>

```python
window_input: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.enabled"></a>

```python
enabled: bool | IResolvable
```

- *Type:* bool | cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.id"></a>

```python
id: str
```

- *Type:* str

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limit"></a>

```python
limit: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `limit_type`<sup>Required</sup> <a name="limit_type" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limitType"></a>

```python
limit_type: str
```

- *Type:* str

---

##### `technique`<sup>Required</sup> <a name="technique" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.technique"></a>

```python
technique: str
```

- *Type:* str

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.window"></a>

```python
window: typing.Union[int, float]
```

- *Type:* typing.Union[int, float]

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewaySpendLimitsRules
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules">AiGatewaySpendLimitsRules</a>

---


### AiGatewayStripeOutputReference <a name="AiGatewayStripeOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewayStripeOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.putUsageEvents">put_usage_events</a></code> | *No description.* |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `put_usage_events` <a name="put_usage_events" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.putUsageEvents"></a>

```python
def put_usage_events(
  value: IResolvable | typing.List[AiGatewayStripeUsageEvents]
) -> None
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.putUsageEvents.parameter.value"></a>

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents">AiGatewayStripeUsageEvents</a>]

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.usageEvents">usage_events</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList">AiGatewayStripeUsageEventsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.authorizationInput">authorization_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.usageEventsInput">usage_events_input</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents">AiGatewayStripeUsageEvents</a>]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.authorization">authorization</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe">AiGatewayStripe</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `usage_events`<sup>Required</sup> <a name="usage_events" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.usageEvents"></a>

```python
usage_events: AiGatewayStripeUsageEventsList
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList">AiGatewayStripeUsageEventsList</a>

---

##### `authorization_input`<sup>Optional</sup> <a name="authorization_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.authorizationInput"></a>

```python
authorization_input: str
```

- *Type:* str

---

##### `usage_events_input`<sup>Optional</sup> <a name="usage_events_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.usageEventsInput"></a>

```python
usage_events_input: IResolvable | typing.List[AiGatewayStripeUsageEvents]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents">AiGatewayStripeUsageEvents</a>]

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.authorization"></a>

```python
authorization: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayStripe
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe">AiGatewayStripe</a>

---


### AiGatewayStripeUsageEventsList <a name="AiGatewayStripeUsageEventsList" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewayStripeUsageEventsList(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  wraps_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.Initializer.parameter.wrapsSet">wraps_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `wraps_set`<sup>Required</sup> <a name="wraps_set" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.allWithMapKey">all_with_map_key</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.toString">to_string</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.get">get</a></code> | *No description.* |

---

##### `all_with_map_key` <a name="all_with_map_key" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.allWithMapKey"></a>

```python
def all_with_map_key(
  map_key_attribute_name: str
) -> DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `map_key_attribute_name`<sup>Required</sup> <a name="map_key_attribute_name" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* str

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.get"></a>

```python
def get(
  index: typing.Union[int, float]
) -> AiGatewayStripeUsageEventsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.get.parameter.index"></a>

- *Type:* typing.Union[int, float]

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents">AiGatewayStripeUsageEvents</a>]</code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.property.internalValue"></a>

```python
internal_value: IResolvable | typing.List[AiGatewayStripeUsageEvents]
```

- *Type:* cdktn.IResolvable | typing.List[<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents">AiGatewayStripeUsageEvents</a>]

---


### AiGatewayStripeUsageEventsOutputReference <a name="AiGatewayStripeUsageEventsOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer"></a>

```python
from cdktn_provider_cloudflare import ai_gateway

aiGateway.AiGatewayStripeUsageEventsOutputReference(
  terraform_resource: IInterpolatingParent,
  terraform_attribute: str,
  complex_object_index: typing.Union[int, float],
  complex_object_is_from_set: bool
)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.terraformResource">terraform_resource</a></code> | <code>cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.terraformAttribute">terraform_attribute</a></code> | <code>str</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.complexObjectIndex">complex_object_index</a></code> | <code>typing.Union[int, float]</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complex_object_is_from_set</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraform_resource`<sup>Required</sup> <a name="terraform_resource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* cdktn.IInterpolatingParent

The parent resource.

---

##### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* str

The attribute on the parent resource this class is referencing.

---

##### `complex_object_index`<sup>Required</sup> <a name="complex_object_index" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* typing.Union[int, float]

the index of this item in the list.

---

##### `complex_object_is_from_set`<sup>Required</sup> <a name="complex_object_is_from_set" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.computeFqn">compute_fqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getAnyMapAttribute">get_any_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getBooleanAttribute">get_boolean_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getBooleanMapAttribute">get_boolean_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getListAttribute">get_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberAttribute">get_number_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberListAttribute">get_number_list_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberMapAttribute">get_number_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getStringAttribute">get_string_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getStringMapAttribute">get_string_map_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.interpolationForAttribute">interpolation_for_attribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.toString">to_string</a></code> | Return a string representation of this resolvable object. |

---

##### `compute_fqn` <a name="compute_fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.computeFqn"></a>

```python
def compute_fqn() -> str
```

##### `get_any_map_attribute` <a name="get_any_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getAnyMapAttribute"></a>

```python
def get_any_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Any]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_attribute` <a name="get_boolean_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getBooleanAttribute"></a>

```python
def get_boolean_attribute(
  terraform_attribute: str
) -> IResolvable
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_boolean_map_attribute` <a name="get_boolean_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getBooleanMapAttribute"></a>

```python
def get_boolean_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[bool]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_list_attribute` <a name="get_list_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getListAttribute"></a>

```python
def get_list_attribute(
  terraform_attribute: str
) -> typing.List[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_attribute` <a name="get_number_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberAttribute"></a>

```python
def get_number_attribute(
  terraform_attribute: str
) -> typing.Union[int, float]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_list_attribute` <a name="get_number_list_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberListAttribute"></a>

```python
def get_number_list_attribute(
  terraform_attribute: str
) -> typing.List[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_number_map_attribute` <a name="get_number_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberMapAttribute"></a>

```python
def get_number_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[typing.Union[int, float]]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_attribute` <a name="get_string_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getStringAttribute"></a>

```python
def get_string_attribute(
  terraform_attribute: str
) -> str
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `get_string_map_attribute` <a name="get_string_map_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getStringMapAttribute"></a>

```python
def get_string_map_attribute(
  terraform_attribute: str
) -> typing.Mapping[str]
```

###### `terraform_attribute`<sup>Required</sup> <a name="terraform_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* str

---

##### `interpolation_for_attribute` <a name="interpolation_for_attribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.interpolationForAttribute"></a>

```python
def interpolation_for_attribute(
  property: str
) -> IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* str

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.resolve"></a>

```python
def resolve(
  _context: IResolveContext
) -> typing.Any
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.resolve.parameter._context"></a>

- *Type:* cdktn.IResolveContext

---

##### `to_string` <a name="to_string" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.toString"></a>

```python
def to_string() -> str
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.creationStack">creation_stack</a></code> | <code>typing.List[str]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.fqn">fqn</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.payloadInput">payload_input</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.payload">payload</a></code> | <code>str</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.internalValue">internal_value</a></code> | <code>cdktn.IResolvable \| <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents">AiGatewayStripeUsageEvents</a></code> | *No description.* |

---

##### `creation_stack`<sup>Required</sup> <a name="creation_stack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.creationStack"></a>

```python
creation_stack: typing.List[str]
```

- *Type:* typing.List[str]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.fqn"></a>

```python
fqn: str
```

- *Type:* str

---

##### `payload_input`<sup>Optional</sup> <a name="payload_input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.payloadInput"></a>

```python
payload_input: str
```

- *Type:* str

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.payload"></a>

```python
payload: str
```

- *Type:* str

---

##### `internal_value`<sup>Optional</sup> <a name="internal_value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.internalValue"></a>

```python
internal_value: IResolvable | AiGatewayStripeUsageEvents
```

- *Type:* cdktn.IResolvable | <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents">AiGatewayStripeUsageEvents</a>

---



