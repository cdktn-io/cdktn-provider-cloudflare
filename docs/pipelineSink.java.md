# `pipelineSink` Submodule <a name="`pipelineSink` Submodule" id="@cdktn/provider-cloudflare.pipelineSink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PipelineSink <a name="PipelineSink" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink cloudflare_pipeline_sink}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_sink.PipelineSink;

PipelineSink.Builder.create(Construct scope, java.lang.String id)
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
//  .config(PipelineSinkConfigA)
//  .format(PipelineSinkFormat)
//  .schema(PipelineSinkSchema)
    .build();
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.scope">scope</a></code> | <code>software.constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.id">id</a></code> | <code>java.lang.String</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.accountId">accountId</a></code> | <code>java.lang.String</code> | Specifies the public ID of the account. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.name">name</a></code> | <code>java.lang.String</code> | Defines the name of the Sink. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.type">type</a></code> | <code>java.lang.String</code> | Specifies the type of sink. Available values: "r2", "r2_data_catalog". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a></code> | Defines the configuration of the R2 Sink. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#format PipelineSink#format}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.schema">schema</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#schema PipelineSink#schema}. |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.id"></a>

- *Type:* java.lang.String

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.connection"></a>

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.count"></a>

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.dependsOn"></a>

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.forEach"></a>

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.lifecycle"></a>

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.provisioners"></a>

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.accountId"></a>

- *Type:* java.lang.String

Specifies the public ID of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#account_id PipelineSink#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.name"></a>

- *Type:* java.lang.String

Defines the name of the Sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#name PipelineSink#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.type"></a>

- *Type:* java.lang.String

Specifies the type of sink. Available values: "r2", "r2_data_catalog".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#type PipelineSink#type}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a>

Defines the configuration of the R2 Sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#config PipelineSink#config}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.format"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#format PipelineSink#format}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.schema"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#schema PipelineSink#schema}.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.with">with</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addOverride">addOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.overrideLogicalId">overrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetOverrideLogicalId">resetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toHclTerraform">toHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toMetadata">toMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toTerraform">toTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addMoveTarget">addMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.hasResourceMove">hasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.importFrom">importFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveFromId">moveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveTo">moveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveToId">moveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putConfig">putConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putFormat">putFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putSchema">putSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetConfig">resetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetSchema">resetSchema</a></code> | *No description.* |

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toString"></a>

```java
public java.lang.String toString()
```

Returns a string representation of this construct.

##### `with` <a name="with" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.with"></a>

```java
public IConstruct with(IMixin... mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.with.parameter.mixins"></a>

- *Type:* software.constructs.IMixin...

The mixins to apply.

---

##### `addOverride` <a name="addOverride" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addOverride"></a>

```java
public void addOverride(java.lang.String path, java.lang.Object value)
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addOverride.parameter.path"></a>

- *Type:* java.lang.String

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addOverride.parameter.value"></a>

- *Type:* java.lang.Object

---

##### `overrideLogicalId` <a name="overrideLogicalId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.overrideLogicalId"></a>

```java
public void overrideLogicalId(java.lang.String newLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* java.lang.String

The new logical ID to use for this stack element.

---

##### `resetOverrideLogicalId` <a name="resetOverrideLogicalId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetOverrideLogicalId"></a>

```java
public void resetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `toHclTerraform` <a name="toHclTerraform" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toHclTerraform"></a>

```java
public java.lang.Object toHclTerraform()
```

##### `toMetadata` <a name="toMetadata" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toMetadata"></a>

```java
public java.lang.Object toMetadata()
```

##### `toTerraform` <a name="toTerraform" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toTerraform"></a>

```java
public java.lang.Object toTerraform()
```

Adds this resource to the terraform JSON output.

##### `addMoveTarget` <a name="addMoveTarget" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addMoveTarget"></a>

