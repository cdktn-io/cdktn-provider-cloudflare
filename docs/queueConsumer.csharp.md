# `queueConsumer` Submodule <a name="`queueConsumer` Submodule" id="@cdktn/provider-cloudflare.queueConsumer"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### QueueConsumer <a name="QueueConsumer" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/queue_consumer cloudflare_queue_consumer}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new QueueConsumer(Construct Scope, string Id, QueueConsumerConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerConfig">QueueConsumerConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerConfig">QueueConsumerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.putSettings">PutSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.resetDeadLetterQueue">ResetDeadLetterQueue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.resetScriptName">ResetScriptName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.resetSettings">ResetSettings</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSettings` <a name="PutSettings" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.putSettings"></a>

```csharp
private void PutSettings(QueueConsumerSettings Value)
```

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.putSettings.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettings">QueueConsumerSettings</a>

---

##### `ResetDeadLetterQueue` <a name="ResetDeadLetterQueue" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.resetDeadLetterQueue"></a>

```csharp
private void ResetDeadLetterQueue()
```

##### `ResetScriptName` <a name="ResetScriptName" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.resetScriptName"></a>

```csharp
private void ResetScriptName()
```

##### `ResetSettings` <a name="ResetSettings" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.resetSettings"></a>

```csharp
private void ResetSettings()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a QueueConsumer resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

QueueConsumer.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

QueueConsumer.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

QueueConsumer.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

QueueConsumer.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a QueueConsumer resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the QueueConsumer to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing QueueConsumer that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/queue_consumer#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the QueueConsumer to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.consumerId">ConsumerId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.createdOn">CreatedOn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.queueName">QueueName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference">QueueConsumerSettingsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.deadLetterQueueInput">DeadLetterQueueInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.queueIdInput">QueueIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.scriptNameInput">ScriptNameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.settingsInput">SettingsInput</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettings">QueueConsumerSettings</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.typeInput">TypeInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.deadLetterQueue">DeadLetterQueue</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.queueId">QueueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.scriptName">ScriptName</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.type">Type</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `ConsumerId`<sup>Required</sup> <a name="ConsumerId" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.consumerId"></a>

```csharp
public string ConsumerId { get; }
```

- *Type:* string

---

##### `CreatedOn`<sup>Required</sup> <a name="CreatedOn" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.createdOn"></a>

```csharp
public string CreatedOn { get; }
```

- *Type:* string

---

##### `QueueName`<sup>Required</sup> <a name="QueueName" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.queueName"></a>

```csharp
public string QueueName { get; }
```

- *Type:* string

---

##### `Settings`<sup>Required</sup> <a name="Settings" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.settings"></a>

```csharp
public QueueConsumerSettingsOutputReference Settings { get; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference">QueueConsumerSettingsOutputReference</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `DeadLetterQueueInput`<sup>Optional</sup> <a name="DeadLetterQueueInput" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.deadLetterQueueInput"></a>

```csharp
public string DeadLetterQueueInput { get; }
```

- *Type:* string

---

##### `QueueIdInput`<sup>Optional</sup> <a name="QueueIdInput" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.queueIdInput"></a>

```csharp
public string QueueIdInput { get; }
```

- *Type:* string

---

##### `ScriptNameInput`<sup>Optional</sup> <a name="ScriptNameInput" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.scriptNameInput"></a>

```csharp
public string ScriptNameInput { get; }
```

- *Type:* string

---

##### `SettingsInput`<sup>Optional</sup> <a name="SettingsInput" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.settingsInput"></a>

```csharp
public IResolvable|QueueConsumerSettings SettingsInput { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettings">QueueConsumerSettings</a>

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.typeInput"></a>

```csharp
public string TypeInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `DeadLetterQueue`<sup>Required</sup> <a name="DeadLetterQueue" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.deadLetterQueue"></a>

```csharp
public string DeadLetterQueue { get; }
```

- *Type:* string

---

##### `QueueId`<sup>Required</sup> <a name="QueueId" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.queueId"></a>

```csharp
public string QueueId { get; }
```

- *Type:* string

---

##### `ScriptName`<sup>Required</sup> <a name="ScriptName" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.scriptName"></a>

```csharp
public string ScriptName { get; }
```

- *Type:* string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.type"></a>

```csharp
public string Type { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumer.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### QueueConsumerConfig <a name="QueueConsumerConfig" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new QueueConsumerConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string QueueId,
    string Type,
    string DeadLetterQueue = null,
    string ScriptName = null,
    QueueConsumerSettings Settings = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.accountId">AccountId</a></code> | <code>string</code> | A Resource identifier. |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.queueId">QueueId</a></code> | <code>string</code> | A Resource identifier. |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.type">Type</a></code> | <code>string</code> | Available values: "worker", "http_pull". |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.deadLetterQueue">DeadLetterQueue</a></code> | <code>string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/queue_consumer#dead_letter_queue QueueConsumer#dead_letter_queue}. |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.scriptName">ScriptName</a></code> | <code>string</code> | Name of a Worker. |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.settings">Settings</a></code> | <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettings">QueueConsumerSettings</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/queue_consumer#settings QueueConsumer#settings}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

A Resource identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/queue_consumer#account_id QueueConsumer#account_id}

---

##### `QueueId`<sup>Required</sup> <a name="QueueId" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.queueId"></a>

```csharp
public string QueueId { get; set; }
```

- *Type:* string

A Resource identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/queue_consumer#queue_id QueueConsumer#queue_id}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.type"></a>

```csharp
public string Type { get; set; }
```

- *Type:* string

Available values: "worker", "http_pull".

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/queue_consumer#type QueueConsumer#type}

---

##### `DeadLetterQueue`<sup>Optional</sup> <a name="DeadLetterQueue" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.deadLetterQueue"></a>

```csharp
public string DeadLetterQueue { get; set; }
```

- *Type:* string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/queue_consumer#dead_letter_queue QueueConsumer#dead_letter_queue}.

---

##### `ScriptName`<sup>Optional</sup> <a name="ScriptName" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.scriptName"></a>

```csharp
public string ScriptName { get; set; }
```

- *Type:* string

Name of a Worker.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/queue_consumer#script_name QueueConsumer#script_name}

---

##### `Settings`<sup>Optional</sup> <a name="Settings" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerConfig.property.settings"></a>

```csharp
public QueueConsumerSettings Settings { get; set; }
```

- *Type:* <a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettings">QueueConsumerSettings</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/queue_consumer#settings QueueConsumer#settings}.

---

### QueueConsumerSettings <a name="QueueConsumerSettings" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettings"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettings.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new QueueConsumerSettings {
    double BatchSize = null,
    double MaxConcurrency = null,
    double MaxRetries = null,
    double MaxWaitTimeMs = null,
    double RetryDelay = null,
    double VisibilityTimeoutMs = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.batchSize">BatchSize</a></code> | <code>double</code> | The maximum number of messages to include in a batch. |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.maxConcurrency">MaxConcurrency</a></code> | <code>double</code> | Maximum number of concurrent consumers that may consume from this Queue. |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.maxRetries">MaxRetries</a></code> | <code>double</code> | The maximum number of retries. |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.maxWaitTimeMs">MaxWaitTimeMs</a></code> | <code>double</code> | The number of milliseconds to wait for a batch to fill up before attempting to deliver it. |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.retryDelay">RetryDelay</a></code> | <code>double</code> | The number of seconds to delay before making the message available for another attempt. |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.visibilityTimeoutMs">VisibilityTimeoutMs</a></code> | <code>double</code> | The number of milliseconds that a message is exclusively leased. |

---

##### `BatchSize`<sup>Optional</sup> <a name="BatchSize" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.batchSize"></a>

```csharp
public double BatchSize { get; set; }
```

- *Type:* double

The maximum number of messages to include in a batch.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/queue_consumer#batch_size QueueConsumer#batch_size}

---

##### `MaxConcurrency`<sup>Optional</sup> <a name="MaxConcurrency" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.maxConcurrency"></a>

```csharp
public double MaxConcurrency { get; set; }
```

- *Type:* double

Maximum number of concurrent consumers that may consume from this Queue.

Set to `null` to automatically opt in to the platform's maximum (recommended).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/queue_consumer#max_concurrency QueueConsumer#max_concurrency}

---

##### `MaxRetries`<sup>Optional</sup> <a name="MaxRetries" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.maxRetries"></a>

```csharp
public double MaxRetries { get; set; }
```

- *Type:* double

The maximum number of retries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/queue_consumer#max_retries QueueConsumer#max_retries}

---

##### `MaxWaitTimeMs`<sup>Optional</sup> <a name="MaxWaitTimeMs" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.maxWaitTimeMs"></a>

```csharp
public double MaxWaitTimeMs { get; set; }
```

- *Type:* double

The number of milliseconds to wait for a batch to fill up before attempting to deliver it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/queue_consumer#max_wait_time_ms QueueConsumer#max_wait_time_ms}

---

##### `RetryDelay`<sup>Optional</sup> <a name="RetryDelay" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.retryDelay"></a>

```csharp
public double RetryDelay { get; set; }
```

- *Type:* double

The number of seconds to delay before making the message available for another attempt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/queue_consumer#retry_delay QueueConsumer#retry_delay}

---

##### `VisibilityTimeoutMs`<sup>Optional</sup> <a name="VisibilityTimeoutMs" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettings.property.visibilityTimeoutMs"></a>

```csharp
public double VisibilityTimeoutMs { get; set; }
```

- *Type:* double

The number of milliseconds that a message is exclusively leased.

After the timeout, the message becomes available for another attempt.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/queue_consumer#visibility_timeout_ms QueueConsumer#visibility_timeout_ms}

---

## Classes <a name="Classes" id="Classes"></a>

### QueueConsumerSettingsOutputReference <a name="QueueConsumerSettingsOutputReference" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new QueueConsumerSettingsOutputReference(IInterpolatingParent TerraformResource, string TerraformAttribute);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.Initializer.parameter.terraformResource">TerraformResource</a></code> | <code>Io.Cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.Initializer.parameter.terraformAttribute">TerraformAttribute</a></code> | <code>string</code> | The attribute on the parent resource this class is referencing. |

---

##### `TerraformResource`<sup>Required</sup> <a name="TerraformResource" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* Io.Cdktn.IInterpolatingParent

The parent resource.

---

##### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetBatchSize">ResetBatchSize</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetMaxConcurrency">ResetMaxConcurrency</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetMaxRetries">ResetMaxRetries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetMaxWaitTimeMs">ResetMaxWaitTimeMs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetRetryDelay">ResetRetryDelay</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetVisibilityTimeoutMs">ResetVisibilityTimeoutMs</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.computeFqn"></a>

```csharp
private string ComputeFqn()
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string Property)
```

###### `Property`<sup>Required</sup> <a name="Property" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resolve"></a>

```csharp
private object Resolve(IResolveContext Context)
```

Produce the Token's value at resolution time.

###### `Context`<sup>Required</sup> <a name="Context" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resolve.parameter._context"></a>

- *Type:* Io.Cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.toString"></a>

```csharp
private string ToString()
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBatchSize` <a name="ResetBatchSize" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetBatchSize"></a>

```csharp
private void ResetBatchSize()
```

##### `ResetMaxConcurrency` <a name="ResetMaxConcurrency" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetMaxConcurrency"></a>

```csharp
private void ResetMaxConcurrency()
```

##### `ResetMaxRetries` <a name="ResetMaxRetries" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetMaxRetries"></a>

```csharp
private void ResetMaxRetries()
```

##### `ResetMaxWaitTimeMs` <a name="ResetMaxWaitTimeMs" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetMaxWaitTimeMs"></a>

```csharp
private void ResetMaxWaitTimeMs()
```

##### `ResetRetryDelay` <a name="ResetRetryDelay" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetRetryDelay"></a>

```csharp
private void ResetRetryDelay()
```

##### `ResetVisibilityTimeoutMs` <a name="ResetVisibilityTimeoutMs" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.resetVisibilityTimeoutMs"></a>

```csharp
private void ResetVisibilityTimeoutMs()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.creationStack">CreationStack</a></code> | <code>string[]</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.batchSizeInput">BatchSizeInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxConcurrencyInput">MaxConcurrencyInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxRetriesInput">MaxRetriesInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxWaitTimeMsInput">MaxWaitTimeMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.retryDelayInput">RetryDelayInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.visibilityTimeoutMsInput">VisibilityTimeoutMsInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.batchSize">BatchSize</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxConcurrency">MaxConcurrency</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxRetries">MaxRetries</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxWaitTimeMs">MaxWaitTimeMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.retryDelay">RetryDelay</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.visibilityTimeoutMs">VisibilityTimeoutMs</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.internalValue">InternalValue</a></code> | <code>Io.Cdktn.IResolvable\|<a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettings">QueueConsumerSettings</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.creationStack"></a>

