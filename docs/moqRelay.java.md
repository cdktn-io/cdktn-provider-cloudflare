# `moqRelay` Submodule <a name="`moqRelay` Submodule" id="@cdktn/provider-cloudflare.moqRelay"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MoqRelay <a name="MoqRelay" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay cloudflare_moq_relay}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.moq_relay.MoqRelay;

MoqRelay.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .name(java.lang.String)
//  .config(MoqRelayConfigA)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account identifier. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Human-readable name for the relay. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a></code> | upstreams and lingering_subscribe are mutually exclusive. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Cloudflare account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#account_id MoqRelay#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Human-readable name for the relay.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#name MoqRelay#name}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a>

upstreams and lingering_subscribe are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#config MoqRelay#config}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.resetConfig">resetConfig</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.putConfig"></a>

```java
public void putConfig(MoqRelayConfigA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.resetConfig"></a>

```java
public void resetConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a MoqRelay resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.moq_relay.MoqRelay;

MoqRelay.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.moq_relay.MoqRelay;

MoqRelay.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.moq_relay.MoqRelay;

MoqRelay.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.moq_relay.MoqRelay;

MoqRelay.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),MoqRelay.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a MoqRelay resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the MoqRelay to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing MoqRelay that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the MoqRelay to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference">MoqRelayConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.created">created</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.modified">modified</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.status">status</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.tokenPublishSubscribe">tokenPublishSubscribe</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.tokenSubscribe">tokenSubscribe</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.uid">uid</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.configInput">configInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.config"></a>

```java
public MoqRelayConfigAOutputReference getConfig();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference">MoqRelayConfigAOutputReference</a>

---

##### `created`<sup>Required</sup> <a name="created" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.created"></a>

```java
public java.lang.String getCreated();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modified`<sup>Required</sup> <a name="modified" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.modified"></a>

```java
public java.lang.String getModified();
```

- *Type:* java.lang.String

---

##### `status`<sup>Required</sup> <a name="status" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.status"></a>

```java
public java.lang.String getStatus();
```

- *Type:* java.lang.String

---

##### `tokenPublishSubscribe`<sup>Required</sup> <a name="tokenPublishSubscribe" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.tokenPublishSubscribe"></a>

```java
public java.lang.String getTokenPublishSubscribe();
```

- *Type:* java.lang.String

---

##### `tokenSubscribe`<sup>Required</sup> <a name="tokenSubscribe" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.tokenSubscribe"></a>

```java
public java.lang.String getTokenSubscribe();
```

- *Type:* java.lang.String

---

##### `uid`<sup>Required</sup> <a name="uid" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.uid"></a>

```java
public java.lang.String getUid();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.configInput"></a>

```java
public IResolvable|MoqRelayConfigA getConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.moqRelay.MoqRelay.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### MoqRelayConfig <a name="MoqRelayConfig" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.moq_relay.MoqRelayConfig;

MoqRelayConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .name(java.lang.String)
//  .config(MoqRelayConfigA)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare account identifier. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.name">name</a></code> | <code>java.lang.String</code> | Human-readable name for the relay. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a></code> | upstreams and lingering_subscribe are mutually exclusive. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Cloudflare account identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#account_id MoqRelay#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Human-readable name for the relay.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#name MoqRelay#name}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfig.property.config"></a>

```java
public MoqRelayConfigA getConfig();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a>

upstreams and lingering_subscribe are mutually exclusive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#config MoqRelay#config}

---

### MoqRelayConfigA <a name="MoqRelayConfigA" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.moq_relay.MoqRelayConfigA;

MoqRelayConfigA.builder()
//  .lingeringSubscribe(MoqRelayConfigLingeringSubscribe)
//  .upstreams(MoqRelayConfigUpstreams)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA.property.lingeringSubscribe">lingeringSubscribe</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe">MoqRelayConfigLingeringSubscribe</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#lingering_subscribe MoqRelay#lingering_subscribe}. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA.property.upstreams">upstreams</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams">MoqRelayConfigUpstreams</a></code> | Upstreams are external MOQT server publishers that a relay falls back to when it has no local publisher for a requested namespace/track. |

---

##### `lingeringSubscribe`<sup>Optional</sup> <a name="lingeringSubscribe" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA.property.lingeringSubscribe"></a>

```java
public MoqRelayConfigLingeringSubscribe getLingeringSubscribe();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe">MoqRelayConfigLingeringSubscribe</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#lingering_subscribe MoqRelay#lingering_subscribe}.

---

##### `upstreams`<sup>Optional</sup> <a name="upstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA.property.upstreams"></a>

```java
public MoqRelayConfigUpstreams getUpstreams();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams">MoqRelayConfigUpstreams</a>

Upstreams are external MOQT server publishers that a relay falls back to when it has no local publisher for a requested namespace/track.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#upstreams MoqRelay#upstreams}

---

