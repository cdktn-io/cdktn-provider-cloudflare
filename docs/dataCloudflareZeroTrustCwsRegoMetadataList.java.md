# `dataCloudflareZeroTrustCwsRegoMetadataList` Submodule <a name="`dataCloudflareZeroTrustCwsRegoMetadataList` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsRegoMetadataList <a name="DataCloudflareZeroTrustCwsRegoMetadataList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_metadata_list cloudflare_zero_trust_cws_rego_metadata_list}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_rego_metadata_list.DataCloudflareZeroTrustCwsRegoMetadataList;

DataCloudflareZeroTrustCwsRegoMetadataList.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .direction(java.lang.String)
//  .importPath(java.lang.String)
//  .maxItems(java.lang.Number)
//  .name(java.lang.String)
//  .order(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer.parameter.direction">direction</a></code> | <code>java.lang.String</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer.parameter.importPath">importPath</a></code> | <code>java.lang.String</code> | Filter by import path (case-sensitive literal substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Filter by rego metadata name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer.parameter.order">order</a></code> | <code>java.lang.String</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_metadata_list#account_id DataCloudflareZeroTrustCwsRegoMetadataList#account_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer.parameter.direction"></a>

- *Type:* java.lang.String

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_metadata_list#direction DataCloudflareZeroTrustCwsRegoMetadataList#direction}

---

##### `importPath`<sup>Optional</sup> <a name="importPath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer.parameter.importPath"></a>

- *Type:* java.lang.String

Filter by import path (case-sensitive literal substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_metadata_list#import_path DataCloudflareZeroTrustCwsRegoMetadataList#import_path}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_metadata_list#max_items DataCloudflareZeroTrustCwsRegoMetadataList#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Filter by rego metadata name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_metadata_list#name DataCloudflareZeroTrustCwsRegoMetadataList#name}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.Initializer.parameter.order"></a>

- *Type:* java.lang.String

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_metadata_list#order DataCloudflareZeroTrustCwsRegoMetadataList#order}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.resetImportPath">resetImportPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.resetOrder">resetOrder</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetImportPath` <a name="resetImportPath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.resetImportPath"></a>

```java
public void resetImportPath()
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.resetMaxItems"></a>

```java
public void resetMaxItems()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.resetName"></a>

```java
public void resetName()
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.resetOrder"></a>

```java
public void resetOrder()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsRegoMetadataList resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_rego_metadata_list.DataCloudflareZeroTrustCwsRegoMetadataList;

DataCloudflareZeroTrustCwsRegoMetadataList.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_rego_metadata_list.DataCloudflareZeroTrustCwsRegoMetadataList;

DataCloudflareZeroTrustCwsRegoMetadataList.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_rego_metadata_list.DataCloudflareZeroTrustCwsRegoMetadataList;

DataCloudflareZeroTrustCwsRegoMetadataList.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_rego_metadata_list.DataCloudflareZeroTrustCwsRegoMetadataList;

DataCloudflareZeroTrustCwsRegoMetadataList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareZeroTrustCwsRegoMetadataList.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsRegoMetadataList resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareZeroTrustCwsRegoMetadataList to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareZeroTrustCwsRegoMetadataList that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_metadata_list#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsRegoMetadataList to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultList">DataCloudflareZeroTrustCwsRegoMetadataListResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.importPathInput">importPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.orderInput">orderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.importPath">importPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.order">order</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.result"></a>

```java
public DataCloudflareZeroTrustCwsRegoMetadataListResultList getResult();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultList">DataCloudflareZeroTrustCwsRegoMetadataListResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `importPathInput`<sup>Optional</sup> <a name="importPathInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.importPathInput"></a>

```java
public java.lang.String getImportPathInput();
```

- *Type:* java.lang.String

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.orderInput"></a>

```java
public java.lang.String getOrderInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `importPath`<sup>Required</sup> <a name="importPath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.importPath"></a>

```java
public java.lang.String getImportPath();
```

- *Type:* java.lang.String

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataList.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsRegoMetadataListConfig <a name="DataCloudflareZeroTrustCwsRegoMetadataListConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_rego_metadata_list.DataCloudflareZeroTrustCwsRegoMetadataListConfig;

DataCloudflareZeroTrustCwsRegoMetadataListConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
//  .direction(java.lang.String)
//  .importPath(java.lang.String)
//  .maxItems(java.lang.Number)
//  .name(java.lang.String)
//  .order(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListConfig.property.direction">direction</a></code> | <code>java.lang.String</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListConfig.property.importPath">importPath</a></code> | <code>java.lang.String</code> | Filter by import path (case-sensitive literal substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListConfig.property.name">name</a></code> | <code>java.lang.String</code> | Filter by rego metadata name (case-insensitive substring match). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListConfig.property.order">order</a></code> | <code>java.lang.String</code> | Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_metadata_list#account_id DataCloudflareZeroTrustCwsRegoMetadataList#account_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListConfig.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_metadata_list#direction DataCloudflareZeroTrustCwsRegoMetadataList#direction}

---

##### `importPath`<sup>Optional</sup> <a name="importPath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListConfig.property.importPath"></a>

```java
public java.lang.String getImportPath();
```

- *Type:* java.lang.String

Filter by import path (case-sensitive literal substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_metadata_list#import_path DataCloudflareZeroTrustCwsRegoMetadataList#import_path}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_metadata_list#max_items DataCloudflareZeroTrustCwsRegoMetadataList#max_items}

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Filter by rego metadata name (case-insensitive substring match).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_metadata_list#name DataCloudflareZeroTrustCwsRegoMetadataList#name}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListConfig.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

Field to order results by (default: created_at) Available values: "name", "created_at", "updated_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_rego_metadata_list#order DataCloudflareZeroTrustCwsRegoMetadataList#order}

---

### DataCloudflareZeroTrustCwsRegoMetadataListResult <a name="DataCloudflareZeroTrustCwsRegoMetadataListResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResult.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_rego_metadata_list.DataCloudflareZeroTrustCwsRegoMetadataListResult;

DataCloudflareZeroTrustCwsRegoMetadataListResult.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsRegoMetadataListResultList <a name="DataCloudflareZeroTrustCwsRegoMetadataListResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_rego_metadata_list.DataCloudflareZeroTrustCwsRegoMetadataListResultList;

new DataCloudflareZeroTrustCwsRegoMetadataListResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultList.get"></a>

```java
public DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference <a name="DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_rego_metadata_list.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference;

new DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.property.data">data</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.property.importPath">importPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResult">DataCloudflareZeroTrustCwsRegoMetadataListResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `importPath`<sup>Required</sup> <a name="importPath" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.property.importPath"></a>

```java
public java.lang.String getImportPath();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustCwsRegoMetadataListResult getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsRegoMetadataList.DataCloudflareZeroTrustCwsRegoMetadataListResult">DataCloudflareZeroTrustCwsRegoMetadataListResult</a>

---



