# `loadBalancerMonitorGroup` Submodule <a name="`loadBalancerMonitorGroup` Submodule" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LoadBalancerMonitorGroup <a name="LoadBalancerMonitorGroup" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/load_balancer_monitor_group cloudflare_load_balancer_monitor_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.load_balancer_monitor_group.LoadBalancerMonitorGroup;

LoadBalancerMonitorGroup.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .description(java.lang.String)
    .members(IResolvable|java.util.List<LoadBalancerMonitorGroupMembers>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.description">description</a></code> | <code>java.lang.String</code> | A short description of the monitor group. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.members">members</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers">LoadBalancerMonitorGroupMembers</a>></code> | List of monitors in this group. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/load_balancer_monitor_group#account_id LoadBalancerMonitorGroup#account_id}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.description"></a>

- *Type:* java.lang.String

A short description of the monitor group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/load_balancer_monitor_group#description LoadBalancerMonitorGroup#description}

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.Initializer.parameter.members"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers">LoadBalancerMonitorGroupMembers</a>>

List of monitors in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/load_balancer_monitor_group#members LoadBalancerMonitorGroup#members}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.putMembers">putMembers</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putMembers` <a name="putMembers" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.putMembers"></a>

```java
public void putMembers(IResolvable|java.util.List<LoadBalancerMonitorGroupMembers> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.putMembers.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers">LoadBalancerMonitorGroupMembers</a>>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a LoadBalancerMonitorGroup resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.load_balancer_monitor_group.LoadBalancerMonitorGroup;

LoadBalancerMonitorGroup.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.load_balancer_monitor_group.LoadBalancerMonitorGroup;

LoadBalancerMonitorGroup.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.load_balancer_monitor_group.LoadBalancerMonitorGroup;

LoadBalancerMonitorGroup.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.load_balancer_monitor_group.LoadBalancerMonitorGroup;

LoadBalancerMonitorGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),LoadBalancerMonitorGroup.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a LoadBalancerMonitorGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the LoadBalancerMonitorGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing LoadBalancerMonitorGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/load_balancer_monitor_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the LoadBalancerMonitorGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.createdOn">createdOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.members">members</a></code> | <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList">LoadBalancerMonitorGroupMembersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.modifiedOn">modifiedOn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.descriptionInput">descriptionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.membersInput">membersInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers">LoadBalancerMonitorGroupMembers</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.description">description</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdOn`<sup>Required</sup> <a name="createdOn" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.createdOn"></a>

```java
public java.lang.String getCreatedOn();
```

- *Type:* java.lang.String

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.members"></a>

```java
public LoadBalancerMonitorGroupMembersList getMembers();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList">LoadBalancerMonitorGroupMembersList</a>

---

##### `modifiedOn`<sup>Required</sup> <a name="modifiedOn" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.modifiedOn"></a>

```java
public java.lang.String getModifiedOn();
```

- *Type:* java.lang.String

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `descriptionInput`<sup>Optional</sup> <a name="descriptionInput" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.descriptionInput"></a>

```java
public java.lang.String getDescriptionInput();
```

- *Type:* java.lang.String

---

##### `membersInput`<sup>Optional</sup> <a name="membersInput" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.membersInput"></a>

```java
public IResolvable|java.util.List<LoadBalancerMonitorGroupMembers> getMembersInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers">LoadBalancerMonitorGroupMembers</a>>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroup.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### LoadBalancerMonitorGroupConfig <a name="LoadBalancerMonitorGroupConfig" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.load_balancer_monitor_group.LoadBalancerMonitorGroupConfig;

LoadBalancerMonitorGroupConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .description(java.lang.String)
    .members(IResolvable|java.util.List<LoadBalancerMonitorGroupMembers>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.description">description</a></code> | <code>java.lang.String</code> | A short description of the monitor group. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.members">members</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers">LoadBalancerMonitorGroupMembers</a>></code> | List of monitors in this group. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/load_balancer_monitor_group#account_id LoadBalancerMonitorGroup#account_id}

---

##### `description`<sup>Required</sup> <a name="description" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.description"></a>

```java
public java.lang.String getDescription();
```

- *Type:* java.lang.String

A short description of the monitor group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/load_balancer_monitor_group#description LoadBalancerMonitorGroup#description}

---

##### `members`<sup>Required</sup> <a name="members" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupConfig.property.members"></a>

```java
public IResolvable|java.util.List<LoadBalancerMonitorGroupMembers> getMembers();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers">LoadBalancerMonitorGroupMembers</a>>

List of monitors in this group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/load_balancer_monitor_group#members LoadBalancerMonitorGroup#members}

---

### LoadBalancerMonitorGroupMembers <a name="LoadBalancerMonitorGroupMembers" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.load_balancer_monitor_group.LoadBalancerMonitorGroupMembers;

LoadBalancerMonitorGroupMembers.builder()
    .enabled(java.lang.Boolean|IResolvable)
    .monitorId(java.lang.String)
    .monitoringOnly(java.lang.Boolean|IResolvable)
    .mustBeHealthy(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether this monitor is enabled in the group. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers.property.monitorId">monitorId</a></code> | <code>java.lang.String</code> | The ID of the Monitor to use for checking the health of origins within this pool. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers.property.monitoringOnly">monitoringOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether this monitor is used for monitoring only (does not affect pool health). |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers.property.mustBeHealthy">mustBeHealthy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Whether this monitor must be healthy for the pool to be considered healthy. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether this monitor is enabled in the group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/load_balancer_monitor_group#enabled LoadBalancerMonitorGroup#enabled}

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers.property.monitorId"></a>

```java
public java.lang.String getMonitorId();
```

- *Type:* java.lang.String

The ID of the Monitor to use for checking the health of origins within this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/load_balancer_monitor_group#monitor_id LoadBalancerMonitorGroup#monitor_id}

---

##### `monitoringOnly`<sup>Required</sup> <a name="monitoringOnly" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers.property.monitoringOnly"></a>

```java
public java.lang.Boolean|IResolvable getMonitoringOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether this monitor is used for monitoring only (does not affect pool health).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/load_balancer_monitor_group#monitoring_only LoadBalancerMonitorGroup#monitoring_only}

---

##### `mustBeHealthy`<sup>Required</sup> <a name="mustBeHealthy" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers.property.mustBeHealthy"></a>

```java
public java.lang.Boolean|IResolvable getMustBeHealthy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Whether this monitor must be healthy for the pool to be considered healthy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/load_balancer_monitor_group#must_be_healthy LoadBalancerMonitorGroup#must_be_healthy}

---

## Classes <a name="Classes" id="Classes"></a>

### LoadBalancerMonitorGroupMembersList <a name="LoadBalancerMonitorGroupMembersList" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.load_balancer_monitor_group.LoadBalancerMonitorGroupMembersList;

new LoadBalancerMonitorGroupMembersList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.get"></a>

```java
public LoadBalancerMonitorGroupMembersOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers">LoadBalancerMonitorGroupMembers</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersList.property.internalValue"></a>

```java
public IResolvable|java.util.List<LoadBalancerMonitorGroupMembers> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers">LoadBalancerMonitorGroupMembers</a>>

---


### LoadBalancerMonitorGroupMembersOutputReference <a name="LoadBalancerMonitorGroupMembersOutputReference" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.load_balancer_monitor_group.LoadBalancerMonitorGroupMembersOutputReference;

new LoadBalancerMonitorGroupMembersOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.updatedAt">updatedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.monitorIdInput">monitorIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.monitoringOnlyInput">monitoringOnlyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.mustBeHealthyInput">mustBeHealthyInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.monitorId">monitorId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.monitoringOnly">monitoringOnly</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.mustBeHealthy">mustBeHealthy</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers">LoadBalancerMonitorGroupMembers</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `updatedAt`<sup>Required</sup> <a name="updatedAt" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.updatedAt"></a>

```java
public java.lang.String getUpdatedAt();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `monitorIdInput`<sup>Optional</sup> <a name="monitorIdInput" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.monitorIdInput"></a>

```java
public java.lang.String getMonitorIdInput();
```

- *Type:* java.lang.String

---

##### `monitoringOnlyInput`<sup>Optional</sup> <a name="monitoringOnlyInput" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.monitoringOnlyInput"></a>

```java
public java.lang.Boolean|IResolvable getMonitoringOnlyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mustBeHealthyInput`<sup>Optional</sup> <a name="mustBeHealthyInput" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.mustBeHealthyInput"></a>

```java
public java.lang.Boolean|IResolvable getMustBeHealthyInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `monitorId`<sup>Required</sup> <a name="monitorId" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.monitorId"></a>

```java
public java.lang.String getMonitorId();
```

- *Type:* java.lang.String

---

##### `monitoringOnly`<sup>Required</sup> <a name="monitoringOnly" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.monitoringOnly"></a>

```java
public java.lang.Boolean|IResolvable getMonitoringOnly();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `mustBeHealthy`<sup>Required</sup> <a name="mustBeHealthy" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.mustBeHealthy"></a>

```java
public java.lang.Boolean|IResolvable getMustBeHealthy();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembersOutputReference.property.internalValue"></a>

```java
public IResolvable|LoadBalancerMonitorGroupMembers getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.loadBalancerMonitorGroup.LoadBalancerMonitorGroupMembers">LoadBalancerMonitorGroupMembers</a>

---



