# `magicNetworkMonitoringRule` Submodule <a name="`magicNetworkMonitoringRule` Submodule" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MagicNetworkMonitoringRule <a name="MagicNetworkMonitoringRule" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_rule cloudflare_magic_network_monitoring_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new MagicNetworkMonitoringRule(Construct Scope, string Id, MagicNetworkMonitoringRuleConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig">MagicNetworkMonitoringRuleConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig">MagicNetworkMonitoringRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetBandwidthThreshold">ResetBandwidthThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetDuration">ResetDuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetPacketThreshold">ResetPacketThreshold</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetPrefixMatch">ResetPrefixMatch</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetZscoreSensitivity">ResetZscoreSensitivity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetZscoreTarget">ResetZscoreTarget</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetBandwidthThreshold` <a name="ResetBandwidthThreshold" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetBandwidthThreshold"></a>

```csharp
private void ResetBandwidthThreshold()
```

##### `ResetDuration` <a name="ResetDuration" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetDuration"></a>

```csharp
private void ResetDuration()
```

##### `ResetPacketThreshold` <a name="ResetPacketThreshold" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetPacketThreshold"></a>

```csharp
private void ResetPacketThreshold()
```

##### `ResetPrefixMatch` <a name="ResetPrefixMatch" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetPrefixMatch"></a>

```csharp
private void ResetPrefixMatch()
```

##### `ResetZscoreSensitivity` <a name="ResetZscoreSensitivity" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetZscoreSensitivity"></a>

```csharp
private void ResetZscoreSensitivity()
```

##### `ResetZscoreTarget` <a name="ResetZscoreTarget" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.resetZscoreTarget"></a>

```csharp
private void ResetZscoreTarget()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MagicNetworkMonitoringRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

MagicNetworkMonitoringRule.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

MagicNetworkMonitoringRule.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

MagicNetworkMonitoringRule.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

MagicNetworkMonitoringRule.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a MagicNetworkMonitoringRule resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the MagicNetworkMonitoringRule to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing MagicNetworkMonitoringRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_rule#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the MagicNetworkMonitoringRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.automaticAdvertisementInput">AutomaticAdvertisementInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.bandwidthThresholdInput">BandwidthThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.durationInput">DurationInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.packetThresholdInput">PacketThresholdInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixesInput">PrefixesInput</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixMatchInput">PrefixMatchInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.zscoreSensitivityInput">ZscoreSensitivityInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.zscoreTargetInput">ZscoreTargetInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.automaticAdvertisement">AutomaticAdvertisement</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.bandwidthThreshold">BandwidthThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.duration">Duration</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.packetThreshold">PacketThreshold</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixes">Prefixes</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixMatch">PrefixMatch</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.type">Type</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.zscoreSensitivity">ZscoreSensitivity</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.zscoreTarget">ZscoreTarget</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `AutomaticAdvertisementInput`<sup>Optional</sup> <a name="AutomaticAdvertisementInput" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.automaticAdvertisementInput"></a>

```csharp
public bool|IResolvable AutomaticAdvertisementInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BandwidthThresholdInput`<sup>Optional</sup> <a name="BandwidthThresholdInput" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.bandwidthThresholdInput"></a>

```csharp
public double BandwidthThresholdInput { get; }
```

- *Type:* double

---

##### `DurationInput`<sup>Optional</sup> <a name="DurationInput" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.durationInput"></a>

```csharp
public string DurationInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `PacketThresholdInput`<sup>Optional</sup> <a name="PacketThresholdInput" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.packetThresholdInput"></a>

```csharp
public double PacketThresholdInput { get; }
```

- *Type:* double

---

##### `PrefixesInput`<sup>Optional</sup> <a name="PrefixesInput" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixesInput"></a>

```csharp
public string[] PrefixesInput { get; }
```

- *Type:* string[]

---

##### `PrefixMatchInput`<sup>Optional</sup> <a name="PrefixMatchInput" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixMatchInput"></a>

```csharp
public string PrefixMatchInput { get; }
```

- *Type:* string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `ZscoreSensitivityInput`<sup>Optional</sup> <a name="ZscoreSensitivityInput" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.zscoreSensitivityInput"></a>

```csharp
public string ZscoreSensitivityInput { get; }
```

- *Type:* string

---

##### `ZscoreTargetInput`<sup>Optional</sup> <a name="ZscoreTargetInput" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.zscoreTargetInput"></a>

