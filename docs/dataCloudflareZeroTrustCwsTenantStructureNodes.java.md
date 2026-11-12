# `dataCloudflareZeroTrustCwsTenantStructureNodes` Submodule <a name="`dataCloudflareZeroTrustCwsTenantStructureNodes` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsTenantStructureNodes <a name="DataCloudflareZeroTrustCwsTenantStructureNodes" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes cloudflare_zero_trust_cws_tenant_structure_nodes}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_tenant_structure_nodes.DataCloudflareZeroTrustCwsTenantStructureNodes;

DataCloudflareZeroTrustCwsTenantStructureNodes.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .structureId(java.lang.String)
//  .direction(java.lang.String)
//  .maxItems(java.lang.Number)
//  .name(java.lang.String)
//  .nativeId(java.lang.String)
//  .nodeKind(java.lang.String)
//  .order(java.lang.String)
//  .parent(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.structureId">structureId</a></code> | <code>java.lang.String</code> | ID of the parent tenant structure. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.direction">direction</a></code> | <code>java.lang.String</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Filter by node name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.nativeId">nativeId</a></code> | <code>java.lang.String</code> | Filter by exact cloud-native identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.nodeKind">nodeKind</a></code> | <code>java.lang.String</code> | Filter by exact node kind. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.order">order</a></code> | <code>java.lang.String</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.parent">parent</a></code> | <code>java.lang.String</code> | Filter by exact parent native ID. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#account_id DataCloudflareZeroTrustCwsTenantStructureNodes#account_id}

---

##### `structureId`<sup>Required</sup> <a name="structureId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.structureId"></a>

- *Type:* java.lang.String

ID of the parent tenant structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#structure_id DataCloudflareZeroTrustCwsTenantStructureNodes#structure_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.direction"></a>

- *Type:* java.lang.String

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#direction DataCloudflareZeroTrustCwsTenantStructureNodes#direction}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#max_items DataCloudflareZeroTrustCwsTenantStructureNodes#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Filter by node name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#name DataCloudflareZeroTrustCwsTenantStructureNodes#name}

---

##### `nativeId`<sup>Optional</sup> <a name="nativeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.nativeId"></a>

- *Type:* java.lang.String

Filter by exact cloud-native identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#native_id DataCloudflareZeroTrustCwsTenantStructureNodes#native_id}

---

##### `nodeKind`<sup>Optional</sup> <a name="nodeKind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.nodeKind"></a>

- *Type:* java.lang.String

Filter by exact node kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#node_kind DataCloudflareZeroTrustCwsTenantStructureNodes#node_kind}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.order"></a>

- *Type:* java.lang.String

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#order DataCloudflareZeroTrustCwsTenantStructureNodes#order}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.Initializer.parameter.parent"></a>

- *Type:* java.lang.String

Filter by exact parent native ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#parent DataCloudflareZeroTrustCwsTenantStructureNodes#parent}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetNativeId">resetNativeId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetNodeKind">resetNodeKind</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetParent">resetParent</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetMaxItems"></a>

```java
public void resetMaxItems()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetName"></a>

```java
public void resetName()
```

##### `resetNativeId` <a name="resetNativeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetNativeId"></a>

```java
public void resetNativeId()
```

##### `resetNodeKind` <a name="resetNodeKind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetNodeKind"></a>

```java
public void resetNodeKind()
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetParent` <a name="resetParent" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.resetParent"></a>

```java
public void resetParent()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsTenantStructureNodes resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_tenant_structure_nodes.DataCloudflareZeroTrustCwsTenantStructureNodes;

DataCloudflareZeroTrustCwsTenantStructureNodes.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_tenant_structure_nodes.DataCloudflareZeroTrustCwsTenantStructureNodes;

DataCloudflareZeroTrustCwsTenantStructureNodes.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_tenant_structure_nodes.DataCloudflareZeroTrustCwsTenantStructureNodes;

DataCloudflareZeroTrustCwsTenantStructureNodes.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_tenant_structure_nodes.DataCloudflareZeroTrustCwsTenantStructureNodes;

DataCloudflareZeroTrustCwsTenantStructureNodes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareZeroTrustCwsTenantStructureNodes.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsTenantStructureNodes resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareZeroTrustCwsTenantStructureNodes to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareZeroTrustCwsTenantStructureNodes that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsTenantStructureNodes to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList">DataCloudflareZeroTrustCwsTenantStructureNodesResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.nativeIdInput">nativeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.nodeKindInput">nodeKindInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.orderInput">orderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.parentInput">parentInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.structureIdInput">structureIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.nativeId">nativeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.nodeKind">nodeKind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.order">order</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.structureId">structureId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.result"></a>

