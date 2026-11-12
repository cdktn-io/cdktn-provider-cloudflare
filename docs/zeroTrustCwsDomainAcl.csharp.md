# `zeroTrustCwsDomainAcl` Submodule <a name="`zeroTrustCwsDomainAcl` Submodule" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustCwsDomainAcl <a name="ZeroTrustCwsDomainAcl" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_domain_acl cloudflare_zero_trust_cws_domain_acl}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustCwsDomainAcl(Construct Scope, string Id, ZeroTrustCwsDomainAclConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig">ZeroTrustCwsDomainAclConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig">ZeroTrustCwsDomainAclConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.putEntries">PutEntries</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEntries` <a name="PutEntries" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.putEntries"></a>

```csharp
private void PutEntries(IResolvable|ZeroTrustCwsDomainAclEntries[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.putEntries.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries">ZeroTrustCwsDomainAclEntries</a>[]

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustCwsDomainAcl resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustCwsDomainAcl.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustCwsDomainAcl.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustCwsDomainAcl.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustCwsDomainAcl.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ZeroTrustCwsDomainAcl resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustCwsDomainAcl to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustCwsDomainAcl that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_domain_acl#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustCwsDomainAcl to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.entries">Entries</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList">ZeroTrustCwsDomainAclEntriesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.defaultActionInput">DefaultActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.entriesInput">EntriesInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries">ZeroTrustCwsDomainAclEntries</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.defaultAction">DefaultAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.name">Name</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Entries`<sup>Required</sup> <a name="Entries" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.entries"></a>

```csharp
public ZeroTrustCwsDomainAclEntriesList Entries { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList">ZeroTrustCwsDomainAclEntriesList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `DefaultActionInput`<sup>Optional</sup> <a name="DefaultActionInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.defaultActionInput"></a>

```csharp
public string DefaultActionInput { get; }
```

- *Type:* string

---

##### `EntriesInput`<sup>Optional</sup> <a name="EntriesInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.entriesInput"></a>

```csharp
public IResolvable|ZeroTrustCwsDomainAclEntries[] EntriesInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries">ZeroTrustCwsDomainAclEntries</a>[]

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.defaultAction"></a>

```csharp
public string DefaultAction { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAcl.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustCwsDomainAclConfig <a name="ZeroTrustCwsDomainAclConfig" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustCwsDomainAclConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string DefaultAction,
    IResolvable|ZeroTrustCwsDomainAclEntries[] Entries,
    string Name
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.accountId">AccountId</a></code> | <code>string</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.defaultAction">DefaultAction</a></code> | <code>string</code> | Default action when no entry matches Available values: "ALLOW", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.entries">Entries</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries">ZeroTrustCwsDomainAclEntries</a>[]</code> | Domain entries for this ACL. Each domain must appear at most once. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.name">Name</a></code> | <code>string</code> | Name of the domain ACL. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_domain_acl#account_id ZeroTrustCwsDomainAcl#account_id}

---

##### `DefaultAction`<sup>Required</sup> <a name="DefaultAction" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.defaultAction"></a>

```csharp
public string DefaultAction { get; set; }
```

- *Type:* string

Default action when no entry matches Available values: "ALLOW", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_domain_acl#default_action ZeroTrustCwsDomainAcl#default_action}

---

##### `Entries`<sup>Required</sup> <a name="Entries" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.entries"></a>

```csharp
public IResolvable|ZeroTrustCwsDomainAclEntries[] Entries { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries">ZeroTrustCwsDomainAclEntries</a>[]

Domain entries for this ACL. Each domain must appear at most once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_domain_acl#entries ZeroTrustCwsDomainAcl#entries}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the domain ACL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_domain_acl#name ZeroTrustCwsDomainAcl#name}

---

### ZeroTrustCwsDomainAclEntries <a name="ZeroTrustCwsDomainAclEntries" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustCwsDomainAclEntries {
    string Action,
    string Domain
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries.property.action">Action</a></code> | <code>string</code> | Per-domain decision overriding the parent ACL's default_action Available values: "ALLOW", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries.property.domain">Domain</a></code> | <code>string</code> | Hostname or domain pattern, capped at 255 UTF-8 bytes. |

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries.property.action"></a>

```csharp
public string Action { get; set; }
```

- *Type:* string

Per-domain decision overriding the parent ACL's default_action Available values: "ALLOW", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_domain_acl#action ZeroTrustCwsDomainAcl#action}

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries.property.domain"></a>

```csharp
public string Domain { get; set; }
```

- *Type:* string

Hostname or domain pattern, capped at 255 UTF-8 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_domain_acl#domain ZeroTrustCwsDomainAcl#domain}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustCwsDomainAclEntriesList <a name="ZeroTrustCwsDomainAclEntriesList" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustCwsDomainAclEntriesList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.get"></a>

```csharp
private ZeroTrustCwsDomainAclEntriesOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries">ZeroTrustCwsDomainAclEntries</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesList.property.internalValue"></a>

```csharp
public IResolvable|ZeroTrustCwsDomainAclEntries[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries">ZeroTrustCwsDomainAclEntries</a>[]

---


### ZeroTrustCwsDomainAclEntriesOutputReference <a name="ZeroTrustCwsDomainAclEntriesOutputReference" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustCwsDomainAclEntriesOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.property.actionInput">ActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.property.domainInput">DomainInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.property.action">Action</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.property.domain">Domain</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries">ZeroTrustCwsDomainAclEntries</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `ActionInput`<sup>Optional</sup> <a name="ActionInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.property.actionInput"></a>

```csharp
public string ActionInput { get; }
```

- *Type:* string

---

##### `DomainInput`<sup>Optional</sup> <a name="DomainInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.property.domainInput"></a>

```csharp
public string DomainInput { get; }
```

- *Type:* string

---

##### `Action`<sup>Required</sup> <a name="Action" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.property.action"></a>

```csharp
public string Action { get; }
```

- *Type:* string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.property.domain"></a>

```csharp
public string Domain { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntriesOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ZeroTrustCwsDomainAclEntries InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustCwsDomainAcl.ZeroTrustCwsDomainAclEntries">ZeroTrustCwsDomainAclEntries</a>

---



