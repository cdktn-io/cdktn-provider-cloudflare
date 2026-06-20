# `zeroTrustDlpDataClass` Submodule <a name="`zeroTrustDlpDataClass` Submodule" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDlpDataClass <a name="ZeroTrustDlpDataClass" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_data_class cloudflare_zero_trust_dlp_data_class}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_dlp_data_class.ZeroTrustDlpDataClass;

ZeroTrustDlpDataClass.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .dataTags(java.util.List<java.lang.String>)
    .expression(java.lang.String)
    .name(java.lang.String)
    .sensitivityLevels(IResolvable|java.util.List<ZeroTrustDlpDataClassSensitivityLevels>)
//  .description(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_data_class#account_id ZeroTrustDlpDataClass#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer.parameter.dataTags">dataTags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_data_class#data_tags ZeroTrustDlpDataClass#data_tags}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer.parameter.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_data_class#expression ZeroTrustDlpDataClass#expression}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_data_class#name ZeroTrustDlpDataClass#name}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer.parameter.sensitivityLevels">sensitivityLevels</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevels">ZeroTrustDlpDataClassSensitivityLevels</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_data_class#sensitivity_levels ZeroTrustDlpDataClass#sensitivity_levels}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_data_class#description ZeroTrustDlpDataClass#description}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_data_class#account_id ZeroTrustDlpDataClass#account_id}.

---

##### `dataTags`<sup>Required</sup> <a name="dataTags" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer.parameter.dataTags"></a>

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_data_class#data_tags ZeroTrustDlpDataClass#data_tags}.

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer.parameter.expression"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_data_class#expression ZeroTrustDlpDataClass#expression}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_data_class#name ZeroTrustDlpDataClass#name}.

---

##### `sensitivityLevels`<sup>Required</sup> <a name="sensitivityLevels" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer.parameter.sensitivityLevels"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevels">ZeroTrustDlpDataClassSensitivityLevels</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_data_class#sensitivity_levels ZeroTrustDlpDataClass#sensitivity_levels}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.Initializer.parameter.description"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_data_class#description ZeroTrustDlpDataClass#description}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.putSensitivityLevels">putSensitivityLevels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.resetDescription">resetDescription</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putSensitivityLevels` <a name="putSensitivityLevels" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.putSensitivityLevels"></a>

```java
public void putSensitivityLevels(IResolvable|java.util.List<ZeroTrustDlpDataClassSensitivityLevels> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.putSensitivityLevels.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevels">ZeroTrustDlpDataClassSensitivityLevels</a>>

---

##### `resetDescription` <a name="resetDescription" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.resetDescription"></a>

```java
public void resetDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustDlpDataClass resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_dlp_data_class.ZeroTrustDlpDataClass;

ZeroTrustDlpDataClass.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_dlp_data_class.ZeroTrustDlpDataClass;

ZeroTrustDlpDataClass.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_dlp_data_class.ZeroTrustDlpDataClass;

ZeroTrustDlpDataClass.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_dlp_data_class.ZeroTrustDlpDataClass;

ZeroTrustDlpDataClass.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustDlpDataClass.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ZeroTrustDlpDataClass resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustDlpDataClass to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustDlpDataClass that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_data_class#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustDlpDataClass to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.sensitivityLevels">sensitivityLevels</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsList">ZeroTrustDlpDataClassSensitivityLevelsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.dataTagsInput">dataTagsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.expressionInput">expressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.sensitivityLevelsInput">sensitivityLevelsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevels">ZeroTrustDlpDataClassSensitivityLevels</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.dataTags">dataTags</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.expression">expression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `sensitivityLevels`<sup>Required</sup> <a name="sensitivityLevels" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.sensitivityLevels"></a>

```java
public ZeroTrustDlpDataClassSensitivityLevelsList getSensitivityLevels();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsList">ZeroTrustDlpDataClassSensitivityLevelsList</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `dataTagsInput`<sup>Optional</sup> <a name="dataTagsInput" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.dataTagsInput"></a>

```java
public java.util.List<java.lang.String> getDataTagsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `expressionInput`<sup>Optional</sup> <a name="expressionInput" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.expressionInput"></a>

```java
public java.lang.String getExpressionInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `sensitivityLevelsInput`<sup>Optional</sup> <a name="sensitivityLevelsInput" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.sensitivityLevelsInput"></a>

```java
public IResolvable|java.util.List<ZeroTrustDlpDataClassSensitivityLevels> getSensitivityLevelsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevels">ZeroTrustDlpDataClassSensitivityLevels</a>>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `dataTags`<sup>Required</sup> <a name="dataTags" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.dataTags"></a>

```java
public java.util.List<java.lang.String> getDataTags();
```

- *Type:* java.util.List<java.lang.String>

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClass.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDlpDataClassConfig <a name="ZeroTrustDlpDataClassConfig" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_dlp_data_class.ZeroTrustDlpDataClassConfig;

ZeroTrustDlpDataClassConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .dataTags(java.util.List<java.lang.String>)
    .expression(java.lang.String)
    .name(java.lang.String)
    .sensitivityLevels(IResolvable|java.util.List<ZeroTrustDlpDataClassSensitivityLevels>)
//  .description(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_data_class#account_id ZeroTrustDlpDataClass#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassConfig.property.dataTags">dataTags</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_data_class#data_tags ZeroTrustDlpDataClass#data_tags}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassConfig.property.expression">expression</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_data_class#expression ZeroTrustDlpDataClass#expression}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassConfig.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_data_class#name ZeroTrustDlpDataClass#name}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassConfig.property.sensitivityLevels">sensitivityLevels</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevels">ZeroTrustDlpDataClassSensitivityLevels</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_data_class#sensitivity_levels ZeroTrustDlpDataClass#sensitivity_levels}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassConfig.property.description">description</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_data_class#description ZeroTrustDlpDataClass#description}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_data_class#account_id ZeroTrustDlpDataClass#account_id}.

---

##### `dataTags`<sup>Required</sup> <a name="dataTags" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassConfig.property.dataTags"></a>

```java
public java.util.List<java.lang.String> getDataTags();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_data_class#data_tags ZeroTrustDlpDataClass#data_tags}.

---

##### `expression`<sup>Required</sup> <a name="expression" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassConfig.property.expression"></a>

```java
public java.lang.String getExpression();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_data_class#expression ZeroTrustDlpDataClass#expression}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_data_class#name ZeroTrustDlpDataClass#name}.

---

##### `sensitivityLevels`<sup>Required</sup> <a name="sensitivityLevels" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassConfig.property.sensitivityLevels"></a>

```java
public IResolvable|java.util.List<ZeroTrustDlpDataClassSensitivityLevels> getSensitivityLevels();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevels">ZeroTrustDlpDataClassSensitivityLevels</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_data_class#sensitivity_levels ZeroTrustDlpDataClass#sensitivity_levels}.

---

##### `description`<sup>Optional</sup> <a name="description" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_data_class#description ZeroTrustDlpDataClass#description}.

---

### ZeroTrustDlpDataClassSensitivityLevels <a name="ZeroTrustDlpDataClassSensitivityLevels" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevels"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevels.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_dlp_data_class.ZeroTrustDlpDataClassSensitivityLevels;

ZeroTrustDlpDataClassSensitivityLevels.builder()
    .groupId(java.lang.String)
    .levelId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevels.property.groupId">groupId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_data_class#group_id ZeroTrustDlpDataClass#group_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevels.property.levelId">levelId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_data_class#level_id ZeroTrustDlpDataClass#level_id}. |

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevels.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_data_class#group_id ZeroTrustDlpDataClass#group_id}.

---

##### `levelId`<sup>Required</sup> <a name="levelId" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevels.property.levelId"></a>

```java
public java.lang.String getLevelId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_data_class#level_id ZeroTrustDlpDataClass#level_id}.

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDlpDataClassSensitivityLevelsList <a name="ZeroTrustDlpDataClassSensitivityLevelsList" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_dlp_data_class.ZeroTrustDlpDataClassSensitivityLevelsList;

new ZeroTrustDlpDataClassSensitivityLevelsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsList.get"></a>

```java
public ZeroTrustDlpDataClassSensitivityLevelsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevels">ZeroTrustDlpDataClassSensitivityLevels</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ZeroTrustDlpDataClassSensitivityLevels> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevels">ZeroTrustDlpDataClassSensitivityLevels</a>>

---


### ZeroTrustDlpDataClassSensitivityLevelsOutputReference <a name="ZeroTrustDlpDataClassSensitivityLevelsOutputReference" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_dlp_data_class.ZeroTrustDlpDataClassSensitivityLevelsOutputReference;

new ZeroTrustDlpDataClassSensitivityLevelsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.property.groupIdInput">groupIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.property.levelIdInput">levelIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.property.groupId">groupId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.property.levelId">levelId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevels">ZeroTrustDlpDataClassSensitivityLevels</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `groupIdInput`<sup>Optional</sup> <a name="groupIdInput" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.property.groupIdInput"></a>

```java
public java.lang.String getGroupIdInput();
```

- *Type:* java.lang.String

---

##### `levelIdInput`<sup>Optional</sup> <a name="levelIdInput" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.property.levelIdInput"></a>

```java
public java.lang.String getLevelIdInput();
```

- *Type:* java.lang.String

---

##### `groupId`<sup>Required</sup> <a name="groupId" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.property.groupId"></a>

```java
public java.lang.String getGroupId();
```

- *Type:* java.lang.String

---

##### `levelId`<sup>Required</sup> <a name="levelId" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.property.levelId"></a>

```java
public java.lang.String getLevelId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevelsOutputReference.property.internalValue"></a>

```java
public IResolvable|ZeroTrustDlpDataClassSensitivityLevels getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustDlpDataClass.ZeroTrustDlpDataClassSensitivityLevels">ZeroTrustDlpDataClassSensitivityLevels</a>

---



