# `hyperdriveConfig` Submodule <a name="`hyperdriveConfig` Submodule" id="@cdktn/provider-cloudflare.hyperdriveConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### HyperdriveConfig <a name="HyperdriveConfig" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/hyperdrive_config cloudflare_hyperdrive_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new HyperdriveConfig(Construct Scope, string Id, HyperdriveConfigConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig">HyperdriveConfigConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig">HyperdriveConfigConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putCaching">PutCaching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putMtls">PutMtls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putOrigin">PutOrigin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.resetCaching">ResetCaching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.resetMtls">ResetMtls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.resetOriginConnectionLimit">ResetOriginConnectionLimit</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCaching` <a name="PutCaching" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putCaching"></a>

```csharp
private void PutCaching(HyperdriveConfigCaching Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putCaching.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching">HyperdriveConfigCaching</a>

---

##### `PutMtls` <a name="PutMtls" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putMtls"></a>

```csharp
private void PutMtls(HyperdriveConfigMtls Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putMtls.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls">HyperdriveConfigMtls</a>

---

##### `PutOrigin` <a name="PutOrigin" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putOrigin"></a>

```csharp
private void PutOrigin(HyperdriveConfigOrigin Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.putOrigin.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin">HyperdriveConfigOrigin</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

##### `ResetCaching` <a name="ResetCaching" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.resetCaching"></a>

```csharp
private void ResetCaching()
```

##### `ResetMtls` <a name="ResetMtls" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.resetMtls"></a>

```csharp
private void ResetMtls()
```

##### `ResetOriginConnectionLimit` <a name="ResetOriginConnectionLimit" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.resetOriginConnectionLimit"></a>

```csharp
private void ResetOriginConnectionLimit()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a HyperdriveConfig resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

HyperdriveConfig.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

HyperdriveConfig.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

HyperdriveConfig.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

HyperdriveConfig.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a HyperdriveConfig resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the HyperdriveConfig to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing HyperdriveConfig that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/hyperdrive_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the HyperdriveConfig to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.caching">Caching</a></code> | <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference">HyperdriveConfigCachingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.mtls">Mtls</a></code> | <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference">HyperdriveConfigMtlsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.origin">Origin</a></code> | <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference">HyperdriveConfigOriginOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.cachingInput">CachingInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching">HyperdriveConfigCaching</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.mtlsInput">MtlsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls">HyperdriveConfigMtls</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.originConnectionLimitInput">OriginConnectionLimitInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.originInput">OriginInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin">HyperdriveConfigOrigin</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.originConnectionLimit">OriginConnectionLimit</a></code> | <code>double</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Caching`<sup>Required</sup> <a name="Caching" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.caching"></a>

```csharp
public HyperdriveConfigCachingOutputReference Caching { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference">HyperdriveConfigCachingOutputReference</a>

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; }
```

- *Type:* string

---

##### `Mtls`<sup>Required</sup> <a name="Mtls" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.mtls"></a>

```csharp
public HyperdriveConfigMtlsOutputReference Mtls { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference">HyperdriveConfigMtlsOutputReference</a>

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.origin"></a>

```csharp
public HyperdriveConfigOriginOutputReference Origin { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference">HyperdriveConfigOriginOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `CachingInput`<sup>Optional</sup> <a name="CachingInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.cachingInput"></a>

```csharp
public IResolvable|HyperdriveConfigCaching CachingInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching">HyperdriveConfigCaching</a>

---

##### `MtlsInput`<sup>Optional</sup> <a name="MtlsInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.mtlsInput"></a>

```csharp
public IResolvable|HyperdriveConfigMtls MtlsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls">HyperdriveConfigMtls</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OriginConnectionLimitInput`<sup>Optional</sup> <a name="OriginConnectionLimitInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.originConnectionLimitInput"></a>

```csharp
public double OriginConnectionLimitInput { get; }
```

- *Type:* double

---

##### `OriginInput`<sup>Optional</sup> <a name="OriginInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.originInput"></a>

```csharp
public IResolvable|HyperdriveConfigOrigin OriginInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin">HyperdriveConfigOrigin</a>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OriginConnectionLimit`<sup>Required</sup> <a name="OriginConnectionLimit" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.originConnectionLimit"></a>

```csharp
public double OriginConnectionLimit { get; }
```

- *Type:* double

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfig.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### HyperdriveConfigCaching <a name="HyperdriveConfigCaching" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new HyperdriveConfigCaching {
    bool|IResolvable Disabled = null,
    double MaxAge = null,
    double StaleWhileRevalidate = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Set to true to disable caching of SQL responses. Default is false. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching.property.maxAge">MaxAge</a></code> | <code>double</code> | Specify the maximum duration (in seconds) items should persist in the cache. Defaults to 60 seconds if not specified. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching.property.staleWhileRevalidate">StaleWhileRevalidate</a></code> | <code>double</code> | Specify the number of seconds the cache may serve a stale response. Defaults to 15 seconds if not specified. |

---

##### `Disabled`<sup>Optional</sup> <a name="Disabled" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Set to true to disable caching of SQL responses. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/hyperdrive_config#disabled HyperdriveConfig#disabled}

---

##### `MaxAge`<sup>Optional</sup> <a name="MaxAge" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching.property.maxAge"></a>

```csharp
public double MaxAge { get; set; }
```

- *Type:* double

Specify the maximum duration (in seconds) items should persist in the cache. Defaults to 60 seconds if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/hyperdrive_config#max_age HyperdriveConfig#max_age}

---

##### `StaleWhileRevalidate`<sup>Optional</sup> <a name="StaleWhileRevalidate" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching.property.staleWhileRevalidate"></a>

```csharp
public double StaleWhileRevalidate { get; set; }
```

- *Type:* double

Specify the number of seconds the cache may serve a stale response. Defaults to 15 seconds if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/hyperdrive_config#stale_while_revalidate HyperdriveConfig#stale_while_revalidate}

---

### HyperdriveConfigConfig <a name="HyperdriveConfigConfig" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new HyperdriveConfigConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string Name,
    HyperdriveConfigOrigin Origin,
    string AccountId = null,
    HyperdriveConfigCaching Caching = null,
    HyperdriveConfigMtls Mtls = null,
    double OriginConnectionLimit = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.name">Name</a></code> | <code>string</code> | The name of the Hyperdrive configuration. Used to identify the configuration in the Cloudflare dashboard and API. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.origin">Origin</a></code> | <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin">HyperdriveConfigOrigin</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/hyperdrive_config#origin HyperdriveConfig#origin}. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.accountId">AccountId</a></code> | <code>string</code> | Define configurations using a unique string identifier. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.caching">Caching</a></code> | <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching">HyperdriveConfigCaching</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/hyperdrive_config#caching HyperdriveConfig#caching}. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.mtls">Mtls</a></code> | <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls">HyperdriveConfigMtls</a></code> | mTLS configuration for the origin connection. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.originConnectionLimit">OriginConnectionLimit</a></code> | <code>double</code> | The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the Hyperdrive configuration. Used to identify the configuration in the Cloudflare dashboard and API.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/hyperdrive_config#name HyperdriveConfig#name}

---

##### `Origin`<sup>Required</sup> <a name="Origin" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.origin"></a>

```csharp
public HyperdriveConfigOrigin Origin { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin">HyperdriveConfigOrigin</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/hyperdrive_config#origin HyperdriveConfig#origin}.

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Define configurations using a unique string identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/hyperdrive_config#account_id HyperdriveConfig#account_id}

---

##### `Caching`<sup>Optional</sup> <a name="Caching" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.caching"></a>

```csharp
public HyperdriveConfigCaching Caching { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching">HyperdriveConfigCaching</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/hyperdrive_config#caching HyperdriveConfig#caching}.

---

##### `Mtls`<sup>Optional</sup> <a name="Mtls" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.mtls"></a>

```csharp
public HyperdriveConfigMtls Mtls { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls">HyperdriveConfigMtls</a>

mTLS configuration for the origin connection.

Cannot be used with VPC Service origins; TLS must be managed on the VPC Service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/hyperdrive_config#mtls HyperdriveConfig#mtls}

---

##### `OriginConnectionLimit`<sup>Optional</sup> <a name="OriginConnectionLimit" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigConfig.property.originConnectionLimit"></a>

```csharp
public double OriginConnectionLimit { get; set; }
```

- *Type:* double

The (soft) maximum number of connections the Hyperdrive is allowed to make to the origin database.

Maximum allowed: 20 for free tier accounts, 100 for paid tier accounts.
If not specified, defaults to 20 for free tier and 60 for paid tier.
Contact Cloudflare if you need a higher limit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/hyperdrive_config#origin_connection_limit HyperdriveConfig#origin_connection_limit}

---

### HyperdriveConfigMtls <a name="HyperdriveConfigMtls" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new HyperdriveConfigMtls {
    string CaCertificateId = null,
    string MtlsCertificateId = null,
    string Sslmode = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls.property.caCertificateId">CaCertificateId</a></code> | <code>string</code> | Define CA certificate ID obtained after uploading CA cert. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls.property.mtlsCertificateId">MtlsCertificateId</a></code> | <code>string</code> | Define mTLS certificate ID obtained after uploading client cert. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls.property.sslmode">Sslmode</a></code> | <code>string</code> | Set SSL mode to 'require', 'verify-ca', or 'verify-full' to verify the CA. |

---

##### `CaCertificateId`<sup>Optional</sup> <a name="CaCertificateId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls.property.caCertificateId"></a>

```csharp
public string CaCertificateId { get; set; }
```

- *Type:* string

Define CA certificate ID obtained after uploading CA cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/hyperdrive_config#ca_certificate_id HyperdriveConfig#ca_certificate_id}

---

##### `MtlsCertificateId`<sup>Optional</sup> <a name="MtlsCertificateId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls.property.mtlsCertificateId"></a>

```csharp
public string MtlsCertificateId { get; set; }
```

- *Type:* string

Define mTLS certificate ID obtained after uploading client cert.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/hyperdrive_config#mtls_certificate_id HyperdriveConfig#mtls_certificate_id}

---

##### `Sslmode`<sup>Optional</sup> <a name="Sslmode" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls.property.sslmode"></a>

```csharp
public string Sslmode { get; set; }
```

- *Type:* string

Set SSL mode to 'require', 'verify-ca', or 'verify-full' to verify the CA.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/hyperdrive_config#sslmode HyperdriveConfig#sslmode}

---

### HyperdriveConfigOrigin <a name="HyperdriveConfigOrigin" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new HyperdriveConfigOrigin {
    string Database,
    string Password,
    string Scheme,
    string User,
    string AccessClientId = null,
    string AccessClientSecret = null,
    string Host = null,
    double Port = null,
    string ServiceId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.database">Database</a></code> | <code>string</code> | Set the name of your origin database. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.password">Password</a></code> | <code>string</code> | Set the password needed to access your origin database. The API never returns this write-only value. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.scheme">Scheme</a></code> | <code>string</code> | Specifies the URL scheme used to connect to your origin database. Available values: "postgres", "postgresql", "mysql". |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.user">User</a></code> | <code>string</code> | Set the user of your origin database. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.accessClientId">AccessClientId</a></code> | <code>string</code> | Defines the Client ID of the Access token to use when connecting to the origin database. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.accessClientSecret">AccessClientSecret</a></code> | <code>string</code> | Defines the Client Secret of the Access Token to use when connecting to the origin database. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.host">Host</a></code> | <code>string</code> | Defines the host (hostname or IP) of your origin database. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.port">Port</a></code> | <code>double</code> | Defines the port of your origin database. Defaults to 5432 for PostgreSQL or 3306 for MySQL if not specified. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.serviceId">ServiceId</a></code> | <code>string</code> | The identifier of the Workers VPC Service to connect through. |

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.database"></a>

```csharp
public string Database { get; set; }
```

- *Type:* string

Set the name of your origin database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/hyperdrive_config#database HyperdriveConfig#database}

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.password"></a>

```csharp
public string Password { get; set; }
```

- *Type:* string

Set the password needed to access your origin database. The API never returns this write-only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/hyperdrive_config#password HyperdriveConfig#password}

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.scheme"></a>

```csharp
public string Scheme { get; set; }
```

- *Type:* string

Specifies the URL scheme used to connect to your origin database. Available values: "postgres", "postgresql", "mysql".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/hyperdrive_config#scheme HyperdriveConfig#scheme}

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.user"></a>

```csharp
public string User { get; set; }
```

- *Type:* string

Set the user of your origin database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/hyperdrive_config#user HyperdriveConfig#user}

---

##### `AccessClientId`<sup>Optional</sup> <a name="AccessClientId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.accessClientId"></a>

```csharp
public string AccessClientId { get; set; }
```

- *Type:* string

Defines the Client ID of the Access token to use when connecting to the origin database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/hyperdrive_config#access_client_id HyperdriveConfig#access_client_id}

---

##### `AccessClientSecret`<sup>Optional</sup> <a name="AccessClientSecret" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.accessClientSecret"></a>

```csharp
public string AccessClientSecret { get; set; }
```

- *Type:* string

Defines the Client Secret of the Access Token to use when connecting to the origin database.

The API never returns this write-only value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/hyperdrive_config#access_client_secret HyperdriveConfig#access_client_secret}

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.host"></a>

```csharp
public string Host { get; set; }
```

- *Type:* string

Defines the host (hostname or IP) of your origin database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/hyperdrive_config#host HyperdriveConfig#host}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.port"></a>

```csharp
public double Port { get; set; }
```

- *Type:* double

Defines the port of your origin database. Defaults to 5432 for PostgreSQL or 3306 for MySQL if not specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/hyperdrive_config#port HyperdriveConfig#port}

---

##### `ServiceId`<sup>Optional</sup> <a name="ServiceId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin.property.serviceId"></a>

```csharp
public string ServiceId { get; set; }
```

- *Type:* string

The identifier of the Workers VPC Service to connect through.

Hyperdrive will egress through the specified VPC Service to reach the origin database.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/hyperdrive_config#service_id HyperdriveConfig#service_id}

---

## Classes <a name="Classes" id="Classes"></a>

### HyperdriveConfigCachingOutputReference <a name="HyperdriveConfigCachingOutputReference" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new HyperdriveConfigCachingOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.resetDisabled">ResetDisabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.resetMaxAge">ResetMaxAge</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.resetStaleWhileRevalidate">ResetStaleWhileRevalidate</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDisabled` <a name="ResetDisabled" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.resetDisabled"></a>

```csharp
private void ResetDisabled()
```

##### `ResetMaxAge` <a name="ResetMaxAge" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.resetMaxAge"></a>

```csharp
private void ResetMaxAge()
```

##### `ResetStaleWhileRevalidate` <a name="ResetStaleWhileRevalidate" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.resetStaleWhileRevalidate"></a>

```csharp
private void ResetStaleWhileRevalidate()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.disabledInput">DisabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.maxAgeInput">MaxAgeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.staleWhileRevalidateInput">StaleWhileRevalidateInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.disabled">Disabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.maxAge">MaxAge</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.staleWhileRevalidate">StaleWhileRevalidate</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching">HyperdriveConfigCaching</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `DisabledInput`<sup>Optional</sup> <a name="DisabledInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.disabledInput"></a>

```csharp
public bool|IResolvable DisabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxAgeInput`<sup>Optional</sup> <a name="MaxAgeInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.maxAgeInput"></a>

```csharp
public double MaxAgeInput { get; }
```

- *Type:* double

---

##### `StaleWhileRevalidateInput`<sup>Optional</sup> <a name="StaleWhileRevalidateInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.staleWhileRevalidateInput"></a>

```csharp
public double StaleWhileRevalidateInput { get; }
```

- *Type:* double

---

##### `Disabled`<sup>Required</sup> <a name="Disabled" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.disabled"></a>

```csharp
public bool|IResolvable Disabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `MaxAge`<sup>Required</sup> <a name="MaxAge" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.maxAge"></a>

```csharp
public double MaxAge { get; }
```

- *Type:* double

---

##### `StaleWhileRevalidate`<sup>Required</sup> <a name="StaleWhileRevalidate" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.staleWhileRevalidate"></a>

```csharp
public double StaleWhileRevalidate { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCachingOutputReference.property.internalValue"></a>

```csharp
public IResolvable|HyperdriveConfigCaching InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigCaching">HyperdriveConfigCaching</a>

---


### HyperdriveConfigMtlsOutputReference <a name="HyperdriveConfigMtlsOutputReference" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new HyperdriveConfigMtlsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.resetCaCertificateId">ResetCaCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.resetMtlsCertificateId">ResetMtlsCertificateId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.resetSslmode">ResetSslmode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCaCertificateId` <a name="ResetCaCertificateId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.resetCaCertificateId"></a>

```csharp
private void ResetCaCertificateId()
```

##### `ResetMtlsCertificateId` <a name="ResetMtlsCertificateId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.resetMtlsCertificateId"></a>

```csharp
private void ResetMtlsCertificateId()
```

##### `ResetSslmode` <a name="ResetSslmode" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.resetSslmode"></a>

```csharp
private void ResetSslmode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.caCertificateIdInput">CaCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.mtlsCertificateIdInput">MtlsCertificateIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.sslmodeInput">SslmodeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.caCertificateId">CaCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.mtlsCertificateId">MtlsCertificateId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.sslmode">Sslmode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls">HyperdriveConfigMtls</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CaCertificateIdInput`<sup>Optional</sup> <a name="CaCertificateIdInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.caCertificateIdInput"></a>

```csharp
public string CaCertificateIdInput { get; }
```

- *Type:* string

---

##### `MtlsCertificateIdInput`<sup>Optional</sup> <a name="MtlsCertificateIdInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.mtlsCertificateIdInput"></a>

```csharp
public string MtlsCertificateIdInput { get; }
```

- *Type:* string

---

##### `SslmodeInput`<sup>Optional</sup> <a name="SslmodeInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.sslmodeInput"></a>

```csharp
public string SslmodeInput { get; }
```

- *Type:* string

---

##### `CaCertificateId`<sup>Required</sup> <a name="CaCertificateId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.caCertificateId"></a>

```csharp
public string CaCertificateId { get; }
```

- *Type:* string

---

##### `MtlsCertificateId`<sup>Required</sup> <a name="MtlsCertificateId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.mtlsCertificateId"></a>

```csharp
public string MtlsCertificateId { get; }
```

- *Type:* string

---

##### `Sslmode`<sup>Required</sup> <a name="Sslmode" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.sslmode"></a>

```csharp
public string Sslmode { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtlsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|HyperdriveConfigMtls InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigMtls">HyperdriveConfigMtls</a>

---


### HyperdriveConfigOriginOutputReference <a name="HyperdriveConfigOriginOutputReference" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new HyperdriveConfigOriginOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resetAccessClientId">ResetAccessClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resetAccessClientSecret">ResetAccessClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resetServiceId">ResetServiceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessClientId` <a name="ResetAccessClientId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resetAccessClientId"></a>

```csharp
private void ResetAccessClientId()
```

##### `ResetAccessClientSecret` <a name="ResetAccessClientSecret" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resetAccessClientSecret"></a>

```csharp
private void ResetAccessClientSecret()
```

##### `ResetHost` <a name="ResetHost" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resetHost"></a>

```csharp
private void ResetHost()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resetPort"></a>

```csharp
private void ResetPort()
```

##### `ResetServiceId` <a name="ResetServiceId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.resetServiceId"></a>

```csharp
private void ResetServiceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.accessClientIdInput">AccessClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.accessClientSecretInput">AccessClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.databaseInput">DatabaseInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.hostInput">HostInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.passwordInput">PasswordInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.portInput">PortInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.schemeInput">SchemeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.serviceIdInput">ServiceIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.userInput">UserInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.accessClientId">AccessClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.accessClientSecret">AccessClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.database">Database</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.host">Host</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.password">Password</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.port">Port</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.scheme">Scheme</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.serviceId">ServiceId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.user">User</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin">HyperdriveConfigOrigin</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessClientIdInput`<sup>Optional</sup> <a name="AccessClientIdInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.accessClientIdInput"></a>

```csharp
public string AccessClientIdInput { get; }
```

- *Type:* string

---

##### `AccessClientSecretInput`<sup>Optional</sup> <a name="AccessClientSecretInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.accessClientSecretInput"></a>

```csharp
public string AccessClientSecretInput { get; }
```

- *Type:* string

---

##### `DatabaseInput`<sup>Optional</sup> <a name="DatabaseInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.databaseInput"></a>

```csharp
public string DatabaseInput { get; }
```

- *Type:* string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.hostInput"></a>

```csharp
public string HostInput { get; }
```

- *Type:* string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.passwordInput"></a>

```csharp
public string PasswordInput { get; }
```

- *Type:* string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.portInput"></a>

```csharp
public double PortInput { get; }
```

- *Type:* double

---

##### `SchemeInput`<sup>Optional</sup> <a name="SchemeInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.schemeInput"></a>

```csharp
public string SchemeInput { get; }
```

- *Type:* string

---

##### `ServiceIdInput`<sup>Optional</sup> <a name="ServiceIdInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.serviceIdInput"></a>

```csharp
public string ServiceIdInput { get; }
```

- *Type:* string

---

##### `UserInput`<sup>Optional</sup> <a name="UserInput" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.userInput"></a>

```csharp
public string UserInput { get; }
```

- *Type:* string

---

##### `AccessClientId`<sup>Required</sup> <a name="AccessClientId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.accessClientId"></a>

```csharp
public string AccessClientId { get; }
```

- *Type:* string

---

##### `AccessClientSecret`<sup>Required</sup> <a name="AccessClientSecret" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.accessClientSecret"></a>

```csharp
public string AccessClientSecret { get; }
```

- *Type:* string

---

##### `Database`<sup>Required</sup> <a name="Database" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.database"></a>

```csharp
public string Database { get; }
```

- *Type:* string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.host"></a>

```csharp
public string Host { get; }
```

- *Type:* string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.password"></a>

```csharp
public string Password { get; }
```

- *Type:* string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.port"></a>

```csharp
public double Port { get; }
```

- *Type:* double

---

##### `Scheme`<sup>Required</sup> <a name="Scheme" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.scheme"></a>

```csharp
public string Scheme { get; }
```

- *Type:* string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.serviceId"></a>

```csharp
public string ServiceId { get; }
```

- *Type:* string

---

##### `User`<sup>Required</sup> <a name="User" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.user"></a>

```csharp
public string User { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOriginOutputReference.property.internalValue"></a>

```csharp
public IResolvable|HyperdriveConfigOrigin InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.hyperdriveConfig.HyperdriveConfigOrigin">HyperdriveConfigOrigin</a>

---