```csharp
public string ZscoreTargetInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `AutomaticAdvertisement`<sup>Required</sup> <a name="AutomaticAdvertisement" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.automaticAdvertisement"></a>

```csharp
public bool|IResolvable AutomaticAdvertisement { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BandwidthThreshold`<sup>Required</sup> <a name="BandwidthThreshold" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.bandwidthThreshold"></a>

```csharp
public double BandwidthThreshold { get; }
```

- *Type:* double

---

##### `Duration`<sup>Required</sup> <a name="Duration" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.duration"></a>

```csharp
public string Duration { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `PacketThreshold`<sup>Required</sup> <a name="PacketThreshold" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.packetThreshold"></a>

```csharp
public double PacketThreshold { get; }
```

- *Type:* double

---

##### `Prefixes`<sup>Required</sup> <a name="Prefixes" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixes"></a>

```csharp
public string[] Prefixes { get; }
```

- *Type:* string[]

---

##### `PrefixMatch`<sup>Required</sup> <a name="PrefixMatch" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.prefixMatch"></a>

```csharp
public string PrefixMatch { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

##### `ZscoreSensitivity`<sup>Required</sup> <a name="ZscoreSensitivity" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.zscoreSensitivity"></a>

```csharp
public string ZscoreSensitivity { get; }
```

- *Type:* string

---

##### `ZscoreTarget`<sup>Required</sup> <a name="ZscoreTarget" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.zscoreTarget"></a>

```csharp
public string ZscoreTarget { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRule.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### MagicNetworkMonitoringRuleConfig <a name="MagicNetworkMonitoringRuleConfig" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new MagicNetworkMonitoringRuleConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    bool|IResolvable AutomaticAdvertisement,
    string Name,
    string[] Prefixes,
    string Type,
    double BandwidthThreshold = null,
    string Duration = null,
    double PacketThreshold = null,
    string PrefixMatch = null,
    string ZscoreSensitivity = null,
    string ZscoreTarget = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.accountId">AccountId</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_rule#account_id MagicNetworkMonitoringRule#account_id}. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.automaticAdvertisement">AutomaticAdvertisement</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is triggered. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.name">Name</a></code> | <code>string</code> | The name of the rule. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.prefixes">Prefixes</a></code> | <code>string[]</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_rule#prefixes MagicNetworkMonitoringRule#prefixes}. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.type">Type</a></code> | <code>string</code> | MNM rule type. Available values: "threshold", "zscore", "advanced_ddos". |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.bandwidthThreshold">BandwidthThreshold</a></code> | <code>double</code> | The number of bits per second for the rule. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.duration">Duration</a></code> | <code>string</code> | The amount of time that the rule threshold must be exceeded to send an alert notification. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.packetThreshold">PacketThreshold</a></code> | <code>double</code> | The number of packets per second for the rule. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.prefixMatch">PrefixMatch</a></code> | <code>string</code> | Prefix match type to be applied for a prefix auto advertisement when using an advanced_ddos rule. |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.zscoreSensitivity">ZscoreSensitivity</a></code> | <code>string</code> | Level of sensitivity set for zscore rules. Available values: "low", "medium", "high". |
| <code><a href="#@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.zscoreTarget">ZscoreTarget</a></code> | <code>string</code> | Target of the zscore rule analysis. Available values: "bits", "packets". |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_rule#account_id MagicNetworkMonitoringRule#account_id}.

---

##### `AutomaticAdvertisement`<sup>Required</sup> <a name="AutomaticAdvertisement" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.automaticAdvertisement"></a>

```csharp
public bool|IResolvable AutomaticAdvertisement { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Toggle on if you would like Cloudflare to automatically advertise the IP Prefixes within the rule via Magic Transit when the rule is triggered.

Only available for users of Magic Transit.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_rule#automatic_advertisement MagicNetworkMonitoringRule#automatic_advertisement}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

The name of the rule.

Must be unique. Supports characters A-Z, a-z, 0-9, underscore (_), dash (-), period (.), and tilde (~). You can’t have a space in the rule name. Max 256 characters.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_rule#name MagicNetworkMonitoringRule#name}

---

##### `Prefixes`<sup>Required</sup> <a name="Prefixes" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.prefixes"></a>

```csharp
public string[] Prefixes { get; set; }
```

- *Type:* string[]

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_rule#prefixes MagicNetworkMonitoringRule#prefixes}.

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

MNM rule type. Available values: "threshold", "zscore", "advanced_ddos".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_rule#type MagicNetworkMonitoringRule#type}

---

##### `BandwidthThreshold`<sup>Optional</sup> <a name="BandwidthThreshold" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.bandwidthThreshold"></a>

```csharp
public double BandwidthThreshold { get; set; }
```

- *Type:* double

The number of bits per second for the rule.

When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_rule#bandwidth_threshold MagicNetworkMonitoringRule#bandwidth_threshold}

---

##### `Duration`<sup>Optional</sup> <a name="Duration" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.duration"></a>

```csharp
public string Duration { get; set; }
```

- *Type:* string

The amount of time that the rule threshold must be exceeded to send an alert notification.

The final value must be equivalent to one of the following 8 values ["1m","5m","10m","15m","20m","30m","45m","60m"].
Available values: "1m", "5m", "10m", "15m", "20m", "30m", "45m", "60m".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_rule#duration MagicNetworkMonitoringRule#duration}

---

##### `PacketThreshold`<sup>Optional</sup> <a name="PacketThreshold" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.packetThreshold"></a>

```csharp
public double PacketThreshold { get; set; }
```

- *Type:* double

The number of packets per second for the rule.

When this value is exceeded for the set duration, an alert notification is sent. Minimum of 1 and no maximum.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_rule#packet_threshold MagicNetworkMonitoringRule#packet_threshold}

---

##### `PrefixMatch`<sup>Optional</sup> <a name="PrefixMatch" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.prefixMatch"></a>

```csharp
public string PrefixMatch { get; set; }
```

- *Type:* string

Prefix match type to be applied for a prefix auto advertisement when using an advanced_ddos rule.

Available values: "exact", "subnet", "supernet".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_rule#prefix_match MagicNetworkMonitoringRule#prefix_match}

---

##### `ZscoreSensitivity`<sup>Optional</sup> <a name="ZscoreSensitivity" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.zscoreSensitivity"></a>

```csharp
public string ZscoreSensitivity { get; set; }
```

- *Type:* string

Level of sensitivity set for zscore rules. Available values: "low", "medium", "high".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_rule#zscore_sensitivity MagicNetworkMonitoringRule#zscore_sensitivity}

---

##### `ZscoreTarget`<sup>Optional</sup> <a name="ZscoreTarget" id="@cdktn/provider-cloudflare.magicNetworkMonitoringRule.MagicNetworkMonitoringRuleConfig.property.zscoreTarget"></a>

```csharp
public string ZscoreTarget { get; set; }
```

- *Type:* string

Target of the zscore rule analysis. Available values: "bits", "packets".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/magic_network_monitoring_rule#zscore_target MagicNetworkMonitoringRule#zscore_target}

---



