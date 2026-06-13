# `zeroTrustDevicePostureIntegration` Submodule <a name="`zeroTrustDevicePostureIntegration` Submodule" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDevicePostureIntegration <a name="ZeroTrustDevicePostureIntegration" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_posture_integration cloudflare_zero_trust_device_posture_integration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustDevicePostureIntegration(Construct Scope, string Id, ZeroTrustDevicePostureIntegrationConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig">ZeroTrustDevicePostureIntegrationConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig">ZeroTrustDevicePostureIntegrationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.resetAccountId">ResetAccountId</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.putConfig"></a>

```csharp
private void PutConfig(ZeroTrustDevicePostureIntegrationConfigA Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA">ZeroTrustDevicePostureIntegrationConfigA</a>

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.resetAccountId"></a>

```csharp
private void ResetAccountId()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustDevicePostureIntegration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustDevicePostureIntegration.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustDevicePostureIntegration.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustDevicePostureIntegration.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustDevicePostureIntegration.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ZeroTrustDevicePostureIntegration resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustDevicePostureIntegration to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustDevicePostureIntegration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_posture_integration#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustDevicePostureIntegration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference">ZeroTrustDevicePostureIntegrationConfigAOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.configInput">ConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA">ZeroTrustDevicePostureIntegrationConfigA</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.intervalInput">IntervalInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.interval">Interval</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.config"></a>

```csharp
public ZeroTrustDevicePostureIntegrationConfigAOutputReference Config { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference">ZeroTrustDevicePostureIntegrationConfigAOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.configInput"></a>

```csharp
public IResolvable|ZeroTrustDevicePostureIntegrationConfigA ConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA">ZeroTrustDevicePostureIntegrationConfigA</a>

---

##### `IntervalInput`<sup>Optional</sup> <a name="IntervalInput" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.intervalInput"></a>

