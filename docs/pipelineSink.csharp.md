# `pipelineSink` Submodule <a name="`pipelineSink` Submodule" id="@cdktn/provider-cloudflare.pipelineSink"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PipelineSink <a name="PipelineSink" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink cloudflare_pipeline_sink}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineSink(Construct Scope, string Id, PipelineSinkConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig">PipelineSinkConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig">PipelineSinkConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putFormat">PutFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putSchema">PutSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetSchema">ResetSchema</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putConfig"></a>

```csharp
private void PutConfig(PipelineSinkConfigA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a>

---

##### `PutFormat` <a name="PutFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putFormat"></a>

```csharp
private void PutFormat(PipelineSinkFormat Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a>

---

##### `PutSchema` <a name="PutSchema" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putSchema"></a>

```csharp
private void PutSchema(PipelineSinkSchema Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.putSchema.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetConfig` <a name="ResetConfig" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetConfig"></a>

```csharp
private void ResetConfig()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetFormat"></a>

```csharp
private void ResetFormat()
```

##### `ResetSchema` <a name="ResetSchema" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.resetSchema"></a>

```csharp
private void ResetSchema()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PipelineSink resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

PipelineSink.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

PipelineSink.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

PipelineSink.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

PipelineSink.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a PipelineSink resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the PipelineSink to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing PipelineSink that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the PipelineSink to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference">PipelineSinkConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.format">Format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference">PipelineSinkFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.modifiedAt">ModifiedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference">PipelineSinkSchemaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.configInput">ConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.formatInput">FormatInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.schemaInput">SchemaInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.config"></a>

```csharp
public PipelineSinkConfigAOutputReference Config { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference">PipelineSinkConfigAOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.format"></a>

```csharp
public PipelineSinkFormatOutputReference Format { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference">PipelineSinkFormatOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.modifiedAt"></a>

```csharp
public string ModifiedAt { get; }
```

- *Type:* string

---

##### `Schema`<sup>Required</sup> <a name="Schema" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.schema"></a>

```csharp
public PipelineSinkSchemaOutputReference Schema { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference">PipelineSinkSchemaOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.configInput"></a>

```csharp
public IResolvable|PipelineSinkConfigA ConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a>

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.formatInput"></a>

```csharp
public IResolvable|PipelineSinkFormat FormatInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `SchemaInput`<sup>Optional</sup> <a name="SchemaInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.schemaInput"></a>

```csharp
public IResolvable|PipelineSinkSchema SchemaInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSink.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### PipelineSinkConfig <a name="PipelineSinkConfig" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineSinkConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    string Type,
    string AccountId = null,
    PipelineSinkConfigA Config = null,
    PipelineSinkFormat Format = null,
    PipelineSinkSchema Schema = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.name">Name</a></code> | <code>string</code> | Defines the name of the Sink. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.type">Type</a></code> | <code>string</code> | Specifies the type of sink. Available values: "r2", "r2_data_catalog". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.accountId">AccountId</a></code> | <code>string</code> | Specifies the public ID of the account. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a></code> | Defines the configuration of the R2 Sink. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.format">Format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#format PipelineSink#format}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.schema">Schema</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#schema PipelineSink#schema}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Defines the name of the Sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#name PipelineSink#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Specifies the type of sink. Available values: "r2", "r2_data_catalog".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#type PipelineSink#type}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Specifies the public ID of the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#account_id PipelineSink#account_id}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.config"></a>

```csharp
public PipelineSinkConfigA Config { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a>

Defines the configuration of the R2 Sink.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#config PipelineSink#config}

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.format"></a>

```csharp
public PipelineSinkFormat Format { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#format PipelineSink#format}.

---

##### `Schema`<sup>Optional</sup> <a name="Schema" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfig.property.schema"></a>

```csharp
public PipelineSinkSchema Schema { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#schema PipelineSink#schema}.

---

### PipelineSinkConfigA <a name="PipelineSinkConfigA" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineSinkConfigA {
    string AccountId,
    string Bucket,
    PipelineSinkConfigCredentials Credentials = null,
    PipelineSinkConfigFileNaming FileNaming = null,
    string Jurisdiction = null,
    string Namespace = null,
    PipelineSinkConfigPartitioning Partitioning = null,
    string Path = null,
    PipelineSinkConfigRollingPolicy RollingPolicy = null,
    string TableName = null,
    string Token = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.accountId">AccountId</a></code> | <code>string</code> | Cloudflare Account ID for the bucket. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.bucket">Bucket</a></code> | <code>string</code> | R2 Bucket to write to. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.credentials">Credentials</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#credentials PipelineSink#credentials}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.fileNaming">FileNaming</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a></code> | Controls filename prefix/suffix and strategy. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.jurisdiction">Jurisdiction</a></code> | <code>string</code> | Jurisdiction this bucket is hosted in. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.namespace">Namespace</a></code> | <code>string</code> | Table namespace. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.partitioning">Partitioning</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a></code> | Data-layout partitioning for sinks. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.path">Path</a></code> | <code>string</code> | Subpath within the bucket to write to. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.rollingPolicy">RollingPolicy</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a></code> | Rolling policy for file sinks (when & why to close a file and open a new one). |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.tableName">TableName</a></code> | <code>string</code> | Table name. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.token">Token</a></code> | <code>string</code> | Authentication token. |

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Cloudflare Account ID for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#account_id PipelineSink#account_id}

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.bucket"></a>

```csharp
public string Bucket { get; set; }
```

- *Type:* string

R2 Bucket to write to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#bucket PipelineSink#bucket}

---

##### `Credentials`<sup>Optional</sup> <a name="Credentials" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.credentials"></a>

```csharp
public PipelineSinkConfigCredentials Credentials { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#credentials PipelineSink#credentials}.

---

##### `FileNaming`<sup>Optional</sup> <a name="FileNaming" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.fileNaming"></a>

```csharp
public PipelineSinkConfigFileNaming FileNaming { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a>

Controls filename prefix/suffix and strategy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#file_naming PipelineSink#file_naming}

---

##### `Jurisdiction`<sup>Optional</sup> <a name="Jurisdiction" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.jurisdiction"></a>

```csharp
public string Jurisdiction { get; set; }
```

- *Type:* string

Jurisdiction this bucket is hosted in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#jurisdiction PipelineSink#jurisdiction}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Table namespace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#namespace PipelineSink#namespace}

---

##### `Partitioning`<sup>Optional</sup> <a name="Partitioning" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.partitioning"></a>

```csharp
public PipelineSinkConfigPartitioning Partitioning { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a>

Data-layout partitioning for sinks.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#partitioning PipelineSink#partitioning}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.path"></a>

```csharp
public string Path { get; set; }
```

- *Type:* string

Subpath within the bucket to write to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#path PipelineSink#path}

---

##### `RollingPolicy`<sup>Optional</sup> <a name="RollingPolicy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.rollingPolicy"></a>

```csharp
public PipelineSinkConfigRollingPolicy RollingPolicy { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a>

Rolling policy for file sinks (when & why to close a file and open a new one).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#rolling_policy PipelineSink#rolling_policy}

---

##### `TableName`<sup>Optional</sup> <a name="TableName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.tableName"></a>

```csharp
public string TableName { get; set; }
```

- *Type:* string

Table name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#table_name PipelineSink#table_name}

---

##### `Token`<sup>Optional</sup> <a name="Token" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA.property.token"></a>

```csharp
public string Token { get; set; }
```

- *Type:* string

Authentication token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#token PipelineSink#token}

---

### PipelineSinkConfigCredentials <a name="PipelineSinkConfigCredentials" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineSinkConfigCredentials {
    string AccessKeyId,
    string SecretAccessKey
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | Cloudflare Account ID for the bucket. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials.property.secretAccessKey">SecretAccessKey</a></code> | <code>string</code> | Cloudflare Account ID for the bucket. |

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; set; }
```

- *Type:* string

Cloudflare Account ID for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#access_key_id PipelineSink#access_key_id}

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials.property.secretAccessKey"></a>

```csharp
public string SecretAccessKey { get; set; }
```

- *Type:* string

Cloudflare Account ID for the bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#secret_access_key PipelineSink#secret_access_key}

---

### PipelineSinkConfigFileNaming <a name="PipelineSinkConfigFileNaming" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineSinkConfigFileNaming {
    string Prefix = null,
    string Strategy = null,
    string Suffix = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.property.prefix">Prefix</a></code> | <code>string</code> | The prefix to use in file name. i.e prefix-<uuid>.parquet. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.property.strategy">Strategy</a></code> | <code>string</code> | Filename generation strategy. Available values: "serial", "uuid", "uuid_v7", "ulid". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.property.suffix">Suffix</a></code> | <code>string</code> | This will overwrite the default file suffix. i.e .parquet, use with caution. |

---

##### `Prefix`<sup>Optional</sup> <a name="Prefix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.property.prefix"></a>

```csharp
public string Prefix { get; set; }
```

- *Type:* string

The prefix to use in file name. i.e prefix-<uuid>.parquet.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#prefix PipelineSink#prefix}

---

##### `Strategy`<sup>Optional</sup> <a name="Strategy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.property.strategy"></a>

```csharp
public string Strategy { get; set; }
```

- *Type:* string

Filename generation strategy. Available values: "serial", "uuid", "uuid_v7", "ulid".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#strategy PipelineSink#strategy}

---

##### `Suffix`<sup>Optional</sup> <a name="Suffix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming.property.suffix"></a>

```csharp
public string Suffix { get; set; }
```

- *Type:* string

This will overwrite the default file suffix. i.e .parquet, use with caution.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#suffix PipelineSink#suffix}

---

### PipelineSinkConfigPartitioning <a name="PipelineSinkConfigPartitioning" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineSinkConfigPartitioning {
    string TimePattern = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning.property.timePattern">TimePattern</a></code> | <code>string</code> | The pattern of the date string. |

---

##### `TimePattern`<sup>Optional</sup> <a name="TimePattern" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning.property.timePattern"></a>

```csharp
public string TimePattern { get; set; }
```

- *Type:* string

The pattern of the date string.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#time_pattern PipelineSink#time_pattern}

---

### PipelineSinkConfigRollingPolicy <a name="PipelineSinkConfigRollingPolicy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineSinkConfigRollingPolicy {
    double FileSizeBytes = null,
    double InactivitySeconds = null,
    double IntervalSeconds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.property.fileSizeBytes">FileSizeBytes</a></code> | <code>double</code> | Files will be rolled after reaching this number of bytes. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.property.inactivitySeconds">InactivitySeconds</a></code> | <code>double</code> | Number of seconds of inactivity to wait before rolling over to a new file. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | Number of seconds to wait before rolling over to a new file. |

---

##### `FileSizeBytes`<sup>Optional</sup> <a name="FileSizeBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.property.fileSizeBytes"></a>

```csharp
public double FileSizeBytes { get; set; }
```

- *Type:* double

Files will be rolled after reaching this number of bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#file_size_bytes PipelineSink#file_size_bytes}

---

##### `InactivitySeconds`<sup>Optional</sup> <a name="InactivitySeconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.property.inactivitySeconds"></a>

```csharp
public double InactivitySeconds { get; set; }
```

- *Type:* double

Number of seconds of inactivity to wait before rolling over to a new file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#inactivity_seconds PipelineSink#inactivity_seconds}

---

##### `IntervalSeconds`<sup>Optional</sup> <a name="IntervalSeconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; set; }
```

- *Type:* double

Number of seconds to wait before rolling over to a new file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#interval_seconds PipelineSink#interval_seconds}

---

### PipelineSinkFormat <a name="PipelineSinkFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineSinkFormat {
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
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.type">Type</a></code> | <code>string</code> | Available values: "json", "parquet". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.compression">Compression</a></code> | <code>string</code> | Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.decimalEncoding">DecimalEncoding</a></code> | <code>string</code> | Available values: "number", "string", "bytes". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.rowGroupBytes">RowGroupBytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#row_group_bytes PipelineSink#row_group_bytes}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.timestampFormat">TimestampFormat</a></code> | <code>string</code> | Available values: "rfc3339", "unix_millis". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.unstructured">Unstructured</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#unstructured PipelineSink#unstructured}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Available values: "json", "parquet".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#type PipelineSink#type}

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.compression"></a>

```csharp
public string Compression { get; set; }
```

- *Type:* string

Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#compression PipelineSink#compression}

---

##### `DecimalEncoding`<sup>Optional</sup> <a name="DecimalEncoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.decimalEncoding"></a>

```csharp
public string DecimalEncoding { get; set; }
```

- *Type:* string

Available values: "number", "string", "bytes".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#decimal_encoding PipelineSink#decimal_encoding}

---

##### `RowGroupBytes`<sup>Optional</sup> <a name="RowGroupBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.rowGroupBytes"></a>

```csharp
public double RowGroupBytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#row_group_bytes PipelineSink#row_group_bytes}.

---

##### `TimestampFormat`<sup>Optional</sup> <a name="TimestampFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.timestampFormat"></a>

```csharp
public string TimestampFormat { get; set; }
```

- *Type:* string

Available values: "rfc3339", "unix_millis".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#timestamp_format PipelineSink#timestamp_format}

---

##### `Unstructured`<sup>Optional</sup> <a name="Unstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat.property.unstructured"></a>

```csharp
public bool|IResolvable Unstructured { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#unstructured PipelineSink#unstructured}.

---

### PipelineSinkSchema <a name="PipelineSinkSchema" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineSinkSchema {
    IResolvable|PipelineSinkSchemaFields[] Fields = null,
    PipelineSinkSchemaFormat Format = null,
    bool|IResolvable Inferred = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.property.fields">Fields</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#fields PipelineSink#fields}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.property.format">Format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#format PipelineSink#format}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.property.inferred">Inferred</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#inferred PipelineSink#inferred}. |

---

##### `Fields`<sup>Optional</sup> <a name="Fields" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.property.fields"></a>

```csharp
public IResolvable|PipelineSinkSchemaFields[] Fields { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#fields PipelineSink#fields}.

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.property.format"></a>

```csharp
public PipelineSinkSchemaFormat Format { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#format PipelineSink#format}.

---

##### `Inferred`<sup>Optional</sup> <a name="Inferred" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema.property.inferred"></a>

```csharp
public bool|IResolvable Inferred { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#inferred PipelineSink#inferred}.

---

### PipelineSinkSchemaFields <a name="PipelineSinkSchemaFields" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineSinkSchemaFields {
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
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.type">Type</a></code> | <code>string</code> | Available values: "int32", "int64", "float32", "float64", "bool", "string", "binary", "timestamp", "json". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.metadataKey">MetadataKey</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#metadata_key PipelineSink#metadata_key}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.name">Name</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#name PipelineSink#name}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.required">Required</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#required PipelineSink#required}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.sqlName">SqlName</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#sql_name PipelineSink#sql_name}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.unit">Unit</a></code> | <code>string</code> | Available values: "second", "millisecond", "microsecond", "nanosecond". |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Available values: "int32", "int64", "float32", "float64", "bool", "string", "binary", "timestamp", "json".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#type PipelineSink#type}

---

##### `MetadataKey`<sup>Optional</sup> <a name="MetadataKey" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.metadataKey"></a>

```csharp
public string MetadataKey { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#metadata_key PipelineSink#metadata_key}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#name PipelineSink#name}.

---

##### `Required`<sup>Optional</sup> <a name="Required" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.required"></a>

```csharp
public bool|IResolvable Required { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#required PipelineSink#required}.

---

##### `SqlName`<sup>Optional</sup> <a name="SqlName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.sqlName"></a>

```csharp
public string SqlName { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#sql_name PipelineSink#sql_name}.

---

##### `Unit`<sup>Optional</sup> <a name="Unit" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields.property.unit"></a>

```csharp
public string Unit { get; set; }
```

- *Type:* string

Available values: "second", "millisecond", "microsecond", "nanosecond".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#unit PipelineSink#unit}

---

### PipelineSinkSchemaFormat <a name="PipelineSinkSchemaFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineSinkSchemaFormat {
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
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.type">Type</a></code> | <code>string</code> | Available values: "json", "parquet". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.compression">Compression</a></code> | <code>string</code> | Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.decimalEncoding">DecimalEncoding</a></code> | <code>string</code> | Available values: "number", "string", "bytes". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.rowGroupBytes">RowGroupBytes</a></code> | <code>double</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#row_group_bytes PipelineSink#row_group_bytes}. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.timestampFormat">TimestampFormat</a></code> | <code>string</code> | Available values: "rfc3339", "unix_millis". |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.unstructured">Unstructured</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#unstructured PipelineSink#unstructured}. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Available values: "json", "parquet".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#type PipelineSink#type}

---

##### `Compression`<sup>Optional</sup> <a name="Compression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.compression"></a>

```csharp
public string Compression { get; set; }
```

- *Type:* string

Available values: "uncompressed", "snappy", "gzip", "zstd", "lz4".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#compression PipelineSink#compression}

---

##### `DecimalEncoding`<sup>Optional</sup> <a name="DecimalEncoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.decimalEncoding"></a>

```csharp
public string DecimalEncoding { get; set; }
```

- *Type:* string

Available values: "number", "string", "bytes".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#decimal_encoding PipelineSink#decimal_encoding}

---

##### `RowGroupBytes`<sup>Optional</sup> <a name="RowGroupBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.rowGroupBytes"></a>

```csharp
public double RowGroupBytes { get; set; }
```

- *Type:* double

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#row_group_bytes PipelineSink#row_group_bytes}.

---

##### `TimestampFormat`<sup>Optional</sup> <a name="TimestampFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.timestampFormat"></a>

```csharp
public string TimestampFormat { get; set; }
```

- *Type:* string

Available values: "rfc3339", "unix_millis".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#timestamp_format PipelineSink#timestamp_format}

---

##### `Unstructured`<sup>Optional</sup> <a name="Unstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat.property.unstructured"></a>

```csharp
public bool|IResolvable Unstructured { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/pipeline_sink#unstructured PipelineSink#unstructured}.

---

## Classes <a name="Classes" id="Classes"></a>

### PipelineSinkConfigAOutputReference <a name="PipelineSinkConfigAOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineSinkConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putCredentials">PutCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putFileNaming">PutFileNaming</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putPartitioning">PutPartitioning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putRollingPolicy">PutRollingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetCredentials">ResetCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetFileNaming">ResetFileNaming</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetJurisdiction">ResetJurisdiction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetPartitioning">ResetPartitioning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetRollingPolicy">ResetRollingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetTableName">ResetTableName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetToken">ResetToken</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCredentials` <a name="PutCredentials" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putCredentials"></a>

```csharp
private void PutCredentials(PipelineSinkConfigCredentials Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putCredentials.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a>

---

##### `PutFileNaming` <a name="PutFileNaming" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putFileNaming"></a>

```csharp
private void PutFileNaming(PipelineSinkConfigFileNaming Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putFileNaming.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a>

---

##### `PutPartitioning` <a name="PutPartitioning" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putPartitioning"></a>

```csharp
private void PutPartitioning(PipelineSinkConfigPartitioning Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putPartitioning.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a>

---

##### `PutRollingPolicy` <a name="PutRollingPolicy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putRollingPolicy"></a>

```csharp
private void PutRollingPolicy(PipelineSinkConfigRollingPolicy Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.putRollingPolicy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a>

---

##### `ResetCredentials` <a name="ResetCredentials" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetCredentials"></a>

```csharp
private void ResetCredentials()
```

##### `ResetFileNaming` <a name="ResetFileNaming" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetFileNaming"></a>

```csharp
private void ResetFileNaming()
```

##### `ResetJurisdiction` <a name="ResetJurisdiction" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetJurisdiction"></a>

```csharp
private void ResetJurisdiction()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetPartitioning` <a name="ResetPartitioning" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetPartitioning"></a>

```csharp
private void ResetPartitioning()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetPath"></a>

```csharp
private void ResetPath()
```

##### `ResetRollingPolicy` <a name="ResetRollingPolicy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetRollingPolicy"></a>

```csharp
private void ResetRollingPolicy()
```

##### `ResetTableName` <a name="ResetTableName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetTableName"></a>

```csharp
private void ResetTableName()
```

##### `ResetToken` <a name="ResetToken" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.resetToken"></a>

```csharp
private void ResetToken()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.credentials">Credentials</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference">PipelineSinkConfigCredentialsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.fileNaming">FileNaming</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference">PipelineSinkConfigFileNamingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.partitioning">Partitioning</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference">PipelineSinkConfigPartitioningOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.rollingPolicy">RollingPolicy</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference">PipelineSinkConfigRollingPolicyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.bucketInput">BucketInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.credentialsInput">CredentialsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.fileNamingInput">FileNamingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.jurisdictionInput">JurisdictionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.partitioningInput">PartitioningInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.pathInput">PathInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.rollingPolicyInput">RollingPolicyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.tableNameInput">TableNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.tokenInput">TokenInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.bucket">Bucket</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.jurisdiction">Jurisdiction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.path">Path</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.tableName">TableName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.token">Token</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Credentials`<sup>Required</sup> <a name="Credentials" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.credentials"></a>

```csharp
public PipelineSinkConfigCredentialsOutputReference Credentials { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference">PipelineSinkConfigCredentialsOutputReference</a>

---

##### `FileNaming`<sup>Required</sup> <a name="FileNaming" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.fileNaming"></a>

```csharp
public PipelineSinkConfigFileNamingOutputReference FileNaming { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference">PipelineSinkConfigFileNamingOutputReference</a>

---

##### `Partitioning`<sup>Required</sup> <a name="Partitioning" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.partitioning"></a>

```csharp
public PipelineSinkConfigPartitioningOutputReference Partitioning { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference">PipelineSinkConfigPartitioningOutputReference</a>

---

##### `RollingPolicy`<sup>Required</sup> <a name="RollingPolicy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.rollingPolicy"></a>

```csharp
public PipelineSinkConfigRollingPolicyOutputReference RollingPolicy { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference">PipelineSinkConfigRollingPolicyOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `BucketInput`<sup>Optional</sup> <a name="BucketInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.bucketInput"></a>

```csharp
public string BucketInput { get; }
```

- *Type:* string

---

##### `CredentialsInput`<sup>Optional</sup> <a name="CredentialsInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.credentialsInput"></a>

```csharp
public IResolvable|PipelineSinkConfigCredentials CredentialsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a>

---

##### `FileNamingInput`<sup>Optional</sup> <a name="FileNamingInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.fileNamingInput"></a>

```csharp
public IResolvable|PipelineSinkConfigFileNaming FileNamingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a>

---

##### `JurisdictionInput`<sup>Optional</sup> <a name="JurisdictionInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.jurisdictionInput"></a>

```csharp
public string JurisdictionInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `PartitioningInput`<sup>Optional</sup> <a name="PartitioningInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.partitioningInput"></a>

```csharp
public IResolvable|PipelineSinkConfigPartitioning PartitioningInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a>

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.pathInput"></a>

```csharp
public string PathInput { get; }
```

- *Type:* string

---

##### `RollingPolicyInput`<sup>Optional</sup> <a name="RollingPolicyInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.rollingPolicyInput"></a>

```csharp
public IResolvable|PipelineSinkConfigRollingPolicy RollingPolicyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a>

---

##### `TableNameInput`<sup>Optional</sup> <a name="TableNameInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.tableNameInput"></a>

```csharp
public string TableNameInput { get; }
```

- *Type:* string

---

##### `TokenInput`<sup>Optional</sup> <a name="TokenInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.tokenInput"></a>

```csharp
public string TokenInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Bucket`<sup>Required</sup> <a name="Bucket" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.bucket"></a>

```csharp
public string Bucket { get; }
```

- *Type:* string

---

##### `Jurisdiction`<sup>Required</sup> <a name="Jurisdiction" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.jurisdiction"></a>

```csharp
public string Jurisdiction { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.path"></a>

```csharp
public string Path { get; }
```

- *Type:* string

---

##### `TableName`<sup>Required</sup> <a name="TableName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.tableName"></a>

```csharp
public string TableName { get; }
```

- *Type:* string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.token"></a>

```csharp
public string Token { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigAOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PipelineSinkConfigA InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigA">PipelineSinkConfigA</a>

---


### PipelineSinkConfigCredentialsOutputReference <a name="PipelineSinkConfigCredentialsOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineSinkConfigCredentialsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.accessKeyIdInput">AccessKeyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.secretAccessKeyInput">SecretAccessKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.accessKeyId">AccessKeyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.secretAccessKey">SecretAccessKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessKeyIdInput`<sup>Optional</sup> <a name="AccessKeyIdInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.accessKeyIdInput"></a>

```csharp
public string AccessKeyIdInput { get; }
```

- *Type:* string

---

##### `SecretAccessKeyInput`<sup>Optional</sup> <a name="SecretAccessKeyInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.secretAccessKeyInput"></a>

```csharp
public string SecretAccessKeyInput { get; }
```

- *Type:* string

---

##### `AccessKeyId`<sup>Required</sup> <a name="AccessKeyId" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.accessKeyId"></a>

```csharp
public string AccessKeyId { get; }
```

- *Type:* string

---

##### `SecretAccessKey`<sup>Required</sup> <a name="SecretAccessKey" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.secretAccessKey"></a>

```csharp
public string SecretAccessKey { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentialsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PipelineSinkConfigCredentials InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigCredentials">PipelineSinkConfigCredentials</a>

---


### PipelineSinkConfigFileNamingOutputReference <a name="PipelineSinkConfigFileNamingOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineSinkConfigFileNamingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resetPrefix">ResetPrefix</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resetStrategy">ResetStrategy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resetSuffix">ResetSuffix</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPrefix` <a name="ResetPrefix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resetPrefix"></a>

```csharp
private void ResetPrefix()
```

##### `ResetStrategy` <a name="ResetStrategy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resetStrategy"></a>

```csharp
private void ResetStrategy()
```

##### `ResetSuffix` <a name="ResetSuffix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.resetSuffix"></a>

```csharp
private void ResetSuffix()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.prefixInput">PrefixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.strategyInput">StrategyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.suffixInput">SuffixInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.prefix">Prefix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.strategy">Strategy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.suffix">Suffix</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `PrefixInput`<sup>Optional</sup> <a name="PrefixInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.prefixInput"></a>

```csharp
public string PrefixInput { get; }
```

- *Type:* string

---

##### `StrategyInput`<sup>Optional</sup> <a name="StrategyInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.strategyInput"></a>

```csharp
public string StrategyInput { get; }
```

- *Type:* string

---

##### `SuffixInput`<sup>Optional</sup> <a name="SuffixInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.suffixInput"></a>

```csharp
public string SuffixInput { get; }
```

- *Type:* string

---

##### `Prefix`<sup>Required</sup> <a name="Prefix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.prefix"></a>

```csharp
public string Prefix { get; }
```

- *Type:* string

---

##### `Strategy`<sup>Required</sup> <a name="Strategy" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.strategy"></a>

```csharp
public string Strategy { get; }
```

- *Type:* string

---

##### `Suffix`<sup>Required</sup> <a name="Suffix" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.suffix"></a>

```csharp
public string Suffix { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNamingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PipelineSinkConfigFileNaming InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigFileNaming">PipelineSinkConfigFileNaming</a>

---


### PipelineSinkConfigPartitioningOutputReference <a name="PipelineSinkConfigPartitioningOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineSinkConfigPartitioningOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.resetTimePattern">ResetTimePattern</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTimePattern` <a name="ResetTimePattern" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.resetTimePattern"></a>

```csharp
private void ResetTimePattern()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.timePatternInput">TimePatternInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.timePattern">TimePattern</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TimePatternInput`<sup>Optional</sup> <a name="TimePatternInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.timePatternInput"></a>

```csharp
public string TimePatternInput { get; }
```

- *Type:* string

---

##### `TimePattern`<sup>Required</sup> <a name="TimePattern" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.timePattern"></a>

```csharp
public string TimePattern { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioningOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PipelineSinkConfigPartitioning InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigPartitioning">PipelineSinkConfigPartitioning</a>

---


### PipelineSinkConfigRollingPolicyOutputReference <a name="PipelineSinkConfigRollingPolicyOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineSinkConfigRollingPolicyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resetFileSizeBytes">ResetFileSizeBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resetInactivitySeconds">ResetInactivitySeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resetIntervalSeconds">ResetIntervalSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFileSizeBytes` <a name="ResetFileSizeBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resetFileSizeBytes"></a>

```csharp
private void ResetFileSizeBytes()
```

##### `ResetInactivitySeconds` <a name="ResetInactivitySeconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resetInactivitySeconds"></a>

```csharp
private void ResetInactivitySeconds()
```

##### `ResetIntervalSeconds` <a name="ResetIntervalSeconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.resetIntervalSeconds"></a>

```csharp
private void ResetIntervalSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.fileSizeBytesInput">FileSizeBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.inactivitySecondsInput">InactivitySecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.fileSizeBytes">FileSizeBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.inactivitySeconds">InactivitySeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FileSizeBytesInput`<sup>Optional</sup> <a name="FileSizeBytesInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.fileSizeBytesInput"></a>

```csharp
public double FileSizeBytesInput { get; }
```

- *Type:* double

---

##### `InactivitySecondsInput`<sup>Optional</sup> <a name="InactivitySecondsInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.inactivitySecondsInput"></a>

```csharp
public double InactivitySecondsInput { get; }
```

- *Type:* double

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.intervalSecondsInput"></a>

```csharp
public double IntervalSecondsInput { get; }
```

- *Type:* double

---

##### `FileSizeBytes`<sup>Required</sup> <a name="FileSizeBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.fileSizeBytes"></a>

```csharp
public double FileSizeBytes { get; }
```

- *Type:* double

---

##### `InactivitySeconds`<sup>Required</sup> <a name="InactivitySeconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.inactivitySeconds"></a>

```csharp
public double InactivitySeconds { get; }
```

- *Type:* double

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.intervalSeconds"></a>

```csharp
public double IntervalSeconds { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PipelineSinkConfigRollingPolicy InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkConfigRollingPolicy">PipelineSinkConfigRollingPolicy</a>

---


### PipelineSinkFormatOutputReference <a name="PipelineSinkFormatOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineSinkFormatOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetDecimalEncoding">ResetDecimalEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetRowGroupBytes">ResetRowGroupBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetTimestampFormat">ResetTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetUnstructured">ResetUnstructured</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompression` <a name="ResetCompression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetCompression"></a>

```csharp
private void ResetCompression()
```

##### `ResetDecimalEncoding` <a name="ResetDecimalEncoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetDecimalEncoding"></a>

```csharp
private void ResetDecimalEncoding()
```

##### `ResetRowGroupBytes` <a name="ResetRowGroupBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetRowGroupBytes"></a>

```csharp
private void ResetRowGroupBytes()
```

##### `ResetTimestampFormat` <a name="ResetTimestampFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetTimestampFormat"></a>

```csharp
private void ResetTimestampFormat()
```

##### `ResetUnstructured` <a name="ResetUnstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.resetUnstructured"></a>

```csharp
private void ResetUnstructured()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.compressionInput">CompressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.decimalEncodingInput">DecimalEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.rowGroupBytesInput">RowGroupBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.timestampFormatInput">TimestampFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.unstructuredInput">UnstructuredInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.compression">Compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.decimalEncoding">DecimalEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.rowGroupBytes">RowGroupBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.unstructured">Unstructured</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.compressionInput"></a>

```csharp
public string CompressionInput { get; }
```

- *Type:* string

---

##### `DecimalEncodingInput`<sup>Optional</sup> <a name="DecimalEncodingInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.decimalEncodingInput"></a>

```csharp
public string DecimalEncodingInput { get; }
```

- *Type:* string

---

##### `RowGroupBytesInput`<sup>Optional</sup> <a name="RowGroupBytesInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.rowGroupBytesInput"></a>

```csharp
public double RowGroupBytesInput { get; }
```

- *Type:* double

---

##### `TimestampFormatInput`<sup>Optional</sup> <a name="TimestampFormatInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.timestampFormatInput"></a>

```csharp
public string TimestampFormatInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UnstructuredInput`<sup>Optional</sup> <a name="UnstructuredInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.unstructuredInput"></a>

```csharp
public bool|IResolvable UnstructuredInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.compression"></a>

```csharp
public string Compression { get; }
```

- *Type:* string

---

##### `DecimalEncoding`<sup>Required</sup> <a name="DecimalEncoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.decimalEncoding"></a>

```csharp
public string DecimalEncoding { get; }
```

- *Type:* string

---

##### `RowGroupBytes`<sup>Required</sup> <a name="RowGroupBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.rowGroupBytes"></a>

```csharp
public double RowGroupBytes { get; }
```

- *Type:* double

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.timestampFormat"></a>

```csharp
public string TimestampFormat { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Unstructured`<sup>Required</sup> <a name="Unstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.unstructured"></a>

```csharp
public bool|IResolvable Unstructured { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormatOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PipelineSinkFormat InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkFormat">PipelineSinkFormat</a>

---


### PipelineSinkSchemaFieldsList <a name="PipelineSinkSchemaFieldsList" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineSinkSchemaFieldsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.get"></a>

```csharp
private PipelineSinkSchemaFieldsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList.property.internalValue"></a>

```csharp
public IResolvable|PipelineSinkSchemaFields[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>[]

---


### PipelineSinkSchemaFieldsOutputReference <a name="PipelineSinkSchemaFieldsOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineSinkSchemaFieldsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetMetadataKey">ResetMetadataKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetRequired">ResetRequired</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetSqlName">ResetSqlName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetUnit">ResetUnit</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMetadataKey` <a name="ResetMetadataKey" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetMetadataKey"></a>

```csharp
private void ResetMetadataKey()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetRequired` <a name="ResetRequired" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetRequired"></a>

```csharp
private void ResetRequired()
```

##### `ResetSqlName` <a name="ResetSqlName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetSqlName"></a>

```csharp
private void ResetSqlName()
```

##### `ResetUnit` <a name="ResetUnit" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.resetUnit"></a>

```csharp
private void ResetUnit()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.metadataKeyInput">MetadataKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.requiredInput">RequiredInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.sqlNameInput">SqlNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.unitInput">UnitInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.metadataKey">MetadataKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.required">Required</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.sqlName">SqlName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.unit">Unit</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `MetadataKeyInput`<sup>Optional</sup> <a name="MetadataKeyInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.metadataKeyInput"></a>

```csharp
public string MetadataKeyInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `RequiredInput`<sup>Optional</sup> <a name="RequiredInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.requiredInput"></a>

```csharp
public bool|IResolvable RequiredInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SqlNameInput`<sup>Optional</sup> <a name="SqlNameInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.sqlNameInput"></a>

```csharp
public string SqlNameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UnitInput`<sup>Optional</sup> <a name="UnitInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.unitInput"></a>

```csharp
public string UnitInput { get; }
```

- *Type:* string

---

##### `MetadataKey`<sup>Required</sup> <a name="MetadataKey" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.metadataKey"></a>

```csharp
public string MetadataKey { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Required`<sup>Required</sup> <a name="Required" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.required"></a>

```csharp
public bool|IResolvable Required { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SqlName`<sup>Required</sup> <a name="SqlName" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.sqlName"></a>

```csharp
public string SqlName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Unit`<sup>Required</sup> <a name="Unit" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.unit"></a>

```csharp
public string Unit { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PipelineSinkSchemaFields InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>

---


### PipelineSinkSchemaFormatOutputReference <a name="PipelineSinkSchemaFormatOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineSinkSchemaFormatOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetCompression">ResetCompression</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetDecimalEncoding">ResetDecimalEncoding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetRowGroupBytes">ResetRowGroupBytes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetTimestampFormat">ResetTimestampFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetUnstructured">ResetUnstructured</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCompression` <a name="ResetCompression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetCompression"></a>

```csharp
private void ResetCompression()
```

##### `ResetDecimalEncoding` <a name="ResetDecimalEncoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetDecimalEncoding"></a>

```csharp
private void ResetDecimalEncoding()
```

##### `ResetRowGroupBytes` <a name="ResetRowGroupBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetRowGroupBytes"></a>

```csharp
private void ResetRowGroupBytes()
```

##### `ResetTimestampFormat` <a name="ResetTimestampFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetTimestampFormat"></a>

```csharp
private void ResetTimestampFormat()
```

##### `ResetUnstructured` <a name="ResetUnstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.resetUnstructured"></a>

```csharp
private void ResetUnstructured()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.compressionInput">CompressionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.decimalEncodingInput">DecimalEncodingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.rowGroupBytesInput">RowGroupBytesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.timestampFormatInput">TimestampFormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.unstructuredInput">UnstructuredInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.compression">Compression</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.decimalEncoding">DecimalEncoding</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.rowGroupBytes">RowGroupBytes</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.timestampFormat">TimestampFormat</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.unstructured">Unstructured</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CompressionInput`<sup>Optional</sup> <a name="CompressionInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.compressionInput"></a>

```csharp
public string CompressionInput { get; }
```

- *Type:* string

---

##### `DecimalEncodingInput`<sup>Optional</sup> <a name="DecimalEncodingInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.decimalEncodingInput"></a>

```csharp
public string DecimalEncodingInput { get; }
```

- *Type:* string

---

##### `RowGroupBytesInput`<sup>Optional</sup> <a name="RowGroupBytesInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.rowGroupBytesInput"></a>

```csharp
public double RowGroupBytesInput { get; }
```

- *Type:* double

---

##### `TimestampFormatInput`<sup>Optional</sup> <a name="TimestampFormatInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.timestampFormatInput"></a>

```csharp
public string TimestampFormatInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UnstructuredInput`<sup>Optional</sup> <a name="UnstructuredInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.unstructuredInput"></a>

```csharp
public bool|IResolvable UnstructuredInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Compression`<sup>Required</sup> <a name="Compression" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.compression"></a>

```csharp
public string Compression { get; }
```

- *Type:* string

---

##### `DecimalEncoding`<sup>Required</sup> <a name="DecimalEncoding" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.decimalEncoding"></a>

```csharp
public string DecimalEncoding { get; }
```

- *Type:* string

---

##### `RowGroupBytes`<sup>Required</sup> <a name="RowGroupBytes" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.rowGroupBytes"></a>

```csharp
public double RowGroupBytes { get; }
```

- *Type:* double

---

##### `TimestampFormat`<sup>Required</sup> <a name="TimestampFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.timestampFormat"></a>

```csharp
public string TimestampFormat { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Unstructured`<sup>Required</sup> <a name="Unstructured" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.unstructured"></a>

```csharp
public bool|IResolvable Unstructured { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PipelineSinkSchemaFormat InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a>

---


### PipelineSinkSchemaOutputReference <a name="PipelineSinkSchemaOutputReference" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new PipelineSinkSchemaOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFields">PutFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFormat">PutFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resetFields">ResetFields</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resetInferred">ResetInferred</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutFields` <a name="PutFields" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFields"></a>

```csharp
private void PutFields(IResolvable|PipelineSinkSchemaFields[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFields.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>[]

---

##### `PutFormat` <a name="PutFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFormat"></a>

```csharp
private void PutFormat(PipelineSinkSchemaFormat Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.putFormat.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a>

---

##### `ResetFields` <a name="ResetFields" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resetFields"></a>

```csharp
private void ResetFields()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resetFormat"></a>

```csharp
private void ResetFormat()
```

##### `ResetInferred` <a name="ResetInferred" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.resetInferred"></a>

```csharp
private void ResetInferred()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.fields">Fields</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList">PipelineSinkSchemaFieldsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.format">Format</a></code> | <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference">PipelineSinkSchemaFormatOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.fieldsInput">FieldsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.formatInput">FormatInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.inferredInput">InferredInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.inferred">Inferred</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Fields`<sup>Required</sup> <a name="Fields" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.fields"></a>

```csharp
public PipelineSinkSchemaFieldsList Fields { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFieldsList">PipelineSinkSchemaFieldsList</a>

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.format"></a>

```csharp
public PipelineSinkSchemaFormatOutputReference Format { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormatOutputReference">PipelineSinkSchemaFormatOutputReference</a>

---

##### `FieldsInput`<sup>Optional</sup> <a name="FieldsInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.fieldsInput"></a>

```csharp
public IResolvable|PipelineSinkSchemaFields[] FieldsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFields">PipelineSinkSchemaFields</a>[]

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.formatInput"></a>

```csharp
public IResolvable|PipelineSinkSchemaFormat FormatInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaFormat">PipelineSinkSchemaFormat</a>

---

##### `InferredInput`<sup>Optional</sup> <a name="InferredInput" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.inferredInput"></a>

```csharp
public bool|IResolvable InferredInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Inferred`<sup>Required</sup> <a name="Inferred" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.inferred"></a>

```csharp
public bool|IResolvable Inferred { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchemaOutputReference.property.internalValue"></a>

```csharp
public IResolvable|PipelineSinkSchema InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.pipelineSink.PipelineSinkSchema">PipelineSinkSchema</a>

---



