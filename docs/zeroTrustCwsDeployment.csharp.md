# `zeroTrustCwsDeployment` Submodule <a name="`zeroTrustCwsDeployment` Submodule" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustCwsDeployment <a name="ZeroTrustCwsDeployment" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment cloudflare_zero_trust_cws_deployment}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustCwsDeployment(Construct Scope, string Id, ZeroTrustCwsDeploymentConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig">ZeroTrustCwsDeploymentConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig">ZeroTrustCwsDeploymentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetDomainAclId">ResetDomainAclId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetOnErrorAction">ResetOnErrorAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetRegoRaiseError">ResetRegoRaiseError</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetDescription"></a>

```csharp
private void ResetDescription()
```

##### `ResetDomainAclId` <a name="ResetDomainAclId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetDomainAclId"></a>

```csharp
private void ResetDomainAclId()
```

##### `ResetOnErrorAction` <a name="ResetOnErrorAction" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetOnErrorAction"></a>

```csharp
private void ResetOnErrorAction()
```

##### `ResetRegoRaiseError` <a name="ResetRegoRaiseError" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetRegoRaiseError"></a>

```csharp
private void ResetRegoRaiseError()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.resetTags"></a>

```csharp
private void ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustCwsDeployment resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustCwsDeployment.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustCwsDeployment.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustCwsDeployment.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustCwsDeployment.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ZeroTrustCwsDeployment resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustCwsDeployment to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustCwsDeployment that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustCwsDeployment to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.basicAuthCredentialIdsInput">BasicAuthCredentialIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.defaultModeInput">DefaultModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.descriptionInput">DescriptionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.domainAclIdInput">DomainAclIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.onErrorActionInput">OnErrorActionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.policySetIdsInput">PolicySetIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.regoRaiseErrorInput">RegoRaiseErrorInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.tagsInput">TagsInput</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.basicAuthCredentialIds">BasicAuthCredentialIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.defaultMode">DefaultMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.description">Description</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.domainAclId">DomainAclId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.onErrorAction">OnErrorAction</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.policySetIds">PolicySetIds</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.regoRaiseError">RegoRaiseError</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `BasicAuthCredentialIdsInput`<sup>Optional</sup> <a name="BasicAuthCredentialIdsInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.basicAuthCredentialIdsInput"></a>

```csharp
public string[] BasicAuthCredentialIdsInput { get; }
```

- *Type:* string[]

---

##### `DefaultModeInput`<sup>Optional</sup> <a name="DefaultModeInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.defaultModeInput"></a>

```csharp
public string DefaultModeInput { get; }
```

- *Type:* string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.descriptionInput"></a>

```csharp
public string DescriptionInput { get; }
```

- *Type:* string

---

##### `DomainAclIdInput`<sup>Optional</sup> <a name="DomainAclIdInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.domainAclIdInput"></a>

```csharp
public string DomainAclIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OnErrorActionInput`<sup>Optional</sup> <a name="OnErrorActionInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.onErrorActionInput"></a>

```csharp
public string OnErrorActionInput { get; }
```

- *Type:* string

---

##### `PolicySetIdsInput`<sup>Optional</sup> <a name="PolicySetIdsInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.policySetIdsInput"></a>

```csharp
public string[] PolicySetIdsInput { get; }
```

- *Type:* string[]

---

##### `RegoRaiseErrorInput`<sup>Optional</sup> <a name="RegoRaiseErrorInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.regoRaiseErrorInput"></a>

```csharp
public bool|IResolvable RegoRaiseErrorInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.tagsInput"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> TagsInput { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `BasicAuthCredentialIds`<sup>Required</sup> <a name="BasicAuthCredentialIds" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.basicAuthCredentialIds"></a>

```csharp
public string[] BasicAuthCredentialIds { get; }
```

- *Type:* string[]

---

##### `DefaultMode`<sup>Required</sup> <a name="DefaultMode" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.defaultMode"></a>

```csharp
public string DefaultMode { get; }
```

- *Type:* string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.description"></a>

```csharp
public string Description { get; }
```

- *Type:* string

---

##### `DomainAclId`<sup>Required</sup> <a name="DomainAclId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.domainAclId"></a>

```csharp
public string DomainAclId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `OnErrorAction`<sup>Required</sup> <a name="OnErrorAction" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.onErrorAction"></a>

```csharp
public string OnErrorAction { get; }
```

- *Type:* string

---

##### `PolicySetIds`<sup>Required</sup> <a name="PolicySetIds" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.policySetIds"></a>

```csharp
public string[] PolicySetIds { get; }
```

- *Type:* string[]

---

##### `RegoRaiseError`<sup>Required</sup> <a name="RegoRaiseError" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.regoRaiseError"></a>

