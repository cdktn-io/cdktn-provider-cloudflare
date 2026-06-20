# `zeroTrustTunnelWarpConnectorConfig` Submodule <a name="`zeroTrustTunnelWarpConnectorConfig` Submodule" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ZeroTrustTunnelWarpConnectorConfigA <a name="ZeroTrustTunnelWarpConnectorConfigA" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_tunnel_warp_connector_config cloudflare_zero_trust_tunnel_warp_connector_config}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustTunnelWarpConnectorConfigA(Construct Scope, string Id, ZeroTrustTunnelWarpConnectorConfigAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig">ZeroTrustTunnelWarpConnectorConfigAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig">ZeroTrustTunnelWarpConnectorConfigAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.putConfig">PutConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.resetConfig">ResetConfig</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfig` <a name="PutConfig" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.putConfig"></a>

```csharp
private void PutConfig(ZeroTrustTunnelWarpConnectorConfigConfig Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.putConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig">ZeroTrustTunnelWarpConnectorConfigConfig</a>

---

##### `ResetConfig` <a name="ResetConfig" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.resetConfig"></a>

```csharp
private void ResetConfig()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ZeroTrustTunnelWarpConnectorConfigA resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustTunnelWarpConnectorConfigA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustTunnelWarpConnectorConfigA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustTunnelWarpConnectorConfigA.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

ZeroTrustTunnelWarpConnectorConfigA.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a ZeroTrustTunnelWarpConnectorConfigA resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the ZeroTrustTunnelWarpConnectorConfigA to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing ZeroTrustTunnelWarpConnectorConfigA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_tunnel_warp_connector_config#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the ZeroTrustTunnelWarpConnectorConfigA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference">ZeroTrustTunnelWarpConnectorConfigConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.configurationVersion">ConfigurationVersion</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.createdAt">CreatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.updatedAt">UpdatedAt</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.configInput">ConfigInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig">ZeroTrustTunnelWarpConnectorConfigConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.haModeInput">HaModeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.tunnelIdInput">TunnelIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.haMode">HaMode</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.tunnelId">TunnelId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.config"></a>

