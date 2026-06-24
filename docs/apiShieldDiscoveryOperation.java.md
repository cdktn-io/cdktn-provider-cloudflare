# `apiShieldDiscoveryOperation` Submodule <a name="`apiShieldDiscoveryOperation` Submodule" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ApiShieldDiscoveryOperation <a name="ApiShieldDiscoveryOperation" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/api_shield_discovery_operation cloudflare_api_shield_discovery_operation}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.api_shield_discovery_operation.ApiShieldDiscoveryOperation;

ApiShieldDiscoveryOperation.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .operationId(java.lang.String)
//  .state(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.operationId">operationId</a></code> | <code>java.lang.String</code> | UUID. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.state">state</a></code> | <code>java.lang.String</code> | Mark state of operation in API Discovery   * `review` - Mark operation as for review   * `ignored` - Mark operation as ignored Available values: "review", "ignored". |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `operationId`<sup>Required</sup> <a name="operationId" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.operationId"></a>

- *Type:* java.lang.String

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/api_shield_discovery_operation#operation_id ApiShieldDiscoveryOperation#operation_id}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.state"></a>

- *Type:* java.lang.String

Mark state of operation in API Discovery   * `review` - Mark operation as for review   * `ignored` - Mark operation as ignored Available values: "review", "ignored".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/api_shield_discovery_operation#state ApiShieldDiscoveryOperation#state}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/api_shield_discovery_operation#zone_id ApiShieldDiscoveryOperation#zone_id}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.resetState">resetState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.resetZoneId">resetZoneId</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `resetState` <a name="resetState" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.resetState"></a>

```java
public void resetState()
```

##### `resetZoneId` <a name="resetZoneId" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.resetZoneId"></a>

```java
public void resetZoneId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a ApiShieldDiscoveryOperation resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.api_shield_discovery_operation.ApiShieldDiscoveryOperation;

ApiShieldDiscoveryOperation.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.api_shield_discovery_operation.ApiShieldDiscoveryOperation;

ApiShieldDiscoveryOperation.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.api_shield_discovery_operation.ApiShieldDiscoveryOperation;

ApiShieldDiscoveryOperation.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.api_shield_discovery_operation.ApiShieldDiscoveryOperation;

ApiShieldDiscoveryOperation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),ApiShieldDiscoveryOperation.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a ApiShieldDiscoveryOperation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the ApiShieldDiscoveryOperation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing ApiShieldDiscoveryOperation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/api_shield_discovery_operation#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the ApiShieldDiscoveryOperation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.operationIdInput">operationIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.stateInput">stateInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.operationId">operationId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.state">state</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `operationIdInput`<sup>Optional</sup> <a name="operationIdInput" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.operationIdInput"></a>

```java
public java.lang.String getOperationIdInput();
```

- *Type:* java.lang.String

---

##### `stateInput`<sup>Optional</sup> <a name="stateInput" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.stateInput"></a>

```java
public java.lang.String getStateInput();
```

- *Type:* java.lang.String

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `operationId`<sup>Required</sup> <a name="operationId" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.operationId"></a>

```java
public java.lang.String getOperationId();
```

- *Type:* java.lang.String

---

##### `state`<sup>Required</sup> <a name="state" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperation.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### ApiShieldDiscoveryOperationConfig <a name="ApiShieldDiscoveryOperationConfig" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.api_shield_discovery_operation.ApiShieldDiscoveryOperationConfig;

ApiShieldDiscoveryOperationConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .operationId(java.lang.String)
//  .state(java.lang.String)
//  .zoneId(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.operationId">operationId</a></code> | <code>java.lang.String</code> | UUID. |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.state">state</a></code> | <code>java.lang.String</code> | Mark state of operation in API Discovery   * `review` - Mark operation as for review   * `ignored` - Mark operation as ignored Available values: "review", "ignored". |
| <code><a href="#@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Identifier. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `operationId`<sup>Required</sup> <a name="operationId" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.operationId"></a>

```java
public java.lang.String getOperationId();
```

- *Type:* java.lang.String

UUID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/api_shield_discovery_operation#operation_id ApiShieldDiscoveryOperation#operation_id}

---

##### `state`<sup>Optional</sup> <a name="state" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.state"></a>

```java
public java.lang.String getState();
```

- *Type:* java.lang.String

Mark state of operation in API Discovery   * `review` - Mark operation as for review   * `ignored` - Mark operation as ignored Available values: "review", "ignored".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/api_shield_discovery_operation#state ApiShieldDiscoveryOperation#state}

---

##### `zoneId`<sup>Optional</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.apiShieldDiscoveryOperation.ApiShieldDiscoveryOperationConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/api_shield_discovery_operation#zone_id ApiShieldDiscoveryOperation#zone_id}

---