```java
public void addMoveTarget(java.lang.String moveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* java.lang.String

The string move target that will correspond to this resource.

---

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `hasResourceMove` <a name="hasResourceMove" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.hasResourceMove"></a>

```java
public TerraformResourceMoveByTarget|TerraformResourceMoveById hasResourceMove()
```

##### `importFrom` <a name="importFrom" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.importFrom"></a>

```java
public void importFrom(java.lang.String id)
public void importFrom(java.lang.String id, TerraformProvider provider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.importFrom.parameter.id"></a>

- *Type:* java.lang.String

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.importFrom.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `moveFromId` <a name="moveFromId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveFromId"></a>

```java
public void moveFromId(java.lang.String id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveFromId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `moveTo` <a name="moveTo" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveTo"></a>

```java
public void moveTo(java.lang.String moveTarget)
public void moveTo(java.lang.String moveTarget, java.lang.String|java.lang.Number index)
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveTo.parameter.moveTarget"></a>

- *Type:* java.lang.String

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveTo.parameter.index"></a>

- *Type:* java.lang.String|java.lang.Number

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `moveToId` <a name="moveToId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveToId"></a>

```java
public void moveToId(java.lang.String id)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveToId.parameter.id"></a>

- *Type:* java.lang.String

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `putConfig` <a name="putConfig" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putConfig"></a>

```java
public void putConfig(PipelineSinkConfigA value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a>

---

##### `putFormat` <a name="putFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putFormat"></a>

```java
public void putFormat(PipelineSinkFormat value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a>

---

##### `putSchema` <a name="putSchema" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putSchema"></a>

```java
public void putSchema(PipelineSinkSchema value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a>

---

##### `resetConfig` <a name="resetConfig" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetConfig"></a>

```java
public void resetConfig()
```

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetFormat"></a>

```java
public void resetFormat()
```

##### `resetSchema` <a name="resetSchema" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetSchema"></a>

```java
public void resetSchema()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isTerraformElement">isTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isTerraformResource">isTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.generateConfigForImport">generateConfigForImport</a></code> | Generates CDKTN code for importing a PipelineSink resource upon running "cdktn plan <stack-name>". |

---

##### `isConstruct` <a name="isConstruct" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isConstruct"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_sink.PipelineSink;

PipelineSink.isConstruct(java.lang.Object x)
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isConstruct.parameter.x"></a>

- *Type:* java.lang.Object

Any object.

---

##### `isTerraformElement` <a name="isTerraformElement" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isTerraformElement"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_sink.PipelineSink;

PipelineSink.isTerraformElement(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isTerraformElement.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `isTerraformResource` <a name="isTerraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isTerraformResource"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_sink.PipelineSink;

PipelineSink.isTerraformResource(java.lang.Object x)
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isTerraformResource.parameter.x"></a>

- *Type:* java.lang.Object

---

##### `generateConfigForImport` <a name="generateConfigForImport" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.generateConfigForImport"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_sink.PipelineSink;

PipelineSink.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId),PipelineSink.generateConfigForImport(Construct scope, java.lang.String importToId, java.lang.String importFromId, TerraformProvider provider)
```

Generates CDKTN code for importing a PipelineSink resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.generateConfigForImport.parameter.scope"></a>

- *Type:* software.constructs.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.generateConfigForImport.parameter.importToId"></a>

- *Type:* java.lang.String

The construct id used in the generated config for the PipelineSink to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* java.lang.String

The id of the existing PipelineSink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.generateConfigForImport.parameter.provider"></a>

- *Type:* io.cdktn.cdktn.TerraformProvider

? Optional instance of the provider where the PipelineSink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.node">node</a></code> | <code>software.constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.cdktfStack">cdktfStack</a></code> | <code>io.cdktn.cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.friendlyUniqueId">friendlyUniqueId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.terraformMetaArguments">terraformMetaArguments</a></code> | <code>java.util.Map<java.lang.String, java.lang.Object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.terraformResourceType">terraformResourceType</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.terraformGeneratorMetadata">terraformGeneratorMetadata</a></code> | <code>io.cdktn.cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.dependsOn">dependsOn</a></code> | <code>java.util.List<java.lang.String></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference">PipelineSinkConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.createdAt">createdAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference">PipelineSinkFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.id">id</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.modifiedAt">modifiedAt</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference">PipelineSinkSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.configInput">configInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.formatInput">formatInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.schemaInput">schemaInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.node"></a>

```java
public Node getNode();
```

- *Type:* software.constructs.Node

The tree node.

---

##### `cdktfStack`<sup>Required</sup> <a name="cdktfStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.cdktfStack"></a>

```java
public TerraformStack getCdktfStack();
```

- *Type:* io.cdktn.cdktn.TerraformStack

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `friendlyUniqueId`<sup>Required</sup> <a name="friendlyUniqueId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.friendlyUniqueId"></a>

```java
public java.lang.String getFriendlyUniqueId();
```

- *Type:* java.lang.String

---

##### `terraformMetaArguments`<sup>Required</sup> <a name="terraformMetaArguments" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.terraformMetaArguments"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getTerraformMetaArguments();
```

- *Type:* java.util.Map<java.lang.String, java.lang.Object>

---

##### `terraformResourceType`<sup>Required</sup> <a name="terraformResourceType" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.terraformResourceType"></a>

```java
public java.lang.String getTerraformResourceType();
```

- *Type:* java.lang.String

---

##### `terraformGeneratorMetadata`<sup>Optional</sup> <a name="terraformGeneratorMetadata" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.terraformGeneratorMetadata"></a>

```java
public TerraformProviderGeneratorMetadata getTerraformGeneratorMetadata();
```

- *Type:* io.cdktn.cdktn.TerraformProviderGeneratorMetadata

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.dependsOn"></a>

```java
public java.util.List<java.lang.String> getDependsOn();
```

- *Type:* java.util.List<java.lang.String>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.config"></a>

```java
public PipelineSinkConfigAOutputReference getConfig();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference">PipelineSinkConfigAOutputReference</a>

---

##### `createdAt`<sup>Required</sup> <a name="createdAt" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.createdAt"></a>

```java
public java.lang.String getCreatedAt();
```

- *Type:* java.lang.String

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.format"></a>

```java
public PipelineSinkFormatOutputReference getFormat();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference">PipelineSinkFormatOutputReference</a>

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.id"></a>

```java
public java.lang.String getId();
```

- *Type:* java.lang.String

---

##### `modifiedAt`<sup>Required</sup> <a name="modifiedAt" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.modifiedAt"></a>

```java
public java.lang.String getModifiedAt();
```

- *Type:* java.lang.String

---

##### `schema`<sup>Required</sup> <a name="schema" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.schema"></a>

```java
public PipelineSinkSchemaOutputReference getSchema();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference">PipelineSinkSchemaOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `configInput`<sup>Optional</sup> <a name="configInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.configInput"></a>

```java
public IResolvable|PipelineSinkConfigA getConfigInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a>

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.formatInput"></a>

```java
public IResolvable|PipelineSinkFormat getFormatInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a>

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `schemaInput`<sup>Optional</sup> <a name="schemaInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.schemaInput"></a>

```java
public IResolvable|PipelineSinkSchema getSchemaInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a>

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.tfResourceType">tfResourceType</a></code> | <code>java.lang.String</code> | *No description.* |

---

##### `tfResourceType`<sup>Required</sup> <a name="tfResourceType" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.tfResourceType"></a>

```java
public java.lang.String getTfResourceType();
```

- *Type:* java.lang.String

---

## Structs <a name="Structs" id="Structs"></a>

### PipelineSinkConfig <a name="PipelineSinkConfig" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_sink.PipelineSinkConfig;

PipelineSinkConfig.builder()
//  .connection(SSHProvisionerConnection|WinrmProvisionerConnection)
//  .count(java.lang.Number|TerraformCount)
//  .dependsOn(java.util.List<ITerraformDependable>)
//  .forEach(ITerraformIterator)
//  .lifecycle(TerraformResourceLifecycle)
//  .provider(TerraformProvider)
//  .provisioners(java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner>)
    .accountId(java.lang.String)
    .name(java.lang.String)
    .type(java.lang.String)
//  .config(PipelineSinkConfigA)
//  .format(PipelineSinkFormat)
//  .schema(PipelineSinkSchema)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.connection">connection</a></code> | <code>io.cdktn.cdktn.SSHProvisionerConnection\|io.cdktn.cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.count">count</a></code> | <code>java.lang.Number\|io.cdktn.cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.dependsOn">dependsOn</a></code> | <code>java.util.List<io.cdktn.cdktn.ITerraformDependable></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.forEach">forEach</a></code> | <code>io.cdktn.cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.lifecycle">lifecycle</a></code> | <code>io.cdktn.cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.provider">provider</a></code> | <code>io.cdktn.cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.provisioners">provisioners</a></code> | <code>java.util.List<io.cdktn.cdktn.FileProvisioner\|io.cdktn.cdktn.LocalExecProvisioner\|io.cdktn.cdktn.RemoteExecProvisioner></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Specifies the public ID of the account. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.name">name</a></code> | <code>java.lang.String</code> | Defines the name of the Sink. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.type">type</a></code> | <code>java.lang.String</code> | Specifies the type of sink. Available values: "r2", "r2_data_catalog". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.config">config</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a></code> | Defines the configuration of the R2 Sink. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#format PipelineSink#format}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.schema">schema</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#schema PipelineSink#schema}. |

---

##### `connection`<sup>Optional</sup> <a name="connection" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.connection"></a>

```java
public SSHProvisionerConnection|WinrmProvisionerConnection getConnection();
```

- *Type:* io.cdktn.cdktn.SSHProvisionerConnection|io.cdktn.cdktn.WinrmProvisionerConnection

---

##### `count`<sup>Optional</sup> <a name="count" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.count"></a>

```java
public java.lang.Number|TerraformCount getCount();
```

- *Type:* java.lang.Number|io.cdktn.cdktn.TerraformCount

---

##### `dependsOn`<sup>Optional</sup> <a name="dependsOn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.dependsOn"></a>

```java
public java.util.List<ITerraformDependable> getDependsOn();
```

- *Type:* java.util.List<io.cdktn.cdktn.ITerraformDependable>

---

##### `forEach`<sup>Optional</sup> <a name="forEach" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.forEach"></a>

```java
public ITerraformIterator getForEach();
```

- *Type:* io.cdktn.cdktn.ITerraformIterator

---

##### `lifecycle`<sup>Optional</sup> <a name="lifecycle" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.lifecycle"></a>

```java
public TerraformResourceLifecycle getLifecycle();
```

- *Type:* io.cdktn.cdktn.TerraformResourceLifecycle

---

##### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.provider"></a>

```java
public TerraformProvider getProvider();
```

- *Type:* io.cdktn.cdktn.TerraformProvider

---

##### `provisioners`<sup>Optional</sup> <a name="provisioners" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.provisioners"></a>

```java
public java.util.List<FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner> getProvisioners();
```

- *Type:* java.util.List<io.cdktn.cdktn.FileProvisioner|io.cdktn.cdktn.LocalExecProvisioner|io.cdktn.cdktn.RemoteExecProvisioner>

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Specifies the public ID of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#account_id PipelineSink#account_id}

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Defines the name of the Sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#name PipelineSink#name}

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Specifies the type of sink. Available values: "r2", "r2_data_catalog".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#type PipelineSink#type}

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.config"></a>

```java
public PipelineSinkConfigA getConfig();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a>

Defines the configuration of the R2 Sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#config PipelineSink#config}

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.format"></a>

```java
public PipelineSinkFormat getFormat();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#format PipelineSink#format}.

---

##### `schema`<sup>Optional</sup> <a name="schema" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.schema"></a>

```java
public PipelineSinkSchema getSchema();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#schema PipelineSink#schema}.

---

### PipelineSinkConfigA <a name="PipelineSinkConfigA" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_sink.PipelineSinkConfigA;

PipelineSinkConfigA.builder()
    .accountId(java.lang.String)
    .bucket(java.lang.String)
//  .credentials(PipelineSinkConfigCredentials)
//  .fileNaming(PipelineSinkConfigFileNaming)
//  .jurisdiction(java.lang.String)
//  .namespace(java.lang.String)
//  .partitioning(PipelineSinkConfigPartitioning)
//  .path(java.lang.String)
//  .rollingPolicy(PipelineSinkConfigRollingPolicy)
//  .tableName(java.lang.String)
//  .token(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.accountId">accountId</a></code> | <code>java.lang.String</code> | Cloudflare Account ID for the bucket. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.bucket">bucket</a></code> | <code>java.lang.String</code> | R2 Bucket to write to. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#credentials PipelineSink#credentials}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.fileNaming">fileNaming</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a></code> | Controls filename prefix/suffix and strategy. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.jurisdiction">jurisdiction</a></code> | <code>java.lang.String</code> | Jurisdiction this bucket is hosted in. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.namespace">namespace</a></code> | <code>java.lang.String</code> | Table namespace. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.partitioning">partitioning</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a></code> | Data-layout partitioning for sinks. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.path">path</a></code> | <code>java.lang.String</code> | Subpath within the bucket to write to. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.rollingPolicy">rollingPolicy</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a></code> | Rolling policy for file sinks (when & why to close a file and open a new one). |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.tableName">tableName</a></code> | <code>java.lang.String</code> | Table name. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.token">token</a></code> | <code>java.lang.String</code> | Authentication token. |

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

Cloudflare Account ID for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#account_id PipelineSink#account_id}

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

R2 Bucket to write to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#bucket PipelineSink#bucket}

---

##### `credentials`<sup>Optional</sup> <a name="credentials" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.credentials"></a>

```java
public PipelineSinkConfigCredentials getCredentials();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#credentials PipelineSink#credentials}.

---

##### `fileNaming`<sup>Optional</sup> <a name="fileNaming" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.fileNaming"></a>

```java
public PipelineSinkConfigFileNaming getFileNaming();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a>

Controls filename prefix/suffix and strategy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#file_naming PipelineSink#file_naming}

---

##### `jurisdiction`<sup>Optional</sup> <a name="jurisdiction" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.jurisdiction"></a>

```java
public java.lang.String getJurisdiction();
```

- *Type:* java.lang.String

Jurisdiction this bucket is hosted in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#jurisdiction PipelineSink#jurisdiction}

---

##### `namespace`<sup>Optional</sup> <a name="namespace" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

Table namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#namespace PipelineSink#namespace}

---

##### `partitioning`<sup>Optional</sup> <a name="partitioning" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.partitioning"></a>

```java
public PipelineSinkConfigPartitioning getPartitioning();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a>

Data-layout partitioning for sinks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#partitioning PipelineSink#partitioning}

---

##### `path`<sup>Optional</sup> <a name="path" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

Subpath within the bucket to write to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#path PipelineSink#path}

---

##### `rollingPolicy`<sup>Optional</sup> <a name="rollingPolicy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.rollingPolicy"></a>

```java
public PipelineSinkConfigRollingPolicy getRollingPolicy();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a>

Rolling policy for file sinks (when & why to close a file and open a new one).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#rolling_policy PipelineSink#rolling_policy}

---

##### `tableName`<sup>Optional</sup> <a name="tableName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

Table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#table_name PipelineSink#table_name}

---

##### `token`<sup>Optional</sup> <a name="token" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

Authentication token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#token PipelineSink#token}

---

### PipelineSinkConfigCredentials <a name="PipelineSinkConfigCredentials" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_sink.PipelineSinkConfigCredentials;

PipelineSinkConfigCredentials.builder()
    .accessKeyId(java.lang.String)
    .secretAccessKey(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials.property.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | Cloudflare Account ID for the bucket. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials.property.secretAccessKey">secretAccessKey</a></code> | <code>java.lang.String</code> | Cloudflare Account ID for the bucket. |

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials.property.accessKeyId"></a>

```java
public java.lang.String getAccessKeyId();
```

- *Type:* java.lang.String

Cloudflare Account ID for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#access_key_id PipelineSink#access_key_id}

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials.property.secretAccessKey"></a>

```java
public java.lang.String getSecretAccessKey();
```

- *Type:* java.lang.String

Cloudflare Account ID for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#secret_access_key PipelineSink#secret_access_key}

---

### PipelineSinkConfigFileNaming <a name="PipelineSinkConfigFileNaming" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_sink.PipelineSinkConfigFileNaming;

PipelineSinkConfigFileNaming.builder()
//  .prefix(java.lang.String)
//  .strategy(java.lang.String)
//  .suffix(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.property.prefix">prefix</a></code> | <code>java.lang.String</code> | The prefix to use in file name. i.e prefix-<uuid>.parquet. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.property.strategy">strategy</a></code> | <code>java.lang.String</code> | Filename generation strategy. Available values: "serial", "uuid", "uuid_v7", "ulid". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.property.suffix">suffix</a></code> | <code>java.lang.String</code> | This will overwrite the default file suffix. i.e .parquet, use with caution. |

---

##### `prefix`<sup>Optional</sup> <a name="prefix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

The prefix to use in file name. i.e prefix-<uuid>.parquet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#prefix PipelineSink#prefix}

---

##### `strategy`<sup>Optional</sup> <a name="strategy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.property.strategy"></a>

```java
public java.lang.String getStrategy();
```

- *Type:* java.lang.String

Filename generation strategy. Available values: "serial", "uuid", "uuid_v7", "ulid".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#strategy PipelineSink#strategy}

---

##### `suffix`<sup>Optional</sup> <a name="suffix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

This will overwrite the default file suffix. i.e .parquet, use with caution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#suffix PipelineSink#suffix}

---

### PipelineSinkConfigPartitioning <a name="PipelineSinkConfigPartitioning" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_sink.PipelineSinkConfigPartitioning;

PipelineSinkConfigPartitioning.builder()
//  .timePattern(java.lang.String)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning.property.timePattern">timePattern</a></code> | <code>java.lang.String</code> | The pattern of the date string. |

---

##### `timePattern`<sup>Optional</sup> <a name="timePattern" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning.property.timePattern"></a>

```java
public java.lang.String getTimePattern();
```

- *Type:* java.lang.String

The pattern of the date string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#time_pattern PipelineSink#time_pattern}

---

### PipelineSinkConfigRollingPolicy <a name="PipelineSinkConfigRollingPolicy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_sink.PipelineSinkConfigRollingPolicy;

PipelineSinkConfigRollingPolicy.builder()
//  .fileSizeBytes(java.lang.Number)
//  .inactivitySeconds(java.lang.Number)
//  .intervalSeconds(java.lang.Number)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.property.fileSizeBytes">fileSizeBytes</a></code> | <code>java.lang.Number</code> | Files will be rolled after reaching this number of bytes. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.property.inactivitySeconds">inactivitySeconds</a></code> | <code>java.lang.Number</code> | Number of seconds of inactivity to wait before rolling over to a new file. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.property.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | Number of seconds to wait before rolling over to a new file. |

---

##### `fileSizeBytes`<sup>Optional</sup> <a name="fileSizeBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.property.fileSizeBytes"></a>

```java
public java.lang.Number getFileSizeBytes();
```

- *Type:* java.lang.Number

Files will be rolled after reaching this number of bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#file_size_bytes PipelineSink#file_size_bytes}

---

##### `inactivitySeconds`<sup>Optional</sup> <a name="inactivitySeconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.property.inactivitySeconds"></a>

```java
public java.lang.Number getInactivitySeconds();
```

- *Type:* java.lang.Number

Number of seconds of inactivity to wait before rolling over to a new file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#inactivity_seconds PipelineSink#inactivity_seconds}

---

##### `intervalSeconds`<sup>Optional</sup> <a name="intervalSeconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.property.intervalSeconds"></a>

```java
public java.lang.Number getIntervalSeconds();
```

- *Type:* java.lang.Number

Number of seconds to wait before rolling over to a new file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#interval_seconds PipelineSink#interval_seconds}

---

### PipelineSinkFormat <a name="PipelineSinkFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_sink.PipelineSinkFormat;

PipelineSinkFormat.builder()
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
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.type">type</a></code> | <code>java.lang.String</code> | Available values: "json", "parquet". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.compression">compression</a></code> | <code>java.lang.String</code> | Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.decimalEncoding">decimalEncoding</a></code> | <code>java.lang.String</code> | Available values: "number", "string", "bytes". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.rowGroupBytes">rowGroupBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#row_group_bytes PipelineSink#row_group_bytes}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.timestampFormat">timestampFormat</a></code> | <code>java.lang.String</code> | Available values: "rfc3339", "unix_millis". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.unstructured">unstructured</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#unstructured PipelineSink#unstructured}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Available values: "json", "parquet".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#type PipelineSink#type}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.compression"></a>

```java
public java.lang.String getCompression();
```

- *Type:* java.lang.String

Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#compression PipelineSink#compression}

---

##### `decimalEncoding`<sup>Optional</sup> <a name="decimalEncoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.decimalEncoding"></a>

```java
public java.lang.String getDecimalEncoding();
```

- *Type:* java.lang.String

Available values: "number", "string", "bytes".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#decimal_encoding PipelineSink#decimal_encoding}

---

##### `rowGroupBytes`<sup>Optional</sup> <a name="rowGroupBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.rowGroupBytes"></a>

```java
public java.lang.Number getRowGroupBytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#row_group_bytes PipelineSink#row_group_bytes}.

---

##### `timestampFormat`<sup>Optional</sup> <a name="timestampFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.timestampFormat"></a>

```java
public java.lang.String getTimestampFormat();
```

- *Type:* java.lang.String

Available values: "rfc3339", "unix_millis".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#timestamp_format PipelineSink#timestamp_format}

---

##### `unstructured`<sup>Optional</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.unstructured"></a>

```java
public java.lang.Boolean|IResolvable getUnstructured();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#unstructured PipelineSink#unstructured}.

---

### PipelineSinkSchema <a name="PipelineSinkSchema" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_sink.PipelineSinkSchema;

PipelineSinkSchema.builder()
//  .fields(IResolvable|java.util.List<PipelineSinkSchemaFields>)
//  .format(PipelineSinkSchemaFormat)
//  .inferred(java.lang.Boolean|IResolvable)
    .build();
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.property.fields">fields</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#fields PipelineSink#fields}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.property.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#format PipelineSink#format}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.property.inferred">inferred</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#inferred PipelineSink#inferred}. |

---

##### `fields`<sup>Optional</sup> <a name="fields" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.property.fields"></a>

```java
public IResolvable|java.util.List<PipelineSinkSchemaFields> getFields();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#fields PipelineSink#fields}.

---

##### `format`<sup>Optional</sup> <a name="format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.property.format"></a>

```java
public PipelineSinkSchemaFormat getFormat();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#format PipelineSink#format}.

---

##### `inferred`<sup>Optional</sup> <a name="inferred" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.property.inferred"></a>

```java
public java.lang.Boolean|IResolvable getInferred();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#inferred PipelineSink#inferred}.

---

### PipelineSinkSchemaFields <a name="PipelineSinkSchemaFields" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_sink.PipelineSinkSchemaFields;

PipelineSinkSchemaFields.builder()
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
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.type">type</a></code> | <code>java.lang.String</code> | Available values: "int32", "int64", "float32", "float64", "bool", "string", "binary", "timestamp", "json". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.metadataKey">metadataKey</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#metadata_key PipelineSink#metadata_key}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.name">name</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#name PipelineSink#name}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.required">required</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#required PipelineSink#required}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.sqlName">sqlName</a></code> | <code>java.lang.String</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#sql_name PipelineSink#sql_name}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.unit">unit</a></code> | <code>java.lang.String</code> | Available values: "second", "millisecond", "microsecond", "nanosecond". |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Available values: "int32", "int64", "float32", "float64", "bool", "string", "binary", "timestamp", "json".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#type PipelineSink#type}

---

##### `metadataKey`<sup>Optional</sup> <a name="metadataKey" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.metadataKey"></a>

```java
public java.lang.String getMetadataKey();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#metadata_key PipelineSink#metadata_key}.

---

##### `name`<sup>Optional</sup> <a name="name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#name PipelineSink#name}.

---

##### `required`<sup>Optional</sup> <a name="required" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.required"></a>

```java
public java.lang.Boolean|IResolvable getRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#required PipelineSink#required}.

---

##### `sqlName`<sup>Optional</sup> <a name="sqlName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.sqlName"></a>

```java
public java.lang.String getSqlName();
```

- *Type:* java.lang.String

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#sql_name PipelineSink#sql_name}.

---

##### `unit`<sup>Optional</sup> <a name="unit" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

Available values: "second", "millisecond", "microsecond", "nanosecond".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#unit PipelineSink#unit}

---

### PipelineSinkSchemaFormat <a name="PipelineSinkSchemaFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_sink.PipelineSinkSchemaFormat;

PipelineSinkSchemaFormat.builder()
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
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.type">type</a></code> | <code>java.lang.String</code> | Available values: "json", "parquet". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.compression">compression</a></code> | <code>java.lang.String</code> | Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.decimalEncoding">decimalEncoding</a></code> | <code>java.lang.String</code> | Available values: "number", "string", "bytes". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.rowGroupBytes">rowGroupBytes</a></code> | <code>java.lang.Number</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#row_group_bytes PipelineSink#row_group_bytes}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.timestampFormat">timestampFormat</a></code> | <code>java.lang.String</code> | Available values: "rfc3339", "unix_millis". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.unstructured">unstructured</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#unstructured PipelineSink#unstructured}. |

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

Available values: "json", "parquet".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#type PipelineSink#type}

---

##### `compression`<sup>Optional</sup> <a name="compression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.compression"></a>

```java
public java.lang.String getCompression();
```

- *Type:* java.lang.String

Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#compression PipelineSink#compression}

---

##### `decimalEncoding`<sup>Optional</sup> <a name="decimalEncoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.decimalEncoding"></a>

```java
public java.lang.String getDecimalEncoding();
```

- *Type:* java.lang.String

Available values: "number", "string", "bytes".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#decimal_encoding PipelineSink#decimal_encoding}

---

##### `rowGroupBytes`<sup>Optional</sup> <a name="rowGroupBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.rowGroupBytes"></a>

```java
public java.lang.Number getRowGroupBytes();
```

- *Type:* java.lang.Number

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#row_group_bytes PipelineSink#row_group_bytes}.

---

##### `timestampFormat`<sup>Optional</sup> <a name="timestampFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.timestampFormat"></a>

```java
public java.lang.String getTimestampFormat();
```

- *Type:* java.lang.String

Available values: "rfc3339", "unix_millis".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#timestamp_format PipelineSink#timestamp_format}

---

##### `unstructured`<sup>Optional</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.unstructured"></a>

```java
public java.lang.Boolean|IResolvable getUnstructured();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.1/docs/resources/pipeline_sink#unstructured PipelineSink#unstructured}.

---

## Classes <a name="Classes" id="Classes"></a>

### PipelineSinkConfigAOutputReference <a name="PipelineSinkConfigAOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_sink.PipelineSinkConfigAOutputReference;

new PipelineSinkConfigAOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putCredentials">putCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putFileNaming">putFileNaming</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putPartitioning">putPartitioning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putRollingPolicy">putRollingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetCredentials">resetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetFileNaming">resetFileNaming</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetJurisdiction">resetJurisdiction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetNamespace">resetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetPartitioning">resetPartitioning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetPath">resetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetRollingPolicy">resetRollingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetTableName">resetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetToken">resetToken</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putCredentials` <a name="putCredentials" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putCredentials"></a>

```java
public void putCredentials(PipelineSinkConfigCredentials value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a>

---

##### `putFileNaming` <a name="putFileNaming" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putFileNaming"></a>

```java
public void putFileNaming(PipelineSinkConfigFileNaming value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putFileNaming.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a>

---

##### `putPartitioning` <a name="putPartitioning" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putPartitioning"></a>

```java
public void putPartitioning(PipelineSinkConfigPartitioning value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putPartitioning.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a>

---

##### `putRollingPolicy` <a name="putRollingPolicy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putRollingPolicy"></a>

```java
public void putRollingPolicy(PipelineSinkConfigRollingPolicy value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putRollingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a>

---

##### `resetCredentials` <a name="resetCredentials" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetCredentials"></a>

```java
public void resetCredentials()
```

##### `resetFileNaming` <a name="resetFileNaming" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetFileNaming"></a>

```java
public void resetFileNaming()
```

##### `resetJurisdiction` <a name="resetJurisdiction" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetJurisdiction"></a>

```java
public void resetJurisdiction()
```

##### `resetNamespace` <a name="resetNamespace" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetNamespace"></a>

```java
public void resetNamespace()
```

##### `resetPartitioning` <a name="resetPartitioning" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetPartitioning"></a>

```java
public void resetPartitioning()
```

##### `resetPath` <a name="resetPath" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetPath"></a>

```java
public void resetPath()
```

##### `resetRollingPolicy` <a name="resetRollingPolicy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetRollingPolicy"></a>

```java
public void resetRollingPolicy()
```

##### `resetTableName` <a name="resetTableName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetTableName"></a>

```java
public void resetTableName()
```

##### `resetToken` <a name="resetToken" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetToken"></a>

```java
public void resetToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.credentials">credentials</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference">PipelineSinkConfigCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.fileNaming">fileNaming</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference">PipelineSinkConfigFileNamingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.partitioning">partitioning</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference">PipelineSinkConfigPartitioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.rollingPolicy">rollingPolicy</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference">PipelineSinkConfigRollingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.accountIdInput">accountIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.bucketInput">bucketInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.credentialsInput">credentialsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.fileNamingInput">fileNamingInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.jurisdictionInput">jurisdictionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.namespaceInput">namespaceInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.partitioningInput">partitioningInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.pathInput">pathInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.rollingPolicyInput">rollingPolicyInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.tableNameInput">tableNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.tokenInput">tokenInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.accountId">accountId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.bucket">bucket</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.jurisdiction">jurisdiction</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.namespace">namespace</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.path">path</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.tableName">tableName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.token">token</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `credentials`<sup>Required</sup> <a name="credentials" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.credentials"></a>

```java
public PipelineSinkConfigCredentialsOutputReference getCredentials();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference">PipelineSinkConfigCredentialsOutputReference</a>

---

##### `fileNaming`<sup>Required</sup> <a name="fileNaming" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.fileNaming"></a>

```java
public PipelineSinkConfigFileNamingOutputReference getFileNaming();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference">PipelineSinkConfigFileNamingOutputReference</a>

---

##### `partitioning`<sup>Required</sup> <a name="partitioning" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.partitioning"></a>

```java
public PipelineSinkConfigPartitioningOutputReference getPartitioning();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference">PipelineSinkConfigPartitioningOutputReference</a>

---

##### `rollingPolicy`<sup>Required</sup> <a name="rollingPolicy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.rollingPolicy"></a>

```java
public PipelineSinkConfigRollingPolicyOutputReference getRollingPolicy();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference">PipelineSinkConfigRollingPolicyOutputReference</a>

---

##### `accountIdInput`<sup>Optional</sup> <a name="accountIdInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.accountIdInput"></a>

```java
public java.lang.String getAccountIdInput();
```

- *Type:* java.lang.String

---

##### `bucketInput`<sup>Optional</sup> <a name="bucketInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.bucketInput"></a>

```java
public java.lang.String getBucketInput();
```

- *Type:* java.lang.String

---

##### `credentialsInput`<sup>Optional</sup> <a name="credentialsInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.credentialsInput"></a>

```java
public IResolvable|PipelineSinkConfigCredentials getCredentialsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a>

---

##### `fileNamingInput`<sup>Optional</sup> <a name="fileNamingInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.fileNamingInput"></a>

```java
public IResolvable|PipelineSinkConfigFileNaming getFileNamingInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a>

---

##### `jurisdictionInput`<sup>Optional</sup> <a name="jurisdictionInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.jurisdictionInput"></a>

```java
public java.lang.String getJurisdictionInput();
```

- *Type:* java.lang.String

---

##### `namespaceInput`<sup>Optional</sup> <a name="namespaceInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.namespaceInput"></a>

```java
public java.lang.String getNamespaceInput();
```

- *Type:* java.lang.String

---

##### `partitioningInput`<sup>Optional</sup> <a name="partitioningInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.partitioningInput"></a>

```java
public IResolvable|PipelineSinkConfigPartitioning getPartitioningInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a>

---

##### `pathInput`<sup>Optional</sup> <a name="pathInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.pathInput"></a>

```java
public java.lang.String getPathInput();
```

- *Type:* java.lang.String

---

##### `rollingPolicyInput`<sup>Optional</sup> <a name="rollingPolicyInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.rollingPolicyInput"></a>

```java
public IResolvable|PipelineSinkConfigRollingPolicy getRollingPolicyInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a>

---

##### `tableNameInput`<sup>Optional</sup> <a name="tableNameInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.tableNameInput"></a>

```java
public java.lang.String getTableNameInput();
```

- *Type:* java.lang.String

---

##### `tokenInput`<sup>Optional</sup> <a name="tokenInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.tokenInput"></a>

```java
public java.lang.String getTokenInput();
```

- *Type:* java.lang.String

---

##### `accountId`<sup>Required</sup> <a name="accountId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.accountId"></a>

```java
public java.lang.String getAccountId();
```

- *Type:* java.lang.String

---

##### `bucket`<sup>Required</sup> <a name="bucket" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.bucket"></a>

```java
public java.lang.String getBucket();
```

- *Type:* java.lang.String

---

##### `jurisdiction`<sup>Required</sup> <a name="jurisdiction" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.jurisdiction"></a>

```java
public java.lang.String getJurisdiction();
```

- *Type:* java.lang.String

---

##### `namespace`<sup>Required</sup> <a name="namespace" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.namespace"></a>

```java
public java.lang.String getNamespace();
```

- *Type:* java.lang.String

---

##### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.path"></a>

```java
public java.lang.String getPath();
```

- *Type:* java.lang.String

---

##### `tableName`<sup>Required</sup> <a name="tableName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.tableName"></a>

```java
public java.lang.String getTableName();
```

- *Type:* java.lang.String

---

##### `token`<sup>Required</sup> <a name="token" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.token"></a>

```java
public java.lang.String getToken();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.internalValue"></a>

```java
public IResolvable|PipelineSinkConfigA getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a>

---


### PipelineSinkConfigCredentialsOutputReference <a name="PipelineSinkConfigCredentialsOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_sink.PipelineSinkConfigCredentialsOutputReference;

new PipelineSinkConfigCredentialsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.accessKeyIdInput">accessKeyIdInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.secretAccessKeyInput">secretAccessKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.accessKeyId">accessKeyId</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.secretAccessKey">secretAccessKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `accessKeyIdInput`<sup>Optional</sup> <a name="accessKeyIdInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.accessKeyIdInput"></a>

```java
public java.lang.String getAccessKeyIdInput();
```

- *Type:* java.lang.String

---

##### `secretAccessKeyInput`<sup>Optional</sup> <a name="secretAccessKeyInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.secretAccessKeyInput"></a>

```java
public java.lang.String getSecretAccessKeyInput();
```

- *Type:* java.lang.String

---

##### `accessKeyId`<sup>Required</sup> <a name="accessKeyId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.accessKeyId"></a>

```java
public java.lang.String getAccessKeyId();
```

- *Type:* java.lang.String

---

##### `secretAccessKey`<sup>Required</sup> <a name="secretAccessKey" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.secretAccessKey"></a>

```java
public java.lang.String getSecretAccessKey();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.internalValue"></a>

```java
public IResolvable|PipelineSinkConfigCredentials getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a>

---


### PipelineSinkConfigFileNamingOutputReference <a name="PipelineSinkConfigFileNamingOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_sink.PipelineSinkConfigFileNamingOutputReference;

new PipelineSinkConfigFileNamingOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resetPrefix">resetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resetStrategy">resetStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resetSuffix">resetSuffix</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetPrefix` <a name="resetPrefix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resetPrefix"></a>

```java
public void resetPrefix()
```

##### `resetStrategy` <a name="resetStrategy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resetStrategy"></a>

```java
public void resetStrategy()
```

##### `resetSuffix` <a name="resetSuffix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resetSuffix"></a>

```java
public void resetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.prefixInput">prefixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.strategyInput">strategyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.suffixInput">suffixInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.prefix">prefix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.strategy">strategy</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.suffix">suffix</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `prefixInput`<sup>Optional</sup> <a name="prefixInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.prefixInput"></a>

```java
public java.lang.String getPrefixInput();
```

- *Type:* java.lang.String

---

##### `strategyInput`<sup>Optional</sup> <a name="strategyInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.strategyInput"></a>

```java
public java.lang.String getStrategyInput();
```

- *Type:* java.lang.String

---

##### `suffixInput`<sup>Optional</sup> <a name="suffixInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.suffixInput"></a>

```java
public java.lang.String getSuffixInput();
```

- *Type:* java.lang.String

---

##### `prefix`<sup>Required</sup> <a name="prefix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.prefix"></a>

```java
public java.lang.String getPrefix();
```

- *Type:* java.lang.String

---

##### `strategy`<sup>Required</sup> <a name="strategy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.strategy"></a>

```java
public java.lang.String getStrategy();
```

- *Type:* java.lang.String

---

##### `suffix`<sup>Required</sup> <a name="suffix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.suffix"></a>

```java
public java.lang.String getSuffix();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.internalValue"></a>

```java
public IResolvable|PipelineSinkConfigFileNaming getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a>

---


### PipelineSinkConfigPartitioningOutputReference <a name="PipelineSinkConfigPartitioningOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_sink.PipelineSinkConfigPartitioningOutputReference;

new PipelineSinkConfigPartitioningOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.resetTimePattern">resetTimePattern</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetTimePattern` <a name="resetTimePattern" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.resetTimePattern"></a>

```java
public void resetTimePattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.timePatternInput">timePatternInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.timePattern">timePattern</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `timePatternInput`<sup>Optional</sup> <a name="timePatternInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.timePatternInput"></a>

```java
public java.lang.String getTimePatternInput();
```

- *Type:* java.lang.String

---

##### `timePattern`<sup>Required</sup> <a name="timePattern" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.timePattern"></a>

```java
public java.lang.String getTimePattern();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.internalValue"></a>

```java
public IResolvable|PipelineSinkConfigPartitioning getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a>

---


### PipelineSinkConfigRollingPolicyOutputReference <a name="PipelineSinkConfigRollingPolicyOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_sink.PipelineSinkConfigRollingPolicyOutputReference;

new PipelineSinkConfigRollingPolicyOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resetFileSizeBytes">resetFileSizeBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resetInactivitySeconds">resetInactivitySeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resetIntervalSeconds">resetIntervalSeconds</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetFileSizeBytes` <a name="resetFileSizeBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resetFileSizeBytes"></a>

```java
public void resetFileSizeBytes()
```

##### `resetInactivitySeconds` <a name="resetInactivitySeconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resetInactivitySeconds"></a>

```java
public void resetInactivitySeconds()
```

##### `resetIntervalSeconds` <a name="resetIntervalSeconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resetIntervalSeconds"></a>

```java
public void resetIntervalSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.fileSizeBytesInput">fileSizeBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.inactivitySecondsInput">inactivitySecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.intervalSecondsInput">intervalSecondsInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.fileSizeBytes">fileSizeBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.inactivitySeconds">inactivitySeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.intervalSeconds">intervalSeconds</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fileSizeBytesInput`<sup>Optional</sup> <a name="fileSizeBytesInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.fileSizeBytesInput"></a>

```java
public java.lang.Number getFileSizeBytesInput();
```

- *Type:* java.lang.Number

---

##### `inactivitySecondsInput`<sup>Optional</sup> <a name="inactivitySecondsInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.inactivitySecondsInput"></a>

```java
public java.lang.Number getInactivitySecondsInput();
```

- *Type:* java.lang.Number

---

##### `intervalSecondsInput`<sup>Optional</sup> <a name="intervalSecondsInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.intervalSecondsInput"></a>

```java
public java.lang.Number getIntervalSecondsInput();
```

- *Type:* java.lang.Number

---

##### `fileSizeBytes`<sup>Required</sup> <a name="fileSizeBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.fileSizeBytes"></a>

```java
public java.lang.Number getFileSizeBytes();
```

- *Type:* java.lang.Number

---

##### `inactivitySeconds`<sup>Required</sup> <a name="inactivitySeconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.inactivitySeconds"></a>

```java
public java.lang.Number getInactivitySeconds();
```

- *Type:* java.lang.Number

---

##### `intervalSeconds`<sup>Required</sup> <a name="intervalSeconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.intervalSeconds"></a>

```java
public java.lang.Number getIntervalSeconds();
```

- *Type:* java.lang.Number

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.internalValue"></a>

```java
public IResolvable|PipelineSinkConfigRollingPolicy getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a>

---


### PipelineSinkFormatOutputReference <a name="PipelineSinkFormatOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_sink.PipelineSinkFormatOutputReference;

new PipelineSinkFormatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetCompression">resetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetDecimalEncoding">resetDecimalEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetRowGroupBytes">resetRowGroupBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetTimestampFormat">resetTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetUnstructured">resetUnstructured</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompression` <a name="resetCompression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetCompression"></a>

```java
public void resetCompression()
```

##### `resetDecimalEncoding` <a name="resetDecimalEncoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetDecimalEncoding"></a>

```java
public void resetDecimalEncoding()
```

##### `resetRowGroupBytes` <a name="resetRowGroupBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetRowGroupBytes"></a>

```java
public void resetRowGroupBytes()
```

##### `resetTimestampFormat` <a name="resetTimestampFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetTimestampFormat"></a>

```java
public void resetTimestampFormat()
```

##### `resetUnstructured` <a name="resetUnstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetUnstructured"></a>

```java
public void resetUnstructured()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.compressionInput">compressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.decimalEncodingInput">decimalEncodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.rowGroupBytesInput">rowGroupBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.timestampFormatInput">timestampFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.unstructuredInput">unstructuredInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.compression">compression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.decimalEncoding">decimalEncoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.rowGroupBytes">rowGroupBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.unstructured">unstructured</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.compressionInput"></a>

```java
public java.lang.String getCompressionInput();
```

- *Type:* java.lang.String

---

##### `decimalEncodingInput`<sup>Optional</sup> <a name="decimalEncodingInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.decimalEncodingInput"></a>

```java
public java.lang.String getDecimalEncodingInput();
```

- *Type:* java.lang.String

---

##### `rowGroupBytesInput`<sup>Optional</sup> <a name="rowGroupBytesInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.rowGroupBytesInput"></a>

```java
public java.lang.Number getRowGroupBytesInput();
```

- *Type:* java.lang.Number

---

##### `timestampFormatInput`<sup>Optional</sup> <a name="timestampFormatInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.timestampFormatInput"></a>

```java
public java.lang.String getTimestampFormatInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `unstructuredInput`<sup>Optional</sup> <a name="unstructuredInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.unstructuredInput"></a>

```java
public java.lang.Boolean|IResolvable getUnstructuredInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.compression"></a>

```java
public java.lang.String getCompression();
```

- *Type:* java.lang.String

---

##### `decimalEncoding`<sup>Required</sup> <a name="decimalEncoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.decimalEncoding"></a>

```java
public java.lang.String getDecimalEncoding();
```

- *Type:* java.lang.String

---

##### `rowGroupBytes`<sup>Required</sup> <a name="rowGroupBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.rowGroupBytes"></a>

```java
public java.lang.Number getRowGroupBytes();
```

- *Type:* java.lang.Number

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.timestampFormat"></a>

```java
public java.lang.String getTimestampFormat();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `unstructured`<sup>Required</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.unstructured"></a>

```java
public java.lang.Boolean|IResolvable getUnstructured();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.internalValue"></a>

```java
public IResolvable|PipelineSinkFormat getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a>

---


### PipelineSinkSchemaFieldsList <a name="PipelineSinkSchemaFieldsList" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_sink.PipelineSinkSchemaFieldsList;

new PipelineSinkSchemaFieldsList(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Boolean wrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.allWithMapKey">allWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.get">get</a></code> | *No description.* |

---

##### `allWithMapKey` <a name="allWithMapKey" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.allWithMapKey"></a>

```java
public DynamicListTerraformIterator allWithMapKey(java.lang.String mapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* java.lang.String

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `get` <a name="get" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.get"></a>

```java
public PipelineSinkSchemaFieldsOutputReference get(java.lang.Number index)
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.get.parameter.index"></a>

- *Type:* java.lang.Number

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.property.internalValue"></a>

```java
public IResolvable|java.util.List<PipelineSinkSchemaFields> getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>>

---


### PipelineSinkSchemaFieldsOutputReference <a name="PipelineSinkSchemaFieldsOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_sink.PipelineSinkSchemaFieldsOutputReference;

new PipelineSinkSchemaFieldsOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute, java.lang.Number complexObjectIndex, java.lang.Boolean complexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>java.lang.Number</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>java.lang.Boolean</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* java.lang.Number

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* java.lang.Boolean

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetMetadataKey">resetMetadataKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetName">resetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetRequired">resetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetSqlName">resetSqlName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetUnit">resetUnit</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetMetadataKey` <a name="resetMetadataKey" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetMetadataKey"></a>

```java
public void resetMetadataKey()
```

##### `resetName` <a name="resetName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetName"></a>

```java
public void resetName()
```

##### `resetRequired` <a name="resetRequired" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetRequired"></a>

```java
public void resetRequired()
```

##### `resetSqlName` <a name="resetSqlName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetSqlName"></a>

```java
public void resetSqlName()
```

##### `resetUnit` <a name="resetUnit" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetUnit"></a>

```java
public void resetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.metadataKeyInput">metadataKeyInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.nameInput">nameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.requiredInput">requiredInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.sqlNameInput">sqlNameInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.unitInput">unitInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.metadataKey">metadataKey</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.name">name</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.required">required</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.sqlName">sqlName</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.unit">unit</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `metadataKeyInput`<sup>Optional</sup> <a name="metadataKeyInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.metadataKeyInput"></a>

```java
public java.lang.String getMetadataKeyInput();
```

- *Type:* java.lang.String

---

##### `nameInput`<sup>Optional</sup> <a name="nameInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.nameInput"></a>

```java
public java.lang.String getNameInput();
```

- *Type:* java.lang.String

---

##### `requiredInput`<sup>Optional</sup> <a name="requiredInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.requiredInput"></a>

```java
public java.lang.Boolean|IResolvable getRequiredInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sqlNameInput`<sup>Optional</sup> <a name="sqlNameInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.sqlNameInput"></a>

```java
public java.lang.String getSqlNameInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `unitInput`<sup>Optional</sup> <a name="unitInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.unitInput"></a>

```java
public java.lang.String getUnitInput();
```

- *Type:* java.lang.String

---

##### `metadataKey`<sup>Required</sup> <a name="metadataKey" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.metadataKey"></a>

```java
public java.lang.String getMetadataKey();
```

- *Type:* java.lang.String

---

##### `name`<sup>Required</sup> <a name="name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.name"></a>

```java
public java.lang.String getName();
```

- *Type:* java.lang.String

---

##### `required`<sup>Required</sup> <a name="required" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.required"></a>

```java
public java.lang.Boolean|IResolvable getRequired();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `sqlName`<sup>Required</sup> <a name="sqlName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.sqlName"></a>

```java
public java.lang.String getSqlName();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `unit`<sup>Required</sup> <a name="unit" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.unit"></a>

```java
public java.lang.String getUnit();
```

- *Type:* java.lang.String

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.internalValue"></a>

```java
public IResolvable|PipelineSinkSchemaFields getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>

---


### PipelineSinkSchemaFormatOutputReference <a name="PipelineSinkSchemaFormatOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_sink.PipelineSinkSchemaFormatOutputReference;

new PipelineSinkSchemaFormatOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetCompression">resetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetDecimalEncoding">resetDecimalEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetRowGroupBytes">resetRowGroupBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetTimestampFormat">resetTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetUnstructured">resetUnstructured</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `resetCompression` <a name="resetCompression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetCompression"></a>

```java
public void resetCompression()
```

##### `resetDecimalEncoding` <a name="resetDecimalEncoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetDecimalEncoding"></a>

```java
public void resetDecimalEncoding()
```

##### `resetRowGroupBytes` <a name="resetRowGroupBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetRowGroupBytes"></a>

```java
public void resetRowGroupBytes()
```

##### `resetTimestampFormat` <a name="resetTimestampFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetTimestampFormat"></a>

```java
public void resetTimestampFormat()
```

##### `resetUnstructured` <a name="resetUnstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetUnstructured"></a>

```java
public void resetUnstructured()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.compressionInput">compressionInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.decimalEncodingInput">decimalEncodingInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.rowGroupBytesInput">rowGroupBytesInput</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.timestampFormatInput">timestampFormatInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.typeInput">typeInput</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.unstructuredInput">unstructuredInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.compression">compression</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.decimalEncoding">decimalEncoding</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.rowGroupBytes">rowGroupBytes</a></code> | <code>java.lang.Number</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.timestampFormat">timestampFormat</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.type">type</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.unstructured">unstructured</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `compressionInput`<sup>Optional</sup> <a name="compressionInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.compressionInput"></a>

```java
public java.lang.String getCompressionInput();
```

- *Type:* java.lang.String

---

##### `decimalEncodingInput`<sup>Optional</sup> <a name="decimalEncodingInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.decimalEncodingInput"></a>

```java
public java.lang.String getDecimalEncodingInput();
```

- *Type:* java.lang.String

---

##### `rowGroupBytesInput`<sup>Optional</sup> <a name="rowGroupBytesInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.rowGroupBytesInput"></a>

```java
public java.lang.Number getRowGroupBytesInput();
```

- *Type:* java.lang.Number

---

##### `timestampFormatInput`<sup>Optional</sup> <a name="timestampFormatInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.timestampFormatInput"></a>

```java
public java.lang.String getTimestampFormatInput();
```

- *Type:* java.lang.String

---

##### `typeInput`<sup>Optional</sup> <a name="typeInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.typeInput"></a>

```java
public java.lang.String getTypeInput();
```

- *Type:* java.lang.String

---

##### `unstructuredInput`<sup>Optional</sup> <a name="unstructuredInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.unstructuredInput"></a>

```java
public java.lang.Boolean|IResolvable getUnstructuredInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `compression`<sup>Required</sup> <a name="compression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.compression"></a>

```java
public java.lang.String getCompression();
```

- *Type:* java.lang.String

---

##### `decimalEncoding`<sup>Required</sup> <a name="decimalEncoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.decimalEncoding"></a>

```java
public java.lang.String getDecimalEncoding();
```

- *Type:* java.lang.String

---

##### `rowGroupBytes`<sup>Required</sup> <a name="rowGroupBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.rowGroupBytes"></a>

```java
public java.lang.Number getRowGroupBytes();
```

- *Type:* java.lang.Number

---

##### `timestampFormat`<sup>Required</sup> <a name="timestampFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.timestampFormat"></a>

```java
public java.lang.String getTimestampFormat();
```

- *Type:* java.lang.String

---

##### `type`<sup>Required</sup> <a name="type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.type"></a>

```java
public java.lang.String getType();
```

- *Type:* java.lang.String

---

##### `unstructured`<sup>Required</sup> <a name="unstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.unstructured"></a>

```java
public java.lang.Boolean|IResolvable getUnstructured();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.internalValue"></a>

```java
public IResolvable|PipelineSinkSchemaFormat getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a>

---


### PipelineSinkSchemaOutputReference <a name="PipelineSinkSchemaOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.Initializer"></a>

```java
import io.cdktn.providers.cloudflare.pipeline_sink.PipelineSinkSchemaOutputReference;

new PipelineSinkSchemaOutputReference(IInterpolatingParent terraformResource, java.lang.String terraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>io.cdktn.cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>java.lang.String</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* io.cdktn.cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.computeFqn">computeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getAnyMapAttribute">getAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getBooleanAttribute">getBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getBooleanMapAttribute">getBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getListAttribute">getListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberAttribute">getNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberListAttribute">getNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberMapAttribute">getNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getStringAttribute">getStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getStringMapAttribute">getStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.interpolationForAttribute">interpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resolve">resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.toString">toString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFields">putFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFormat">putFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resetFields">resetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resetFormat">resetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resetInferred">resetInferred</a></code> | *No description.* |

---

##### `computeFqn` <a name="computeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.computeFqn"></a>

```java
public java.lang.String computeFqn()
```

##### `getAnyMapAttribute` <a name="getAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getAnyMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Object> getAnyMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanAttribute` <a name="getBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getBooleanAttribute"></a>

```java
public IResolvable getBooleanAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getBooleanMapAttribute` <a name="getBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getBooleanMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Boolean> getBooleanMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getListAttribute` <a name="getListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getListAttribute"></a>

```java
public java.util.List<java.lang.String> getListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberAttribute` <a name="getNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberAttribute"></a>

```java
public java.lang.Number getNumberAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberListAttribute` <a name="getNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberListAttribute"></a>

```java
public java.util.List<java.lang.Number> getNumberListAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getNumberMapAttribute` <a name="getNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.Number> getNumberMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringAttribute` <a name="getStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getStringAttribute"></a>

```java
public java.lang.String getStringAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `getStringMapAttribute` <a name="getStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getStringMapAttribute"></a>

```java
public java.util.Map<java.lang.String, java.lang.String> getStringMapAttribute(java.lang.String terraformAttribute)
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* java.lang.String

---

##### `interpolationForAttribute` <a name="interpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.interpolationForAttribute"></a>

```java
public IResolvable interpolationForAttribute(java.lang.String property)
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* java.lang.String

---

##### `resolve` <a name="resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resolve"></a>

```java
public java.lang.Object resolve(IResolveContext _context)
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* io.cdktn.cdktn.IResolveContext

---

##### `toString` <a name="toString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.toString"></a>

```java
public java.lang.String toString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `putFields` <a name="putFields" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFields"></a>

```java
public void putFields(IResolvable|java.util.List<PipelineSinkSchemaFields> value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFields.parameter.value"></a>

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>>

---

##### `putFormat` <a name="putFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFormat"></a>

```java
public void putFormat(PipelineSinkSchemaFormat value)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a>

---

##### `resetFields` <a name="resetFields" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resetFields"></a>

```java
public void resetFields()
```

##### `resetFormat` <a name="resetFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resetFormat"></a>

```java
public void resetFormat()
```

##### `resetInferred` <a name="resetInferred" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resetInferred"></a>

```java
public void resetInferred()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.creationStack">creationStack</a></code> | <code>java.util.List<java.lang.String></code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.fqn">fqn</a></code> | <code>java.lang.String</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.fields">fields</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList">PipelineSinkSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.format">format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference">PipelineSinkSchemaFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.fieldsInput">fieldsInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|java.util.List<<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.formatInput">formatInput</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.inferredInput">inferredInput</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.inferred">inferred</a></code> | <code>java.lang.Boolean\|io.cdktn.cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.internalValue">internalValue</a></code> | <code>io.cdktn.cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a></code> | *No description.* |

---

##### `creationStack`<sup>Required</sup> <a name="creationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.creationStack"></a>

```java
public java.util.List<java.lang.String> getCreationStack();
```

- *Type:* java.util.List<java.lang.String>

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `fqn`<sup>Required</sup> <a name="fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.fqn"></a>

```java
public java.lang.String getFqn();
```

- *Type:* java.lang.String

---

##### `fields`<sup>Required</sup> <a name="fields" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.fields"></a>

```java
public PipelineSinkSchemaFieldsList getFields();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList">PipelineSinkSchemaFieldsList</a>

---

##### `format`<sup>Required</sup> <a name="format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.format"></a>

```java
public PipelineSinkSchemaFormatOutputReference getFormat();
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference">PipelineSinkSchemaFormatOutputReference</a>

---

##### `fieldsInput`<sup>Optional</sup> <a name="fieldsInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.fieldsInput"></a>

```java
public IResolvable|java.util.List<PipelineSinkSchemaFields> getFieldsInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|java.util.List<<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>>

---

##### `formatInput`<sup>Optional</sup> <a name="formatInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.formatInput"></a>

```java
public IResolvable|PipelineSinkSchemaFormat getFormatInput();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a>

---

##### `inferredInput`<sup>Optional</sup> <a name="inferredInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.inferredInput"></a>

```java
public java.lang.Boolean|IResolvable getInferredInput();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `inferred`<sup>Required</sup> <a name="inferred" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.inferred"></a>

```java
public java.lang.Boolean|IResolvable getInferred();
```

- *Type:* java.lang.Boolean|io.cdktn.cdktn.IResolvable

---

##### `internalValue`<sup>Optional</sup> <a name="internalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.internalValue"></a>

```java
public IResolvable|PipelineSinkSchema getInternalValue();
```

- *Type:* io.cdktn.cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a>

---



