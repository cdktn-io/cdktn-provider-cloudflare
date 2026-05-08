# `pipelineStream` Submodule <a name="`pipelineStream` Submodule" id="@cdktn/provider-cloudflare.pipelineStream"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PipelineStream <a name="PipelineStream" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream cloudflare_pipeline_stream}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineStream(Construct Scope, string Id, PipelineStreamConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig">PipelineStreamConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig">PipelineStreamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putFormat">PutFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putHttp">PutHttp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putSchema">PutSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putWorkerBinding">PutWorkerBinding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetHttp">ResetHttp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetSchema">ResetSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetWorkerBinding">ResetWorkerBinding</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutFormat` <a name="PutFormat" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putFormat"></a>

```csharp
private void PutFormat(PipelineStreamFormat Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat">PipelineStreamFormat</a>

---

##### `PutHttp` <a name="PutHttp" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putHttp"></a>

```csharp
private void PutHttp(PipelineStreamHttp Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putHttp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp">PipelineStreamHttp</a>

---

##### `PutSchema` <a name="PutSchema" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putSchema"></a>

```csharp
private void PutSchema(PipelineStreamSchema Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema">PipelineStreamSchema</a>

---

##### `PutWorkerBinding` <a name="PutWorkerBinding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putWorkerBinding"></a>

```csharp
private void PutWorkerBinding(PipelineStreamWorkerBinding Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.putWorkerBinding.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding">PipelineStreamWorkerBinding</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetFormat"></a>

```csharp
private void ResetFormat()
```

##### `ResetHttp` <a name="ResetHttp" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetHttp"></a>

```csharp
private void ResetHttp()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetSchema"></a>

```csharp
private void ResetSchema()
```

##### `ResetWorkerBinding` <a name="ResetWorkerBinding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.resetWorkerBinding"></a>

```csharp
private void ResetWorkerBinding()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PipelineStream resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

PipelineStream.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

PipelineStream.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

PipelineStream.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

PipelineStream.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PipelineStream resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PipelineStream to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PipelineStream that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PipelineStream to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.endpoint">Endpoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.format">Format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference">PipelineStreamFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.http">Http</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference">PipelineStreamHttpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference">PipelineStreamSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.version">Version</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.workerBinding">WorkerBinding</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference">PipelineStreamWorkerBindingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.formatInput">FormatInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat">PipelineStreamFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.httpInput">HttpInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp">PipelineStreamHttp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.schemaInput">SchemaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema">PipelineStreamSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.workerBindingInput">WorkerBindingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding">PipelineStreamWorkerBinding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.endpoint"></a>

```csharp
public string Endpoint { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.format"></a>

```csharp
public PipelineStreamFormatOutputReference Format { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference">PipelineStreamFormatOutputReference</a>

---

##### `Http`<sup>Required</sup> <a name="Http" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.http"></a>

```csharp
public PipelineStreamHttpOutputReference Http { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference">PipelineStreamHttpOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.schema"></a>

```csharp
public PipelineStreamSchemaOutputReference Schema { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference">PipelineStreamSchemaOutputReference</a>

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.version"></a>

```csharp
public double Version { get; }
```

- *Type:* double

---

##### `WorkerBinding`<sup>Required</sup> <a name="WorkerBinding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.workerBinding"></a>

```csharp
public PipelineStreamWorkerBindingOutputReference WorkerBinding { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference">PipelineStreamWorkerBindingOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.formatInput"></a>

```csharp
public IResolvable|PipelineStreamFormat FormatInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat">PipelineStreamFormat</a>

---

##### `HttpInput`<sup>Optional</sup> <a name="HttpInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.httpInput"></a>

```csharp
public IResolvable|PipelineStreamHttp HttpInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp">PipelineStreamHttp</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.schemaInput"></a>

```csharp
public IResolvable|PipelineStreamSchema SchemaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema">PipelineStreamSchema</a>

---

##### `WorkerBindingInput`<sup>Optional</sup> <a name="WorkerBindingInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.workerBindingInput"></a>

```csharp
public IResolvable|PipelineStreamWorkerBinding WorkerBindingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding">PipelineStreamWorkerBinding</a>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStream.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PipelineStreamConfig <a name="PipelineStreamConfig" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineStreamConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string AccountId = null,
    PipelineStreamFormat Format = null,
    PipelineStreamHttp Http = null,
    PipelineStreamSchema Schema = null,
    PipelineStreamWorkerBinding WorkerBinding = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.name">Name</a></code> | <code>string</code> | Specifies the name of the Stream. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.accountId">AccountId</a></code> | <code>string</code> | Specifies the public ID of the account. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.format">Format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat">PipelineStreamFormat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#format PipelineStream#format}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.http">Http</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp">PipelineStreamHttp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#http PipelineStream#http}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema">PipelineStreamSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#schema PipelineStream#schema}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.workerBinding">WorkerBinding</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding">PipelineStreamWorkerBinding</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#worker_binding PipelineStream#worker_binding}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Specifies the name of the Stream.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#name PipelineStream#name}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Specifies the public ID of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#account_id PipelineStream#account_id}

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.format"></a>

```csharp
public PipelineStreamFormat Format { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat">PipelineStreamFormat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#format PipelineStream#format}.

---

##### `Http`<sup>Optional</sup> <a name="Http" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.http"></a>

```csharp
public PipelineStreamHttp Http { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp">PipelineStreamHttp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#http PipelineStream#http}.

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.schema"></a>

```csharp
public PipelineStreamSchema Schema { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema">PipelineStreamSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#schema PipelineStream#schema}.

---

##### `WorkerBinding`<sup>Optional</sup> <a name="WorkerBinding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamConfig.property.workerBinding"></a>

```csharp
public PipelineStreamWorkerBinding WorkerBinding { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding">PipelineStreamWorkerBinding</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#worker_binding PipelineStream#worker_binding}.

---

### PipelineStreamFormat <a name="PipelineStreamFormat" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineStreamFormat {
    string Type,
    string Compression = null,
    string DecimalEncoding = null,
    double RowGroupBytes = null,
    string TimestampFormat = null,
    bool|IResolvable Unstructured = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.type">Type</a></code> | <code>string</code> | Available values: "json", "parquet". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.compression">Compression</a></code> | <code>string</code> | Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.decimalEncoding">DecimalEncoding</a></code> | <code>string</code> | Available values: "number", "string", "bytes". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.rowGroupBytes">RowGroupBytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#row_group_bytes PipelineStream#row_group_bytes}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.timestampFormat">TimestampFormat</a></code> | <code>string</code> | Available values: "rfc3339", "unix_millis". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.unstructured">Unstructured</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#unstructured PipelineStream#unstructured}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Available values: "json", "parquet".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#type PipelineStream#type}

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.compression"></a>

```csharp
public string Compression { get; set; }
```

- *Type:* string

Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#compression PipelineStream#compression}

---

##### `DecimalEncoding`<sup>Optional</sup> <a name="DecimalEncoding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.decimalEncoding"></a>

```csharp
public string DecimalEncoding { get; set; }
```

- *Type:* string

Available values: "number", "string", "bytes".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#decimal_encoding PipelineStream#decimal_encoding}

---

##### `RowGroupBytes`<sup>Optional</sup> <a name="RowGroupBytes" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.rowGroupBytes"></a>

```csharp
public double RowGroupBytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#row_group_bytes PipelineStream#row_group_bytes}.

---

##### `TimestampFormat`<sup>Optional</sup> <a name="TimestampFormat" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.timestampFormat"></a>

```csharp
public string TimestampFormat { get; set; }
```

- *Type:* string

Available values: "rfc3339", "unix_millis".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#timestamp_format PipelineStream#timestamp_format}

---

##### `Unstructured`<sup>Optional</sup> <a name="Unstructured" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat.property.unstructured"></a>

```csharp
public bool|IResolvable Unstructured { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#unstructured PipelineStream#unstructured}.

---

### PipelineStreamHttp <a name="PipelineStreamHttp" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineStreamHttp {
    bool|IResolvable Authentication,
    bool|IResolvable Enabled,
    PipelineStreamHttpCors Cors = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp.property.authentication">Authentication</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates that authentication is required for the HTTP endpoint. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates that the HTTP endpoint is enabled. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp.property.cors">Cors</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors">PipelineStreamHttpCors</a></code> | Specifies the CORS options for the HTTP endpoint. |

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp.property.authentication"></a>

```csharp
public bool|IResolvable Authentication { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates that authentication is required for the HTTP endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#authentication PipelineStream#authentication}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates that the HTTP endpoint is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#enabled PipelineStream#enabled}

---

##### `Cors`<sup>Optional</sup> <a name="Cors" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp.property.cors"></a>

```csharp
public PipelineStreamHttpCors Cors { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors">PipelineStreamHttpCors</a>

Specifies the CORS options for the HTTP endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#cors PipelineStream#cors}

---

### PipelineStreamHttpCors <a name="PipelineStreamHttpCors" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineStreamHttpCors {
    string[] Origins = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors.property.origins">Origins</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#origins PipelineStream#origins}. |

---

##### `Origins`<sup>Optional</sup> <a name="Origins" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors.property.origins"></a>

```csharp
public string[] Origins { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#origins PipelineStream#origins}.

---

### PipelineStreamSchema <a name="PipelineStreamSchema" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineStreamSchema {
    IResolvable|PipelineStreamSchemaFields[] Fields = null,
    PipelineStreamSchemaFormat Format = null,
    bool|IResolvable Inferred = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema.property.fields">Fields</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields">PipelineStreamSchemaFields</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#fields PipelineStream#fields}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema.property.format">Format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat">PipelineStreamSchemaFormat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#format PipelineStream#format}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema.property.inferred">Inferred</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#inferred PipelineStream#inferred}. |

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema.property.fields"></a>

```csharp
public IResolvable|PipelineStreamSchemaFields[] Fields { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields">PipelineStreamSchemaFields</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#fields PipelineStream#fields}.

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema.property.format"></a>

```csharp
public PipelineStreamSchemaFormat Format { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat">PipelineStreamSchemaFormat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#format PipelineStream#format}.

---

##### `Inferred`<sup>Optional</sup> <a name="Inferred" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema.property.inferred"></a>

```csharp
public bool|IResolvable Inferred { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#inferred PipelineStream#inferred}.

---

### PipelineStreamSchemaFields <a name="PipelineStreamSchemaFields" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineStreamSchemaFields {
    string Type,
    string MetadataKey = null,
    string Name = null,
    bool|IResolvable Required = null,
    string SqlName = null,
    string Unit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.type">Type</a></code> | <code>string</code> | Available values: "int32", "int64", "float32", "float64", "bool", "string", "binary", "timestamp", "json". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.metadataKey">MetadataKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#metadata_key PipelineStream#metadata_key}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#name PipelineStream#name}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.required">Required</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#required PipelineStream#required}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.sqlName">SqlName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#sql_name PipelineStream#sql_name}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.unit">Unit</a></code> | <code>string</code> | Available values: "second", "millisecond", "microsecond", "nanosecond". |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Available values: "int32", "int64", "float32", "float64", "bool", "string", "binary", "timestamp", "json".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#type PipelineStream#type}

---

##### `MetadataKey`<sup>Optional</sup> <a name="MetadataKey" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.metadataKey"></a>

```csharp
public string MetadataKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#metadata_key PipelineStream#metadata_key}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#name PipelineStream#name}.

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.required"></a>

```csharp
public bool|IResolvable Required { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#required PipelineStream#required}.

---

##### `SqlName`<sup>Optional</sup> <a name="SqlName" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.sqlName"></a>

```csharp
public string SqlName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#sql_name PipelineStream#sql_name}.

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Available values: "second", "millisecond", "microsecond", "nanosecond".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#unit PipelineStream#unit}

---

### PipelineStreamSchemaFormat <a name="PipelineStreamSchemaFormat" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineStreamSchemaFormat {
    string Type,
    string Compression = null,
    string DecimalEncoding = null,
    double RowGroupBytes = null,
    string TimestampFormat = null,
    bool|IResolvable Unstructured = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.type">Type</a></code> | <code>string</code> | Available values: "json", "parquet". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.compression">Compression</a></code> | <code>string</code> | Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.decimalEncoding">DecimalEncoding</a></code> | <code>string</code> | Available values: "number", "string", "bytes". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.rowGroupBytes">RowGroupBytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#row_group_bytes PipelineStream#row_group_bytes}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.timestampFormat">TimestampFormat</a></code> | <code>string</code> | Available values: "rfc3339", "unix_millis". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.unstructured">Unstructured</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#unstructured PipelineStream#unstructured}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Available values: "json", "parquet".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#type PipelineStream#type}

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.compression"></a>

```csharp
public string Compression { get; set; }
```

- *Type:* string

Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#compression PipelineStream#compression}

---

##### `DecimalEncoding`<sup>Optional</sup> <a name="DecimalEncoding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.decimalEncoding"></a>

```csharp
public string DecimalEncoding { get; set; }
```

- *Type:* string

Available values: "number", "string", "bytes".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#decimal_encoding PipelineStream#decimal_encoding}

---

##### `RowGroupBytes`<sup>Optional</sup> <a name="RowGroupBytes" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.rowGroupBytes"></a>

```csharp
public double RowGroupBytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#row_group_bytes PipelineStream#row_group_bytes}.

---

##### `TimestampFormat`<sup>Optional</sup> <a name="TimestampFormat" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.timestampFormat"></a>

```csharp
public string TimestampFormat { get; set; }
```

- *Type:* string

Available values: "rfc3339", "unix_millis".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#timestamp_format PipelineStream#timestamp_format}

---

##### `Unstructured`<sup>Optional</sup> <a name="Unstructured" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat.property.unstructured"></a>

```csharp
public bool|IResolvable Unstructured { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#unstructured PipelineStream#unstructured}.

---

### PipelineStreamWorkerBinding <a name="PipelineStreamWorkerBinding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineStreamWorkerBinding {
    bool|IResolvable Enabled
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates that the worker binding is enabled. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates that the worker binding is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/pipeline_stream#enabled PipelineStream#enabled}

---

## Classes <a name="Classes" id="Classes"></a>

### PipelineStreamFormatOutputReference <a name="PipelineStreamFormatOutputReference" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineStreamFormatOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resetDecimalEncoding">ResetDecimalEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resetRowGroupBytes">ResetRowGroupBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resetTimestampFormat">ResetTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resetUnstructured">ResetUnstructured</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompression` <a name="ResetCompression" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resetCompression"></a>

```csharp
private void ResetCompression()
```

##### `ResetDecimalEncoding` <a name="ResetDecimalEncoding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resetDecimalEncoding"></a>

```csharp
private void ResetDecimalEncoding()
```

##### `ResetRowGroupBytes` <a name="ResetRowGroupBytes" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resetRowGroupBytes"></a>

```csharp
private void ResetRowGroupBytes()
```

##### `ResetTimestampFormat` <a name="ResetTimestampFormat" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resetTimestampFormat"></a>

```csharp
private void ResetTimestampFormat()
```

##### `ResetUnstructured` <a name="ResetUnstructured" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.resetUnstructured"></a>

```csharp
private void ResetUnstructured()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.compressionInput">CompressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.decimalEncodingInput">DecimalEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.rowGroupBytesInput">RowGroupBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.timestampFormatInput">TimestampFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.unstructuredInput">UnstructuredInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.compression">Compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.decimalEncoding">DecimalEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.rowGroupBytes">RowGroupBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.unstructured">Unstructured</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat">PipelineStreamFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.compressionInput"></a>

```csharp
public string CompressionInput { get; }
```

- *Type:* string

---

##### `DecimalEncodingInput`<sup>Optional</sup> <a name="DecimalEncodingInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.decimalEncodingInput"></a>

```csharp
public string DecimalEncodingInput { get; }
```

- *Type:* string

---

##### `RowGroupBytesInput`<sup>Optional</sup> <a name="RowGroupBytesInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.rowGroupBytesInput"></a>

```csharp
public double RowGroupBytesInput { get; }
```

- *Type:* double

---

##### `TimestampFormatInput`<sup>Optional</sup> <a name="TimestampFormatInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.timestampFormatInput"></a>

```csharp
public string TimestampFormatInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UnstructuredInput`<sup>Optional</sup> <a name="UnstructuredInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.unstructuredInput"></a>

```csharp
public bool|IResolvable UnstructuredInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.compression"></a>

```csharp
public string Compression { get; }
```

- *Type:* string

---

##### `DecimalEncoding`<sup>Required</sup> <a name="DecimalEncoding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.decimalEncoding"></a>

```csharp
public string DecimalEncoding { get; }
```

- *Type:* string

---

##### `RowGroupBytes`<sup>Required</sup> <a name="RowGroupBytes" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.rowGroupBytes"></a>

```csharp
public double RowGroupBytes { get; }
```

- *Type:* double

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.timestampFormat"></a>

```csharp
public string TimestampFormat { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Unstructured`<sup>Required</sup> <a name="Unstructured" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.unstructured"></a>

```csharp
public bool|IResolvable Unstructured { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormatOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PipelineStreamFormat InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamFormat">PipelineStreamFormat</a>

---


### PipelineStreamHttpCorsOutputReference <a name="PipelineStreamHttpCorsOutputReference" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineStreamHttpCorsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.resetOrigins">ResetOrigins</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOrigins` <a name="ResetOrigins" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.resetOrigins"></a>

```csharp
private void ResetOrigins()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.property.originsInput">OriginsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.property.origins">Origins</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors">PipelineStreamHttpCors</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `OriginsInput`<sup>Optional</sup> <a name="OriginsInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.property.originsInput"></a>

```csharp
public string[] OriginsInput { get; }
```

- *Type:* string[]

---

##### `Origins`<sup>Required</sup> <a name="Origins" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.property.origins"></a>

```csharp
public string[] Origins { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PipelineStreamHttpCors InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors">PipelineStreamHttpCors</a>

---


### PipelineStreamHttpOutputReference <a name="PipelineStreamHttpOutputReference" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineStreamHttpOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.putCors">PutCors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.resetCors">ResetCors</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCors` <a name="PutCors" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.putCors"></a>

```csharp
private void PutCors(PipelineStreamHttpCors Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.putCors.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors">PipelineStreamHttpCors</a>

---

##### `ResetCors` <a name="ResetCors" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.resetCors"></a>

```csharp
private void ResetCors()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.cors">Cors</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference">PipelineStreamHttpCorsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.authenticationInput">AuthenticationInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.corsInput">CorsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors">PipelineStreamHttpCors</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.authentication">Authentication</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp">PipelineStreamHttp</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Cors`<sup>Required</sup> <a name="Cors" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.cors"></a>

```csharp
public PipelineStreamHttpCorsOutputReference Cors { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCorsOutputReference">PipelineStreamHttpCorsOutputReference</a>

---

##### `AuthenticationInput`<sup>Optional</sup> <a name="AuthenticationInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.authenticationInput"></a>

```csharp
public bool|IResolvable AuthenticationInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CorsInput`<sup>Optional</sup> <a name="CorsInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.corsInput"></a>

```csharp
public IResolvable|PipelineStreamHttpCors CorsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpCors">PipelineStreamHttpCors</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Authentication`<sup>Required</sup> <a name="Authentication" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.authentication"></a>

```csharp
public bool|IResolvable Authentication { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttpOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PipelineStreamHttp InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamHttp">PipelineStreamHttp</a>

---


### PipelineStreamSchemaFieldsList <a name="PipelineStreamSchemaFieldsList" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineStreamSchemaFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.get"></a>

```csharp
private PipelineStreamSchemaFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields">PipelineStreamSchemaFields</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList.property.internalValue"></a>

```csharp
public IResolvable|PipelineStreamSchemaFields[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields">PipelineStreamSchemaFields</a>[]

---


### PipelineStreamSchemaFieldsOutputReference <a name="PipelineStreamSchemaFieldsOutputReference" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineStreamSchemaFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resetMetadataKey">ResetMetadataKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resetSqlName">ResetSqlName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetadataKey` <a name="ResetMetadataKey" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resetMetadataKey"></a>

```csharp
private void ResetMetadataKey()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resetRequired"></a>

```csharp
private void ResetRequired()
```

##### `ResetSqlName` <a name="ResetSqlName" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resetSqlName"></a>

```csharp
private void ResetSqlName()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.resetUnit"></a>

```csharp
private void ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.metadataKeyInput">MetadataKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.requiredInput">RequiredInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.sqlNameInput">SqlNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.metadataKey">MetadataKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.required">Required</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.sqlName">SqlName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields">PipelineStreamSchemaFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetadataKeyInput`<sup>Optional</sup> <a name="MetadataKeyInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.metadataKeyInput"></a>

```csharp
public string MetadataKeyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.requiredInput"></a>

```csharp
public bool|IResolvable RequiredInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SqlNameInput`<sup>Optional</sup> <a name="SqlNameInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.sqlNameInput"></a>

```csharp
public string SqlNameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `MetadataKey`<sup>Required</sup> <a name="MetadataKey" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.metadataKey"></a>

```csharp
public string MetadataKey { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.required"></a>

```csharp
public bool|IResolvable Required { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SqlName`<sup>Required</sup> <a name="SqlName" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.sqlName"></a>

```csharp
public string SqlName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PipelineStreamSchemaFields InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields">PipelineStreamSchemaFields</a>

---


### PipelineStreamSchemaFormatOutputReference <a name="PipelineStreamSchemaFormatOutputReference" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineStreamSchemaFormatOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resetDecimalEncoding">ResetDecimalEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resetRowGroupBytes">ResetRowGroupBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resetTimestampFormat">ResetTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resetUnstructured">ResetUnstructured</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompression` <a name="ResetCompression" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resetCompression"></a>

```csharp
private void ResetCompression()
```

##### `ResetDecimalEncoding` <a name="ResetDecimalEncoding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resetDecimalEncoding"></a>

```csharp
private void ResetDecimalEncoding()
```

##### `ResetRowGroupBytes` <a name="ResetRowGroupBytes" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resetRowGroupBytes"></a>

```csharp
private void ResetRowGroupBytes()
```

##### `ResetTimestampFormat` <a name="ResetTimestampFormat" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resetTimestampFormat"></a>

```csharp
private void ResetTimestampFormat()
```

##### `ResetUnstructured` <a name="ResetUnstructured" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.resetUnstructured"></a>

```csharp
private void ResetUnstructured()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.compressionInput">CompressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.decimalEncodingInput">DecimalEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.rowGroupBytesInput">RowGroupBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.timestampFormatInput">TimestampFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.unstructuredInput">UnstructuredInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.compression">Compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.decimalEncoding">DecimalEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.rowGroupBytes">RowGroupBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.unstructured">Unstructured</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat">PipelineStreamSchemaFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.compressionInput"></a>

```csharp
public string CompressionInput { get; }
```

- *Type:* string

---

##### `DecimalEncodingInput`<sup>Optional</sup> <a name="DecimalEncodingInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.decimalEncodingInput"></a>

```csharp
public string DecimalEncodingInput { get; }
```

- *Type:* string

---

##### `RowGroupBytesInput`<sup>Optional</sup> <a name="RowGroupBytesInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.rowGroupBytesInput"></a>

```csharp
public double RowGroupBytesInput { get; }
```

- *Type:* double

---

##### `TimestampFormatInput`<sup>Optional</sup> <a name="TimestampFormatInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.timestampFormatInput"></a>

```csharp
public string TimestampFormatInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UnstructuredInput`<sup>Optional</sup> <a name="UnstructuredInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.unstructuredInput"></a>

```csharp
public bool|IResolvable UnstructuredInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.compression"></a>

```csharp
public string Compression { get; }
```

- *Type:* string

---

##### `DecimalEncoding`<sup>Required</sup> <a name="DecimalEncoding" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.decimalEncoding"></a>

```csharp
public string DecimalEncoding { get; }
```

- *Type:* string

---

##### `RowGroupBytes`<sup>Required</sup> <a name="RowGroupBytes" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.rowGroupBytes"></a>

```csharp
public double RowGroupBytes { get; }
```

- *Type:* double

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.timestampFormat"></a>

```csharp
public string TimestampFormat { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Unstructured`<sup>Required</sup> <a name="Unstructured" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.unstructured"></a>

```csharp
public bool|IResolvable Unstructured { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PipelineStreamSchemaFormat InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat">PipelineStreamSchemaFormat</a>

---


### PipelineStreamSchemaOutputReference <a name="PipelineStreamSchemaOutputReference" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineStreamSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.putFields">PutFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.putFormat">PutFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.resetFields">ResetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.resetInferred">ResetInferred</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFields` <a name="PutFields" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.putFields"></a>

```csharp
private void PutFields(IResolvable|PipelineStreamSchemaFields[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.putFields.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields">PipelineStreamSchemaFields</a>[]

---

##### `PutFormat` <a name="PutFormat" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.putFormat"></a>

```csharp
private void PutFormat(PipelineStreamSchemaFormat Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.putFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat">PipelineStreamSchemaFormat</a>

---

##### `ResetFields` <a name="ResetFields" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.resetFields"></a>

```csharp
private void ResetFields()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.resetFormat"></a>

```csharp
private void ResetFormat()
```

##### `ResetInferred` <a name="ResetInferred" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.resetInferred"></a>

```csharp
private void ResetInferred()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList">PipelineStreamSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.format">Format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference">PipelineStreamSchemaFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields">PipelineStreamSchemaFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.formatInput">FormatInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat">PipelineStreamSchemaFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.inferredInput">InferredInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.inferred">Inferred</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema">PipelineStreamSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.fields"></a>

```csharp
public PipelineStreamSchemaFieldsList Fields { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFieldsList">PipelineStreamSchemaFieldsList</a>

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.format"></a>

```csharp
public PipelineStreamSchemaFormatOutputReference Format { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormatOutputReference">PipelineStreamSchemaFormatOutputReference</a>

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.fieldsInput"></a>

```csharp
public IResolvable|PipelineStreamSchemaFields[] FieldsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFields">PipelineStreamSchemaFields</a>[]

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.formatInput"></a>

```csharp
public IResolvable|PipelineStreamSchemaFormat FormatInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaFormat">PipelineStreamSchemaFormat</a>

---

##### `InferredInput`<sup>Optional</sup> <a name="InferredInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.inferredInput"></a>

```csharp
public bool|IResolvable InferredInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Inferred`<sup>Required</sup> <a name="Inferred" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.inferred"></a>

```csharp
public bool|IResolvable Inferred { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchemaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PipelineStreamSchema InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamSchema">PipelineStreamSchema</a>

---


### PipelineStreamWorkerBindingOutputReference <a name="PipelineStreamWorkerBindingOutputReference" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineStreamWorkerBindingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding">PipelineStreamWorkerBinding</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBindingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PipelineStreamWorkerBinding InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineStream.PipelineStreamWorkerBinding">PipelineStreamWorkerBinding</a>

---



