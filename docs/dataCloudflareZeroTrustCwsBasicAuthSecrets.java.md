# `dataCloudflareZeroTrustCwsBasicAuthSecrets` Submodule <a name="`dataCloudflareZeroTrustCwsBasicAuthSecrets` Submodule" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataCloudflareZeroTrustCwsBasicAuthSecrets <a name="DataCloudflareZeroTrustCwsBasicAuthSecrets" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_secrets cloudflare_zero_trust_cws_basic_auth_secrets}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_basic_auth_secrets.DataCloudflareZeroTrustCwsBasicAuthSecrets;

DataCloudflareZeroTrustCwsBasicAuthSecrets.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .credentialId(java.lang.String)
//  .direction(java.lang.String)
//  .maxItems(java.lang.Number)
//  .order(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.Initializer.parameter.credentialId">credentialId</a></code> | <code>java.lang.String</code> | ID of the parent credential. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.Initializer.parameter.direction">direction</a></code> | <code>java.lang.String</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.Initializer.parameter.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.Initializer.parameter.order">order</a></code> | <code>java.lang.String</code> | Field to order results by (default: created_at) Available values: "created_at". |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_secrets#account_id DataCloudflareZeroTrustCwsBasicAuthSecrets#account_id}

---

##### `credentialId`<sup>Required</sup> <a name="credentialId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.Initializer.parameter.credentialId"></a>

- *Type:* java.lang.String

ID of the parent credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_secrets#credential_id DataCloudflareZeroTrustCwsBasicAuthSecrets#credential_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.Initializer.parameter.direction"></a>

- *Type:* java.lang.String

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_secrets#direction DataCloudflareZeroTrustCwsBasicAuthSecrets#direction}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.Initializer.parameter.maxItems"></a>

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_secrets#max_items DataCloudflareZeroTrustCwsBasicAuthSecrets#max_items}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.Initializer.parameter.order"></a>

- *Type:* java.lang.String

Field to order results by (default: created_at) Available values: "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_secrets#order DataCloudflareZeroTrustCwsBasicAuthSecrets#order}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.toHclTerraform">toHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.resetDirection">resetDirection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.resetMaxItems">resetMaxItems</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.resetOrder">resetOrder</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

Adds this resource to the terraform JSON output.

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `resetDirection` <a name="resetDirection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.resetDirection"></a>

```java
public void resetDirection()
```

##### `resetMaxItems` <a name="resetMaxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.resetMaxItems"></a>

```java
public void resetMaxItems()
```

##### `resetOrder` <a name="resetOrder" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.resetOrder"></a>

```java
public void resetOrder()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.isTerraformDataSource">isTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a DataCloudflareZeroTrustCwsBasicAuthSecrets resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_basic_auth_secrets.DataCloudflareZeroTrustCwsBasicAuthSecrets;

DataCloudflareZeroTrustCwsBasicAuthSecrets.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_basic_auth_secrets.DataCloudflareZeroTrustCwsBasicAuthSecrets;

DataCloudflareZeroTrustCwsBasicAuthSecrets.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformDataSource` <a name="isTerraformDataSource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.isTerraformDataSource"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_basic_auth_secrets.DataCloudflareZeroTrustCwsBasicAuthSecrets;

DataCloudflareZeroTrustCwsBasicAuthSecrets.isTerraformDataSource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.isTerraformDataSource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_basic_auth_secrets.DataCloudflareZeroTrustCwsBasicAuthSecrets;

DataCloudflareZeroTrustCwsBasicAuthSecrets.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),DataCloudflareZeroTrustCwsBasicAuthSecrets.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a DataCloudflareZeroTrustCwsBasicAuthSecrets resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the DataCloudflareZeroTrustCwsBasicAuthSecrets to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing DataCloudflareZeroTrustCwsBasicAuthSecrets that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_secrets#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the DataCloudflareZeroTrustCwsBasicAuthSecrets to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.result">result</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultList">DataCloudflareZeroTrustCwsBasicAuthSecretsResultList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.credentialIdInput">credentialIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.directionInput">directionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.maxItemsInput">maxItemsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.orderInput">orderInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.credentialId">credentialId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.direction">direction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.order">order</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `result`<sup>Required</sup> <a name="result" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.result"></a>

