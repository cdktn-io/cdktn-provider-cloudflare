# `zeroTrustCwsPolicySet` Submodule <a name="`zeroTrustCwsPolicySet` Submodule" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustCwsPolicySet <a name="ZeroTrustCwsPolicySet" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set cloudflare_zero_trust_cws_policy_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustCwsPolicySet(Construct Scope, string Id, ZeroTrustCwsPolicySetConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig">ZeroTrustCwsPolicySetConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig">ZeroTrustCwsPolicySetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.putPolicies">PutPolicies</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.resetExcludeWorkloadIds">ResetExcludeWorkloadIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.resetIncludeWorkloadIds">ResetIncludeWorkloadIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutPolicies` <a name="PutPolicies" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.putPolicies"></a>

```csharp
private void PutPolicies(IResolvable|ZeroTrustCwsPolicySetPolicies[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.putPolicies.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies">ZeroTrustCwsPolicySetPolicies</a>[]

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetExcludeWorkloadIds` <a name="ResetExcludeWorkloadIds" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.resetExcludeWorkloadIds"></a>

```csharp
private void ResetExcludeWorkloadIds()
```

##### `ResetIncludeWorkloadIds` <a name="ResetIncludeWorkloadIds" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.resetIncludeWorkloadIds"></a>