```csharp
public string[] CreationStack { get; }
```

- *Type:* string[]

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `BatchSizeInput`<sup>Optional</sup> <a name="BatchSizeInput" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.batchSizeInput"></a>

```csharp
public double BatchSizeInput { get; }
```

- *Type:* double

---

##### `MaxConcurrencyInput`<sup>Optional</sup> <a name="MaxConcurrencyInput" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxConcurrencyInput"></a>

```csharp
public double MaxConcurrencyInput { get; }
```

- *Type:* double

---

##### `MaxRetriesInput`<sup>Optional</sup> <a name="MaxRetriesInput" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxRetriesInput"></a>

```csharp
public double MaxRetriesInput { get; }
```

- *Type:* double

---

##### `MaxWaitTimeMsInput`<sup>Optional</sup> <a name="MaxWaitTimeMsInput" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxWaitTimeMsInput"></a>

```csharp
public double MaxWaitTimeMsInput { get; }
```

- *Type:* double

---

##### `RetryDelayInput`<sup>Optional</sup> <a name="RetryDelayInput" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.retryDelayInput"></a>

```csharp
public double RetryDelayInput { get; }
```

- *Type:* double

---

##### `VisibilityTimeoutMsInput`<sup>Optional</sup> <a name="VisibilityTimeoutMsInput" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.visibilityTimeoutMsInput"></a>

