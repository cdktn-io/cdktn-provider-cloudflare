# `dataCloudflareZeroTrustCasbIntegrations` Submodule <a name="`dataCloudflareZeroTrustCasbIntegrations` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCasbIntegrations <a name="DataCloudflareZeroTrustCasbIntegrations" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations cloudflare_zero_trust_casb_integrations}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_casb_integrations.DataCloudflareZeroTrustCasbIntegrations;

DataCloudflareZeroTrustCasbIntegrations.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .application(java.lang.String)
//  .direction(java.lang.String)
//  .dlpEnabled(java.lang.Boolean|IResolvable)
//  .maxItems(java.lang.Number)
//  .order(java.lang.String)
//  .page(java.lang.Number)
//  .pageSize(java.lang.Number)
//  .search(java.lang.String)
//  .status(java.lang.String)
//  .useCases(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#account_id DataCloudflareZeroTrustCasbIntegrations#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.application">application</a></code> | <code>java.lang.String</code> | Filter by application/vendor (e.g., GOOGLE_WORKSPACE, MICROSOFT_INTERNAL). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.direction">direction</a></code> | <code>java.lang.String</code> | Direction to order results. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.dlpEnabled">dlpEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Filter by DLP enabled status (true/false). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.order">order</a></code> | <code>java.lang.String</code> | Field to order results by. Available values: "application", "created", "name", "status". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.page">page</a></code> | <code>java.lang.Number</code> | Page number within the paginated result set. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | Number of results per page. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.search">search</a></code> | <code>java.lang.String</code> | Search integrations by name or application. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.status">status</a></code> | <code>java.lang.String</code> | Filter by integration status. Available values: "Healthy", "Initializing", "Offline", "Unhealthy". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.useCases">useCases</a></code> | <code>java.lang.String</code> | Filter by one enabled use case (for example, casb or ces). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#account_id DataCloudflareZeroTrustCasbIntegrations#account_id}.

---

##### `application`<sup>Optional</sup> <a name="application" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.application"></a>

- *Type:* java.lang.String

