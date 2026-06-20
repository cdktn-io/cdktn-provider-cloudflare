# `pipelineStream` Submodule <a name="`pipelineStream` Submodule" id="@cdktn/provider-cloudflare.pipelineStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PipelineStream <a name="PipelineStream" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream cloudflare_pipeline_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_stream.PipelineStream;

PipelineStream.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .name(java.lang.String)
//  .format(PipelineStreamFormat)
//  .http(PipelineStreamHttp)
//  .schema(PipelineStreamSchema)
//  .workerBinding(PipelineStreamWorkerBinding)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Specifies the public ID of the account. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the Stream. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat">PipelineStreamFormat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#format PipelineStream#format}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.http">http</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp">PipelineStreamHttp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#http PipelineStream#http}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.schema">schema</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema">PipelineStreamSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#schema PipelineStream#schema}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.workerBinding">workerBinding</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding">PipelineStreamWorkerBinding</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#worker_binding PipelineStream#worker_binding}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Specifies the public ID of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#account_id PipelineStream#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Specifies the name of the Stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#name PipelineStream#name}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.format"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat">PipelineStreamFormat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#format PipelineStream#format}.

---

##### `http`<sup>Optional</sup> <a name="http" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.http"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp">PipelineStreamHttp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#http PipelineStream#http}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.schema"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema">PipelineStreamSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#schema PipelineStream#schema}.

---

##### `workerBinding`<sup>Optional</sup> <a name="workerBinding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.workerBinding"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding">PipelineStreamWorkerBinding</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#worker_binding PipelineStream#worker_binding}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putFormat">putFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putHttp">putHttp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putSchema">putSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putWorkerBinding">putWorkerBinding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetHttp">resetHttp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetSchema">resetSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetWorkerBinding">resetWorkerBinding</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putFormat` <a name="putFormat" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putFormat"></a>

