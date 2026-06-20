# `flagshipFlag` Submodule <a name="`flagshipFlag` Submodule" id="@cdktn/provider-cloudflare.flagshipFlag"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### FlagshipFlag <a name="FlagshipFlag" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag cloudflare_flagship_flag}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new FlagshipFlag(Construct Scope, string Id, FlagshipFlagConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig">FlagshipFlagConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig">FlagshipFlagConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.putRules">PutRules</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetFlagKey">ResetFlagKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetType">ResetType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutRules` <a name="PutRules" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.putRules"></a>

```csharp
private void PutRules(IResolvable|FlagshipFlagRules[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.putRules.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetFlagKey` <a name="ResetFlagKey" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetFlagKey"></a>

```csharp
private void ResetFlagKey()
```

##### `ResetType` <a name="ResetType" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.resetType"></a>

```csharp
private void ResetType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a FlagshipFlag resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

FlagshipFlag.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

FlagshipFlag.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

FlagshipFlag.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

FlagshipFlag.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a FlagshipFlag resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the FlagshipFlag to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing FlagshipFlag that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the FlagshipFlag to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.rules">Rules</a></code> | <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList">FlagshipFlagRulesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.updatedBy">UpdatedBy</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.appIdInput">AppIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.defaultVariationInput">DefaultVariationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.flagKeyInput">FlagKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.keyInput">KeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.rulesInput">RulesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.variationsInput">VariationsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.appId">AppId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.defaultVariation">DefaultVariation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.flagKey">FlagKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.key">Key</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.variations">Variations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.rules"></a>

```csharp
public FlagshipFlagRulesList Rules { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList">FlagshipFlagRulesList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.updatedBy"></a>

```csharp
public string UpdatedBy { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AppIdInput`<sup>Optional</sup> <a name="AppIdInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.appIdInput"></a>

```csharp
public string AppIdInput { get; }
```

- *Type:* string

---

##### `DefaultVariationInput`<sup>Optional</sup> <a name="DefaultVariationInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.defaultVariationInput"></a>

```csharp
public string DefaultVariationInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FlagKeyInput`<sup>Optional</sup> <a name="FlagKeyInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.flagKeyInput"></a>

```csharp
public string FlagKeyInput { get; }
```

- *Type:* string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.keyInput"></a>

```csharp
public string KeyInput { get; }
```

- *Type:* string

---

##### `RulesInput`<sup>Optional</sup> <a name="RulesInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.rulesInput"></a>

```csharp
public IResolvable|FlagshipFlagRules[] RulesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>[]

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `VariationsInput`<sup>Optional</sup> <a name="VariationsInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.variationsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> VariationsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.appId"></a>

```csharp
public string AppId { get; }
```

- *Type:* string

---

##### `DefaultVariation`<sup>Required</sup> <a name="DefaultVariation" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.defaultVariation"></a>

```csharp
public string DefaultVariation { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FlagKey`<sup>Required</sup> <a name="FlagKey" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.flagKey"></a>

```csharp
public string FlagKey { get; }
```

- *Type:* string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.key"></a>

```csharp
public string Key { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `Variations`<sup>Required</sup> <a name="Variations" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.variations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Variations { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlag.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### FlagshipFlagConfig <a name="FlagshipFlagConfig" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new FlagshipFlagConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string AppId,
    string DefaultVariation,
    bool|IResolvable Enabled,
    string Key,
    IResolvable|FlagshipFlagRules[] Rules,
    System.Collections.Generic.IDictionary<string, string> Variations,
    string Description = null,
    string FlagKey = null,
    string Type = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.accountId">AccountId</a></code> | <code>string</code> | Cloudflare account ID. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.appId">AppId</a></code> | <code>string</code> | App identifier. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.defaultVariation">DefaultVariation</a></code> | <code>string</code> | Variation served when no rule matches or the flag is disabled. Must be a key in `variations`. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | When false, the flag bypasses all rules and always serves `default_variation`. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.key">Key</a></code> | <code>string</code> | Unique identifier for the flag within an app. Used in all evaluation and SDK calls. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.rules">Rules</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>[]</code> | Targeting rules evaluated in ascending `priority`; |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.variations">Variations</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Map of variation name to value. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.description">Description</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#description FlagshipFlag#description}. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.flagKey">FlagKey</a></code> | <code>string</code> | Flag key (slug). |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.type">Type</a></code> | <code>string</code> | Value type of the flag's variations. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Cloudflare account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#account_id FlagshipFlag#account_id}

---

##### `AppId`<sup>Required</sup> <a name="AppId" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.appId"></a>

```csharp
public string AppId { get; set; }
```

- *Type:* string

App identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#app_id FlagshipFlag#app_id}

---

##### `DefaultVariation`<sup>Required</sup> <a name="DefaultVariation" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.defaultVariation"></a>

```csharp
public string DefaultVariation { get; set; }
```

- *Type:* string

Variation served when no rule matches or the flag is disabled. Must be a key in `variations`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#default_variation FlagshipFlag#default_variation}

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

When false, the flag bypasses all rules and always serves `default_variation`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#enabled FlagshipFlag#enabled}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.key"></a>

```csharp
public string Key { get; set; }
```

- *Type:* string

Unique identifier for the flag within an app. Used in all evaluation and SDK calls.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#key FlagshipFlag#key}

---

##### `Rules`<sup>Required</sup> <a name="Rules" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.rules"></a>

```csharp
public IResolvable|FlagshipFlagRules[] Rules { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>[]

Targeting rules evaluated in ascending `priority`;

the first matching rule wins. An empty array means the flag always serves `default_variation`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#rules FlagshipFlag#rules}

---

##### `Variations`<sup>Required</sup> <a name="Variations" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.variations"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Variations { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Map of variation name to value.

All values must be the same type (boolean, string, number, or JSON object/array). Each serialized value must be 10KB or smaller.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#variations FlagshipFlag#variations}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#description FlagshipFlag#description}.

---

##### `FlagKey`<sup>Optional</sup> <a name="FlagKey" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.flagKey"></a>

```csharp
public string FlagKey { get; set; }
```

- *Type:* string

Flag key (slug).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#flag_key FlagshipFlag#flag_key}

---

##### `Type`<sup>Optional</sup> <a name="Type" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Value type of the flag's variations.

Inferred from the variation values on write, so it may be omitted in requests.
Available values: "boolean", "string", "number", "json".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#type FlagshipFlag#type}

---

### FlagshipFlagRules <a name="FlagshipFlagRules" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new FlagshipFlagRules {
    IResolvable|FlagshipFlagRulesConditions[] Conditions,
    double Priority,
    string ServeVariation,
    FlagshipFlagRulesRollout Rollout = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.conditions">Conditions</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>[]</code> | Conditions the context must satisfy for this rule to match. An empty array matches all contexts. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.priority">Priority</a></code> | <code>double</code> | Evaluation order; lower numbers are evaluated first. Must be unique across the flag's rules. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.serveVariation">ServeVariation</a></code> | <code>string</code> | Variation served when this rule matches. Must be a key in `variations`. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.rollout">Rollout</a></code> | <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout">FlagshipFlagRulesRollout</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#rollout FlagshipFlag#rollout}. |

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.conditions"></a>

```csharp
public IResolvable|FlagshipFlagRulesConditions[] Conditions { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>[]

Conditions the context must satisfy for this rule to match. An empty array matches all contexts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#conditions FlagshipFlag#conditions}

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.priority"></a>

```csharp
public double Priority { get; set; }
```

- *Type:* double

Evaluation order; lower numbers are evaluated first. Must be unique across the flag's rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#priority FlagshipFlag#priority}

---

##### `ServeVariation`<sup>Required</sup> <a name="ServeVariation" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.serveVariation"></a>

```csharp
public string ServeVariation { get; set; }
```

- *Type:* string

Variation served when this rule matches. Must be a key in `variations`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#serve_variation FlagshipFlag#serve_variation}

---

##### `Rollout`<sup>Optional</sup> <a name="Rollout" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules.property.rollout"></a>

```csharp
public FlagshipFlagRulesRollout Rollout { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout">FlagshipFlagRulesRollout</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#rollout FlagshipFlag#rollout}.

---

### FlagshipFlagRulesConditions <a name="FlagshipFlagRulesConditions" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new FlagshipFlagRulesConditions {
    string Attribute = null,
    IResolvable|FlagshipFlagRulesConditionsClauses[] Clauses = null,
    string LogicalOperator = null,
    string Operator = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.attribute">Attribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#attribute FlagshipFlag#attribute}. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.clauses">Clauses</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#clauses FlagshipFlag#clauses}. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.logicalOperator">LogicalOperator</a></code> | <code>string</code> | Available values: "AND", "OR". |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.operator">Operator</a></code> | <code>string</code> | Available values: "equals", "not_equals", "greater_than", "less_than", "greater_than_or_equals", "less_than_or_equals", "contains", "starts_with", "ends_with", "in", "not_in". |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.value">Value</a></code> | <code>string</code> | Value to compare against the context attribute. |

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.attribute"></a>

```csharp
public string Attribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#attribute FlagshipFlag#attribute}.

---

##### `Clauses`<sup>Optional</sup> <a name="Clauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.clauses"></a>

```csharp
public IResolvable|FlagshipFlagRulesConditionsClauses[] Clauses { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#clauses FlagshipFlag#clauses}.

---

##### `LogicalOperator`<sup>Optional</sup> <a name="LogicalOperator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.logicalOperator"></a>

```csharp
public string LogicalOperator { get; set; }
```

- *Type:* string

Available values: "AND", "OR".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#logical_operator FlagshipFlag#logical_operator}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Available values: "equals", "not_equals", "greater_than", "less_than", "greater_than_or_equals", "less_than_or_equals", "contains", "starts_with", "ends_with", "in", "not_in".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#operator FlagshipFlag#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value to compare against the context attribute.

Must be an array for `in` and `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering operators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#value FlagshipFlag#value}

---

### FlagshipFlagRulesConditionsClauses <a name="FlagshipFlagRulesConditionsClauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new FlagshipFlagRulesConditionsClauses {
    string Attribute = null,
    IResolvable|FlagshipFlagRulesConditionsClauses[] Clauses = null,
    string LogicalOperator = null,
    string Operator = null,
    string Value = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.attribute">Attribute</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#attribute FlagshipFlag#attribute}. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.clauses">Clauses</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#clauses FlagshipFlag#clauses}. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.logicalOperator">LogicalOperator</a></code> | <code>string</code> | Available values: "AND", "OR". |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.operator">Operator</a></code> | <code>string</code> | Available values: "equals", "not_equals", "greater_than", "less_than", "greater_than_or_equals", "less_than_or_equals", "contains", "starts_with", "ends_with", "in", "not_in". |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.value">Value</a></code> | <code>string</code> | Value to compare against the context attribute. |

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.attribute"></a>

```csharp
public string Attribute { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#attribute FlagshipFlag#attribute}.

---

##### `Clauses`<sup>Optional</sup> <a name="Clauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.clauses"></a>

```csharp
public IResolvable|FlagshipFlagRulesConditionsClauses[] Clauses { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#clauses FlagshipFlag#clauses}.

---

##### `LogicalOperator`<sup>Optional</sup> <a name="LogicalOperator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.logicalOperator"></a>

```csharp
public string LogicalOperator { get; set; }
```

- *Type:* string

Available values: "AND", "OR".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#logical_operator FlagshipFlag#logical_operator}

---

##### `Operator`<sup>Optional</sup> <a name="Operator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.operator"></a>

```csharp
public string Operator { get; set; }
```

- *Type:* string

Available values: "equals", "not_equals", "greater_than", "less_than", "greater_than_or_equals", "less_than_or_equals", "contains", "starts_with", "ends_with", "in", "not_in".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#operator FlagshipFlag#operator}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses.property.value"></a>

```csharp
public string Value { get; set; }
```

- *Type:* string

Value to compare against the context attribute.

Must be an array for `in` and `not_in`; numeric and ISO-8601 datetime strings are accepted by the ordering operators.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#value FlagshipFlag#value}

---

### FlagshipFlagRulesRollout <a name="FlagshipFlagRulesRollout" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new FlagshipFlagRulesRollout {
    double Percentage,
    string Attribute = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout.property.percentage">Percentage</a></code> | <code>double</code> | Percentage of matching traffic (0–100) served this variation. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout.property.attribute">Attribute</a></code> | <code>string</code> | Context attribute used for sticky bucketing. Defaults to `targetingKey`. If absent at evaluation time, bucketing is random per request. |

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout.property.percentage"></a>

```csharp
public double Percentage { get; set; }
```

- *Type:* double

Percentage of matching traffic (0–100) served this variation.

For multi-way splits, use cumulative upper bounds across rules (e.g. 30, 70, 100).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#percentage FlagshipFlag#percentage}

---

##### `Attribute`<sup>Optional</sup> <a name="Attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout.property.attribute"></a>

```csharp
public string Attribute { get; set; }
```

- *Type:* string

Context attribute used for sticky bucketing. Defaults to `targetingKey`. If absent at evaluation time, bucketing is random per request.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/flagship_flag#attribute FlagshipFlag#attribute}

---

## Classes <a name="Classes" id="Classes"></a>

### FlagshipFlagRulesConditionsClausesList <a name="FlagshipFlagRulesConditionsClausesList" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new FlagshipFlagRulesConditionsClausesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.get"></a>

```csharp
private FlagshipFlagRulesConditionsClausesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList.property.internalValue"></a>

```csharp
public IResolvable|FlagshipFlagRulesConditionsClauses[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>[]

---


### FlagshipFlagRulesConditionsClausesOutputReference <a name="FlagshipFlagRulesConditionsClausesOutputReference" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new FlagshipFlagRulesConditionsClausesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.putClauses">PutClauses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetAttribute">ResetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetClauses">ResetClauses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetLogicalOperator">ResetLogicalOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClauses` <a name="PutClauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.putClauses"></a>

```csharp
private void PutClauses(IResolvable|FlagshipFlagRulesConditionsClauses[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.putClauses.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>[]

---

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetAttribute"></a>

```csharp
private void ResetAttribute()
```

##### `ResetClauses` <a name="ResetClauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetClauses"></a>

```csharp
private void ResetClauses()
```

##### `ResetLogicalOperator` <a name="ResetLogicalOperator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetLogicalOperator"></a>

```csharp
private void ResetLogicalOperator()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.clauses">Clauses</a></code> | <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList">FlagshipFlagRulesConditionsClausesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.attributeInput">AttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.clausesInput">ClausesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.logicalOperatorInput">LogicalOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.logicalOperator">LogicalOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Clauses`<sup>Required</sup> <a name="Clauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.clauses"></a>

```csharp
public FlagshipFlagRulesConditionsClausesList Clauses { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList">FlagshipFlagRulesConditionsClausesList</a>

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.attributeInput"></a>

```csharp
public string AttributeInput { get; }
```

- *Type:* string

---

##### `ClausesInput`<sup>Optional</sup> <a name="ClausesInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.clausesInput"></a>

```csharp
public IResolvable|FlagshipFlagRulesConditionsClauses[] ClausesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>[]

---

##### `LogicalOperatorInput`<sup>Optional</sup> <a name="LogicalOperatorInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.logicalOperatorInput"></a>

```csharp
public string LogicalOperatorInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `LogicalOperator`<sup>Required</sup> <a name="LogicalOperator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.logicalOperator"></a>

```csharp
public string LogicalOperator { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FlagshipFlagRulesConditionsClauses InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>

---


### FlagshipFlagRulesConditionsList <a name="FlagshipFlagRulesConditionsList" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new FlagshipFlagRulesConditionsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.get"></a>

```csharp
private FlagshipFlagRulesConditionsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList.property.internalValue"></a>

```csharp
public IResolvable|FlagshipFlagRulesConditions[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>[]

---


### FlagshipFlagRulesConditionsOutputReference <a name="FlagshipFlagRulesConditionsOutputReference" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new FlagshipFlagRulesConditionsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.putClauses">PutClauses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetAttribute">ResetAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetClauses">ResetClauses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetLogicalOperator">ResetLogicalOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetOperator">ResetOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClauses` <a name="PutClauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.putClauses"></a>

```csharp
private void PutClauses(IResolvable|FlagshipFlagRulesConditionsClauses[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.putClauses.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>[]

---

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetAttribute"></a>

```csharp
private void ResetAttribute()
```

##### `ResetClauses` <a name="ResetClauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetClauses"></a>

```csharp
private void ResetClauses()
```

##### `ResetLogicalOperator` <a name="ResetLogicalOperator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetLogicalOperator"></a>

```csharp
private void ResetLogicalOperator()
```

##### `ResetOperator` <a name="ResetOperator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetOperator"></a>

```csharp
private void ResetOperator()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.resetValue"></a>

```csharp
private void ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.clauses">Clauses</a></code> | <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList">FlagshipFlagRulesConditionsClausesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.attributeInput">AttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.clausesInput">ClausesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.logicalOperatorInput">LogicalOperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.operatorInput">OperatorInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.valueInput">ValueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.logicalOperator">LogicalOperator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.operator">Operator</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.value">Value</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Clauses`<sup>Required</sup> <a name="Clauses" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.clauses"></a>

```csharp
public FlagshipFlagRulesConditionsClausesList Clauses { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClausesList">FlagshipFlagRulesConditionsClausesList</a>

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.attributeInput"></a>

```csharp
public string AttributeInput { get; }
```

- *Type:* string

---

##### `ClausesInput`<sup>Optional</sup> <a name="ClausesInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.clausesInput"></a>

```csharp
public IResolvable|FlagshipFlagRulesConditionsClauses[] ClausesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsClauses">FlagshipFlagRulesConditionsClauses</a>[]

---

##### `LogicalOperatorInput`<sup>Optional</sup> <a name="LogicalOperatorInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.logicalOperatorInput"></a>

```csharp
public string LogicalOperatorInput { get; }
```

- *Type:* string

---

##### `OperatorInput`<sup>Optional</sup> <a name="OperatorInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.operatorInput"></a>

```csharp
public string OperatorInput { get; }
```

- *Type:* string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.valueInput"></a>

```csharp
public string ValueInput { get; }
```

- *Type:* string

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `LogicalOperator`<sup>Required</sup> <a name="LogicalOperator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.logicalOperator"></a>

```csharp
public string LogicalOperator { get; }
```

- *Type:* string

---

##### `Operator`<sup>Required</sup> <a name="Operator" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.operator"></a>

```csharp
public string Operator { get; }
```

- *Type:* string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.value"></a>

```csharp
public string Value { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FlagshipFlagRulesConditions InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>

---


### FlagshipFlagRulesList <a name="FlagshipFlagRulesList" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new FlagshipFlagRulesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.get"></a>

```csharp
private FlagshipFlagRulesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesList.property.internalValue"></a>

```csharp
public IResolvable|FlagshipFlagRules[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>[]

---


### FlagshipFlagRulesOutputReference <a name="FlagshipFlagRulesOutputReference" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new FlagshipFlagRulesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.putConditions">PutConditions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.putRollout">PutRollout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.resetRollout">ResetRollout</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutConditions` <a name="PutConditions" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.putConditions"></a>

```csharp
private void PutConditions(IResolvable|FlagshipFlagRulesConditions[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.putConditions.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>[]

---

##### `PutRollout` <a name="PutRollout" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.putRollout"></a>

```csharp
private void PutRollout(FlagshipFlagRulesRollout Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.putRollout.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout">FlagshipFlagRulesRollout</a>

---

##### `ResetRollout` <a name="ResetRollout" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.resetRollout"></a>

```csharp
private void ResetRollout()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.conditions">Conditions</a></code> | <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList">FlagshipFlagRulesConditionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.rollout">Rollout</a></code> | <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference">FlagshipFlagRulesRolloutOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.conditionsInput">ConditionsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.priorityInput">PriorityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.rolloutInput">RolloutInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout">FlagshipFlagRulesRollout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.serveVariationInput">ServeVariationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.priority">Priority</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.serveVariation">ServeVariation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Conditions`<sup>Required</sup> <a name="Conditions" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.conditions"></a>

```csharp
public FlagshipFlagRulesConditionsList Conditions { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditionsList">FlagshipFlagRulesConditionsList</a>

---

##### `Rollout`<sup>Required</sup> <a name="Rollout" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.rollout"></a>

```csharp
public FlagshipFlagRulesRolloutOutputReference Rollout { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference">FlagshipFlagRulesRolloutOutputReference</a>

---

##### `ConditionsInput`<sup>Optional</sup> <a name="ConditionsInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.conditionsInput"></a>

```csharp
public IResolvable|FlagshipFlagRulesConditions[] ConditionsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesConditions">FlagshipFlagRulesConditions</a>[]

---

##### `PriorityInput`<sup>Optional</sup> <a name="PriorityInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.priorityInput"></a>

```csharp
public double PriorityInput { get; }
```

- *Type:* double

---

##### `RolloutInput`<sup>Optional</sup> <a name="RolloutInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.rolloutInput"></a>

```csharp
public IResolvable|FlagshipFlagRulesRollout RolloutInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout">FlagshipFlagRulesRollout</a>

---

##### `ServeVariationInput`<sup>Optional</sup> <a name="ServeVariationInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.serveVariationInput"></a>

```csharp
public string ServeVariationInput { get; }
```

- *Type:* string

---

##### `Priority`<sup>Required</sup> <a name="Priority" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.priority"></a>

```csharp
public double Priority { get; }
```

- *Type:* double

---

##### `ServeVariation`<sup>Required</sup> <a name="ServeVariation" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.serveVariation"></a>

```csharp
public string ServeVariation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FlagshipFlagRules InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRules">FlagshipFlagRules</a>

---


### FlagshipFlagRulesRolloutOutputReference <a name="FlagshipFlagRulesRolloutOutputReference" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new FlagshipFlagRulesRolloutOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.resetAttribute">ResetAttribute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttribute` <a name="ResetAttribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.resetAttribute"></a>

```csharp
private void ResetAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.attributeInput">AttributeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.percentageInput">PercentageInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.attribute">Attribute</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.percentage">Percentage</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout">FlagshipFlagRulesRollout</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AttributeInput`<sup>Optional</sup> <a name="AttributeInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.attributeInput"></a>

```csharp
public string AttributeInput { get; }
```

- *Type:* string

---

##### `PercentageInput`<sup>Optional</sup> <a name="PercentageInput" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.percentageInput"></a>

```csharp
public double PercentageInput { get; }
```

- *Type:* double

---

##### `Attribute`<sup>Required</sup> <a name="Attribute" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.attribute"></a>

```csharp
public string Attribute { get; }
```

- *Type:* string

---

##### `Percentage`<sup>Required</sup> <a name="Percentage" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.percentage"></a>

```csharp
public double Percentage { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRolloutOutputReference.property.internalValue"></a>

```csharp
public IResolvable|FlagshipFlagRulesRollout InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.flagshipFlag.FlagshipFlagRulesRollout">FlagshipFlagRulesRollout</a>

---