```csharp
public ZeroTrustTunnelWarpConnectorConfigConfigOutputReference Config { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference">ZeroTrustTunnelWarpConnectorConfigConfigOutputReference</a>

---

##### `ConfigurationVersion`<sup>Required</sup> <a name="ConfigurationVersion" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.configurationVersion"></a>

```csharp
public double ConfigurationVersion { get; }
```

- *Type:* double

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.createdAt"></a>

```csharp
public string CreatedAt { get; }
```

- *Type:* string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.updatedAt"></a>

```csharp
public string UpdatedAt { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `ConfigInput`<sup>Optional</sup> <a name="ConfigInput" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.configInput"></a>

```csharp
public IResolvable|ZeroTrustTunnelWarpConnectorConfigConfig ConfigInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig">ZeroTrustTunnelWarpConnectorConfigConfig</a>

---

##### `HaModeInput`<sup>Optional</sup> <a name="HaModeInput" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.haModeInput"></a>

```csharp
public string HaModeInput { get; }
```

- *Type:* string

---

##### `TunnelIdInput`<sup>Optional</sup> <a name="TunnelIdInput" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.tunnelIdInput"></a>

```csharp
public string TunnelIdInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `HaMode`<sup>Required</sup> <a name="HaMode" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.haMode"></a>

```csharp
public string HaMode { get; }
```

- *Type:* string

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.tunnelId"></a>

```csharp
public string TunnelId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### ZeroTrustTunnelWarpConnectorConfigAConfig <a name="ZeroTrustTunnelWarpConnectorConfigAConfig" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustTunnelWarpConnectorConfigAConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string HaMode,
    string TunnelId,
    ZeroTrustTunnelWarpConnectorConfigConfig Config = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.accountId">AccountId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.haMode">HaMode</a></code> | <code>string</code> | High-availability mode for the WARP Connector tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.tunnelId">TunnelId</a></code> | <code>string</code> | UUID of the tunnel. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig">ZeroTrustTunnelWarpConnectorConfigConfig</a></code> | Provider-specific configuration. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_tunnel_warp_connector_config#account_id ZeroTrustTunnelWarpConnectorConfigA#account_id}

---

##### `HaMode`<sup>Required</sup> <a name="HaMode" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.haMode"></a>

```csharp
public string HaMode { get; set; }
```

- *Type:* string

High-availability mode for the WARP Connector tunnel.

`none` means HA is enabled but no provider is configured yet (newly created tunnels default to this). `disabled` means HA is explicitly turned off. `aws` uses AWS ENI move for failover. `local` uses virtual IPs (VIPs) on the local interface.
Available values: "none", "disabled", "aws", "local".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_tunnel_warp_connector_config#ha_mode ZeroTrustTunnelWarpConnectorConfigA#ha_mode}

---

##### `TunnelId`<sup>Required</sup> <a name="TunnelId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.tunnelId"></a>

```csharp
public string TunnelId { get; set; }
```

- *Type:* string

UUID of the tunnel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_tunnel_warp_connector_config#tunnel_id ZeroTrustTunnelWarpConnectorConfigA#tunnel_id}

---

##### `Config`<sup>Optional</sup> <a name="Config" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigAConfig.property.config"></a>

```csharp
public ZeroTrustTunnelWarpConnectorConfigConfig Config { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig">ZeroTrustTunnelWarpConnectorConfigConfig</a>

Provider-specific configuration.

Required shape depends on ha_mode. For `aws`, must contain `fnr_id`. For `local`, must contain `vips`. For `none` and `disabled`, must be empty or omitted.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_tunnel_warp_connector_config#config ZeroTrustTunnelWarpConnectorConfigA#config}

---

### ZeroTrustTunnelWarpConnectorConfigConfig <a name="ZeroTrustTunnelWarpConnectorConfigConfig" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustTunnelWarpConnectorConfigConfig {
    string FnrId = null,
    IResolvable|ZeroTrustTunnelWarpConnectorConfigConfigVips[] Vips = null,
    IResolvable|ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious[] VipsPrevious = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig.property.fnrId">FnrId</a></code> | <code>string</code> | Floating Network Resource ID — the secondary ENI that is moved between nodes on failover. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig.property.vips">Vips</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips">ZeroTrustTunnelWarpConnectorConfigConfigVips</a>[]</code> | VIPs to assign on the CloudflareWARP interface. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig.property.vipsPrevious">VipsPrevious</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious">ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious</a>[]</code> | VIPs to clean up on demotion or version drift. |

---

##### `FnrId`<sup>Optional</sup> <a name="FnrId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig.property.fnrId"></a>

```csharp
public string FnrId { get; set; }
```

- *Type:* string

Floating Network Resource ID — the secondary ENI that is moved between nodes on failover.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_tunnel_warp_connector_config#fnr_id ZeroTrustTunnelWarpConnectorConfigA#fnr_id}

---

##### `Vips`<sup>Optional</sup> <a name="Vips" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig.property.vips"></a>

```csharp
public IResolvable|ZeroTrustTunnelWarpConnectorConfigConfigVips[] Vips { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips">ZeroTrustTunnelWarpConnectorConfigConfigVips</a>[]

VIPs to assign on the CloudflareWARP interface.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_tunnel_warp_connector_config#vips ZeroTrustTunnelWarpConnectorConfigA#vips}

---

##### `VipsPrevious`<sup>Optional</sup> <a name="VipsPrevious" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig.property.vipsPrevious"></a>

```csharp
public IResolvable|ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious[] VipsPrevious { get; set; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious">ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious</a>[]

VIPs to clean up on demotion or version drift.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_tunnel_warp_connector_config#vips_previous ZeroTrustTunnelWarpConnectorConfigA#vips_previous}

---

### ZeroTrustTunnelWarpConnectorConfigConfigVips <a name="ZeroTrustTunnelWarpConnectorConfigConfigVips" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustTunnelWarpConnectorConfigConfigVips {
    string Address
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips.property.address">Address</a></code> | <code>string</code> | Virtual IP address (IPv4 or IPv6). |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Virtual IP address (IPv4 or IPv6).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_tunnel_warp_connector_config#address ZeroTrustTunnelWarpConnectorConfigA#address}

---

### ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious <a name="ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious {
    string Address
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious.property.address">Address</a></code> | <code>string</code> | Virtual IP address (IPv4 or IPv6). |

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious.property.address"></a>

```csharp
public string Address { get; set; }
```

- *Type:* string

Virtual IP address (IPv4 or IPv6).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/zero_trust_tunnel_warp_connector_config#address ZeroTrustTunnelWarpConnectorConfigA#address}

---

## Classes <a name="Classes" id="Classes"></a>

### ZeroTrustTunnelWarpConnectorConfigConfigOutputReference <a name="ZeroTrustTunnelWarpConnectorConfigConfigOutputReference" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustTunnelWarpConnectorConfigConfigOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.putVips">PutVips</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.putVipsPrevious">PutVipsPrevious</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resetFnrId">ResetFnrId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resetVips">ResetVips</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resetVipsPrevious">ResetVipsPrevious</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutVips` <a name="PutVips" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.putVips"></a>

```csharp
private void PutVips(IResolvable|ZeroTrustTunnelWarpConnectorConfigConfigVips[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.putVips.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips">ZeroTrustTunnelWarpConnectorConfigConfigVips</a>[]

---

##### `PutVipsPrevious` <a name="PutVipsPrevious" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.putVipsPrevious"></a>

```csharp
private void PutVipsPrevious(IResolvable|ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious[] Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.putVipsPrevious.parameter.value"></a>

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious">ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious</a>[]

---

##### `ResetFnrId` <a name="ResetFnrId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resetFnrId"></a>

```csharp
private void ResetFnrId()
```

##### `ResetVips` <a name="ResetVips" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resetVips"></a>

```csharp
private void ResetVips()
```

##### `ResetVipsPrevious` <a name="ResetVipsPrevious" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.resetVipsPrevious"></a>

```csharp
private void ResetVipsPrevious()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vips">Vips</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList">ZeroTrustTunnelWarpConnectorConfigConfigVipsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vipsPrevious">VipsPrevious</a></code> | <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList">ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.fnrIdInput">FnrIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vipsInput">VipsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips">ZeroTrustTunnelWarpConnectorConfigConfigVips</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vipsPreviousInput">VipsPreviousInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious">ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious</a>[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.fnrId">FnrId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig">ZeroTrustTunnelWarpConnectorConfigConfig</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `Vips`<sup>Required</sup> <a name="Vips" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vips"></a>

```csharp
public ZeroTrustTunnelWarpConnectorConfigConfigVipsList Vips { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList">ZeroTrustTunnelWarpConnectorConfigConfigVipsList</a>

---

##### `VipsPrevious`<sup>Required</sup> <a name="VipsPrevious" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vipsPrevious"></a>

```csharp
public ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList VipsPrevious { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList">ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList</a>

---

##### `FnrIdInput`<sup>Optional</sup> <a name="FnrIdInput" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.fnrIdInput"></a>

```csharp
public string FnrIdInput { get; }
```

- *Type:* string

---

##### `VipsInput`<sup>Optional</sup> <a name="VipsInput" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vipsInput"></a>

```csharp
public IResolvable|ZeroTrustTunnelWarpConnectorConfigConfigVips[] VipsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips">ZeroTrustTunnelWarpConnectorConfigConfigVips</a>[]

---

##### `VipsPreviousInput`<sup>Optional</sup> <a name="VipsPreviousInput" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.vipsPreviousInput"></a>

```csharp
public IResolvable|ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious[] VipsPreviousInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious">ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious</a>[]

---

##### `FnrId`<sup>Required</sup> <a name="FnrId" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.fnrId"></a>

```csharp
public string FnrId { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ZeroTrustTunnelWarpConnectorConfigConfig InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfig">ZeroTrustTunnelWarpConnectorConfigConfig</a>

---


### ZeroTrustTunnelWarpConnectorConfigConfigVipsList <a name="ZeroTrustTunnelWarpConnectorConfigConfigVipsList" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustTunnelWarpConnectorConfigConfigVipsList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.get"></a>

```csharp
private ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips">ZeroTrustTunnelWarpConnectorConfigConfigVips</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsList.property.internalValue"></a>

```csharp
public IResolvable|ZeroTrustTunnelWarpConnectorConfigConfigVips[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips">ZeroTrustTunnelWarpConnectorConfigConfigVips</a>[]

---


### ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference <a name="ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips">ZeroTrustTunnelWarpConnectorConfigConfigVips</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ZeroTrustTunnelWarpConnectorConfigConfigVips InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVips">ZeroTrustTunnelWarpConnectorConfigConfigVips</a>

---


### ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList <a name="ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList(IInterpolatingParent TerraformResource, string TerraformAttribute, bool WrapsSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.wrapsSet">WrapsSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `WrapsSet`<sup>Required</sup> <a name="WrapsSet" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.Initializer.parameter.wrapsSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.allWithMapKey"></a>

```csharp
private DynamicListTerraformIterator AllWithMapKey(string MapKeyAttributeName)
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `MapKeyAttributeName`<sup>Required</sup> <a name="MapKeyAttributeName" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.get"></a>

```csharp
private ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference Get(double Index)
```

###### `Index`<sup>Required</sup> <a name="Index" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.get.parameter.index"></a>

- *Type:* double

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious">ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious</a>[]</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousList.property.internalValue"></a>

```csharp
public IResolvable|ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious[] InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious">ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious</a>[]

---


### ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference <a name="ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute, double ComplexObjectIndex, bool ComplexObjectIsFromSet);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.complexObjectIndex">ComplexObjectIndex</a></code> | <code>double</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.complexObjectIsFromSet">ComplexObjectIsFromSet</a></code> | <code>bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

##### `ComplexObjectIndex`<sup>Required</sup> <a name="ComplexObjectIndex" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* double

the index of this item in the list.

---

##### `ComplexObjectIsFromSet`<sup>Required</sup> <a name="ComplexObjectIsFromSet" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.addressInput">AddressInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.address">Address</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious">ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.addressInput"></a>

```csharp
public string AddressInput { get; }
```

- *Type:* string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.address"></a>

```csharp
public string Address { get; }
```

- *Type:* string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPreviousOutputReference.property.internalValue"></a>

```csharp
public IResolvable|ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.zeroTrustTunnelWarpConnectorConfig.ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious">ZeroTrustTunnelWarpConnectorConfigConfigVipsPrevious</a>

---



