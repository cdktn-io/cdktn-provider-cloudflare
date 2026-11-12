# `zeroTrustDlpProximityValidator` Submodule <a name="`zeroTrustDlpProximityValidator` Submodule" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDlpProximityValidator <a name="ZeroTrustDlpProximityValidator" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_dlp_proximity_validator cloudflare_zero_trust_dlp_proximity_validator}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_dlp_proximity_validator.ZeroTrustDlpProximityValidator;

ZeroTrustDlpProximityValidator.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .name(java.lang.String)
    .words(IResolvable|java.util.List<ZeroTrustDlpProximityValidatorWords>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_dlp_proximity_validator#account_id ZeroTrustDlpProximityValidator#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | A name for this validator, at most 50 characters. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer.parameter.words">words</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWords">ZeroTrustDlpProximityValidatorWords</a>></code> | The words that raise confidence when found near a match, at most 100 per validator. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_dlp_proximity_validator#account_id ZeroTrustDlpProximityValidator#account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer.parameter.name"></a>

- *Type:* java.lang.String

A name for this validator, at most 50 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_dlp_proximity_validator#name ZeroTrustDlpProximityValidator#name}

---

##### `words`<sup>Required</sup> <a name="words" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.Initializer.parameter.words"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWords">ZeroTrustDlpProximityValidatorWords</a>>

The words that raise confidence when found near a match, at most 100 per validator.

Matching
ignores case, so the list may not contain the same word twice with different capitalisation.
Words are stored as sent.

For example, a validator for medical record numbers might use
`[{"word": "patient", "weight": "strong"}, {"word": "diagnosis", "weight": "moderate"}, {"word": "mrn", "weight": "weak"}]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_dlp_proximity_validator#words ZeroTrustDlpProximityValidator#words}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.putWords">putWords</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putWords` <a name="putWords" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.putWords"></a>

```java
public void putWords(IResolvable|java.util.List<ZeroTrustDlpProximityValidatorWords> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.putWords.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWords">ZeroTrustDlpProximityValidatorWords</a>>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustDlpProximityValidator resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_dlp_proximity_validator.ZeroTrustDlpProximityValidator;

ZeroTrustDlpProximityValidator.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_dlp_proximity_validator.ZeroTrustDlpProximityValidator;

ZeroTrustDlpProximityValidator.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_dlp_proximity_validator.ZeroTrustDlpProximityValidator;

ZeroTrustDlpProximityValidator.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_dlp_proximity_validator.ZeroTrustDlpProximityValidator;

ZeroTrustDlpProximityValidator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ZeroTrustDlpProximityValidator.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ZeroTrustDlpProximityValidator resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ZeroTrustDlpProximityValidator to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ZeroTrustDlpProximityValidator that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_dlp_proximity_validator#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustDlpProximityValidator to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.referencedBy">referencedBy</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference">ZeroTrustDlpProximityValidatorReferencedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.words">words</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList">ZeroTrustDlpProximityValidatorWordsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.wordsInput">wordsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWords">ZeroTrustDlpProximityValidatorWords</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `referencedBy`<sup>Required</sup> <a name="referencedBy" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.referencedBy"></a>

```java
public ZeroTrustDlpProximityValidatorReferencedByOutputReference getReferencedBy();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference">ZeroTrustDlpProximityValidatorReferencedByOutputReference</a>

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `words`<sup>Required</sup> <a name="words" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.words"></a>

```java
public ZeroTrustDlpProximityValidatorWordsList getWords();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList">ZeroTrustDlpProximityValidatorWordsList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `wordsInput`<sup>Optional</sup> <a name="wordsInput" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.wordsInput"></a>

```java
public IResolvable|java.util.List<ZeroTrustDlpProximityValidatorWords> getWordsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWords">ZeroTrustDlpProximityValidatorWords</a>>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidator.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDlpProximityValidatorConfig <a name="ZeroTrustDlpProximityValidatorConfig" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_dlp_proximity_validator.ZeroTrustDlpProximityValidatorConfig;

ZeroTrustDlpProximityValidatorConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .name(java.lang.String)
    .words(IResolvable|java.util.List<ZeroTrustDlpProximityValidatorWords>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_dlp_proximity_validator#account_id ZeroTrustDlpProximityValidator#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.name">name</a></code> | <code>java.lang.String</code> | A name for this validator, at most 50 characters. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.words">words</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWords">ZeroTrustDlpProximityValidatorWords</a>></code> | The words that raise confidence when found near a match, at most 100 per validator. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_dlp_proximity_validator#account_id ZeroTrustDlpProximityValidator#account_id}.

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

A name for this validator, at most 50 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_dlp_proximity_validator#name ZeroTrustDlpProximityValidator#name}

---

##### `words`<sup>Required</sup> <a name="words" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorConfig.property.words"></a>

```java
public IResolvable|java.util.List<ZeroTrustDlpProximityValidatorWords> getWords();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWords">ZeroTrustDlpProximityValidatorWords</a>>

The words that raise confidence when found near a match, at most 100 per validator.

Matching
ignores case, so the list may not contain the same word twice with different capitalisation.
Words are stored as sent.

For example, a validator for medical record numbers might use
`[{"word": "patient", "weight": "strong"}, {"word": "diagnosis", "weight": "moderate"}, {"word": "mrn", "weight": "weak"}]`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_dlp_proximity_validator#words ZeroTrustDlpProximityValidator#words}

---

### ZeroTrustDlpProximityValidatorReferencedBy <a name="ZeroTrustDlpProximityValidatorReferencedBy" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedBy.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_dlp_proximity_validator.ZeroTrustDlpProximityValidatorReferencedBy;

ZeroTrustDlpProximityValidatorReferencedBy.builder()
    .build();
```


### ZeroTrustDlpProximityValidatorReferencedByEntries <a name="ZeroTrustDlpProximityValidatorReferencedByEntries" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntries.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_dlp_proximity_validator.ZeroTrustDlpProximityValidatorReferencedByEntries;

ZeroTrustDlpProximityValidatorReferencedByEntries.builder()
    .build();
```


### ZeroTrustDlpProximityValidatorWords <a name="ZeroTrustDlpProximityValidatorWords" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWords"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWords.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_dlp_proximity_validator.ZeroTrustDlpProximityValidatorWords;

ZeroTrustDlpProximityValidatorWords.builder()
    .weight(java.lang.String)
    .word(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWords.property.weight">weight</a></code> | <code>java.lang.String</code> | How much a word contributes to a match's confidence when it is found nearby. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWords.property.word">word</a></code> | <code>java.lang.String</code> | The word or phrase to look for. Must contain 1–128 characters and is matched case-insensitively. |

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWords.property.weight"></a>

```java
public java.lang.String getWeight();
```

- *Type:* java.lang.String

How much a word contributes to a match's confidence when it is found nearby.

Separate from a profile's high/medium/low confidence threshold: this describes how telling the
word is, not how confident the resulting match is.
Available values: "strong", "moderate", "weak".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_dlp_proximity_validator#weight ZeroTrustDlpProximityValidator#weight}

---

##### `word`<sup>Required</sup> <a name="word" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWords.property.word"></a>

```java
public java.lang.String getWord();
```

- *Type:* java.lang.String

The word or phrase to look for. Must contain 1–128 characters and is matched case-insensitively.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_dlp_proximity_validator#word ZeroTrustDlpProximityValidator#word}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDlpProximityValidatorReferencedByEntriesList <a name="ZeroTrustDlpProximityValidatorReferencedByEntriesList" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_dlp_proximity_validator.ZeroTrustDlpProximityValidatorReferencedByEntriesList;

new ZeroTrustDlpProximityValidatorReferencedByEntriesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.get"></a>

```java
public ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---


### ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference <a name="ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_dlp_proximity_validator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference;

new ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntries">ZeroTrustDlpProximityValidatorReferencedByEntries</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesOutputReference.property.internalValue"></a>

```java
public ZeroTrustDlpProximityValidatorReferencedByEntries getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntries">ZeroTrustDlpProximityValidatorReferencedByEntries</a>

---


### ZeroTrustDlpProximityValidatorReferencedByOutputReference <a name="ZeroTrustDlpProximityValidatorReferencedByOutputReference" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_dlp_proximity_validator.ZeroTrustDlpProximityValidatorReferencedByOutputReference;

new ZeroTrustDlpProximityValidatorReferencedByOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.property.entries">entries</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList">ZeroTrustDlpProximityValidatorReferencedByEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.property.entryCount">entryCount</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.property.internalValue">internalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedBy">ZeroTrustDlpProximityValidatorReferencedBy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `entries`<sup>Required</sup> <a name="entries" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.property.entries"></a>

```java
public ZeroTrustDlpProximityValidatorReferencedByEntriesList getEntries();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByEntriesList">ZeroTrustDlpProximityValidatorReferencedByEntriesList</a>

---

##### `entryCount`<sup>Required</sup> <a name="entryCount" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.property.entryCount"></a>

```java
public java.lang.Number getEntryCount();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedByOutputReference.property.internalValue"></a>

```java
public ZeroTrustDlpProximityValidatorReferencedBy getInternalValue();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorReferencedBy">ZeroTrustDlpProximityValidatorReferencedBy</a>

---


### ZeroTrustDlpProximityValidatorWordsList <a name="ZeroTrustDlpProximityValidatorWordsList" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_dlp_proximity_validator.ZeroTrustDlpProximityValidatorWordsList;

new ZeroTrustDlpProximityValidatorWordsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.get"></a>

```java
public ZeroTrustDlpProximityValidatorWordsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWords">ZeroTrustDlpProximityValidatorWords</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<ZeroTrustDlpProximityValidatorWords> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWords">ZeroTrustDlpProximityValidatorWords</a>>

---


### ZeroTrustDlpProximityValidatorWordsOutputReference <a name="ZeroTrustDlpProximityValidatorWordsOutputReference" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.zero_trust_dlp_proximity_validator.ZeroTrustDlpProximityValidatorWordsOutputReference;

new ZeroTrustDlpProximityValidatorWordsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.property.weightInput">weightInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.property.wordInput">wordInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.property.weight">weight</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.property.word">word</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWords">ZeroTrustDlpProximityValidatorWords</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `weightInput`<sup>Optional</sup> <a name="weightInput" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.property.weightInput"></a>

```java
public java.lang.String getWeightInput();
```

- *Type:* java.lang.String

---

##### `wordInput`<sup>Optional</sup> <a name="wordInput" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.property.wordInput"></a>

```java
public java.lang.String getWordInput();
```

- *Type:* java.lang.String

---

##### `weight`<sup>Required</sup> <a name="weight" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.property.weight"></a>

```java
public java.lang.String getWeight();
```

- *Type:* java.lang.String

---

##### `word`<sup>Required</sup> <a name="word" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.property.word"></a>

```java
public java.lang.String getWord();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWordsOutputReference.property.internalValue"></a>

```java
public IResolvable|ZeroTrustDlpProximityValidatorWords getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustDlpProximityValidator.ZeroTrustDlpProximityValidatorWords">ZeroTrustDlpProximityValidatorWords</a>

---



