# `zeroTrustDeviceDeploymentGroups` Submodule <a name="`zeroTrustDeviceDeploymentGroups` Submodule" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustDeviceDeploymentGroups <a name="ZeroTrustDeviceDeploymentGroups" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_deployment_groups cloudflare_zero_trust_device_deployment_groups}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustDeviceDeploymentGroups(Construct Scope, string Id, ZeroTrustDeviceDeploymentGroupsConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig">ZeroTrustDeviceDeploymentGroupsConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig">ZeroTrustDeviceDeploymentGroupsConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.putVersionConfig">PutVersionConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.resetPolicyIds">ResetPolicyIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutVersionConfig` <a name="PutVersionConfig" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.putVersionConfig"></a>

```csharp
private void PutVersionConfig(IResolvable|ZeroTrustDeviceDeploymentGroupsVersionConfig[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.putVersionConfig.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig">ZeroTrustDeviceDeploymentGroupsVersionConfig</a>[]

---

##### `ResetPolicyIds` <a name="ResetPolicyIds" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.resetPolicyIds"></a>

```csharp
private void ResetPolicyIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustDeviceDeploymentGroups resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustDeviceDeploymentGroups.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustDeviceDeploymentGroups.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustDeviceDeploymentGroups.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustDeviceDeploymentGroups.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ZeroTrustDeviceDeploymentGroups resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustDeviceDeploymentGroups to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustDeviceDeploymentGroups that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_deployment_groups#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustDeviceDeploymentGroups to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.versionConfig">VersionConfig</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList">ZeroTrustDeviceDeploymentGroupsVersionConfigList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.policyIdsInput">PolicyIdsInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.versionConfigInput">VersionConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig">ZeroTrustDeviceDeploymentGroupsVersionConfig</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.policyIds">PolicyIds</a></code> | <code>string[]</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `VersionConfig`<sup>Required</sup> <a name="VersionConfig" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.versionConfig"></a>

```csharp
public ZeroTrustDeviceDeploymentGroupsVersionConfigList VersionConfig { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList">ZeroTrustDeviceDeploymentGroupsVersionConfigList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PolicyIdsInput`<sup>Optional</sup> <a name="PolicyIdsInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.policyIdsInput"></a>

```csharp
public string[] PolicyIdsInput { get; }
```

- *Type:* string[]

---

##### `VersionConfigInput`<sup>Optional</sup> <a name="VersionConfigInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.versionConfigInput"></a>

```csharp
public IResolvable|ZeroTrustDeviceDeploymentGroupsVersionConfig[] VersionConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig">ZeroTrustDeviceDeploymentGroupsVersionConfig</a>[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PolicyIds`<sup>Required</sup> <a name="PolicyIds" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.policyIds"></a>

```csharp
public string[] PolicyIds { get; }
```

- *Type:* string[]

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroups.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustDeviceDeploymentGroupsConfig <a name="ZeroTrustDeviceDeploymentGroupsConfig" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustDeviceDeploymentGroupsConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string Name,
    IResolvable|ZeroTrustDeviceDeploymentGroupsVersionConfig[] VersionConfig,
    string[] PolicyIds = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_deployment_groups#account_id ZeroTrustDeviceDeploymentGroups#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.name">Name</a></code> | <code>string</code> | A user-friendly name for the deployment group. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.versionConfig">VersionConfig</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig">ZeroTrustDeviceDeploymentGroupsVersionConfig</a>[]</code> | Contains at least one version configuration. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.policyIds">PolicyIds</a></code> | <code>string[]</code> | Contains an optional list of policy IDs assigned to a group. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_deployment_groups#account_id ZeroTrustDeviceDeploymentGroups#account_id}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A user-friendly name for the deployment group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_deployment_groups#name ZeroTrustDeviceDeploymentGroups#name}

---

##### `VersionConfig`<sup>Required</sup> <a name="VersionConfig" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.versionConfig"></a>

```csharp
public IResolvable|ZeroTrustDeviceDeploymentGroupsVersionConfig[] VersionConfig { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig">ZeroTrustDeviceDeploymentGroupsVersionConfig</a>[]

Contains at least one version configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_deployment_groups#version_config ZeroTrustDeviceDeploymentGroups#version_config}

---

##### `PolicyIds`<sup>Optional</sup> <a name="PolicyIds" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsConfig.property.policyIds"></a>

```csharp
public string[] PolicyIds { get; set; }
```

- *Type:* string[]

Contains an optional list of policy IDs assigned to a group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_deployment_groups#policy_ids ZeroTrustDeviceDeploymentGroups#policy_ids}

---

### ZeroTrustDeviceDeploymentGroupsVersionConfig <a name="ZeroTrustDeviceDeploymentGroupsVersionConfig" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustDeviceDeploymentGroupsVersionConfig {
    string TargetEnvironment,
    string Version
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig.property.targetEnvironment">TargetEnvironment</a></code> | <code>string</code> | The target environment for the client version (e.g., windows, macos). |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig.property.version">Version</a></code> | <code>string</code> | The specific client version to deploy. |

---

##### `TargetEnvironment`<sup>Required</sup> <a name="TargetEnvironment" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig.property.targetEnvironment"></a>

```csharp
public string TargetEnvironment { get; set; }
```

- *Type:* string

The target environment for the client version (e.g., windows, macos).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_deployment_groups#target_environment ZeroTrustDeviceDeploymentGroups#target_environment}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig.property.version"></a>

```csharp
public string Version { get; set; }
```

- *Type:* string

The specific client version to deploy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/zero_trust_device_deployment_groups#version ZeroTrustDeviceDeploymentGroups#version}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustDeviceDeploymentGroupsVersionConfigList <a name="ZeroTrustDeviceDeploymentGroupsVersionConfigList" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustDeviceDeploymentGroupsVersionConfigList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.get"></a>

```csharp
private ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig">ZeroTrustDeviceDeploymentGroupsVersionConfig</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigList.property.internalValue"></a>

```csharp
public IResolvable|ZeroTrustDeviceDeploymentGroupsVersionConfig[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig">ZeroTrustDeviceDeploymentGroupsVersionConfig</a>[]

---


### ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference <a name="ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.targetEnvironmentInput">TargetEnvironmentInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.versionInput">VersionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.targetEnvironment">TargetEnvironment</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.version">Version</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig">ZeroTrustDeviceDeploymentGroupsVersionConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `TargetEnvironmentInput`<sup>Optional</sup> <a name="TargetEnvironmentInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.targetEnvironmentInput"></a>

```csharp
public string TargetEnvironmentInput { get; }
```

- *Type:* string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.versionInput"></a>

```csharp
public string VersionInput { get; }
```

- *Type:* string

---

##### `TargetEnvironment`<sup>Required</sup> <a name="TargetEnvironment" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.targetEnvironment"></a>

```csharp
public string TargetEnvironment { get; }
```

- *Type:* string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.version"></a>

```csharp
public string Version { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ZeroTrustDeviceDeploymentGroupsVersionConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustDeviceDeploymentGroups.ZeroTrustDeviceDeploymentGroupsVersionConfig">ZeroTrustDeviceDeploymentGroupsVersionConfig</a>

---



