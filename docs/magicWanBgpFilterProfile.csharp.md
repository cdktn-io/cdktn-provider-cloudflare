# `magicWanBgpFilterProfile` Submodule <a name="`magicWanBgpFilterProfile` Submodule" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicWanBgpFilterProfile <a name="MagicWanBgpFilterProfile" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/magic_wan_bgp_filter_profile cloudflare_magic_wan_bgp_filter_profile}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new MagicWanBgpFilterProfile(Construct Scope, string Id, MagicWanBgpFilterProfileConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig">MagicWanBgpFilterProfileConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig">MagicWanBgpFilterProfileConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.resetDescription">ResetDescription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.resetDescription"></a>

```csharp
private void ResetDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MagicWanBgpFilterProfile resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

MagicWanBgpFilterProfile.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

MagicWanBgpFilterProfile.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

MagicWanBgpFilterProfile.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

MagicWanBgpFilterProfile.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MagicWanBgpFilterProfile resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MagicWanBgpFilterProfile to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MagicWanBgpFilterProfile that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/magic_wan_bgp_filter_profile#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MagicWanBgpFilterProfile to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.matchActionInput">MatchActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.targetsInput">TargetsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.matchAction">MatchAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.targets">Targets</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `MatchActionInput`<sup>Optional</sup> <a name="MatchActionInput" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.matchActionInput"></a>

```csharp
public string MatchActionInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.targetsInput"></a>

```csharp
public string[] TargetsInput { get; }
```

- *Type:* string[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `MatchAction`<sup>Required</sup> <a name="MatchAction" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.matchAction"></a>

```csharp
public string MatchAction { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.targets"></a>

```csharp
public string[] Targets { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfile.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MagicWanBgpFilterProfileConfig <a name="MagicWanBgpFilterProfileConfig" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new MagicWanBgpFilterProfileConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string MatchAction,
    string Name,
    string[] Targets,
    string Description = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.matchAction">MatchAction</a></code> | <code>string</code> | Action to take when a route matches one of the targets in this profile Available values: "allow", "deny". |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.name">Name</a></code> | <code>string</code> | Friendly name for the filter profile. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.targets">Targets</a></code> | <code>string[]</code> | List of CIDR prefixes. |
| <code><a href="#@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.description">Description</a></code> | <code>string</code> | Description of the filter profile. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/magic_wan_bgp_filter_profile#account_id MagicWanBgpFilterProfile#account_id}

---

##### `MatchAction`<sup>Required</sup> <a name="MatchAction" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.matchAction"></a>

```csharp
public string MatchAction { get; set; }
```

- *Type:* string

Action to take when a route matches one of the targets in this profile Available values: "allow", "deny".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/magic_wan_bgp_filter_profile#match_action MagicWanBgpFilterProfile#match_action}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Friendly name for the filter profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/magic_wan_bgp_filter_profile#name MagicWanBgpFilterProfile#name}

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.targets"></a>

```csharp
public string[] Targets { get; set; }
```

- *Type:* string[]

List of CIDR prefixes.

Each entry may carry an optional suffix that specifies which prefix lengths to match relative to the prefix length N: '{X,Y}' matches prefix lengths in the inclusive range [X, Y] where N <= X <= Y <= max (max is 32 for IPv4, 128 for IPv6), '{X}' matches exactly length X (equivalent to {X,X}), '+' is shorthand for {N, max} (the prefix and all more-specific subnets, including at length N itself; valid even when N is the maximum length). Omit the suffix to match the prefix exactly at length N.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/magic_wan_bgp_filter_profile#targets MagicWanBgpFilterProfile#targets}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-cloudflare.magicWanBgpFilterProfile.MagicWanBgpFilterProfileConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Description of the filter profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.26.0/docs/resources/magic_wan_bgp_filter_profile#description MagicWanBgpFilterProfile#description}

---



