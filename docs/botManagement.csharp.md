# `botManagement` Submodule <a name="`botManagement` Submodule" id="@cdktn/provider-cloudflare.botManagement"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BotManagement <a name="BotManagement" id="@cdktn/provider-cloudflare.botManagement.BotManagement"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/bot_management cloudflare_bot_management}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new BotManagement(Construct Scope, string Id, BotManagementConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig">BotManagementConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.botManagement.BotManagement.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig">BotManagementConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetAiBotsProtection">ResetAiBotsProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetAutoUpdateModel">ResetAutoUpdateModel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetBmCookieEnabled">ResetBmCookieEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetCfRobotsVariant">ResetCfRobotsVariant</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetContentBotsProtection">ResetContentBotsProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetCrawlerProtection">ResetCrawlerProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetEnableJs">ResetEnableJs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetFightMode">ResetFightMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetIsRobotsTxtManaged">ResetIsRobotsTxtManaged</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetOptimizeWordpress">ResetOptimizeWordpress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetSbfmDefinitelyAutomated">ResetSbfmDefinitelyAutomated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetSbfmLikelyAutomated">ResetSbfmLikelyAutomated</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetSbfmStaticResourceProtection">ResetSbfmStaticResourceProtection</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetSbfmVerifiedBots">ResetSbfmVerifiedBots</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.resetSuppressSessionScore">ResetSuppressSessionScore</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.botManagement.BotManagement.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.botManagement.BotManagement.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.botManagement.BotManagement.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.botManagement.BotManagement.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.botManagement.BotManagement.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.botManagement.BotManagement.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.botManagement.BotManagement.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.botManagement.BotManagement.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.botManagement.BotManagement.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.botManagement.BotManagement.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.botManagement.BotManagement.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.botManagement.BotManagement.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.botManagement.BotManagement.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.botManagement.BotManagement.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.botManagement.BotManagement.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.botManagement.BotManagement.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.botManagement.BotManagement.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagement.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.botManagement.BotManagement.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.botManagement.BotManagement.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.botManagement.BotManagement.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.botManagement.BotManagement.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.botManagement.BotManagement.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.botManagement.BotManagement.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.botManagement.BotManagement.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetAiBotsProtection` <a name="ResetAiBotsProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetAiBotsProtection"></a>

```csharp
private void ResetAiBotsProtection()
```

##### `ResetAutoUpdateModel` <a name="ResetAutoUpdateModel" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetAutoUpdateModel"></a>

```csharp
private void ResetAutoUpdateModel()
```

##### `ResetBmCookieEnabled` <a name="ResetBmCookieEnabled" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetBmCookieEnabled"></a>

```csharp
private void ResetBmCookieEnabled()
```

##### `ResetCfRobotsVariant` <a name="ResetCfRobotsVariant" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetCfRobotsVariant"></a>

```csharp
private void ResetCfRobotsVariant()
```

##### `ResetContentBotsProtection` <a name="ResetContentBotsProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetContentBotsProtection"></a>

```csharp
private void ResetContentBotsProtection()
```

##### `ResetCrawlerProtection` <a name="ResetCrawlerProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetCrawlerProtection"></a>

```csharp
private void ResetCrawlerProtection()
```

##### `ResetEnableJs` <a name="ResetEnableJs" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetEnableJs"></a>

```csharp
private void ResetEnableJs()
```

##### `ResetFightMode` <a name="ResetFightMode" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetFightMode"></a>

```csharp
private void ResetFightMode()
```

##### `ResetIsRobotsTxtManaged` <a name="ResetIsRobotsTxtManaged" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetIsRobotsTxtManaged"></a>

```csharp
private void ResetIsRobotsTxtManaged()
```

##### `ResetOptimizeWordpress` <a name="ResetOptimizeWordpress" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetOptimizeWordpress"></a>

```csharp
private void ResetOptimizeWordpress()
```