```csharp
public double VisibilityTimeoutMsInput { get; }
```

- *Type:* double

---

##### `BatchSize`<sup>Required</sup> <a name="BatchSize" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.batchSize"></a>

```csharp
public double BatchSize { get; }
```

- *Type:* double

---

##### `MaxConcurrency`<sup>Required</sup> <a name="MaxConcurrency" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxConcurrency"></a>

```csharp
public double MaxConcurrency { get; }
```

- *Type:* double

---

##### `MaxRetries`<sup>Required</sup> <a name="MaxRetries" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxRetries"></a>

```csharp
public double MaxRetries { get; }
```

- *Type:* double

---

##### `MaxWaitTimeMs`<sup>Required</sup> <a name="MaxWaitTimeMs" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.maxWaitTimeMs"></a>

```csharp
public double MaxWaitTimeMs { get; }
```

- *Type:* double

---

##### `RetryDelay`<sup>Required</sup> <a name="RetryDelay" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.retryDelay"></a>

```csharp
public double RetryDelay { get; }
```

- *Type:* double

---

##### `VisibilityTimeoutMs`<sup>Required</sup> <a name="VisibilityTimeoutMs" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.visibilityTimeoutMs"></a>

```csharp
public double VisibilityTimeoutMs { get; }
```

- *Type:* double

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettingsOutputReference.property.internalValue"></a>

```csharp
public IResolvable|QueueConsumerSettings InternalValue { get; }
```

- *Type:* Io.Cdktn.IResolvable|<a href="#@cdktn/provider-cloudflare.queueConsumer.QueueConsumerSettings">QueueConsumerSettings</a>

---



