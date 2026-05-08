# `workersScript` Submodule <a name="`workersScript` Submodule" id="@cdktn/provider-cloudflare.workersScript"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WorkersScript <a name="WorkersScript" id="@cdktn/provider-cloudflare.workersScript.WorkersScript"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script cloudflare_workers_script}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScript(Construct Scope, string Id, WorkersScriptConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig">WorkersScriptConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig">WorkersScriptConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.putAnnotations">PutAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.putAssets">PutAssets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.putBindings">PutBindings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.putLimits">PutLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.putMigrations">PutMigrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.putObservability">PutObservability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.putPlacement">PutPlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.putTailConsumers">PutTailConsumers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.resetAnnotations">ResetAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.resetAssets">ResetAssets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.resetBindings">ResetBindings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.resetBodyPart">ResetBodyPart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.resetCompatibilityDate">ResetCompatibilityDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.resetCompatibilityFlags">ResetCompatibilityFlags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.resetContentFile">ResetContentFile</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.resetContentSha256">ResetContentSha256</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.resetKeepAssets">ResetKeepAssets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.resetKeepBindings">ResetKeepBindings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.resetLimits">ResetLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.resetLogpush">ResetLogpush</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.resetMainModule">ResetMainModule</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.resetMigrations">ResetMigrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.resetObservability">ResetObservability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.resetPlacement">ResetPlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.resetTailConsumers">ResetTailConsumers</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.resetUsageModel">ResetUsageModel</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAnnotations` <a name="PutAnnotations" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.putAnnotations"></a>

