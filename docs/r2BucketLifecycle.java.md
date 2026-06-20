# `r2BucketLifecycle` Submodule <a name="`r2BucketLifecycle` Submodule" id="@cdktn/provider-cloudflare.r2BucketLifecycle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### R2BucketLifecycle <a name="R2BucketLifecycle" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle cloudflare_r2_bucket_lifecycle}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.r2_bucket_lifecycle.R2BucketLifecycle;

R2BucketLifecycle.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .bucketName(java.lang.String)
//  .jurisdiction(java.lang.String)
//  .rules(IResolvable|java.util.List<R2BucketLifecycleRules>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Account ID. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Name of the bucket. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.jurisdiction">jurisdiction</a></code> | <code>java.lang.String</code> | Jurisdiction of the bucket. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules">R2BucketLifecycleRules</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#rules R2BucketLifecycle#rules}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#account_id R2BucketLifecycle#account_id}

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.bucketName"></a>

- *Type:* java.lang.String

Name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#bucket_name R2BucketLifecycle#bucket_name}

---

##### `jurisdiction`<sup>Optional</sup> <a name="jurisdiction" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.jurisdiction"></a>

- *Type:* java.lang.String

Jurisdiction of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#jurisdiction R2BucketLifecycle#jurisdiction}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.Initializer.parameter.rules"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules">R2BucketLifecycleRules</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#rules R2BucketLifecycle#rules}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.putRules">putRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.resetJurisdiction">resetJurisdiction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.resetRules">resetRules</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putRules` <a name="putRules" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.putRules"></a>

```java
public void putRules(IResolvable|java.util.List<R2BucketLifecycleRules> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.putRules.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules">R2BucketLifecycleRules</a>>

---

##### `resetJurisdiction` <a name="resetJurisdiction" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.resetJurisdiction"></a>

```java
public void resetJurisdiction()
```

##### `resetRules` <a name="resetRules" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.resetRules"></a>

```java
public void resetRules()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a R2BucketLifecycle resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.r2_bucket_lifecycle.R2BucketLifecycle;

R2BucketLifecycle.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.r2_bucket_lifecycle.R2BucketLifecycle;

R2BucketLifecycle.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.r2_bucket_lifecycle.R2BucketLifecycle;

R2BucketLifecycle.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.r2_bucket_lifecycle.R2BucketLifecycle;

R2BucketLifecycle.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),R2BucketLifecycle.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a R2BucketLifecycle resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the R2BucketLifecycle to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing R2BucketLifecycle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the R2BucketLifecycle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.rules">rules</a></code> | <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList">R2BucketLifecycleRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.bucketNameInput">bucketNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.jurisdictionInput">jurisdictionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.rulesInput">rulesInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules">R2BucketLifecycleRules</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.jurisdiction">jurisdiction</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `rules`<sup>Required</sup> <a name="rules" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.rules"></a>

```java
public R2BucketLifecycleRulesList getRules();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList">R2BucketLifecycleRulesList</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `bucketNameInput`<sup>Optional</sup> <a name="bucketNameInput" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.bucketNameInput"></a>

```java
public java.lang.String getBucketNameInput();
```

- *Type:* java.lang.String

---

##### `jurisdictionInput`<sup>Optional</sup> <a name="jurisdictionInput" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.jurisdictionInput"></a>

```java
public java.lang.String getJurisdictionInput();
```

- *Type:* java.lang.String

---

##### `rulesInput`<sup>Optional</sup> <a name="rulesInput" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.rulesInput"></a>

```java
public IResolvable|java.util.List<R2BucketLifecycleRules> getRulesInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules">R2BucketLifecycleRules</a>>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

---

##### `jurisdiction`<sup>Required</sup> <a name="jurisdiction" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.jurisdiction"></a>

