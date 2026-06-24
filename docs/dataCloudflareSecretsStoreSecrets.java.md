# `dataCloudflareSecretsStoreSecrets` Submodule <a name="`dataCloudflareSecretsStoreSecrets` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareSecretsStoreSecrets <a name="DataCloudflareSecretsStoreSecrets" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secrets cloudflare_secrets_store_secrets}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_secrets_store_secrets.DataCloudflareSecretsStoreSecrets;

DataCloudflareSecretsStoreSecrets.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .storeId(java.lang.String)
//  .direction(java.lang.String)
//  .maxItems(java.lang.Number)
//  .order(java.lang.String)
//  .scopes(IResolvable|java.util.List<java.util.List<java.lang.String>>)
//  .search(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Account Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.storeId">storeId</a></code> | <code>java.lang.String</code> | Store Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.direction">direction</a></code> | <code>java.lang.String</code> | Direction to sort objects Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.order">order</a></code> | <code>java.lang.String</code> | Order secrets by values in the given field Available values: "name", "comment", "created", "modified", "status". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.scopes">scopes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<java.util.List<java.lang.String>></code> | Only secrets with the given scopes will be returned. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.search">search</a></code> | <code>java.lang.String</code> | Search secrets using a filter string, filtering across name and comment. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Account Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secrets#account_id DataCloudflareSecretsStoreSecrets#account_id}

---

##### `storeId`<sup>Required</sup> <a name="storeId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.storeId"></a>

- *Type:* java.lang.String

Store Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secrets#store_id DataCloudflareSecretsStoreSecrets#store_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.direction"></a>

- *Type:* java.lang.String

Direction to sort objects Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secrets#direction DataCloudflareSecretsStoreSecrets#direction}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secrets#max_items DataCloudflareSecretsStoreSecrets#max_items}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.order"></a>

- *Type:* java.lang.String

Order secrets by values in the given field Available values: "name", "comment", "created", "modified", "status".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secrets#order DataCloudflareSecretsStoreSecrets#order}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.scopes"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<java.util.List<java.lang.String>>

Only secrets with the given scopes will be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secrets#scopes DataCloudflareSecretsStoreSecrets#scopes}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.Initializer.parameter.search"></a>

- *Type:* java.lang.String

Search secrets using a filter string, filtering across name and comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secrets#search DataCloudflareSecretsStoreSecrets#search}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.resetOrder">resetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.resetScopes">resetScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.resetSearch">resetSearch</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.resetMaxItems"></a>

```java
public void resetMaxItems()
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.resetOrder"></a>

```java
public void resetOrder()
```

##### `resetScopes` <a name="resetScopes" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.resetScopes"></a>

```java
public void resetScopes()
```

##### `resetSearch` <a name="resetSearch" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.resetSearch"></a>

```java
public void resetSearch()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareSecretsStoreSecrets resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_secrets_store_secrets.DataCloudflareSecretsStoreSecrets;

DataCloudflareSecretsStoreSecrets.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_secrets_store_secrets.DataCloudflareSecretsStoreSecrets;

DataCloudflareSecretsStoreSecrets.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_secrets_store_secrets.DataCloudflareSecretsStoreSecrets;

DataCloudflareSecretsStoreSecrets.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_secrets_store_secrets.DataCloudflareSecretsStoreSecrets;

DataCloudflareSecretsStoreSecrets.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareSecretsStoreSecrets.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareSecretsStoreSecrets resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareSecretsStoreSecrets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareSecretsStoreSecrets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secrets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareSecretsStoreSecrets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList">DataCloudflareSecretsStoreSecretsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.orderInput">orderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.scopesInput">scopesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.searchInput">searchInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.storeIdInput">storeIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.order">order</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.scopes">scopes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<java.util.List<java.lang.String>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.search">search</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.storeId">storeId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.result"></a>

```java
public DataCloudflareSecretsStoreSecretsResultList getResult();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList">DataCloudflareSecretsStoreSecretsResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.orderInput"></a>

```java
public java.lang.String getOrderInput();
```

- *Type:* java.lang.String

---

##### `scopesInput`<sup>Optional</sup> <a name="scopesInput" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.scopesInput"></a>

```java
public IResolvable|java.util.List<java.util.List<java.lang.String>> getScopesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<java.util.List<java.lang.String>>

---

##### `searchInput`<sup>Optional</sup> <a name="searchInput" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.searchInput"></a>

```java
public java.lang.String getSearchInput();
```

- *Type:* java.lang.String

---