##### `ResetSbfmDefinitelyAutomated` <a name="ResetSbfmDefinitelyAutomated" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetSbfmDefinitelyAutomated"></a>

```csharp
private void ResetSbfmDefinitelyAutomated()
```

##### `ResetSbfmLikelyAutomated` <a name="ResetSbfmLikelyAutomated" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetSbfmLikelyAutomated"></a>

```csharp
private void ResetSbfmLikelyAutomated()
```

##### `ResetSbfmStaticResourceProtection` <a name="ResetSbfmStaticResourceProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetSbfmStaticResourceProtection"></a>

```csharp
private void ResetSbfmStaticResourceProtection()
```

##### `ResetSbfmVerifiedBots` <a name="ResetSbfmVerifiedBots" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetSbfmVerifiedBots"></a>

```csharp
private void ResetSbfmVerifiedBots()
```

##### `ResetSuppressSessionScore` <a name="ResetSuppressSessionScore" id="@cdktn/provider-cloudflare.botManagement.BotManagement.resetSuppressSessionScore"></a>

```csharp
private void ResetSuppressSessionScore()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BotManagement resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.botManagement.BotManagement.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

BotManagement.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.botManagement.BotManagement.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.botManagement.BotManagement.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

BotManagement.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.botManagement.BotManagement.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.botManagement.BotManagement.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

BotManagement.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.botManagement.BotManagement.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.botManagement.BotManagement.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

BotManagement.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a BotManagement resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.botManagement.BotManagement.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.botManagement.BotManagement.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the BotManagement to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.botManagement.BotManagement.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing BotManagement that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/bot_management#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.botManagement.BotManagement.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the BotManagement to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.id">Id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.staleZoneConfiguration">StaleZoneConfiguration</a></code> | <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference">BotManagementStaleZoneConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.usingLatestModel">UsingLatestModel</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.aiBotsProtectionInput">AiBotsProtectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.autoUpdateModelInput">AutoUpdateModelInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.bmCookieEnabledInput">BmCookieEnabledInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.cfRobotsVariantInput">CfRobotsVariantInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.contentBotsProtectionInput">ContentBotsProtectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.crawlerProtectionInput">CrawlerProtectionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.enableJsInput">EnableJsInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.fightModeInput">FightModeInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.isRobotsTxtManagedInput">IsRobotsTxtManagedInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.optimizeWordpressInput">OptimizeWordpressInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmDefinitelyAutomatedInput">SbfmDefinitelyAutomatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmLikelyAutomatedInput">SbfmLikelyAutomatedInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmStaticResourceProtectionInput">SbfmStaticResourceProtectionInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmVerifiedBotsInput">SbfmVerifiedBotsInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.suppressSessionScoreInput">SuppressSessionScoreInput</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.zoneIdInput">ZoneIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.aiBotsProtection">AiBotsProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.autoUpdateModel">AutoUpdateModel</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.bmCookieEnabled">BmCookieEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.cfRobotsVariant">CfRobotsVariant</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.contentBotsProtection">ContentBotsProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.crawlerProtection">CrawlerProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.enableJs">EnableJs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.fightMode">FightMode</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.isRobotsTxtManaged">IsRobotsTxtManaged</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.optimizeWordpress">OptimizeWordpress</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmDefinitelyAutomated">SbfmDefinitelyAutomated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmLikelyAutomated">SbfmLikelyAutomated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmStaticResourceProtection">SbfmStaticResourceProtection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmVerifiedBots">SbfmVerifiedBots</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.suppressSessionScore">SuppressSessionScore</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.zoneId">ZoneId</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.id"></a>

```csharp
public string Id { get; }
```

- *Type:* string

---

##### `StaleZoneConfiguration`<sup>Required</sup> <a name="StaleZoneConfiguration" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.staleZoneConfiguration"></a>

```csharp
public BotManagementStaleZoneConfigurationOutputReference StaleZoneConfiguration { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference">BotManagementStaleZoneConfigurationOutputReference</a>

---

##### `UsingLatestModel`<sup>Required</sup> <a name="UsingLatestModel" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.usingLatestModel"></a>

```csharp
public IResolvable UsingLatestModel { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `AiBotsProtectionInput`<sup>Optional</sup> <a name="AiBotsProtectionInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.aiBotsProtectionInput"></a>

```csharp
public string AiBotsProtectionInput { get; }
```

- *Type:* string

---

##### `AutoUpdateModelInput`<sup>Optional</sup> <a name="AutoUpdateModelInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.autoUpdateModelInput"></a>

```csharp
public bool|IResolvable AutoUpdateModelInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BmCookieEnabledInput`<sup>Optional</sup> <a name="BmCookieEnabledInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.bmCookieEnabledInput"></a>

```csharp
public bool|IResolvable BmCookieEnabledInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CfRobotsVariantInput`<sup>Optional</sup> <a name="CfRobotsVariantInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.cfRobotsVariantInput"></a>

```csharp
public string CfRobotsVariantInput { get; }
```

- *Type:* string

---

##### `ContentBotsProtectionInput`<sup>Optional</sup> <a name="ContentBotsProtectionInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.contentBotsProtectionInput"></a>

```csharp
public string ContentBotsProtectionInput { get; }
```

- *Type:* string

---

##### `CrawlerProtectionInput`<sup>Optional</sup> <a name="CrawlerProtectionInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.crawlerProtectionInput"></a>

```csharp
public string CrawlerProtectionInput { get; }
```

- *Type:* string

---

##### `EnableJsInput`<sup>Optional</sup> <a name="EnableJsInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.enableJsInput"></a>

```csharp
public bool|IResolvable EnableJsInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FightModeInput`<sup>Optional</sup> <a name="FightModeInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.fightModeInput"></a>

```csharp
public bool|IResolvable FightModeInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsRobotsTxtManagedInput`<sup>Optional</sup> <a name="IsRobotsTxtManagedInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.isRobotsTxtManagedInput"></a>

```csharp
public bool|IResolvable IsRobotsTxtManagedInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OptimizeWordpressInput`<sup>Optional</sup> <a name="OptimizeWordpressInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.optimizeWordpressInput"></a>

```csharp
public bool|IResolvable OptimizeWordpressInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SbfmDefinitelyAutomatedInput`<sup>Optional</sup> <a name="SbfmDefinitelyAutomatedInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmDefinitelyAutomatedInput"></a>

```csharp
public string SbfmDefinitelyAutomatedInput { get; }
```

- *Type:* string

---

##### `SbfmLikelyAutomatedInput`<sup>Optional</sup> <a name="SbfmLikelyAutomatedInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmLikelyAutomatedInput"></a>

```csharp
public string SbfmLikelyAutomatedInput { get; }
```

- *Type:* string

---

##### `SbfmStaticResourceProtectionInput`<sup>Optional</sup> <a name="SbfmStaticResourceProtectionInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmStaticResourceProtectionInput"></a>

```csharp
public bool|IResolvable SbfmStaticResourceProtectionInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SbfmVerifiedBotsInput`<sup>Optional</sup> <a name="SbfmVerifiedBotsInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmVerifiedBotsInput"></a>

```csharp
public string SbfmVerifiedBotsInput { get; }
```

- *Type:* string

---

##### `SuppressSessionScoreInput`<sup>Optional</sup> <a name="SuppressSessionScoreInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.suppressSessionScoreInput"></a>

```csharp
public bool|IResolvable SuppressSessionScoreInput { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ZoneIdInput`<sup>Optional</sup> <a name="ZoneIdInput" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.zoneIdInput"></a>

```csharp
public string ZoneIdInput { get; }
```

- *Type:* string

---

##### `AiBotsProtection`<sup>Required</sup> <a name="AiBotsProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.aiBotsProtection"></a>

```csharp
public string AiBotsProtection { get; }
```

- *Type:* string

---

##### `AutoUpdateModel`<sup>Required</sup> <a name="AutoUpdateModel" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.autoUpdateModel"></a>

```csharp
public bool|IResolvable AutoUpdateModel { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `BmCookieEnabled`<sup>Required</sup> <a name="BmCookieEnabled" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.bmCookieEnabled"></a>

```csharp
public bool|IResolvable BmCookieEnabled { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `CfRobotsVariant`<sup>Required</sup> <a name="CfRobotsVariant" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.cfRobotsVariant"></a>

```csharp
public string CfRobotsVariant { get; }
```

- *Type:* string

---

##### `ContentBotsProtection`<sup>Required</sup> <a name="ContentBotsProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.contentBotsProtection"></a>

```csharp
public string ContentBotsProtection { get; }
```

- *Type:* string

---

##### `CrawlerProtection`<sup>Required</sup> <a name="CrawlerProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.crawlerProtection"></a>

```csharp
public string CrawlerProtection { get; }
```

- *Type:* string

---

##### `EnableJs`<sup>Required</sup> <a name="EnableJs" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.enableJs"></a>

```csharp
public bool|IResolvable EnableJs { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `FightMode`<sup>Required</sup> <a name="FightMode" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.fightMode"></a>

```csharp
public bool|IResolvable FightMode { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `IsRobotsTxtManaged`<sup>Required</sup> <a name="IsRobotsTxtManaged" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.isRobotsTxtManaged"></a>

```csharp
public bool|IResolvable IsRobotsTxtManaged { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `OptimizeWordpress`<sup>Required</sup> <a name="OptimizeWordpress" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.optimizeWordpress"></a>

```csharp
public bool|IResolvable OptimizeWordpress { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SbfmDefinitelyAutomated`<sup>Required</sup> <a name="SbfmDefinitelyAutomated" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmDefinitelyAutomated"></a>

```csharp
public string SbfmDefinitelyAutomated { get; }
```

- *Type:* string

---

##### `SbfmLikelyAutomated`<sup>Required</sup> <a name="SbfmLikelyAutomated" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmLikelyAutomated"></a>

```csharp
public string SbfmLikelyAutomated { get; }
```

- *Type:* string

---

##### `SbfmStaticResourceProtection`<sup>Required</sup> <a name="SbfmStaticResourceProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmStaticResourceProtection"></a>

```csharp
public bool|IResolvable SbfmStaticResourceProtection { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `SbfmVerifiedBots`<sup>Required</sup> <a name="SbfmVerifiedBots" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.sbfmVerifiedBots"></a>

```csharp
public string SbfmVerifiedBots { get; }
```

- *Type:* string

---

##### `SuppressSessionScore`<sup>Required</sup> <a name="SuppressSessionScore" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.suppressSessionScore"></a>

```csharp
public bool|IResolvable SuppressSessionScore { get; }
```

- *Type:* bool|Io.Cdktn.IResolvable

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.zoneId"></a>

```csharp
public string ZoneId { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagement.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.botManagement.BotManagement.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### BotManagementConfig <a name="BotManagementConfig" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new BotManagementConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string ZoneId,
    string AiBotsProtection = null,
    bool|IResolvable AutoUpdateModel = null,
    bool|IResolvable BmCookieEnabled = null,
    string CfRobotsVariant = null,
    string ContentBotsProtection = null,
    string CrawlerProtection = null,
    bool|IResolvable EnableJs = null,
    bool|IResolvable FightMode = null,
    bool|IResolvable IsRobotsTxtManaged = null,
    bool|IResolvable OptimizeWordpress = null,
    string SbfmDefinitelyAutomated = null,
    string SbfmLikelyAutomated = null,
    bool|IResolvable SbfmStaticResourceProtection = null,
    string SbfmVerifiedBots = null,
    bool|IResolvable SuppressSessionScore = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.zoneId">ZoneId</a></code> | <code>string</code> | Identifier. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.aiBotsProtection">AiBotsProtection</a></code> | <code>string</code> | Enable rule to block AI Scrapers and Crawlers. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.autoUpdateModel">AutoUpdateModel</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Automatically update to the newest bot detection models created by Cloudflare as they are released. [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes). |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.bmCookieEnabled">BmCookieEnabled</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Indicates that the bot management cookie can be placed on end user devices accessing the site. Defaults to true. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.cfRobotsVariant">CfRobotsVariant</a></code> | <code>string</code> | Specifies the Robots Access Control License variant to use. Available values: "off", "policy_only". |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.contentBotsProtection">ContentBotsProtection</a></code> | <code>string</code> | Enable rule to block content bots. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.crawlerProtection">CrawlerProtection</a></code> | <code>string</code> | Enable rule to punish AI Scrapers and Crawlers via a link maze. Available values: "enabled", "disabled". |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.enableJs">EnableJs</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/). |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.fightMode">FightMode</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to enable Bot Fight Mode. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.isRobotsTxtManaged">IsRobotsTxtManaged</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Enable cloudflare managed robots.txt. If an existing robots.txt is detected, then managed robots.txt will be prepended to the existing robots.txt. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.optimizeWordpress">OptimizeWordpress</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to optimize Super Bot Fight Mode protections for Wordpress. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmDefinitelyAutomated">SbfmDefinitelyAutomated</a></code> | <code>string</code> | Super Bot Fight Mode (SBFM) action to take on definitely automated requests. Available values: "allow", "block", "managed_challenge". |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmLikelyAutomated">SbfmLikelyAutomated</a></code> | <code>string</code> | Super Bot Fight Mode (SBFM) action to take on likely automated requests. Available values: "allow", "block", "managed_challenge". |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmStaticResourceProtection">SbfmStaticResourceProtection</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Super Bot Fight Mode (SBFM) to enable static resource protection. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmVerifiedBots">SbfmVerifiedBots</a></code> | <code>string</code> | Super Bot Fight Mode (SBFM) action to take on verified bots requests. Available values: "allow", "block". |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.suppressSessionScore">SuppressSessionScore</a></code> | <code>bool\|Io.Cdktn.IResolvable</code> | Whether to disable tracking the highest bot score for a session in the Bot Management cookie. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ZoneId`<sup>Required</sup> <a name="ZoneId" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.zoneId"></a>

```csharp
public string ZoneId { get; set; }
```

- *Type:* string

Identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/bot_management#zone_id BotManagement#zone_id}

---

##### `AiBotsProtection`<sup>Optional</sup> <a name="AiBotsProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.aiBotsProtection"></a>

```csharp
public string AiBotsProtection { get; set; }
```

- *Type:* string

Enable rule to block AI Scrapers and Crawlers.

Please note the value `only_on_ad_pages` is currently not available for Enterprise customers.
Available values: "block", "disabled", "only_on_ad_pages".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/bot_management#ai_bots_protection BotManagement#ai_bots_protection}

---

##### `AutoUpdateModel`<sup>Optional</sup> <a name="AutoUpdateModel" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.autoUpdateModel"></a>

```csharp
public bool|IResolvable AutoUpdateModel { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Automatically update to the newest bot detection models created by Cloudflare as they are released. [Learn more.](https://developers.cloudflare.com/bots/reference/machine-learning-models#model-versions-and-release-notes).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/bot_management#auto_update_model BotManagement#auto_update_model}

---

##### `BmCookieEnabled`<sup>Optional</sup> <a name="BmCookieEnabled" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.bmCookieEnabled"></a>

```csharp
public bool|IResolvable BmCookieEnabled { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Indicates that the bot management cookie can be placed on end user devices accessing the site. Defaults to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/bot_management#bm_cookie_enabled BotManagement#bm_cookie_enabled}

---

##### `CfRobotsVariant`<sup>Optional</sup> <a name="CfRobotsVariant" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.cfRobotsVariant"></a>

```csharp
public string CfRobotsVariant { get; set; }
```

- *Type:* string

Specifies the Robots Access Control License variant to use. Available values: "off", "policy_only".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/bot_management#cf_robots_variant BotManagement#cf_robots_variant}

---

##### `ContentBotsProtection`<sup>Optional</sup> <a name="ContentBotsProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.contentBotsProtection"></a>

```csharp
public string ContentBotsProtection { get; set; }
```

- *Type:* string

Enable rule to block content bots.

When enabled, blocks automated traffic with low bot scores, excluding safe verified bot categories. Exceptions should be managed via skip rules.
Available values: "block", "disabled".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/bot_management#content_bots_protection BotManagement#content_bots_protection}

---

##### `CrawlerProtection`<sup>Optional</sup> <a name="CrawlerProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.crawlerProtection"></a>

```csharp
public string CrawlerProtection { get; set; }
```

- *Type:* string

Enable rule to punish AI Scrapers and Crawlers via a link maze. Available values: "enabled", "disabled".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/bot_management#crawler_protection BotManagement#crawler_protection}

---

##### `EnableJs`<sup>Optional</sup> <a name="EnableJs" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.enableJs"></a>

```csharp
public bool|IResolvable EnableJs { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Use lightweight, invisible JavaScript detections to improve Bot Management. [Learn more about JavaScript Detections](https://developers.cloudflare.com/bots/reference/javascript-detections/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/bot_management#enable_js BotManagement#enable_js}

---

##### `FightMode`<sup>Optional</sup> <a name="FightMode" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.fightMode"></a>

```csharp
public bool|IResolvable FightMode { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to enable Bot Fight Mode.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/bot_management#fight_mode BotManagement#fight_mode}

---

##### `IsRobotsTxtManaged`<sup>Optional</sup> <a name="IsRobotsTxtManaged" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.isRobotsTxtManaged"></a>

```csharp
public bool|IResolvable IsRobotsTxtManaged { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Enable cloudflare managed robots.txt. If an existing robots.txt is detected, then managed robots.txt will be prepended to the existing robots.txt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/bot_management#is_robots_txt_managed BotManagement#is_robots_txt_managed}

---

##### `OptimizeWordpress`<sup>Optional</sup> <a name="OptimizeWordpress" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.optimizeWordpress"></a>

```csharp
public bool|IResolvable OptimizeWordpress { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to optimize Super Bot Fight Mode protections for Wordpress.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/bot_management#optimize_wordpress BotManagement#optimize_wordpress}

---

##### `SbfmDefinitelyAutomated`<sup>Optional</sup> <a name="SbfmDefinitelyAutomated" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmDefinitelyAutomated"></a>

```csharp
public string SbfmDefinitelyAutomated { get; set; }
```

- *Type:* string

Super Bot Fight Mode (SBFM) action to take on definitely automated requests. Available values: "allow", "block", "managed_challenge".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/bot_management#sbfm_definitely_automated BotManagement#sbfm_definitely_automated}

---

##### `SbfmLikelyAutomated`<sup>Optional</sup> <a name="SbfmLikelyAutomated" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmLikelyAutomated"></a>

```csharp
public string SbfmLikelyAutomated { get; set; }
```

- *Type:* string

Super Bot Fight Mode (SBFM) action to take on likely automated requests. Available values: "allow", "block", "managed_challenge".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/bot_management#sbfm_likely_automated BotManagement#sbfm_likely_automated}

---

##### `SbfmStaticResourceProtection`<sup>Optional</sup> <a name="SbfmStaticResourceProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmStaticResourceProtection"></a>

```csharp
public bool|IResolvable SbfmStaticResourceProtection { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Super Bot Fight Mode (SBFM) to enable static resource protection.

Enable if static resources on your application need bot protection.
Note: Static resource protection can also result in legitimate traffic being blocked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/bot_management#sbfm_static_resource_protection BotManagement#sbfm_static_resource_protection}

---

##### `SbfmVerifiedBots`<sup>Optional</sup> <a name="SbfmVerifiedBots" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.sbfmVerifiedBots"></a>

```csharp
public string SbfmVerifiedBots { get; set; }
```

- *Type:* string

Super Bot Fight Mode (SBFM) action to take on verified bots requests. Available values: "allow", "block".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/bot_management#sbfm_verified_bots BotManagement#sbfm_verified_bots}

---

##### `SuppressSessionScore`<sup>Optional</sup> <a name="SuppressSessionScore" id="@cdktn/provider-cloudflare.botManagement.BotManagementConfig.property.suppressSessionScore"></a>

```csharp
public bool|IResolvable SuppressSessionScore { get; set; }
```

- *Type:* bool|Io.Cdktn.IResolvable

Whether to disable tracking the highest bot score for a session in the Bot Management cookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.20.0/docs/resources/bot_management#suppress_session_score BotManagement#suppress_session_score}

---

### BotManagementStaleZoneConfiguration <a name="BotManagementStaleZoneConfiguration" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfiguration.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new BotManagementStaleZoneConfiguration {

};
```


## Classes <a name="Classes" id="Classes"></a>

### BotManagementStaleZoneConfigurationOutputReference <a name="BotManagementStaleZoneConfigurationOutputReference" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new BotManagementStaleZoneConfigurationOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.fightMode">FightMode</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.optimizeWordpress">OptimizeWordpress</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmDefinitelyAutomated">SbfmDefinitelyAutomated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmLikelyAutomated">SbfmLikelyAutomated</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmStaticResourceProtection">SbfmStaticResourceProtection</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmVerifiedBots">SbfmVerifiedBots</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.suppressSessionScore">SuppressSessionScore</a></code> | <code>Io.Cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfiguration">BotManagementStaleZoneConfiguration</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FightMode`<sup>Required</sup> <a name="FightMode" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.fightMode"></a>

```csharp
public IResolvable FightMode { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `OptimizeWordpress`<sup>Required</sup> <a name="OptimizeWordpress" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.optimizeWordpress"></a>

```csharp
public IResolvable OptimizeWordpress { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `SbfmDefinitelyAutomated`<sup>Required</sup> <a name="SbfmDefinitelyAutomated" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmDefinitelyAutomated"></a>

```csharp
public string SbfmDefinitelyAutomated { get; }
```

- *Type:* string

---

##### `SbfmLikelyAutomated`<sup>Required</sup> <a name="SbfmLikelyAutomated" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmLikelyAutomated"></a>

```csharp
public string SbfmLikelyAutomated { get; }
```

- *Type:* string

---

##### `SbfmStaticResourceProtection`<sup>Required</sup> <a name="SbfmStaticResourceProtection" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmStaticResourceProtection"></a>

```csharp
public string SbfmStaticResourceProtection { get; }
```

- *Type:* string

---

##### `SbfmVerifiedBots`<sup>Required</sup> <a name="SbfmVerifiedBots" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.sbfmVerifiedBots"></a>

```csharp
public string SbfmVerifiedBots { get; }
```

- *Type:* string

---

##### `SuppressSessionScore`<sup>Required</sup> <a name="SuppressSessionScore" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.suppressSessionScore"></a>

```csharp
public IResolvable SuppressSessionScore { get; }
```

- *Type:* Io.Cdktn.IResolvable

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfigurationOutputReference.property.internalValue"></a>

```csharp
public BotManagementStaleZoneConfiguration InternalValue { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.botManagement.BotManagementStaleZoneConfiguration">BotManagementStaleZoneConfiguration</a>

---