```java
public java.lang.String getJurisdiction();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycle.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### R2BucketLifecycleConfig <a name="R2BucketLifecycleConfig" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.r2_bucket_lifecycle.R2BucketLifecycleConfig;

R2BucketLifecycleConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .bucketName(java.lang.String)
//  .jurisdiction(java.lang.String)
//  .rules(IResolvable|java.util.List<R2BucketLifecycleRules>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Account ID. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.bucketName">bucketName</a></code> | <code>java.lang.String</code> | Name of the bucket. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.jurisdiction">jurisdiction</a></code> | <code>java.lang.String</code> | Jurisdiction of the bucket. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.rules">rules</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules">R2BucketLifecycleRules</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#rules R2BucketLifecycle#rules}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#account_id R2BucketLifecycle#account_id}

---

##### `bucketName`<sup>Required</sup> <a name="bucketName" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.bucketName"></a>

```java
public java.lang.String getBucketName();
```

- *Type:* java.lang.String

Name of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#bucket_name R2BucketLifecycle#bucket_name}

---

##### `jurisdiction`<sup>Optional</sup> <a name="jurisdiction" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.jurisdiction"></a>

```java
public java.lang.String getJurisdiction();
```

- *Type:* java.lang.String

Jurisdiction of the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#jurisdiction R2BucketLifecycle#jurisdiction}

---

##### `rules`<sup>Optional</sup> <a name="rules" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleConfig.property.rules"></a>

```java
public IResolvable|java.util.List<R2BucketLifecycleRules> getRules();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules">R2BucketLifecycleRules</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#rules R2BucketLifecycle#rules}.

---

### R2BucketLifecycleRules <a name="R2BucketLifecycleRules" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.r2_bucket_lifecycle.R2BucketLifecycleRules;

R2BucketLifecycleRules.builder()
    .conditions(R2BucketLifecycleRulesConditions)
    .enabled(java.lang.Boolean|IResolvable)
    .id(java.lang.String)
//  .abortMultipartUploadsTransition(R2BucketLifecycleRulesAbortMultipartUploadsTransition)
//  .deleteObjectsTransition(R2BucketLifecycleRulesDeleteObjectsTransition)
//  .storageClassTransitions(IResolvable|java.util.List<R2BucketLifecycleRulesStorageClassTransitions>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditions">R2BucketLifecycleRulesConditions</a></code> | Conditions that apply to all transitions of this rule. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether or not this rule is in effect. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules.property.id">id</a></code> | <code>java.lang.String</code> | Unique identifier for this rule. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules.property.abortMultipartUploadsTransition">abortMultipartUploadsTransition</a></code> | <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransition">R2BucketLifecycleRulesAbortMultipartUploadsTransition</a></code> | Transition to abort ongoing multipart uploads. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules.property.deleteObjectsTransition">deleteObjectsTransition</a></code> | <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransition">R2BucketLifecycleRulesDeleteObjectsTransition</a></code> | Transition to delete objects. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules.property.storageClassTransitions">storageClassTransitions</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitions">R2BucketLifecycleRulesStorageClassTransitions</a>></code> | Transitions to change the storage class of objects. |

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules.property.conditions"></a>

```java
public R2BucketLifecycleRulesConditions getConditions();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditions">R2BucketLifecycleRulesConditions</a>

Conditions that apply to all transitions of this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#conditions R2BucketLifecycle#conditions}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether or not this rule is in effect.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#enabled R2BucketLifecycle#enabled}

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

Unique identifier for this rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#id R2BucketLifecycle#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `abortMultipartUploadsTransition`<sup>Optional</sup> <a name="abortMultipartUploadsTransition" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules.property.abortMultipartUploadsTransition"></a>

```java
public R2BucketLifecycleRulesAbortMultipartUploadsTransition getAbortMultipartUploadsTransition();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransition">R2BucketLifecycleRulesAbortMultipartUploadsTransition</a>

Transition to abort ongoing multipart uploads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#abort_multipart_uploads_transition R2BucketLifecycle#abort_multipart_uploads_transition}

---

##### `deleteObjectsTransition`<sup>Optional</sup> <a name="deleteObjectsTransition" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules.property.deleteObjectsTransition"></a>

```java
public R2BucketLifecycleRulesDeleteObjectsTransition getDeleteObjectsTransition();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransition">R2BucketLifecycleRulesDeleteObjectsTransition</a>

Transition to delete objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#delete_objects_transition R2BucketLifecycle#delete_objects_transition}

---

##### `storageClassTransitions`<sup>Optional</sup> <a name="storageClassTransitions" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules.property.storageClassTransitions"></a>

```java
public IResolvable|java.util.List<R2BucketLifecycleRulesStorageClassTransitions> getStorageClassTransitions();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitions">R2BucketLifecycleRulesStorageClassTransitions</a>>