```java
public void putFormat(PipelineStreamFormat value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat">PipelineStreamFormat</a>

---

##### `putHttp` <a name="putHttp" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putHttp"></a>

```java
public void putHttp(PipelineStreamHttp value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putHttp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp">PipelineStreamHttp</a>

---

##### `putSchema` <a name="putSchema" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putSchema"></a>

```java
public void putSchema(PipelineStreamSchema value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema">PipelineStreamSchema</a>

---

##### `putWorkerBinding` <a name="putWorkerBinding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putWorkerBinding"></a>

```java
public void putWorkerBinding(PipelineStreamWorkerBinding value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putWorkerBinding.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding">PipelineStreamWorkerBinding</a>

---

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetFormat"></a>

```java
public void resetFormat()
```

##### `resetHttp` <a name="resetHttp" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetHttp"></a>

```java
public void resetHttp()
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetSchema"></a>

```java
public void resetSchema()
```

##### `resetWorkerBinding` <a name="resetWorkerBinding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetWorkerBinding"></a>

```java
public void resetWorkerBinding()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PipelineStream resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_stream.PipelineStream;

PipelineStream.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_stream.PipelineStream;

PipelineStream.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_stream.PipelineStream;

PipelineStream.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_stream.PipelineStream;

PipelineStream.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PipelineStream.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PipelineStream resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PipelineStream to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PipelineStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PipelineStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.endpoint">endpoint</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference">PipelineStreamFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.http">http</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference">PipelineStreamHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference">PipelineStreamSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.version">version</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.workerBinding">workerBinding</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference">PipelineStreamWorkerBindingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.formatInput">formatInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat">PipelineStreamFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.httpInput">httpInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp">PipelineStreamHttp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.schemaInput">schemaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema">PipelineStreamSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.workerBindingInput">workerBindingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding">PipelineStreamWorkerBinding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `endpoint`<sup>Required</sup> <a name="endpoint" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.endpoint"></a>

```java
public java.lang.String getEndpoint();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.format"></a>

```java
public PipelineStreamFormatOutputReference getFormat();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference">PipelineStreamFormatOutputReference</a>

---

##### `http`<sup>Required</sup> <a name="http" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.http"></a>

```java
public PipelineStreamHttpOutputReference getHttp();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference">PipelineStreamHttpOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.schema"></a>

```java
public PipelineStreamSchemaOutputReference getSchema();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference">PipelineStreamSchemaOutputReference</a>

---

##### `version`<sup>Required</sup> <a name="version" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.version"></a>

```java
public java.lang.Number getVersion();
```

- *Type:* java.lang.Number

---

##### `workerBinding`<sup>Required</sup> <a name="workerBinding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.workerBinding"></a>

```java
public PipelineStreamWorkerBindingOutputReference getWorkerBinding();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference">PipelineStreamWorkerBindingOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.formatInput"></a>

```java
public IResolvable|PipelineStreamFormat getFormatInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat">PipelineStreamFormat</a>

---

##### `httpInput`<sup>Optional</sup> <a name="httpInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.httpInput"></a>

```java
public IResolvable|PipelineStreamHttp getHttpInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp">PipelineStreamHttp</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.schemaInput"></a>

```java
public IResolvable|PipelineStreamSchema getSchemaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema">PipelineStreamSchema</a>

---

##### `workerBindingInput`<sup>Optional</sup> <a name="workerBindingInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.workerBindingInput"></a>

```java
public IResolvable|PipelineStreamWorkerBinding getWorkerBindingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding">PipelineStreamWorkerBinding</a>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PipelineStreamConfig <a name="PipelineStreamConfig" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_stream.PipelineStreamConfig;

PipelineStreamConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .name(java.lang.String)
//  .format(PipelineStreamFormat)
//  .http(PipelineStreamHttp)
//  .schema(PipelineStreamSchema)
//  .workerBinding(PipelineStreamWorkerBinding)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Specifies the public ID of the account. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.name">name</a></code> | <code>java.lang.String</code> | Specifies the name of the Stream. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat">PipelineStreamFormat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#format PipelineStream#format}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.http">http</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp">PipelineStreamHttp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#http PipelineStream#http}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema">PipelineStreamSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#schema PipelineStream#schema}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.workerBinding">workerBinding</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding">PipelineStreamWorkerBinding</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#worker_binding PipelineStream#worker_binding}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Specifies the public ID of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#account_id PipelineStream#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Specifies the name of the Stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#name PipelineStream#name}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.format"></a>

```java
public PipelineStreamFormat getFormat();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat">PipelineStreamFormat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#format PipelineStream#format}.

---

##### `http`<sup>Optional</sup> <a name="http" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.http"></a>

```java
public PipelineStreamHttp getHttp();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp">PipelineStreamHttp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#http PipelineStream#http}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.schema"></a>

```java
public PipelineStreamSchema getSchema();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema">PipelineStreamSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#schema PipelineStream#schema}.

---

##### `workerBinding`<sup>Optional</sup> <a name="workerBinding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.workerBinding"></a>

```java
public PipelineStreamWorkerBinding getWorkerBinding();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding">PipelineStreamWorkerBinding</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#worker_binding PipelineStream#worker_binding}.

---

### PipelineStreamFormat <a name="PipelineStreamFormat" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_stream.PipelineStreamFormat;

PipelineStreamFormat.builder()
    .type(java.lang.String)
//  .compression(java.lang.String)
//  .decimalEncoding(java.lang.String)
//  .rowGroupBytes(java.lang.Number)
//  .timestampFormat(java.lang.String)
//  .unstructured(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.type">type</a></code> | <code>java.lang.String</code> | Available values: "json", "parquet". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.compression">compression</a></code> | <code>java.lang.String</code> | Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.decimalEncoding">decimalEncoding</a></code> | <code>java.lang.String</code> | Available values: "number", "string", "bytes". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.rowGroupBytes">rowGroupBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#row_group_bytes PipelineStream#row_group_bytes}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.timestampFormat">timestampFormat</a></code> | <code>java.lang.String</code> | Available values: "rfc3339", "unix_millis". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.unstructured">unstructured</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#unstructured PipelineStream#unstructured}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Available values: "json", "parquet".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#type PipelineStream#type}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.compression"></a>

```java
public java.lang.String getCompression();
```

- *Type:* java.lang.String

Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#compression PipelineStream#compression}

---

##### `decimalEncoding`<sup>Optional</sup> <a name="decimalEncoding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.decimalEncoding"></a>

```java
public java.lang.String getDecimalEncoding();
```

- *Type:* java.lang.String

Available values: "number", "string", "bytes".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#decimal_encoding PipelineStream#decimal_encoding}

---

##### `rowGroupBytes`<sup>Optional</sup> <a name="rowGroupBytes" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.rowGroupBytes"></a>

```java
public java.lang.Number getRowGroupBytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#row_group_bytes PipelineStream#row_group_bytes}.

---

##### `timestampFormat`<sup>Optional</sup> <a name="timestampFormat" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.timestampFormat"></a>

```java
public java.lang.String getTimestampFormat();
```

- *Type:* java.lang.String

Available values: "rfc3339", "unix_millis".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#timestamp_format PipelineStream#timestamp_format}

---

##### `unstructured`<sup>Optional</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.unstructured"></a>

```java
public java.lang.Boolean|IResolvable getUnstructured();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#unstructured PipelineStream#unstructured}.

---

### PipelineStreamHttp <a name="PipelineStreamHttp" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_stream.PipelineStreamHttp;

PipelineStreamHttp.builder()
    .authentication(java.lang.Boolean|IResolvable)
    .enabled(java.lang.Boolean|IResolvable)
//  .cors(PipelineStreamHttpCors)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp.property.authentication">authentication</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates that authentication is required for the HTTP endpoint. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates that the HTTP endpoint is enabled. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp.property.cors">cors</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors">PipelineStreamHttpCors</a></code> | Specifies the CORS options for the HTTP endpoint. |

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp.property.authentication"></a>

```java
public java.lang.Boolean|IResolvable getAuthentication();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates that authentication is required for the HTTP endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#authentication PipelineStream#authentication}

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates that the HTTP endpoint is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#enabled PipelineStream#enabled}

---

##### `cors`<sup>Optional</sup> <a name="cors" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp.property.cors"></a>

```java
public PipelineStreamHttpCors getCors();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors">PipelineStreamHttpCors</a>

Specifies the CORS options for the HTTP endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#cors PipelineStream#cors}

---

### PipelineStreamHttpCors <a name="PipelineStreamHttpCors" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_stream.PipelineStreamHttpCors;

PipelineStreamHttpCors.builder()
//  .origins(java.util.List<java.lang.String>)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors.property.origins">origins</a></code> | <code>java.util.List<java.lang.String></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#origins PipelineStream#origins}. |

---

##### `origins`<sup>Optional</sup> <a name="origins" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors.property.origins"></a>

```java
public java.util.List<java.lang.String> getOrigins();
```

- *Type:* java.util.List<java.lang.String>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#origins PipelineStream#origins}.

---

### PipelineStreamSchema <a name="PipelineStreamSchema" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_stream.PipelineStreamSchema;

PipelineStreamSchema.builder()
//  .fields(IResolvable|java.util.List<PipelineStreamSchemaFields>)
//  .format(PipelineStreamSchemaFormat)
//  .inferred(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema.property.fields">fields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields">PipelineStreamSchemaFields</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#fields PipelineStream#fields}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema.property.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat">PipelineStreamSchemaFormat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#format PipelineStream#format}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema.property.inferred">inferred</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#inferred PipelineStream#inferred}. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema.property.fields"></a>

```java
public IResolvable|java.util.List<PipelineStreamSchemaFields> getFields();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields">PipelineStreamSchemaFields</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#fields PipelineStream#fields}.

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema.property.format"></a>

```java
public PipelineStreamSchemaFormat getFormat();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat">PipelineStreamSchemaFormat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#format PipelineStream#format}.

---

##### `inferred`<sup>Optional</sup> <a name="inferred" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema.property.inferred"></a>

```java
public java.lang.Boolean|IResolvable getInferred();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#inferred PipelineStream#inferred}.

---

### PipelineStreamSchemaFields <a name="PipelineStreamSchemaFields" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_stream.PipelineStreamSchemaFields;

PipelineStreamSchemaFields.builder()
    .type(java.lang.String)
//  .metadataKey(java.lang.String)
//  .name(java.lang.String)
//  .required(java.lang.Boolean|IResolvable)
//  .sqlName(java.lang.String)
//  .unit(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.type">type</a></code> | <code>java.lang.String</code> | Available values: "int32", "int64", "float32", "float64", "bool", "string", "binary", "timestamp", "json". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.metadataKey">metadataKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#metadata_key PipelineStream#metadata_key}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#name PipelineStream#name}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.required">required</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#required PipelineStream#required}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.sqlName">sqlName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#sql_name PipelineStream#sql_name}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.unit">unit</a></code> | <code>java.lang.String</code> | Available values: "second", "millisecond", "microsecond", "nanosecond". |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Available values: "int32", "int64", "float32", "float64", "bool", "string", "binary", "timestamp", "json".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#type PipelineStream#type}

---

##### `metadataKey`<sup>Optional</sup> <a name="metadataKey" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.metadataKey"></a>

```java
public java.lang.String getMetadataKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#metadata_key PipelineStream#metadata_key}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#name PipelineStream#name}.

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.required"></a>

```java
public java.lang.Boolean|IResolvable getRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#required PipelineStream#required}.

---

##### `sqlName`<sup>Optional</sup> <a name="sqlName" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.sqlName"></a>

```java
public java.lang.String getSqlName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#sql_name PipelineStream#sql_name}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Available values: "second", "millisecond", "microsecond", "nanosecond".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#unit PipelineStream#unit}

---

### PipelineStreamSchemaFormat <a name="PipelineStreamSchemaFormat" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_stream.PipelineStreamSchemaFormat;

PipelineStreamSchemaFormat.builder()
    .type(java.lang.String)
//  .compression(java.lang.String)
//  .decimalEncoding(java.lang.String)
//  .rowGroupBytes(java.lang.Number)
//  .timestampFormat(java.lang.String)
//  .unstructured(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.type">type</a></code> | <code>java.lang.String</code> | Available values: "json", "parquet". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.compression">compression</a></code> | <code>java.lang.String</code> | Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.decimalEncoding">decimalEncoding</a></code> | <code>java.lang.String</code> | Available values: "number", "string", "bytes". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.rowGroupBytes">rowGroupBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#row_group_bytes PipelineStream#row_group_bytes}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.timestampFormat">timestampFormat</a></code> | <code>java.lang.String</code> | Available values: "rfc3339", "unix_millis". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.unstructured">unstructured</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#unstructured PipelineStream#unstructured}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Available values: "json", "parquet".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#type PipelineStream#type}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.compression"></a>

```java
public java.lang.String getCompression();
```

- *Type:* java.lang.String

Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#compression PipelineStream#compression}

---

##### `decimalEncoding`<sup>Optional</sup> <a name="decimalEncoding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.decimalEncoding"></a>

```java
public java.lang.String getDecimalEncoding();
```

- *Type:* java.lang.String

Available values: "number", "string", "bytes".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#decimal_encoding PipelineStream#decimal_encoding}

---

##### `rowGroupBytes`<sup>Optional</sup> <a name="rowGroupBytes" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.rowGroupBytes"></a>

```java
public java.lang.Number getRowGroupBytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#row_group_bytes PipelineStream#row_group_bytes}.

---

##### `timestampFormat`<sup>Optional</sup> <a name="timestampFormat" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.timestampFormat"></a>

```java
public java.lang.String getTimestampFormat();
```

- *Type:* java.lang.String

Available values: "rfc3339", "unix_millis".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#timestamp_format PipelineStream#timestamp_format}

---

##### `unstructured`<sup>Optional</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.unstructured"></a>

```java
public java.lang.Boolean|IResolvable getUnstructured();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#unstructured PipelineStream#unstructured}.

---

### PipelineStreamWorkerBinding <a name="PipelineStreamWorkerBinding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_stream.PipelineStreamWorkerBinding;

PipelineStreamWorkerBinding.builder()
    .enabled(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Indicates that the worker binding is enabled. |

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Indicates that the worker binding is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/pipeline_stream#enabled PipelineStream#enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### PipelineStreamFormatOutputReference <a name="PipelineStreamFormatOutputReference" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_stream.PipelineStreamFormatOutputReference;

new PipelineStreamFormatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resetCompression">resetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resetDecimalEncoding">resetDecimalEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resetRowGroupBytes">resetRowGroupBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resetTimestampFormat">resetTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resetUnstructured">resetUnstructured</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompression` <a name="resetCompression" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resetCompression"></a>

```java
public void resetCompression()
```

##### `resetDecimalEncoding` <a name="resetDecimalEncoding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resetDecimalEncoding"></a>

```java
public void resetDecimalEncoding()
```

##### `resetRowGroupBytes` <a name="resetRowGroupBytes" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resetRowGroupBytes"></a>

```java
public void resetRowGroupBytes()
```

##### `resetTimestampFormat` <a name="resetTimestampFormat" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resetTimestampFormat"></a>

```java
public void resetTimestampFormat()
```

##### `resetUnstructured` <a name="resetUnstructured" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resetUnstructured"></a>

```java
public void resetUnstructured()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.compressionInput">compressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.decimalEncodingInput">decimalEncodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.rowGroupBytesInput">rowGroupBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.timestampFormatInput">timestampFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.unstructuredInput">unstructuredInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.compression">compression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.decimalEncoding">decimalEncoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.rowGroupBytes">rowGroupBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.unstructured">unstructured</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat">PipelineStreamFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.compressionInput"></a>

```java
public java.lang.String getCompressionInput();
```

- *Type:* java.lang.String

---

##### `decimalEncodingInput`<sup>Optional</sup> <a name="decimalEncodingInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.decimalEncodingInput"></a>

```java
public java.lang.String getDecimalEncodingInput();
```

- *Type:* java.lang.String

---

##### `rowGroupBytesInput`<sup>Optional</sup> <a name="rowGroupBytesInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.rowGroupBytesInput"></a>

```java
public java.lang.Number getRowGroupBytesInput();
```

- *Type:* java.lang.Number

---

##### `timestampFormatInput`<sup>Optional</sup> <a name="timestampFormatInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.timestampFormatInput"></a>

```java
public java.lang.String getTimestampFormatInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `unstructuredInput`<sup>Optional</sup> <a name="unstructuredInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.unstructuredInput"></a>

```java
public java.lang.Boolean|IResolvable getUnstructuredInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.compression"></a>

```java
public java.lang.String getCompression();
```

- *Type:* java.lang.String

---

##### `decimalEncoding`<sup>Required</sup> <a name="decimalEncoding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.decimalEncoding"></a>

```java
public java.lang.String getDecimalEncoding();
```

- *Type:* java.lang.String

---

##### `rowGroupBytes`<sup>Required</sup> <a name="rowGroupBytes" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.rowGroupBytes"></a>

```java
public java.lang.Number getRowGroupBytes();
```

- *Type:* java.lang.Number

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.timestampFormat"></a>

```java
public java.lang.String getTimestampFormat();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `unstructured`<sup>Required</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.unstructured"></a>

```java
public java.lang.Boolean|IResolvable getUnstructured();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.internalValue"></a>

```java
public IResolvable|PipelineStreamFormat getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat">PipelineStreamFormat</a>

---


### PipelineStreamHttpCorsOutputReference <a name="PipelineStreamHttpCorsOutputReference" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_stream.PipelineStreamHttpCorsOutputReference;

new PipelineStreamHttpCorsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.resetOrigins">resetOrigins</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetOrigins` <a name="resetOrigins" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.resetOrigins"></a>

```java
public void resetOrigins()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.property.originsInput">originsInput</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.property.origins">origins</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors">PipelineStreamHttpCors</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `originsInput`<sup>Optional</sup> <a name="originsInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.property.originsInput"></a>

```java
public java.util.List<java.lang.String> getOriginsInput();
```

- *Type:* java.util.List<java.lang.String>

---

##### `origins`<sup>Required</sup> <a name="origins" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.property.origins"></a>

```java
public java.util.List<java.lang.String> getOrigins();
```

- *Type:* java.util.List<java.lang.String>

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.property.internalValue"></a>

```java
public IResolvable|PipelineStreamHttpCors getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors">PipelineStreamHttpCors</a>

---


### PipelineStreamHttpOutputReference <a name="PipelineStreamHttpOutputReference" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_stream.PipelineStreamHttpOutputReference;

new PipelineStreamHttpOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.putCors">putCors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.resetCors">resetCors</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCors` <a name="putCors" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.putCors"></a>

```java
public void putCors(PipelineStreamHttpCors value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.putCors.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors">PipelineStreamHttpCors</a>

---

##### `resetCors` <a name="resetCors" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.resetCors"></a>

```java
public void resetCors()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.cors">cors</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference">PipelineStreamHttpCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.authenticationInput">authenticationInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.corsInput">corsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors">PipelineStreamHttpCors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.authentication">authentication</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp">PipelineStreamHttp</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `cors`<sup>Required</sup> <a name="cors" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.cors"></a>

```java
public PipelineStreamHttpCorsOutputReference getCors();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference">PipelineStreamHttpCorsOutputReference</a>

---

##### `authenticationInput`<sup>Optional</sup> <a name="authenticationInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.authenticationInput"></a>

```java
public java.lang.Boolean|IResolvable getAuthenticationInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `corsInput`<sup>Optional</sup> <a name="corsInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.corsInput"></a>

```java
public IResolvable|PipelineStreamHttpCors getCorsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors">PipelineStreamHttpCors</a>

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `authentication`<sup>Required</sup> <a name="authentication" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.authentication"></a>

```java
public java.lang.Boolean|IResolvable getAuthentication();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.internalValue"></a>

```java
public IResolvable|PipelineStreamHttp getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp">PipelineStreamHttp</a>

---


### PipelineStreamSchemaFieldsList <a name="PipelineStreamSchemaFieldsList" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_stream.PipelineStreamSchemaFieldsList;

new PipelineStreamSchemaFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.get"></a>

```java
public PipelineStreamSchemaFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields">PipelineStreamSchemaFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PipelineStreamSchemaFields> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields">PipelineStreamSchemaFields</a>>

---


### PipelineStreamSchemaFieldsOutputReference <a name="PipelineStreamSchemaFieldsOutputReference" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_stream.PipelineStreamSchemaFieldsOutputReference;

new PipelineStreamSchemaFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resetMetadataKey">resetMetadataKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resetSqlName">resetSqlName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetadataKey` <a name="resetMetadataKey" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resetMetadataKey"></a>

```java
public void resetMetadataKey()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetRequired` <a name="resetRequired" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resetRequired"></a>

```java
public void resetRequired()
```

##### `resetSqlName` <a name="resetSqlName" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resetSqlName"></a>

```java
public void resetSqlName()
```

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resetUnit"></a>

```java
public void resetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.metadataKeyInput">metadataKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.requiredInput">requiredInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.sqlNameInput">sqlNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.metadataKey">metadataKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.required">required</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.sqlName">sqlName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields">PipelineStreamSchemaFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metadataKeyInput`<sup>Optional</sup> <a name="metadataKeyInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.metadataKeyInput"></a>

```java
public java.lang.String getMetadataKeyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.requiredInput"></a>

```java
public java.lang.Boolean|IResolvable getRequiredInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sqlNameInput`<sup>Optional</sup> <a name="sqlNameInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.sqlNameInput"></a>

```java
public java.lang.String getSqlNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `metadataKey`<sup>Required</sup> <a name="metadataKey" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.metadataKey"></a>

```java
public java.lang.String getMetadataKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.required"></a>

```java
public java.lang.Boolean|IResolvable getRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sqlName`<sup>Required</sup> <a name="sqlName" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.sqlName"></a>

```java
public java.lang.String getSqlName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.internalValue"></a>

```java
public IResolvable|PipelineStreamSchemaFields getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields">PipelineStreamSchemaFields</a>

---


### PipelineStreamSchemaFormatOutputReference <a name="PipelineStreamSchemaFormatOutputReference" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_stream.PipelineStreamSchemaFormatOutputReference;

new PipelineStreamSchemaFormatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resetCompression">resetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resetDecimalEncoding">resetDecimalEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resetRowGroupBytes">resetRowGroupBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resetTimestampFormat">resetTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resetUnstructured">resetUnstructured</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompression` <a name="resetCompression" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resetCompression"></a>

```java
public void resetCompression()
```

##### `resetDecimalEncoding` <a name="resetDecimalEncoding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resetDecimalEncoding"></a>

```java
public void resetDecimalEncoding()
```

##### `resetRowGroupBytes` <a name="resetRowGroupBytes" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resetRowGroupBytes"></a>

```java
public void resetRowGroupBytes()
```

##### `resetTimestampFormat` <a name="resetTimestampFormat" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resetTimestampFormat"></a>

```java
public void resetTimestampFormat()
```

##### `resetUnstructured` <a name="resetUnstructured" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resetUnstructured"></a>

```java
public void resetUnstructured()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.compressionInput">compressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.decimalEncodingInput">decimalEncodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.rowGroupBytesInput">rowGroupBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.timestampFormatInput">timestampFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.unstructuredInput">unstructuredInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.compression">compression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.decimalEncoding">decimalEncoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.rowGroupBytes">rowGroupBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.unstructured">unstructured</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat">PipelineStreamSchemaFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.compressionInput"></a>

```java
public java.lang.String getCompressionInput();
```

- *Type:* java.lang.String

---

##### `decimalEncodingInput`<sup>Optional</sup> <a name="decimalEncodingInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.decimalEncodingInput"></a>

```java
public java.lang.String getDecimalEncodingInput();
```

- *Type:* java.lang.String

---

##### `rowGroupBytesInput`<sup>Optional</sup> <a name="rowGroupBytesInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.rowGroupBytesInput"></a>

```java
public java.lang.Number getRowGroupBytesInput();
```

- *Type:* java.lang.Number

---

##### `timestampFormatInput`<sup>Optional</sup> <a name="timestampFormatInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.timestampFormatInput"></a>

```java
public java.lang.String getTimestampFormatInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `unstructuredInput`<sup>Optional</sup> <a name="unstructuredInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.unstructuredInput"></a>

```java
public java.lang.Boolean|IResolvable getUnstructuredInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.compression"></a>

```java
public java.lang.String getCompression();
```

- *Type:* java.lang.String

---

##### `decimalEncoding`<sup>Required</sup> <a name="decimalEncoding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.decimalEncoding"></a>

```java
public java.lang.String getDecimalEncoding();
```

- *Type:* java.lang.String

---

##### `rowGroupBytes`<sup>Required</sup> <a name="rowGroupBytes" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.rowGroupBytes"></a>

```java
public java.lang.Number getRowGroupBytes();
```

- *Type:* java.lang.Number

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.timestampFormat"></a>

```java
public java.lang.String getTimestampFormat();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `unstructured`<sup>Required</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.unstructured"></a>

```java
public java.lang.Boolean|IResolvable getUnstructured();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.internalValue"></a>

```java
public IResolvable|PipelineStreamSchemaFormat getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat">PipelineStreamSchemaFormat</a>

---


### PipelineStreamSchemaOutputReference <a name="PipelineStreamSchemaOutputReference" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_stream.PipelineStreamSchemaOutputReference;

new PipelineStreamSchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.putFormat">putFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.resetInferred">resetInferred</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFields` <a name="putFields" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.putFields"></a>

```java
public void putFields(IResolvable|java.util.List<PipelineStreamSchemaFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.putFields.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields">PipelineStreamSchemaFields</a>>

---

##### `putFormat` <a name="putFormat" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.putFormat"></a>

```java
public void putFormat(PipelineStreamSchemaFormat value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.putFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat">PipelineStreamSchemaFormat</a>

---

##### `resetFields` <a name="resetFields" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.resetFields"></a>

```java
public void resetFields()
```

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.resetFormat"></a>

```java
public void resetFormat()
```

##### `resetInferred` <a name="resetInferred" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.resetInferred"></a>

```java
public void resetInferred()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList">PipelineStreamSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference">PipelineStreamSchemaFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields">PipelineStreamSchemaFields</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.formatInput">formatInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat">PipelineStreamSchemaFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.inferredInput">inferredInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.inferred">inferred</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema">PipelineStreamSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.fields"></a>

```java
public PipelineStreamSchemaFieldsList getFields();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList">PipelineStreamSchemaFieldsList</a>

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.format"></a>

```java
public PipelineStreamSchemaFormatOutputReference getFormat();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference">PipelineStreamSchemaFormatOutputReference</a>

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.fieldsInput"></a>

```java
public IResolvable|java.util.List<PipelineStreamSchemaFields> getFieldsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields">PipelineStreamSchemaFields</a>>

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.formatInput"></a>

```java
public IResolvable|PipelineStreamSchemaFormat getFormatInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat">PipelineStreamSchemaFormat</a>

---

##### `inferredInput`<sup>Optional</sup> <a name="inferredInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.inferredInput"></a>

```java
public java.lang.Boolean|IResolvable getInferredInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `inferred`<sup>Required</sup> <a name="inferred" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.inferred"></a>

```java
public java.lang.Boolean|IResolvable getInferred();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.internalValue"></a>

```java
public IResolvable|PipelineStreamSchema getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema">PipelineStreamSchema</a>

---


### PipelineStreamWorkerBindingOutputReference <a name="PipelineStreamWorkerBindingOutputReference" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_stream.PipelineStreamWorkerBindingOutputReference;

new PipelineStreamWorkerBindingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.property.enabledInput">enabledInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.property.enabled">enabled</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding">PipelineStreamWorkerBinding</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `enabledInput`<sup>Optional</sup> <a name="enabledInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.property.enabledInput"></a>

```java
public java.lang.Boolean|IResolvable getEnabledInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `enabled`<sup>Required</sup> <a name="enabled" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.property.enabled"></a>

```java
public java.lang.Boolean|IResolvable getEnabled();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.property.internalValue"></a>

```java
public IResolvable|PipelineStreamWorkerBinding getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding">PipelineStreamWorkerBinding</a>

---



