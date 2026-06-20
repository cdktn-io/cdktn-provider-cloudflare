# `zeroTrustDlpPredefinedEntry` Submodule <a name="`zeroTrustDlpPredefinedEntry` Submodule" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDlpPredefinedEntry <a name="ZeroTrustDlpPredefinedEntry" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_predefined_entry cloudflare_zero_trust_dlp_predefined_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustDlpPredefinedEntry(Construct Scope, string Id, ZeroTrustDlpPredefinedEntryConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig">ZeroTrustDlpPredefinedEntryConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig">ZeroTrustDlpPredefinedEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.resetProfileId">ResetProfileId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetProfileId` <a name="ResetProfileId" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.resetProfileId"></a>

```csharp
private void ResetProfileId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustDlpPredefinedEntry resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustDlpPredefinedEntry.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustDlpPredefinedEntry.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustDlpPredefinedEntry.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustDlpPredefinedEntry.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ZeroTrustDlpPredefinedEntry resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustDlpPredefinedEntry to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustDlpPredefinedEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_predefined_entry#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustDlpPredefinedEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.caseSensitive">CaseSensitive</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.confidence">Confidence</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference">ZeroTrustDlpPredefinedEntryConfidenceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.pattern">Pattern</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference">ZeroTrustDlpPredefinedEntryPatternOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.profiles">Profiles</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesList">ZeroTrustDlpPredefinedEntryProfilesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.secret">Secret</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.uploadStatus">UploadStatus</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.variant">Variant</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference">ZeroTrustDlpPredefinedEntryVariantOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.wordList">WordList</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.enabledInput">EnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.entryIdInput">EntryIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.profileIdInput">ProfileIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.entryId">EntryId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.profileId">ProfileId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CaseSensitive`<sup>Required</sup> <a name="CaseSensitive" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.caseSensitive"></a>

```csharp
public IResolvable CaseSensitive { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Confidence`<sup>Required</sup> <a name="Confidence" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.confidence"></a>

```csharp
public ZeroTrustDlpPredefinedEntryConfidenceOutputReference Confidence { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference">ZeroTrustDlpPredefinedEntryConfidenceOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Pattern`<sup>Required</sup> <a name="Pattern" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.pattern"></a>

```csharp
public ZeroTrustDlpPredefinedEntryPatternOutputReference Pattern { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference">ZeroTrustDlpPredefinedEntryPatternOutputReference</a>

---

##### `Profiles`<sup>Required</sup> <a name="Profiles" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.profiles"></a>

```csharp
public ZeroTrustDlpPredefinedEntryProfilesList Profiles { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesList">ZeroTrustDlpPredefinedEntryProfilesList</a>

---

##### `Secret`<sup>Required</sup> <a name="Secret" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.secret"></a>

```csharp
public IResolvable Secret { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `UploadStatus`<sup>Required</sup> <a name="UploadStatus" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.uploadStatus"></a>

```csharp
public string UploadStatus { get; }
```

- *Type:* string

---

##### `Variant`<sup>Required</sup> <a name="Variant" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.variant"></a>

```csharp
public ZeroTrustDlpPredefinedEntryVariantOutputReference Variant { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference">ZeroTrustDlpPredefinedEntryVariantOutputReference</a>

---

##### `WordList`<sup>Required</sup> <a name="WordList" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.wordList"></a>

```csharp
public string WordList { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.enabledInput"></a>

```csharp
public bool|IResolvable EnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EntryIdInput`<sup>Optional</sup> <a name="EntryIdInput" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.entryIdInput"></a>

```csharp
public string EntryIdInput { get; }
```

- *Type:* string

---

##### `ProfileIdInput`<sup>Optional</sup> <a name="ProfileIdInput" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.profileIdInput"></a>

```csharp
public string ProfileIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `EntryId`<sup>Required</sup> <a name="EntryId" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.entryId"></a>

```csharp
public string EntryId { get; }
```

- *Type:* string

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.profileId"></a>

```csharp
public string ProfileId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntry.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDlpPredefinedEntryConfidence <a name="ZeroTrustDlpPredefinedEntryConfidence" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidence"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidence.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustDlpPredefinedEntryConfidence {

};
```


### ZeroTrustDlpPredefinedEntryConfig <a name="ZeroTrustDlpPredefinedEntryConfig" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustDlpPredefinedEntryConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    bool|IResolvable Enabled,
    string EntryId,
    string ProfileId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_predefined_entry#account_id ZeroTrustDlpPredefinedEntry#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.enabled">Enabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_predefined_entry#enabled ZeroTrustDlpPredefinedEntry#enabled}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.entryId">EntryId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_predefined_entry#entry_id ZeroTrustDlpPredefinedEntry#entry_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.profileId">ProfileId</a></code> | <code>string</code> | This field is not used as the owning profile. For predefined entries it is already set to a predefined profile. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_predefined_entry#account_id ZeroTrustDlpPredefinedEntry#account_id}.

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.enabled"></a>

```csharp
public bool|IResolvable Enabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_predefined_entry#enabled ZeroTrustDlpPredefinedEntry#enabled}.

---

##### `EntryId`<sup>Required</sup> <a name="EntryId" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.entryId"></a>

```csharp
public string EntryId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_predefined_entry#entry_id ZeroTrustDlpPredefinedEntry#entry_id}.

---

##### `ProfileId`<sup>Optional</sup> <a name="ProfileId" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfig.property.profileId"></a>

```csharp
public string ProfileId { get; set; }
```

- *Type:* string

This field is not used as the owning profile. For predefined entries it is already set to a predefined profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_dlp_predefined_entry#profile_id ZeroTrustDlpPredefinedEntry#profile_id}

---

### ZeroTrustDlpPredefinedEntryPattern <a name="ZeroTrustDlpPredefinedEntryPattern" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPattern"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPattern.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustDlpPredefinedEntryPattern {

};
```


### ZeroTrustDlpPredefinedEntryProfiles <a name="ZeroTrustDlpPredefinedEntryProfiles" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfiles"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfiles.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustDlpPredefinedEntryProfiles {

};
```


### ZeroTrustDlpPredefinedEntryVariant <a name="ZeroTrustDlpPredefinedEntryVariant" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariant"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariant.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustDlpPredefinedEntryVariant {

};
```


## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDlpPredefinedEntryConfidenceOutputReference <a name="ZeroTrustDlpPredefinedEntryConfidenceOutputReference" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustDlpPredefinedEntryConfidenceOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.aiContextAvailable">AiContextAvailable</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.available">Available</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidence">ZeroTrustDlpPredefinedEntryConfidence</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AiContextAvailable`<sup>Required</sup> <a name="AiContextAvailable" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.aiContextAvailable"></a>