```csharp
public bool|IResolvable RegoRaiseError { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeployment.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustCwsDeploymentConfig <a name="ZeroTrustCwsDeploymentConfig" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustCwsDeploymentConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string[] BasicAuthCredentialIds,
    string DefaultMode,
    string Name,
    string[] PolicySetIds,
    string Description = null,
    string DomainAclId = null,
    string OnErrorAction = null,
    bool|IResolvable RegoRaiseError = null,
    System.Collections.Generic.IDictionary<string, string> Tags = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.accountId">AccountId</a></code> | <code>string</code> | Cloudflare account ID (32-character hexadecimal string). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.basicAuthCredentialIds">BasicAuthCredentialIds</a></code> | <code>string[]</code> | IDs of basic-auth credentials to attach. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.defaultMode">DefaultMode</a></code> | <code>string</code> | Default traffic mode: ALLOW or BLOCK Available values: "ALLOW", "BLOCK". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.name">Name</a></code> | <code>string</code> | Name of the deployment. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.policySetIds">PolicySetIds</a></code> | <code>string[]</code> | IDs of policy sets to attach. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.description">Description</a></code> | <code>string</code> | Optional free-form description. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.domainAclId">DomainAclId</a></code> | <code>string</code> | ID of the domain ACL to attach (omit or null for none). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.onErrorAction">OnErrorAction</a></code> | <code>string</code> | Action for runtime Rego errors. Omit to use BLOCK. Available values: "BLOCK", "SKIP". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.regoRaiseError">RegoRaiseError</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether OPA builtin failures are raised as runtime evaluation errors. Omit to use the default true value. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.tags">Tags</a></code> | <code>System.Collections.Generic.IDictionary<string, string></code> | Tags to attach. Keys are limited to 256 UTF-8 bytes and values to 1024 UTF-8 bytes. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Cloudflare account ID (32-character hexadecimal string).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#account_id ZeroTrustCwsDeployment#account_id}

---

##### `BasicAuthCredentialIds`<sup>Required</sup> <a name="BasicAuthCredentialIds" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.basicAuthCredentialIds"></a>

```csharp
public string[] BasicAuthCredentialIds { get; set; }
```

- *Type:* string[]

IDs of basic-auth credentials to attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#basic_auth_credential_ids ZeroTrustCwsDeployment#basic_auth_credential_ids}

---

##### `DefaultMode`<sup>Required</sup> <a name="DefaultMode" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.defaultMode"></a>

```csharp
public string DefaultMode { get; set; }
```

- *Type:* string

Default traffic mode: ALLOW or BLOCK Available values: "ALLOW", "BLOCK".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#default_mode ZeroTrustCwsDeployment#default_mode}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

Name of the deployment.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#name ZeroTrustCwsDeployment#name}

---

##### `PolicySetIds`<sup>Required</sup> <a name="PolicySetIds" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.policySetIds"></a>

```csharp
public string[] PolicySetIds { get; set; }
```

- *Type:* string[]

IDs of policy sets to attach.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#policy_set_ids ZeroTrustCwsDeployment#policy_set_ids}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.description"></a>

```csharp
public string Description { get; set; }
```

- *Type:* string

Optional free-form description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#description ZeroTrustCwsDeployment#description}

---

##### `DomainAclId`<sup>Optional</sup> <a name="DomainAclId" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.domainAclId"></a>

```csharp
public string DomainAclId { get; set; }
```

- *Type:* string

ID of the domain ACL to attach (omit or null for none).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#domain_acl_id ZeroTrustCwsDeployment#domain_acl_id}

---

##### `OnErrorAction`<sup>Optional</sup> <a name="OnErrorAction" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.onErrorAction"></a>

```csharp
public string OnErrorAction { get; set; }
```

- *Type:* string

Action for runtime Rego errors. Omit to use BLOCK. Available values: "BLOCK", "SKIP".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#on_error_action ZeroTrustCwsDeployment#on_error_action}

---

##### `RegoRaiseError`<sup>Optional</sup> <a name="RegoRaiseError" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.regoRaiseError"></a>

```csharp
public bool|IResolvable RegoRaiseError { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether OPA builtin failures are raised as runtime evaluation errors. Omit to use the default true value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#rego_raise_error ZeroTrustCwsDeployment#rego_raise_error}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-cloudflare.zeroTrustCwsDeployment.ZeroTrustCwsDeploymentConfig.property.tags"></a>

```csharp
public System.Collections.Generic.IDictionary<string, string> Tags { get; set; }
```

- *Type:* System.Collections.Generic.IDictionary<string, string>

Tags to attach. Keys are limited to 256 UTF-8 bytes and values to 1024 UTF-8 bytes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.29.0/docs/resources/zero_trust_cws_deployment#tags ZeroTrustCwsDeployment#tags}

---