```java
public DataCloudflareZeroTrustCwsTenantStructureNodesResultList getResult();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList">DataCloudflareZeroTrustCwsTenantStructureNodesResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `nativeIdInput`<sup>Optional</sup> <a name="nativeIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.nativeIdInput"></a>

```java
public java.lang.String getNativeIdInput();
```

- *Type:* java.lang.String

---

##### `nodeKindInput`<sup>Optional</sup> <a name="nodeKindInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.nodeKindInput"></a>

```java
public java.lang.String getNodeKindInput();
```

- *Type:* java.lang.String

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.orderInput"></a>

```java
public java.lang.String getOrderInput();
```

- *Type:* java.lang.String

---

##### `parentInput`<sup>Optional</sup> <a name="parentInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.parentInput"></a>

```java
public java.lang.String getParentInput();
```

- *Type:* java.lang.String

---

##### `structureIdInput`<sup>Optional</sup> <a name="structureIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.structureIdInput"></a>

```java
public java.lang.String getStructureIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nativeId`<sup>Required</sup> <a name="nativeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.nativeId"></a>

```java
public java.lang.String getNativeId();
```

- *Type:* java.lang.String

---

##### `nodeKind`<sup>Required</sup> <a name="nodeKind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.nodeKind"></a>

```java
public java.lang.String getNodeKind();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `structureId`<sup>Required</sup> <a name="structureId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.structureId"></a>

```java
public java.lang.String getStructureId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodes.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsTenantStructureNodesConfig <a name="DataCloudflareZeroTrustCwsTenantStructureNodesConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_tenant_structure_nodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig;

DataCloudflareZeroTrustCwsTenantStructureNodesConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .structureId(java.lang.String)
//  .direction(java.lang.String)
//  .maxItems(java.lang.Number)
//  .name(java.lang.String)
//  .nativeId(java.lang.String)
//  .nodeKind(java.lang.String)
//  .order(java.lang.String)
//  .parent(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.structureId">structureId</a></code> | <code>java.lang.String</code> | ID of the parent tenant structure. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.direction">direction</a></code> | <code>java.lang.String</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.name">name</a></code> | <code>java.lang.String</code> | Filter by node name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.nativeId">nativeId</a></code> | <code>java.lang.String</code> | Filter by exact cloud-native identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.nodeKind">nodeKind</a></code> | <code>java.lang.String</code> | Filter by exact node kind. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.order">order</a></code> | <code>java.lang.String</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.parent">parent</a></code> | <code>java.lang.String</code> | Filter by exact parent native ID. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#account_id DataCloudflareZeroTrustCwsTenantStructureNodes#account_id}

---

##### `structureId`<sup>Required</sup> <a name="structureId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.structureId"></a>

```java
public java.lang.String getStructureId();
```

- *Type:* java.lang.String

ID of the parent tenant structure.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#structure_id DataCloudflareZeroTrustCwsTenantStructureNodes#structure_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#direction DataCloudflareZeroTrustCwsTenantStructureNodes#direction}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#max_items DataCloudflareZeroTrustCwsTenantStructureNodes#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Filter by node name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#name DataCloudflareZeroTrustCwsTenantStructureNodes#name}

---

##### `nativeId`<sup>Optional</sup> <a name="nativeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.nativeId"></a>

```java
public java.lang.String getNativeId();
```

- *Type:* java.lang.String

Filter by exact cloud-native identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#native_id DataCloudflareZeroTrustCwsTenantStructureNodes#native_id}

---

##### `nodeKind`<sup>Optional</sup> <a name="nodeKind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.nodeKind"></a>

```java
public java.lang.String getNodeKind();
```

- *Type:* java.lang.String

Filter by exact node kind.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#node_kind DataCloudflareZeroTrustCwsTenantStructureNodes#node_kind}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#order DataCloudflareZeroTrustCwsTenantStructureNodes#order}

---

##### `parent`<sup>Optional</sup> <a name="parent" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesConfig.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

Filter by exact parent native ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_tenant_structure_nodes#parent DataCloudflareZeroTrustCwsTenantStructureNodes#parent}

---

### DataCloudflareZeroTrustCwsTenantStructureNodesResult <a name="DataCloudflareZeroTrustCwsTenantStructureNodesResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResult.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_tenant_structure_nodes.DataCloudflareZeroTrustCwsTenantStructureNodesResult;

DataCloudflareZeroTrustCwsTenantStructureNodesResult.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsTenantStructureNodesResultList <a name="DataCloudflareZeroTrustCwsTenantStructureNodesResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_tenant_structure_nodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList;

new DataCloudflareZeroTrustCwsTenantStructureNodesResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.get"></a>

```java
public DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference <a name="DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_tenant_structure_nodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference;

new DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.nativeId">nativeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.nodeKind">nodeKind</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.parent">parent</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResult">DataCloudflareZeroTrustCwsTenantStructureNodesResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `nativeId`<sup>Required</sup> <a name="nativeId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.nativeId"></a>

```java
public java.lang.String getNativeId();
```

- *Type:* java.lang.String

---

##### `nodeKind`<sup>Required</sup> <a name="nodeKind" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.nodeKind"></a>

```java
public java.lang.String getNodeKind();
```

- *Type:* java.lang.String

---

##### `parent`<sup>Required</sup> <a name="parent" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.parent"></a>

```java
public java.lang.String getParent();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustCwsTenantStructureNodesResult getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsTenantStructureNodes.DataCloudflareZeroTrustCwsTenantStructureNodesResult">DataCloudflareZeroTrustCwsTenantStructureNodesResult</a>

---