Transitions to change the storage class of objects.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#storage_class_transitions R2BucketLifecycle#storage_class_transitions}

---

### R2BucketLifecycleRulesAbortMultipartUploadsTransition <a name="R2BucketLifecycleRulesAbortMultipartUploadsTransition" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransition.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.r2_bucket_lifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransition;

R2BucketLifecycleRulesAbortMultipartUploadsTransition.builder()
//  .condition(R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransition.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition">R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition</a></code> | Condition for lifecycle transitions to apply after an object reaches an age in seconds. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransition.property.condition"></a>

```java
public R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition getCondition();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition">R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition</a>

Condition for lifecycle transitions to apply after an object reaches an age in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#condition R2BucketLifecycle#condition}

---

### R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition <a name="R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.r2_bucket_lifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition;

R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition.builder()
    .maxAge(java.lang.Number)
    .type(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#max_age R2BucketLifecycle#max_age}. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition.property.type">type</a></code> | <code>java.lang.String</code> | Available values: "Age". |

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#max_age R2BucketLifecycle#max_age}.

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Available values: "Age".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#type R2BucketLifecycle#type}

---

### R2BucketLifecycleRulesConditions <a name="R2BucketLifecycleRulesConditions" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditions.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.r2_bucket_lifecycle.R2BucketLifecycleRulesConditions;

R2BucketLifecycleRulesConditions.builder()
    .prefix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditions.property.prefix">prefix</a></code> | <code>java.lang.String</code> | Transitions will only apply to objects/uploads in the bucket that start with the given prefix, an empty prefix can be provided to scope rule to all objects/uploads. |

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditions.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

Transitions will only apply to objects/uploads in the bucket that start with the given prefix, an empty prefix can be provided to scope rule to all objects/uploads.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#prefix R2BucketLifecycle#prefix}

---

### R2BucketLifecycleRulesDeleteObjectsTransition <a name="R2BucketLifecycleRulesDeleteObjectsTransition" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransition.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.r2_bucket_lifecycle.R2BucketLifecycleRulesDeleteObjectsTransition;

R2BucketLifecycleRulesDeleteObjectsTransition.builder()
//  .condition(R2BucketLifecycleRulesDeleteObjectsTransitionCondition)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransition.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionCondition">R2BucketLifecycleRulesDeleteObjectsTransitionCondition</a></code> | Condition for lifecycle transitions to apply after an object reaches an age in seconds. |

---

##### `condition`<sup>Optional</sup> <a name="condition" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransition.property.condition"></a>

```java
public R2BucketLifecycleRulesDeleteObjectsTransitionCondition getCondition();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionCondition">R2BucketLifecycleRulesDeleteObjectsTransitionCondition</a>

Condition for lifecycle transitions to apply after an object reaches an age in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#condition R2BucketLifecycle#condition}

---

### R2BucketLifecycleRulesDeleteObjectsTransitionCondition <a name="R2BucketLifecycleRulesDeleteObjectsTransitionCondition" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionCondition.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.r2_bucket_lifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionCondition;

R2BucketLifecycleRulesDeleteObjectsTransitionCondition.builder()
    .type(java.lang.String)
//  .date(java.lang.String)
//  .maxAge(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionCondition.property.type">type</a></code> | <code>java.lang.String</code> | Available values: "Age", "Date". |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionCondition.property.date">date</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#date R2BucketLifecycle#date}. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionCondition.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#max_age R2BucketLifecycle#max_age}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionCondition.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Available values: "Age", "Date".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#type R2BucketLifecycle#type}

---

##### `date`<sup>Optional</sup> <a name="date" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionCondition.property.date"></a>

