# `aiSecurityCustomTopics` Submodule <a name="`aiSecurityCustomTopics` Submodule" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### AiSecurityCustomTopics <a name="AiSecurityCustomTopics" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/ai_security_custom_topics cloudflare_ai_security_custom_topics}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_security_custom_topics.AiSecurityCustomTopics;

AiSecurityCustomTopics.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .zoneId(java.lang.String)
//  .topics(IResolvable|java.util.List<AiSecurityCustomTopicsTopics>)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.Initializer.parameter.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Defines the zone. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.Initializer.parameter.topics">topics</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics">AiSecurityCustomTopicsTopics</a>></code> | Custom topic categories for AI Security for Apps content detection. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.Initializer.parameter.zoneId"></a>

- *Type:* java.lang.String

Defines the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/ai_security_custom_topics#zone_id AiSecurityCustomTopics#zone_id}

---

##### `topics`<sup>Optional</sup> <a name="topics" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.Initializer.parameter.topics"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics">AiSecurityCustomTopicsTopics</a>>

Custom topic categories for AI Security for Apps content detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/ai_security_custom_topics#topics AiSecurityCustomTopics#topics}

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.putTopics">putTopics</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.resetTopics">resetTopics</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putTopics` <a name="putTopics" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.putTopics"></a>

```java
public void putTopics(IResolvable|java.util.List<AiSecurityCustomTopicsTopics> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.putTopics.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics">AiSecurityCustomTopicsTopics</a>>

---

##### `resetTopics` <a name="resetTopics" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.resetTopics"></a>

```java
public void resetTopics()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a AiSecurityCustomTopics resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.ai_security_custom_topics.AiSecurityCustomTopics;

AiSecurityCustomTopics.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.ai_security_custom_topics.AiSecurityCustomTopics;

AiSecurityCustomTopics.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.ai_security_custom_topics.AiSecurityCustomTopics;

AiSecurityCustomTopics.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.ai_security_custom_topics.AiSecurityCustomTopics;

AiSecurityCustomTopics.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),AiSecurityCustomTopics.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a AiSecurityCustomTopics resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the AiSecurityCustomTopics to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing AiSecurityCustomTopics that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/ai_security_custom_topics#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the AiSecurityCustomTopics to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.topics">topics</a></code> | <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList">AiSecurityCustomTopicsTopicsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.topicsInput">topicsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics">AiSecurityCustomTopicsTopics</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.zoneIdInput">zoneIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `topics`<sup>Required</sup> <a name="topics" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.topics"></a>

```java
public AiSecurityCustomTopicsTopicsList getTopics();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList">AiSecurityCustomTopicsTopicsList</a>

---

##### `topicsInput`<sup>Optional</sup> <a name="topicsInput" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.topicsInput"></a>

```java
public IResolvable|java.util.List<AiSecurityCustomTopicsTopics> getTopicsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics">AiSecurityCustomTopicsTopics</a>>

---

##### `zoneIdInput`<sup>Optional</sup> <a name="zoneIdInput" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.zoneIdInput"></a>

```java
public java.lang.String getZoneIdInput();
```

- *Type:* java.lang.String

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopics.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### AiSecurityCustomTopicsConfig <a name="AiSecurityCustomTopicsConfig" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_security_custom_topics.AiSecurityCustomTopicsConfig;

AiSecurityCustomTopicsConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .zoneId(java.lang.String)
//  .topics(IResolvable|java.util.List<AiSecurityCustomTopicsTopics>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.zoneId">zoneId</a></code> | <code>java.lang.String</code> | Defines the zone. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.topics">topics</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics">AiSecurityCustomTopicsTopics</a>></code> | Custom topic categories for AI Security for Apps content detection. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `zoneId`<sup>Required</sup> <a name="zoneId" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.zoneId"></a>

```java
public java.lang.String getZoneId();
```

- *Type:* java.lang.String

Defines the zone.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/ai_security_custom_topics#zone_id AiSecurityCustomTopics#zone_id}

---

##### `topics`<sup>Optional</sup> <a name="topics" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsConfig.property.topics"></a>

```java
public IResolvable|java.util.List<AiSecurityCustomTopicsTopics> getTopics();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics">AiSecurityCustomTopicsTopics</a>>

Custom topic categories for AI Security for Apps content detection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/ai_security_custom_topics#topics AiSecurityCustomTopics#topics}

---

### AiSecurityCustomTopicsTopics <a name="AiSecurityCustomTopicsTopics" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_security_custom_topics.AiSecurityCustomTopicsTopics;

AiSecurityCustomTopicsTopics.builder()
    .label(java.lang.String)
    .topic(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics.property.label">label</a></code> | <code>java.lang.String</code> | Unique label identifier. Must contain only lowercase letters (a–z), digits (0–9), and hyphens. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics.property.topic">topic</a></code> | <code>java.lang.String</code> | Description of the topic category. |

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

Unique label identifier. Must contain only lowercase letters (a–z), digits (0–9), and hyphens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/ai_security_custom_topics#label AiSecurityCustomTopics#label}

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

Description of the topic category.

Must contain 2–50 UTF-8 bytes. Text in any language is supported, including spaces, numbers, punctuation, and symbols. Tabs, line breaks, invalid text, and invisible formatting characters are not allowed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/ai_security_custom_topics#topic AiSecurityCustomTopics#topic}

---

## Classes <a name="Classes" id="Classes"></a>

### AiSecurityCustomTopicsTopicsList <a name="AiSecurityCustomTopicsTopicsList" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_security_custom_topics.AiSecurityCustomTopicsTopicsList;

new AiSecurityCustomTopicsTopicsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.get"></a>

```java
public AiSecurityCustomTopicsTopicsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics">AiSecurityCustomTopicsTopics</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<AiSecurityCustomTopicsTopics> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics">AiSecurityCustomTopicsTopics</a>>

---


### AiSecurityCustomTopicsTopicsOutputReference <a name="AiSecurityCustomTopicsTopicsOutputReference" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.ai_security_custom_topics.AiSecurityCustomTopicsTopicsOutputReference;

new AiSecurityCustomTopicsTopicsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.property.labelInput">labelInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.property.topicInput">topicInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.property.label">label</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.property.topic">topic</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics">AiSecurityCustomTopicsTopics</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `labelInput`<sup>Optional</sup> <a name="labelInput" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.property.labelInput"></a>

```java
public java.lang.String getLabelInput();
```

- *Type:* java.lang.String

---

##### `topicInput`<sup>Optional</sup> <a name="topicInput" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.property.topicInput"></a>

```java
public java.lang.String getTopicInput();
```

- *Type:* java.lang.String

---

##### `label`<sup>Required</sup> <a name="label" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.property.label"></a>

```java
public java.lang.String getLabel();
```

- *Type:* java.lang.String

---

##### `topic`<sup>Required</sup> <a name="topic" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.property.topic"></a>

```java
public java.lang.String getTopic();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopicsOutputReference.property.internalValue"></a>

```java
public IResolvable|AiSecurityCustomTopicsTopics getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.aiSecurityCustomTopics.AiSecurityCustomTopicsTopics">AiSecurityCustomTopicsTopics</a>

---