### MoqRelayConfigLingeringSubscribe <a name="MoqRelayConfigLingeringSubscribe" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.moq_relay.MoqRelayConfigLingeringSubscribe;

MoqRelayConfigLingeringSubscribe.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .maxTimeoutMs(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#enabled MoqRelay#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe.property.maxTimeoutMs">maxTimeoutMs</a></code> | <code>java.lang.Number</code> | Relay-level ceiling on lingering subscribe timeout (ms). Default 30000. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#enabled MoqRelay#enabled}.

---

##### `maxTimeoutMs`<sup>Optional</sup> <a name="maxTimeoutMs" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe.property.maxTimeoutMs"></a>

```java
public java.lang.Number getMaxTimeoutMs();
```

- *Type:* java.lang.Number

Relay-level ceiling on lingering subscribe timeout (ms). Default 30000.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#max_timeout_ms MoqRelay#max_timeout_ms}

---

### MoqRelayConfigUpstreams <a name="MoqRelayConfigUpstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.moq_relay.MoqRelayConfigUpstreams;

MoqRelayConfigUpstreams.builder()
//  .enabled(java.lang.Boolean|IResolvable)
//  .upstreams(IResolvable|java.util.List<MoqRelayConfigUpstreamsUpstreams>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#enabled MoqRelay#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams.property.upstreams">upstreams</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>></code> | Ordered list of upstream MOQT server publishers. |

---

##### `enabled`<sup>Optional</sup> <a name="enabled" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#enabled MoqRelay#enabled}.

---

##### `upstreams`<sup>Optional</sup> <a name="upstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams.property.upstreams"></a>

```java
public IResolvable|java.util.List<MoqRelayConfigUpstreamsUpstreams> getUpstreams();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>>

Ordered list of upstream MOQT server publishers.

Each entry is an
object (not a bare string) so per-upstream configuration can be
added in the future without another breaking change.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#upstreams MoqRelay#upstreams}

---

### MoqRelayConfigUpstreamsUpstreams <a name="MoqRelayConfigUpstreamsUpstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.moq_relay.MoqRelayConfigUpstreamsUpstreams;

MoqRelayConfigUpstreamsUpstreams.builder()
//  .url(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams.property.url">url</a></code> | <code>java.lang.String</code> | Upstream MOQT server publisher URL. |

---

##### `url`<sup>Optional</sup> <a name="url" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

Upstream MOQT server publisher URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.23.0/docs/resources/moq_relay#url MoqRelay#url}

---

## Classes <a name="Classes" id="Classes"></a>

### MoqRelayConfigAOutputReference <a name="MoqRelayConfigAOutputReference" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.moq_relay.MoqRelayConfigAOutputReference;

new MoqRelayConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.putLingeringSubscribe">putLingeringSubscribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.putUpstreams">putUpstreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.resetLingeringSubscribe">resetLingeringSubscribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.resetUpstreams">resetUpstreams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putLingeringSubscribe` <a name="putLingeringSubscribe" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.putLingeringSubscribe"></a>

```java
public void putLingeringSubscribe(MoqRelayConfigLingeringSubscribe value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.putLingeringSubscribe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe">MoqRelayConfigLingeringSubscribe</a>

---

##### `putUpstreams` <a name="putUpstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.putUpstreams"></a>

```java
public void putUpstreams(MoqRelayConfigUpstreams value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.putUpstreams.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams">MoqRelayConfigUpstreams</a>

---

##### `resetLingeringSubscribe` <a name="resetLingeringSubscribe" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.resetLingeringSubscribe"></a>

```java
public void resetLingeringSubscribe()
```

##### `resetUpstreams` <a name="resetUpstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.resetUpstreams"></a>

```java
public void resetUpstreams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.lingeringSubscribe">lingeringSubscribe</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference">MoqRelayConfigLingeringSubscribeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.upstreams">upstreams</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference">MoqRelayConfigUpstreamsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.lingeringSubscribeInput">lingeringSubscribeInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe">MoqRelayConfigLingeringSubscribe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.upstreamsInput">upstreamsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams">MoqRelayConfigUpstreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `lingeringSubscribe`<sup>Required</sup> <a name="lingeringSubscribe" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.lingeringSubscribe"></a>

```java
public MoqRelayConfigLingeringSubscribeOutputReference getLingeringSubscribe();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference">MoqRelayConfigLingeringSubscribeOutputReference</a>

---

##### `upstreams`<sup>Required</sup> <a name="upstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.upstreams"></a>

```java
public MoqRelayConfigUpstreamsOutputReference getUpstreams();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference">MoqRelayConfigUpstreamsOutputReference</a>

---

##### `lingeringSubscribeInput`<sup>Optional</sup> <a name="lingeringSubscribeInput" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.lingeringSubscribeInput"></a>

```java
public IResolvable|MoqRelayConfigLingeringSubscribe getLingeringSubscribeInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe">MoqRelayConfigLingeringSubscribe</a>

---

##### `upstreamsInput`<sup>Optional</sup> <a name="upstreamsInput" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.upstreamsInput"></a>

```java
public IResolvable|MoqRelayConfigUpstreams getUpstreamsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams">MoqRelayConfigUpstreams</a>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigAOutputReference.property.internalValue"></a>

```java
public IResolvable|MoqRelayConfigA getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigA">MoqRelayConfigA</a>

---


### MoqRelayConfigLingeringSubscribeOutputReference <a name="MoqRelayConfigLingeringSubscribeOutputReference" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.moq_relay.MoqRelayConfigLingeringSubscribeOutputReference;

new MoqRelayConfigLingeringSubscribeOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.resetMaxTimeoutMs">resetMaxTimeoutMs</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetMaxTimeoutMs` <a name="resetMaxTimeoutMs" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.resetMaxTimeoutMs"></a>

```java
public void resetMaxTimeoutMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.maxTimeoutMsInput">maxTimeoutMsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.maxTimeoutMs">maxTimeoutMs</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe">MoqRelayConfigLingeringSubscribe</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxTimeoutMsInput`<sup>Optional</sup> <a name="maxTimeoutMsInput" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.maxTimeoutMsInput"></a>

```java
public java.lang.Number getMaxTimeoutMsInput();
```

- *Type:* java.lang.Number

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `maxTimeoutMs`<sup>Required</sup> <a name="maxTimeoutMs" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.maxTimeoutMs"></a>

```java
public java.lang.Number getMaxTimeoutMs();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribeOutputReference.property.internalValue"></a>

```java
public IResolvable|MoqRelayConfigLingeringSubscribe getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigLingeringSubscribe">MoqRelayConfigLingeringSubscribe</a>

---


### MoqRelayConfigUpstreamsOutputReference <a name="MoqRelayConfigUpstreamsOutputReference" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.moq_relay.MoqRelayConfigUpstreamsOutputReference;

new MoqRelayConfigUpstreamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.putUpstreams">putUpstreams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.resetEnabled">resetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.resetUpstreams">resetUpstreams</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putUpstreams` <a name="putUpstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.putUpstreams"></a>

```java
public void putUpstreams(IResolvable|java.util.List<MoqRelayConfigUpstreamsUpstreams> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.putUpstreams.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>>

---

##### `resetEnabled` <a name="resetEnabled" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.resetEnabled"></a>

```java
public void resetEnabled()
```

##### `resetUpstreams` <a name="resetUpstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.resetUpstreams"></a>

```java
public void resetUpstreams()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.upstreams">upstreams</a></code> | <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList">MoqRelayConfigUpstreamsUpstreamsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.upstreamsInput">upstreamsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams">MoqRelayConfigUpstreams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `upstreams`<sup>Required</sup> <a name="upstreams" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.upstreams"></a>

```java
public MoqRelayConfigUpstreamsUpstreamsList getUpstreams();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList">MoqRelayConfigUpstreamsUpstreamsList</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `upstreamsInput`<sup>Optional</sup> <a name="upstreamsInput" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.upstreamsInput"></a>

```java
public IResolvable|java.util.List<MoqRelayConfigUpstreamsUpstreams> getUpstreamsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>>

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsOutputReference.property.internalValue"></a>

```java
public IResolvable|MoqRelayConfigUpstreams getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreams">MoqRelayConfigUpstreams</a>

---


### MoqRelayConfigUpstreamsUpstreamsList <a name="MoqRelayConfigUpstreamsUpstreamsList" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.moq_relay.MoqRelayConfigUpstreamsUpstreamsList;

new MoqRelayConfigUpstreamsUpstreamsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.get"></a>

```java
public MoqRelayConfigUpstreamsUpstreamsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<MoqRelayConfigUpstreamsUpstreams> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>>

---


### MoqRelayConfigUpstreamsUpstreamsOutputReference <a name="MoqRelayConfigUpstreamsUpstreamsOutputReference" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.moq_relay.MoqRelayConfigUpstreamsUpstreamsOutputReference;

new MoqRelayConfigUpstreamsUpstreamsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.resetUrl">resetUrl</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetUrl` <a name="resetUrl" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.resetUrl"></a>

```java
public void resetUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.urlInput">urlInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.url">url</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `urlInput`<sup>Optional</sup> <a name="urlInput" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.urlInput"></a>

```java
public java.lang.String getUrlInput();
```

- *Type:* java.lang.String

---

##### `url`<sup>Required</sup> <a name="url" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.url"></a>

```java
public java.lang.String getUrl();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreamsOutputReference.property.internalValue"></a>

```java
public IResolvable|MoqRelayConfigUpstreamsUpstreams getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.moqRelay.MoqRelayConfigUpstreamsUpstreams">MoqRelayConfigUpstreamsUpstreams</a>

---