##### `storeIdInput`<sup>Optional</sup> <a name="storeIdInput" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.storeIdInput"></a>

```java
public java.lang.String getStoreIdInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.scopes"></a>

```java
public IResolvable|java.util.List<java.util.List<java.lang.String>> getScopes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<java.util.List<java.lang.String>>

---

##### `search`<sup>Required</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

---

##### `storeId`<sup>Required</sup> <a name="storeId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.storeId"></a>

```java
public java.lang.String getStoreId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecrets.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareSecretsStoreSecretsConfig <a name="DataCloudflareSecretsStoreSecretsConfig" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_secrets_store_secrets.DataCloudflareSecretsStoreSecretsConfig;

DataCloudflareSecretsStoreSecretsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .storeId(java.lang.String)
//  .direction(java.lang.String)
//  .maxItems(java.lang.Number)
//  .order(java.lang.String)
//  .scopes(IResolvable|java.util.List<java.util.List<java.lang.String>>)
//  .search(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Account Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.storeId">storeId</a></code> | <code>java.lang.String</code> | Store Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.direction">direction</a></code> | <code>java.lang.String</code> | Direction to sort objects Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.order">order</a></code> | <code>java.lang.String</code> | Order secrets by values in the given field Available values: "name", "comment", "created", "modified", "status". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.scopes">scopes</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<java.util.List<java.lang.String>></code> | Only secrets with the given scopes will be returned. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.search">search</a></code> | <code>java.lang.String</code> | Search secrets using a filter string, filtering across name and comment. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Account Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secrets#account_id DataCloudflareSecretsStoreSecrets#account_id}

---

##### `storeId`<sup>Required</sup> <a name="storeId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.storeId"></a>

```java
public java.lang.String getStoreId();
```

- *Type:* java.lang.String

Store Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secrets#store_id DataCloudflareSecretsStoreSecrets#store_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Direction to sort objects Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secrets#direction DataCloudflareSecretsStoreSecrets#direction}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secrets#max_items DataCloudflareSecretsStoreSecrets#max_items}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

Order secrets by values in the given field Available values: "name", "comment", "created", "modified", "status".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secrets#order DataCloudflareSecretsStoreSecrets#order}

---

##### `scopes`<sup>Optional</sup> <a name="scopes" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.scopes"></a>

```java
public IResolvable|java.util.List<java.util.List<java.lang.String>> getScopes();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<java.util.List<java.lang.String>>

Only secrets with the given scopes will be returned.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secrets#scopes DataCloudflareSecretsStoreSecrets#scopes}

---

##### `search`<sup>Optional</sup> <a name="search" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsConfig.property.search"></a>

```java
public java.lang.String getSearch();
```

- *Type:* java.lang.String

Search secrets using a filter string, filtering across name and comment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/data-sources/secrets_store_secrets#search DataCloudflareSecretsStoreSecrets#search}

---

### DataCloudflareSecretsStoreSecretsResult <a name="DataCloudflareSecretsStoreSecretsResult" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResult.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_secrets_store_secrets.DataCloudflareSecretsStoreSecretsResult;

DataCloudflareSecretsStoreSecretsResult.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareSecretsStoreSecretsResultList <a name="DataCloudflareSecretsStoreSecretsResultList" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_secrets_store_secrets.DataCloudflareSecretsStoreSecretsResultList;

new DataCloudflareSecretsStoreSecretsResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.get"></a>

```java
public DataCloudflareSecretsStoreSecretsResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareSecretsStoreSecretsResultOutputReference <a name="DataCloudflareSecretsStoreSecretsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_secrets_store_secrets.DataCloudflareSecretsStoreSecretsResultOutputReference;

new DataCloudflareSecretsStoreSecretsResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.comment">comment</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.modified">modified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.scopes">scopes</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.storeId">storeId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResult">DataCloudflareSecretsStoreSecretsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `comment`<sup>Required</sup> <a name="comment" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.comment"></a>

```java
public java.lang.String getComment();
```

- *Type:* java.lang.String

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.modified"></a>

```java
public java.lang.String getModified();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `scopes`<sup>Required</sup> <a name="scopes" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.scopes"></a>

```java
public java.util.List<java.lang.String> getScopes();
```

- *Type:* java.util.List<java.lang.String>

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `storeId`<sup>Required</sup> <a name="storeId" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.storeId"></a>

```java
public java.lang.String getStoreId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareSecretsStoreSecretsResult getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareSecretsStoreSecrets.DataCloudflareSecretsStoreSecretsResult">DataCloudflareSecretsStoreSecretsResult</a>

---