```java
public java.lang.String getDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#date R2BucketLifecycle#date}.

---

##### `maxAge`<sup>Optional</sup> <a name="maxAge" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionCondition.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#max_age R2BucketLifecycle#max_age}.

---

### R2BucketLifecycleRulesStorageClassTransitions <a name="R2BucketLifecycleRulesStorageClassTransitions" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitions.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.r2_bucket_lifecycle.R2BucketLifecycleRulesStorageClassTransitions;

R2BucketLifecycleRulesStorageClassTransitions.builder()
    .condition(R2BucketLifecycleRulesStorageClassTransitionsCondition)
    .storageClass(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitions.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsCondition">R2BucketLifecycleRulesStorageClassTransitionsCondition</a></code> | Condition for lifecycle transitions to apply after an object reaches an age in seconds. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitions.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | Available values: "InfrequentAccess". |

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitions.property.condition"></a>

```java
public R2BucketLifecycleRulesStorageClassTransitionsCondition getCondition();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsCondition">R2BucketLifecycleRulesStorageClassTransitionsCondition</a>

Condition for lifecycle transitions to apply after an object reaches an age in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#condition R2BucketLifecycle#condition}

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitions.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

Available values: "InfrequentAccess".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#storage_class R2BucketLifecycle#storage_class}

---

### R2BucketLifecycleRulesStorageClassTransitionsCondition <a name="R2BucketLifecycleRulesStorageClassTransitionsCondition" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsCondition"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsCondition.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.r2_bucket_lifecycle.R2BucketLifecycleRulesStorageClassTransitionsCondition;

R2BucketLifecycleRulesStorageClassTransitionsCondition.builder()
    .type(java.lang.String)
//  .date(java.lang.String)
//  .maxAge(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsCondition.property.type">type</a></code> | <code>java.lang.String</code> | Available values: "Age", "Date". |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsCondition.property.date">date</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#date R2BucketLifecycle#date}. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsCondition.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#max_age R2BucketLifecycle#max_age}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsCondition.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Available values: "Age", "Date".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#type R2BucketLifecycle#type}

---

##### `date`<sup>Optional</sup> <a name="date" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsCondition.property.date"></a>

```java
public java.lang.String getDate();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#date R2BucketLifecycle#date}.

---

##### `maxAge`<sup>Optional</sup> <a name="maxAge" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsCondition.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/r2_bucket_lifecycle#max_age R2BucketLifecycle#max_age}.

---

## Classes <a name="Classes" id="Classes"></a>

### R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference <a name="R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.r2_bucket_lifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference;

new R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.maxAgeInput">maxAgeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition">R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.maxAgeInput"></a>

```java
public java.lang.Number getMaxAgeInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference.property.internalValue"></a>

