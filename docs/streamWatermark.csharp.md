# `streamWatermark` Submodule <a name="`streamWatermark` Submodule" id="@cdktn/provider-cloudflare.streamWatermark"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### StreamWatermarkA <a name="StreamWatermarkA" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA"></a>

Represents a {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/stream_watermark cloudflare_stream_watermark}.

#### Initializers <a name="Initializers" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new StreamWatermarkA(Construct Scope, string Id, StreamWatermarkAConfig Config);
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.scope">Scope</a></code> | <code>Constructs.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.id">Id</a></code> | <code>string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.config">Config</a></code> | <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig">StreamWatermarkAConfig</a></code> | *No description.* |

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.id"></a>

- *Type:* string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `Config`<sup>Required</sup> <a name="Config" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig">StreamWatermarkAConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.resetIdentifier">ResetIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.resetOpacity">ResetOpacity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.resetPadding">ResetPadding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.resetPosition">ResetPosition</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.resetScale">ResetScale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.resetUrl">ResetUrl</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.toString"></a>

```csharp
private string ToString()
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.with"></a>

```csharp
private IConstruct With(params IMixin[] Mixins)
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `Mixins`<sup>Required</sup> <a name="Mixins" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.with.parameter.mixins"></a>

- *Type:* params Constructs.IMixin[]

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.addOverride"></a>

```csharp
private void AddOverride(string Path, object Value)
```

###### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.addOverride.parameter.path"></a>

- *Type:* string

---

###### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.addOverride.parameter.value"></a>

- *Type:* object

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.overrideLogicalId"></a>

```csharp
private void OverrideLogicalId(string NewLogicalId)
```

Overrides the auto-generated logical ID with a specific ID.

###### `NewLogicalId`<sup>Required</sup> <a name="NewLogicalId" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.resetOverrideLogicalId"></a>

```csharp
private void ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.toHclTerraform"></a>

```csharp
private object ToHclTerraform()
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.toMetadata"></a>

```csharp
private object ToMetadata()
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.toTerraform"></a>

```csharp
private object ToTerraform()
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.addMoveTarget"></a>

```csharp
private void AddMoveTarget(string MoveTarget)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.addMoveTarget.parameter.moveTarget"></a>

- *Type:* string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.getAnyMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, object> GetAnyMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.getBooleanAttribute"></a>

```csharp
private IResolvable GetBooleanAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.getBooleanMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, bool> GetBooleanMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.getListAttribute"></a>

```csharp
private string[] GetListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.getNumberAttribute"></a>

```csharp
private double GetNumberAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.getNumberListAttribute"></a>

```csharp
private double[] GetNumberListAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.getNumberMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, double> GetNumberMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.getStringAttribute"></a>

```csharp
private string GetStringAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.getStringMapAttribute"></a>

```csharp
private System.Collections.Generic.IDictionary<string, string> GetStringMapAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.hasResourceMove"></a>

```csharp
private TerraformResourceMoveByTarget|TerraformResourceMoveById HasResourceMove()
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.importFrom"></a>

```csharp
private void ImportFrom(string Id, TerraformProvider Provider = null)
```

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.importFrom.parameter.id"></a>

- *Type:* string

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.importFrom.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.interpolationForAttribute"></a>

```csharp
private IResolvable InterpolationForAttribute(string TerraformAttribute)
```

###### `TerraformAttribute`<sup>Required</sup> <a name="TerraformAttribute" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.moveFromId"></a>

```csharp
private void MoveFromId(string Id)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using it's instance function.

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.moveFromId.parameter.id"></a>

- *Type:* string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.moveTo"></a>

```csharp
private void MoveTo(string MoveTarget, string|double Index = null)
```

Moves this resource to the target resource given by moveTarget.

###### `MoveTarget`<sup>Required</sup> <a name="MoveTarget" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.moveTo.parameter.moveTarget"></a>

- *Type:* string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `Index`<sup>Optional</sup> <a name="Index" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.moveTo.parameter.index"></a>

- *Type:* string|double

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.moveToId"></a>

```csharp
private void MoveToId(string Id)
```

Moves this resource to the resource corresponding to "id".

###### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.moveToId.parameter.id"></a>

- *Type:* string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetIdentifier` <a name="ResetIdentifier" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.resetIdentifier"></a>