```csharp
private void ResetIncludeWorkloadIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustCwsPolicySet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustCwsPolicySet.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustCwsPolicySet.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustCwsPolicySet.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustCwsPolicySet.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ZeroTrustCwsPolicySet resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustCwsPolicySet to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustCwsPolicySet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustCwsPolicySet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.policies">Policies</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList">ZeroTrustCwsPolicySetPoliciesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.excludeWorkloadIdsInput">ExcludeWorkloadIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.includeWorkloadIdsInput">IncludeWorkloadIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.policiesInput">PoliciesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies">ZeroTrustCwsPolicySetPolicies</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.excludeWorkloadIds">ExcludeWorkloadIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.includeWorkloadIds">IncludeWorkloadIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.policies"></a>

```csharp
public ZeroTrustCwsPolicySetPoliciesList Policies { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList">ZeroTrustCwsPolicySetPoliciesList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `ExcludeWorkloadIdsInput`<sup>Optional</sup> <a name="ExcludeWorkloadIdsInput" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.excludeWorkloadIdsInput"></a>

```csharp
public string[] ExcludeWorkloadIdsInput { get; }
```

- *Type:* string[]

---

##### `IncludeWorkloadIdsInput`<sup>Optional</sup> <a name="IncludeWorkloadIdsInput" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.includeWorkloadIdsInput"></a>

```csharp
public string[] IncludeWorkloadIdsInput { get; }
```

- *Type:* string[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PoliciesInput`<sup>Optional</sup> <a name="PoliciesInput" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.policiesInput"></a>

```csharp
public IResolvable|ZeroTrustCwsPolicySetPolicies[] PoliciesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies">ZeroTrustCwsPolicySetPolicies</a>[]

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `ExcludeWorkloadIds`<sup>Required</sup> <a name="ExcludeWorkloadIds" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.excludeWorkloadIds"></a>

```csharp
public string[] ExcludeWorkloadIds { get; }
```

- *Type:* string[]

---

##### `IncludeWorkloadIds`<sup>Required</sup> <a name="IncludeWorkloadIds" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.includeWorkloadIds"></a>

```csharp
public string[] IncludeWorkloadIds { get; }
```

- *Type:* string[]

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySet.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustCwsPolicySetConfig <a name="ZeroTrustCwsPolicySetConfig" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustCwsPolicySetConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string Name,
    IResolvable|ZeroTrustCwsPolicySetPolicies[] Policies,
    string Description = null,
    string[] ExcludeWorkloadIds = null,
    string[] IncludeWorkloadIds = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.accountId">AccountId</a></code> | <code>string</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.name">Name</a></code> | <code>string</code> | Name of the policy set. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.policies">Policies</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies">ZeroTrustCwsPolicySetPolicies</a>[]</code> | Policies to include with per-membership enforcement mode. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.description">Description</a></code> | <code>string</code> | Optional free-form description. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.excludeWorkloadIds">ExcludeWorkloadIds</a></code> | <code>string[]</code> | Workload IDs that exclude matching requests. Exclusions take precedence. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.includeWorkloadIds">IncludeWorkloadIds</a></code> | <code>string[]</code> | Workload IDs that include matching requests. Empty or omitted includes all requests before exclusions. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Tags to attach. Keys are limited to 256 UTF-8 bytes and values to 1024 UTF-8 bytes. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#account_id ZeroTrustCwsPolicySet#account_id}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the policy set.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#name ZeroTrustCwsPolicySet#name}

---

##### `Policies`<sup>Required</sup> <a name="Policies" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.policies"></a>

```csharp
public IResolvable|ZeroTrustCwsPolicySetPolicies[] Policies { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies">ZeroTrustCwsPolicySetPolicies</a>[]

Policies to include with per-membership enforcement mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#policies ZeroTrustCwsPolicySet#policies}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional free-form description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#description ZeroTrustCwsPolicySet#description}

---

##### `ExcludeWorkloadIds`<sup>Optional</sup> <a name="ExcludeWorkloadIds" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.excludeWorkloadIds"></a>

```csharp
public string[] ExcludeWorkloadIds { get; set; }
```

- *Type:* string[]

Workload IDs that exclude matching requests. Exclusions take precedence.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#exclude_workload_ids ZeroTrustCwsPolicySet#exclude_workload_ids}

---

##### `IncludeWorkloadIds`<sup>Optional</sup> <a name="IncludeWorkloadIds" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.includeWorkloadIds"></a>

```csharp
public string[] IncludeWorkloadIds { get; set; }
```

- *Type:* string[]

Workload IDs that include matching requests. Empty or omitted includes all requests before exclusions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#include_workload_ids ZeroTrustCwsPolicySet#include_workload_ids}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Tags to attach. Keys are limited to 256 UTF-8 bytes and values to 1024 UTF-8 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#tags ZeroTrustCwsPolicySet#tags}

---

### ZeroTrustCwsPolicySetPolicies <a name="ZeroTrustCwsPolicySetPolicies" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustCwsPolicySetPolicies {
    string PolicyId,
    bool|IResolvable Enforce = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies.property.policyId">PolicyId</a></code> | <code>string</code> | ID of the member policy. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies.property.enforce">Enforce</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether this policy should enforce when it matches. Defaults to true; false keeps the policy attached for non-enforcing evaluation. |

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies.property.policyId"></a>

```csharp
public string PolicyId { get; set; }
```

- *Type:* string

ID of the member policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#policy_id ZeroTrustCwsPolicySet#policy_id}

---

##### `Enforce`<sup>Optional</sup> <a name="Enforce" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies.property.enforce"></a>

```csharp
public bool|IResolvable Enforce { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether this policy should enforce when it matches. Defaults to true; false keeps the policy attached for non-enforcing evaluation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_policy_set#enforce ZeroTrustCwsPolicySet#enforce}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustCwsPolicySetPoliciesList <a name="ZeroTrustCwsPolicySetPoliciesList" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustCwsPolicySetPoliciesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.get"></a>

```csharp
private ZeroTrustCwsPolicySetPoliciesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies">ZeroTrustCwsPolicySetPolicies</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesList.property.internalValue"></a>

```csharp
public IResolvable|ZeroTrustCwsPolicySetPolicies[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies">ZeroTrustCwsPolicySetPolicies</a>[]

---


### ZeroTrustCwsPolicySetPoliciesOutputReference <a name="ZeroTrustCwsPolicySetPoliciesOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustCwsPolicySetPoliciesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.resetEnforce">ResetEnforce</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnforce` <a name="ResetEnforce" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.resetEnforce"></a>

```csharp
private void ResetEnforce()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.enforceInput">EnforceInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.policyIdInput">PolicyIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.enforce">Enforce</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.policyId">PolicyId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies">ZeroTrustCwsPolicySetPolicies</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `EnforceInput`<sup>Optional</sup> <a name="EnforceInput" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.enforceInput"></a>

```csharp
public bool|IResolvable EnforceInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PolicyIdInput`<sup>Optional</sup> <a name="PolicyIdInput" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.policyIdInput"></a>

```csharp
public string PolicyIdInput { get; }
```

- *Type:* string

---

##### `Enforce`<sup>Required</sup> <a name="Enforce" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.enforce"></a>

```csharp
public bool|IResolvable Enforce { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `PolicyId`<sup>Required</sup> <a name="PolicyId" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.policyId"></a>

```csharp
public string PolicyId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPoliciesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ZeroTrustCwsPolicySetPolicies InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustCwsPolicySet.ZeroTrustCwsPolicySetPolicies">ZeroTrustCwsPolicySetPolicies</a>

---



