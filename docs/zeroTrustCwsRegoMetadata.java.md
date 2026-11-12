# `zeroTrustCwsRegoMetadata` Submodule <a name="`zeroTrustCwsRegoMetadata` Submodule" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustCwsRegoMetadata <a name="ZeroTrustCwsRegoMetadata" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_rego_metadata cloudflare_zero_trust_cws_rego_metadata}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_cws_rego_metadata.ZeroTrustCwsRegoMetadata;

ZeroTrustCwsRegoMetadata.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .data(java.lang.String)
    .importPath(java.lang.String)
    .name(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.Initializer.parameter.data">data</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_rego_metadata#data ZeroTrustCwsRegoMetadata#data}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.Initializer.parameter.importPath">importPath</a></code> | <code>java.lang.String</code> | Unique Rego import path in the form metadata.<segment>, with one alphanumeric or underscore segment. Reference it as data.<import_path>. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Name of the rego metadata document (unique per account). |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_rego_metadata#account_id ZeroTrustCwsRegoMetadata#account_id}

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.Initializer.parameter.data"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_rego_metadata#data ZeroTrustCwsRegoMetadata#data}.

---

##### `importPath`<sup>Required</sup> <a name="importPath" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.Initializer.parameter.importPath"></a>

- *Type:* java.lang.String

Unique Rego import path in the form metadata.<segment>, with one alphanumeric or underscore segment. Reference it as data.<import_path>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_rego_metadata#import_path ZeroTrustCwsRegoMetadata#import_path}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Name of the rego metadata document (unique per account).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_rego_metadata#name ZeroTrustCwsRegoMetadata#name}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustCwsRegoMetadata resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_cws_rego_metadata.ZeroTrustCwsRegoMetadata;

ZeroTrustCwsRegoMetadata.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_cws_rego_metadata.ZeroTrustCwsRegoMetadata;

ZeroTrustCwsRegoMetadata.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_cws_rego_metadata.ZeroTrustCwsRegoMetadata;

ZeroTrustCwsRegoMetadata.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_cws_rego_metadata.ZeroTrustCwsRegoMetadata;

ZeroTrustCwsRegoMetadata.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustCwsRegoMetadata.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ZeroTrustCwsRegoMetadata resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustCwsRegoMetadata to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustCwsRegoMetadata that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_rego_metadata#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustCwsRegoMetadata to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.dataInput">dataInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.importPathInput">importPathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.data">data</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.importPath">importPath</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `dataInput`<sup>Optional</sup> <a name="dataInput" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.dataInput"></a>

```java
public java.lang.String getDataInput();
```

- *Type:* java.lang.String

---

##### `importPathInput`<sup>Optional</sup> <a name="importPathInput" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.importPathInput"></a>

```java
public java.lang.String getImportPathInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

---

##### `importPath`<sup>Required</sup> <a name="importPath" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.importPath"></a>

```java
public java.lang.String getImportPath();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadata.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustCwsRegoMetadataConfig <a name="ZeroTrustCwsRegoMetadataConfig" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadataConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadataConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_cws_rego_metadata.ZeroTrustCwsRegoMetadataConfig;

ZeroTrustCwsRegoMetadataConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .data(java.lang.String)
    .importPath(java.lang.String)
    .name(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadataConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadataConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadataConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadataConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadataConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadataConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadataConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadataConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadataConfig.property.data">data</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_rego_metadata#data ZeroTrustCwsRegoMetadata#data}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadataConfig.property.importPath">importPath</a></code> | <code>java.lang.String</code> | Unique Rego import path in the form metadata.<segment>, with one alphanumeric or underscore segment. Reference it as data.<import_path>. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadataConfig.property.name">name</a></code> | <code>java.lang.String</code> | Name of the rego metadata document (unique per account). |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadataConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadataConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadataConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadataConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadataConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadataConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadataConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadataConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_rego_metadata#account_id ZeroTrustCwsRegoMetadata#account_id}

---

##### `data`<sup>Required</sup> <a name="data" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadataConfig.property.data"></a>

```java
public java.lang.String getData();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_rego_metadata#data ZeroTrustCwsRegoMetadata#data}.

---

##### `importPath`<sup>Required</sup> <a name="importPath" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadataConfig.property.importPath"></a>

```java
public java.lang.String getImportPath();
```

- *Type:* java.lang.String

Unique Rego import path in the form metadata.<segment>, with one alphanumeric or underscore segment. Reference it as data.<import_path>.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_rego_metadata#import_path ZeroTrustCwsRegoMetadata#import_path}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustCwsRegoMetadata.ZeroTrustCwsRegoMetadataConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Name of the rego metadata document (unique per account).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_rego_metadata#name ZeroTrustCwsRegoMetadata#name}

---



