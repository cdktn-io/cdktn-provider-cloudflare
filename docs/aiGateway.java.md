# `aiGateway` Submodule <a name="`aiGateway` Submodule" id="@cdktn/provider-cloudflare.aiGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiGateway <a name="AiGateway" id="@cdktn/provider-cloudflare.aiGateway.AiGateway"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway cloudflare_ai_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGateway;

AiGateway.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .cacheInvalidateOnUpdate(java.lang.Boolean|IResolvable)
    .cacheTtl(java.lang.Number)
    .collectLogs(java.lang.Boolean|IResolvable)
    .id(java.lang.String)
    .rateLimitingInterval(java.lang.Number)
    .rateLimitingLimit(java.lang.Number)
//  .authentication(java.lang.Boolean|IResolvable)
//  .dlp(AiGatewayDlp)
//  .guardrails(AiGatewayGuardrails)
//  .logManagement(java.lang.Number)
//  .logManagementStrategy(java.lang.String)
//  .logpush(java.lang.Boolean|IResolvable)
//  .logpushPublicKey(java.lang.String)
//  .otel(IResolvable|java.util.List<AiGatewayOtel>)
//  .rateLimitingTechnique(java.lang.String)
//  .retryBackoff(java.lang.String)
//  .retryDelay(java.lang.Number)
//  .retryMaxAttempts(java.lang.Number)
//  .spendLimits(AiGatewaySpendLimits)
//  .storeId(java.lang.String)
//  .stripe(AiGatewayStripe)
//  .workersAiBillingMode(java.lang.String)
//  .zdr(java.lang.Boolean|IResolvable)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#account_id AiGateway#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.cacheInvalidateOnUpdate">cacheInvalidateOnUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#cache_invalidate_on_update AiGateway#cache_invalidate_on_update}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.cacheTtl">cacheTtl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#cache_ttl AiGateway#cache_ttl}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.collectLogs">collectLogs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#collect_logs AiGateway#collect_logs}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | gateway id. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.rateLimitingInterval">rateLimitingInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#rate_limiting_interval AiGateway#rate_limiting_interval}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.rateLimitingLimit">rateLimitingLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#rate_limiting_limit AiGateway#rate_limiting_limit}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.authentication">authentication</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#authentication AiGateway#authentication}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.dlp">dlp</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp">AiGatewayDlp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#dlp AiGateway#dlp}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.guardrails">guardrails</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails">AiGatewayGuardrails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#guardrails AiGateway#guardrails}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.logManagement">logManagement</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#log_management AiGateway#log_management}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.logManagementStrategy">logManagementStrategy</a></code> | <code>java.lang.String</code> | Available values: "STOP_INSERTING", "DELETE_OLDEST". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.logpush">logpush</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#logpush AiGateway#logpush}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.logpushPublicKey">logpushPublicKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#logpush_public_key AiGateway#logpush_public_key}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.otel">otel</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#otel AiGateway#otel}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.rateLimitingTechnique">rateLimitingTechnique</a></code> | <code>java.lang.String</code> | Available values: "fixed", "sliding". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.retryBackoff">retryBackoff</a></code> | <code>java.lang.String</code> | Backoff strategy for retry delays Available values: "constant", "linear", "exponential". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.retryDelay">retryDelay</a></code> | <code>java.lang.Number</code> | Delay between retry attempts in milliseconds (0-5000). |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.retryMaxAttempts">retryMaxAttempts</a></code> | <code>java.lang.Number</code> | Maximum number of retry attempts for failed requests (1-5). |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.spendLimits">spendLimits</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits">AiGatewaySpendLimits</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#spend_limits AiGateway#spend_limits}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.storeId">storeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#store_id AiGateway#store_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.stripe">stripe</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe">AiGatewayStripe</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#stripe AiGateway#stripe}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.workersAiBillingMode">workersAiBillingMode</a></code> | <code>java.lang.String</code> | Controls how Workers AI inference calls routed through this gateway are billed. Only 'postpaid' is currently supported. Available values: "postpaid". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.zdr">zdr</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#zdr AiGateway#zdr}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#account_id AiGateway#account_id}.

---

##### `cacheInvalidateOnUpdate`<sup>Required</sup> <a name="cacheInvalidateOnUpdate" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.cacheInvalidateOnUpdate"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#cache_invalidate_on_update AiGateway#cache_invalidate_on_update}.

---

##### `cacheTtl`<sup>Required</sup> <a name="cacheTtl" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.cacheTtl"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#cache_ttl AiGateway#cache_ttl}.

---

##### `collectLogs`<sup>Required</sup> <a name="collectLogs" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.collectLogs"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#collect_logs AiGateway#collect_logs}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.id"></a>

- *Type:* java.lang.String

gateway id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#id AiGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rateLimitingInterval`<sup>Required</sup> <a name="rateLimitingInterval" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.rateLimitingInterval"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#rate_limiting_interval AiGateway#rate_limiting_interval}.

---

##### `rateLimitingLimit`<sup>Required</sup> <a name="rateLimitingLimit" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.rateLimitingLimit"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#rate_limiting_limit AiGateway#rate_limiting_limit}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.authentication"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

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

##### `logManagement`<sup>Optional</sup> <a name="logManagement" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.logManagement"></a>

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#log_management AiGateway#log_management}.

---

##### `logManagementStrategy`<sup>Optional</sup> <a name="logManagementStrategy" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.logManagementStrategy"></a>

- *Type:* java.lang.String

Available values: "STOP_INSERTING", "DELETE_OLDEST".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#log_management_strategy AiGateway#log_management_strategy}

---

##### `logpush`<sup>Optional</sup> <a name="logpush" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.logpush"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#logpush AiGateway#logpush}.

---

##### `logpushPublicKey`<sup>Optional</sup> <a name="logpushPublicKey" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.logpushPublicKey"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#logpush_public_key AiGateway#logpush_public_key}.

---

##### `otel`<sup>Optional</sup> <a name="otel" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.otel"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#otel AiGateway#otel}.

---

##### `rateLimitingTechnique`<sup>Optional</sup> <a name="rateLimitingTechnique" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.rateLimitingTechnique"></a>

- *Type:* java.lang.String

Available values: "fixed", "sliding".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#rate_limiting_technique AiGateway#rate_limiting_technique}

---

##### `retryBackoff`<sup>Optional</sup> <a name="retryBackoff" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.retryBackoff"></a>

- *Type:* java.lang.String

Backoff strategy for retry delays Available values: "constant", "linear", "exponential".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#retry_backoff AiGateway#retry_backoff}

---

##### `retryDelay`<sup>Optional</sup> <a name="retryDelay" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.retryDelay"></a>

- *Type:* java.lang.Number

Delay between retry attempts in milliseconds (0-5000).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#retry_delay AiGateway#retry_delay}

---

##### `retryMaxAttempts`<sup>Optional</sup> <a name="retryMaxAttempts" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.retryMaxAttempts"></a>

- *Type:* java.lang.Number