```java
public DataCloudflareZeroTrustCwsBasicAuthSecretsResultList getResult();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultList">DataCloudflareZeroTrustCwsBasicAuthSecretsResultList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `credentialIdInput`<sup>Optional</sup> <a name="credentialIdInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.credentialIdInput"></a>

```java
public java.lang.String getCredentialIdInput();
```

- *Type:* java.lang.String

---

##### `directionInput`<sup>Optional</sup> <a name="directionInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.directionInput"></a>

```java
public java.lang.String getDirectionInput();
```

- *Type:* java.lang.String

---

##### `maxItemsInput`<sup>Optional</sup> <a name="maxItemsInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.maxItemsInput"></a>

```java
public java.lang.Number getMaxItemsInput();
```

- *Type:* java.lang.Number

---

##### `orderInput`<sup>Optional</sup> <a name="orderInput" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.orderInput"></a>

```java
public java.lang.String getOrderInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `credentialId`<sup>Required</sup> <a name="credentialId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.credentialId"></a>

```java
public java.lang.String getCredentialId();
```

- *Type:* java.lang.String

---

##### `direction`<sup>Required</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

---

##### `maxItems`<sup>Required</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

---

##### `order`<sup>Required</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecrets.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### DataCloudflareZeroTrustCwsBasicAuthSecretsConfig <a name="DataCloudflareZeroTrustCwsBasicAuthSecretsConfig" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_basic_auth_secrets.DataCloudflareZeroTrustCwsBasicAuthSecretsConfig;

DataCloudflareZeroTrustCwsBasicAuthSecretsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .credentialId(java.lang.String)
//  .direction(java.lang.String)
//  .maxItems(java.lang.Number)
//  .order(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsConfig.property.credentialId">credentialId</a></code> | <code>java.lang.String</code> | ID of the parent credential. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsConfig.property.direction">direction</a></code> | <code>java.lang.String</code> | Sort direction (default: asc) Available values: "asc", "desc". |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsConfig.property.maxItems">maxItems</a></code> | <code>java.lang.Number</code> | Max items to fetch, default: 1000. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsConfig.property.order">order</a></code> | <code>java.lang.String</code> | Field to order results by (default: created_at) Available values: "created_at". |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_secrets#account_id DataCloudflareZeroTrustCwsBasicAuthSecrets#account_id}

---

##### `credentialId`<sup>Required</sup> <a name="credentialId" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsConfig.property.credentialId"></a>

```java
public java.lang.String getCredentialId();
```

- *Type:* java.lang.String

ID of the parent credential.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_secrets#credential_id DataCloudflareZeroTrustCwsBasicAuthSecrets#credential_id}

---

##### `direction`<sup>Optional</sup> <a name="direction" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsConfig.property.direction"></a>

```java
public java.lang.String getDirection();
```

- *Type:* java.lang.String

Sort direction (default: asc) Available values: "asc", "desc".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_secrets#direction DataCloudflareZeroTrustCwsBasicAuthSecrets#direction}

---

##### `maxItems`<sup>Optional</sup> <a name="maxItems" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsConfig.property.maxItems"></a>

```java
public java.lang.Number getMaxItems();
```

- *Type:* java.lang.Number

Max items to fetch, default: 1000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_secrets#max_items DataCloudflareZeroTrustCwsBasicAuthSecrets#max_items}

---

##### `order`<sup>Optional</sup> <a name="order" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsConfig.property.order"></a>

```java
public java.lang.String getOrder();
```

- *Type:* java.lang.String

Field to order results by (default: created_at) Available values: "created_at".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/data-sources/zero_trust_cws_basic_auth_secrets#order DataCloudflareZeroTrustCwsBasicAuthSecrets#order}

---

### DataCloudflareZeroTrustCwsBasicAuthSecretsResult <a name="DataCloudflareZeroTrustCwsBasicAuthSecretsResult" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResult"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResult.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_basic_auth_secrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResult;

DataCloudflareZeroTrustCwsBasicAuthSecretsResult.builder()
    .build();
```


## Classes <a name="Classes" id="Classes"></a>

### DataCloudflareZeroTrustCwsBasicAuthSecretsResultList <a name="DataCloudflareZeroTrustCwsBasicAuthSecretsResultList" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_basic_auth_secrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultList;

new DataCloudflareZeroTrustCwsBasicAuthSecretsResultList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultList.get"></a>

```java
public DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference <a name="DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.data_cloudflare_zero_trust_cws_basic_auth_secrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference;

new DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.property.expiresAt">expiresAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResult">DataCloudflareZeroTrustCwsBasicAuthSecretsResult</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `expiresAt`<sup>Required</sup> <a name="expiresAt" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.property.expiresAt"></a>

```java
public java.lang.String getExpiresAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResultOutputReference.property.internalValue"></a>

```java
public DataCloudflareZeroTrustCwsBasicAuthSecretsResult getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.dataCloudflareZeroTrustCwsBasicAuthSecrets.DataCloudflareZeroTrustCwsBasicAuthSecretsResult">DataCloudflareZeroTrustCwsBasicAuthSecretsResult</a>

---