```csharp
public string IntervalInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.interval"></a>

```csharp
public string Interval { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegration.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDevicePostureIntegrationConfig <a name="ZeroTrustDevicePostureIntegrationConfig" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustDevicePostureIntegrationConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    ZeroTrustDevicePostureIntegrationConfigA Config,
    string Interval,
    string Name,
    string Type,
    string AccountId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA">ZeroTrustDevicePostureIntegrationConfigA</a></code> | The configuration object containing third-party integration information. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.interval">Interval</a></code> | <code>string</code> | The interval between each posture check with the third-party API. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.name">Name</a></code> | <code>string</code> | The name of the device posture integration. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.type">Type</a></code> | <code>string</code> | The type of device posture integration. Available values: "workspace_one", "crowdstrike_s2s", "uptycs", "intune", "kolide", "tanium_s2s", "sentinelone_s2s", "custom_s2s". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_posture_integration#account_id ZeroTrustDevicePostureIntegration#account_id}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.config"></a>

```csharp
public ZeroTrustDevicePostureIntegrationConfigA Config { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA">ZeroTrustDevicePostureIntegrationConfigA</a>

The configuration object containing third-party integration information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_posture_integration#config ZeroTrustDevicePostureIntegration#config}

---

##### `Interval`<sup>Required</sup> <a name="Interval" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.interval"></a>

```csharp
public string Interval { get; set; }
```

- *Type:* string

The interval between each posture check with the third-party API.

Use `m` for minutes (e.g. `5m`) and `h` for hours (e.g. `12h`).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_posture_integration#interval ZeroTrustDevicePostureIntegration#interval}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the device posture integration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_posture_integration#name ZeroTrustDevicePostureIntegration#name}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

The type of device posture integration. Available values: "workspace_one", "crowdstrike_s2s", "uptycs", "intune", "kolide", "tanium_s2s", "sentinelone_s2s", "custom_s2s".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_posture_integration#type ZeroTrustDevicePostureIntegration#type}

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_posture_integration#account_id ZeroTrustDevicePostureIntegration#account_id}.

---

### ZeroTrustDevicePostureIntegrationConfigA <a name="ZeroTrustDevicePostureIntegrationConfigA" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustDevicePostureIntegrationConfigA {
    string AccessClientId = null,
    string AccessClientSecret = null,
    string ApiUrl = null,
    string AuthUrl = null,
    string ClientId = null,
    string ClientKey = null,
    string ClientSecret = null,
    string CustomerId = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.accessClientId">AccessClientId</a></code> | <code>string</code> | If present, this id will be passed in the `CF-Access-Client-ID` header when hitting the `api_url`. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.accessClientSecret">AccessClientSecret</a></code> | <code>string</code> | If present, this secret will be passed in the `CF-Access-Client-Secret` header when hitting the `api_url`. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.apiUrl">ApiUrl</a></code> | <code>string</code> | The Workspace One API URL provided in the Workspace One Admin Dashboard. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.authUrl">AuthUrl</a></code> | <code>string</code> | The Workspace One Authorization URL depending on your region. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.clientId">ClientId</a></code> | <code>string</code> | The Workspace One client ID provided in the Workspace One Admin Dashboard. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.clientKey">ClientKey</a></code> | <code>string</code> | The Uptycs client secret. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.clientSecret">ClientSecret</a></code> | <code>string</code> | The Workspace One client secret provided in the Workspace One Admin Dashboard. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.customerId">CustomerId</a></code> | <code>string</code> | The Crowdstrike customer ID. |

---

##### `AccessClientId`<sup>Optional</sup> <a name="AccessClientId" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.accessClientId"></a>

```csharp
public string AccessClientId { get; set; }
```

- *Type:* string

If present, this id will be passed in the `CF-Access-Client-ID` header when hitting the `api_url`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_posture_integration#access_client_id ZeroTrustDevicePostureIntegration#access_client_id}

---

##### `AccessClientSecret`<sup>Optional</sup> <a name="AccessClientSecret" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.accessClientSecret"></a>

```csharp
public string AccessClientSecret { get; set; }
```

- *Type:* string

If present, this secret will be passed in the `CF-Access-Client-Secret` header when hitting the `api_url`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_posture_integration#access_client_secret ZeroTrustDevicePostureIntegration#access_client_secret}

---

##### `ApiUrl`<sup>Optional</sup> <a name="ApiUrl" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.apiUrl"></a>

```csharp
public string ApiUrl { get; set; }
```

- *Type:* string

The Workspace One API URL provided in the Workspace One Admin Dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_posture_integration#api_url ZeroTrustDevicePostureIntegration#api_url}

---

##### `AuthUrl`<sup>Optional</sup> <a name="AuthUrl" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.authUrl"></a>

```csharp
public string AuthUrl { get; set; }
```

- *Type:* string

The Workspace One Authorization URL depending on your region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_posture_integration#auth_url ZeroTrustDevicePostureIntegration#auth_url}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.clientId"></a>

```csharp
public string ClientId { get; set; }
```

- *Type:* string

The Workspace One client ID provided in the Workspace One Admin Dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_posture_integration#client_id ZeroTrustDevicePostureIntegration#client_id}

---

##### `ClientKey`<sup>Optional</sup> <a name="ClientKey" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.clientKey"></a>

```csharp
public string ClientKey { get; set; }
```

- *Type:* string

The Uptycs client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_posture_integration#client_key ZeroTrustDevicePostureIntegration#client_key}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.clientSecret"></a>

```csharp
public string ClientSecret { get; set; }
```

- *Type:* string

The Workspace One client secret provided in the Workspace One Admin Dashboard.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_posture_integration#client_secret ZeroTrustDevicePostureIntegration#client_secret}

---

##### `CustomerId`<sup>Optional</sup> <a name="CustomerId" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA.property.customerId"></a>

```csharp
public string CustomerId { get; set; }
```

- *Type:* string

The Crowdstrike customer ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_posture_integration#customer_id ZeroTrustDevicePostureIntegration#customer_id}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDevicePostureIntegrationConfigAOutputReference <a name="ZeroTrustDevicePostureIntegrationConfigAOutputReference" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustDevicePostureIntegrationConfigAOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetAccessClientId">ResetAccessClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetAccessClientSecret">ResetAccessClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetApiUrl">ResetApiUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetAuthUrl">ResetAuthUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetClientKey">ResetClientKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetCustomerId">ResetCustomerId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccessClientId` <a name="ResetAccessClientId" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetAccessClientId"></a>

```csharp
private void ResetAccessClientId()
```

##### `ResetAccessClientSecret` <a name="ResetAccessClientSecret" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetAccessClientSecret"></a>

```csharp
private void ResetAccessClientSecret()
```

##### `ResetApiUrl` <a name="ResetApiUrl" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetApiUrl"></a>

```csharp
private void ResetApiUrl()
```

##### `ResetAuthUrl` <a name="ResetAuthUrl" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetAuthUrl"></a>

```csharp
private void ResetAuthUrl()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetClientId"></a>

```csharp
private void ResetClientId()
```

##### `ResetClientKey` <a name="ResetClientKey" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetClientKey"></a>

```csharp
private void ResetClientKey()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetClientSecret"></a>

```csharp
private void ResetClientSecret()
```

##### `ResetCustomerId` <a name="ResetCustomerId" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.resetCustomerId"></a>

```csharp
private void ResetCustomerId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.accessClientIdInput">AccessClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.accessClientSecretInput">AccessClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.apiUrlInput">ApiUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.authUrlInput">AuthUrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientKeyInput">ClientKeyInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.customerIdInput">CustomerIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.accessClientId">AccessClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.accessClientSecret">AccessClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.apiUrl">ApiUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.authUrl">AuthUrl</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientId">ClientId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientKey">ClientKey</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientSecret">ClientSecret</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.customerId">CustomerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA">ZeroTrustDevicePostureIntegrationConfigA</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AccessClientIdInput`<sup>Optional</sup> <a name="AccessClientIdInput" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.accessClientIdInput"></a>

```csharp
public string AccessClientIdInput { get; }
```

- *Type:* string

---

##### `AccessClientSecretInput`<sup>Optional</sup> <a name="AccessClientSecretInput" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.accessClientSecretInput"></a>

```csharp
public string AccessClientSecretInput { get; }
```

- *Type:* string

---

##### `ApiUrlInput`<sup>Optional</sup> <a name="ApiUrlInput" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.apiUrlInput"></a>

```csharp
public string ApiUrlInput { get; }
```

- *Type:* string

---

##### `AuthUrlInput`<sup>Optional</sup> <a name="AuthUrlInput" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.authUrlInput"></a>

```csharp
public string AuthUrlInput { get; }
```

- *Type:* string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientIdInput"></a>

```csharp
public string ClientIdInput { get; }
```

- *Type:* string

---

##### `ClientKeyInput`<sup>Optional</sup> <a name="ClientKeyInput" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientKeyInput"></a>

```csharp
public string ClientKeyInput { get; }
```

- *Type:* string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientSecretInput"></a>

```csharp
public string ClientSecretInput { get; }
```

- *Type:* string

---

##### `CustomerIdInput`<sup>Optional</sup> <a name="CustomerIdInput" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.customerIdInput"></a>

```csharp
public string CustomerIdInput { get; }
```

- *Type:* string

---

##### `AccessClientId`<sup>Required</sup> <a name="AccessClientId" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.accessClientId"></a>

```csharp
public string AccessClientId { get; }
```

- *Type:* string

---

##### `AccessClientSecret`<sup>Required</sup> <a name="AccessClientSecret" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.accessClientSecret"></a>

```csharp
public string AccessClientSecret { get; }
```

- *Type:* string

---

##### `ApiUrl`<sup>Required</sup> <a name="ApiUrl" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.apiUrl"></a>

```csharp
public string ApiUrl { get; }
```

- *Type:* string

---

##### `AuthUrl`<sup>Required</sup> <a name="AuthUrl" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.authUrl"></a>

```csharp
public string AuthUrl { get; }
```

- *Type:* string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientId"></a>

```csharp
public string ClientId { get; }
```

- *Type:* string

---

##### `ClientKey`<sup>Required</sup> <a name="ClientKey" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientKey"></a>

```csharp
public string ClientKey { get; }
```

- *Type:* string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.clientSecret"></a>

```csharp
public string ClientSecret { get; }
```

- *Type:* string

---

##### `CustomerId`<sup>Required</sup> <a name="CustomerId" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.customerId"></a>

```csharp
public string CustomerId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigAOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ZeroTrustDevicePostureIntegrationConfigA InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustDevicePostureIntegration.ZeroTrustDevicePostureIntegrationConfigA">ZeroTrustDevicePostureIntegrationConfigA</a>

---