```csharp
private void ResetIdentifier()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.resetName"></a>

```csharp
private void ResetName()
```

##### `ResetOpacity` <a name="ResetOpacity" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.resetOpacity"></a>

```csharp
private void ResetOpacity()
```

##### `ResetPadding` <a name="ResetPadding" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.resetPadding"></a>

```csharp
private void ResetPadding()
```

##### `ResetPosition` <a name="ResetPosition" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.resetPosition"></a>

```csharp
private void ResetPosition()
```

##### `ResetScale` <a name="ResetScale" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.resetScale"></a>

```csharp
private void ResetScale()
```

##### `ResetUrl` <a name="ResetUrl" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.resetUrl"></a>

```csharp
private void ResetUrl()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a StreamWatermarkA resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.isConstruct"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

StreamWatermarkA.IsConstruct(object X);
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

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.isConstruct.parameter.x"></a>

- *Type:* object

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.isTerraformElement"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

StreamWatermarkA.IsTerraformElement(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.isTerraformElement.parameter.x"></a>

- *Type:* object

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.isTerraformResource"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

StreamWatermarkA.IsTerraformResource(object X);
```

###### `X`<sup>Required</sup> <a name="X" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.isTerraformResource.parameter.x"></a>

- *Type:* object

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.generateConfigForImport"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

StreamWatermarkA.GenerateConfigForImport(Construct Scope, string ImportToId, string ImportFromId, TerraformProvider Provider = null);
```

Generates CDKTN code for importing a StreamWatermarkA resource upon running "cdktn plan <stack-name>".

###### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.generateConfigForImport.parameter.scope"></a>

- *Type:* Constructs.Construct

The scope in which to define this construct.

---

###### `ImportToId`<sup>Required</sup> <a name="ImportToId" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.generateConfigForImport.parameter.importToId"></a>

- *Type:* string

The construct id used in the generated config for the StreamWatermarkA to import.

---

###### `ImportFromId`<sup>Required</sup> <a name="ImportFromId" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.generateConfigForImport.parameter.importFromId"></a>

- *Type:* string

The id of the existing StreamWatermarkA that should be imported.

Refer to the {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/stream_watermark#import import section} in the documentation of this resource for the id to use

---

###### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.generateConfigForImport.parameter.provider"></a>

- *Type:* Io.Cdktn.TerraformProvider

? Optional instance of the provider where the StreamWatermarkA to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.node">Node</a></code> | <code>Constructs.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.cdktfStack">CdktfStack</a></code> | <code>Io.Cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.fqn">Fqn</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>System.Collections.Generic.IDictionary<string, object></code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.terraformResourceType">TerraformResourceType</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>Io.Cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.dependsOn">DependsOn</a></code> | <code>string[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.created">Created</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.downloadedFrom">DownloadedFrom</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.height">Height</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.size">Size</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.uid">Uid</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.width">Width</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.accountIdInput">AccountIdInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.identifierInput">IdentifierInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.nameInput">NameInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.opacityInput">OpacityInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.paddingInput">PaddingInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.positionInput">PositionInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.scaleInput">ScaleInput</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.urlInput">UrlInput</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.accountId">AccountId</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.identifier">Identifier</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.name">Name</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.opacity">Opacity</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.padding">Padding</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.position">Position</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.scale">Scale</a></code> | <code>double</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.url">Url</a></code> | <code>string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.node"></a>

```csharp
public Node Node { get; }
```

- *Type:* Constructs.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.cdktfStack"></a>

```csharp
public TerraformStack CdktfStack { get; }
```

- *Type:* Io.Cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.fqn"></a>

```csharp
public string Fqn { get; }
```

- *Type:* string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.friendlyUniqueId"></a>

```csharp
public string FriendlyUniqueId { get; }
```

- *Type:* string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.terraformMetaArguments"></a>

```csharp
public System.Collections.Generic.IDictionary<string, object> TerraformMetaArguments { get; }
```

- *Type:* System.Collections.Generic.IDictionary<string, object>

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.terraformResourceType"></a>

```csharp
public string TerraformResourceType { get; }
```

- *Type:* string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.terraformGeneratorMetadata"></a>

```csharp
public TerraformProviderGeneratorMetadata TerraformGeneratorMetadata { get; }
```

- *Type:* Io.Cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.count"></a>

```csharp
public double|TerraformCount Count { get; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.dependsOn"></a>

```csharp
public string[] DependsOn { get; }
```

- *Type:* string[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.provider"></a>

```csharp
public TerraformProvider Provider { get; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `Created`<sup>Required</sup> <a name="Created" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.created"></a>

```csharp
public string Created { get; }
```

- *Type:* string

---

##### `DownloadedFrom`<sup>Required</sup> <a name="DownloadedFrom" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.downloadedFrom"></a>

```csharp
public string DownloadedFrom { get; }
```

- *Type:* string

---

##### `Height`<sup>Required</sup> <a name="Height" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.height"></a>

```csharp
public double Height { get; }
```

- *Type:* double

---

##### `Size`<sup>Required</sup> <a name="Size" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.size"></a>

```csharp
public double Size { get; }
```

- *Type:* double

---

##### `Uid`<sup>Required</sup> <a name="Uid" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.uid"></a>

```csharp
public string Uid { get; }
```

- *Type:* string

---

##### `Width`<sup>Required</sup> <a name="Width" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.width"></a>

```csharp
public double Width { get; }
```

- *Type:* double

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.accountIdInput"></a>

```csharp
public string AccountIdInput { get; }
```

- *Type:* string

---

##### `IdentifierInput`<sup>Optional</sup> <a name="IdentifierInput" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.identifierInput"></a>

```csharp
public string IdentifierInput { get; }
```

- *Type:* string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.nameInput"></a>

```csharp
public string NameInput { get; }
```

- *Type:* string

---

##### `OpacityInput`<sup>Optional</sup> <a name="OpacityInput" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.opacityInput"></a>

```csharp
public double OpacityInput { get; }
```

- *Type:* double

---

##### `PaddingInput`<sup>Optional</sup> <a name="PaddingInput" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.paddingInput"></a>

```csharp
public double PaddingInput { get; }
```

- *Type:* double

---

##### `PositionInput`<sup>Optional</sup> <a name="PositionInput" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.positionInput"></a>

```csharp
public string PositionInput { get; }
```

- *Type:* string

---

##### `ScaleInput`<sup>Optional</sup> <a name="ScaleInput" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.scaleInput"></a>

```csharp
public double ScaleInput { get; }
```

- *Type:* double

---

##### `UrlInput`<sup>Optional</sup> <a name="UrlInput" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.urlInput"></a>

```csharp
public string UrlInput { get; }
```

- *Type:* string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.accountId"></a>

```csharp
public string AccountId { get; }
```

- *Type:* string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.identifier"></a>

```csharp
public string Identifier { get; }
```

- *Type:* string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.name"></a>

```csharp
public string Name { get; }
```

- *Type:* string

---

##### `Opacity`<sup>Required</sup> <a name="Opacity" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.opacity"></a>

```csharp
public double Opacity { get; }
```

- *Type:* double

---

##### `Padding`<sup>Required</sup> <a name="Padding" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.padding"></a>

```csharp
public double Padding { get; }
```

- *Type:* double

---

##### `Position`<sup>Required</sup> <a name="Position" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.position"></a>

```csharp
public string Position { get; }
```

- *Type:* string

---

##### `Scale`<sup>Required</sup> <a name="Scale" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.scale"></a>

```csharp
public double Scale { get; }
```

- *Type:* double

---

##### `Url`<sup>Required</sup> <a name="Url" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.url"></a>

```csharp
public string Url { get; }
```

- *Type:* string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.tfResourceType">TfResourceType</a></code> | <code>string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkA.property.tfResourceType"></a>

```csharp
public string TfResourceType { get; }
```

- *Type:* string

---

## Structs <a name="Structs" id="Structs"></a>

### StreamWatermarkAConfig <a name="StreamWatermarkAConfig" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.Initializer"></a>

```csharp
using Io.Cdktn.Providers.Cloudflare;

new StreamWatermarkAConfig {
    SSHProvisionerConnection|WinrmProvisionerConnection Connection = null,
    double|TerraformCount Count = null,
    ITerraformDependable[] DependsOn = null,
    ITerraformIterator ForEach = null,
    TerraformResourceLifecycle Lifecycle = null,
    TerraformProvider Provider = null,
    (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners = null,
    string AccountId,
    string Identifier = null,
    string Name = null,
    double Opacity = null,
    double Padding = null,
    string Position = null,
    double Scale = null,
    string Url = null
};
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.connection">Connection</a></code> | <code>Io.Cdktn.SSHProvisionerConnection\|Io.Cdktn.WinrmProvisionerConnection</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.count">Count</a></code> | <code>double\|Io.Cdktn.TerraformCount</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.dependsOn">DependsOn</a></code> | <code>Io.Cdktn.ITerraformDependable[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.forEach">ForEach</a></code> | <code>Io.Cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.lifecycle">Lifecycle</a></code> | <code>Io.Cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.provider">Provider</a></code> | <code>Io.Cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.provisioners">Provisioners</a></code> | <code>Io.Cdktn.FileProvisioner\|Io.Cdktn.LocalExecProvisioner\|Io.Cdktn.RemoteExecProvisioner[]</code> | *No description.* |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.accountId">AccountId</a></code> | <code>string</code> | The account identifier tag. |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.identifier">Identifier</a></code> | <code>string</code> | The unique identifier for a watermark profile. |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.name">Name</a></code> | <code>string</code> | A short description of the watermark profile. |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.opacity">Opacity</a></code> | <code>double</code> | The translucency of the image. |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.padding">Padding</a></code> | <code>double</code> | The whitespace between the adjacent edges (determined by position) of the video and the image. |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.position">Position</a></code> | <code>string</code> | The location of the image. |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.scale">Scale</a></code> | <code>double</code> | The size of the image relative to the overall size of the video. |
| <code><a href="#@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.url">Url</a></code> | <code>string</code> | URL of the watermark image to copy. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.connection"></a>

```csharp
public SSHProvisionerConnection|WinrmProvisionerConnection Connection { get; set; }
```

- *Type:* Io.Cdktn.SSHProvisionerConnection|Io.Cdktn.WinrmProvisionerConnection

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.count"></a>

```csharp
public double|TerraformCount Count { get; set; }
```

- *Type:* double|Io.Cdktn.TerraformCount

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.dependsOn"></a>

```csharp
public ITerraformDependable[] DependsOn { get; set; }
```

- *Type:* Io.Cdktn.ITerraformDependable[]

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.forEach"></a>

```csharp
public ITerraformIterator ForEach { get; set; }
```

- *Type:* Io.Cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.lifecycle"></a>

```csharp
public TerraformResourceLifecycle Lifecycle { get; set; }
```

- *Type:* Io.Cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.provider"></a>

```csharp
public TerraformProvider Provider { get; set; }
```

- *Type:* Io.Cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.provisioners"></a>

```csharp
public (FileProvisioner|LocalExecProvisioner|RemoteExecProvisioner)[] Provisioners { get; set; }
```

- *Type:* Io.Cdktn.FileProvisioner|Io.Cdktn.LocalExecProvisioner|Io.Cdktn.RemoteExecProvisioner[]

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.accountId"></a>

```csharp
public string AccountId { get; set; }
```

- *Type:* string

The account identifier tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/stream_watermark#account_id StreamWatermarkA#account_id}

---

##### `Identifier`<sup>Optional</sup> <a name="Identifier" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.identifier"></a>

```csharp
public string Identifier { get; set; }
```

- *Type:* string

The unique identifier for a watermark profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/stream_watermark#identifier StreamWatermarkA#identifier}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.name"></a>

```csharp
public string Name { get; set; }
```

- *Type:* string

A short description of the watermark profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/stream_watermark#name StreamWatermarkA#name}

---

##### `Opacity`<sup>Optional</sup> <a name="Opacity" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.opacity"></a>

```csharp
public double Opacity { get; set; }
```

- *Type:* double

The translucency of the image.

A value of `0.0` makes the image completely transparent, and `1.0` makes the image completely opaque. Note that if the image is already semi-transparent, setting this to `1.0` will not make the image completely opaque.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/stream_watermark#opacity StreamWatermarkA#opacity}

---

##### `Padding`<sup>Optional</sup> <a name="Padding" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.padding"></a>

```csharp
public double Padding { get; set; }
```

- *Type:* double

The whitespace between the adjacent edges (determined by position) of the video and the image.

`0.0` indicates no padding, and `1.0` indicates a fully padded video width or length, as determined by the algorithm.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/stream_watermark#padding StreamWatermarkA#padding}

---

##### `Position`<sup>Optional</sup> <a name="Position" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.position"></a>

```csharp
public string Position { get; set; }
```

- *Type:* string

The location of the image.

Valid positions are: `upperRight`, `upperLeft`, `lowerLeft`, `lowerRight`, and `center`. Note that `center` ignores the `padding` parameter.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/stream_watermark#position StreamWatermarkA#position}

---

##### `Scale`<sup>Optional</sup> <a name="Scale" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.scale"></a>

```csharp
public double Scale { get; set; }
```

- *Type:* double

The size of the image relative to the overall size of the video.

This parameter will adapt to horizontal and vertical videos automatically. `0.0` indicates no scaling (use the size of the image as-is), and `1.0 `fills the entire video.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/stream_watermark#scale StreamWatermarkA#scale}

---

##### `Url`<sup>Optional</sup> <a name="Url" id="@cdktn/provider-cloudflare.streamWatermark.StreamWatermarkAConfig.property.url"></a>

```csharp
public string Url { get; set; }
```

- *Type:* string

URL of the watermark image to copy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/cloudflare/cloudflare/5.21.0/docs/resources/stream_watermark#url StreamWatermarkA#url}

---