Filter by application/vendor (e.g., GOOGLE_WORKSPACE, MICROSOFT_INTERNAL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#application DataCloudflareZeroTrustCasbIntegrations#application}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.direction"></a>

- *Type:* java.lang.String

Direction to order results. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#direction DataCloudflareZeroTrustCasbIntegrations#direction}

---

##### `dlpEnabled`<sup>Optional</sup> <a name="dlpEnabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.dlpEnabled"></a>

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Filter by DLP enabled status (true/false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#dlp_enabled DataCloudflareZeroTrustCasbIntegrations#dlp_enabled}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#max_items DataCloudflareZeroTrustCasbIntegrations#max_items}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.order"></a>

- *Type:* java.lang.String

Field to order results by. Available values: "application", "created", "name", "status".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#order DataCloudflareZeroTrustCasbIntegrations#order}

---

##### `page`<sup>Optional</sup> <a name="page" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.page"></a>

- *Type:* java.lang.Number

Page number within the paginated result set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#page DataCloudflareZeroTrustCasbIntegrations#page}

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.pageSize"></a>

- *Type:* java.lang.Number

Number of results per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#page_size DataCloudflareZeroTrustCasbIntegrations#page_size}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.search"></a>

- *Type:* java.lang.String

Search integrations by name or application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#search DataCloudflareZeroTrustCasbIntegrations#search}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.status"></a>

- *Type:* java.lang.String

Filter by integration status. Available values: "Healthy", "Initializing", "Offline", "Unhealthy".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#status DataCloudflareZeroTrustCasbIntegrations#status}

---

##### `useCases`<sup>Optional</sup> <a name="useCases" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.Initializer.parameter.useCases"></a>

- *Type:* java.lang.String

Filter by one enabled use case (for example, casb or ces).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#use_cases DataCloudflareZeroTrustCasbIntegrations#use_cases}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetApplication">resetApplication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetDlpEnabled">resetDlpEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetPage">resetPage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetPageSize">resetPageSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetSearch">resetSearch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetStatus">resetStatus</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetUseCases">resetUseCases</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetApplication` <a name="resetApplication" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetApplication"></a>

```java
public void resetApplication()
```

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetDlpEnabled` <a name="resetDlpEnabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetDlpEnabled"></a>

```java
public void resetDlpEnabled()
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetMaxItems"></a>

```java
public void resetMaxItems()
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetPage` <a name="resetPage" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetPage"></a>

```java
public void resetPage()
```

##### `resetPageSize` <a name="resetPageSize" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetPageSize"></a>

```java
public void resetPageSize()
```

##### `resetSearch` <a name="resetSearch" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetSearch"></a>

```java
public void resetSearch()
```

##### `resetStatus` <a name="resetStatus" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetStatus"></a>

```java
public void resetStatus()
```

##### `resetUseCases` <a name="resetUseCases" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.resetUseCases"></a>

```java
public void resetUseCases()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCasbIntegrations resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_casb_integrations.DataCloudflareZeroTrustCasbIntegrations;

DataCloudflareZeroTrustCasbIntegrations.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_casb_integrations.DataCloudflareZeroTrustCasbIntegrations;

DataCloudflareZeroTrustCasbIntegrations.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_casb_integrations.DataCloudflareZeroTrustCasbIntegrations;

DataCloudflareZeroTrustCasbIntegrations.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_casb_integrations.DataCloudflareZeroTrustCasbIntegrations;

DataCloudflareZeroTrustCasbIntegrations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareZeroTrustCasbIntegrations.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCasbIntegrations resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareZeroTrustCasbIntegrations to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareZeroTrustCasbIntegrations that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCasbIntegrations to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList">DataCloudflareZeroTrustCasbIntegrationsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.applicationInput">applicationInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.dlpEnabledInput">dlpEnabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.orderInput">orderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.pageInput">pageInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.pageSizeInput">pageSizeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.searchInput">searchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.statusInput">statusInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.useCasesInput">useCasesInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.application">application</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.dlpEnabled">dlpEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.order">order</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.page">page</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.search">search</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.useCases">useCases</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.result"></a>

```java
public DataCloudflareZeroTrustCasbIntegrationsResultList getResult();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList">DataCloudflareZeroTrustCasbIntegrationsResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `applicationInput`<sup>Optional</sup> <a name="applicationInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.applicationInput"></a>

```java
public java.lang.String getApplicationInput();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `dlpEnabledInput`<sup>Optional</sup> <a name="dlpEnabledInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.dlpEnabledInput"></a>

```java
public java.lang.Boolean|IResolvable getDlpEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.orderInput"></a>

```java
public java.lang.String getOrderInput();
```

- *Type:* java.lang.String

---

##### `pageInput`<sup>Optional</sup> <a name="pageInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.pageInput"></a>

```java
public java.lang.Number getPageInput();
```

- *Type:* java.lang.Number

---

##### `pageSizeInput`<sup>Optional</sup> <a name="pageSizeInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.pageSizeInput"></a>

```java
public java.lang.Number getPageSizeInput();
```

- *Type:* java.lang.Number

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.searchInput"></a>

```java
public java.lang.String getSearchInput();
```

- *Type:* java.lang.String

---

##### `statusInput`<sup>Optional</sup> <a name="statusInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.statusInput"></a>

```java
public java.lang.String getStatusInput();
```

- *Type:* java.lang.String

---

##### `useCasesInput`<sup>Optional</sup> <a name="useCasesInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.useCasesInput"></a>

```java
public java.lang.String getUseCasesInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.application"></a>

```java
public java.lang.String getApplication();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `dlpEnabled`<sup>Required</sup> <a name="dlpEnabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.dlpEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDlpEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

---

##### `page`<sup>Required</sup> <a name="page" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.page"></a>

```java
public java.lang.Number getPage();
```

- *Type:* java.lang.Number

---

##### `pageSize`<sup>Required</sup> <a name="pageSize" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `useCases`<sup>Required</sup> <a name="useCases" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.useCases"></a>

```java
public java.lang.String getUseCases();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrations.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCasbIntegrationsConfig <a name="DataCloudflareZeroTrustCasbIntegrationsConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_casb_integrations.DataCloudflareZeroTrustCasbIntegrationsConfig;

DataCloudflareZeroTrustCasbIntegrationsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .application(java.lang.String)
//  .direction(java.lang.String)
//  .dlpEnabled(java.lang.Boolean|IResolvable)
//  .maxItems(java.lang.Number)
//  .order(java.lang.String)
//  .page(java.lang.Number)
//  .pageSize(java.lang.Number)
//  .search(java.lang.String)
//  .status(java.lang.String)
//  .useCases(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#account_id DataCloudflareZeroTrustCasbIntegrations#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.application">application</a></code> | <code>java.lang.String</code> | Filter by application/vendor (e.g., GOOGLE_WORKSPACE, MICROSOFT_INTERNAL). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.direction">direction</a></code> | <code>java.lang.String</code> | Direction to order results. Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.dlpEnabled">dlpEnabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Filter by DLP enabled status (true/false). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.order">order</a></code> | <code>java.lang.String</code> | Field to order results by. Available values: "application", "created", "name", "status". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.page">page</a></code> | <code>java.lang.Number</code> | Page number within the paginated result set. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.pageSize">pageSize</a></code> | <code>java.lang.Number</code> | Number of results per page. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.search">search</a></code> | <code>java.lang.String</code> | Search integrations by name or application. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.status">status</a></code> | <code>java.lang.String</code> | Filter by integration status. Available values: "Healthy", "Initializing", "Offline", "Unhealthy". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.useCases">useCases</a></code> | <code>java.lang.String</code> | Filter by one enabled use case (for example, casb or ces). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#account_id DataCloudflareZeroTrustCasbIntegrations#account_id}.

---

##### `application`<sup>Optional</sup> <a name="application" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.application"></a>

```java
public java.lang.String getApplication();
```

- *Type:* java.lang.String

Filter by application/vendor (e.g., GOOGLE_WORKSPACE, MICROSOFT_INTERNAL).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#application DataCloudflareZeroTrustCasbIntegrations#application}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Direction to order results. Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#direction DataCloudflareZeroTrustCasbIntegrations#direction}

---

##### `dlpEnabled`<sup>Optional</sup> <a name="dlpEnabled" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.dlpEnabled"></a>

```java
public java.lang.Boolean|IResolvable getDlpEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Filter by DLP enabled status (true/false).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#dlp_enabled DataCloudflareZeroTrustCasbIntegrations#dlp_enabled}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#max_items DataCloudflareZeroTrustCasbIntegrations#max_items}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

Field to order results by. Available values: "application", "created", "name", "status".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#order DataCloudflareZeroTrustCasbIntegrations#order}

---

##### `page`<sup>Optional</sup> <a name="page" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.page"></a>

```java
public java.lang.Number getPage();
```

- *Type:* java.lang.Number

Page number within the paginated result set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#page DataCloudflareZeroTrustCasbIntegrations#page}

---

##### `pageSize`<sup>Optional</sup> <a name="pageSize" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.pageSize"></a>

```java
public java.lang.Number getPageSize();
```

- *Type:* java.lang.Number

Number of results per page.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#page_size DataCloudflareZeroTrustCasbIntegrations#page_size}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

Search integrations by name or application.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#search DataCloudflareZeroTrustCasbIntegrations#search}

---

##### `status`<sup>Optional</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

Filter by integration status. Available values: "Healthy", "Initializing", "Offline", "Unhealthy".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#status DataCloudflareZeroTrustCasbIntegrations#status}

---

##### `useCases`<sup>Optional</sup> <a name="useCases" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsConfig.property.useCases"></a>

```java
public java.lang.String getUseCases();
```

- *Type:* java.lang.String

Filter by one enabled use case (for example, casb or ces).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.27.0/docs/data-sources/zero_trust_casb_integrations#use_cases DataCloudflareZeroTrustCasbIntegrations#use_cases}

---

### DataCloudflareZeroTrustCasbIntegrationsResult <a name="DataCloudflareZeroTrustCasbIntegrationsResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResult.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_casb_integrations.DataCloudflareZeroTrustCasbIntegrationsResult;

DataCloudflareZeroTrustCasbIntegrationsResult.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCasbIntegrationsResultList <a name="DataCloudflareZeroTrustCasbIntegrationsResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_casb_integrations.DataCloudflareZeroTrustCasbIntegrationsResultList;

new DataCloudflareZeroTrustCasbIntegrationsResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.get"></a>

```java
public DataCloudflareZeroTrustCasbIntegrationsResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZeroTrustCasbIntegrationsResultOutputReference <a name="DataCloudflareZeroTrustCasbIntegrationsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_casb_integrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference;

new DataCloudflareZeroTrustCasbIntegrationsResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.application">application</a></code> | <code>io.cdktn.cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.isPaused">isPaused</a></code> | <code>io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.updated">updated</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResult">DataCloudflareZeroTrustCasbIntegrationsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `application`<sup>Required</sup> <a name="application" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.application"></a>

```java
public StringMap getApplication();
```

- *Type:* io.cdktn.cdktn.StringMap

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `isPaused`<sup>Required</sup> <a name="isPaused" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.isPaused"></a>

```java
public IResolvable getIsPaused();
```

- *Type:* io.cdktn.cdktn.IResolvable

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `updated`<sup>Required</sup> <a name="updated" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.updated"></a>

```java
public java.lang.String getUpdated();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustCasbIntegrationsResult getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCasbIntegrations.DataCloudflareZeroTrustCasbIntegrationsResult">DataCloudflareZeroTrustCasbIntegrationsResult</a>

---