```java
public IResolvable|R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition">R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition</a>

---


### R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference <a name="R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.r2_bucket_lifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference;

new R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.resetCondition">resetCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.putCondition"></a>

```java
public void putCondition(R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition">R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.resetCondition"></a>

```java
public void resetCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference">R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.conditionInput">conditionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition">R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransition">R2BucketLifecycleRulesAbortMultipartUploadsTransition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.condition"></a>

```java
public R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference">R2BucketLifecycleRulesAbortMultipartUploadsTransitionConditionOutputReference</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.conditionInput"></a>

```java
public IResolvable|R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition getConditionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition">R2BucketLifecycleRulesAbortMultipartUploadsTransitionCondition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference.property.internalValue"></a>

```java
public IResolvable|R2BucketLifecycleRulesAbortMultipartUploadsTransition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransition">R2BucketLifecycleRulesAbortMultipartUploadsTransition</a>

---


### R2BucketLifecycleRulesConditionsOutputReference <a name="R2BucketLifecycleRulesConditionsOutputReference" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.r2_bucket_lifecycle.R2BucketLifecycleRulesConditionsOutputReference;

new R2BucketLifecycleRulesConditionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditions">R2BucketLifecycleRulesConditions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference.property.internalValue"></a>

```java
public IResolvable|R2BucketLifecycleRulesConditions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditions">R2BucketLifecycleRulesConditions</a>

---


### R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference <a name="R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.r2_bucket_lifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference;

new R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.resetDate">resetDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.resetMaxAge">resetMaxAge</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDate` <a name="resetDate" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.resetDate"></a>

```java
public void resetDate()
```

##### `resetMaxAge` <a name="resetMaxAge" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.resetMaxAge"></a>

```java
public void resetMaxAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.dateInput">dateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.maxAgeInput">maxAgeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.date">date</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionCondition">R2BucketLifecycleRulesDeleteObjectsTransitionCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dateInput`<sup>Optional</sup> <a name="dateInput" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.dateInput"></a>

```java
public java.lang.String getDateInput();
```

- *Type:* java.lang.String

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.maxAgeInput"></a>

```java
public java.lang.Number getMaxAgeInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `date`<sup>Required</sup> <a name="date" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.date"></a>

```java
public java.lang.String getDate();
```

- *Type:* java.lang.String

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference.property.internalValue"></a>

```java
public IResolvable|R2BucketLifecycleRulesDeleteObjectsTransitionCondition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionCondition">R2BucketLifecycleRulesDeleteObjectsTransitionCondition</a>

---


### R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference <a name="R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.r2_bucket_lifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference;

new R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.putCondition">putCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.resetCondition">resetCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.putCondition"></a>

```java
public void putCondition(R2BucketLifecycleRulesDeleteObjectsTransitionCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionCondition">R2BucketLifecycleRulesDeleteObjectsTransitionCondition</a>

---

##### `resetCondition` <a name="resetCondition" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.resetCondition"></a>

```java
public void resetCondition()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference">R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.conditionInput">conditionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionCondition">R2BucketLifecycleRulesDeleteObjectsTransitionCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransition">R2BucketLifecycleRulesDeleteObjectsTransition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.condition"></a>

```java
public R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference">R2BucketLifecycleRulesDeleteObjectsTransitionConditionOutputReference</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.conditionInput"></a>

```java
public IResolvable|R2BucketLifecycleRulesDeleteObjectsTransitionCondition getConditionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionCondition">R2BucketLifecycleRulesDeleteObjectsTransitionCondition</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference.property.internalValue"></a>

```java
public IResolvable|R2BucketLifecycleRulesDeleteObjectsTransition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransition">R2BucketLifecycleRulesDeleteObjectsTransition</a>

---


### R2BucketLifecycleRulesList <a name="R2BucketLifecycleRulesList" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.r2_bucket_lifecycle.R2BucketLifecycleRulesList;

new R2BucketLifecycleRulesList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.get"></a>

```java
public R2BucketLifecycleRulesOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules">R2BucketLifecycleRules</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesList.property.internalValue"></a>

```java
public IResolvable|java.util.List<R2BucketLifecycleRules> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules">R2BucketLifecycleRules</a>>

---


### R2BucketLifecycleRulesOutputReference <a name="R2BucketLifecycleRulesOutputReference" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.r2_bucket_lifecycle.R2BucketLifecycleRulesOutputReference;

new R2BucketLifecycleRulesOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.putAbortMultipartUploadsTransition">putAbortMultipartUploadsTransition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.putConditions">putConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.putDeleteObjectsTransition">putDeleteObjectsTransition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.putStorageClassTransitions">putStorageClassTransitions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.resetAbortMultipartUploadsTransition">resetAbortMultipartUploadsTransition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.resetDeleteObjectsTransition">resetDeleteObjectsTransition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.resetStorageClassTransitions">resetStorageClassTransitions</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putAbortMultipartUploadsTransition` <a name="putAbortMultipartUploadsTransition" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.putAbortMultipartUploadsTransition"></a>

```java
public void putAbortMultipartUploadsTransition(R2BucketLifecycleRulesAbortMultipartUploadsTransition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.putAbortMultipartUploadsTransition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransition">R2BucketLifecycleRulesAbortMultipartUploadsTransition</a>

---

##### `putConditions` <a name="putConditions" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.putConditions"></a>

```java
public void putConditions(R2BucketLifecycleRulesConditions value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.putConditions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditions">R2BucketLifecycleRulesConditions</a>

---

##### `putDeleteObjectsTransition` <a name="putDeleteObjectsTransition" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.putDeleteObjectsTransition"></a>

```java
public void putDeleteObjectsTransition(R2BucketLifecycleRulesDeleteObjectsTransition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.putDeleteObjectsTransition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransition">R2BucketLifecycleRulesDeleteObjectsTransition</a>

---

##### `putStorageClassTransitions` <a name="putStorageClassTransitions" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.putStorageClassTransitions"></a>

```java
public void putStorageClassTransitions(IResolvable|java.util.List<R2BucketLifecycleRulesStorageClassTransitions> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.putStorageClassTransitions.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitions">R2BucketLifecycleRulesStorageClassTransitions</a>>

---

##### `resetAbortMultipartUploadsTransition` <a name="resetAbortMultipartUploadsTransition" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.resetAbortMultipartUploadsTransition"></a>

```java
public void resetAbortMultipartUploadsTransition()
```

##### `resetDeleteObjectsTransition` <a name="resetDeleteObjectsTransition" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.resetDeleteObjectsTransition"></a>

```java
public void resetDeleteObjectsTransition()
```

##### `resetStorageClassTransitions` <a name="resetStorageClassTransitions" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.resetStorageClassTransitions"></a>

```java
public void resetStorageClassTransitions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.abortMultipartUploadsTransition">abortMultipartUploadsTransition</a></code> | <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference">R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.conditions">conditions</a></code> | <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference">R2BucketLifecycleRulesConditionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.deleteObjectsTransition">deleteObjectsTransition</a></code> | <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference">R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.storageClassTransitions">storageClassTransitions</a></code> | <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList">R2BucketLifecycleRulesStorageClassTransitionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.abortMultipartUploadsTransitionInput">abortMultipartUploadsTransitionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransition">R2BucketLifecycleRulesAbortMultipartUploadsTransition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.conditionsInput">conditionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditions">R2BucketLifecycleRulesConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.deleteObjectsTransitionInput">deleteObjectsTransitionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransition">R2BucketLifecycleRulesDeleteObjectsTransition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.idInput">idInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.storageClassTransitionsInput">storageClassTransitionsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitions">R2BucketLifecycleRulesStorageClassTransitions</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules">R2BucketLifecycleRules</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `abortMultipartUploadsTransition`<sup>Required</sup> <a name="abortMultipartUploadsTransition" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.abortMultipartUploadsTransition"></a>

```java
public R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference getAbortMultipartUploadsTransition();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference">R2BucketLifecycleRulesAbortMultipartUploadsTransitionOutputReference</a>

---

##### `conditions`<sup>Required</sup> <a name="conditions" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.conditions"></a>

```java
public R2BucketLifecycleRulesConditionsOutputReference getConditions();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditionsOutputReference">R2BucketLifecycleRulesConditionsOutputReference</a>

---

##### `deleteObjectsTransition`<sup>Required</sup> <a name="deleteObjectsTransition" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.deleteObjectsTransition"></a>

```java
public R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference getDeleteObjectsTransition();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference">R2BucketLifecycleRulesDeleteObjectsTransitionOutputReference</a>

---

##### `storageClassTransitions`<sup>Required</sup> <a name="storageClassTransitions" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.storageClassTransitions"></a>

```java
public R2BucketLifecycleRulesStorageClassTransitionsList getStorageClassTransitions();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList">R2BucketLifecycleRulesStorageClassTransitionsList</a>

---

##### `abortMultipartUploadsTransitionInput`<sup>Optional</sup> <a name="abortMultipartUploadsTransitionInput" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.abortMultipartUploadsTransitionInput"></a>

```java
public IResolvable|R2BucketLifecycleRulesAbortMultipartUploadsTransition getAbortMultipartUploadsTransitionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesAbortMultipartUploadsTransition">R2BucketLifecycleRulesAbortMultipartUploadsTransition</a>

---

##### `conditionsInput`<sup>Optional</sup> <a name="conditionsInput" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.conditionsInput"></a>

```java
public IResolvable|R2BucketLifecycleRulesConditions getConditionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesConditions">R2BucketLifecycleRulesConditions</a>

---

##### `deleteObjectsTransitionInput`<sup>Optional</sup> <a name="deleteObjectsTransitionInput" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.deleteObjectsTransitionInput"></a>

```java
public IResolvable|R2BucketLifecycleRulesDeleteObjectsTransition getDeleteObjectsTransitionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesDeleteObjectsTransition">R2BucketLifecycleRulesDeleteObjectsTransition</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `idInput`<sup>Optional</sup> <a name="idInput" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.idInput"></a>

```java
public java.lang.String getIdInput();
```

- *Type:* java.lang.String

---

##### `storageClassTransitionsInput`<sup>Optional</sup> <a name="storageClassTransitionsInput" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.storageClassTransitionsInput"></a>

```java
public IResolvable|java.util.List<R2BucketLifecycleRulesStorageClassTransitions> getStorageClassTransitionsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitions">R2BucketLifecycleRulesStorageClassTransitions</a>>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesOutputReference.property.internalValue"></a>

```java
public IResolvable|R2BucketLifecycleRules getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRules">R2BucketLifecycleRules</a>

---


### R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference <a name="R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.r2_bucket_lifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference;

new R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.resetDate">resetDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.resetMaxAge">resetMaxAge</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetDate` <a name="resetDate" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.resetDate"></a>

```java
public void resetDate()
```

##### `resetMaxAge` <a name="resetMaxAge" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.resetMaxAge"></a>

```java
public void resetMaxAge()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.dateInput">dateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.maxAgeInput">maxAgeInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.date">date</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.maxAge">maxAge</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsCondition">R2BucketLifecycleRulesStorageClassTransitionsCondition</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `dateInput`<sup>Optional</sup> <a name="dateInput" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.dateInput"></a>

```java
public java.lang.String getDateInput();
```

- *Type:* java.lang.String

---

##### `maxAgeInput`<sup>Optional</sup> <a name="maxAgeInput" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.maxAgeInput"></a>

```java
public java.lang.Number getMaxAgeInput();
```

- *Type:* java.lang.Number

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `date`<sup>Required</sup> <a name="date" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.date"></a>

```java
public java.lang.String getDate();
```

- *Type:* java.lang.String

---

##### `maxAge`<sup>Required</sup> <a name="maxAge" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.maxAge"></a>

```java
public java.lang.Number getMaxAge();
```

- *Type:* java.lang.Number

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference.property.internalValue"></a>

```java
public IResolvable|R2BucketLifecycleRulesStorageClassTransitionsCondition getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsCondition">R2BucketLifecycleRulesStorageClassTransitionsCondition</a>

---


### R2BucketLifecycleRulesStorageClassTransitionsList <a name="R2BucketLifecycleRulesStorageClassTransitionsList" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.r2_bucket_lifecycle.R2BucketLifecycleRulesStorageClassTransitionsList;

new R2BucketLifecycleRulesStorageClassTransitionsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.get"></a>

```java
public R2BucketLifecycleRulesStorageClassTransitionsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitions">R2BucketLifecycleRulesStorageClassTransitions</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<R2BucketLifecycleRulesStorageClassTransitions> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitions">R2BucketLifecycleRulesStorageClassTransitions</a>>

---


### R2BucketLifecycleRulesStorageClassTransitionsOutputReference <a name="R2BucketLifecycleRulesStorageClassTransitionsOutputReference" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.r2_bucket_lifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference;

new R2BucketLifecycleRulesStorageClassTransitionsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.putCondition">putCondition</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCondition` <a name="putCondition" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.putCondition"></a>

```java
public void putCondition(R2BucketLifecycleRulesStorageClassTransitionsCondition value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.putCondition.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsCondition">R2BucketLifecycleRulesStorageClassTransitionsCondition</a>

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.condition">condition</a></code> | <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference">R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.conditionInput">conditionInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsCondition">R2BucketLifecycleRulesStorageClassTransitionsCondition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.storageClassInput">storageClassInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.storageClass">storageClass</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitions">R2BucketLifecycleRulesStorageClassTransitions</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `condition`<sup>Required</sup> <a name="condition" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.condition"></a>

```java
public R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference getCondition();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference">R2BucketLifecycleRulesStorageClassTransitionsConditionOutputReference</a>

---

##### `conditionInput`<sup>Optional</sup> <a name="conditionInput" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.conditionInput"></a>

```java
public IResolvable|R2BucketLifecycleRulesStorageClassTransitionsCondition getConditionInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsCondition">R2BucketLifecycleRulesStorageClassTransitionsCondition</a>

---

##### `storageClassInput`<sup>Optional</sup> <a name="storageClassInput" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.storageClassInput"></a>

```java
public java.lang.String getStorageClassInput();
```

- *Type:* java.lang.String

---

##### `storageClass`<sup>Required</sup> <a name="storageClass" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.storageClass"></a>

```java
public java.lang.String getStorageClass();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitionsOutputReference.property.internalValue"></a>

```java
public IResolvable|R2BucketLifecycleRulesStorageClassTransitions getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.r2BucketLifecycle.R2BucketLifecycleRulesStorageClassTransitions">R2BucketLifecycleRulesStorageClassTransitions</a>

---