```csharp
private void PutAnnotations(WorkersScriptAnnotations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.putAnnotations.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotations">WorkersScriptAnnotations</a>

---

##### `PutAssets` <a name="PutAssets" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.putAssets"></a>

```csharp
private void PutAssets(WorkersScriptAssets Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.putAssets.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssets">WorkersScriptAssets</a>

---

##### `PutBindings` <a name="PutBindings" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.putBindings"></a>

```csharp
private void PutBindings(IResolvable|WorkersScriptBindings[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.putBindings.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a>[]

---

##### `PutLimits` <a name="PutLimits" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.putLimits"></a>

```csharp
private void PutLimits(WorkersScriptLimits Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.putLimits.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimits">WorkersScriptLimits</a>

---

##### `PutMigrations` <a name="PutMigrations" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.putMigrations"></a>

```csharp
private void PutMigrations(WorkersScriptMigrations Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.putMigrations.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrations">WorkersScriptMigrations</a>

---

##### `PutObservability` <a name="PutObservability" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.putObservability"></a>

```csharp
private void PutObservability(WorkersScriptObservability Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.putObservability.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservability">WorkersScriptObservability</a>

---

##### `PutPlacement` <a name="PutPlacement" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.putPlacement"></a>

```csharp
private void PutPlacement(WorkersScriptPlacement Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.putPlacement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a>

---

##### `PutTailConsumers` <a name="PutTailConsumers" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.putTailConsumers"></a>

```csharp
private void PutTailConsumers(IResolvable|WorkersScriptTailConsumers[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.putTailConsumers.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a>[]

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetAnnotations` <a name="ResetAnnotations" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.resetAnnotations"></a>

```csharp
private void ResetAnnotations()
```

##### `ResetAssets` <a name="ResetAssets" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.resetAssets"></a>

```csharp
private void ResetAssets()
```

##### `ResetBindings` <a name="ResetBindings" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.resetBindings"></a>

```csharp
private void ResetBindings()
```

##### `ResetBodyPart` <a name="ResetBodyPart" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.resetBodyPart"></a>

```csharp
private void ResetBodyPart()
```

##### `ResetCompatibilityDate` <a name="ResetCompatibilityDate" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.resetCompatibilityDate"></a>

```csharp
private void ResetCompatibilityDate()
```

##### `ResetCompatibilityFlags` <a name="ResetCompatibilityFlags" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.resetCompatibilityFlags"></a>

```csharp
private void ResetCompatibilityFlags()
```

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.resetContent"></a>

```csharp
private void ResetContent()
```

##### `ResetContentFile` <a name="ResetContentFile" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.resetContentFile"></a>

```csharp
private void ResetContentFile()
```

##### `ResetContentSha256` <a name="ResetContentSha256" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.resetContentSha256"></a>

```csharp
private void ResetContentSha256()
```

##### `ResetContentType` <a name="ResetContentType" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.resetContentType"></a>

```csharp
private void ResetContentType()
```

##### `ResetKeepAssets` <a name="ResetKeepAssets" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.resetKeepAssets"></a>

```csharp
private void ResetKeepAssets()
```

##### `ResetKeepBindings` <a name="ResetKeepBindings" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.resetKeepBindings"></a>

```csharp
private void ResetKeepBindings()
```

##### `ResetLimits` <a name="ResetLimits" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.resetLimits"></a>

```csharp
private void ResetLimits()
```

##### `ResetLogpush` <a name="ResetLogpush" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.resetLogpush"></a>

```csharp
private void ResetLogpush()
```

##### `ResetMainModule` <a name="ResetMainModule" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.resetMainModule"></a>

```csharp
private void ResetMainModule()
```

##### `ResetMigrations` <a name="ResetMigrations" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.resetMigrations"></a>

```csharp
private void ResetMigrations()
```

##### `ResetObservability` <a name="ResetObservability" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.resetObservability"></a>

```csharp
private void ResetObservability()
```

##### `ResetPlacement` <a name="ResetPlacement" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.resetPlacement"></a>

```csharp
private void ResetPlacement()
```

##### `ResetTailConsumers` <a name="ResetTailConsumers" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.resetTailConsumers"></a>

```csharp
private void ResetTailConsumers()
```

##### `ResetUsageModel` <a name="ResetUsageModel" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.resetUsageModel"></a>

```csharp
private void ResetUsageModel()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WorkersScript resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

WorkersScript.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

WorkersScript.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

WorkersScript.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

WorkersScript.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a WorkersScript resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the WorkersScript to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing WorkersScript that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the WorkersScript to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.annotations">Annotations</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference">WorkersScriptAnnotationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.assets">Assets</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference">WorkersScriptAssetsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.bindings">Bindings</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsList">WorkersScriptBindingsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.etag">Etag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.handlers">Handlers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.hasAssets">HasAssets</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.hasModules">HasModules</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.lastDeployedFrom">LastDeployedFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.limits">Limits</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference">WorkersScriptLimitsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.migrations">Migrations</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference">WorkersScriptMigrationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.migrationTag">MigrationTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.namedHandlers">NamedHandlers</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList">WorkersScriptNamedHandlersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.observability">Observability</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference">WorkersScriptObservabilityOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.placement">Placement</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference">WorkersScriptPlacementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.placementMode">PlacementMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.placementStatus">PlacementStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.startupTimeMs">StartupTimeMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.tailConsumers">TailConsumers</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersList">WorkersScriptTailConsumersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.annotationsInput">AnnotationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotations">WorkersScriptAnnotations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.assetsInput">AssetsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssets">WorkersScriptAssets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.bindingsInput">BindingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.bodyPartInput">BodyPartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.compatibilityDateInput">CompatibilityDateInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.compatibilityFlagsInput">CompatibilityFlagsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.contentFileInput">ContentFileInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.contentInput">ContentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.contentSha256Input">ContentSha256Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.contentTypeInput">ContentTypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.keepAssetsInput">KeepAssetsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.keepBindingsInput">KeepBindingsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.limitsInput">LimitsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimits">WorkersScriptLimits</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.logpushInput">LogpushInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.mainModuleInput">MainModuleInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.migrationsInput">MigrationsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrations">WorkersScriptMigrations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.observabilityInput">ObservabilityInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservability">WorkersScriptObservability</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.placementInput">PlacementInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.scriptNameInput">ScriptNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.tailConsumersInput">TailConsumersInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.usageModelInput">UsageModelInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.bodyPart">BodyPart</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.compatibilityDate">CompatibilityDate</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.compatibilityFlags">CompatibilityFlags</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.content">Content</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.contentFile">ContentFile</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.contentSha256">ContentSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.contentType">ContentType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.keepAssets">KeepAssets</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.keepBindings">KeepBindings</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.logpush">Logpush</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.mainModule">MainModule</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.scriptName">ScriptName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.usageModel">UsageModel</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Annotations`<sup>Required</sup> <a name="Annotations" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.annotations"></a>

```csharp
public WorkersScriptAnnotationsOutputReference Annotations { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference">WorkersScriptAnnotationsOutputReference</a>

---

##### `Assets`<sup>Required</sup> <a name="Assets" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.assets"></a>

```csharp
public WorkersScriptAssetsOutputReference Assets { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference">WorkersScriptAssetsOutputReference</a>

---

##### `Bindings`<sup>Required</sup> <a name="Bindings" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.bindings"></a>

```csharp
public WorkersScriptBindingsList Bindings { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsList">WorkersScriptBindingsList</a>

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Etag`<sup>Required</sup> <a name="Etag" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.etag"></a>

```csharp
public string Etag { get; }
```

- *Type:* string

---

##### `Handlers`<sup>Required</sup> <a name="Handlers" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.handlers"></a>

```csharp
public string[] Handlers { get; }
```

- *Type:* string[]

---

##### `HasAssets`<sup>Required</sup> <a name="HasAssets" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.hasAssets"></a>

```csharp
public IResolvable HasAssets { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `HasModules`<sup>Required</sup> <a name="HasModules" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.hasModules"></a>

```csharp
public IResolvable HasModules { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `LastDeployedFrom`<sup>Required</sup> <a name="LastDeployedFrom" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.lastDeployedFrom"></a>

```csharp
public string LastDeployedFrom { get; }
```

- *Type:* string

---

##### `Limits`<sup>Required</sup> <a name="Limits" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.limits"></a>

```csharp
public WorkersScriptLimitsOutputReference Limits { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference">WorkersScriptLimitsOutputReference</a>

---

##### `Migrations`<sup>Required</sup> <a name="Migrations" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.migrations"></a>

```csharp
public WorkersScriptMigrationsOutputReference Migrations { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference">WorkersScriptMigrationsOutputReference</a>

---

##### `MigrationTag`<sup>Required</sup> <a name="MigrationTag" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.migrationTag"></a>

```csharp
public string MigrationTag { get; }
```

- *Type:* string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; }
```

- *Type:* string

---

##### `NamedHandlers`<sup>Required</sup> <a name="NamedHandlers" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.namedHandlers"></a>

```csharp
public WorkersScriptNamedHandlersList NamedHandlers { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList">WorkersScriptNamedHandlersList</a>

---

##### `Observability`<sup>Required</sup> <a name="Observability" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.observability"></a>

```csharp
public WorkersScriptObservabilityOutputReference Observability { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference">WorkersScriptObservabilityOutputReference</a>

---

##### `Placement`<sup>Required</sup> <a name="Placement" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.placement"></a>

```csharp
public WorkersScriptPlacementOutputReference Placement { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference">WorkersScriptPlacementOutputReference</a>

---

##### `PlacementMode`<sup>Required</sup> <a name="PlacementMode" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.placementMode"></a>

```csharp
public string PlacementMode { get; }
```

- *Type:* string

---

##### `PlacementStatus`<sup>Required</sup> <a name="PlacementStatus" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.placementStatus"></a>

```csharp
public string PlacementStatus { get; }
```

- *Type:* string

---

##### `StartupTimeMs`<sup>Required</sup> <a name="StartupTimeMs" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.startupTimeMs"></a>

```csharp
public double StartupTimeMs { get; }
```

- *Type:* double

---

##### `TailConsumers`<sup>Required</sup> <a name="TailConsumers" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.tailConsumers"></a>

```csharp
public WorkersScriptTailConsumersList TailConsumers { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersList">WorkersScriptTailConsumersList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AnnotationsInput`<sup>Optional</sup> <a name="AnnotationsInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.annotationsInput"></a>

```csharp
public IResolvable|WorkersScriptAnnotations AnnotationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotations">WorkersScriptAnnotations</a>

---

##### `AssetsInput`<sup>Optional</sup> <a name="AssetsInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.assetsInput"></a>

```csharp
public IResolvable|WorkersScriptAssets AssetsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssets">WorkersScriptAssets</a>

---

##### `BindingsInput`<sup>Optional</sup> <a name="BindingsInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.bindingsInput"></a>

```csharp
public IResolvable|WorkersScriptBindings[] BindingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a>[]

---

##### `BodyPartInput`<sup>Optional</sup> <a name="BodyPartInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.bodyPartInput"></a>

```csharp
public string BodyPartInput { get; }
```

- *Type:* string

---

##### `CompatibilityDateInput`<sup>Optional</sup> <a name="CompatibilityDateInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.compatibilityDateInput"></a>

```csharp
public string CompatibilityDateInput { get; }
```

- *Type:* string

---

##### `CompatibilityFlagsInput`<sup>Optional</sup> <a name="CompatibilityFlagsInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.compatibilityFlagsInput"></a>

```csharp
public string[] CompatibilityFlagsInput { get; }
```

- *Type:* string[]

---

##### `ContentFileInput`<sup>Optional</sup> <a name="ContentFileInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.contentFileInput"></a>

```csharp
public string ContentFileInput { get; }
```

- *Type:* string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.contentInput"></a>

```csharp
public string ContentInput { get; }
```

- *Type:* string

---

##### `ContentSha256Input`<sup>Optional</sup> <a name="ContentSha256Input" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.contentSha256Input"></a>

```csharp
public string ContentSha256Input { get; }
```

- *Type:* string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.contentTypeInput"></a>

```csharp
public string ContentTypeInput { get; }
```

- *Type:* string

---

##### `KeepAssetsInput`<sup>Optional</sup> <a name="KeepAssetsInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.keepAssetsInput"></a>

```csharp
public bool|IResolvable KeepAssetsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KeepBindingsInput`<sup>Optional</sup> <a name="KeepBindingsInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.keepBindingsInput"></a>

```csharp
public string[] KeepBindingsInput { get; }
```

- *Type:* string[]

---

##### `LimitsInput`<sup>Optional</sup> <a name="LimitsInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.limitsInput"></a>

```csharp
public IResolvable|WorkersScriptLimits LimitsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimits">WorkersScriptLimits</a>

---

##### `LogpushInput`<sup>Optional</sup> <a name="LogpushInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.logpushInput"></a>

```csharp
public bool|IResolvable LogpushInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MainModuleInput`<sup>Optional</sup> <a name="MainModuleInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.mainModuleInput"></a>

```csharp
public string MainModuleInput { get; }
```

- *Type:* string

---

##### `MigrationsInput`<sup>Optional</sup> <a name="MigrationsInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.migrationsInput"></a>

```csharp
public IResolvable|WorkersScriptMigrations MigrationsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrations">WorkersScriptMigrations</a>

---

##### `ObservabilityInput`<sup>Optional</sup> <a name="ObservabilityInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.observabilityInput"></a>

```csharp
public IResolvable|WorkersScriptObservability ObservabilityInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservability">WorkersScriptObservability</a>

---

##### `PlacementInput`<sup>Optional</sup> <a name="PlacementInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.placementInput"></a>

```csharp
public IResolvable|WorkersScriptPlacement PlacementInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a>

---

##### `ScriptNameInput`<sup>Optional</sup> <a name="ScriptNameInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.scriptNameInput"></a>

```csharp
public string ScriptNameInput { get; }
```

- *Type:* string

---

##### `TailConsumersInput`<sup>Optional</sup> <a name="TailConsumersInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.tailConsumersInput"></a>

```csharp
public IResolvable|WorkersScriptTailConsumers[] TailConsumersInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a>[]

---

##### `UsageModelInput`<sup>Optional</sup> <a name="UsageModelInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.usageModelInput"></a>

```csharp
public string UsageModelInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `BodyPart`<sup>Required</sup> <a name="BodyPart" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.bodyPart"></a>

```csharp
public string BodyPart { get; }
```

- *Type:* string

---

##### `CompatibilityDate`<sup>Required</sup> <a name="CompatibilityDate" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.compatibilityDate"></a>

```csharp
public string CompatibilityDate { get; }
```

- *Type:* string

---

##### `CompatibilityFlags`<sup>Required</sup> <a name="CompatibilityFlags" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.compatibilityFlags"></a>

```csharp
public string[] CompatibilityFlags { get; }
```

- *Type:* string[]

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.content"></a>

```csharp
public string Content { get; }
```

- *Type:* string

---

##### `ContentFile`<sup>Required</sup> <a name="ContentFile" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.contentFile"></a>

```csharp
public string ContentFile { get; }
```

- *Type:* string

---

##### `ContentSha256`<sup>Required</sup> <a name="ContentSha256" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.contentSha256"></a>

```csharp
public string ContentSha256 { get; }
```

- *Type:* string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.contentType"></a>

```csharp
public string ContentType { get; }
```

- *Type:* string

---

##### `KeepAssets`<sup>Required</sup> <a name="KeepAssets" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.keepAssets"></a>

```csharp
public bool|IResolvable KeepAssets { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `KeepBindings`<sup>Required</sup> <a name="KeepBindings" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.keepBindings"></a>

```csharp
public string[] KeepBindings { get; }
```

- *Type:* string[]

---

##### `Logpush`<sup>Required</sup> <a name="Logpush" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.logpush"></a>

```csharp
public bool|IResolvable Logpush { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MainModule`<sup>Required</sup> <a name="MainModule" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.mainModule"></a>

```csharp
public string MainModule { get; }
```

- *Type:* string

---

##### `ScriptName`<sup>Required</sup> <a name="ScriptName" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.scriptName"></a>

```csharp
public string ScriptName { get; }
```

- *Type:* string

---

##### `UsageModel`<sup>Required</sup> <a name="UsageModel" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.usageModel"></a>

```csharp
public string UsageModel { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScript.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.workersScript.WorkersScript.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### WorkersScriptAnnotations <a name="WorkersScriptAnnotations" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptAnnotations {
    string WorkersMessage = null,
    string WorkersTag = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotations.property.workersMessage">WorkersMessage</a></code> | <code>string</code> | Human-readable message about the version. Truncated to 1000 bytes if longer. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotations.property.workersTag">WorkersTag</a></code> | <code>string</code> | User-provided identifier for the version. Maximum 100 bytes. |

---

##### `WorkersMessage`<sup>Optional</sup> <a name="WorkersMessage" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotations.property.workersMessage"></a>

```csharp
public string WorkersMessage { get; set; }
```

- *Type:* string

Human-readable message about the version. Truncated to 1000 bytes if longer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#workers_message WorkersScript#workers_message}

---

##### `WorkersTag`<sup>Optional</sup> <a name="WorkersTag" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotations.property.workersTag"></a>

```csharp
public string WorkersTag { get; set; }
```

- *Type:* string

User-provided identifier for the version. Maximum 100 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#workers_tag WorkersScript#workers_tag}

---

### WorkersScriptAssets <a name="WorkersScriptAssets" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssets.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptAssets {
    WorkersScriptAssetsConfig Config = null,
    string Directory = null,
    string Jwt = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssets.property.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfig">WorkersScriptAssetsConfig</a></code> | Configuration for assets within a Worker. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssets.property.directory">Directory</a></code> | <code>string</code> | Path to the directory containing asset files to upload. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssets.property.jwt">Jwt</a></code> | <code>string</code> | Token provided upon successful upload of all files from a registered manifest. |

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssets.property.config"></a>

```csharp
public WorkersScriptAssetsConfig Config { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfig">WorkersScriptAssetsConfig</a>

Configuration for assets within a Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#config WorkersScript#config}

---

##### `Directory`<sup>Optional</sup> <a name="Directory" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssets.property.directory"></a>

```csharp
public string Directory { get; set; }
```

- *Type:* string

Path to the directory containing asset files to upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#directory WorkersScript#directory}

---

##### `Jwt`<sup>Optional</sup> <a name="Jwt" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssets.property.jwt"></a>

```csharp
public string Jwt { get; set; }
```

- *Type:* string

Token provided upon successful upload of all files from a registered manifest.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#jwt WorkersScript#jwt}

---

### WorkersScriptAssetsConfig <a name="WorkersScriptAssetsConfig" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptAssetsConfig {
    string Headers = null,
    string HtmlHandling = null,
    string NotFoundHandling = null,
    string Redirects = null,
    System.Collections.Generic.IDictionary<string, object> RunWorkerFirst = null,
    bool|IResolvable ServeDirectly = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.headers">Headers</a></code> | <code>string</code> | The contents of a _headers file (used to attach custom headers on asset responses). |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.htmlHandling">HtmlHandling</a></code> | <code>string</code> | Determines the redirects and rewrites of requests for HTML content. Available values: "auto-trailing-slash", "force-trailing-slash", "drop-trailing-slash", "none". |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.notFoundHandling">NotFoundHandling</a></code> | <code>string</code> | Determines the response when a request does not match a static asset, and there is no Worker script. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.redirects">Redirects</a></code> | <code>string</code> | The contents of a _redirects file (used to apply redirects or proxy paths ahead of asset serving). |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.runWorkerFirst">RunWorkerFirst</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | When a boolean true, requests will always invoke the Worker script. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.serveDirectly">ServeDirectly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When true and the incoming request matches an asset, that will be served instead of invoking the Worker script. |

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.headers"></a>

```csharp
public string Headers { get; set; }
```

- *Type:* string

The contents of a _headers file (used to attach custom headers on asset responses).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#headers WorkersScript#headers}

---

##### `HtmlHandling`<sup>Optional</sup> <a name="HtmlHandling" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.htmlHandling"></a>

```csharp
public string HtmlHandling { get; set; }
```

- *Type:* string

Determines the redirects and rewrites of requests for HTML content. Available values: "auto-trailing-slash", "force-trailing-slash", "drop-trailing-slash", "none".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#html_handling WorkersScript#html_handling}

---

##### `NotFoundHandling`<sup>Optional</sup> <a name="NotFoundHandling" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.notFoundHandling"></a>

```csharp
public string NotFoundHandling { get; set; }
```

- *Type:* string

Determines the response when a request does not match a static asset, and there is no Worker script.

Available values: "none", "404-page", "single-page-application".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#not_found_handling WorkersScript#not_found_handling}

---

##### `Redirects`<sup>Optional</sup> <a name="Redirects" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.redirects"></a>

```csharp
public string Redirects { get; set; }
```

- *Type:* string

The contents of a _redirects file (used to apply redirects or proxy paths ahead of asset serving).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#redirects WorkersScript#redirects}

---

##### `RunWorkerFirst`<sup>Optional</sup> <a name="RunWorkerFirst" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.runWorkerFirst"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> RunWorkerFirst { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

When a boolean true, requests will always invoke the Worker script.

Otherwise, attempt to serve an asset matching the request, falling back to the Worker script. When a list of strings, contains path rules to control routing to either the Worker or assets. Glob (*) and negative (!) rules are supported. Rules must start with either '/' or '!/'. At least one non-negative rule must be provided, and negative rules have higher precedence than non-negative rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#run_worker_first WorkersScript#run_worker_first}

---

##### `ServeDirectly`<sup>Optional</sup> <a name="ServeDirectly" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfig.property.serveDirectly"></a>

```csharp
public bool|IResolvable ServeDirectly { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When true and the incoming request matches an asset, that will be served instead of invoking the Worker script.

When false, requests will always invoke the Worker script.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#serve_directly WorkersScript#serve_directly}

---

### WorkersScriptBindings <a name="WorkersScriptBindings" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptBindings {
    string Name,
    string Type,
    string Algorithm = null,
    string[] AllowedDestinationAddresses = null,
    string[] AllowedSenderAddresses = null,
    string AppId = null,
    string BucketName = null,
    string CertificateId = null,
    string ClassName = null,
    string DatabaseId = null,
    string Dataset = null,
    string DestinationAddress = null,
    string DispatchNamespace = null,
    string Entrypoint = null,
    string Environment = null,
    string Format = null,
    string Id = null,
    string IndexName = null,
    string InstanceName = null,
    string Json = null,
    string Jurisdiction = null,
    string KeyBase64 = null,
    string KeyJwk = null,
    string Namespace = null,
    string NamespaceId = null,
    string NetworkId = null,
    string OldName = null,
    WorkersScriptBindingsOutbound Outbound = null,
    string Part = null,
    string Pipeline = null,
    string QueueName = null,
    string ScriptName = null,
    string SecretName = null,
    string Service = null,
    string ServiceId = null,
    WorkersScriptBindingsSimple Simple = null,
    string StoreId = null,
    string Text = null,
    string TunnelId = null,
    string[] Usages = null,
    string VersionId = null,
    string WorkflowName = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.name">Name</a></code> | <code>string</code> | A JavaScript variable name for the binding. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.type">Type</a></code> | <code>string</code> | The kind of resource that the binding provides. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.algorithm">Algorithm</a></code> | <code>string</code> | Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm). |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.allowedDestinationAddresses">AllowedDestinationAddresses</a></code> | <code>string[]</code> | List of allowed destination addresses. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.allowedSenderAddresses">AllowedSenderAddresses</a></code> | <code>string[]</code> | List of allowed sender addresses. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.appId">AppId</a></code> | <code>string</code> | ID of the Flagship app to bind to for feature flag evaluation. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.bucketName">BucketName</a></code> | <code>string</code> | R2 bucket to bind to. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.certificateId">CertificateId</a></code> | <code>string</code> | Identifier of the certificate to bind to. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.className">ClassName</a></code> | <code>string</code> | The exported class name of the Durable Object. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.databaseId">DatabaseId</a></code> | <code>string</code> | Identifier of the D1 database to bind to. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.dataset">Dataset</a></code> | <code>string</code> | The name of the dataset to bind to. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.destinationAddress">DestinationAddress</a></code> | <code>string</code> | Destination address for the email. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.dispatchNamespace">DispatchNamespace</a></code> | <code>string</code> | The dispatch namespace the Durable Object script belongs to. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.entrypoint">Entrypoint</a></code> | <code>string</code> | Entrypoint to invoke on the target Worker. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.environment">Environment</a></code> | <code>string</code> | The environment of the script_name to bind to. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.format">Format</a></code> | <code>string</code> | Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format). Available values: "raw", "pkcs8", "spki", "jwk". |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.id">Id</a></code> | <code>string</code> | Identifier of the D1 database to bind to. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.indexName">IndexName</a></code> | <code>string</code> | Name of the Vectorize index to bind to. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.instanceName">InstanceName</a></code> | <code>string</code> | The user-chosen instance name. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.json">Json</a></code> | <code>string</code> | JSON data to use. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.jurisdiction">Jurisdiction</a></code> | <code>string</code> | The [jurisdiction](https://developers.cloudflare.com/r2/reference/data-location/#jurisdictional-restrictions) of the R2 bucket. Available values: "eu", "fedramp", "fedramp-high". |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.keyBase64">KeyBase64</a></code> | <code>string</code> | Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki". |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.keyJwk">KeyJwk</a></code> | <code>string</code> | Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk". |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.namespace">Namespace</a></code> | <code>string</code> | The namespace the instance belongs to. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.namespaceId">NamespaceId</a></code> | <code>string</code> | Namespace identifier tag. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.networkId">NetworkId</a></code> | <code>string</code> | Identifier of the network to bind to. Only "cf1:network" is currently supported. Mutually exclusive with tunnel_id. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.oldName">OldName</a></code> | <code>string</code> | The old name of the inherited binding. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.outbound">Outbound</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound">WorkersScriptBindingsOutbound</a></code> | Outbound worker. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.part">Part</a></code> | <code>string</code> | The name of the file containing the data content. Only accepted for `service worker syntax` Workers. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.pipeline">Pipeline</a></code> | <code>string</code> | Name of the Pipeline to bind to. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.queueName">QueueName</a></code> | <code>string</code> | Name of the Queue to bind to. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.scriptName">ScriptName</a></code> | <code>string</code> | The script where the Durable Object is defined, if it is external to this Worker. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.secretName">SecretName</a></code> | <code>string</code> | Name of the secret in the store. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.service">Service</a></code> | <code>string</code> | Name of Worker to bind to. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.serviceId">ServiceId</a></code> | <code>string</code> | Identifier of the VPC service to bind to. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.simple">Simple</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimple">WorkersScriptBindingsSimple</a></code> | A simple rate limit. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.storeId">StoreId</a></code> | <code>string</code> | ID of the store containing the secret. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.text">Text</a></code> | <code>string</code> | The text value to use. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.tunnelId">TunnelId</a></code> | <code>string</code> | UUID of the Cloudflare Tunnel to bind to. Mutually exclusive with network_id. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.usages">Usages</a></code> | <code>string[]</code> | Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages). |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.versionId">VersionId</a></code> | <code>string</code> | Identifier for the version to inherit the binding from, which can be the version ID or the literal "latest" to inherit from the latest version. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.workflowName">WorkflowName</a></code> | <code>string</code> | Name of the Workflow to bind to. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A JavaScript variable name for the binding.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#name WorkersScript#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The kind of resource that the binding provides.

Available values: "ai", "ai_search", "ai_search_namespace", "analytics_engine", "assets", "browser", "d1", "data_blob", "dispatch_namespace", "durable_object_namespace", "hyperdrive", "inherit", "images", "json", "kv_namespace", "media", "mtls_certificate", "plain_text", "pipelines", "queue", "ratelimit", "r2_bucket", "secret_text", "send_email", "service", "text_blob", "vectorize", "version_metadata", "secrets_store_secret", "secret_key", "workflow", "wasm_module", "vpc_service", "vpc_network".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#type WorkersScript#type}

---

##### `Algorithm`<sup>Optional</sup> <a name="Algorithm" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.algorithm"></a>

```csharp
public string Algorithm { get; set; }
```

- *Type:* string

Algorithm-specific key parameters. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#algorithm).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#algorithm WorkersScript#algorithm}

---

##### `AllowedDestinationAddresses`<sup>Optional</sup> <a name="AllowedDestinationAddresses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.allowedDestinationAddresses"></a>

```csharp
public string[] AllowedDestinationAddresses { get; set; }
```

- *Type:* string[]

List of allowed destination addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#allowed_destination_addresses WorkersScript#allowed_destination_addresses}

---

##### `AllowedSenderAddresses`<sup>Optional</sup> <a name="AllowedSenderAddresses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.allowedSenderAddresses"></a>

```csharp
public string[] AllowedSenderAddresses { get; set; }
```

- *Type:* string[]

List of allowed sender addresses.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#allowed_sender_addresses WorkersScript#allowed_sender_addresses}

---

##### `AppId`<sup>Optional</sup> <a name="AppId" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.appId"></a>

```csharp
public string AppId { get; set; }
```

- *Type:* string

ID of the Flagship app to bind to for feature flag evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#app_id WorkersScript#app_id}

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.bucketName"></a>

```csharp
public string BucketName { get; set; }
```

- *Type:* string

R2 bucket to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#bucket_name WorkersScript#bucket_name}

---

##### `CertificateId`<sup>Optional</sup> <a name="CertificateId" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.certificateId"></a>

```csharp
public string CertificateId { get; set; }
```

- *Type:* string

Identifier of the certificate to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#certificate_id WorkersScript#certificate_id}

---

##### `ClassName`<sup>Optional</sup> <a name="ClassName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.className"></a>

```csharp
public string ClassName { get; set; }
```

- *Type:* string

The exported class name of the Durable Object.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#class_name WorkersScript#class_name}

---

##### `DatabaseId`<sup>Optional</sup> <a name="DatabaseId" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.databaseId"></a>

```csharp
public string DatabaseId { get; set; }
```

- *Type:* string

Identifier of the D1 database to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#database_id WorkersScript#database_id}

---

##### `Dataset`<sup>Optional</sup> <a name="Dataset" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.dataset"></a>

```csharp
public string Dataset { get; set; }
```

- *Type:* string

The name of the dataset to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#dataset WorkersScript#dataset}

---

##### `DestinationAddress`<sup>Optional</sup> <a name="DestinationAddress" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.destinationAddress"></a>

```csharp
public string DestinationAddress { get; set; }
```

- *Type:* string

Destination address for the email.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#destination_address WorkersScript#destination_address}

---

##### `DispatchNamespace`<sup>Optional</sup> <a name="DispatchNamespace" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.dispatchNamespace"></a>

```csharp
public string DispatchNamespace { get; set; }
```

- *Type:* string

The dispatch namespace the Durable Object script belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#dispatch_namespace WorkersScript#dispatch_namespace}

---

##### `Entrypoint`<sup>Optional</sup> <a name="Entrypoint" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.entrypoint"></a>

```csharp
public string Entrypoint { get; set; }
```

- *Type:* string

Entrypoint to invoke on the target Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#entrypoint WorkersScript#entrypoint}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

The environment of the script_name to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#environment WorkersScript#environment}

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.format"></a>

```csharp
public string Format { get; set; }
```

- *Type:* string

Data format of the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#format). Available values: "raw", "pkcs8", "spki", "jwk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#format WorkersScript#format}

---

##### `Id`<sup>Optional</sup> <a name="Id" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.id"></a>

```csharp
public string Id { get; set; }
```

- *Type:* string

Identifier of the D1 database to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#id WorkersScript#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

##### `IndexName`<sup>Optional</sup> <a name="IndexName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.indexName"></a>

```csharp
public string IndexName { get; set; }
```

- *Type:* string

Name of the Vectorize index to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#index_name WorkersScript#index_name}

---

##### `InstanceName`<sup>Optional</sup> <a name="InstanceName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.instanceName"></a>

```csharp
public string InstanceName { get; set; }
```

- *Type:* string

The user-chosen instance name.

Must exist at deploy time. The worker can search, chat, update, and manage items/jobs on this instance.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#instance_name WorkersScript#instance_name}

---

##### `Json`<sup>Optional</sup> <a name="Json" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.json"></a>

```csharp
public string Json { get; set; }
```

- *Type:* string

JSON data to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#json WorkersScript#json}

---

##### `Jurisdiction`<sup>Optional</sup> <a name="Jurisdiction" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.jurisdiction"></a>

```csharp
public string Jurisdiction { get; set; }
```

- *Type:* string

The [jurisdiction](https://developers.cloudflare.com/r2/reference/data-location/#jurisdictional-restrictions) of the R2 bucket. Available values: "eu", "fedramp", "fedramp-high".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#jurisdiction WorkersScript#jurisdiction}

---

##### `KeyBase64`<sup>Optional</sup> <a name="KeyBase64" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.keyBase64"></a>

```csharp
public string KeyBase64 { get; set; }
```

- *Type:* string

Base64-encoded key data. Required if `format` is "raw", "pkcs8", or "spki".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#key_base64 WorkersScript#key_base64}

---

##### `KeyJwk`<sup>Optional</sup> <a name="KeyJwk" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.keyJwk"></a>

```csharp
public string KeyJwk { get; set; }
```

- *Type:* string

Key data in [JSON Web Key](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#json_web_key) format. Required if `format` is "jwk".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#key_jwk WorkersScript#key_jwk}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

The namespace the instance belongs to.

Defaults to "default" if omitted. Customers who don't use namespaces can simply omit this field.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#namespace WorkersScript#namespace}

---

##### `NamespaceId`<sup>Optional</sup> <a name="NamespaceId" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.namespaceId"></a>

```csharp
public string NamespaceId { get; set; }
```

- *Type:* string

Namespace identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#namespace_id WorkersScript#namespace_id}

---

##### `NetworkId`<sup>Optional</sup> <a name="NetworkId" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.networkId"></a>

```csharp
public string NetworkId { get; set; }
```

- *Type:* string

Identifier of the network to bind to. Only "cf1:network" is currently supported. Mutually exclusive with tunnel_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#network_id WorkersScript#network_id}

---

##### `OldName`<sup>Optional</sup> <a name="OldName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.oldName"></a>

```csharp
public string OldName { get; set; }
```

- *Type:* string

The old name of the inherited binding.

If set, the binding will be renamed from `old_name` to `name` in the new version. If not set, the binding will keep the same name between versions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#old_name WorkersScript#old_name}

---

##### `Outbound`<sup>Optional</sup> <a name="Outbound" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.outbound"></a>

```csharp
public WorkersScriptBindingsOutbound Outbound { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound">WorkersScriptBindingsOutbound</a>

Outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#outbound WorkersScript#outbound}

---

##### `Part`<sup>Optional</sup> <a name="Part" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.part"></a>

```csharp
public string Part { get; set; }
```

- *Type:* string

The name of the file containing the data content. Only accepted for `service worker syntax` Workers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#part WorkersScript#part}

---

##### `Pipeline`<sup>Optional</sup> <a name="Pipeline" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.pipeline"></a>

```csharp
public string Pipeline { get; set; }
```

- *Type:* string

Name of the Pipeline to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#pipeline WorkersScript#pipeline}

---

##### `QueueName`<sup>Optional</sup> <a name="QueueName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.queueName"></a>

```csharp
public string QueueName { get; set; }
```

- *Type:* string

Name of the Queue to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#queue_name WorkersScript#queue_name}

---

##### `ScriptName`<sup>Optional</sup> <a name="ScriptName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.scriptName"></a>

```csharp
public string ScriptName { get; set; }
```

- *Type:* string

The script where the Durable Object is defined, if it is external to this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#script_name WorkersScript#script_name}

---

##### `SecretName`<sup>Optional</sup> <a name="SecretName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.secretName"></a>

```csharp
public string SecretName { get; set; }
```

- *Type:* string

Name of the secret in the store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#secret_name WorkersScript#secret_name}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Name of Worker to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#service WorkersScript#service}

---

##### `ServiceId`<sup>Optional</sup> <a name="ServiceId" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.serviceId"></a>

```csharp
public string ServiceId { get; set; }
```

- *Type:* string

Identifier of the VPC service to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#service_id WorkersScript#service_id}

---

##### `Simple`<sup>Optional</sup> <a name="Simple" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.simple"></a>

```csharp
public WorkersScriptBindingsSimple Simple { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimple">WorkersScriptBindingsSimple</a>

A simple rate limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#simple WorkersScript#simple}

---

##### `StoreId`<sup>Optional</sup> <a name="StoreId" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.storeId"></a>

```csharp
public string StoreId { get; set; }
```

- *Type:* string

ID of the store containing the secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#store_id WorkersScript#store_id}

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.text"></a>

```csharp
public string Text { get; set; }
```

- *Type:* string

The text value to use.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#text WorkersScript#text}

---

##### `TunnelId`<sup>Optional</sup> <a name="TunnelId" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.tunnelId"></a>

```csharp
public string TunnelId { get; set; }
```

- *Type:* string

UUID of the Cloudflare Tunnel to bind to. Mutually exclusive with network_id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#tunnel_id WorkersScript#tunnel_id}

---

##### `Usages`<sup>Optional</sup> <a name="Usages" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.usages"></a>

```csharp
public string[] Usages { get; set; }
```

- *Type:* string[]

Allowed operations with the key. [Learn more](https://developer.mozilla.org/en-US/docs/Web/API/SubtleCrypto/importKey#keyUsages).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#usages WorkersScript#usages}

---

##### `VersionId`<sup>Optional</sup> <a name="VersionId" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.versionId"></a>

```csharp
public string VersionId { get; set; }
```

- *Type:* string

Identifier for the version to inherit the binding from, which can be the version ID or the literal "latest" to inherit from the latest version.

Defaults to inheriting the binding from the latest version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#version_id WorkersScript#version_id}

---

##### `WorkflowName`<sup>Optional</sup> <a name="WorkflowName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings.property.workflowName"></a>

```csharp
public string WorkflowName { get; set; }
```

- *Type:* string

Name of the Workflow to bind to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#workflow_name WorkersScript#workflow_name}

---

### WorkersScriptBindingsOutbound <a name="WorkersScriptBindingsOutbound" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptBindingsOutbound {
    string[] Params = null,
    WorkersScriptBindingsOutboundWorker Worker = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound.property.params">Params</a></code> | <code>string[]</code> | Pass information from the Dispatch Worker to the Outbound Worker through the parameters. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound.property.worker">Worker</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker">WorkersScriptBindingsOutboundWorker</a></code> | Outbound worker. |

---

##### `Params`<sup>Optional</sup> <a name="Params" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound.property.params"></a>

```csharp
public string[] Params { get; set; }
```

- *Type:* string[]

Pass information from the Dispatch Worker to the Outbound Worker through the parameters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#params WorkersScript#params}

---

##### `Worker`<sup>Optional</sup> <a name="Worker" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound.property.worker"></a>

```csharp
public WorkersScriptBindingsOutboundWorker Worker { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker">WorkersScriptBindingsOutboundWorker</a>

Outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#worker WorkersScript#worker}

---

### WorkersScriptBindingsOutboundWorker <a name="WorkersScriptBindingsOutboundWorker" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptBindingsOutboundWorker {
    string Environment = null,
    string Service = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker.property.environment">Environment</a></code> | <code>string</code> | Environment of the outbound worker. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker.property.service">Service</a></code> | <code>string</code> | Name of the outbound worker. |

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

Environment of the outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#environment WorkersScript#environment}

---

##### `Service`<sup>Optional</sup> <a name="Service" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Name of the outbound worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#service WorkersScript#service}

---

### WorkersScriptBindingsSimple <a name="WorkersScriptBindingsSimple" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimple"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimple.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptBindingsSimple {
    double Limit,
    double Period
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimple.property.limit">Limit</a></code> | <code>double</code> | The rate limit value. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimple.property.period">Period</a></code> | <code>double</code> | The rate limit period in seconds. |

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimple.property.limit"></a>

```csharp
public double Limit { get; set; }
```

- *Type:* double

The rate limit value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#limit WorkersScript#limit}

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimple.property.period"></a>

```csharp
public double Period { get; set; }
```

- *Type:* double

The rate limit period in seconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#period WorkersScript#period}

---

### WorkersScriptConfig <a name="WorkersScriptConfig" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ScriptName,
    string AccountId = null,
    WorkersScriptAnnotations Annotations = null,
    WorkersScriptAssets Assets = null,
    IResolvable|WorkersScriptBindings[] Bindings = null,
    string BodyPart = null,
    string CompatibilityDate = null,
    string[] CompatibilityFlags = null,
    string Content = null,
    string ContentFile = null,
    string ContentSha256 = null,
    string ContentType = null,
    bool|IResolvable KeepAssets = null,
    string[] KeepBindings = null,
    WorkersScriptLimits Limits = null,
    bool|IResolvable Logpush = null,
    string MainModule = null,
    WorkersScriptMigrations Migrations = null,
    WorkersScriptObservability Observability = null,
    WorkersScriptPlacement Placement = null,
    IResolvable|WorkersScriptTailConsumers[] TailConsumers = null,
    string UsageModel = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.scriptName">ScriptName</a></code> | <code>string</code> | Name of the script, used in URLs and route configuration. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.annotations">Annotations</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotations">WorkersScriptAnnotations</a></code> | Annotations for the version created by this upload. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.assets">Assets</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssets">WorkersScriptAssets</a></code> | Configuration for assets within a Worker. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.bindings">Bindings</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a>[]</code> | List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.bodyPart">BodyPart</a></code> | <code>string</code> | Name of the uploaded file that contains the script (e.g. the file adding a listener to the `fetch` event). Indicates a `service worker syntax` Worker. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.compatibilityDate">CompatibilityDate</a></code> | <code>string</code> | Date indicating targeted support in the Workers runtime. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.compatibilityFlags">CompatibilityFlags</a></code> | <code>string[]</code> | Flags that enable or disable certain features in the Workers runtime. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.content">Content</a></code> | <code>string</code> | Module or Service Worker contents of the Worker. Conflicts with `content_file`. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.contentFile">ContentFile</a></code> | <code>string</code> | Path to a file containing the Module or Service Worker contents of the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.contentSha256">ContentSha256</a></code> | <code>string</code> | SHA-256 hash of the Worker contents. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.contentType">ContentType</a></code> | <code>string</code> | Content-Type of the Worker. Required if uploading a non-JavaScript Worker (e.g. "text/x-python"). |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.keepAssets">KeepAssets</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Retain assets which exist for a previously uploaded Worker version; used in lieu of providing a completion token. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.keepBindings">KeepBindings</a></code> | <code>string[]</code> | List of binding types to keep from previous_upload. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.limits">Limits</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimits">WorkersScriptLimits</a></code> | Limits to apply for this Worker. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.logpush">Logpush</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether Logpush is turned on for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.mainModule">MainModule</a></code> | <code>string</code> | Name of the uploaded file that contains the main module (e.g. the file exporting a `fetch` handler). Indicates a `module syntax` Worker. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.migrations">Migrations</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrations">WorkersScriptMigrations</a></code> | Migrations to apply for Durable Objects associated with this Worker. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.observability">Observability</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservability">WorkersScriptObservability</a></code> | Observability settings for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.placement">Placement</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a></code> | Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Specify mode='smart' for Smart Placement, or one of region/hostname/host. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.tailConsumers">TailConsumers</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a>[]</code> | List of Workers that will consume logs from the attached Worker. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.usageModel">UsageModel</a></code> | <code>string</code> | Usage model for the Worker invocations. Available values: "standard", "bundled", "unbound". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ScriptName`<sup>Required</sup> <a name="ScriptName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.scriptName"></a>

```csharp
public string ScriptName { get; set; }
```

- *Type:* string

Name of the script, used in URLs and route configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#script_name WorkersScript#script_name}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#account_id WorkersScript#account_id}

---

##### `Annotations`<sup>Optional</sup> <a name="Annotations" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.annotations"></a>

```csharp
public WorkersScriptAnnotations Annotations { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotations">WorkersScriptAnnotations</a>

Annotations for the version created by this upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#annotations WorkersScript#annotations}

---

##### `Assets`<sup>Optional</sup> <a name="Assets" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.assets"></a>

```csharp
public WorkersScriptAssets Assets { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssets">WorkersScriptAssets</a>

Configuration for assets within a Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#assets WorkersScript#assets}

---

##### `Bindings`<sup>Optional</sup> <a name="Bindings" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.bindings"></a>

```csharp
public IResolvable|WorkersScriptBindings[] Bindings { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a>[]

List of bindings attached to a Worker. You can find more about bindings on our docs: https://developers.cloudflare.com/workers/configuration/multipart-upload-metadata/#bindings.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#bindings WorkersScript#bindings}

---

##### `BodyPart`<sup>Optional</sup> <a name="BodyPart" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.bodyPart"></a>

```csharp
public string BodyPart { get; set; }
```

- *Type:* string

Name of the uploaded file that contains the script (e.g. the file adding a listener to the `fetch` event). Indicates a `service worker syntax` Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#body_part WorkersScript#body_part}

---

##### `CompatibilityDate`<sup>Optional</sup> <a name="CompatibilityDate" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.compatibilityDate"></a>

```csharp
public string CompatibilityDate { get; set; }
```

- *Type:* string

Date indicating targeted support in the Workers runtime.

Backwards incompatible fixes to the runtime following this date will not affect this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#compatibility_date WorkersScript#compatibility_date}

---

##### `CompatibilityFlags`<sup>Optional</sup> <a name="CompatibilityFlags" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.compatibilityFlags"></a>

```csharp
public string[] CompatibilityFlags { get; set; }
```

- *Type:* string[]

Flags that enable or disable certain features in the Workers runtime.

Used to enable upcoming features or opt in or out of specific changes not included in a `compatibility_date`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#compatibility_flags WorkersScript#compatibility_flags}

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.content"></a>

```csharp
public string Content { get; set; }
```

- *Type:* string

Module or Service Worker contents of the Worker. Conflicts with `content_file`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#content WorkersScript#content}

---

##### `ContentFile`<sup>Optional</sup> <a name="ContentFile" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.contentFile"></a>

```csharp
public string ContentFile { get; set; }
```

- *Type:* string

Path to a file containing the Module or Service Worker contents of the Worker.

Conflicts with `content`. Must be paired with `content_sha256`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#content_file WorkersScript#content_file}

---

##### `ContentSha256`<sup>Optional</sup> <a name="ContentSha256" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.contentSha256"></a>

```csharp
public string ContentSha256 { get; set; }
```

- *Type:* string

SHA-256 hash of the Worker contents.

Used to trigger updates when source code changes. Must be provided when `content_file` is specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#content_sha256 WorkersScript#content_sha256}

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.contentType"></a>

```csharp
public string ContentType { get; set; }
```

- *Type:* string

Content-Type of the Worker. Required if uploading a non-JavaScript Worker (e.g. "text/x-python").

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#content_type WorkersScript#content_type}

---

##### `KeepAssets`<sup>Optional</sup> <a name="KeepAssets" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.keepAssets"></a>

```csharp
public bool|IResolvable KeepAssets { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Retain assets which exist for a previously uploaded Worker version; used in lieu of providing a completion token.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#keep_assets WorkersScript#keep_assets}

---

##### `KeepBindings`<sup>Optional</sup> <a name="KeepBindings" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.keepBindings"></a>

```csharp
public string[] KeepBindings { get; set; }
```

- *Type:* string[]

List of binding types to keep from previous_upload.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#keep_bindings WorkersScript#keep_bindings}

---

##### `Limits`<sup>Optional</sup> <a name="Limits" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.limits"></a>

```csharp
public WorkersScriptLimits Limits { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimits">WorkersScriptLimits</a>

Limits to apply for this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#limits WorkersScript#limits}

---

##### `Logpush`<sup>Optional</sup> <a name="Logpush" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.logpush"></a>

```csharp
public bool|IResolvable Logpush { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether Logpush is turned on for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#logpush WorkersScript#logpush}

---

##### `MainModule`<sup>Optional</sup> <a name="MainModule" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.mainModule"></a>

```csharp
public string MainModule { get; set; }
```

- *Type:* string

Name of the uploaded file that contains the main module (e.g. the file exporting a `fetch` handler). Indicates a `module syntax` Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#main_module WorkersScript#main_module}

---

##### `Migrations`<sup>Optional</sup> <a name="Migrations" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.migrations"></a>

```csharp
public WorkersScriptMigrations Migrations { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrations">WorkersScriptMigrations</a>

Migrations to apply for Durable Objects associated with this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#migrations WorkersScript#migrations}

---

##### `Observability`<sup>Optional</sup> <a name="Observability" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.observability"></a>

```csharp
public WorkersScriptObservability Observability { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservability">WorkersScriptObservability</a>

Observability settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#observability WorkersScript#observability}

---

##### `Placement`<sup>Optional</sup> <a name="Placement" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.placement"></a>

```csharp
public WorkersScriptPlacement Placement { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a>

Configuration for [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Specify mode='smart' for Smart Placement, or one of region/hostname/host.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#placement WorkersScript#placement}

---

##### `TailConsumers`<sup>Optional</sup> <a name="TailConsumers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.tailConsumers"></a>

```csharp
public IResolvable|WorkersScriptTailConsumers[] TailConsumers { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a>[]

List of Workers that will consume logs from the attached Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#tail_consumers WorkersScript#tail_consumers}

---

##### `UsageModel`<sup>Optional</sup> <a name="UsageModel" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptConfig.property.usageModel"></a>

```csharp
public string UsageModel { get; set; }
```

- *Type:* string

Usage model for the Worker invocations. Available values: "standard", "bundled", "unbound".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#usage_model WorkersScript#usage_model}

---

### WorkersScriptLimits <a name="WorkersScriptLimits" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimits"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimits.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptLimits {
    double CpuMs = null,
    double Subrequests = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimits.property.cpuMs">CpuMs</a></code> | <code>double</code> | The amount of CPU time this Worker can use in milliseconds. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimits.property.subrequests">Subrequests</a></code> | <code>double</code> | The number of subrequests this Worker can make per request. |

---

##### `CpuMs`<sup>Optional</sup> <a name="CpuMs" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimits.property.cpuMs"></a>

```csharp
public double CpuMs { get; set; }
```

- *Type:* double

The amount of CPU time this Worker can use in milliseconds.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#cpu_ms WorkersScript#cpu_ms}

---

##### `Subrequests`<sup>Optional</sup> <a name="Subrequests" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimits.property.subrequests"></a>

```csharp
public double Subrequests { get; set; }
```

- *Type:* double

The number of subrequests this Worker can make per request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#subrequests WorkersScript#subrequests}

---

### WorkersScriptMigrations <a name="WorkersScriptMigrations" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrations.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptMigrations {
    string[] DeletedClasses = null,
    string[] NewClasses = null,
    string[] NewSqliteClasses = null,
    string NewTag = null,
    string OldTag = null,
    IResolvable|WorkersScriptMigrationsRenamedClasses[] RenamedClasses = null,
    IResolvable|WorkersScriptMigrationsSteps[] Steps = null,
    IResolvable|WorkersScriptMigrationsTransferredClasses[] TransferredClasses = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrations.property.deletedClasses">DeletedClasses</a></code> | <code>string[]</code> | A list of classes to delete Durable Object namespaces from. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrations.property.newClasses">NewClasses</a></code> | <code>string[]</code> | A list of classes to create Durable Object namespaces from. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrations.property.newSqliteClasses">NewSqliteClasses</a></code> | <code>string[]</code> | A list of classes to create Durable Object namespaces with SQLite from. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrations.property.newTag">NewTag</a></code> | <code>string</code> | Tag to set as the latest migration tag. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrations.property.oldTag">OldTag</a></code> | <code>string</code> | Tag used to verify against the latest migration tag for this Worker. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrations.property.renamedClasses">RenamedClasses</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses">WorkersScriptMigrationsRenamedClasses</a>[]</code> | A list of classes with Durable Object namespaces that were renamed. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrations.property.steps">Steps</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps">WorkersScriptMigrationsSteps</a>[]</code> | Migrations to apply in order. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrations.property.transferredClasses">TransferredClasses</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses">WorkersScriptMigrationsTransferredClasses</a>[]</code> | A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker. |

---

##### `DeletedClasses`<sup>Optional</sup> <a name="DeletedClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrations.property.deletedClasses"></a>

```csharp
public string[] DeletedClasses { get; set; }
```

- *Type:* string[]

A list of classes to delete Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#deleted_classes WorkersScript#deleted_classes}

---

##### `NewClasses`<sup>Optional</sup> <a name="NewClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrations.property.newClasses"></a>

```csharp
public string[] NewClasses { get; set; }
```

- *Type:* string[]

A list of classes to create Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#new_classes WorkersScript#new_classes}

---

##### `NewSqliteClasses`<sup>Optional</sup> <a name="NewSqliteClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrations.property.newSqliteClasses"></a>

```csharp
public string[] NewSqliteClasses { get; set; }
```

- *Type:* string[]

A list of classes to create Durable Object namespaces with SQLite from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#new_sqlite_classes WorkersScript#new_sqlite_classes}

---

##### `NewTag`<sup>Optional</sup> <a name="NewTag" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrations.property.newTag"></a>

```csharp
public string NewTag { get; set; }
```

- *Type:* string

Tag to set as the latest migration tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#new_tag WorkersScript#new_tag}

---

##### `OldTag`<sup>Optional</sup> <a name="OldTag" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrations.property.oldTag"></a>

```csharp
public string OldTag { get; set; }
```

- *Type:* string

Tag used to verify against the latest migration tag for this Worker.

If they don't match, the upload is rejected.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#old_tag WorkersScript#old_tag}

---

##### `RenamedClasses`<sup>Optional</sup> <a name="RenamedClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrations.property.renamedClasses"></a>

```csharp
public IResolvable|WorkersScriptMigrationsRenamedClasses[] RenamedClasses { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses">WorkersScriptMigrationsRenamedClasses</a>[]

A list of classes with Durable Object namespaces that were renamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#renamed_classes WorkersScript#renamed_classes}

---

##### `Steps`<sup>Optional</sup> <a name="Steps" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrations.property.steps"></a>

```csharp
public IResolvable|WorkersScriptMigrationsSteps[] Steps { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps">WorkersScriptMigrationsSteps</a>[]

Migrations to apply in order.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#steps WorkersScript#steps}

---

##### `TransferredClasses`<sup>Optional</sup> <a name="TransferredClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrations.property.transferredClasses"></a>

```csharp
public IResolvable|WorkersScriptMigrationsTransferredClasses[] TransferredClasses { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses">WorkersScriptMigrationsTransferredClasses</a>[]

A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#transferred_classes WorkersScript#transferred_classes}

---

### WorkersScriptMigrationsRenamedClasses <a name="WorkersScriptMigrationsRenamedClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptMigrationsRenamedClasses {
    string From = null,
    string To = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses.property.from">From</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#from WorkersScript#from}. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses.property.to">To</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#to WorkersScript#to}. |

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#from WorkersScript#from}.

---

##### `To`<sup>Optional</sup> <a name="To" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses.property.to"></a>

```csharp
public string To { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#to WorkersScript#to}.

---

### WorkersScriptMigrationsSteps <a name="WorkersScriptMigrationsSteps" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptMigrationsSteps {
    string[] DeletedClasses = null,
    string[] NewClasses = null,
    string[] NewSqliteClasses = null,
    IResolvable|WorkersScriptMigrationsStepsRenamedClasses[] RenamedClasses = null,
    IResolvable|WorkersScriptMigrationsStepsTransferredClasses[] TransferredClasses = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.deletedClasses">DeletedClasses</a></code> | <code>string[]</code> | A list of classes to delete Durable Object namespaces from. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.newClasses">NewClasses</a></code> | <code>string[]</code> | A list of classes to create Durable Object namespaces from. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.newSqliteClasses">NewSqliteClasses</a></code> | <code>string[]</code> | A list of classes to create Durable Object namespaces with SQLite from. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.renamedClasses">RenamedClasses</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses">WorkersScriptMigrationsStepsRenamedClasses</a>[]</code> | A list of classes with Durable Object namespaces that were renamed. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.transferredClasses">TransferredClasses</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses">WorkersScriptMigrationsStepsTransferredClasses</a>[]</code> | A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker. |

---

##### `DeletedClasses`<sup>Optional</sup> <a name="DeletedClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.deletedClasses"></a>

```csharp
public string[] DeletedClasses { get; set; }
```

- *Type:* string[]

A list of classes to delete Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#deleted_classes WorkersScript#deleted_classes}

---

##### `NewClasses`<sup>Optional</sup> <a name="NewClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.newClasses"></a>

```csharp
public string[] NewClasses { get; set; }
```

- *Type:* string[]

A list of classes to create Durable Object namespaces from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#new_classes WorkersScript#new_classes}

---

##### `NewSqliteClasses`<sup>Optional</sup> <a name="NewSqliteClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.newSqliteClasses"></a>

```csharp
public string[] NewSqliteClasses { get; set; }
```

- *Type:* string[]

A list of classes to create Durable Object namespaces with SQLite from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#new_sqlite_classes WorkersScript#new_sqlite_classes}

---

##### `RenamedClasses`<sup>Optional</sup> <a name="RenamedClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.renamedClasses"></a>

```csharp
public IResolvable|WorkersScriptMigrationsStepsRenamedClasses[] RenamedClasses { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses">WorkersScriptMigrationsStepsRenamedClasses</a>[]

A list of classes with Durable Object namespaces that were renamed.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#renamed_classes WorkersScript#renamed_classes}

---

##### `TransferredClasses`<sup>Optional</sup> <a name="TransferredClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps.property.transferredClasses"></a>

```csharp
public IResolvable|WorkersScriptMigrationsStepsTransferredClasses[] TransferredClasses { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses">WorkersScriptMigrationsStepsTransferredClasses</a>[]

A list of transfers for Durable Object namespaces from a different Worker and class to a class defined in this Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#transferred_classes WorkersScript#transferred_classes}

---

### WorkersScriptMigrationsStepsRenamedClasses <a name="WorkersScriptMigrationsStepsRenamedClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptMigrationsStepsRenamedClasses {
    string From = null,
    string To = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses.property.from">From</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#from WorkersScript#from}. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses.property.to">To</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#to WorkersScript#to}. |

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#from WorkersScript#from}.

---

##### `To`<sup>Optional</sup> <a name="To" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses.property.to"></a>

```csharp
public string To { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#to WorkersScript#to}.

---

### WorkersScriptMigrationsStepsTransferredClasses <a name="WorkersScriptMigrationsStepsTransferredClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptMigrationsStepsTransferredClasses {
    string From = null,
    string FromScript = null,
    string To = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.property.from">From</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#from WorkersScript#from}. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.property.fromScript">FromScript</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#from_script WorkersScript#from_script}. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.property.to">To</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#to WorkersScript#to}. |

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#from WorkersScript#from}.

---

##### `FromScript`<sup>Optional</sup> <a name="FromScript" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.property.fromScript"></a>

```csharp
public string FromScript { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#from_script WorkersScript#from_script}.

---

##### `To`<sup>Optional</sup> <a name="To" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses.property.to"></a>

```csharp
public string To { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#to WorkersScript#to}.

---

### WorkersScriptMigrationsTransferredClasses <a name="WorkersScriptMigrationsTransferredClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptMigrationsTransferredClasses {
    string From = null,
    string FromScript = null,
    string To = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.property.from">From</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#from WorkersScript#from}. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.property.fromScript">FromScript</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#from_script WorkersScript#from_script}. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.property.to">To</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#to WorkersScript#to}. |

---

##### `From`<sup>Optional</sup> <a name="From" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.property.from"></a>

```csharp
public string From { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#from WorkersScript#from}.

---

##### `FromScript`<sup>Optional</sup> <a name="FromScript" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.property.fromScript"></a>

```csharp
public string FromScript { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#from_script WorkersScript#from_script}.

---

##### `To`<sup>Optional</sup> <a name="To" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses.property.to"></a>

```csharp
public string To { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#to WorkersScript#to}.

---

### WorkersScriptNamedHandlers <a name="WorkersScriptNamedHandlers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptNamedHandlers {

};
```


### WorkersScriptObservability <a name="WorkersScriptObservability" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservability"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservability.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptObservability {
    bool|IResolvable Enabled,
    double HeadSamplingRate = null,
    WorkersScriptObservabilityLogs Logs = null,
    WorkersScriptObservabilityTraces Traces = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservability.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether observability is enabled for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservability.property.headSamplingRate">HeadSamplingRate</a></code> | <code>double</code> | The sampling rate for incoming requests. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservability.property.logs">Logs</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs">WorkersScriptObservabilityLogs</a></code> | Log settings for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservability.property.traces">Traces</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTraces">WorkersScriptObservabilityTraces</a></code> | Trace settings for the Worker. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservability.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether observability is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#enabled WorkersScript#enabled}

---

##### `HeadSamplingRate`<sup>Optional</sup> <a name="HeadSamplingRate" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservability.property.headSamplingRate"></a>

```csharp
public double HeadSamplingRate { get; set; }
```

- *Type:* double

The sampling rate for incoming requests. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#head_sampling_rate WorkersScript#head_sampling_rate}

---

##### `Logs`<sup>Optional</sup> <a name="Logs" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservability.property.logs"></a>

```csharp
public WorkersScriptObservabilityLogs Logs { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs">WorkersScriptObservabilityLogs</a>

Log settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#logs WorkersScript#logs}

---

##### `Traces`<sup>Optional</sup> <a name="Traces" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservability.property.traces"></a>

```csharp
public WorkersScriptObservabilityTraces Traces { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTraces">WorkersScriptObservabilityTraces</a>

Trace settings for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#traces WorkersScript#traces}

---

### WorkersScriptObservabilityLogs <a name="WorkersScriptObservabilityLogs" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptObservabilityLogs {
    bool|IResolvable Enabled,
    bool|IResolvable InvocationLogs,
    string[] Destinations = null,
    double HeadSamplingRate = null,
    bool|IResolvable Persist = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether logs are enabled for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.invocationLogs">InvocationLogs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.destinations">Destinations</a></code> | <code>string[]</code> | A list of destinations where logs will be exported to. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.headSamplingRate">HeadSamplingRate</a></code> | <code>double</code> | The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.persist">Persist</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether log persistence is enabled for the Worker. |

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether logs are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#enabled WorkersScript#enabled}

---

##### `InvocationLogs`<sup>Required</sup> <a name="InvocationLogs" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.invocationLogs"></a>

```csharp
public bool|IResolvable InvocationLogs { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether [invocation logs](https://developers.cloudflare.com/workers/observability/logs/workers-logs/#invocation-logs) are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#invocation_logs WorkersScript#invocation_logs}

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.destinations"></a>

```csharp
public string[] Destinations { get; set; }
```

- *Type:* string[]

A list of destinations where logs will be exported to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#destinations WorkersScript#destinations}

---

##### `HeadSamplingRate`<sup>Optional</sup> <a name="HeadSamplingRate" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.headSamplingRate"></a>

```csharp
public double HeadSamplingRate { get; set; }
```

- *Type:* double

The sampling rate for logs. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#head_sampling_rate WorkersScript#head_sampling_rate}

---

##### `Persist`<sup>Optional</sup> <a name="Persist" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs.property.persist"></a>

```csharp
public bool|IResolvable Persist { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether log persistence is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#persist WorkersScript#persist}

---

### WorkersScriptObservabilityTraces <a name="WorkersScriptObservabilityTraces" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTraces"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTraces.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptObservabilityTraces {
    string[] Destinations = null,
    bool|IResolvable Enabled = null,
    double HeadSamplingRate = null,
    bool|IResolvable Persist = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTraces.property.destinations">Destinations</a></code> | <code>string[]</code> | A list of destinations where traces will be exported to. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTraces.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether traces are enabled for the Worker. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTraces.property.headSamplingRate">HeadSamplingRate</a></code> | <code>double</code> | The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTraces.property.persist">Persist</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether trace persistence is enabled for the Worker. |

---

##### `Destinations`<sup>Optional</sup> <a name="Destinations" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTraces.property.destinations"></a>

```csharp
public string[] Destinations { get; set; }
```

- *Type:* string[]

A list of destinations where traces will be exported to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#destinations WorkersScript#destinations}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTraces.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether traces are enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#enabled WorkersScript#enabled}

---

##### `HeadSamplingRate`<sup>Optional</sup> <a name="HeadSamplingRate" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTraces.property.headSamplingRate"></a>

```csharp
public double HeadSamplingRate { get; set; }
```

- *Type:* double

The sampling rate for traces. From 0 to 1 (1 = 100%, 0.1 = 10%). Default is 1.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#head_sampling_rate WorkersScript#head_sampling_rate}

---

##### `Persist`<sup>Optional</sup> <a name="Persist" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTraces.property.persist"></a>

```csharp
public bool|IResolvable Persist { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether trace persistence is enabled for the Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#persist WorkersScript#persist}

---

### WorkersScriptPlacement <a name="WorkersScriptPlacement" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptPlacement {
    string Mode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacement.property.mode">Mode</a></code> | <code>string</code> | Enables [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Available values: "smart", "targeted". |

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacement.property.mode"></a>

```csharp
public string Mode { get; set; }
```

- *Type:* string

Enables [Smart Placement](https://developers.cloudflare.com/workers/configuration/smart-placement). Available values: "smart", "targeted".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#mode WorkersScript#mode}

---

### WorkersScriptPlacementTarget <a name="WorkersScriptPlacementTarget" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTarget.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptPlacementTarget {

};
```


### WorkersScriptTailConsumers <a name="WorkersScriptTailConsumers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumers"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumers.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptTailConsumers {
    string Service,
    string Environment = null,
    string Namespace = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumers.property.service">Service</a></code> | <code>string</code> | Name of Worker that is to be the consumer. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumers.property.environment">Environment</a></code> | <code>string</code> | Optional environment if the Worker utilizes one. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumers.property.namespace">Namespace</a></code> | <code>string</code> | Optional dispatch namespace the script belongs to. |

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumers.property.service"></a>

```csharp
public string Service { get; set; }
```

- *Type:* string

Name of Worker that is to be the consumer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#service WorkersScript#service}

---

##### `Environment`<sup>Optional</sup> <a name="Environment" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumers.property.environment"></a>

```csharp
public string Environment { get; set; }
```

- *Type:* string

Optional environment if the Worker utilizes one.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#environment WorkersScript#environment}

---

##### `Namespace`<sup>Optional</sup> <a name="Namespace" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumers.property.namespace"></a>

```csharp
public string Namespace { get; set; }
```

- *Type:* string

Optional dispatch namespace the script belongs to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.19.1/docs/resources/workers_script#namespace WorkersScript#namespace}

---

## Classes <a name="Classes" id="Classes"></a>

### WorkersScriptAnnotationsOutputReference <a name="WorkersScriptAnnotationsOutputReference" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptAnnotationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.resetWorkersMessage">ResetWorkersMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.resetWorkersTag">ResetWorkersTag</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetWorkersMessage` <a name="ResetWorkersMessage" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.resetWorkersMessage"></a>

```csharp
private void ResetWorkersMessage()
```

##### `ResetWorkersTag` <a name="ResetWorkersTag" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.resetWorkersTag"></a>

```csharp
private void ResetWorkersTag()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.property.workersTriggeredBy">WorkersTriggeredBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.property.workersMessageInput">WorkersMessageInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.property.workersTagInput">WorkersTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.property.workersMessage">WorkersMessage</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.property.workersTag">WorkersTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotations">WorkersScriptAnnotations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `WorkersTriggeredBy`<sup>Required</sup> <a name="WorkersTriggeredBy" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.property.workersTriggeredBy"></a>

```csharp
public string WorkersTriggeredBy { get; }
```

- *Type:* string

---

##### `WorkersMessageInput`<sup>Optional</sup> <a name="WorkersMessageInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.property.workersMessageInput"></a>

```csharp
public string WorkersMessageInput { get; }
```

- *Type:* string

---

##### `WorkersTagInput`<sup>Optional</sup> <a name="WorkersTagInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.property.workersTagInput"></a>

```csharp
public string WorkersTagInput { get; }
```

- *Type:* string

---

##### `WorkersMessage`<sup>Required</sup> <a name="WorkersMessage" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.property.workersMessage"></a>

```csharp
public string WorkersMessage { get; }
```

- *Type:* string

---

##### `WorkersTag`<sup>Required</sup> <a name="WorkersTag" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.property.workersTag"></a>

```csharp
public string WorkersTag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkersScriptAnnotations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAnnotations">WorkersScriptAnnotations</a>

---


### WorkersScriptAssetsConfigOutputReference <a name="WorkersScriptAssetsConfigOutputReference" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptAssetsConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetHtmlHandling">ResetHtmlHandling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetNotFoundHandling">ResetNotFoundHandling</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetRedirects">ResetRedirects</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetRunWorkerFirst">ResetRunWorkerFirst</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetServeDirectly">ResetServeDirectly</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetHeaders"></a>

```csharp
private void ResetHeaders()
```

##### `ResetHtmlHandling` <a name="ResetHtmlHandling" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetHtmlHandling"></a>

```csharp
private void ResetHtmlHandling()
```

##### `ResetNotFoundHandling` <a name="ResetNotFoundHandling" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetNotFoundHandling"></a>

```csharp
private void ResetNotFoundHandling()
```

##### `ResetRedirects` <a name="ResetRedirects" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetRedirects"></a>

```csharp
private void ResetRedirects()
```

##### `ResetRunWorkerFirst` <a name="ResetRunWorkerFirst" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetRunWorkerFirst"></a>

```csharp
private void ResetRunWorkerFirst()
```

##### `ResetServeDirectly` <a name="ResetServeDirectly" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.resetServeDirectly"></a>

```csharp
private void ResetServeDirectly()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.headersInput">HeadersInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.htmlHandlingInput">HtmlHandlingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.notFoundHandlingInput">NotFoundHandlingInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.redirectsInput">RedirectsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.runWorkerFirstInput">RunWorkerFirstInput</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.serveDirectlyInput">ServeDirectlyInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.headers">Headers</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.htmlHandling">HtmlHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.notFoundHandling">NotFoundHandling</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.redirects">Redirects</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.runWorkerFirst">RunWorkerFirst</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.serveDirectly">ServeDirectly</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfig">WorkersScriptAssetsConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.headersInput"></a>

```csharp
public string HeadersInput { get; }
```

- *Type:* string

---

##### `HtmlHandlingInput`<sup>Optional</sup> <a name="HtmlHandlingInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.htmlHandlingInput"></a>

```csharp
public string HtmlHandlingInput { get; }
```

- *Type:* string

---

##### `NotFoundHandlingInput`<sup>Optional</sup> <a name="NotFoundHandlingInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.notFoundHandlingInput"></a>

```csharp
public string NotFoundHandlingInput { get; }
```

- *Type:* string

---

##### `RedirectsInput`<sup>Optional</sup> <a name="RedirectsInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.redirectsInput"></a>

```csharp
public string RedirectsInput { get; }
```

- *Type:* string

---

##### `RunWorkerFirstInput`<sup>Optional</sup> <a name="RunWorkerFirstInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.runWorkerFirstInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> RunWorkerFirstInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `ServeDirectlyInput`<sup>Optional</sup> <a name="ServeDirectlyInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.serveDirectlyInput"></a>

```csharp
public bool|IResolvable ServeDirectlyInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.headers"></a>

```csharp
public string Headers { get; }
```

- *Type:* string

---

##### `HtmlHandling`<sup>Required</sup> <a name="HtmlHandling" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.htmlHandling"></a>

```csharp
public string HtmlHandling { get; }
```

- *Type:* string

---

##### `NotFoundHandling`<sup>Required</sup> <a name="NotFoundHandling" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.notFoundHandling"></a>

```csharp
public string NotFoundHandling { get; }
```

- *Type:* string

---

##### `Redirects`<sup>Required</sup> <a name="Redirects" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.redirects"></a>

```csharp
public string Redirects { get; }
```

- *Type:* string

---

##### `RunWorkerFirst`<sup>Required</sup> <a name="RunWorkerFirst" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.runWorkerFirst"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> RunWorkerFirst { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `ServeDirectly`<sup>Required</sup> <a name="ServeDirectly" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.serveDirectly"></a>

```csharp
public bool|IResolvable ServeDirectly { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkersScriptAssetsConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfig">WorkersScriptAssetsConfig</a>

---


### WorkersScriptAssetsOutputReference <a name="WorkersScriptAssetsOutputReference" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptAssetsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resetConfig">ResetConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resetDirectory">ResetDirectory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resetJwt">ResetJwt</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.putConfig"></a>

```csharp
private void PutConfig(WorkersScriptAssetsConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfig">WorkersScriptAssetsConfig</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resetConfig"></a>

```csharp
private void ResetConfig()
```

##### `ResetDirectory` <a name="ResetDirectory" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resetDirectory"></a>

```csharp
private void ResetDirectory()
```

##### `ResetJwt` <a name="ResetJwt" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.resetJwt"></a>

```csharp
private void ResetJwt()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.assetManifestSha256">AssetManifestSha256</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference">WorkersScriptAssetsConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.configInput">ConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfig">WorkersScriptAssetsConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.directoryInput">DirectoryInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.jwtInput">JwtInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.directory">Directory</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.jwt">Jwt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssets">WorkersScriptAssets</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AssetManifestSha256`<sup>Required</sup> <a name="AssetManifestSha256" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.assetManifestSha256"></a>

```csharp
public string AssetManifestSha256 { get; }
```

- *Type:* string

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.config"></a>

```csharp
public WorkersScriptAssetsConfigOutputReference Config { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfigOutputReference">WorkersScriptAssetsConfigOutputReference</a>

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.configInput"></a>

```csharp
public IResolvable|WorkersScriptAssetsConfig ConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsConfig">WorkersScriptAssetsConfig</a>

---

##### `DirectoryInput`<sup>Optional</sup> <a name="DirectoryInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.directoryInput"></a>

```csharp
public string DirectoryInput { get; }
```

- *Type:* string

---

##### `JwtInput`<sup>Optional</sup> <a name="JwtInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.jwtInput"></a>

```csharp
public string JwtInput { get; }
```

- *Type:* string

---

##### `Directory`<sup>Required</sup> <a name="Directory" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.directory"></a>

```csharp
public string Directory { get; }
```

- *Type:* string

---

##### `Jwt`<sup>Required</sup> <a name="Jwt" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.jwt"></a>

```csharp
public string Jwt { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptAssetsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkersScriptAssets InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptAssets">WorkersScriptAssets</a>

---


### WorkersScriptBindingsList <a name="WorkersScriptBindingsList" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptBindingsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsList.get"></a>

```csharp
private WorkersScriptBindingsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsList.property.internalValue"></a>

```csharp
public IResolvable|WorkersScriptBindings[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a>[]

---


### WorkersScriptBindingsOutboundOutputReference <a name="WorkersScriptBindingsOutboundOutputReference" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptBindingsOutboundOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.putWorker">PutWorker</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resetParams">ResetParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resetWorker">ResetWorker</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutWorker` <a name="PutWorker" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.putWorker"></a>

```csharp
private void PutWorker(WorkersScriptBindingsOutboundWorker Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.putWorker.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker">WorkersScriptBindingsOutboundWorker</a>

---

##### `ResetParams` <a name="ResetParams" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resetParams"></a>

```csharp
private void ResetParams()
```

##### `ResetWorker` <a name="ResetWorker" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.resetWorker"></a>

```csharp
private void ResetWorker()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.worker">Worker</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference">WorkersScriptBindingsOutboundWorkerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.paramsInput">ParamsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.workerInput">WorkerInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker">WorkersScriptBindingsOutboundWorker</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.params">Params</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound">WorkersScriptBindingsOutbound</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Worker`<sup>Required</sup> <a name="Worker" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.worker"></a>

```csharp
public WorkersScriptBindingsOutboundWorkerOutputReference Worker { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference">WorkersScriptBindingsOutboundWorkerOutputReference</a>

---

##### `ParamsInput`<sup>Optional</sup> <a name="ParamsInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.paramsInput"></a>

```csharp
public string[] ParamsInput { get; }
```

- *Type:* string[]

---

##### `WorkerInput`<sup>Optional</sup> <a name="WorkerInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.workerInput"></a>

```csharp
public IResolvable|WorkersScriptBindingsOutboundWorker WorkerInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker">WorkersScriptBindingsOutboundWorker</a>

---

##### `Params`<sup>Required</sup> <a name="Params" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.params"></a>

```csharp
public string[] Params { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkersScriptBindingsOutbound InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound">WorkersScriptBindingsOutbound</a>

---


### WorkersScriptBindingsOutboundWorkerOutputReference <a name="WorkersScriptBindingsOutboundWorkerOutputReference" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptBindingsOutboundWorkerOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resetService">ResetService</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetService` <a name="ResetService" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.resetService"></a>

```csharp
private void ResetService()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker">WorkersScriptBindingsOutboundWorker</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorkerOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkersScriptBindingsOutboundWorker InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundWorker">WorkersScriptBindingsOutboundWorker</a>

---


### WorkersScriptBindingsOutputReference <a name="WorkersScriptBindingsOutputReference" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptBindingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.putOutbound">PutOutbound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.putSimple">PutSimple</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetAlgorithm">ResetAlgorithm</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetAllowedDestinationAddresses">ResetAllowedDestinationAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetAllowedSenderAddresses">ResetAllowedSenderAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetAppId">ResetAppId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetCertificateId">ResetCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetClassName">ResetClassName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetDatabaseId">ResetDatabaseId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetDataset">ResetDataset</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetDestinationAddress">ResetDestinationAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetDispatchNamespace">ResetDispatchNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetEntrypoint">ResetEntrypoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetId">ResetId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetIndexName">ResetIndexName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetInstanceName">ResetInstanceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetJson">ResetJson</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetJurisdiction">ResetJurisdiction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetKeyBase64">ResetKeyBase64</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetKeyJwk">ResetKeyJwk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetNamespaceId">ResetNamespaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetNetworkId">ResetNetworkId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetOldName">ResetOldName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetOutbound">ResetOutbound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetPart">ResetPart</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetPipeline">ResetPipeline</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetQueueName">ResetQueueName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetScriptName">ResetScriptName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetSecretName">ResetSecretName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetService">ResetService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetServiceId">ResetServiceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetSimple">ResetSimple</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetStoreId">ResetStoreId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetTunnelId">ResetTunnelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetUsages">ResetUsages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetVersionId">ResetVersionId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetWorkflowName">ResetWorkflowName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutOutbound` <a name="PutOutbound" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.putOutbound"></a>

```csharp
private void PutOutbound(WorkersScriptBindingsOutbound Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.putOutbound.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound">WorkersScriptBindingsOutbound</a>

---

##### `PutSimple` <a name="PutSimple" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.putSimple"></a>

```csharp
private void PutSimple(WorkersScriptBindingsSimple Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.putSimple.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimple">WorkersScriptBindingsSimple</a>

---

##### `ResetAlgorithm` <a name="ResetAlgorithm" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetAlgorithm"></a>

```csharp
private void ResetAlgorithm()
```

##### `ResetAllowedDestinationAddresses` <a name="ResetAllowedDestinationAddresses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetAllowedDestinationAddresses"></a>

```csharp
private void ResetAllowedDestinationAddresses()
```

##### `ResetAllowedSenderAddresses` <a name="ResetAllowedSenderAddresses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetAllowedSenderAddresses"></a>

```csharp
private void ResetAllowedSenderAddresses()
```

##### `ResetAppId` <a name="ResetAppId" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetAppId"></a>

```csharp
private void ResetAppId()
```

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetBucketName"></a>

```csharp
private void ResetBucketName()
```

##### `ResetCertificateId` <a name="ResetCertificateId" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetCertificateId"></a>

```csharp
private void ResetCertificateId()
```

##### `ResetClassName` <a name="ResetClassName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetClassName"></a>

```csharp
private void ResetClassName()
```

##### `ResetDatabaseId` <a name="ResetDatabaseId" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetDatabaseId"></a>

```csharp
private void ResetDatabaseId()
```

##### `ResetDataset` <a name="ResetDataset" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetDataset"></a>

```csharp
private void ResetDataset()
```

##### `ResetDestinationAddress` <a name="ResetDestinationAddress" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetDestinationAddress"></a>

```csharp
private void ResetDestinationAddress()
```

##### `ResetDispatchNamespace` <a name="ResetDispatchNamespace" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetDispatchNamespace"></a>

```csharp
private void ResetDispatchNamespace()
```

##### `ResetEntrypoint` <a name="ResetEntrypoint" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetEntrypoint"></a>

```csharp
private void ResetEntrypoint()
```

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetFormat` <a name="ResetFormat" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetFormat"></a>

```csharp
private void ResetFormat()
```

##### `ResetId` <a name="ResetId" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetId"></a>

```csharp
private void ResetId()
```

##### `ResetIndexName` <a name="ResetIndexName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetIndexName"></a>

```csharp
private void ResetIndexName()
```

##### `ResetInstanceName` <a name="ResetInstanceName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetInstanceName"></a>

```csharp
private void ResetInstanceName()
```

##### `ResetJson` <a name="ResetJson" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetJson"></a>

```csharp
private void ResetJson()
```

##### `ResetJurisdiction` <a name="ResetJurisdiction" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetJurisdiction"></a>

```csharp
private void ResetJurisdiction()
```

##### `ResetKeyBase64` <a name="ResetKeyBase64" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetKeyBase64"></a>

```csharp
private void ResetKeyBase64()
```

##### `ResetKeyJwk` <a name="ResetKeyJwk" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetKeyJwk"></a>

```csharp
private void ResetKeyJwk()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```

##### `ResetNamespaceId` <a name="ResetNamespaceId" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetNamespaceId"></a>

```csharp
private void ResetNamespaceId()
```

##### `ResetNetworkId` <a name="ResetNetworkId" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetNetworkId"></a>

```csharp
private void ResetNetworkId()
```

##### `ResetOldName` <a name="ResetOldName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetOldName"></a>

```csharp
private void ResetOldName()
```

##### `ResetOutbound` <a name="ResetOutbound" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetOutbound"></a>

```csharp
private void ResetOutbound()
```

##### `ResetPart` <a name="ResetPart" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetPart"></a>

```csharp
private void ResetPart()
```

##### `ResetPipeline` <a name="ResetPipeline" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetPipeline"></a>

```csharp
private void ResetPipeline()
```

##### `ResetQueueName` <a name="ResetQueueName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetQueueName"></a>

```csharp
private void ResetQueueName()
```

##### `ResetScriptName` <a name="ResetScriptName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetScriptName"></a>

```csharp
private void ResetScriptName()
```

##### `ResetSecretName` <a name="ResetSecretName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetSecretName"></a>

```csharp
private void ResetSecretName()
```

##### `ResetService` <a name="ResetService" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetService"></a>

```csharp
private void ResetService()
```

##### `ResetServiceId` <a name="ResetServiceId" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetServiceId"></a>

```csharp
private void ResetServiceId()
```

##### `ResetSimple` <a name="ResetSimple" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetSimple"></a>

```csharp
private void ResetSimple()
```

##### `ResetStoreId` <a name="ResetStoreId" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetStoreId"></a>

```csharp
private void ResetStoreId()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetText"></a>

```csharp
private void ResetText()
```

##### `ResetTunnelId` <a name="ResetTunnelId" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetTunnelId"></a>

```csharp
private void ResetTunnelId()
```

##### `ResetUsages` <a name="ResetUsages" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetUsages"></a>

```csharp
private void ResetUsages()
```

##### `ResetVersionId` <a name="ResetVersionId" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetVersionId"></a>

```csharp
private void ResetVersionId()
```

##### `ResetWorkflowName` <a name="ResetWorkflowName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.resetWorkflowName"></a>

```csharp
private void ResetWorkflowName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.outbound">Outbound</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference">WorkersScriptBindingsOutboundOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.simple">Simple</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference">WorkersScriptBindingsSimpleOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.algorithmInput">AlgorithmInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedDestinationAddressesInput">AllowedDestinationAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedSenderAddressesInput">AllowedSenderAddressesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.appIdInput">AppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.certificateIdInput">CertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.classNameInput">ClassNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.databaseIdInput">DatabaseIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.datasetInput">DatasetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.destinationAddressInput">DestinationAddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.dispatchNamespaceInput">DispatchNamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.entrypointInput">EntrypointInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.formatInput">FormatInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.idInput">IdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.indexNameInput">IndexNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.instanceNameInput">InstanceNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.jsonInput">JsonInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.jurisdictionInput">JurisdictionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyBase64Input">KeyBase64Input</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyJwkInput">KeyJwkInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespaceIdInput">NamespaceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.networkIdInput">NetworkIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.oldNameInput">OldNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.outboundInput">OutboundInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound">WorkersScriptBindingsOutbound</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.partInput">PartInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.pipelineInput">PipelineInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.queueNameInput">QueueNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.scriptNameInput">ScriptNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.secretNameInput">SecretNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.serviceIdInput">ServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.simpleInput">SimpleInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimple">WorkersScriptBindingsSimple</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.storeIdInput">StoreIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.textInput">TextInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.tunnelIdInput">TunnelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.usagesInput">UsagesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.versionIdInput">VersionIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.workflowNameInput">WorkflowNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.algorithm">Algorithm</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedDestinationAddresses">AllowedDestinationAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedSenderAddresses">AllowedSenderAddresses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.bucketName">BucketName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.certificateId">CertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.className">ClassName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.databaseId">DatabaseId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.dataset">Dataset</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.destinationAddress">DestinationAddress</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.dispatchNamespace">DispatchNamespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.entrypoint">Entrypoint</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.format">Format</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.indexName">IndexName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.instanceName">InstanceName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.json">Json</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.jurisdiction">Jurisdiction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyBase64">KeyBase64</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyJwk">KeyJwk</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespaceId">NamespaceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.networkId">NetworkId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.oldName">OldName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.part">Part</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.pipeline">Pipeline</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.queueName">QueueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.scriptName">ScriptName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.secretName">SecretName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.serviceId">ServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.storeId">StoreId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.text">Text</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.tunnelId">TunnelId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.usages">Usages</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.versionId">VersionId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.workflowName">WorkflowName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Outbound`<sup>Required</sup> <a name="Outbound" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.outbound"></a>

```csharp
public WorkersScriptBindingsOutboundOutputReference Outbound { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutboundOutputReference">WorkersScriptBindingsOutboundOutputReference</a>

---

##### `Simple`<sup>Required</sup> <a name="Simple" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.simple"></a>

```csharp
public WorkersScriptBindingsSimpleOutputReference Simple { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference">WorkersScriptBindingsSimpleOutputReference</a>

---

##### `AlgorithmInput`<sup>Optional</sup> <a name="AlgorithmInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.algorithmInput"></a>

```csharp
public string AlgorithmInput { get; }
```

- *Type:* string

---

##### `AllowedDestinationAddressesInput`<sup>Optional</sup> <a name="AllowedDestinationAddressesInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedDestinationAddressesInput"></a>

```csharp
public string[] AllowedDestinationAddressesInput { get; }
```

- *Type:* string[]

---

##### `AllowedSenderAddressesInput`<sup>Optional</sup> <a name="AllowedSenderAddressesInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedSenderAddressesInput"></a>

```csharp
public string[] AllowedSenderAddressesInput { get; }
```

- *Type:* string[]

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.appIdInput"></a>

```csharp
public string AppIdInput { get; }
```

- *Type:* string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.bucketNameInput"></a>

```csharp
public string BucketNameInput { get; }
```

- *Type:* string

---

##### `CertificateIdInput`<sup>Optional</sup> <a name="CertificateIdInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.certificateIdInput"></a>

```csharp
public string CertificateIdInput { get; }
```

- *Type:* string

---

##### `ClassNameInput`<sup>Optional</sup> <a name="ClassNameInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.classNameInput"></a>

```csharp
public string ClassNameInput { get; }
```

- *Type:* string

---

##### `DatabaseIdInput`<sup>Optional</sup> <a name="DatabaseIdInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.databaseIdInput"></a>

```csharp
public string DatabaseIdInput { get; }
```

- *Type:* string

---

##### `DatasetInput`<sup>Optional</sup> <a name="DatasetInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.datasetInput"></a>

```csharp
public string DatasetInput { get; }
```

- *Type:* string

---

##### `DestinationAddressInput`<sup>Optional</sup> <a name="DestinationAddressInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.destinationAddressInput"></a>

```csharp
public string DestinationAddressInput { get; }
```

- *Type:* string

---

##### `DispatchNamespaceInput`<sup>Optional</sup> <a name="DispatchNamespaceInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.dispatchNamespaceInput"></a>

```csharp
public string DispatchNamespaceInput { get; }
```

- *Type:* string

---

##### `EntrypointInput`<sup>Optional</sup> <a name="EntrypointInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.entrypointInput"></a>

```csharp
public string EntrypointInput { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.formatInput"></a>

```csharp
public string FormatInput { get; }
```

- *Type:* string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.idInput"></a>

```csharp
public string IdInput { get; }
```

- *Type:* string

---

##### `IndexNameInput`<sup>Optional</sup> <a name="IndexNameInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.indexNameInput"></a>

```csharp
public string IndexNameInput { get; }
```

- *Type:* string

---

##### `InstanceNameInput`<sup>Optional</sup> <a name="InstanceNameInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.instanceNameInput"></a>

```csharp
public string InstanceNameInput { get; }
```

- *Type:* string

---

##### `JsonInput`<sup>Optional</sup> <a name="JsonInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.jsonInput"></a>

```csharp
public string JsonInput { get; }
```

- *Type:* string

---

##### `JurisdictionInput`<sup>Optional</sup> <a name="JurisdictionInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.jurisdictionInput"></a>

```csharp
public string JurisdictionInput { get; }
```

- *Type:* string

---

##### `KeyBase64Input`<sup>Optional</sup> <a name="KeyBase64Input" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyBase64Input"></a>

```csharp
public string KeyBase64Input { get; }
```

- *Type:* string

---

##### `KeyJwkInput`<sup>Optional</sup> <a name="KeyJwkInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyJwkInput"></a>

```csharp
public string KeyJwkInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `NamespaceIdInput`<sup>Optional</sup> <a name="NamespaceIdInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespaceIdInput"></a>

```csharp
public string NamespaceIdInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `NetworkIdInput`<sup>Optional</sup> <a name="NetworkIdInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.networkIdInput"></a>

```csharp
public string NetworkIdInput { get; }
```

- *Type:* string

---

##### `OldNameInput`<sup>Optional</sup> <a name="OldNameInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.oldNameInput"></a>

```csharp
public string OldNameInput { get; }
```

- *Type:* string

---

##### `OutboundInput`<sup>Optional</sup> <a name="OutboundInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.outboundInput"></a>

```csharp
public IResolvable|WorkersScriptBindingsOutbound OutboundInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutbound">WorkersScriptBindingsOutbound</a>

---

##### `PartInput`<sup>Optional</sup> <a name="PartInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.partInput"></a>

```csharp
public string PartInput { get; }
```

- *Type:* string

---

##### `PipelineInput`<sup>Optional</sup> <a name="PipelineInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.pipelineInput"></a>

```csharp
public string PipelineInput { get; }
```

- *Type:* string

---

##### `QueueNameInput`<sup>Optional</sup> <a name="QueueNameInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.queueNameInput"></a>

```csharp
public string QueueNameInput { get; }
```

- *Type:* string

---

##### `ScriptNameInput`<sup>Optional</sup> <a name="ScriptNameInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.scriptNameInput"></a>

```csharp
public string ScriptNameInput { get; }
```

- *Type:* string

---

##### `SecretNameInput`<sup>Optional</sup> <a name="SecretNameInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.secretNameInput"></a>

```csharp
public string SecretNameInput { get; }
```

- *Type:* string

---

##### `ServiceIdInput`<sup>Optional</sup> <a name="ServiceIdInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.serviceIdInput"></a>

```csharp
public string ServiceIdInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `SimpleInput`<sup>Optional</sup> <a name="SimpleInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.simpleInput"></a>

```csharp
public IResolvable|WorkersScriptBindingsSimple SimpleInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimple">WorkersScriptBindingsSimple</a>

---

##### `StoreIdInput`<sup>Optional</sup> <a name="StoreIdInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.storeIdInput"></a>

```csharp
public string StoreIdInput { get; }
```

- *Type:* string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.textInput"></a>

```csharp
public string TextInput { get; }
```

- *Type:* string

---

##### `TunnelIdInput`<sup>Optional</sup> <a name="TunnelIdInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.tunnelIdInput"></a>

```csharp
public string TunnelIdInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `UsagesInput`<sup>Optional</sup> <a name="UsagesInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.usagesInput"></a>

```csharp
public string[] UsagesInput { get; }
```

- *Type:* string[]

---

##### `VersionIdInput`<sup>Optional</sup> <a name="VersionIdInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.versionIdInput"></a>

```csharp
public string VersionIdInput { get; }
```

- *Type:* string

---

##### `WorkflowNameInput`<sup>Optional</sup> <a name="WorkflowNameInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.workflowNameInput"></a>

```csharp
public string WorkflowNameInput { get; }
```

- *Type:* string

---

##### `Algorithm`<sup>Required</sup> <a name="Algorithm" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.algorithm"></a>

```csharp
public string Algorithm { get; }
```

- *Type:* string

---

##### `AllowedDestinationAddresses`<sup>Required</sup> <a name="AllowedDestinationAddresses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedDestinationAddresses"></a>

```csharp
public string[] AllowedDestinationAddresses { get; }
```

- *Type:* string[]

---

##### `AllowedSenderAddresses`<sup>Required</sup> <a name="AllowedSenderAddresses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.allowedSenderAddresses"></a>

```csharp
public string[] AllowedSenderAddresses { get; }
```

- *Type:* string[]

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.bucketName"></a>

```csharp
public string BucketName { get; }
```

- *Type:* string

---

##### `CertificateId`<sup>Required</sup> <a name="CertificateId" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.certificateId"></a>

```csharp
public string CertificateId { get; }
```

- *Type:* string

---

##### `ClassName`<sup>Required</sup> <a name="ClassName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.className"></a>

```csharp
public string ClassName { get; }
```

- *Type:* string

---

##### `DatabaseId`<sup>Required</sup> <a name="DatabaseId" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.databaseId"></a>

```csharp
public string DatabaseId { get; }
```

- *Type:* string

---

##### `Dataset`<sup>Required</sup> <a name="Dataset" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.dataset"></a>

```csharp
public string Dataset { get; }
```

- *Type:* string

---

##### `DestinationAddress`<sup>Required</sup> <a name="DestinationAddress" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.destinationAddress"></a>

```csharp
public string DestinationAddress { get; }
```

- *Type:* string

---

##### `DispatchNamespace`<sup>Required</sup> <a name="DispatchNamespace" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.dispatchNamespace"></a>

```csharp
public string DispatchNamespace { get; }
```

- *Type:* string

---

##### `Entrypoint`<sup>Required</sup> <a name="Entrypoint" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.entrypoint"></a>

```csharp
public string Entrypoint { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.format"></a>

```csharp
public string Format { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `IndexName`<sup>Required</sup> <a name="IndexName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.indexName"></a>

```csharp
public string IndexName { get; }
```

- *Type:* string

---

##### `InstanceName`<sup>Required</sup> <a name="InstanceName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.instanceName"></a>

```csharp
public string InstanceName { get; }
```

- *Type:* string

---

##### `Json`<sup>Required</sup> <a name="Json" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.json"></a>

```csharp
public string Json { get; }
```

- *Type:* string

---

##### `Jurisdiction`<sup>Required</sup> <a name="Jurisdiction" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.jurisdiction"></a>

```csharp
public string Jurisdiction { get; }
```

- *Type:* string

---

##### `KeyBase64`<sup>Required</sup> <a name="KeyBase64" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyBase64"></a>

```csharp
public string KeyBase64 { get; }
```

- *Type:* string

---

##### `KeyJwk`<sup>Required</sup> <a name="KeyJwk" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.keyJwk"></a>

```csharp
public string KeyJwk { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `NamespaceId`<sup>Required</sup> <a name="NamespaceId" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.namespaceId"></a>

```csharp
public string NamespaceId { get; }
```

- *Type:* string

---

##### `NetworkId`<sup>Required</sup> <a name="NetworkId" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.networkId"></a>

```csharp
public string NetworkId { get; }
```

- *Type:* string

---

##### `OldName`<sup>Required</sup> <a name="OldName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.oldName"></a>

```csharp
public string OldName { get; }
```

- *Type:* string

---

##### `Part`<sup>Required</sup> <a name="Part" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.part"></a>

```csharp
public string Part { get; }
```

- *Type:* string

---

##### `Pipeline`<sup>Required</sup> <a name="Pipeline" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.pipeline"></a>

```csharp
public string Pipeline { get; }
```

- *Type:* string

---

##### `QueueName`<sup>Required</sup> <a name="QueueName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.queueName"></a>

```csharp
public string QueueName { get; }
```

- *Type:* string

---

##### `ScriptName`<sup>Required</sup> <a name="ScriptName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.scriptName"></a>

```csharp
public string ScriptName { get; }
```

- *Type:* string

---

##### `SecretName`<sup>Required</sup> <a name="SecretName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.secretName"></a>

```csharp
public string SecretName { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.serviceId"></a>

```csharp
public string ServiceId { get; }
```

- *Type:* string

---

##### `StoreId`<sup>Required</sup> <a name="StoreId" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.storeId"></a>

```csharp
public string StoreId { get; }
```

- *Type:* string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.text"></a>

```csharp
public string Text { get; }
```

- *Type:* string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.tunnelId"></a>

```csharp
public string TunnelId { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Usages`<sup>Required</sup> <a name="Usages" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.usages"></a>

```csharp
public string[] Usages { get; }
```

- *Type:* string[]

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.versionId"></a>

```csharp
public string VersionId { get; }
```

- *Type:* string

---

##### `WorkflowName`<sup>Required</sup> <a name="WorkflowName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.workflowName"></a>

```csharp
public string WorkflowName { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkersScriptBindings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindings">WorkersScriptBindings</a>

---


### WorkersScriptBindingsSimpleOutputReference <a name="WorkersScriptBindingsSimpleOutputReference" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptBindingsSimpleOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.property.limitInput">LimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.property.periodInput">PeriodInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.property.limit">Limit</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.property.period">Period</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimple">WorkersScriptBindingsSimple</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LimitInput`<sup>Optional</sup> <a name="LimitInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.property.limitInput"></a>

```csharp
public double LimitInput { get; }
```

- *Type:* double

---

##### `PeriodInput`<sup>Optional</sup> <a name="PeriodInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.property.periodInput"></a>

```csharp
public double PeriodInput { get; }
```

- *Type:* double

---

##### `Limit`<sup>Required</sup> <a name="Limit" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.property.limit"></a>

```csharp
public double Limit { get; }
```

- *Type:* double

---

##### `Period`<sup>Required</sup> <a name="Period" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.property.period"></a>

```csharp
public double Period { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimpleOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkersScriptBindingsSimple InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptBindingsSimple">WorkersScriptBindingsSimple</a>

---


### WorkersScriptLimitsOutputReference <a name="WorkersScriptLimitsOutputReference" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptLimitsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.resetCpuMs">ResetCpuMs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.resetSubrequests">ResetSubrequests</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCpuMs` <a name="ResetCpuMs" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.resetCpuMs"></a>

```csharp
private void ResetCpuMs()
```

##### `ResetSubrequests` <a name="ResetSubrequests" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.resetSubrequests"></a>

```csharp
private void ResetSubrequests()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.cpuMsInput">CpuMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.subrequestsInput">SubrequestsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.cpuMs">CpuMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.subrequests">Subrequests</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimits">WorkersScriptLimits</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CpuMsInput`<sup>Optional</sup> <a name="CpuMsInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.cpuMsInput"></a>

```csharp
public double CpuMsInput { get; }
```

- *Type:* double

---

##### `SubrequestsInput`<sup>Optional</sup> <a name="SubrequestsInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.subrequestsInput"></a>

```csharp
public double SubrequestsInput { get; }
```

- *Type:* double

---

##### `CpuMs`<sup>Required</sup> <a name="CpuMs" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.cpuMs"></a>

```csharp
public double CpuMs { get; }
```

- *Type:* double

---

##### `Subrequests`<sup>Required</sup> <a name="Subrequests" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.subrequests"></a>

```csharp
public double Subrequests { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptLimitsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkersScriptLimits InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptLimits">WorkersScriptLimits</a>

---


### WorkersScriptMigrationsOutputReference <a name="WorkersScriptMigrationsOutputReference" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptMigrationsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putRenamedClasses">PutRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putSteps">PutSteps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putTransferredClasses">PutTransferredClasses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetDeletedClasses">ResetDeletedClasses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetNewClasses">ResetNewClasses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetNewSqliteClasses">ResetNewSqliteClasses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetNewTag">ResetNewTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetOldTag">ResetOldTag</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetRenamedClasses">ResetRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetSteps">ResetSteps</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetTransferredClasses">ResetTransferredClasses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRenamedClasses` <a name="PutRenamedClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putRenamedClasses"></a>

```csharp
private void PutRenamedClasses(IResolvable|WorkersScriptMigrationsRenamedClasses[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putRenamedClasses.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses">WorkersScriptMigrationsRenamedClasses</a>[]

---

##### `PutSteps` <a name="PutSteps" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putSteps"></a>

```csharp
private void PutSteps(IResolvable|WorkersScriptMigrationsSteps[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putSteps.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps">WorkersScriptMigrationsSteps</a>[]

---

##### `PutTransferredClasses` <a name="PutTransferredClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putTransferredClasses"></a>

```csharp
private void PutTransferredClasses(IResolvable|WorkersScriptMigrationsTransferredClasses[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.putTransferredClasses.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses">WorkersScriptMigrationsTransferredClasses</a>[]

---

##### `ResetDeletedClasses` <a name="ResetDeletedClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetDeletedClasses"></a>

```csharp
private void ResetDeletedClasses()
```

##### `ResetNewClasses` <a name="ResetNewClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetNewClasses"></a>

```csharp
private void ResetNewClasses()
```

##### `ResetNewSqliteClasses` <a name="ResetNewSqliteClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetNewSqliteClasses"></a>

```csharp
private void ResetNewSqliteClasses()
```

##### `ResetNewTag` <a name="ResetNewTag" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetNewTag"></a>

```csharp
private void ResetNewTag()
```

##### `ResetOldTag` <a name="ResetOldTag" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetOldTag"></a>

```csharp
private void ResetOldTag()
```

##### `ResetRenamedClasses` <a name="ResetRenamedClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetRenamedClasses"></a>

```csharp
private void ResetRenamedClasses()
```

##### `ResetSteps` <a name="ResetSteps" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetSteps"></a>

```csharp
private void ResetSteps()
```

##### `ResetTransferredClasses` <a name="ResetTransferredClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.resetTransferredClasses"></a>

```csharp
private void ResetTransferredClasses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.renamedClasses">RenamedClasses</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList">WorkersScriptMigrationsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.steps">Steps</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList">WorkersScriptMigrationsStepsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.transferredClasses">TransferredClasses</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList">WorkersScriptMigrationsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.deletedClassesInput">DeletedClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newClassesInput">NewClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newSqliteClassesInput">NewSqliteClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newTagInput">NewTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.oldTagInput">OldTagInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.renamedClassesInput">RenamedClassesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses">WorkersScriptMigrationsRenamedClasses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.stepsInput">StepsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps">WorkersScriptMigrationsSteps</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.transferredClassesInput">TransferredClassesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses">WorkersScriptMigrationsTransferredClasses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.deletedClasses">DeletedClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newClasses">NewClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newSqliteClasses">NewSqliteClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newTag">NewTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.oldTag">OldTag</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrations">WorkersScriptMigrations</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RenamedClasses`<sup>Required</sup> <a name="RenamedClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.renamedClasses"></a>

```csharp
public WorkersScriptMigrationsRenamedClassesList RenamedClasses { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList">WorkersScriptMigrationsRenamedClassesList</a>

---

##### `Steps`<sup>Required</sup> <a name="Steps" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.steps"></a>

```csharp
public WorkersScriptMigrationsStepsList Steps { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList">WorkersScriptMigrationsStepsList</a>

---

##### `TransferredClasses`<sup>Required</sup> <a name="TransferredClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.transferredClasses"></a>

```csharp
public WorkersScriptMigrationsTransferredClassesList TransferredClasses { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList">WorkersScriptMigrationsTransferredClassesList</a>

---

##### `DeletedClassesInput`<sup>Optional</sup> <a name="DeletedClassesInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.deletedClassesInput"></a>

```csharp
public string[] DeletedClassesInput { get; }
```

- *Type:* string[]

---

##### `NewClassesInput`<sup>Optional</sup> <a name="NewClassesInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newClassesInput"></a>

```csharp
public string[] NewClassesInput { get; }
```

- *Type:* string[]

---

##### `NewSqliteClassesInput`<sup>Optional</sup> <a name="NewSqliteClassesInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newSqliteClassesInput"></a>

```csharp
public string[] NewSqliteClassesInput { get; }
```

- *Type:* string[]

---

##### `NewTagInput`<sup>Optional</sup> <a name="NewTagInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newTagInput"></a>

```csharp
public string NewTagInput { get; }
```

- *Type:* string

---

##### `OldTagInput`<sup>Optional</sup> <a name="OldTagInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.oldTagInput"></a>

```csharp
public string OldTagInput { get; }
```

- *Type:* string

---

##### `RenamedClassesInput`<sup>Optional</sup> <a name="RenamedClassesInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.renamedClassesInput"></a>

```csharp
public IResolvable|WorkersScriptMigrationsRenamedClasses[] RenamedClassesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses">WorkersScriptMigrationsRenamedClasses</a>[]

---

##### `StepsInput`<sup>Optional</sup> <a name="StepsInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.stepsInput"></a>

```csharp
public IResolvable|WorkersScriptMigrationsSteps[] StepsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps">WorkersScriptMigrationsSteps</a>[]

---

##### `TransferredClassesInput`<sup>Optional</sup> <a name="TransferredClassesInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.transferredClassesInput"></a>

```csharp
public IResolvable|WorkersScriptMigrationsTransferredClasses[] TransferredClassesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses">WorkersScriptMigrationsTransferredClasses</a>[]

---

##### `DeletedClasses`<sup>Required</sup> <a name="DeletedClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.deletedClasses"></a>

```csharp
public string[] DeletedClasses { get; }
```

- *Type:* string[]

---

##### `NewClasses`<sup>Required</sup> <a name="NewClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newClasses"></a>

```csharp
public string[] NewClasses { get; }
```

- *Type:* string[]

---

##### `NewSqliteClasses`<sup>Required</sup> <a name="NewSqliteClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newSqliteClasses"></a>

```csharp
public string[] NewSqliteClasses { get; }
```

- *Type:* string[]

---

##### `NewTag`<sup>Required</sup> <a name="NewTag" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.newTag"></a>

```csharp
public string NewTag { get; }
```

- *Type:* string

---

##### `OldTag`<sup>Required</sup> <a name="OldTag" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.oldTag"></a>

```csharp
public string OldTag { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkersScriptMigrations InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrations">WorkersScriptMigrations</a>

---


### WorkersScriptMigrationsRenamedClassesList <a name="WorkersScriptMigrationsRenamedClassesList" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptMigrationsRenamedClassesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.get"></a>

```csharp
private WorkersScriptMigrationsRenamedClassesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses">WorkersScriptMigrationsRenamedClasses</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesList.property.internalValue"></a>

```csharp
public IResolvable|WorkersScriptMigrationsRenamedClasses[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses">WorkersScriptMigrationsRenamedClasses</a>[]

---


### WorkersScriptMigrationsRenamedClassesOutputReference <a name="WorkersScriptMigrationsRenamedClassesOutputReference" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptMigrationsRenamedClassesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resetTo">ResetTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resetFrom"></a>

```csharp
private void ResetFrom()
```

##### `ResetTo` <a name="ResetTo" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.resetTo"></a>

```csharp
private void ResetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.toInput">ToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.to">To</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses">WorkersScriptMigrationsRenamedClasses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.toInput"></a>

```csharp
public string ToInput { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.to"></a>

```csharp
public string To { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClassesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkersScriptMigrationsRenamedClasses InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsRenamedClasses">WorkersScriptMigrationsRenamedClasses</a>

---


### WorkersScriptMigrationsStepsList <a name="WorkersScriptMigrationsStepsList" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptMigrationsStepsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.get"></a>

```csharp
private WorkersScriptMigrationsStepsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps">WorkersScriptMigrationsSteps</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsList.property.internalValue"></a>

```csharp
public IResolvable|WorkersScriptMigrationsSteps[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps">WorkersScriptMigrationsSteps</a>[]

---


### WorkersScriptMigrationsStepsOutputReference <a name="WorkersScriptMigrationsStepsOutputReference" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptMigrationsStepsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.putRenamedClasses">PutRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.putTransferredClasses">PutTransferredClasses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetDeletedClasses">ResetDeletedClasses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetNewClasses">ResetNewClasses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetNewSqliteClasses">ResetNewSqliteClasses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetRenamedClasses">ResetRenamedClasses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetTransferredClasses">ResetTransferredClasses</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRenamedClasses` <a name="PutRenamedClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.putRenamedClasses"></a>

```csharp
private void PutRenamedClasses(IResolvable|WorkersScriptMigrationsStepsRenamedClasses[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.putRenamedClasses.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses">WorkersScriptMigrationsStepsRenamedClasses</a>[]

---

##### `PutTransferredClasses` <a name="PutTransferredClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.putTransferredClasses"></a>

```csharp
private void PutTransferredClasses(IResolvable|WorkersScriptMigrationsStepsTransferredClasses[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.putTransferredClasses.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses">WorkersScriptMigrationsStepsTransferredClasses</a>[]

---

##### `ResetDeletedClasses` <a name="ResetDeletedClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetDeletedClasses"></a>

```csharp
private void ResetDeletedClasses()
```

##### `ResetNewClasses` <a name="ResetNewClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetNewClasses"></a>

```csharp
private void ResetNewClasses()
```

##### `ResetNewSqliteClasses` <a name="ResetNewSqliteClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetNewSqliteClasses"></a>

```csharp
private void ResetNewSqliteClasses()
```

##### `ResetRenamedClasses` <a name="ResetRenamedClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetRenamedClasses"></a>

```csharp
private void ResetRenamedClasses()
```

##### `ResetTransferredClasses` <a name="ResetTransferredClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.resetTransferredClasses"></a>

```csharp
private void ResetTransferredClasses()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.renamedClasses">RenamedClasses</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList">WorkersScriptMigrationsStepsRenamedClassesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.transferredClasses">TransferredClasses</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList">WorkersScriptMigrationsStepsTransferredClassesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.deletedClassesInput">DeletedClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newClassesInput">NewClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newSqliteClassesInput">NewSqliteClassesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.renamedClassesInput">RenamedClassesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses">WorkersScriptMigrationsStepsRenamedClasses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.transferredClassesInput">TransferredClassesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses">WorkersScriptMigrationsStepsTransferredClasses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.deletedClasses">DeletedClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newClasses">NewClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newSqliteClasses">NewSqliteClasses</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps">WorkersScriptMigrationsSteps</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `RenamedClasses`<sup>Required</sup> <a name="RenamedClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.renamedClasses"></a>

```csharp
public WorkersScriptMigrationsStepsRenamedClassesList RenamedClasses { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList">WorkersScriptMigrationsStepsRenamedClassesList</a>

---

##### `TransferredClasses`<sup>Required</sup> <a name="TransferredClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.transferredClasses"></a>

```csharp
public WorkersScriptMigrationsStepsTransferredClassesList TransferredClasses { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList">WorkersScriptMigrationsStepsTransferredClassesList</a>

---

##### `DeletedClassesInput`<sup>Optional</sup> <a name="DeletedClassesInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.deletedClassesInput"></a>

```csharp
public string[] DeletedClassesInput { get; }
```

- *Type:* string[]

---

##### `NewClassesInput`<sup>Optional</sup> <a name="NewClassesInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newClassesInput"></a>

```csharp
public string[] NewClassesInput { get; }
```

- *Type:* string[]

---

##### `NewSqliteClassesInput`<sup>Optional</sup> <a name="NewSqliteClassesInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newSqliteClassesInput"></a>

```csharp
public string[] NewSqliteClassesInput { get; }
```

- *Type:* string[]

---

##### `RenamedClassesInput`<sup>Optional</sup> <a name="RenamedClassesInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.renamedClassesInput"></a>

```csharp
public IResolvable|WorkersScriptMigrationsStepsRenamedClasses[] RenamedClassesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses">WorkersScriptMigrationsStepsRenamedClasses</a>[]

---

##### `TransferredClassesInput`<sup>Optional</sup> <a name="TransferredClassesInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.transferredClassesInput"></a>

```csharp
public IResolvable|WorkersScriptMigrationsStepsTransferredClasses[] TransferredClassesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses">WorkersScriptMigrationsStepsTransferredClasses</a>[]

---

##### `DeletedClasses`<sup>Required</sup> <a name="DeletedClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.deletedClasses"></a>

```csharp
public string[] DeletedClasses { get; }
```

- *Type:* string[]

---

##### `NewClasses`<sup>Required</sup> <a name="NewClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newClasses"></a>

```csharp
public string[] NewClasses { get; }
```

- *Type:* string[]

---

##### `NewSqliteClasses`<sup>Required</sup> <a name="NewSqliteClasses" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.newSqliteClasses"></a>

```csharp
public string[] NewSqliteClasses { get; }
```

- *Type:* string[]

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkersScriptMigrationsSteps InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsSteps">WorkersScriptMigrationsSteps</a>

---


### WorkersScriptMigrationsStepsRenamedClassesList <a name="WorkersScriptMigrationsStepsRenamedClassesList" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptMigrationsStepsRenamedClassesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.get"></a>

```csharp
private WorkersScriptMigrationsStepsRenamedClassesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses">WorkersScriptMigrationsStepsRenamedClasses</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesList.property.internalValue"></a>

```csharp
public IResolvable|WorkersScriptMigrationsStepsRenamedClasses[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses">WorkersScriptMigrationsStepsRenamedClasses</a>[]

---


### WorkersScriptMigrationsStepsRenamedClassesOutputReference <a name="WorkersScriptMigrationsStepsRenamedClassesOutputReference" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptMigrationsStepsRenamedClassesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resetTo">ResetTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resetFrom"></a>

```csharp
private void ResetFrom()
```

##### `ResetTo` <a name="ResetTo" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.resetTo"></a>

```csharp
private void ResetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.toInput">ToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.to">To</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses">WorkersScriptMigrationsStepsRenamedClasses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.toInput"></a>

```csharp
public string ToInput { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.to"></a>

```csharp
public string To { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClassesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkersScriptMigrationsStepsRenamedClasses InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsRenamedClasses">WorkersScriptMigrationsStepsRenamedClasses</a>

---


### WorkersScriptMigrationsStepsTransferredClassesList <a name="WorkersScriptMigrationsStepsTransferredClassesList" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptMigrationsStepsTransferredClassesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.get"></a>

```csharp
private WorkersScriptMigrationsStepsTransferredClassesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses">WorkersScriptMigrationsStepsTransferredClasses</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesList.property.internalValue"></a>

```csharp
public IResolvable|WorkersScriptMigrationsStepsTransferredClasses[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses">WorkersScriptMigrationsStepsTransferredClasses</a>[]

---


### WorkersScriptMigrationsStepsTransferredClassesOutputReference <a name="WorkersScriptMigrationsStepsTransferredClassesOutputReference" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptMigrationsStepsTransferredClassesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resetFromScript">ResetFromScript</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resetTo">ResetTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resetFrom"></a>

```csharp
private void ResetFrom()
```

##### `ResetFromScript` <a name="ResetFromScript" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resetFromScript"></a>

```csharp
private void ResetFromScript()
```

##### `ResetTo` <a name="ResetTo" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.resetTo"></a>

```csharp
private void ResetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fromScriptInput">FromScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.toInput">ToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fromScript">FromScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.to">To</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses">WorkersScriptMigrationsStepsTransferredClasses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `FromScriptInput`<sup>Optional</sup> <a name="FromScriptInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fromScriptInput"></a>

```csharp
public string FromScriptInput { get; }
```

- *Type:* string

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.toInput"></a>

```csharp
public string ToInput { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `FromScript`<sup>Required</sup> <a name="FromScript" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.fromScript"></a>

```csharp
public string FromScript { get; }
```

- *Type:* string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.to"></a>

```csharp
public string To { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClassesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkersScriptMigrationsStepsTransferredClasses InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsStepsTransferredClasses">WorkersScriptMigrationsStepsTransferredClasses</a>

---


### WorkersScriptMigrationsTransferredClassesList <a name="WorkersScriptMigrationsTransferredClassesList" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptMigrationsTransferredClassesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.get"></a>

```csharp
private WorkersScriptMigrationsTransferredClassesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses">WorkersScriptMigrationsTransferredClasses</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesList.property.internalValue"></a>

```csharp
public IResolvable|WorkersScriptMigrationsTransferredClasses[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses">WorkersScriptMigrationsTransferredClasses</a>[]

---


### WorkersScriptMigrationsTransferredClassesOutputReference <a name="WorkersScriptMigrationsTransferredClassesOutputReference" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptMigrationsTransferredClassesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resetFrom">ResetFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resetFromScript">ResetFromScript</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resetTo">ResetTo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFrom` <a name="ResetFrom" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resetFrom"></a>

```csharp
private void ResetFrom()
```

##### `ResetFromScript` <a name="ResetFromScript" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resetFromScript"></a>

```csharp
private void ResetFromScript()
```

##### `ResetTo` <a name="ResetTo" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.resetTo"></a>

```csharp
private void ResetTo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fromInput">FromInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fromScriptInput">FromScriptInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.toInput">ToInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.from">From</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fromScript">FromScript</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.to">To</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses">WorkersScriptMigrationsTransferredClasses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FromInput`<sup>Optional</sup> <a name="FromInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fromInput"></a>

```csharp
public string FromInput { get; }
```

- *Type:* string

---

##### `FromScriptInput`<sup>Optional</sup> <a name="FromScriptInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fromScriptInput"></a>

```csharp
public string FromScriptInput { get; }
```

- *Type:* string

---

##### `ToInput`<sup>Optional</sup> <a name="ToInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.toInput"></a>

```csharp
public string ToInput { get; }
```

- *Type:* string

---

##### `From`<sup>Required</sup> <a name="From" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.from"></a>

```csharp
public string From { get; }
```

- *Type:* string

---

##### `FromScript`<sup>Required</sup> <a name="FromScript" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.fromScript"></a>

```csharp
public string FromScript { get; }
```

- *Type:* string

---

##### `To`<sup>Required</sup> <a name="To" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.to"></a>

```csharp
public string To { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClassesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkersScriptMigrationsTransferredClasses InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptMigrationsTransferredClasses">WorkersScriptMigrationsTransferredClasses</a>

---


### WorkersScriptNamedHandlersList <a name="WorkersScriptNamedHandlersList" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptNamedHandlersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.get"></a>

```csharp
private WorkersScriptNamedHandlersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### WorkersScriptNamedHandlersOutputReference <a name="WorkersScriptNamedHandlersOutputReference" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptNamedHandlersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.handlers">Handlers</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlers">WorkersScriptNamedHandlers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Handlers`<sup>Required</sup> <a name="Handlers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.handlers"></a>

```csharp
public string[] Handlers { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlersOutputReference.property.internalValue"></a>

```csharp
public WorkersScriptNamedHandlers InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptNamedHandlers">WorkersScriptNamedHandlers</a>

---


### WorkersScriptObservabilityLogsOutputReference <a name="WorkersScriptObservabilityLogsOutputReference" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptObservabilityLogsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resetHeadSamplingRate">ResetHeadSamplingRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resetPersist">ResetPersist</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resetDestinations"></a>

```csharp
private void ResetDestinations()
```

##### `ResetHeadSamplingRate` <a name="ResetHeadSamplingRate" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resetHeadSamplingRate"></a>

```csharp
private void ResetHeadSamplingRate()
```

##### `ResetPersist` <a name="ResetPersist" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.resetPersist"></a>

```csharp
private void ResetPersist()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.headSamplingRateInput">HeadSamplingRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.invocationLogsInput">InvocationLogsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.persistInput">PersistInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.destinations">Destinations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.headSamplingRate">HeadSamplingRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.invocationLogs">InvocationLogs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.persist">Persist</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs">WorkersScriptObservabilityLogs</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.destinationsInput"></a>

```csharp
public string[] DestinationsInput { get; }
```

- *Type:* string[]

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HeadSamplingRateInput`<sup>Optional</sup> <a name="HeadSamplingRateInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.headSamplingRateInput"></a>

```csharp
public double HeadSamplingRateInput { get; }
```

- *Type:* double

---

##### `InvocationLogsInput`<sup>Optional</sup> <a name="InvocationLogsInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.invocationLogsInput"></a>

```csharp
public bool|IResolvable InvocationLogsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PersistInput`<sup>Optional</sup> <a name="PersistInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.persistInput"></a>

```csharp
public bool|IResolvable PersistInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.destinations"></a>

```csharp
public string[] Destinations { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HeadSamplingRate`<sup>Required</sup> <a name="HeadSamplingRate" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.headSamplingRate"></a>

```csharp
public double HeadSamplingRate { get; }
```

- *Type:* double

---

##### `InvocationLogs`<sup>Required</sup> <a name="InvocationLogs" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.invocationLogs"></a>

```csharp
public bool|IResolvable InvocationLogs { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Persist`<sup>Required</sup> <a name="Persist" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.persist"></a>

```csharp
public bool|IResolvable Persist { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkersScriptObservabilityLogs InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs">WorkersScriptObservabilityLogs</a>

---


### WorkersScriptObservabilityOutputReference <a name="WorkersScriptObservabilityOutputReference" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptObservabilityOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.putLogs">PutLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.putTraces">PutTraces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resetHeadSamplingRate">ResetHeadSamplingRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resetLogs">ResetLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resetTraces">ResetTraces</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLogs` <a name="PutLogs" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.putLogs"></a>

```csharp
private void PutLogs(WorkersScriptObservabilityLogs Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.putLogs.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs">WorkersScriptObservabilityLogs</a>

---

##### `PutTraces` <a name="PutTraces" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.putTraces"></a>

```csharp
private void PutTraces(WorkersScriptObservabilityTraces Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.putTraces.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTraces">WorkersScriptObservabilityTraces</a>

---

##### `ResetHeadSamplingRate` <a name="ResetHeadSamplingRate" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resetHeadSamplingRate"></a>

```csharp
private void ResetHeadSamplingRate()
```

##### `ResetLogs` <a name="ResetLogs" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resetLogs"></a>

```csharp
private void ResetLogs()
```

##### `ResetTraces` <a name="ResetTraces" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.resetTraces"></a>

```csharp
private void ResetTraces()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.logs">Logs</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference">WorkersScriptObservabilityLogsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.traces">Traces</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference">WorkersScriptObservabilityTracesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.headSamplingRateInput">HeadSamplingRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.logsInput">LogsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs">WorkersScriptObservabilityLogs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.tracesInput">TracesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTraces">WorkersScriptObservabilityTraces</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.headSamplingRate">HeadSamplingRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservability">WorkersScriptObservability</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Logs`<sup>Required</sup> <a name="Logs" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.logs"></a>

```csharp
public WorkersScriptObservabilityLogsOutputReference Logs { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogsOutputReference">WorkersScriptObservabilityLogsOutputReference</a>

---

##### `Traces`<sup>Required</sup> <a name="Traces" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.traces"></a>

```csharp
public WorkersScriptObservabilityTracesOutputReference Traces { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference">WorkersScriptObservabilityTracesOutputReference</a>

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HeadSamplingRateInput`<sup>Optional</sup> <a name="HeadSamplingRateInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.headSamplingRateInput"></a>

```csharp
public double HeadSamplingRateInput { get; }
```

- *Type:* double

---

##### `LogsInput`<sup>Optional</sup> <a name="LogsInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.logsInput"></a>

```csharp
public IResolvable|WorkersScriptObservabilityLogs LogsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityLogs">WorkersScriptObservabilityLogs</a>

---

##### `TracesInput`<sup>Optional</sup> <a name="TracesInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.tracesInput"></a>

```csharp
public IResolvable|WorkersScriptObservabilityTraces TracesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTraces">WorkersScriptObservabilityTraces</a>

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HeadSamplingRate`<sup>Required</sup> <a name="HeadSamplingRate" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.headSamplingRate"></a>

```csharp
public double HeadSamplingRate { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkersScriptObservability InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservability">WorkersScriptObservability</a>

---


### WorkersScriptObservabilityTracesOutputReference <a name="WorkersScriptObservabilityTracesOutputReference" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptObservabilityTracesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.resetDestinations">ResetDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.resetHeadSamplingRate">ResetHeadSamplingRate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.resetPersist">ResetPersist</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDestinations` <a name="ResetDestinations" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.resetDestinations"></a>

```csharp
private void ResetDestinations()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.resetEnabled"></a>

```csharp
private void ResetEnabled()
```

##### `ResetHeadSamplingRate` <a name="ResetHeadSamplingRate" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.resetHeadSamplingRate"></a>

```csharp
private void ResetHeadSamplingRate()
```

##### `ResetPersist` <a name="ResetPersist" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.resetPersist"></a>

```csharp
private void ResetPersist()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.property.destinationsInput">DestinationsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.property.headSamplingRateInput">HeadSamplingRateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.property.persistInput">PersistInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.property.destinations">Destinations</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.property.headSamplingRate">HeadSamplingRate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.property.persist">Persist</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTraces">WorkersScriptObservabilityTraces</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DestinationsInput`<sup>Optional</sup> <a name="DestinationsInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.property.destinationsInput"></a>

```csharp
public string[] DestinationsInput { get; }
```

- *Type:* string[]

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HeadSamplingRateInput`<sup>Optional</sup> <a name="HeadSamplingRateInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.property.headSamplingRateInput"></a>

```csharp
public double HeadSamplingRateInput { get; }
```

- *Type:* double

---

##### `PersistInput`<sup>Optional</sup> <a name="PersistInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.property.persistInput"></a>

```csharp
public bool|IResolvable PersistInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Destinations`<sup>Required</sup> <a name="Destinations" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.property.destinations"></a>

```csharp
public string[] Destinations { get; }
```

- *Type:* string[]

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `HeadSamplingRate`<sup>Required</sup> <a name="HeadSamplingRate" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.property.headSamplingRate"></a>

```csharp
public double HeadSamplingRate { get; }
```

- *Type:* double

---

##### `Persist`<sup>Required</sup> <a name="Persist" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.property.persist"></a>

```csharp
public bool|IResolvable Persist { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTracesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkersScriptObservabilityTraces InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptObservabilityTraces">WorkersScriptObservabilityTraces</a>

---


### WorkersScriptPlacementOutputReference <a name="WorkersScriptPlacementOutputReference" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptPlacementOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.resetMode"></a>

```csharp
private void ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.lastAnalyzedAt">LastAnalyzedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.status">Status</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.target">Target</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetList">WorkersScriptPlacementTargetList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.modeInput">ModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.mode">Mode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `LastAnalyzedAt`<sup>Required</sup> <a name="LastAnalyzedAt" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.lastAnalyzedAt"></a>

```csharp
public string LastAnalyzedAt { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.status"></a>

```csharp
public string Status { get; }
```

- *Type:* string

---

##### `Target`<sup>Required</sup> <a name="Target" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.target"></a>

```csharp
public WorkersScriptPlacementTargetList Target { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetList">WorkersScriptPlacementTargetList</a>

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.modeInput"></a>

```csharp
public string ModeInput { get; }
```

- *Type:* string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.mode"></a>

```csharp
public string Mode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkersScriptPlacement InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacement">WorkersScriptPlacement</a>

---


### WorkersScriptPlacementTargetList <a name="WorkersScriptPlacementTargetList" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptPlacementTargetList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetList.get"></a>

```csharp
private WorkersScriptPlacementTargetOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### WorkersScriptPlacementTargetOutputReference <a name="WorkersScriptPlacementTargetOutputReference" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptPlacementTargetOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.property.hostname">Hostname</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.property.region">Region</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTarget">WorkersScriptPlacementTarget</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Hostname`<sup>Required</sup> <a name="Hostname" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.property.hostname"></a>

```csharp
public string Hostname { get; }
```

- *Type:* string

---

##### `Region`<sup>Required</sup> <a name="Region" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.property.region"></a>

```csharp
public string Region { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTargetOutputReference.property.internalValue"></a>

```csharp
public WorkersScriptPlacementTarget InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptPlacementTarget">WorkersScriptPlacementTarget</a>

---


### WorkersScriptTailConsumersList <a name="WorkersScriptTailConsumersList" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptTailConsumersList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.get"></a>

```csharp
private WorkersScriptTailConsumersOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersList.property.internalValue"></a>

```csharp
public IResolvable|WorkersScriptTailConsumers[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a>[]

---


### WorkersScriptTailConsumersOutputReference <a name="WorkersScriptTailConsumersOutputReference" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new WorkersScriptTailConsumersOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resetEnvironment">ResetEnvironment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resetNamespace">ResetNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnvironment` <a name="ResetEnvironment" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resetEnvironment"></a>

```csharp
private void ResetEnvironment()
```

##### `ResetNamespace` <a name="ResetNamespace" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.resetNamespace"></a>

```csharp
private void ResetNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.environmentInput">EnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.namespaceInput">NamespaceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.serviceInput">ServiceInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.environment">Environment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.namespace">Namespace</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.service">Service</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnvironmentInput`<sup>Optional</sup> <a name="EnvironmentInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.environmentInput"></a>

```csharp
public string EnvironmentInput { get; }
```

- *Type:* string

---

##### `NamespaceInput`<sup>Optional</sup> <a name="NamespaceInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.namespaceInput"></a>

```csharp
public string NamespaceInput { get; }
```

- *Type:* string

---

##### `ServiceInput`<sup>Optional</sup> <a name="ServiceInput" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.serviceInput"></a>

```csharp
public string ServiceInput { get; }
```

- *Type:* string

---

##### `Environment`<sup>Required</sup> <a name="Environment" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.environment"></a>

```csharp
public string Environment { get; }
```

- *Type:* string

---

##### `Namespace`<sup>Required</sup> <a name="Namespace" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.namespace"></a>

```csharp
public string Namespace { get; }
```

- *Type:* string

---

##### `Service`<sup>Required</sup> <a name="Service" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.service"></a>

```csharp
public string Service { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumersOutputReference.property.internalValue"></a>

```csharp
public IResolvable|WorkersScriptTailConsumers InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.workersScript.WorkersScriptTailConsumers">WorkersScriptTailConsumers</a>

---