```csharp
public IResolvable AiContextAvailable { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `Available`<sup>Required</sup> <a name="Available" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.available"></a>

```csharp
public IResolvable Available { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidenceOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustDlpPredefinedEntryConfidence InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryConfidence">ZeroTrustDlpPredefinedEntryConfidence</a>

---


### ZeroTrustDlpPredefinedEntryPatternOutputReference <a name="ZeroTrustDlpPredefinedEntryPatternOutputReference" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustDlpPredefinedEntryPatternOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.property.regex">Regex</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.property.validation">Validation</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPattern">ZeroTrustDlpPredefinedEntryPattern</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Regex`<sup>Required</sup> <a name="Regex" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.property.regex"></a>

```csharp
public string Regex { get; }
```

- *Type:* string

---

##### `Validation`<sup>Required</sup> <a name="Validation" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.property.validation"></a>

```csharp
public string Validation { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPatternOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustDlpPredefinedEntryPattern InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryPattern">ZeroTrustDlpPredefinedEntryPattern</a>

---


### ZeroTrustDlpPredefinedEntryProfilesList <a name="ZeroTrustDlpPredefinedEntryProfilesList" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustDlpPredefinedEntryProfilesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesList.get"></a>

```csharp
private ZeroTrustDlpPredefinedEntryProfilesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---


### ZeroTrustDlpPredefinedEntryProfilesOutputReference <a name="ZeroTrustDlpPredefinedEntryProfilesOutputReference" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustDlpPredefinedEntryProfilesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfiles">ZeroTrustDlpPredefinedEntryProfiles</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfilesOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustDlpPredefinedEntryProfiles InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryProfiles">ZeroTrustDlpPredefinedEntryProfiles</a>

---


### ZeroTrustDlpPredefinedEntryVariantOutputReference <a name="ZeroTrustDlpPredefinedEntryVariantOutputReference" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustDlpPredefinedEntryVariantOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.property.topicType">TopicType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariant">ZeroTrustDlpPredefinedEntryVariant</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `TopicType`<sup>Required</sup> <a name="TopicType" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.property.topicType"></a>

```csharp
public string TopicType { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariantOutputReference.property.internalValue"></a>

```csharp
public ZeroTrustDlpPredefinedEntryVariant InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDlpPredefinedEntry.ZeroTrustDlpPredefinedEntryVariant">ZeroTrustDlpPredefinedEntryVariant</a>

---