Maximum number of retry attempts for failed requests (1-5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#retry_max_attempts AiGateway#retry_max_attempts}

---

##### `spendLimits`<sup>Optional</sup> <a name="spendLimits" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.spendLimits"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits">AiGatewaySpendLimits</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#spend_limits AiGateway#spend_limits}.

---

##### `storeId`<sup>Optional</sup> <a name="storeId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.storeId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#store_id AiGateway#store_id}.

---

##### `stripe`<sup>Optional</sup> <a name="stripe" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.stripe"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe">AiGatewayStripe</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#stripe AiGateway#stripe}.

---

##### `workersAiBillingMode`<sup>Optional</sup> <a name="workersAiBillingMode" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.workersAiBillingMode"></a>

- *Type:* java.lang.String

Controls how Workers AI inference calls routed through this gateway are billed. Only 'postpaid' is currently supported. Available values: "postpaid".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#workers_ai_billing_mode AiGateway#workers_ai_billing_mode}

---

##### `zdr`<sup>Optional</sup> <a name="zdr" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.Initializer.parameter.zdr"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#zdr AiGateway#zdr}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.putDlp">putDlp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.putGuardrails">putGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.putOtel">putOtel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.putSpendLimits">putSpendLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.putStripe">putStripe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetAuthentication">resetAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetDlp">resetDlp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetGuardrails">resetGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogManagement">resetLogManagement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogManagementStrategy">resetLogManagementStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogpush">resetLogpush</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogpushPublicKey">resetLogpushPublicKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetOtel">resetOtel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRateLimitingTechnique">resetRateLimitingTechnique</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRetryBackoff">resetRetryBackoff</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRetryDelay">resetRetryDelay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRetryMaxAttempts">resetRetryMaxAttempts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetSpendLimits">resetSpendLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetStoreId">resetStoreId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetStripe">resetStripe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetWorkersAiBillingMode">resetWorkersAiBillingMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.resetZdr">resetZdr</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putDlp` <a name="putDlp" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putDlp"></a>

```java
public void putDlp(AiGatewayDlp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putDlp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp">AiGatewayDlp</a>

---

##### `putGuardrails` <a name="putGuardrails" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putGuardrails"></a>

```java
public void putGuardrails(AiGatewayGuardrails value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putGuardrails.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails">AiGatewayGuardrails</a>

---

##### `putOtel` <a name="putOtel" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putOtel"></a>

```java
public void putOtel(IResolvable|java.util.List<AiGatewayOtel> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putOtel.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a>>

---

##### `putSpendLimits` <a name="putSpendLimits" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putSpendLimits"></a>

```java
public void putSpendLimits(AiGatewaySpendLimits value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putSpendLimits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits">AiGatewaySpendLimits</a>

---

##### `putStripe` <a name="putStripe" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putStripe"></a>

```java
public void putStripe(AiGatewayStripe value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.putStripe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe">AiGatewayStripe</a>

---

##### `resetAuthentication` <a name="resetAuthentication" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetAuthentication"></a>

```java
public void resetAuthentication()
```

##### `resetDlp` <a name="resetDlp" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetDlp"></a>

```java
public void resetDlp()
```

##### `resetGuardrails` <a name="resetGuardrails" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetGuardrails"></a>

```java
public void resetGuardrails()
```

##### `resetLogManagement` <a name="resetLogManagement" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogManagement"></a>

```java
public void resetLogManagement()
```

##### `resetLogManagementStrategy` <a name="resetLogManagementStrategy" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogManagementStrategy"></a>

```java
public void resetLogManagementStrategy()
```

##### `resetLogpush` <a name="resetLogpush" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogpush"></a>

```java
public void resetLogpush()
```

##### `resetLogpushPublicKey` <a name="resetLogpushPublicKey" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetLogpushPublicKey"></a>

```java
public void resetLogpushPublicKey()
```

##### `resetOtel` <a name="resetOtel" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetOtel"></a>

```java
public void resetOtel()
```

##### `resetRateLimitingTechnique` <a name="resetRateLimitingTechnique" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRateLimitingTechnique"></a>

```java
public void resetRateLimitingTechnique()
```

##### `resetRetryBackoff` <a name="resetRetryBackoff" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRetryBackoff"></a>

```java
public void resetRetryBackoff()
```

##### `resetRetryDelay` <a name="resetRetryDelay" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRetryDelay"></a>

```java
public void resetRetryDelay()
```

##### `resetRetryMaxAttempts` <a name="resetRetryMaxAttempts" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetRetryMaxAttempts"></a>

```java
public void resetRetryMaxAttempts()
```

##### `resetSpendLimits` <a name="resetSpendLimits" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetSpendLimits"></a>

```java
public void resetSpendLimits()
```

##### `resetStoreId` <a name="resetStoreId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetStoreId"></a>

```java
public void resetStoreId()
```

##### `resetStripe` <a name="resetStripe" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetStripe"></a>

```java
public void resetStripe()
```

##### `resetWorkersAiBillingMode` <a name="resetWorkersAiBillingMode" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetWorkersAiBillingMode"></a>

```java
public void resetWorkersAiBillingMode()
```

##### `resetZdr` <a name="resetZdr" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.resetZdr"></a>

```java
public void resetZdr()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AiGateway resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGateway;

AiGateway.isConstruct(java.lang.Object x)
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

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGateway;

AiGateway.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGateway;

AiGateway.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGateway;

AiGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AiGateway.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AiGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AiGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AiGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AiGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.dlp">dlp</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference">AiGatewayDlpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.guardrails">guardrails</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference">AiGatewayGuardrailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.isDefault">isDefault</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.otel">otel</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList">AiGatewayOtelList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.spendLimits">spendLimits</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference">AiGatewaySpendLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.stripe">stripe</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference">AiGatewayStripeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.authenticationInput">authenticationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheInvalidateOnUpdateInput">cacheInvalidateOnUpdateInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheTtlInput">cacheTtlInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.collectLogsInput">collectLogsInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.dlpInput">dlpInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp">AiGatewayDlp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.guardrailsInput">guardrailsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails">AiGatewayGuardrails</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagementInput">logManagementInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagementStrategyInput">logManagementStrategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpushInput">logpushInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpushPublicKeyInput">logpushPublicKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.otelInput">otelInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingIntervalInput">rateLimitingIntervalInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingLimitInput">rateLimitingLimitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingTechniqueInput">rateLimitingTechniqueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryBackoffInput">retryBackoffInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryDelayInput">retryDelayInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryMaxAttemptsInput">retryMaxAttemptsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.spendLimitsInput">spendLimitsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits">AiGatewaySpendLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.storeIdInput">storeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.stripeInput">stripeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe">AiGatewayStripe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.workersAiBillingModeInput">workersAiBillingModeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.zdrInput">zdrInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.authentication">authentication</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheInvalidateOnUpdate">cacheInvalidateOnUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheTtl">cacheTtl</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.collectLogs">collectLogs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagement">logManagement</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagementStrategy">logManagementStrategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpush">logpush</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpushPublicKey">logpushPublicKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingInterval">rateLimitingInterval</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingLimit">rateLimitingLimit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingTechnique">rateLimitingTechnique</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryBackoff">retryBackoff</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryDelay">retryDelay</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryMaxAttempts">retryMaxAttempts</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.storeId">storeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.workersAiBillingMode">workersAiBillingMode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.zdr">zdr</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `dlp`<sup>Required</sup> <a name="dlp" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.dlp"></a>

```java
public AiGatewayDlpOutputReference getDlp();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference">AiGatewayDlpOutputReference</a>

---

##### `guardrails`<sup>Required</sup> <a name="guardrails" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.guardrails"></a>

```java
public AiGatewayGuardrailsOutputReference getGuardrails();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference">AiGatewayGuardrailsOutputReference</a>

---

##### `isDefault`<sup>Required</sup> <a name="isDefault" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.isDefault"></a>

```java
public IResolvable getIsDefault();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `otel`<sup>Required</sup> <a name="otel" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.otel"></a>

```java
public AiGatewayOtelList getOtel();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList">AiGatewayOtelList</a>

---

##### `spendLimits`<sup>Required</sup> <a name="spendLimits" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.spendLimits"></a>

```java
public AiGatewaySpendLimitsOutputReference getSpendLimits();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference">AiGatewaySpendLimitsOutputReference</a>

---

##### `stripe`<sup>Required</sup> <a name="stripe" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.stripe"></a>

```java
public AiGatewayStripeOutputReference getStripe();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference">AiGatewayStripeOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.authenticationInput"></a>

```java
public java.lang.Boolean|IResolvable getAuthenticationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cacheInvalidateOnUpdateInput`<sup>Optional</sup> <a name="cacheInvalidateOnUpdateInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheInvalidateOnUpdateInput"></a>

```java
public java.lang.Boolean|IResolvable getCacheInvalidateOnUpdateInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cacheTtlInput`<sup>Optional</sup> <a name="cacheTtlInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheTtlInput"></a>

```java
public java.lang.Number getCacheTtlInput();
```

- *Type:* java.lang.Number

---

##### `collectLogsInput`<sup>Optional</sup> <a name="collectLogsInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.collectLogsInput"></a>

```java
public java.lang.Boolean|IResolvable getCollectLogsInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `dlpInput`<sup>Optional</sup> <a name="dlpInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.dlpInput"></a>

```java
public IResolvable|AiGatewayDlp getDlpInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp">AiGatewayDlp</a>

---

##### `guardrailsInput`<sup>Optional</sup> <a name="guardrailsInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.guardrailsInput"></a>

```java
public IResolvable|AiGatewayGuardrails getGuardrailsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails">AiGatewayGuardrails</a>

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `logManagementInput`<sup>Optional</sup> <a name="logManagementInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagementInput"></a>

```java
public java.lang.Number getLogManagementInput();
```

- *Type:* java.lang.Number

---

##### `logManagementStrategyInput`<sup>Optional</sup> <a name="logManagementStrategyInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagementStrategyInput"></a>

```java
public java.lang.String getLogManagementStrategyInput();
```

- *Type:* java.lang.String

---

##### `logpushInput`<sup>Optional</sup> <a name="logpushInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpushInput"></a>

```java
public java.lang.Boolean|IResolvable getLogpushInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `logpushPublicKeyInput`<sup>Optional</sup> <a name="logpushPublicKeyInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpushPublicKeyInput"></a>

```java
public java.lang.String getLogpushPublicKeyInput();
```

- *Type:* java.lang.String

---

##### `otelInput`<sup>Optional</sup> <a name="otelInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.otelInput"></a>

```java
public IResolvable|java.util.List<AiGatewayOtel> getOtelInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a>>

---

##### `rateLimitingIntervalInput`<sup>Optional</sup> <a name="rateLimitingIntervalInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingIntervalInput"></a>

```java
public java.lang.Number getRateLimitingIntervalInput();
```

- *Type:* java.lang.Number

---

##### `rateLimitingLimitInput`<sup>Optional</sup> <a name="rateLimitingLimitInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingLimitInput"></a>

```java
public java.lang.Number getRateLimitingLimitInput();
```

- *Type:* java.lang.Number

---

##### `rateLimitingTechniqueInput`<sup>Optional</sup> <a name="rateLimitingTechniqueInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingTechniqueInput"></a>

```java
public java.lang.String getRateLimitingTechniqueInput();
```

- *Type:* java.lang.String

---

##### `retryBackoffInput`<sup>Optional</sup> <a name="retryBackoffInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryBackoffInput"></a>

```java
public java.lang.String getRetryBackoffInput();
```

- *Type:* java.lang.String

---

##### `retryDelayInput`<sup>Optional</sup> <a name="retryDelayInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryDelayInput"></a>

```java
public java.lang.Number getRetryDelayInput();
```

- *Type:* java.lang.Number

---

##### `retryMaxAttemptsInput`<sup>Optional</sup> <a name="retryMaxAttemptsInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryMaxAttemptsInput"></a>

```java
public java.lang.Number getRetryMaxAttemptsInput();
```

- *Type:* java.lang.Number

---

##### `spendLimitsInput`<sup>Optional</sup> <a name="spendLimitsInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.spendLimitsInput"></a>

```java
public IResolvable|AiGatewaySpendLimits getSpendLimitsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits">AiGatewaySpendLimits</a>

---

##### `storeIdInput`<sup>Optional</sup> <a name="storeIdInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.storeIdInput"></a>

```java
public java.lang.String getStoreIdInput();
```

- *Type:* java.lang.String

---

##### `stripeInput`<sup>Optional</sup> <a name="stripeInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.stripeInput"></a>

```java
public IResolvable|AiGatewayStripe getStripeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe">AiGatewayStripe</a>

---

##### `workersAiBillingModeInput`<sup>Optional</sup> <a name="workersAiBillingModeInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.workersAiBillingModeInput"></a>

```java
public java.lang.String getWorkersAiBillingModeInput();
```

- *Type:* java.lang.String

---

##### `zdrInput`<sup>Optional</sup> <a name="zdrInput" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.zdrInput"></a>

```java
public java.lang.Boolean|IResolvable getZdrInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.authentication"></a>

```java
public java.lang.Boolean|IResolvable getAuthentication();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cacheInvalidateOnUpdate`<sup>Required</sup> <a name="cacheInvalidateOnUpdate" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheInvalidateOnUpdate"></a>

```java
public java.lang.Boolean|IResolvable getCacheInvalidateOnUpdate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `cacheTtl`<sup>Required</sup> <a name="cacheTtl" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.cacheTtl"></a>

```java
public java.lang.Number getCacheTtl();
```

- *Type:* java.lang.Number

---

##### `collectLogs`<sup>Required</sup> <a name="collectLogs" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.collectLogs"></a>

```java
public java.lang.Boolean|IResolvable getCollectLogs();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `logManagement`<sup>Required</sup> <a name="logManagement" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagement"></a>

```java
public java.lang.Number getLogManagement();
```

- *Type:* java.lang.Number

---

##### `logManagementStrategy`<sup>Required</sup> <a name="logManagementStrategy" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logManagementStrategy"></a>

```java
public java.lang.String getLogManagementStrategy();
```

- *Type:* java.lang.String

---

##### `logpush`<sup>Required</sup> <a name="logpush" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpush"></a>

```java
public java.lang.Boolean|IResolvable getLogpush();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `logpushPublicKey`<sup>Required</sup> <a name="logpushPublicKey" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.logpushPublicKey"></a>

```java
public java.lang.String getLogpushPublicKey();
```

- *Type:* java.lang.String

---

##### `rateLimitingInterval`<sup>Required</sup> <a name="rateLimitingInterval" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingInterval"></a>

```java
public java.lang.Number getRateLimitingInterval();
```

- *Type:* java.lang.Number

---

##### `rateLimitingLimit`<sup>Required</sup> <a name="rateLimitingLimit" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingLimit"></a>

```java
public java.lang.Number getRateLimitingLimit();
```

- *Type:* java.lang.Number

---

##### `rateLimitingTechnique`<sup>Required</sup> <a name="rateLimitingTechnique" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.rateLimitingTechnique"></a>

```java
public java.lang.String getRateLimitingTechnique();
```

- *Type:* java.lang.String

---

##### `retryBackoff`<sup>Required</sup> <a name="retryBackoff" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryBackoff"></a>

```java
public java.lang.String getRetryBackoff();
```

- *Type:* java.lang.String

---

##### `retryDelay`<sup>Required</sup> <a name="retryDelay" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryDelay"></a>

```java
public java.lang.Number getRetryDelay();
```

- *Type:* java.lang.Number

---

##### `retryMaxAttempts`<sup>Required</sup> <a name="retryMaxAttempts" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.retryMaxAttempts"></a>

```java
public java.lang.Number getRetryMaxAttempts();
```

- *Type:* java.lang.Number

---

##### `storeId`<sup>Required</sup> <a name="storeId" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.storeId"></a>

```java
public java.lang.String getStoreId();
```

- *Type:* java.lang.String

---

##### `workersAiBillingMode`<sup>Required</sup> <a name="workersAiBillingMode" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.workersAiBillingMode"></a>

```java
public java.lang.String getWorkersAiBillingMode();
```

- *Type:* java.lang.String

---

##### `zdr`<sup>Required</sup> <a name="zdr" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.zdr"></a>

```java
public java.lang.Boolean|IResolvable getZdr();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGateway.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.aiGateway.AiGateway.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AiGatewayConfig <a name="AiGatewayConfig" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewayConfig;

AiGatewayConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .cacheInvalidateOnUpdate(java.lang.Boolean|IResolvable)
    .cacheTtl(java.lang.Number)
    .collectLogs(java.lang.Boolean|IResolvable)
    .id(java.lang.String)
    .rateLimitingInterval(java.lang.Number)
    .rateLimitingLimit(java.lang.Number)
//  .authentication(java.lang.Boolean|IResolvable)
//  .dlp(AiGatewayDlp)
//  .guardrails(AiGatewayGuardrails)
//  .logManagement(java.lang.Number)
//  .logManagementStrategy(java.lang.String)
//  .logpush(java.lang.Boolean|IResolvable)
//  .logpushPublicKey(java.lang.String)
//  .otel(IResolvable|java.util.List<AiGatewayOtel>)
//  .rateLimitingTechnique(java.lang.String)
//  .retryBackoff(java.lang.String)
//  .retryDelay(java.lang.Number)
//  .retryMaxAttempts(java.lang.Number)
//  .spendLimits(AiGatewaySpendLimits)
//  .storeId(java.lang.String)
//  .stripe(AiGatewayStripe)
//  .workersAiBillingMode(java.lang.String)
//  .zdr(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#account_id AiGateway#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.cacheInvalidateOnUpdate">cacheInvalidateOnUpdate</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#cache_invalidate_on_update AiGateway#cache_invalidate_on_update}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.cacheTtl">cacheTtl</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#cache_ttl AiGateway#cache_ttl}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.collectLogs">collectLogs</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#collect_logs AiGateway#collect_logs}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.id">id</a></code> | <code>java.lang.String</code> | gateway id. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.rateLimitingInterval">rateLimitingInterval</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#rate_limiting_interval AiGateway#rate_limiting_interval}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.rateLimitingLimit">rateLimitingLimit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#rate_limiting_limit AiGateway#rate_limiting_limit}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.authentication">authentication</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#authentication AiGateway#authentication}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.dlp">dlp</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp">AiGatewayDlp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#dlp AiGateway#dlp}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.guardrails">guardrails</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails">AiGatewayGuardrails</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#guardrails AiGateway#guardrails}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logManagement">logManagement</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#log_management AiGateway#log_management}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logManagementStrategy">logManagementStrategy</a></code> | <code>java.lang.String</code> | Available values: "STOP_INSERTING", "DELETE_OLDEST". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logpush">logpush</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#logpush AiGateway#logpush}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logpushPublicKey">logpushPublicKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#logpush_public_key AiGateway#logpush_public_key}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.otel">otel</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#otel AiGateway#otel}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.rateLimitingTechnique">rateLimitingTechnique</a></code> | <code>java.lang.String</code> | Available values: "fixed", "sliding". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.retryBackoff">retryBackoff</a></code> | <code>java.lang.String</code> | Backoff strategy for retry delays Available values: "constant", "linear", "exponential". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.retryDelay">retryDelay</a></code> | <code>java.lang.Number</code> | Delay between retry attempts in milliseconds (0-5000). |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.retryMaxAttempts">retryMaxAttempts</a></code> | <code>java.lang.Number</code> | Maximum number of retry attempts for failed requests (1-5). |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.spendLimits">spendLimits</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits">AiGatewaySpendLimits</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#spend_limits AiGateway#spend_limits}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.storeId">storeId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#store_id AiGateway#store_id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.stripe">stripe</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe">AiGatewayStripe</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#stripe AiGateway#stripe}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.workersAiBillingMode">workersAiBillingMode</a></code> | <code>java.lang.String</code> | Controls how Workers AI inference calls routed through this gateway are billed. Only 'postpaid' is currently supported. Available values: "postpaid". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.zdr">zdr</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#zdr AiGateway#zdr}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#account_id AiGateway#account_id}.

---

##### `cacheInvalidateOnUpdate`<sup>Required</sup> <a name="cacheInvalidateOnUpdate" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.cacheInvalidateOnUpdate"></a>

```java
public java.lang.Boolean|IResolvable getCacheInvalidateOnUpdate();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#cache_invalidate_on_update AiGateway#cache_invalidate_on_update}.

---

##### `cacheTtl`<sup>Required</sup> <a name="cacheTtl" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.cacheTtl"></a>

```java
public java.lang.Number getCacheTtl();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#cache_ttl AiGateway#cache_ttl}.

---

##### `collectLogs`<sup>Required</sup> <a name="collectLogs" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.collectLogs"></a>

```java
public java.lang.Boolean|IResolvable getCollectLogs();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#collect_logs AiGateway#collect_logs}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

gateway id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#id AiGateway#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `rateLimitingInterval`<sup>Required</sup> <a name="rateLimitingInterval" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.rateLimitingInterval"></a>

```java
public java.lang.Number getRateLimitingInterval();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#rate_limiting_interval AiGateway#rate_limiting_interval}.

---

##### `rateLimitingLimit`<sup>Required</sup> <a name="rateLimitingLimit" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.rateLimitingLimit"></a>

```java
public java.lang.Number getRateLimitingLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#rate_limiting_limit AiGateway#rate_limiting_limit}.

---

##### `authentication`<sup>Optional</sup> <a name="authentication" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.authentication"></a>

```java
public java.lang.Boolean|IResolvable getAuthentication();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#authentication AiGateway#authentication}.

---

##### `dlp`<sup>Optional</sup> <a name="dlp" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.dlp"></a>

```java
public AiGatewayDlp getDlp();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp">AiGatewayDlp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#dlp AiGateway#dlp}.

---

##### `guardrails`<sup>Optional</sup> <a name="guardrails" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.guardrails"></a>

```java
public AiGatewayGuardrails getGuardrails();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails">AiGatewayGuardrails</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#guardrails AiGateway#guardrails}.

---

##### `logManagement`<sup>Optional</sup> <a name="logManagement" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logManagement"></a>

```java
public java.lang.Number getLogManagement();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#log_management AiGateway#log_management}.

---

##### `logManagementStrategy`<sup>Optional</sup> <a name="logManagementStrategy" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logManagementStrategy"></a>

```java
public java.lang.String getLogManagementStrategy();
```

- *Type:* java.lang.String

Available values: "STOP_INSERTING", "DELETE_OLDEST".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#log_management_strategy AiGateway#log_management_strategy}

---

##### `logpush`<sup>Optional</sup> <a name="logpush" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logpush"></a>

```java
public java.lang.Boolean|IResolvable getLogpush();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#logpush AiGateway#logpush}.

---

##### `logpushPublicKey`<sup>Optional</sup> <a name="logpushPublicKey" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.logpushPublicKey"></a>

```java
public java.lang.String getLogpushPublicKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#logpush_public_key AiGateway#logpush_public_key}.

---

##### `otel`<sup>Optional</sup> <a name="otel" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.otel"></a>

```java
public IResolvable|java.util.List<AiGatewayOtel> getOtel();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#otel AiGateway#otel}.

---

##### `rateLimitingTechnique`<sup>Optional</sup> <a name="rateLimitingTechnique" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.rateLimitingTechnique"></a>

```java
public java.lang.String getRateLimitingTechnique();
```

- *Type:* java.lang.String

Available values: "fixed", "sliding".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#rate_limiting_technique AiGateway#rate_limiting_technique}

---

##### `retryBackoff`<sup>Optional</sup> <a name="retryBackoff" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.retryBackoff"></a>

```java
public java.lang.String getRetryBackoff();
```

- *Type:* java.lang.String

Backoff strategy for retry delays Available values: "constant", "linear", "exponential".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#retry_backoff AiGateway#retry_backoff}

---

##### `retryDelay`<sup>Optional</sup> <a name="retryDelay" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.retryDelay"></a>

```java
public java.lang.Number getRetryDelay();
```

- *Type:* java.lang.Number

Delay between retry attempts in milliseconds (0-5000).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#retry_delay AiGateway#retry_delay}

---

##### `retryMaxAttempts`<sup>Optional</sup> <a name="retryMaxAttempts" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.retryMaxAttempts"></a>

```java
public java.lang.Number getRetryMaxAttempts();
```

- *Type:* java.lang.Number

Maximum number of retry attempts for failed requests (1-5).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#retry_max_attempts AiGateway#retry_max_attempts}

---

##### `spendLimits`<sup>Optional</sup> <a name="spendLimits" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.spendLimits"></a>

```java
public AiGatewaySpendLimits getSpendLimits();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits">AiGatewaySpendLimits</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#spend_limits AiGateway#spend_limits}.

---

##### `storeId`<sup>Optional</sup> <a name="storeId" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.storeId"></a>

```java
public java.lang.String getStoreId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#store_id AiGateway#store_id}.

---

##### `stripe`<sup>Optional</sup> <a name="stripe" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.stripe"></a>

```java
public AiGatewayStripe getStripe();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe">AiGatewayStripe</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#stripe AiGateway#stripe}.

---

##### `workersAiBillingMode`<sup>Optional</sup> <a name="workersAiBillingMode" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.workersAiBillingMode"></a>

```java
public java.lang.String getWorkersAiBillingMode();
```

- *Type:* java.lang.String

Controls how Workers AI inference calls routed through this gateway are billed. Only 'postpaid' is currently supported. Available values: "postpaid".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#workers_ai_billing_mode AiGateway#workers_ai_billing_mode}

---

##### `zdr`<sup>Optional</sup> <a name="zdr" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayConfig.property.zdr"></a>

```java
public java.lang.Boolean|IResolvable getZdr();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#zdr AiGateway#zdr}.

---

### AiGatewayDlp <a name="AiGatewayDlp" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewayDlp;

AiGatewayDlp.builder()
    .enabled(java.lang.Boolean|IResolvable)
//  .action(java.lang.String)
//  .policies(IResolvable|java.util.List<AiGatewayDlpPolicies>)
//  .profiles(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#enabled AiGateway#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.action">action</a></code> | <code>java.lang.String</code> | Available values: "BLOCK", "FLAG". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.policies">policies</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies">AiGatewayDlpPolicies</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#policies AiGateway#policies}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.profiles">profiles</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#profiles AiGateway#profiles}. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#enabled AiGateway#enabled}.

---

##### `action`<sup>Optional</sup> <a name="action" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Available values: "BLOCK", "FLAG".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#action AiGateway#action}

---

##### `policies`<sup>Optional</sup> <a name="policies" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.policies"></a>

```java
public IResolvable|java.util.List<AiGatewayDlpPolicies> getPolicies();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies">AiGatewayDlpPolicies</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#policies AiGateway#policies}.

---

##### `profiles`<sup>Optional</sup> <a name="profiles" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp.property.profiles"></a>

```java
public java.util.List<java.lang.String> getProfiles();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#profiles AiGateway#profiles}.

---

### AiGatewayDlpPolicies <a name="AiGatewayDlpPolicies" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewayDlpPolicies;

AiGatewayDlpPolicies.builder()
    .action(java.lang.String)
    .check(java.util.List<java.lang.String>)
    .enabled(java.lang.Boolean|IResolvable)
    .id(java.lang.String)
    .profiles(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.action">action</a></code> | <code>java.lang.String</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.check">check</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#check AiGateway#check}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#enabled AiGateway#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#id AiGateway#id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.profiles">profiles</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#profiles AiGateway#profiles}. |

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#action AiGateway#action}

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.check"></a>

```java
public java.util.List<java.lang.String> getCheck();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#check AiGateway#check}.

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#enabled AiGateway#enabled}.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#id AiGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies.property.profiles"></a>

```java
public java.util.List<java.lang.String> getProfiles();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#profiles AiGateway#profiles}.

---

### AiGatewayGuardrails <a name="AiGatewayGuardrails" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewayGuardrails;

AiGatewayGuardrails.builder()
    .prompt(AiGatewayGuardrailsPrompt)
    .response(AiGatewayGuardrailsResponse)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails.property.prompt">prompt</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt">AiGatewayGuardrailsPrompt</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#prompt AiGateway#prompt}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails.property.response">response</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse">AiGatewayGuardrailsResponse</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#response AiGateway#response}. |

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails.property.prompt"></a>

```java
public AiGatewayGuardrailsPrompt getPrompt();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt">AiGatewayGuardrailsPrompt</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#prompt AiGateway#prompt}.

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails.property.response"></a>

```java
public AiGatewayGuardrailsResponse getResponse();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse">AiGatewayGuardrailsResponse</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#response AiGateway#response}.

---

### AiGatewayGuardrailsPrompt <a name="AiGatewayGuardrailsPrompt" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewayGuardrailsPrompt;

AiGatewayGuardrailsPrompt.builder()
//  .p1(java.lang.String)
//  .s1(java.lang.String)
//  .s10(java.lang.String)
//  .s11(java.lang.String)
//  .s12(java.lang.String)
//  .s13(java.lang.String)
//  .s2(java.lang.String)
//  .s3(java.lang.String)
//  .s4(java.lang.String)
//  .s5(java.lang.String)
//  .s6(java.lang.String)
//  .s7(java.lang.String)
//  .s8(java.lang.String)
//  .s9(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.p1">p1</a></code> | <code>java.lang.String</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s1">s1</a></code> | <code>java.lang.String</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s10">s10</a></code> | <code>java.lang.String</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s11">s11</a></code> | <code>java.lang.String</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s12">s12</a></code> | <code>java.lang.String</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s13">s13</a></code> | <code>java.lang.String</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s2">s2</a></code> | <code>java.lang.String</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s3">s3</a></code> | <code>java.lang.String</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s4">s4</a></code> | <code>java.lang.String</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s5">s5</a></code> | <code>java.lang.String</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s6">s6</a></code> | <code>java.lang.String</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s7">s7</a></code> | <code>java.lang.String</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s8">s8</a></code> | <code>java.lang.String</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s9">s9</a></code> | <code>java.lang.String</code> | Available values: "FLAG", "BLOCK". |

---

##### `p1`<sup>Optional</sup> <a name="p1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.p1"></a>

```java
public java.lang.String getP1();
```

- *Type:* java.lang.String

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#p1 AiGateway#p1}

---

##### `s1`<sup>Optional</sup> <a name="s1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s1"></a>

```java
public java.lang.String getS1();
```

- *Type:* java.lang.String

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s1 AiGateway#s1}

---

##### `s10`<sup>Optional</sup> <a name="s10" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s10"></a>

```java
public java.lang.String getS10();
```

- *Type:* java.lang.String

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s10 AiGateway#s10}

---

##### `s11`<sup>Optional</sup> <a name="s11" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s11"></a>

```java
public java.lang.String getS11();
```

- *Type:* java.lang.String

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s11 AiGateway#s11}

---

##### `s12`<sup>Optional</sup> <a name="s12" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s12"></a>

```java
public java.lang.String getS12();
```

- *Type:* java.lang.String

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s12 AiGateway#s12}

---

##### `s13`<sup>Optional</sup> <a name="s13" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s13"></a>

```java
public java.lang.String getS13();
```

- *Type:* java.lang.String

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s13 AiGateway#s13}

---

##### `s2`<sup>Optional</sup> <a name="s2" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s2"></a>

```java
public java.lang.String getS2();
```

- *Type:* java.lang.String

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s2 AiGateway#s2}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s3"></a>

```java
public java.lang.String getS3();
```

- *Type:* java.lang.String

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s3 AiGateway#s3}

---

##### `s4`<sup>Optional</sup> <a name="s4" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s4"></a>

```java
public java.lang.String getS4();
```

- *Type:* java.lang.String

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s4 AiGateway#s4}

---

##### `s5`<sup>Optional</sup> <a name="s5" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s5"></a>

```java
public java.lang.String getS5();
```

- *Type:* java.lang.String

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s5 AiGateway#s5}

---

##### `s6`<sup>Optional</sup> <a name="s6" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s6"></a>

```java
public java.lang.String getS6();
```

- *Type:* java.lang.String

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s6 AiGateway#s6}

---

##### `s7`<sup>Optional</sup> <a name="s7" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s7"></a>

```java
public java.lang.String getS7();
```

- *Type:* java.lang.String

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s7 AiGateway#s7}

---

##### `s8`<sup>Optional</sup> <a name="s8" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s8"></a>

```java
public java.lang.String getS8();
```

- *Type:* java.lang.String

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s8 AiGateway#s8}

---

##### `s9`<sup>Optional</sup> <a name="s9" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt.property.s9"></a>

```java
public java.lang.String getS9();
```

- *Type:* java.lang.String

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s9 AiGateway#s9}

---

### AiGatewayGuardrailsResponse <a name="AiGatewayGuardrailsResponse" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewayGuardrailsResponse;

AiGatewayGuardrailsResponse.builder()
//  .p1(java.lang.String)
//  .s1(java.lang.String)
//  .s10(java.lang.String)
//  .s11(java.lang.String)
//  .s12(java.lang.String)
//  .s13(java.lang.String)
//  .s2(java.lang.String)
//  .s3(java.lang.String)
//  .s4(java.lang.String)
//  .s5(java.lang.String)
//  .s6(java.lang.String)
//  .s7(java.lang.String)
//  .s8(java.lang.String)
//  .s9(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.p1">p1</a></code> | <code>java.lang.String</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s1">s1</a></code> | <code>java.lang.String</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s10">s10</a></code> | <code>java.lang.String</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s11">s11</a></code> | <code>java.lang.String</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s12">s12</a></code> | <code>java.lang.String</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s13">s13</a></code> | <code>java.lang.String</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s2">s2</a></code> | <code>java.lang.String</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s3">s3</a></code> | <code>java.lang.String</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s4">s4</a></code> | <code>java.lang.String</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s5">s5</a></code> | <code>java.lang.String</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s6">s6</a></code> | <code>java.lang.String</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s7">s7</a></code> | <code>java.lang.String</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s8">s8</a></code> | <code>java.lang.String</code> | Available values: "FLAG", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s9">s9</a></code> | <code>java.lang.String</code> | Available values: "FLAG", "BLOCK". |

---

##### `p1`<sup>Optional</sup> <a name="p1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.p1"></a>

```java
public java.lang.String getP1();
```

- *Type:* java.lang.String

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#p1 AiGateway#p1}

---

##### `s1`<sup>Optional</sup> <a name="s1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s1"></a>

```java
public java.lang.String getS1();
```

- *Type:* java.lang.String

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s1 AiGateway#s1}

---

##### `s10`<sup>Optional</sup> <a name="s10" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s10"></a>

```java
public java.lang.String getS10();
```

- *Type:* java.lang.String

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s10 AiGateway#s10}

---

##### `s11`<sup>Optional</sup> <a name="s11" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s11"></a>

```java
public java.lang.String getS11();
```

- *Type:* java.lang.String

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s11 AiGateway#s11}

---

##### `s12`<sup>Optional</sup> <a name="s12" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s12"></a>

```java
public java.lang.String getS12();
```

- *Type:* java.lang.String

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s12 AiGateway#s12}

---

##### `s13`<sup>Optional</sup> <a name="s13" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s13"></a>

```java
public java.lang.String getS13();
```

- *Type:* java.lang.String

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s13 AiGateway#s13}

---

##### `s2`<sup>Optional</sup> <a name="s2" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s2"></a>

```java
public java.lang.String getS2();
```

- *Type:* java.lang.String

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s2 AiGateway#s2}

---

##### `s3`<sup>Optional</sup> <a name="s3" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s3"></a>

```java
public java.lang.String getS3();
```

- *Type:* java.lang.String

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s3 AiGateway#s3}

---

##### `s4`<sup>Optional</sup> <a name="s4" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s4"></a>

```java
public java.lang.String getS4();
```

- *Type:* java.lang.String

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s4 AiGateway#s4}

---

##### `s5`<sup>Optional</sup> <a name="s5" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s5"></a>

```java
public java.lang.String getS5();
```

- *Type:* java.lang.String

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s5 AiGateway#s5}

---

##### `s6`<sup>Optional</sup> <a name="s6" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s6"></a>

```java
public java.lang.String getS6();
```

- *Type:* java.lang.String

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s6 AiGateway#s6}

---

##### `s7`<sup>Optional</sup> <a name="s7" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s7"></a>

```java
public java.lang.String getS7();
```

- *Type:* java.lang.String

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s7 AiGateway#s7}

---

##### `s8`<sup>Optional</sup> <a name="s8" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s8"></a>

```java
public java.lang.String getS8();
```

- *Type:* java.lang.String

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s8 AiGateway#s8}

---

##### `s9`<sup>Optional</sup> <a name="s9" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse.property.s9"></a>

```java
public java.lang.String getS9();
```

- *Type:* java.lang.String

Available values: "FLAG", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#s9 AiGateway#s9}

---

### AiGatewayOtel <a name="AiGatewayOtel" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewayOtel;

AiGatewayOtel.builder()
    .headers(java.util.Map<java.lang.String, java.lang.String>)
    .url(java.lang.String)
//  .authorization(java.lang.String)
//  .contentType(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#headers AiGateway#headers}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.url">url</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#url AiGateway#url}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#authorization AiGateway#authorization}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.contentType">contentType</a></code> | <code>java.lang.String</code> | Available values: "json", "protobuf". |

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#headers AiGateway#headers}.

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#url AiGateway#url}.

---

##### `authorization`<sup>Optional</sup> <a name="authorization" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#authorization AiGateway#authorization}.

---

##### `contentType`<sup>Optional</sup> <a name="contentType" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

Available values: "json", "protobuf".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#content_type AiGateway#content_type}

---

### AiGatewaySpendLimits <a name="AiGatewaySpendLimits" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewaySpendLimits;

AiGatewaySpendLimits.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .rules(IResolvable|java.util.List<AiGatewaySpendLimitsRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#enabled AiGateway#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits.property.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules">AiGatewaySpendLimitsRules</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#rules AiGateway#rules}. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#enabled AiGateway#enabled}.

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits.property.rules"></a>

```java
public IResolvable|java.util.List<AiGatewaySpendLimitsRules> getRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules">AiGatewaySpendLimitsRules</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#rules AiGateway#rules}.

---

### AiGatewaySpendLimitsRules <a name="AiGatewaySpendLimitsRules" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewaySpendLimitsRules;

AiGatewaySpendLimitsRules.builder()
    .limit(java.lang.Number)
    .limitType(java.lang.String)
    .window(java.lang.Number)
//  .aiGatewayProvider(AiGatewaySpendLimitsRulesAiGatewayProvider)
//  .enabled(java.lang.Boolean|IResolvable)
//  .id(java.lang.String)
//  .metadata(IResolvable|java.util.Map<java.lang.String, AiGatewaySpendLimitsRulesMetadata>)
//  .model(AiGatewaySpendLimitsRulesModel)
//  .technique(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.limit">limit</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#limit AiGateway#limit}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.limitType">limitType</a></code> | <code>java.lang.String</code> | Available values: "cost". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.window">window</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#window AiGateway#window}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.aiGatewayProvider">aiGatewayProvider</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider">AiGatewaySpendLimitsRulesAiGatewayProvider</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#ai_gateway_provider AiGateway#ai_gateway_provider}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#enabled AiGateway#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.id">id</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#id AiGateway#id}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.metadata">metadata</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata">AiGatewaySpendLimitsRulesMetadata</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#metadata AiGateway#metadata}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.model">model</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel">AiGatewaySpendLimitsRulesModel</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#model AiGateway#model}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.technique">technique</a></code> | <code>java.lang.String</code> | Available values: "fixed", "sliding". |

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#limit AiGateway#limit}.

---

##### `limitType`<sup>Required</sup> <a name="limitType" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.limitType"></a>

```java
public java.lang.String getLimitType();
```

- *Type:* java.lang.String

Available values: "cost".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#limit_type AiGateway#limit_type}

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.window"></a>

```java
public java.lang.Number getWindow();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#window AiGateway#window}.

---

##### `aiGatewayProvider`<sup>Optional</sup> <a name="aiGatewayProvider" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.aiGatewayProvider"></a>

```java
public AiGatewaySpendLimitsRulesAiGatewayProvider getAiGatewayProvider();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider">AiGatewaySpendLimitsRulesAiGatewayProvider</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#ai_gateway_provider AiGateway#ai_gateway_provider}.

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#enabled AiGateway#enabled}.

---

##### `id`<sup>Optional</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#id AiGateway#id}.

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `metadata`<sup>Optional</sup> <a name="metadata" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.metadata"></a>

```java
public IResolvable|java.util.Map<java.lang.String, AiGatewaySpendLimitsRulesMetadata> getMetadata();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata">AiGatewaySpendLimitsRulesMetadata</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#metadata AiGateway#metadata}.

---

##### `model`<sup>Optional</sup> <a name="model" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.model"></a>

```java
public AiGatewaySpendLimitsRulesModel getModel();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel">AiGatewaySpendLimitsRulesModel</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#model AiGateway#model}.

---

##### `technique`<sup>Optional</sup> <a name="technique" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules.property.technique"></a>

```java
public java.lang.String getTechnique();
```

- *Type:* java.lang.String

Available values: "fixed", "sliding".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#technique AiGateway#technique}

---

### AiGatewaySpendLimitsRulesAiGatewayProvider <a name="AiGatewaySpendLimitsRulesAiGatewayProvider" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewaySpendLimitsRulesAiGatewayProvider;

AiGatewaySpendLimitsRulesAiGatewayProvider.builder()
    .mode(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider.property.mode">mode</a></code> | <code>java.lang.String</code> | Available values: "filter". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#values AiGateway#values}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Available values: "filter".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#mode AiGateway#mode}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#values AiGateway#values}.

---

### AiGatewaySpendLimitsRulesMetadata <a name="AiGatewaySpendLimitsRulesMetadata" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewaySpendLimitsRulesMetadata;

AiGatewaySpendLimitsRulesMetadata.builder()
    .mode(java.lang.String)
//  .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata.property.mode">mode</a></code> | <code>java.lang.String</code> | Available values: "partition", "filter". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#values AiGateway#values}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Available values: "partition", "filter".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#mode AiGateway#mode}

---

##### `values`<sup>Optional</sup> <a name="values" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#values AiGateway#values}.

---

### AiGatewaySpendLimitsRulesModel <a name="AiGatewaySpendLimitsRulesModel" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewaySpendLimitsRulesModel;

AiGatewaySpendLimitsRulesModel.builder()
    .mode(java.lang.String)
    .values(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel.property.mode">mode</a></code> | <code>java.lang.String</code> | Available values: "filter". |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#values AiGateway#values}. |

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

Available values: "filter".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#mode AiGateway#mode}

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#values AiGateway#values}.

---

### AiGatewayStripe <a name="AiGatewayStripe" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewayStripe;

AiGatewayStripe.builder()
    .authorization(java.lang.String)
    .usageEvents(IResolvable|java.util.List<AiGatewayStripeUsageEvents>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe.property.authorization">authorization</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#authorization AiGateway#authorization}. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe.property.usageEvents">usageEvents</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents">AiGatewayStripeUsageEvents</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#usage_events AiGateway#usage_events}. |

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#authorization AiGateway#authorization}.

---

##### `usageEvents`<sup>Required</sup> <a name="usageEvents" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe.property.usageEvents"></a>

```java
public IResolvable|java.util.List<AiGatewayStripeUsageEvents> getUsageEvents();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents">AiGatewayStripeUsageEvents</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#usage_events AiGateway#usage_events}.

---

### AiGatewayStripeUsageEvents <a name="AiGatewayStripeUsageEvents" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewayStripeUsageEvents;

AiGatewayStripeUsageEvents.builder()
    .payload(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents.property.payload">payload</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#payload AiGateway#payload}. |

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents.property.payload"></a>

```java
public java.lang.String getPayload();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/ai_gateway#payload AiGateway#payload}.

---

## Classes <a name="Classes" id="Classes"></a>

### AiGatewayDlpOutputReference <a name="AiGatewayDlpOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewayDlpOutputReference;

new AiGatewayDlpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.putPolicies">putPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resetAction">resetAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resetPolicies">resetPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resetProfiles">resetProfiles</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPolicies` <a name="putPolicies" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.putPolicies"></a>

```java
public void putPolicies(IResolvable|java.util.List<AiGatewayDlpPolicies> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.putPolicies.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies">AiGatewayDlpPolicies</a>>

---

##### `resetAction` <a name="resetAction" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resetAction"></a>

```java
public void resetAction()
```

##### `resetPolicies` <a name="resetPolicies" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resetPolicies"></a>

```java
public void resetPolicies()
```

##### `resetProfiles` <a name="resetProfiles" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.resetProfiles"></a>

```java
public void resetProfiles()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.policies">policies</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList">AiGatewayDlpPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.policiesInput">policiesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies">AiGatewayDlpPolicies</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.profilesInput">profilesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.profiles">profiles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp">AiGatewayDlp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `policies`<sup>Required</sup> <a name="policies" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.policies"></a>

```java
public AiGatewayDlpPoliciesList getPolicies();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList">AiGatewayDlpPoliciesList</a>

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `policiesInput`<sup>Optional</sup> <a name="policiesInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.policiesInput"></a>

```java
public IResolvable|java.util.List<AiGatewayDlpPolicies> getPoliciesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies">AiGatewayDlpPolicies</a>>

---

##### `profilesInput`<sup>Optional</sup> <a name="profilesInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.profilesInput"></a>

```java
public java.util.List<java.lang.String> getProfilesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.profiles"></a>

```java
public java.util.List<java.lang.String> getProfiles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayDlp getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlp">AiGatewayDlp</a>

---


### AiGatewayDlpPoliciesList <a name="AiGatewayDlpPoliciesList" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewayDlpPoliciesList;

new AiGatewayDlpPoliciesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.get"></a>

```java
public AiGatewayDlpPoliciesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies">AiGatewayDlpPolicies</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AiGatewayDlpPolicies> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies">AiGatewayDlpPolicies</a>>

---


### AiGatewayDlpPoliciesOutputReference <a name="AiGatewayDlpPoliciesOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewayDlpPoliciesOutputReference;

new AiGatewayDlpPoliciesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.actionInput">actionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.checkInput">checkInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.profilesInput">profilesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.action">action</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.check">check</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.profiles">profiles</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies">AiGatewayDlpPolicies</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `actionInput`<sup>Optional</sup> <a name="actionInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.actionInput"></a>

```java
public java.lang.String getActionInput();
```

- *Type:* java.lang.String

---

##### `checkInput`<sup>Optional</sup> <a name="checkInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.checkInput"></a>

```java
public java.util.List<java.lang.String> getCheckInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `profilesInput`<sup>Optional</sup> <a name="profilesInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.profilesInput"></a>

```java
public java.util.List<java.lang.String> getProfilesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `action`<sup>Required</sup> <a name="action" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.action"></a>

```java
public java.lang.String getAction();
```

- *Type:* java.lang.String

---

##### `check`<sup>Required</sup> <a name="check" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.check"></a>

```java
public java.util.List<java.lang.String> getCheck();
```

- *Type:* java.util.List<java.lang.String>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `profiles`<sup>Required</sup> <a name="profiles" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.profiles"></a>

```java
public java.util.List<java.lang.String> getProfiles();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPoliciesOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayDlpPolicies getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayDlpPolicies">AiGatewayDlpPolicies</a>

---


### AiGatewayGuardrailsOutputReference <a name="AiGatewayGuardrailsOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewayGuardrailsOutputReference;

new AiGatewayGuardrailsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putPrompt">putPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putResponse">putResponse</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putPrompt` <a name="putPrompt" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putPrompt"></a>

```java
public void putPrompt(AiGatewayGuardrailsPrompt value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putPrompt.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt">AiGatewayGuardrailsPrompt</a>

---

##### `putResponse` <a name="putResponse" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putResponse"></a>

```java
public void putResponse(AiGatewayGuardrailsResponse value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.putResponse.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse">AiGatewayGuardrailsResponse</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.prompt">prompt</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference">AiGatewayGuardrailsPromptOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.response">response</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference">AiGatewayGuardrailsResponseOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.promptInput">promptInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt">AiGatewayGuardrailsPrompt</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.responseInput">responseInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse">AiGatewayGuardrailsResponse</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails">AiGatewayGuardrails</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `prompt`<sup>Required</sup> <a name="prompt" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.prompt"></a>

```java
public AiGatewayGuardrailsPromptOutputReference getPrompt();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference">AiGatewayGuardrailsPromptOutputReference</a>

---

##### `response`<sup>Required</sup> <a name="response" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.response"></a>

```java
public AiGatewayGuardrailsResponseOutputReference getResponse();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference">AiGatewayGuardrailsResponseOutputReference</a>

---

##### `promptInput`<sup>Optional</sup> <a name="promptInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.promptInput"></a>

```java
public IResolvable|AiGatewayGuardrailsPrompt getPromptInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt">AiGatewayGuardrailsPrompt</a>

---

##### `responseInput`<sup>Optional</sup> <a name="responseInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.responseInput"></a>

```java
public IResolvable|AiGatewayGuardrailsResponse getResponseInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse">AiGatewayGuardrailsResponse</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayGuardrails getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrails">AiGatewayGuardrails</a>

---


### AiGatewayGuardrailsPromptOutputReference <a name="AiGatewayGuardrailsPromptOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewayGuardrailsPromptOutputReference;

new AiGatewayGuardrailsPromptOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetP1">resetP1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS1">resetS1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS10">resetS10</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS11">resetS11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS12">resetS12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS13">resetS13</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS2">resetS2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS3">resetS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS4">resetS4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS5">resetS5</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS6">resetS6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS7">resetS7</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS8">resetS8</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS9">resetS9</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetP1` <a name="resetP1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetP1"></a>

```java
public void resetP1()
```

##### `resetS1` <a name="resetS1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS1"></a>

```java
public void resetS1()
```

##### `resetS10` <a name="resetS10" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS10"></a>

```java
public void resetS10()
```

##### `resetS11` <a name="resetS11" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS11"></a>

```java
public void resetS11()
```

##### `resetS12` <a name="resetS12" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS12"></a>

```java
public void resetS12()
```

##### `resetS13` <a name="resetS13" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS13"></a>

```java
public void resetS13()
```

##### `resetS2` <a name="resetS2" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS2"></a>

```java
public void resetS2()
```

##### `resetS3` <a name="resetS3" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS3"></a>

```java
public void resetS3()
```

##### `resetS4` <a name="resetS4" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS4"></a>

```java
public void resetS4()
```

##### `resetS5` <a name="resetS5" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS5"></a>

```java
public void resetS5()
```

##### `resetS6` <a name="resetS6" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS6"></a>

```java
public void resetS6()
```

##### `resetS7` <a name="resetS7" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS7"></a>

```java
public void resetS7()
```

##### `resetS8` <a name="resetS8" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS8"></a>

```java
public void resetS8()
```

##### `resetS9` <a name="resetS9" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.resetS9"></a>

```java
public void resetS9()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.p1Input">p1Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s10Input">s10Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s11Input">s11Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s12Input">s12Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s13Input">s13Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s1Input">s1Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s2Input">s2Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s3Input">s3Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s4Input">s4Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s5Input">s5Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s6Input">s6Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s7Input">s7Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s8Input">s8Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s9Input">s9Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.p1">p1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s1">s1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s10">s10</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s11">s11</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s12">s12</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s13">s13</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s2">s2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s3">s3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s4">s4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s5">s5</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s6">s6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s7">s7</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s8">s8</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s9">s9</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt">AiGatewayGuardrailsPrompt</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `p1Input`<sup>Optional</sup> <a name="p1Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.p1Input"></a>

```java
public java.lang.String getP1Input();
```

- *Type:* java.lang.String

---

##### `s10Input`<sup>Optional</sup> <a name="s10Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s10Input"></a>

```java
public java.lang.String getS10Input();
```

- *Type:* java.lang.String

---

##### `s11Input`<sup>Optional</sup> <a name="s11Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s11Input"></a>

```java
public java.lang.String getS11Input();
```

- *Type:* java.lang.String

---

##### `s12Input`<sup>Optional</sup> <a name="s12Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s12Input"></a>

```java
public java.lang.String getS12Input();
```

- *Type:* java.lang.String

---

##### `s13Input`<sup>Optional</sup> <a name="s13Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s13Input"></a>

```java
public java.lang.String getS13Input();
```

- *Type:* java.lang.String

---

##### `s1Input`<sup>Optional</sup> <a name="s1Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s1Input"></a>

```java
public java.lang.String getS1Input();
```

- *Type:* java.lang.String

---

##### `s2Input`<sup>Optional</sup> <a name="s2Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s2Input"></a>

```java
public java.lang.String getS2Input();
```

- *Type:* java.lang.String

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s3Input"></a>

```java
public java.lang.String getS3Input();
```

- *Type:* java.lang.String

---

##### `s4Input`<sup>Optional</sup> <a name="s4Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s4Input"></a>

```java
public java.lang.String getS4Input();
```

- *Type:* java.lang.String

---

##### `s5Input`<sup>Optional</sup> <a name="s5Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s5Input"></a>

```java
public java.lang.String getS5Input();
```

- *Type:* java.lang.String

---

##### `s6Input`<sup>Optional</sup> <a name="s6Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s6Input"></a>

```java
public java.lang.String getS6Input();
```

- *Type:* java.lang.String

---

##### `s7Input`<sup>Optional</sup> <a name="s7Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s7Input"></a>

```java
public java.lang.String getS7Input();
```

- *Type:* java.lang.String

---

##### `s8Input`<sup>Optional</sup> <a name="s8Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s8Input"></a>

```java
public java.lang.String getS8Input();
```

- *Type:* java.lang.String

---

##### `s9Input`<sup>Optional</sup> <a name="s9Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s9Input"></a>

```java
public java.lang.String getS9Input();
```

- *Type:* java.lang.String

---

##### `p1`<sup>Required</sup> <a name="p1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.p1"></a>

```java
public java.lang.String getP1();
```

- *Type:* java.lang.String

---

##### `s1`<sup>Required</sup> <a name="s1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s1"></a>

```java
public java.lang.String getS1();
```

- *Type:* java.lang.String

---

##### `s10`<sup>Required</sup> <a name="s10" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s10"></a>

```java
public java.lang.String getS10();
```

- *Type:* java.lang.String

---

##### `s11`<sup>Required</sup> <a name="s11" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s11"></a>

```java
public java.lang.String getS11();
```

- *Type:* java.lang.String

---

##### `s12`<sup>Required</sup> <a name="s12" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s12"></a>

```java
public java.lang.String getS12();
```

- *Type:* java.lang.String

---

##### `s13`<sup>Required</sup> <a name="s13" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s13"></a>

```java
public java.lang.String getS13();
```

- *Type:* java.lang.String

---

##### `s2`<sup>Required</sup> <a name="s2" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s2"></a>

```java
public java.lang.String getS2();
```

- *Type:* java.lang.String

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s3"></a>

```java
public java.lang.String getS3();
```

- *Type:* java.lang.String

---

##### `s4`<sup>Required</sup> <a name="s4" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s4"></a>

```java
public java.lang.String getS4();
```

- *Type:* java.lang.String

---

##### `s5`<sup>Required</sup> <a name="s5" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s5"></a>

```java
public java.lang.String getS5();
```

- *Type:* java.lang.String

---

##### `s6`<sup>Required</sup> <a name="s6" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s6"></a>

```java
public java.lang.String getS6();
```

- *Type:* java.lang.String

---

##### `s7`<sup>Required</sup> <a name="s7" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s7"></a>

```java
public java.lang.String getS7();
```

- *Type:* java.lang.String

---

##### `s8`<sup>Required</sup> <a name="s8" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s8"></a>

```java
public java.lang.String getS8();
```

- *Type:* java.lang.String

---

##### `s9`<sup>Required</sup> <a name="s9" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.s9"></a>

```java
public java.lang.String getS9();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPromptOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayGuardrailsPrompt getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsPrompt">AiGatewayGuardrailsPrompt</a>

---


### AiGatewayGuardrailsResponseOutputReference <a name="AiGatewayGuardrailsResponseOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewayGuardrailsResponseOutputReference;

new AiGatewayGuardrailsResponseOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetP1">resetP1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS1">resetS1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS10">resetS10</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS11">resetS11</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS12">resetS12</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS13">resetS13</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS2">resetS2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS3">resetS3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS4">resetS4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS5">resetS5</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS6">resetS6</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS7">resetS7</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS8">resetS8</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS9">resetS9</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetP1` <a name="resetP1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetP1"></a>

```java
public void resetP1()
```

##### `resetS1` <a name="resetS1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS1"></a>

```java
public void resetS1()
```

##### `resetS10` <a name="resetS10" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS10"></a>

```java
public void resetS10()
```

##### `resetS11` <a name="resetS11" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS11"></a>

```java
public void resetS11()
```

##### `resetS12` <a name="resetS12" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS12"></a>

```java
public void resetS12()
```

##### `resetS13` <a name="resetS13" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS13"></a>

```java
public void resetS13()
```

##### `resetS2` <a name="resetS2" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS2"></a>

```java
public void resetS2()
```

##### `resetS3` <a name="resetS3" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS3"></a>

```java
public void resetS3()
```

##### `resetS4` <a name="resetS4" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS4"></a>

```java
public void resetS4()
```

##### `resetS5` <a name="resetS5" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS5"></a>

```java
public void resetS5()
```

##### `resetS6` <a name="resetS6" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS6"></a>

```java
public void resetS6()
```

##### `resetS7` <a name="resetS7" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS7"></a>

```java
public void resetS7()
```

##### `resetS8` <a name="resetS8" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS8"></a>

```java
public void resetS8()
```

##### `resetS9` <a name="resetS9" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.resetS9"></a>

```java
public void resetS9()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.p1Input">p1Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s10Input">s10Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s11Input">s11Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s12Input">s12Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s13Input">s13Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s1Input">s1Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s2Input">s2Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s3Input">s3Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s4Input">s4Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s5Input">s5Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s6Input">s6Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s7Input">s7Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s8Input">s8Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s9Input">s9Input</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.p1">p1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s1">s1</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s10">s10</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s11">s11</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s12">s12</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s13">s13</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s2">s2</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s3">s3</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s4">s4</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s5">s5</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s6">s6</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s7">s7</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s8">s8</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s9">s9</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse">AiGatewayGuardrailsResponse</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `p1Input`<sup>Optional</sup> <a name="p1Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.p1Input"></a>

```java
public java.lang.String getP1Input();
```

- *Type:* java.lang.String

---

##### `s10Input`<sup>Optional</sup> <a name="s10Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s10Input"></a>

```java
public java.lang.String getS10Input();
```

- *Type:* java.lang.String

---

##### `s11Input`<sup>Optional</sup> <a name="s11Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s11Input"></a>

```java
public java.lang.String getS11Input();
```

- *Type:* java.lang.String

---

##### `s12Input`<sup>Optional</sup> <a name="s12Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s12Input"></a>

```java
public java.lang.String getS12Input();
```

- *Type:* java.lang.String

---

##### `s13Input`<sup>Optional</sup> <a name="s13Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s13Input"></a>

```java
public java.lang.String getS13Input();
```

- *Type:* java.lang.String

---

##### `s1Input`<sup>Optional</sup> <a name="s1Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s1Input"></a>

```java
public java.lang.String getS1Input();
```

- *Type:* java.lang.String

---

##### `s2Input`<sup>Optional</sup> <a name="s2Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s2Input"></a>

```java
public java.lang.String getS2Input();
```

- *Type:* java.lang.String

---

##### `s3Input`<sup>Optional</sup> <a name="s3Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s3Input"></a>

```java
public java.lang.String getS3Input();
```

- *Type:* java.lang.String

---

##### `s4Input`<sup>Optional</sup> <a name="s4Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s4Input"></a>

```java
public java.lang.String getS4Input();
```

- *Type:* java.lang.String

---

##### `s5Input`<sup>Optional</sup> <a name="s5Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s5Input"></a>

```java
public java.lang.String getS5Input();
```

- *Type:* java.lang.String

---

##### `s6Input`<sup>Optional</sup> <a name="s6Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s6Input"></a>

```java
public java.lang.String getS6Input();
```

- *Type:* java.lang.String

---

##### `s7Input`<sup>Optional</sup> <a name="s7Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s7Input"></a>

```java
public java.lang.String getS7Input();
```

- *Type:* java.lang.String

---

##### `s8Input`<sup>Optional</sup> <a name="s8Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s8Input"></a>

```java
public java.lang.String getS8Input();
```

- *Type:* java.lang.String

---

##### `s9Input`<sup>Optional</sup> <a name="s9Input" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s9Input"></a>

```java
public java.lang.String getS9Input();
```

- *Type:* java.lang.String

---

##### `p1`<sup>Required</sup> <a name="p1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.p1"></a>

```java
public java.lang.String getP1();
```

- *Type:* java.lang.String

---

##### `s1`<sup>Required</sup> <a name="s1" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s1"></a>

```java
public java.lang.String getS1();
```

- *Type:* java.lang.String

---

##### `s10`<sup>Required</sup> <a name="s10" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s10"></a>

```java
public java.lang.String getS10();
```

- *Type:* java.lang.String

---

##### `s11`<sup>Required</sup> <a name="s11" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s11"></a>

```java
public java.lang.String getS11();
```

- *Type:* java.lang.String

---

##### `s12`<sup>Required</sup> <a name="s12" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s12"></a>

```java
public java.lang.String getS12();
```

- *Type:* java.lang.String

---

##### `s13`<sup>Required</sup> <a name="s13" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s13"></a>

```java
public java.lang.String getS13();
```

- *Type:* java.lang.String

---

##### `s2`<sup>Required</sup> <a name="s2" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s2"></a>

```java
public java.lang.String getS2();
```

- *Type:* java.lang.String

---

##### `s3`<sup>Required</sup> <a name="s3" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s3"></a>

```java
public java.lang.String getS3();
```

- *Type:* java.lang.String

---

##### `s4`<sup>Required</sup> <a name="s4" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s4"></a>

```java
public java.lang.String getS4();
```

- *Type:* java.lang.String

---

##### `s5`<sup>Required</sup> <a name="s5" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s5"></a>

```java
public java.lang.String getS5();
```

- *Type:* java.lang.String

---

##### `s6`<sup>Required</sup> <a name="s6" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s6"></a>

```java
public java.lang.String getS6();
```

- *Type:* java.lang.String

---

##### `s7`<sup>Required</sup> <a name="s7" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s7"></a>

```java
public java.lang.String getS7();
```

- *Type:* java.lang.String

---

##### `s8`<sup>Required</sup> <a name="s8" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s8"></a>

```java
public java.lang.String getS8();
```

- *Type:* java.lang.String

---

##### `s9`<sup>Required</sup> <a name="s9" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.s9"></a>

```java
public java.lang.String getS9();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponseOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayGuardrailsResponse getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayGuardrailsResponse">AiGatewayGuardrailsResponse</a>

---


### AiGatewayOtelList <a name="AiGatewayOtelList" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewayOtelList;

new AiGatewayOtelList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.get"></a>

```java
public AiGatewayOtelOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AiGatewayOtel> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a>>

---


### AiGatewayOtelOutputReference <a name="AiGatewayOtelOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewayOtelOutputReference;

new AiGatewayOtelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.resetAuthorization">resetAuthorization</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.resetContentType">resetContentType</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetAuthorization` <a name="resetAuthorization" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.resetAuthorization"></a>

```java
public void resetAuthorization()
```

##### `resetContentType` <a name="resetContentType" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.resetContentType"></a>

```java
public void resetContentType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.authorizationInput">authorizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.contentTypeInput">contentTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.headersInput">headersInput</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.contentType">contentType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.headers">headers</a></code> | <code>java.util.Map<java.lang.String, java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.authorizationInput"></a>

```java
public java.lang.String getAuthorizationInput();
```

- *Type:* java.lang.String

---

##### `contentTypeInput`<sup>Optional</sup> <a name="contentTypeInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.contentTypeInput"></a>

```java
public java.lang.String getContentTypeInput();
```

- *Type:* java.lang.String

---

##### `headersInput`<sup>Optional</sup> <a name="headersInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.headersInput"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeadersInput();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `contentType`<sup>Required</sup> <a name="contentType" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.contentType"></a>

```java
public java.lang.String getContentType();
```

- *Type:* java.lang.String

---

##### `headers`<sup>Required</sup> <a name="headers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.headers"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getHeaders();
```

- *Type:* java.util.Map<java.lang.String, java.lang.String>

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayOtelOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayOtel getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayOtel">AiGatewayOtel</a>

---


### AiGatewaySpendLimitsOutputReference <a name="AiGatewaySpendLimitsOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewaySpendLimitsOutputReference;

new AiGatewaySpendLimitsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.resetRules">resetRules</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putRules` <a name="putRules" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.putRules"></a>

```java
public void putRules(IResolvable|java.util.List<AiGatewaySpendLimitsRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.putRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules">AiGatewaySpendLimitsRules</a>>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetRules` <a name="resetRules" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.resetRules"></a>

```java
public void resetRules()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList">AiGatewaySpendLimitsRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.rulesInput">rulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules">AiGatewaySpendLimitsRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits">AiGatewaySpendLimits</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.rules"></a>

```java
public AiGatewaySpendLimitsRulesList getRules();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList">AiGatewaySpendLimitsRulesList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.rulesInput"></a>

```java
public IResolvable|java.util.List<AiGatewaySpendLimitsRules> getRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules">AiGatewaySpendLimitsRules</a>>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewaySpendLimits getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimits">AiGatewaySpendLimits</a>

---


### AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference <a name="AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference;

new AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider">AiGatewaySpendLimitsRulesAiGatewayProvider</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewaySpendLimitsRulesAiGatewayProvider getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider">AiGatewaySpendLimitsRulesAiGatewayProvider</a>

---


### AiGatewaySpendLimitsRulesList <a name="AiGatewaySpendLimitsRulesList" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewaySpendLimitsRulesList;

new AiGatewaySpendLimitsRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.get"></a>

```java
public AiGatewaySpendLimitsRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules">AiGatewaySpendLimitsRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AiGatewaySpendLimitsRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules">AiGatewaySpendLimitsRules</a>>

---


### AiGatewaySpendLimitsRulesMetadataMap <a name="AiGatewaySpendLimitsRulesMetadataMap" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewaySpendLimitsRulesMetadataMap;

new AiGatewaySpendLimitsRulesMetadataMap(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.get">get</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.get"></a>

```java
public AiGatewaySpendLimitsRulesMetadataOutputReference get(java.lang.String key)
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.get.parameter.key"></a>

- *Type:* java.lang.String

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata">AiGatewaySpendLimitsRulesMetadata</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap.property.internalValue"></a>

```java
public IResolvable|java.util.Map<java.lang.String, AiGatewaySpendLimitsRulesMetadata> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata">AiGatewaySpendLimitsRulesMetadata</a>>

---


### AiGatewaySpendLimitsRulesMetadataOutputReference <a name="AiGatewaySpendLimitsRulesMetadataOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewaySpendLimitsRulesMetadataOutputReference;

new AiGatewaySpendLimitsRulesMetadataOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.String complexObjectKey);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>java.lang.String</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* java.lang.String

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.resetValues">resetValues</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetValues` <a name="resetValues" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.resetValues"></a>

```java
public void resetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata">AiGatewaySpendLimitsRulesMetadata</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewaySpendLimitsRulesMetadata getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata">AiGatewaySpendLimitsRulesMetadata</a>

---


### AiGatewaySpendLimitsRulesModelOutputReference <a name="AiGatewaySpendLimitsRulesModelOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewaySpendLimitsRulesModelOutputReference;

new AiGatewaySpendLimitsRulesModelOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.modeInput">modeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.valuesInput">valuesInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.mode">mode</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.values">values</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel">AiGatewaySpendLimitsRulesModel</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `modeInput`<sup>Optional</sup> <a name="modeInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.modeInput"></a>

```java
public java.lang.String getModeInput();
```

- *Type:* java.lang.String

---

##### `valuesInput`<sup>Optional</sup> <a name="valuesInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.valuesInput"></a>

```java
public java.util.List<java.lang.String> getValuesInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `mode`<sup>Required</sup> <a name="mode" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.mode"></a>

```java
public java.lang.String getMode();
```

- *Type:* java.lang.String

---

##### `values`<sup>Required</sup> <a name="values" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.values"></a>

```java
public java.util.List<java.lang.String> getValues();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewaySpendLimitsRulesModel getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel">AiGatewaySpendLimitsRulesModel</a>

---


### AiGatewaySpendLimitsRulesOutputReference <a name="AiGatewaySpendLimitsRulesOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewaySpendLimitsRulesOutputReference;

new AiGatewaySpendLimitsRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putAiGatewayProvider">putAiGatewayProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putMetadata">putMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putModel">putModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetAiGatewayProvider">resetAiGatewayProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetId">resetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetMetadata">resetMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetModel">resetModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetTechnique">resetTechnique</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAiGatewayProvider` <a name="putAiGatewayProvider" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putAiGatewayProvider"></a>

```java
public void putAiGatewayProvider(AiGatewaySpendLimitsRulesAiGatewayProvider value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putAiGatewayProvider.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider">AiGatewaySpendLimitsRulesAiGatewayProvider</a>

---

##### `putMetadata` <a name="putMetadata" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putMetadata"></a>

```java
public void putMetadata(IResolvable|java.util.Map<java.lang.String, AiGatewaySpendLimitsRulesMetadata> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putMetadata.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata">AiGatewaySpendLimitsRulesMetadata</a>>

---

##### `putModel` <a name="putModel" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putModel"></a>

```java
public void putModel(AiGatewaySpendLimitsRulesModel value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.putModel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel">AiGatewaySpendLimitsRulesModel</a>

---

##### `resetAiGatewayProvider` <a name="resetAiGatewayProvider" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetAiGatewayProvider"></a>

```java
public void resetAiGatewayProvider()
```

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetId` <a name="resetId" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetId"></a>

```java
public void resetId()
```

##### `resetMetadata` <a name="resetMetadata" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetMetadata"></a>

```java
public void resetMetadata()
```

##### `resetModel` <a name="resetModel" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetModel"></a>

```java
public void resetModel()
```

##### `resetTechnique` <a name="resetTechnique" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.resetTechnique"></a>

```java
public void resetTechnique()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.aiGatewayProvider">aiGatewayProvider</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference">AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.metadata">metadata</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap">AiGatewaySpendLimitsRulesMetadataMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.model">model</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference">AiGatewaySpendLimitsRulesModelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.aiGatewayProviderInput">aiGatewayProviderInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider">AiGatewaySpendLimitsRulesAiGatewayProvider</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limitInput">limitInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limitTypeInput">limitTypeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.metadataInput">metadataInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.Map<java.lang.String, <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata">AiGatewaySpendLimitsRulesMetadata</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.modelInput">modelInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel">AiGatewaySpendLimitsRulesModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.techniqueInput">techniqueInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.windowInput">windowInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limit">limit</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limitType">limitType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.technique">technique</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.window">window</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules">AiGatewaySpendLimitsRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `aiGatewayProvider`<sup>Required</sup> <a name="aiGatewayProvider" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.aiGatewayProvider"></a>

```java
public AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference getAiGatewayProvider();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference">AiGatewaySpendLimitsRulesAiGatewayProviderOutputReference</a>

---

##### `metadata`<sup>Required</sup> <a name="metadata" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.metadata"></a>

```java
public AiGatewaySpendLimitsRulesMetadataMap getMetadata();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadataMap">AiGatewaySpendLimitsRulesMetadataMap</a>

---

##### `model`<sup>Required</sup> <a name="model" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.model"></a>

```java
public AiGatewaySpendLimitsRulesModelOutputReference getModel();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModelOutputReference">AiGatewaySpendLimitsRulesModelOutputReference</a>

---

##### `aiGatewayProviderInput`<sup>Optional</sup> <a name="aiGatewayProviderInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.aiGatewayProviderInput"></a>

```java
public IResolvable|AiGatewaySpendLimitsRulesAiGatewayProvider getAiGatewayProviderInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesAiGatewayProvider">AiGatewaySpendLimitsRulesAiGatewayProvider</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `limitInput`<sup>Optional</sup> <a name="limitInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limitInput"></a>

```java
public java.lang.Number getLimitInput();
```

- *Type:* java.lang.Number

---

##### `limitTypeInput`<sup>Optional</sup> <a name="limitTypeInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limitTypeInput"></a>

```java
public java.lang.String getLimitTypeInput();
```

- *Type:* java.lang.String

---

##### `metadataInput`<sup>Optional</sup> <a name="metadataInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.metadataInput"></a>

```java
public IResolvable|java.util.Map<java.lang.String, AiGatewaySpendLimitsRulesMetadata> getMetadataInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.Map<java.lang.String, <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesMetadata">AiGatewaySpendLimitsRulesMetadata</a>>

---

##### `modelInput`<sup>Optional</sup> <a name="modelInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.modelInput"></a>

```java
public IResolvable|AiGatewaySpendLimitsRulesModel getModelInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesModel">AiGatewaySpendLimitsRulesModel</a>

---

##### `techniqueInput`<sup>Optional</sup> <a name="techniqueInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.techniqueInput"></a>

```java
public java.lang.String getTechniqueInput();
```

- *Type:* java.lang.String

---

##### `windowInput`<sup>Optional</sup> <a name="windowInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.windowInput"></a>

```java
public java.lang.Number getWindowInput();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `limit`<sup>Required</sup> <a name="limit" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limit"></a>

```java
public java.lang.Number getLimit();
```

- *Type:* java.lang.Number

---

##### `limitType`<sup>Required</sup> <a name="limitType" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.limitType"></a>

```java
public java.lang.String getLimitType();
```

- *Type:* java.lang.String

---

##### `technique`<sup>Required</sup> <a name="technique" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.technique"></a>

```java
public java.lang.String getTechnique();
```

- *Type:* java.lang.String

---

##### `window`<sup>Required</sup> <a name="window" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.window"></a>

```java
public java.lang.Number getWindow();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewaySpendLimitsRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewaySpendLimitsRules">AiGatewaySpendLimitsRules</a>

---


### AiGatewayStripeOutputReference <a name="AiGatewayStripeOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewayStripeOutputReference;

new AiGatewayStripeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.putUsageEvents">putUsageEvents</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUsageEvents` <a name="putUsageEvents" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.putUsageEvents"></a>

```java
public void putUsageEvents(IResolvable|java.util.List<AiGatewayStripeUsageEvents> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.putUsageEvents.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents">AiGatewayStripeUsageEvents</a>>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.usageEvents">usageEvents</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList">AiGatewayStripeUsageEventsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.authorizationInput">authorizationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.usageEventsInput">usageEventsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents">AiGatewayStripeUsageEvents</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.authorization">authorization</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe">AiGatewayStripe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `usageEvents`<sup>Required</sup> <a name="usageEvents" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.usageEvents"></a>

```java
public AiGatewayStripeUsageEventsList getUsageEvents();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList">AiGatewayStripeUsageEventsList</a>

---

##### `authorizationInput`<sup>Optional</sup> <a name="authorizationInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.authorizationInput"></a>

```java
public java.lang.String getAuthorizationInput();
```

- *Type:* java.lang.String

---

##### `usageEventsInput`<sup>Optional</sup> <a name="usageEventsInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.usageEventsInput"></a>

```java
public IResolvable|java.util.List<AiGatewayStripeUsageEvents> getUsageEventsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents">AiGatewayStripeUsageEvents</a>>

---

##### `authorization`<sup>Required</sup> <a name="authorization" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.authorization"></a>

```java
public java.lang.String getAuthorization();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayStripe getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripe">AiGatewayStripe</a>

---


### AiGatewayStripeUsageEventsList <a name="AiGatewayStripeUsageEventsList" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewayStripeUsageEventsList;

new AiGatewayStripeUsageEventsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.get"></a>

```java
public AiGatewayStripeUsageEventsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents">AiGatewayStripeUsageEvents</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AiGatewayStripeUsageEvents> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents">AiGatewayStripeUsageEvents</a>>

---


### AiGatewayStripeUsageEventsOutputReference <a name="AiGatewayStripeUsageEventsOutputReference" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_gateway.AiGatewayStripeUsageEventsOutputReference;

new AiGatewayStripeUsageEventsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.payloadInput">payloadInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.payload">payload</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents">AiGatewayStripeUsageEvents</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `payloadInput`<sup>Optional</sup> <a name="payloadInput" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.payloadInput"></a>

```java
public java.lang.String getPayloadInput();
```

- *Type:* java.lang.String

---

##### `payload`<sup>Required</sup> <a name="payload" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.payload"></a>

```java
public java.lang.String getPayload();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEventsOutputReference.property.internalValue"></a>

```java
public IResolvable|AiGatewayStripeUsageEvents getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiGateway.AiGatewayStripeUsageEvents">AiGatewayStripeUsageEvents</a>

---



