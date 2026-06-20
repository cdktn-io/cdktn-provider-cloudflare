# `magicTransitCf1Site` Submodule <a name="`magicTransitCf1Site` Submodule" id="@cdktn/provider-cloudflare.magicTransitCf1Site"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicTransitCf1Site <a name="MagicTransitCf1Site" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site cloudflare_magic_transit_cf1_site}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new MagicTransitCf1Site(Construct Scope, string Id, MagicTransitCf1SiteConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig">MagicTransitCf1SiteConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig">MagicTransitCf1SiteConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putBody">PutBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putLocation">PutLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetLocation">ResetLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutBody` <a name="PutBody" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putBody"></a>

```csharp
private void PutBody(IResolvable|MagicTransitCf1SiteBody[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putBody.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>[]

---

##### `PutLocation` <a name="PutLocation" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putLocation"></a>

```csharp
private void PutLocation(MagicTransitCf1SiteLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetLocation"></a>

```csharp
private void ResetLocation()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.resetName"></a>

```csharp
private void ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MagicTransitCf1Site resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

MagicTransitCf1Site.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

MagicTransitCf1Site.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

MagicTransitCf1Site.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

MagicTransitCf1Site.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MagicTransitCf1Site resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MagicTransitCf1Site to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MagicTransitCf1Site that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MagicTransitCf1Site to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.body">Body</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList">MagicTransitCf1SiteBodyList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.location">Location</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference">MagicTransitCf1SiteLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.bodyInput">BodyInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.locationInput">LocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.body"></a>

```csharp
public MagicTransitCf1SiteBodyList Body { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList">MagicTransitCf1SiteBodyList</a>

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.location"></a>

```csharp
public MagicTransitCf1SiteLocationOutputReference Location { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference">MagicTransitCf1SiteLocationOutputReference</a>

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.bodyInput"></a>

```csharp
public IResolvable|MagicTransitCf1SiteBody[] BodyInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>[]

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.locationInput"></a>

```csharp
public IResolvable|MagicTransitCf1SiteLocation LocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1Site.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MagicTransitCf1SiteBody <a name="MagicTransitCf1SiteBody" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new MagicTransitCf1SiteBody {
    string Name,
    string Description = null,
    MagicTransitCf1SiteBodyLocation Location = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.property.name">Name</a></code> | <code>string</code> | A human-provided name describing the CF1 Site that should be unique within the account. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.property.description">Description</a></code> | <code>string</code> | A human-provided description of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.property.location">Location</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation">MagicTransitCf1SiteBodyLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#location MagicTransitCf1Site#location}. |

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A human-provided name describing the CF1 Site that should be unique within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#name MagicTransitCf1Site#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A human-provided description of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#description MagicTransitCf1Site#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody.property.location"></a>

```csharp
public MagicTransitCf1SiteBodyLocation Location { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation">MagicTransitCf1SiteBodyLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#location MagicTransitCf1Site#location}.

---

### MagicTransitCf1SiteBodyLocation <a name="MagicTransitCf1SiteBodyLocation" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new MagicTransitCf1SiteBodyLocation {
    double Lat = null,
    double Long = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.property.lat">Lat</a></code> | <code>double</code> | Latitude of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.property.long">Long</a></code> | <code>double</code> | Longitude of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.property.name">Name</a></code> | <code>string</code> | Name of nearest town, city, or village. |

---

##### `Lat`<sup>Optional</sup> <a name="Lat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.property.lat"></a>

```csharp
public double Lat { get; set; }
```

- *Type:* double

Latitude of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#lat MagicTransitCf1Site#lat}

---

##### `Long`<sup>Optional</sup> <a name="Long" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.property.long"></a>

```csharp
public double Long { get; set; }
```

- *Type:* double

Longitude of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#long MagicTransitCf1Site#long}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of nearest town, city, or village.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#name MagicTransitCf1Site#name}

---

### MagicTransitCf1SiteConfig <a name="MagicTransitCf1SiteConfig" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new MagicTransitCf1SiteConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    IResolvable|MagicTransitCf1SiteBody[] Body,
    string Description = null,
    MagicTransitCf1SiteLocation Location = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.body">Body</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#body MagicTransitCf1Site#body}. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.description">Description</a></code> | <code>string</code> | A human-provided description of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.location">Location</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#location MagicTransitCf1Site#location}. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.name">Name</a></code> | <code>string</code> | A human-provided name describing the CF1 Site that should be unique within the account. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#account_id MagicTransitCf1Site#account_id}

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.body"></a>

```csharp
public IResolvable|MagicTransitCf1SiteBody[] Body { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#body MagicTransitCf1Site#body}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

A human-provided description of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#description MagicTransitCf1Site#description}

---

##### `Location`<sup>Optional</sup> <a name="Location" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.location"></a>

```csharp
public MagicTransitCf1SiteLocation Location { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#location MagicTransitCf1Site#location}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A human-provided name describing the CF1 Site that should be unique within the account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#name MagicTransitCf1Site#name}

---

### MagicTransitCf1SiteLocation <a name="MagicTransitCf1SiteLocation" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new MagicTransitCf1SiteLocation {
    double Lat = null,
    double Long = null,
    string Name = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.property.lat">Lat</a></code> | <code>double</code> | Latitude of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.property.long">Long</a></code> | <code>double</code> | Longitude of the CF1 Site. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.property.name">Name</a></code> | <code>string</code> | Name of nearest town, city, or village. |

---

##### `Lat`<sup>Optional</sup> <a name="Lat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.property.lat"></a>

```csharp
public double Lat { get; set; }
```

- *Type:* double

Latitude of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#lat MagicTransitCf1Site#lat}

---

##### `Long`<sup>Optional</sup> <a name="Long" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.property.long"></a>

```csharp
public double Long { get; set; }
```

- *Type:* double

Longitude of the CF1 Site.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#long MagicTransitCf1Site#long}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of nearest town, city, or village.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_transit_cf1_site#name MagicTransitCf1Site#name}

---

## Classes <a name="Classes" id="Classes"></a>

### MagicTransitCf1SiteBodyList <a name="MagicTransitCf1SiteBodyList" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new MagicTransitCf1SiteBodyList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.get"></a>

```csharp
private MagicTransitCf1SiteBodyOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyList.property.internalValue"></a>

```csharp
public IResolvable|MagicTransitCf1SiteBody[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>[]

---


### MagicTransitCf1SiteBodyLocationOutputReference <a name="MagicTransitCf1SiteBodyLocationOutputReference" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new MagicTransitCf1SiteBodyLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resetLat">ResetLat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resetLong">ResetLong</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLat` <a name="ResetLat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resetLat"></a>

```csharp
private void ResetLat()
```

##### `ResetLong` <a name="ResetLong" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resetLong"></a>

```csharp
private void ResetLong()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.latInput">LatInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.longInput">LongInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.lat">Lat</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.long">Long</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation">MagicTransitCf1SiteBodyLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LatInput`<sup>Optional</sup> <a name="LatInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.latInput"></a>

```csharp
public double LatInput { get; }
```

- *Type:* double

---

##### `LongInput`<sup>Optional</sup> <a name="LongInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.longInput"></a>

```csharp
public double LongInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Lat`<sup>Required</sup> <a name="Lat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.lat"></a>

```csharp
public double Lat { get; }
```

- *Type:* double

---

##### `Long`<sup>Required</sup> <a name="Long" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.long"></a>

```csharp
public double Long { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MagicTransitCf1SiteBodyLocation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation">MagicTransitCf1SiteBodyLocation</a>

---


### MagicTransitCf1SiteBodyOutputReference <a name="MagicTransitCf1SiteBodyOutputReference" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new MagicTransitCf1SiteBodyOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.putLocation">PutLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resetLocation">ResetLocation</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLocation` <a name="PutLocation" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.putLocation"></a>

```csharp
private void PutLocation(MagicTransitCf1SiteBodyLocation Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.putLocation.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation">MagicTransitCf1SiteBodyLocation</a>

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetLocation` <a name="ResetLocation" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.resetLocation"></a>

```csharp
private void ResetLocation()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.location">Location</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference">MagicTransitCf1SiteBodyLocationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.modifiedOn">ModifiedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.locationInput">LocationInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation">MagicTransitCf1SiteBodyLocation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Location`<sup>Required</sup> <a name="Location" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.location"></a>

```csharp
public MagicTransitCf1SiteBodyLocationOutputReference Location { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocationOutputReference">MagicTransitCf1SiteBodyLocationOutputReference</a>

---

##### `ModifiedOn`<sup>Required</sup> <a name="ModifiedOn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.modifiedOn"></a>

```csharp
public string ModifiedOn { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `LocationInput`<sup>Optional</sup> <a name="LocationInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.locationInput"></a>

```csharp
public IResolvable|MagicTransitCf1SiteBodyLocation LocationInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyLocation">MagicTransitCf1SiteBodyLocation</a>

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBodyOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MagicTransitCf1SiteBody InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteBody">MagicTransitCf1SiteBody</a>

---


### MagicTransitCf1SiteLocationOutputReference <a name="MagicTransitCf1SiteLocationOutputReference" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new MagicTransitCf1SiteLocationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resetLat">ResetLat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resetLong">ResetLong</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetLat` <a name="ResetLat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resetLat"></a>

```csharp
private void ResetLat()
```

##### `ResetLong` <a name="ResetLong" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resetLong"></a>

```csharp
private void ResetLong()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.resetName"></a>

```csharp
private void ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.latInput">LatInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.longInput">LongInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.lat">Lat</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.long">Long</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `LatInput`<sup>Optional</sup> <a name="LatInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.latInput"></a>

```csharp
public double LatInput { get; }
```

- *Type:* double

---

##### `LongInput`<sup>Optional</sup> <a name="LongInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.longInput"></a>

```csharp
public double LongInput { get; }
```

- *Type:* double

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `Lat`<sup>Required</sup> <a name="Lat" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.lat"></a>

```csharp
public double Lat { get; }
```

- *Type:* double

---

##### `Long`<sup>Required</sup> <a name="Long" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.long"></a>

```csharp
public double Long { get; }
```

- *Type:* double

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocationOutputReference.property.internalValue"></a>

```csharp
public IResolvable|MagicTransitCf1SiteLocation InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.magicTransitCf1Site.MagicTransitCf1SiteLocation">MagicTransitCf1SiteLocation</a>

---



